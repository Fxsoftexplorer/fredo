import React from 'react';
import { Quote, Star } from 'lucide-react';
import { TESTIMONIALS } from '../data/portfolioData';
import { SparkTicks } from './Doodles';
import { Reveal } from './Reveal';

interface Props {
  onOpenContact: () => void;
}

export const Testimonials: React.FC<Props> = ({ onOpenContact }) => {
  return (
    <section className="py-20 sm:py-28 bg-[#FAF6EE] border-b border-[#EFE9DC] bg-contour-lines">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Header row with Title & "SEE ALL FEEDBACK" button */}
        <Reveal direction="up" duration={500}>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
            <div className="space-y-2 text-left">
              <div className="flex items-center gap-2">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
                  Hear what they say about us?
                </h2>
                <SparkTicks className="w-8 h-8 text-amber-500 -mt-3" />
              </div>
              <p className="text-sm sm:text-base text-slate-600 font-normal">
                We love our clients and our clients love us. See verified feedback from founders and teams.
              </p>
            </div>

            <div className="shrink-0 text-left md:text-right">
              <button
                onClick={onOpenContact}
                className="btn-interactive px-6 py-3 rounded-lg bg-[#F59E0B] hover:bg-amber-600 text-slate-950 font-bold text-xs uppercase tracking-wider shadow-xs cursor-pointer"
              >
                See All Feedback
              </button>
            </div>
          </div>
        </Reveal>

        {/* 2x2 Grid of Testimonial Cards with Scroll Reveal */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {TESTIMONIALS.map((item, idx) => (
            <Reveal key={item.id} direction="up" delay={idx * 100} duration={550} className="h-full">
              <div
                className="card-hover-elevation bg-[#FFF8EC] rounded-2xl p-7 sm:p-8 border border-[#FBE3B7] shadow-xs flex flex-col justify-between space-y-6 text-left hover:border-amber-400 group h-full"
              >
                {/* Quote mark icon */}
                <div className="w-9 h-9 rounded-lg bg-amber-400 text-slate-950 flex items-center justify-center shrink-0 shadow-2xs group-hover:scale-110 group-hover:bg-amber-500 transition-all duration-300">
                  <Quote className="w-5 h-5 fill-slate-950" />
                </div>

                {/* Quote body */}
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal italic">
                  &ldquo;{item.quote}&rdquo;
                </p>

                {/* Author and star rating row */}
                <div className="pt-4 border-t border-amber-200/60 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-full overflow-hidden border-2 border-white shadow-xs bg-amber-100 shrink-0 group-hover:scale-105 transition-transform duration-300">
                      <img
                        src={item.avatar}
                        alt={item.author}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-900 leading-tight group-hover:text-amber-950 transition-colors">
                        {item.author}
                      </h4>
                      <p className="text-xs text-slate-500">
                        {item.role}, {item.company}
                      </p>
                    </div>
                  </div>

                  {/* 5 Yellow Stars */}
                  <div className="flex items-center gap-1 text-amber-500 shrink-0">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400 group-hover:scale-115 transition-transform duration-200" style={{ transitionDelay: `${i * 30}ms` }} />
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
};
