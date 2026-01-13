'use client';

import React from 'react';
import { Mail, MapPin, Upload, Briefcase, Award, Shield, Settings, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-white border-b border-slate-200 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link href="/dashboard" className="p-2 hover:bg-slate-100 rounded-lg transition text-slate-500">
            <ArrowLeft size={20} />
          </Link>
          <span className="font-bold text-lg">My Profile</span>
        </div>
        
        {/* LINK TO SETTINGS PAGE */}
        <Link href="/settings" className="text-slate-500 hover:text-blue-600 p-2 hover:bg-slate-100 rounded-full transition">
            <Settings size={20} />
        </Link>
      </nav>

      <main className="max-w-6xl mx-auto px-6 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* LEFT COLUMN: User Identity */}
          <div className="space-y-6">
            
            {/* ID Card */}
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm text-center">
              <div className="w-24 h-24 bg-gradient-to-tr from-blue-500 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-3xl font-bold border-4 border-white shadow-lg">
                JD
              </div>
              <h1 className="text-2xl font-bold text-slate-900">John Doe</h1>
              <p className="text-slate-500 mb-6">Senior Content Writer</p>
              
              <div className="space-y-3 text-sm text-left px-4">
                <div className="flex items-center gap-3 text-slate-600">
                  <Mail size={16} className="text-slate-400" /> john.doe@example.com
                </div>
                <div className="flex items-center gap-3 text-slate-600">
                  <MapPin size={16} className="text-slate-400" /> San Francisco, CA
                </div>
                <div className="flex items-center gap-3 text-slate-600">
                  <Briefcase size={16} className="text-slate-400" /> Open to Work
                </div>
              </div>

              <Link href="/settings" className="block w-full mt-6 py-2 border border-slate-200 rounded-lg text-slate-600 font-medium hover:bg-slate-50 transition">
                Edit Details
              </Link>
            </div>

            {/* Resume Upload */}
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
              <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                <Upload size={18} className="text-blue-600" /> Resume / CV
              </h3>
              <div className="border-2 border-dashed border-slate-200 rounded-xl p-8 text-center hover:border-blue-400 hover:bg-blue-50 transition cursor-pointer">
                <p className="text-sm text-slate-500 mb-1">Drag & drop your resume here</p>
                <p className="text-xs text-slate-400">PDF or DOCX up to 5MB</p>
              </div>
              <div className="mt-4 flex items-center justify-between p-3 bg-slate-50 rounded-lg border border-slate-200">
                <div className="flex items-center gap-3">
                    <div className="p-2 bg-red-100 text-red-600 rounded">
                        <Shield size={16} />
                    </div>
                    <div>
                        <p className="text-sm font-medium text-slate-900">resume_v4.pdf</p>
                        <p className="text-xs text-slate-500">Last updated 2 days ago</p>
                    </div>
                </div>
                <button className="text-xs text-blue-600 font-medium hover:underline">View</button>
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: Skills & Stats */}
          <div className="lg:col-span-2 space-y-6">
            
            {/* Skill Matrix */}
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
              <div className="flex justify-between items-center mb-6">
                <h3 className="font-bold text-slate-900 text-lg">Skill Gap Analysis</h3>
                <span className="text-xs font-bold px-2 py-1 bg-yellow-100 text-yellow-700 rounded-full">Pivot Target: AI Prompt Engineer</span>
              </div>
              
              <div className="space-y-6">
                <SkillBar label="Creative Writing" current={90} target={40} color="bg-green-500" warning />
                <SkillBar label="Python / Scripting" current={15} target={85} color="bg-red-500" />
                <SkillBar label="Data Logic" current={30} target={80} color="bg-red-500" />
                <SkillBar label="LLM Architecture" current={10} target={90} color="bg-red-500" />
                <SkillBar label="Project Management" current={75} target={70} color="bg-blue-500" />
              </div>

              <div className="mt-6 p-4 bg-slate-50 rounded-lg text-sm text-slate-600">
                <span className="font-bold text-slate-900">AI Insight:</span> You have excellent soft skills and domain knowledge. Focus 100% of your energy on technical implementation (Python & API usage) to close the gap.
              </div>
            </div>

            {/* Certifications */}
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
              <h3 className="font-bold text-slate-900 mb-4">Verified Credentials</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <CredentialCard title="Google Data Analytics" date="Jan 2023" />
                <CredentialCard title="HubSpot Content Marketing" date="Mar 2022" />
                <div className="border-2 border-dashed border-slate-200 rounded-xl p-4 flex items-center justify-center text-slate-400 text-sm font-medium cursor-pointer hover:border-blue-400 hover:text-blue-600 transition">
                    + Add Credential
                </div>
              </div>
            </div>

          </div>
        </div>
      </main>
    </div>
  );
}

function SkillBar({ label, current, target, color, warning }: { label: string, current: number, target: number, color: string, warning?: boolean }) {
    return (
        <div>
            <div className="flex justify-between mb-1">
                <span className="text-sm font-medium text-slate-700">{label}</span>
                <span className="text-xs text-slate-500">Current: {current}% / Target: {target}%</span>
            </div>
            <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden relative">
                {/* Target Marker */}
                <div className="absolute top-0 bottom-0 w-1 bg-slate-900 z-10 opacity-20" style={{ left: `${target}%` }}></div>
                {/* Current Bar */}
                <div className={`h-full rounded-full ${color}`} style={{ width: `${current}%` }}></div>
            </div>
            {warning && <p className="text-xs text-yellow-600 mt-1">Skill Surplus: You are over-qualified in this area for the target role.</p>}
        </div>
    )
}

function CredentialCard({ title, date }: { title: string, date: string }) {
    return (
        <div className="flex items-center gap-3 p-3 border border-slate-100 rounded-lg hover:shadow-sm transition">
            <div className="p-2 bg-blue-50 text-blue-600 rounded-lg">
                <Award size={18} />
            </div>
            <div>
                <p className="text-sm font-bold text-slate-900">{title}</p>
                <p className="text-xs text-slate-500">Issued {date}</p>
            </div>
        </div>
    )
}