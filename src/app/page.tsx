import React from 'react';
import { BrainCircuit, ArrowRight, TrendingUp, ShieldAlert, Target, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white font-sans text-slate-900">
      
      {/* Navbar */}
      <nav className="sticky top-0 z-50 flex items-center justify-between px-6 py-4 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="flex items-center gap-2">
          <div className="bg-blue-600 p-1.5 rounded-lg">
            <BrainCircuit className="w-6 h-6 text-white" />
          </div>
          <span className="text-xl font-bold tracking-tight">PivotAI</span>
        </div>
        
        <div className="flex items-center gap-4">
          <Link 
            href="/login"
            className="text-sm font-medium text-slate-600 hover:text-slate-900 transition"
          >
            Sign In
          </Link>
          <Link 
            href="/signup"
            className="px-5 py-2 text-sm font-medium text-white bg-slate-900 rounded-lg hover:bg-slate-800 transition shadow-lg shadow-slate-200"
          >
            Get Started
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="flex-1 flex flex-col items-center justify-center bg-slate-50 relative overflow-hidden">
        
        {/* Background Decoration */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
            <div className="absolute -top-[20%] -right-[10%] w-[50%] h-[50%] bg-blue-100 rounded-full blur-3xl opacity-50"></div>
            <div className="absolute top-[20%] -left-[10%] w-[40%] h-[40%] bg-purple-100 rounded-full blur-3xl opacity-50"></div>
        </div>

        <div className="max-w-4xl mx-auto px-6 py-24 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-100 text-red-700 text-sm font-bold mb-8 border border-red-200">
            <ShieldAlert size={16} />
            <span>Warning: 45% of jobs are at risk of AI automation</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 tracking-tight mb-8 leading-tight">
            Don't Let AI Replace You.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Pivoting is the New Stability.</span>
          </h1>
          
          <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            Our AI engine analyzes your current skillset, calculates your displacement risk, and generates a personalized roadmap to a future-proof career.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              href="/dashboard"
              className="group flex items-center justify-center px-8 py-4 text-lg font-bold text-white bg-blue-600 rounded-xl hover:bg-blue-700 transition shadow-xl shadow-blue-200 w-full sm:w-auto"
            >
              Analyze My Career
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              href="/community"
              className="flex items-center justify-center px-8 py-4 text-lg font-bold text-slate-700 bg-white border border-slate-200 rounded-xl hover:bg-slate-50 transition w-full sm:w-auto"
            >
              View Success Stories
            </Link>
          </div>

          <div className="mt-10 flex items-center justify-center gap-6 text-sm text-slate-500 font-medium">
            <span className="flex items-center gap-2"><CheckCircle2 size={16} className="text-green-500" /> Free Assessment</span>
            <span className="flex items-center gap-2"><CheckCircle2 size={16} className="text-green-500" /> No Credit Card</span>
          </div>
        </div>

        {/* Feature/Stats Grid */}
        <div className="w-full bg-white py-24 border-t border-slate-200">
          <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard 
              icon={<ShieldAlert className="w-6 h-6 text-blue-600" />}
              title="Risk Calculation"
              desc="Get a concrete percentage score of how likely LLMs are to automate your specific daily tasks based on 2024 market data."
            />
            <FeatureCard 
              icon={<Target className="w-6 h-6 text-blue-600" />}
              title="Skill Gap Analysis"
              desc="Identify exactly which skills you're missing for high-growth roles that leverage AI, rather than compete with it."
            />
            <FeatureCard 
              icon={<TrendingUp className="w-6 h-6 text-blue-600" />}
              title="Pivot Roadmap"
              desc="A step-by-step curriculum of courses and projects to transition you from your current role to your new one in 12 weeks."
            />
          </div>
        </div>
      </main>

      <footer className="py-12 text-center bg-slate-900 text-slate-400 text-sm border-t border-slate-800">
        <div className="flex justify-center gap-8 mb-8 font-medium">
            <a href="#" className="hover:text-white transition">About</a>
            <a href="#" className="hover:text-white transition">Careers</a>
            <a href="#" className="hover:text-white transition">Privacy</a>
            <a href="#" className="hover:text-white transition">Terms</a>
        </div>
        <p>© 2026 PivotAI Inc. Future-proofing careers.</p>
      </footer>
    </div>
  );
}

function FeatureCard({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) {
  return (
    <div className="p-8 bg-slate-50 rounded-2xl border border-slate-100 hover:border-blue-200 hover:shadow-lg transition duration-300">
      <div className="bg-white w-14 h-14 rounded-xl border border-slate-200 flex items-center justify-center mb-6 shadow-sm">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-slate-900 mb-3">{title}</h3>
      <p className="text-slate-600 leading-relaxed">{desc}</p>
    </div>
  );
}