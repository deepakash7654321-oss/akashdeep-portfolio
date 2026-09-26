import React from 'react';
import { ArrowRight, Mail, FileDown, Terminal, Cpu, Sparkles } from 'lucide-react';
import { NeuralCanvas } from './NeuralCanvas';
import { personalInfo } from '../data/portfolioData';

export const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-16">
      {/* Background Neural Network Canvas */}
      <NeuralCanvas />

      {/* Radial overlay to ensure text contrast */}
      <div className="absolute inset-0 bg-radial-gradient from-transparent via-[#060810]/60 to-[#060810]/95 pointer-events-none" />

      {/* Floating subtle grid lines for tech depth */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Status pill badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950/60 border border-blue-500/30 text-blue-300 text-xs sm:text-sm font-mono mb-6 backdrop-blur-md shadow-[0_0_15px_rgba(59,130,246,0.2)] animate-pulse-slow">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
          <span className="w-2 h-2 rounded-full bg-emerald-400 -ml-3.5" />
          <span>Software Engineer at SearchUnify</span>
          <span className="text-slate-500">|</span>
          <span className="text-slate-400">Enterprise AI Solutions</span>
        </div>

        {/* Name */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white mb-4 leading-none">
          Hi, I'm{' '}
          <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-cyan-300 bg-clip-text text-transparent text-glow">
            {personalInfo.name}
          </span>
        </h1>

        {/* Title */}
        <div className="max-w-4xl mx-auto mb-6">
          <p className="text-base sm:text-lg md:text-xl font-medium text-slate-300 leading-relaxed font-mono">
            <span className="text-blue-400">Business Technology Solutions</span>
            <span className="text-slate-600 mx-2">/</span>
            <span className="text-slate-200">Full Stack Developer</span>
            <span className="text-slate-600 mx-2">/</span>
            <span className="text-indigo-400">Agentic AI & Chatbots</span>
            <span className="text-slate-600 mx-2">/</span>
            <span className="text-cyan-400">RAG & Vector Embeddings</span>
          </p>
        </div>

        {/* One-line pitch */}
        <p className="max-w-2xl mx-auto text-slate-400 text-sm sm:text-base md:text-lg mb-10 leading-relaxed">
          {personalInfo.pitch}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 w-full sm:w-auto">
          {/* Primary View Projects */}
          <a
            href="#projects"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl font-medium text-sm text-white bg-blue-600 hover:bg-blue-500 shadow-lg shadow-blue-600/30 hover:shadow-blue-500/50 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 border border-blue-400/40"
          >
            <span>View Projects</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          {/* Secondary Contact Me */}
          <a
            href="#contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl font-medium text-sm text-slate-200 bg-slate-900/80 hover:bg-slate-800/90 border border-slate-700 hover:border-blue-400/60 hover:text-white transition-all duration-200 backdrop-blur-sm"
          >
            <Mail className="w-4 h-4 text-blue-400" />
            <span>Contact Me</span>
          </a>

          {/* Download Resume button */}
          <a
            href={personalInfo.resumePath}
            download="Akashdeep_Sharma_Resume.pdf"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-medium text-sm text-slate-300 bg-slate-950/60 hover:bg-slate-900/80 border border-slate-800 hover:border-slate-700 hover:text-slate-100 transition-all duration-200"
          >
            <FileDown className="w-4 h-4 text-cyan-400" />
            <span>Download Resume</span>
          </a>
        </div>

        {/* Hero quick highlights bar */}
        <div className="mt-14 pt-8 border-t border-slate-800/80 grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-4xl text-left">
          <div className="flex items-center gap-3 p-3 rounded-lg bg-slate-900/40 border border-slate-800/60 backdrop-blur-sm">
            <Cpu className="w-5 h-5 text-blue-400 shrink-0" />
            <div>
              <div className="text-xs text-slate-400">Enterprise AI</div>
              <div className="text-sm font-semibold text-slate-200">Agentic Chatbots</div>
            </div>
          </div>
          <div className="flex items-center gap-3 p-3 rounded-lg bg-slate-900/40 border border-slate-800/60 backdrop-blur-sm">
            <Sparkles className="w-5 h-5 text-indigo-400 shrink-0" />
            <div>
              <div className="text-xs text-slate-400">Information Retrieval</div>
              <div className="text-sm font-semibold text-slate-200">RAG & FAISS</div>
            </div>
          </div>
          <div className="flex items-center gap-3 p-3 rounded-lg bg-slate-900/40 border border-slate-800/60 backdrop-blur-sm">
            <Terminal className="w-5 h-5 text-cyan-400 shrink-0" />
            <div>
              <div className="text-xs text-slate-400">Full Stack</div>
              <div className="text-sm font-semibold text-slate-200">React, Node, Python</div>
            </div>
          </div>
          <div className="flex items-center gap-3 p-3 rounded-lg bg-slate-900/40 border border-slate-800/60 backdrop-blur-sm">
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 shrink-0" />
            <div>
              <div className="text-xs text-slate-400">LLM Efficiency</div>
              <div className="text-sm font-semibold text-slate-200">Cost Optimization</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
