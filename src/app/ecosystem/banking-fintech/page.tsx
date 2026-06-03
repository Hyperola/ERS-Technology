import Link from 'next/link';

export default function ComplianceEnforcementLayerPage() {
  return (
    <main className="min-h-screen bg-[#F8FAFC] text-[#0A2540] overflow-x-hidden selection:bg-[#E5981A]/30 selection:text-[#0A2540] font-['Calibri',Calibri,Segoe_UI,sans-serif]">
      {/* Hero Section */}
      <section className="relative bg-[#0A2540] text-white py-24 px-6 md:px-12 lg:px-24 flex flex-col justify-center min-h-[50vh] overflow-hidden text-left">
        <div className="absolute inset-0 bg-cover bg-center mix-blend-luminosity opacity-10 scale-105" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2000')` }} />
        <div className="absolute inset-0 opacity-5 bg-[linear-gradient(135deg,#FFFFFF_2px,transparent_2px)] bg-[size:4rem_4rem]" />
        
        <div className="max-w-5xl space-y-6 relative z-10">
          <div className="inline-flex items-center gap-2 border border-[#A62626]/40 bg-white/5 backdrop-blur-sm px-4 py-2 rounded-full text-xs font-bold tracking-widest text-[#E5981A] uppercase">
            RULES & PROTECTION
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.1]">
            Compliance & <br />
            <span className="text-[#E5981A]">Operational Enforcement</span>
          </h1>
          <p className="text-slate-200 text-lg md:text-xl max-w-3xl leading-relaxed font-normal">
            Continuous activity checks, secure device auditing, and digital logs to make sure your field collections follow all local laws and rules perfectly.
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-20 relative z-20 -mt-10">
        <div className="bg-white border border-slate-200 rounded-3xl p-8 lg:p-12 shadow-xl text-left grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          <div className="lg:col-span-5 space-y-4">
            <span className="text-xs font-bold text-[#A62626] uppercase tracking-widest block">Safe Operating Rules</span>
            <h3 className="text-3xl font-bold text-[#0A2540] tracking-tight">Keeping Field Operations Honest</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Our built-in enforcement system automatically checks user actions out on the field. It records permanent, step-by-step logs of every single transaction so you can instantly verify that your collection teams are working honestly and following your exact instructions.
            </p>
            <div className="pt-4">
              <Link href="/contact" className="inline-block bg-[#0A2540] hover:bg-[#0A2540]/90 text-white font-bold text-xs uppercase px-6 py-3 rounded-xl transition-all">
                Talk to Our Security Team &rarr;
              </Link>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6 lg:border-l lg:border-slate-100 lg:pl-8">
            <div className="space-y-1">
              <h4 className="font-bold text-[#0A2540] text-base">Unchangeable Audit Trails</h4>
              <p className="text-slate-500 text-sm leading-relaxed">Our platform creates permanent, digital records of every action taken on our devices, making it incredibly simple for management teams to perform quick security reviews anytime.</p>
            </div>
            <div className="space-y-1">
              <h4 className="font-bold text-[#0A2540] text-base">Smart Fraud Prevention</h4>
              <p className="text-slate-500 text-sm leading-relaxed">The system instantly flags suspicious field habits or unapproved equipment, blocking problematic users right away to keep your collections completely safe.</p>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}