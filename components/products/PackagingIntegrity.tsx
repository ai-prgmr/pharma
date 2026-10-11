import Link from "next/link";

export default function PackagingIntegrity() {
  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="ayka-container space-y-10">
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <span className="text-xs font-bold text-teal uppercase tracking-wider">
            PRODUCT INTEGRITY &amp; PACKAGING
          </span>
          <h2 className="text-2xl md:text-4xl font-extrabold text-navy">
            Ultra-Safe Aseptic Packaging Technology
          </h2>
          <p className="text-sm md:text-base text-muted-text leading-relaxed">
            Engineered with high thermodynamic barrier laminates for delicate electrolyte balance stability across diverse climate zones.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: 7-Layer Barrier Film */}
          <div className="ayka-card space-y-4">
            <div className="w-12 h-12 rounded-xl bg-light-bg flex items-center justify-center text-teal border border-border-subtle">
              <span className="material-symbols-outlined text-2xl">layers</span>
            </div>
            <h3 className="text-lg font-bold text-navy">7-Layer Barrier Film</h3>
            <p className="text-xs md:text-sm text-muted-text leading-relaxed">
              Multi-layer protective film including high-grade plastic and aluminum barrier layers ensuring complete oxygen, light, and moisture isolation.
            </p>
            <div className="pt-2 border-t border-border-subtle text-xs font-bold text-teal flex items-center gap-1.5">
              <span className="material-symbols-outlined text-base">verified</span>
              <span>Zero-Oxidation Protection</span>
            </div>
          </div>

          {/* Card 2: Flexible Packaging Options */}
          <div className="ayka-card space-y-4">
            <div className="w-12 h-12 rounded-xl bg-light-bg flex items-center justify-center text-primary border border-border-subtle">
              <span className="material-symbols-outlined text-2xl">takeout_dining</span>
            </div>
            <h3 className="text-lg font-bold text-navy">Available Volumes</h3>
            <p className="text-xs md:text-sm text-muted-text leading-relaxed">
              Ready-to-drink pouches supplied in standard commercial volumes of <strong className="text-navy">125 ml</strong> and <strong className="text-navy">200 ml</strong> formats.
            </p>
            <div className="pt-2 border-t border-border-subtle text-xs font-bold text-primary flex items-center gap-1.5">
              <span className="material-symbols-outlined text-base">checklist</span>
              <span>125 ml &amp; 200 ml Ready Packs</span>
            </div>
          </div>

          {/* Card 3: Storage & Stability Specs */}
          <div className="ayka-card space-y-4">
            <div className="w-12 h-12 rounded-xl bg-light-bg flex items-center justify-center text-navy border border-border-subtle">
              <span className="material-symbols-outlined text-2xl">thermostat</span>
            </div>
            <h3 className="text-lg font-bold text-navy">Storage &amp; Shelf Life</h3>
            <p className="text-xs md:text-sm text-muted-text leading-relaxed">
              Store below 25 degrees Celsius. Protect from light. Hermetically sealed to maintain shelf-life stability across global distribution networks.
            </p>
            <div className="pt-2 border-t border-border-subtle text-xs font-bold text-navy flex items-center gap-1.5">
              <span className="material-symbols-outlined text-base">ac_unit</span>
              <span>Store below 25°C &bull; Protect from light</span>
            </div>
          </div>
        </div>

        {/* CTA Box */}
        <div className="bg-light-bg p-6 md:p-8 rounded-2xl border border-border-subtle flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h3 className="text-lg font-bold text-navy">Require Custom Volume or Private Label Branding?</h3>
            <p className="text-xs md:text-sm text-muted-text">
              We co-pack your brand with low MOQ and custom volume options tailored to your regional market.
            </p>
          </div>
          <Link href="/contract-manufacturing" className="btn-primary text-xs md:text-sm py-3 px-6 shrink-0 cursor-pointer">
            Explore Contract Manufacturing
          </Link>
        </div>
      </div>
    </section>
  );
}
