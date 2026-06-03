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

  return (
    <main className="min-h-screen bg-[#F8FAFC] text-[#0A2540] overflow-x-hidden selection:bg-[#E5981A]/30 selection:text-[#0A2540] font-['Calibri',Calibri,Segoe_UI,sans-serif]">
      
      {/* 1. IMMERSIVE HERO BANNER MODULE WITH LINEAR PERSPECTIVE OVERLAY */}
      <section className="relative bg-[#0A2540] text-white py-24 px-6 md:px-12 lg:px-24 flex flex-col justify-center min-h-[50vh] overflow-hidden text-left">
        {/* R&D Lab Background Photo Layer */}
        <div 
          className="absolute inset-0 bg-cover bg-center mix-blend-luminosity opacity-15 scale-105"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1507668077129-56e32842fceb?q=80&w=2000')` }}
        />
        {/* Abstract Linear Perspective Angle Overlay */}
        <div className="absolute inset-0 opacity-5 bg-[linear-gradient(135deg,#FFFFFF_1px,transparent_1px)] bg-[size:5rem_5rem]" />
        {/* Top Right High-Tech Soft Accent Glow */}
        <div className="absolute -top-40 right-0 w-[500px] h-[500px] bg-[#E5981A]/10 rounded-full blur-[160px] pointer-events-none" />

        <div className="max-w-5xl space-y-6 relative z-10">
          <div className="inline-flex items-center gap-2 border border-[#E5981A]/30 bg-white/5 backdrop-blur-sm px-4 py-2 rounded-full text-xs font-bold tracking-widest text-[#E5981A] uppercase">
            <span className="inline-block w-2 h-2 rounded-sm bg-[#E5981A]" /> FUTURE TECHNOLOGY CORES
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.1]">
            Innovation <br />
            <span className="text-[#E5981A]">Lab & Initiatives</span>
          </h1>
          <p className="text-slate-200 text-lg md:text-xl max-w-3xl leading-relaxed font-normal">
            Research and future technology development frameworks designed for systemic transformation.
          </p>
        </div>
      </section>

      {/* 2. CORE ENFORCEMENT PRESENTATION INTERLOCKING ROWS */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-20 relative z-20 -mt-10">
        <div className="space-y-8">
          
          {/* Main Context Split Banner Block */}
          <div className="bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-xl text-left grid grid-cols-1 lg:grid-cols-12 items-stretch">
            <div className="p-8 md:p-12 lg:col-span-7 space-y-4">
              <span className="text-xs font-mono font-bold text-[#A62626] tracking-widest uppercase block">
                Exploratory Ecosystems
              </span>
              <h2 className="text-3xl font-bold text-[#0A2540] tracking-tight">
                Engineering Tomorrow's Infrastructure
              </h2>
              <p className="text-slate-600 text-sm md:text-base font-normal leading-relaxed">
                The Innovation Lab operates as our internal sandbox, vetting emerging technical paradigms against strict governance constraints. We identify, develop, and battle-test advanced architectural concepts long before they impact live transactional dependencies.
              </p>
            </div>
            <div className="p-8 md:p-12 lg:col-span-5 bg-slate-50 border-t lg:border-t-0 lg:border-l border-slate-200/60 flex flex-col justify-center space-y-4">
              <p className="text-slate-500 text-xs md:text-sm font-normal">
                Interested in discovering how our technical research pipelines align with your state framework modernization initiatives?
              </p>
              <Link href="/contact" className="inline-block bg-[#A62626] hover:bg-[#A62626]/90 text-white font-mono font-bold text-xs uppercase px-8 py-4 rounded-xl shadow-md transition-all text-center">
                Partner on R&D &rarr;
              </Link>
            </div>
          </div>

          {/* High-Contrast Interactive Matrix Rows */}
          <div className="bg-white border border-slate-200 rounded-3xl shadow-xl overflow-hidden divider-y divider-slate-100">
            {researchInitiatives.map((item, idx) => (
              <div 
                key={idx}
                className="p-6 md:p-8 hover:bg-slate-50/60 border-b border-slate-100 last:border-0 transition-colors duration-200 text-left flex flex-col md:flex-row md:items-center gap-6 justify-between"
              >
                <div className="md:w-1/3 space-y-2">
                  <span className="text-[9px] font-mono font-bold px-2 py-0.5 rounded tracking-wider border border-slate-200 bg-white text-slate-500 inline-block">
                    {item.status}
                  </span>
                  <h3 className="font-bold text-[#0A2540] text-lg tracking-tight">
                    {item.focus}
                  </h3>
                </div>
                
                <div className="md:w-2/3 md:border-l border-slate-100 md:pl-8">
                  <p className="text-slate-500 text-xs md:text-sm leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 3. HIGH-TECH INSTITUTIONAL ACTION PANEL */}
      <section className="py-12 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto w-full mb-12">
        <div className="p-8 md:p-16 bg-[#0A2540] text-white rounded-3xl border border-white/10 shadow-2xl relative overflow-hidden group text-center space-y-6">
          <div className="absolute -left-20 -bottom-20 w-64 h-64 rounded-full border border-white/5 group-hover:scale-110 transition-transform duration-700 pointer-events-none" />
          
          <span className="inline-block text-[9px] font-mono tracking-widest bg-white/5 border border-white/10 px-4 py-1 rounded-full text-[#E5981A] font-bold uppercase">
            Incubation Network Hub
          </span>
          <h3 className="text-3xl md:text-5xl font-bold text-white tracking-tight max-w-3xl mx-auto leading-tight">
            Co-Develop Sovereign Paradigms
          </h3>
          <p className="text-slate-300 text-sm md:text-base leading-relaxed font-normal max-w-2xl mx-auto">
            Leverage our interdisciplinary framework teams to design tailored digital verification proofs and institutional proof-of-concepts. Contact our systems lab to evaluate data deployment pathways.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row gap-4 w-full justify-center max-w-md mx-auto">
            <Link 
              href="/contact" 
              className="bg-[#A62626] hover:bg-[#A62626]/90 text-white text-center font-bold tracking-wider text-xs uppercase px-8 py-4 rounded-xl transition-all shadow-md w-full active:scale-95 duration-150"
            >
              Initiate Collaborative Lab Tracks
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}