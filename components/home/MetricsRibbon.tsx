export default function MetricsRibbon() {
  const metrics = [
    { value: "35+", label: "Years Experience", color: "text-navy" },
    { value: "100%", label: "Sterile Aseptic Assurance", color: "text-teal" },
    { value: "ISO", label: "9001:2015 Accredited", color: "text-navy" },
    { value: "BFS", label: "Form-Fill-Seal Architecture", color: "text-primary" },
  ];

  return (
    <section className="border-y border-border-subtle bg-light-bg py-8">
      <div className="ayka-container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {metrics.map((metric, idx) => (
            <div
              key={idx}
              className="text-center p-4 rounded-xl border border-border-subtle bg-white shadow-xs transition-transform hover:-translate-y-0.5"
            >
              <div className={`text-3xl md:text-4xl font-extrabold ${metric.color}`}>
                {metric.value}
              </div>
              <div className="text-xs md:text-sm font-semibold text-muted-text mt-1">
                {metric.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
