'use client';

import React, { useState } from 'react';
import { PlayCircle, CheckCircle2, ChevronLeft, ChevronRight, FileText, MessageSquare, Download, Menu, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { useParams } from 'next/navigation';

export default function LessonPage() {
  const params = useParams();
  const [activeTab, setActiveTab] = useState('transcript');
  
  // Mock Data based on URL
  const lessonId = params?.lessonId?.toString() || 'introduction';
  const lessonTitle = lessonId.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());

  return (
    <div className="flex h-screen bg-white font-sans text-slate-900 overflow-hidden">
      
      {/* --- LESSON SIDEBAR --- */}
      <aside className="w-80 bg-slate-50 border-r border-slate-200 flex flex-col hidden md:flex">
        <div className="p-4 border-b border-slate-200 bg-white">
          <Link href="/dashboard" className="flex items-center gap-2 text-sm text-slate-500 hover:text-blue-600 transition mb-3">
            <ArrowLeft size={16} /> Back to Dashboard
          </Link>
          <h2 className="font-bold text-slate-900">AI Prompt Engineering</h2>
          <div className="flex items-center gap-2 mt-2">
            <div className="flex-1 h-2 bg-slate-200 rounded-full overflow-hidden">
              <div className="h-full bg-green-500 w-[15%]"></div>
            </div>
            <span className="text-xs text-slate-500 font-medium">15%</span>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-4 space-y-6">
          
          {/* Section 1 */}
          <div>
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Module 1: Foundations</h3>
            <div className="space-y-1">
              <LessonItem title="1. What is an LLM?" duration="5:20" completed active={lessonId.includes('what-is-llm')} />
              <LessonItem title="2. Tokens & Context" duration="8:15" active={lessonId.includes('tokens')} />
              <LessonItem title="3. The Transformer Architecture" duration="12:30" />
            </div>
          </div>

          {/* Section 2 */}
          <div>
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Module 2: Prompting</h3>
            <div className="space-y-1">
              <LessonItem title="4. Zero-Shot vs Few-Shot" duration="6:45" locked />
              <LessonItem title="5. Chain of Thought" duration="10:10" locked />
              <LessonItem title="6. Reducing Hallucinations" duration="15:00" locked />
            </div>
          </div>

        </div>
      </aside>

      {/* --- MAIN CONTENT --- */}
      <main className="flex-1 flex flex-col h-full relative">
        
        {/* Mobile Header (Visible only on small screens) */}
        <header className="md:hidden p-4 border-b border-slate-200 flex justify-between items-center">
            <h1 className="font-bold truncate max-w-[200px]">{lessonTitle}</h1>
            <Menu className="text-slate-600" />
        </header>

        {/* Video Player Area */}
        <div className="bg-slate-900 aspect-video w-full flex items-center justify-center relative group">
            {/* Mock Video UI */}
            <div className="text-white text-center">
                <PlayCircle size={64} className="mx-auto mb-4 opacity-80 group-hover:opacity-100 transition cursor-pointer" />
                <p className="font-medium text-lg">Start Lesson: {lessonTitle}</p>
            </div>
            
            {/* Mock Controls */}
            <div className="absolute bottom-0 left-0 w-full h-1 bg-slate-700">
               <div className="h-full bg-red-600 w-[30%]"></div>
            </div>
        </div>

        {/* Content Tabs */}
        <div className="flex border-b border-slate-200 px-6">
            <TabButton label="Transcript" icon={<FileText size={16} />} active={activeTab === 'transcript'} onClick={() => setActiveTab('transcript')} />
            <TabButton label="Discussion" icon={<MessageSquare size={16} />} active={activeTab === 'discussion'} onClick={() => setActiveTab('discussion')} />
            <TabButton label="Resources" icon={<Download size={16} />} active={activeTab === 'resources'} onClick={() => setActiveTab('resources')} />
        </div>

        {/* Tab Content */}
        <div className="flex-1 overflow-y-auto p-8 max-w-4xl">
            {activeTab === 'transcript' && (
                <div className="prose prose-slate max-w-none">
                    <h1 className="text-2xl font-bold mb-4">{lessonTitle}</h1>
                    <p className="mb-4">In this lesson, we break down the fundamental architecture of Large Language Models. You will learn why "predicting the next word" results in such complex emergent behaviors.</p>
                    <h3 className="text-lg font-bold mb-2">Key Takeaways:</h3>
                    <ul className="list-disc pl-5 space-y-2 mb-6 text-slate-700">
                        <li>LLMs process text as "tokens," not words.</li>
                        <li>Context windows determine how much 'memory' the model has in a single conversation.</li>
                        <li>Temperature settings control the creativity vs. determinism of the output.</li>
                    </ul>
                    <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                        <h4 className="font-bold text-blue-900 mb-2">Quiz: Check your understanding</h4>
                        <p className="mb-4 text-blue-800">What is the approximate token-to-word ratio for English text?</p>
                        <div className="space-y-2">
                            <label className="flex items-center gap-3 p-3 bg-white rounded-lg border border-blue-100 cursor-pointer hover:border-blue-300">
                                <input type="radio" name="quiz" className="text-blue-600" />
                                <span>1 Token ≈ 1 Word</span>
                            </label>
                            <label className="flex items-center gap-3 p-3 bg-white rounded-lg border border-blue-100 cursor-pointer hover:border-blue-300">
                                <input type="radio" name="quiz" className="text-blue-600" />
                                <span>1000 Tokens ≈ 750 Words</span>
                            </label>
                        </div>
                    </div>
                </div>
            )}
        </div>

        {/* Footer Navigation */}
        <div className="p-4 border-t border-slate-200 bg-white flex justify-between items-center">
            <button className="flex items-center gap-2 px-4 py-2 text-slate-500 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition disabled:opacity-50">
                <ChevronLeft size={20} /> Previous
            </button>
            <button className="flex items-center gap-2 px-6 py-2 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition shadow-lg shadow-blue-200">
                Next Lesson <ChevronRight size={20} />
            </button>
        </div>

      </main>
    </div>
  );
}

// --- HELPER COMPONENTS ---

function LessonItem({ title, duration, active, completed, locked }: { title: string, duration: string, active?: boolean, completed?: boolean, locked?: boolean }) {
    return (
        <div className={`flex items-center justify-between p-3 rounded-lg cursor-pointer transition ${active ? 'bg-blue-50 border border-blue-100' : 'hover:bg-slate-100'}`}>
            <div className="flex items-center gap-3 overflow-hidden">
                {completed ? (
                    <CheckCircle2 size={18} className="text-green-500 shrink-0" />
                ) : active ? (
                    <PlayCircle size={18} className="text-blue-600 shrink-0" />
                ) : (
                    <div className="w-[18px] h-[18px] rounded-full border-2 border-slate-300 shrink-0"></div>
                )}
                <span className={`text-sm truncate ${active ? 'font-semibold text-blue-700' : locked ? 'text-slate-400' : 'text-slate-700'}`}>
                    {title}
                </span>
            </div>
            <span className="text-xs text-slate-400 ml-2">{duration}</span>
        </div>
    )
}

function TabButton({ label, icon, active, onClick }: { label: string, icon: React.ReactNode, active: boolean, onClick: () => void }) {
    return (
        <button 
            onClick={onClick}
            className={`flex items-center gap-2 px-6 py-4 text-sm font-medium border-b-2 transition ${active ? 'border-blue-600 text-blue-600' : 'border-transparent text-slate-500 hover:text-slate-700'}`}
        >
            {icon} {label}
        </button>
    )
}