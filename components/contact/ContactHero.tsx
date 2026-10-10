export default function ContactHero() {
  return (
    <section className="space-y-6">
      {/* Regulatory Pill Badge */}
      <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-light-bg border border-border-subtle shadow-xs">
        <span className="w-2 h-2 rounded-full bg-success animate-pulse" />
        <span className="text-xs font-bold text-navy tracking-wider uppercase">
          Regulatory &amp; Technical Inquiries • Direct Facility Access
        </span>
      </div>

      {/* Main Headline */}
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-navy tracking-tight leading-tight">
        Connect with Our Sterile Manufacturing Team
      </h1>

      {/* Subhead Paragraph */}
      <p className="text-base md:text-lg text-body-text max-w-3xl leading-relaxed">
        Whether commissioning contract manufacturing, requesting DMF dossiers, scheduling a cGMP facility audit, or planning BFS batch packaging, our regulatory liaison team responds within 24 hours.
      </p>

      {/* Cleanroom Grade Status Strip */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 pt-2">
        <div className="p-4 bg-white border border-border-subtle rounded-xl flex items-center gap-3 shadow-xs transition-transform hover:-translate-y-0.5">
          <span className="material-symbols-outlined text-primary text-2xl">science</span>
          <div>
            <div className="text-[11px] font-bold tracking-wider text-muted-text uppercase">Cleanroom Class</div>
            <div className="text-sm font-bold text-navy">GRADE A / ISO 5</div>
          </div>
        </div>

        <div className="p-4 bg-white border border-border-subtle rounded-xl flex items-center gap-3 shadow-xs transition-transform hover:-translate-y-0.5">
          <span className="material-symbols-outlined text-success text-2xl">fact_check</span>
          <div>
            <div className="text-[11px] font-bold tracking-wider text-muted-text uppercase">Accreditation</div>
            <div className="text-sm font-bold text-navy">WHO-GMP &amp; ISO</div>
          </div>
        </div>

        <div className="p-4 bg-white border border-border-subtle rounded-xl flex items-center gap-3 shadow-xs transition-transform hover:-translate-y-0.5">
          <span className="material-symbols-outlined text-teal text-2xl">biotech</span>
          <div>
            <div className="text-[11px] font-bold tracking-wider text-muted-text uppercase">Fill Technology</div>
            <div className="text-sm font-bold text-navy">Aseptic BFS Monobloc</div>
          </div>
        </div>

        <div className="p-4 bg-white border border-border-subtle rounded-xl flex items-center gap-3 shadow-xs transition-transform hover:-translate-y-0.5">
          <span className="material-symbols-outlined text-navy text-2xl">timer</span>
          <div>
            <div className="text-[11px] font-bold tracking-wider text-muted-text uppercase">Liaison SLA</div>
            <div className="text-sm font-bold text-navy">&lt; 24 Hour Callback</div>
          </div>
        </div>
      </div>
    </section>
  );
}
