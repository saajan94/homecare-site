import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { company } from "../data/site";
import { ButtonLink } from "./ui";

const links = [
  { to: "/services", label: "Services" },
  { to: "/about", label: "About" },
  { to: "/caregivers", label: "Careers" },
  { to: "/locations", label: "Locations" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-black/5 bg-white/95 backdrop-blur">
      <div className="container-page flex h-20 items-center justify-between gap-4">
        <Link to="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
          <span className="grid h-9 w-9 place-items-center rounded-full bg-brand text-white">
            <LeafIcon />
          </span>
          <span className="font-display text-lg font-semibold text-ink">
            {company.name}
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                `text-sm font-medium transition-colors hover:text-brand ${
                  isActive ? "text-brand" : "text-ink-soft"
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <a
            href={company.phoneHref}
            className="text-sm font-semibold text-brand"
          >
            {company.phone}
          </a>
          <ButtonLink to="/contact">Request care</ButtonLink>
        </div>

        <button
          type="button"
          className="grid h-10 w-10 place-items-center rounded-md text-ink md:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="text-2xl leading-none">{open ? "✕" : "☰"}</span>
        </button>
      </div>

      {open && (
        <div className="border-t border-black/5 bg-white md:hidden">
          <nav className="container-page flex flex-col py-4">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `py-3 text-base font-medium ${
                    isActive ? "text-brand" : "text-ink-soft"
                  }`
                }
              >
                {l.label}
              </NavLink>
            ))}
            <div className="mt-3 flex flex-col gap-3">
              <a href={company.phoneHref} className="font-semibold text-brand">
                Call {company.phone}
              </a>
              <ButtonLink to="/contact" className="w-full">
                Request care
              </ButtonLink>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

function LeafIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M20 4C10 4 4 10 4 20c8 0 16-6 16-16Z"
        fill="currentColor"
        opacity="0.9"
      />
      <path d="M6 18C10 12 14 9 18 7" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}
