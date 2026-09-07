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
      >
        <div className="space-y-10">
          <div>
            <h2 className="font-display text-2xl font-semibold text-ink">
              Our Mission
            </h2>
            <p className="mt-3 text-ink-soft">
              At {company.name}, our mission is to provide dependable,
              personalized, and heartfelt care that helps seniors and adults
              remain safe, comfortable, and independent in their own homes. We
              treat every client with kindness, dignity, and respect while giving
              families confidence that their loved one is in caring hands.
            </p>
          </div>
          <div>
            <h2 className="font-display text-2xl font-semibold text-ink">
              Our Vision
            </h2>
            <p className="mt-3 text-ink-soft">
              Our vision is to become a trusted in-home care provider throughout
              Maryland and Virginia, known for compassionate service, highly
              trained caregivers, and meaningful relationships. We want every
              client to feel valued, supported, and connected while receiving
              care that improves their quality of life.
            </p>
          </div>
          <div>
            <h2 className="font-display text-2xl font-semibold text-ink">
              Our Goals
            </h2>
            <p className="mt-3 text-ink-soft">
              Our goals are to provide care that reflects each client's
              individual needs, preferences, culture, and daily routine. We
              strive to hire caring and dependable professionals, provide ongoing
              education—including dementia care training through the Alzheimer's
              Association—and maintain open communication with families.
            </p>
            <p className="mt-4 text-ink-soft">
              We are committed to supporting independence, protecting dignity,
              improving safety, and bringing comfort and companionship into every
              home we serve.
            </p>
          </div>
        </div>
      </PageHeader>

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
