// src/app/about/page.tsx
import Link from "next/link";

export default function AboutPage() {
  // Exact Copywriting: Complete Core Values Array
  const coreValues = [
    { title: "Integrity", desc: "Absolute transparency and honesty in every revenue line and technological architecture we deploy." },
    { title: "Innovation", desc: "Pioneering state-of-the-art fintech and mobility systems custom-built for Africa's unique landscape." },
    { title: "Accountability", desc: "Providing uncompromised real-time data auditing to completely eliminate leakages." },
    { title: "Excellence", desc: "Maintaining institutional-grade performance, high system uptime, and flawless UX precision." },
    { title: "Transparency", desc: "Opening up clear, visible financial tracking streams for governments and citizens alike." },
    { title: "Nation Building", desc: "Strengthening local economies by empowering institutions to optimize asset collections natively." },
  ];

  return (
    // Applied global Calibri stack layout to enforce precise corporate formatting across all views
    <div className="flex flex-col min-h-screen overflow-x-hidden bg-[#F8FAFC] text-[#0A2540] selection:bg-[#E5981A]/30 selection:text-[#0A2540] font-['Calibri',Calibri,Segoe_UI,sans-serif]">
      
      {/* 1. HERO BANNER */}
      <section className="relative bg-[#0A2540] text-white py-24 px-6 md:px-12 lg:px-24 flex flex-col justify-center min-h-[60vh] overflow-hidden">
        {/* Deep Infrastructure Visual Overlay Layer */}
        <div 
          className="absolute inset-0 bg-cover bg-center mix-blend-luminosity opacity-10 scale-105 pointer-events-none"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2000')` }}
        />

        {/* Fine Decorative Grid Pattern Layer */}
        <div className="absolute inset-0 opacity-5 bg-[linear-gradient(to_right,#FFFFFF_1px,transparent_1px),linear-gradient(to_bottom,#FFFFFF_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        
        {/* Ambient Branding Gold Glow */}
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#E5981A]/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-5xl space-y-8 relative z-10">
          <div className="inline-flex items-center gap-2 border border-[#E5981A]/30 bg-white/5 backdrop-blur-xs px-4 py-1.5 rounded-full text-xs font-bold tracking-widest text-[#E5981A] uppercase">
            Corporate Identity
          </div>
          
          {/* Exact Blueprint Header Requirement */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05]">
            Modernizing Africa's <br />
            <span className="text-[#E5981A]">Revenue Core</span>
          </h1>
          
          {/* Exact Blueprint Overview Copywriting (Word for Word) */}
          <p className="text-slate-100 text-lg md:text-xl lg:text-2xl max-w-4xl leading-relaxed font-normal">
            Ethical Recovery System Technologies Ltd (ERS) is a technology-driven infrastructure company focused on building scalable digital revenue ecosystems across Africa.
          </p>

          <p className="text-slate-300 text-base md:text-lg max-w-3xl leading-relaxed font-light border-l-2 border-[#E5981A]/40 pl-4">
            ERS exists to modernize revenue administration, improve accountability, strengthen transparency, and empower institutions through intelligent automation and financial technology systems.
          </p>
        </div>
      </section>

      {/* 2. DYNAMIC VISION & MISSION SPLIT */}
      <section className="bg-[#F8FAFC] py-16 px-6 md:px-12 lg:px-24 border-b border-slate-200 relative z-20 -mt-10 rounded-t-[2rem] shadow-2xl">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Vision Panel */}
            <div className="group p-8 md:p-10 bg-white rounded-2xl border border-slate-200/80 hover:border-[#0A2540] transition-all duration-300 flex flex-col justify-between shadow-xs hover:shadow-md relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#E5981A]/5 rounded-bl-full group-hover:bg-[#E5981A]/10 transition-colors pointer-events-none" />
              <div className="space-y-4">
                <div className="border-l-4 border-[#E5981A] pl-3">
                  <h2 className="text-xs font-bold uppercase tracking-wider text-[#A62626]">The Horizon Blueprint</h2>
                  <p className="text-xl font-bold tracking-tight text-[#0A2540]">Our Vision</p>
                </div>
                <p className="text-[#0A2540] font-bold text-lg md:text-xl leading-snug tracking-tight pt-2">
                  “To become Africa’s leading Digital Revenue Infrastructure powering transparent and intelligent economies.”
                </p>
              </div>
            </div>

            {/* Mission Panel */}
            <div className="group p-8 md:p-10 bg-white rounded-2xl border border-slate-200/80 hover:border-[#0A2540] transition-all duration-300 flex flex-col justify-between shadow-xs hover:shadow-md relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#E5981A]/5 rounded-bl-full group-hover:bg-[#E5981A]/10 transition-colors pointer-events-none" />
              <div className="space-y-4">
                <div className="border-l-4 border-[#0A2540] pl-3">
                  <h2 className="text-xs font-bold uppercase tracking-wider text-[#A62626]">The Operational Mandate</h2>
                  <p className="text-xl font-bold tracking-tight text-[#0A2540]">Our Mission</p>
                </div>
                <p className="text-slate-600 text-sm md:text-base leading-relaxed font-normal pt-2">
                  To provide secure, innovative, and scalable digital systems that optimize revenue generation, monitoring, collection, reconciliation, and remittance across Africa.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. WHO WE ARE DETAILED IDENTITY */}
      <section className="py-24 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto w-full bg-[#F8FAFC]">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          <div className="lg:col-span-1 space-y-4 border-l-4 border-[#A62626] pl-4">
            <span className="text-xs font-bold text-[#A62626] uppercase tracking-wider">Corporate Identity</span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#0A2540]">Who We Are</h2>
          </div>
          <div className="lg:col-span-2 space-y-6 text-slate-600 text-sm md:text-base leading-relaxed font-normal">
            <p>
              Ethical Recovery System Technologies Ltd is established as a core digital transformation firm operating at the intersection of public-sector financial efficiency and private-sector transaction compliance. We architect custom software and deploy targeted hardware infrastructures built natively to monitor system transaction channels.
            </p>
            <p>
              By resolving fragmentation between manual accounting logs and physical collection portals, we establish uncompromised financial structures. Our teams specialize in systemic deployment, field engineering, and real-time analytical visibility across state lines and institutional boundaries.
            </p>
          </div>
        </div>
      </section>

      {/* 4. CORE VALUES PILLARS */}
      <section className="bg-white py-24 px-6 md:px-12 lg:px-24 border-y border-slate-200">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <span className="text-xs font-bold text-[#A62626] uppercase tracking-wider">Structural Framework</span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#0A2540]">Our Core Values</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreValues.map((value, idx) => (
              <div 
                key={idx} 
                className="p-6 bg-white rounded-2xl border border-slate-200/60 shadow-xs hover:border-[#E5981A]/50 transition-all duration-300 group"
              >
                <div className="h-10 w-10 rounded-xl bg-[#F8FAFC] border border-slate-200 text-[#0A2540] flex items-center justify-center font-bold text-sm mb-4 group-hover:bg-[#0A2540] group-hover:text-white transition-colors">
                  0{idx + 1}
                </div>
                <h3 className="text-lg font-bold text-[#0A2540] mb-2 group-hover:text-[#A62626] transition-colors">
                  {value.title}
                </h3>
                <p className="text-slate-600 text-xs leading-relaxed font-normal">
                  {value.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. WHY WE EXIST & GOVERNANCE LAYER */}
      <section className="py-24 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Why We Exist Narrative Block */}
        <div className="space-y-6">
          <div className="border-l-4 border-[#E5981A] pl-4">
            <span className="text-xs font-bold text-[#A62626] uppercase tracking-wider">The Continental Mandate</span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#0A2540]">Why ERS Exists</h2>
          </div>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed font-normal">
            Across Africa's high-velocity revenue and mobility sectors, manual leakages, unverified collection points, and fragmented tracking systems slow down macro-economic scaling. 
          </p>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed font-normal">
            ERS exists to completely modernize this administrative reality. By injecting rigid, tamper-proof automation frameworks into everyday commercial transactions, we bridge the gap between field activities and institutional bank vaults, fostering absolute accountability.
          </p>
        </div>

        {/* Corporate Governance Block */}
        <div className="p-8 md:p-12 bg-[#0A2540] text-white rounded-3xl border border-white/10 shadow-2xl relative overflow-hidden group">
          <div className="absolute -right-20 -bottom-20 w-64 h-64 rounded-full border border-white/5 group-hover:scale-110 transition-transform duration-700 pointer-events-none" />
          
          <div className="space-y-6 relative z-10">
            <span className="inline-block text-[10px] font-bold tracking-widest bg-white/5 border border-white/10 px-3 py-1 rounded-sm text-[#E5981A] uppercase">
              Regulatory Infrastructure
            </span>
            <h3 className="text-2xl font-bold tracking-tight text-white">Corporate Governance</h3>
            <p className="text-slate-300 text-xs md:text-sm leading-relaxed font-light">
              Our operational framework is bound strictly to standard corporate governance metrics, comprehensive data encryption audits, and uncompromising regulatory compliance mechanisms. ERS operations ensure that every stakeholder—from local transport unions to federal state departments—is protected by strict cryptographic safety walls and immutable tracking histories.
            </p>
            <div className="pt-4 flex items-center gap-3 border-t border-white/10">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              <span className="text-[10px] text-slate-400 tracking-wider uppercase font-bold">Compliance Status: Operational</span>
            </div>
          </div>
        </div>
      </section>

      {/* 6. PAN-AFRICAN VISION STRATEGIC FOOTPRINT */}
      <section className="bg-[#0A2540] text-white py-24 px-6 md:px-12 lg:px-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 bg-[linear-gradient(to_right,#FFFFFF_1px,transparent_1px),linear-gradient(to_bottom,#FFFFFF_1px,transparent_1px)] bg-[size:3rem_3rem]" />
        <div className="max-w-4xl mx-auto relative z-10 text-center space-y-6">
          <span className="text-xs font-bold text-[#E5981A] uppercase tracking-wider">Continental Scaling</span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Our Pan-African Vision</h2>
          <p className="text-slate-300 text-sm md:text-lg max-w-3xl mx-auto leading-relaxed font-light">
            The ERS expansion roadmap is built to scale beyond regional borders. Our macro ambition is to establish unified financial data pipelines across West Africa and the wider continent—interconnecting cross-border transport systems, enterprise trades, and municipal collection nodes into one synchronized, sovereign ecosystem.
          </p>
        </div>
      </section>

      {/* 7. LEADERSHIP PROFILE INDEX */}
      <section className="py-24 px-6 md:px-12 lg:px-24 bg-white">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="border-l-4 border-[#A62626] pl-4 max-w-xl">
            <span className="text-xs font-bold text-[#A62626] uppercase tracking-wider">Oversight Grid</span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#0A2540]">Leadership Team</h2>
            <p className="text-slate-600 text-sm font-normal mt-2">
              Our organizational vector is directed by seasoned executives, technology infrastructure experts, and strategic legal advisers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { role: "Executive Board", title: "Managing Directors & Core Executives", focus: "Overseeing systemic platform scaling and public sector transaction deployment." },
              { role: "Technical Leadership", title: "Chief Architects & Engineers", focus: "Directing database security, high-throughput systems, and hardware deployment." },
              { role: "Compliance Council", title: "Legal & Regulatory Directors", focus: "Enforcing absolute transparency frameworks across state and local government contracts." }
            ].map((leader, i) => (
              <div key={i} className="p-6 bg-[#F8FAFC] rounded-2xl border border-slate-200/80 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#A62626]">{leader.role}</span>
                  <h4 className="font-bold text-[#0A2540] text-lg mt-1 mb-3">{leader.title}</h4>
                  <p className="text-slate-600 text-xs leading-relaxed font-normal">{leader.focus}</p>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-200/60 text-xs font-bold text-[#0A2540]">
                  Active Executive Profile
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SYSTEM PLATFORM CALL-TO-ACTION */}
      <section className="py-20 px-6 md:px-12 lg:px-24 bg-[#F8FAFC] relative overflow-hidden border-t border-slate-200/60">
        <div className="max-w-5xl mx-auto bg-[#0A2540] text-white rounded-3xl p-12 md:p-16 relative overflow-hidden border border-white/10 shadow-2xl flex flex-col items-center text-center space-y-6">
          <div className="absolute -right-20 -bottom-20 w-64 h-64 rounded-full border border-white/5 pointer-events-none" />
          
          <span className="text-xs text-[#E5981A] tracking-widest uppercase border border-[#E5981A]/30 px-3 py-1 rounded-full bg-white/5 font-bold">
            Engagement Interface
          </span>
          
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight max-w-2xl leading-tight">
            Connect With Our Leadership Council
          </h2>
          
          <p className="text-slate-300 max-w-2xl text-sm md:text-base leading-relaxed font-normal">
            Discuss state deployments, multi-tier partner channel integrations, or strategic institutional scaling with our executive corporate officers.
          </p>
          
          <div className="pt-4 flex flex-col sm:flex-row gap-4 w-full justify-center max-w-md relative z-10">
            <Link href="/contact" className="bg-[#A62626] hover:bg-[#A62626]/90 text-white text-center font-bold tracking-wider text-xs uppercase px-8 py-4 rounded-xl transition-all shadow-md">
              Initiate Strategic Contact
            </Link>
          </div>
        </div>
      </section>

      {/* BRAND FOOTER WITH CORPORATE INFORMATION */}
      <footer className="bg-white border-t border-slate-200 py-12 px-6 md:px-12 lg:px-24 text-sm text-slate-600">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div className="space-y-3">
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-tight text-[#0A2540] leading-none">ERS</span>
              <span className="text-[9px] font-bold text-[#A62626] uppercase tracking-widest mt-0.5">Technologies Ltd</span>
            </div>
            <p className="text-xs text-slate-500 leading-relaxed max-w-xs font-normal">
              Modernizing revenue administration, improving accountability, and strengthening transparency across continental networks.
            </p>
          </div>

          <div className="space-y-2">
            <h4 className="font-bold text-[#0A2540] text-xs uppercase tracking-wider">Corporate Headquarters</h4>
            <p className="text-xs leading-relaxed font-normal">
              Flat 2, Plot 901 Katempe, Abuja<br />
              <span className="font-bold text-[#A62626]">Phone:</span> 07049079078 / 09010912788
            </p>
          </div>

          <div className="space-y-2">
            <h4 className="font-bold text-[#0A2540] text-xs uppercase tracking-wider">Regional Operations</h4>
            <p className="text-xs leading-relaxed font-normal">
              No 4 Okezie Close, off Umudukwu Road<br />
              Ehere, Ogbor Hill Aba
            </p>
          </div>

        </div>
        
        <div className="max-w-7xl mx-auto mt-12 pt-6 border-t border-slate-100 text-center text-xs text-slate-400 font-normal">
          &copy; 2026 Ethical Recovery System Technologies Ltd (ERS). All Rights Reserved.
        </div>
      </footer>

    </div>
  );
}