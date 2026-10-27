import React from 'react';
import { 
  Download, 
  CheckCircle2, 
  Cpu, 
  Wrench,
  HelpCircle,
  MessageSquare,
  Layers,
  Cloud,
  FileSpreadsheet,
  Headphones,
  Mail,
  BookOpen,
  Video,
  CheckSquare,
  GitPullRequest,
  BarChart3
} from 'lucide-react';
import { EXPERIENCES, TOOLS_AND_SYSTEMS } from '../data/portfolioData';
import { LoopyArrowDoodle, SparkTicks } from './Doodles';
import { Reveal } from './Reveal';

const TOOL_ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  HelpCircle,
  MessageSquare,
  Layers,
  Cloud,
  FileSpreadsheet,
  Headphones,
  Mail,
  BookOpen,
  Video,
  CheckSquare,
  GitPullRequest,
  BarChart3,
};

interface Props {
  onOpenCV: () => void;
}

export const Experience: React.FC<Props> = ({ onOpenCV }) => {
  return (
    <section id="experience" className="py-20 sm:py-28 bg-[#FCFAF6] border-b border-[#EFE9DC]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Main 2-Column Experience Grid matching Screenshot 4 */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Heading, Subtitle, Download CV Button, and Loopy Arrow Doodle (Span 5) */}
          <div className="lg:col-span-5 space-y-6 text-left lg:sticky lg:top-28">
            <Reveal direction="up" duration={500}>
              <div className="flex items-center gap-2">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
                  My Experience
                </h2>
                <SparkTicks className="w-8 h-8 text-amber-500 -mt-3" />
              </div>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal pt-2">
                I have had the pleasure to work with companies across a variety of industries. I&apos;m always interested in new, exciting and challenging adventures.
              </p>

              <div className="pt-4">
                <button
                  onClick={onOpenCV}
                  className="btn-interactive inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-[#F59E0B] hover:bg-amber-600 text-slate-950 font-extrabold text-sm tracking-wide shadow-md cursor-pointer"
                >
                  <Download className="w-4 h-4 stroke-[2.5]" />
                  <span>Download CV</span>
                </button>
              </div>

              {/* Playful Loopy arrow pointing to timeline matching Screenshot 4 */}
              <div className="pt-8 pl-4 hidden sm:block animate-float-gentle">
                <LoopyArrowDoodle className="w-36 h-36 text-amber-500/90 -rotate-6" />
              </div>
            </Reveal>
          </div>

          {/* Right Column: Timeline Rows with Amber Nodes (Span 7) */}
          <div className="lg:col-span-7 relative">
            {/* Vertical timeline spine */}
            <div className="absolute left-[110px] sm:left-[130px] top-4 bottom-4 w-[2px] bg-amber-200/80 hidden sm:block" />

            <div className="space-y-12 sm:space-y-16">
              {EXPERIENCES.map((exp, idx) => (
                <Reveal key={exp.id} direction="up" delay={idx * 120} duration={600}>
                  <div className="relative flex flex-col sm:flex-row items-start gap-4 sm:gap-8 group/timeline">
                    
                    {/* Period label */}
                    <div className="w-full sm:w-[110px] shrink-0 text-left sm:text-right pt-0 sm:pt-0.5">
                      <span className="font-mono text-xs sm:text-sm font-bold text-slate-700 group-hover/timeline:text-amber-700 transition-colors whitespace-nowrap">
                        {exp.period}
                      </span>
                    </div>

                    {/* Golden amber circular node */}
                    <div className="hidden sm:flex w-5 h-5 rounded-full bg-amber-400 group-hover/timeline:scale-125 group-hover/timeline:bg-amber-500 border-4 border-[#FCFAF6] shadow-xs shrink-0 mt-0.5 z-10 transition-transform duration-300" />

                    {/* Role Details */}
                    <div className="card-hover-elevation flex-1 space-y-3 text-left bg-white p-5 sm:p-6 rounded-2xl border border-[#EFE9DC] hover:border-amber-400/80 shadow-2xs">
                      <div>
                        <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 tracking-tight group-hover/timeline:text-amber-950 transition-colors">
                          {exp.role} <span className="text-amber-600 font-bold">at {exp.company}</span>
                        </h3>
                        <div className="text-xs font-semibold text-slate-400 mt-0.5">
                          {exp.location} · {exp.type}
                        </div>
                      </div>

                      <ul className="space-y-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                        {exp.bullets.map((bullet, bulletIdx) => (
                          <li key={bulletIdx} className="flex items-start gap-2">
                            <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0 mt-0.5 group-hover/timeline:scale-110 transition-transform" />
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                  </div>
                </Reveal>
              ))}
            </div>
          </div>

        </div>

        {/* Tools & Systems Arsenal Banner */}
        <div className="mt-20 pt-12 border-t border-[#EFE9DC]">
          <Reveal direction="up" duration={500}>
            <div className="text-center max-w-xl mx-auto mb-8 space-y-2">
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight flex items-center justify-center gap-2">
                <Wrench className="w-5 h-5 text-amber-500" />
                Tools, CRMs & Systems Arsenal
              </h3>
              <p className="text-xs sm:text-sm text-slate-500">
                Proficient in enterprise support architectures, helpdesks, and collaborative productivity tools.
              </p>
            </div>

            {/* Continuous Infinitely Looping Marquee */}
            <div className="marquee-container relative w-full overflow-hidden py-2" aria-label="Tools, CRMs and Systems Marquee">
              {/* Soft Gradient Fade on Left and Right Edges */}
              <div className="pointer-events-none absolute inset-y-0 left-0 w-10 sm:w-20 bg-gradient-to-r from-[#FCFAF6] to-transparent z-10" />
              <div className="pointer-events-none absolute inset-y-0 right-0 w-10 sm:w-20 bg-gradient-to-l from-[#FCFAF6] to-transparent z-10" />

              {/* Seamless Scrolling Track */}
              <div className="animate-marquee flex items-center py-2">
                {/* Sequence 1 */}
                <div className="flex items-center gap-4 shrink-0 pr-4">
                  {TOOLS_AND_SYSTEMS.map((tool, idx) => {
                    const IconComponent = TOOL_ICONS[tool.icon] || Wrench;
                    return (
                      <div
                        key={`tool-1-${idx}`}
                        className="shrink-0 flex items-center gap-3 px-4 py-3 bg-white rounded-xl border border-[#EFE9DC] hover:border-amber-400/80 hover:bg-amber-50/25 shadow-2xs transition-all duration-200 cursor-default group/tool min-w-[210px] sm:min-w-[230px]"
                      >
                        <div className="w-8 h-8 rounded-lg bg-amber-50 border border-amber-200/60 flex items-center justify-center text-amber-600 shrink-0 group-hover/tool:scale-110 group-hover/tool:bg-amber-100 transition-all duration-200">
                          <IconComponent className="w-4 h-4" />
                        </div>
                        <div className="min-w-0">
                          <div className="text-xs font-bold text-slate-800 group-hover/tool:text-amber-800 transition-colors truncate">
                            {tool.name}
                          </div>
                          <div className="text-[10px] text-slate-400 truncate mt-0.5">
                            {tool.category}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Sequence 2 (Identical twin for seamless 0 to -50% loop) */}
                <div className="flex items-center gap-4 shrink-0 pr-4" aria-hidden="true">
                  {TOOLS_AND_SYSTEMS.map((tool, idx) => {
                    const IconComponent = TOOL_ICONS[tool.icon] || Wrench;
                    return (
                      <div
                        key={`tool-2-${idx}`}
                        className="shrink-0 flex items-center gap-3 px-4 py-3 bg-white rounded-xl border border-[#EFE9DC] hover:border-amber-400/80 hover:bg-amber-50/25 shadow-2xs transition-all duration-200 cursor-default group/tool min-w-[210px] sm:min-w-[230px]"
                      >
                        <div className="w-8 h-8 rounded-lg bg-amber-50 border border-amber-200/60 flex items-center justify-center text-amber-600 shrink-0 group-hover/tool:scale-110 group-hover/tool:bg-amber-100 transition-all duration-200">
                          <IconComponent className="w-4 h-4" />
                        </div>
                        <div className="min-w-0">
                          <div className="text-xs font-bold text-slate-800 group-hover/tool:text-amber-800 transition-colors truncate">
                            {tool.name}
                          </div>
                          <div className="text-[10px] text-slate-400 truncate mt-0.5">
                            {tool.category}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </Reveal>
        </div>

      </div>
    </section>
  );
};
