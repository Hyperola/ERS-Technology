// src/app/page.tsx
import Link from "next/link";

export default function HomePage() {
  const portals = [
    { name: "Merchant Portal", desc: "Digital collection agents and merchant participation systems." },
    { name: "Government Dashboard", desc: "Real-time state, local government, and agency oversight." },
    { name: "Transport Portal", desc: "Fleet, union, and mobility revenue network tracking." },
    { name: "Partner Login", desc: "Integrated developer API and vendor gateway connectivity." },
  ];

  const coreSolutions = [
    {
      title: "Revenue Automation",
      desc: "Digital systems for taxes, levies, fees, dues, and collections across public and private sectors. Eliminate manual leakages and expand the tax net."
    },
    {
      title: "Transport Ecosystem",
      desc: "Integrated mobility and transport revenue systems for parks, fleets, and unions. Real‑time fare collection, fleet tracking, and compliance."
    },
    {
      title: "Smart Ticketing",
      desc: "Electronic ticketing infrastructures built for transport and event ecosystems. Secure, verifiable, and fully auditable."
    },
    {
      title: "Payment Infrastructure",
      desc: "Integrated payment systems supporting banks, fintechs, POS, QR, wallets, and mobile payments. Unified settlement layer."
    },
    {
      title: "Analytics & Monitoring",
      desc: "Real-time central data intelligence dashboards providing predictive audit trails, anomaly detection, and revenue intelligence."
    },
  ];

  const ecosystemModules = [
    "Revenue Administration and Management Systems",
    "Digital Taxpayer Registration and Enumeration",
    "Revenue Collection and Payment Gateways",
    "Real‑Time Monitoring and Reporting Dashboards",
    "Revenue Intelligence and Analytics",
    "Compliance and Enforcement Tools",
    "Electronic Receipting and Verification Systems",
    "Transportation Revenue Management Solutions",
    "Property and Asset‑Based Revenue Systems",
    "Digital Identity and Revenue Profiling",
    "Automated Reconciliation and Audit Trails"
  ];

  const servedSectors = [
    "Local Government Councils",
    "State Governments",
    "Federal Ministries & Agencies",
    "Revenue Authorities",
    "Educational Institutions",
    "Transportation Unions",
    "Market Management Authorities",
    "Regulatory Agencies"
  ];

  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden bg-[#F8FAFC] text-[#1C1F61] selection:bg-[#F48B25]/30 selection:text-[#1C1F61] font-['Calibri',Calibri,Segoe_UI,sans-serif] antialiased">
      
      {/* HERO BANNER – darker overlay & reduced top padding */}
      <section className="relative bg-[#1C1F61] text-white w-full overflow-hidden flex items-center min-h-screen sm:min-h-0">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=2074"
            alt="Digital infrastructure Africa"
            className="w-full h-full object-cover object-center"
          />
          {/* Darker overlay: opacity between the original very dark and the previous too-light */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#1C1F61]/80 via-[#1C1F61]/85 to-[#1C1F61]/80 sm:bg-gradient-to-r sm:from-[#1C1F61]/85 sm:via-[#1C1F61]/65 sm:to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1C1F61]/55 via-transparent to-transparent" />
        </div>

        {/* Reduced top padding for tighter layout */}
        <div className="relative z-20 w-full max-w-7xl mx-auto px-6 md:px-12 pt-2 sm:pt-3 md:pt-6 lg:pt-8 pb-12 sm:pb-16 md:pb-20 lg:pb-24 backdrop-blur-[2px]">
          <div className="max-w-4xl space-y-4 sm:space-y-5">
            <div className="inline-flex mb-2 animate-in fade-in slide-in-from-bottom-4 duration-700">
              <div className="inline-flex items-center gap-1.5 border border-[#F48B25]/40 bg-[#F48B25]/10 backdrop-blur-sm px-2.5 py-1 sm:px-3 rounded-full text-[9px] sm:text-[10px] font-semibold tracking-[0.15em] text-[#F48B25] uppercase">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#F48B25] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#F48B25]"></span>
                </span>
                Ethical Recovery System Technologies Ltd
              </div>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight leading-[1.2] text-white animate-in fade-in slide-in-from-bottom-6 duration-700 delay-100">
              Building Africa’s <br />
              <span className="text-[#F48B25] relative inline-block">
                Digital Revenue
                <svg className="absolute -bottom-1 left-0 w-full h-1.5 sm:h-2 text-[#F48B25]/40" viewBox="0 0 400 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 8C66.7 3.7 133.3 12.3 200 8C266.7 3.7 333.3 12.3 400 8" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
                </svg>
              </span> Infrastructure
            </h1>
            <p className="text-slate-200 text-sm sm:text-base md:text-lg max-w-3xl leading-relaxed animate-in fade-in slide-in-from-bottom-6 duration-700 delay-200">
              Welcome to Ethical Recovery System Technologies Ltd (ERS) — Africa's emerging Digital Revenue Infrastructure company, providing intelligent technology systems that enable governments, transport institutions, unions, enterprises, and communities to automate, monitor, secure, and optimize revenue generation and remittance processes.
            </p>
            <div className="max-w-3xl border-l-3 border-[#F48B25] pl-3 sm:pl-4 py-0.5 animate-in fade-in slide-in-from-bottom-6 duration-700 delay-300">
              <p className="text-slate-300 text-xs sm:text-sm md:text-base leading-relaxed">
                ERS combines fintech infrastructure, mobility technology, payment systems, data intelligence, compliance tools, and digital ecosystem architecture into one integrated platform designed for Africa's evolving economy.
              </p>
            </div>
            <div className="pt-2 flex flex-col sm:flex-row gap-3 sm:gap-4 animate-in fade-in slide-in-from-bottom-6 duration-700 delay-400">
              <Link href="/contact" className="group relative bg-[#F48B25] hover:bg-[#f59b3a] text-[#1C1F61] font-bold text-xs sm:text-sm md:text-base px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl shadow-lg shadow-[#F48B25]/25 transition-all duration-300 text-center hover:-translate-y-0.5 active:translate-y-0 overflow-hidden w-full sm:w-auto">
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Deploy ERS System
                  <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/30 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              </Link>
              <Link href="/contact" className="group border border-white/40 hover:border-white text-white font-semibold text-xs sm:text-sm md:text-base tracking-wide px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl backdrop-blur-sm bg-white/5 hover:bg-white/10 transition-all duration-300 text-center hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2 w-full sm:w-auto">
                <span className="flex items-center justify-center gap-2">
                  Explore Blueprint
                  <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>
            </div>
            <div className="mt-6 sm:mt-8 flex flex-wrap items-center gap-3 sm:gap-4 text-xs sm:text-[10px] md:text-[11px] text-slate-300 animate-in fade-in slide-in-from-bottom-6 duration-700 delay-500">
              <span className="flex items-center gap-1.5"><svg className="w-3 h-3 sm:w-2.5 sm:h-2.5 text-[#F48B25]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>Trusted by Governments</span>
              <span className="flex items-center gap-1.5"><svg className="w-3 h-3 sm:w-2.5 sm:h-2.5 text-[#F48B25]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>Enterprise Security</span>
              <span className="flex items-center gap-1.5"><svg className="w-3 h-3 sm:w-2.5 sm:h-2.5 text-[#F48B25]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>24/7 Support</span>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK ACCESS PORTALS */}
      <section className="bg-[#F8FAFC] py-12 sm:py-20 border-b border-slate-200/80 relative z-30 -mt-6 sm:-mt-10 rounded-t-2xl sm:rounded-t-[2.5rem] shadow-[0_-15px_40px_-15px_rgba(0,0,0,0.25)]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="mb-8 sm:mb-12 border-l-4 border-[#1C1F61] pl-4 sm:pl-5 animate-in fade-in slide-in-from-bottom-6 duration-700">
            <h2 className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-[#CF1B1B] mb-1">Gateways</h2>
            <p className="text-xl sm:text-2xl md:text-3xl font-extrabold tracking-tight text-[#1C1F61]">Quick Access Portals</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {portals.map((portal, index) => (
              <div key={index} className="group p-5 sm:p-6 bg-white rounded-2xl border border-slate-200/80 hover:border-[#F48B25] transition-all duration-500 flex flex-col justify-between shadow-sm hover:shadow-xl hover:-translate-y-2 cursor-pointer animate-in fade-in slide-in-from-bottom-8" style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'both' }}>
                <div>
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#F48B25]/10 flex items-center justify-center mb-3 sm:mb-4 group-hover:bg-[#F48B25] transition-all duration-300 group-hover:shadow-lg">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-[#F48B25] group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
                  </div>
                  <h3 className="font-bold text-[#1C1F61] group-hover:text-[#CF1B1B] text-base sm:text-lg mb-2 transition-colors duration-300">{portal.name}</h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-normal">{portal.desc}</p>
                </div>
                <div className="mt-6 sm:mt-8 text-[10px] sm:text-xs font-bold tracking-wider text-[#1C1F61] group-hover:text-[#F48B25] flex items-center gap-1 transition-all duration-300 pt-3 sm:pt-4 border-t border-slate-100">Access Portal <svg className="w-2.5 h-2.5 sm:w-3 sm:h-3 group-hover:translate-x-1.5 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT WE DO / FLAGSHIP INFRASTRUCTURE SERVICES */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-start">
            <div className="lg:col-span-1 space-y-4 lg:sticky lg:top-8 border-l-4 border-[#F48B25] pl-5">
              <span className="text-xs font-bold text-[#CF1B1B] uppercase tracking-widest">What We Do</span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-[#1C1F61] leading-tight">Flagship Infrastructure Services</h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                A complete revenue ecosystem that enables governments, institutions, and organizations to identify, assess, collect, monitor, reconcile, secure, and optimize revenues through a centralized digital framework.
              </p>
            </div>
            <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
              {coreSolutions.map((item, index) => (
                <div key={index} className="group p-5 sm:p-6 bg-white rounded-2xl border border-slate-200/60 shadow-sm hover:border-[#F48B25]/60 hover:shadow-xl transition-all duration-500 hover:-translate-y-1 animate-in fade-in slide-in-from-bottom-8" style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'both' }}>
                  <div className="h-8 w-8 sm:h-10 sm:w-10 rounded-xl bg-gradient-to-br from-[#1C1F61] to-[#2a2e7a] text-white flex items-center justify-center font-bold text-xs sm:text-sm mb-4 sm:mb-5 group-hover:from-[#F48B25] group-hover:to-[#f59b3a] transition-all duration-300 shadow-md">0{index + 1}</div>
                  <h3 className="text-base sm:text-lg font-bold text-[#1C1F61] mb-2 group-hover:text-[#CF1B1B] transition-colors duration-300">{item.title}</h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ERS DIGITAL REVENUE ECOSYSTEM */}
      <section className="bg-white border-y border-slate-200 py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 space-y-2">
            <span className="text-[10px] sm:text-xs font-bold text-[#CF1B1B] uppercase tracking-wider">Complete Ecosystem</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-[#1C1F61]">ERS Digital Revenue Infrastructure</h2>
            <p className="text-slate-600 text-sm">A single, unified platform integrating all revenue‑critical technologies</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {ecosystemModules.map((module, idx) => (
              <div key={idx} className="flex items-center gap-2 p-3 bg-[#F8FAFC] rounded-xl border border-slate-200/60 hover:border-[#F48B25]/30 transition-all">
                <svg className="w-4 h-4 text-[#F48B25] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                <span className="text-slate-700 text-xs sm:text-sm font-medium">{module}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHO WE SERVE */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 lg:gap-12 mb-10">
            <div className="max-w-xl space-y-3 border-l-4 border-[#CF1B1B] pl-5">
              <span className="text-xs font-bold text-[#CF1B1B] uppercase tracking-wider">Institutional Coverage</span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-[#1C1F61]">Who We Serve</h2>
              <p className="text-slate-600 text-sm">Deployed across public and private sectors to digitise revenue administration.</p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {servedSectors.map((sector, idx) => (
              <div key={idx} className="p-4 bg-white rounded-xl border border-slate-200/70 hover:border-[#1C1F61] transition-all text-center"><span className="text-slate-700 text-xs sm:text-sm font-semibold">{sector}</span></div>
            ))}
          </div>
        </div>
      </section>

      {/* IMPACT STATISTICS */}
      <section className="bg-[#1C1F61] text-white py-16 sm:py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 bg-[linear-gradient(to_right,#FFFFFF_1px,transparent_1px),linear-gradient(to_bottom,#FFFFFF_1px,transparent_1px)] bg-[size:3rem_3rem] pointer-events-none" />
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-[#F48B25]/5 to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3">
            <span className="text-xs font-bold text-[#F48B25] uppercase tracking-widest">Impact Statistics</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight">Displaying Measurable Achievements</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            {[
              { val: "35% +", label: "Revenue Growth Optimization" },
              { val: "Millions", label: "Secure Transaction Volumes" },
              { val: "Multi-State", label: "States & Institutions Served" },
              { val: "Active", label: "Digital Users Onboarded" }
            ].map((stat, i) => (
              <div key={i} className="group p-6 sm:p-8 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 text-center hover:bg-white/[0.08] transition-all duration-500 hover:scale-105 hover:border-white/20 animate-in fade-in slide-in-from-bottom-8" style={{ animationDelay: `${i * 150}ms`, animationFillMode: 'both' }}>
                <div className="text-3xl sm:text-4xl md:text-5xl font-black text-[#F48B25] tracking-tight mb-2 group-hover:scale-110 transition-transform duration-300 inline-block">{stat.val}</div>
                <div className="text-[10px] sm:text-xs uppercase tracking-widest text-slate-300 font-bold">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY ERS EXISTS */}
      <section className="bg-white py-16 sm:py-20 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-4 border-l-4 border-[#F48B25] pl-5">
              <span className="text-xs font-bold text-[#CF1B1B] uppercase tracking-wider">The Continental Mandate</span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-[#1C1F61]">Why ERS Exists</h2>
              <p className="text-slate-600 text-sm leading-relaxed">Billions of dollars in potential revenue are lost annually across Africa due to fragmented collection systems, manual processes, leakages, and weak enforcement.</p>
              <p className="text-slate-600 text-sm leading-relaxed">ERS was established to completely modernise this reality – injecting tamper‑proof automation into everyday commercial transactions, bridging the gap between field activities and institutional bank vaults.</p>
            </div>
            <div className="bg-[#F8FAFC] p-6 sm:p-8 rounded-2xl border border-slate-200/70">
              <h3 className="text-lg font-bold text-[#1C1F61] mb-2">Our Promise</h3>
              <p className="text-slate-600 text-sm leading-relaxed">When governments have access to accurate, predictable, and sustainable revenue streams, they can invest confidently in roads, schools, healthcare, agriculture, digital infrastructure, and job creation – building a self‑sufficient Africa.</p>
            </div>
          </div>
        </div>
      </section>

      {/* INSTITUTIONAL ALIGNMENT */}
      <section className="py-16 sm:py-24 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 lg:gap-12">
            <div className="max-w-xl space-y-4 border-l-4 border-[#CF1B1B] pl-5">
              <span className="text-xs font-bold text-[#CF1B1B] uppercase tracking-widest">Institutional Alignment</span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-[#1C1F61] leading-tight">Engineered for Critical Sectors</h2>
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">ERS customizes high-throughput infrastructure to solve complex compliance, reconciliation, and revenue challenges across multiple economic channels.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 flex-1 w-full">
              {[
                { title: "Government Agencies", label: "State Revenue Boards, Ministries & Municipalities" },
                { title: "Transport Unions", label: "Fleet Operators, National Transit Networks & Parks" },
                { title: "Financial Institutions", label: "Acquiring Banks, Central Clearers & Micro-Lenders" },
                { title: "Enterprise & SMEs", label: "Commercial Merchants, Logistics Providers & Aggregators" }
              ].map((sector, idx) => (
                <div key={idx} className="group p-4 sm:p-5 bg-[#F8FAFC] rounded-xl border border-slate-200/70 hover:border-[#1C1F61] hover:bg-white hover:shadow-lg transition-all duration-400 hover:-translate-y-1 cursor-pointer animate-in fade-in slide-in-from-bottom-8" style={{ animationDelay: `${idx * 100}ms`, animationFillMode: 'both' }}>
                  <div className="flex items-start gap-3">
                    <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-[#F48B25]/10 group-hover:bg-[#F48B25] transition-colors duration-300 flex items-center justify-center">
                      <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#F48B25] group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
                    </div>
                    <div><h4 className="font-bold text-[#1C1F61] text-sm sm:text-base mb-1.5 group-hover:text-[#CF1B1B] transition-colors">{sector.title}</h4><p className="text-slate-600 text-[11px] sm:text-xs leading-relaxed font-normal">{sector.label}</p></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-16 sm:py-20 bg-[#F8FAFC] relative overflow-hidden border-t border-slate-200/60">
        <div className="max-w-5xl mx-auto px-6 md:px-12">
          <div className="bg-gradient-to-br from-[#1C1F61] to-[#2a2e7a] text-white rounded-2xl sm:rounded-[2rem] p-6 sm:p-8 md:p-12 relative overflow-hidden border border-white/10 shadow-2xl flex flex-col items-center text-center space-y-5 sm:space-y-6 animate-in fade-in zoom-in-95 duration-700">
            <div className="absolute -right-20 -bottom-20 w-48 sm:w-64 h-48 sm:h-64 rounded-full border border-white/10 animate-pulse" />
            <div className="absolute -left-20 -top-20 w-48 sm:w-64 h-48 sm:h-64 rounded-full border border-white/10 animate-pulse" style={{ animationDelay: '1s' }} />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] sm:w-[300px] h-[200px] sm:h-[300px] bg-[#F48B25]/5 rounded-full blur-3xl" />
            <div className="inline-flex"><span className="text-[10px] sm:text-xs text-[#F48B25] tracking-widest uppercase border border-[#F48B25]/40 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full bg-[#F48B25]/10 font-bold backdrop-blur-sm">Deployment Gateway</span></div>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold tracking-tight max-w-2xl leading-[1.2]">Ready to Optimize Your Revenue Architecture?</h2>
            <p className="text-slate-300 max-w-2xl text-xs sm:text-sm md:text-base leading-relaxed">Partner with ERS Technologies to clear leakages, digitise manual asset touchpoints, and establish secure, automated real-time remittance grids across your operating network.</p>
            <div className="pt-3 sm:pt-4 flex flex-col sm:flex-row gap-3 sm:gap-4 w-full justify-center max-w-md relative z-20">
              <Link href="/contact" className="group relative bg-[#F48B25] hover:bg-[#f59b3a] text-[#1C1F61] text-center font-bold tracking-wider text-[10px] sm:text-xs uppercase px-6 sm:px-8 py-3 sm:py-4 rounded-xl transition-all duration-300 shadow-xl shadow-black/20 hover:-translate-y-1 active:translate-y-0 overflow-hidden"><span className="relative z-10">Request Integration Demo</span><span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/30 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700" /></Link>
              <Link href="/contact" className="border border-white/30 hover:border-white/60 text-white text-center font-bold text-[10px] sm:text-xs uppercase tracking-wider px-6 sm:px-8 py-3 sm:py-4 rounded-xl bg-white/5 backdrop-blur-md transition-all duration-300 hover:bg-white/10 hover:-translate-y-1 active:translate-y-0">Technical Specifications</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}