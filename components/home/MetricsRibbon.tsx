export default function MetricsRibbon() {
  const metrics = [
    {
      value: "1.5 Cr+",
      sub: "15 Million Pouches",
      label: "Monthly Installed Capacity",
      icon: "precision_manufacturing",
      color: "text-navy",
      accent: "bg-navy/5 text-navy",
    },
    {
      value: "8 Flavors",
      sub: "Pleasant & Mild",
      label: "Aykalute Liquid ORS",
      icon: "medication",
      color: "text-teal",
      accent: "bg-teal/10 text-teal",
    },
    {
      value: "Class D",
      sub: "Sterile Filling Suite",
      label: "RH & Temp Controlled Area",
      icon: "clean_hands",
      color: "text-primary",
      accent: "bg-primary/10 text-primary",
    },
    {
      value: "WHO-GMP",
      sub: "ISO 9001:2015",
      label: "Quality & Safety Certified",
      icon: "verified",
      color: "text-success",
      accent: "bg-success/10 text-success",
    },
  ];

  return (
    <section className="border-y border-border-subtle bg-light-bg/70 py-10 relative">
      <div className="ayka-container">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {metrics.map((metric, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl border border-border-subtle bg-white shadow-2xs transition-all duration-300 hover:-translate-y-1 hover:shadow-clinical flex flex-col justify-between"
            >
              <div className="flex items-center justify-between mb-3">
                <span className={`p-2 rounded-xl text-lg inline-flex ${metric.accent}`}>
                  <span className="material-symbols-outlined">{metric.icon}</span>
                </span>
                <span className="text-[10px] font-extrabold uppercase tracking-wider text-muted-text bg-light-bg px-2.5 py-1 rounded-full border border-border-subtle">
                  {metric.sub}
                </span>
              </div>
              <div>
                <div className={`text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight font-heading ${metric.color}`}>
                  {metric.value}
                </div>
                <div className="text-xs sm:text-sm font-semibold text-body-text mt-1">
                  {metric.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
