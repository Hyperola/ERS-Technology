// src/app/resources/video-library/page.tsx
import Link from "next/link";

const videos = [
  {
    title: "Introducing ERS: Africa's Digital Revenue Infrastructure",
    type: "Corporate Overview",
    duration: "4:32",
    thumbnail: "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=800",
    href: "/resources/video-library/ers-overview",
  },
  {
    title: "How Smart Ticketing Transformed Abuja's Motor Parks",
    type: "Project Showcase",
    duration: "6:15",
    thumbnail: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=800",
    href: "/resources/video-library/smart-ticketing-abuja",
  },
  {
    title: "Revenue Automation for State Governments – A Walkthrough",
    type: "Explainer",
    duration: "8:20",
    thumbnail: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=800",
    href: "/resources/video-library/revenue-automation-walkthrough",
  },
  {
    title: "ERS Developer API: Building on Our Platform",
    type: "Technical",
    duration: "12:05",
    thumbnail: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800",
    href: "/resources/video-library/developer-api",
  },
  {
    title: "The Future of Revenue in Africa – CEO Interview",
    type: "Interview",
    duration: "15:42",
    thumbnail: "https://images.unsplash.com/photo-1573497620053-ea5300f94f21?q=80&w=800",
    href: "/resources/video-library/ceo-interview",
  },
  {
    title: "From Paper to Digital: A Local Government’s Journey",
    type: "Case Study",
    duration: "9:18",
    thumbnail: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=800",
    href: "/resources/video-library/local-government-case-study",
  },
];

export default function VideoLibraryPage() {
  return (
    <main className="min-h-screen bg-[#F8FAFC] text-[#1C1F61] selection:bg-[#F48B25]/30 selection:text-[#1C1F61] font-['Calibri',Calibri,Segoe_UI,sans-serif]">
      {/* Hero Section */}
      <section className="relative bg-[#1C1F61] text-white w-full overflow-hidden flex items-center min-h-[50vh] sm:min-h-[40vh]">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?q=80&w=2070"
            alt="Video content production"
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
              Media Center
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.15]">
              Video Library
            </h1>
            <p className="text-slate-200 text-sm sm:text-base md:text-lg max-w-3xl leading-relaxed">
              Explore explainer videos, project showcases, technical walkthroughs, executive interviews, and implementation stories from across Africa.
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

      {/* Video Grid */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-24">
        <div className="mb-12 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div className="space-y-2 border-l-4 border-[#F48B25] pl-5">
            <span className="text-xs font-bold text-[#CF1B1B] uppercase tracking-wider">
              On‑Demand Content
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-[#1C1F61]">
              Featured Videos
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((video, index) => (
            <Link
              key={index}
              href={video.href}
              className="group block bg-white border border-slate-200/80 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              {/* Thumbnail */}
              <div className="relative w-full h-48 overflow-hidden">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-12 h-12 rounded-full bg-[#F48B25] flex items-center justify-center text-white shadow-lg">
                    <svg className="w-5 h-5 ml-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812z" />
                      <path d="M8 6.5v7l6-3.5-6-3.5z" fill="white" />
                    </svg>
                  </div>
                </div>
                {/* Duration badge */}
                <span className="absolute bottom-2 right-2 bg-black/70 text-white text-[10px] px-2 py-0.5 rounded-full font-medium">
                  {video.duration}
                </span>
              </div>

              {/* Info */}
              <div className="p-5">
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#F48B25] bg-[#F48B25]/10 px-2 py-0.5 rounded-full mb-2 inline-block">
                  {video.type}
                </span>
                <h3 className="font-bold text-[#1C1F61] group-hover:text-[#CF1B1B] transition-colors text-sm sm:text-base leading-snug">
                  {video.title}
                </h3>
              </div>
            </Link>
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
                Media Collaboration
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight max-w-2xl mx-auto leading-tight">
                Interested in Producing a Video Feature?
              </h2>
              <p className="text-slate-300 max-w-xl mx-auto text-sm md:text-base leading-relaxed">
                We partner with media houses, content creators, and development organizations to showcase the impact of digital revenue infrastructure.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-[#F48B25] hover:bg-[#f59b3a] text-[#1C1F61] font-bold text-xs sm:text-sm px-7 py-3.5 rounded-xl shadow-lg shadow-black/20 transition-all duration-300 hover:-translate-y-1 active:translate-y-0"
              >
                Contact Media Team
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}