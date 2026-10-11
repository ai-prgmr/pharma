import Image from "next/image";

export default function ManufacturingExcellence() {
  return (
    <section className="py-12 md:py-16 bg-white" id="manufacturing-facility">
      <div className="ayka-container space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <span className="text-xs font-bold text-teal uppercase tracking-wider">
            MANUFACTURING EXCELLENCE &bull; BUILT FOR SCALE &amp; COMPLIANCE
          </span>
          <h2 className="text-2xl md:text-4xl font-extrabold text-navy">
            State-of-the-Art Pharmaceutical Plant
          </h2>
          <p className="text-sm md:text-base text-muted-text leading-relaxed">
            AYKA PHARMA is a premier manufacturing unit located in Jamaniya Khurd, Indore, MP. Adhering strictly to WHO requirements at every stage.
          </p>
        </div>

        {/* Feature Narrative Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6 space-y-5">
            <h3 className="text-xl md:text-2xl font-extrabold text-navy">
              India&apos;s Premier Producer of Liquid ORS Solutions
            </h3>
            <p className="text-xs md:text-sm text-body-text leading-relaxed">
              AYKA PHARMA is one of India&apos;s largest producers of Liquid Oral Rehydration Solution (ORS), formulated according to WHO guidelines and delivering innovative, ultra-safe aseptic packaging.
            </p>
            <p className="text-xs md:text-sm text-body-text leading-relaxed">
              Our facility adheres to the highest global standards, ensuring efficacy and patient safety at every step. Filling takes place in a certified Class D environment supported by complete Temperature and Relative Humidity (RH) control across all secondary production areas.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-3.5 bg-light-bg rounded-xl border border-border-subtle space-y-1">
                <div className="flex items-center gap-2 text-navy font-bold text-sm">
                  <span className="material-symbols-outlined text-teal text-lg">clean_hands</span>
                  <span>Class D Environment</span>
                </div>
                <p className="text-xs text-muted-text">Sterile filling with automated temperature &amp; RH control</p>
              </div>

              <div className="p-3.5 bg-light-bg rounded-xl border border-border-subtle space-y-1">
                <div className="flex items-center gap-2 text-navy font-bold text-sm">
                  <span className="material-symbols-outlined text-primary text-lg">touch_app</span>
                  <span>Touch-Free Filling</span>
                </div>
                <p className="text-xs text-muted-text">Advanced sterile filling technology preventing contamination</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="relative h-56 rounded-2xl overflow-hidden border border-border-subtle shadow-xs">
              <Image
                src="/pharma/images/hero/hero_machinery_1.png"
                alt="Aseptic Manufacturing Machinery"
                fill
                className="object-cover"
                unoptimized
              />
              <div className="absolute inset-x-0 bottom-0 bg-navy/80 p-3 text-white text-xs font-semibold">
                Tetra Pak &amp; Aseptic Packaging Suite
              </div>
            </div>
            <div className="relative h-56 rounded-2xl overflow-hidden border border-border-subtle shadow-xs">
              <Image
                src="/pharma/images/hero/hero_machinery_2.png"
                alt="Cleanroom Filling Environment"
                fill
                className="object-cover"
                unoptimized
              />
              <div className="absolute inset-x-0 bottom-0 bg-navy/80 p-3 text-white text-xs font-semibold">
                High-Capacity Automated Production Line
              </div>
            </div>
          </div>
        </div>

        {/* Key Production Capabilities List */}
        <div className="bg-light-bg p-6 md:p-8 rounded-2xl border border-border-subtle space-y-6">
          <h3 className="text-lg font-bold text-navy text-center">Core Production Capabilities</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-xs md:text-sm">
            <div className="bg-white p-4 rounded-xl border border-border-subtle flex items-start gap-3">
              <span className="material-symbols-outlined text-teal text-xl shrink-0">inventory_2</span>
              <div>
                <strong className="text-navy block font-bold text-sm mb-0.5">Flexible Packaging Options</strong>
                <span className="text-muted-text">Available in standard 125ml and 200ml aseptic barrier pouches</span>
              </div>
            </div>

            <div className="bg-white p-4 rounded-xl border border-border-subtle flex items-start gap-3">
              <span className="material-symbols-outlined text-primary text-xl shrink-0">speed</span>
              <div>
                <strong className="text-navy block font-bold text-sm mb-0.5">High-Capacity Output</strong>
                <span className="text-muted-text">Installed capacity of 1.5 crore (15 million) pouches per month</span>
              </div>
            </div>

            <div className="bg-white p-4 rounded-xl border border-border-subtle flex items-start gap-3">
              <span className="material-symbols-outlined text-success text-xl shrink-0">shield_lock</span>
              <div>
                <strong className="text-navy block font-bold text-sm mb-0.5">Aseptic Advantage</strong>
                <span className="text-muted-text">Advanced aseptic filling technology ensuring maximum safety</span>
              </div>
            </div>

            <div className="bg-white p-4 rounded-xl border border-border-subtle flex items-start gap-3">
              <span className="material-symbols-outlined text-teal text-xl shrink-0">sanitizer</span>
              <div>
                <strong className="text-navy block font-bold text-sm mb-0.5">Sterile Filling Environment</strong>
                <span className="text-muted-text">Class D room parameters with HEPA air filtration control</span>
              </div>
            </div>

            <div className="bg-white p-4 rounded-xl border border-border-subtle flex items-start gap-3">
              <span className="material-symbols-outlined text-primary text-xl shrink-0">precision_manufacturing</span>
              <div>
                <strong className="text-navy block font-bold text-sm mb-0.5">Touch-Free Lines</strong>
                <span className="text-muted-text">Fully automated continuous processing from formulation to seal</span>
              </div>
            </div>

            <div className="bg-white p-4 rounded-xl border border-border-subtle flex items-start gap-3">
              <span className="material-symbols-outlined text-navy text-xl shrink-0">thermostat</span>
              <div>
                <strong className="text-navy block font-bold text-sm mb-0.5">RH &amp; Temp Control</strong>
                <span className="text-muted-text">Strict secondary area temperature and relative humidity management</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
