import Img from "../components/Img";
import PageHeader from "../components/PageHeader";
import ApplicationForm from "../components/ApplicationForm";
import { ButtonLink, Section, SectionHeading } from "../components/ui";
import { caregiverPerks, images } from "../data/site";

export default function Caregivers() {
  return (
    <>
      <PageHeader
        eyebrow="Careers"
        title="Do work that matters, close to home"
        intro="If you are patient, dependable, and genuinely enjoy the company of older adults, we would love to meet you. No two days look the same, and the relationships last."
      >
        <ButtonLink to="/careers/apply">Apply now</ButtonLink>
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
          <ApplicationForm />
        </div>
      </Section>
    </>
  );
}
