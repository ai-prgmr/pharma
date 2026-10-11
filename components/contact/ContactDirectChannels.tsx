"use client";

import { useState } from "react";

export default function ContactDirectChannels() {
  const [copied, setCopied] = useState(false);
  const emailAddress = "aykapharma@aykapharma.com";

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
          Direct Channels &amp; Commercial Desks
        </h2>
        <span className="text-xs font-semibold text-success flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-success animate-pulse" /> Available 09:00 - 18:00 IST
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Direct Technical Liaison Card */}
        <div className="ayka-card flex flex-col justify-between space-y-4">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="p-2.5 bg-light-bg rounded-lg text-navy inline-flex border border-border-subtle">
                <span className="material-symbols-outlined">mail</span>
              </span>
              <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-light-bg text-navy border border-border-subtle">
                PRIMARY SALES
              </span>
            </div>
            <div>
              <div className="text-[11px] font-bold text-muted-text uppercase tracking-wider">
                Sales &amp; Partnership Email
              </div>
              <div className="text-sm font-bold text-navy truncate select-all mt-0.5">
                {emailAddress}
              </div>
              <p className="text-xs text-muted-text mt-1 leading-relaxed">
                Direct channel for MOQ, registration requirements &amp; private label opportunities
              </p>
            </div>
          </div>
          <div className="pt-3 border-t border-border-subtle flex items-center gap-2">
            <a
              href={`mailto:${emailAddress}`}
              className="flex-1 btn-primary text-xs py-2 px-3 text-center cursor-pointer"
            >
              Compose Email
            </a>
            <button
              type="button"
              onClick={handleCopyEmail}
              className="py-2 px-3 rounded-lg border border-border-subtle hover:bg-light-bg text-navy text-xs font-medium transition-colors flex items-center gap-1 cursor-pointer"
              title="Copy Address"
            >
              <span className="material-symbols-outlined text-base">
                {copied ? "check" : "content_copy"}
              </span>
              {copied && <span className="text-[10px]">Copied</span>}
            </button>
          </div>
        </div>

        {/* Plant Address & Location Card */}
        <div className="ayka-card flex flex-col justify-between space-y-4">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="p-2.5 bg-light-bg rounded-lg text-teal inline-flex border border-border-subtle">
                <span className="material-symbols-outlined">location_on</span>
              </span>
              <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-light-bg text-navy border border-border-subtle">
                WORKS LOCATION
              </span>
            </div>
            <div>
              <div className="text-[11px] font-bold text-muted-text uppercase tracking-wider">
                Works Address
              </div>
              <div className="text-xs font-bold text-navy mt-0.5 leading-relaxed">
                Halka No. 61, Serve No. 156/1/1/1,<br />
                Jamaniya Khurd, Indore, MP
              </div>
              <p className="text-xs text-muted-text mt-1 leading-relaxed">
                Central India Aseptic Manufacturing Hub
              </p>
            </div>
          </div>
          <div className="pt-3 border-t border-border-subtle flex items-center gap-2">
            <a
              href="https://maps.google.com/?q=Jamaniya+Khurd+Indore"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 btn-secondary text-xs py-2 px-3 text-center cursor-pointer"
            >
              Get Directions
            </a>
          </div>
        </div>

        {/* Quality & Certifications Card */}
        <div className="ayka-card flex flex-col justify-between space-y-4">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="p-2.5 bg-light-bg rounded-lg text-primary inline-flex border border-border-subtle">
                <span className="material-symbols-outlined">verified</span>
              </span>
              <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-light-bg text-navy border border-border-subtle">
                CERTIFIED
              </span>
            </div>
            <div>
              <div className="text-[11px] font-bold text-muted-text uppercase tracking-wider">
                Accreditations
              </div>
              <div className="text-sm font-bold text-navy truncate mt-0.5">
                WHO-GMP &amp; ISO 9001:2015
              </div>
              <p className="text-xs text-muted-text mt-1 leading-relaxed">
                WHO Low Osmolarity Liquid ORS Standard (75 MMOL/L)
              </p>
            </div>
          </div>
          <div className="pt-3 border-t border-border-subtle flex items-center gap-2">
            <span className="text-[11px] font-semibold text-success flex items-center gap-1">
              <span className="material-symbols-outlined text-base">check_circle</span>
              <span>Full Dossier &amp; COA Ready</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
