export default function PlantVerification() {
  return (
    <section className="bg-white p-6 md:p-8 rounded-3xl border border-border-subtle shadow-clinical space-y-6" id="facility-dossier">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 border-b border-border-subtle pb-4">
        <div>
          <div className="text-xs font-bold text-teal tracking-wider uppercase">
            Statutory &amp; Accreditation Dossier
          </div>
          <h2 className="text-2xl font-bold text-navy mt-1 font-heading">
            Indore Sterile Plant Verification
          </h2>
        </div>
        <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-light-bg rounded-lg border border-border-subtle self-start">
          <span className="w-2 h-2 rounded-full bg-success" />
          <span className="text-xs font-bold text-navy">WHO-GMP &amp; ISO 9001:2015 CERTIFIED</span>
        </div>
      </div>

      {/* Facility Specs & Licenses Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Address & Registration */}
        <div className="p-4 bg-light-bg/80 rounded-xl border border-border-subtle space-y-3">
          <div className="flex items-center gap-2 text-navy font-semibold">
            <span className="material-symbols-outlined text-primary">factory</span>
            <span className="text-base font-heading">Registered Manufacturing Works</span>
          </div>
          <div className="space-y-2 text-xs text-muted-text">
            <div className="flex justify-between py-1 border-b border-border-subtle">
              <span className="font-medium text-navy">Location:</span>
              <span className="text-right">Jamaniya Khurd, Indore, M.P.</span>
            </div>
            <div className="flex justify-between py-1 border-b border-border-subtle">
              <span className="font-medium text-navy">Revenue Land Survey:</span>
              <span className="text-right font-mono text-navy font-semibold">Halka No. 61, Serve No. 156/1/1/1</span>
            </div>
            <div className="flex justify-between py-1 border-b border-border-subtle">
              <span className="font-medium text-navy">Facility Output:</span>
              <span className="text-right font-bold text-teal">1.5 Crore Pouches / Month</span>
            </div>
            <div className="flex justify-between py-1">
              <span className="font-medium text-navy">Cleanroom Rating:</span>
              <span className="text-right text-navy font-semibold">Class D Sterile Filling</span>
            </div>
          </div>
        </div>

        {/* Statutory Licenses */}
        <div className="p-4 bg-light-bg/80 rounded-xl border border-border-subtle space-y-3">
          <div className="flex items-center gap-2 text-navy font-semibold">
            <span className="material-symbols-outlined text-success">policy</span>
            <span className="text-base font-heading">Regulatory DCA &amp; Quality Approvals</span>
          </div>
          <div className="space-y-2 text-xs text-muted-text">
            <div className="flex justify-between py-1 border-b border-border-subtle">
              <span className="font-medium text-navy">Quality Framework:</span>
              <span className="text-right font-mono text-success font-semibold">WHO Guidelines Compliant</span>
            </div>
            <div className="flex justify-between py-1 border-b border-border-subtle">
              <span className="font-medium text-navy">Management Standard:</span>
              <span className="text-right font-mono text-success font-semibold">ISO 9001:2015 Registered</span>
            </div>
            <div className="flex justify-between py-1 border-b border-border-subtle">
              <span className="font-medium text-navy">Manufacturing Standard:</span>
              <span className="text-right">WHO-GMP Certified Plant</span>
            </div>
            <div className="flex justify-between py-1">
              <span className="font-medium text-navy">RH &amp; Temp Control:</span>
              <span className="text-right">Continuous Secondary Area Control</span>
            </div>
          </div>
        </div>
      </div>

      {/* Audit Notice Box */}
      <div className="p-4 bg-light-bg border border-teal/30 rounded-xl flex items-start gap-3.5">
        <span className="material-symbols-outlined text-teal text-2xl mt-0.5">event_available</span>
        <div className="space-y-1">
          <h4 className="text-sm font-semibold text-navy">Scheduling Facility &amp; cGMP Regulatory Site Audits</h4>
          <p className="text-xs text-muted-text leading-relaxed">
            Site inspections, vendor qualifications, and corporate client QP audits are conducted Monday through Friday in Indore, MP. Please submit auditor credentials and audit protocol agendas in advance.
          </p>
          <a
            href="mailto:aykapharma@aykapharma.com?subject=Facility%20Audit%20Request%20-%20Ayka%20Pharma"
            className="inline-flex items-center gap-1 text-primary hover:underline text-xs font-semibold pt-1 cursor-pointer"
          >
            <span>Request Audit Protocol &amp; Date Confirmation</span>
            <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </a>
        </div>
      </div>
    </section>
  );
}
