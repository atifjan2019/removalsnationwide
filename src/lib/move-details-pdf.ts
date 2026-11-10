// The move details as a PDF, for passing on to the people pricing or doing the
// move. It carries the whole move and the customer's answers, and nothing
// about who they are: no name, phone, email or booking id, and no business
// name. Only the file is named after the customer. No app imports, like the
// email templates, so it can be built and checked on its own.

import { PDFDocument, StandardFonts, rgb, type PDFFont } from "pdf-lib";

export type PdfRow = { label: string; value: string; list?: string[] };

const PAGE = { width: 595.28, height: 841.89 }; // A4
const MARGIN = 48;
const LABEL_WIDTH = 130;
const ACCENT = rgb(0.86, 0.15, 0.15);
const INK = rgb(0.067, 0.094, 0.153);
const GREY = rgb(0.42, 0.447, 0.502);
const RULE = rgb(0.898, 0.906, 0.922);

/**
 * The built-in PDF fonts only hold Western European characters, and drawing
 * anything else throws. A customer can type whatever they like, so characters
 * the font lacks (emoji, other scripts) become "?" instead of losing the PDF.
 */
function printable(font: PDFFont, text: string) {
  const known = new Set(font.getCharacterSet());
  return Array.from(String(text ?? "").replace(/\t/g, " "))
    .map((char) => (known.has(char.codePointAt(0) ?? 0) ? char : "?"))
    .join("");
}

/** One paragraph broken into lines that fit `width`, splitting a word only when it alone is too long. */
function wrap(font: PDFFont, size: number, text: string, width: number) {
  const lines: string[] = [];
  let line = "";
  for (const word of text.split(/ +/).filter(Boolean)) {
    let piece = word;
    while (font.widthOfTextAtSize(piece, size) > width) {
      if (line) {
        lines.push(line);
        line = "";
      }
      let cut = piece.length - 1;
      while (cut > 1 && font.widthOfTextAtSize(piece.slice(0, cut), size) > width) cut -= 1;
      lines.push(piece.slice(0, cut));
      piece = piece.slice(cut);
    }
    const joined = line ? `${line} ${piece}` : piece;
    if (font.widthOfTextAtSize(joined, size) > width) {
      lines.push(line);
      line = piece;
    } else {
      line = joined;
    }
  }
  if (line) lines.push(line);
  return lines.length ? lines : [""];
}

/**
 * A file name for the PDF: the customer's name, then the move date. Only
 * letters, digits and hyphens, so it saves and forwards on any phone.
 */
export function moveDetailsPdfName(fullName: string, moveDate: string) {
  const name = String(fullName || "")
    .normalize("NFKD")
    .replace(/[^A-Za-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 60);
  const day = /^\d{4}-\d{2}-\d{2}$/.test(moveDate) ? moveDate : "";
  return `${[name || "Move-details", day].filter(Boolean).join("-")}.pdf`;
}

/**
 * Build the PDF from rows the caller has already put into words: `move` is
 * the booking (type, addresses, date and so on), `answers` the customer's
 * move details. Rows with nothing to say are left out. Returns the bytes.
 */
export async function moveDetailsPdf(data: {
  move: PdfRow[];
  answers: PdfRow[];
  photos: number;
  otherFiles: number;
  resubmitted?: boolean;
}): Promise<Uint8Array> {
  const doc = await PDFDocument.create();
  const regular = await doc.embedFont(StandardFonts.Helvetica);
  const bold = await doc.embedFont(StandardFonts.HelveticaBold);
  doc.setTitle("Move details");

  let page = doc.addPage([PAGE.width, PAGE.height]);
  let y = PAGE.height - MARGIN;
  const contentWidth = PAGE.width - MARGIN * 2;

  const room = (needed: number) => {
    if (y - needed >= MARGIN) return;
    page = doc.addPage([PAGE.width, PAGE.height]);
    y = PAGE.height - MARGIN;
  };
  const text = (value: string, { x = MARGIN, font = regular, size = 11, color = INK } = {}) =>
    page.drawText(value, { x, y, font, size, color });

  const row = ({ label, value, list }: PdfRow) => {
    const size = 11;
    const leading = 15;
    const paragraphs = list?.length ? list : String(value).split(/\r?\n/);
    const lines = paragraphs.flatMap((paragraph) => wrap(regular, size, printable(regular, paragraph), contentWidth - LABEL_WIDTH));
    room(leading + 14);
    text(printable(bold, label), { font: bold, size: 10, color: GREY });
    for (const line of lines) {
      room(leading);
      text(line, { x: MARGIN + LABEL_WIDTH, size });
      y -= leading;
    }
    y -= 5;
    page.drawLine({ start: { x: MARGIN, y: y + 6 }, end: { x: MARGIN + contentWidth, y: y + 6 }, thickness: 0.5, color: RULE });
    y -= 8;
  };
  const section = (title: string) => {
    room(40);
    text(title, { font: bold, size: 13 });
    y -= 22;
  };
  const said = (rows: PdfRow[]) => rows.filter((item) => String(item.value ?? "").trim() !== "" || item.list?.length);

  y -= 20;
  text(data.resubmitted ? "Move details (updated)" : "Move details", { font: bold, size: 20 });
  y -= 12;
  page.drawRectangle({ x: MARGIN, y, width: contentWidth, height: 2.5, color: ACCENT });
  y -= 28;

  section("The move");
  said(data.move).forEach(row);

  y -= 10;
  section("The customer's answers");
  const answers = said(data.answers);
  if (answers.length) answers.forEach(row);
  else {
    text("Not filled in yet.", { size: 11, color: GREY });
    y -= 20;
  }

  const attached = [
    data.photos ? `${data.photos} ${data.photos === 1 ? "photo" : "photos"}` : "",
    data.otherFiles ? `${data.otherFiles} ${data.otherFiles === 1 ? "file" : "files"}` : "",
  ]
    .filter(Boolean)
    .join(" and ");
  y -= 6;
  room(20);
  text(attached ? `${attached} sent with these answers.` : "No photos or files sent with these answers.", { size: 10, color: GREY });

  return doc.save();
}
