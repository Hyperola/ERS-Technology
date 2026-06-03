import Link from 'next/link';

export default function TechnologyPartnersPage() {
  return (
    <main className="min-h-screen bg-[#F8FAFC] text-[#0A2540] overflow-x-hidden selection:bg-[#E5981A]/30 selection:text-[#0A2540] font-['Calibri',Calibri,Segoe_UI,sans-serif]">
      {/* Hero Section */}
      <section className="relative bg-[#0A2540] text-white py-24 px-6 md:px-12 lg:px-24 flex flex-col justify-center min-h-[50vh] overflow-hidden text-left">
        <div className="absolute inset-0 bg-cover bg-center mix-blend-luminosity opacity-15 scale-105" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2000')` }} />
        <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle_at_top_left,#FFFFFF_1px,transparent_1px)] bg-[size:3rem_1.5rem]" />
        
        <div className="max-w-5xl space-y-6 relative z-10">
          <div className="inline-flex items-center gap-2 border border-[#E5981A]/30 bg-white/5 backdrop-blur-sm px-4 py-2 rounded-full text-xs font-bold tracking-widest text-[#E5981A] uppercase">
            STACK DEPLOYMENT & ECOSYSTEMS
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.1]">
            Technology Partners & <br />
            <span className="text-[#E5981A]">Software Collaborations</span>
          </h1>
          <p className="text-slate-200 text-lg md:text-xl max-w-3xl leading-relaxed font-normal">
            Co-building secure processing pipelines, rugged point-of-sale terminal software, and scalable ledger architectures.
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-20 relative z-20 -mt-10">
        <div className="space-y-8">
          
          {/* Main Context Panel */}
          <div className="bg-white border border-slate-200 p-8 md:p-12 rounded-3xl shadow-xl text-left grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-3">
              <span className="text-xs font-bold text-[#A62626] uppercase tracking-widest">Unified Core Architecture</span>
              <h2 className="text-3xl font-bold tracking-tight">Interoperable Protocol Stacks</h2>
              <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                We work side-by-side with global infrastructure and hardware OEM giants. By integrating physical security standards, hardened local client software, and cloud telemetry, we create a secure and highly responsive pipeline for mass economic collections.
              </p>
            </div>
            <div className="lg:col-span-4 lg:text-right">
              <Link href="/contact?ref=tech-partner" className="inline-block bg-[#0A2540] hover:bg-slate-900 text-white font-bold text-xs uppercase px-8 py-4 rounded-xl shadow-md transition-all">
                Review Developer Specs
              </Link>
            </div>
          </div>

          {/* Subfeatures Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
            <div className="bg-white border border-slate-200 p-8 rounded-2xl shadow-lg space-y-4">
              <h3 className="font-bold text-lg text-[#0A2540]">OEM Smart POS Firmware</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                Co-developing sandboxed native apps for terminal hardware to manage rapid device scanning and encrypt cryptographic receipts at the physical point of transaction.
              </p>
            </div>
            <div className="bg-white border border-slate-200 p-8 rounded-2xl shadow-lg space-y-4">
              <h3 className="font-bold text-lg text-[#0A2540]">Cloud Database Telemetry</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                Building highly scalable pipeline layers that parse millions of data points instantly, keeping system registries consistent without slowing performance.
              </p>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}