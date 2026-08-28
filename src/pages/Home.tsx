import { Link } from "react-router-dom";
import Img from "../components/Img";
import CtaBand from "../components/CtaBand";
import { ButtonLink, Eyebrow, Section, SectionHeading } from "../components/ui";
import {
  company,
  images,
  services,
  steps,
  testimonials,
  values,
} from "../data/site";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="bg-cream">
        <div className="container-page grid items-center gap-12 py-16 sm:py-24 lg:grid-cols-2">
          <div>
            <Eyebrow>In-home care for older adults</Eyebrow>
            <h1 className="mt-4 text-4xl font-semibold leading-tight sm:text-5xl">
              Help at home, so life can stay familiar
            </h1>
            <p className="mt-5 text-lg text-ink-soft">
              {company.name} provides compassionate, professional caregivers for
              seniors and adults who need a hand with daily living. From a few
              hours a week to around-the-clock support, we build care around the
              person.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink to="/contact">Request a free consultation</ButtonLink>
              <ButtonLink to="/services" variant="outline">
                Explore our services
              </ButtonLink>
            </div>
            <p className="mt-6 text-sm text-ink-soft">
              Prefer to talk now? Call{" "}
              <a className="font-semibold text-brand" href={company.phoneHref}>
                {company.phone}
              </a>
              . {company.hours}.
            </p>
          </div>

          <div className="relative">
            <Img
              src={images.heroCaregiver}
              alt="A caregiver holding an older adult's hands"
              className="aspect-[4/3] w-full rounded-3xl object-cover shadow-xl"
              label="Hero photo coming soon"
            />
            <div className="absolute -bottom-6 -left-6 hidden rounded-2xl bg-white p-5 shadow-lg sm:block">
              <p className="font-display text-3xl font-semibold text-brand">15+</p>
              <p className="text-sm text-ink-soft">years caring for local families</p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <div className="border-y border-black/5 bg-white">
        <div className="container-page grid gap-6 py-8 text-center sm:grid-cols-3">
          {[
            "Employed, background-checked caregivers",
            "Care plans supervised by a coordinator",
            "Available 24/7, including holidays",
          ].map((t) => (
            <p key={t} className="text-sm font-medium text-ink-soft">
              {t}
            </p>
          ))}
        </div>
      </div>

      {/* Services */}
      <Section>
        <SectionHeading
          eyebrow="How we help"
          title="Care that adapts to what each day needs"
          intro="Most families start with one service and adjust over time. Your care coordinator helps you find the right mix."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <Link
              key={s.slug}
              to={`/services/${s.slug}`}
              className="group flex flex-col overflow-hidden rounded-2xl border border-black/5 bg-white shadow-sm transition-shadow hover:shadow-lg"
            >
              <Img
                src={images[s.image]}
                alt={s.title}
                className="aspect-[4/3] w-full object-cover"
              />
              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-display text-lg font-semibold">{s.title}</h3>
                <p className="mt-2 flex-1 text-sm text-ink-soft">{s.summary}</p>
                <span className="mt-4 text-sm font-semibold text-brand group-hover:underline">
                  Learn more →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </Section>

      {/* Why us */}
      <Section className="bg-cream">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <Img
            src={images.aboutTeam}
            alt="A care coordinator reviewing a plan with a family"
            className="aspect-[4/3] w-full rounded-3xl object-cover shadow-lg"
          />
          <div>
            <SectionHeading
              eyebrow="Why families choose us"
              title="A steady, personal approach to care"
            />
            <dl className="mt-8 space-y-6">
              {values.map((v) => (
                <div key={v.title}>
                  <dt className="font-display font-semibold text-ink">{v.title}</dt>
                  <dd className="mt-1 text-sm text-ink-soft">{v.body}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </Section>

      {/* Process */}
      <Section>
        <SectionHeading
          eyebrow="Getting started"
          title="Four simple steps to care at home"
          align="center"
        />
        <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s) => (
            <li
              key={s.step}
              className="rounded-2xl border border-black/5 bg-white p-6 shadow-sm"
            >
              <span className="font-display text-sm font-semibold text-accent">
                {s.step}
              </span>
              <h3 className="mt-2 font-display text-base font-semibold">
                {s.title}
              </h3>
              <p className="mt-2 text-sm text-ink-soft">{s.body}</p>
            </li>
          ))}
        </ol>
      </Section>

      {/* Testimonials */}
      <Section className="bg-brand-light">
        <SectionHeading
          eyebrow="From the families we serve"
          title="Care you can feel good about"
          align="center"
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="flex flex-col rounded-2xl bg-white p-6 shadow-sm"
            >
              <blockquote className="flex-1 text-sm leading-relaxed text-ink-soft">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-4 text-sm font-semibold text-ink">
                {t.name}
                <span className="block font-normal text-ink-soft">
                  {t.relation}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </Section>

      <CtaBand />
    </>
  );
}
