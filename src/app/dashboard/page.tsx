'use client';

import React, { useState } from 'react';
import { LayoutDashboard, BookOpen, Briefcase, User, LogOut, AlertTriangle, TrendingUp, ArrowRight, Loader2, Users, FileText, Mic, FolderPlus } from 'lucide-react';
import Link from 'next/link';

export default function DashboardPage() {
  const [step, setStep] = useState<'input' | 'loading' | 'results'>('input');
  const [jobTitle, setJobTitle] = useState('');
  const [riskData, setRiskData] = useState<any>(null);

  const analyzeCareer = () => {
    if (!jobTitle) return;
    setStep('loading');

    setTimeout(() => {
      const lowerJob = jobTitle.toLowerCase();
      let data;

      if (lowerJob.includes('writer') || lowerJob.includes('copy') || lowerJob.includes('support')) {
        data = {
          risk: 85,
          riskLevel: 'High',
          message: `Generative AI models are rapidly mastering text generation. ${jobTitle} roles face significant automation pressure.`,
          pivot: 'AI Prompt Engineer',
          pivotMatch: 92
        };
      } else {
        data = {
          risk: 45,
          riskLevel: 'Medium',
          message: `AI tools will likely replace administrative parts of your ${jobTitle} role. Upskilling is needed.`,
          pivot: 'AI Operations Manager',
          pivotMatch: 88
        };
      }

      setRiskData(data);
      setStep('results');
    }, 1500);
  };

  return (
    <div className="flex min-h-screen bg-slate-50 font-sans text-slate-900">
      
      {/* --- SIDEBAR --- */}
      <aside className="fixed left-0 top-0 h-full w-64 bg-white border-r border-slate-200 flex flex-col z-30">
        <div className="p-6 flex items-center gap-2 border-b border-slate-100">
          <div className="bg-blue-600 p-1 rounded">
            <TrendingUp className="w-5 h-5 text-white" />
          </div>
          <span className="text-lg font-bold text-slate-900">PivotAI</span>
        </div>
        
        {/* NAVIGATION LINKS */}
        <nav className="flex-1 p-4 space-y-2">
          
          <Link href="/dashboard" className="flex items-center gap-3 w-full px-3 py-2.5 rounded-lg bg-blue-50 text-blue-700 font-semibold">
            <LayoutDashboard size={20} />
            <span className="text-sm">Overview</span>
          </Link>

          <Link href="/jobs" className="flex items-center gap-3 w-full px-3 py-2.5 rounded-lg text-slate-500 hover:bg-slate-50 hover:text-slate-900 transition">
            <Briefcase size={20} />
            <span className="text-sm">Job Matches</span>
          </Link>

          <Link href="/path/ai-prompt-engineer" className="flex items-center gap-3 w-full px-3 py-2.5 rounded-lg text-slate-500 hover:bg-slate-50 hover:text-slate-900 transition">
            <BookOpen size={20} />
            <span className="text-sm">Learning Path</span>
          </Link>

          {/* PORTFOLIO LINK */}
          <Link href="/portfolio" className="flex items-center gap-3 w-full px-3 py-2.5 rounded-lg text-slate-500 hover:bg-slate-50 hover:text-slate-900 transition">
            <FolderPlus size={20} />
            <span className="text-sm">Portfolio</span>
          </Link>

          <Link href="/interview" className="flex items-center gap-3 w-full px-3 py-2.5 rounded-lg text-slate-500 hover:bg-slate-50 hover:text-slate-900 transition">
            <Mic size={20} />
            <span className="text-sm">Mock Interview</span>
          </Link>

          <Link href="/resume" className="flex items-center gap-3 w-full px-3 py-2.5 rounded-lg text-slate-500 hover:bg-slate-50 hover:text-slate-900 transition">
            <FileText size={20} />
            <span className="text-sm">Resume Optimizer</span>
          </Link>

          <Link href="/community" className="flex items-center gap-3 w-full px-3 py-2.5 rounded-lg text-slate-500 hover:bg-slate-50 hover:text-slate-900 transition">
            <Users size={20} />
            <span className="text-sm">Community</span>
          </Link>

          <Link href="/profile" className="flex items-center gap-3 w-full px-3 py-2.5 rounded-lg text-slate-500 hover:bg-slate-50 hover:text-slate-900 transition">
            <User size={20} />
            <span className="text-sm">Profile</span>
          </Link>

        </nav>

        <div className="p-4 border-t border-slate-100">
          <Link href="/" className="flex items-center gap-2 w-full px-3 py-2 text-sm text-slate-500 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition">
            <LogOut size={16} />
            <span>Sign Out</span>
          </Link>
        </div>
      </aside>

      {/* --- MAIN CONTENT --- */}
      <main className="flex-1 ml-64 p-8">
        
        {step === 'input' && (
          <div className="max-w-2xl mx-auto mt-20 text-center">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Let's analyze your career risk.</h2>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 text-left">
              <label className="block text-sm font-medium text-slate-700 mb-2">Current Job Title</label>
              <input 
                type="text" 
                value={jobTitle}
                onChange={(e) => setJobTitle(e.target.value)}
                placeholder="e.g. Content Writer..."
                className="w-full p-4 border border-slate-300 rounded-xl mb-6 outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button 
                onClick={analyzeCareer}
                disabled={!jobTitle}
                className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition flex items-center justify-center gap-2 disabled:opacity-50"
              >
                Run AI Analysis <ArrowRight size={20} />
              </button>
            </div>
          </div>
        )}

        {step === 'loading' && (
          <div className="flex flex-col items-center justify-center h-[60vh]">
            <Loader2 className="w-16 h-16 text-blue-600 animate-spin mb-6" />
            <h3 className="text-2xl font-bold text-slate-900">Analyzing Market Trends...</h3>
          </div>
        )}

        {step === 'results' && riskData && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
            <header className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-bold text-slate-900">Analysis Results: {jobTitle}</h2>
              <button onClick={() => setStep('input')} className="text-sm text-blue-600 font-medium">Analyze Another Role</button>
            </header>

            <div className="bg-red-50 border border-red-100 rounded-xl p-6 mb-8 flex items-start gap-4">
              <AlertTriangle className="w-6 h-6 text-red-600 shrink-0" />
              <div>
                <h3 className="text-lg font-bold text-red-900 mb-1">{riskData.riskLevel} Risk Detected ({riskData.risk}%)</h3>
                <p className="text-red-700">{riskData.message}</p>
              </div>
            </div>

            <h3 className="text-lg font-bold text-slate-900 mb-4">Recommended Pivot Paths</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              <Link href={`/path/${riskData.pivot.toLowerCase().replace(/\s+/g, '-')}`} className="block">
                <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md hover:border-blue-400 transition cursor-pointer h-full group">
                  <div className="flex justify-between items-start mb-4">
                    <div className="bg-blue-50 p-2 rounded-lg"><Briefcase className="w-6 h-6 text-blue-600" /></div>
                    <span className="text-xs font-bold px-2 py-1 bg-green-100 text-green-700 rounded-full">{riskData.pivotMatch}% Match</span>
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600">{riskData.pivot}</h4>
                  <p className="text-slate-500 text-sm">Click to view curriculum</p>
                </div>
              </Link>

              <Link href="/path/human-auditor" className="block">
                <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md hover:border-purple-400 transition cursor-pointer h-full group">
                   <div className="flex justify-between items-start mb-4">
                    <div className="bg-purple-50 p-2 rounded-lg"><BookOpen className="w-6 h-6 text-purple-600" /></div>
                    <span className="text-xs font-bold px-2 py-1 bg-yellow-100 text-yellow-700 rounded-full">75% Match</span>
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-purple-600">Human Auditor</h4>
                  <p className="text-slate-500 text-sm">Click to view curriculum</p>
                </div>
              </Link>

            </div>
          </div>
        )}
      </main>
    </div>
  );
}