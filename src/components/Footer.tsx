import React from 'react';
import { ArrowUp, Terminal, Radio, Heart } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-white/10 bg-[#040406] py-8 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Brand & Academic Credential */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-1">
            <div className="flex items-center gap-2">
              <span className="text-xl font-black tracking-tighter text-yellow-400">
                {PERSONAL_INFO.name.toUpperCase()}
              </span>
              <span className="text-[10px] font-mono text-red-500 uppercase tracking-widest px-2 py-0.5 rounded-full bg-red-500/10 border border-red-500/30">
                CSE (IOT & AI)
              </span>
            </div>
            <p className="text-xs font-mono text-gray-400">
              {PERSONAL_INFO.college} • {PERSONAL_INFO.year} • {PERSONAL_INFO.location}
            </p>
          </div>

          {/* Direct Quick Contact in Bento style */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-mono text-gray-400">
            <a
              href={`mailto:${PERSONAL_INFO.contact.email}`}
              className="hover:text-yellow-400 transition-colors"
            >
              EMAIL: {PERSONAL_INFO.contact.email}
            </a>
            <span>•</span>
            <a
              href={`tel:${PERSONAL_INFO.contact.phone}`}
              className="hover:text-red-400 transition-colors"
            >
              TEL: +91 {PERSONAL_INFO.contact.phone}
            </a>
            <span>•</span>
            <a
              href={PERSONAL_INFO.contact.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-yellow-400 hover:text-yellow-300 transition-colors"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
              INSTAGRAM: {PERSONAL_INFO.contact.instagramHandle}
            </a>
          </div>

          {/* Back to Top Button */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-xs font-mono text-gray-300 hover:text-yellow-400 hover:border-yellow-400/40 hover:bg-white/10 transition-all"
            aria-label="Back to top"
          >
            <span>TOP</span>
            <ArrowUp size={13} className="text-yellow-400" />
          </button>
        </div>

        {/* Bottom copyright and telemetry */}
        <div className="pt-4 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between text-[10px] font-mono text-gray-500 gap-3">
          <div>
            &copy; {new Date().getFullYear()} {PERSONAL_INFO.name}. GM UNIVERSITY // CSE // 2024-28
          </div>
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1 text-emerald-400">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
              CORE_SERVER: ACTIVE
            </span>
            <span>•</span>
            <span className="text-gray-400">THEME: BENTO_GRID_V2</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
