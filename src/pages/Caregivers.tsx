import { useState } from "react";
import Img from "../components/Img";
import PageHeader from "../components/PageHeader";
import { ButtonLink, Section, SectionHeading } from "../components/ui";
import { caregiverPerks, images } from "../data/site";

export default function Caregivers() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      <PageHeader
        eyebrow="Careers"
        title="Do work that matters, close to home"
        intro="If you are patient, dependable, and genuinely enjoy the company of older adults, we would love to meet you. No two days look the same, and the relationships last."
      >
        <ButtonLink to="#apply">Apply now</ButtonLink>
      </PageHeader>

      <Section>
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <Img
            src={images.caregiverJoin}
            alt="A smiling caregiver holding hands with a senior client"
            className="aspect-[4/3] w-full rounded-3xl object-cover shadow-lg"
          />
          <div>
            <SectionHeading eyebrow="Why join us" title="Support that lets you do your best work" />
            <ul className="mt-8 space-y-3">
              {caregiverPerks.map((p) => (
                <li key={p} className="flex gap-3 text-ink-soft">
                  <span aria-hidden="true" className="mt-1 text-brand">✓</span>
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section className="bg-cream">
        <SectionHeading eyebrow="What we look for" title="You might be a great fit if…" align="center" />
        <div className="mx-auto mt-10 grid max-w-4xl gap-6 sm:grid-cols-3">
          {[
            "You show up on time, every time, and communicate when plans change.",
            "You are kind and unhurried, and you treat clients' homes with respect.",
            "You are comfortable with personal care, or willing to learn with our paid training.",
          ].map((t) => (
            <p key={t} className="rounded-2xl bg-white p-5 text-sm text-ink-soft shadow-sm">
              {t}
            </p>
          ))}
        </div>
      </Section>

      <Section id="apply">
        <div className="mx-auto max-w-2xl">
          <SectionHeading eyebrow="Apply" title="Start your application" align="center" />
          {submitted ? (
            <p className="mt-8 rounded-2xl bg-brand-light p-6 text-center text-brand-dark">
              Thanks for your interest. This is a demo form — connect it to your
              applicant tracking system or email service to receive submissions.
            </p>
          ) : (
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
          )}
        </div>
      </Section>
    </>
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
