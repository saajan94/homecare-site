import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { company, navMenus, utilityMenus, type NavMenu } from "../data/site";
import { ButtonLink } from "./ui";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileSection, setMobileSection] = useState<string | null>(null);
  const { pathname } = useLocation();

  // Close everything on navigation.
  useEffect(() => {
    setMobileOpen(false);
    setOpenMenu(null);
    setMobileSection(null);
  }, [pathname]);

  // Close desktop dropdowns on Escape.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenMenu(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header className="sticky top-0 z-40 border-b border-black/5 bg-white/95 backdrop-blur">
      {/* Under-construction disclaimer */}
      <div className="bg-accent px-4 py-2 text-center text-xs font-semibold text-white sm:text-sm">
        🚧 This site is currently under construction — some pages and information
        may be incomplete.
      </div>

      {/* Utility bar — company-level links, comforcare.com style */}
      <div className="hidden bg-brand text-white lg:block">
        <div className="container-page flex h-10 items-center justify-end gap-6">
          {utilityMenus.map((menu) => (
            <DesktopMenu
              key={menu.label}
              menu={menu}
              tone="dark"
              open={openMenu === menu.label}
              onOpen={() => setOpenMenu(menu.label)}
              onClose={() => setOpenMenu(null)}
              onToggle={() =>
                setOpenMenu((cur) => (cur === menu.label ? null : menu.label))
              }
            />
          ))}
          <a
            href={company.phoneHref}
            className="text-sm font-semibold text-white transition-colors hover:text-white/80"
          >
            {company.phone}
          </a>
        </div>
      </div>

      <div className="container-page flex h-20 items-center justify-between gap-4">
        <Link
          to="/"
          className="flex shrink-0 items-center gap-2"
          onClick={() => setMobileOpen(false)}
        >
          <span className="grid h-9 w-9 place-items-center rounded-full bg-brand text-white">
            <LeafIcon />
          </span>
          <span className="font-display text-lg font-semibold text-ink">
            {company.name}
          </span>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {navMenus.map((menu) => (
            <DesktopMenu
              key={menu.label}
              menu={menu}
              open={openMenu === menu.label}
              onOpen={() => setOpenMenu(menu.label)}
              onClose={() => setOpenMenu(null)}
              onToggle={() =>
                setOpenMenu((cur) => (cur === menu.label ? null : menu.label))
              }
            />
          ))}
        </nav>

        <div className="hidden shrink-0 items-center gap-4 lg:flex">
          <ButtonLink to="/contact">Request care</ButtonLink>
        </div>

        <button
          type="button"
          className="grid h-10 w-10 place-items-center rounded-md text-ink lg:hidden"
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((v) => !v)}
        >
          <span className="text-2xl leading-none">{mobileOpen ? "✕" : "☰"}</span>
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-black/5 bg-white lg:hidden">
          <nav className="container-page max-h-[75vh] overflow-y-auto py-4">
            {[...navMenus, ...utilityMenus].map((menu) => (
              <MobileMenu
                key={menu.label}
                menu={menu}
                open={mobileSection === menu.label}
                onToggle={() =>
                  setMobileSection((cur) =>
                    cur === menu.label ? null : menu.label,
                  )
                }
                onNavigate={() => setMobileOpen(false)}
              />
            ))}
            <div className="mt-4 flex flex-col gap-3 border-t border-black/5 pt-4">
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

function DesktopMenu({
  menu,
  open,
  onOpen,
  onClose,
  onToggle,
  tone = "light",
}: {
  menu: NavMenu;
  open: boolean;
  onOpen: () => void;
  onClose: () => void;
  onToggle: () => void;
  tone?: "light" | "dark";
}) {
  const rest =
    tone === "dark"
      ? "text-white/90 hover:text-white"
      : "text-ink-soft hover:text-brand";
  const active = tone === "dark" ? "text-white" : "text-brand";

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `text-sm font-medium transition-colors ${isActive ? active : rest}`;

  if (!menu.items) {
    return (
      <NavLink to={menu.to} className={linkClass}>
        {menu.label}
      </NavLink>
    );
  }

  return (
    <div
      className="relative"
      onMouseEnter={onOpen}
      onMouseLeave={onClose}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node)) onClose();
      }}
    >
      <button
        type="button"
        aria-expanded={open}
        aria-haspopup="true"
        onClick={onToggle}
        className={`flex items-center gap-1 text-sm font-medium transition-colors ${
          open ? active : rest
        }`}
      >
        {menu.label}
        <Caret className={open ? "rotate-180" : ""} />
      </button>

      {open && (
        <div
          className={`absolute top-full z-50 pt-3 ${
            tone === "dark" ? "right-0" : "left-0"
          }`}
        >
          <ul className="min-w-[18rem] rounded-xl border border-black/5 bg-white p-2 shadow-xl">
            <li>
              <NavLink
                to={menu.to}
                end
                onClick={onClose}
                className="block rounded-lg px-3 py-2 text-sm font-semibold text-ink hover:bg-brand-light hover:text-brand"
              >
                {menu.label} overview
              </NavLink>
            </li>
            <li className="my-1 border-t border-black/5" aria-hidden="true" />
            {menu.items.map((item) => (
              <li key={item.to + item.label}>
                <NavLink
                  to={item.to}
                  onClick={onClose}
                  className={({ isActive }) =>
                    `block rounded-lg px-3 py-2 text-sm ${
                      isActive
                        ? "bg-brand-light text-brand"
                        : "text-ink-soft hover:bg-brand-light hover:text-brand"
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

function MobileMenu({
  menu,
  open,
  onToggle,
  onNavigate,
}: {
  menu: NavMenu;
  open: boolean;
  onToggle: () => void;
  onNavigate: () => void;
}) {
  if (!menu.items) {
    return (
      <NavLink
        to={menu.to}
        onClick={onNavigate}
        className={({ isActive }) =>
          `block border-b border-black/5 py-3 text-base font-medium ${
            isActive ? "text-brand" : "text-ink-soft"
          }`
        }
      >
        {menu.label}
      </NavLink>
    );
  }

  return (
    <div className="border-b border-black/5">
      <button
        type="button"
        aria-expanded={open}
        onClick={onToggle}
        className="flex w-full items-center justify-between py-3 text-base font-medium text-ink-soft"
      >
        {menu.label}
        <Caret className={open ? "rotate-180" : ""} />
      </button>
      {open && (
        <div className="pb-2">
          <NavLink
            to={menu.to}
            end
            onClick={onNavigate}
            className="block py-2 pl-4 text-sm font-semibold text-ink"
          >
            {menu.label} overview
          </NavLink>
          {menu.items.map((item) => (
            <NavLink
              key={item.to + item.label}
              to={item.to}
              onClick={onNavigate}
              className={({ isActive }) =>
                `block py-2 pl-4 text-sm ${
                  isActive ? "text-brand" : "text-ink-soft"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </div>
      )}
    </div>
  );
}

function Caret({ className = "" }: { className?: string }) {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className={`transition-transform ${className}`}
    >
      <path
        d="M6 9l6 6 6-6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
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
