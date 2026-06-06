// src/app/projects/pilot-programs/page.tsx
import Link from "next/link";

const pilotPrograms = [
  {
    title: "Enugu State e‑Receipting Trial",
    location: "Enugu State Internal Revenue Service",
    status: "Completed",
    statusColor: "bg-emerald-50 text-emerald-600 border-emerald-200",
    desc: "A three‑month pilot to replace manual receipt books with digital e‑receipts across 12 revenue collection points. The trial digitised over 10,000 transactions and demonstrated a 32% reduction in reconciliation time.",
  },
  {
    title: "Onitsha Motor Park Digital Ticketing",
    location: "Onitsha, Anambra State",
    status: "Completed",
    statusColor: "bg-emerald-50 text-emerald-600 border-emerald-200",
    desc: "A pilot deployment of smart ticketing at the Onitsha main motor park, testing POS and mobile collection against manual ticket booklets. Revenue increased by 47% within the first quarter.",
  },
  {
    title: "Kuje Area Council Taxpayer Enumeration",
    location: "Kuje, FCT",
    status: "Deployment Ready",
    statusColor: "bg-[#F48B25]/10 text-[#F48B25] border-[#F48B25]/30",
    desc: "A pilot exercise to digitally register all taxable individuals and businesses in Kuje using biometric capture and geo‑tagging. Final approval is pending from the council chairman.",
  },
  {
    title: "Transport Union Dues Automation (NURTW Lagos)",
    location: "Lagos State",
    status: "Awaiting Go‑Live",
    statusColor: "bg-[#F48B25]/10 text-[#F48B25] border-[#F48B25]/30",
    desc: "A controlled pilot to automate daily dues collection for NURTW Lagos branches, including driver cards, real‑time remittance, and union leadership dashboards. Training completed; go‑live scheduled.",
  },
  {
    title: "School Fee Collection Gateway (UNN Campus)",
    location: "University of Nigeria, Nsukka",
    status: "Concept Phase",
    statusColor: "bg-blue-50 text-blue-600 border-blue-200",
    desc: "A pilot project to integrate ERS payment gateway into the university’s student portal, enabling automated fee matching, installment tracking, and digital receipts for over 20,000 students.",
  },
];

export default function PilotProgramsPage() {
  return (
    <main className="min-h-screen bg-[#F8FAFC] text-[#1C1F61] selection:bg-[#F48B25]/30 selection:text-[#1C1F61] font-['Calibri',Calibri,Segoe_UI,sans-serif]">
      {/* Hero Section – two buttons */}
      <section className="relative bg-[#1C1F61] text-white w-full overflow-hidden flex items-center min-h-[55vh] sm:min-h-[45vh]">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?q=80&w=2069"
            alt="Pilot project testing"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1C1F61]/75 via-[#1C1F61]/80 to-[#1C1F61]/75 sm:bg-gradient-to-r sm:from-[#1C1F61]/85 sm:via-[#1C1F61]/55 sm:to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1C1F61]/45 via-transparent to-transparent" />
        </div>

        <div className="relative z-20 w-full max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-24 backdrop-blur-[1px]">
          <div className="max-w-4xl space-y-6">
            <div className="inline-flex items-center gap-1.5 border border-[#F48B25]/40 bg-[#F48B25]/10 backdrop-blur-sm px-3 py-1.5 rounded-full text-[10px] font-semibold tracking-[0.15em] text-[#F48B25] uppercase">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#F48B25] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#F48B25]"></span>
              </span>
              Proof of Concept
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.15]">
              Pilot Programs
            </h1>
            <p className="text-slate-200 text-sm sm:text-base md:text-lg max-w-3xl leading-relaxed">
              Testing and validating ERS Digital Revenue Infrastructure in real‑world environments before full‑scale deployment. Each pilot is a step toward institutional transformation.
            </p>
            <div className="pt-2 flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="group relative bg-[#F48B25] hover:bg-[#f59b3a] text-[#1C1F61] font-bold text-xs sm:text-sm px-5 sm:px-7 py-3 sm:py-3.5 rounded-xl shadow-lg shadow-[#F48B25]/25 transition-all duration-300 text-center hover:-translate-y-0.5 active:translate-y-0 overflow-hidden w-full sm:w-auto inline-flex items-center justify-center gap-2"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Request a Pilot in Your State
                  <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/30 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              </Link>
              <Link
                href="/"
                className="border border-white/40 hover:border-white text-white font-semibold text-xs sm:text-sm px-5 sm:px-7 py-3 sm:py-3.5 rounded-xl backdrop-blur-sm bg-white/5 hover:bg-white/10 transition-all duration-300 text-center hover:-translate-y-0.5 active:translate-y-0 inline-flex items-center justify-center gap-2 w-full sm:w-auto"
              >
                ← Back to Home
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Pilot Grid */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-24">
        <div className="mb-12 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div className="space-y-2 border-l-4 border-[#F48B25] pl-5">
            <span className="text-xs font-bold text-[#CF1B1B] uppercase tracking-wider">
              Controlled Trials
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-[#1C1F61]">
              Active & Completed Pilots
            </h2>
          </div>
          <p className="text-slate-600 text-sm max-w-md">
            Each programme is a carefully measured introduction of ERS technology, designed to demonstrate impact with minimal operational disruption.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {pilotPrograms.map((pilot, index) => (
            <div
              key={index}
              className="group bg-white border border-slate-200/80 rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-md hover:border-[#F48B25]/40 transition-all duration-300 flex flex-col"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-[#1C1F61]/5 flex items-center justify-center text-[#1C1F61] group-hover:bg-[#1C1F61] group-hover:text-white transition-colors duration-300">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <span className={`text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full border ${pilot.statusColor}`}>
                  {pilot.status}
                </span>
              </div>
              <h3 className="text-xl font-bold text-[#1C1F61] group-hover:text-[#CF1B1B] transition-colors mb-1">
                {pilot.title}
              </h3>
              <div className="flex items-center gap-1 text-sm text-slate-500 mb-3">
                <svg className="w-4 h-4 text-[#F48B25]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                {pilot.location}
              </div>
              <p className="text-slate-600 text-sm leading-relaxed flex-1">{pilot.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-white border-t border-slate-200 py-16 md:py-20">
        <div className="max-w-5xl mx-auto px-6 md:px-12">
          <div className="bg-gradient-to-br from-[#1C1F61] to-[#2a2e7a] text-white rounded-2xl sm:rounded-[2.5rem] p-8 sm:p-12 md:p-16 text-center space-y-6 relative overflow-hidden border border-white/10 shadow-2xl">
            <div className="absolute -right-16 -bottom-16 w-40 h-40 rounded-full border border-white/10 animate-pulse" />
            <div className="absolute -left-16 -top-16 w-40 h-40 rounded-full border border-white/10 animate-pulse" style={{ animationDelay: "1s" }} />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250px] h-[250px] bg-[#F48B25]/5 rounded-full blur-3xl" />
            <div className="relative z-10 space-y-5">
              <span className="inline-block text-[10px] sm:text-xs text-[#F48B25] tracking-widest uppercase border border-[#F48B25]/40 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full bg-[#F48B25]/10 font-bold backdrop-blur-sm">
                Launch a Pilot
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight max-w-2xl mx-auto leading-tight">
                Test Before You Scale
              </h2>
              <p className="text-slate-300 max-w-xl mx-auto text-sm md:text-base leading-relaxed">
                We offer zero‑risk pilot programmes that demonstrate tangible revenue uplift within weeks. No long‑term commitment required.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-[#F48B25] hover:bg-[#f59b3a] text-[#1C1F61] font-bold text-xs sm:text-sm px-7 py-3.5 rounded-xl shadow-lg shadow-black/20 transition-all duration-300 hover:-translate-y-1 active:translate-y-0"
              >
                Start a Pilot
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}