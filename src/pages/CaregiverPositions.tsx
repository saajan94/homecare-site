import type { ReactNode } from "react";
import ServicePage from "../components/ServicePage";

function Block({ heading, children }: { heading: string; children: ReactNode }) {
  return (
    <div>
      <h2 className="font-display text-xl font-semibold text-ink">{heading}</h2>
      <p className="mt-2 text-lg text-ink-soft">{children}</p>
    </div>
  );
}

export default function CaregiverPositions() {
  return (
    <ServicePage
      eyebrow="Careers"
      title="Careers at Compassionate Care Companions"
      backTo="/careers"
      backLabel="← Careers"
      ctaLabel="Apply now"
      ctaTo="/careers/apply"
      paragraphs={[
        "At Compassionate Care Companions, we are looking for caring and dependable individuals who want to bring comfort, dignity, and joy to the lives of seniors and adults who need support at home. As a member of our team, you may assist clients with personal care, meal preparation, medication reminders, light housekeeping, companionship, mobility, and other daily needs.",
        "We value caregivers who are patient, respectful, trustworthy, and committed to treating every client like family. Whether you are an experienced caregiver or beginning a new career in home care, you will be welcomed into a supportive environment where your work is appreciated and your growth matters.",
        "Our staff will also receive specialized dementia care training through the Alzheimer's Association. This education will help caregivers better understand memory loss, respond thoughtfully to changing behaviors, communicate with sensitivity, and provide safer, more meaningful care to individuals living with Alzheimer's disease or another form of dementia.",
      ]}
    >
      <div className="space-y-8">
        <Block heading="Join Our Caregiving Team">
          Become part of Compassionate Care Companions and build a rewarding
          career helping seniors and adults live safely and comfortably in their
          own homes.
        </Block>
        <Block heading="Our Mission">
          Our mission is to enrich the lives of those we serve by providing
          dependable, respectful, and heartfelt care. We are also committed to
          creating a workplace where caregivers feel valued, prepared, and
          supported while making a meaningful difference each day.
        </Block>
        <Block heading="Your Role as a Caregiver">
          Our caregivers assist clients with personal hygiene, dressing,
          mobility, meal preparation, medication reminders, light housekeeping,
          companionship, and other everyday routines. Every service is provided
          with patience and kindness while protecting each client's dignity,
          comfort, and independence.
        </Block>
        <Block heading="Training and Support">
          Compassionate Care Companions provides ongoing guidance to help our
          caregivers feel confident in their roles. Staff members will also
          receive dementia care training through the Alzheimer's Association,
          helping them better understand memory loss and respond to clients with
          sensitivity and compassion.
        </Block>
        <Block heading="Apply Today">
          If you are caring, responsible, dependable, and passionate about
          helping others, we would love to hear from you. Apply today and become
          a valued member of the Compassionate Care Companions family.
        </Block>
      </div>
    </ServicePage>
  );
}
