import React from 'react';
import { ArrowUp, Heart, Sparkles, Linkedin, Mail, Phone } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#04060d] border-t border-slate-900 text-slate-400 py-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-900">
          {/* Brand info */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center gap-2 text-white font-bold text-lg mb-1">
              <span className="font-mono text-blue-400">&lt;AS /&gt;</span>
              <span>{personalInfo.name}</span>
            </div>
            <p className="text-xs text-slate-400 max-w-sm">
              Business Technology Solutions & AI Full-Stack Engineer. Building high-impact agentic chatbots and scalable systems.
            </p>
          </div>

          {/* Social / Direct Links */}
          <div className="flex items-center gap-3">
            <a
              href={`mailto:${personalInfo.email}`}
              className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-blue-500/50 transition-colors"
              title="Send an Email"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
            <a
              href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`}
              className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-blue-500/50 transition-colors"
              title="Call"
              aria-label="Phone"
            >
              <Phone className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-blue-500/50 transition-colors"
              title="LinkedIn Profile (Placeholder)"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-lg bg-blue-600/10 border border-blue-500/30 text-blue-400 hover:bg-blue-600 hover:text-white transition-all ml-2"
              title="Back to Top"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Bottom Credits */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 text-xs font-mono text-slate-400">
          <div>
            &copy; {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
          </div>
          <div className="flex items-center gap-1.5 text-slate-400">
            <span>Crafted for AI Engineering</span>
            <Sparkles className="w-3.5 h-3.5 text-blue-400" />
            <span>React 18 &bull; TypeScript &bull; Tailwind CSS</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
