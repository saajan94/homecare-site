import { type ReactNode } from "react";
import { useSearchParams } from "react-router-dom";
import PageHeader from "../components/PageHeader";
import { Section } from "../components/ui";
import { company } from "../data/site";
import { formsubmitAction, thankYouUrl } from "../lib/formSubmit";

export default function Contact() {
  const [params] = useSearchParams();
  const sent = params.get("sent") === "1";

  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Let's talk about what would help"
        intro="Tell us a little about your situation and a care coordinator will call you back, usually the same day. There is no cost and no obligation."
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <div className="space-y-6">
            <ContactRow label="Phone">
              <a className="font-semibold text-brand" href={company.phoneHref}>
                {company.phone}
              </a>
            </ContactRow>
            <ContactRow label="Email">
              <a className="font-semibold text-brand" href={`mailto:${company.email}`}>
                {company.email}
              </a>
            </ContactRow>
            <ContactRow label="Office">
              {company.address.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </ContactRow>
            <ContactRow label="Availability">{company.hours}</ContactRow>
          </div>

          <div className="rounded-3xl border border-black/5 bg-cream p-6 sm:p-8">
            {sent ? (
              <div className="rounded-2xl bg-white p-6 text-center">
                <h2 className="font-display text-xl font-semibold">Thank you</h2>
                <p className="mt-2 text-sm text-ink-soft">
                  We've received your request and a care coordinator will call
                  you back, usually the same day.
                </p>
              </div>
            ) : !formsubmitAction ? (
              <div className="rounded-2xl bg-white p-6 text-center">
                <h2 className="font-display text-xl font-semibold">
                  Reach us directly
                </h2>
                <p className="mt-2 text-sm text-ink-soft">
                  Our contact form isn't connected yet. Please call{" "}
                  <a className="font-semibold text-brand" href={company.phoneHref}>
                    {company.phone}
                  </a>{" "}
                  or email{" "}
                  <a
                    className="font-semibold text-brand"
                    href={`mailto:${company.email}`}
                  >
                    {company.email}
                  </a>
                  .
                </p>
              </div>
            ) : (
              <form
                className="grid gap-4"
                action={formsubmitAction}
                method="POST"
                encType="multipart/form-data"
              >
                <input
                  type="hidden"
                  name="_subject"
                  value="New callback request — Compassionate Care Companions"
                />
                <input type="hidden" name="_template" value="table" />
                <input type="hidden" name="_captcha" value="false" />
                <input
                  type="hidden"
                  name="_next"
                  value={thankYouUrl("/contact?sent=1")}
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
                  <Field label="Your name" name="name" required />
                  <Field label="Phone" name="phone" type="tel" required />
                </div>
                <Field label="Email" name="email" type="email" required />
                <label className="text-sm font-medium text-ink">
                  Who needs care?
                  <select
                    name="relationship"
                    className="mt-1 w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-sm outline-none focus:border-brand"
                  >
                    <option>A parent</option>
                    <option>My spouse or partner</option>
                    <option>Myself</option>
                    <option>Another family member</option>
                    <option>A client or patient</option>
                  </select>
                </label>
                <label className="text-sm font-medium text-ink">
                  How can we help?
                  <textarea
                    name="message"
                    rows={4}
                    className="mt-1 w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-sm outline-none focus:border-brand"
                  />
                </label>
                <button
                  type="submit"
                  className="mt-2 rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white hover:bg-brand-dark"
                >
                  Request a callback
                </button>
              </form>
            )}
          </div>
        </div>
      </Section>
    </>
  );
}

function ContactRow({
  label,
  children,
}: {
  label: string;
  children: ReactNode;
}) {
  return (
    <div>
      <p className="text-sm font-semibold uppercase tracking-widest text-accent">
        {label}
      </p>
      <p className="mt-1 text-ink-soft">{children}</p>
    </div>
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
        className="mt-1 w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-sm outline-none focus:border-brand"
      />
    </label>
  );
}
