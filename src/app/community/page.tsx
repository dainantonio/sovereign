'use client';

import React, { useState } from 'react';
import { Users, MessageSquare, Calendar, ArrowLeft, Search, Heart, MessageCircle, Video, UserPlus } from 'lucide-react';
import Link from 'next/link';

export default function CommunityPage() {
  const [activeTab, setActiveTab] = useState('discussions');

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-white border-b border-slate-200 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link href="/dashboard" className="p-2 hover:bg-slate-100 rounded-lg transition text-slate-500">
            <ArrowLeft size={20} />
          </Link>
          <span className="font-bold text-lg">Community Hub</span>
        </div>
        <div className="flex gap-4">
            <button className={`px-4 py-2 rounded-full text-sm font-medium transition ${activeTab === 'discussions' ? 'bg-slate-900 text-white' : 'text-slate-500 hover:bg-slate-100'}`} onClick={() => setActiveTab('discussions')}>
                Discussions
            </button>
            <button className={`px-4 py-2 rounded-full text-sm font-medium transition ${activeTab === 'mentors' ? 'bg-slate-900 text-white' : 'text-slate-500 hover:bg-slate-100'}`} onClick={() => setActiveTab('mentors')}>
                Find a Mentor
            </button>
            <button className={`px-4 py-2 rounded-full text-sm font-medium transition ${activeTab === 'events' ? 'bg-slate-900 text-white' : 'text-slate-500 hover:bg-slate-100'}`} onClick={() => setActiveTab('events')}>
                Events
            </button>
        </div>
      </nav>

      <main className="max-w-5xl mx-auto px-6 py-10">
        
        {/* TAB: DISCUSSIONS */}
        {activeTab === 'discussions' && (
            <div className="space-y-6">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-bold">Trending Topics</h2>
                    <button className="px-4 py-2 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition">
                        + New Thread
                    </button>
                </div>

                <DiscussionCard 
                    author="Sarah Jenkins"
                    role="Ex-Copywriter -> AI Strategist"
                    title="How I handled the 'no technical background' question in interviews"
                    preview="I was terrified they'd ask about coding, but I pivoted the conversation to prompt engineering logic. Here is the exact script I used..."
                    likes={342}
                    comments={56}
                    tag="Interview Prep"
                />

                <DiscussionCard 
                    author="David Chen"
                    role="Graphic Designer -> UX Lead"
                    title="Is the Google Data Analytics cert worth it for creatives?"
                    preview="I've been taking the course for 3 weeks and honestly, I feel like it's too dry. Has anyone else successfully pivoted using just portfolio projects?"
                    likes={128}
                    comments={89}
                    tag="Advice"
                />

                <DiscussionCard 
                    author="PivotAI Team"
                    role="Official"
                    title="Weekly Challenge: Automate a 5-minute task with Python"
                    preview="This week's challenge is for the non-coders. We are going to write a 10-line script to organize your downloads folder. Let's go!"
                    likes={890}
                    comments={112}
                    tag="Challenge"
                />
            </div>
        )}

        {/* TAB: MENTORS */}
        {activeTab === 'mentors' && (
            <div>
                <div className="bg-blue-50 border border-blue-100 rounded-xl p-6 mb-8 text-center">
                    <h2 className="text-2xl font-bold text-blue-900 mb-2">Find Your Guide</h2>
                    <p className="text-blue-700 max-w-2xl mx-auto">Connect with professionals who have successfully navigated the exact pivot you are attempting. First session is free for Premium members.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <MentorCard 
                        name="Elena Rodriguez"
                        title="Senior Prompt Engineer at OpenAI"
                        bio="Former English teacher turned AI specialist. I help non-technical folks understand LLM architecture."
                        rate="$150/hr"
                        image="bg-purple-500"
                    />
                     <MentorCard 
                        name="Marcus Johnson"
                        title="Product Manager at Stripe"
                        bio="Pivoted from Customer Support. Expert in translating user empathy into product requirements."
                        rate="$200/hr"
                        image="bg-orange-500"
                    />
                     <MentorCard 
                        name="Aisha Patel"
                        title="AI Ethics Researcher"
                        bio="Background in Philosophy. Now I work on bias mitigation in large scale models."
                        rate="$120/hr"
                        image="bg-teal-500"
                    />
                     <MentorCard 
                        name="Tom Wambsgans"
                        title="Head of Operations"
                        bio="Operational efficiency expert. I teach you how to automate yourself out of a job (into a better one)."
                        rate="$180/hr"
                        image="bg-indigo-500"
                    />
                </div>
            </div>
        )}

        {/* TAB: EVENTS */}
        {activeTab === 'events' && (
            <div className="space-y-6">
                <h2 className="text-2xl font-bold mb-6">Upcoming Workshops</h2>
                
                <EventCard 
                    day="12" month="OCT"
                    title="Live Resume Review: pivoting from Non-Tech"
                    time="1:00 PM EST • Live Webinar"
                    attendees={450}
                />
                 <EventCard 
                    day="15" month="OCT"
                    title="Mock Interview Practice: The 'Behavioral' Round"
                    time="6:00 PM EST • Zoom Group"
                    attendees={22}
                />
                 <EventCard 
                    day="22" month="OCT"
                    title="Intro to Python for Excel Users"
                    time="12:00 PM EST • Workshop"
                    attendees={890}
                />
            </div>
        )}

      </main>
    </div>
  );
}

// --- HELPER COMPONENTS ---

function DiscussionCard({ author, role, title, preview, likes, comments, tag }: any) {
    return (
        <div className="bg-white p-6 rounded-xl border border-slate-200 hover:border-blue-300 hover:shadow-md transition cursor-pointer">
            <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center font-bold text-xs text-slate-600">
                    {author[0]}
                </div>
                <div>
                    <p className="text-sm font-bold text-slate-900">{author}</p>
                    <p className="text-xs text-slate-500">{role}</p>
                </div>
                <span className="ml-auto px-2 py-1 bg-slate-100 text-slate-600 text-xs font-bold rounded-full">{tag}</span>
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">{title}</h3>
            <p className="text-slate-600 text-sm mb-4 leading-relaxed">{preview}</p>
            <div className="flex gap-4 text-slate-400 text-sm font-medium">
                <span className="flex items-center gap-1 hover:text-red-500 transition"><Heart size={16} /> {likes}</span>
                <span className="flex items-center gap-1 hover:text-blue-500 transition"><MessageCircle size={16} /> {comments} Comments</span>
            </div>
        </div>
    )
}

function MentorCard({ name, title, bio, rate, image }: any) {
    return (
        <div className="bg-white p-6 rounded-xl border border-slate-200 flex gap-4 hover:shadow-lg transition">
            <div className={`w-16 h-16 rounded-full ${image} shrink-0 flex items-center justify-center text-white text-xl font-bold`}>
                {name[0]}
            </div>
            <div>
                <h3 className="font-bold text-lg text-slate-900">{name}</h3>
                <p className="text-blue-600 text-sm font-medium mb-2">{title}</p>
                <p className="text-slate-500 text-sm mb-4 leading-relaxed">{bio}</p>
                <div className="flex items-center justify-between">
                    <span className="text-slate-900 font-bold text-sm">{rate}</span>
                    <button className="px-4 py-2 bg-slate-900 text-white text-sm font-bold rounded-lg hover:bg-slate-800 transition flex items-center gap-2">
                        <Video size={16} /> Book
                    </button>
                </div>
            </div>
        </div>
    )
}

function EventCard({ day, month, title, time, attendees }: any) {
    return (
        <div className="bg-white p-6 rounded-xl border border-slate-200 flex items-center gap-6 hover:shadow-md transition">
            <div className="text-center shrink-0">
                <div className="text-red-600 font-bold text-sm tracking-widest">{month}</div>
                <div className="text-3xl font-extrabold text-slate-900">{day}</div>
            </div>
            <div className="w-px h-12 bg-slate-100"></div>
            <div className="flex-1">
                <h3 className="font-bold text-lg text-slate-900 mb-1">{title}</h3>
                <p className="text-slate-500 text-sm flex items-center gap-2">
                    <Calendar size={14} /> {time}
                </p>
            </div>
            <div className="hidden md:block text-right">
                <div className="flex -space-x-2 justify-end mb-2">
                    <div className="w-8 h-8 rounded-full border-2 border-white bg-blue-500"></div>
                    <div className="w-8 h-8 rounded-full border-2 border-white bg-green-500"></div>
                    <div className="w-8 h-8 rounded-full border-2 border-white bg-purple-500"></div>
                </div>
                <p className="text-xs text-slate-500 font-medium">{attendees} Attending</p>
            </div>
             <button className="px-4 py-2 border border-slate-200 text-slate-900 font-bold rounded-lg hover:bg-slate-50 transition">
                Join
            </button>
        </div>
    )
}