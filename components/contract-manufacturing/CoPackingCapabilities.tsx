import Link from "next/link";

export default function CoPackingCapabilities() {
  return (
    <section className="py-12 md:py-16 bg-white" id="co-packing-specs">
      <div className="ayka-container space-y-10">
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <span className="text-xs font-bold text-teal uppercase tracking-wider">
            END-TO-END B2B SERVICES
          </span>
          <h2 className="text-2xl md:text-4xl font-extrabold text-navy">
            Co-Packing &amp; Private Label Offerings
          </h2>
          <p className="text-sm md:text-base text-muted-text leading-relaxed">
            High-efficiency production processes allow us to offer cost-effective solutions for mass distribution and private label brand owners.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Service 1: Private Label & Co-Packing */}
          <div className="ayka-card space-y-5 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-xl bg-light-bg flex items-center justify-center text-teal border border-border-subtle">
                <span className="material-symbols-outlined text-2xl">handshake</span>
              </div>
              <span className="inline-block px-2.5 py-0.5 rounded text-[10px] font-bold bg-[#ECFDF5] text-success uppercase tracking-wider">
                LOW MOQ ADVANTAGE
              </span>
              <h3 className="text-xl font-bold text-navy">Brand Co-Packing &amp; Private Label</h3>
              <p className="text-xs md:text-sm text-muted-text leading-relaxed">
                We manufacture and pack your brand at Ayka with low Minimum Order Quantities (MOQ). Ideal for regional distributors, pharmacy chains, and brand owners seeking rapid commercial rollout.
              </p>
              <ul className="space-y-2 text-xs md:text-sm text-body-text pt-2">
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-teal text-base">check_circle</span>
                  <span>Custom branded 7-layer barrier pouches (125ml &amp; 200ml)</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-teal text-base">check_circle</span>
                  <span>Low MOQ thresholds for new product line launches</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-teal text-base">check_circle</span>
                  <span>Competitive volume-based pricing for mass distribution</span>
                </li>
              </ul>
            </div>
            <div className="pt-4 border-t border-border-subtle">
              <Link href="/contact#rfq-form" className="btn-primary text-xs py-2.5 px-4 w-full justify-center">
                Discuss Co-Packing MOQ
              </Link>
            </div>
          </div>

          {/* Service 2: Custom Formulations */}
          <div className="ayka-card space-y-5 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-xl bg-light-bg flex items-center justify-center text-primary border border-border-subtle">
                <span className="material-symbols-outlined text-2xl">biotech</span>
              </div>
              <span className="inline-block px-2.5 py-0.5 rounded text-[10px] font-bold bg-[#F0F9FF] text-primary uppercase tracking-wider">
                PROPRIETARY R&amp;D
              </span>
              <h3 className="text-xl font-bold text-navy">Custom Formulations</h3>
              <p className="text-xs md:text-sm text-muted-text leading-relaxed">
                Capability to produce proprietary or specific market formulations upon request. Our in-house technical team assists with taste profile optimization and active ingredient stability.
              </p>
              <ul className="space-y-2 text-xs md:text-sm text-body-text pt-2">
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-teal text-base">check_circle</span>
                  <span>Custom electrolyte concentration matching regional regulations</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-teal text-base">check_circle</span>
                  <span>8 standard flavors + custom flavor profile blending</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-teal text-base">check_circle</span>
                  <span>Complete analytical release and stability testing support</span>
                </li>
              </ul>
            </div>
            <div className="pt-4 border-t border-border-subtle">
              <Link href="/contact#rfq-form" className="btn-secondary text-xs py-2.5 px-4 w-full justify-center">
                Request Custom Formulation Brief
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
