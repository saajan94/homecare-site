import Img from "../components/Img";
import PageHeader from "../components/PageHeader";
import CtaBand from "../components/CtaBand";
import { Section } from "../components/ui";
import { company, images, locations } from "../data/site";

export default function Locations() {
  const regions = [...new Set(locations.map((l) => l.region))];

  return (
    <>
      <PageHeader
        eyebrow="Locations"
        title="Serving families across the region"
        intro="Care is coordinated locally, so your caregiver lives near you and your coordinator knows the community. If your town is not listed, call us — we are always expanding."
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
          <Img
            src={images.locationsMap}
            alt="Map showing the communities served"
            className="aspect-[4/3] w-full rounded-3xl object-cover shadow-lg"
          />
          <div className="space-y-10">
            {regions.map((region) => (
              <div key={region}>
                <h2 className="font-display text-xl font-semibold">{region}</h2>
                <ul className="mt-4 divide-y divide-black/10 border-y border-black/10">
                  {locations
                    .filter((l) => l.region === region)
                    .map((l) => (
                      <li
                        key={l.city}
                        className="flex items-center justify-between py-4"
                      >
                        <span className="font-medium text-ink">{l.city}</span>
                        <a
                          href={`tel:${l.phone.replace(/[^\d]/g, "")}`}
                          className="text-sm font-semibold text-brand hover:underline"
                        >
                          {l.phone}
                        </a>
                      </li>
                    ))}
                </ul>
              </div>
            ))}
            <p className="text-sm text-ink-soft">
              Main office:
              {company.address.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </p>
          </div>
        </div>
      </Section>

      <CtaBand />
    </>
  );
}
