'use client';

import React, { useState } from 'react';
import { Mic, Send, ArrowLeft, Sparkles, User, Bot } from 'lucide-react';
import Link from 'next/link';

type Message = {
  id: number;
  sender: 'ai' | 'user';
  text: string;
  feedback?: string;
};

export default function InterviewPage() {
  const [sessionState, setSessionState] = useState<'setup' | 'active' | 'feedback'>('setup');
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const questions = [
    "Tell me about a time you had to optimize a prompt for a complex reasoning task. What techniques did you use?",
    "How do you handle 'hallucinations' when working with Large Language Models in a production environment?",
    "Explain the concept of 'Few-Shot Prompting' to a non-technical stakeholder.",
    "Describe a situation where you had to balance cost (tokens) vs performance.",
  ];

  const startInterview = () => {
    setSessionState('active');
    setIsTyping(true);
    setTimeout(() => {
      setMessages([{
        id: 1,
        sender: 'ai',
        text: `Hello! I'm your AI Interviewer today. We're going to practice for the AI Prompt Engineer role. \n\nLet's start with a classic: ${questions[0]}`
      }]);
      setIsTyping(false);
    }, 1500);
  };

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    const newUserMsg: Message = {
      id: Date.now(),
      sender: 'user',
      text: inputValue
    };
    
    // Mock feedback logic
    let mockFeedback = "";
    if (inputValue.length < 50) {
      mockFeedback = "Tip: Your answer was a bit short. Try using the STAR method (Situation, Task, Action, Result).";
    } else {
      mockFeedback = "Great detail! You successfully mentioned specific techniques. Next time, try to quantify the results.";
    }

    newUserMsg.feedback = mockFeedback;

    setMessages(prev => [...prev, newUserMsg]);
    setInputValue('');
    setIsTyping(true);

    // AI Response Simulation
    setTimeout(() => {
      const nextIndex = currentQuestionIndex + 1;
      
      if (nextIndex < questions.length) {
        setMessages(prev => [...prev, {
          id: Date.now() + 1,
          sender: 'ai',
          text: `Thank you for that answer. Moving on:\n\n${questions[nextIndex]}`
        }]);
        setCurrentQuestionIndex(nextIndex);
      } else {
        setMessages(prev => [...prev, {
          id: Date.now() + 1,
          sender: 'ai',
          text: "That concludes our session! You did great. Check the feedback panel on the right for a detailed breakdown."
        }]);
        setSessionState('feedback');
      }
      setIsTyping(false);
    }, 2000);
  };

  return (
    <div className="flex h-screen bg-slate-50 font-sans text-slate-900 overflow-hidden">
      
      {/* Sidebar */}
      <aside className="w-80 bg-white border-r border-slate-200 flex flex-col hidden md:flex">
        <div className="p-4 border-b border-slate-200">
          <Link href="/dashboard" className="flex items-center gap-2 text-sm text-slate-500 hover:text-blue-600 transition mb-4">
            <ArrowLeft size={16} /> Exit Interview
          </Link>
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
              <Bot size={20} />
            </div>
            <div>
              <h2 className="font-bold text-slate-900">Coach Atlas</h2>
              <p className="text-xs text-slate-500">AI Interview Specialist</p>
            </div>
          </div>
        </div>

        <div className="flex-1 p-6 space-y-6">
          <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Target Role</h3>
            <p className="font-bold text-slate-900">AI Prompt Engineer</p>
          </div>

          <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Focus Area</h3>
            <p className="font-bold text-slate-900">Technical & Behavioral</p>
          </div>

          {sessionState === 'feedback' && (
             <div className="bg-green-50 p-4 rounded-xl border border-green-200">
               <h3 className="flex items-center gap-2 font-bold text-green-700 mb-2">
                 <Sparkles size={16} /> Session Score: 88/100
               </h3>
               <p className="text-sm text-green-800 leading-relaxed">
                 Strong technical knowledge. Work on reducing pause fillers and providing more concrete metrics.
               </p>
               <button className="mt-4 w-full py-2 bg-green-600 text-white font-bold rounded-lg text-sm hover:bg-green-700">
                 Download Report
               </button>
             </div>
          )}
        </div>
      </aside>

      {/* Main Chat Area */}
      <main className="flex-1 flex flex-col relative">
        <header className="bg-white border-b border-slate-200 p-4 flex justify-between items-center z-10 shadow-sm">
          <div>
            <h1 className="font-bold text-lg text-slate-900">Mock Interview Session</h1>
            <p className="text-xs text-slate-500">Question {currentQuestionIndex + 1} of {questions.length}</p>
          </div>
          {sessionState === 'active' && (
             <div className="flex items-center gap-2 text-red-500 text-sm font-medium animate-pulse">
               <div className="w-2 h-2 bg-red-500 rounded-full"></div>
               Recording...
             </div>
          )}
        </header>

        {/* Setup Screen */}
        {sessionState === 'setup' && (
          <div className="flex-1 flex flex-col items-center justify-center p-8 text-center bg-slate-50/50">
             <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-xl mb-6 text-blue-600">
                <Mic size={40} />
             </div>
             <h2 className="text-3xl font-bold text-slate-900 mb-4">Ready to practice?</h2>
             <p className="text-slate-600 max-w-md mb-8">
               I will ask you 4 questions specific to prompt engineering. Speak naturally or type your answers.
             </p>
             <button 
               onClick={startInterview}
               className="px-8 py-4 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition shadow-lg shadow-blue-200"
             >
               Start Interview
             </button>
          </div>
        )}

        {/* Chat Interface */}
        {(sessionState === 'active' || sessionState === 'feedback') && (
          <>
            <div className="flex-1 overflow-y-auto p-6 space-y-6 bg-slate-50">
              {messages.map((msg) => (
                <div key={msg.id} className={`flex gap-4 ${msg.sender === 'user' ? 'flex-row-reverse' : ''}`}>
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 shadow-sm ${msg.sender === 'user' ? 'bg-slate-900 text-white' : 'bg-white text-blue-600 border border-blue-100'}`}>
                    {msg.sender === 'user' ? <User size={20} /> : <Bot size={20} />}
                  </div>
                  <div className={`max-w-[80%] space-y-2`}>
                     <div className={`p-4 rounded-2xl shadow-sm leading-relaxed whitespace-pre-wrap ${msg.sender === 'user' ? 'bg-blue-600 text-white rounded-tr-none' : 'bg-white text-slate-800 border border-slate-200 rounded-tl-none'}`}>
                        {msg.text}
                     </div>
                     {msg.feedback && (
                       <div className="bg-yellow-50 border border-yellow-100 p-3 rounded-xl text-sm text-yellow-800 flex items-start gap-2">
                         <Sparkles size={14} className="mt-0.5 shrink-0" />
                         {msg.feedback}
                       </div>
                     )}
                  </div>
                </div>
              ))}
              
              {isTyping && (
                <div className="flex gap-4">
                   <div className="w-10 h-10 rounded-full bg-white text-blue-600 border border-blue-100 flex items-center justify-center shadow-sm">
                      <Bot size={20} />
                   </div>
                   <div className="bg-white border border-slate-200 p-4 rounded-2xl rounded-tl-none flex items-center gap-1">
                      <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce delay-100"></div>
                      <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce delay-200"></div>
                   </div>
                </div>
              )}
            </div>

            {/* Input Area */}
            {sessionState === 'active' && (
              <div className="p-4 bg-white border-t border-slate-200">
                <div className="max-w-4xl mx-auto relative flex items-center gap-2">
                  <input 
                    type="text" 
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
                    placeholder="Type your answer..."
                    className="flex-1 bg-slate-100 border-0 rounded-full px-6 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
                    autoFocus
                  />
                  <button 
                    onClick={handleSendMessage}
                    disabled={!inputValue.trim()}
                    className="p-3 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition disabled:opacity-50"
                  >
                    <Send size={20} />
                  </button>
                </div>
              </div>
            )}
          </>
        )}

      </main>
    </div>
  );
}