import Link from "next/link";

export default function AboutHero() {
  return (
    <section className="bg-light-bg py-12 md:py-16 border-b border-border-subtle">
      <div className="ayka-container space-y-6 text-center max-w-4xl mx-auto">
        <div className="inline-flex items-center space-x-2 bg-white px-3.5 py-1.5 rounded-full border border-border-subtle shadow-2xs">
          <span className="w-2.5 h-2.5 rounded-full bg-teal animate-pulse" />
          <span className="text-xs font-bold text-navy uppercase tracking-wider">
            INNOVATING HEALTHCARE SOLUTIONS &bull; CENTRAL INDIA HUB
          </span>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-navy tracking-tight leading-tight">
          About <span className="text-teal">Ayka Pharma</span>
        </h1>

        <p className="text-base md:text-lg text-body-text leading-relaxed max-w-3xl mx-auto">
          AYKA PHARMA is a state-of-the-art pharmaceutical manufacturing unit located in Indore, Madhya Pradesh. As one of India&apos;s largest producers of Liquid Oral Rehydration Solution (ORS), we operate under strict WHO guidelines to deliver ultra-safe aseptic liquid packaging at industrial scale.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 text-center">
          <div className="p-4 bg-white rounded-xl border border-border-subtle shadow-2xs">
            <div className="text-2xl md:text-3xl font-extrabold text-navy">1.5 Cr+</div>
            <div className="text-xs font-semibold text-muted-text mt-1">Monthly Pouches</div>
          </div>
          <div className="p-4 bg-white rounded-xl border border-border-subtle shadow-2xs">
            <div className="text-2xl md:text-3xl font-extrabold text-teal">Class D</div>
            <div className="text-xs font-semibold text-muted-text mt-1">Cleanroom Filling</div>
          </div>
          <div className="p-4 bg-white rounded-xl border border-border-subtle shadow-2xs">
            <div className="text-2xl md:text-3xl font-extrabold text-primary">WHO-GMP</div>
            <div className="text-xs font-semibold text-muted-text mt-1">Certified Facility</div>
          </div>
          <div className="p-4 bg-white rounded-xl border border-border-subtle shadow-2xs">
            <div className="text-2xl md:text-3xl font-extrabold text-navy">ISO 9001</div>
            <div className="text-xs font-semibold text-muted-text mt-1">Quality Accredited</div>
          </div>
        </div>
      </div>
    </section>
  );
}
