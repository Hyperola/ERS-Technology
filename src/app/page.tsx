// src/app/page.tsx
import Link from "next/link";

export default function HomePage() {
  const portals = [
    { name: "Merchant Portal", desc: "Revenue collections & agent remittance management" },
    { name: "Government Dashboard", desc: "Real-time state and institutional oversight" },
    { name: "Transport Portal", desc: "Fleet, union, and transit network monitoring" },
    { name: "Partner Login", desc: "Integrated developer API and vendor gateway" },
  ];

  const coreSolutions = [
    { title: "Revenue Automation", desc: "End-to-end digitization of structural taxes, levies, and public collections." },
    { title: "Transport Ecosystem", desc: "Smart transit administration frameworks connecting parks, fleets, and unions." },
    { title: "Smart Ticketing", desc: "Secure electronic ticketing infrastructures built for Africa's high-velocity environments." },
    { title: "Payment Infrastructure", desc: "Interoperable multi-channel fintech integrations across POS, QR, and mobile wallets." },
    { title: "Analytics & Monitoring", desc: "Real-time central data intelligence dashboards providing predictive audit trails." },
  ];

  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden bg-ers-bg text-ers-text-dark animate-fadeIn">
      
      {/* 1. HERO BANNER WITH DEEP INFRASTRUCTURE BACKGROUND */}
      <section className="relative bg-ers-blue text-white py-24 px-6 md:px-12 lg:px-24 flex flex-col justify-center min-h-[80vh] overflow-hidden">
        
        {/* Kinetic Immersive Infrastructure Background Photo Layer */}
        <div 
          className="absolute inset-0 bg-cover bg-center mix-blend-luminosity opacity-15 scale-105 animate-bgPulse"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1541872703-74c5e44368f9?q=80&w=2000')` }}
        />

        {/* Fine Decorative Grid Pattern Layer */}
        <div className="absolute inset-0 opacity-5 bg-[linear-gradient(to_right,#FFFFFF_1px,transparent_1px),linear-gradient(to_bottom,#FFFFFF_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        
        {/* Soft Accent Glow */}
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-ers-gold/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-5xl space-y-8 relative z-10">
          
          <div className="inline-flex items-center gap-2 border border-ers-gold/30 bg-white/5 backdrop-blur-xs px-4 py-2 rounded-full text-xs font-bold tracking-widest text-ers-gold uppercase">
            Digital Revenue Infrastructure Company
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[1.1]">
            Building Africa’s <br />
            <span className="text-ers-gold">Digital Revenue</span> Infrastructure
          </h1>
          
          <p className="text-slate-200 text-lg md:text-xl max-w-3xl leading-relaxed font-light">
            Welcome to Ethical Recovery System Technologies Ltd (ERS)[cite: 1]. We provide intelligent technology systems 
            that enable governments, institutions, and unions to automate, monitor, secure, and optimize remittance streams.
          </p>
          
          <div className="pt-4 flex flex-wrap gap-4 items-center">
            <Link href="/contact" className="bg-ers-gold hover:bg-ers-gold-hover text-ers-blue font-extrabold tracking-wider text-xs uppercase px-8 py-4 rounded-xl shadow-lg hover:scale-[1.01] active:scale-[0.99] transition-all">
              Deploy ERS System
            </Link>
            <Link href="/solutions" className="border-2 border-white/20 hover:border-ers-gold text-white font-bold text-xs uppercase tracking-wider px-8 py-4 rounded-xl backdrop-blur-xs bg-white/5 hover:bg-white/10 transition-all">
              Explore Blueprint
            </Link>
          </div>
        </div>
      </section>

      {/* 2. PORTALS GATEWAY */}
      <section className="bg-ers-bg py-16 px-6 md:px-12 lg:px-24 border-b border-slate-200 relative z-20 -mt-8 rounded-t-3xl shadow-xl">
        <div className="max-w-7xl mx-auto">
          <div className="mb-10 border-l-4 border-ers-blue pl-4">
            <h2 className="text-xs font-black uppercase tracking-widest text-ers-gold">Gateways</h2>
            <p className="text-2xl font-black tracking-tight text-ers-blue">Quick Access Portals</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {portals.map((portal, index) => (
              <a 
                key={index} 
                href="#" 
                className="group p-6 bg-white rounded-2xl border border-slate-200/80 hover:border-ers-blue hover:bg-white transition-all duration-300 flex flex-col justify-between shadow-xs hover:shadow-md"
              >
                <div>
                  <h3 className="font-bold text-ers-blue group-hover:text-ers-gold text-lg mb-2 transition-colors">
                    {portal.name}
                  </h3>
                  <p className="text-ers-text-muted text-xs leading-relaxed">
                    {portal.desc}
                  </p>
                </div>
                <div className="mt-8 text-xs font-mono tracking-wider font-bold text-ers-blue group-hover:text-ers-gold flex items-center gap-1 transition-colors">
                  Access Portal <span className="group-hover:translate-x-1 transition-transform duration-200">&rarr;</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* 3. CAPABILITIES INDEX */}
      <section className="py-24 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto w-full">
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-2">
          <div className="text-xs font-black text-ers-gold uppercase tracking-widest">Platform Core</div>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-ers-blue">Key System Solutions</h2>
          <div className="h-1 w-12 bg-ers-gold mx-auto rounded-full mt-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {coreSolutions.map((item, index) => (
            <div 
              key={index} 
              className="p-8 bg-white rounded-2xl border border-slate-100 shadow-xs hover:shadow-md hover:border-ers-blue/20 transition-all duration-300 group"
            >
              <div className="h-10 w-10 rounded-xl bg-ers-bg-alt text-ers-blue flex items-center justify-center font-mono font-black text-xs mb-6 group-hover:bg-ers-blue group-hover:text-white transition-colors">
                0{index + 1}
              </div>
              <h3 className="text-xl font-bold text-ers-blue mb-3 transition-colors">{item.title}</h3>
              <p className="text-ers-text-muted text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. STATISTICS OVERLAY */}
      <section className="bg-ers-blue text-white py-24 px-6 md:px-12 lg:px-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-2">
            <span className="text-xs font-bold text-ers-gold uppercase tracking-widest">Performance Metrics</span>
            <h2 className="text-3xl md:text-4xl font-black tracking-tight">System Impact Statistics</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { val: "35% +", label: "Average Revenue Growth" },
              { val: "12M +", label: "Processed Volumes" },
              { val: "18 +", label: "Institutions Served" },
              { val: "450k +", label: "Users Onboarded" }
            ].map((stat, i) => (
              <div key={i} className="p-8 bg-white/5 backdrop-blur-xs rounded-2xl border border-white/10 text-center">
                <div className="text-4xl md:text-5xl font-black text-ers-gold tracking-tight mb-2">{stat.val}</div>
                <div className="text-xs font-mono uppercase tracking-widest text-slate-300 font-bold">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. TARGET PARTNERS SEGMENT */}
      <section className="py-24 px-6 md:px-12 lg:px-24 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-12">
            <div className="max-w-xl space-y-4">
              <span className="text-xs font-black text-ers-gold uppercase tracking-widest">Institutional Alignment</span>
              <h2 className="text-3xl md:text-4xl font-black tracking-tight text-ers-blue">Engineered for Critical Sectors</h2>
              <p className="text-ers-text-muted leading-relaxed text-sm">
                ERS customizes high-throughput infrastructure to solve complex compliance, reconciliation, and revenue challenges across economic touchpoints.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 flex-1 w-full">
              {[
                { title: "Government Agencies", label: "State Revenue Boards, Ministries & Municipalities" },
                { title: "Transport Unions", label: "Fleet Operators, National Transit Networks & Parks" },
                { title: "Financial Institutions", label: "Acquiring Banks, Central Clearers & Micro-Lenders" },
                { title: "Enterprise & SMEs", label: "Commercial Merchants, Logistics Providers & Aggregators" }
              ].map((sector, idx) => (
                <div key={idx} className="p-5 bg-ers-bg-alt rounded-xl border border-slate-200/60 hover:border-ers-blue/40 transition-colors">
                  <h4 className="font-bold text-ers-blue text-base mb-1">{sector.title}</h4>
                  <p className="text-ers-text-muted text-xs">{sector.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. CALL-TO-ACTION */}
      <section className="py-20 px-6 md:px-12 lg:px-24 bg-ers-bg-alt relative overflow-hidden">
        <div className="max-w-5xl mx-auto bg-ers-blue text-white rounded-3xl p-12 md:p-16 relative overflow-hidden border border-white/10 shadow-2xl flex flex-col items-center text-center space-y-6">
          
          <span className="text-xs font-mono text-ers-gold tracking-widest uppercase border border-ers-gold/30 px-3 py-1 rounded-full bg-white/5">
            Deployment Gateway
          </span>
          
          <h2 className="text-3xl md:text-5xl font-black tracking-tight max-w-2xl leading-tight">
            Ready to Optimize Your Revenue Architecture?
          </h2>
          
          <p className="text-slate-300 max-w-2xl text-sm md:text-base leading-relaxed">
            Partner with ERS Technologies to clear leakages, digitize manual asset touchpoints, and establish secure, automated real-time remittance grids across your operating network[cite: 1].
          </p>
          
          <div className="pt-4 flex flex-col sm:flex-row gap-4 w-full justify-center max-w-md">
            <Link href="/contact" className="bg-ers-gold hover:bg-ers-gold-hover text-ers-blue text-center font-extrabold tracking-wider text-xs uppercase px-8 py-4 rounded-xl transition-all shadow-md">
              Request Integration Demo
            </Link>
            <Link href="/architecture" className="border border-white/20 hover:border-white text-white text-center font-bold text-xs uppercase tracking-wider px-8 py-4 rounded-xl bg-white/5 transition-all">
              Technical Specifications
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}