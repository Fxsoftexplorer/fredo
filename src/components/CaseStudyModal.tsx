import React, { useEffect } from 'react';
import { X, CheckCircle, ArrowRight, ShieldCheck, Layers, Cpu, Clock } from 'lucide-react';
import { Project } from '../types/portfolio';

interface Props {
  project: Project | null;
  onClose: () => void;
}

export const CaseStudyModal: React.FC<Props> = ({ project, onClose }) => {
  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-3xl max-h-[90vh] bg-[#FCFAF6] rounded-2xl border border-[#E8DFC9] shadow-2xl overflow-hidden flex flex-col my-auto transform scale-100 animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-start justify-between p-6 sm:p-8 border-b border-[#EFE9DC] bg-white shrink-0">
          <div>
            <div className="text-xs uppercase tracking-wider font-bold text-amber-600 mb-1">
              {project.category} · Case Study & Simulated Tasks
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              {project.title}
            </h2>
            <p className="text-sm text-slate-600 mt-1 font-medium">
              {project.subtitle}
            </p>
          </div>
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="p-2 rounded-full text-slate-400 hover:text-slate-800 hover:bg-slate-100 hover:rotate-90 transition-all duration-200 cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-8 text-slate-800">
          {/* Project Screenshot Display */}
          {project.imageUrl && (
            <div className="w-full rounded-xl overflow-hidden border border-[#EFE9DC] bg-slate-50 shadow-xs flex items-center justify-center p-2 sm:p-4">
              <img
                src={project.imageUrl}
                alt={project.imageAlt || project.title}
                referrerPolicy="no-referrer"
                onError={(e) => {
                  const target = e.currentTarget;
                  if (project.fallbackImageUrl && !target.src.includes(project.fallbackImageUrl)) {
                    target.src = project.fallbackImageUrl;
                  }
                }}
                className="w-full max-h-[520px] object-contain rounded-lg"
              />
            </div>
          )}

          {/* Key Metrics Strip */}
          <div className={`grid gap-3 p-4 bg-amber-50/70 border border-amber-200/60 rounded-xl text-center ${project.metrics.length === 4 ? 'grid-cols-2 sm:grid-cols-4' : 'grid-cols-3'}`}>
            {project.metrics.map((metric, idx) => (
              <div key={idx} className="space-y-0.5">
                <div className="text-base sm:text-lg font-extrabold text-amber-900">{metric}</div>
                <div className="text-[11px] font-medium text-amber-700 uppercase tracking-wide">Metric {idx + 1}</div>
              </div>
            ))}
          </div>

          {/* Tools & Environment */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2 flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5 text-amber-500" /> Systems & Tools Applied
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.tools.map((tool, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-md bg-white border border-slate-200 text-xs font-semibold text-slate-700 shadow-2xs"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>

          {/* Project Challenge */}
          <div className="space-y-2">
            <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
              <Clock className="w-4 h-4 text-amber-500" /> The Challenge & Objectives
            </h3>
            <p className="text-sm leading-relaxed text-slate-600 bg-white p-4 rounded-xl border border-slate-200/80">
              {project.simulatedDetails.challenge}
            </p>
          </div>

          {/* Detailed Workflow */}
          <div className="space-y-3">
            <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
              <Cpu className="w-4 h-4 text-amber-500" /> Operational Workflow & Configuration
            </h3>
            <div className="space-y-2.5">
              {project.simulatedDetails.workflow.map((step, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3 rounded-lg bg-white border border-slate-200/70 text-sm">
                  <span className="w-6 h-6 rounded-full bg-amber-100 text-amber-800 text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                    {idx + 1}
                  </span>
                  <span className="text-slate-700 leading-relaxed">{step}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Simulated Project Tasks (from PDF notes) */}
          <div className="space-y-3">
            <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-500" /> Simulated Tasks & Executions
            </h3>
            <div className="bg-emerald-50/50 border border-emerald-200/60 rounded-xl p-4 space-y-2.5">
              {project.simulatedDetails.simulatedTasks.map((task, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-sm text-slate-800">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{task}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tangible Outcomes */}
          <div className="space-y-2">
            <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
              <ArrowRight className="w-4 h-4 text-amber-500" /> Verified Results & Key Takeaways
            </h3>
            <ul className="space-y-2 text-sm text-slate-700 bg-white p-4 rounded-xl border border-slate-200/80">
              {project.simulatedDetails.outcomes.map((outcome, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-amber-500 font-bold">✓</span>
                  <span>{outcome}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 sm:p-6 bg-white border-t border-[#EFE9DC] flex items-center justify-between shrink-0">
          <span className="text-xs text-slate-500">
            Simulated Project Portfolio · Fredrick Lemchukwu
          </span>
          <button
            onClick={onClose}
            className="micro-interactive px-5 py-2 text-xs font-bold text-slate-900 bg-amber-400 hover:bg-amber-500 rounded-full shadow-xs cursor-pointer"
          >
            Close Case Study
          </button>
        </div>
      </div>
    </div>
  );
};
