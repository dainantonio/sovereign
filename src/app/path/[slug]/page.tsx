'use client';

import React from 'react';
import { ArrowLeft, Clock, DollarSign, CheckCircle2, Lock, BookOpen, PlayCircle, Trophy } from 'lucide-react';
import Link from 'next/link';
import { useParams } from 'next/navigation';

export default function LearningPathPage() {
  const params = useParams();
  const roleSlug = params?.slug?.toString() || '';
  const roleTitle = roleSlug.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      <nav className="sticky top-0 z-50 bg-white border-b border-slate-200 px-6 py-4 flex items-center gap-4">
        <Link href="/dashboard" className="p-2 hover:bg-slate-100 rounded-lg transition text-slate-500">
          <ArrowLeft size={20} />
        </Link>
        <span className="font-bold text-lg">Back to Dashboard</span>
      </nav>

      <main className="max-w-5xl mx-auto px-6 py-10">
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-wide mb-3">
            Your Curriculum
          </div>
          <h1 className="text-4xl font-extrabold text-slate-900 mb-2">{roleTitle}</h1>
          <p className="text-slate-500 text-lg">Master the skills needed for this role.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-4">
            <h2 className="text-xl font-bold text-slate-900 mb-4">Course Modules</h2>
            
            {/* LINKED MODULE: FOUNDATIONS */}
            <Link href="/lesson/foundations-of-llms">
              <div className="p-6 bg-white rounded-xl border border-blue-200 shadow-sm ring-1 ring-blue-100 hover:shadow-md transition cursor-pointer group">
                <div className="flex justify-between mb-2">
                  <span className="text-xs font-bold text-blue-600 uppercase">Phase 1</span>
                  <span className="px-2 py-0.5 bg-blue-100 text-blue-700 text-xs font-bold rounded-full">In Progress</span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600">Foundations of LLMs</h3>
                <p className="text-slate-500 text-sm mt-1">Understanding GPT-4, tokens, and context.</p>
                <div className="mt-4 flex items-center gap-2 text-sm text-blue-600 font-medium opacity-0 group-hover:opacity-100 transition">
                   <PlayCircle size={16} /> Resume Lesson
                </div>
              </div>
            </Link>

            {/* LOCKED MODULE */}
            <div className="p-6 bg-slate-50 rounded-xl border border-slate-200 opacity-75 cursor-not-allowed">
               <div className="flex justify-between mb-2">
                <span className="text-xs font-bold text-slate-400 uppercase">Phase 2</span>
                <Lock size={16} className="text-slate-300" />
              </div>
              <h3 className="text-lg font-bold text-slate-400">Advanced Prompting</h3>
              <p className="text-slate-400 text-sm mt-1">Chain-of-thought and few-shot prompting.</p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
              <h3 className="font-bold text-slate-900 mb-4">Your Progress</h3>
              <div className="w-full bg-slate-100 h-3 rounded-full overflow-hidden mb-4">
                <div className="bg-blue-600 h-3 rounded-full w-[10%]"></div>
              </div>
              <Link href="/lesson/foundations-of-llms">
                <button className="w-full py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition">
                  Start Learning
                </button>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}