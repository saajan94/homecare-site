import { Link } from "react-router-dom";
import type { ComponentProps, ReactNode } from "react";

type ButtonLinkProps = {
  to: string;
  children: ReactNode;
  variant?: "solid" | "outline" | "accent";
  className?: string;
};

const base =
  "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-brand";

const variants: Record<string, string> = {
  solid: "bg-brand text-white hover:bg-brand-dark",
  accent: "bg-accent text-white hover:bg-accent-dark",
  outline: "border border-brand text-brand hover:bg-brand-light",
};

export function ButtonLink({
  to,
  children,
  variant = "solid",
  className = "",
}: ButtonLinkProps) {
  const cls = `${base} ${variants[variant]} ${className}`;
  if (to.startsWith("tel:") || to.startsWith("mailto:") || to.startsWith("http")) {
    return (
      <a href={to} className={cls}>
        {children}
      </a>
    );
  }
  return (
    <Link to={to} className={cls}>
      {children}
    </Link>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <span className="text-sm font-semibold uppercase tracking-widest text-accent">
      {children}
    </span>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">{title}</h2>
      {intro && <p className="mt-4 text-lg text-ink-soft">{intro}</p>}
    </div>
  );
}

export function Section({
  children,
  className = "",
  ...rest
}: ComponentProps<"section">) {
  return (
    <section className={`py-16 sm:py-24 ${className}`} {...rest}>
      <div className="container-page">{children}</div>
    </section>
  );
}
