import Link from "next/link";

export default function ProductsHero() {
  return (
    <section className="bg-light-bg py-12 md:py-16 border-b border-border-subtle">
      <div className="ayka-container space-y-6 text-center max-w-4xl mx-auto">
        <div className="inline-flex items-center space-x-2 bg-white px-3.5 py-1.5 rounded-full border border-border-subtle shadow-2xs">
          <span className="w-2.5 h-2.5 rounded-full bg-success animate-pulse" />
          <span className="text-xs font-bold text-navy uppercase tracking-wider">
            WHO RECOMMENDED FORMULA &bull; 8 DELICIOUS FLAVORS
          </span>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-navy tracking-tight leading-tight">
          AYKALUTE ORS <span className="text-teal">Liquid Rehydration Solution</span>
        </h1>

        <p className="text-base md:text-lg text-body-text leading-relaxed max-w-3xl mx-auto">
          Meticulously manufactured to WHO/UNICEF low osmolarity standards (75 mmol/L). Ready-to-drink formulation in 7-layer aseptic barrier film packs (125ml &amp; 200ml) engineered for superior water and electrolyte absorption.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <a href="#flavors-grid" className="btn-primary text-xs md:text-sm py-3 px-6">
            Explore 8 Available Flavors
          </a>
          <a href="#technical-formula" className="btn-secondary text-xs md:text-sm py-3 px-6">
            Inspect WHO Technical Formula
          </a>
        </div>
      </div>
    </section>
  );
}
