'use client';

import React, { useState } from 'react';
import { User, Bell, Shield, CreditCard, LogOut, Check, ArrowLeft, Mail, Smartphone } from 'lucide-react';
import Link from 'next/link';

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState('profile');
  const [notifications, setNotifications] = useState({
    email: true,
    push: false,
    weeklyDigest: true,
    jobAlerts: true
  });

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-white border-b border-slate-200 px-6 py-4 flex items-center gap-4">
        <Link href="/profile" className="p-2 hover:bg-slate-100 rounded-lg transition text-slate-500">
          <ArrowLeft size={20} />
        </Link>
        <span className="font-bold text-lg">Account Settings</span>
      </nav>

      <main className="max-w-5xl mx-auto px-6 py-10">
        <div className="flex flex-col md:flex-row gap-8">
          
          {/* Settings Sidebar */}
          <aside className="w-full md:w-64 space-y-2">
            <TabButton 
              active={activeTab === 'profile'} 
              onClick={() => setActiveTab('profile')} 
              icon={<User size={18} />} 
              label="Profile Details" 
            />
            <TabButton 
              active={activeTab === 'billing'} 
              onClick={() => setActiveTab('billing')} 
              icon={<CreditCard size={18} />} 
              label="Plan & Billing" 
            />
            <TabButton 
              active={activeTab === 'notifications'} 
              onClick={() => setActiveTab('notifications')} 
              icon={<Bell size={18} />} 
              label="Notifications" 
            />
            <TabButton 
              active={activeTab === 'security'} 
              onClick={() => setActiveTab('security')} 
              icon={<Shield size={18} />} 
              label="Password & Security" 
            />
            
            <div className="pt-6 mt-6 border-t border-slate-200">
                <button className="w-full flex items-center gap-3 px-4 py-2 text-red-600 hover:bg-red-50 rounded-lg transition font-medium text-sm">
                    <LogOut size={18} /> Sign Out
                </button>
            </div>
          </aside>

          {/* Main Content Area */}
          <div className="flex-1">
            
            {/* PROFILE TAB */}
            {activeTab === 'profile' && (
              <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm space-y-6">
                <h2 className="text-xl font-bold text-slate-900">Profile Information</h2>
                
                <div className="flex items-center gap-6">
                    <div className="w-20 h-20 bg-slate-200 rounded-full flex items-center justify-center text-slate-500 text-2xl font-bold">
                        JD
                    </div>
                    <div>
                        <button className="text-sm font-bold text-blue-600 border border-blue-200 bg-blue-50 px-4 py-2 rounded-lg hover:bg-blue-100 transition">
                            Change Avatar
                        </button>
                        <p className="text-xs text-slate-400 mt-2">JPG, GIF or PNG. Max size 800K</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-sm font-bold text-slate-700 mb-2">First Name</label>
                        <input type="text" defaultValue="John" className="w-full p-3 border border-slate-200 rounded-lg outline-none focus:ring-2 focus:ring-blue-500" />
                    </div>
                    <div>
                        <label className="block text-sm font-bold text-slate-700 mb-2">Last Name</label>
                        <input type="text" defaultValue="Doe" className="w-full p-3 border border-slate-200 rounded-lg outline-none focus:ring-2 focus:ring-blue-500" />
                    </div>
                    <div className="md:col-span-2">
                        <label className="block text-sm font-bold text-slate-700 mb-2">Email Address</label>
                        <input type="email" defaultValue="john.doe@example.com" className="w-full p-3 border border-slate-200 rounded-lg outline-none focus:ring-2 focus:ring-blue-500" />
                    </div>
                    <div className="md:col-span-2">
                        <label className="block text-sm font-bold text-slate-700 mb-2">Bio</label>
                        <textarea className="w-full p-3 border border-slate-200 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 h-24" defaultValue="Senior Copywriter looking to pivot into AI Prompt Engineering. Passionate about LLMs and creative writing."></textarea>
                    </div>
                </div>

                <div className="flex justify-end pt-4">
                    <button className="px-6 py-3 bg-slate-900 text-white font-bold rounded-lg hover:bg-slate-800 transition">
                        Save Changes
                    </button>
                </div>
              </div>
            )}

            {/* BILLING TAB */}
            {activeTab === 'billing' && (
              <div className="space-y-6">
                <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm">
                   <div className="flex justify-between items-start mb-6">
                       <div>
                           <h2 className="text-xl font-bold text-slate-900">Current Plan</h2>
                           <p className="text-slate-500">You are currently on the <span className="font-bold text-slate-900">Free Tier</span></p>
                       </div>
                       <span className="px-3 py-1 bg-slate-100 text-slate-600 text-xs font-bold rounded-full uppercase tracking-wide">
                           Free
                       </span>
                   </div>
                   
                   <div className="w-full bg-slate-100 h-2 rounded-full mb-2 overflow-hidden">
                       <div className="h-full bg-blue-600 w-[80%]"></div>
                   </div>
                   <p className="text-xs text-slate-500 mb-6">4/5 Free AI Interviews used this month.</p>

                   <button className="w-full py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-xl hover:opacity-90 transition shadow-lg shadow-blue-200 flex items-center justify-center gap-2">
                       Upgrade to Pro - $29/mo
                   </button>
                </div>

                <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm">
                    <h3 className="font-bold text-slate-900 mb-4">Payment Methods</h3>
                    <div className="flex items-center gap-4 p-4 border border-slate-200 rounded-lg">
                        <div className="w-10 h-6 bg-slate-800 rounded"></div>
                        <span className="text-sm font-medium text-slate-700">•••• •••• •••• 4242</span>
                        <span className="text-xs text-slate-400 ml-auto">Expires 12/25</span>
                    </div>
                    <button className="mt-4 text-sm font-bold text-blue-600 hover:underline">
                        + Add Payment Method
                    </button>
                </div>
              </div>
            )}

            {/* NOTIFICATIONS TAB */}
            {activeTab === 'notifications' && (
                <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm space-y-8">
                    <div>
                        <h2 className="text-xl font-bold text-slate-900 mb-4">Notification Preferences</h2>
                        <p className="text-slate-500 text-sm mb-6">Manage how and when PivotAI contacts you.</p>
                        
                        <div className="space-y-4">
                            <ToggleRow 
                                label="Email Notifications" 
                                desc="Receive updates about your account security and billing."
                                checked={notifications.email}
                                onChange={() => setNotifications({...notifications, email: !notifications.email})}
                                icon={<Mail size={20} />}
                            />
                            <ToggleRow 
                                label="Push Notifications" 
                                desc="Get real-time alerts for new job matches."
                                checked={notifications.push}
                                onChange={() => setNotifications({...notifications, push: !notifications.push})}
                                icon={<Smartphone size={20} />}
                            />
                             <ToggleRow 
                                label="Weekly Digest" 
                                desc="A summary of your learning progress sent every Monday."
                                checked={notifications.weeklyDigest}
                                onChange={() => setNotifications({...notifications, weeklyDigest: !notifications.weeklyDigest})}
                                icon={<Check size={20} />}
                            />
                             <ToggleRow 
                                label="Job Alerts" 
                                desc="Instant notification when a 90%+ match is found."
                                checked={notifications.jobAlerts}
                                onChange={() => setNotifications({...notifications, jobAlerts: !notifications.jobAlerts})}
                                icon={<BriefcaseIcon />}
                            />
                        </div>
                    </div>
                </div>
            )}
            
            {/* SECURITY TAB */}
            {activeTab === 'security' && (
                <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm">
                    <h2 className="text-xl font-bold text-slate-900 mb-6">Security Settings</h2>
                    <div className="space-y-6">
                        <div>
                            <label className="block text-sm font-bold text-slate-700 mb-2">Current Password</label>
                            <input type="password" placeholder="••••••••" className="w-full p-3 border border-slate-200 rounded-lg" />
                        </div>
                        <div>
                            <label className="block text-sm font-bold text-slate-700 mb-2">New Password</label>
                            <input type="password" className="w-full p-3 border border-slate-200 rounded-lg" />
                        </div>
                        <div className="pt-4 border-t border-slate-200 mt-6">
                            <h3 className="font-bold text-red-600 mb-2">Danger Zone</h3>
                            <p className="text-sm text-slate-500 mb-4">Once you delete your account, there is no going back. Please be certain.</p>
                            <button className="px-4 py-2 border border-red-200 text-red-600 font-bold rounded-lg hover:bg-red-50 transition text-sm">
                                Delete Account
                            </button>
                        </div>
                    </div>
                </div>
            )}

          </div>
        </div>
      </main>
    </div>
  );
}

// --- HELPER COMPONENTS ---

function TabButton({ active, onClick, icon, label }: any) {
    return (
        <button 
            onClick={onClick}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition text-sm font-medium ${active ? 'bg-blue-50 text-blue-700' : 'text-slate-600 hover:bg-slate-50'}`}
        >
            {icon}
            {label}
        </button>
    )
}

function ToggleRow({ label, desc, checked, onChange, icon }: any) {
    return (
        <div className="flex items-center justify-between p-4 border border-slate-100 rounded-lg">
            <div className="flex items-start gap-4">
                <div className="mt-1 text-slate-400">{icon}</div>
                <div>
                    <h4 className="font-bold text-slate-900 text-sm">{label}</h4>
                    <p className="text-xs text-slate-500">{desc}</p>
                </div>
            </div>
            <button 
                onClick={onChange}
                className={`w-12 h-6 rounded-full transition relative ${checked ? 'bg-blue-600' : 'bg-slate-200'}`}
            >
                <div className={`w-4 h-4 bg-white rounded-full absolute top-1 transition-all ${checked ? 'left-7' : 'left-1'}`}></div>
            </button>
        </div>
    )
}

function BriefcaseIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="14" x="2" y="7" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
    )
}