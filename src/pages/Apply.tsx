import { Link } from "react-router-dom";
import PageHeader from "../components/PageHeader";
import ApplicationForm from "../components/ApplicationForm";
import { Section } from "../components/ui";

export default function Apply() {
  return (
    <>
      <PageHeader
        eyebrow="Careers"
        title="Start your application"
        intro="Tell us a little about yourself and a member of our team will follow up. If you have questions first, see our caregiver positions."
      >
        <Link
          to="/careers/caregiver-positions"
          className="text-sm font-semibold text-brand hover:underline"
        >
          View caregiver positions →
        </Link>
      </PageHeader>

      <Section>
        <div className="mx-auto max-w-2xl">
          <ApplicationForm />
        </div>
      </Section>
    </>
  );
}
