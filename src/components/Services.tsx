import React from 'react';
import { 
  HeartHandshake, 
  Database, 
  SearchCode, 
  CloudCog, 
  TrendingUp, 
  Workflow, 
  ArrowRight,
  CheckCircle2
} from 'lucide-react';
import { SERVICES } from '../data/portfolioData';
import { SparkTicks } from './Doodles';
import { Reveal } from './Reveal';

interface Props {
  onOpenContact: () => void;
}

export const Services: React.FC<Props> = ({ onOpenContact }) => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'HeartHandshake': return <HeartHandshake className="w-6 h-6 text-amber-500" />;
      case 'Database': return <Database className="w-6 h-6 text-amber-500" />;
      case 'SearchCode': return <SearchCode className="w-6 h-6 text-amber-500" />;
      case 'CloudCog': return <CloudCog className="w-6 h-6 text-amber-500" />;
      case 'TrendingUp': return <TrendingUp className="w-6 h-6 text-amber-500" />;
      case 'Workflow': return <Workflow className="w-6 h-6 text-amber-500" />;
      default: return <HeartHandshake className="w-6 h-6 text-amber-500" />;
    }
  };

  return (
    <section id="services" className="py-20 sm:py-28 bg-[#FCFAF6] border-b border-[#EFE9DC]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <Reveal direction="up" duration={500}>
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <div className="inline-flex items-center gap-1.5 justify-center">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                Services I Can Help You With
              </h2>
              <SparkTicks className="w-7 h-7 text-amber-500 -mt-3" />
            </div>
            <p className="text-base sm:text-lg text-slate-600 font-normal">
              Great customer support isn&apos;t just about talking to customers. It&apos;s about making sure the people, processes, and systems behind that support work together smoothly.
            </p>
          </div>
        </Reveal>

        {/* 6 Services Grid with Staggered Scroll Reveal */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {SERVICES.map((service, idx) => (
            <Reveal key={service.id} direction="up" delay={idx * 70} duration={500} className="h-full">
              <div
                className="card-hover-elevation group bg-white rounded-2xl p-7 border border-[#EFE9DC] hover:border-amber-400/80 shadow-xs flex flex-col justify-between h-full"
              >
                <div className="space-y-4">
                  {/* Icon in warm soft square */}
                  <div className="w-12 h-12 rounded-xl bg-amber-50 border border-amber-200/60 flex items-center justify-center group-hover:scale-110 group-hover:bg-amber-100 transition-all duration-300">
                    {getIcon(service.iconName)}
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-slate-900 tracking-tight group-hover:text-amber-900 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-xs font-semibold text-amber-700 mt-0.5">
                      {service.summary}
                    </p>
                  </div>

                  <p className="text-sm text-slate-600 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Deliverables */}
                  <div className="pt-2 border-t border-slate-100 space-y-1.5">
                    <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                      Core Focus
                    </div>
                    {service.deliverables.map((item, itemIdx) => (
                      <div key={itemIdx} className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                        <CheckCircle2 className="w-3.5 h-3.5 text-amber-500 shrink-0 group-hover:scale-110 transition-transform" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Action */}
                <div className="pt-6 mt-6 border-t border-slate-100">
                  <button
                    onClick={onOpenContact}
                    className="w-full py-2.5 px-4 rounded-xl text-xs font-bold text-slate-800 bg-[#FAF6EE] group-hover:bg-[#F59E0B] group-hover:text-slate-950 hover:-translate-y-0.5 active:translate-y-0 active:scale-95 transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer shadow-2xs"
                  >
                    <span>Request Support For This</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform duration-200" />
                  </button>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
};
