// src/app/resources/events/page.tsx
import Link from "next/link";

const events = [
  {
    title: "Digital Revenue Summit 2025",
    date: "September 15–16, 2025",
    location: "Abuja Continental Hotel, Nigeria",
    type: "Upcoming",
    desc: "The flagship annual gathering of government leaders, policymakers, and technology partners exploring the future of digital public finance in Africa. Sessions cover revenue automation, transport ecosystems, and cross‑state interoperability.",
    href: "/resources/events/digital-revenue-summit-2025",
  },
  {
    title: "West Africa Transport & Revenue Technology Expo",
    date: "October 7–8, 2025",
    location: "Lagos, Nigeria",
    type: "Upcoming",
    desc: "A dedicated exhibition and workshop series focused on smart ticketing, fleet management, and automated remittance for the region’s transport unions and regulatory agencies.",
    href: "/resources/events/transport-revenue-expo-2025",
  },
  {
    title: "Webinar: Real‑Time Revenue Monitoring for Local Governments",
    date: "July 30, 2025",
    location: "Online (Zoom)",
    type: "Upcoming",
    desc: "A practical demonstration of ERS dashboards and anomaly detection tools, designed for local government finance directors and revenue committee chairs.",
    href: "/resources/events/webinar-revenue-monitoring-2025",
  },
  {
    title: "National Revenue Roundtable – Abuja",
    date: "May 22, 2025",
    location: "Nicon Luxury, Abuja",
    type: "Past",
    desc: "An executive dialogue between federal revenue agencies, state commissioners, and ERS leadership on tackling IGR leakages through technology.",
    href: "/resources/events/national-revenue-roundtable-2025",
  },
  {
    title: "ERS Partner Launch & Demo Day",
    date: "March 12, 2025",
    location: "Sheraton Hotel, Ikeja",
    type: "Past",
    desc: "Official unveiling of the ERS Digital Revenue Infrastructure platform to partners, with live demos of the merchant, government, and transport portals.",
    href: "/resources/events/partner-launch-demo-2025",
  },
];

export default function EventsPage() {
  return (
    <main className="min-h-screen bg-[#F8FAFC] text-[#1C1F61] selection:bg-[#F48B25]/30 selection:text-[#1C1F61] font-['Calibri',Calibri,Segoe_UI,sans-serif]">
      {/* Hero */}
      <section className="relative bg-[#1C1F61] text-white w-full overflow-hidden flex items-center min-h-[50vh] sm:min-h-[40vh]">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2070"
            alt="Conference audience"
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
              Knowledge & Networking
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.15]">
              Events & Conferences
            </h1>
            <p className="text-slate-200 text-sm sm:text-base md:text-lg max-w-3xl leading-relaxed">
              Join ERS at summits, roundtables, webinars, and expos dedicated to advancing digital revenue infrastructure across the continent.
            </p>
            <div className="pt-2 flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="group relative bg-[#F48B25] hover:bg-[#f59b3a] text-[#1C1F61] font-bold text-xs sm:text-sm px-5 sm:px-7 py-3 sm:py-3.5 rounded-xl shadow-lg shadow-[#F48B25]/25 transition-all duration-300 text-center hover:-translate-y-0.5 active:translate-y-0 overflow-hidden w-full sm:w-auto inline-flex items-center justify-center gap-2"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Reserve Your Seat
                  <svg
                    className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
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

      {/* Events List */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-24">
        <div className="mb-12 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div className="space-y-2 border-l-4 border-[#F48B25] pl-5">
            <span className="text-xs font-bold text-[#CF1B1B] uppercase tracking-wider">Engagement Calendar</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-[#1C1F61]">
              Upcoming & Past Events
            </h2>
          </div>
        </div>

        <div className="space-y-6">
          {events.map((event, index) => (
            <div
              key={index}
              className="group bg-white border border-slate-200/80 rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-md hover:border-[#F48B25]/40 transition-all duration-300 flex flex-col md:flex-row gap-6"
            >
              <div className="md:w-40 flex-shrink-0">
                <span
                  className={`inline-block text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full ${
                    event.type === "Upcoming"
                      ? "bg-[#F48B25]/10 text-[#F48B25] border border-[#F48B25]/30"
                      : "bg-slate-100 text-slate-500 border border-slate-200"
                  }`}
                >
                  {event.type}
                </span>
              </div>
              <div className="flex-1 space-y-2">
                <h3 className="text-xl font-bold text-[#1C1F61] group-hover:text-[#CF1B1B] transition-colors">
                  {event.title}
                </h3>
                <div className="flex flex-wrap items-center gap-3 text-sm text-slate-500">
                  <span className="flex items-center gap-1">
                    <svg className="w-4 h-4 text-[#F48B25]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    {event.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <svg className="w-4 h-4 text-[#F48B25]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {event.location}
                  </span>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed">{event.desc}</p>
                <div>
                  <Link
                    href={event.href}
                    className="inline-flex items-center gap-1 text-sm font-bold text-[#1C1F61] hover:text-[#F48B25] transition-colors underline underline-offset-2"
                  >
                    {event.type === "Upcoming" ? "Register Interest" : "View Recap"}
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
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
                Host an Event with ERS
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight max-w-2xl mx-auto leading-tight">
                Invite ERS to Your Next Conference
              </h2>
              <p className="text-slate-300 max-w-xl mx-auto text-sm md:text-base leading-relaxed">
                Whether a government retreat, industry summit, or academic forum, ERS speakers and technical experts are available to present on digital revenue infrastructure.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-[#F48B25] hover:bg-[#f59b3a] text-[#1C1F61] font-bold text-xs sm:text-sm px-7 py-3.5 rounded-xl shadow-lg shadow-black/20 transition-all duration-300 hover:-translate-y-1 active:translate-y-0"
              >
                Request a Speaker
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}