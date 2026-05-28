// src/app/solutions/monitoring-enforcement/page.tsx
import Link from 'next/link';

export default function MonitoringEnforcementPage() {
  return (
    <main className="min-h-screen bg-[#0B150F] text-white py-16 md:py-24 selection:bg-[#C5A059]/30">
      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-16">
        
        {/* Section Header */}
        <div className="space-y-4 max-w-4xl">
          <div className="text-xs font-mono font-black text-[#C5A059] uppercase tracking-widest flex items-center gap-2">
            <span>SOLUTIONS ARCHITECTURE</span>
            <span className="text-slate-600">/</span>
            <span className="text-slate-400">MODULE 04</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-black tracking-tight leading-tight">
            Revenue Monitoring & Enforcement
          </h1>
          <p className="text-slate-400 text-base font-light leading-relaxed">
            Real-time compliance tracking tools, mobile field verification apps, and auditing dashboards engineered 
            specifically to give state officers complete operational visibility and eliminate leaks.
          </p>
        </div>

        {/* Feature Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pt-4">
          <div className="bg-[#111E16] border border-slate-800 p-8 rounded-2xl space-y-4">
            <h3 className="text-lg font-bold text-slate-100">Live Field Auditing Infrastructure</h3>
            <p className="text-slate-400 text-xs font-light leading-relaxed">
              Provides regulatory field supervisors with intelligent mobile verification layers to instantly audit merchant 
              receipt credentials, field agent tracking records, and collection stamps on the spot.
            </p>
          </div>
          <div className="bg-[#111E16] border border-slate-800 p-8 rounded-2xl space-y-4">
            <h3 className="text-lg font-bold text-slate-100">Real-Time Leakage Alert Matrices</h3>
            <p className="text-slate-400 text-xs font-light leading-relaxed">
              Automated pattern monitoring anomalies immediately flag atypical collections, off-grid variances, or unauthorized transaction drops to central control centers.
            </p>
          </div>
        </div>

        {/* Action Call */}
        <div className="text-center max-w-2xl mx-auto pt-8">
          <Link href="/contact" className="inline-block bg-[#C5A059] text-[#111E16] font-black text-xs uppercase tracking-widest px-8 py-4 rounded-xl shadow-xl transition-transform active:scale-95">
            Access Command Control Overview
          </Link>
        </div>

      </div>
    </main>
  );
}