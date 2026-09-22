import React from 'react';
import { Link } from 'react-router-dom';
import { 
  FilePlus, Search, ShieldCheck, ArrowRight, Layers, 
  Cpu, Filter, Zap, CheckCircle2, Lock, Radio, Activity
} from 'lucide-react';

export default function Home() {
  return (
    <div className="space-y-24 pb-16">
      
      {/* 1. HERO SECTION: 2 Primary Citizen Action Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 space-y-10">
        
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 text-xs font-bold uppercase tracking-wider shadow-[0_0_15px_rgba(168,85,247,0.2)]">
            <Radio className="w-3.5 h-3.5 text-purple-400 animate-pulse" />
            AI Disaster Intelligence & Response Network
          </div>

          <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight leading-tight">
            Rapid Disaster Reporting & <span className="bg-clip-text text-transparent bg-linear-to-r from-purple-400 via-pink-400 to-indigo-300">Live AI Prioritization</span>
          </h1>

          <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Report ongoing emergency incidents directly to authorities or track the response status of your previously submitted report in real time.
          </p>
        </div>

        {/* TWO MAIN CITIZEN OPTION CARDS */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto pt-2">
  
  {/* OPTION 1: REPORT AN INCIDENT */}
  <div className="spatial-card p-8 rounded-3xl relative overflow-hidden group border-purple-500/20 hover:border-purple-500/50 flex flex-col justify-between items-center text-center space-y-6">
    <div className="flex flex-col items-center space-y-4">
      <div className="p-3.5 bg-linear-to-tr from-purple-600 to-indigo-600 rounded-2xl text-white shadow-[0_0_20px_rgba(147,51,234,0.4)] group-hover:scale-110 transition duration-300">
        <FilePlus className="w-7 h-7" />
      </div>
      <h2 className="text-2xl font-black text-white group-hover:text-purple-300 transition">
        Report an Incident
      </h2>
      <p className="text-slate-300 text-xs sm:text-sm leading-relaxed max-w-md">
        Submit photos, geotagged location, and details of an ongoing emergency (Floods, Landslides, Fires, Infrastructure Damage).
      </p>
      
      <ul className="space-y-2 text-xs text-slate-400 pt-2 flex flex-col items-start text-left">
        <li className="flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
          <span>Multimodal image & location verification</span>
        </li>
        <li className="flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
          <span>Generates unique Report Tracking ID instantly</span>
        </li>
      </ul>
    </div>

    {/* Purple Themed Animated Button (Centered) */}
    <div className="pt-2 flex justify-center w-full">
      <Link to="/report" className="cssbuttons-io-button btn-purple">
        <span>Start Incident Report</span>
        <div className="icon">
          <svg
            height="24"
            width="24"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 0h24v24H0z" fill="none"></path>
            <path
              d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
              fill="currentColor"
            ></path>
          </svg>
        </div>
      </Link>
    </div>
  </div>

  {/* OPTION 2: TRACK YOUR REPORT */}
  <div className="spatial-card p-8 rounded-3xl relative overflow-hidden group border-blue-500/20 hover:border-blue-500/50 flex flex-col justify-between items-center text-center space-y-6">
    <div className="flex flex-col items-center space-y-4">
      <div className="p-3.5 bg-linear-to-tr from-blue-600 to-cyan-600 rounded-2xl text-white shadow-[0_0_20px_rgba(37,99,235,0.4)] group-hover:scale-110 transition duration-300">
        <Search className="w-7 h-7" />
      </div>
      <h2 className="text-2xl font-black text-white group-hover:text-blue-300 transition">
        Track Report Status
      </h2>
      <p className="text-slate-300 text-xs sm:text-sm leading-relaxed max-w-md">
        Check the AI priority ranking, cluster deduplication status, and authority dispatch progress using your Report ID.
      </p>

      <ul className="space-y-2 text-xs text-slate-400 pt-2 flex flex-col items-start text-left">
        <li className="flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
          <span>Real-time status updates from operations team</span>
        </li>
        <li className="flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
          <span>View cluster groupings for duplicate alerts</span>
        </li>
      </ul>
    </div>

    {/* Blue Themed Animated Button (Centered) */}
    <div className="pt-2 flex justify-center w-full">
      <Link to="/track" className="cssbuttons-io-button btn-blue">
        <span>Track Existing Incident</span>
        <div className="icon">
          <svg
            height="24"
            width="24"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 0h24v24H0z" fill="none"></path>
            <path
              d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
              fill="currentColor"
            ></path>
          </svg>
        </div>
      </Link>
    </div>
  </div>

</div>
      </section>

      {/* 2. ABOUT THE SYSTEM SECTION */}
      <section id="about" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="spatial-card p-8 sm:p-12 rounded-3xl border-slate-800 space-y-8">
          <div className="max-w-3xl space-y-3">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              Why ResQAI? Overcoming Emergency Noise
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              During natural disasters or municipal emergencies, public response channels are inundated with hundreds of fragmented, duplicate, or unverified reports. ResQAI organizes chaos into actionable response intelligence.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4">
            <div className="bg-slate-900/80 p-5 rounded-2xl border border-slate-800 space-y-2">
              <h3 className="text-lg font-bold text-white">99.2% Deduplication</h3>
              <p className="text-xs text-slate-400">
                Spatial-temporal clustering merges duplicate citizen reports of the same event into unified entries.
              </p>
            </div>

            <div className="bg-slate-900/80 p-5 rounded-2xl border border-slate-800 space-y-2">
              <h3 className="text-lg font-bold text-white">Cross-Modal AI</h3>
              <p className="text-xs text-slate-400">
                Cross-references photo analysis, description content, geotags, and metadata for high credibility scoring.
              </p>
            </div>

            <div className="bg-slate-900/80 p-5 rounded-2xl border border-slate-800 space-y-2">
              <h3 className="text-lg font-bold text-white">Dynamic Urgency</h3>
              <p className="text-xs text-slate-400">
                Automatically calculates a 0-100 severity index so authorities dispatch help to critical zones first.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. HOW IT WORKS PIPELINE */}
      <section id="how-it-works" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center space-y-2">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">How ResQAI Processes Incidents</h2>
          <p className="text-xs sm:text-sm text-slate-400">From citizen submission to authority dispatch</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="spatial-card p-6 rounded-2xl space-y-3">
            <div className="p-3 bg-purple-600/20 text-purple-400 rounded-xl w-fit">
              <Layers className="w-5 h-5" />
            </div>
            <span className="text-[10px] font-bold text-slate-500 uppercase">Step 1</span>
            <h3 className="text-base font-bold text-white">Citizen Submission</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Citizens submit text descriptions, image evidence, and location coordinates via the web portal.
            </p>
          </div>

          <div className="spatial-card p-6 rounded-2xl space-y-3">
            <div className="p-3 bg-purple-600/20 text-purple-400 rounded-xl w-fit">
              <Cpu className="w-5 h-5" />
            </div>
            <span className="text-[10px] font-bold text-slate-500 uppercase">Step 2</span>
            <h3 className="text-base font-bold text-white">Multimodal Verification</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              AI checks if submitted images match the text claim and evaluates credibility metrics.
            </p>
          </div>

          <div className="spatial-card p-6 rounded-2xl space-y-3">
            <div className="p-3 bg-purple-600/20 text-purple-400 rounded-xl w-fit">
              <Filter className="w-5 h-5" />
            </div>
            <span className="text-[10px] font-bold text-slate-500 uppercase">Step 3</span>
            <h3 className="text-base font-bold text-white">Incident Clustering</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Multiple reports coming from the same geographic coordinates are grouped into a single event.
            </p>
          </div>

          <div className="spatial-card p-6 rounded-2xl space-y-3">
            <div className="p-3 bg-emerald-500/20 text-emerald-400 rounded-xl w-fit">
              <Zap className="w-5 h-5" />
            </div>
            <span className="text-[10px] font-bold text-slate-500 uppercase">Step 4</span>
            <h3 className="text-base font-bold text-white">Authority Dispatch</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Authorities review ranked priority scores (0-100) on their dashboard and deploy field teams.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
}