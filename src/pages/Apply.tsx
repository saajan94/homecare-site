import { Link, useSearchParams } from "react-router-dom";
import PageHeader from "../components/PageHeader";
import ApplicationForm from "../components/ApplicationForm";
import { Section } from "../components/ui";

export default function Apply() {
  const [params] = useSearchParams();
  const sent = params.get("sent") === "1";

  return (
    <>
      <PageHeader
        eyebrow="Careers"
        title={sent ? "Application received" : "Start your application"}
        intro={
          sent
            ? "Thank you for applying. We've received your information and will be in touch soon."
            : "Tell us a little about yourself and a member of our team will follow up. If you have questions first, see our caregiver positions."
        }
      >
        <Link
          to="/careers/caregiver-positions"
          className="text-sm font-semibold text-brand hover:underline"
        >
          View caregiver positions →
        </Link>
      </PageHeader>

      {!sent && (
        <Section>
          <div className="mx-auto max-w-2xl">
            <ApplicationForm />
          </div>
        </Section>
      )}
    </>
  );
}
