"use client";

import React, { useState, useEffect, useRef } from 'react';
import { Send, Fingerprint, Activity } from 'lucide-react';

export default function ForensicPage() {
  const [messages, setMessages] = useState([
    { role: 'ai', content: "System initialized. State your last professional title and describe a high-stakes decision you made where the data was insufficient." }
  ]);
  const [input, setInput] = useState('');
  const [hri, setHri] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSend = (e: any) => {
    e.preventDefault();
    if (!input.trim()) return;
    setMessages(prev => [...prev, { role: 'user', content: input }]);
    setInput('');
    setTimeout(() => {
      setMessages(prev => [...prev, { role: 'ai', content: "Pattern identified. You utilized **Forensic Intuition**. This matches the 'Human Moat' profile for Strategic Governance. Indexing logic signature..." }]);
      setHri(prev => Math.min(prev + 25, 100));
    }, 1000);
  };

  return (
    <div className="flex h-screen bg-[#0A0A0B] text-[#E2E2E2] font-sans">
      <div className="w-80 border-r border-[#1F1F22] p-8 hidden md:flex flex-col bg-[#050505]">
        <div className="flex items-center space-x-3 mb-12">
          <Fingerprint className="text-[#C5A059]" />
          <span className="font-serif font-bold tracking-widest uppercase">Sovereign</span>
        </div>
        <div className="flex-1">
          <p className="text-[10px] font-mono text-[#444] mb-4 uppercase tracking-widest">Resilience Index</p>
          <div className="text-4xl font-serif font-bold italic text-[#C5A059] mb-4">{hri}%</div>
          <div className="h-1 bg-[#1F1F22] rounded-full overflow-hidden">
            <div className="h-full bg-[#C5A059] transition-all duration-1000" style={{ width: `${hri}%` }} />
          </div>
        </div>
        <a href="/dashboard" className="p-4 border border-[#333] rounded text-[10px] text-center hover:border-[#C5A059] transition-colors font-mono tracking-widest">
          FINALIZE AUDIT
        </a>
      </div>

      <div className="flex-1 flex flex-col p-6">
        <div className="flex-1 overflow-y-auto space-y-6 pb-10">
          {messages.map((m, i) => (
            <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-xl p-6 rounded-lg text-sm leading-relaxed ${m.role === 'user' ? 'bg-[#1F1F22] border border-[#333]' : 'border-l-2 border-[#C5A059] bg-[#0F0F10]'}`}>
                {m.content}
              </div>
            </div>
          ))}
          <div ref={scrollRef} />
        </div>
        <form onSubmit={handleSend} className="relative max-w-4xl mx-auto w-full">
          <input value={input} onChange={(e) => setInput(e.target.value)} className="w-full bg-[#0F0F10] border border-[#1F1F22] p-4 pr-12 rounded-lg font-mono text-xs focus:border-[#C5A059] outline-none" placeholder="Awaiting expert input..." />
          <button type="submit" className="absolute right-4 top-4 text-[#C5A059]"><Send size={18} /></button>
        </form>
      </div>
    </div>
  );
}