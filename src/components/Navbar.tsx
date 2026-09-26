import React, { useState, useEffect } from 'react';
import { Menu, X, FileDown, Sparkles } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Education', href: '#education' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Contact', href: '#contact' },
];

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Section highlighting
      const sections = navItems.map(item => item.href.substring(1));
      const scrollPosition = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#060810]/85 backdrop-blur-md border-b border-slate-800/80 shadow-lg shadow-black/30 py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#"
            className="group flex items-center gap-2.5 text-slate-100 font-semibold tracking-wide transition-colors"
          >
            <div className="relative flex items-center justify-center w-9 h-9 rounded-lg bg-gradient-to-br from-blue-600/30 to-purple-600/30 border border-blue-500/40 group-hover:border-blue-400 group-hover:shadow-[0_0_15px_rgba(59,130,246,0.5)] transition-all">
              <span className="font-mono text-sm font-bold text-blue-400">AS</span>
              <span className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
            </div>
            <div className="flex flex-col">
              <span className="text-base font-bold tracking-tight text-white group-hover:text-blue-300 transition-colors">
                {personalInfo.name}
              </span>
              <span className="text-[10px] uppercase font-mono tracking-wider text-slate-400 flex items-center gap-1">
                <Sparkles className="w-2.5 h-2.5 text-blue-400" /> AI & Full-Stack
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <a
                  key={item.label}
                  href={item.href}
                  className={`px-3 py-1.5 rounded-md text-sm font-medium transition-all ${
                    isActive
                      ? 'text-blue-400 bg-blue-500/10 border border-blue-500/30 shadow-[0_0_10px_rgba(59,130,246,0.2)]'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}

            {/* Resume Button */}
            <a
              href={personalInfo.resumePath}
              download="Akashdeep_Sharma_Resume.pdf"
              className="ml-3 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-sm font-medium text-slate-200 bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 hover:border-blue-500/50 hover:text-white transition-all shadow-sm group"
            >
              <FileDown className="w-4 h-4 text-blue-400 group-hover:translate-y-0.5 transition-transform" />
              <span>Resume</span>
            </a>
          </nav>

          {/* Mobile menu button */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href={personalInfo.resumePath}
              download="Akashdeep_Sharma_Resume.pdf"
              className="p-2 rounded-lg text-slate-300 bg-slate-800/60 border border-slate-700 text-xs flex items-center gap-1"
              title="Download Resume"
            >
              <FileDown className="w-4 h-4 text-blue-400" />
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800/80 border border-slate-800 transition-colors"
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X className="w-6 h-6 text-blue-400" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {isOpen && (
        <div className="lg:hidden bg-[#0a0e1c]/95 border-b border-slate-800 backdrop-blur-xl px-4 pt-3 pb-6 space-y-1 shadow-2xl animate-in slide-in-from-top-2">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2.5 rounded-md text-base font-medium text-slate-300 hover:text-white hover:bg-blue-600/15 hover:border-l-2 hover:border-blue-500 transition-all"
            >
              {item.label}
            </a>
          ))}
          <div className="pt-2">
            <a
              href={personalInfo.resumePath}
              download="Akashdeep_Sharma_Resume.pdf"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-medium text-sm transition-all"
            >
              <FileDown className="w-4 h-4" />
              Download Resume
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
