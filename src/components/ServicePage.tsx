import { Link } from "react-router-dom";
import CtaBand from "./CtaBand";
import { ButtonLink } from "./ui";

type Props = {
  /** Page headline. */
  title: string;
  /** Body copy — one paragraph per entry. */
  paragraphs: string[];
  /** Optional short closing line, rendered emphasized below the body. */
  closing?: string;
  backTo?: string;
  backLabel?: string;
  ctaLabel?: string;
};

/**
 * Shared layout for the in-home care service pages: a cream hero with a back
 * link, headline, body copy, and a consultation button, followed by the CTA
 * band. Matches the 24-Hour Care page.
 */
export default function ServicePage({
  title,
  paragraphs,
  closing,
  backTo = "/services",
  backLabel = "← All services",
  ctaLabel = "Schedule a free consultation",
}: Props) {
  return (
    <>
      <section className="bg-cream">
        <div className="container-page py-16 sm:py-20">
          <div className="max-w-3xl">
            <Link
              to={backTo}
              className="text-sm font-semibold text-brand hover:underline"
            >
              {backLabel}
            </Link>
            <h1 className="mt-4 text-4xl font-semibold sm:text-5xl">{title}</h1>
            <div className="mt-5 space-y-5 text-lg text-ink-soft">
              {paragraphs.map((p) => (
                <p key={p}>{p}</p>
              ))}
              {closing && <p className="font-semibold text-ink">{closing}</p>}
            </div>
            <div className="mt-8">
              <ButtonLink to="/contact">{ctaLabel}</ButtonLink>
            </div>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
