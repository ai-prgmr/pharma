"use client";

import { useState } from "react";

export default function ContactDirectChannels() {
  const [copied, setCopied] = useState(false);
  const emailAddress = "info@aykapharma.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section className="space-y-4">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
        <h2 className="text-xl font-bold text-navy flex items-center gap-2">
          <span className="material-symbols-outlined text-teal">contact_support</span>
          Direct Channels &amp; Priority Desks
        </h2>
        <span className="text-xs font-semibold text-success flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-success" /> Available 09:00 - 18:00 IST
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Direct Technical Liaison Card */}
        <div className="ayka-card flex flex-col justify-between space-y-4">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="p-2.5 bg-light-bg rounded-lg text-navy inline-flex">
                <span className="material-symbols-outlined">mail</span>
              </span>
              <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-light-bg text-muted-text">
                PRIMARY
              </span>
            </div>
            <div>
              <div className="text-[11px] font-bold text-muted-text uppercase tracking-wider">
                Direct Technical Liaison
              </div>
              <div className="text-base font-bold text-navy truncate select-all mt-0.5">
                {emailAddress}
              </div>
              <p className="text-xs text-muted-text mt-1 leading-relaxed">
                Encrypted regulatory transmission, analytical data, &amp; dossier files
              </p>
            </div>
          </div>
          <div className="pt-3 border-t border-border-subtle flex items-center gap-2">
            <a
              href={`mailto:${emailAddress}`}
              className="flex-1 btn-primary text-xs py-2 px-3 text-center"
            >
              Compose Email
            </a>
            <button
              type="button"
              onClick={handleCopyEmail}
              className="py-2 px-3 rounded-lg border border-border-subtle hover:bg-light-bg text-navy text-xs font-medium transition-colors flex items-center gap-1"
              title="Copy Address"
            >
              <span className="material-symbols-outlined text-base">
                {copied ? "check" : "content_copy"}
              </span>
              {copied && <span className="text-[10px]">Copied</span>}
            </button>
          </div>
        </div>

        {/* Facility Hotline / Regulatory Affairs Desk */}
        <div className="ayka-card flex flex-col justify-between space-y-4">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="p-2.5 bg-light-bg rounded-lg text-teal inline-flex">
                <span className="material-symbols-outlined">call</span>
              </span>
              <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-light-bg text-muted-text">
                HOTLINE
              </span>
            </div>
            <div>
              <div className="text-[11px] font-bold text-muted-text uppercase tracking-wider">
                Regulatory Affairs Desk
              </div>
              <div className="text-base font-bold text-navy mt-0.5">
                +91 (0731) 489-2100
              </div>
              <p className="text-xs text-muted-text mt-1 leading-relaxed">
                Direct phone escalation for regulatory inspectors &amp; corporate clients
              </p>
            </div>
          </div>
          <div className="pt-3 border-t border-border-subtle flex items-center gap-2">
            <a
              href="tel:+9107314892100"
              className="flex-1 btn-primary text-xs py-2 px-3 text-center"
            >
              Call Hotline
            </a>
            <a
              href="https://wa.me/9107314892100"
              target="_blank"
              rel="noopener noreferrer"
              className="py-2 px-3 rounded-lg border border-border-subtle hover:bg-light-bg text-success text-xs font-medium transition-colors flex items-center gap-1"
              title="WhatsApp Message"
            >
              <span className="material-symbols-outlined text-base">chat</span>
            </a>
          </div>
        </div>

        {/* Plant Coordinates & Gate Navigation */}
        <div className="ayka-card flex flex-col justify-between space-y-4">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="p-2.5 bg-light-bg rounded-lg text-primary inline-flex">
                <span className="material-symbols-outlined">pin_drop</span>
              </span>
              <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-light-bg text-muted-text">
                CAMPUS GATE
              </span>
            </div>
            <div>
              <div className="text-[11px] font-bold text-muted-text uppercase tracking-wider">
                Plant Coordinates
              </div>
              <div className="text-base font-bold text-navy truncate mt-0.5">
                Jamaniya Khurd, Indore
              </div>
              <p className="text-xs text-muted-text mt-1 leading-relaxed">
                MP Special Industrial Belt, 22.84° N, 75.91° E
              </p>
            </div>
          </div>
          <div className="pt-3 border-t border-border-subtle flex items-center gap-2">
            <a
              href="https://maps.google.com/?q=Jamaniya+Khurd+Indore"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 btn-primary text-xs py-2 px-3 text-center"
            >
              Open Navigation
            </a>
            <a
              href="#facility-dossier"
              className="py-2 px-3 rounded-lg border border-border-subtle hover:bg-light-bg text-navy text-xs font-medium transition-colors"
              title="Audit Specs"
            >
              <span className="material-symbols-outlined text-base">description</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
