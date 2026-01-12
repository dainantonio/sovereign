"use client";

import React, { useState, useEffect, useRef } from 'react';
import { 
  Send, 
  Cpu, 
  ShieldCheck, 
  BrainCircuit,
  Fingerprint,
  Activity,
  ChevronRight
} from 'lucide-react';

// --- Types ---
interface Message {
  id: string;
  role: 'system' | 'ai' | 'user';
  content: string;
  isTyping?: boolean;
  extractedSkills?: string[];
}

interface Skill {
  name: string;
  confidence: number;
  category: 'human' | 'technical';
}

// --- Main Component ---
export default function SovereignForensicInterface() {
  // --- State ---
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      role: 'ai',
      content: "Identify yourself. What was your last official title, and what was the one task you performed that felt like 'art'—the part where you had to use your gut because the manual didn't cover it?",
    }
  ]);
  const [input, setInput] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [discoveredSkills, setDiscoveredSkills] = useState<Skill[]>([]);
  const [hriScore, setHriScore] = useState(0); // Human Resilience Index
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // --- Scroll to bottom on new message ---
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // --- Mock AI Logic (The "Forensic Script") ---
  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMsg: Message = { id: Date.now().toString(), role: 'user', content: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsProcessing(true);

    // Simulate "Thinking" Delay
    setTimeout(() => {
      // 1. First Response: The Analysis
      const analysisMsg: Message = {
        id: (Date.now() + 1).toString(),
        role: 'ai',
        content: "Processing...",
        isTyping: true
      };
      setMessages(prev => [...prev, analysisMsg]);

      setTimeout(() => {
        // 2. Update with actual content based on interaction count
        const newSkills: Skill[] = [
          { name: "Forensic Empathy", confidence: 88, category: 'human' },
          { name: "Crisis Negotiation", confidence: 92, category: 'human' },
          { name: "Regulatory Intuition", confidence: 75, category: 'technical' }
        ];

        setMessages(prev => prev.map(m => 
          m.id === analysisMsg.id 
            ? {
                ...m,
                isTyping: false,
                content: "I've analyzed your input. That isn't just 'Support'. That is **High-Stakes Forensic Empathy**. While an AI can scan a policy, it cannot navigate the ethical gray zones you described. \n\nI have detected 3 Sovereign Traits that form your 'Human Moat'.",
                extractedSkills: ["Forensic Empathy", "Crisis Negotiation", "Regulatory Intuition"]
              }
            : m
        ));
        
        // Animate Skills adding to HUD
        addSkillsSequentially(newSkills);
        setIsProcessing(false);
      }, 2000);
    }, 800);
  };

  const addSkillsSequentially = (skills: Skill[]) => {
    skills.forEach((skill, index) => {
      setTimeout(() => {
        setDiscoveredSkills(prev => [...prev, skill]);
        setHriScore(prev => prev + Math.floor(skill.confidence / 3));
      }, index * 800);
    });
  };

  return (
    <div className="flex h-screen w-full bg-[#0A0A0B] text-[#E2E2E2] font-sans overflow-hidden selection:bg-[#C5A059] selection:text-black">
      
      {/* --- Left Panel: The HUD (Heads Up Display) --- */}
      <div className="hidden md:flex w-80 flex-col border-r border-[#1F1F22] bg-[#0A0A0B]/50 backdrop-blur-sm relative">
        {/* Background Grid Texture */}
        <div className="absolute inset-0 opacity-5 pointer-events-none" 
             style={{ backgroundImage: 'linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)', backgroundSize: '20px 20px' }}>
        </div>

        {/* Logo Area */}
        <div className="p-6 border-b border-[#1F1F22] flex items-center space-x-3">
          <div className="w-8 h-8 rounded-full border border-[#C5A059] flex items-center justify-center shadow-[0_0_10px_rgba(197,160,89,0.2)]">
            <Fingerprint className="w-5 h-5 text-[#C5A059]" />
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-lg tracking-wide text-[#E2E2E2] font-bold">SOVEREIGN</span>
            <span className="text-[10px] uppercase tracking-widest text-[#555] font-mono">Protocol v1.0</span>
          </div>
        </div>

        {/* Live Metrics */}
        <div className="p-6 flex-1 overflow-y-auto space-y-8">
          
          {/* HRI Score Gauge */}
          <div>
            <div className="flex justify-between items-end mb-2">
              <span className="text-xs uppercase tracking-widest text-[#555] font-mono">Human Resilience Index</span>
              <span className="text-[#C5A059] font-mono text-xl">{hriScore}/100</span>
            </div>
            <div className="h-1 w-full bg-[#1F1F22] rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-[#C5A059] to-[#00FF85] transition-all duration-1000 ease-out"
                style={{ width: `${hriScore}%` }}
              />
            </div>
          </div>

          {/* Detected Skills Stream */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Activity className="w-4 h-4 text-[#00FF85]" />
              <span className="text-xs uppercase tracking-widest text-[#555] font-mono">Live Extraction</span>
            </div>
            
            <div className="space-y-3">
              {discoveredSkills.length === 0 ? (
                <div className="text-center py-10 opacity-20 text-sm font-mono border border-dashed border-[#333] rounded">
                  AWAITING INPUT...
                </div>
              ) : (
                discoveredSkills.map((skill, idx) => (
                  <div key={idx} className="group relative bg-[#0F0F10] border border-[#1F1F22] p-3 rounded hover:border-[#C5A059]/50 transition-colors animate-in slide-in-from-left-4 fade-in duration-500">
                    <div className="flex justify-between items-start">
                      <span className="text-sm font-medium text-[#E2E2E2]">{skill.name}</span>
                      <span className="text-[10px] font-mono text-[#00FF85]">{skill.confidence}%</span>
                    </div>
                    <div className="mt-2 flex items-center space-x-2">
                      <span className={`w-1.5 h-1.5 rounded-full ${skill.category === 'human' ? 'bg-[#C5A059]' : 'bg-blue-500'}`} />
                      <span className="text-[10px] uppercase text-[#555]">{skill.category} Moat</span>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>

        {/* Footer Status */}
        <div className="p-4 border-t border-[#1F1F22] bg-[#0A0A0B]">
          <div className="flex items-center space-x-2 text-[10px] text-[#444] font-mono">
            <div className="w-2 h-2 rounded-full bg-[#00FF85] animate-pulse" />
            <span>SYSTEM: ONLINE</span>
            <span className="mx-2">|</span>
            <span>LATENCY: 12ms</span>
          </div>
        </div>
      </div>

      {/* --- Right Panel: The Chat Interface --- */}
      <div className="flex-1 flex flex-col relative z-10">
        
        {/* Chat Area */}
        <div className="flex-1 overflow-y-auto p-4 md:p-8 space-y-6 scrollbar-thin scrollbar-thumb-[#1F1F22] scrollbar-track-transparent">
          {messages.map((msg) => (
            <div 
              key={msg.id} 
              className={`flex w-full ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div className={`max-w-[85%] md:max-w-[70%] flex flex-col ${msg.role === 'user' ? 'items-end' : 'items-start'}`}>
                
                {/* Avatar / Role Label */}
                <div className="flex items-center space-x-2 mb-2">
                  {msg.role === 'ai' && <BrainCircuit className="w-4 h-4 text-[#C5A059]" />}
                  {msg.role === 'user' && <div className="w-4 h-4 rounded bg-[#333]" />}
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#555]">
                    {msg.role === 'ai' ? 'Forensic Architect' : 'Candidate'}
                  </span>
                </div>

                {/* Bubble */}
                <div 
                  className={`
                    relative p-6 rounded-lg text-sm md:text-base leading-relaxed
                    ${msg.role === 'user' 
                      ? 'bg-[#1A1A1C] border border-[#333] text-[#E2E2E2]' 
                      : 'bg-transparent border-l-2 border-[#C5A059] pl-6 text-[#E2E2E2]'
                    }
                  `}
                >
                  {msg.isTyping ? (
                    <div className="flex space-x-1 h-6 items-center">
                      <div className="w-1.5 h-1.5 bg-[#C5A059] rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                      <div className="w-1.5 h-1.5 bg-[#C5A059] rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                      <div className="w-1.5 h-1.5 bg-[#C5A059] rounded-full animate-bounce"></div>
                    </div>
                  ) : (
                    <div className="whitespace-pre-wrap">
                      {msg.content.split('**').map((part, i) => 
                        i % 2 === 1 ? <span key={i} className="text-[#C5A059] font-medium">{part}</span> : part
                      )}
                    </div>
                  )}
                  
                  {/* Extracted Skills Pop-up (Visual Feedback inside chat) */}
                  {msg.extractedSkills && (
                    <div className="mt-4 pt-4 border-t border-[#1F1F22] grid grid-cols-1 md:grid-cols-2 gap-2">
                      {msg.extractedSkills.map(skill => (
                        <div key={skill} className="flex items-center space-x-2 text-xs text-[#00FF85] font-mono bg-[#00FF85]/5 p-2 rounded border border-[#00FF85]/20">
                          <ShieldCheck className="w-3 h-3" />
                          <span>{skill} DETECTED</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <div className="p-4 md:p-8 pt-0">
          <form 
            onSubmit={handleSendMessage}
            className="relative group bg-[#0A0A0B] border border-[#1F1F22] rounded-xl overflow-hidden shadow-2xl transition-all duration-300 focus-within:border-[#C5A059] focus-within:shadow-[0_0_20px_rgba(197,160,89,0.1)]"
          >
            {/* Input Decorators */}
            <div className="absolute top-3 left-4 text-[#C5A059]">
              <ChevronRight className="w-4 h-4" />
            </div>

            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your response..."
              disabled={isProcessing}
              className="w-full bg-transparent text-[#E2E2E2] p-3 pl-10 pr-12 focus:outline-none placeholder:text-[#333] font-mono text-sm h-14"
              autoFocus
            />

            {/* Send Button */}
            <button
              type="submit"
              disabled={!input.trim() || isProcessing}
              className={`
                absolute right-2 top-2 bottom-2 aspect-square flex items-center justify-center rounded-lg transition-all duration-200
                ${input.trim() && !isProcessing 
                  ? 'bg-[#C5A059] text-black hover:bg-[#D4B370] cursor-pointer' 
                  : 'bg-[#1F1F22] text-[#444] cursor-not-allowed'}
              `}
            >
              {isProcessing ? (
                <Cpu className="w-4 h-4 animate-spin" />
              ) : (
                <Send className="w-4 h-4" />
              )}
            </button>
            
            {/* Corner Accent */}
            <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-[#C5A059] opacity-50" />
            <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-[#C5A059] opacity-50" />
          </form>
          
          <div className="text-center mt-3">
             <span className="text-[10px] text-[#444] font-mono uppercase tracking-widest">
               Sovereign Intelligence Secure Channel • 256-bit Encrypted
             </span>
          </div>
        </div>
      </div>
    </div>
  );
}