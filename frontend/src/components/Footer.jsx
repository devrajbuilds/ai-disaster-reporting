import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldAlert, Shield, Phone, ExternalLink, Activity } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800/80 text-slate-400 pt-16 pb-8 px-4 sm:px-8 relative z-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-slate-800/60">
        
        {/* Brand Overview */}
        <div className="space-y-4 md:col-span-1">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="p-2 rounded-xl bg-linear-to-tr from-indigo-600 via-purple-600 to-pink-500 text-white shadow-[0_0_15px_rgba(124,58,237,0.4)]">
              <ShieldAlert className="w-5 h-5" />
            </div>
            <span className="font-extrabold text-xl tracking-tight text-white">
              ResQ<span className="text-purple-400">AI</span>
            </span>
          </Link>
          <p className="text-xs text-slate-400 leading-relaxed">
            AI-powered emergency disaster reporting, multimodal verification, and priority intelligence platform for rapid response coordination.
          </p>
          <div className="flex items-center gap-2 text-[11px] text-emerald-400 font-semibold bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-full w-fit">
            <Activity className="w-3 h-3 animate-pulse" />
            <span>AI Pipeline Active</span>
          </div>
        </div>

        {/* Quick Citizen Actions */}
        <div className="space-y-3">
          <h4 className="text-sm font-bold text-white tracking-wider uppercase">Citizen Portal</h4>
          <ul className="space-y-2 text-xs">
            <li>
              <Link to="/report" className="hover:text-purple-300 transition flex items-center gap-1">
                <span>Submit Emergency Report</span>
              </Link>
            </li>
            <li>
              <Link to="/track" className="hover:text-purple-300 transition flex items-center gap-1">
                <span>Track Incident Status</span>
              </Link>
            </li>
            <li>
              <a href="#about" className="hover:text-purple-300 transition">About System Verification</a>
            </li>
            <li>
              <a href="#how-it-works" className="hover:text-purple-300 transition">Multimodal Processing Pipeline</a>
            </li>
          </ul>
        </div>

        {/* Authority Access */}
        <div className="space-y-3">
          <h4 className="text-sm font-bold text-white tracking-wider uppercase">Emergency Operations</h4>
          <ul className="space-y-2 text-xs">
            <li>
              <Link to="/authority-signup" className="hover:text-purple-300 transition flex items-center gap-1">
                <Shield className="w-3 h-3 text-purple-400" />
                <span>Authority Sign In / Access</span>
              </Link>
            </li>
            <li>
              <Link to="/dashboard" className="hover:text-purple-300 transition">Live Priority Queue</Link>
            </li>
            <li>
              <a href="#analytics" className="hover:text-purple-300 transition">Incident Analytics & Clustering</a>
            </li>
          </ul>
        </div>

        {/* Emergency Hotline Notice */}
        <div className="space-y-3 bg-slate-900/60 p-4 rounded-2xl border border-slate-800">
          <h4 className="text-xs font-bold text-red-400 uppercase tracking-wider flex items-center gap-1.5">
            <Phone className="w-3.5 h-3.5" /> Direct Emergency Notice
          </h4>
          <p className="text-[11px] text-slate-400 leading-relaxed">
            For immediate life-threatening danger, always contact national emergency services directly before reporting online.
          </p>
          <div className="text-xs font-bold text-white bg-red-500/10 border border-red-500/20 px-3 py-1.5 rounded-lg text-center">
            National Emergency: 112 / 108
          </div>
        </div>

      </div>

      {/* Sub-footer Copyright */}
      <div className="max-w-7xl mx-auto pt-6 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-500 gap-4">
        <p>© 2026 ResQAI Intelligence Platform. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-slate-400 transition">Privacy Policy</a>
          <a href="#" className="hover:text-slate-400 transition">Terms of Service</a>
          <a href="#" className="hover:text-slate-400 transition">API Documentation</a>
        </div>
      </div>
    </footer>
  );
}