'use client';

import React, { useState } from 'react';
import { FileText, ArrowRight, Wand2, Check, AlertCircle, ArrowLeft, Download, Copy, RefreshCw } from 'lucide-react';
import Link from 'next/link';

export default function ResumeOptimizerPage() {
  const [isOptimizing, setIsOptimizing] = useState(false);
  const [step, setStep] = useState<'input' | 'results'>('input');
  const [resumeText, setResumeText] = useState(
    "Experience:\n\nSenior Copywriter, AdAgency (2018-2023)\n- Wrote blog posts and social media copy for B2B clients.\n- Managed a team of 3 junior writers.\n- Proofread content for grammar and tone.\n- Used SEO tools to improve ranking."
  );

  const handleOptimize = () => {
    setIsOptimizing(true);
    // Simulate AI processing time
    setTimeout(() => {
      setIsOptimizing(false);
      setStep('results');
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-white border-b border-slate-200 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link href="/dashboard" className="p-2 hover:bg-slate-100 rounded-lg transition text-slate-500">
            <ArrowLeft size={20} />
          </Link>
          <span className="font-bold text-lg">AI Resume Optimizer</span>
        </div>
        <div className="flex items-center gap-2 px-3 py-1 bg-purple-50 text-purple-700 text-sm font-bold rounded-full border border-purple-100">
          <Wand2 size={14} />
          <span>Target: AI Prompt Engineer</span>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-6 py-10">
        
        {step === 'input' && (
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <h1 className="text-3xl font-bold text-slate-900 mb-4">Transform Your Experience</h1>
              <p className="text-slate-500 text-lg">
                Paste your current resume bullet points below. Our AI will rewrite them to highlight transferable skills for the AI economy.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm relative">
              <label className="block text-sm font-bold text-slate-700 mb-3">Current Resume Content</label>
              <textarea 
                className="w-full h-64 p-4 bg-slate-50 border border-slate-200 rounded-xl text-slate-700 font-mono text-sm leading-relaxed outline-none focus:ring-2 focus:ring-purple-500 resize-none"
                value={resumeText}
                onChange={(e) => setResumeText(e.target.value)}
              ></textarea>
              
              <div className="mt-6 flex justify-end">
                <button 
                  onClick={handleOptimize}
                  disabled={isOptimizing}
                  className="px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-xl transition flex items-center gap-2 shadow-lg shadow-purple-200 disabled:opacity-70"
                >
                  {isOptimizing ? (
                    <>
                      <RefreshCw size={20} className="animate-spin" /> Optimizing...
                    </>
                  ) : (
                    <>
                      <Wand2 size={20} /> Generate AI Version
                    </>
                  )}
                </button>
              </div>
            </div>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
               <div className="p-4 bg-white rounded-xl border border-slate-100 shadow-sm">
                  <div className="w-10 h-10 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-3"><Check size={20} /></div>
                  <h3 className="font-bold text-slate-900">ATS Friendly</h3>
               </div>
               <div className="p-4 bg-white rounded-xl border border-slate-100 shadow-sm">
                  <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-3"><Wand2 size={20} /></div>
                  <h3 className="font-bold text-slate-900">Keyword Injection</h3>
               </div>
               <div className="p-4 bg-white rounded-xl border border-slate-100 shadow-sm">
                  <div className="w-10 h-10 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center mx-auto mb-3"><FileText size={20} /></div>
                  <h3 className="font-bold text-slate-900">Action Oriented</h3>
               </div>
            </div>
          </div>
        )}

        {step === 'results' && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 h-[calc(100vh-140px)]">
              
              {/* LEFT: Analysis */}
              <div className="space-y-6 overflow-y-auto pr-2">
                <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                  <h2 className="text-xl font-bold text-slate-900 mb-6">Optimization Report</h2>
                  
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 rounded-full border-4 border-green-500 flex items-center justify-center text-xl font-bold text-green-700 bg-green-50">
                      92
                    </div>
                    <div>
                      <p className="font-bold text-slate-900">Match Score</p>
                      <p className="text-sm text-slate-500">Your profile now strongly signals "AI Prompt Engineer"</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="p-4 bg-red-50 rounded-lg border border-red-100">
                      <h4 className="flex items-center gap-2 font-bold text-red-700 mb-2">
                        <AlertCircle size={16} /> Removed Weak Phrases
                      </h4>
                      <div className="flex flex-wrap gap-2">
                         <span className="px-2 py-1 bg-white border border-red-200 rounded text-xs text-red-600 line-through">Managed a team</span>
                         <span className="px-2 py-1 bg-white border border-red-200 rounded text-xs text-red-600 line-through">Proofread content</span>
                      </div>
                    </div>

                    <div className="p-4 bg-green-50 rounded-lg border border-green-100">
                      <h4 className="flex items-center gap-2 font-bold text-green-700 mb-2">
                        <Check size={16} /> Added High-Value Keywords
                      </h4>
                      <div className="flex flex-wrap gap-2">
                         <span className="px-2 py-1 bg-white border border-green-200 rounded text-xs text-green-700 font-bold">LLM Optimization</span>
                         <span className="px-2 py-1 bg-white border border-green-200 rounded text-xs text-green-700 font-bold">QA Testing</span>
                         <span className="px-2 py-1 bg-white border border-green-200 rounded text-xs text-green-700 font-bold">Prompt Iteration</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-purple-600 to-blue-600 p-6 rounded-xl text-white shadow-lg">
                   <h3 className="font-bold text-lg mb-2">Why this works</h3>
                   <p className="text-blue-100 text-sm leading-relaxed">
                     Recruiters for AI roles prioritize "iterative testing" and "logic" over "grammar" and "creative writing." We reframed your writing background as "Dataset Curation" and "Output Validation."
                   </p>
                </div>
              </div>

              {/* RIGHT: The New Resume */}
              <div className="bg-white border border-slate-200 rounded-xl shadow-lg flex flex-col h-full overflow-hidden">
                <div className="p-4 border-b border-slate-200 bg-slate-50 flex justify-between items-center">
                  <span className="font-bold text-slate-700 text-sm">Optimized_Resume_v1.txt</span>
                  <div className="flex gap-2">
                    <button className="p-2 hover:bg-white rounded-lg transition text-slate-500"><Copy size={16} /></button>
                    <button className="p-2 hover:bg-white rounded-lg transition text-slate-500"><Download size={16} /></button>
                  </div>
                </div>
                <div className="flex-1 p-8 bg-white font-mono text-sm leading-relaxed overflow-y-auto text-slate-800">
                  <p className="font-bold mb-4 text-lg">EXPERIENCE</p>
                  
                  <div className="mb-6">
                    <p className="font-bold">AI Content & Prompt Specialist (Formerly Senior Copywriter)</p>
                    <p className="text-slate-500 italic mb-2">AdAgency | 2018 - 2023</p>
                    <ul className="list-disc pl-5 space-y-2">
                      <li className="bg-green-50 p-1 -ml-1 rounded">Designed and iterated on high-volume text outputs for B2B campaigns, ensuring tone consistency and accuracy (Precursor to RLHF).</li>
                      <li>Led QA protocols for a team of 3, implementing style guidelines that reduced error rates by 15%.</li>
                      <li className="bg-green-50 p-1 -ml-1 rounded">Utilized data-driven SEO tools to optimize content structure, demonstrating logic-based content strategy.</li>
                      <li>Curated large-scale datasets (blog archives) for content restructuring initiatives.</li>
                    </ul>
                  </div>

                  <p className="font-bold mb-4 text-lg mt-8">SKILLS</p>
                  <p>Prompt Engineering (Zero-shot, Few-shot), Content Strategy, Dataset Curation, QA Validation, SEO Logic.</p>
                </div>
              </div>

            </div>
          </div>
        )}

      </main>
    </div>
  );
}