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
    <div className="flex flex-col min-h-screen overflow-x-hidden bg-[#F8FAFC] text-[#0A2540] selection:bg-[#E5981A]/30 selection:text-[#0A2540] font-['Calibri',Calibri,Segoe_UI,sans-serif]">
      
      {/* 1. HERO BANNER */}
      <section className="relative bg-[#0A2540] text-white w-full overflow-hidden flex items-center px-5 sm:px-6 md:px-12 lg:px-24 pt-8 sm:pt-12 md:pt-16 pb-16 sm:pb-20 md:pb-24 min-h-[70vh] sm:min-h-0">
        <div 
          className="absolute inset-0 bg-cover bg-center mix-blend-luminosity opacity-10 scale-105 pointer-events-none"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2000')` }}
        />
        <div className="absolute inset-0 opacity-5 bg-[linear-gradient(to_right,#FFFFFF_1px,transparent_1px),linear-gradient(to_bottom,#FFFFFF_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#E5981A]/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="relative z-10 w-full max-w-6xl mx-auto">
          <div className="inline-flex mb-4 sm:mb-5 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="inline-flex items-center gap-1.5 border border-[#E5981A]/30 bg-white/5 backdrop-blur-sm px-2.5 py-1 sm:px-3 rounded-full text-[9px] sm:text-[10px] font-bold tracking-widest text-[#E5981A] uppercase">
              Corporate Identity
            </div>
          </div>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-[1.2] text-white mb-3 sm:mb-4 animate-in fade-in slide-in-from-bottom-6 duration-700 delay-100">
            Transforming Africa's <br />
            <span className="text-[#E5981A]">Digital Revenue Landscape</span>
          </h1>
          
          <p className="text-slate-200 text-sm sm:text-base md:text-lg max-w-4xl leading-relaxed mb-3 sm:mb-4 animate-in fade-in slide-in-from-bottom-6 duration-700 delay-200">
            Ethical Recovery System Technologies Ltd (ERS) is a technology-driven infrastructure company focused on building scalable digital revenue ecosystems across Africa.
          </p>

          <div className="max-w-3xl border-l-3 border-[#E5981A]/40 pl-3 sm:pl-4 py-0.5 sm:py-1 animate-in fade-in slide-in-from-bottom-6 duration-700 delay-300">
            <p className="text-slate-300 text-xs sm:text-sm md:text-base leading-relaxed">
              ERS exists to modernize revenue administration, improve accountability, strengthen transparency, and empower institutions through intelligent automation and financial technology systems.
            </p>
          </div>
        </div>
      </section>

      {/* 2. VISION & MISSION SPLIT */}
      <section className="bg-[#F8FAFC] py-12 sm:py-16 px-5 sm:px-6 md:px-12 lg:px-24 border-b border-slate-200 relative z-20 -mt-5 sm:-mt-8 rounded-t-2xl sm:rounded-t-[2rem] shadow-lg">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
            
            <div className="group p-6 sm:p-8 bg-white rounded-2xl border border-slate-200/80 hover:border-[#0A2540] transition-all duration-300 flex flex-col justify-between shadow-xs hover:shadow-md relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#E5981A]/5 rounded-bl-full group-hover:bg-[#E5981A]/10 transition-colors pointer-events-none" />
              <div className="space-y-3">
                <div className="border-l-4 border-[#E5981A] pl-3">
                  <h2 className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-[#A62626]">The Horizon Blueprint</h2>
                  <p className="text-lg sm:text-xl font-bold tracking-tight text-[#0A2540]">Our Vision</p>
                </div>
                <p className="text-[#0A2540] font-bold text-base sm:text-lg md:text-xl leading-snug tracking-tight pt-2">
                  “To become Africa’s leading Digital Revenue Infrastructure powering transparent and intelligent economies.”
                </p>
              </div>
            </div>

            <div className="group p-6 sm:p-8 bg-white rounded-2xl border border-slate-200/80 hover:border-[#0A2540] transition-all duration-300 flex flex-col justify-between shadow-xs hover:shadow-md relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#E5981A]/5 rounded-bl-full group-hover:bg-[#E5981A]/10 transition-colors pointer-events-none" />
              <div className="space-y-3">
                <div className="border-l-4 border-[#0A2540] pl-3">
                  <h2 className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-[#A62626]">The Operational Mandate</h2>
                  <p className="text-lg sm:text-xl font-bold tracking-tight text-[#0A2540]">Our Mission</p>
                </div>
                <p className="text-slate-600 text-xs sm:text-sm md:text-base leading-relaxed font-normal pt-2">
                  To provide secure, innovative, and scalable digital systems that optimize revenue generation, monitoring, collection, reconciliation, and remittance across Africa.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. WHO WE ARE - enhanced */}
      <section className="py-12 sm:py-16 px-5 sm:px-6 md:px-12 lg:px-24 max-w-7xl mx-auto w-full bg-[#F8FAFC]">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          <div className="lg:col-span-1 space-y-3 border-l-4 border-[#A62626] pl-4">
            <span className="text-[10px] sm:text-xs font-bold text-[#A62626] uppercase tracking-wider">Corporate Identity</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[#0A2540]">Who We Are</h2>
          </div>
          <div className="lg:col-span-2 space-y-4 text-slate-600 text-xs sm:text-sm md:text-base leading-relaxed font-normal">
            <p>
              Ethical Recovery System Technologies Ltd is established as a core digital transformation firm operating at the intersection of public-sector financial efficiency and private-sector transaction compliance. We architect custom software and deploy targeted hardware infrastructures built natively to monitor system transaction channels.
            </p>
            <p>
              By resolving fragmentation between manual accounting logs and physical collection portals, we establish uncompromised financial structures. Our teams specialize in systemic deployment, field engineering, and real-time analytical visibility across state lines and institutional boundaries.
            </p>
            <p className="pt-2">
              ERS Digital Revenue Infrastructure is not merely a revenue collection platform. It is a complete revenue ecosystem that enables governments, institutions, and organizations to identify, assess, collect, monitor, reconcile, secure, and optimize revenues through a centralized digital framework.
            </p>
          </div>
        </div>
      </section>

      {/* 4. CORE VALUES */}
      <section className="bg-white py-12 sm:py-16 px-5 sm:px-6 md:px-12 lg:px-24 border-y border-slate-200">
        <div className="max-w-7xl mx-auto space-y-10 sm:space-y-12">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <span className="text-[10px] sm:text-xs font-bold text-[#A62626] uppercase tracking-wider">Structural Framework</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[#0A2540]">Our Core Values</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {coreValues.map((value, idx) => (
              <div 
                key={idx} 
                className="p-5 sm:p-6 bg-white rounded-2xl border border-slate-200/60 shadow-xs hover:border-[#E5981A]/50 transition-all duration-300 group"
              >
                <div className="h-8 w-8 sm:h-10 sm:w-10 rounded-xl bg-[#F8FAFC] border border-slate-200 text-[#0A2540] flex items-center justify-center font-bold text-xs sm:text-sm mb-3 sm:mb-4 group-hover:bg-[#0A2540] group-hover:text-white transition-colors">
                  0{idx + 1}
                </div>
                <h3 className="text-base sm:text-lg font-bold text-[#0A2540] mb-2 group-hover:text-[#A62626] transition-colors">
                  {value.title}
                </h3>
                <p className="text-slate-600 text-[11px] sm:text-xs leading-relaxed font-normal">
                  {value.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. WHY WE EXIST & GOVERNANCE - enhanced */}
      <section className="py-12 sm:py-16 px-5 sm:px-6 md:px-12 lg:px-24 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        <div className="space-y-4">
          <div className="border-l-4 border-[#E5981A] pl-4">
            <span className="text-[10px] sm:text-xs font-bold text-[#A62626] uppercase tracking-wider">The Continental Mandate</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[#0A2540]">Why ERS Exists</h2>
          </div>
          <p className="text-slate-600 text-xs sm:text-sm md:text-base leading-relaxed font-normal">
            Across Africa's high-velocity revenue and mobility sectors, manual leakages, unverified collection points, and fragmented tracking systems slow down macro-economic scaling. 
          </p>
          <p className="text-slate-600 text-xs sm:text-sm md:text-base leading-relaxed font-normal">
            Billions of dollars in potential revenue are lost annually due to fragmented collection systems, manual processes, revenue leakages, poor accountability, limited taxpayer visibility, and weak enforcement mechanisms. These challenges have significantly reduced the capacity of governments and institutions to finance development independently.
          </p>
          <p className="text-slate-600 text-xs sm:text-sm md:text-base leading-relaxed font-normal">
            ERS exists to completely modernize this administrative reality. By injecting rigid, tamper-proof automation frameworks into everyday commercial transactions, we bridge the gap between field activities and institutional bank vaults, fostering absolute accountability.
          </p>
        </div>

        <div className="p-6 sm:p-8 md:p-10 bg-[#0A2540] text-white rounded-2xl sm:rounded-3xl border border-white/10 shadow-2xl relative overflow-hidden group">
          <div className="absolute -right-20 -bottom-20 w-64 h-64 rounded-full border border-white/5 group-hover:scale-110 transition-transform duration-700 pointer-events-none" />
          
          <div className="space-y-4 relative z-10">
            <span className="inline-block text-[9px] sm:text-[10px] font-bold tracking-widest bg-white/5 border border-white/10 px-2.5 py-1 rounded-sm text-[#E5981A] uppercase">
              Regulatory Infrastructure
            </span>
            <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white">Corporate Governance</h3>
            <p className="text-slate-300 text-[11px] sm:text-xs md:text-sm leading-relaxed font-light">
              Our operational framework is bound strictly to standard corporate governance metrics, comprehensive data encryption audits, and uncompromising regulatory compliance mechanisms. ERS operations ensure that every stakeholder—from local transport unions to federal state departments—is protected by strict cryptographic safety walls and immutable tracking histories.
            </p>
            <div className="pt-3 flex items-center gap-3 border-t border-white/10">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              <span className="text-[9px] sm:text-[10px] text-slate-400 tracking-wider uppercase font-bold">Compliance Status: Operational</span>
            </div>
          </div>
        </div>
      </section>

      {/* 6. OUR DIGITAL REVENUE INFRASTRUCTURE */}
      <section className="bg-[#F8FAFC] py-12 sm:py-16 px-5 sm:px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
            <span className="text-[10px] sm:text-xs font-bold text-[#A62626] uppercase tracking-wider">Complete Ecosystem</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[#0A2540] mt-2">Our Digital Revenue Infrastructure</h2>
            <p className="text-slate-600 text-xs sm:text-sm mt-3">
              ERS integrates multiple technologies and services into a single, unified ecosystem
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
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
              <div key={idx} className="flex items-center gap-2 p-3 bg-white rounded-xl border border-slate-200/60 hover:border-[#E5981A]/30 transition-all">
                <svg className="w-4 h-4 text-[#E5981A] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-slate-700 text-[11px] sm:text-xs font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. WHO WE SERVE */}
      <section className="bg-white py-12 sm:py-16 px-5 sm:px-6 md:px-12 lg:px-24 border-y border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
            <span className="text-[10px] sm:text-xs font-bold text-[#A62626] uppercase tracking-wider">Institutional Coverage</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[#0A2540] mt-2">Who We Serve</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
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
              <div key={idx} className="p-4 bg-[#F8FAFC] rounded-xl border border-slate-200/70 text-center hover:border-[#0A2540] transition-all">
                <span className="text-slate-700 text-xs sm:text-sm font-semibold">{sector}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. PAN-AFRICAN VISION */}
      <section className="bg-[#0A2540] text-white py-12 sm:py-16 px-5 sm:px-6 md:px-12 lg:px-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 bg-[linear-gradient(to_right,#FFFFFF_1px,transparent_1px),linear-gradient(to_bottom,#FFFFFF_1px,transparent_1px)] bg-[size:3rem_3rem]" />
        <div className="max-w-4xl mx-auto relative z-10 text-center space-y-4">
          <span className="text-[10px] sm:text-xs font-bold text-[#E5981A] uppercase tracking-wider">Continental Scaling</span>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold tracking-tight">Our Pan-African Vision</h2>
          <p className="text-slate-300 text-xs sm:text-sm md:text-lg max-w-3xl mx-auto leading-relaxed font-light">
            The ERS expansion roadmap is built to scale beyond regional borders. Our macro ambition is to establish unified financial data pipelines across West Africa and the wider continent—interconnecting cross-border transport systems, enterprise trades, and municipal collection nodes into one synchronized, sovereign ecosystem.
          </p>
          <p className="text-slate-400 text-[11px] sm:text-sm max-w-2xl mx-auto mt-4">
            When governments have access to accurate, predictable, and sustainable revenue streams, they can invest more confidently in roads, schools, healthcare facilities, agriculture, transportation systems, digital infrastructure, and job creation initiatives.
          </p>
        </div>
      </section>

      {/* 9. LEADERSHIP TEAM */}
      <section className="py-12 sm:py-16 px-5 sm:px-6 md:px-12 lg:px-24 bg-white">
        <div className="max-w-7xl mx-auto space-y-10">
          <div className="border-l-4 border-[#A62626] pl-4 max-w-xl">
            <span className="text-[10px] sm:text-xs font-bold text-[#A62626] uppercase tracking-wider">Oversight Grid</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[#0A2540]">Leadership Team</h2>
            <p className="text-slate-600 text-xs sm:text-sm font-normal mt-1">
              Our organizational vector is directed by seasoned executives, technology infrastructure experts, and strategic legal advisers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
            {[
              { role: "Executive Board", title: "Managing Directors & Core Executives", focus: "Overseeing systemic platform scaling and public sector transaction deployment." },
              { role: "Technical Leadership", title: "Chief Architects & Engineers", focus: "Directing database security, high-throughput systems, and hardware deployment." },
              { role: "Compliance Council", title: "Legal & Regulatory Directors", focus: "Enforcing absolute transparency frameworks across state and local government contracts." }
            ].map((leader, i) => (
              <div key={i} className="p-5 sm:p-6 bg-[#F8FAFC] rounded-2xl border border-slate-200/80 flex flex-col justify-between">
                <div>
                  <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-[#A62626]">{leader.role}</span>
                  <h4 className="font-bold text-[#0A2540] text-base sm:text-lg mt-1 mb-2">{leader.title}</h4>
                  <p className="text-slate-600 text-[11px] sm:text-xs leading-relaxed font-normal">{leader.focus}</p>
                </div>
                <div className="mt-5 pt-3 border-t border-slate-200/60 text-[10px] sm:text-xs font-bold text-[#0A2540]">
                  Active Executive Profile
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. CTA - no footer here; global footer will handle it */}
      <section className="py-12 sm:py-16 px-5 sm:px-6 md:px-12 lg:px-24 bg-[#F8FAFC] relative overflow-hidden border-t border-slate-200/60">
        <div className="max-w-5xl mx-auto bg-[#0A2540] text-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 relative overflow-hidden border border-white/10 shadow-2xl flex flex-col items-center text-center space-y-4 sm:space-y-5">
          <div className="absolute -right-20 -bottom-20 w-64 h-64 rounded-full border border-white/5 pointer-events-none" />
          
          <span className="text-[9px] sm:text-xs text-[#E5981A] tracking-widest uppercase border border-[#E5981A]/30 px-2.5 py-1 rounded-full bg-white/5 font-bold">
            Engagement Interface
          </span>
          
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold tracking-tight max-w-2xl leading-tight">
            Ready to Transform Your Revenue Architecture?
          </h2>
          
          <p className="text-slate-300 max-w-2xl text-xs sm:text-sm md:text-base leading-relaxed font-normal">
            Partner with ERS to eliminate leakages, digitize manual processes, and establish secure, automated real-time revenue systems. Contact us for demonstrations, consultations, or pilot deployments.
          </p>
          
          <div className="pt-2 sm:pt-3 flex flex-col sm:flex-row gap-3 w-full justify-center max-w-md relative z-10">
            <Link href="/contact" className="bg-[#A62626] hover:bg-[#A62626]/90 text-white text-center font-bold tracking-wider text-[10px] sm:text-xs uppercase px-6 sm:px-8 py-3 sm:py-4 rounded-xl transition-all shadow-md">
              Initiate Strategic Contact
            </Link>
            <Link href="/partnerships/become-a-partner" className="border border-white/40 hover:border-white text-white text-center font-semibold text-[10px] sm:text-xs uppercase px-6 sm:px-8 py-3 sm:py-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all">
              Become a Partner
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}