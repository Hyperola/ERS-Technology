// src/app/ecosystem/digital-revenue/page.tsx
import Link from 'next/link';

export default function DigitalRevenueEcosystemPage() {
  const highlights = [
    { 
      title: "All Payments in One Place", 
      detail: "We bring together money collected from public markets, transport systems, online payments, and bank transfers into a single, clean management system." 
    },
    { 
      title: "Real-Time Tracking", 
      detail: "See exactly how much revenue has been collected the moment a payment is made. No more waiting for daily or weekly reports to find out your true balance." 
    },
    { 
      title: "Zero Waste & Leaks", 
      detail: "By moving away from cash and physical handovers, our system makes sure that every single cent paid by the public safely reaches its destination without disappearing along the way." 
    },
  ];

  const features = [
    {
      title: "Multi‑Channel Collection",
      desc: "Accept payments via bank transfer, card, USSD, mobile money, QR code, and cash – all unified in one dashboard."
    },
    {
      title: "Automated Reconciliation",
      desc: "Match every payment to the correct invoice, payer, and revenue head without manual effort."
    },
    {
      title: "Real‑Time Dashboards",
      desc: "Live visualisation of collections, outstanding balances, and revenue performance across all channels."
    },
    {
      title: "Smart Receipting",
      desc: "Instantly issue verifiable, tamper‑proof electronic receipts with QR codes for easy audit."
    },
    {
      title: "Integrated Compliance",
      desc: "Automatic tax deduction, levy application, and enforcement triggers based on configurable rules."
    },
    {
      title: "Partner & Agent Management",
      desc: "Onboard, monitor, and settle commissions to collection agents, unions, and third‑party vendors."
    }
  ];

  const benefits = [
    "Eliminate cash handling risks and manual errors",
    "Reduce reconciliation time from days to minutes",
    "Increase revenue collection efficiency by up to 70%",
    "Build public trust through transparent reporting",
    "Scale from a single agency to nationwide deployment"
  ];

  const servedSectors = [
    "Government Ministries & Agencies",
    "State & Local Revenue Authorities",
    "Transport Unions & Park Managers",
    "Market & Trade Associations",
    "Educational Institutions",
    "Healthcare Administrations"
  ];

  return (
    <main className="min-h-screen bg-[#F8FAFC] text-[#1C1F61] overflow-x-hidden selection:bg-[#F48B25]/30 selection:text-[#1C1F61] font-['Calibri',Calibri,Segoe_UI,sans-serif]">
      
      {/* HERO BANNER – brand colors, reliable ecosystem image */}
      <section className="relative bg-[#1C1F61] text-white w-full overflow-hidden flex items-center min-h-[60vh] sm:min-h-0">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070"
            alt="Digital revenue ecosystem dashboard"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1C1F61]/95 via-[#1C1F61]/95 to-[#1C1F61]/95 sm:bg-gradient-to-r sm:from-[#1C1F61]/95 sm:via-[#1C1F61]/85 sm:to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1C1F61]/90 via-transparent to-transparent" />
        </div>

        <div className="relative z-20 w-full max-w-7xl mx-auto px-6 md:px-12 py-12 sm:py-16 md:py-20 lg:py-24">
          <div className="max-w-3xl space-y-4 sm:space-y-5">
            <div className="inline-flex">
              <div className="inline-flex items-center gap-1.5 border border-[#F48B25]/40 bg-[#F48B25]/10 backdrop-blur-sm px-2.5 py-1 sm:px-3 rounded-full text-[9px] sm:text-[10px] font-bold tracking-wider text-[#F48B25] uppercase">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#F48B25] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#F48B25]"></span>
                </span>
                How We Manage Revenue
              </div>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-[1.2] text-white">
              Digital Revenue <br />
              <span className="text-[#F48B25]">Collection Network</span>
            </h1>
            <p className="text-slate-200 text-sm sm:text-base md:text-lg max-w-3xl leading-relaxed">
              A simple, secure, and completely transparent digital system that connects all public and private payment channels into one reliable network.
            </p>
            <div className="pt-2 flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Link href="/contact" className="group relative bg-[#F48B25] hover:bg-[#f59b3a] text-[#1C1F61] font-bold text-xs sm:text-sm md:text-base px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl shadow-lg shadow-[#F48B25]/25 transition-all duration-300 text-center hover:-translate-y-0.5 active:translate-y-0 overflow-hidden w-full sm:w-auto">
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Deploy Ecosystem
                  <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/30 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              </Link>
              <Link href="/" className="border border-white/40 hover:border-white text-white font-semibold text-xs sm:text-sm md:text-base tracking-wide px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl backdrop-blur-sm bg-white/5 hover:bg-white/10 transition-all duration-300 text-center hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2 w-full sm:w-auto">
                Return to Home
                <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* MAIN CONTENT – overview card + three highlights */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-12 sm:py-16 relative z-20 -mt-6 sm:-mt-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Side Overview Card */}
          <div className="lg:col-span-4 bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
            <div className="space-y-4">
              <span className="text-xs font-bold text-[#CF1B1B] uppercase tracking-widest">Our Big Picture</span>
              <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-[#1C1F61]">Simple and Secure Money Management</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                We believe public funds should be easy to pay and completely trackable. Our network helps governments and organisations modernise how they protect and grow their finances.
              </p>
            </div>
            <Link href="/contact" className="mt-6 inline-block bg-[#1C1F61] hover:bg-[#CF1B1B] text-white text-center font-bold text-xs uppercase px-5 py-3 rounded-xl shadow-md transition-all">
              Read Our Solution Guide →
            </Link>
          </div>

          {/* Three Highlights */}
          <div className="lg:col-span-8 bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 lg:p-10 shadow-sm hover:shadow-xl transition-all duration-300">
            <div className="space-y-6">
              {highlights.map((item, i) => (
                <div key={i} className="flex gap-4 items-start border-b border-slate-100 last:border-0 pb-5 last:pb-0">
                  <div className="bg-[#F8FAFC] border border-slate-200 font-bold text-sm text-[#F48B25] px-3 py-1 rounded-md min-w-[50px] text-center">
                    0{i+1}
                  </div>
                  <div>
                    <h4 className="font-bold text-[#1C1F61] text-lg">{item.title}</h4>
                    <p className="text-slate-500 text-sm leading-relaxed mt-1">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES GRID – 6 ecosystem capabilities */}
      <section className="bg-white py-16 sm:py-20 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-2">
            <span className="text-[10px] sm:text-xs font-bold text-[#CF1B1B] uppercase tracking-wider">Ecosystem Capabilities</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-[#1C1F61]">What Our Revenue Network Delivers</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {features.map((feature, idx) => (
              <div key={idx} className="flex items-start gap-3 p-4 bg-[#F8FAFC] rounded-xl border border-slate-200/60 hover:border-[#F48B25]/30 transition-all">
                <svg className="w-4 h-4 text-[#F48B25] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <div>
                  <h4 className="text-sm sm:text-base font-bold text-[#1C1F61] mb-1">{feature.title}</h4>
                  <p className="text-slate-600 text-[11px] sm:text-xs leading-relaxed">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* KEY BENEFITS */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-4 border-l-4 border-[#F48B25] pl-5">
              <span className="text-[10px] sm:text-xs font-bold text-[#CF1B1B] uppercase tracking-wider">Why a Unified Ecosystem?</span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-[#1C1F61]">Tangible Benefits for Your Institution</h2>
              <p className="text-slate-600 text-sm leading-relaxed">
                Fragmented collection systems create leakages, delays, and manual errors. Our unified network connects every payment channel, automates reconciliation, and gives you real‑time control.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {benefits.map((benefit, idx) => (
                <div key={idx} className="flex items-center gap-2 p-3 bg-white rounded-xl border border-slate-200/60 hover:border-[#F48B25]/30 transition-all shadow-sm">
                  <svg className="w-4 h-4 text-[#F48B25] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-slate-700 text-xs sm:text-sm font-medium">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WHO WE SERVE */}
      <section className="bg-white py-16 sm:py-20 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-2">
            <span className="text-[10px] sm:text-xs font-bold text-[#CF1B1B] uppercase tracking-wider">Deployment Footprint</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-[#1C1F61]">Trusted by Revenue Administrators</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {servedSectors.map((sector, idx) => (
              <div key={idx} className="p-4 bg-[#F8FAFC] rounded-xl border border-slate-200/70 hover:border-[#1C1F61] transition-all text-center">
                <span className="text-slate-700 text-xs sm:text-sm font-semibold">{sector}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TECHNICAL HIGHLIGHTS – ecosystem connectivity */}
      <section className="bg-[#1C1F61] text-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-4">
              <span className="text-xs font-bold text-[#F48B25] uppercase tracking-wider">Connected by Design</span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight">One Network, Infinite Possibilities</h2>
              <p className="text-slate-300 text-sm leading-relaxed">
                Our digital revenue ecosystem is built on open APIs, secure cloud infrastructure, and flexible data models. It connects seamlessly with existing banking systems, government ERPs, and third‑party applications – no rip‑and‑replace required.
              </p>
              <ul className="space-y-2 pt-2">
                <li className="flex items-start gap-2 text-sm text-slate-300">
                  <svg className="w-4 h-4 text-[#F48B25] mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Works offline – data syncs when connectivity returns
                </li>
                <li className="flex items-start gap-2 text-sm text-slate-300">
                  <svg className="w-4 h-4 text-[#F48B25] mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Fully compliant with NDPR, GDPR, and local data protection laws
                </li>
                <li className="flex items-start gap-2 text-sm text-slate-300">
                  <svg className="w-4 h-4 text-[#F48B25] mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Modular architecture – start small, add modules as you grow
                </li>
              </ul>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 sm:p-8">
              <div className="space-y-4">
                <div className="flex items-center gap-3 border-b border-white/10 pb-4">
                  <div className="w-10 h-10 rounded-lg bg-[#F48B25]/20 flex items-center justify-center">
                    <svg className="w-5 h-5 text-[#F48B25]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.66 0 3-4 3-9s-1.34-9-3-9m0 18c-1.66 0-3-4-3-9s1.34-9 3-9" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold">Interoperability First</h4>
                    <p className="text-xs text-slate-400">Connect to any bank, mobile money, or ERP system</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#F48B25]/20 flex items-center justify-center">
                    <svg className="w-5 h-5 text-[#F48B25]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold">Bank‑Grade Security</h4>
                    <p className="text-xs text-slate-400">End‑to‑end encryption and role‑based access controls</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA – consistent with homepage */}
      <section className="py-16 sm:py-20 bg-[#F8FAFC] border-t border-slate-200/60">
        <div className="max-w-5xl mx-auto px-6 md:px-12">
          <div className="bg-gradient-to-br from-[#1C1F61] to-[#2a2e7a] text-white rounded-2xl sm:rounded-[2rem] p-6 sm:p-8 md:p-12 text-center space-y-5">
            <span className="text-[10px] sm:text-xs text-[#F48B25] tracking-widest uppercase border border-[#F48B25]/40 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full bg-[#F48B25]/10 font-bold backdrop-blur-sm inline-block">
              Deployment Gateway
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold tracking-tight max-w-2xl mx-auto leading-tight">
              Ready to Unify Your Revenue Collection?
            </h2>
            <p className="text-slate-300 max-w-2xl text-xs sm:text-sm md:text-base leading-relaxed mx-auto">
              Join governments and institutions already using ERS to eliminate leakages, digitise collections, and boost IGR. Schedule a live demo or request our technical specification pack.
            </p>
            <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/contact" className="bg-[#F48B25] hover:bg-[#f59b3a] text-[#1C1F61] font-bold text-xs sm:text-sm px-6 sm:px-8 py-3 sm:py-4 rounded-xl transition-all shadow-md">
                Request Integration Demo
              </Link>
              <Link href="/" className="border border-white/40 hover:border-white text-white text-xs sm:text-sm px-6 sm:px-8 py-3 sm:py-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all">
                Return to Home
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}