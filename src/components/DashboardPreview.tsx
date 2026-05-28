// src/components/DashboardPreview.tsx
"use client";

import { useState } from "react";

export default function DashboardPreview() {
  const [imgFailed, setImgFailed] = useState(false);

  return (
    <div className="relative aspect-[4/3] w-full rounded-2xl bg-[#0F1C14] overflow-hidden shadow-2xl border border-white/5">
      
      {/* High-Resolution Dynamic Image Mask Area */}
      {!imgFailed && (
        <img 
          src="/images/ers-platform-preview.png" 
          alt="ERS Live Central Remittance Tracking Dashboard Interface" 
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.06] z-10"
          onError={() => setImgFailed(true)}
        />
      )}

      {/* Micro-UI Fallback Architecture Canvas (Visible instantly or if image fails) */}
      <div className="w-full h-full flex flex-col justify-between p-6 pointer-events-none z-0 relative bg-gradient-to-b from-[#111E16] to-[#0B150F]">
        <div className="flex items-center justify-between border-b border-white/10 pb-4">
          <div className="space-y-1.5">
            <div className="h-2 w-24 bg-white/20 rounded-xs" />
            <div className="h-3 w-36 bg-ers-gold/40 rounded-xs" />
          </div>
          <div className="h-6 w-20 bg-ers-gold/20 border border-ers-gold/30 rounded-full" />
        </div>
        
        <div className="grid grid-cols-3 gap-4 my-auto">
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-white/5 border border-white/10 p-4 rounded-xl space-y-3">
              <div className="h-1.5 w-1/2 bg-white/20 rounded-xs" />
              <div className="h-3 w-5/6 bg-ers-gold/10 rounded-xs" />
              <div className="h-1 w-full bg-white/10 rounded-xs" />
            </div>
          ))}
        </div>
        
        <div className="space-y-2.5 pt-4 border-t border-white/5">
          <div className="h-1.5 w-full bg-white/10 rounded-xs" />
          <div className="h-1.5 w-4/5 bg-white/10 rounded-xs" />
        </div>
      </div>

    </div>
  );
}