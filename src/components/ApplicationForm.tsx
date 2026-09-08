import { company } from "../data/site";
import { formsubmitAction, thankYouUrl } from "../lib/formSubmit";

/**
 * Caregiver job application form. Submits directly to FormSubmit.co (a plain
 * multipart POST so the résumé upload is included) and redirects to
 * /careers/apply?sent=1 on success. Set VITE_FORMSUBMIT_CODE to enable it.
 */
export default function ApplicationForm() {
  if (!formsubmitAction) {
    return (
      <p className="mt-8 rounded-2xl bg-brand-light p-6 text-center text-brand-dark">
        Our online application isn't connected yet. Please email your details and
        résumé to{" "}
        <a className="font-semibold underline" href={`mailto:${company.email}`}>
          {company.email}
        </a>
        .
      </p>
    );
  }

  return (
    <form
      className="mt-8 grid gap-4"
      action={formsubmitAction}
      method="POST"
      encType="multipart/form-data"
    >
      <input
        type="hidden"
        name="_subject"
        value="New caregiver application — Compassionate Care Companions"
      />
      <input type="hidden" name="_template" value="table" />
      <input type="hidden" name="_captcha" value="false" />
      <input
        type="hidden"
        name="_next"
        value={thankYouUrl("/careers/apply?sent=1")}
      />
      {/* Honeypot — hidden from people, catches bots */}
      <input
        type="text"
        name="_honey"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />

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
      <label className="text-sm font-medium text-ink">
        Résumé{" "}
        <span className="font-normal text-ink-soft">
          (PDF or Word, up to 10&nbsp;MB — optional)
        </span>
        <input
          type="file"
          name="attachment"
          accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
          className="mt-1 w-full rounded-xl border border-black/10 bg-white px-4 py-2.5 text-sm outline-none file:mr-3 file:rounded-full file:border-0 file:bg-brand-light file:px-3 file:py-1.5 file:text-xs file:font-semibold file:text-brand-dark focus:border-brand"
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
