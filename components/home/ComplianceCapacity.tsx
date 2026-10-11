export default function ComplianceCapacity() {
  return (
    <section className="py-14 md:py-20 bg-light-bg/50 border-t border-border-subtle" id="compliance">
      <div className="ayka-container space-y-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-border-subtle pb-5 gap-3">
          <div>
            <span className="text-xs font-bold text-teal tracking-wider uppercase">
              QUALITY &amp; SAFETY IN EVERY DROP
            </span>
            <h2 className="text-2xl md:text-4xl font-extrabold text-navy mt-1">
              Certifications &amp; Production Scale
            </h2>
          </div>
          <div className="text-xs md:text-sm text-muted-text flex items-center gap-2">
            <span className="material-symbols-outlined text-teal text-base">pin_drop</span>
            <span>Works Site: <strong className="text-navy font-bold">Jamaniya Khurd, Indore, MP</strong></span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Certifications & Badges Column */}
          <div className="ayka-card space-y-5">
            <div className="flex items-center space-x-3">
              <div className="p-2.5 bg-teal/10 rounded-xl text-teal">
                <span className="material-symbols-outlined text-2xl">verified</span>
              </div>
              <div>
                <h3 className="text-lg font-bold text-navy font-heading">Quality &amp; Safety Certifications</h3>
                <p className="text-xs text-muted-text">Audited regulatory compliance frameworks</p>
              </div>
            </div>
            <p className="text-xs md:text-sm text-muted-text leading-relaxed">
              Our Liquid Oral Rehydration Solution is meticulously manufactured to meet global standards, ensuring maximum efficacy and bioavailability:
            </p>
            <div className="space-y-3">
              <div className="p-4 bg-light-bg rounded-xl border border-border-subtle flex justify-between items-center transition-colors hover:bg-white hover:shadow-2xs">
                <div>
                  <div className="text-sm font-bold text-navy">W.H.O. Recommended Formula</div>
                  <div className="text-xs text-muted-text">WHO / UNICEF Low Osmolarity ORS Standard (75 MMOL/L)</div>
                </div>
                <span className="material-symbols-outlined text-success">check_circle</span>
              </div>

              <div className="p-4 bg-light-bg rounded-xl border border-border-subtle flex justify-between items-center transition-colors hover:bg-white hover:shadow-2xs">
                <div>
                  <div className="text-sm font-bold text-navy">WHO-GMP Certification</div>
                  <div className="text-xs text-muted-text">Good Manufacturing Practices certified production unit</div>
                </div>
                <span className="material-symbols-outlined text-success">check_circle</span>
              </div>

              <div className="p-4 bg-light-bg rounded-xl border border-border-subtle flex justify-between items-center transition-colors hover:bg-white hover:shadow-2xs">
                <div>
                  <div className="text-sm font-bold text-navy">ISO 9001:2015 Accredited</div>
                  <div className="text-xs text-muted-text">International Quality Management System certification</div>
                </div>
                <span className="material-symbols-outlined text-success">check_circle</span>
              </div>

              <div className="p-4 bg-light-bg rounded-xl border border-border-subtle flex justify-between items-center transition-colors hover:bg-white hover:shadow-2xs">
                <div>
                  <div className="text-sm font-bold text-navy">Class D Cleanroom Filling</div>
                  <div className="text-xs text-muted-text">Temperature &amp; RH controlled secondary processing areas</div>
                </div>
                <span className="material-symbols-outlined text-success">check_circle</span>
              </div>
            </div>
          </div>

          {/* Production Capacity & Export Metrics Column */}
          <div className="ayka-card space-y-5">
            <div className="flex items-center space-x-3">
              <div className="p-2.5 bg-primary/10 rounded-xl text-primary">
                <span className="material-symbols-outlined text-2xl">precision_manufacturing</span>
              </div>
              <div>
                <h3 className="text-lg font-bold text-navy font-heading">Production Capacity &amp; Logistics</h3>
                <p className="text-xs text-muted-text">Scale calibrated for commercial mass supply</p>
              </div>
            </div>
            <p className="text-xs md:text-sm text-muted-text leading-relaxed">
              Industrial scale manufacturing built for continuous supply, disaster relief distribution, and international export:
            </p>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-xs md:text-sm mb-1.5">
                  <span className="font-semibold text-navy">Monthly Pouch Output</span>
                  <span className="font-extrabold text-teal">1.5 Crore (15M) Pouches</span>
                </div>
                <div className="w-full bg-light-bg h-2.5 rounded-full overflow-hidden border border-border-subtle">
                  <div className="bg-teal h-full rounded-full transition-all duration-1000" style={{ width: "95%" }} />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs md:text-sm mb-1.5">
                  <span className="font-semibold text-navy">Packaging Film Barrier Spec</span>
                  <span className="font-extrabold text-primary">7-Layer Plastic + Aluminium</span>
                </div>
                <div className="w-full bg-light-bg h-2.5 rounded-full overflow-hidden border border-border-subtle">
                  <div className="bg-primary h-full rounded-full transition-all duration-1000" style={{ width: "90%" }} />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs md:text-sm mb-1.5">
                  <span className="font-semibold text-navy">Volume Packaging Variants</span>
                  <span className="font-extrabold text-navy">125 ml &amp; 200 ml</span>
                </div>
                <div className="w-full bg-light-bg h-2.5 rounded-full overflow-hidden border border-border-subtle">
                  <div className="bg-navy h-full rounded-full transition-all duration-1000" style={{ width: "85%" }} />
                </div>
              </div>

              <div className="p-4 bg-light-bg rounded-xl border border-border-subtle space-y-1.5">
                <div className="flex items-center justify-between text-xs md:text-sm font-bold text-navy">
                  <span className="flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-teal text-base">public</span>
                    <span>Export Readiness &amp; Documentation</span>
                  </span>
                  <span className="text-success text-xs font-extrabold uppercase px-2 py-0.5 bg-success/10 rounded">
                    Full Dossier Support
                  </span>
                </div>
                <p className="text-xs text-muted-text leading-relaxed">
                  Fully compliant documentation and processes for global market access, registration requirements, and private label partnerships.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
