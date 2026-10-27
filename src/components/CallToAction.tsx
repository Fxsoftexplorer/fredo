import React from 'react';
import { SparkTicks, StarSparkle } from './Doodles';
import { Reveal } from './Reveal';

interface Props {
  onOpenContact: () => void;
}

export const CallToAction: React.FC<Props> = ({ onOpenContact }) => {
  return (
    <section className="py-20 sm:py-28 bg-[#FCFAF6] border-b border-[#EFE9DC]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <Reveal direction="up" duration={550}>
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 sm:gap-12 text-center md:text-left">
            
            {/* Big Bold Headline with doodles */}
            <div className="relative inline-block group">
              {/* Ticks above WORK */}
              <div className="absolute -top-6 left-1/2 -translate-x-12 sm:translate-x-0 sm:left-48 pointer-events-none animate-float-gentle">
                <SparkTicks className="w-8 h-8 text-amber-500" />
              </div>

              {/* Sparkle star next to TOGETHER */}
              <div className="absolute -top-3 -right-8 sm:-right-12 pointer-events-none group-hover:rotate-45 group-hover:scale-125 transition-transform duration-500">
                <StarSparkle className="w-9 h-9 text-amber-500" />
              </div>

              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight uppercase leading-tight group-hover:text-amber-950 transition-colors">
                LET&apos;S WORK TOGETHER
              </h2>
            </div>

            {/* Let's Talk Button with smooth hover and click effect */}
            <div className="shrink-0">
              <button
                onClick={onOpenContact}
                className="btn-interactive px-10 py-4 rounded-full bg-[#F59E0B] hover:bg-amber-600 text-slate-950 font-extrabold text-base tracking-wide shadow-md cursor-pointer"
              >
                Let&apos;s Talk
              </button>
            </div>

          </div>
        </Reveal>
      </div>
    </section>
  );
};
