import { Link, useLocation } from "react-router-dom";
import PageHeader from "../components/PageHeader";
import CtaBand from "../components/CtaBand";
import { ButtonLink, Section } from "../components/ui";
import { navMenus } from "../data/site";

/**
 * Shared placeholder for navigation destinations that don't have real content
 * yet. Every dropdown link resolves here so the full site map is navigable
 * while pages are written one by one.
 */
export default function StubPage({ title }: { title: string }) {
  const { pathname } = useLocation();
  const parent = navMenus.find(
    (m) => m.to === pathname || m.items?.some((i) => i.to === pathname),
  );
  const siblings = parent?.items?.filter((i) => i.to !== pathname) ?? [];

  return (
    <>
      <PageHeader
        eyebrow={parent ? parent.label : "Page in progress"}
        title={title}
        intro={`This page is a placeholder while ${title} content is being written. Navigation and routing are already wired up — real copy, photos, and sections drop in here when they're ready.`}
      >
        <div className="flex flex-wrap gap-3">
          <ButtonLink to="/contact">Request a free consultation</ButtonLink>
          <ButtonLink to="/services" variant="outline">
            Explore our services
          </ButtonLink>
        </div>
      </PageHeader>

      {siblings.length > 0 && (
        <Section>
          <h2 className="text-2xl font-semibold">
            More under {parent?.label}
          </h2>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {siblings.map((s) => (
              <li key={s.to + s.label}>
                <Link
                  to={s.to}
                  className="block rounded-xl border border-black/5 bg-white p-4 text-sm font-medium text-ink-soft shadow-sm transition-shadow hover:text-brand hover:shadow-md"
                >
                  {s.label}
                </Link>
              </li>
            ))}
          </ul>
        </Section>
      )}

      <CtaBand />
    </>
  );
}
