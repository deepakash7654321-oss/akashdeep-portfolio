import React, { useEffect, useRef, useState } from 'react';
import { Code2, BrainCircuit, Cpu, BarChart3, Sparkles } from 'lucide-react';
import { skillsData } from '../data/portfolioData';

export const Skills: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code2':
        return <Code2 className="w-5 h-5 text-blue-400" />;
      case 'BrainCircuit':
        return <BrainCircuit className="w-5 h-5 text-indigo-400" />;
      case 'Cpu':
        return <Cpu className="w-5 h-5 text-cyan-400" />;
      case 'BarChart3':
        return <BarChart3 className="w-5 h-5 text-emerald-400" />;
      default:
        return <Sparkles className="w-5 h-5 text-blue-400" />;
    }
  };

  return (
    <section id="skills" ref={sectionRef} className="py-24 relative bg-[#060810] border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Skills & Competencies
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full mt-3" />
          <p className="mt-3 text-slate-400 text-sm sm:text-base max-w-xl">
            Interactive proficiency breakdown and specialized toolchains across AI, Full-Stack, and DevOps.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {skillsData.map((category) => (
            <div
              key={category.title}
              className="p-6 sm:p-8 rounded-2xl bg-[#0b0f1d] border border-slate-800/80 hover:border-blue-500/40 shadow-xl transition-all duration-300"
            >
              {/* Category Header */}
              <div className="flex items-center justify-between gap-3 mb-6 pb-4 border-b border-slate-800/80">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-slate-800/80 border border-slate-700/60">
                    {getCategoryIcon(category.iconName)}
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-white">
                      {category.title}
                    </h3>
                    <span className="text-xs font-mono text-slate-400">
                      {category.skills.length} core proficiencies
                    </span>
                  </div>
                </div>
              </div>

              {/* Progress Bars */}
              <div className="space-y-4 mb-6">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="group/bar">
                    <div className="flex justify-between items-center text-xs font-mono mb-1.5">
                      <span className="font-semibold text-slate-300 group-hover/bar:text-white transition-colors">
                        {skill.name}
                      </span>
                      <span className="text-blue-400 font-bold">
                        {isVisible ? `${skill.proficiency}%` : '0%'}
                      </span>
                    </div>

                    {/* Progress Track */}
                    <div className="w-full h-2.5 bg-slate-900 rounded-full overflow-hidden border border-slate-800 p-0.5">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-blue-500 via-indigo-500 to-cyan-400 transition-all duration-1000 ease-out shadow-[0_0_10px_rgba(59,130,246,0.5)]"
                        style={{
                          width: isVisible ? `${skill.proficiency}%` : '0%',
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* All Category Tags/Pills */}
              <div className="pt-4 border-t border-slate-800/60">
                <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider mb-2.5">
                  Associated Technologies & Concepts:
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {category.allTags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-md text-xs font-mono text-slate-300 bg-slate-800/60 border border-slate-700/50 hover:border-blue-400/40 hover:text-white transition-all"
                    >
                      {tag}
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
