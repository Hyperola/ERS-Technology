// src/app/resources/articles-insights/page.tsx
import Link from "next/link";

const insights = [
  {
    category: "Thought Leadership",
    date: "2025",
    title: "Beyond Collection: Why Digital Revenue Infrastructure is Africa’s Next Big Leap",
    excerpt:
      "Digital transformation in public finance goes far beyond mobile payments. ERS explores how intelligent infrastructure creates self-sustaining government ecosystems.",
    href: "/resources/articles-insights/digital-revenue-infrastructure",
  },
  {
    category: "Policy & Innovation",
    date: "2025",
    title: "The Transparency Mandate: How Real‑Time Dashboards Are Reshaping Governance",
    excerpt:
      "When every transaction is visible to authorised stakeholders, the culture of accountability shifts. Our deep dive into live monitoring technology.",
    href: "/resources/articles-insights/transparency-mandate",
  },
  {
    category: "Sector Spotlight",
    date: "2025",
    title: "Transport Revenue in Africa: Taming the Informal Sector with Digital Infrastructure",
    excerpt:
      "From motor parks to interstate fleets, digital ticketing and automated remittance are unlocking millions in lost transport revenue.",
    href: "/resources/articles-insights/transport-revenue-africa",
  },
  {
    category: "Technology",
    date: "2025",
    title: "Cybersecurity for Public Revenue Systems: A Framework for Trust",
    excerpt:
      "ERS outlines the security architecture required to protect national revenue streams from internal and external threats while maintaining public trust.",
    href: "/resources/articles-insights/cybersecurity-revenue-systems",
  },
  {
    category: "Economic Development",
    date: "2025",
    title: "From Leakages to Investments: How Digital Revenue Boosts National Development",
    excerpt:
      "When internally generated revenue becomes predictable, governments can plan long‑term. Here’s how technology is making that possible across the continent.",
    href: "/resources/articles-insights/leakages-to-investments",
  },
  {
    category: "Industry Trends",
    date: "2025",
    title: "The Rise of Smart Remittance: Automating Reconciliation in Complex Economies",
    excerpt:
      "Manual reconciliation costs time and money. ERS’s automated systems are proving that reconciliation can happen in real time, without human error.",
    href: "/resources/articles-insights/smart-remittance",
  },
];

export default function ArticlesInsightsPage() {
  return (
    <main className="min-h-screen bg-[#F8FAFC] text-[#1C1F61] selection:bg-[#F48B25]/30 selection:text-[#1C1F61] font-['Calibri',Calibri,Segoe_UI,sans-serif]">
      {/* Hero Section – background image, lighter overlay, brand CTA */}
      <section className="relative bg-[#1C1F61] text-white w-full overflow-hidden flex items-center min-h-[50vh] sm:min-h-[40vh]">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070"
            alt="Business strategy and insights"
            className="w-full h-full object-cover object-center"
          />
          {/* Lighter overlay: reveals the image while keeping text crisp */}
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
              Strategic Insights
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.15]">
              Articles & Insights
            </h1>
            <p className="text-slate-200 text-sm sm:text-base md:text-lg max-w-3xl leading-relaxed">
              Thought leadership, expert commentary, and deep‑dive analysis on digital revenue infrastructure, governance, technology, and Africa’s economic transformation.
            </p>
            <div className="pt-2 flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="group relative bg-[#F48B25] hover:bg-[#f59b3a] text-[#1C1F61] font-bold text-xs sm:text-sm px-5 sm:px-7 py-3 sm:py-3.5 rounded-xl shadow-lg shadow-[#F48B25]/25 transition-all duration-300 text-center hover:-translate-y-0.5 active:translate-y-0 overflow-hidden w-full sm:w-auto inline-flex items-center justify-center gap-2"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Discuss Your Revenue Strategy
                  <svg
                    className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/30 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              </Link>
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

      {/* Insights Grid */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-24">
        <div className="mb-12 md:mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div className="space-y-2 border-l-4 border-[#F48B25] pl-5">
            <span className="text-xs font-bold text-[#CF1B1B] uppercase tracking-wider">
              Knowledge Hub
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-[#1C1F61]">
              Latest Insights
            </h2>
          </div>
          <p className="text-slate-600 text-sm max-w-md">
            In‑depth perspectives from our team on the technologies and policies shaping Africa’s revenue future.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {insights.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="group flex flex-col bg-white border border-slate-200/80 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#F48B25] bg-[#F48B25]/10 px-2 py-0.5 rounded-full">
                    {item.category}
                  </span>
                  <span className="text-[10px] text-slate-400 font-medium">
                    {item.date}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-[#1C1F61] group-hover:text-[#CF1B1B] transition-colors mb-2 leading-snug">
                  {item.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-4 flex-1">
                  {item.excerpt}
                </p>
                <div className="flex items-center text-xs font-bold text-[#1C1F61] group-hover:text-[#F48B25] transition-colors mt-auto pt-2 border-t border-slate-100">
                  Read Article
                  <svg
                    className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Bottom CTA – consistent with brand pattern */}
      <section className="bg-white border-t border-slate-200 py-16 md:py-20">
        <div className="max-w-5xl mx-auto px-6 md:px-12">
          <div className="bg-gradient-to-br from-[#1C1F61] to-[#2a2e7a] text-white rounded-2xl sm:rounded-[2.5rem] p-8 sm:p-12 md:p-16 text-center space-y-6 relative overflow-hidden border border-white/10 shadow-2xl">
            <div className="absolute -right-16 -bottom-16 w-40 h-40 rounded-full border border-white/10 animate-pulse" />
            <div className="absolute -left-16 -top-16 w-40 h-40 rounded-full border border-white/10 animate-pulse" style={{ animationDelay: "1s" }} />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250px] h-[250px] bg-[#F48B25]/5 rounded-full blur-3xl" />
            <div className="relative z-10 space-y-5">
              <span className="inline-block text-[10px] sm:text-xs text-[#F48B25] tracking-widest uppercase border border-[#F48B25]/40 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full bg-[#F48B25]/10 font-bold backdrop-blur-sm">
                Start the Conversation
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight max-w-2xl mx-auto leading-tight">
                Want to Contribute an Insight?
              </h2>
              <p className="text-slate-300 max-w-xl mx-auto text-sm md:text-base leading-relaxed">
                We welcome thought leaders, policy experts, and technology innovators to share perspectives that advance Africa’s digital revenue infrastructure.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-[#F48B25] hover:bg-[#f59b3a] text-[#1C1F61] font-bold text-xs sm:text-sm px-7 py-3.5 rounded-xl shadow-lg shadow-black/20 transition-all duration-300 hover:-translate-y-1 active:translate-y-0"
              >
                Contact Editorial Team
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}