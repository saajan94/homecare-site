import Img from "../components/Img";
import PageHeader from "../components/PageHeader";
import CtaBand from "../components/CtaBand";
import { Section, SectionHeading } from "../components/ui";
import { company, images, steps, values } from "../data/site";

export default function About() {
  return (
    <>
      <PageHeader
        eyebrow="About us"
        title="Local, family-minded, and here for the long run"
        intro={`${company.name} was started by people who had cared for their own parents and knew how hard it is to find help you can trust. We built the kind of agency we wished we had called.`}
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <Img
            src={images.aboutStory}
            alt="An older man and his caregiver walking outdoors"
            className="aspect-[4/3] w-full rounded-3xl object-cover shadow-lg"
          />
          <div>
            <SectionHeading eyebrow="Our story" title="Care we would want for our own family" />
            <p className="mt-6 text-ink-soft">
              We know what it feels like to juggle work, children, and a parent
              who needs more help than last year. We know the guilt of not being
              able to be in two places at once. That experience shapes how we
              hire, train, and support our caregivers.
            </p>
            <p className="mt-4 text-ink-soft">
              Today our team serves families across the region with personal
              care, companionship, memory care, and respite support. Every client
              has a dedicated care coordinator, and every caregiver has a team
              behind them.
            </p>
          </div>
        </div>
      </Section>

      <Section className="bg-cream">
        <SectionHeading
          eyebrow="What we stand for"
          title="The principles behind every visit"
          align="center"
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {values.map((v) => (
            <div key={v.title} className="rounded-2xl bg-white p-6 shadow-sm">
              <h3 className="font-display font-semibold text-ink">{v.title}</h3>
              <p className="mt-2 text-sm text-ink-soft">{v.body}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading eyebrow="How care begins" title="What to expect when you call" />
        <ol className="mt-10 space-y-6 border-l-2 border-brand-light pl-6">
          {steps.map((s) => (
            <li key={s.step} className="relative">
              <span className="absolute -left-[31px] grid h-6 w-6 place-items-center rounded-full bg-brand text-xs font-semibold text-white">
                {s.step.replace("0", "")}
              </span>
              <h3 className="font-display font-semibold text-ink">{s.title}</h3>
              <p className="mt-1 text-sm text-ink-soft">{s.body}</p>
            </li>
          ))}
        </ol>
      </Section>

      <CtaBand />
    </>
  );
}
