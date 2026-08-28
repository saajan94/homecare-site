import { Link, useParams } from "react-router-dom";
import Img from "../components/Img";
import CtaBand from "../components/CtaBand";
import { ButtonLink, Section } from "../components/ui";
import { images, services } from "../data/site";

export default function ServiceDetail() {
  const { slug } = useParams();
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    return (
      <Section>
        <h1 className="text-3xl font-semibold">Service not found</h1>
        <p className="mt-4 text-ink-soft">
          The page you are looking for may have moved.{" "}
          <Link to="/services" className="font-semibold text-brand hover:underline">
            View all services
          </Link>
          .
        </p>
      </Section>
    );
  }

  const others = services.filter((s) => s.slug !== service.slug);

  return (
    <>
      <section className="bg-cream">
        <div className="container-page grid items-center gap-10 py-16 sm:py-20 lg:grid-cols-2">
          <div>
            <Link
              to="/services"
              className="text-sm font-semibold text-brand hover:underline"
            >
              ← All services
            </Link>
            <h1 className="mt-4 text-4xl font-semibold sm:text-5xl">
              {service.title}
            </h1>
            <p className="mt-5 text-lg text-ink-soft">{service.description}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink to="/contact">Request this care</ButtonLink>
              <ButtonLink to="/contact" variant="outline">
                Ask a question
              </ButtonLink>
            </div>
          </div>
          <Img
            src={images[service.image]}
            alt={service.title}
            className="aspect-[4/3] w-full rounded-3xl object-cover shadow-xl"
          />
        </div>
      </section>

      <Section>
        <div className="grid gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-semibold">What this care includes</h2>
            <ul className="mt-6 space-y-3">
              {service.includes.map((item) => (
                <li key={item} className="flex gap-3 text-ink-soft">
                  <span aria-hidden="true" className="mt-1 text-brand">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-8 text-ink-soft">
              Care is delivered by a consistent caregiver who is trained for this
              type of support and supervised by a care coordinator. We review the
              plan regularly and adjust hours and tasks as needs change.
            </p>
          </div>

          <aside className="rounded-2xl border border-black/5 bg-cream p-6">
            <h3 className="font-display font-semibold">Other services</h3>
            <ul className="mt-4 space-y-3">
              {others.map((o) => (
                <li key={o.slug}>
                  <Link
                    to={`/services/${o.slug}`}
                    className="text-sm font-medium text-brand hover:underline"
                  >
                    {o.title}
                  </Link>
                  <p className="text-sm text-ink-soft">{o.summary}</p>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </Section>

      <CtaBand />
    </>
  );
}
