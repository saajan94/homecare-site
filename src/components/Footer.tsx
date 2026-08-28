import { Link } from "react-router-dom";
import { company, services } from "../data/site";

export default function Footer() {
  return (
    <footer className="bg-ink text-white/80">
      <div className="container-page grid gap-10 py-16 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-2 text-white">
            <span className="grid h-9 w-9 place-items-center rounded-full bg-brand">
              <span aria-hidden="true">🌿</span>
            </span>
            <span className="font-display text-lg font-semibold">{company.name}</span>
          </div>
          <p className="mt-4 text-sm leading-relaxed">{company.tagline}. Serving families with compassionate, professional in-home care.</p>
        </div>

        <div>
          <h3 className="font-display text-sm font-semibold uppercase tracking-widest text-white">
            Services
          </h3>
          <ul className="mt-4 space-y-2 text-sm">
            {services.map((s) => (
              <li key={s.slug}>
                <Link className="hover:text-white" to={`/services/${s.slug}`}>
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-sm font-semibold uppercase tracking-widest text-white">
            Company
          </h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link className="hover:text-white" to="/about">About us</Link></li>
            <li><Link className="hover:text-white" to="/caregivers">Careers</Link></li>
            <li><Link className="hover:text-white" to="/locations">Locations</Link></li>
            <li><Link className="hover:text-white" to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-display text-sm font-semibold uppercase tracking-widest text-white">
            Get in touch
          </h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <a className="hover:text-white" href={company.phoneHref}>
                {company.phone}
              </a>
            </li>
            <li>
              <a className="hover:text-white" href={`mailto:${company.email}`}>
                {company.email}
              </a>
            </li>
            <li>{company.address}</li>
            <li className="text-white/60">{company.hours}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-page flex flex-col gap-2 py-6 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {company.name}. All rights reserved.</p>
          <p className="flex gap-4">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Use</a>
            <a href="#" className="hover:text-white">Accessibility</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
