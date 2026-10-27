import React, { useState } from 'react';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';
import { Project } from '../types/portfolio';
import { SparkTicks } from './Doodles';
import { ProjectMockup } from './ProjectMockup';
import { Reveal } from './Reveal';

interface Props {
  onSelectProject: (project: Project) => void;
}

export const Projects: React.FC<Props> = ({ onSelectProject }) => {
  const [showAll, setShowAll] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'ticketing' | 'automation' | 'crm' | 'ops' | 'cloud'>('all');

  const filteredProjects = PROJECTS.filter((p) => {
    if (selectedFilter === 'all') return true;
    if (selectedFilter === 'cloud') return p.category.includes('Cloud') || p.category.includes('IAM') || p.tools.some(t => t.includes('Azure') || t.includes('AWS'));
    if (selectedFilter === 'ticketing') return p.category.includes('Ticketing') || p.category.includes('Administration');
    if (selectedFilter === 'automation') return p.category.includes('Automation') || p.category.includes('AI');
    if (selectedFilter === 'crm') return p.category.includes('CRM') || p.category.includes('Sales');
    if (selectedFilter === 'ops') return p.category.includes('Operations') || p.category.includes('Fintech') || p.category.includes('Governance') || p.category.includes('Recruitment') || p.category.includes('Tracking');
    return true;
  });

  const displayedProjects = showAll ? filteredProjects : filteredProjects.slice(0, 4);

  return (
    <section id="projects" className="py-20 sm:py-28 bg-[#FCFAF6] border-b border-[#EFE9DC]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <Reveal direction="up" duration={500}>
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16 space-y-3">
            <div className="inline-flex items-center gap-1.5 justify-center">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
                Projects
              </h2>
              <SparkTicks className="w-8 h-8 text-amber-500 -mt-3" />
            </div>
            <p className="text-base sm:text-lg text-slate-600 font-normal">
              Here you will find simulated tasks and live customer support projects that I created, each project containing its own case study and operational details.
            </p>

            {/* Interactive filter tabs */}
            <div className="pt-4 flex flex-wrap items-center justify-center gap-2">
              {[
                { id: 'all', label: 'All Projects' },
                { id: 'cloud', label: 'Cloud & IAM Security' },
                { id: 'ticketing', label: 'Ticketing & Helpdesk' },
                { id: 'automation', label: 'AI & Automation' },
                { id: 'crm', label: 'CRM & Growth' },
                { id: 'ops', label: 'Fintech & Governance' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => {
                    setSelectedFilter(tab.id as any);
                    setShowAll(true);
                  }}
                  className={`micro-interactive px-3.5 py-1.5 rounded-full text-xs font-semibold cursor-pointer ${
                    selectedFilter === tab.id
                      ? 'bg-amber-400 text-slate-900 shadow-2xs font-bold'
                      : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-200 hover:border-slate-300'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Project Showcases List - Vertical Stack with Scroll Reveal */}
        <div className="space-y-16 sm:space-y-24">
          {displayedProjects.map((project, index) => {
            return (
              <Reveal key={project.id} direction="up" duration={600} delay={50}>
                <div
                  className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
                >
                  {/* Left Column: Metadata, Title, Description, View Case Study CTA (Span 5) */}
                  <div className="lg:col-span-5 space-y-4 text-left">
                    <div className="text-xs uppercase tracking-wider font-semibold text-slate-400">
                      {project.category}
                    </div>

                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-snug">
                      {project.title}
                    </h3>

                    <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                      {project.description}
                    </p>

                    {/* Highlights pills */}
                    <div className="flex flex-wrap gap-2 pt-1 text-xs text-slate-500">
                      {project.tools.map((tool, i) => (
                        <span key={i} className="text-slate-600 font-medium">
                          {tool} {i < project.tools.length - 1 ? '·' : ''}
                        </span>
                      ))}
                    </div>

                    {/* View Case Study Link */}
                    <div className="pt-2">
                      <button
                        onClick={() => onSelectProject(project)}
                        className="inline-flex items-center gap-1.5 text-sm font-bold text-slate-900 hover:text-amber-600 transition-colors group cursor-pointer"
                      >
                        <span className="underline decoration-slate-300 underline-offset-4 group-hover:decoration-amber-500">
                          View Case Study
                        </span>
                        <ArrowUpRight className="w-4 h-4 text-slate-700 group-hover:text-amber-600 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-200" />
                      </button>
                    </div>
                  </div>

                  {/* Right Column: Ordinary Project Image Displayed Directly (Span 7) */}
                  <div className="lg:col-span-7">
                    <ProjectMockup
                      project={project}
                      onOpenModal={() => onSelectProject(project)}
                    />
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* View More Button */}
        {filteredProjects.length > 4 && (
          <Reveal direction="up" duration={400} className="mt-16 sm:mt-20 text-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="px-8 py-3 rounded-full bg-white hover:bg-slate-50 hover:-translate-y-0.5 hover:shadow-sm active:translate-y-0 active:scale-95 text-slate-900 border border-slate-300 font-bold text-sm tracking-wide transition-all duration-200 cursor-pointer"
            >
              {showAll ? 'Show Fewer Projects' : 'View More Projects'}
            </button>
          </Reveal>
        )}

      </div>
    </section>
  );
};
