'use client';

import React, { useState } from 'react';
import { FileText, Wand2, Check, AlertCircle, ArrowLeft, Copy, Download, RefreshCw, Globe } from 'lucide-react';
import Link from 'next/link';

export default function ResumeOptimizerPage() {
  const [isOptimizing, setIsOptimizing] = useState(false);
  const [step, setStep] = useState<'input' | 'results'>('input');
  
  const [resumeText, setResumeText] = useState(
    "Experience:\n\nSenior Copywriter, AdAgency (2018-2023)\n- Wrote blog posts and social media copy for B2B clients.\n- Managed a team of 3 junior writers.\n- Proofread content for grammar and tone.\n- Used SEO tools to improve ranking."
  );

  const [optimizedResult, setOptimizedResult] = useState<{ analysis: string, optimizedContent: string } | null>(null);

  const handleOptimize = async () => {
    setIsOptimizing(true);
    
    try {
      // Mock API call simulation if real API fails or isn't set up
      // Replace this block with the real fetch call if you have the API route working
      setTimeout(() => {
          setOptimizedResult({
              analysis: "We've reframed your writing experience as 'content engineering' and highlighted your use of data-driven tools (SEO) as a proxy for algorithmic logic. This aligns better with prompt engineering requirements.",
              optimizedContent: "AI Content & Prompt Specialist (Formerly Senior Copywriter)\nAdAgency | 2018 - 2023\n\n- Engineered a library of 50+ system prompts for GPT-4 to automate first-draft generation for B2B blogs.\n- Led a 'Human-in-the-Loop' QA process, training 3 junior writers to evaluate and refine AI outputs using RLHF principles.\n- Utilized data-driven SEO tools to optimize content structure, demonstrating logic-based content strategy."
          });
          setStep('results');
          setIsOptimizing(false);
      }, 2000);

    } catch (error) {
      console.error(error);
      setIsOptimizing(false);
    }
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
        
        {/* NEW BUTTON: Direct Access to Live Resume */}
        <div className="flex items-center gap-3">
            <Link href="/resume/live" className="flex items-center gap-2 px-4 py-2 text-slate-600 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 hover:text-blue-600 transition text-sm font-bold shadow-sm">
                <Globe size={16} /> View Live Resume
            </Link>
            <div className="hidden md:flex items-center gap-2 px-3 py-1 bg-purple-50 text-purple-700 text-sm font-bold rounded-full border border-purple-100">
                <Wand2 size={14} />
                <span>Target: AI Prompt Engineer</span>
            </div>
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
                      <RefreshCw size={20} className="animate-spin" /> Analyzing...
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

        {step === 'results' && optimizedResult && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 h-[calc(100vh-140px)]">
              
              {/* LEFT: Analysis */}
              <div className="space-y-6 overflow-y-auto pr-2">
                <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                  <h2 className="text-xl font-bold text-slate-900 mb-6">Optimization Report</h2>
                  
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 rounded-full border-4 border-green-500 flex items-center justify-center text-xl font-bold text-green-700 bg-green-50">
                      95
                    </div>
                    <div>
                      <p className="font-bold text-slate-900">Match Score</p>
                      <p className="text-sm text-slate-500">Your profile now signals high-value technical skills.</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="p-4 bg-green-50 rounded-lg border border-green-100">
                      <h4 className="flex items-center gap-2 font-bold text-green-700 mb-2">
                        <Check size={16} /> AI Insight
                      </h4>
                      <p className="text-sm text-green-800 leading-relaxed">
                        {optimizedResult.analysis}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-purple-600 to-blue-600 p-6 rounded-xl text-white shadow-lg">
                   <h3 className="font-bold text-lg mb-2">Next Step</h3>
                   <p className="text-blue-100 text-sm leading-relaxed mb-4">
                     Now that your resume is optimized, publish it to your live profile or practice your narrative.
                   </p>
                   <div className="flex gap-3">
                     <Link href="/resume/live" className="px-4 py-2 bg-white text-blue-700 font-bold rounded-lg hover:bg-blue-50 transition text-sm flex items-center gap-2">
                        <Globe size={16} /> Publish Live
                     </Link>
                     <Link href="/interview" className="px-4 py-2 bg-blue-700 text-white font-bold rounded-lg hover:bg-blue-800 transition text-sm">
                        Practice Interview
                     </Link>
                   </div>
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
                <div className="flex-1 p-8 bg-white font-mono text-sm leading-relaxed overflow-y-auto text-slate-800 whitespace-pre-wrap">
                  {optimizedResult.optimizedContent}
                </div>
              </div>

            </div>
          </div>
        )}

      </main>
    </div>
  );
}