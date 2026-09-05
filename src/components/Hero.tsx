import React, { useState, useRef } from 'react';
import { ArrowRight, Terminal, Sparkles, Cpu, Radio, ShieldCheck, Download, ChevronRight, Activity } from 'lucide-react';
import { motion } from 'motion/react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Hero: React.FC = () => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -12; // tilt degrees
    const rotateY = ((x - centerX) / centerX) * 12;

    setTilt({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
    setIsHovered(false);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  return (
    <section
      id="home"
      className="relative pt-24 pb-12 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 space-y-4">
        
        {/* Main Bento Grid Hero Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-stretch">
          
          {/* Left Bento Tile: Main Statement & Bio */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 bg-white/[0.04] border border-white/10 rounded-3xl p-8 sm:p-10 backdrop-blur-xl flex flex-col justify-between relative overflow-hidden shadow-2xl"
          >
            {/* Background Tech Radar Graphic */}
            <div className="absolute top-0 right-0 p-6 opacity-20 pointer-events-none">
              <svg width="130" height="130" viewBox="0 0 100 100" className="text-yellow-400">
                <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="0.75" />
                <circle cx="50" cy="50" r="25" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="3 3" />
                <path d="M50 8 L50 92 M8 50 L92 50" stroke="currentColor" strokeWidth="0.5" />
              </svg>
            </div>

            <div>
              {/* College & Department Subtitle */}
              <span className="text-red-500 font-mono text-xs mb-4 flex items-center gap-2 tracking-wider">
                <span className="w-8 h-[1px] bg-red-500" />
                2ND YEAR CSE (IOT & AI) @ GM UNIVERSITY
              </span>

              {/* Headline */}
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black mb-6 leading-[0.92] tracking-tighter text-white uppercase">
                TURNING IDEAS INTO <span className="text-yellow-400 drop-shadow-[0_0_20px_rgba(255,255,0,0.35)]">INTELLIGENT</span> SOLUTIONS.
              </h1>

              {/* Developer Description */}
              <p className="text-gray-300 text-sm sm:text-base max-w-lg leading-relaxed mb-8 font-body">
                Passionate 2nd-year CSE student at GM University specializing in Artificial Intelligence, IoT architecture, and creating practical high-impact engineering solutions.
              </p>
            </div>

            {/* CTA Buttons & Status */}
            <div>
              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="#projects"
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="bg-yellow-400 text-black px-8 py-3.5 rounded-xl font-bold text-xs uppercase tracking-widest shadow-[0_0_20px_rgba(255,255,0,0.35)] hover:scale-105 hover:bg-yellow-300 transition-all flex items-center gap-2"
                  id="hero-view-projects-btn"
                >
                  <span>VIEW PROJECTS</span>
                  <ArrowRight size={14} />
                </a>

                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="border border-white/20 px-8 py-3.5 rounded-xl font-bold text-xs uppercase tracking-widest text-white hover:bg-white/5 hover:border-yellow-400/50 transition-all flex items-center gap-2"
                  id="hero-contact-me-btn"
                >
                  <span>CONTACT ME</span>
                  <Terminal size={14} className="text-yellow-400" />
                </a>
              </div>

              <div className="mt-6 pt-4 border-t border-white/5 flex flex-wrap items-center gap-4 text-xs font-mono text-gray-400">
                <span className="flex items-center gap-1.5 text-yellow-400">
                  <ShieldCheck size={14} /> SIH 2025 PARTICIPANT
                </span>
                <span>•</span>
                <span className="text-red-400 font-semibold">
                  AGRI NOVA FINALIST
                </span>
                <span>•</span>
                <span className="text-gray-400">
                  KARNATAKA, INDIA
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right Bento Tile: 3D Layered Futuristic Profile Frame */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-5 bg-white/[0.03] border border-white/10 rounded-3xl p-8 backdrop-blur-xl flex flex-col items-center justify-center relative overflow-hidden"
          >
            {/* Ambient Back Glow */}
            <div className="absolute w-64 h-64 rounded-full bg-gradient-to-tr from-yellow-500/20 via-transparent to-red-500/20 blur-3xl pointer-events-none" />

            <div className="relative my-4" style={{ perspective: '1200px' }}>
              {/* Outer Corner Bento Cyber Brackets */}
              <div className="absolute -top-6 -right-6 w-20 h-20 border-t-4 border-r-4 border-yellow-400 rounded-tr-3xl pointer-events-none z-30" />
              <div className="absolute -bottom-6 -left-6 w-20 h-20 border-b-4 border-l-4 border-red-500 rounded-bl-3xl pointer-events-none z-30" />

              {/* Layered Floating Backing Borders */}
              <div
                className="absolute -inset-6 border border-white/10 rounded-3xl -z-10 pointer-events-none"
                style={{
                  transform: `rotateY(${tilt.y * 0.4 - 10}deg) rotateX(${tilt.x * 0.4 + 4}deg) translateZ(-40px)`
                }}
              />
              <div
                className="absolute -inset-3 border-2 border-red-500/30 rounded-2xl -z-10 pointer-events-none"
                style={{
                  transform: `rotateY(${tilt.y * 0.7 - 10}deg) rotateX(${tilt.x * 0.7 + 4}deg) translateZ(-20px)`
                }}
              />

              {/* Main Interactive 3D Photo Card */}
              <div
                ref={cardRef}
                onMouseMove={handleMouseMove}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                style={{
                  transform: `rotateY(${tilt.y - 8}deg) rotateX(${tilt.x + 3}deg) scale3d(${isHovered ? 1.02 : 1}, ${isHovered ? 1.02 : 1}, 1)`,
                  transition: isHovered ? 'transform 0.08s ease-out' : 'transform 0.5s ease-out'
                }}
                className="w-64 sm:w-72 h-88 sm:h-96 bg-neutral-950 rounded-2xl border-2 border-yellow-400/40 relative z-20 overflow-hidden shadow-2xl cursor-pointer group"
                id="hero-3d-profile-frame"
              >
                {/* Photo Element */}
                <img
                  src="/profile.jpg"
                  alt="Harisham PS - CSE (IoT & AI) Student"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center filter contrast-110 brightness-95 group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    if (!target.src.includes('src/assets')) {
                      target.src = '/src/assets/images/harisham_profile_1788629202026.jpg';
                    }
                  }}
                />

                {/* Cyber Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/25 to-transparent opacity-85 pointer-events-none" />

                {/* Top Badge */}
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between text-[9px] font-mono text-yellow-400/90 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded border border-white/10">
                  <span>HARISHAM PS</span>
                  <span className="text-red-400 font-bold">NODE // 01</span>
                </div>

                {/* Bottom Readout */}
                <div className="absolute bottom-4 left-4 right-4 text-yellow-400 font-mono text-[10px] tracking-tight bg-black/70 backdrop-blur-md p-2.5 rounded-lg border border-yellow-400/20">
                  <div className="flex items-center justify-between">
                    <span>LOC: KARNATAKA, IN</span>
                    <span className="text-emerald-400 font-bold">ONLINE</span>
                  </div>
                  <div className="text-gray-400 text-[9px] mt-0.5">
                    OS: NEURAL_CORE_v.2.4 • GMU
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>

        {/* Modular Bento Grid Feature Triad */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 pt-2">
          
          {/* Bento Tile 1: Quick Skill Matrix */}
          <div className="md:col-span-4 bg-white/[0.04] border border-white/10 rounded-3xl p-6 backdrop-blur-xl relative">
            <h3 className="text-yellow-400 text-[10px] font-black uppercase tracking-widest mb-4 flex items-center gap-2">
              <span className="w-2 h-2 bg-yellow-400 rounded-full" /> SKILL_MATRIX
            </h3>
            <div className="grid grid-cols-3 gap-2">
              {[
                { name: 'PYTHON', level: '85%', color: 'yellow' },
                { name: 'JAVA', level: '75%', color: 'yellow' },
                { name: 'C++', level: '80%', color: 'yellow' },
                { name: 'AI/ML', level: '70%', color: 'red' },
                { name: 'IOT', level: '90%', color: 'red' },
                { name: 'SQL', level: '80%', color: 'red' }
              ].map((skill) => (
                <div
                  key={skill.name}
                  className="bg-black/40 border border-white/10 p-2.5 rounded-xl text-center hover:border-yellow-400/40 transition-colors"
                >
                  <div className="text-[10px] font-mono text-gray-400 mb-1.5">{skill.name}</div>
                  <div className={`h-1.5 ${skill.color === 'yellow' ? 'bg-yellow-400/20' : 'bg-red-500/20'} rounded-full overflow-hidden`}>
                    <div
                      className={`h-full ${skill.color === 'yellow' ? 'bg-yellow-400' : 'bg-red-500'}`}
                      style={{ width: skill.level }}
                    />
                  </div>
                </div>
              ))}
            </div>
            <p className="text-[10px] text-gray-400 mt-4 font-mono leading-relaxed italic">
              &ldquo;Engineering technology that addresses real-world challenges through continuous experimentation.&rdquo;
            </p>
          </div>

          {/* Bento Tile 2: Featured Project Banner */}
          <a
            href="#projects"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="md:col-span-4 bg-red-500/10 border border-red-500/25 rounded-3xl p-6 backdrop-blur-xl flex flex-col justify-between group cursor-pointer hover:border-red-500/50 hover:bg-red-500/[0.14] transition-all shadow-xl"
          >
            <div>
              <div className="text-red-400 text-[10px] font-mono font-bold mb-2 tracking-[0.2em] flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-ping" />
                FEATURED_PROJECT // 04
              </div>
              <div className="text-2xl font-black text-white group-hover:text-red-400 transition-colors tracking-tight">
                FARMERS CROP DETECTOR
              </div>
              <p className="text-xs text-gray-300 mt-2 leading-relaxed font-body">
                AI/IoT agricultural intelligence system assisting farmers in identifying crop diseases using image processing & soil sensors.
              </p>
            </div>
            <div className="flex flex-wrap gap-1.5 mt-5">
              <span className="px-2.5 py-1 bg-red-500/20 border border-red-500/40 rounded-lg text-[9px] font-mono text-red-200">
                PYTHON
              </span>
              <span className="px-2.5 py-1 bg-red-500/20 border border-red-500/40 rounded-lg text-[9px] font-mono text-red-200">
                AI / COMPUTER VISION
              </span>
              <span className="px-2.5 py-1 bg-red-500/20 border border-red-500/40 rounded-lg text-[9px] font-mono text-red-200">
                IOT SENSORS
              </span>
            </div>
          </a>

          {/* Bento Tile 3: Timeline / 2025 Fast Track */}
          <div className="md:col-span-4 bg-white/[0.04] border border-white/10 rounded-3xl p-6 backdrop-blur-xl flex flex-col justify-between">
            <div>
              <h3 className="text-xs font-black uppercase tracking-widest mb-3.5 text-gray-400 flex items-center justify-between">
                <span>TIMELINE / 2025</span>
                <span className="text-[10px] font-mono text-yellow-400">COMPETITIONS</span>
              </h3>
              <div className="space-y-2.5">
                <div className="flex items-center gap-3 p-2 rounded-xl bg-black/30 border border-white/5">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full shrink-0 shadow-[0_0_8px_rgba(250,204,21,0.8)]" />
                  <span className="text-xs font-bold text-white font-mono">SIH 2025</span>
                  <span className="text-xs text-gray-400 font-mono ml-auto">• Participant</span>
                </div>
                <div className="flex items-center gap-3 p-2 rounded-xl bg-red-500/10 border border-red-500/20">
                  <div className="w-2 h-2 bg-red-500 rounded-full shrink-0 shadow-[0_0_8px_rgba(239,68,68,0.8)]" />
                  <span className="text-xs font-bold text-yellow-300 font-mono">AGRI NOVA HACKATHON</span>
                  <span className="text-xs text-red-300 font-mono ml-auto font-bold">• Finalist</span>
                </div>
                <div className="flex items-center gap-3 p-2 rounded-xl bg-black/30 border border-white/5">
                  <div className="w-2 h-2 bg-white/40 rounded-full shrink-0" />
                  <span className="text-xs font-bold text-white font-mono">HACK WITH DEVICES</span>
                  <span className="text-xs text-gray-400 font-mono ml-auto">• Participant</span>
                </div>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-gray-400">
              <span>ACTIVE HACKER</span>
              <a
                href="#achievements"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#achievements')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="text-yellow-400 hover:underline"
              >
                VIEW DETAILS →
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
