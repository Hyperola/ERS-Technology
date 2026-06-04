// src/app/contact/page.tsx
'use client';

import React, { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    organization: '',
    designation: '',
    interestSector: 'General Infrastructure Inquiry',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle enterprise integration or secure email dispatch logic here
    console.log('Secure Contact Submission:', formData);
  };

  return (
    <main className="min-h-screen bg-[#F8FAFC] text-[#1C1F61] antialiased font-['Calibri',Calibri,Segoe_UI,sans-serif]">
      
      {/* Hero Section – brand colors */}
      <section className="relative bg-[#1C1F61] text-white w-full overflow-hidden flex items-center min-h-[50vh] sm:min-h-0">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070"
            alt="Contact ERS"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1C1F61]/95 via-[#1C1F61]/95 to-[#1C1F61]/95 sm:bg-gradient-to-r sm:from-[#1C1F61]/95 sm:via-[#1C1F61]/85 sm:to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1C1F61]/90 via-transparent to-transparent" />
        </div>

        <div className="relative z-20 w-full max-w-7xl mx-auto px-6 md:px-12 py-12 sm:py-16 md:py-20 lg:py-24">
          <div className="max-w-3xl space-y-4 sm:space-y-5">
            <div className="inline-flex">
              <div className="inline-flex items-center gap-1.5 border border-[#F48B25]/40 bg-[#F48B25]/10 backdrop-blur-sm px-2.5 py-1 sm:px-3 rounded-full text-[9px] sm:text-[10px] font-bold tracking-wider text-[#F48B25] uppercase">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#F48B25] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#F48B25]"></span>
                </span>
                ERS Engagement Desk
              </div>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-[1.2] text-white">
              Connect with Our <br />
              <span className="text-[#F48B25]">Infrastructure Team</span>
            </h1>
            <p className="text-slate-200 text-sm sm:text-base md:text-lg max-w-2xl leading-relaxed">
              Initiate institutional onboarding, deploy secure revenue systems, or request vetted blueprints for municipal and state transit operations.
            </p>
          </div>
        </div>
      </section>

      {/* Form & Information Grid */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-12 sm:py-16 relative z-20 -mt-6 sm:-mt-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column – Institutional Vetting Info */}
          <div className="lg:col-span-5 space-y-8">
            <div className="border-l-4 border-[#CF1B1B] pl-5 space-y-3">
              <span className="text-xs font-bold text-[#CF1B1B] uppercase tracking-widest">Operational Clearance</span>
              <h2 className="text-2xl font-extrabold tracking-tight text-[#1C1F61]">Enterprise Onboarding</h2>
              <p className="text-slate-600 text-sm leading-relaxed">
                Ethical Recovery System Technologies Ltd partners strictly with verified government agencies, labor unions, corporate clearing houses, and structured market councils.
              </p>
            </div>

            {/* Security Notice Card */}
            <div className="bg-white border border-slate-200/80 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#F48B25]/10 flex items-center justify-center shrink-0">
                  <svg className="w-4 h-4 text-[#F48B25]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="font-bold text-sm text-[#1C1F61] uppercase tracking-wider">Secure Analytics & Specs Desk</h3>
              </div>
              <p className="text-xs text-slate-500 leading-relaxed">
                Full visual proposals, transaction split frameworks, and architectural pilot specs for state ecosystems remain strictly restricted. To request authenticated administrative access, please utilize the secure clearance selector in the form.
              </p>
            </div>

            {/* Quick Contact Matrix */}
            <div className="space-y-4 pt-4">
              <div className="flex items-start gap-4">
                <div className="text-slate-400 mt-1">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">Institutional Channels</h4>
                  <p className="text-sm font-semibold text-[#1C1F61] mt-0.5">desk@ers-technology.com</p>
                  <p className="text-xs text-slate-500">Expected response timeline: Under 12 business hours.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column – Vetted Interactive Form */}
          <div className="lg:col-span-7 bg-white border border-slate-200/80 rounded-2xl p-6 sm:p-10 shadow-md hover:shadow-xl transition-all duration-300">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Full Name */}
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-500">Official Full Name</label>
                  <input 
                    type="text" 
                    required
                    placeholder="e.g., Ibrahim Adebayo"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:bg-white focus:border-[#1C1F61] focus:ring-1 focus:ring-[#1C1F61] transition-all outline-none"
                    value={formData.fullName}
                    onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                  />
                </div>
                {/* Email */}
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-500">Corporate / Official Email</label>
                  <input 
                    type="email" 
                    required
                    placeholder="name@organization.gov.ng"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:bg-white focus:border-[#1C1F61] focus:ring-1 focus:ring-[#1C1F61] transition-all outline-none"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Organization */}
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-500">Institution / Organization</label>
                  <input 
                    type="text" 
                    required
                    placeholder="e.g., State Board of Internal Revenue"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:bg-white focus:border-[#1C1F61] focus:ring-1 focus:ring-[#1C1F61] transition-all outline-none"
                    value={formData.organization}
                    onChange={(e) => setFormData({...formData, organization: e.target.value})}
                  />
                </div>
                {/* Designation */}
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-500">Designation / Official Role</label>
                  <input 
                    type="text" 
                    required
                    placeholder="e.g., Director of Transport Logistics"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:bg-white focus:border-[#1C1F61] focus:ring-1 focus:ring-[#1C1F61] transition-all outline-none"
                    value={formData.designation}
                    onChange={(e) => setFormData({...formData, designation: e.target.value})}
                  />
                </div>
              </div>

              {/* Interest Sector Dropdown */}
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-500">Scope of Interest / Request</label>
                <div className="relative">
                  <select 
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:bg-white focus:border-[#1C1F61] focus:ring-1 focus:ring-[#1C1F61] transition-all outline-none appearance-none cursor-pointer"
                    value={formData.interestSector}
                    onChange={(e) => setFormData({...formData, interestSector: e.target.value})}
                  >
                    <option value="General Infrastructure Inquiry">General Infrastructure Inquiry</option>
                    <option value="Revenue Automation Deployment">Revenue Automation System Deployment</option>
                    <option value="FCT Transport Ecosystem Abstract">Request Abstract Specs: FCT Urban Transit Network</option>
                    <option value="Satellite Corridors Abstract">Request Abstract Specs: Gwagwalada/Bwari/Kuje Corridor</option>
                    <option value="Abia State Visuals Evaluation">Request Evaluation Deck: Abia State Proposal</option>
                    <option value="Nasarawa State Visuals Evaluation">Request Evaluation Deck: Nasarawa State Proposal</option>
                    <option value="Developer API & Partner Gateway Integration">Developer API & Partner Gateway Integration</option>
                  </select>
                  <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-slate-400">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Message */}
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-500">Detailed Message / Context</label>
                <textarea 
                  rows={4}
                  required
                  placeholder="Outline any key timeline goals or operational criteria for your project alignment..."
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:bg-white focus:border-[#1C1F61] focus:ring-1 focus:ring-[#1C1F61] transition-all outline-none resize-none"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                />
              </div>

              {/* Submit Button – brand orange */}
              <button 
                type="submit"
                className="group relative w-full bg-[#F48B25] hover:bg-[#f59b3a] text-[#1C1F61] font-bold tracking-wider text-xs uppercase px-6 py-4 rounded-xl shadow-lg shadow-[#F48B25]/20 transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 overflow-hidden"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Submit Encrypted Request
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}