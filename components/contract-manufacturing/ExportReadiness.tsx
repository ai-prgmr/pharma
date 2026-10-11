import Link from "next/link";

export default function ExportReadiness() {
  return (
    <section className="py-12 md:py-16 bg-light-bg border-y border-border-subtle" id="export-ready">
      <div className="ayka-container space-y-10">
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <span className="text-xs font-bold text-teal uppercase tracking-wider">
            GLOBAL MARKET ACCESS
          </span>
          <h2 className="text-2xl md:text-4xl font-extrabold text-navy">
            Export Ready &amp; Regulatory Compliance
          </h2>
          <p className="text-sm md:text-base text-muted-text leading-relaxed">
            Fully compliant documentation and processes for global market access. Contact our sales team to discuss registration requirements and export logistics.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-5 rounded-xl border border-border-subtle shadow-2xs space-y-3">
            <div className="w-10 h-10 rounded-lg bg-light-bg flex items-center justify-center text-teal font-bold">
              <span className="material-symbols-outlined">description</span>
            </div>
            <h3 className="text-base font-bold text-navy">Regulatory Filings</h3>
            <p className="text-xs text-muted-text leading-relaxed">
              Complete product dossiers, CoA (Certificate of Analysis), and WHO-GMP compliance certificates ready for international health authority submissions.
            </p>
          </div>

          <div className="bg-white p-5 rounded-xl border border-border-subtle shadow-2xs space-y-3">
            <div className="w-10 h-10 rounded-lg bg-light-bg flex items-center justify-center text-primary font-bold">
              <span className="material-symbols-outlined">shield</span>
            </div>
            <h3 className="text-base font-bold text-navy">7-Layer Tropical Barrier</h3>
            <p className="text-xs text-muted-text leading-relaxed">
              Aseptic 7-layer barrier packaging protects against high humidity, tropical heat, and transport vibration during long-distance maritime freight.
            </p>
          </div>

          <div className="bg-white p-5 rounded-xl border border-border-subtle shadow-2xs space-y-3">
            <div className="w-10 h-10 rounded-lg bg-light-bg flex items-center justify-center text-success font-bold">
              <span className="material-symbols-outlined">local_shipping</span>
            </div>
            <h3 className="text-base font-bold text-navy">Robust Logistics Support</h3>
            <p className="text-xs text-muted-text leading-relaxed">
              Proven track record of timely delivery, container loading optimization, and international shipping documentation.
            </p>
          </div>

          <div className="bg-white p-5 rounded-xl border border-border-subtle shadow-2xs space-y-3">
            <div className="w-10 h-10 rounded-lg bg-light-bg flex items-center justify-center text-navy font-bold">
              <span className="material-symbols-outlined">public</span>
            </div>
            <h3 className="text-base font-bold text-navy">Multi-Language Labeling</h3>
            <p className="text-xs text-muted-text leading-relaxed">
              Artwork and packaging localization support including multi-language text, barcode specifications, and target country regulatory mandates.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
