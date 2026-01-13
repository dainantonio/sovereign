'use client';

import React, { useState } from 'react';
import { FolderPlus, ExternalLink, Github, Image as ImageIcon, MoreVertical, Star, Share2, Eye, ArrowLeft, Plus } from 'lucide-react';
import Link from 'next/link';

export default function PortfolioPage() {
  const [activeTab, setActiveTab] = useState('published');

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-white border-b border-slate-200 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link href="/dashboard" className="p-2 hover:bg-slate-100 rounded-lg transition text-slate-500">
            <ArrowLeft size={20} />
          </Link>
          <span className="font-bold text-lg">My Portfolio</span>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white text-sm font-bold rounded-lg hover:bg-blue-700 transition shadow-sm">
            <Plus size={16} /> New Project
        </button>
      </nav>

      <main className="max-w-6xl mx-auto px-6 py-10">
        
        {/* Header Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex items-center gap-4">
                <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-lg flex items-center justify-center">
                    <Eye size={24} />
                </div>
                <div>
                    <p className="text-2xl font-bold text-slate-900">1,240</p>
                    <p className="text-sm text-slate-500">Total Views</p>
                </div>
            </div>
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center">
                    <Share2 size={24} />
                </div>
                <div>
                    <p className="text-2xl font-bold text-slate-900">45</p>
                    <p className="text-sm text-slate-500">Shares by Recruiters</p>
                </div>
            </div>
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex items-center gap-4">
                <div className="w-12 h-12 bg-green-100 text-green-600 rounded-lg flex items-center justify-center">
                    <Star size={24} />
                </div>
                <div>
                    <p className="text-2xl font-bold text-slate-900">3</p>
                    <p className="text-sm text-slate-500">Featured Projects</p>
                </div>
            </div>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-slate-200 mb-8">
            <button 
                onClick={() => setActiveTab('published')}
                className={`px-6 py-3 text-sm font-bold border-b-2 transition ${activeTab === 'published' ? 'border-blue-600 text-blue-600' : 'border-transparent text-slate-500 hover:text-slate-700'}`}
            >
                Published Projects
            </button>
            <button 
                onClick={() => setActiveTab('drafts')}
                className={`px-6 py-3 text-sm font-bold border-b-2 transition ${activeTab === 'drafts' ? 'border-blue-600 text-blue-600' : 'border-transparent text-slate-500 hover:text-slate-700'}`}
            >
                Drafts (2)
            </button>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Project 1 */}
            <ProjectCard 
                title="Customer Support Auto-Responder"
                desc="A Python-based system using OpenAI API to classify and draft responses for support tickets."
                tags={['Python', 'OpenAI API', 'Flask']}
                image="bg-gradient-to-br from-blue-500 to-indigo-600"
                views={342}
                date="Oct 12, 2025"
            />

            {/* Project 2 */}
            <ProjectCard 
                title="E-Commerce Product Description Generator"
                desc="Fine-tuned GPT-3.5 model to generate SEO-optimized descriptions from raw specs."
                tags={['Fine-tuning', 'Prompt Eng', 'Data Cleaning']}
                image="bg-gradient-to-br from-purple-500 to-pink-600"
                views={890}
                date="Sep 28, 2025"
                featured
            />

            {/* Project 3 */}
            <ProjectCard 
                title="Legal Document Summarizer"
                desc="LangChain application to summarize 50+ page PDFs into executive briefs."
                tags={['LangChain', 'Vector DB', 'React']}
                image="bg-gradient-to-br from-emerald-500 to-teal-600"
                views={120}
                date="Aug 15, 2025"
            />

            {/* Empty State / Add New */}
            <button className="border-2 border-dashed border-slate-300 rounded-xl p-8 flex flex-col items-center justify-center text-slate-400 hover:border-blue-400 hover:text-blue-600 hover:bg-blue-50/50 transition group h-full min-h-[300px]">
                <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-white group-hover:shadow-sm">
                    <FolderPlus size={32} />
                </div>
                <span className="font-bold text-lg">Add New Project</span>
                <span className="text-sm mt-2 text-center max-w-xs">Upload screenshots, GitHub links, or case studies to showcase your skills.</span>
            </button>

        </div>

      </main>
    </div>
  );
}

// --- HELPER COMPONENT ---

function ProjectCard({ title, desc, tags, image, views, date, featured }: any) {
    return (
        <div className="bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition overflow-hidden flex flex-col h-full group">
            {/* Thumbnail */}
            <div className={`h-48 ${image} relative p-6 flex items-center justify-center`}>
                <ImageIcon className="text-white/50 w-16 h-16" />
                {featured && (
                    <div className="absolute top-4 left-4 bg-yellow-400 text-yellow-900 text-xs font-bold px-2 py-1 rounded-full flex items-center gap-1 shadow-sm">
                        <Star size={12} fill="currentColor" /> Featured
                    </div>
                )}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition">
                    <button className="p-2 bg-white/20 hover:bg-white/40 text-white rounded-lg backdrop-blur-sm">
                        <MoreVertical size={20} />
                    </button>
                </div>
            </div>

            {/* Content */}
            <div className="p-6 flex-1 flex flex-col">
                <div className="flex justify-between items-start mb-2">
                    <h3 className="font-bold text-lg text-slate-900 leading-tight group-hover:text-blue-600 transition">{title}</h3>
                </div>
                <p className="text-slate-500 text-sm mb-6 line-clamp-3">{desc}</p>
                
                <div className="mt-auto">
                    <div className="flex flex-wrap gap-2 mb-4">
                        {tags.map((tag: string, i: number) => (
                            <span key={i} className="px-2 py-1 bg-slate-100 text-slate-600 text-xs font-bold rounded-md border border-slate-200">
                                {tag}
                            </span>
                        ))}
                    </div>
                    
                    <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400 font-medium">
                        <span>Updated {date}</span>
                        <div className="flex gap-4">
                            <span className="flex items-center gap-1"><Eye size={14} /> {views}</span>
                            <button className="flex items-center gap-1 hover:text-slate-900 transition">
                                <Github size={14} /> Code
                            </button>
                            <button className="flex items-center gap-1 hover:text-blue-600 transition">
                                <ExternalLink size={14} /> Live
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}