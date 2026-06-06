// src/app/partnerships/become-a-partner/page.tsx
'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function BecomeAPartnerPage() {
  const [profileType, setProfileType] = useState<'business' | 'personal'>('business');
  const [selectedCategory, setSelectedCategory] = useState('Category A');
  const [submitted, setSubmitted] = useState(false);

  const categories = [
    { code: 'Category A', title: 'Exclusive Partner', limit: '₦10 Million and above' },
    { code: 'Category B', title: 'Investment Partner', limit: '₦5 Million and above' },
    { code: 'Category C', title: 'Professional Partner', limit: '₦3 Million and above' },
    { code: 'Category D', title: 'Technical Partner', limit: '₦2 Million and above' },
    { code: 'Category E', title: 'Business Partner', limit: '₦1 Million and above' },
    { code: 'Category F', title: 'Project Partner 1', limit: '₦500,000 and above' },
    { code: 'Category G', title: 'Project Partner 2', limit: '₦250,000 and above' },
    { code: 'Category H', title: 'Project Partner 3', limit: '₦100,000 and above' },
    { code: 'Category I', title: 'Project Partner 4', limit: '₦50,000 and above' },
    { code: 'Category J', title: 'Project Partner 5', limit: '₦25,000 and above' },
  ];

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="min-h-screen bg-[#F8FAFC] text-[#1C1F61] overflow-x-hidden selection:bg-[#F48B25]/30 selection:text-[#1C1F61] font-['Calibri',Calibri,Segoe_UI,sans-serif]">
      
      {/* HERO BANNER – brand colors, unique partnership image */}
      <section className="relative bg-[#1C1F61] text-white w-full overflow-hidden flex items-center min-h-[50vh] sm:min-h-0">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070"
            alt="Partnership registration"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1C1F61]/80 via-[#1C1F61]/75 to-[#1C1F61]/80 sm:bg-gradient-to-r sm:from-[#1C1F61]/80 sm:via-[#1C1F61]/70 sm:to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1C1F61]/70 via-transparent to-transparent" />
        </div>

        <div className="relative z-20 w-full max-w-7xl mx-auto px-6 md:px-12 py-12 sm:py-16 md:py-20">
          <div className="max-w-3xl space-y-4 sm:space-y-5">
            <div className="inline-flex">
              <div className="inline-flex items-center gap-1.5 border border-[#F48B25]/40 bg-[#F48B25]/10 backdrop-blur-sm px-2.5 py-1 sm:px-3 rounded-full text-[9px] sm:text-[10px] font-bold tracking-wider text-[#F48B25] uppercase">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#F48B25] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#F48B25]"></span>
                </span>
                Partnership Gateway
              </div>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-[1.2] text-white">
              Become a Partner <br />
              <span className="text-[#F48B25]">Join the ERS Network</span>
            </h1>
            <p className="text-slate-200 text-sm sm:text-base md:text-lg max-w-3xl leading-relaxed">
              Complete the form below to register your interest. Our partnership team will review your application and contact you within two business days.
            </p>
            <div className="pt-2 flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Link href="#partner-form" className="group relative bg-[#F48B25] hover:bg-[#f59b3a] text-[#1C1F61] font-bold text-xs sm:text-sm md:text-base px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl shadow-lg shadow-[#F48B25]/25 transition-all duration-300 text-center hover:-translate-y-0.5 active:translate-y-0 overflow-hidden w-full sm:w-auto">
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Start Application
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

      {/* Partner Application Form */}
      <div id="partner-form" className="max-w-4xl mx-auto px-6 md:px-12 py-16 relative z-20 -mt-6 sm:-mt-8">
        <div className="bg-white rounded-3xl border border-slate-200 shadow-2xl overflow-hidden grid grid-cols-1 md:grid-cols-12">
          
          {/* Registration Guidelines Side Panel */}
          <div className="md:col-span-5 bg-[#1C1F61] text-white p-8 md:p-10 flex flex-col justify-between relative">
            <div className="absolute inset-0 opacity-5 bg-[linear-gradient(to_right,#FFF_1px,transparent_1px),linear-gradient(to_bottom,#FFF_1px,transparent_1px)] bg-[size:1.5rem_1.5rem]" />
            
            <div className="relative z-10 space-y-6">
              <span className="text-[10px] font-bold text-[#F48B25] uppercase tracking-widest border border-[#F48B25]/30 px-3 py-1 rounded-full bg-[#F48B25]/10">
                REGISTRAR DESK
              </span>
              <h2 className="text-2xl font-bold tracking-tight">ERS Partnership Ingestion Form</h2>
              <p className="text-slate-300 text-sm leading-relaxed">
                Prospective ERS partners are required to select their preferred operational partnership category and complete the alignment form.
              </p>
              <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-xs text-slate-300 space-y-2">
                <p className="font-bold text-[#F48B25]">Induction Protocol:</p>
                <p>Following application processing and verification framework confirmation, partner entities will receive a receipt and category certificate, alongside official launch induction.</p>
              </div>
            </div>

            <div className="relative z-10 pt-8 border-t border-white/10 text-xs text-slate-400 space-y-1">
              <p className="font-bold text-white">ERS Technologies Ltd</p>
              <p>Flat 3, Popalcy Court Katampe, Abuja, FCT</p>
              <p>erstechnologies7@gmail.com</p>
            </div>
          </div>

          {/* Dynamic Entry Form Panel */}
          <div className="md:col-span-7 p-8 md:p-10">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center space-y-4 py-12">
                <div className="h-12 w-12 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center font-bold text-xl">✓</div>
                <h3 className="text-xl font-bold text-[#1C1F61]">Parameters Ingested</h3>
                <p className="text-slate-600 text-sm max-w-sm leading-relaxed">
                  Your intake profile data metrics have been recorded. A framework configuration representative will contact you via your secure email node shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-6">
                
                {/* Type Toggle Slider */}
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-400">Profile Block Selection</label>
                  <div className="grid grid-cols-2 gap-2 bg-slate-100 p-1 rounded-xl">
                    <button type="button" onClick={() => setProfileType('business')} className={`py-2 text-xs font-bold rounded-lg transition-all ${profileType === 'business' ? 'bg-white shadow-sm text-[#1C1F61]' : 'text-slate-500 hover:text-slate-800'}`}>
                      Business Data
                    </button>
                    <button type="button" onClick={() => setProfileType('personal')} className={`py-2 text-xs font-bold rounded-lg transition-all ${profileType === 'personal' ? 'bg-white shadow-sm text-[#1C1F61]' : 'text-slate-500 hover:text-slate-800'}`}>
                      Personal Data
                    </button>
                  </div>
                </div>

                {/* Data Fields */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {profileType === 'business' ? (
                    <>
                      <div className="space-y-1.5 sm:col-span-2">
                        <label className="text-xs font-bold text-slate-700">Name of Company or Office</label>
                        <input required type="text" className="w-full text-sm border border-slate-200 rounded-xl px-4 py-2.5 focus:outline-none focus:border-[#F48B25] focus:ring-1 focus:ring-[#F48B25]" placeholder="Corporate entity name" />
                      </div>
                      <div className="space-y-1.5 sm:col-span-2">
                        <label className="text-xs font-bold text-slate-700">Your Position</label>
                        <input required type="text" className="w-full text-sm border border-slate-200 rounded-xl px-4 py-2.5 focus:outline-none focus:border-[#F48B25] focus:ring-1 focus:ring-[#F48B25]" placeholder="e.g. Managing Director" />
                      </div>
                    </>
                  ) : (
                    <div className="space-y-1.5 sm:col-span-2">
                      <label className="text-xs font-bold text-slate-700">Full Name</label>
                      <input required type="text" className="w-full text-sm border border-slate-200 rounded-xl px-4 py-2.5 focus:outline-none focus:border-[#F48B25] focus:ring-1 focus:ring-[#F48B25]" placeholder="Surname First" />
                    </div>
                  )}

                  <div className="space-y-1.5 sm:col-span-2">
                    <label className="text-xs font-bold text-slate-700">Address</label>
                    <input required type="text" className="w-full text-sm border border-slate-200 rounded-xl px-4 py-2.5 focus:outline-none focus:border-[#F48B25] focus:ring-1 focus:ring-[#F48B25]" placeholder="Complete physical address" />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700">Phone Number</label>
                    <input required type="tel" className="w-full text-sm border border-slate-200 rounded-xl px-4 py-2.5 focus:outline-none focus:border-[#F48B25] focus:ring-1 focus:ring-[#F48B25]" placeholder="07049079078" />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700">Email Address</label>
                    <input required type="email" className="w-full text-sm border border-slate-200 rounded-xl px-4 py-2.5 focus:outline-none focus:border-[#F48B25] focus:ring-1 focus:ring-[#F48B25]" placeholder="secure@email.com" />
                  </div>
                </div>

                {/* Category Dropdown */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700">Category of Partnership Chosen</label>
                  <select 
                    value={selectedCategory} 
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="w-full text-sm border border-slate-200 rounded-xl px-4 py-3 bg-white focus:outline-none focus:border-[#F48B25] focus:ring-1 focus:ring-[#F48B25] font-medium"
                  >
                    {categories.map((cat) => (
                      <option key={cat.code} value={cat.code}>
                        {cat.code} — {cat.title} ({cat.limit})
                      </option>
                    ))}
                  </select>
                </div>

                {/* Amount Explicit Input */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700">Amount Involved (₦)</label>
                  <input required type="text" className="w-full text-sm border border-slate-200 font-mono font-bold bg-slate-50 text-[#1C1F61] rounded-xl px-4 py-2.5 focus:outline-none focus:border-[#F48B25] focus:ring-1 focus:ring-[#F48B25]" placeholder="Specify amount match tier limit" />
                </div>

                <button type="submit" className="w-full bg-[#1C1F61] hover:bg-[#CF1B1B] text-white font-bold text-xs uppercase tracking-wider py-4 rounded-xl shadow-md transition-all">
                  Transmit Registration Parameters
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}