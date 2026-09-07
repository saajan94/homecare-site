import ServicePage from "../components/ServicePage";

const cmsLink = "font-medium text-brand hover:underline";

export default function AlzheimersDementiaCare() {
  return (
    <ServicePage
      eyebrow="Dementia Care"
      title="Alzheimer's and Dementia Care"
      paragraphs={[
        "Caring for someone living with Alzheimer's or another form of dementia requires patience, understanding, and a gentle approach. Our caregivers take time to learn each person's history, personality, routines, and preferences so they can feel secure and valued while remaining in the comfort of home.",
        "We assist with personal hygiene, dressing, meals, medication reminders, companionship, and meaningful daily activities. A calm environment and familiar routine can help lessen confusion while supporting dignity, independence, and overall well-being. We also work closely with family caregivers, keeping them informed and giving them opportunities to rest and care for themselves.",
        <>
          Eligible Medicare beneficiaries may receive dementia-related care
          coordination, caregiver education, and qualifying respite services
          through the Medicare GUIDE Model at no out-of-pocket cost. Coverage and
          eligibility requirements apply, and we can help families understand the
          program and determine whether their loved one may qualify. (
          <a
            className={cmsLink}
            href="https://www.cms.gov/priorities/innovation/innovation-models/guide"
            target="_blank"
            rel="noopener noreferrer"
          >
            cms.gov
          </a>
          ,{" "}
          <a
            className={cmsLink}
            href="https://www.cms.gov/priorities/innovation/guide/faqs"
            target="_blank"
            rel="noopener noreferrer"
          >
            cms.gov
          </a>
          )
        </>,
      ]}
    />
  );
}
