import React, { useState, useRef } from 'react';
import {
  ExternalLink,
  Layers,
  Cpu,
  Sparkles,
  ArrowUpRight,
  ShieldAlert,
  Info,
  X,
  Radio,
  CheckCircle,
  Zap
} from 'lucide-react';
import { PROJECTS_DATA } from '../data/portfolioData';
import { ProjectItem } from '../types';

interface ProjectCardProps {
  project: ProjectItem;
  onOpenDetails: (project: ProjectItem) => void;
}

const Premium3DProjectCard: React.FC<ProjectCardProps> = ({ project, onOpenDetails }) => {
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

    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 10;

    setTilt({ x: rotateX, y: rotateY });
  };

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => {
    setIsHovered(false);
    setTilt({ x: 0, y: 0 });
  };

  const isYellow = project.accent === 'yellow';

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) scale3d(${
          isHovered ? 1.02 : 1
        }, ${isHovered ? 1.02 : 1}, 1)`,
        transition: isHovered ? 'transform 0.08s ease-out' : 'transform 0.5s cubic-bezier(0.2, 0.8, 0.2, 1)'
      }}
      className={`relative rounded-3xl p-7 bg-white/[0.04] backdrop-blur-xl flex flex-col justify-between overflow-hidden group transition-all duration-300 border ${
        isHovered
          ? isYellow
            ? 'border-yellow-400/80 shadow-[0_15px_40px_rgba(0,0,0,0.8),0_0_30px_rgba(250,204,21,0.2)] bg-yellow-400/[0.02]'
            : 'border-red-500/80 shadow-[0_15px_40px_rgba(0,0,0,0.8),0_0_30px_rgba(239,68,68,0.2)] bg-red-500/[0.02]'
          : 'border-white/10'
      }`}
      id={`project-card-${project.id}`}
    >
      {/* Corner Bracket Cyber Accents */}
      <div
        className={`absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 transition-colors duration-300 ${
          isYellow ? 'border-yellow-400' : 'border-red-500'
        }`}
      />
      <div
        className={`absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 transition-colors duration-300 ${
          isYellow ? 'border-yellow-400' : 'border-red-500'
        }`}
      />
      <div
        className={`absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 transition-colors duration-300 ${
          isYellow ? 'border-yellow-400' : 'border-red-500'
        }`}
      />
      <div
        className={`absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 transition-colors duration-300 ${
          isYellow ? 'border-yellow-400' : 'border-red-500'
        }`}
      />

      {/* Top Header with Number and Role */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <span
            className={`font-mono font-extrabold text-3xl sm:text-4xl tracking-tight transition-colors ${
              isYellow ? 'text-yellow-400/80 group-hover:text-yellow-300' : 'text-red-500/80 group-hover:text-red-400'
            }`}
          >
            {project.number}
          </span>
          <span
            className={`font-mono text-[11px] uppercase tracking-wider px-3 py-1 rounded-full border font-semibold ${
              isYellow
                ? 'bg-yellow-400/10 text-yellow-300 border-yellow-400/30'
                : 'bg-red-500/10 text-red-300 border-red-500/30'
            }`}
          >
            {project.role}
          </span>
        </div>

        {/* Project Title */}
        <h3 className="text-2xl sm:text-3xl font-heading font-extrabold text-white tracking-wide mb-3 group-hover:text-yellow-300 transition-colors">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-sm text-neutral-300 leading-relaxed font-body mb-5">
          {project.description}
        </p>

        {/* Outcome Box */}
        <div className="p-3.5 rounded-xl bg-black/60 border border-white/10 mb-6 space-y-1">
          <div className="flex items-center gap-1.5 font-mono text-[10px] text-neutral-400 uppercase tracking-wider">
            <CheckCircle size={12} className={isYellow ? 'text-yellow-400' : 'text-red-400'} />
            <span>Key Outcome & Impact</span>
          </div>
          <p className="text-xs text-neutral-200 font-body leading-normal">
            &ldquo;{project.outcome}&rdquo;
          </p>
        </div>
      </div>

      {/* Footer: Technologies and Interactive Detail Button */}
      <div>
        {/* Technologies Pills */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="font-mono text-[11px] px-2.5 py-1 rounded-md bg-neutral-900/90 text-neutral-300 border border-white/5 group-hover:border-white/20 transition-colors"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Interactive Action Bar */}
        <div className="pt-4 border-t border-white/10 flex items-center justify-between">
          <span className="font-mono text-[11px] text-neutral-400 flex items-center gap-1.5">
            <Radio size={12} className="text-emerald-400 animate-pulse" />
            <span>SYSTEM SPEC READY</span>
          </span>

          <button
            onClick={() => onOpenDetails(project)}
            className={`inline-flex items-center gap-1.5 font-mono text-xs font-bold px-3.5 py-2 rounded-lg transition-all duration-200 ${
              isYellow
                ? 'bg-yellow-400/20 text-yellow-300 hover:bg-yellow-400 hover:text-black hover:shadow-[0_0_15px_rgba(250,204,21,0.5)]'
                : 'bg-red-500/20 text-red-300 hover:bg-red-500 hover:text-white hover:shadow-[0_0_15px_rgba(239,68,68,0.5)]'
            }`}
          >
            <span>DOSSIER SPECS</span>
            <ArrowUpRight size={14} />
          </button>
        </div>
      </div>
    </div>
  );
};

export const ProjectsSection: React.FC = () => {
  const [activeModalProject, setActiveModalProject] = useState<ProjectItem | null>(null);

  return (
    <section id="projects" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-yellow-400 mb-2">
            <span className="w-6 h-[1px] bg-yellow-400" />
            <span>03 // FEATURED ENGINEERING</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight uppercase">
            PREMIUM <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-amber-300 to-red-500">3D PROJECTS</span>
          </h2>
          <p className="text-sm font-mono text-neutral-400 mt-2 max-w-2xl">
            Selected IoT architectures, artificial intelligence models, and clean technology research projects.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-yellow-400 to-red-500 mt-3 rounded-full" />
        </div>

        {/* 4 Premium 3D Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROJECTS_DATA.map((project) => (
            <Premium3DProjectCard
              key={project.id}
              project={project}
              onOpenDetails={(p) => setActiveModalProject(p)}
            />
          ))}
        </div>

        {/* Project Intelligence Dossier Modal */}
        {activeModalProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
            <div className="relative w-full max-w-2xl rounded-2xl cyber-glass border-2 border-yellow-500/60 p-6 sm:p-8 shadow-[0_0_50px_rgba(0,0,0,0.9)] max-h-[90vh] overflow-y-auto">
              
              {/* Close Button */}
              <button
                onClick={() => setActiveModalProject(null)}
                className="absolute top-5 right-5 p-2 rounded-lg bg-neutral-900 border border-white/10 text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors"
                aria-label="Close project modal"
              >
                <X size={18} />
              </button>

              {/* Modal Top Metadata */}
              <div className="flex items-center gap-3 font-mono text-xs text-yellow-400 mb-3">
                <span className="px-2 py-0.5 rounded bg-yellow-400/10 border border-yellow-400/30">
                  PROJECT {activeModalProject.number}
                </span>
                <span>// ROLE: {activeModalProject.role.toUpperCase()}</span>
              </div>

              <h3 className="text-3xl font-heading font-extrabold text-white mb-4">
                {activeModalProject.title}
              </h3>

              <div className="space-y-6">
                <div>
                  <h4 className="font-mono text-xs text-neutral-400 uppercase tracking-wider mb-2">
                    Executive Overview
                  </h4>
                  <p className="text-neutral-200 text-sm sm:text-base leading-relaxed">
                    {activeModalProject.description}
                  </p>
                </div>

                {/* Outcome Statement */}
                <div className="p-4 rounded-xl bg-neutral-900/90 border border-yellow-500/30 space-y-1">
                  <div className="font-mono text-xs font-semibold text-yellow-400 uppercase tracking-wider flex items-center gap-2">
                    <Zap size={13} />
                    <span>Project Outcome & Real-World Value</span>
                  </div>
                  <p className="text-sm text-neutral-100 font-body">
                    {activeModalProject.outcome}
                  </p>
                </div>

                {/* System Specs Table */}
                {activeModalProject.systemSpecs && (
                  <div>
                    <h4 className="font-mono text-xs text-neutral-400 uppercase tracking-wider mb-3">
                      Architectural Parameters & Topology
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      {activeModalProject.systemSpecs.map((spec, i) => (
                        <div key={i} className="p-3 rounded-lg bg-black/60 border border-white/10">
                          <div className="text-[10px] font-mono text-neutral-400 uppercase">
                            {spec.label}
                          </div>
                          <div className="text-xs font-mono font-bold text-white mt-1">
                            {spec.value}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Key Technical Highlights */}
                <div>
                  <h4 className="font-mono text-xs text-neutral-400 uppercase tracking-wider mb-2">
                    Engineering Milestones
                  </h4>
                  <ul className="space-y-2 text-xs sm:text-sm text-neutral-300 font-body">
                    {activeModalProject.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-yellow-400 font-mono mt-0.5">&gt;</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div>
                  <h4 className="font-mono text-xs text-neutral-400 uppercase tracking-wider mb-2">
                    Core Stack & Instrumentation
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {activeModalProject.technologies.map((t) => (
                      <span
                        key={t}
                        className="font-mono text-xs px-3 py-1.5 rounded-lg bg-neutral-900 text-yellow-300 border border-yellow-400/30"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Modal Footer CTA */}
                <div className="pt-4 border-t border-white/10 flex justify-end gap-3">
                  <button
                    onClick={() => setActiveModalProject(null)}
                    className="px-5 py-2 rounded-lg font-mono text-xs uppercase tracking-wider bg-white/10 hover:bg-white/20 text-white font-semibold transition-colors"
                  >
                    CLOSE DOSSIER
                  </button>
                  <a
                    href="#contact"
                    onClick={() => setActiveModalProject(null)}
                    className="px-5 py-2 rounded-lg font-mono text-xs uppercase tracking-wider bg-yellow-400 hover:bg-yellow-300 text-black font-bold transition-all shadow-[0_0_15px_rgba(250,204,21,0.5)]"
                  >
                    DISCUSS THIS PROJECT
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
