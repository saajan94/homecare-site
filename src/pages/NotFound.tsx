import { Section, ButtonLink } from "../components/ui";

export default function NotFound() {
  return (
    <Section className="text-center">
      <p className="font-display text-sm font-semibold uppercase tracking-widest text-accent">
        404
      </p>
      <h1 className="mt-3 text-4xl font-semibold">This page could not be found</h1>
      <p className="mx-auto mt-4 max-w-md text-ink-soft">
        The link may be out of date. Let's get you back to something useful.
      </p>
      <div className="mt-8 flex justify-center gap-3">
        <ButtonLink to="/">Back to home</ButtonLink>
        <ButtonLink to="/contact" variant="outline">
          Contact us
        </ButtonLink>
      </div>
    </Section>
  );
}
