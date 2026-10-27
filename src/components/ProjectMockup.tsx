import React from 'react';
import { ArrowUpRight, Maximize2 } from 'lucide-react';
import { Project } from '../types/portfolio';

interface Props {
  project: Project;
  onOpenModal: () => void;
}

export const ProjectMockup: React.FC<Props> = ({ project, onOpenModal }) => {
  const [imgSrc, setImgSrc] = React.useState(project.imageUrl);

  React.useEffect(() => {
    setImgSrc(project.imageUrl);
  }, [project.imageUrl]);

  return (
    <div 
      onClick={onOpenModal}
      className="project-card-interactive group relative w-full h-[320px] sm:h-[360px] md:h-[400px] rounded-2xl bg-[#FDFBF7] border border-[#EFE9DC] overflow-hidden shadow-sm hover:border-amber-400/80 flex flex-col justify-between cursor-pointer select-none"
    >
      {/* Top Browser / Window Toolbar matching visual inspiration */}
      <div className="flex items-center justify-between border-b border-[#EFE9DC] px-4 py-3 bg-[#FAF6EE]/80 group-hover:bg-[#FAF6EE] transition-colors shrink-0">
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-red-400 group-hover:scale-115 transition-transform duration-200" />
          <span className="w-2.5 h-2.5 rounded-full bg-amber-400 group-hover:scale-115 transition-transform duration-200" />
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 group-hover:scale-115 transition-transform duration-200" />
          <span className="ml-2 text-[11px] font-semibold text-slate-500 tracking-tight font-mono truncate max-w-[160px] sm:max-w-xs">
            {project.tools[0]} · Project Showcase
          </span>
        </div>

        <div className="flex items-center gap-1 text-[11px] font-semibold text-amber-700 bg-amber-50 group-hover:bg-amber-100 group-hover:text-amber-900 px-2.5 py-0.5 rounded-md transition-all duration-200">
          <span>Inspect Case Study</span>
          <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
        </div>
      </div>

      {/* Middle Display: Ordinary Image Displayed Directly */}
      <div className="flex-1 relative overflow-hidden bg-slate-100 p-3 sm:p-4 flex items-center justify-center">
        <div className="relative w-full h-full rounded-xl overflow-hidden bg-white shadow-2xs border border-slate-200/80">
          <img 
            src={imgSrc} 
            alt={project.imageAlt || project.title} 
            referrerPolicy="no-referrer"
            onError={() => {
              if (project.fallbackImageUrl && imgSrc !== project.fallbackImageUrl) {
                setImgSrc(project.fallbackImageUrl);
              }
            }}
            className="w-full h-full object-contain object-center bg-slate-50 group-hover:scale-[1.025] transition-transform duration-500 ease-out"
          />
          
          {/* Subtle hover overlay to view full case study */}
          <div className="absolute inset-0 bg-slate-900/25 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center backdrop-blur-[1px]">
            <span className="px-4 py-2 rounded-full bg-white text-slate-900 font-bold text-xs flex items-center gap-1.5 shadow-md transform scale-95 group-hover:scale-100 transition-transform duration-200">
              <Maximize2 className="w-3.5 h-3.5" />
              <span>View Case Study & Metrics</span>
            </span>
          </div>
        </div>
      </div>

      {/* Footer tags */}
      <div className="px-4 py-2.5 border-t border-[#EFE9DC] bg-white/60 flex items-center justify-between text-[11px] text-slate-500 shrink-0">
        <div className="flex items-center gap-2">
          {project.metrics.slice(0, 2).map((m, idx) => (
            <span key={idx} className="font-semibold text-slate-700">
              {m}
              {idx < 1 && <span className="text-slate-300 ml-2">·</span>}
            </span>
          ))}
        </div>
        <span className="text-amber-700 font-bold group-hover:translate-x-1 transition-transform duration-200 flex items-center gap-0.5">
          Case Study <ArrowUpRight className="w-3 h-3" />
        </span>
      </div>
    </div>
  );
};
