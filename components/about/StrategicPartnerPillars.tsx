import Link from "next/link";

const PILLARS = [
  {
    title: "Reliable Supply Chain",
    icon: "local_shipping",
    description: "Proven track record of timely delivery and robust logistics support to prevent out-of-stock scenarios.",
    highlight: "Dependable Logistics",
  },
  {
    title: "Low MOQ Co-Packing",
    icon: "handshake",
    description: "Co-pack your brand at Ayka with low Minimum Order Quantity (MOQ) requirements for rapid market entry.",
    highlight: "Low MOQ Flexible Runs",
  },
  {
    title: "Competitive Pricing",
    icon: "savings",
    description: "High-efficiency production processes allow us to offer cost-effective pricing for mass distribution.",
    highlight: "Cost-Effective Scale",
  },
  {
    title: "Export Ready",
    icon: "public",
    description: "Fully compliant documentation, regulatory filings, and registration processes for global market access.",
    highlight: "Global Regulatory Support",
  },
  {
    title: "Custom Formulations",
    icon: "science",
    description: "Capability to produce proprietary or specific market formulations upon request (MOQs apply).",
    highlight: "Tailored OEM / ODM",
  },
];

export default function StrategicPartnerPillars() {
  return (
    <section className="py-12 md:py-16 bg-white" id="strategic-partner">
      <div className="ayka-container space-y-10">
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <span className="text-xs font-bold text-teal uppercase tracking-wider">
            PARTNER WITH US &bull; YOUR TRUSTED SUPPLIER
          </span>
          <h2 className="text-2xl md:text-4xl font-extrabold text-navy">
            Strategic Value for Healthcare Partners
          </h2>
          <p className="text-sm md:text-base text-muted-text leading-relaxed">
            We are more than a manufacturer; we are a strategic partner committed to your success in the healthcare market.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PILLARS.map((pillar, idx) => (
            <div key={idx} className="ayka-card space-y-3 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-xl bg-light-bg flex items-center justify-center text-teal border border-border-subtle">
                  <span className="material-symbols-outlined text-2xl">{pillar.icon}</span>
                </div>
                <span className="inline-block px-2.5 py-0.5 rounded text-[10px] font-bold bg-[#ECFDF5] text-success uppercase tracking-wider">
                  {pillar.highlight}
                </span>
                <h3 className="text-lg font-bold text-navy">{pillar.title}</h3>
                <p className="text-xs md:text-sm text-muted-text leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            </div>
          ))}

          {/* CTA Box Card */}
          <div className="ayka-card bg-navy text-white space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <span className="inline-block px-2.5 py-0.5 rounded text-[10px] font-bold bg-teal text-white uppercase tracking-wider">
                COMMERCIAL INQUIRIES
              </span>
              <h3 className="text-lg font-bold text-white">Start Your B2B Partnership</h3>
              <p className="text-xs md:text-sm text-slate-300 leading-relaxed">
                Contact our sales team to discuss MOQ, registration requirements, and private label opportunities.
              </p>
            </div>
            <Link
              href="/contact"
              className="btn-primary bg-teal hover:bg-teal/90 text-white text-xs py-2.5 px-4 w-full justify-center cursor-pointer"
            >
              Connect with Sales Desk
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
