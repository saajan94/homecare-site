import { Link } from "react-router-dom";
import Img from "../components/Img";
import PageHeader from "../components/PageHeader";
import CtaBand from "../components/CtaBand";
import { Section } from "../components/ui";
import { faqs, images, services } from "../data/site";

export default function Services() {
  return (
    <>
      <PageHeader
        eyebrow="Our services"
        title="In-home care, matched to real needs"
        intro="Every plan is built from an in-home assessment and adjusted as things change. Here is where most families begin."
      />

      <Section>
        <div className="space-y-16">
          {services.map((s, i) => (
            <div
              key={s.slug}
              className="grid gap-10 lg:grid-cols-2 lg:items-center"
            >
              <Img
                src={images[s.image]}
                alt={s.title}
                className={`aspect-[4/3] w-full rounded-3xl object-cover shadow-lg ${
                  i % 2 === 1 ? "lg:order-2" : ""
                }`}
              />
              <div>
                <h2 className="text-2xl font-semibold sm:text-3xl">{s.title}</h2>
                <p className="mt-4 text-ink-soft">{s.description}</p>
                <ul className="mt-6 space-y-2">
                  {s.includes.map((item) => (
                    <li key={item} className="flex gap-3 text-sm text-ink-soft">
                      <span aria-hidden="true" className="text-brand">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <Link
                  to={`/services/${s.slug}`}
                  className="mt-6 inline-block text-sm font-semibold text-brand hover:underline"
                >
                  See full details →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section className="bg-cream">
        <h2 className="text-3xl font-semibold">Common questions</h2>
        <dl className="mt-10 divide-y divide-black/10 border-y border-black/10">
          {faqs.map((f) => (
            <div key={f.q} className="py-6">
              <dt className="font-display font-semibold text-ink">{f.q}</dt>
              <dd className="mt-2 text-sm text-ink-soft">{f.a}</dd>
            </div>
          ))}
        </dl>
      </Section>

      <CtaBand />
    </>
  );
}
