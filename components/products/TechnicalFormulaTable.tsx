import Link from "next/link";

const FORMULA_ROWS = [
  {
    component: "Sodium Chloride (NaCl)",
    mmol: "75",
    weight: "2.6",
    purpose: "Sodium source & osmotic balance",
  },
  {
    component: "Tri-Sodium Citrate Dihydrate",
    mmol: "10",
    weight: "2.9",
    purpose: "Alkalizing agent to correct acidosis",
  },
  {
    component: "Potassium Chloride (KCl)",
    mmol: "20",
    weight: "1.5",
    purpose: "Potassium source for cellular balance",
  },
  {
    component: "Anhydrous Glucose",
    mmol: "75",
    weight: "13.5",
    purpose: "Co-transport mechanism for rapid sodium absorption",
  },
];

export default function TechnicalFormulaTable() {
  return (
    <section className="py-12 md:py-16 bg-light-bg border-y border-border-subtle" id="technical-formula">
      <div className="ayka-container space-y-8">
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <span className="text-xs font-bold text-teal uppercase tracking-wider">
            WHO / UNICEF LOW OSMOLARITY STANDARD
          </span>
          <h2 className="text-2xl md:text-4xl font-extrabold text-navy">
            Technical Formula (Per Liter)
          </h2>
          <p className="text-sm md:text-base text-muted-text leading-relaxed">
            Our Liquid Oral Rehydration Solution is meticulously manufactured to meet the latest global standards, ensuring maximum efficacy and bioavailability.
          </p>
        </div>

        <div className="bg-white rounded-2xl border border-border-subtle shadow-xs overflow-hidden">
          <div className="bg-navy text-white p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h3 className="text-lg font-bold text-white">Formulation Breakdown</h3>
              <p className="text-xs text-slate-300">Aligned with WHO/UNICEF Low Osmolarity ORS recommended guidelines</p>
            </div>
            <div className="px-3.5 py-1.5 bg-teal text-white rounded-lg text-xs font-extrabold tracking-wider uppercase shadow-2xs self-start sm:self-auto">
              TOTAL OSMOLARITY: 75 MMOL/L
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs md:text-sm border-collapse">
              <thead>
                <tr className="bg-light-bg border-b border-border-subtle font-bold text-navy">
                  <th className="py-3.5 px-4 md:px-6">Component</th>
                  <th className="py-3.5 px-4 md:px-6">Concentration (MMOL/L)</th>
                  <th className="py-3.5 px-4 md:px-6">Weight (g/l)</th>
                  <th className="py-3.5 px-4 md:px-6">Physiological Purpose</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border-subtle text-body-text">
                {FORMULA_ROWS.map((row, idx) => (
                  <tr key={idx} className="hover:bg-light-bg/50 transition-colors">
                    <td className="py-3.5 px-4 md:px-6 font-bold text-navy">{row.component}</td>
                    <td className="py-3.5 px-4 md:px-6 font-extrabold text-teal">{row.mmol}</td>
                    <td className="py-3.5 px-4 md:px-6 font-semibold text-primary">{row.weight}</td>
                    <td className="py-3.5 px-4 md:px-6 text-muted-text">{row.purpose}</td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr className="bg-light-bg font-extrabold text-navy border-t-2 border-border-subtle">
                  <td className="py-4 px-4 md:px-6 uppercase">TOTAL OSMOLARITY</td>
                  <td className="py-4 px-4 md:px-6 text-teal text-base">75 MMOL/L</td>
                  <td className="py-4 px-4 md:px-6 text-primary text-base">20.5 g/l</td>
                  <td className="py-4 px-4 md:px-6 text-success">Optimal water &amp; electrolyte absorption</td>
                </tr>
              </tfoot>
            </table>
          </div>

          <div className="p-4 bg-white border-t border-border-subtle text-xs text-muted-text flex items-start gap-2">
            <span className="material-symbols-outlined text-teal text-base shrink-0 mt-0.5">info</span>
            <p>
              <strong className="text-navy font-semibold">Regulatory Note:</strong> This formulation aligns with the WHO/UNICEF Low Osmolarity ORS standard, recommended for superior treatment of dehydration due to acute diarrhoea.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
