import React from 'react';
import { Trophy, Award, Medal, CheckCircle, Flame, Sparkles } from 'lucide-react';
import { ACHIEVEMENTS_DATA } from '../data/portfolioData';
import { AchievementItem } from '../types';

export const AchievementsSection: React.FC = () => {
  return (
    <section id="achievements" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-yellow-400 mb-2">
            <span className="w-6 h-[1px] bg-yellow-400" />
            <span>04 // HACKATHONS & RECOGNITION</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight uppercase">
            FUTURISTIC <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-amber-300 to-red-500">TIMELINE</span>
          </h2>
          <p className="text-sm font-mono text-neutral-400 mt-2 max-w-2xl">
            Major hackathons, technical competitions, and innovative engineering challenges.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-yellow-400 to-red-500 mt-3 rounded-full" />
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Vertical Cyber Conduit Line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[2px] -translate-x-1/2 bg-gradient-to-b from-yellow-400 via-red-500 to-amber-400 shadow-[0_0_15px_rgba(250,204,21,0.5)]" />
          <div className="md:hidden absolute left-6 top-0 bottom-0 w-[2px] bg-gradient-to-b from-yellow-400 via-red-500 to-amber-400" />

          {/* Timeline Items */}
          <div className="space-y-12">
            {ACHIEVEMENTS_DATA.map((item, index) => {
              const isEven = index % 2 === 0;
              const isFinalist = item.status === 'Finalist';

              return (
                <div
                  key={item.id}
                  className={`relative flex flex-col md:flex-row items-center ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Central Timeline Node */}
                  <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-neutral-950 border-2 border-yellow-400 flex items-center justify-center z-20 shadow-[0_0_20px_rgba(250,204,21,0.6)] group">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-30" />
                    <Trophy size={16} className={isFinalist ? 'text-yellow-300' : 'text-amber-400'} />
                  </div>

                  {/* Content Card Side */}
                  <div className="w-full md:w-1/2 pl-14 md:pl-0 md:px-10">
                    <div
                      className={`relative rounded-3xl p-6 sm:p-7 bg-white/[0.04] backdrop-blur-xl border transition-all duration-300 group hover:scale-[1.02] shadow-xl ${
                        isFinalist
                          ? 'border-yellow-400/60 shadow-[0_0_25px_rgba(250,204,21,0.15)] bg-yellow-400/[0.02]'
                          : 'border-red-500/40 hover:border-red-400 shadow-[0_0_25px_rgba(239,68,68,0.15)] bg-red-500/[0.02]'
                      }`}
                    >
                      {/* Tech Corner Accents */}
                      <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-yellow-400" />
                      <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-red-500" />

                      {/* Header Row */}
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                        <span className="font-mono text-xs text-neutral-400 flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-yellow-400" />
                          {item.year}
                        </span>
                        
                        <div className="flex items-center gap-2">
                          <span
                            className={`font-mono text-xs uppercase px-2.5 py-0.5 rounded-full font-bold border ${
                              isFinalist
                                ? 'bg-yellow-400/20 text-yellow-300 border-yellow-400/50'
                                : 'bg-red-500/20 text-red-300 border-red-500/50'
                            }`}
                          >
                            🏆 {item.status.toUpperCase()}
                          </span>
                        </div>
                      </div>

                      {/* Title */}
                      <h3 className="text-xl sm:text-2xl font-heading font-bold text-white tracking-wide mb-2 group-hover:text-yellow-300 transition-colors">
                        {item.title}
                      </h3>

                      {/* Category Badge */}
                      <div className="inline-block font-mono text-[11px] text-yellow-400/90 mb-3 bg-neutral-900/80 px-2.5 py-1 rounded border border-white/5">
                        {item.badge}
                      </div>

                      {/* Description */}
                      <p className="text-sm text-neutral-300 leading-relaxed font-body">
                        {item.description}
                      </p>

                      {/* Footer highlight */}
                      <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-neutral-400">
                        <span className="text-neutral-300">{item.tag}</span>
                        <span className="text-yellow-400 flex items-center gap-1">
                          <Sparkles size={11} /> VERIFIED PARTICIPATION
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Empty Spacer Column for Desktop */}
                  <div className="hidden md:block w-1/2" />
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
