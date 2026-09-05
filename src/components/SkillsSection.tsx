import React, { useState, useRef } from 'react';
import {
  Code2,
  Cpu,
  Brain,
  Terminal,
  Binary,
  FileCode,
  Database,
  Layers,
  Palette,
  Sparkles,
  Zap
} from 'lucide-react';
import { SKILLS_DATA } from '../data/portfolioData';
import { SkillItem } from '../types';

// Map icon name to Lucide component
const getSkillIcon = (iconName: string, size = 26) => {
  switch (iconName) {
    case 'Brain':
      return <Brain size={size} />;
    case 'Cpu':
      return <Cpu size={size} />;
    case 'Terminal':
      return <Terminal size={size} />;
    case 'Binary':
      return <Binary size={size} />;
    case 'Code2':
      return <Code2 size={size} />;
    case 'FileCode':
      return <FileCode size={size} />;
    case 'Database':
      return <Database size={size} />;
    case 'Layers':
      return <Layers size={size} />;
    case 'Palette':
      return <Palette size={size} />;
    default:
      return <Code2 size={size} />;
  }
};

interface SkillCardProps {
  skill: SkillItem;
}

const Interactive3DSkillCard: React.FC<SkillCardProps> = ({ skill }) => {
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

    const rotateX = ((y - centerY) / centerY) * -14;
    const rotateY = ((x - centerX) / centerX) * 14;

    setTilt({ x: rotateX, y: rotateY });
  };

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => {
    setIsHovered(false);
    setTilt({ x: 0, y: 0 });
  };

  const isYellow = skill.color === 'yellow';

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(900px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) scale3d(${
          isHovered ? 1.04 : 1
        }, ${isHovered ? 1.04 : 1}, 1)`,
        transition: isHovered ? 'transform 0.08s ease-out' : 'transform 0.4s ease-out'
      }}
      className={`relative rounded-2xl p-6 bg-white/[0.04] backdrop-blur-xl cursor-pointer overflow-hidden group transition-all duration-300 border ${
        isHovered
          ? isYellow
            ? 'border-yellow-400/80 shadow-[0_0_25px_rgba(250,204,21,0.25)] bg-yellow-400/[0.03]'
            : 'border-red-500/80 shadow-[0_0_25px_rgba(239,68,68,0.25)] bg-red-500/[0.03]'
          : 'border-white/10 hover:border-white/20'
      }`}
      id={`skill-card-${skill.id}`}
    >
      {/* Corner Bracket Accents */}
      <div
        className={`absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 transition-colors duration-300 ${
          isYellow ? 'border-yellow-400' : 'border-red-500'
        }`}
      />
      <div
        className={`absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 transition-colors duration-300 ${
          isYellow ? 'border-yellow-400' : 'border-red-500'
        }`}
      />

      {/* Subtle background circuit watermark */}
      <div className="absolute top-2 right-2 opacity-5 group-hover:opacity-20 transition-opacity text-white">
        {getSkillIcon(skill.iconName, 54)}
      </div>

      {/* Top Meta: Category & Level */}
      <div className="flex items-center justify-between mb-4 relative z-10">
        <span
          className={`font-mono text-[10px] uppercase px-2 py-0.5 rounded tracking-wider border font-medium ${
            isYellow
              ? 'bg-yellow-400/10 text-yellow-300 border-yellow-400/30'
              : 'bg-red-500/10 text-red-300 border-red-500/30'
          }`}
        >
          {skill.category}
        </span>
        <span className="font-mono text-xs text-neutral-400 group-hover:text-white transition-colors">
          {skill.proficiency}%
        </span>
      </div>

      {/* Icon and Skill Name */}
      <div className="flex items-center gap-3.5 mb-3 relative z-10">
        <div
          className={`w-12 h-12 rounded-lg flex items-center justify-center border transition-all duration-300 ${
            isHovered
              ? isYellow
                ? 'bg-yellow-400/20 text-yellow-300 border-yellow-400 shadow-[0_0_15px_rgba(250,204,21,0.5)]'
                : 'bg-red-500/20 text-red-300 border-red-400 shadow-[0_0_15px_rgba(239,68,68,0.5)]'
              : 'bg-black/80 text-neutral-300 border-white/10'
          }`}
        >
          {getSkillIcon(skill.iconName)}
        </div>
        <div>
          <h3 className="text-xl font-heading font-bold text-white group-hover:text-yellow-300 transition-colors tracking-wide">
            {skill.name}
          </h3>
          <span className="text-[11px] font-mono text-neutral-400">STACK NODE</span>
        </div>
      </div>

      {/* Description / Highlight */}
      <p className="text-xs text-neutral-300 leading-relaxed font-body mb-4 relative z-10">
        {skill.highlight}
      </p>

      {/* Proficiency Progress Bar */}
      <div className="space-y-1 relative z-10">
        <div className="w-full bg-neutral-900 rounded-full h-1.5 overflow-hidden border border-white/5">
          <div
            className={`h-full rounded-full transition-all duration-700 ease-out ${
              isYellow
                ? 'bg-gradient-to-r from-yellow-500 to-amber-300'
                : 'bg-gradient-to-r from-red-600 to-rose-400'
            }`}
            style={{ width: `${skill.proficiency}%` }}
          />
        </div>
      </div>

      {/* Interactive Hover Telemetry Tag */}
      <div className="mt-3 flex items-center justify-between text-[10px] font-mono text-neutral-500 pt-2 border-t border-white/5">
        <span className="flex items-center gap-1">
          <Zap size={11} className={isYellow ? 'text-yellow-400' : 'text-red-400'} />
          SYNAPSE_READY
        </span>
        <span className="group-hover:text-yellow-400 transition-colors">3D INTERACTIVE</span>
      </div>
    </div>
  );
};

export const SkillsSection: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>('ALL');

  const categories = ['ALL', 'Intelligence', 'Systems & IoT', 'Languages', 'Web & Data'];

  const filteredSkills =
    selectedFilter === 'ALL'
      ? SKILLS_DATA
      : SKILLS_DATA.filter((s) => s.category === selectedFilter);

  return (
    <section id="skills" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-yellow-400 mb-2">
              <span className="w-6 h-[1px] bg-yellow-400" />
              <span>02 // TECHNICAL ARSENAL</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight uppercase">
              INTERACTIVE <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-amber-300 to-red-500">3D SKILLS</span>
            </h2>
            <p className="text-sm font-mono text-neutral-400 mt-2">
              Hover over cards for 3D physics tilt, synaptic telemetry and depth highlights.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 bg-black/60 p-1.5 rounded-xl border border-white/10 backdrop-blur-md">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedFilter(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono uppercase tracking-wider transition-all ${
                  selectedFilter === cat
                    ? 'bg-yellow-400 text-black font-bold shadow-[0_0_12px_rgba(250,204,21,0.4)]'
                    : 'text-neutral-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* 3D Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill) => (
            <Interactive3DSkillCard key={skill.id} skill={skill} />
          ))}
        </div>

        {/* Additional Technical Summary Note */}
        <div className="mt-12 p-4 rounded-xl cyber-glass border border-yellow-500/20 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 font-mono text-xs text-neutral-300">
            <Sparkles className="text-yellow-400 shrink-0" size={18} />
            <span>Continuous learning focus: Advanced Deep Learning, Distributed Edge IoT, Real-Time Sensor Fusion.</span>
          </div>
          <a
            href="#projects"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="text-xs font-mono text-yellow-400 hover:text-yellow-300 underline underline-offset-4 shrink-0"
          >
            Explore Projects Using These Stacks &rarr;
          </a>
        </div>

      </div>
    </section>
  );
};
