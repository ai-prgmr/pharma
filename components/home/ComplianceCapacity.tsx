export default function ComplianceCapacity() {
  return (
    <section className="py-12 md:py-16 bg-white" id="compliance">
      <div className="ayka-container space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-border-subtle pb-4">
          <div>
            <span className="text-xs font-bold text-teal tracking-wider uppercase">
              Regulatory Integrity
            </span>
            <h2 className="text-2xl md:text-4xl font-extrabold text-navy mt-1">
              Licenses &amp; Production Capacity
            </h2>
          </div>
          <div className="mt-2 md:mt-0 text-xs md:text-sm text-muted-text">
            Active GMP Inspection Rating: <strong className="text-navy font-bold">Exemplary Cleanliness</strong>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Licenses Column */}
          <div className="ayka-card space-y-4">
            <div className="flex items-center space-x-3">
              <span className="material-symbols-outlined text-teal text-2xl">policy</span>
              <h3 className="text-lg font-bold text-navy">Licenses &amp; Accreditations</h3>
            </div>
            <p className="text-xs md:text-sm text-muted-text leading-relaxed">
              Our Central India production facility is fully sanctioned under state and national statutory boards with complete regulatory filing:
            </p>
            <div className="space-y-3">
              <div className="p-3.5 bg-light-bg rounded-xl border border-border-subtle flex justify-between items-center">
                <div>
                  <div className="text-sm font-bold text-navy">WHO-GMP Certification</div>
                  <div className="text-xs text-muted-text">World Health Organization Good Manufacturing Practices</div>
                </div>
                <span className="material-symbols-outlined text-success">check_circle</span>
              </div>

              <div className="p-3.5 bg-light-bg rounded-xl border border-border-subtle flex justify-between items-center">
                <div>
                  <div className="text-sm font-bold text-navy">ISO 9001:2015 Registered</div>
                  <div className="text-xs text-muted-text">Quality Management System Standards</div>
                </div>
                <span className="material-symbols-outlined text-success">check_circle</span>
              </div>

              <div className="p-3.5 bg-light-bg rounded-xl border border-border-subtle flex justify-between items-center">
                <div>
                  <div className="text-sm font-bold text-navy">Drug Manufacturing License</div>
                  <div className="text-xs text-muted-text">Form 25 &amp; Form 28 Aseptic Processing Authorizations</div>
                </div>
                <span className="material-symbols-outlined text-success">check_circle</span>
              </div>
            </div>
          </div>

          {/* Production Capacity Column */}
          <div className="ayka-card space-y-4">
            <div className="flex items-center space-x-3">
              <span className="material-symbols-outlined text-primary text-2xl">precision_manufacturing</span>
              <h3 className="text-lg font-bold text-navy">Production Capacity Metrics</h3>
            </div>
            <p className="text-xs md:text-sm text-muted-text leading-relaxed">
              High-speed production suites calibrated for contract formulation, pilot scales, and multi-million commercial runs:
            </p>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-xs md:text-sm mb-1">
                  <span className="font-medium text-navy">BFS Liquid Ampoules &amp; Vials</span>
                  <span className="font-bold text-teal">12,000 Units / Hr</span>
                </div>
                <div className="w-full bg-light-bg h-2 rounded-full overflow-hidden border border-border-subtle">
                  <div className="bg-teal h-full rounded-full" style={{ width: "85%" }} />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs md:text-sm mb-1">
                  <span className="font-medium text-navy">Electrolyte &amp; Oral Rehydration Liquids</span>
                  <span className="font-bold text-primary">45,000 Liters / Shift</span>
                </div>
                <div className="w-full bg-light-bg h-2 rounded-full overflow-hidden border border-border-subtle">
                  <div className="bg-primary h-full rounded-full" style={{ width: "92%" }} />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs md:text-sm mb-1">
                  <span className="font-medium text-navy">Analytical Release Testing Turnaround</span>
                  <span className="font-bold text-navy">&lt; 72 Hours</span>
                </div>
                <div className="w-full bg-light-bg h-2 rounded-full overflow-hidden border border-border-subtle">
                  <div className="bg-navy h-full rounded-full" style={{ width: "78%" }} />
                </div>
              </div>

              <div className="p-3 bg-light-bg rounded-xl border border-border-subtle flex items-center justify-between text-xs md:text-sm">
                <span className="text-muted-text font-medium">Total Cleanroom Floor Footprint</span>
                <span className="font-bold text-navy">25,000+ Sq. Ft.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
