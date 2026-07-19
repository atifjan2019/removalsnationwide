"use client";

import { useState, type FormEvent, type ReactNode } from "react";
import Link from "next/link";
import Button from "@/components/ui/Button";
import { CheckIcon } from "@/components/ui/icons";
import {
  propertySizeOptions,
  floorOptions,
  whereOptions,
  removalOptions,
  furnitureCategories,
} from "@/lib/booking";

const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const fieldClass =
  "mt-1.5 w-full rounded-lg border border-black/15 bg-white px-4 py-2.5 text-base text-brand-charcoal shadow-sm transition focus:border-brand-red focus:outline-none focus:ring-2 focus:ring-brand-red/30";

/* ---------- Presentational field helpers ---------- */

function Label({ htmlFor, children, required }: { htmlFor: string; children: ReactNode; required?: boolean }) {
  return (
    <label htmlFor={htmlFor} className="text-sm font-semibold text-brand-navy">
      {children}
      {required && <span className="text-brand-red"> *</span>}
    </label>
  );
}

function TextInput({
  id,
  label,
  type = "text",
  required,
  value,
  onChange,
  error,
}: {
  id: string;
  label: string;
  type?: string;
  required?: boolean;
  value: string;
  onChange: (v: string) => void;
  error?: string;
}) {
  return (
    <div>
      <Label htmlFor={id} required={required}>
        {label}
      </Label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        aria-invalid={!!error}
        className={fieldClass}
      />
      {error && <p className="mt-1 text-sm text-brand-red">{error}</p>}
    </div>
  );
}

function SelectInput({
  id,
  label,
  required,
  value,
  onChange,
  options,
  placeholder,
  error,
}: {
  id: string;
  label: string;
  required?: boolean;
  value: string;
  onChange: (v: string) => void;
  options: string[];
  placeholder: string;
  error?: string;
}) {
  return (
    <div>
      <Label htmlFor={id} required={required}>
        {label}
      </Label>
      <select
        id={id}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        aria-invalid={!!error}
        className={fieldClass}
      >
        <option value="">{placeholder}</option>
        {options.map((opt, i) => (
          <option key={`${opt}-${i}`} value={opt}>
            {opt}
          </option>
        ))}
      </select>
      {error && <p className="mt-1 text-sm text-brand-red">{error}</p>}
    </div>
  );
}

function CheckboxInput({
  id,
  label,
  checked,
  onChange,
}: {
  id: string;
  label: string;
  checked: boolean;
  onChange: (v: boolean) => void;
}) {
  return (
    <label htmlFor={id} className="flex items-center gap-3 text-sm text-brand-charcoal/85">
      <input
        id={id}
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        className="h-5 w-5 shrink-0 accent-brand-red"
      />
      {label}
    </label>
  );
}

function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <fieldset className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm sm:p-8">
      <legend className="px-2 text-lg font-bold uppercase tracking-wide text-brand-navy">
        {title}
      </legend>
      <div className="mt-4">{children}</div>
    </fieldset>
  );
}

/* ---------- Furniture category sub-component (reused per room) ---------- */

function FurnitureCategoryField({ name, options }: { name: string; options: string[] }) {
  const [item, setItem] = useState("");
  const [qty, setQty] = useState("");
  const [other, setOther] = useState("");
  const slug = name.toLowerCase().replace(/\s+/g, "-");

  return (
    <div className="rounded-xl bg-brand-grey p-5">
      <h4 className="text-base font-bold text-brand-navy">{name}</h4>
      <div className="mt-3 grid gap-4 sm:grid-cols-3">
        <SelectInput
          id={`furniture-${slug}`}
          label="Item"
          value={item}
          onChange={setItem}
          options={options}
          placeholder="Choose"
        />
        <TextInput id={`qty-${slug}`} label="Quantity" type="number" value={qty} onChange={setQty} />
        <TextInput id={`other-${slug}`} label="Other" value={other} onChange={setOther} />
      </div>
    </div>
  );
}

/* ---------- Main form ---------- */

type TextKeys =
  | "firstName"
  | "lastName"
  | "email"
  | "phone"
  | "pickupDate"
  | "pickupCountry"
  | "pickupCity"
  | "pickupAddress"
  | "pickupPostal"
  | "pickupFloor"
  | "pickupSize"
  | "deliveryDate"
  | "deliveryCountry"
  | "deliveryCity"
  | "deliveryStreet"
  | "deliveryPostal"
  | "deliveryFloor"
  | "deliverySize"
  | "where"
  | "notes";

const emptyText: Record<TextKeys, string> = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  pickupDate: "",
  pickupCountry: "",
  pickupCity: "",
  pickupAddress: "",
  pickupPostal: "",
  pickupFloor: "",
  pickupSize: "",
  deliveryDate: "",
  deliveryCountry: "",
  deliveryCity: "",
  deliveryStreet: "",
  deliveryPostal: "",
  deliveryFloor: "",
  deliverySize: "",
  where: "",
  notes: "",
};

export default function BookingForm() {
  const [f, setF] = useState<Record<TextKeys, string>>(emptyText);
  const [checks, setChecks] = useState<Record<string, boolean>>({});
  const [errors, setErrors] = useState<Partial<Record<TextKeys | "acceptTerms", string>>>({});
  const [submitted, setSubmitted] = useState(false);

  const set = (key: TextKeys) => (v: string) => setF((s) => ({ ...s, [key]: v }));
  const toggle = (key: string) => (v: boolean) => setChecks((s) => ({ ...s, [key]: v }));

  function validate() {
    const e: Partial<Record<TextKeys | "acceptTerms", string>> = {};
    if (!f.firstName.trim()) e.firstName = "Required";
    if (!f.lastName.trim()) e.lastName = "Required";
    if (!f.email.trim()) e.email = "Required";
    else if (!emailRe.test(f.email.trim())) e.email = "Enter a valid email";
    if (!f.phone.trim()) e.phone = "Required";
    if (!f.pickupDate) e.pickupDate = "Required";
    if (!f.pickupPostal.trim()) e.pickupPostal = "Required";
    if (!f.deliveryDate) e.deliveryDate = "Required";
    if (!f.deliveryPostal.trim()) e.deliveryPostal = "Required";
    if (!checks.acceptTerms) e.acceptTerms = "Please accept the Terms and Conditions";
    return e;
  }

  function handleSubmit(ev: FormEvent<HTMLFormElement>) {
    ev.preventDefault();
    const e = validate();
    setErrors(e);
    if (Object.keys(e).length > 0) {
      document.getElementById("quick-quote")?.scrollIntoView({ behavior: "smooth" });
      return;
    }
    // TODO: connect to an API route / email service. No credentials hard-coded.
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center rounded-2xl border border-brand-red/20 bg-brand-grey p-10 text-center">
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-red text-white">
          <CheckIcon className="h-7 w-7" strokeWidth={3} />
        </span>
        <h3 className="mt-5 text-xl font-bold text-brand-navy">Thank you for your booking request</h3>
        <p className="mt-2 max-w-md text-base text-brand-charcoal/80">
          A member of our sales team will contact you as soon as possible to confirm the details of
          your move.
        </p>
      </div>
    );
  }

  return (
    <form id="quick-quote" noValidate onSubmit={handleSubmit} className="scroll-mt-28 space-y-8">
      {/* Personal details */}
      <Section title="Personal details">
        <div className="grid gap-5 sm:grid-cols-2">
          <TextInput id="firstName" label="First name" required value={f.firstName} onChange={set("firstName")} error={errors.firstName} />
          <TextInput id="lastName" label="Last name" required value={f.lastName} onChange={set("lastName")} error={errors.lastName} />
          <TextInput id="email" label="Your email" type="email" required value={f.email} onChange={set("email")} error={errors.email} />
          <TextInput id="phone" label="Phone number" type="tel" required value={f.phone} onChange={set("phone")} error={errors.phone} />
        </div>
      </Section>

      {/* Pick up info */}
      <Section title="Pick up info">
        <div className="grid gap-5 sm:grid-cols-2">
          <TextInput id="pickupDate" label="Preferred moving date" type="date" required value={f.pickupDate} onChange={set("pickupDate")} error={errors.pickupDate} />
          <div className="flex items-end gap-6">
            <CheckboxInput id="pickupFlex" label="Flexibility with dates" checked={!!checks.pickupFlex} onChange={toggle("pickupFlex")} />
            <CheckboxInput id="pickupLift" label="Lift" checked={!!checks.pickupLift} onChange={toggle("pickupLift")} />
          </div>
          <TextInput id="pickupCountry" label="Country" value={f.pickupCountry} onChange={set("pickupCountry")} />
          <TextInput id="pickupCity" label="City" value={f.pickupCity} onChange={set("pickupCity")} />
          <TextInput id="pickupAddress" label="Address" value={f.pickupAddress} onChange={set("pickupAddress")} />
          <TextInput id="pickupPostal" label="Postal code" required value={f.pickupPostal} onChange={set("pickupPostal")} error={errors.pickupPostal} />
          <SelectInput id="pickupFloor" label="Floor" value={f.pickupFloor} onChange={set("pickupFloor")} options={floorOptions} placeholder="Choose" />
          <SelectInput id="pickupSize" label="Property size" value={f.pickupSize} onChange={set("pickupSize")} options={propertySizeOptions} placeholder="Choose" />
        </div>
      </Section>

      {/* Delivery info */}
      <Section title="Delivery info">
        <div className="grid gap-5 sm:grid-cols-2">
          <TextInput id="deliveryDate" label="Preferred moving date" type="date" required value={f.deliveryDate} onChange={set("deliveryDate")} error={errors.deliveryDate} />
          <div className="flex items-end gap-6">
            <CheckboxInput id="deliveryUnpacking" label="Unpacking required" checked={!!checks.deliveryUnpacking} onChange={toggle("deliveryUnpacking")} />
            <CheckboxInput id="deliveryLift" label="Lift" checked={!!checks.deliveryLift} onChange={toggle("deliveryLift")} />
          </div>
          <TextInput id="deliveryCountry" label="Country" value={f.deliveryCountry} onChange={set("deliveryCountry")} />
          <TextInput id="deliveryCity" label="City" value={f.deliveryCity} onChange={set("deliveryCity")} />
          <TextInput id="deliveryStreet" label="Street" value={f.deliveryStreet} onChange={set("deliveryStreet")} />
          <TextInput id="deliveryPostal" label="Postal code" required value={f.deliveryPostal} onChange={set("deliveryPostal")} error={errors.deliveryPostal} />
          <SelectInput id="deliveryFloor" label="Floor" value={f.deliveryFloor} onChange={set("deliveryFloor")} options={floorOptions} placeholder="Choose" />
          <SelectInput id="deliverySize" label="Property size" value={f.deliverySize} onChange={set("deliverySize")} options={propertySizeOptions} placeholder="Choose" />
        </div>
      </Section>

      {/* List of furniture */}
      <Section title="List of furniture">
        <div className="space-y-4">
          {furnitureCategories.map((cat, i) => (
            <FurnitureCategoryField key={`${cat.name}-${i}`} name={cat.name} options={cat.options} />
          ))}
        </div>
      </Section>

      {/* Removal options */}
      <Section title="Removal options">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {removalOptions.map((opt) => (
            <CheckboxInput
              key={opt}
              id={`removal-${opt}`}
              label={opt}
              checked={!!checks[`removal:${opt}`]}
              onChange={toggle(`removal:${opt}`)}
            />
          ))}
        </div>
        <p className="mt-6 rounded-xl border-l-4 border-brand-red bg-brand-grey px-5 py-4 font-semibold text-brand-navy">
          Cleaning company Get 10% OFF Your Cleaning
        </p>
      </Section>

      {/* Where did you find us */}
      <Section title="Where did you find us?">
        <div className="sm:max-w-md">
          <SelectInput
            id="where"
            label="Where did you find us?"
            value={f.where}
            onChange={set("where")}
            options={whereOptions}
            placeholder="Please select"
          />
        </div>
      </Section>

      {/* Notes */}
      <Section title="Notes">
        <div>
          <Label htmlFor="notes">Write your notes or message and any special requirements</Label>
          <textarea
            id="notes"
            rows={5}
            value={f.notes}
            onChange={(e) => set("notes")(e.target.value)}
            placeholder="Write your notes or message and any special requirements"
            className={`${fieldClass} resize-y`}
          />
        </div>
      </Section>

      {/* T&Cs + submit */}
      <div>
        <label htmlFor="acceptTerms" className="flex items-start gap-3">
          <input
            id="acceptTerms"
            type="checkbox"
            checked={!!checks.acceptTerms}
            onChange={(e) => toggle("acceptTerms")(e.target.checked)}
            aria-invalid={!!errors.acceptTerms}
            className="mt-1 h-5 w-5 shrink-0 accent-brand-red"
          />
          <span className="text-sm leading-relaxed text-brand-charcoal/85">
            <span className="text-brand-red">*</span> By ticking this box you accept our{" "}
            <Link href="/terms-and-conditions" className="font-semibold text-brand-red hover:underline">
              Terms and Conditions
            </Link>
          </span>
        </label>
        {errors.acceptTerms && <p className="mt-1 text-sm text-brand-red">{errors.acceptTerms}</p>}

        <div className="mt-6">
          <Button type="submit" variant="red" size="lg" disabled={!checks.acceptTerms}>
            Book Now
          </Button>
        </div>
      </div>
    </form>
  );
}
