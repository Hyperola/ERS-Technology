// src/app/solutions/revenue-monitoring-enforcement/page.tsx
import Link from 'next/link';

export default function RevenueMonitoringEnforcementPage() {
  const complianceSteps = [
    {
      title: "Real-Time Field Leakage Audits",
      desc: "Instantly cross-checks transactions across dispersed local field operations against central collection targets to identify inconsistencies the moment they occur."
    },
    {
      title: "Automated Compliance Gateways",
      desc: "Systematically flags unverified operator profiles and freezes suspicious transactional pipelines until structural validation requirements are met."
    },
    {
      title: "Geospatial Enforcement Tracking",
      desc: "Provides executive dashboards with detailed regional heatmaps tracking active physical collection nodes alongside verified digital compliance logs."
    }
  ];

  const features = [
    {
      title: "Anomaly Detection Engine",
      desc: "AI-powered algorithms identify unusual transaction patterns, duplicate receipts, and potential fraud in real time."
    },
    {
      title: "Automated Operator Verification",
      desc: "Digital identity checks and biometric authentication for field agents, eliminating ghost workers and unauthorised collections."
    },
    {
      title: "Real‑Time Alerting & Escalation",
      desc: "Instant SMS, email, and dashboard notifications when compliance thresholds are breached or suspicious activity is detected."
    },
    {
      title: "Tamper‑Proof Audit Trails",
      desc: "Immutable blockchain‑ready logs of every transaction, operator action, and system change – full forensic transparency."
    },
    {
      title: "Executive Performance Dashboards",
      desc: "At‑a‑glance visualisation of revenue performance, enforcement actions, and leakage trends across regions and agencies."
    },
    {
      title: "Automated Sanctions & Reporting",
      desc: "Configure rules to automatically freeze non‑compliant accounts, generate penalty notices, and submit daily compliance reports."
    }
  ];

  const benefits = [
    "Eliminate revenue leakages in real time",
    "Increase compliance rates by over 60%",
    "Reduce manual auditing costs by 80%",
    "Automated operator performance tracking",
    "Full auditability for government oversight"
  ];

  const servedSectors = [
    "State Revenue Authorities",
    "Local Government Councils",
    "Transport Unions & Parks",
    "Market Management Boards",
    "Regulatory Agencies",
    "Public Procurement Offices"
  ];

  return (
    <main className="min-h-screen bg-[#F8FAFC] text-[#1C1F61] overflow-x-hidden selection:bg-[#F48B25]/30 selection:text-[#1C1F61] font-['Calibri',Calibri,Segoe_UI,sans-serif]">
      
      {/* HERO BANNER – brand colors, reliable background image */}
      <section className="relative bg-[#1C1F61] text-white w-full overflow-hidden flex items-center min-h-[60vh] sm:min-h-0">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2070"
            alt="Revenue monitoring dashboard"
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
                Solutions Architecture Group
              </div>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-[1.2] text-white">
              Revenue Monitoring <br />
              <span className="text-[#F48B25]">& Enforcement Systems</span>
            </h1>
            <p className="text-slate-200 text-sm sm:text-base md:text-lg max-w-3xl leading-relaxed">
              High-fidelity visibility frameworks and automated validation pipelines built to eliminate collections leakage, optimize compliance parameters, and protect public fiscal networks.
            </p>
            <div className="pt-2 flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Link href="/contact" className="group relative bg-[#F48B25] hover:bg-[#f59b3a] text-[#1C1F61] font-bold text-xs sm:text-sm md:text-base px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl shadow-lg shadow-[#F48B25]/25 transition-all duration-300 text-center hover:-translate-y-0.5 active:translate-y-0 overflow-hidden w-full sm:w-auto">
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Request System Audit
                  <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/30 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              </Link>
              <Link href="/contact" className="border border-white/40 hover:border-white text-white font-semibold text-xs sm:text-sm md:text-base tracking-wide px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl backdrop-blur-sm bg-white/5 hover:bg-white/10 transition-all duration-300 text-center hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2 w-full sm:w-auto">
                Learn More
                <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CORE ENFORCEMENT PILLARS – 3 main strategies */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-2">
            <span className="text-[10px] sm:text-xs font-bold text-[#CF1B1B] uppercase tracking-wider">Strategic Pillars</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-[#1C1F61]">How We Enforce Compliance</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {complianceSteps.map((step, idx) => (
              <div key={idx} className="group p-6 sm:p-8 bg-white rounded-2xl border border-slate-200/60 shadow-sm hover:border-[#F48B25]/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="h-8 w-8 sm:h-10 sm:w-10 rounded-xl bg-gradient-to-br from-[#1C1F61] to-[#2a2e7a] text-white flex items-center justify-center font-bold text-xs sm:text-sm mb-5 group-hover:from-[#F48B25] group-hover:to-[#f59b3a] transition-all duration-300">
                  0{idx + 1}
                </div>
                <h3 className="text-base sm:text-lg font-bold text-[#1C1F61] mb-3 group-hover:text-[#CF1B1B] transition-colors">
                  {step.title}
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES GRID – 6 technical capabilities */}
      <section className="bg-white py-16 sm:py-20 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-2">
            <span className="text-[10px] sm:text-xs font-bold text-[#CF1B1B] uppercase tracking-wider">Enforcement Capabilities</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-[#1C1F61]">Built for Zero Leakage</h2>
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

      {/* KEY BENEFITS – impact metrics */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-4 border-l-4 border-[#F48B25] pl-5">
              <span className="text-[10px] sm:text-xs font-bold text-[#CF1B1B] uppercase tracking-wider">Measurable Impact</span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-[#1C1F61]">Why You Need Real‑Time Enforcement</h2>
              <p className="text-slate-600 text-sm leading-relaxed">
                Without automated monitoring, revenue leakages go undetected for weeks or months. Our enforcement layer catches anomalies instantly and triggers corrective actions before losses accumulate.
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
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-[#1C1F61]">Trusted by Fiscal Authorities</h2>
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

      {/* TECHNICAL HIGHLIGHTS – geospatial & real‑time */}
      <section className="bg-[#1C1F61] text-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-4">
              <span className="text-xs font-bold text-[#F48B25] uppercase tracking-wider">Geospatial Intelligence</span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight">See Leakages on a Map</h2>
              <p className="text-slate-300 text-sm leading-relaxed">
                Our enforcement dashboard includes live heatmaps of collection nodes, compliance scores by region, and automated anomaly flags. Instantly identify under‑performing areas, ghost collectors, or suspicious transaction clusters.
              </p>
              <ul className="space-y-2 pt-2">
                <li className="flex items-start gap-2 text-sm text-slate-300">
                  <svg className="w-4 h-4 text-[#F48B25] mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Drill down from national to state to local government views
                </li>
                <li className="flex items-start gap-2 text-sm text-slate-300">
                  <svg className="w-4 h-4 text-[#F48B25] mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Historical trend analysis and predictive risk scoring
                </li>
                <li className="flex items-start gap-2 text-sm text-slate-300">
                  <svg className="w-4 h-4 text-[#F48B25] mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Automated compliance reports ready for audit committees
                </li>
              </ul>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 sm:p-8">
              <div className="space-y-4">
                <div className="flex items-center gap-3 border-b border-white/10 pb-4">
                  <div className="w-10 h-10 rounded-lg bg-[#F48B25]/20 flex items-center justify-center">
                    <svg className="w-5 h-5 text-[#F48B25]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold">End‑to‑End Audit Trail</h4>
                    <p className="text-xs text-slate-400">Every action logged, immutable, and searchable</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#F48B25]/20 flex items-center justify-center">
                    <svg className="w-5 h-5 text-[#F48B25]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold">Operator Blacklisting</h4>
                    <p className="text-xs text-slate-400">Automatically suspend non‑compliant agents</p>
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
              Compliance Enforcement Layer
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold tracking-tight max-w-2xl mx-auto leading-tight">
              Ready to Maximize Revenue Accountability?
            </h2>
            <p className="text-slate-300 max-w-2xl text-xs sm:text-sm md:text-base leading-relaxed mx-auto">
              Bring institutional clarity, structured operator field verification, and automated anomaly flagging directly to your operations. Partner with our engineering group to consult on your system requirements.
            </p>
            <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/contact" className="bg-[#F48B25] hover:bg-[#f59b3a] text-[#1C1F61] font-bold text-xs sm:text-sm px-6 sm:px-8 py-3 sm:py-4 rounded-xl transition-all shadow-md">
                Deploy Monitoring Infrastructure
              </Link>
              <Link href="/solutions" className="border border-white/40 hover:border-white text-white text-xs sm:text-sm px-6 sm:px-8 py-3 sm:py-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all">
                Explore All Solutions
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}