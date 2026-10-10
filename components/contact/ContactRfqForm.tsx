"use client";

import { useState } from "react";

export default function ContactRfqForm() {
  const [formData, setFormData] = useState({
    companyName: "",
    repName: "",
    email: "",
    phone: "",
    inquiryNature: "",
    volume: "high",
    packaging: "bfs-ampoules",
    projectNotes: "",
    ndaCheck: true,
  });

  const [fileName, setFileName] = useState<string | null>(null);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [responseMessage, setResponseMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { id, value, type } = e.target;
    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({ ...prev, [id]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [id]: value }));
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFileName(e.target.files[0].name);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setResponseMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          fileName: fileName || "No file attached",
        }),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setStatus("success");
        setResponseMessage(
          data.message ||
            "Request submitted successfully. The Ayka Regulatory Affairs Liaison will review your specifications within 24 hours."
        );
        // Reset form
        setFormData({
          companyName: "",
          repName: "",
          email: "",
          phone: "",
          inquiryNature: "",
          volume: "high",
          packaging: "bfs-ampoules",
          projectNotes: "",
          ndaCheck: true,
        });
        setFileName(null);
      } else {
        setStatus("error");
        setResponseMessage(
          data.message || "Failed to submit request. Please check your inputs and try again."
        );
      }
    } catch (err) {
      console.error("Form submission error:", err);
      setStatus("error");
      setResponseMessage("Network error occurred. Please try again or email info@aykapharma.com.");
    }
  };

  return (
    <section className="bg-white p-6 md:p-8 rounded-2xl border border-border-subtle shadow-xs space-y-6" id="rfq-form">
      <div className="border-b border-border-subtle pb-4">
        <div className="flex items-center gap-2 text-teal font-semibold text-xs tracking-wider uppercase">
          <span className="material-symbols-outlined text-base">lock</span>
          <span>Controlled Technical Disclosure Channel</span>
        </div>
        <h2 className="text-2xl font-bold text-navy mt-1">
          Technical RFQ &amp; Batch Commissioning Request
        </h2>
        <p className="text-sm text-muted-text mt-1 leading-relaxed">
          Complete the protocol parameters below. Your specification will be routed directly to our Head of Quality Assurance and BFS Technical Operations.
        </p>
      </div>

      {status === "success" && (
        <div className="p-4 bg-[#F0FDF4] border border-[#BBF7D0] rounded-xl text-[#166534] flex items-start gap-3 animate-ayka-fade-up">
          <span className="material-symbols-outlined text-2xl text-success">verified</span>
          <div>
            <h3 className="font-bold text-sm">Submission Confirmed</h3>
            <p className="text-xs mt-0.5 leading-relaxed">{responseMessage}</p>
          </div>
        </div>
      )}

      {status === "error" && (
        <div className="p-4 bg-[#FEF2F2] border border-[#FCA5A5] rounded-xl text-[#991B1B] flex items-start gap-3 animate-ayka-fade-up">
          <span className="material-symbols-outlined text-2xl text-error">error</span>
          <div>
            <h3 className="font-bold text-sm">Submission Error</h3>
            <p className="text-xs mt-0.5 leading-relaxed">{responseMessage}</p>
          </div>
        </div>
      )}

      <form className="space-y-5" onSubmit={handleSubmit}>
        {/* Row 1: Company & Authorized Rep */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-navy" htmlFor="companyName">
              Organization / Pharmaceutical Company Name <span className="text-error">*</span>
            </label>
            <input
              type="text"
              id="companyName"
              value={formData.companyName}
              onChange={handleChange}
              placeholder="e.g. Novartis Healthcare / Cipla Ltd."
              required
              className="w-full bg-white border border-border-subtle rounded-lg px-3.5 py-2.5 text-sm text-body-text placeholder:text-muted-text transition-colors"
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-navy" htmlFor="repName">
              Authorized Representative &amp; Designation <span className="text-error">*</span>
            </label>
            <input
              type="text"
              id="repName"
              value={formData.repName}
              onChange={handleChange}
              placeholder="e.g. Dr. Rajesh Sharma, VP Quality / QP"
              required
              className="w-full bg-white border border-border-subtle rounded-lg px-3.5 py-2.5 text-sm text-body-text placeholder:text-muted-text transition-colors"
            />
          </div>
        </div>

        {/* Row 2: Corporate Email & Phone / WhatsApp */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-navy" htmlFor="email">
              Corporate / Institutional Email Address <span className="text-error">*</span>
            </label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="name@company.pharma"
              required
              className="w-full bg-white border border-border-subtle rounded-lg px-3.5 py-2.5 text-sm text-body-text placeholder:text-muted-text transition-colors"
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-navy" htmlFor="phone">
              Direct Phone / WhatsApp (with Country Code) <span className="text-error">*</span>
            </label>
            <input
              type="tel"
              id="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+91 98765 43210"
              required
              className="w-full bg-white border border-border-subtle rounded-lg px-3.5 py-2.5 text-sm text-body-text placeholder:text-muted-text transition-colors"
            />
          </div>
        </div>

        {/* Row 3: Nature of Inquiry Selector */}
        <div className="space-y-1.5">
          <label className="text-xs font-semibold text-navy" htmlFor="inquiryNature">
            Nature of Technical Inquiry <span className="text-error">*</span>
          </label>
          <select
            id="inquiryNature"
            value={formData.inquiryNature}
            onChange={handleChange}
            required
            className="w-full bg-white border border-border-subtle rounded-lg px-3.5 py-2.5 text-sm text-body-text transition-colors"
          >
            <option value="">Select Primary Objective</option>
            <option value="bfs-manufacturing">Contract Manufacturing / BFS Packaging (Blow-Fill-Seal)</option>
            <option value="electrolyte-sourcing">Ready-to-Drink Electrolyte / Prolyte ORS Sourcing</option>
            <option value="audit-scheduling">WHO-GMP / ISO 9001:2015 Facility Audit Scheduling</option>
            <option value="dossier-testing">Formulation &amp; Analytical Testing Dossier / CTD DMF</option>
            <option value="commercial-partnership">Other Commercial / Institutional Supply Partnership</option>
          </select>
        </div>

        {/* Row 4: Volume & Packaging Selectors */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-navy" htmlFor="volume">
              Target Batch / Monthly Volume
            </label>
            <select
              id="volume"
              value={formData.volume}
              onChange={handleChange}
              className="w-full bg-white border border-border-subtle rounded-lg px-3.5 py-2.5 text-sm text-body-text transition-colors"
            >
              <option value="pilot">Pilot Trial / R&amp;D Test Batches (10k - 50k units)</option>
              <option value="medium">Commercial Tier: 100,000 - 500,000 units/mo</option>
              <option value="high">Commercial Scale: 1,000,000+ units/month</option>
              <option value="custom">Custom Regulatory Tender Quantity</option>
            </select>
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-navy" htmlFor="packaging">
              Dosage &amp; Packaging Architecture
            </label>
            <select
              id="packaging"
              value={formData.packaging}
              onChange={handleChange}
              className="w-full bg-white border border-border-subtle rounded-lg px-3.5 py-2.5 text-sm text-body-text transition-colors"
            >
              <option value="bfs-ampoules">BFS Sterile Liquid Ampoules (0.5ml - 20ml)</option>
              <option value="bfs-vials">BFS Vials / Large Volume Parenterals (50ml - 500ml)</option>
              <option value="oral-bottles">Aseptic High-Speed Bottle Filling (200ml - 1000ml)</option>
              <option value="sachets">Multi-barrier Sachets &amp; Dry Suspensions</option>
              <option value="multidose">Preservative-Free Multi-dose Containers</option>
            </select>
          </div>
        </div>

        {/* Technical Specification & Requirements Details */}
        <div className="space-y-1.5">
          <label className="text-xs font-semibold text-navy" htmlFor="projectNotes">
            Technical Details / Formulation Specifications / Special Storage
          </label>
          <textarea
            id="projectNotes"
            rows={3}
            value={formData.projectNotes}
            onChange={handleChange}
            placeholder="Specify API, target pH, viscosity, sterility assurance level (SAL 10⁻⁶), stability profiles, or cGMP dossier requirements..."
            className="w-full bg-white border border-border-subtle rounded-lg px-3.5 py-2.5 text-sm text-body-text placeholder:text-muted-text transition-colors"
          />
        </div>

        {/* File Attachment Dropzone */}
        <div className="space-y-1.5">
          <label className="text-xs font-semibold text-navy">
            Tender Documents / RFP / Analytical Specs (Optional)
          </label>
          <div className="border-2 border-dashed border-border-subtle hover:border-teal rounded-xl p-5 text-center bg-light-bg transition-colors cursor-pointer group">
            <input
              type="file"
              id="file-upload"
              onChange={handleFileChange}
              className="hidden"
            />
            <label htmlFor="file-upload" className="cursor-pointer flex flex-col items-center">
              <span className="material-symbols-outlined text-3xl text-muted-text group-hover:text-teal transition-colors">
                cloud_upload
              </span>
              <span className="text-xs font-bold text-navy mt-1">
                {fileName ? `Attached: ${fileName}` : "Upload Specifications or Batch Sheet"}
              </span>
              <span className="text-[11px] text-muted-text mt-0.5">
                PDF, DOCX, or XLSX up to 25MB (Encrypted storage)
              </span>
            </label>
          </div>
        </div>

        {/* Mutual Non-Disclosure Agreement (NDA) Checkbox */}
        <div className="p-3.5 bg-light-bg border border-border-subtle rounded-xl flex items-start gap-3">
          <input
            type="checkbox"
            id="ndaCheck"
            checked={formData.ndaCheck}
            onChange={handleChange}
            className="mt-1 h-4 w-4 rounded border-border-subtle text-primary focus:ring-primary"
          />
          <label htmlFor="ndaCheck" className="text-xs text-body-text select-none cursor-pointer">
            <strong className="text-navy font-semibold">Execute Mutual Non-Disclosure Agreement (CDA/NDA)</strong>
            <span className="block text-muted-text mt-0.5">
              Transmit mutual confidentiality protocol prior to sharing proprietary formulations, master batch records (MBR), or master analytical test procedures.
            </span>
          </label>
        </div>

        {/* Submit Button */}
        <div className="pt-2">
          <button
            type="submit"
            disabled={status === "submitting"}
            className="btn-primary w-full py-3.5 text-base flex items-center justify-center gap-2 shadow-xs disabled:opacity-60"
          >
            {status === "submitting" ? (
              <>
                <svg className="animate-spin h-5 w-5 text-white" viewBox="0 0 24 24" fill="none">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                </svg>
                <span>Submitting to Regulatory Liaison...</span>
              </>
            ) : (
              <>
                <span className="material-symbols-outlined text-xl">verified</span>
                <span>Submit Technical Request &amp; RFQ</span>
              </>
            )}
          </button>
          <div className="flex items-center justify-center gap-2 mt-3 text-xs text-muted-text">
            <span className="material-symbols-outlined text-sm text-success">lock</span>
            <span>Encrypted submission • Direct QA routing • 24hr priority review SLA</span>
          </div>
        </div>
      </form>
    </section>
  );
}
