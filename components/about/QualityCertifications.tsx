export default function QualityCertifications() {
  return (
    <section className="py-12 md:py-16 bg-light-bg border-y border-border-subtle" id="certifications">
      <div className="ayka-container space-y-10">
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <span className="text-xs font-bold text-teal uppercase tracking-wider">
            TRUST &amp; REGULATORY INTEGRITY
          </span>
          <h2 className="text-2xl md:text-4xl font-extrabold text-navy">
            Certifications &amp; Quality Badges
          </h2>
          <p className="text-sm md:text-base text-muted-text leading-relaxed">
            Our commitment: Quality &amp; safety in every drop. Manufactured to meet global healthcare standards.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-2xl border border-border-subtle shadow-xs text-center space-y-3">
            <div className="w-16 h-16 rounded-full bg-light-bg mx-auto flex items-center justify-center text-teal border border-border-subtle">
              <span className="material-symbols-outlined text-3xl">verified</span>
            </div>
            <h3 className="text-lg font-bold text-navy">WHO-GMP Certified</h3>
            <p className="text-xs md:text-sm text-muted-text leading-relaxed">
              Fully compliant Good Manufacturing Practices certification validating sterile filling, cleanroom hygiene, and batch release protocols.
            </p>
            <span className="inline-block px-3 py-1 bg-[#ECFDF5] text-success rounded-full text-xs font-bold uppercase tracking-wider">
              WHO-GMP ACCREDITED
            </span>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-border-subtle shadow-xs text-center space-y-3">
            <div className="w-16 h-16 rounded-full bg-light-bg mx-auto flex items-center justify-center text-primary border border-border-subtle">
              <span className="material-symbols-outlined text-3xl">workspace_premium</span>
            </div>
            <h3 className="text-lg font-bold text-navy">ISO 9001:2015 Registered</h3>
            <p className="text-xs md:text-sm text-muted-text leading-relaxed">
              Internationally recognized Quality Management System accreditation guaranteeing rigorous quality control across all processes.
            </p>
            <span className="inline-block px-3 py-1 bg-[#F0F9FF] text-primary rounded-full text-xs font-bold uppercase tracking-wider">
              ISO 9001:2015 COMPANY
            </span>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-border-subtle shadow-xs text-center space-y-3">
            <div className="w-16 h-16 rounded-full bg-light-bg mx-auto flex items-center justify-center text-navy border border-border-subtle">
              <span className="material-symbols-outlined text-3xl">medical_services</span>
            </div>
            <h3 className="text-lg font-bold text-navy">WHO Low Osmolarity Standard</h3>
            <p className="text-xs md:text-sm text-muted-text leading-relaxed">
              Formulation strictly adheres to WHO/UNICEF recommended 75 mmol/L osmolarity formula for optimal treatment of acute diarrhea dehydration.
            </p>
            <span className="inline-block px-3 py-1 bg-light-bg text-navy rounded-full text-xs font-bold uppercase tracking-wider border border-border-subtle">
              75 MMOL/L FORMULA
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
