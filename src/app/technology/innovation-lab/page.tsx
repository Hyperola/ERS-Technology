// src/app/technology/innovation-lab/page.tsx
import Link from 'next/link';

export default function InnovationLabPage() {
  const researchInitiatives = [
    {
      focus: "Next-Gen Revenue Automation",
      status: "INCUBATING",
      desc: "Developing algorithmic billing systems and adaptive clearing protocols designed to handle high-velocity alternative financial channels and cross-border digital transactions."
    },
    {
      focus: "Decentralized Sovereign Ledgers",
      status: "PROTOTYPING",
      desc: "Testing immutable distributed structures optimized for regional public sector systems to guarantee zero-tamper security environments for state financial management."
    },
    {
      focus: "Applied Pattern Intelligence",
      status: "RESEARCH PHASE",
      desc: "Simulating behavior models to identify complex data leaks, predictive infrastructure stressors, and macro-financial systemic anomalies prior to field deployment."
    }
  ];

  const researchAreas = [
    {
      title: "AI‑Driven Policy Simulation",
      desc: "Model the fiscal impact of tax policy changes, subsidy adjustments, and new revenue streams before implementation."
    },
    {
      title: "Blockchain for Public Finance",
      desc: "Explore immutable audit trails, smart contract‑based revenue sharing, and transparent inter‑government settlements."
    },
    {
      title: "Edge Computing for Collection",
      desc: "Process transactions at the point of collection with near‑zero latency, even in low‑connectivity environments."
    },
    {
      title: "Predictive Infrastructure Stress Testing",
      desc: "Simulate peak transaction loads, network failures, and cyberattacks to harden revenue platforms."
    },
    {
      title: "Digital Identity & Privacy Preservation",
      desc: "Zero‑knowledge proofs and self‑sovereign identity for taxpayer privacy without compromising auditability."
    },
    {
      title: "Interoperable Payment Rails",
      desc: "Research into seamless integration of CBDCs, stablecoins, and instant payment systems into existing revenue stacks."
    }
  ];

  const benefits = [
    "Gain early access to breakthrough technologies",
    "Co‑develop solutions tailored to your specific challenges",
    "Reduce risk through lab‑tested, validated prototypes",
    "Stay ahead of regulatory and technological shifts",
    "Build capacity through knowledge transfer and training"
  ];

  const partnerTypes = [
    "Government Innovation Agencies",
    "Academic & Research Institutions",
    "Technology Startups",
    "Development Finance Institutions",
    "Multilateral Organisations",
    "Private Sector R&D Departments"
  ];

  return (
    <main className="min-h-screen bg-[#F8FAFC] text-[#1C1F61] overflow-x-hidden selection:bg-[#F48B25]/30 selection:text-[#1C1F61] font-['Calibri',Calibri,Segoe_UI,sans-serif]">
      
      {/* HERO BANNER – brand colors, reliable innovation lab image */}
      <section className="relative bg-[#1C1F61] text-white w-full overflow-hidden flex items-center min-h-[60vh] sm:min-h-0">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1507668077129-56e32842fceb?q=80&w=2070"
            alt="Innovation lab and research"
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
                Future Technology Cores
              </div>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-[1.2] text-white">
              Innovation <br />
              <span className="text-[#F48B25]">Lab & Initiatives</span>
            </h1>
            <p className="text-slate-200 text-sm sm:text-base md:text-lg max-w-3xl leading-relaxed">
              Research and future technology development frameworks designed for systemic transformation – co‑creating the next generation of digital revenue infrastructure.
            </p>
            <div className="pt-2 flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Link href="/contact" className="group relative bg-[#F48B25] hover:bg-[#f59b3a] text-[#1C1F61] font-bold text-xs sm:text-sm md:text-base px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl shadow-lg shadow-[#F48B25]/25 transition-all duration-300 text-center hover:-translate-y-0.5 active:translate-y-0 overflow-hidden w-full sm:w-auto">
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Partner on R&D
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

      {/* MAIN CONTEXT + RESEARCH INITIATIVES – interlocking rows (brand colors applied) */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-12 sm:py-16 relative z-20 -mt-6 sm:-mt-8">
        <div className="space-y-8">
          {/* Split Banner Block */}
          <div className="bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 grid grid-cols-1 lg:grid-cols-12 items-stretch">
            <div className="p-6 sm:p-8 md:p-10 lg:col-span-7 space-y-4">
              <span className="text-xs font-mono font-bold text-[#CF1B1B] tracking-widest uppercase block">
                Exploratory Ecosystems
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#1C1F61] tracking-tight">
                Engineering Tomorrow's Infrastructure
              </h2>
              <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                The Innovation Lab operates as our internal sandbox, vetting emerging technical paradigms against strict governance constraints. We identify, develop, and battle‑test advanced architectural concepts long before they impact live transactional dependencies.
              </p>
            </div>
            <div className="p-6 sm:p-8 md:p-10 lg:col-span-5 bg-[#F8FAFC] border-t lg:border-t-0 lg:border-l border-slate-200/60 flex flex-col justify-center space-y-4">
              <p className="text-slate-500 text-xs md:text-sm">
                Interested in discovering how our technical research pipelines align with your state framework modernisation initiatives?
              </p>
              <Link href="/contact" className="inline-block bg-[#CF1B1B] hover:bg-[#b31515] text-white font-mono font-bold text-xs uppercase px-6 py-3 rounded-xl shadow-md transition-all text-center">
                Partner on R&D →
              </Link>
            </div>
          </div>

          {/* Research Initiatives Rows */}
          <div className="bg-white border border-slate-200 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 divide-y divide-slate-100">
            {researchInitiatives.map((item, idx) => (
              <div key={idx} className="p-6 md:p-8 hover:bg-slate-50/60 transition-colors flex flex-col md:flex-row md:items-center gap-5 md:gap-6 justify-between">
                <div className="md:w-1/3 space-y-2">
                  <span className="text-[9px] font-mono font-bold px-2 py-0.5 rounded tracking-wider border border-slate-200 bg-white text-slate-500 inline-block">
                    {item.status}
                  </span>
                  <h3 className="font-bold text-[#1C1F61] text-lg tracking-tight group-hover:text-[#CF1B1B] transition-colors">
                    {item.focus}
                  </h3>
                </div>
                <div className="md:w-2/3 md:border-l border-slate-100 md:pl-8">
                  <p className="text-slate-500 text-xs md:text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RESEARCH AREAS GRID – 6 key innovation tracks */}
      <section className="bg-white py-16 sm:py-20 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-2">
            <span className="text-[10px] sm:text-xs font-bold text-[#CF1B1B] uppercase tracking-wider">Active Research Streams</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-[#1C1F61]">Shaping the Future of Revenue Technology</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {researchAreas.map((area, idx) => (
              <div key={idx} className="flex items-start gap-3 p-4 bg-[#F8FAFC] rounded-xl border border-slate-200/60 hover:border-[#F48B25]/30 transition-all">
                <svg className="w-4 h-4 text-[#F48B25] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <div>
                  <h4 className="text-sm sm:text-base font-bold text-[#1C1F61] mb-1">{area.title}</h4>
                  <p className="text-slate-600 text-[11px] sm:text-xs leading-relaxed">{area.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* KEY BENEFITS OF PARTNERING */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-4 border-l-4 border-[#F48B25] pl-5">
              <span className="text-[10px] sm:text-xs font-bold text-[#CF1B1B] uppercase tracking-wider">Why Collaborate with ERS Lab?</span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-[#1C1F61]">Tangible Benefits for Partners</h2>
              <p className="text-slate-600 text-sm leading-relaxed">
                Join a collaborative ecosystem where governments, academia, and industry co‑create the next generation of revenue infrastructure. Benefit from shared risk, pooled expertise, and accelerated innovation.
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

      {/* WHO WE COLLABORATE WITH */}
      <section className="bg-white py-16 sm:py-20 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-2">
            <span className="text-[10px] sm:text-xs font-bold text-[#CF1B1B] uppercase tracking-wider">Partnership Ecosystem</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-[#1C1F61]">Who We Co‑Create With</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {partnerTypes.map((partner, idx) => (
              <div key={idx} className="p-4 bg-[#F8FAFC] rounded-xl border border-slate-200/70 hover:border-[#1C1F61] transition-all text-center">
                <span className="text-slate-700 text-xs sm:text-sm font-semibold">{partner}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TECHNICAL HIGHLIGHTS – lab capabilities */}
      <section className="bg-[#1C1F61] text-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-4">
              <span className="text-xs font-bold text-[#F48B25] uppercase tracking-wider">Sandbox Environment</span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight">Test Without Risk</h2>
              <p className="text-slate-300 text-sm leading-relaxed">
                Our innovation lab provides a fully isolated environment to pilot new technologies, model policy changes, and stress‑test infrastructure – all without affecting live revenue systems. Partners gain secure access to simulation tools and real‑time analytics.
              </p>
              <ul className="space-y-2 pt-2">
                <li className="flex items-start gap-2 text-sm text-slate-300">
                  <svg className="w-4 h-4 text-[#F48B25] mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Dedicated lab environment with synthetic transaction generators
                </li>
                <li className="flex items-start gap-2 text-sm text-slate-300">
                  <svg className="w-4 h-4 text-[#F48B25] mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Joint research publications and white papers (optional)
                </li>
                <li className="flex items-start gap-2 text-sm text-slate-300">
                  <svg className="w-4 h-4 text-[#F48B25] mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Fast‑track from concept to pilot deployment
                </li>
              </ul>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 sm:p-8">
              <div className="space-y-4">
                <div className="flex items-center gap-3 border-b border-white/10 pb-4">
                  <div className="w-10 h-10 rounded-lg bg-[#F48B25]/20 flex items-center justify-center">
                    <svg className="w-5 h-5 text-[#F48B25]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold">Intellectual Property (IP) Ownership</h4>
                    <p className="text-xs text-slate-400">Clear, transparent IP agreements – you own your contributions</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#F48B25]/20 flex items-center justify-center">
                    <svg className="w-5 h-5 text-[#F48B25]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold">Global Research Network</h4>
                    <p className="text-xs text-slate-400">Access to academic partners and domain experts worldwide</p>
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
              Incubation Network Hub
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold tracking-tight max-w-2xl mx-auto leading-tight">
              Co‑Develop Sovereign Paradigms
            </h2>
            <p className="text-slate-300 max-w-2xl text-xs sm:text-sm md:text-base leading-relaxed mx-auto">
              Leverage our interdisciplinary framework teams to design tailored digital verification proofs and institutional proof‑of‑concepts. Contact our systems lab to evaluate data deployment pathways.
            </p>
            <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/contact" className="bg-[#F48B25] hover:bg-[#f59b3a] text-[#1C1F61] font-bold text-xs sm:text-sm px-6 sm:px-8 py-3 sm:py-4 rounded-xl transition-all shadow-md">
                Initiate Collaborative Lab Tracks
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