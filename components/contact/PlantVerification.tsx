export default function PlantVerification() {
  return (
    <section className="bg-white p-6 md:p-8 rounded-2xl border border-border-subtle shadow-xs space-y-6" id="facility-dossier">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 border-b border-border-subtle pb-4">
        <div>
          <div className="text-xs font-bold text-teal tracking-wider uppercase">
            Statutory &amp; Accreditation Dossier
          </div>
          <h2 className="text-2xl font-bold text-navy mt-1">
            Indore Sterile Plant Verification
          </h2>
        </div>
        <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-light-bg rounded-lg border border-border-subtle self-start">
          <span className="w-2 h-2 rounded-full bg-success" />
          <span className="text-xs font-bold text-navy">WHO-GMP CERTIFIED UNIT</span>
        </div>
      </div>

      {/* Facility Specs & Licenses Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Address & Registration */}
        <div className="p-4 bg-light-bg rounded-xl border border-border-subtle space-y-3">
          <div className="flex items-center gap-2 text-navy font-semibold">
            <span className="material-symbols-outlined text-primary">factory</span>
            <span className="text-base">Registered Manufacturing Unit</span>
          </div>
          <div className="space-y-2 text-xs text-muted-text">
            <div className="flex justify-between py-1 border-b border-border-subtle">
              <span className="font-medium text-navy">Location:</span>
              <span className="text-right">Jamaniya Khurd, Indore, M.P.</span>
            </div>
            <div className="flex justify-between py-1 border-b border-border-subtle">
              <span className="font-medium text-navy">Revenue Land Survey:</span>
              <span className="text-right font-mono">Halka No. 61, Survey No. 154/1/1/1</span>
            </div>
            <div className="flex justify-between py-1 border-b border-border-subtle">
              <span className="font-medium text-navy">GSTIN:</span>
              <span className="text-right font-mono text-navy font-bold">23AXBPK9633R1ZW</span>
            </div>
            <div className="flex justify-between py-1">
              <span className="font-medium text-navy">Corporate Status:</span>
              <span className="text-right">Ayka Pharmaceuticals Pvt. Ltd.</span>
            </div>
          </div>
        </div>

        {/* Statutory Licenses */}
        <div className="p-4 bg-light-bg rounded-xl border border-border-subtle space-y-3">
          <div className="flex items-center gap-2 text-navy font-semibold">
            <span className="material-symbols-outlined text-success">policy</span>
            <span className="text-base">Drug Control Administration Approvals</span>
          </div>
          <div className="space-y-2 text-xs text-muted-text">
            <div className="flex justify-between py-1 border-b border-border-subtle">
              <span className="font-medium text-navy">Drug Mfg License (Form 25):</span>
              <span className="text-right font-mono text-success font-semibold">25/28/ASEPTIC/IND</span>
            </div>
            <div className="flex justify-between py-1 border-b border-border-subtle">
              <span className="font-medium text-navy">Large Parenteral (Form 28):</span>
              <span className="text-right font-mono text-success font-semibold">28/19/BFS-STERILE</span>
            </div>
            <div className="flex justify-between py-1 border-b border-border-subtle">
              <span className="font-medium text-navy">Standard Accreditation:</span>
              <span className="text-right">WHO-GMP &amp; ISO 9001:2015</span>
            </div>
            <div className="flex justify-between py-1">
              <span className="font-medium text-navy">Water System:</span>
              <span className="text-right">WFI USP Compliant Continuous Loop</span>
            </div>
          </div>
        </div>
      </div>

      {/* Audit Notice Box */}
      <div className="p-4 bg-light-bg border border-teal/30 rounded-xl flex items-start gap-3.5">
        <span className="material-symbols-outlined text-teal text-2xl mt-0.5">event_available</span>
        <div className="space-y-1">
          <h4 className="text-sm font-semibold text-navy">Scheduling Facility &amp; cGMP Regulatory Audits</h4>
          <p className="text-xs text-muted-text leading-relaxed">
            Site inspections, vendor qualifications, and Qualified Person (QP) audits are conducted Monday through Friday between 09:30 and 17:00 IST. Please submit auditor credentials and audit protocol agendas at least 10 business days prior.
          </p>
          <a
            href="mailto:info@aykapharma.com?subject=Facility%20Audit%20Request%20-%20Ayka%20Pharma"
            className="inline-flex items-center gap-1 text-primary hover:underline text-xs font-semibold pt-1"
          >
            Request Audit Protocol &amp; Date Confirmation →
          </a>
        </div>
      </div>
    </section>
  );
}
