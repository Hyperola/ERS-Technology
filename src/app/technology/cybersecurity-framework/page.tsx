// src/app/technology/cybersecurity-framework/page.tsx
import Link from 'next/link';

export default function CybersecurityFrameworkPage() {
  const securityDefenses = [
    {
      domain: "Data & Ledger Transit",
      protocols: ["AES-256 GCM Encryption", "TLS 1.3 Strict Tunneling", "Hardware Security Modules (HSM)"],
      desc: "Secures all financial transaction data at rest and in transit, establishing permanent cryptographic seals across municipal ledger pipelines."
    },
    {
      domain: "Access & Identity",
      protocols: ["Zero-Trust Network Access", "Biometric Terminal Sign-On", "Role-Based Auditing Logs"],
      desc: "Enforces continuous verification across all field collection terminals, completely locking out unauthorized devices and spoofed hardware profiles."
    },
    {
      domain: "Threat Mitigation",
      protocols: ["Real-Time Intrusion Drops", "Automated Anomaly Coring", "DDoS Shield Filtering"],
      desc: "Actively monitors systemic traffic signals to immediately isolate, track, and mitigate multi-vector vectors without interrupting civic remittance flows."
    }
  ];

  const features = [
    {
      title: "Zero‑Trust Architecture",
      desc: "Never trust, always verify – every access request is authenticated, authorised, and encrypted, regardless of origin (inside or outside the network)."
    },
    {
      title: "Hardware Security Modules (HSM)",
      desc: "FIPS 140‑2 Level 3 certified devices for cryptographic key management, digital signatures, and secure data processing."
    },
    {
      title: "Real‑Time Threat Intelligence",
      desc: "AI‑powered monitoring that correlates global threat feeds with your network activity to block attacks before they reach your systems."
    },
    {
      title: "Automated Incident Response",
      desc: "Playbook‑driven isolation of compromised endpoints, auto‑generated forensic logs, and instant alerting to your security team."
    },
    {
      title: "Data Loss Prevention (DLP)",
      desc: "Prevent unauthorised exfiltration of sensitive revenue data via endpoint controls, network monitoring, and cloud access policies."
    },
    {
      title: "Compliance Automation",
      desc: "Continuous control monitoring and evidence collection for NDPR, GDPR, ISO 27001, and other regulatory frameworks – audit‑ready reports on demand."
    }
  ];

  const benefits = [
    "Prevent revenue data breaches and ransomware attacks",
    "Achieve compliance with NDPR / GDPR / ISO 27001",
    "Reduce incident response time from days to minutes",
    "Protect citizen and taxpayer data with bank‑grade encryption",
    "Maintain operational continuity during cyber incidents"
  ];

  const servedSectors = [
    "State Revenue Authorities",
    "Local Government Councils",
    "Financial Institutions",
    "Healthcare Administrations",
    "Educational Institutions",
    "Transport & Logistics Agencies"
  ];

  return (
    <main className="min-h-screen bg-[#F8FAFC] text-[#1C1F61] overflow-x-hidden selection:bg-[#F48B25]/30 selection:text-[#1C1F61] font-['Calibri',Calibri,Segoe_UI,sans-serif]">
      
      {/* HERO BANNER – brand colors, reliable cybersecurity image */}
      <section className="relative bg-[#1C1F61] text-white w-full overflow-hidden flex items-center min-h-[60vh] sm:min-h-0">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=2070"
            alt="Cybersecurity and network protection"
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
                Mitigation and Assurance Protocol
              </div>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-[1.2] text-white">
              Cybersecurity <br />
              <span className="text-[#F48B25]">Framework Architecture</span>
            </h1>
            <p className="text-slate-200 text-sm sm:text-base md:text-lg max-w-3xl leading-relaxed">
              Security architecture protecting financial and operational systems – with zero‑trust principles, hardware‑grade encryption, and real‑time threat mitigation.
            </p>
            <div className="pt-2 flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Link href="/contact" className="group relative bg-[#F48B25] hover:bg-[#f59b3a] text-[#1C1F61] font-bold text-xs sm:text-sm md:text-base px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl shadow-lg shadow-[#F48B25]/25 transition-all duration-300 text-center hover:-translate-y-0.5 active:translate-y-0 overflow-hidden w-full sm:w-auto">
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Deploy Security Framework
                  <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/30 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              </Link>
              <Link href="/contact" className="border border-white/40 hover:border-white text-white font-semibold text-xs sm:text-sm md:text-base tracking-wide px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl backdrop-blur-sm bg-white/5 hover:bg-white/10 transition-all duration-300 text-center hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2 w-full sm:w-auto">
                Request Security Audit
                <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CORE SECURITY DEFENSES – three‑pillar layout with brand colors */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-12 sm:py-16 relative z-20 -mt-6 sm:-mt-8">
        <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 lg:p-12 shadow-sm hover:shadow-xl transition-all duration-300">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
            {/* Left block */}
            <div className="lg:col-span-4 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-slate-100 pb-6 lg:pb-0 lg:pr-8">
              <div className="space-y-4">
                <span className="text-[10px] font-mono font-bold text-[#F48B25] uppercase tracking-widest block">
                  Hardened Infrastructure Layer
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-[#1C1F61] tracking-tight">
                  Defending Sovereign Revenue Ecosystems
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  We deploy deep tactical layers across software, perimeter hardware, and endpoints. This ensures that every public sector ledger entry remains permanent, visible, and completely insulated from manipulation.
                </p>
              </div>
              <div className="pt-6 lg:pt-0">
                <Link href="/contact" className="inline-flex items-center gap-2 bg-[#CF1B1B] hover:bg-[#b31515] text-white font-mono font-bold text-xs uppercase px-5 py-2.5 rounded-xl shadow transition-colors">
                  Review Security Audits <span className="text-base">→</span>
                </Link>
              </div>
            </div>

            {/* Right side – three defense domains */}
            <div className="lg:col-span-8 grid grid-cols-1 gap-7">
              {securityDefenses.map((defense, idx) => (
                <div key={idx} className="group border-b border-slate-100 last:border-0 pb-5 last:pb-0">
                  <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-4 mb-2">
                    <div className="w-1 h-4 bg-slate-200 group-hover:bg-[#CF1B1B] transition-colors self-center hidden sm:block" />
                    <h4 className="font-bold text-[#1C1F61] text-base sm:text-lg">
                      {defense.domain}
                    </h4>
                    <div className="flex flex-wrap gap-1.5 sm:ml-auto mt-1 sm:mt-0">
                      {defense.protocols.map((proto, pIdx) => (
                        <span key={pIdx} className="text-[9px] font-mono font-medium text-slate-500 bg-slate-50 border border-slate-200/60 px-2 py-0.5 rounded">
                          {proto}
                        </span>
                      ))}
                    </div>
                  </div>
                  <p className="text-slate-500 text-xs sm:text-sm leading-relaxed pl-0 sm:pl-5">
                    {defense.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES GRID – 6 security capabilities */}
      <section className="bg-white py-16 sm:py-20 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-2">
            <span className="text-[10px] sm:text-xs font-bold text-[#CF1B1B] uppercase tracking-wider">Security Capabilities</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-[#1C1F61]">Enterprise‑Grade Protection</h2>
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
              <span className="text-[10px] sm:text-xs font-bold text-[#CF1B1B] uppercase tracking-wider">Why Cyber Resilience?</span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-[#1C1F61]">Tangible Benefits for Your Institution</h2>
              <p className="text-slate-600 text-sm leading-relaxed">
                Cyberattacks on government revenue systems are rising. Our framework not only prevents breaches but also ensures rapid recovery and continuous compliance – so your revenue operations never stop.
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
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-[#1C1F61]">Trusted by Security‑Conscious Institutions</h2>
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

      {/* TECHNICAL HIGHLIGHTS – zero‑trust & monitoring */}
      <section className="bg-[#1C1F61] text-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-4">
              <span className="text-xs font-bold text-[#F48B25] uppercase tracking-wider">Zero‑Trust in Action</span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight">Assume Breach. Verify Every Request.</h2>
              <p className="text-slate-300 text-sm leading-relaxed">
                No implicit trust – every access attempt is continuously authenticated, authorised, and encrypted, regardless of location. Combined with real‑time threat intelligence and automated response, your revenue infrastructure stays resilient even under active attack.
              </p>
              <ul className="space-y-2 pt-2">
                <li className="flex items-start gap-2 text-sm text-slate-300">
                  <svg className="w-4 h-4 text-[#F48B25] mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Micro‑segmentation to limit lateral movement
                </li>
                <li className="flex items-start gap-2 text-sm text-slate-300">
                  <svg className="w-4 h-4 text-[#F48B25] mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Continuous compliance monitoring and automated evidence collection
                </li>
                <li className="flex items-start gap-2 text-sm text-slate-300">
                  <svg className="w-4 h-4 text-[#F48B25] mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  24/7 SOC monitoring with escalation playbooks
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
                    <h4 className="font-bold">Data Sovereignty First</h4>
                    <p className="text-xs text-slate-400">All encryption keys remain under your control, in your jurisdiction</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#F48B25]/20 flex items-center justify-center">
                    <svg className="w-5 h-5 text-[#F48B25]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold">Audit‑Ready Logs</h4>
                    <p className="text-xs text-slate-400">Immutable records for forensics and compliance reviews</p>
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
              Sovereign Perimeter Shield
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold tracking-tight max-w-2xl mx-auto leading-tight">
              Establish Institutional‑Grade Protection
            </h2>
            <p className="text-slate-300 max-w-2xl text-xs sm:text-sm md:text-base leading-relaxed mx-auto">
              Isolate vulnerabilities, enforce multi‑layer network cryptographic signature policies, and actively secure civic databases. Connect with our technical security group to audit your integration architecture.
            </p>
            <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/contact" className="bg-[#F48B25] hover:bg-[#f59b3a] text-[#1C1F61] font-bold text-xs sm:text-sm px-6 sm:px-8 py-3 sm:py-4 rounded-xl transition-all shadow-md">
                Consult Security Architects
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