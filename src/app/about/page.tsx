// src/app/about/page.tsx
import Link from "next/link";

export default function AboutPage() {
  const coreValues = [
    { title: "Integrity", desc: "Absolute transparency and honesty in every revenue line and technological architecture we deploy." },
    { title: "Innovation", desc: "Pioneering state-of-the-art fintech and mobility systems custom-built for Africa's unique landscape." },
    { title: "Accountability", desc: "Providing uncompromised real-time data auditing to completely eliminate leakages." },
    { title: "Excellence", desc: "Maintaining institutional-grade performance, high system uptime, and flawless UX precision." },
    { title: "Transparency", desc: "Opening up clear, visible financial tracking streams for governments and citizens alike." },
    { title: "Nation Building", desc: "Strengthening local economies by empowering institutions to optimize asset collections natively." },
  ];

  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden bg-[#F8FAFC] text-[#1C1F61] selection:bg-[#F48B25]/30 selection:text-[#1C1F61] font-['Calibri',Calibri,Segoe_UI,sans-serif]">
      
      {/* 1. HERO BANNER – both top and bottom padding reduced */}
      <section className="relative bg-[#1C1F61] text-white w-full overflow-hidden flex items-center min-h-screen sm:min-h-0">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2000"
            alt="Corporate infrastructure"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1C1F61]/95 via-[#1C1F61]/95 to-[#1C1F61]/95 sm:bg-gradient-to-r sm:from-[#1C1F61]/95 sm:via-[#1C1F61]/95 sm:to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1C1F61]/90 via-transparent to-transparent" />
        </div>

        {/* Padding reduced: pt-2 sm:pt-4 md:pt-6 lg:pt-10, pb-8 sm:pb-12 md:pb-16 lg:pb-24 */}
        <div className="relative z-20 w-full max-w-7xl mx-auto px-6 md:px-12 pt-2 sm:pt-4 md:pt-6 lg:pt-10 pb-8 sm:pb-12 md:pb-16 lg:pb-24">
          <div className="max-w-4xl space-y-6 sm:space-y-8">
            <div className="inline-flex">
              <div className="inline-flex items-center gap-1.5 border border-[#F48B25]/40 bg-[#F48B25]/10 backdrop-blur-sm px-2.5 py-1 sm:px-3 rounded-full text-[9px] sm:text-[10px] font-semibold tracking-[0.15em] text-[#F48B25] uppercase">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#F48B25] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#F48B25]"></span>
                </span>
                Corporate Identity
              </div>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-[1.15] text-white">
              Transforming Africa's <br />
              <span className="text-[#F48B25]">Digital Revenue Landscape</span>
            </h1>
            <p className="text-slate-200 text-sm sm:text-base md:text-lg max-w-3xl leading-relaxed">
              Ethical Recovery System Technologies Ltd (ERS) is a technology-driven infrastructure company focused on building scalable digital revenue ecosystems across Africa.
            </p>
            <div className="max-w-3xl border-l-3 border-[#F48B25] pl-4 sm:pl-5 py-1">
              <p className="text-slate-300 text-xs sm:text-sm md:text-base leading-relaxed">
                ERS exists to modernize revenue administration, improve accountability, strengthen transparency, and empower institutions through intelligent automation and financial technology systems.
              </p>
            </div>
            <div className="pt-4 flex flex-col sm:flex-row gap-4 sm:gap-5">
              <Link href="/contact" className="group relative bg-[#F48B25] hover:bg-[#f59b3a] text-[#1C1F61] font-bold text-xs sm:text-sm md:text-base px-5 sm:px-7 py-3 sm:py-3.5 rounded-xl shadow-lg shadow-[#F48B25]/25 transition-all duration-300 text-center hover:-translate-y-0.5 active:translate-y-0 overflow-hidden w-full sm:w-auto">
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Partner With Us
                  <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/30 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              </Link>
              <Link href="/contact" className="border border-white/40 hover:border-white text-white font-semibold text-xs sm:text-sm md:text-base tracking-wide px-5 sm:px-7 py-3 sm:py-3.5 rounded-xl backdrop-blur-sm bg-white/5 hover:bg-white/10 transition-all duration-300 text-center hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2 w-full sm:w-auto">
                <span className="flex items-center justify-center gap-2">
                  Learn More
                  <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. VISION & MISSION SPLIT */}
      <section className="bg-[#F8FAFC] py-12 sm:py-16 border-b border-slate-200 relative z-20 -mt-8 sm:-mt-14 rounded-t-2xl sm:rounded-t-[2.5rem] shadow-[0_-15px_40px_-15px_rgba(0,0,0,0.25)]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            <div className="group p-8 sm:p-10 bg-white rounded-2xl border border-slate-200/80 hover:border-[#1C1F61] transition-all duration-300 shadow-sm hover:shadow-md">
              <div className="space-y-4">
                <div className="border-l-4 border-[#F48B25] pl-4">
                  <h2 className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-[#CF1B1B]">The Horizon Blueprint</h2>
                  <p className="text-lg sm:text-xl font-bold tracking-tight text-[#1C1F61] mt-0.5">Our Vision</p>
                </div>
                <p className="text-[#1C1F61] font-bold text-base sm:text-lg md:text-xl leading-snug tracking-tight pt-2">
                  “To become Africa’s leading Digital Revenue Infrastructure powering transparent and intelligent economies.”
                </p>
              </div>
            </div>

            <div className="group p-8 sm:p-10 bg-white rounded-2xl border border-slate-200/80 hover:border-[#1C1F61] transition-all duration-300 shadow-sm hover:shadow-md">
              <div className="space-y-4">
                <div className="border-l-4 border-[#1C1F61] pl-4">
                  <h2 className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-[#CF1B1B]">The Operational Mandate</h2>
                  <p className="text-lg sm:text-xl font-bold tracking-tight text-[#1C1F61] mt-0.5">Our Mission</p>
                </div>
                <p className="text-[#1C1F61] font-bold text-base sm:text-lg md:text-xl leading-snug tracking-tight pt-2">
                  “To provide secure, innovative, and scalable digital systems that optimize revenue generation, monitoring, collection, reconciliation, and remittance across Africa.”
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. WHO WE ARE */}
      <section className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-16 items-start">
            <div className="lg:col-span-1 space-y-4 border-l-4 border-[#CF1B1B] pl-5">
              <span className="text-[10px] sm:text-xs font-bold text-[#CF1B1B] uppercase tracking-wider">Corporate Identity</span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[#1C1F61]">Who We Are</h2>
            </div>
            <div className="lg:col-span-2 space-y-6 text-slate-600 text-xs sm:text-sm md:text-base leading-relaxed">
              <p>
                Ethical Recovery System Technologies Ltd is established as a core digital transformation firm operating at the intersection of public-sector financial efficiency and private-sector transaction compliance. We architect custom software and deploy targeted hardware infrastructures built natively to monitor system transaction channels.
              </p>
              <p>
                By resolving fragmentation between manual accounting logs and physical collection portals, we establish uncompromised financial structures. Our teams specialize in systemic deployment, field engineering, and real-time analytical visibility across state lines and institutional boundaries.
              </p>
              <p>
                ERS Digital Revenue Infrastructure is not merely a revenue collection platform. It is a complete revenue ecosystem that enables governments, institutions, and organizations to identify, assess, collect, monitor, reconcile, secure, and optimize revenues through a centralized digital framework.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CORE VALUES */}
      <section className="bg-white py-20 sm:py-28 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center max-w-xl mx-auto mb-16 sm:mb-20 space-y-3">
            <span className="text-[10px] sm:text-xs font-bold text-[#CF1B1B] uppercase tracking-wider">Structural Framework</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[#1C1F61]">Our Core Values</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {coreValues.map((value, idx) => (
              <div key={idx} className="p-6 sm:p-8 bg-white rounded-2xl border border-slate-200/60 shadow-sm hover:border-[#F48B25]/50 transition-all duration-300 flex flex-col justify-between">
                <div>
                  <div className="h-9 w-9 sm:h-11 sm:w-11 rounded-xl bg-[#F8FAFC] border border-slate-200 text-[#1C1F61] flex items-center justify-center font-bold text-xs sm:text-sm mb-5 sm:mb-6 group-hover:bg-[#1C1F61] group-hover:text-white transition-colors">
                    0{idx + 1}
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-[#1C1F61] mb-3 group-hover:text-[#CF1B1B] transition-colors">
                    {value.title}
                  </h3>
                  <p className="text-slate-600 text-[11px] sm:text-xs leading-relaxed">
                    {value.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. WHY WE EXIST & GOVERNANCE */}
      <section className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-6">
            <div className="border-l-4 border-[#F48B25] pl-5 mb-2">
              <span className="text-[10px] sm:text-xs font-bold text-[#CF1B1B] uppercase tracking-wider">The Continental Mandate</span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[#1C1F61] mt-1">Why ERS Exists</h2>
            </div>
            <p className="text-slate-600 text-xs sm:text-sm md:text-base leading-relaxed">
              Across Africa's high-velocity revenue and mobility sectors, manual leakages, unverified collection points, and fragmented tracking systems slow down macro-economic scaling.
            </p>
            <p className="text-slate-600 text-xs sm:text-sm md:text-base leading-relaxed">
              Billions of dollars in potential revenue are lost annually due to fragmented collection systems, manual processes, revenue leakages, poor accountability, limited taxpayer visibility, and weak enforcement mechanisms. These challenges have significantly reduced the capacity of governments and institutions to finance development independently.
            </p>
            <p className="text-slate-600 text-xs sm:text-sm md:text-base leading-relaxed">
              ERS exists to completely modernize this administrative reality. By injecting rigid, tamper-proof automation frameworks into everyday commercial transactions, we bridge the gap between field activities and institutional bank vaults, fostering absolute accountability.
            </p>
          </div>

          <div className="p-8 sm:p-10 md:p-12 bg-[#1C1F61] text-white rounded-2xl sm:rounded-3xl border border-white/10 shadow-2xl">
            <div className="space-y-5">
              <div>
                <span className="inline-block text-[9px] sm:text-[10px] font-bold tracking-widest bg-white/5 border border-white/10 px-2.5 py-1 rounded-sm text-[#F48B25] uppercase mb-3">
                  Regulatory Infrastructure
                </span>
                <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white">Corporate Governance</h3>
              </div>
              <p className="text-slate-300 text-[11px] sm:text-xs md:text-sm leading-relaxed">
                Our operational framework is bound strictly to standard corporate governance metrics, comprehensive data encryption audits, and uncompromising regulatory compliance mechanisms. ERS operations ensure that every stakeholder—from local transport unions to federal state departments—is protected by strict cryptographic safety walls and immutable tracking histories.
              </p>
              <div className="pt-5 flex items-center gap-3 border-t border-white/10">
                <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-[9px] sm:text-[10px] text-slate-400 tracking-wider uppercase font-bold">Compliance Status: Operational</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. DIGITAL REVENUE INFRASTRUCTURE (grid) */}
      <section className="bg-[#F8FAFC] py-20 sm:py-28 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16 space-y-3">
            <span className="text-[10px] sm:text-xs font-bold text-[#CF1B1B] uppercase tracking-wider">Complete Ecosystem</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[#1C1F61]">Our Digital Revenue Infrastructure</h2>
            <p className="text-slate-600 text-xs sm:text-sm max-w-xl mx-auto leading-relaxed">ERS integrates multiple technologies and services into a single, unified ecosystem</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {[
              "Revenue Administration and Management Systems",
              "Digital Taxpayer Registration and Enumeration",
              "Revenue Collection and Payment Gateways",
              "Real-Time Monitoring and Reporting Dashboards",
              "Revenue Intelligence and Analytics",
              "Compliance and Enforcement Tools",
              "Electronic Receipting and Verification Systems",
              "Transportation Revenue Management Solutions",
              "Property and Asset-Based Revenue Systems",
              "Digital Identity and Revenue Profiling",
              "Automated Reconciliation and Audit Trails"
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-3 p-4 bg-white rounded-xl border border-slate-200/60 hover:border-[#F48B25]/30 transition-all shadow-sm">
                <svg className="w-4 h-4 text-[#F48B25] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-slate-700 text-[11px] sm:text-xs font-medium leading-snug">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. WHO WE SERVE */}
      <section className="bg-white py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16 space-y-2">
            <span className="text-[10px] sm:text-xs font-bold text-[#CF1B1B] uppercase tracking-wider">Institutional Coverage</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[#1C1F61]">Who We Serve</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              "Local Government Councils",
              "State Governments",
              "Federal Ministries & Agencies",
              "Revenue Authorities",
              "Educational Institutions",
              "Transportation Unions",
              "Market Management Authorities",
              "Regulatory Agencies"
            ].map((sector, idx) => (
              <div key={idx} className="p-5 bg-[#F8FAFC] rounded-xl border border-slate-200/70 text-center hover:border-[#1C1F61] transition-all flex items-center justify-center min-h-[70px]">
                <span className="text-slate-700 text-xs sm:text-sm font-semibold">{sector}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. PAN-AFRICAN VISION */}
      <section className="bg-[#1C1F61] text-white py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
          <div className="max-w-4xl mx-auto space-y-6 sm:space-y-8">
            <div className="space-y-2">
              <span className="text-[10px] sm:text-xs font-bold text-[#F48B25] uppercase tracking-wider">Continental Scaling</span>
              <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold tracking-tight">Our Pan-African Vision</h2>
            </div>
            <p className="text-slate-300 text-xs sm:text-sm md:text-lg max-w-3xl mx-auto leading-relaxed">
              The ERS expansion roadmap is built to scale beyond regional borders. Our macro ambition is to establish unified financial data pipelines across West Africa and the wider continent—interconnecting cross-border transport systems, enterprise trades, and municipal collection nodes into one synchronized, sovereign ecosystem.
            </p>
            <p className="text-slate-400 text-[11px] sm:text-sm max-w-2xl mx-auto leading-relaxed">
              When governments have access to accurate, predictable, and sustainable revenue streams, they can invest more confidently in roads, schools, healthcare facilities, agriculture, transportation systems, digital infrastructure, and job creation initiatives.
            </p>
          </div>
        </div>
      </section>

      {/* 9. LEADERSHIP TEAM */}
      <section className="bg-white py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="border-l-4 border-[#CF1B1B] pl-5 max-w-2xl mb-14 sm:mb-16 space-y-2">
            <span className="text-[10px] sm:text-xs font-bold text-[#CF1B1B] uppercase tracking-wider">Oversight Grid</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[#1C1F61]">Leadership Team</h2>
            <p className="text-slate-600 text-xs sm:text-sm font-normal pt-1">
              Our organizational vector is directed by seasoned executives, technology infrastructure experts, and strategic legal advisers.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {[
              { role: "Executive Board", title: "Managing Directors & Core Executives", focus: "Overseeing systemic platform scaling and public sector transaction deployment." },
              { role: "Technical Leadership", title: "Chief Architects & Engineers", focus: "Directing database security, high-throughput systems, and hardware deployment." },
              { role: "Compliance Council", title: "Legal & Regulatory Directors", focus: "Enforcing absolute transparency frameworks across state and local government contracts." }
            ].map((leader, i) => (
              <div key={i} className="p-6 sm:p-8 bg-[#F8FAFC] rounded-2xl border border-slate-200/80 flex flex-col justify-between min-h-[220px]">
                <div className="space-y-3">
                  <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-[#CF1B1B]">{leader.role}</span>
                  <h4 className="font-bold text-[#1C1F61] text-base sm:text-lg mt-0.5">{leader.title}</h4>
                  <p className="text-slate-600 text-[11px] sm:text-xs leading-relaxed">{leader.focus}</p>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-200/60 text-[10px] sm:text-xs font-bold text-[#1C1F61]">
                  Active Executive Profile
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. CTA */}
      <section className="pt-20 pb-32 sm:pt-28 sm:pb-44 bg-[#F8FAFC] border-t border-slate-200/60">
        <div className="max-w-5xl mx-auto px-6 md:px-12">
          <div className="bg-gradient-to-br from-[#1C1F61] to-[#2a2e7a] text-white rounded-2xl sm:rounded-[2.5rem] p-8 sm:p-12 md:p-16 text-center space-y-6">
            <div>
              <span className="text-[10px] sm:text-xs text-[#F48B25] tracking-widest uppercase border border-[#F48B25]/40 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full bg-[#F48B25]/10 font-bold backdrop-blur-sm inline-block mb-4">
                Engagement Interface
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold tracking-tight max-w-3xl mx-auto leading-tight">
                Ready to Transform Your Revenue Architecture?
              </h2>
            </div>
            <p className="text-slate-300 max-w-2xl text-xs sm:text-sm md:text-base leading-relaxed mx-auto">
              Partner with ERS to eliminate leakages, digitize manual processes, and establish secure, automated real-time revenue systems. Contact us for demonstrations, consultations, or pilot deployments.
            </p>
            <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-[#F48B25] hover:bg-[#f59b3a] text-[#1C1F61] font-bold text-xs sm:text-sm px-7 py-3.5 sm:py-4 rounded-xl transition-all shadow-md text-center">
                Initiate Strategic Contact
              </Link>
              <Link href="/partnerships/become-a-partner" className="border border-white/40 hover:border-white text-white text-xs sm:text-sm px-7 py-3.5 sm:py-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all text-center">
                Become a Partner
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}