"use client";

import React, { useState, useEffect } from 'react';
import { 
  Activity, 
  ShieldAlert, 
  CheckCircle, 
  BrainCircuit, 
  Search, 
  AlertTriangle,
  ArrowLeft,
  Terminal
} from 'lucide-react';
import Link from 'next/link';

export default function FinanceSandbox() {
  const [logs, setLogs] = useState<any[]>([]);
  const [aiConfidence, setAiConfidence] = useState(99.8);
  const [isPaused, setIsPaused] = useState(false);
  const [selectedTx, setSelectedTx] = useState<any>(null);
  const [hasCaughtFraud, setHasCaughtFraud] = useState(false);

  // Simulate live transaction feed
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      const newTx = generateTransaction();
      setLogs(prev => [newTx, ...prev].slice(0, 20)); // Keep last 20
    }, 800);

    return () => clearInterval(interval);
  }, [isPaused]);

  // The "Game Logic"
  const generateTransaction = () => {
    const isFraud = Math.random() > 0.95; // 5% chance of the "Target" appearing
    return {
      id: `TXN-${Math.floor(Math.random() * 90000) + 10000}`,
      amount: Math.floor(Math.random() * 50000),
      vendor: isFraud ? "NEXUS_SHELL_CORP_04" : ["AWS_BILLING", "STRIPE_PAYOUT", "CLOUD_VENDER_X", "ORACLE_DB"].sort(() => 0.5 - Math.random())[0],
      status: "APPROVED", // AI always approves by default
      aiNote: isFraud ? "PASSED: PATTERN MATCHES RECURRING VENDOR" : "PASSED: STANDARD THRESHOLD",
      riskScore: isFraud ? 12 : Math.floor(Math.random() * 5), // Low risk score (AI is being tricked)
      isFraudTarget: isFraud, 
      timestamp: new Date().toLocaleTimeString()
    };
  };

  const handleInspect = (tx: any) => {
    setIsPaused(true);
    setSelectedTx(tx);
  };

  const handleOverride = () => {
    if (selectedTx.isFraudTarget) {
      setHasCaughtFraud(true);
      setAiConfidence(84.2); // AI confidence drops because human corrected it
    } else {
      alert("System Warning: That was a legitimate transaction. Efficiency score penalized.");
      setIsPaused(false);
      setSelectedTx(null);
    }
  };

  return (
    <div className="min-h-screen bg-[#050505] text-[#E2E2E2] font-mono selection:bg-[#C5A059] selection:text-black">
      
      {/* Header */}
      <header className="h-14 border-b border-[#1F1F22] bg-[#0A0A0B] flex items-center justify-between px-6 sticky top-0 z-50">
        <div className="flex items-center space-x-4">
          <Link href="/dashboard" className="text-[#555] hover:text-[#E2E2E2]"><ArrowLeft size={16} /></Link>
          <span className="text-[#C5A059] font-bold tracking-widest text-xs uppercase">Finance Ops // Simulation 01</span>
        </div>
        <div className="flex items-center space-x-4 text-xs">
          <div className="flex items-center space-x-2">
             <span className="text-[#555]">AI_CONFIDENCE:</span>
             <span className={`${hasCaughtFraud ? 'text-red-500' : 'text-[#00FF85]'}`}>{aiConfidence}%</span>
          </div>
          <div className="w-px h-4 bg-[#1F1F22]" />
          <div className="flex items-center space-x-2">
             <div className={`w-2 h-2 rounded-full ${isPaused ? 'bg-yellow-500' : 'bg-[#00FF85] animate-pulse'}`} />
             <span className="text-[#555]">{isPaused ? 'INTERVENTION_REQUIRED' : 'LIVE_STREAM'}</span>
          </div>
        </div>
      </header>

      <main className="grid grid-cols-1 lg:grid-cols-3 h-[calc(100vh-56px)]">
        
        {/* Left: The Feed */}
        <div className="lg:col-span-2 border-r border-[#1F1F22] p-6 overflow-hidden flex flex-col">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-sm font-bold text-[#E2E2E2] flex items-center"><Activity size={16} className="mr-2 text-[#C5A059]"/> TRANSACTION_LEDGER</h2>
            <span className="text-[10px] text-[#555]">AUTO-APPROVAL ACTIVE</span>
          </div>
          
          <div className="flex-1 overflow-y-auto space-y-2 pr-2">
            {logs.map((tx) => (
              <div 
                key={tx.id} 
                onClick={() => handleInspect(tx)}
                className={`
                  p-4 border rounded cursor-pointer transition-all hover:border-[#C5A059] group
                  ${selectedTx?.id === tx.id ? 'border-[#C5A059] bg-[#C5A059]/10' : 'border-[#1F1F22] bg-[#0F0F10]'}
                  ${tx.isFraudTarget ? 'hover:bg-red-900/10' : ''}
                `}
              >
                <div className="flex justify-between items-center">
                  <div className="flex items-center space-x-4">
                    <span className="text-[10px] text-[#555]">{tx.timestamp}</span>
                    <span className="text-sm font-bold text-white w-32">{tx.id}</span>
                    <span className="text-xs text-[#888] w-40">{tx.vendor}</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <span className="text-sm font-mono">${tx.amount.toLocaleString()}</span>
                    <span className="text-[10px] px-2 py-1 rounded bg-[#1F1F22] text-[#00FF85] group-hover:bg-[#00FF85] group-hover:text-black transition-colors">
                      {tx.status}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: The Inspector */}
        <div className="lg:col-span-1 bg-[#0A0A0B] p-6 flex flex-col">
           {!selectedTx ? (
             <div className="flex-1 flex flex-col items-center justify-center text-[#333] space-y-4">
               <Search size={48} />
               <p className="text-xs text-center tracking-widest">SELECT TRANSACTION TO INSPECT</p>
             </div>
           ) : (
             <div className="flex-1 flex flex-col animate-in slide-in-from-right-4">
               <div className="border-b border-[#1F1F22] pb-6 mb-6">
                 <div className="flex justify-between items-start mb-4">
                    <span className="text-2xl font-bold text-white">{selectedTx.id}</span>
                    <span className="text-xs px-2 py-1 bg-[#1F1F22] rounded text-[#888]">{selectedTx.timestamp}</span>
                 </div>
                 <div className="space-y-4">
                    <div className="flex justify-between">
                      <span className="text-xs text-[#555]">VENDOR_ID</span>
                      <span className="text-sm text-[#E2E2E2]">{selectedTx.vendor}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-xs text-[#555]">AMOUNT</span>
                      <span className="text-xl text-[#E2E2E2] font-bold">${selectedTx.amount.toLocaleString()}</span>
                    </div>
                 </div>
               </div>

               {/* AI Logic Reveal */}
               <div className="bg-[#1F1F22]/50 p-4 rounded mb-6 border border-[#333]">
                 <div className="flex items-center space-x-2 mb-2">
                   <BrainCircuit size={14} className="text-[#00FF85]" />
                   <span className="text-[10px] text-[#00FF85] tracking-widest">AGENT_LOGIC</span>
                 </div>
                 <p className="text-xs text-[#888] leading-relaxed">
                   "{selectedTx.aiNote}"
                 </p>
                 <div className="mt-3 flex items-center justify-between text-[10px]">
                    <span className="text-[#555]">CALCULATED RISK:</span>
                    <span className="text-white">{selectedTx.riskScore}/100</span>
                 </div>
               </div>

               {/* Human Intervention Panel */}
               <div className="mt-auto">
                 {hasCaughtFraud && selectedTx.isFraudTarget ? (
                    <div className="p-6 bg-[#00FF85]/10 border border-[#00FF85] rounded text-center">
                      <CheckCircle size={32} className="text-[#00FF85] mx-auto mb-2" />
                      <h3 className="text-[#00FF85] font-bold">ANOMALY INTERCEPTED</h3>
                      <p className="text-[10px] text-[#E2E2E2] mt-2">
                        You successfully identified a "Nexus Shell" synthetic vendor that the AI missed due to recurring billing patterns.
                      </p>
                      <button 
                        onClick={() => { setIsPaused(false); setHasCaughtFraud(false); setSelectedTx(null); }}
                        className="mt-4 w-full py-2 bg-[#00FF85] text-black font-bold text-xs rounded hover:bg-white"
                      >
                        RESUME FEED
                      </button>
                    </div>
                 ) : (
                    <div className="space-y-3">
                      <button 
                         onClick={() => { setIsPaused(false); setSelectedTx(null); }}
                         className="w-full py-3 border border-[#333] text-[#888] rounded hover:border-[#E2E2E2] hover:text-white transition-all text-xs font-bold"
                      >
                        CONFIRM APPROVAL (LEGITIMATE)
                      </button>
                      <button 
                         onClick={handleOverride}
                         className="w-full py-3 bg-[#C5A059] text-black rounded hover:bg-[#D4B370] transition-all text-xs font-bold flex items-center justify-center"
                      >
                        <ShieldAlert size={14} className="mr-2" />
                        OVERRIDE & FLAG FRAUD
                      </button>
                    </div>
                 )}
               </div>
             </div>
           )}
        </div>

      </main>
    </div>
  );
}