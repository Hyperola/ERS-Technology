// src/app/resources/downloads/page.tsx
import Link from "next/link";

const downloadCategories = [
  {
    title: "Corporate Profile & Brochures",
    desc: "Official company overview, service portfolios, and sector capability statements.",
    items: [
      { name: "ERS Corporate Profile 2025", size: "2.4 MB", ext: "PDF" },
      { name: "Digital Revenue Infrastructure Brochure", size: "1.8 MB", ext: "PDF" },
      { name: "Transport Solutions Leaflet", size: "0.9 MB", ext: "PDF" },
    ],
  },
  {
    title: "Presentations & Decks",
    desc: "Slide decks for stakeholder meetings, investor briefings, and government presentations.",
    items: [
      { name: "Revenue Automation Pitch Deck", size: "4.2 MB", ext: "PPTX" },
      { name: "Smart Ticketing Overview", size: "3.1 MB", ext: "PPTX" },
    ],
  },
  {
    title: "Technical & Policy Documents",
    desc: "White papers, research reports, and technical specification sheets.",
    items: [
      { name: "ERS Compliance Framework", size: "1.2 MB", ext: "PDF" },
      { name: "Revenue Ecosystem Architecture Diagram", size: "0.7 MB", ext: "PDF" },
    ],
  },
  {
    title: "Media & Brand Assets",
    desc: "High‑resolution logos, brand guidelines, and official imagery packs.",
    items: [
      { name: "ERS Logo Pack (PNG/SVG)", size: "3.5 MB", ext: "ZIP" },
      { name: "Brand Guidelines 2025", size: "2.1 MB", ext: "PDF" },
    ],
  },
];

export default function DownloadsPage() {
  return (
    <main className="min-h-screen bg-[#F8FAFC] text-[#1C1F61] selection:bg-[#F48B25]/30 selection:text-[#1C1F61] font-['Calibri',Calibri,Segoe_UI,sans-serif]">
      {/* Hero Section */}
      <section className="relative bg-[#1C1F61] text-white w-full overflow-hidden flex items-center min-h-[50vh] sm:min-h-[40vh]">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2070"
            alt="Digital documents and downloads"
            className="w-full h-full object-cover object-center"
          />
          {/* Lighter overlay */}
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
              Public Repository
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.15]">
              Downloads & Resources
            </h1>
            <p className="text-slate-200 text-sm sm:text-base md:text-lg max-w-3xl leading-relaxed">
              Access official ERS corporate profiles, technical documentation, presentations, brand assets, and research publications.
            </p>
            <div className="pt-2 flex flex-col sm:flex-row gap-4">
              <Link
                href="/resources"
                className="border border-white/40 hover:border-white text-white font-semibold text-xs sm:text-sm px-5 sm:px-7 py-3 sm:py-3.5 rounded-xl backdrop-blur-sm bg-white/5 hover:bg-white/10 transition-all duration-300 text-center hover:-translate-y-0.5 active:translate-y-0 inline-flex items-center justify-center gap-2 w-full sm:w-auto"
              >
                ← Back to Resources
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Downloads List */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-24">
        <div className="space-y-16">
          {downloadCategories.map((category, index) => (
            <div key={index}>
              <div className="mb-8 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-2">
                <div className="space-y-1 border-l-4 border-[#F48B25] pl-4">
                  <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[#1C1F61]">
                    {category.title}
                  </h2>
                  <p className="text-slate-600 text-sm">{category.desc}</p>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {category.items.map((item, idx) => (
                  <div
                    key={idx}
                    className="group flex items-center justify-between bg-white border border-slate-200/80 rounded-xl p-5 shadow-sm hover:shadow-md hover:border-[#F48B25]/40 transition-all duration-300"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-[#F48B25]/10 flex items-center justify-center text-[#F48B25] font-bold text-xs">
                        {item.ext}
                      </div>
                      <div>
                        <p className="font-semibold text-[#1C1F61] text-sm group-hover:text-[#CF1B1B] transition-colors">
                          {item.name}
                        </p>
                        <p className="text-[10px] text-slate-400">{item.size}</p>
                      </div>
                    </div>
                    <button
                      type="button"
                      className="w-8 h-8 rounded-lg bg-[#1C1F61] hover:bg-[#F48B25] text-white flex items-center justify-center transition-colors shadow-sm"
                      aria-label={`Download ${item.name}`}
                    >
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                        />
                      </svg>
                    </button>
                  </div>
                ))}
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
                Custom Requests
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight max-w-2xl mx-auto leading-tight">
                Need a Tailored Resource?
              </h2>
              <p className="text-slate-300 max-w-xl mx-auto text-sm md:text-base leading-relaxed">
                Contact us for bespoke reports, sector‑specific presentations, or technical specifications prepared specifically for your institution.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-[#F48B25] hover:bg-[#f59b3a] text-[#1C1F61] font-bold text-xs sm:text-sm px-7 py-3.5 rounded-xl shadow-lg shadow-black/20 transition-all duration-300 hover:-translate-y-1 active:translate-y-0"
              >
                Request Custom Material
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}