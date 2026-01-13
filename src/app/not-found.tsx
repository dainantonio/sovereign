import Link from 'next/link';
import { FileQuestion, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center text-center px-4">
      <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 max-w-md w-full">
        <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
          <FileQuestion size={32} />
        </div>
        <h2 className="text-3xl font-extrabold text-slate-900 mb-2">Page Not Found</h2>
        <p className="text-slate-500 mb-8">
          The page you are looking for doesn't exist or has been moved.
        </p>
        <Link 
          href="/dashboard"
          className="flex items-center justify-center gap-2 w-full py-3 bg-slate-900 text-white font-bold rounded-xl hover:bg-slate-800 transition"
        >
          <ArrowLeft size={18} /> Return to Dashboard
        </Link>
      </div>
      <div className="mt-8 text-sm text-slate-400">
        Error 404 • PivotAI System
      </div>
    </div>
  );
}