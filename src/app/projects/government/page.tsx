// src/app/projects/government/page.tsx
import Link from "next/link";

const governmentProjects = [
  {
    title: "Digital Taxpayer Registration & Enumeration",
    location: "Multiple LGAs, Abia State",
    status: "Awaiting Deployment",
    statusColor: "bg-[#F48B25]/10 text-[#F48B25] border-[#F48B25]/30",
    desc: "Comprehensive digital registration of all taxable persons and businesses across local government areas. The proposal includes biometric capture, unique taxpayer identification, and integration with the central IGR platform.",
  },
  {
    title: "Property & Land‑Based Revenue System",
    location: "Nasarawa State",
    status: "Proposal Submitted",
    statusColor: "bg-[#F48B25]/10 text-[#F48B25] border-[#F48B25]/30",
    desc: "GIS‑linked property enumeration and automated billing for ground rent, tenement rates, and land use charges. Integrated with the state revenue dashboard for real‑time compliance monitoring.",
  },
  {
    title: "Market & Trade Association Collections",
    location: "Gwagwalada, Bwari, Kuje (FCT)",
    status: "Proposal Submitted",
    statusColor: "bg-[#F48B25]/10 text-[#F48B25] border-[#F48B25]/30",
    desc: "Digital revenue collection infrastructure for market authorities, including trader registration, daily/weekly levy collection via POS/mobile, and automated remittance to area council accounts.",
  },
  {
    title: "MDAs Revenue Integration Framework",
    location: "Federal Capital Territory",
    status: "Conceptual Design",
    statusColor: "bg-blue-50 text-blue-600 border-blue-200",
    desc: "A centralised middleware connecting all Ministries, Departments, and Agencies to a single revenue intelligence layer, eliminating siloed collections and manual reconciliations.",
  },
  {
    title: "Digital Invoice & e‑Receipting System",
    location: "State Revenue Service, Enugu State",
    status: "Completed Pilot",
    statusColor: "bg-emerald-50 text-emerald-600 border-emerald-200",
    desc: "A tamper‑proof electronic receipting and invoice generation system piloted for the Enugu State Internal Revenue Service, successfully digitising over 10,000 manual receipts during the trial.",
  },
];

export default function GovernmentProjectsPage() {
  return (
    <main className="min-h-screen bg-[#F8FAFC] text-[#1C1F61] selection:bg-[#F48B25]/30 selection:text-[#1C1F61] font-['Calibri',Calibri,Segoe_UI,sans-serif]">
      {/* Hero Section */}
      <section className="relative bg-[#1C1F61] text-white w-full overflow-hidden flex items-center min-h-[55vh] sm:min-h-[45vh]">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1464219512829-2b6f3c67f6a2?q=80&w=2070"
            alt="Government building"
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
              Public Sector Deployments
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.15]">
              Government Projects
            </h1>
            <p className="text-slate-200 text-sm sm:text-base md:text-lg max-w-3xl leading-relaxed">
              Digital revenue infrastructure initiatives designed for local, state, and federal government institutions. Each project is tailored to enhance internally generated revenue, transparency, and citizen trust.
            </p>
            <div className="pt-2">
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

      {/* Projects List */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-24">
        <div className="mb-12 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div className="space-y-2 border-l-4 border-[#F48B25] pl-5">
            <span className="text-xs font-bold text-[#CF1B1B] uppercase tracking-wider">
              Institutional Deployments
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-[#1C1F61]">
              Revenue Infrastructure for Government
            </h2>
          </div>
          <p className="text-slate-600 text-sm max-w-md">
            From pilot programmes to state‑wide rollouts, these projects demonstrate ERS’s commitment to modernising public revenue administration.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {governmentProjects.map((project, index) => (
            <div
              key={index}
              className="group bg-white border border-slate-200/80 rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-md hover:border-[#F48B25]/40 transition-all duration-300 flex flex-col"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-[#1C1F61]/5 flex items-center justify-center text-[#1C1F61] group-hover:bg-[#1C1F61] group-hover:text-white transition-colors duration-300">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <span
                  className={`text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full border ${project.statusColor}`}
                >
                  {project.status}
                </span>
              </div>
              <h3 className="text-xl font-bold text-[#1C1F61] group-hover:text-[#CF1B1B] transition-colors mb-1">
                {project.title}
              </h3>
              <div className="flex items-center gap-1 text-sm text-slate-500 mb-3">
                <svg className="w-4 h-4 text-[#F48B25]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                {project.location}
              </div>
              <p className="text-slate-600 text-sm leading-relaxed flex-1">{project.desc}</p>
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
                Let’s Discuss Your State
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight max-w-2xl mx-auto leading-tight">
                Deploy Digital Revenue Infrastructure for Your Institution
              </h2>
              <p className="text-slate-300 max-w-xl mx-auto text-sm md:text-base leading-relaxed">
                Every government entity deserves predictable, transparent revenue. Contact us to begin a proposal tailored to your jurisdiction.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-[#F48B25] hover:bg-[#f59b3a] text-[#1C1F61] font-bold text-xs sm:text-sm px-7 py-3.5 rounded-xl shadow-lg shadow-black/20 transition-all duration-300 hover:-translate-y-1 active:translate-y-0"
              >
                Request a Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}