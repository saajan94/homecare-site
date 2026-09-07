import type { ReactNode } from "react";
import ServicePage from "../components/ServicePage";

function Block({ heading, children }: { heading: string; children: ReactNode }) {
  return (
    <div>
      <h2 className="font-display text-2xl font-semibold text-ink">{heading}</h2>
      <p className="mt-3 text-lg text-ink-soft">{children}</p>
    </div>
  );
}

export default function HomeHealthVsInHomeCare() {
  return (
    <ServicePage
      eyebrow="About"
      title="Home Health Care vs In-Home Care"
      backTo="/about"
      backLabel="← About"
    >
      <div className="space-y-8">
        <Block heading="Home Health Care">
          Home health care provides medical treatment in a person's residence
          under the direction of a healthcare professional. Services may include
          nursing visits, wound care, physical therapy, occupational therapy,
          speech therapy, or monitoring a medical condition. It is often arranged
          following surgery, an illness, or a hospital stay and is generally
          provided for a limited period.
        </Block>
        <Block heading="In-Home Care">
          In-home care focuses on the everyday assistance that helps someone
          continue living safely and comfortably at home. Compassionate Care
          Companions offers non-medical support such as bathing, dressing, meal
          preparation, medication reminders, light housekeeping, mobility
          assistance, transportation, and friendly companionship. Services can be
          scheduled for a few hours or for more consistent ongoing support.
        </Block>
        <Block heading="Working Together">
          Some individuals may benefit from both types of care. A nurse or
          therapist can address medical needs, while a caregiver from
          Compassionate Care Companions provides practical help, supervision, and
          encouragement between clinical visits. Together, these services can
          create a more complete circle of support for the client and greater
          peace of mind for the family.
        </Block>
      </div>
    </ServicePage>
  );
}
