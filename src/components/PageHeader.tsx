import type { ReactNode } from "react";
import { Eyebrow } from "./ui";

export default function PageHeader({
  eyebrow,
  title,
  intro,
  children,
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  children?: ReactNode;
}) {
  return (
    <section className="bg-cream">
      <div className="container-page py-16 sm:py-20">
        <div className="max-w-3xl">
          {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
          <h1 className="mt-3 text-4xl font-semibold sm:text-5xl">{title}</h1>
          {intro && <p className="mt-5 text-lg text-ink-soft">{intro}</p>}
          {children && <div className="mt-8">{children}</div>}
        </div>
      </div>
    </section>
  );
}
