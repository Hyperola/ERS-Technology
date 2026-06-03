// src/app/page.tsx (only hero section reduced; rest unchanged)
import Link from "next/link";

export default function HomePage() {
  // Exact Copywriting: Quick Access Portals Section
  const portals = [
    { name: "Merchant Portal", desc: "Digital collection agents and merchant participation systems." },
    { name: "Government Dashboard", desc: "Real-time state, local government, and agency oversight." },
    { name: "Transport Portal", desc: "Fleet, union, and mobility revenue network tracking." },
    { name: "Partner Login", desc: "Integrated developer API and vendor gateway connectivity." },
  ];

  // Exact Copywriting: Flagship Services under Key Solutions
  const coreSolutions = [
    { title: "Revenue Automation", desc: "Digital systems for taxes, levies, fees, dues, and collections across public and private sectors." },
    { title: "Transport Ecosystem", desc: "Integrated mobility and transport revenue systems for parks, fleets, and unions." },
    { title: "Smart Ticketing", desc: "Electronic ticketing infrastructures built for transport and event ecosystems." },
    { title: "Payment Infrastructure", desc: "Integrated payment systems supporting banks, fintechs, POS, QR, wallets, and mobile payments." },
    { title: "Analytics & Monitoring", desc: "Real-time central data intelligence dashboards providing predictive audit trails." },
  ];

  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden bg-[#F8FAFC] text-[#0A2540] selection:bg-[#E5981A]/30 selection:text-[#0A2540] font-['Calibri',Calibri,Segoe_UI,sans-serif] antialiased">
      
      {/* 1. HERO BANNER - Reduced font sizes and spacing */}
      <section className="relative bg-[#0A2540] text-white w-full overflow-hidden flex items-center px-6 md:px-12 lg:px-24 pt-8 md:pt-12 lg:pt-16 pb-20 md:pb-28 lg:pb-32">
        
        {/* Background image with overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=2074"
            alt="Digital infrastructure Africa"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A2540] via-[#0A2540]/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A2540] via-transparent to-transparent" />
        </div>

        {/* Content wrapper - reduced max-width and spacing */}
        <div className="relative z-20 w-full max-w-6xl mx-auto">
          {/* Trust badge - smaller */}
          <div className="inline-flex mb-5 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="inline-flex items-center gap-1.5 border border-[#E5981A]/40 bg-[#E5981A]/10 backdrop-blur-sm px-3 py-1 rounded-full text-[9px] sm:text-[10px] font-semibold tracking-[0.15em] text-[#E5981A] uppercase">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E5981A] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#E5981A]"></span>
              </span>
              Ethical Recovery System Technologies Ltd
            </div>
          </div>
          
          {/* Headline - reduced sizes */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight leading-[1.15] text-white mb-4 animate-in fade-in slide-in-from-bottom-6 duration-700 delay-100">
            Building Africa’s <br />
            <span className="text-[#E5981A] relative inline-block">
              Digital Revenue
              <svg className="absolute -bottom-1.5 left-0 w-full h-2 text-[#E5981A]/40" viewBox="0 0 400 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 8C66.7 3.7 133.3 12.3 200 8C266.7 3.7 333.3 12.3 400 8" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
              </svg>
            </span> Infrastructure
          </h1>
          
          {/* Description - reduced text size and margin */}
          <p className="text-slate-200 text-sm sm:text-base md:text-lg max-w-3xl leading-relaxed mb-4 animate-in fade-in slide-in-from-bottom-6 duration-700 delay-200">
            Welcome to Ethical Recovery System Technologies Ltd (ERS) — Africa’s emerging Digital Revenue Infrastructure company, providing intelligent technology systems that enable governments, transport institutions, unions, enterprises, and communities to automate, monitor, secure, and optimize revenue generation and remittance processes.
          </p>

          {/* Quote accent - reduced padding and margin */}
          <div className="max-w-3xl border-l-3 border-[#E5981A] pl-4 py-1 mb-6 animate-in fade-in slide-in-from-bottom-6 duration-700 delay-300">
            <p className="text-slate-300 text-xs sm:text-sm md:text-base leading-relaxed">
              ERS combines fintech infrastructure, mobility technology, payment systems, data intelligence, compliance tools, and digital ecosystem architecture into one integrated platform designed for Africa’s evolving economy.
            </p>
          </div>
          
          {/* CTA Buttons - smaller */}
          <div className="flex flex-col sm:flex-row gap-4 animate-in fade-in slide-in-from-bottom-6 duration-700 delay-400">
            <Link href="/contact" className="group relative bg-[#E5981A] hover:bg-[#f5a92a] text-[#0A2540] font-bold text-xs sm:text-sm px-6 py-3 rounded-xl shadow-lg shadow-[#E5981A]/25 transition-all duration-300 text-center hover:-translate-y-0.5 active:translate-y-0 overflow-hidden">
              <span className="relative z-10 flex items-center justify-center gap-2">
                Deploy ERS System
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/30 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            </Link>
            <Link href="/solutions" className="group border border-white/40 hover:border-white text-white font-semibold text-xs sm:text-sm tracking-wide px-6 py-3 rounded-xl backdrop-blur-sm bg-white/5 hover:bg-white/10 transition-all duration-300 text-center hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2">
              Explore Blueprint
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          {/* Trust indicators - smaller and tighter */}
          <div className="mt-8 flex flex-wrap items-center gap-4 text-[10px] sm:text-xs text-slate-300 animate-in fade-in slide-in-from-bottom-6 duration-700 delay-500">
            <span className="flex items-center gap-1.5">
              <svg className="w-3.5 h-3.5 text-[#E5981A]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Trusted by Governments
            </span>
            <span className="flex items-center gap-1.5">
              <svg className="w-3.5 h-3.5 text-[#E5981A]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Enterprise Security
            </span>
            <span className="flex items-center gap-1.5">
              <svg className="w-3.5 h-3.5 text-[#E5981A]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              24/7 Support
            </span>
          </div>
        </div>
      </section>

      {/* All remaining sections (portals, solutions, stats, etc.) are exactly as you had them */}
      <section className="bg-[#F8FAFC] py-20 px-6 md:px-12 lg:px-24 border-b border-slate-200/80 relative z-30 -mt-10 rounded-t-[2.5rem] shadow-[0_-15px_40px_-15px_rgba(0,0,0,0.25)]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 border-l-4 border-[#0A2540] pl-5 animate-in fade-in slide-in-from-bottom-6 duration-700">
            <h2 className="text-xs font-bold uppercase tracking-widest text-[#A62626] mb-1">Gateways</h2>
            <p className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#0A2540]">Quick Access Portals</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {portals.map((portal, index) => (
              <div 
                key={index} 
                className="group p-6 bg-white rounded-2xl border border-slate-200/80 hover:border-[#E5981A] transition-all duration-500 flex flex-col justify-between shadow-sm hover:shadow-xl hover:-translate-y-2 cursor-pointer animate-in fade-in slide-in-from-bottom-8"
                style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'both' }}
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#E5981A]/10 flex items-center justify-center mb-4 group-hover:bg-[#E5981A] transition-all duration-300 group-hover:shadow-lg">
                    <svg className="w-6 h-6 text-[#E5981A] group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-[#0A2540] group-hover:text-[#A62626] text-lg mb-2.5 transition-colors duration-300">
                    {portal.name}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed font-normal">
                    {portal.desc}
                  </p>
                </div>
                <div className="mt-8 text-xs font-bold tracking-wider text-[#0A2540] group-hover:text-[#E5981A] flex items-center gap-1 transition-all duration-300 pt-4 border-t border-slate-100">
                  Access Portal 
                  <svg className="w-3 h-3 group-hover:translate-x-1.5 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto w-full relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8 items-start">
          <div className="lg:col-span-1 space-y-4 lg:sticky lg:top-8 border-l-4 border-[#E5981A] pl-5 animate-in fade-in slide-in-from-bottom-6 duration-700">
            <span className="text-xs font-bold text-[#A62626] uppercase tracking-widest">What We Do</span>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-[#0A2540] leading-tight">Flagship Infrastructure Services</h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
              A precise synthesis of ERS core capabilities mapped out across system automation, transport node monitoring, electronic ticketing, and structural compliance layers.
            </p>
          </div>
          
          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {coreSolutions.map((item, index) => (
              <div 
                key={index} 
                className="group p-6 bg-white rounded-2xl border border-slate-200/60 shadow-sm hover:border-[#E5981A]/60 hover:shadow-xl transition-all duration-500 hover:-translate-y-1 animate-in fade-in slide-in-from-bottom-8"
                style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'both' }}
              >
                <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-[#0A2540] to-[#1a3a5c] text-white flex items-center justify-center font-bold text-sm mb-5 group-hover:from-[#E5981A] group-hover:to-[#f5a92a] transition-all duration-300 shadow-md">
                  0{index + 1}
                </div>
                <h3 className="text-lg font-bold text-[#0A2540] mb-2 group-hover:text-[#A62626] transition-colors duration-300">{item.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed font-normal">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#0A2540] text-white py-24 px-6 md:px-12 lg:px-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 bg-[linear-gradient(to_right,#FFFFFF_1px,transparent_1px),linear-gradient(to_bottom,#FFFFFF_1px,transparent_1px)] bg-[size:3rem_3rem] pointer-events-none" />
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-[#E5981A]/5 to-transparent pointer-events-none" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3 animate-in fade-in slide-in-from-bottom-6 duration-700">
            <span className="text-xs font-bold text-[#E5981A] uppercase tracking-widest">Impact Statistics</span>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">Displaying Measurable Achievements</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { val: "35% +", label: "Revenue Growth Optimization" },
              { val: "Millions", label: "Secure Transaction Volumes" },
              { val: "Multi-State", label: "States & Institutions Served" },
              { val: "Active", label: "Digital Users Onboarded" }
            ].map((stat, i) => (
              <div 
                key={i} 
                className="group p-8 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 text-center hover:bg-white/[0.08] transition-all duration-500 hover:scale-105 hover:border-white/20 animate-in fade-in slide-in-from-bottom-8"
                style={{ animationDelay: `${i * 150}ms`, animationFillMode: 'both' }}
              >
                <div className="text-4xl md:text-5xl font-black text-[#E5981A] tracking-tight mb-2.5 group-hover:scale-110 transition-transform duration-300 inline-block">
                  {stat.val}
                </div>
                <div className="text-xs uppercase tracking-widest text-slate-300 font-bold">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 md:px-12 lg:px-24 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-12">
            <div className="max-w-xl space-y-4 border-l-4 border-[#A62626] pl-5 animate-in fade-in slide-in-from-bottom-6 duration-700">
              <span className="text-xs font-bold text-[#A62626] uppercase tracking-widest">Institutional Alignment</span>
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-[#0A2540] leading-tight">Engineered for Critical Sectors</h2>
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base font-normal">
                ERS customizes high-throughput infrastructure to solve complex compliance, reconciliation, and revenue challenges across multiple economic channels.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 flex-1 w-full">
              {[
                { title: "Government Agencies", label: "State Revenue Boards, Ministries & Municipalities" },
                { title: "Transport Unions", label: "Fleet Operators, National Transit Networks & Parks" },
                { title: "Financial Institutions", label: "Acquiring Banks, Central Clearers & Micro-Lenders" },
                { title: "Enterprise & SMEs", label: "Commercial Merchants, Logistics Providers & Aggregators" }
              ].map((sector, idx) => (
                <div 
                  key={idx} 
                  className="group p-5 bg-[#F8FAFC] rounded-xl border border-slate-200/70 hover:border-[#0A2540] hover:bg-white hover:shadow-lg transition-all duration-400 hover:-translate-y-1 cursor-pointer animate-in fade-in slide-in-from-bottom-8"
                  style={{ animationDelay: `${idx * 100}ms`, animationFillMode: 'both' }}
                >
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-[#E5981A]/10 group-hover:bg-[#E5981A] transition-colors duration-300 flex items-center justify-center">
                      <svg className="w-4 h-4 text-[#E5981A] group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-[#0A2540] text-base mb-1.5 group-hover:text-[#A62626] transition-colors">{sector.title}</h4>
                      <p className="text-slate-600 text-xs leading-relaxed font-normal">{sector.label}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 md:px-12 lg:px-24 bg-[#F8FAFC] relative overflow-hidden border-t border-slate-200/60">
        <div className="max-w-5xl mx-auto bg-gradient-to-br from-[#0A2540] to-[#143450] text-white rounded-[2rem] p-8 md:p-16 relative overflow-hidden border border-white/10 shadow-2xl flex flex-col items-center text-center space-y-6 animate-in fade-in zoom-in-95 duration-700">
          <div className="absolute -right-20 -bottom-20 w-64 h-64 rounded-full border border-white/10 animate-pulse" />
          <div className="absolute -left-20 -top-20 w-64 h-64 rounded-full border border-white/10 animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-[#E5981A]/5 rounded-full blur-3xl" />
          
          <div className="inline-flex animate-bounce-in">
            <span className="text-xs text-[#E5981A] tracking-widest uppercase border border-[#E5981A]/40 px-4 py-1.5 rounded-full bg-[#E5981A]/10 font-bold backdrop-blur-sm">
              Deployment Gateway
            </span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight max-w-2xl leading-[1.15]">
            Ready to Optimize Your Revenue Architecture?
          </h2>
          
          <p className="text-slate-300 max-w-2xl text-sm md:text-base leading-relaxed font-normal antialiased">
            Partner with ERS Technologies to clear leakages, digitize manual asset touchpoints, and establish secure, automated real-time remittance grids across your operating network.
          </p>
          
          <div className="pt-4 flex flex-col sm:flex-row gap-4 w-full justify-center max-w-md relative z-20">
            <Link href="/contact" className="group relative bg-[#E5981A] hover:bg-[#f5a92a] text-[#0A2540] text-center font-bold tracking-wider text-xs uppercase px-8 py-4 rounded-xl transition-all duration-300 shadow-xl shadow-black/20 hover:-translate-y-1 active:translate-y-0 overflow-hidden">
              <span className="relative z-10">Request Integration Demo</span>
              <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/30 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            </Link>
            <Link href="/solutions" className="border border-white/30 hover:border-white/60 text-white text-center font-bold text-xs uppercase tracking-wider px-8 py-4 rounded-xl bg-white/5 backdrop-blur-md transition-all duration-300 hover:bg-white/10 hover:-translate-y-1 active:translate-y-0">
              Technical Specifications
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}