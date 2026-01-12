"use client";

import React from 'react';
import Link from 'next/link';
import { 
  Shield, 
  Zap, 
  BarChart3, 
  ArrowRight, 
  Hexagon,
  CheckCircle2
} from 'lucide-react';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#0A0A0B] text-[#E2E2E2] font-sans selection:bg-[#C5A059] selection:text-black">
      
      {/* --- Navigation --- */}
      <nav className="border-b border-[#1F1F22] bg-[#0A0A0B]/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Hexagon className="w-6 h-6 text-[#C5A059] fill-[#C5A059]/10" />
            <span className="font-serif text-xl tracking-wide font-bold">SOVEREIGN</span>
          </div>
          <div className="hidden md:flex items-center space-x-8 text-sm font-mono text-[#888]">
            <a href="#" className="hover:text-[#C5A059] transition-colors">MANIFESTO</a>
            <a href="#" className="hover:text-[#C5A059] transition-colors">PROTOCOL</a>
            <Link 
              href="/forensic"
              className="px-4 py-2 border border-[#C5A059] text-[#C5A059] rounded hover:bg-[#C5A059] hover:text-black transition-all"
            >
              Start Audit
            </Link>
          </div>
        </div>
      </nav>

      {/* --- Hero Section --- */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        {/* Abstract Background Elements */}
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[#C5A059] opacity-5 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center space-x-2 bg-[#1F1F22] border border-[#333] px-3 py-1 rounded-full mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="w-1.5 h-1.5 rounded-full bg-[#00FF85] animate-pulse" />
            <span className="text-[10px] uppercase tracking-widest text-[#888]">Protocol v1.0 Online</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-serif font-medium leading-tight mb-6 animate-in fade-in slide-in-from-bottom-8 duration-1000">
            Your Experience is a Moat. <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C5A059] to-[#E2E2E2]">AI is the Bridge.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-[#888] max-w-2xl mx-auto mb-10 leading-relaxed animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-100">
            Don't be replaced by an agent. Become the architect who governs them. 
            Sovereign turns 10+ years of professional wisdom into a high-leverage 
            AI command center.
          </p>
          
          <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-4 animate-in fade-in slide-in-from-bottom-16 duration-1000 delay-200">
            <Link 
              href="/forensic"
              className="group relative px-8 py-4 bg-[#C5A059] text-black font-bold rounded-lg overflow-hidden transition-all hover:shadow-[0_0_30px_rgba(197,160,89,0.3)]"
            >
              <span className="relative z-10 flex items-center">
                START FORENSIC AUDIT
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
            <button className="px-8 py-4 bg-transparent border border-[#333] text-[#888] rounded-lg hover:border-[#E2E2E2] hover:text-[#E2E2E2] transition-colors">
              Read the Manifesto
            </button>
          </div>
        </div>
      </section>

      {/* --- The Protocol Grid --- */}
      <section className="py-24 px-6 border-t border-[#1F1F22] bg-[#0A0A0B]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Card 1 */}
            <div className="p-8 border border-[#1F1F22] bg-[#0F0F10] rounded-xl hover:border-[#C5A059]/30 transition-colors group">
              <div className="w-12 h-12 bg-[#1A1A1C] rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#C5A059]/10 transition-colors">
                <Shield className="w-6 h-6 text-[#C5A059]" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-[#E2E2E2]">The Forensic Audit</h3>
              <p className="text-[#666] leading-relaxed">
                We extract your "Human DNA"—the ethics, empathy, and edge-case logic that AI cannot clone.
              </p>
            </div>

            {/* Card 2 */}
            <div className="p-8 border border-[#1F1F22] bg-[#0F0F10] rounded-xl hover:border-[#C5A059]/30 transition-colors group">
              <div className="w-12 h-12 bg-[#1A1A1C] rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#C5A059]/10 transition-colors">
                <Zap className="w-6 h-6 text-[#C5A059]" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-[#E2E2E2]">The Delta Bridge</h3>
              <p className="text-[#666] leading-relaxed">
                A hyper-focused, 2-week sprint to master the specific AI orchestration tools of your industry.
              </p>
            </div>

            {/* Card 3 */}
            <div className="p-8 border border-[#1F1F22] bg-[#0F0F10] rounded-xl hover:border-[#C5A059]/30 transition-colors group">
              <div className="w-12 h-12 bg-[#1A1A1C] rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#C5A059]/10 transition-colors">
                <BarChart3 className="w-6 h-6 text-[#C5A059]" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-[#E2E2E2]">Sovereign Profile</h3>
              <p className="text-[#666] leading-relaxed">
                A verified "Proof-of-Work" identity that proves you can govern the machine, not just operate it.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* --- Social Proof / Ticker --- */}
      <div className="border-y border-[#1F1F22] bg-[#050505] overflow-hidden py-4">
        <div className="flex space-x-12 opacity-50 justify-center text-sm font-mono tracking-widest uppercase">
          <div className="flex items-center space-x-2">
            <CheckCircle2 className="w-4 h-4 text-[#00FF85]" />
            <span>Finance Sandbox Active</span>
          </div>
          <div className="flex items-center space-x-2">
            <CheckCircle2 className="w-4 h-4 text-[#00FF85]" />
            <span>Legal Governance Live</span>
          </div>
          <div className="flex items-center space-x-2">
            <CheckCircle2 className="w-4 h-4 text-[#00FF85]" />
            <span>CX Orchestration Online</span>
          </div>
        </div>
      </div>

    </div>
  );
}