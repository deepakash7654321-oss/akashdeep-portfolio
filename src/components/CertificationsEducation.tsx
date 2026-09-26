import React from 'react';
import { GraduationCap, Award, Calendar, CheckCircle2, ShieldCheck } from 'lucide-react';
import { educationData, certificationsData } from '../data/portfolioData';

export const CertificationsEducation: React.FC = () => {
  return (
    <section id="education" className="py-24 relative bg-[#060810]/70 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Education & Certifications
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full mt-3" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Education Column */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-blue-500/10 border border-blue-500/20">
                <GraduationCap className="w-5 h-5 text-blue-400" />
              </div>
              <h3 className="text-xl font-bold text-white">Formal Education</h3>
            </div>

            <div className="p-6 sm:p-8 rounded-2xl bg-[#0b0f1d] border border-slate-800/80 hover:border-blue-500/40 shadow-xl transition-all group">
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-blue-950/60 text-blue-400 border border-blue-800/60">
                  {educationData.period}
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  Score: {educationData.score}
                </span>
              </div>

              <h4 className="text-xl font-bold text-white group-hover:text-blue-300 transition-colors mb-2">
                {educationData.degree}
              </h4>
              <p className="text-slate-300 font-medium text-sm mb-4">
                {educationData.institution}
              </p>

              <div className="pt-4 border-t border-slate-800/80 space-y-2 text-xs font-mono text-slate-400">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-400" />
                  <span>Major in Computer Science & Engineering</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-400" />
                  <span>Strong foundation in algorithms, databases, and systems</span>
                </div>
                {educationData.location && (
                  <div className="flex items-center gap-2 text-slate-400">
                    <ShieldCheck className="w-4 h-4 text-indigo-400" />
                    <span>{educationData.location}</span>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Certifications Column */}
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-indigo-500/10 border border-indigo-500/20">
                <Award className="w-5 h-5 text-indigo-400" />
              </div>
              <h3 className="text-xl font-bold text-white">Verified Certifications</h3>
            </div>

            <div className="space-y-4">
              {certificationsData.map((cert) => (
                <div
                  key={cert.title}
                  className="p-5 sm:p-6 rounded-2xl bg-[#0b0f1d] border border-slate-800/80 hover:border-indigo-500/40 shadow-lg transition-all group"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                    <div>
                      <h4 className="text-base sm:text-lg font-bold text-white group-hover:text-indigo-300 transition-colors">
                        {cert.title}
                      </h4>
                      <p className="text-sm text-slate-400">
                        {cert.issuer}
                      </p>
                    </div>

                    {cert.year && (
                      <span className="self-start sm:self-center inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md text-xs font-mono bg-slate-800/80 text-indigo-300 border border-slate-700">
                        <Calendar className="w-3 h-3" />
                        {cert.year}
                      </span>
                    )}
                  </div>

                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {cert.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2 py-0.5 rounded text-[11px] font-mono text-slate-300 bg-slate-900/80 border border-slate-800"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
