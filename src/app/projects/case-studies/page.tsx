// src/app/projects/case-studies/page.tsx
import Link from "next/link";

const caseStudies = [
  {
    title: "Enugu State: From Paper Receipts to Digital Accountability",
    location: "Enugu State Internal Revenue Service",
    impact: "32% faster reconciliation, 10,000+ digital receipts issued in 3 months",
    desc: "The Enugu State Internal Revenue Service faced chronic delays in reconciling manual receipt books across 12 collection points. ERS deployed an e‑receipting pilot that replaced paper with tamper‑proof digital records, cutting reconciliation time by nearly a third and providing real‑time visibility to the board.",
    href: "#",
  },
  {
    title: "Onitsha Motor Park: Plugging a 47% Revenue Leakage",
    location: "Anambra State Transport Management Agency",
    impact: "47% revenue increase in Q1 post‑deployment",
    desc: "Manual ticketing at the Onitsha main motor park was rife with under‑reporting. The introduction of POS‑based smart ticketing and central dashboards revealed a 47% gap between actual and reported revenue. Within one quarter, collections surged as leakages were sealed.",
    href: "#",
  },
  {
    title: "Kuje Area Council: Taxpayer Enumeration Pilot",
    location: "Kuje, FCT",
    impact: "2,400+ new taxpayers identified in pilot phase",
    desc: "Kuje Area Council had no digital record of its taxable base. ERS conducted a door‑to‑door enumeration pilot using biometric capture and geo‑tagging, uncovering over 2,400 previously unregistered businesses and individuals. The council now awaits final approval to go live.",
    href: "#",
  },
  {
    title: "NURTW Lagos: Automating Union Dues Collection",
    location: "Lagos State NURTW Branches",
    impact: "Daily collection visibility for 15 branches, zero cash handling errors",
    desc: "The Lagos chapter of the National Union of Road Transport Workers struggled to track daily dues across branches. ERS introduced driver ID cards, mobile collection points, and a real‑time union dashboard. The pilot eliminated manual counting errors and gave union leaders instant insight into branch performance.",
    href: "#",
  },
];

export default function CaseStudiesPage() {
  return (
    <main className="min-h-screen bg-[#F8FAFC] text-[#1C1F61] selection:bg-[#F48B25]/30 selection:text-[#1C1F61] font-['Calibri',Calibri,Segoe_UI,sans-serif]">
      {/* Hero Section – two buttons */}
      <section className="relative bg-[#1C1F61] text-white w-full overflow-hidden flex items-center min-h-[55vh] sm:min-h-[45vh]">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1552581234-26160f608093?q=80&w=2070"
            alt="Business success story"
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
              Verified Results
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.15]">
              Case Studies
            </h1>
            <p className="text-slate-200 text-sm sm:text-base md:text-lg max-w-3xl leading-relaxed">
              Real stories of revenue transformation powered by ERS Digital Revenue Infrastructure. Each case study highlights measurable outcomes and institutional impact.
            </p>
            <div className="pt-2 flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="group relative bg-[#F48B25] hover:bg-[#f59b3a] text-[#1C1F61] font-bold text-xs sm:text-sm px-5 sm:px-7 py-3 sm:py-3.5 rounded-xl shadow-lg shadow-[#F48B25]/25 transition-all duration-300 text-center hover:-translate-y-0.5 active:translate-y-0 overflow-hidden w-full sm:w-auto inline-flex items-center justify-center gap-2"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Explore a Similar Project
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

      {/* Case Study Cards */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-24">
        <div className="mb-12 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div className="space-y-2 border-l-4 border-[#F48B25] pl-5">
            <span className="text-xs font-bold text-[#CF1B1B] uppercase tracking-wider">
              Measurable Outcomes
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-[#1C1F61]">
              Success Stories
            </h2>
          </div>
          <p className="text-slate-600 text-sm max-w-md">
            Explore how ERS technology is delivering concrete results for public and institutional partners.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {caseStudies.map((study, index) => (
            <div
              key={index}
              className="group bg-white border border-slate-200/80 rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-md hover:border-[#F48B25]/40 transition-all duration-300 flex flex-col"
            >
              <div className="w-12 h-12 rounded-xl bg-[#1C1F61]/5 flex items-center justify-center text-[#1C1F61] group-hover:bg-[#1C1F61] group-hover:text-white transition-colors duration-300 mb-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#1C1F61] group-hover:text-[#CF1B1B] transition-colors mb-1">
                {study.title}
              </h3>
              <div className="flex items-center gap-1 text-sm text-slate-500 mb-2">
                <svg className="w-4 h-4 text-[#F48B25]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                {study.location}
              </div>
              <div className="bg-[#F48B25]/5 border border-[#F48B25]/20 rounded-lg px-3 py-2 mb-3 text-xs font-semibold text-[#1C1F61]">
                Impact: <span className="text-[#F48B25]">{study.impact}</span>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed flex-1">{study.desc}</p>
              <Link
                href={study.href}
                className="mt-4 inline-flex items-center text-xs font-bold text-[#1C1F61] hover:text-[#F48B25] transition-colors group/link"
              >
                Read Full Study
                <svg className="w-3 h-3 ml-1 group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
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
                Become Our Next Success Story
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight max-w-2xl mx-auto leading-tight">
                See What ERS Can Do for Your Institution
              </h2>
              <p className="text-slate-300 max-w-xl mx-auto text-sm md:text-base leading-relaxed">
                Schedule a demonstration or request a detailed case study presentation tailored to your sector.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-[#F48B25] hover:bg-[#f59b3a] text-[#1C1F61] font-bold text-xs sm:text-sm px-7 py-3.5 rounded-xl shadow-lg shadow-black/20 transition-all duration-300 hover:-translate-y-1 active:translate-y-0"
              >
                Request a Demo
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}