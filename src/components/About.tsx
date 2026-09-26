import React from 'react';
import { Bot, Database, Layers, Zap, CheckCircle2, ShieldCheck, MapPin } from 'lucide-react';
import { aboutData, personalInfo } from '../data/portfolioData';

export const About: React.FC = () => {
  const pillarIcons = [
    <Bot className="w-6 h-6 text-blue-400" />,
    <Database className="w-6 h-6 text-indigo-400" />,
    <Layers className="w-6 h-6 text-cyan-400" />,
    <Zap className="w-6 h-6 text-emerald-400" />
  ];

  return (
    <section id="about" className="py-24 relative bg-[#060810]/70 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            About Me
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full mt-3" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Main Narrative Card */}
          <div className="lg:col-span-7 space-y-6">
            <div className="p-8 rounded-2xl bg-[#0b0f1d] border border-slate-800/80 shadow-xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full blur-2xl group-hover:bg-blue-500/10 transition-colors pointer-events-none" />
              
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                <span className="flex h-2.5 w-2.5 rounded-full bg-blue-400" />
                Bridging Business Problems & Technology Solutions
              </h3>

              <p className="text-slate-300 leading-relaxed text-base sm:text-lg mb-6">
                {aboutData.summary}
              </p>

              <div className="pt-6 border-t border-slate-800/80 grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-slate-300 font-mono">
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                  <span>Enterprise Client Collaboration</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                  <span>Dynamic LLM Multi-Step Reasoning</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                  <span>Salesforce & CRM Integrations</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                  <span>Production-Grade RAG Pipelines</span>
                </div>
              </div>

              <div className="mt-6 pt-5 border-t border-slate-800/60 flex items-center justify-between text-xs text-slate-400 font-mono">
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-blue-400" />
                  {personalInfo.location}
                </span>
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  SearchUnify (Grazitti Interactive)
                </span>
              </div>
            </div>
          </div>

          {/* Core Focus Pillars */}
          <div className="lg:col-span-5 grid grid-cols-1 gap-4">
            {aboutData.pillars.map((pillar, idx) => (
              <div
                key={pillar.title}
                className="p-5 rounded-xl bg-slate-900/50 hover:bg-slate-900/80 border border-slate-800/70 hover:border-blue-500/40 transition-all duration-300 group"
              >
                <div className="flex items-start gap-4">
                  <div className="p-2.5 rounded-lg bg-slate-800/70 border border-slate-700/50 group-hover:border-blue-500/30 group-hover:scale-105 transition-all shrink-0">
                    {pillarIcons[idx]}
                  </div>
                  <div>
                    <h4 className="text-base font-semibold text-white group-hover:text-blue-300 transition-colors">
                      {pillar.title}
                    </h4>
                    <p className="text-sm text-slate-400 mt-1 leading-snug">
                      {pillar.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
