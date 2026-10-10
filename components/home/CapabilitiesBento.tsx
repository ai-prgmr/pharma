export default function CapabilitiesBento() {
  return (
    <section className="py-12 md:py-16 bg-white" id="capabilities">
      <div className="ayka-container space-y-10">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold text-teal tracking-wider uppercase">
            Pioneering Contract Manufacturing
          </span>
          <h2 className="text-2xl md:text-4xl font-extrabold text-navy tracking-tight">
            High-Throughput Aseptic Infrastructure
          </h2>
          <p className="text-sm md:text-base text-muted-text leading-relaxed">
            Engineered to eliminate contamination risks through automated hermetic closing cycles.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Bento Card 1 */}
          <div className="ayka-card flex flex-col justify-between space-y-6">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-xl bg-light-bg flex items-center justify-center text-teal">
                <span className="material-symbols-outlined text-2xl">science</span>
              </div>
              <span className="inline-block px-2.5 py-0.5 rounded text-[10px] font-bold bg-[#ECFDF5] text-success uppercase tracking-wider">
                GRADE A / ISO 5
              </span>
              <h3 className="text-lg font-bold text-navy">
                Aseptic Blow-Fill-Seal &amp; Packaging
              </h3>
              <p className="text-xs md:text-sm text-muted-text leading-relaxed">
                State-of-the-art Blow-Fill-Seal machinery forms, fills, and hermetically seals sterile liquid pharmaceutical containers in seconds without human touch.
              </p>
            </div>
            <ul className="border-t border-border-subtle pt-4 space-y-2 text-xs md:text-sm text-body-text">
              <li className="flex items-center space-x-2">
                <span className="material-symbols-outlined text-teal text-base">check_circle</span>
                <span>Zero-particulate automated seal</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="material-symbols-outlined text-teal text-base">check_circle</span>
                <span>Ophthalmic, respiratory &amp; oral liquids</span>
              </li>
            </ul>
          </div>

          {/* Bento Card 2 */}
          <div className="ayka-card flex flex-col justify-between space-y-6">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-xl bg-light-bg flex items-center justify-center text-navy">
                <span className="material-symbols-outlined text-2xl">autorenew</span>
              </div>
              <span className="inline-block px-2.5 py-0.5 rounded text-[10px] font-bold bg-[#F0F9FF] text-primary uppercase tracking-wider">
                END-TO-END PIPELINE
              </span>
              <h3 className="text-lg font-bold text-navy">
                End-to-End Lifecycle Management
              </h3>
              <p className="text-xs md:text-sm text-muted-text leading-relaxed">
                From formulation development and chemical ingredient sourcing to batch verification, stability analysis, and final dispatch under one consolidated umbrella.
              </p>
            </div>
            <ul className="border-t border-border-subtle pt-4 space-y-2 text-xs md:text-sm text-body-text">
              <li className="flex items-center space-x-2">
                <span className="material-symbols-outlined text-teal text-base">check_circle</span>
                <span>Raw Material Sourcing &amp; QC</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="material-symbols-outlined text-teal text-base">check_circle</span>
                <span>Validated Analytical Dossiers</span>
              </li>
            </ul>
          </div>

          {/* Bento Card 3 */}
          <div className="ayka-card flex flex-col justify-between space-y-6">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-xl bg-light-bg flex items-center justify-center text-primary">
                <span className="material-symbols-outlined text-2xl">domain</span>
              </div>
              <span className="inline-block px-2.5 py-0.5 rounded text-[10px] font-bold bg-[#FFFBEB] text-[#D97706] uppercase tracking-wider">
                SCALABLE VOLUME
              </span>
              <h3 className="text-lg font-bold text-navy">
                Cleanrooms &amp; High-Capacity Output
              </h3>
              <p className="text-xs md:text-sm text-muted-text leading-relaxed">
                Our central India complex in Jamaniya Khurd delivers uninterrupted production with redundant HVAC cleanroom pressurization and high-speed filling lines.
              </p>
            </div>
            <ul className="border-t border-border-subtle pt-4 space-y-2 text-xs md:text-sm text-body-text">
              <li className="flex items-center space-x-2">
                <span className="material-symbols-outlined text-teal text-base">check_circle</span>
                <span>Classified ISO 14644 suites</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="material-symbols-outlined text-teal text-base">check_circle</span>
                <span>Rapid batch scale-up capabilities</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
