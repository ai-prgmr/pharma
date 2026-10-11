import Link from "next/link";

const STEPS = [
  {
    step: "01",
    title: "Initial Inquiry & Volume Scope",
    description: "Submit target volume, volume spec (125ml/200ml), flavor preference, and branding requirements.",
  },
  {
    step: "02",
    title: "Commercial Quote & MOQ Alignment",
    description: "Our sales team provides transparent pricing, minimum order quantities, and delivery timelines.",
  },
  {
    step: "03",
    title: "Artwork Approval & Pilot Batch",
    description: "Finalize packaging film artwork and execute pilot scale batch runs for quality validation.",
  },
  {
    step: "04",
    title: "Commercial Filling & Global Dispatch",
    description: "Full scale-up in Class D cleanroom environment followed by analytical release testing and dispatch.",
  },
];

export default function OemProcessSteps() {
  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="ayka-container space-y-10">
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <span className="text-xs font-bold text-teal uppercase tracking-wider">
            TRANSPARENT ONBOARDING
          </span>
          <h2 className="text-2xl md:text-4xl font-extrabold text-navy">
            How to Co-Pack with Ayka Pharma
          </h2>
          <p className="text-sm md:text-base text-muted-text leading-relaxed">
            From initial enquiry to commercial dispatch—our streamlined 4-step B2B process ensures fast turnaround and zero hassle.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {STEPS.map((s, idx) => (
            <div key={idx} className="ayka-card space-y-3 relative overflow-hidden">
              <div className="text-3xl font-extrabold text-teal opacity-80">{s.step}</div>
              <h3 className="text-base font-bold text-navy">{s.title}</h3>
              <p className="text-xs text-muted-text leading-relaxed">{s.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center pt-4">
          <Link href="/contact#rfq-form" className="btn-primary text-sm py-3.5 px-8 cursor-pointer">
            Start Your Contract Manufacturing Inquiry
          </Link>
        </div>
      </div>
    </section>
  );
}
