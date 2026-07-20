import "server-only";
import { createConnection, type Socket as NetSocket } from "node:net";
import { connect as connectTls, type TLSSocket } from "node:tls";

type SmtpMessage = {
  host: string;
  port: number;
  username: string;
  password: string;
  fromEmail: string;
  fromName: string;
  to: string;
  replyTo: string;
  subject: string;
  text: string;
  html: string;
};

type SmtpResponse = {
  code: number;
  message: string;
};

const encoder = new TextEncoder();

const cleanHeader = (value: string) => value.replace(/[\r\n]+/g, " ").trim();

const encodeBase64 = (value: string) => {
  const bytes = encoder.encode(value);
  let binary = "";
  for (let offset = 0; offset < bytes.length; offset += 0x8000) {
    binary += String.fromCharCode(...bytes.subarray(offset, offset + 0x8000));
  }
  return btoa(binary);
};

const wrapBase64 = (value: string) => encodeBase64(value).match(/.{1,76}/g)?.join("\r\n") ?? "";

const dotStuff = (value: string) =>
  value
    .replace(/\r?\n/g, "\r\n")
    .split("\r\n")
    .map((line) => (line.startsWith(".") ? `.${line}` : line))
    .join("\r\n");

function createMimeMessage(message: SmtpMessage) {
  const boundary = `rn-${crypto.randomUUID()}`;
  const fromName = cleanHeader(message.fromName).replaceAll('"', "'");

  return [
    `Date: ${new Date().toUTCString()}`,
    `Message-ID: <${crypto.randomUUID()}@removalsnationwide.uk>`,
    `From: "${fromName}" <${cleanHeader(message.fromEmail)}>`,
    `To: <${cleanHeader(message.to)}>`,
    `Reply-To: <${cleanHeader(message.replyTo)}>`,
    `Subject: ${cleanHeader(message.subject)}`,
    "MIME-Version: 1.0",
    `Content-Type: multipart/alternative; boundary="${boundary}"`,
    "",
    `--${boundary}`,
    'Content-Type: text/plain; charset="UTF-8"',
    "Content-Transfer-Encoding: base64",
    "",
    wrapBase64(message.text),
    `--${boundary}`,
    'Content-Type: text/html; charset="UTF-8"',
    "Content-Transfer-Encoding: base64",
    "",
    wrapBase64(message.html),
    `--${boundary}--`,
    "",
  ].join("\r\n");
}

class SmtpConnection {
  private lines: string[] = [];
  private waiters: Array<{
    resolve: (line: string) => void;
    reject: (error: Error) => void;
  }> = [];
  private buffer = "";
  private decoder = new TextDecoder();
  private terminalError: Error | null = null;

  constructor(private socket: NetSocket | TLSSocket) {
    this.attach();
  }

  async command(command: string, expectedCodes: number[]) {
    await this.write(`${command}\r\n`);
    return this.expect(expectedCodes);
  }

  async writeData(data: string, expectedCodes: number[]) {
    await this.write(`${dotStuff(data)}\r\n.\r\n`);
    return this.expect(expectedCodes);
  }

  async expect(expectedCodes: number[]) {
    const response = await this.readResponse();
    if (!expectedCodes.includes(response.code)) {
      throw new Error(`SMTP server returned ${response.code}: ${response.message}`);
    }
    return response;
  }

  async startTls(host: string) {
    this.detach();
    const secureSocket = connectTls({ socket: this.socket, servername: host });
    await new Promise<void>((resolve, reject) => {
      secureSocket.once("secureConnect", resolve);
      secureSocket.once("error", reject);
    });
    this.socket = secureSocket;
    this.lines = [];
    this.buffer = "";
    this.decoder = new TextDecoder();
    this.terminalError = null;
    this.attach();
  }

  async close() {
    this.detach();
    this.socket.destroy();
  }

  private readLine(): Promise<string> {
    const line = this.lines.shift();
    if (line !== undefined) return Promise.resolve(line);
    if (this.terminalError) return Promise.reject(this.terminalError);
    return new Promise((resolve, reject) => this.waiters.push({ resolve, reject }));
  }

  private async readResponse(): Promise<SmtpResponse> {
    const firstLine = await this.readLine();
    const match = /^(\d{3})([ -])(.*)$/.exec(firstLine);
    if (!match) throw new Error("SMTP server sent an invalid response.");

    const code = Number(match[1]);
    const lines = [match[3]];
    if (match[2] === "-") {
      while (true) {
        const line = await this.readLine();
        const continuation = /^(\d{3})([ -])(.*)$/.exec(line);
        if (!continuation) {
          lines.push(line);
          continue;
        }
        lines.push(continuation[3]);
        if (Number(continuation[1]) === code && continuation[2] === " ") break;
      }
    }

    return { code, message: lines.join(" ") };
  }

  private write(value: string) {
    return new Promise<void>((resolve, reject) => {
      this.socket.write(value, "utf8", (error) => (error ? reject(error) : resolve()));
    });
  }

  private attach() {
    this.socket.on("data", this.onData);
    this.socket.on("error", this.onError);
    this.socket.on("end", this.onEnd);
  }

  private detach() {
    this.socket.off("data", this.onData);
    this.socket.off("error", this.onError);
    this.socket.off("end", this.onEnd);
  }

  private onData = (chunk: Buffer) => {
    this.buffer += this.decoder.decode(chunk, { stream: true });
    let newline = this.buffer.indexOf("\r\n");
    while (newline >= 0) {
      const line = this.buffer.slice(0, newline);
      this.buffer = this.buffer.slice(newline + 2);
      const waiter = this.waiters.shift();
      if (waiter) waiter.resolve(line);
      else this.lines.push(line);
      newline = this.buffer.indexOf("\r\n");
    }
  };

  private onError = (error: Error) => {
    this.terminalError = error;
    for (const waiter of this.waiters.splice(0)) waiter.reject(error);
  };

  private onEnd = () => {
    const error = new Error("SMTP server closed the connection unexpectedly.");
    this.terminalError = error;
    for (const waiter of this.waiters.splice(0)) waiter.reject(error);
  };
}

class WorkerSmtpConnection {
  private reader: ReadableStreamDefaultReader<Uint8Array>;
  private writer: WritableStreamDefaultWriter<Uint8Array>;
  private lines: string[] = [];
  private buffer = "";
  private decoder = new TextDecoder();

  constructor(private socket: Socket) {
    this.reader = socket.readable.getReader();
    this.writer = socket.writable.getWriter();
  }

  async command(command: string, expectedCodes: number[]) {
    await this.writer.write(encoder.encode(`${command}\r\n`));
    return this.expect(expectedCodes);
  }

  async writeData(data: string, expectedCodes: number[]) {
    await this.writer.write(encoder.encode(`${dotStuff(data)}\r\n.\r\n`));
    return this.expect(expectedCodes);
  }

  async expect(expectedCodes: number[]) {
    const response = await this.readResponse();
    if (!expectedCodes.includes(response.code)) {
      throw new Error(`SMTP server returned ${response.code}: ${response.message}`);
    }
    return response;
  }

  async startTls(host: string) {
    this.reader.releaseLock();
    this.writer.releaseLock();
    this.socket = this.socket.startTls({ expectedServerHostname: host });
    await this.socket.opened;
    this.reader = this.socket.readable.getReader();
    this.writer = this.socket.writable.getWriter();
    this.lines = [];
    this.buffer = "";
    this.decoder = new TextDecoder();
  }

  async close() {
    this.reader.releaseLock();
    this.writer.releaseLock();
    await this.socket.close();
  }

  private async readLine(): Promise<string> {
    while (!this.lines.length) {
      const { done, value } = await this.reader.read();
      if (done) throw new Error("SMTP server closed the connection unexpectedly.");
      this.buffer += this.decoder.decode(value, { stream: true });
      let newline = this.buffer.indexOf("\r\n");
      while (newline >= 0) {
        this.lines.push(this.buffer.slice(0, newline));
        this.buffer = this.buffer.slice(newline + 2);
        newline = this.buffer.indexOf("\r\n");
      }
    }
    return this.lines.shift() as string;
  }

  private async readResponse(): Promise<SmtpResponse> {
    const firstLine = await this.readLine();
    const match = /^(\d{3})([ -])(.*)$/.exec(firstLine);
    if (!match) throw new Error("SMTP server sent an invalid response.");

    const code = Number(match[1]);
    const lines = [match[3]];
    if (match[2] === "-") {
      while (true) {
        const line = await this.readLine();
        const continuation = /^(\d{3})([ -])(.*)$/.exec(line);
        if (!continuation) {
          lines.push(line);
          continue;
        }
        lines.push(continuation[3]);
        if (Number(continuation[1]) === code && continuation[2] === " ") break;
      }
    }
    return { code, message: lines.join(" ") };
  }
}

async function sendWithWorkerSockets(
  message: SmtpMessage,
  connect: typeof import("cloudflare:sockets").connect,
) {
  const socket = connect(
    { hostname: message.host, port: message.port },
    { secureTransport: "starttls", allowHalfOpen: false },
  );
  await socket.opened;
  const smtp = new WorkerSmtpConnection(socket);

  try {
    await smtp.expect([220]);
    const hello = await smtp.command("EHLO removalsnationwide.uk", [250]);
    if (!hello.message.toUpperCase().includes("STARTTLS")) {
      throw new Error("SMTP server did not offer STARTTLS.");
    }

    await smtp.command("STARTTLS", [220]);
    await smtp.startTls(message.host);
    await smtp.command("EHLO removalsnationwide.uk", [250]);

    const credentials = encodeBase64(`\0${message.username}\0${message.password}`);
    const auth = await smtp.command(`AUTH PLAIN ${credentials}`, [235, 334]);
    if (auth.code === 334) await smtp.command(credentials, [235]);

    await smtp.command(`MAIL FROM:<${cleanHeader(message.fromEmail)}>`, [250]);
    await smtp.command(`RCPT TO:<${cleanHeader(message.to)}>`, [250, 251]);
    await smtp.command("DATA", [354]);
    await smtp.writeData(createMimeMessage(message), [250]);
    await smtp.command("QUIT", [221]);
  } finally {
    await smtp.close().catch(() => undefined);
  }
}

async function sendWithNodeSockets(message: SmtpMessage): Promise<void> {
  const socket = createConnection({ host: message.host, port: message.port });
  await new Promise<void>((resolve, reject) => {
    socket.once("connect", resolve);
    socket.once("error", reject);
  });
  const smtp = new SmtpConnection(socket);

  try {
    await smtp.expect([220]);
    const hello = await smtp.command("EHLO removalsnationwide.uk", [250]);
    if (!hello.message.toUpperCase().includes("STARTTLS")) {
      throw new Error("SMTP server did not offer STARTTLS.");
    }

    await smtp.command("STARTTLS", [220]);
    await smtp.startTls(message.host);
    await smtp.command("EHLO removalsnationwide.uk", [250]);

    const credentials = encodeBase64(`\0${message.username}\0${message.password}`);
    const auth = await smtp.command(`AUTH PLAIN ${credentials}`, [235, 334]);
    if (auth.code === 334) await smtp.command(credentials, [235]);

    await smtp.command(`MAIL FROM:<${cleanHeader(message.fromEmail)}>`, [250]);
    await smtp.command(`RCPT TO:<${cleanHeader(message.to)}>`, [250, 251]);
    await smtp.command("DATA", [354]);
    await smtp.writeData(createMimeMessage(message), [250]);
    await smtp.command("QUIT", [221]);
  } finally {
    await smtp.close().catch(() => undefined);
  }
}

export async function sendSmtpEmail(message: SmtpMessage): Promise<void> {
  try {
    const { connect } = await import("cloudflare:sockets");
    return await sendWithWorkerSockets(message, connect);
  } catch (error) {
    // `cloudflare:sockets` is unavailable under a plain local Node.js server.
    // Only fall back for that import/runtime mismatch; SMTP errors from the
    // Worker transport must be preserved rather than retried over Node sockets.
    if (
      error instanceof Error &&
      (error.message.includes("cloudflare:sockets") ||
        error.message.includes("Unsupported URL scheme") ||
        error.message.includes("Cannot find module"))
    ) {
      return sendWithNodeSockets(message);
    }
    throw error;
  }
}
