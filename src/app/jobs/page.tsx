'use client';

import React, { useState } from 'react';
import { Briefcase, MapPin, DollarSign, Search, Filter, Sparkles, ArrowRight, CheckCircle2, Building, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function JobsPage() {
  const [activeFilter, setActiveFilter] = useState('all');

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-white border-b border-slate-200 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link href="/dashboard" className="p-2 hover:bg-slate-100 rounded-lg transition text-slate-500">
            <ArrowLeft size={20} />
          </Link>
          <span className="font-bold text-lg">AI-Augmented Job Matches</span>
        </div>
        <div className="flex items-center gap-2 px-3 py-1 bg-blue-50 text-blue-700 text-sm font-bold rounded-full border border-blue-100">
          <Sparkles size={14} />
          <span>Target Role: AI Prompt Engineer</span>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-6 py-10">
        
        {/* Search & Filter Header */}
        <div className="flex flex-col md:flex-row justify-between items-end md:items-center gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-bold text-slate-900 mb-2">Recommended Opportunities</h1>
            <p className="text-slate-500">We found 12 roles that match your new skill profile.</p>
          </div>
          
          <div className="flex gap-2">
            <button 
              onClick={() => setActiveFilter('all')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition ${activeFilter === 'all' ? 'bg-slate-900 text-white' : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50'}`}
            >
              All Matches
            </button>
            <button 
              onClick={() => setActiveFilter('remote')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition ${activeFilter === 'remote' ? 'bg-slate-900 text-white' : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50'}`}
            >
              Remote Only
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* JOB LIST */}
          <div className="lg:col-span-2 space-y-4">
            
            {/* Job Card 1 (High Match) */}
            <JobCard 
              title="Senior AI Prompt Engineer"
              company="Anthropic"
              location="San Francisco (Remote)"
              salary="$180k - $240k"
              match={98}
              tags={['Python', 'NLP', 'RLHF']}
              posted="2 days ago"
              logo="bg-slate-900"
            />

            {/* Job Card 2 */}
            <JobCard 
              title="Creative Technologist (AI Focus)"
              company="Media.Monks"
              location="New York, NY"
              salary="$140k - $170k"
              match={92}
              tags={['Midjourney', 'Strategy', 'Design']}
              posted="5 hours ago"
              logo="bg-purple-600"
            />

            {/* Job Card 3 */}
            <JobCard 
              title="AI Operations Manager"
              company="Scale AI"
              location="Remote"
              salary="$130k - $160k"
              match={88}
              tags={['Ops', 'Quality Assurance', 'Team Lead']}
              posted="1 week ago"
              logo="bg-blue-600"
            />

             {/* Job Card 4 */}
             <JobCard 
              title="Conversational Designer"
              company="Duolingo"
              location="Pittsburgh, PA"
              salary="$120k - $150k"
              match={85}
              tags={['UX', 'Copywriting', 'Logic flow']}
              posted="3 days ago"
              logo="bg-green-500"
            />

          </div>

          {/* SIDEBAR: Application Assistant */}
          <div className="space-y-6">
            
            {/* AI Assistant Card */}
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl p-6 text-white shadow-lg">
              <div className="flex items-center gap-2 mb-4">
                <Sparkles className="text-yellow-300" />
                <h3 className="font-bold text-lg">Auto-Apply Agent</h3>
              </div>
              <p className="text-blue-100 text-sm mb-6 leading-relaxed">
                I can rewrite your resume for the "Anthropic" role to highlight your recent Certification and remove irrelevant experience.
              </p>
              <button className="w-full py-3 bg-white text-blue-700 font-bold rounded-lg hover:bg-blue-50 transition shadow-md">
                Generate Cover Letter
              </button>
            </div>

            {/* Market Stats */}
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
              <h3 className="font-bold text-slate-900 mb-4">Market Pulse</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center pb-3 border-b border-slate-50">
                   <span className="text-sm text-slate-500">Avg. Salary</span>
                   <span className="font-bold text-slate-900">$142,000</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-slate-50">
                   <span className="text-sm text-slate-500">Active Openings</span>
                   <span className="font-bold text-green-600">+12% (MoM)</span>
                </div>
                <div className="flex justify-between items-center">
                   <span className="text-sm text-slate-500">Remote Ratio</span>
                   <span className="font-bold text-slate-900">65%</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </main>
    </div>
  );
}

// --- HELPER COMPONENT ---

function JobCard({ title, company, location, salary, match, tags, posted, logo }: any) {
  return (
    <div className="bg-white p-6 rounded-xl border border-slate-200 hover:border-blue-400 hover:shadow-md transition cursor-pointer group">
      <div className="flex justify-between items-start mb-4">
        <div className="flex gap-4">
          <div className={`w-12 h-12 rounded-lg flex items-center justify-center text-white font-bold text-lg ${logo}`}>
            {company[0]}
          </div>
          <div>
            <h3 className="font-bold text-lg text-slate-900 group-hover:text-blue-600 transition">{title}</h3>
            <div className="flex items-center gap-2 text-sm text-slate-500 mt-1">
              <span className="font-medium text-slate-700">{company}</span>
              <span>•</span>
              <span className="flex items-center gap-1"><MapPin size={14} /> {location}</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-end">
           <div className="flex items-center gap-1.5 px-2 py-1 bg-green-50 text-green-700 rounded-lg text-sm font-bold border border-green-100">
             <Sparkles size={14} /> {match}% Match
           </div>
           <span className="text-xs text-slate-400 mt-2">{posted}</span>
        </div>
      </div>

      <div className="flex items-center gap-4 mb-4 text-sm text-slate-600">
        <div className="flex items-center gap-1 bg-slate-50 px-2 py-1 rounded">
            <DollarSign size={14} /> {salary}
        </div>
        <div className="flex items-center gap-1 bg-slate-50 px-2 py-1 rounded">
            <Briefcase size={14} /> Full-time
        </div>
      </div>

      <div className="flex flex-wrap gap-2">
        {tags.map((tag: string, i: number) => (
            <span key={i} className="px-2 py-1 bg-white border border-slate-200 rounded-md text-xs font-medium text-slate-500">
                {tag}
            </span>
        ))}
      </div>
    </div>
  )
}