import { company } from "../data/site";
import { ButtonLink } from "./ui";

export default function CtaBand() {
  return (
    <section className="bg-brand">
      <div className="container-page flex flex-col items-center gap-6 py-14 text-center text-white sm:flex-row sm:justify-between sm:text-left">
        <div>
          <h2 className="text-2xl font-semibold text-white sm:text-3xl">
            Not sure what kind of care you need?
          </h2>
          <p className="mt-2 text-white/80">
            Talk it through with a care coordinator. The consultation is free and there is no obligation.
          </p>
        </div>
        <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
          <ButtonLink to="/contact" variant="accent">
            Request a consultation
          </ButtonLink>
          <ButtonLink to={company.phoneHref} variant="outline" className="border-white text-white hover:bg-white/10">
            Call {company.phone}
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
