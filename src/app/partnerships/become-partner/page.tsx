"use client";

import { useState } from 'react';

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
    <main className="min-h-screen bg-[#F8FAFC] py-16 px-6 md:px-12 lg:px-24 text-[#0A2540] font-['Calibri',Calibri,Segoe_UI,sans-serif]">
      <div className="max-w-4xl mx-auto bg-white rounded-3xl border border-slate-200 shadow-2xl overflow-hidden grid grid-cols-1 md:grid-cols-12 text-left">
        
        {/* Registration Guidelines Side Panel */}
        <div className="md:col-span-5 bg-[#0A2540] text-white p-8 md:p-10 flex flex-col justify-between relative">
          <div className="absolute inset-0 opacity-5 bg-[linear-gradient(to_right,#FFF_1px,transparent_1px),linear-gradient(to_bottom,#FFF_1px,transparent_1px)] bg-[size:1.5rem_1.5rem]" />
          
          <div className="relative z-10 space-y-6">
            <span className="text-[10px] font-bold text-[#E5981A] uppercase tracking-widest border border-[#E5981A]/30 px-3 py-1 rounded-full bg-[#E5981A]/10">
              REGISTRAR DESK
            </span>
            <h2 className="text-2xl font-bold tracking-tight">ERS Partnership Ingestion Form</h2>
            <p className="text-slate-300 text-sm leading-relaxed">
              Prospective ERS partners are required to select their preferred operational partnership category and complete the alignment form.
            </p>
            <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-xs text-slate-300 space-y-2">
              <p className="font-bold text-[#E5981A]">Induction Protocol:</p>
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
              <h3 className="text-xl font-bold">Parameters Ingested</h3>
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
                  <button type="button" onClick={() => setProfileType('business')} className={`py-2 text-xs font-bold rounded-lg transition-all ${profileType === 'business' ? 'bg-white shadow-sm text-[#0A2540]' : 'text-slate-500 hover:text-slate-800'}`}>
                    Business Data
                  </button>
                  <button type="button" onClick={() => setProfileType('personal')} className={`py-2 text-xs font-bold rounded-lg transition-all ${profileType === 'personal' ? 'bg-white shadow-sm text-[#0A2540]' : 'text-slate-500 hover:text-slate-800'}`}>
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
                      <input required type="text" className="w-full text-sm border border-slate-200 rounded-xl px-4 py-2.5 focus:outline-none focus:border-[#E5981A]" placeholder="Corporate entity name" />
                    </div>
                    <div className="space-y-1.5 sm:col-span-2">
                      <label className="text-xs font-bold text-slate-700">Your Position</label>
                      <input required type="text" className="w-full text-sm border border-slate-200 rounded-xl px-4 py-2.5 focus:outline-none focus:border-[#E5981A]" placeholder="e.g. Managing Director" />
                    </div>
                  </>
                ) : (
                  <div className="space-y-1.5 sm:col-span-2">
                    <label className="text-xs font-bold text-slate-700">Full Name</label>
                    <input required type="text" className="w-full text-sm border border-slate-200 rounded-xl px-4 py-2.5 focus:outline-none focus:border-[#E5981A]" placeholder="Surname First" />
                  </div>
                )}

                <div className="space-y-1.5 sm:col-span-2">
                  <label className="text-xs font-bold text-slate-700">Address</label>
                  <input required type="text" className="w-full text-sm border border-slate-200 rounded-xl px-4 py-2.5 focus:outline-none focus:border-[#E5981A]" placeholder="Complete physical address" />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700">Phone Number</label>
                  <input required type="tel" className="w-full text-sm border border-slate-200 rounded-xl px-4 py-2.5 focus:outline-none focus:border-[#E5981A]" placeholder="07049079078" />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700">Email Address</label>
                  <input required type="email" className="w-full text-sm border border-slate-200 rounded-xl px-4 py-2.5 focus:outline-none focus:border-[#E5981A]" placeholder="secure@email.com" />
                </div>
              </div>

              {/* Category Dropdown */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700">Category of Partnership Chosen</label>
                <select 
                  value={selectedCategory} 
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full text-sm border border-slate-200 rounded-xl px-4 py-3 bg-white focus:outline-none focus:border-[#E5981A] font-medium"
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
                <input required type="text" className="w-full text-sm border border-slate-200 font-mono font-bold bg-slate-50 text-[#0A2540] rounded-xl px-4 py-2.5 focus:outline-none focus:border-[#E5981A]" placeholder="Specify amount match tier limit" />
              </div>

              <button type="submit" className="w-full bg-[#0A2540] hover:bg-slate-900 text-white font-bold text-xs uppercase tracking-wider py-4 rounded-xl shadow-md transition-all">
                Transmit Registration Parameters
              </button>
            </form>
          )}
        </div>
      </div>
    </main>
  );
}