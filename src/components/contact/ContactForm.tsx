"use client";

import { useState, type FormEvent } from "react";
import Button from "@/components/ui/Button";
import { CheckIcon } from "@/components/ui/icons";

type Errors = Partial<Record<"name" | "phone" | "email" | "enquiry" | "agree", string>>;

const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const fieldClass =
  "mt-1.5 w-full rounded-lg border border-black/15 bg-white px-4 py-3 text-base text-brand-charcoal shadow-sm transition focus:border-brand-orange focus:outline-none focus:ring-2 focus:ring-brand-orange/30";

export default function ContactForm() {
  const [values, setValues] = useState({ name: "", phone: "", email: "", enquiry: "" });
  const [agree, setAgree] = useState(false);
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);

  const update = (key: keyof typeof values) => (e: { target: { value: string } }) =>
    setValues((v) => ({ ...v, [key]: e.target.value }));

  function validate(): Errors {
    const next: Errors = {};
    if (!values.name.trim()) next.name = "Please enter your name.";
    if (!values.phone.trim()) next.phone = "Please enter a phone number.";
    if (!values.email.trim()) next.email = "Please enter your email.";
    else if (!emailRe.test(values.email.trim())) next.email = "Please enter a valid email address.";
    if (!values.enquiry.trim()) next.enquiry = "Please tell us about your enquiry.";
    if (!agree) next.agree = "Please tick to confirm you consent.";
    return next;
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const next = validate();
    setErrors(next);
    if (Object.keys(next).length > 0) return;

    // TODO: connect to an email service / API route. No credentials hard-coded.
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center rounded-2xl border border-brand-orange/20 bg-brand-grey p-10 text-center">
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-orange text-white">
          <CheckIcon className="h-7 w-7" strokeWidth={3} />
        </span>
        <h3 className="mt-5 text-xl font-bold text-brand-navy">Thank you, we&apos;ll be in touch</h3>
        <p className="mt-2 text-base text-brand-charcoal/80">
          Your enquiry has been received. A member of our team will get back to you shortly.
        </p>
      </div>
    );
  }

  return (
    <form noValidate onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label htmlFor="name" className="text-sm font-semibold text-brand-navy">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          value={values.name}
          onChange={update("name")}
          aria-invalid={!!errors.name}
          className={fieldClass}
        />
        {errors.name && <p className="mt-1 text-sm text-brand-orange">{errors.name}</p>}
      </div>

      <div>
        <label htmlFor="phone" className="text-sm font-semibold text-brand-navy">
          Phone number
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          value={values.phone}
          onChange={update("phone")}
          aria-invalid={!!errors.phone}
          className={fieldClass}
        />
        {errors.phone && <p className="mt-1 text-sm text-brand-orange">{errors.phone}</p>}
      </div>

      <div>
        <label htmlFor="email" className="text-sm font-semibold text-brand-navy">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          value={values.email}
          onChange={update("email")}
          aria-invalid={!!errors.email}
          className={fieldClass}
        />
        {errors.email && <p className="mt-1 text-sm text-brand-orange">{errors.email}</p>}
      </div>

      <div>
        <label htmlFor="enquiry" className="text-sm font-semibold text-brand-navy">
          Enquiry
        </label>
        <textarea
          id="enquiry"
          name="enquiry"
          rows={5}
          value={values.enquiry}
          onChange={update("enquiry")}
          aria-invalid={!!errors.enquiry}
          className={`${fieldClass} resize-y`}
        />
        {errors.enquiry && <p className="mt-1 text-sm text-brand-orange">{errors.enquiry}</p>}
      </div>

      <div className="rounded-xl bg-brand-grey p-5">
        <p className="text-sm leading-relaxed text-brand-charcoal/80">
          Here at Top Removals we take your privacy seriously and will only use your personal
          information to administer your account and to provide the products and services you have
          requested from us.
        </p>
        <label className="mt-4 flex items-start gap-3">
          <input
            type="checkbox"
            checked={agree}
            onChange={(e) => setAgree(e.target.checked)}
            aria-invalid={!!errors.agree}
            className="mt-1 h-5 w-5 shrink-0 accent-brand-orange"
          />
          <span className="text-sm leading-relaxed text-brand-charcoal/80">
            If you consent to us using your personal data for that purpose please tick to confirm{" "}
            <span className="font-semibold text-brand-navy">I Agree</span>
          </span>
        </label>
        {errors.agree && <p className="mt-1 text-sm text-brand-orange">{errors.agree}</p>}
      </div>

      <Button type="submit" variant="orange" size="lg" disabled={!agree}>
        Send
      </Button>
    </form>
  );
}
