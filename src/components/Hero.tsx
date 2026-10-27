import React from 'react';
import { ArrowDown, Play, Star } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ArrowDoodle, SunburstBackground } from './Doodles';
import { BRAND_LOGOS_LIST } from './BrandLogos';
import heroPortrait from '../assets/images/fredrick_hero_portrait_latest.jpg';

interface Props {
  onOpenContact: () => void;
  onExploreProjects: () => void;
}

export const Hero: React.FC<Props> = ({ onOpenContact, onExploreProjects }) => {
  return (
    <section id="home" className="relative pt-6 sm:pt-10 pb-0 overflow-hidden bg-[#FCFAF6]">
      {/* Container matching 1440px baseline */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-4 items-center min-h-[580px] pb-12 sm:pb-16">
          
          {/* Left Column: Headline, Bio, CTAs (Span 5) */}
          <div className="lg:col-span-5 space-y-6 relative z-10 text-left">
            {/* Playful arrow doodle positioned above title with gentle entrance */}
            <div className="relative inline-block animate-hero-scale" style={{ animationDelay: '50ms' }}>
              <ArrowDoodle className="w-16 h-16 sm:w-20 sm:h-20 text-amber-500/90 -mb-2 animate-float-gentle" />
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-[3.25rem] font-extrabold text-slate-900 leading-[1.12] tracking-tight text-balance animate-hero-up" style={{ animationDelay: '100ms' }}>
              Hello, I&apos;m <br />
              <span className="text-slate-900">{PERSONAL_INFO.shortName}</span> a Customer Support <br />
              <span className="text-amber-500">Specialist</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-lg font-normal animate-hero-up" style={{ animationDelay: '180ms' }}>
              A dedicated Customer Support & Operations Specialist with a passion for creating digital experiences that not only resolve issues but also function seamlessly.
            </p>

            {/* Action buttons with refined hover & click effects */}
            <div className="flex items-center gap-4 pt-2 animate-hero-up" style={{ animationDelay: '260ms' }}>
              <button
                onClick={onOpenContact}
                className="btn-interactive-dark px-8 py-3.5 rounded-full bg-[#1C1E24] hover:bg-slate-800 text-white font-bold text-sm tracking-wide shadow-md cursor-pointer"
              >
                Get Started
              </button>

              <button
                onClick={onExploreProjects}
                aria-label="Explore simulated projects"
                className="btn-interactive w-12 h-12 rounded-full bg-amber-400 hover:bg-amber-500 text-slate-900 flex items-center justify-center shadow-sm cursor-pointer group"
                title="Explore Simulated Projects"
              >
                <Play className="w-5 h-5 fill-slate-900 translate-x-0.5 group-hover:scale-115 transition-transform duration-200" />
              </button>
            </div>

            {/* Scroll Down Indicator */}
            <div className="pt-6 sm:pt-8 flex items-center gap-3 text-xs font-semibold text-slate-500 animate-hero-up" style={{ animationDelay: '340ms' }}>
              <a
                href="#about"
                className="inline-flex items-center gap-2 group hover:text-slate-900 transition-colors"
              >
                <span className="w-8 h-8 rounded-full border border-slate-300 group-hover:border-slate-800 flex items-center justify-center transition-colors">
                  <ArrowDown className="w-3.5 h-3.5 group-hover:translate-y-1 transition-transform duration-200" />
                </span>
                <span>Scroll Down</span>
              </a>
            </div>
          </div>

          {/* Center Column: Circular Portrait with Sunburst Doodle Art (Span 4) */}
          <div className="lg:col-span-4 flex justify-center items-center relative animate-profile-entrance" style={{ animationDelay: '150ms' }}>
            <div className="relative w-[280px] h-[280px] sm:w-[340px] sm:h-[340px] md:w-[380px] md:h-[380px] flex items-center justify-center group/avatar">
              
              {/* Sunburst scribble backdrop with subtle ambient pulse */}
              <div className="absolute inset-0 w-full h-full transform scale-110 pointer-events-none select-none transition-transform duration-700 ease-out group-hover/avatar:scale-115 group-hover/avatar:rotate-2">
                <SunburstBackground className="w-full h-full" />
              </div>

              {/* Circular portrait avatar */}
              <div className="relative z-10 w-[240px] h-[240px] sm:w-[290px] sm:h-[290px] md:w-[320px] md:h-[320px] rounded-full overflow-hidden border-4 border-[#FCFAF6] shadow-xl group-hover/avatar:shadow-2xl group-hover/avatar:-translate-y-1 bg-amber-100 transition-all duration-500 ease-out cursor-default">
                <img
                  src={heroPortrait || PERSONAL_INFO.heroImageUrl}
                  alt={PERSONAL_INFO.name}
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    e.currentTarget.src = 'https://lh3.googleusercontent.com/pw/AP1GczPmMLtKRlGekTWxFsGfuW2jRsccFzWCR0MMQVyTT1npsXFUtivXwgzkVqRdChp7JzoLkGjSIxV2T42-MtIKFUhR3ObyEhvvGISPmVnoNIS85M7mTZo=w1920';
                  }}
                  className="w-full h-full object-cover object-center group-hover/avatar:scale-[1.03] transition-transform duration-700 ease-out"
                />
              </div>
            </div>
          </div>

          {/* Right Column: Key Metrics Stacked Vertically (Span 3) */}
          <div className="lg:col-span-3 flex flex-row lg:flex-col justify-around lg:justify-center items-start lg:items-end gap-6 sm:gap-8 pt-4 lg:pt-0 text-left lg:text-right">
            
            {/* Metric 1 */}
            <div className="space-y-0.5 animate-hero-up group/metric cursor-default" style={{ animationDelay: '220ms' }}>
              <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 group-hover/metric:text-amber-600 tracking-tight transition-all duration-200 group-hover/metric:scale-105 inline-block">
                {PERSONAL_INFO.experienceYears}
              </div>
              <div className="text-xs sm:text-sm font-medium text-slate-500 group-hover/metric:text-slate-700 transition-colors">
                Years Of Experience
              </div>
            </div>

            {/* Metric 2 */}
            <div className="space-y-0.5 animate-hero-up group/metric cursor-default" style={{ animationDelay: '300ms' }}>
              <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 group-hover/metric:text-amber-600 tracking-tight transition-all duration-200 group-hover/metric:scale-105 inline-block">
                {PERSONAL_INFO.satisfactionRate}
              </div>
              <div className="text-xs sm:text-sm font-medium text-slate-500 group-hover/metric:text-slate-700 transition-colors">
                Client Satisfaction & SLA
              </div>
            </div>

            {/* Metric 3 */}
            <div className="space-y-0.5 animate-hero-up group/metric cursor-default" style={{ animationDelay: '380ms' }}>
              <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 group-hover/metric:text-amber-600 tracking-tight transition-all duration-200 group-hover/metric:scale-105 inline-block">
                {PERSONAL_INFO.resolvedTickets}
              </div>
              <div className="text-xs sm:text-sm font-medium text-slate-500 group-hover/metric:text-slate-700 transition-colors">
                Tickets & Inquiries Done
              </div>
            </div>

            {/* 5 Star Ratings */}
            <div className="space-y-1 pt-1 animate-hero-up" style={{ animationDelay: '460ms' }}>
              <div className="flex items-center gap-1 justify-start lg:justify-end text-amber-500 group cursor-default">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400 group-hover:scale-120 group-hover:text-amber-500 transition-transform duration-200" style={{ transitionDelay: `${i * 35}ms` }} />
                ))}
              </div>
              <div className="text-xs font-semibold text-slate-600">
                5 Star Ratings ({PERSONAL_INFO.fiveStarReviews})
              </div>
            </div>

          </div>

        </div>
      </div>

      {/* Vibrant Golden Yellow Partner Strip with Smooth Continuous Scrolling Marquee */}
      <div 
        className="w-full bg-[#F59E0B] py-5 sm:py-6 overflow-hidden shadow-inner select-none relative marquee-container cursor-default"
        aria-label="Core Tools, CRMs and Systems"
      >
        {/* Subtle edge fade overlays for seamless entrance/exit */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-10 sm:w-20 bg-gradient-to-r from-[#F59E0B] to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-10 sm:w-20 bg-gradient-to-l from-[#F59E0B] to-transparent z-10" />

        {/* Marquee Track: Smoothly Gliding From Right to Left in an Infinite Loop */}
        <div className="animate-marquee flex items-center">
          {/* Primary Sequence of Tools */}
          <div className="flex items-center gap-9 sm:gap-12 lg:gap-14 pr-9 sm:pr-12 lg:pr-14 shrink-0">
            {[...BRAND_LOGOS_LIST, ...BRAND_LOGOS_LIST].map((brand, idx) => {
              const LogoComponent = brand.component;
              return (
                <div
                  key={`track-1-${brand.id}-${idx}`}
                  className="flex items-center justify-center text-white/95 hover:text-white transition-all transform hover:scale-110 hover:-translate-y-0.5 duration-200 select-none py-1 group cursor-default shrink-0"
                  title={brand.name}
                  aria-label={brand.name}
                >
                  <LogoComponent className="h-6 sm:h-7 md:h-8 w-auto max-w-[130px] drop-shadow-xs group-hover:drop-shadow-md transition-all" />
                </div>
              );
            })}
          </div>

          {/* Seamless Duplicate Sequence (guarantees zero jump or gap on loop reset) */}
          <div className="flex items-center gap-9 sm:gap-12 lg:gap-14 pr-9 sm:pr-12 lg:pr-14 shrink-0" aria-hidden="true">
            {[...BRAND_LOGOS_LIST, ...BRAND_LOGOS_LIST].map((brand, idx) => {
              const LogoComponent = brand.component;
              return (
                <div
                  key={`track-2-${brand.id}-${idx}`}
                  className="flex items-center justify-center text-white/95 hover:text-white transition-all transform hover:scale-110 hover:-translate-y-0.5 duration-200 select-none py-1 group cursor-default shrink-0"
                  title={brand.name}
                  tabIndex={-1}
                >
                  <LogoComponent className="h-6 sm:h-7 md:h-8 w-auto max-w-[130px] drop-shadow-xs group-hover:drop-shadow-md transition-all" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
