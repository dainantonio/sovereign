'use client';

import React from 'react';
import { Mail, MapPin, Github, Linkedin, ExternalLink, Download, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function LiveResumePage() {
  return (
    <div className="min-h-screen bg-slate-100 font-sans text-slate-900 print:bg-white p-8">
      
      {/* Navigation (Hidden when printing) */}
      <nav className="max-w-4xl mx-auto mb-8 flex justify-between items-center print:hidden">
        <Link href="/resume" className="flex items-center gap-2 text-slate-500 hover:text-slate-900 transition">
          <ArrowLeft size={20} /> Back to Editor
        </Link>
        <button 
          onClick={() => window.print()}
          className="flex items-center gap-2 px-4 py-2 bg-slate-900 text-white font-bold rounded-lg hover:bg-slate-800 transition shadow-lg"
        >
          <Download size={18} /> Save as PDF
        </button>
      </nav>

      {/* The Resume "Paper" */}
      <div className="max-w-4xl mx-auto bg-white shadow-2xl print:shadow-none print:w-full print:max-w-none p-12 rounded-xl">
        
        {/* Header */}
        <header className="border-b-2 border-slate-900 pb-8 mb-8 flex justify-between items-start">
          <div>
            <h1 className="text-5xl font-extrabold text-slate-900 tracking-tight mb-2">John Doe</h1>
            <p className="text-2xl text-blue-600 font-medium">AI Prompt Engineer & Content Strategist</p>
          </div>
          <div className="text-right text-sm text-slate-600 space-y-1">
            <div className="flex items-center justify-end gap-2">
              <span>San Francisco, CA</span> <MapPin size={14} />
            </div>
            <div className="flex items-center justify-end gap-2">
              <a href="mailto:john@example.com" className="hover:text-blue-600">john@example.com</a> <Mail size={14} />
            </div>
            <div className="flex items-center justify-end gap-2">
              <a href="#" className="hover:text-blue-600">github.com/johndoe</a> <Github size={14} />
            </div>
            <div className="flex items-center justify-end gap-2">
              <a href="#" className="hover:text-blue-600">linkedin.com/in/johndoe</a> <Linkedin size={14} />
            </div>
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          
          {/* Main Content Column */}
          <div className="md:col-span-2 space-y-10">
            
            {/* Summary */}
            <section>
              <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4">Professional Summary</h3>
              <p className="text-slate-700 leading-relaxed">
                Former Senior Copywriter pivoted to AI Prompt Engineering. Expert in designing few-shot prompting strategies, optimizing LLM outputs for brand voice, and managing large-scale dataset curation. Combining 5+ years of narrative logic with modern Python scripting to bridge the gap between creative teams and technical AI deployment.
              </p>
            </section>

            {/* Experience */}
            <section>
              <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-6">Experience</h3>
              
              <div className="mb-8">
                <div className="flex justify-between items-baseline mb-2">
                  <h4 className="text-xl font-bold text-slate-900">AI Content Specialist (Transition Role)</h4>
                  <span className="text-slate-500 font-mono text-sm">2023 - Present</span>
                </div>
                <p className="text-blue-600 font-medium mb-3">AdAgency (Internal Promotion)</p>
                <ul className="list-disc pl-5 space-y-2 text-slate-700">
                  <li>Engineered a library of 50+ system prompts for GPT-4 to automate first-draft generation for B2B blogs, reducing production time by 40%.</li>
                  <li>Led a "Human-in-the-Loop" QA process, training 3 junior writers to evaluate and refine AI outputs using RLHF principles.</li>
                  <li>Collaborated with engineering to integrate the OpenAI API into the internal CMS using Python scripts.</li>
                </ul>
              </div>

              <div className="mb-8">
                <div className="flex justify-between items-baseline mb-2">
                  <h4 className="text-xl font-bold text-slate-900">Senior Copywriter</h4>
                  <span className="text-slate-500 font-mono text-sm">2018 - 2023</span>
                </div>
                <p className="text-blue-600 font-medium mb-3">AdAgency</p>
                <ul className="list-disc pl-5 space-y-2 text-slate-700">
                  <li>Managed tone consistency across 12 enterprise accounts, a skill directly transferable to System Prompt design.</li>
                  <li>Conducted A/B testing on headline variations (200+ variants/month), utilizing data analytics to drive creative decisions.</li>
                </ul>
              </div>
            </section>

            {/* Projects (The "Live" Part) */}
            <section>
              <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-6">Key Projects</h3>
              <div className="grid grid-cols-1 gap-4">
                <Link href="/portfolio" className="block p-4 border border-slate-200 rounded-lg hover:border-blue-400 hover:shadow-md transition group">
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="font-bold text-slate-900 group-hover:text-blue-600">Customer Support Auto-Responder</h4>
                    <ExternalLink size={16} className="text-slate-400 group-hover:text-blue-600" />
                  </div>
                  <p className="text-sm text-slate-600">Python/Flask app that classifies support tickets and generates draft responses using OpenAI API.</p>
                </Link>
                <Link href="/portfolio" className="block p-4 border border-slate-200 rounded-lg hover:border-blue-400 hover:shadow-md transition group">
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="font-bold text-slate-900 group-hover:text-blue-600">Legal Doc Summarizer</h4>
                    <ExternalLink size={16} className="text-slate-400 group-hover:text-blue-600" />
                  </div>
                  <p className="text-sm text-slate-600">LangChain pipeline to condense 50-page PDFs into executive briefs with citations.</p>
                </Link>
              </div>
            </section>

          </div>

          {/* Sidebar Column */}
          <div className="space-y-10">
            
            {/* Skills */}
            <section>
              <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4">Technical Skills</h3>
              <div className="flex flex-wrap gap-2">
                {['Prompt Engineering', 'Python', 'LangChain', 'OpenAI API', 'Midjourney', 'SEO', 'Data Annotation', 'Git/GitHub'].map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-slate-100 text-slate-700 text-sm font-medium rounded-md">
                    {skill}
                  </span>
                ))}
              </div>
            </section>

            {/* Education */}
            <section>
              <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4">Education</h3>
              <div className="mb-4">
                <h4 className="font-bold text-slate-900">PivotAI Certification</h4>
                <p className="text-sm text-slate-600">AI Prompt Engineering, 2024</p>
              </div>
              <div className="mb-4">
                <h4 className="font-bold text-slate-900">BA, English Literature</h4>
                <p className="text-sm text-slate-600">University of California, 2018</p>
              </div>
            </section>

            {/* Languages */}
            <section>
              <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4">Languages</h3>
              <div className="space-y-2 text-sm text-slate-700">
                <div className="flex justify-between">
                  <span>English</span>
                  <span className="text-slate-400">Native</span>
                </div>
                <div className="flex justify-between">
                  <span>Spanish</span>
                  <span className="text-slate-400">B2 Professional</span>
                </div>
              </div>
            </section>

            {/* QR Code (for Print) */}
            <section className="hidden print:block pt-8 border-t border-slate-200">
               <div className="w-24 h-24 bg-slate-900 flex items-center justify-center text-white text-xs text-center p-2">
                 [QR Code to Live Portfolio]
               </div>
               <p className="text-xs text-slate-500 mt-2">Scan to view project code.</p>
            </section>

          </div>
        </div>
      </div>
    </div>
  );
}