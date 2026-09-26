import React, { useState } from 'react';
import { ExternalLink, Sparkles, Layers, ArrowUpRight, CheckCircle2, ShieldCheck } from 'lucide-react';
import { projectsData } from '../data/portfolioData';

type FilterType = 'All' | 'Live Demos' | 'Agentic AI & RAG' | 'Enterprise';

export const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<FilterType>('All');

  const filteredProjects = projectsData.filter((project) => {
    if (activeFilter === 'All') return true;
    if (activeFilter === 'Live Demos') return Boolean(project.liveUrl);
    if (activeFilter === 'Agentic AI & RAG') {
      return (
        project.category === 'RAG / AI' ||
        project.tags.includes('Agentic AI') ||
        project.tags.includes('RAG')
      );
    }
    if (activeFilter === 'Enterprise') {
      return project.category === 'Enterprise AI' || project.category === 'LLM Ops';
    }
    return true;
  });

  return (
    <section id="projects" className="py-24 relative bg-[#060810]/60 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono uppercase tracking-wider mb-3">
            <span>03 // Production Systems & Architecture</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Featured Projects
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full mt-3" />
          <p className="mt-3 text-slate-400 text-sm sm:text-base max-w-2xl">
            Real-world RAG architectures, full-stack applications with AI assistants, and enterprise agentic chatbot deployments.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {(['All', 'Live Demos', 'Agentic AI & RAG', 'Enterprise'] as FilterType[]).map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                activeFilter === filter
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30 border border-blue-400/40'
                  : 'bg-slate-900/60 text-slate-400 hover:text-white hover:bg-slate-800/80 border border-slate-800'
              }`}
            >
              {filter}
              {filter === 'Live Demos' && (
                <span className="ml-2 inline-flex items-center px-1.5 py-0.2 rounded-full text-[10px] bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                  2 Live
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project) => {
            const hasLiveDemo = Boolean(project.liveUrl);

            return (
              <div
                key={project.id}
                className="flex flex-col justify-between rounded-2xl bg-[#0b0f1d] border border-slate-800/90 hover:border-blue-500/50 shadow-xl hover:shadow-[0_0_30px_rgba(59,130,246,0.18)] transition-all duration-300 p-6 sm:p-8 relative overflow-hidden group"
              >
                {/* Subtle top gradient glow on hover */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-blue-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                <div>
                  {/* Card top badges */}
                  <div className="flex items-center justify-between gap-3 mb-4 flex-wrap">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium bg-blue-950/60 text-blue-400 border border-blue-800/60">
                      <Sparkles className="w-3 h-3" />
                      {project.category}
                    </span>

                    {hasLiveDemo ? (
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium bg-emerald-950/60 text-emerald-400 border border-emerald-800/60">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                        Live Web App
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium bg-indigo-950/50 text-indigo-300 border border-indigo-800/50">
                        <ShieldCheck className="w-3 h-3 text-indigo-400" />
                        Enterprise Client Project
                      </span>
                    )}
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-blue-300 transition-colors mb-2">
                    {project.title}
                  </h3>
                  <p className="text-sm font-mono text-slate-400 mb-6">
                    {project.subtitle}
                  </p>

                  {/* Key Architecture / Accomplishment points */}
                  <ul className="space-y-3 mb-8 text-slate-300 text-sm leading-relaxed">
                    {project.description.map((desc, dIdx) => (
                      <li key={dIdx} className="flex items-start gap-3">
                        <CheckCircle2 className="w-4 h-4 text-blue-400 mt-1 shrink-0" />
                        <span>{desc}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Footer with Tags & Actions */}
                <div className="pt-6 border-t border-slate-800/80">
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-lg text-xs font-mono text-slate-300 bg-slate-900/90 border border-slate-800 group-hover:border-slate-700 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between gap-4">
                    {hasLiveDemo ? (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 shadow-md shadow-blue-600/30 hover:shadow-blue-500/50 transition-all group/btn"
                      >
                        <span>Launch Live Demo</span>
                        <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                      </a>
                    ) : (
                      <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
                        <Layers className="w-4 h-4 text-blue-400" />
                        <span>Production Enterprise Architecture</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
