"use client";

import { useMemo, useState } from "react";
import { createBooking, type BookingInput } from "@/app/(site)/bookservice/actions";

type Step = "type" | "bedrooms" | "from" | "to" | "date" | "contact" | "success";
type Errors = Partial<Record<keyof BookingInput | "submit", string>>;

const MOVE_TYPES = [
  { id: "house", label: "House move", detail: "A complete home relocation" },
  { id: "flat", label: "Flat or studio", detail: "Apartments, studios and bedsits" },
  { id: "office", label: "Office move", detail: "Commercial and workplace relocation" },
  { id: "items", label: "Single items", detail: "Furniture and marketplace collections" },
] as const;

const UK_POSTCODE_RE = /^[A-Z]{1,2}\d[A-Z\d]?\s*\d[A-Z]{2}$/i;
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const initialData: BookingInput = {
  moveType: "",
  bedrooms: 1,
  fromPostcode: "",
  toPostcode: "",
  moveDate: "",
  flexibleDates: false,
  fullName: "",
  phone: "",
  email: "",
  notes: "",
};

const inputClass =
  "w-full rounded-xl border border-black/15 bg-white px-4 py-3 text-base text-black outline-none transition placeholder:text-black/35 focus:border-brand-red focus:ring-2 focus:ring-brand-red/20";

function BackButton({ onClick }: { onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="min-h-11 rounded-xl px-4 text-sm font-semibold text-black/65 transition hover:bg-black/5 hover:text-black"
    >
      ← Back
    </button>
  );
}

function ContinueButton({ onClick, label = "Continue" }: { onClick: () => void; label?: string }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="min-h-11 rounded-xl bg-brand-red px-6 py-3 text-sm font-bold text-white transition hover:bg-black"
    >
      {label} →
    </button>
  );
}

export default function BookingFunnel() {
  const [data, setData] = useState<BookingInput>(initialData);
  const [step, setStep] = useState<Step>("type");
  const [errors, setErrors] = useState<Errors>({});
  const [submitting, setSubmitting] = useState(false);
  const [bookingId, setBookingId] = useState("");

  const needsBedrooms = data.moveType === "house" || data.moveType === "flat";
  const steps = useMemo<Step[]>(
    () => ["type", ...(needsBedrooms ? (["bedrooms"] as Step[]) : []), "from", "to", "date", "contact"],
    [needsBedrooms],
  );
  const stepIndex = Math.max(0, steps.indexOf(step));
  const progress = step === "success" ? 100 : Math.round(((stepIndex + 1) / steps.length) * 100);

  const update = <K extends keyof BookingInput>(key: K, value: BookingInput[K]) => {
    setData((current) => ({ ...current, [key]: value }));
    setErrors((current) => ({ ...current, [key]: undefined, submit: undefined }));
  };

  const go = (next: Step) => {
    setErrors({});
    setStep(next);
  };

  const validatePostcode = (key: "fromPostcode" | "toPostcode", next: Step) => {
    const value = data[key].trim().toUpperCase();
    if (!UK_POSTCODE_RE.test(value)) {
      setErrors({ [key]: "Enter a valid UK postcode, for example B15 3DH." });
      return;
    }
    update(key, value);
    go(next);
  };

  const submit = async () => {
    const nextErrors: Errors = {};
    if (data.fullName.trim().length < 2) nextErrors.fullName = "Enter your full name.";
    if (!EMAIL_RE.test(data.email.trim())) nextErrors.email = "Enter a valid email address.";
    if (data.phone.replace(/\D/g, "").length < 10) nextErrors.phone = "Enter a valid phone number.";
    if (Object.keys(nextErrors).length) {
      setErrors(nextErrors);
      return;
    }

    setSubmitting(true);
    const result = await createBooking(data);
    setSubmitting(false);
    if (!result.success) {
      setErrors({ submit: result.error });
      return;
    }
    setBookingId(result.bookingId);
    setStep("success");
  };

  const futureDates = useMemo(() => {
    return Array.from({ length: 14 }, (_, index) => {
      const date = new Date();
      date.setHours(12, 0, 0, 0);
      date.setDate(date.getDate() + index + 1);
      return date;
    });
  }, []);

  return (
    <section id="quick-quote" className="scroll-mt-28 bg-brand-grey py-16 sm:py-20">
      <div className="mx-auto max-w-3xl px-4">
        <div className="overflow-hidden rounded-3xl border border-black/10 bg-white shadow-xl">
          {step !== "success" && (
            <div className="border-b border-black/5 px-6 py-5 sm:px-8">
              <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-wider">
                <span className="text-black/55">Step {stepIndex + 1} of {steps.length}</span>
                <span className="text-brand-red">{progress}%</span>
              </div>
              <div className="mt-3 h-2 overflow-hidden rounded-full bg-black/10">
                <div
                  className="h-full rounded-full bg-brand-red transition-[width] duration-300"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>
          )}

          <div className="min-h-[430px] p-6 sm:p-10">
            {step === "type" && (
              <div>
                <h2 className="text-2xl font-bold text-black sm:text-3xl">What are you moving?</h2>
                <p className="mt-2 text-sm text-black/60">Choose the option that best matches your move.</p>
                <div className="mt-7 grid gap-3 sm:grid-cols-2">
                  {MOVE_TYPES.map((type) => {
                    const selected = data.moveType === type.id;
                    return (
                      <button
                        key={type.id}
                        type="button"
                        onClick={() => update("moveType", type.id)}
                        className={`rounded-2xl border-2 p-5 text-left transition ${
                          selected
                            ? "border-brand-red bg-brand-red/5 shadow-sm"
                            : "border-black/10 bg-white hover:border-brand-red/50"
                        }`}
                      >
                        <span className={`block font-bold ${selected ? "text-brand-red" : "text-black"}`}>
                          {type.label}
                        </span>
                        <span className="mt-1 block text-sm text-black/55">{type.detail}</span>
                      </button>
                    );
                  })}
                </div>
                {errors.moveType && <p className="mt-3 text-sm text-brand-red">{errors.moveType}</p>}
                <div className="mt-8 flex justify-end">
                  <ContinueButton
                    onClick={() => {
                      if (!data.moveType) {
                        setErrors({ moveType: "Please select a move type." });
                        return;
                      }
                      go(needsBedrooms ? "bedrooms" : "from");
                    }}
                  />
                </div>
              </div>
            )}

            {step === "bedrooms" && (
              <div>
                <h2 className="text-2xl font-bold text-black sm:text-3xl">How many bedrooms?</h2>
                <p className="mt-2 text-sm text-black/60">This helps us plan the vehicle and crew size.</p>
                <div className="mt-10 grid grid-cols-3 gap-3 sm:grid-cols-6">
                  {[0, 1, 2, 3, 4, 5].map((number) => (
                    <button
                      key={number}
                      type="button"
                      onClick={() => update("bedrooms", number)}
                      className={`min-h-16 rounded-xl border-2 font-bold transition ${
                        data.bedrooms === number
                          ? "border-brand-red bg-brand-red text-white"
                          : "border-black/10 text-black hover:border-brand-red"
                      }`}
                    >
                      {number === 0 ? "Studio" : `${number}${number === 5 ? "+" : ""}`}
                    </button>
                  ))}
                </div>
                <div className="mt-10 flex items-center justify-between">
                  <BackButton onClick={() => go("type")} />
                  <ContinueButton onClick={() => go("from")} />
                </div>
              </div>
            )}

            {step === "from" && (
              <div>
                <h2 className="text-2xl font-bold text-black sm:text-3xl">Where are you moving from?</h2>
                <p className="mt-2 text-sm text-black/60">Enter the collection postcode.</p>
                <input
                  autoFocus
                  value={data.fromPostcode}
                  onChange={(event) => update("fromPostcode", event.target.value.toUpperCase())}
                  onKeyDown={(event) => {
                    if (event.key === "Enter") validatePostcode("fromPostcode", "to");
                  }}
                  placeholder="e.g. B15 3DH"
                  className={`${inputClass} mt-8 text-lg uppercase`}
                />
                {errors.fromPostcode && <p className="mt-2 text-sm text-brand-red">{errors.fromPostcode}</p>}
                <div className="mt-8 flex items-center justify-between">
                  <BackButton onClick={() => go(needsBedrooms ? "bedrooms" : "type")} />
                  <ContinueButton onClick={() => validatePostcode("fromPostcode", "to")} />
                </div>
              </div>
            )}

            {step === "to" && (
              <div>
                <h2 className="text-2xl font-bold text-black sm:text-3xl">Where are you moving to?</h2>
                <p className="mt-2 text-sm text-black/60">Enter the destination postcode.</p>
                <input
                  autoFocus
                  value={data.toPostcode}
                  onChange={(event) => update("toPostcode", event.target.value.toUpperCase())}
                  onKeyDown={(event) => {
                    if (event.key === "Enter") validatePostcode("toPostcode", "date");
                  }}
                  placeholder="e.g. M1 1AE"
                  className={`${inputClass} mt-8 text-lg uppercase`}
                />
                {errors.toPostcode && <p className="mt-2 text-sm text-brand-red">{errors.toPostcode}</p>}
                <div className="mt-8 flex items-center justify-between">
                  <BackButton onClick={() => go("from")} />
                  <ContinueButton onClick={() => validatePostcode("toPostcode", "date")} />
                </div>
              </div>
            )}

            {step === "date" && (
              <div>
                <h2 className="text-2xl font-bold text-black sm:text-3xl">When would you like to move?</h2>
                <p className="mt-2 text-sm text-black/60">Select a preferred date or tell us you are flexible.</p>
                <div className="mt-7 grid grid-cols-4 gap-2 sm:grid-cols-7">
                  {futureDates.map((date) => {
                    const value = date.toISOString().slice(0, 10);
                    const selected = data.moveDate === value && !data.flexibleDates;
                    return (
                      <button
                        key={value}
                        type="button"
                        onClick={() => {
                          update("moveDate", value);
                          update("flexibleDates", false);
                        }}
                        className={`rounded-xl border-2 px-2 py-3 text-center transition ${
                          selected
                            ? "border-brand-red bg-brand-red text-white"
                            : "border-black/10 hover:border-brand-red"
                        }`}
                      >
                        <span className="block text-[10px] font-semibold uppercase">{date.toLocaleDateString("en-GB", { weekday: "short" })}</span>
                        <span className="mt-1 block text-lg font-bold">{date.getDate()}</span>
                        <span className="block text-[10px]">{date.toLocaleDateString("en-GB", { month: "short" })}</span>
                      </button>
                    );
                  })}
                </div>
                <label className="mt-5 flex cursor-pointer items-center gap-3 rounded-xl border border-black/10 p-4">
                  <input
                    type="checkbox"
                    checked={data.flexibleDates}
                    onChange={(event) => {
                      update("flexibleDates", event.target.checked);
                      if (event.target.checked) update("moveDate", "");
                    }}
                    className="h-5 w-5 accent-brand-red"
                  />
                  <span className="text-sm font-semibold text-black">My moving dates are flexible</span>
                </label>
                {errors.moveDate && <p className="mt-2 text-sm text-brand-red">{errors.moveDate}</p>}
                <div className="mt-8 flex items-center justify-between">
                  <BackButton onClick={() => go("to")} />
                  <ContinueButton
                    label="Continue"
                    onClick={() => {
                      if (!data.moveDate && !data.flexibleDates) {
                        setErrors({ moveDate: "Select a date or choose flexible dates." });
                        return;
                      }
                      go("contact");
                    }}
                  />
                </div>
              </div>
            )}

            {step === "contact" && (
              <div>
                <h2 className="text-2xl font-bold text-black sm:text-3xl">Where should we send your quote?</h2>
                <p className="mt-2 text-sm text-black/60">Your request will be saved for our booking team to review.</p>
                <div className="mt-7 grid gap-4 sm:grid-cols-2">
                  <div className="sm:col-span-2">
                    <input value={data.fullName} onChange={(event) => update("fullName", event.target.value)} placeholder="Full name" autoComplete="name" className={inputClass} />
                    {errors.fullName && <p className="mt-1 text-xs text-brand-red">{errors.fullName}</p>}
                  </div>
                  <div>
                    <input value={data.email} onChange={(event) => update("email", event.target.value)} placeholder="Email address" type="email" autoComplete="email" className={inputClass} />
                    {errors.email && <p className="mt-1 text-xs text-brand-red">{errors.email}</p>}
                  </div>
                  <div>
                    <input value={data.phone} onChange={(event) => update("phone", event.target.value)} placeholder="Phone number" type="tel" autoComplete="tel" className={inputClass} />
                    {errors.phone && <p className="mt-1 text-xs text-brand-red">{errors.phone}</p>}
                  </div>
                  <textarea value={data.notes} onChange={(event) => update("notes", event.target.value)} placeholder="Access details, special items or anything else we should know (optional)" rows={4} className={`${inputClass} resize-y sm:col-span-2`} />
                </div>
                {errors.submit && (
                  <p role="alert" className="mt-4 rounded-xl border border-brand-red/30 bg-brand-red/5 p-3 text-sm text-brand-red">
                    {errors.submit}
                  </p>
                )}
                <p className="mt-4 text-xs leading-relaxed text-black/50">
                  Submitting creates a booking request. Your date is confirmed only after our team reviews the details and contacts you.
                </p>
                <div className="mt-7 flex items-center justify-between">
                  <BackButton onClick={() => go("date")} />
                  <button
                    type="button"
                    onClick={submit}
                    disabled={submitting}
                    className="min-h-11 rounded-xl bg-brand-red px-6 py-3 text-sm font-bold text-white transition hover:bg-black disabled:cursor-wait disabled:opacity-60"
                  >
                    {submitting ? "Saving request…" : "Send Booking Request"}
                  </button>
                </div>
              </div>
            )}

            {step === "success" && (
              <div className="flex min-h-[360px] flex-col items-center justify-center text-center">
                <span className="flex h-20 w-20 items-center justify-center rounded-full bg-brand-red text-4xl font-bold text-white">✓</span>
                <h2 className="mt-6 text-3xl font-bold text-black">Booking request received</h2>
                <p className="mt-3 max-w-md text-black/65">
                  Thank you, {data.fullName.split(" ")[0] || "there"}. Our team will review your move from {data.fromPostcode} to {data.toPostcode} and contact you shortly.
                </p>
                <p className="mt-4 text-xs text-black/45">Reference: {bookingId}</p>
              </div>
            )}
          </div>
        </div>

        <div className="mt-6 flex flex-wrap justify-center gap-3 text-xs font-semibold text-black/60">
          <span>Fully insured</span><span aria-hidden="true">•</span>
          <span>Nationwide coverage</span><span aria-hidden="true">•</span>
          <span>No hidden fees</span>
        </div>
      </div>
    </section>
  );
}
