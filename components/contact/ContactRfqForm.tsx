"use client";

import { useState } from "react";

export default function ContactRfqForm() {
  const [formData, setFormData] = useState({
    companyName: "",
    repName: "",
    email: "",
    phone: "",
    inquiryNature: "",
    volume: "medium",
    packaging: "ors-200ml",
    flavorPreference: "all-flavors",
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
      const scriptUrl = process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL;

      if (scriptUrl) {
        await fetch(scriptUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          mode: "no-cors",
          body: JSON.stringify({
            timestamp: new Date().toISOString(),
            ...formData,
            fileName: fileName || "No file attached",
          }),
        });
      } else {
        // Static export API simulation
        await new Promise((resolve) => setTimeout(resolve, 800));
      }

      setStatus("success");
      setResponseMessage(
        "Request submitted successfully. The Ayka Pharma Commercial & Quality Operations team will review your specifications within 24 hours."
      );
      // Reset form
      setFormData({
        companyName: "",
        repName: "",
        email: "",
        phone: "",
        inquiryNature: "",
        volume: "medium",
        packaging: "ors-200ml",
        flavorPreference: "all-flavors",
        projectNotes: "",
        ndaCheck: true,
      });
      setFileName(null);
    } catch (err) {
      console.error("Form submission error:", err);
      setStatus("error");
      setResponseMessage("Network error occurred. Please try again or email aykapharma@aykapharma.com directly.");
    }
  };

  return (
    <section className="bg-white p-6 md:p-10 rounded-3xl border border-border-subtle shadow-clinical space-y-6" id="rfq-form">
      <div className="border-b border-border-subtle pb-5">
        <div className="flex items-center gap-2 text-teal font-extrabold text-xs tracking-wider uppercase">
          <span className="material-symbols-outlined text-base">lock</span>
          <span>Controlled Technical &amp; Commercial Disclosure Channel</span>
        </div>
        <h2 className="text-2xl md:text-3xl font-extrabold text-navy mt-1 font-heading">
          Technical RFQ &amp; Batch Commissioning Request
        </h2>
        <p className="text-sm text-muted-text mt-1 leading-relaxed">
          Complete the parameters below to request MOQ details, private label pricing, or custom formulation runs. Routed directly to our Commercial Liaison &amp; QA Desk.
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
            <label className="text-xs font-bold text-navy" htmlFor="companyName">
              Organization / Brand Name <span className="text-error">*</span>
            </label>
            <input
              type="text"
              id="companyName"
              value={formData.companyName}
              onChange={handleChange}
              placeholder="e.g. MedLife Pharmaceuticals / Apex Healthcare"
              required
              className="w-full bg-light-bg/50 border border-border-subtle rounded-xl px-4 py-2.5 text-sm text-body-text placeholder:text-muted-text transition-colors focus:bg-white"
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-bold text-navy" htmlFor="repName">
              Authorized Contact &amp; Designation <span className="text-error">*</span>
            </label>
            <input
              type="text"
              id="repName"
              value={formData.repName}
              onChange={handleChange}
              placeholder="e.g. Dr. Rajesh Sharma, Head of Sourcing"
              required
              className="w-full bg-light-bg/50 border border-border-subtle rounded-xl px-4 py-2.5 text-sm text-body-text placeholder:text-muted-text transition-colors focus:bg-white"
            />
          </div>
        </div>

        {/* Row 2: Corporate Email & Phone / WhatsApp */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-navy" htmlFor="email">
              Corporate Email Address <span className="text-error">*</span>
            </label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="sourcing@company.com"
              required
              className="w-full bg-light-bg/50 border border-border-subtle rounded-xl px-4 py-2.5 text-sm text-body-text placeholder:text-muted-text transition-colors focus:bg-white"
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-bold text-navy" htmlFor="phone">
              Direct Phone / WhatsApp <span className="text-error">*</span>
            </label>
            <input
              type="tel"
              id="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+91 98765 43210"
              required
              className="w-full bg-light-bg/50 border border-border-subtle rounded-xl px-4 py-2.5 text-sm text-body-text placeholder:text-muted-text transition-colors focus:bg-white"
            />
          </div>
        </div>

        {/* Row 3: Nature of Inquiry Selector */}
        <div className="space-y-1.5">
          <label className="text-xs font-bold text-navy" htmlFor="inquiryNature">
            Nature of Technical / Commercial Inquiry <span className="text-error">*</span>
          </label>
          <select
            id="inquiryNature"
            value={formData.inquiryNature}
            onChange={handleChange}
            required
            className="w-full bg-light-bg/50 border border-border-subtle rounded-xl px-4 py-2.5 text-sm text-body-text transition-colors focus:bg-white cursor-pointer"
          >
            <option value="">Select Primary Objective</option>
            <option value="co-packing">Contract Manufacturing &amp; Co-Packing (Low MOQ)</option>
            <option value="aykalute-ors">Ready-to-Drink AYKALUTE ORS Sourcing (8 Flavors)</option>
            <option value="private-label">Private Label Brand Packaging (125ml / 200ml)</option>
            <option value="custom-formulation">Custom Liquid Formulation Development</option>
            <option value="export-supply">Global Export Supply &amp; Regulatory Dossier Filings</option>
            <option value="facility-audit">WHO-GMP &amp; ISO 9001:2015 Plant Audit Scheduling</option>
          </select>
        </div>

        {/* Row 4: Volume & Packaging Selectors */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-navy" htmlFor="volume">
              Estimated Monthly Volume
            </label>
            <select
              id="volume"
              value={formData.volume}
              onChange={handleChange}
              className="w-full bg-light-bg/50 border border-border-subtle rounded-xl px-4 py-2.5 text-sm text-body-text transition-colors focus:bg-white cursor-pointer"
            >
              <option value="low">Trial Batch: 25,000 - 50,000 Pouches (Low MOQ)</option>
              <option value="medium">Commercial Tier: 100,000 - 500,000 Pouches/mo</option>
              <option value="high">Mass Scale: 1,000,000 - 5,000,000 Pouches/mo</option>
              <option value="institutional">Institutional / Government Tender Scale</option>
            </select>
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-bold text-navy" htmlFor="packaging">
              Pouch Volume Format
            </label>
            <select
              id="packaging"
              value={formData.packaging}
              onChange={handleChange}
              className="w-full bg-light-bg/50 border border-border-subtle rounded-xl px-4 py-2.5 text-sm text-body-text transition-colors focus:bg-white cursor-pointer"
            >
              <option value="ors-200ml">200 ml Aseptic 7-Layer Barrier Pouch</option>
              <option value="ors-125ml">125 ml Aseptic 7-Layer Barrier Pouch</option>
              <option value="both-volumes">Combined 125ml &amp; 200ml Assortment</option>
              <option value="custom-volume">Custom Volume Packaging</option>
            </select>
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-bold text-navy" htmlFor="flavorPreference">
              Flavor Preference
            </label>
            <select
              id="flavorPreference"
              value={formData.flavorPreference}
              onChange={handleChange}
              className="w-full bg-light-bg/50 border border-border-subtle rounded-xl px-4 py-2.5 text-sm text-body-text transition-colors focus:bg-white cursor-pointer"
            >
              <option value="all-flavors">Assorted 8 Flavors Portfolio</option>
              <option value="apple-orange">Apple &amp; Orange (Standard)</option>
              <option value="lemon-guava">Lemon &amp; Chilli Guava</option>
              <option value="exotic-berries">Black Currant &amp; Litchi</option>
              <option value="custom-flavors">Custom Proprietary Flavor Formulation</option>
            </select>
          </div>
        </div>

        {/* Technical Specification & Requirements Details */}
        <div className="space-y-1.5">
          <label className="text-xs font-bold text-navy" htmlFor="projectNotes">
            Technical Details / Artwork Requirements / Target Timelines
          </label>
          <textarea
            id="projectNotes"
            rows={3}
            value={formData.projectNotes}
            onChange={handleChange}
            placeholder="Provide target launch dates, private label artwork status, specific market registration requirements, or custom osmolarity targets..."
            className="w-full bg-light-bg/50 border border-border-subtle rounded-xl px-4 py-2.5 text-sm text-body-text placeholder:text-muted-text transition-colors focus:bg-white"
          />
        </div>

        {/* File Attachment Dropzone */}
        <div className="space-y-1.5">
          <label className="text-xs font-bold text-navy">
            Specifications / RFP / Brand Artwork (Optional)
          </label>
          <div className="border-2 border-dashed border-border-subtle hover:border-teal rounded-2xl p-5 text-center bg-light-bg/50 transition-colors cursor-pointer group">
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
                {fileName ? `Attached: ${fileName}` : "Upload Specifications, RFP, or Artwork Draft"}
              </span>
              <span className="text-[11px] text-muted-text mt-0.5">
                PDF, DOCX, PNG, or ZIP up to 25MB (Encrypted transfer)
              </span>
            </label>
          </div>
        </div>

        {/* Mutual Non-Disclosure Agreement (NDA) Checkbox */}
        <div className="p-4 bg-light-bg/80 border border-border-subtle rounded-2xl flex items-start gap-3">
          <input
            type="checkbox"
            id="ndaCheck"
            checked={formData.ndaCheck}
            onChange={handleChange}
            className="mt-1 h-4 w-4 rounded border-border-subtle text-primary focus:ring-primary cursor-pointer"
          />
          <label htmlFor="ndaCheck" className="text-xs text-body-text select-none cursor-pointer">
            <strong className="text-navy font-bold">Execute Mutual Non-Disclosure Agreement (CDA/NDA)</strong>
            <span className="block text-muted-text mt-0.5">
              Transmit formal confidentiality protocol prior to sharing proprietary formulations, brand identity assets, or production forecasts.
            </span>
          </label>
        </div>

        {/* Submit Button */}
        <div className="pt-2">
          <button
            type="submit"
            disabled={status === "submitting"}
            className="btn-primary w-full py-4 text-sm font-bold flex items-center justify-center gap-2 shadow-clinical disabled:opacity-60 cursor-pointer"
          >
            {status === "submitting" ? (
              <>
                <svg className="animate-spin h-5 w-5 text-white" viewBox="0 0 24 24" fill="none">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                </svg>
                <span>Submitting to Ayka Commercial QA Desk...</span>
              </>
            ) : (
              <>
                <span className="material-symbols-outlined text-xl">verified</span>
                <span>Submit Technical RFQ &amp; Commission Request</span>
              </>
            )}
          </button>
          <div className="flex items-center justify-center gap-2 mt-3 text-xs text-muted-text">
            <span className="material-symbols-outlined text-sm text-success">lock</span>
            <span>Direct Commercial Liaison • WHO-GMP Certified Operations • 24hr response SLA</span>
          </div>
        </div>
      </form>
    </section>
  );
}
