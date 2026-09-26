import React from 'react';
import { Trophy, Medal, Users2, Sparkles } from 'lucide-react';
import { achievementsData } from '../data/portfolioData';

export const Achievements: React.FC = () => {
  const getAchievementIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Trophy className="w-6 h-6 text-amber-400" />;
      case 1:
        return <Medal className="w-6 h-6 text-blue-400" />;
      case 2:
        return <Users2 className="w-6 h-6 text-cyan-400" />;
      default:
        return <Sparkles className="w-6 h-6 text-indigo-400" />;
    }
  };

  return (
    <section id="achievements" className="py-24 relative bg-[#060810] border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono uppercase tracking-wider mb-3">
            <span>06 // Milestones & Recognition</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Key Achievements
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full mt-3" />
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {achievementsData.map((item, index) => (
            <div
              key={item.title}
              className="p-6 rounded-2xl bg-[#0b0f1d] border border-slate-800/80 hover:border-blue-500/40 shadow-lg hover:shadow-[0_0_20px_rgba(59,130,246,0.12)] transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700/60 group-hover:scale-110 transition-transform">
                    {getAchievementIcon(index)}
                  </div>
                  <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-slate-800 text-slate-300 border border-slate-700">
                    {item.badge}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white group-hover:text-blue-300 transition-colors mb-2">
                  {item.title}
                </h3>

                <p className="text-sm text-slate-300 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800/60 flex items-center gap-1.5 text-xs font-mono text-slate-400">
                <Sparkles className="w-3.5 h-3.5 text-blue-400" />
                <span>Verified Highlight</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
