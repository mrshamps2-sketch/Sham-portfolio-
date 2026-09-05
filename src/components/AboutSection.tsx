import React from 'react';
import { GraduationCap, MapPin, Cpu, Brain, Flame, CheckCircle2, Award, Terminal } from 'lucide-react';
import { motion } from 'motion/react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with futuristic numbering & glow */}
        <div className="flex flex-col items-start mb-16">
          <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-yellow-400 mb-2">
            <span className="w-6 h-[1px] bg-yellow-400" />
            <span>01 // BIOGRAPHY & EDUCATION</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight uppercase">
            ABOUT <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-amber-300 to-red-500">ME</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-yellow-400 to-red-500 mt-3 rounded-full" />
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Biography Card */}
          <div className="lg:col-span-7 space-y-4">
            <div className="bg-white/[0.04] border border-white/10 rounded-3xl p-6 sm:p-8 backdrop-blur-xl relative overflow-hidden group shadow-2xl">
              {/* Corner accents */}
              <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-yellow-400 pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-red-500 pointer-events-none" />

              {/* Bio Terminal Header */}
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/10 font-mono text-xs text-neutral-400">
                <span className="flex items-center gap-2 text-yellow-400 font-semibold">
                  <Terminal size={14} />
                  <span>CANDIDATE_PROFILE.MD</span>
                </span>
                <span className="px-3 py-1 rounded-full bg-yellow-400/10 text-yellow-300 border border-yellow-500/20 text-[10px] font-bold">
                  DEVELOPER DOSSIER
                </span>
              </div>

              {/* Exact User Provided Paragraphs */}
              <div className="space-y-4 text-neutral-200 text-base sm:text-lg leading-relaxed font-body">
                {PERSONAL_INFO.aboutMeParagraphs.map((para, index) => (
                  <p key={index} className="relative pl-3 border-l-2 border-yellow-400/40">
                    {para}
                  </p>
                ))}
              </div>

              {/* Core Strengths Chips */}
              <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap gap-2">
                {[
                  'Artificial Intelligence',
                  'IoT Sensor Systems',
                  'Embedded C/C++',
                  'Python ML & Vision',
                  'Automation & Edge Nodes',
                  'Renewable Energy Concepts',
                  'Hackathon Problem Solving'
                ].map((tag) => (
                  <span
                    key={tag}
                    className="font-mono text-xs px-3 py-1.5 rounded-xl bg-black/40 text-neutral-300 border border-white/10 hover:border-yellow-400/50 hover:text-yellow-300 transition-colors"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Quick Metrics Bar in Bento Style */}
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-white/[0.04] border border-white/10 p-5 rounded-2xl backdrop-blur-xl text-center hover:border-yellow-400/30 transition-colors">
                <div className="text-3xl font-black font-mono text-yellow-400">03</div>
                <div className="text-[10px] font-mono text-neutral-400 uppercase tracking-wider mt-1">Hackathons</div>
              </div>
              <div className="bg-red-500/10 border border-red-500/20 p-5 rounded-2xl backdrop-blur-xl text-center hover:border-red-500/40 transition-colors">
                <div className="text-3xl font-black font-mono text-red-400">04+</div>
                <div className="text-[10px] font-mono text-red-300 uppercase tracking-wider mt-1">Core Projects</div>
              </div>
              <div className="bg-white/[0.04] border border-white/10 p-5 rounded-2xl backdrop-blur-xl text-center hover:border-yellow-400/30 transition-colors">
                <div className="text-3xl font-black font-mono text-yellow-300">09+</div>
                <div className="text-[10px] font-mono text-neutral-400 uppercase tracking-wider mt-1">Tech Stacks</div>
              </div>
            </div>
          </div>

          {/* Right Column: Education & Specialized Focus */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Education Card */}
            <div className="bg-white/[0.04] border border-yellow-400/30 rounded-3xl p-6 sm:p-8 backdrop-blur-xl relative overflow-hidden shadow-2xl">
              <div className="flex items-center gap-3 text-yellow-400 font-mono text-xs uppercase tracking-wider mb-4">
                <GraduationCap size={18} />
                <span>FORMAL EDUCATION</span>
              </div>

              <div className="space-y-4">
                <div>
                  <h3 className="text-2xl font-bold font-heading text-white tracking-wide">
                    {PERSONAL_INFO.college}
                  </h3>
                  <p className="text-lg font-mono text-yellow-400 font-semibold mt-1">
                    {PERSONAL_INFO.branch}
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-neutral-300 pt-1">
                  <span className="px-2.5 py-1 rounded bg-yellow-400/15 border border-yellow-400/40 text-yellow-300 font-bold">
                    {PERSONAL_INFO.year}
                  </span>
                  <span className="flex items-center gap-1 text-neutral-400">
                    <MapPin size={13} className="text-red-400" />
                    {PERSONAL_INFO.location}
                  </span>
                </div>

                <div className="pt-4 border-t border-white/10 space-y-2 text-xs font-mono text-neutral-300">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={13} className="text-yellow-400 shrink-0" />
                    <span>Focus: IoT Architectures, AI Models & Systems Engineering</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={13} className="text-yellow-400 shrink-0" />
                    <span>Active Member: Innovation & Hackathon Research Teams</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Core Competency Pillars */}
            <div className="cyber-glass rounded-2xl p-6 border border-white/10 space-y-4">
              <div className="font-mono text-xs uppercase tracking-wider text-neutral-400 flex items-center gap-2">
                <Brain size={14} className="text-red-400" />
                <span>ARCHITECTURAL DOMAINS</span>
              </div>

              <div className="space-y-3">
                <div className="p-3 rounded-lg bg-black/60 border border-yellow-500/20 flex items-start gap-3">
                  <Cpu className="text-yellow-400 shrink-0 mt-0.5" size={16} />
                  <div>
                    <div className="text-xs font-mono font-bold text-white uppercase">IoT & Embedded Systems</div>
                    <p className="text-[11px] text-neutral-400 mt-0.5">
                      Microcontrollers, automated smart home topologies, sensor networks, hardware relays.
                    </p>
                  </div>
                </div>

                <div className="p-3 rounded-lg bg-black/60 border border-red-500/20 flex items-start gap-3">
                  <Brain className="text-red-400 shrink-0 mt-0.5" size={16} />
                  <div>
                    <div className="text-xs font-mono font-bold text-white uppercase">Applied Artificial Intelligence</div>
                    <p className="text-[11px] text-neutral-400 mt-0.5">
                      Image processing, crop disease classification, predictive transit analysis and heuristics.
                    </p>
                  </div>
                </div>

                <div className="p-3 rounded-lg bg-black/60 border border-amber-500/20 flex items-start gap-3">
                  <Flame className="text-amber-400 shrink-0 mt-0.5" size={16} />
                  <div>
                    <div className="text-xs font-mono font-bold text-white uppercase">Renewable Tech & Clean Energy</div>
                    <p className="text-[11px] text-neutral-400 mt-0.5">
                      Exploration of Reverse Electrodialysis (RED) and electrochemical power generation.
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
