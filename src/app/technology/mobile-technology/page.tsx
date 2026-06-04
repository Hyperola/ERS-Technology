// src/app/technology/mobile-technology/page.tsx
import Link from 'next/link';

export default function MobileTechnologyPage() {
  const systemCapabilities = [
    {
      title: "Offline-First Synchronization",
      tag: "FIELD PERIMETER PROTOCOL",
      desc: "Enables operators to process field transactions securely in areas without cellular connectivity. Data cryptographically buffers locally and syncs automatically when a network anchor is established."
    },
    {
      title: "Biometric Terminal Enforcement",
      tag: "HARDWARE ACCESS ASSURANCE",
      desc: "Secures point-of-collection terminals through multi-factor cryptographic handshakes and hardware-bound biometric authentication to prevent identity spoofing or credential theft."
    },
    {
      title: "Thermal Print Optimization",
      tag: "PERIPHERAL INTERFACE LAYER",
      desc: "Bridges legacy field hardware with advanced mobile applications, issuing physical, tamper-evident receipts with encrypted verification codes directly to the customer."
    }
  ];

  const features = [
    {
      title: "Offline‑First Architecture",
      desc: "Full transaction processing without internet – data syncs automatically when connectivity returns."
    },
    {
      title: "Biometric & PIN Authentication",
      desc: "Multi‑factor login using fingerprint, face ID, or hardware token – prevents unauthorised terminal use."
    },
    {
      title: "Real‑Time GPS & Geofencing",
      desc: "Track field agent locations, enforce collection zones, and receive geolocation‑stamped transaction logs."
    },
    {
      title: "Thermal Receipt Printer Integration",
      desc: "Directly print tamper‑evident receipts with QR codes and encrypted validation numbers – even offline."
    },
    {
      title: "Automatic Software Updates",
      desc: "Over‑the‑air (OTA) updates for apps, firmware, and security patches – no physical recall needed."
    },
    {
      title: "Centralised Device Management",
      desc: "Remote monitoring of battery health, storage, app crashes, and unauthorised app installations."
    }
  ];

  const benefits = [
    "Collect revenue anywhere – even without internet",
    "Eliminate identity fraud with biometric verification",
    "Real‑time visibility into field agent activity",
    "Reduce hardware downtime with remote management",
    "Issue verifiable, tamper‑proof receipts instantly"
  ];

  const servedSectors = [
    "Transport Unions & Parks",
    "Market & Trade Associations",
    "Local Government Field Agents",
    "Revenue Collection Agencies",
    "Utilities & Meter Readers",
    "Informal Sector Networks"
  ];

  return (
    <main className="min-h-screen bg-[#F8FAFC] text-[#1C1F61] overflow-x-hidden selection:bg-[#F48B25]/30 selection:text-[#1C1F61] font-['Calibri',Calibri,Segoe_UI,sans-serif]">
      
      {/* HERO BANNER – brand colors, reliable mobile/field image */}
      <section className="relative bg-[#1C1F61] text-white w-full overflow-hidden flex items-center min-h-[60vh] sm:min-h-0">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2070"
            alt="Mobile technology and field operations"
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
                Field Operation Suite
              </div>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-[1.2] text-white">
              Mobile <br />
              <span className="text-[#F48B25]">Technology Deployment</span>
            </h1>
            <p className="text-slate-200 text-sm sm:text-base md:text-lg max-w-3xl leading-relaxed">
              Mobile‑first solutions for field operators and edge validation architectures – collect revenue anywhere, even offline.
            </p>
            <div className="pt-2 flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Link href="/contact" className="group relative bg-[#F48B25] hover:bg-[#f59b3a] text-[#1C1F61] font-bold text-xs sm:text-sm md:text-base px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl shadow-lg shadow-[#F48B25]/25 transition-all duration-300 text-center hover:-translate-y-0.5 active:translate-y-0 overflow-hidden w-full sm:w-auto">
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Deploy Mobile Suite
                  <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/30 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              </Link>
              <Link href="/contact" className="border border-white/40 hover:border-white text-white font-semibold text-xs sm:text-sm md:text-base tracking-wide px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl backdrop-blur-sm bg-white/5 hover:bg-white/10 transition-all duration-300 text-center hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2 w-full sm:w-auto">
                Request Field Demo
                <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* MAIN CONTEXT CARD + STAGGERED CAPABILITIES – brand colors applied */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-12 sm:py-16 relative z-20 -mt-6 sm:-mt-8">
        <div className="space-y-10">
          {/* Main Context Card */}
          <div className="bg-white border border-slate-200 p-6 sm:p-8 md:p-10 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <span className="text-xs font-mono font-bold text-[#CF1B1B] tracking-widest uppercase block">
                Edge Validation Framework
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#1C1F61] tracking-tight">
                Empowering Decentralised Networks
              </h2>
              <p className="text-slate-600 text-sm md:text-base leading-relaxed max-w-4xl">
                Our application matrix transfers computing power into the field, deploying highly robust, cryptographic tracking platforms straight to secure hand‑held hardware. We remove terminal operational latency completely.
              </p>
            </div>
            <div className="lg:col-span-4 lg:text-right w-full">
              <Link href="/contact" className="inline-block bg-[#CF1B1B] hover:bg-[#b31515] text-white font-mono font-bold text-xs uppercase px-6 py-3 rounded-xl shadow-md transition-all active:scale-95 duration-150 w-full lg:w-auto text-center">
                Request Field App Demo →
              </Link>
            </div>
          </div>

          {/* Staggered Capability Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {systemCapabilities.map((capability, idx) => (
              <div key={idx} className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-xl hover:border-[#F48B25]/40 transition-all duration-300 flex flex-col justify-between">
                <div className="space-y-3">
                  <span className="text-[9px] font-mono font-bold text-[#F48B25] tracking-wider block bg-slate-50 border border-slate-200/60 w-fit px-2 py-0.5 rounded">
                    {capability.tag}
                  </span>
                  <h3 className="font-bold text-[#1C1F61] text-lg tracking-tight group-hover:text-[#CF1B1B] transition-colors">
                    {capability.title}
                  </h3>
                  <p className="text-slate-500 text-xs leading-relaxed">
                    {capability.desc}
                  </p>
                </div>
                <div className="pt-5 mt-4 border-t border-slate-50 flex items-center gap-2 text-slate-300">
                  <div className="h-1.5 w-1.5 rounded-full bg-[#1C1F61]" />
                  <div className="h-[1px] flex-grow bg-slate-100" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES GRID – 6 mobile capabilities */}
      <section className="bg-white py-16 sm:py-20 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-2">
            <span className="text-[10px] sm:text-xs font-bold text-[#CF1B1B] uppercase tracking-wider">Mobile Capabilities</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-[#1C1F61]">Field‑Ready Technology Stack</h2>
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
              <span className="text-[10px] sm:text-xs font-bold text-[#CF1B1B] uppercase tracking-wider">Why Go Mobile?</span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-[#1C1F61]">Tangible Benefits for Field Operations</h2>
              <p className="text-slate-600 text-sm leading-relaxed">
                Stop relying on paper logs and manual cash handling. Our mobile suite transforms any smart device into a secure, offline‑capable revenue collection terminal – with full audit trails and biometric security.
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

      {/* WHO WE SERVE – institutional sectors */}
      <section className="bg-white py-16 sm:py-20 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-2">
            <span className="text-[10px] sm:text-xs font-bold text-[#CF1B1B] uppercase tracking-wider">Deployment Footprint</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-[#1C1F61]">Trusted by Field‑Focused Organisations</h2>
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

      {/* TECHNICAL HIGHLIGHTS – offline & security */}
      <section className="bg-[#1C1F61] text-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-4">
              <span className="text-xs font-bold text-[#F48B25] uppercase tracking-wider">Offline‑First by Design</span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight">Works Anywhere, Even Without Internet</h2>
              <p className="text-slate-300 text-sm leading-relaxed">
                Network dead zones are no longer a barrier to revenue collection. Our mobile apps cache transactions locally with full cryptographic integrity, then sync automatically when connectivity returns – zero data loss.
              </p>
              <ul className="space-y-2 pt-2">
                <li className="flex items-start gap-2 text-sm text-slate-300">
                  <svg className="w-4 h-4 text-[#F48B25] mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Encrypted local storage – data safe even if device is lost
                </li>
                <li className="flex items-start gap-2 text-sm text-slate-300">
                  <svg className="w-4 h-4 text-[#F48B25] mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Automatic conflict resolution on sync
                </li>
                <li className="flex items-start gap-2 text-sm text-slate-300">
                  <svg className="w-4 h-4 text-[#F48B25] mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Low bandwidth mode – minimal data usage
                </li>
              </ul>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 sm:p-8">
              <div className="space-y-4">
                <div className="flex items-center gap-3 border-b border-white/10 pb-4">
                  <div className="w-10 h-10 rounded-lg bg-[#F48B25]/20 flex items-center justify-center">
                    <svg className="w-5 h-5 text-[#F48B25]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold">Multi‑Platform Support</h4>
                    <p className="text-xs text-slate-400">Android, iOS, and rugged handheld devices</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#F48B25]/20 flex items-center justify-center">
                    <svg className="w-5 h-5 text-[#F48B25]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold">Remote Wipe Capability</h4>
                    <p className="text-xs text-slate-400">Instantly revoke access and erase data on lost devices</p>
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
              Distributed Terminal Matrix
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold tracking-tight max-w-2xl mx-auto leading-tight">
              Provision Your Mobile Edge Network
            </h2>
            <p className="text-slate-300 max-w-2xl text-xs sm:text-sm md:text-base leading-relaxed mx-auto">
              Acquire fully managed, high‑security terminal images optimised for field collection enforcement. Connect directly with our deployment engineers to coordinate regional system distribution schedules.
            </p>
            <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/contact" className="bg-[#F48B25] hover:bg-[#f59b3a] text-[#1C1F61] font-bold text-xs sm:text-sm px-6 sm:px-8 py-3 sm:py-4 rounded-xl transition-all shadow-md">
                Consult Mobile Systems Engineers
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