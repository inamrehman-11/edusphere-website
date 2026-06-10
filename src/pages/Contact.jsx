import React, { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    
    // Professional submission animation simulation
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Auto dismiss success banner after 4 seconds
      setTimeout(() => setSubmitted(false), 4000);
    }, 1200);
  };

  return (
    <div className="pt-32 pb-24 min-h-screen bg-slate-50 antialiased selection:bg-indigo-500 selection:text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Upper Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-xs font-extrabold text-indigo-600 uppercase tracking-widest bg-indigo-50 border border-indigo-100 px-4 py-1.5 rounded-full inline-block shadow-sm">
            Connect With Us
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-slate-950 mt-4 tracking-tight leading-none">
            Let's Start a Conversation
          </h1>
          <p className="text-lg text-slate-600 mt-4 font-medium leading-relaxed">
            Have questions about admissions, modules, or pricing tracks? Drop us a line and our academic relations team will guide you.
          </p>
        </div>

        {/* Master Layout Grid split into Information Panel and Modern Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* LEFT SIDE: Premium Information Hub (5 Columns) */}
          <div className="lg:col-span-5 bg-gradient-to-br from-indigo-900 via-slate-900 to-black text-slate-200 rounded-3xl p-8 sm:p-10 shadow-2xl relative overflow-hidden flex flex-col justify-between border border-slate-800">
            {/* Ambient Background Glows */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-600/20 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-violet-600/10 rounded-full blur-3xl -ml-10 -mb-10 pointer-events-none" />
            
            <div className="space-y-10 relative z-10">
              <div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">Campus Contact Hub</h2>
                <p className="text-indigo-200/70 text-sm mt-2 font-medium">Reach out via direct channels or visit our central office.</p>
              </div>

              {/* Secure Inline SVG Informational rows */}
              <div className="space-y-8">
                {/* Row 1: Location */}
                <div className="flex items-start space-x-5 group">
                  <div className="p-3.5 bg-white/5 border border-white/10 rounded-2xl text-indigo-400 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300 shadow-inner">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-sm uppercase tracking-wider text-indigo-300">Main Campus</h4>
                    <p className="text-sm text-slate-300 mt-1 font-medium">Model Town Extension, Lahore, Pakistan</p>
                  </div>
                </div>

                {/* Row 2: Phone */}
                <div className="flex items-start space-x-5 group">
                  <div className="p-3.5 bg-white/5 border border-white/10 rounded-2xl text-indigo-400 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300 shadow-inner">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-sm uppercase tracking-wider text-indigo-300">Call Center</h4>
                    <p className="text-sm text-slate-300 mt-1 font-medium">+92 42 111 222 333</p>
                  </div>
                </div>

                {/* Row 3: Email */}
                <div className="flex items-start space-x-5 group">
                  <div className="p-3.5 bg-white/5 border border-white/10 rounded-2xl text-indigo-400 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300 shadow-inner">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 002-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-sm uppercase tracking-wider text-indigo-300">Support Mail</h4>
                    <p className="text-sm text-slate-300 mt-1 font-medium">info@edusphere.edu</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom SLA disclaimer token */}
            <div className="border-t border-white/10 pt-6 mt-10 lg:mt-0 flex items-center space-x-3 text-xs font-semibold text-slate-400 relative z-10">
              <svg className="w-4 h-4 text-indigo-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Response Turnaround Time SLA: Within 24 Hours</span>
            </div>
          </div>

          {/* RIGHT SIDE: Interactive Dynamic Client Intake Form (7 Columns) */}
          <div className="lg:col-span-7 bg-white rounded-3xl shadow-xl border border-slate-100 p-8 sm:p-10 flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 tracking-tight">Send a Direct Message</h3>
              <p className="text-slate-500 text-sm mt-1 font-medium">Complete the verified payload below to interface with administration.</p>
            </div>

            {/* Dynamic Interactive Success Toast */}
            {submitted && (
              <div className="my-6 p-4 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-2xl flex items-center space-x-3 text-sm font-semibold shadow-sm transition-all duration-300">
                <svg className="w-5 h-5 text-emerald-600 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Thank you! Your academic transmission has been routed to our student desk.</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6 mt-8">
              {/* Row: Name and Email Split */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">Your Name</label>
                  <input 
                    type="text" 
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    placeholder="e.g. Inam Ahmed" 
                    className="w-full bg-slate-50/80 border border-slate-200/80 rounded-xl px-4 py-3.5 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:bg-white transition-all text-sm font-medium"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">Email Address</label>
                  <input 
                    type="email" 
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    placeholder="name@example.com" 
                    className="w-full bg-slate-50/80 border border-slate-200/80 rounded-xl px-4 py-3.5 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:bg-white transition-all text-sm font-medium"
                  />
                </div>
              </div>

              {/* Field: Subject */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">Contact Number</label>
                <input 
                  type="text" 
                  required
                  value={formData.subject}
                  onChange={(e) => setFormData({...formData, subject: e.target.value})}
                  placeholder="Enter your contact number" 
                  className="w-full bg-slate-50/80 border border-slate-200/80 rounded-xl px-4 py-3.5 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:bg-white transition-all text-sm font-medium"
                />
              </div>

              {/* Field: Message */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">Message</label>
                <textarea 
                  required
                  rows="5"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  placeholder="Describe your request..." 
                  className="w-full bg-slate-50/80 border border-slate-200/80 rounded-xl px-4 py-3.5 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:bg-white transition-all text-sm font-medium resize-none"
                />
              </div>

              {/* Premium Stateful Button */}
              <button 
                type="submit" 
                disabled={loading}
                className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-4 px-6 rounded-xl transition-all shadow-xl shadow-indigo-600/10 hover:shadow-indigo-600/30 text-sm active:scale-[0.99] disabled:bg-indigo-400 flex items-center justify-center space-x-2"
              >
                {loading ? (
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                ) : (
                  <>
                    <span>Dispatch Message</span>
                    <svg className="w-4 h-4 transform group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </>
                )}
              </button>
            </form>
          </div>

        </div>

      </div>
    </div>
  );
}