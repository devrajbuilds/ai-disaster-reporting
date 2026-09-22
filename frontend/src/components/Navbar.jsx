import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  ShieldAlert, ChevronDown, Shield, Search, FileText, 
  AlertTriangle, PhoneCall, ShieldCheck, Sun, Moon 
} from 'lucide-react';

export default function Navbar() {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState('dark');
  const [isRotating, setIsRotating] = useState(false);

  const isActive = (path) => location.pathname === path;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (theme === 'light') {
      document.body.classList.add('light');
    } else {
      document.body.classList.remove('light');
    }
  }, [theme]);

  const toggleTheme = () => {
    setIsRotating(true);
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
    setTimeout(() => setIsRotating(false), 500);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 py-4 px-4 sm:px-8 transition-all duration-300">
      {/* SINGLE WE-EVOLVE-IT STYLE GLASS PILL CONTAINING LOGO + NAV + ACTIONS */}
      <div
        className={`max-w-7xl mx-auto rounded-full we-evolve-pill px-5 sm:px-6 flex items-center justify-between gap-4 transition-all duration-300 ${
          scrolled ? 'py-2 sm:py-2.5 shadow-2xl' : 'py-3 sm:py-3.5'
        }`}
      >
        {/* 1. Brand Logo */}
        <Link to="/" className="flex items-center gap-3 shrink-0 group">
          <div className="p-2 rounded-xl bg-linear-to-tr from-indigo-600 via-purple-600 to-pink-500 text-white transition-all duration-300 group-hover:rotate-12 group-hover:scale-110">
            <ShieldAlert className="w-4 h-4 sm:w-5 sm:h-5" />
          </div>
          <span className="font-extrabold text-lg sm:text-xl tracking-tight text-white group-hover:text-purple-300 transition">
            ResQ<span className="text-purple-400">AI</span>
          </span>
        </Link>

        {/* 2. Central Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1">
          <Link
            to="/report"
            className={`nav-pill-item flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 group/item ${
              isActive('/report') 
                ? 'text-white bg-purple-600/40 border border-purple-500/50' 
                : 'text-slate-300 hover:text-white'
            }`}
          >
            <FileText className="w-3.5 h-3.5 text-purple-400 group-hover/item:-translate-y-0.5 transition-transform" />
            <span>Submit Emergency</span>
          </Link>

          <Link
            to="/track"
            className={`nav-pill-item flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 group/item ${
              isActive('/track') 
                ? 'text-white bg-blue-600/40 border border-blue-500/50' 
                : 'text-slate-300 hover:text-white'
            }`}
          >
            <Search className="w-3.5 h-3.5 text-blue-400 group-hover/item:scale-125 transition-transform" />
            <span>Track Report</span>
          </Link>

          {/* Item 3: Active Alerts Dropdown */}
<div className="relative group">
  <button 
    type="button"
    className="nav-pill-item flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold text-slate-300 hover:text-white transition cursor-pointer"
  >
    <AlertTriangle className="w-3.5 h-3.5 text-amber-400 group-hover:animate-bounce" />
    <span>Active Alerts</span>
    <ChevronDown className="w-3.5 h-3.5 text-slate-400 group-hover:rotate-180 transition-transform duration-300" />
  </button>

  {/* Dropdown Container with Hover Bridge (pt-3) & Highest Elevation (z-50) */}
  <div className="absolute top-full left-0 pt-3 w-60 hidden group-hover:block z-50">
    <div className="py-2 bg-slate-900/95 border border-slate-800 rounded-2xl shadow-2xl backdrop-blur-2xl">
      <span className="block px-4 py-1.5 text-[10px] font-bold text-slate-500 uppercase tracking-wider">
        Disaster Zones
      </span>
      <a 
        href="#floods" 
        className="flex items-center justify-between px-4 py-2 text-xs text-slate-300 hover:bg-purple-600/20 hover:text-white transition"
      >
        <span>Flood & Rainfall Warnings</span>
        <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
      </a>
      <a 
        href="#wildfires" 
        className="flex items-center justify-between px-4 py-2 text-xs text-slate-300 hover:bg-purple-600/20 hover:text-white transition"
      >
        <span>Fire Hazard Alerts</span>
        <span className="w-1.5 h-1.5 rounded-full bg-red-400"></span>
      </a>
      <a 
        href="#cyclones" 
        className="flex items-center justify-between px-4 py-2 text-xs text-slate-300 hover:bg-purple-600/20 hover:text-white transition"
      >
        <span>Cyclone & High Winds</span>
        <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
      </a>
    </div>
  </div>
</div>

          <a href="#helplines" className="nav-pill-item flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-slate-300 hover:text-white transition">
            <PhoneCall className="w-3.5 h-3.5 text-emerald-400" />
            <span>Safety & Helplines</span>
          </a>

          <a href="#how-it-works" className="nav-pill-item flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-slate-300 hover:text-white transition">
            <ShieldCheck className="w-3.5 h-3.5 text-indigo-400" />
            <span>How AI Verifies</span>
          </a>
        </nav>

        {/* 3. Right: Theme Toggle + Authority Sign In */}
        <div className="flex items-center gap-2.5 shrink-0">
          <button
            type="button"
            onClick={toggleTheme}
            className={`p-2 rounded-full bg-slate-900/80 border border-slate-800 text-slate-300 hover:text-white transition shadow-inner ${
              isRotating ? 'rotate-360 scale-110' : ''
            }`}
            title="Toggle Light/Dark Theme"
          >
            {theme === 'dark' ? (
              <Sun className="w-4 h-4 text-amber-400" />
            ) : (
              <Moon className="w-4 h-4 text-indigo-400" />
            )}
          </button>

          <Link
            to="/authority-login"
            className="flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold text-slate-950 bg-white hover:bg-slate-100 transition shadow-[0_0_20px_rgba(255,255,255,0.25)] hover:scale-105"
          >
            <Shield className="w-3.5 h-3.5 text-purple-700" />
            <span>Authority Sign In</span>
          </Link>
        </div>

      </div>
    </header>
  );
}