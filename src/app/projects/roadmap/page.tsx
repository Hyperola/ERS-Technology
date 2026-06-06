// src/app/projects/roadmap/page.tsx
import Link from "next/link";

const roadmapPhases = [
  {
    quarter: "Q3 2025",
    title: "Immediate Deployments",
    status: "In Progress",
    statusColor: "bg-emerald-50 text-emerald-600 border-emerald-200",
    items: [
      "Finalise Abia State digital revenue proposal approval",
      "Begin Nasarawa State enumeration pilot",
      "Launch Kuje Area Council taxpayer registration",
      "Complete FCT Transport Ecosystem technical review",
    ],
  },
  {
    quarter: "Q4 2025",
    title: "Regional Expansion",
    status: "Upcoming",
    statusColor: "bg-[#F48B25]/10 text-[#F48B25] border-[#F48B25]/30",
    items: [
      "Scale Enugu State e‑receipting to all MDAs",
      "Deploy Anambra transport ticketing across 5 parks",
      "Initiate Bayelsa waterways pilot programme",
      "Expand NURTW Lagos to 30+ branches",
    ],
  },
  {
    quarter: "Q1–Q2 2026",
    title: "Cross‑State Interoperability",
    status: "Planning",
    statusColor: "bg-blue-50 text-blue-600 border-blue-200",
    items: [
      "Launch centralised multi‑state revenue analytics grid",
      "Integrate state IGR systems into national compliance framework",
      "Roll out developer sandbox and open API portal",
      "Deploy smart remittance for interstate transport unions",
    ],
  },
  {
    quarter: "H2 2026+",
    title: "Pan‑African Scaling",
    status: "Vision",
    statusColor: "bg-purple-50 text-purple-600 border-purple-200",
    items: [
      "Extend digital revenue infrastructure to 3+ African nations",
      "Partner with continental development banks for financing",
      "Launch cross‑border transport revenue network",
      "Establish ERS Research & Innovation Lab",
    ],
  },
];

export default function DeploymentRoadmapPage() {
  return (
    <main className="min-h-screen bg-[#F8FAFC] text-[#1C1F61] selection:bg-[#F48B25]/30 selection:text-[#1C1F61] font-['Calibri',Calibri,Segoe_UI,sans-serif]">
      {/* Hero Section */}
      <section className="relative bg-[#1C1F61] text-white w-full overflow-hidden flex items-center min-h-[55vh] sm:min-h-[45vh]">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1532619675605-1ede6c2ed2b0?q=80&w=2070"
            alt="Strategic roadmap"
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
              Forward Strategy
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.15]">
              Deployment Roadmap
            </h1>
            <p className="text-slate-200 text-sm sm:text-base md:text-lg max-w-3xl leading-relaxed">
              Our phased trajectory for expanding digital revenue infrastructure across Nigeria and the African continent. Timelines are indicative and subject to partner alignment.
            </p>
            <div className="pt-2 flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="group relative bg-[#F48B25] hover:bg-[#f59b3a] text-[#1C1F61] font-bold text-xs sm:text-sm px-5 sm:px-7 py-3 sm:py-3.5 rounded-xl shadow-lg shadow-[#F48B25]/25 transition-all duration-300 text-center hover:-translate-y-0.5 active:translate-y-0 overflow-hidden w-full sm:w-auto inline-flex items-center justify-center gap-2"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Partner on a Phase
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

      {/* Roadmap Timeline */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-24">
        <div className="mb-12 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div className="space-y-2 border-l-4 border-[#F48B25] pl-5">
            <span className="text-xs font-bold text-[#CF1B1B] uppercase tracking-wider">
              Phased Expansion
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-[#1C1F61]">
              Our Journey Ahead
            </h2>
          </div>
          <p className="text-slate-600 text-sm max-w-md">
            Milestones are broken down by quarter, reflecting current project statuses and strategic objectives.
          </p>
        </div>

        <div className="space-y-8">
          {roadmapPhases.map((phase, index) => (
            <div
              key={index}
              className="relative pl-8 md:pl-12 border-l-2 border-slate-200 last:border-transparent"
            >
              {/* Dot */}
              <div className="absolute left-[-9px] top-1 w-4 h-4 rounded-full bg-[#F48B25] border-2 border-white shadow" />
              
              <div className="bg-white border border-slate-200/80 rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-md transition-all duration-300">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 gap-2">
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-extrabold text-[#1C1F61] bg-[#F8FAFC] px-3 py-1 rounded-lg">
                      {phase.quarter}
                    </span>
                    <h3 className="text-xl font-bold text-[#1C1F61]">{phase.title}</h3>
                  </div>
                  <span className={`text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full border ${phase.statusColor} w-fit`}>
                    {phase.status}
                  </span>
                </div>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 ml-1">
                  {phase.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                      <svg className="w-4 h-4 text-[#F48B25] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
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
                Join the Journey
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight max-w-2xl mx-auto leading-tight">
                Align Your Institution with Our Roadmap
              </h2>
              <p className="text-slate-300 max-w-xl mx-auto text-sm md:text-base leading-relaxed">
                Let’s discuss how your state or agency can fit into upcoming phases for early access, pilot slots, and co‑development opportunities.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-[#F48B25] hover:bg-[#f59b3a] text-[#1C1F61] font-bold text-xs sm:text-sm px-7 py-3.5 rounded-xl shadow-lg shadow-black/20 transition-all duration-300 hover:-translate-y-1 active:translate-y-0"
              >
                Schedule a Strategy Call
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}