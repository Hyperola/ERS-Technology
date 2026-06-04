// src/app/technology/iot-smart-devices/page.tsx
import Link from "next/link";

export default function IotSmartDevicesPage() {
  const features = [
    {
      title: "Smart Revenue Collection Terminals",
      desc: "Hardened POS devices and automated collection kiosks designed for high‑traffic markets, parks, and government offices.",
    },
    {
      title: "Fleet & Asset Tracking Modules",
      desc: "IoT‑enabled GPS trackers and telematics devices for real‑time monitoring of government fleets, transport unions, and logistics assets.",
    },
    {
      title: "Automated Enforcement Sensors",
      desc: "License plate recognition, weigh‑in‑motion sensors, and smart cameras for automated compliance and revenue enforcement.",
    },
    {
      title: "Digital Operator Identity Devices",
      desc: "Biometric scanners and smart card readers for driver/operator authentication and digital revenue profiling.",
    },
    {
      title: "Environmental & Infrastructure Monitors",
      desc: "IoT sensors for monitoring public infrastructure usage (parking, tolls, waste management) to enable usage‑based revenue models.",
    },
    {
      title: "Central Device Management Platform",
      desc: "Cloud‑based dashboard for remote configuration, firmware updates, health monitoring, and real‑time data ingestion from all connected devices.",
    },
  ];

  const useCases = [
    { sector: "Transport Unions", desc: "Real‑time passenger counting, automated fare validation, and fleet utilisation tracking." },
    { sector: "Local Governments", desc: "Digital parking meters, smart waste bin sensors, and market stall occupancy monitoring." },
    { sector: "State Revenue Agencies", desc: "Remote enforcement of vehicle licences, road user charges, and point‑of‑sale tax compliance." },
    { sector: "Educational Institutions", desc: "Access control, attendance tracking, and cashless payment terminals for cafeterias and events." },
  ];

  const benefits = [
    "Reduce revenue leakage with automated transaction capture",
    "Gain real‑time visibility into asset utilisation and compliance",
    "Eliminate manual data entry errors and paper logs",
    "Extend connectivity to remote areas with LPWAN",
    "Lower operational costs through predictive maintenance"
  ];

  const servedSectors = [
    "Transport Unions & Fleet Operators",
    "Local Government Councils",
    "State Revenue Agencies",
    "Market & Trade Associations",
    "Educational Institutions",
    "Logistics & Supply Chain Firms"
  ];

  return (
    <div className="flex flex-col min-h-screen bg-[#F8FAFC] text-[#1C1F61] font-['Calibri',Calibri,Segoe_UI,sans-serif] selection:bg-[#F48B25]/30 selection:text-[#1C1F61]">
      
      {/* HERO SECTION – with brand colors and reliable background image */}
      <section className="relative bg-[#1C1F61] text-white w-full overflow-hidden flex items-center min-h-[60vh] sm:min-h-0">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?q=80&w=2070"
            alt="IoT and smart devices"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1C1F61]/95 via-[#1C1F61]/95 to-[#1C1F61]/95 sm:bg-gradient-to-r sm:from-[#1C1F61]/95 sm:via-[#1C1F61]/85 sm:to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1C1F61]/90 via-transparent to-transparent" />
        </div>

        {/* Abstract pattern */}
        <div className="absolute inset-0 opacity-5 bg-[linear-gradient(to_right,#FFFFFF_1px,transparent_1px),linear-gradient(to_bottom,#FFFFFF_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#F48B25]/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="relative z-20 w-full max-w-7xl mx-auto px-6 md:px-12 py-12 sm:py-16 md:py-20 lg:py-24">
          <div className="max-w-3xl space-y-4 sm:space-y-5">
            <div className="inline-flex">
              <div className="inline-flex items-center gap-1.5 border border-[#F48B25]/40 bg-[#F48B25]/10 backdrop-blur-sm px-2.5 py-1 sm:px-3 rounded-full text-[9px] sm:text-[10px] font-bold tracking-wider text-[#F48B25] uppercase">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#F48B25] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#F48B25]"></span>
                </span>
                6. TECHNOLOGY MODULE
              </div>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-[1.2] text-white">
              IoT & <br />
              <span className="text-[#F48B25]">Smart Devices</span>
            </h1>
            <p className="text-slate-200 text-sm sm:text-base md:text-lg max-w-3xl leading-relaxed">
              Connected smart hardware and digital operational tools that bridge the gap between physical transactions and digital revenue systems.
            </p>
            <div className="pt-2 flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Link
                href="/contact"
                className="group relative bg-[#F48B25] hover:bg-[#f59b3a] text-[#1C1F61] font-bold text-xs sm:text-sm md:text-base px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl shadow-lg shadow-[#F48B25]/25 transition-all duration-300 text-center hover:-translate-y-0.5 active:translate-y-0 overflow-hidden w-full sm:w-auto"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Request Hardware Demo
                  <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/30 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              </Link>
              <Link
                href="/"
                className="border border-white/40 hover:border-white text-white font-semibold text-xs sm:text-sm md:text-base tracking-wide px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl backdrop-blur-sm bg-white/5 hover:bg-white/10 transition-all duration-300 text-center hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2 w-full sm:w-auto"
              >
                ← Back to Home
                <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* OVERVIEW SECTION */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-start">
            <div className="lg:col-span-1 space-y-3 border-l-4 border-[#F48B25] pl-5">
              <span className="text-xs font-bold text-[#CF1B1B] uppercase tracking-wider">Physical‑Digital Bridge</span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[#1C1F61]">
                Smart Hardware for Smarter Revenue
              </h2>
            </div>
            <div className="lg:col-span-2 space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed">
              <p>
                ERS designs and deploys rugged, tamper‑resistant IoT devices specifically built for Africa's high‑volume, sometimes harsh, operational environments. Our smart terminals, sensors, and tracking modules capture transaction data at the point of collection – eliminating manual entry errors and revenue leakages.
              </p>
              <p>
                All devices are centrally managed through our cloud‑based Device Management Platform, providing real‑time health monitoring, over‑the‑air updates, and instant data synchronisation with your revenue dashboards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES GRID – 6 key devices */}
      <section className="bg-white py-16 sm:py-20 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
            <span className="text-[10px] sm:text-xs font-bold text-[#CF1B1B] uppercase tracking-wider">Hardware Ecosystem</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[#1C1F61]">Key Devices & Capabilities</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="group p-5 sm:p-6 bg-[#F8FAFC] rounded-2xl border border-slate-200/60 hover:border-[#F48B25]/50 transition-all duration-300 hover:shadow-md"
              >
                <div className="h-8 w-8 sm:h-10 sm:w-10 rounded-xl bg-gradient-to-br from-[#1C1F61] to-[#2a2e7a] text-white flex items-center justify-center font-bold text-xs sm:text-sm mb-4 group-hover:from-[#F48B25] group-hover:to-[#f59b3a] transition-all duration-300">
                  {idx + 1}
                </div>
                <h3 className="text-base sm:text-lg font-bold text-[#1C1F61] mb-2 group-hover:text-[#CF1B1B] transition-colors">
                  {feature.title}
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* USE CASES (original 4) */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 lg:gap-12 mb-12">
            <div className="max-w-xl space-y-3 border-l-4 border-[#CF1B1B] pl-5">
              <span className="text-xs font-bold text-[#CF1B1B] uppercase tracking-wider">Institutional Deployment</span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[#1C1F61]">Who Uses ERS Smart Devices</h2>
            </div>
            <p className="text-slate-600 text-sm max-w-md leading-relaxed">
              Our hardware integrates seamlessly with ERS revenue platforms, enabling real‑time visibility and automated reconciliation.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {useCases.map((item, idx) => (
              <div key={idx} className="p-5 bg-white rounded-xl border border-slate-200/70 hover:border-[#1C1F61] transition-all hover:shadow-md">
                <h4 className="font-bold text-[#1C1F61] text-base mb-2">{item.sector}</h4>
                <p className="text-slate-500 text-xs leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* KEY BENEFITS – new section */}
      <section className="bg-white py-16 sm:py-20 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-4 border-l-4 border-[#F48B25] pl-5">
              <span className="text-[10px] sm:text-xs font-bold text-[#CF1B1B] uppercase tracking-wider">Why IoT?</span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-[#1C1F61]">Tangible Benefits for Your Institution</h2>
              <p className="text-slate-600 text-sm leading-relaxed">
                Move from manual, paper‑based collection to automated, real‑time IoT devices. Reduce leakages, gain instant visibility, and lower operational costs.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {benefits.map((benefit, idx) => (
                <div key={idx} className="flex items-center gap-2 p-3 bg-[#F8FAFC] rounded-xl border border-slate-200/60 hover:border-[#F48B25]/30 transition-all shadow-sm">
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

      {/* WHO WE SERVE – new grid */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-2">
            <span className="text-[10px] sm:text-xs font-bold text-[#CF1B1B] uppercase tracking-wider">Deployment Footprint</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-[#1C1F61]">Trusted by Hardware‑Driven Institutions</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {servedSectors.map((sector, idx) => (
              <div key={idx} className="p-4 bg-white rounded-xl border border-slate-200/70 hover:border-[#1C1F61] transition-all text-center">
                <span className="text-slate-700 text-xs sm:text-sm font-semibold">{sector}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TECHNICAL HIGHLIGHTS – field readiness & security */}
      <section className="bg-[#1C1F61] text-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-4">
              <span className="text-xs font-bold text-[#F48B25] uppercase tracking-wider">Field‑Ready Engineering</span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight">Built for Africa's Harsh Environments</h2>
              <p className="text-slate-300 text-sm leading-relaxed">
                Our devices are IP67 rated, shock‑resistant, and operate in extreme temperatures. With redundant power options and low‑power wide‑area network (LPWAN) connectivity, they continue working even in remote locations with intermittent power or network.
              </p>
              <ul className="space-y-2 pt-2">
                <li className="flex items-start gap-2 text-sm text-slate-300">
                  <svg className="w-4 h-4 text-[#F48B25] mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Tamper alerts and geofencing for asset protection
                </li>
                <li className="flex items-start gap-2 text-sm text-slate-300">
                  <svg className="w-4 h-4 text-[#F48B25] mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Hot‑swappable batteries for 24/7 operation
                </li>
                <li className="flex items-start gap-2 text-sm text-slate-300">
                  <svg className="w-4 h-4 text-[#F48B25] mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Modular design – add sensors as your needs grow
                </li>
              </ul>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 sm:p-8">
              <div className="space-y-4">
                <div className="flex items-center gap-3 border-b border-white/10 pb-4">
                  <div className="w-10 h-10 rounded-lg bg-[#F48B25]/20 flex items-center justify-center">
                    <svg className="w-5 h-5 text-[#F48B25]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9h14M5 15h14M3 5h18a1 1 0 011 1v12a1 1 0 01-1 1H3a1 1 0 01-1-1V6a1 1 0 011-1z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold">Central Device Management</h4>
                    <p className="text-xs text-slate-400">Remote provisioning, updates, and monitoring</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#F48B25]/20 flex items-center justify-center">
                    <svg className="w-5 h-5 text-[#F48B25]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold">End‑to‑End Encryption</h4>
                    <p className="text-xs text-slate-400">Data secured at rest and in transit</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA – consistent with homepage, secondary links to homepage */}
      <section className="py-16 sm:py-20 bg-[#F8FAFC] border-t border-slate-200/60">
        <div className="max-w-5xl mx-auto px-6 md:px-12">
          <div className="bg-gradient-to-br from-[#1C1F61] to-[#2a2e7a] text-white rounded-2xl sm:rounded-[2rem] p-6 sm:p-8 md:p-12 text-center space-y-5">
            <span className="text-[10px] sm:text-xs text-[#F48B25] tracking-widest uppercase border border-[#F48B25]/40 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full bg-[#F48B25]/10 font-bold backdrop-blur-sm inline-block">
              Deployment Gateway
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold tracking-tight max-w-2xl mx-auto leading-tight">
              Ready to Deploy Smart Revenue Devices?
            </h2>
            <p className="text-slate-300 max-w-2xl text-xs sm:text-sm md:text-base leading-relaxed mx-auto">
              Schedule a live demonstration of our IoT hardware portfolio and see how real‑time data transforms collection efficiency.
            </p>
            <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/contact" className="bg-[#F48B25] hover:bg-[#f59b3a] text-[#1C1F61] font-bold text-xs sm:text-sm px-6 sm:px-8 py-3 sm:py-4 rounded-xl transition-all shadow-md">
                Request a Pilot
              </Link>
              <Link href="/" className="border border-white/40 hover:border-white text-white text-xs sm:text-sm px-6 sm:px-8 py-3 sm:py-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all">
                Return to Home
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}