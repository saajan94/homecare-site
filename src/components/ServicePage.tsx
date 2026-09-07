import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import CtaBand from "./CtaBand";
import { ButtonLink, Eyebrow } from "./ui";

type Props = {
  /** Small kicker above the title. */
  eyebrow?: string;
  /** Page headline. */
  title: string;
  /** Body copy — one paragraph per entry (plain text or inline markup). */
  paragraphs?: ReactNode[];
  /** Optional short closing line, rendered emphasized below the body. */
  closing?: string;
  /** Optional extra content rendered below the body and above the CTA button. */
  children?: ReactNode;
  backTo?: string;
  backLabel?: string;
  ctaLabel?: string;
  ctaTo?: string;
};

/**
 * Shared layout for the in-home care service pages: a cream hero with a back
 * link, headline, body copy, and a consultation button, followed by the CTA
 * band. Matches the 24-Hour Care page.
 */
export default function ServicePage({
  eyebrow = "In-Home Care Services",
  title,
  paragraphs = [],
  closing,
  children,
  backTo = "/services",
  backLabel = "← All services",
  ctaLabel = "Schedule a free consultation",
  ctaTo = "/contact",
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
            {eyebrow && (
              <div className="mt-4">
                <Eyebrow>{eyebrow}</Eyebrow>
              </div>
            )}
            <h1 className="mt-3 text-4xl font-semibold sm:text-5xl">{title}</h1>
            {(paragraphs.length > 0 || closing) && (
              <div className="mt-5 space-y-5 text-lg text-ink-soft">
                {paragraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
                {closing && (
                  <p className="font-semibold text-ink">{closing}</p>
                )}
              </div>
            )}
            {children && <div className="mt-8">{children}</div>}
            <div className="mt-8">
              <ButtonLink to={ctaTo}>{ctaLabel}</ButtonLink>
            </div>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
