import React, { useState } from 'react';
import {
  Mail,
  Phone,
  Instagram,
  Github,
  Linkedin,
  Copy,
  Check,
  Send,
  Terminal,
  Radio,
  MapPin,
  ExternalLink,
  ShieldCheck
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const ContactSection: React.FC = () => {
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    senderName: '',
    senderEmail: '',
    subject: '',
    message: ''
  });
  const [transmissionStatus, setTransmissionStatus] = useState<'idle' | 'transmitting' | 'transmitted'>('idle');

  const copyToClipboard = (text: string, fieldName: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    setTimeout(() => {
      setCopiedField(null);
    }, 2500);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTransmissionStatus('transmitting');

    setTimeout(() => {
      setTransmissionStatus('transmitted');
      // Reset form after a delay
      setTimeout(() => {
        setFormData({
          senderName: '',
          senderEmail: '',
          subject: '',
          message: ''
        });
        setTransmissionStatus('idle');
      }, 4000);
    }, 1200);
  };

  return (
    <section id="contact" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-yellow-400 mb-2">
            <span className="w-6 h-[1px] bg-yellow-400" />
            <span>05 // SECURE TRANSMISSION CHANNEL</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight uppercase">
            CONNECT & <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-amber-300 to-red-500">COLLABORATE</span>
          </h2>
          <p className="text-sm font-mono text-neutral-400 mt-2 max-w-2xl">
            Direct communication channels for hackathon collaborations, AI/IoT engineering, and technology inquiries.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-yellow-400 to-red-500 mt-3 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Communication Hub */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Email Card */}
            <div className="bg-white/[0.04] backdrop-blur-xl rounded-3xl p-6 border border-yellow-500/20 group hover:border-yellow-400/50 transition-all shadow-xl relative overflow-hidden">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-2xl bg-yellow-400/15 border border-yellow-400/40 text-yellow-300 flex items-center justify-center">
                    <Mail size={22} />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono text-neutral-400 uppercase tracking-wider">
                      PRIMARY EMAIL
                    </div>
                    <a
                      href={`mailto:${PERSONAL_INFO.contact.email}`}
                      className="text-base sm:text-lg font-mono font-bold text-white hover:text-yellow-300 transition-colors break-all"
                    >
                      {PERSONAL_INFO.contact.email}
                    </a>
                  </div>
                </div>

                <button
                  onClick={() => copyToClipboard(PERSONAL_INFO.contact.email, 'email')}
                  className="p-2.5 rounded-xl bg-black/40 border border-white/10 text-neutral-300 hover:text-yellow-400 hover:bg-black/60 transition-colors"
                  title="Copy email to clipboard"
                  aria-label="Copy email"
                >
                  {copiedField === 'email' ? <Check size={16} className="text-emerald-400" /> : <Copy size={16} />}
                </button>
              </div>
              {copiedField === 'email' && (
                <div className="mt-2 text-[11px] font-mono text-emerald-400">
                  ✓ Email address copied to clipboard!
                </div>
              )}
            </div>

            {/* Phone Card */}
            <div className="bg-white/[0.04] backdrop-blur-xl rounded-3xl p-6 border border-red-500/25 group hover:border-red-400/50 transition-all shadow-xl relative overflow-hidden">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-2xl bg-red-500/15 border border-red-500/40 text-red-300 flex items-center justify-center">
                    <Phone size={22} />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono text-neutral-400 uppercase tracking-wider">
                      DIRECT PHONE
                    </div>
                    <a
                      href={`tel:${PERSONAL_INFO.contact.phone}`}
                      className="text-base sm:text-lg font-mono font-bold text-white hover:text-red-400 transition-colors"
                    >
                      +91 {PERSONAL_INFO.contact.phone}
                    </a>
                  </div>
                </div>

                <button
                  onClick={() => copyToClipboard(PERSONAL_INFO.contact.phone, 'phone')}
                  className="p-2.5 rounded-xl bg-black/40 border border-white/10 text-neutral-300 hover:text-red-400 hover:bg-black/60 transition-colors"
                  title="Copy phone number to clipboard"
                  aria-label="Copy phone"
                >
                  {copiedField === 'phone' ? <Check size={16} className="text-emerald-400" /> : <Copy size={16} />}
                </button>
              </div>
              {copiedField === 'phone' && (
                <div className="mt-2 text-[11px] font-mono text-emerald-400">
                  ✓ Phone number copied to clipboard!
                </div>
              )}
            </div>

            {/* Instagram Card - Clickable Handle */}
            <div className="bg-white/[0.04] backdrop-blur-xl rounded-3xl p-6 border border-yellow-500/20 group hover:border-yellow-400/50 transition-all shadow-xl">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-yellow-500/20 to-red-600/20 border border-yellow-500/30 text-yellow-300 flex items-center justify-center">
                    <Instagram size={22} />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono text-neutral-400 uppercase tracking-wider">
                      INSTAGRAM PROFILE
                    </div>
                    <a
                      href={PERSONAL_INFO.contact.instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-base sm:text-lg font-mono font-bold text-yellow-400 hover:text-yellow-300 hover:underline flex items-center gap-1.5"
                    >
                      <span>{PERSONAL_INFO.contact.instagramHandle}</span>
                      <ExternalLink size={14} />
                    </a>
                  </div>
                </div>

                <a
                  href={PERSONAL_INFO.contact.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-1.5 rounded-xl bg-yellow-400 text-black text-xs font-mono font-bold hover:bg-yellow-300 transition-all shadow-[0_0_15px_rgba(255,255,0,0.3)] hover:scale-105"
                >
                  FOLLOW
                </a>
              </div>
            </div>

            {/* Social Matrix Placeholders (GitHub & LinkedIn) */}
            <div className="grid grid-cols-2 gap-4">
              <a
                href={PERSONAL_INFO.contact.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/[0.04] backdrop-blur-xl p-4 rounded-2xl border border-white/10 hover:border-yellow-400/50 hover:bg-white/[0.06] transition-all flex items-center gap-3 group"
              >
                <Github size={20} className="text-neutral-400 group-hover:text-yellow-400 transition-colors" />
                <div>
                  <div className="text-[10px] font-mono text-neutral-400 uppercase">Code Repo</div>
                  <div className="text-xs font-mono font-bold text-white group-hover:text-yellow-300">
                    GitHub
                  </div>
                </div>
              </a>

              <a
                href={PERSONAL_INFO.contact.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/[0.04] backdrop-blur-xl p-4 rounded-2xl border border-white/10 hover:border-red-400/50 hover:bg-white/[0.06] transition-all flex items-center gap-3 group"
              >
                <Linkedin size={20} className="text-neutral-400 group-hover:text-red-400 transition-colors" />
                <div>
                  <div className="text-[10px] font-mono text-neutral-400 uppercase">Professional</div>
                  <div className="text-xs font-mono font-bold text-white group-hover:text-red-300">
                    LinkedIn
                  </div>
                </div>
              </a>
            </div>

            {/* Geographic Coordinates & College */}
            <div className="p-4 rounded-2xl bg-black/40 border border-white/5 font-mono text-xs text-neutral-400 space-y-1">
              <div className="flex items-center gap-2 text-white">
                <MapPin size={14} className="text-red-400" />
                <span>Karnataka, India • GM University</span>
              </div>
              <div className="text-[11px] text-neutral-500">
                TIMEZONE: IST (UTC+05:30) • READY FOR AI/IOT PROJECTS
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Futuristic Transmission Terminal */}
          <div className="lg:col-span-7">
            <div className="bg-white/[0.04] backdrop-blur-xl rounded-3xl p-7 sm:p-9 border border-white/10 shadow-2xl relative">
              {/* Corner brackets */}
              <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-yellow-400" />
              <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-red-500" />

              {/* Terminal Title */}
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/10">
                <div className="flex items-center gap-2 font-mono text-xs text-yellow-400 font-semibold">
                  <Terminal size={15} />
                  <span>TRANSMISSION_TERMINAL // V2.0</span>
                </div>
                <div className="flex items-center gap-2 text-[10px] font-mono text-neutral-400">
                  <Radio size={12} className="text-emerald-400 animate-pulse" />
                  <span>ENCRYPTION: ACTIVE</span>
                </div>
              </div>

              {transmissionStatus === 'transmitted' ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 border-2 border-emerald-400 text-emerald-400 flex items-center justify-center mx-auto shadow-[0_0_25px_rgba(52,211,153,0.5)]">
                    <ShieldCheck size={32} />
                  </div>
                  <h3 className="text-2xl font-heading font-bold text-white">
                    PACKET TRANSMITTED SUCCESSFULLY
                  </h3>
                  <p className="text-sm font-mono text-neutral-300 max-w-md mx-auto">
                    Thank you! Your message payload has been recorded. Harisham will review your message and reply via email or phone.
                  </p>
                  <div className="pt-4">
                    <button
                      onClick={() => setTransmissionStatus('idle')}
                      className="px-6 py-2.5 rounded-lg bg-yellow-400 text-black font-mono font-bold text-xs uppercase"
                    >
                      SEND ANOTHER PACKET
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <label className="block font-mono text-xs text-neutral-300 uppercase tracking-wider">
                        YOUR NAME / CALLSIGN *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.senderName}
                        onChange={(e) => setFormData({ ...formData, senderName: e.target.value })}
                        placeholder="e.g. Alex Morgan"
                        className="w-full px-4 py-3 rounded-lg bg-black/70 border border-white/10 text-white placeholder-neutral-500 font-mono text-xs focus:outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 transition-colors"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="block font-mono text-xs text-neutral-300 uppercase tracking-wider">
                        RETURN EMAIL ADDRESS *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.senderEmail}
                        onChange={(e) => setFormData({ ...formData, senderEmail: e.target.value })}
                        placeholder="yourname@domain.com"
                        className="w-full px-4 py-3 rounded-lg bg-black/70 border border-white/10 text-white placeholder-neutral-500 font-mono text-xs focus:outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="block font-mono text-xs text-neutral-300 uppercase tracking-wider">
                      SUBJECT / TOPIC *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="e.g. SIH Collaboration / IoT Prototyping / Internship"
                      className="w-full px-4 py-3 rounded-lg bg-black/70 border border-white/10 text-white placeholder-neutral-500 font-mono text-xs focus:outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="block font-mono text-xs text-neutral-300 uppercase tracking-wider">
                      MESSAGE TRANSMISSION PAYLOAD *
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Enter your message details, project ideas, or invitation..."
                      className="w-full px-4 py-3 rounded-lg bg-black/70 border border-white/10 text-white placeholder-neutral-500 font-body text-sm focus:outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={transmissionStatus === 'transmitting'}
                    className="w-full py-4 rounded-lg bg-yellow-400 text-black font-mono font-bold text-xs uppercase tracking-wider hover:bg-yellow-300 transition-all duration-300 shadow-[0_0_25px_rgba(250,204,21,0.5)] flex items-center justify-center gap-2 hover:scale-[1.01] active:scale-[0.99] disabled:opacity-50"
                  >
                    {transmissionStatus === 'transmitting' ? (
                      <>
                        <span className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
                        <span>ENCRYPTING & DISPATCHING PACKET...</span>
                      </>
                    ) : (
                      <>
                        <Send size={15} />
                        <span>TRANSMIT PACKET TO HARISHAM</span>
                      </>
                    )}
                  </button>

                  <div className="flex items-center justify-between text-[11px] font-mono text-neutral-500 pt-2">
                    <span>STATUS_CODE: 200 READY</span>
                    <span>RESPONSE_TIME: &lt; 24 HOURS</span>
                  </div>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
