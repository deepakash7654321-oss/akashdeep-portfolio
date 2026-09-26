import React from 'react';
import { Briefcase, Calendar, MapPin, Building2, CheckCircle2 } from 'lucide-react';
import { experienceData } from '../data/portfolioData';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 relative bg-[#060810] border-t border-slate-900">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Work Experience
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full mt-3" />
          <p className="mt-3 text-slate-400 text-sm max-w-xl">
            Hands-on software engineering delivering enterprise AI chatbots and full-stack solutions.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative border-l-2 border-slate-800 ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-12">
          {experienceData.map((item, index) => (
            <div key={item.id} className="relative group">
              {/* Timeline Node Dot */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 flex items-center justify-center">
                <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all ${
                  index === 0
                    ? 'border-blue-400 bg-blue-950 shadow-[0_0_12px_rgba(59,130,246,0.6)]'
                    : 'border-slate-600 bg-slate-900 group-hover:border-blue-400'
                }`}>
                  <div className={`w-2 h-2 rounded-full ${index === 0 ? 'bg-blue-400 animate-pulse' : 'bg-slate-400'}`} />
                </div>
              </div>

              {/* Experience Card */}
              <div className="p-6 sm:p-8 rounded-2xl bg-[#0b0f1d] border border-slate-800/80 hover:border-blue-500/40 shadow-lg hover:shadow-[0_0_25px_rgba(59,130,246,0.15)] transition-all duration-300">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
                  <div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-blue-300 transition-colors">
                        {item.role}
                      </h3>
                      {index === 0 && (
                        <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                          Current
                        </span>
                      )}
                    </div>
                    <div className="flex items-center gap-2 text-slate-300 font-medium text-sm sm:text-base mt-1">
                      <Building2 className="w-4 h-4 text-blue-400" />
                      <span>{item.company}</span>
                      {item.companyNote && (
                        <span className="text-slate-400 text-xs italic">({item.companyNote})</span>
                      )}
                    </div>
                  </div>

                  <div className="flex flex-col sm:items-end text-xs sm:text-sm font-mono text-slate-400 space-y-1">
                    <span className="flex items-center gap-1.5 text-blue-400 font-semibold bg-blue-950/40 px-2.5 py-1 rounded-md border border-blue-900/50">
                      <Calendar className="w-3.5 h-3.5" />
                      {item.period}
                    </span>
                    <span className="flex items-center gap-1.5 text-slate-400">
                      <MapPin className="w-3.5 h-3.5" />
                      {item.location}
                    </span>
                  </div>
                </div>

                {/* Bullet points */}
                <ul className="space-y-3 mb-6 text-slate-300 text-sm sm:text-base leading-relaxed">
                  {item.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-blue-400 mt-1 shrink-0" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                {/* Skills tags */}
                <div className="pt-4 border-t border-slate-800/80 flex flex-wrap gap-2">
                  {item.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 rounded-md text-xs font-mono text-slate-300 bg-slate-800/70 border border-slate-700/60 hover:border-blue-500/40 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
