import { useState } from "react";

/**
 * Caregiver job application form. Front-end only — connect `onSubmit` to an
 * applicant tracking system or email service before launch.
 */
export default function ApplicationForm() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <p className="mt-8 rounded-2xl bg-brand-light p-6 text-center text-brand-dark">
        Thanks for your interest. This is a demo form — connect it to your
        applicant tracking system or email service to receive submissions.
      </p>
    );
  }

  return (
    <form
      className="mt-8 grid gap-4"
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="First name" name="firstName" required />
        <Field label="Last name" name="lastName" required />
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Email" name="email" type="email" required />
        <Field label="Phone" name="phone" type="tel" required />
      </div>
      <Field label="City you live in" name="city" required />
      <label className="text-sm font-medium text-ink">
        Tell us about your caregiving experience
        <textarea
          name="experience"
          rows={4}
          className="mt-1 w-full rounded-xl border border-black/10 px-4 py-3 text-sm outline-none focus:border-brand"
        />
      </label>
      <button
        type="submit"
        className="mt-2 rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white hover:bg-brand-dark"
      >
        Submit application
      </button>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="text-sm font-medium text-ink">
      {label}
      {required && <span className="text-accent"> *</span>}
      <input
        type={type}
        name={name}
        required={required}
        className="mt-1 w-full rounded-xl border border-black/10 px-4 py-3 text-sm outline-none focus:border-brand"
      />
    </label>
  );
}
