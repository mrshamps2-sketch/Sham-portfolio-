import React, { useState, useEffect } from 'react';
import { Menu, X, Terminal, Cpu, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavbarProps {
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Achievements', href: '#achievements' },
    { label: 'Contact', href: '#contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#050509]/90 backdrop-blur-xl border-b border-white/10 shadow-2xl shadow-black/80 py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand / Logo */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, '#home')}
          className="group flex flex-col text-left focus:outline-none"
          id="navbar-brand-logo"
        >
          <div className="flex items-center gap-2">
            <span className="text-2xl font-black tracking-tighter text-yellow-400 group-hover:drop-shadow-[0_0_15px_rgba(255,255,0,0.5)] transition-all">
              {PERSONAL_INFO.name.toUpperCase()}
            </span>
          </div>
          <div className="text-[10px] font-mono text-red-500 uppercase tracking-widest flex items-center gap-1.5">
            <span>ID: GMU-CSE-24-SHAMMA</span>
            <span className="text-gray-600">•</span>
            <span className="text-gray-400">2ND YEAR</span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-7 text-[11px] uppercase tracking-[0.2em] font-medium text-gray-500">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.replace('#', '');
            return (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`transition-colors cursor-pointer relative py-1 ${
                  isActive
                    ? 'text-yellow-400 font-bold'
                    : 'hover:text-white'
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-yellow-400 rounded-full" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Quick System Telemetry / Action CTA */}
        <div className="hidden lg:flex items-center gap-4">
          <div className="flex items-center gap-3 bg-white/5 border border-white/10 px-4 py-2 rounded-full backdrop-blur-md">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.8)]" />
            <span className="text-[10px] font-mono text-gray-200">CORE_SERVER: ACTIVE</span>
          </div>

          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
            className="bg-yellow-400 text-black px-5 py-2 rounded-xl font-bold text-xs uppercase tracking-widest shadow-[0_0_15px_rgba(255,255,0,0.3)] hover:scale-105 transition-transform"
            id="nav-contact-cta-button"
          >
            CONTACT
          </a>
        </div>

        {/* Mobile Menu Toggle Button */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-neutral-900 border border-white/10 text-yellow-400 hover:bg-neutral-800 transition-colors focus:outline-none"
            aria-label="Toggle navigation menu"
            id="mobile-menu-toggle"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#07070d]/98 border-b border-yellow-500/20 backdrop-blur-2xl px-6 py-6 transition-all">
          <div className="flex flex-col space-y-3">
            <div className="pb-2 border-b border-white/10 flex justify-between items-center text-xs font-mono text-neutral-400">
              <span>NAVIGATION MATRIX</span>
              <span className="text-yellow-400">v2.0 // ACTIVE</span>
            </div>
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`flex items-center justify-between px-4 py-3 rounded-lg font-mono text-sm uppercase tracking-wider transition-all ${
                    isActive
                      ? 'bg-yellow-400/15 text-yellow-300 border border-yellow-400/40 font-semibold'
                      : 'text-neutral-300 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && <span className="w-2 h-2 rounded-full bg-yellow-400" />}
                </a>
              );
            })}
            <div className="pt-3 border-t border-white/10">
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, '#contact')}
                className="w-full block text-center py-3 rounded-lg font-mono text-xs uppercase tracking-wider font-bold bg-yellow-400 text-black shadow-[0_0_15px_rgba(250,204,21,0.5)]"
              >
                TRANSMIT MESSAGE / CONTACT
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
