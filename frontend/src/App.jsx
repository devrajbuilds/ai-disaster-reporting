import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import CitizenReport from './pages/CitizenReport';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-slate-950 flex flex-col font-sans text-slate-100 relative">
        <Navbar />
        <main className="flex-1 pt-28">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/report" element={<CitizenReport />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}