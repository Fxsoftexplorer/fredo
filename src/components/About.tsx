import React from 'react';
import { Linkedin, Mail, ExternalLink, Globe2, Shield, Clock } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ScallopedBadge, SparkTicks, SpiralDoodle, SunburstBackground } from './Doodles';
import { Reveal } from './Reveal';
import aboutPortrait from '../assets/images/fredrick_about_portrait.jpg';

interface Props {
  onOpenContact: () => void;
  onOpenCV: () => void;
}

export const About: React.FC<Props> = ({ onOpenContact, onOpenCV }) => {
  return (
    <section id="about" className="py-20 sm:py-28 bg-[#FAF6EE] relative overflow-hidden bg-contour-lines border-b border-[#EFE9DC]">
      {/* Playful Spiral doodle in top left corner */}
      <div className="absolute top-8 left-10 opacity-70 pointer-events-none animate-float-gentle">
        <SpiralDoodle className="w-12 h-12 text-amber-500" />
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left: Circular Avatar with Sunburst scribble, 2+ Years Scalloped Badge, and Flourish (Span 5) */}
          <div className="lg:col-span-5 flex justify-center">
            <Reveal direction="right" duration={600}>
              <div className="relative w-[280px] h-[280px] sm:w-[340px] sm:h-[340px] md:w-[370px] md:h-[370px] flex items-center justify-center group/aboutAvatar">
                
                {/* Sunburst background with smooth hover rotation */}
                <div className="absolute inset-0 w-full h-full transform scale-105 pointer-events-none select-none transition-transform duration-700 ease-out group-hover/aboutAvatar:scale-110 group-hover/aboutAvatar:rotate-2">
                  <SunburstBackground className="w-full h-full" />
                </div>

                {/* Avatar image with gentle elevation on hover */}
                <div className="relative z-10 w-[240px] h-[240px] sm:w-[290px] sm:h-[290px] md:w-[320px] md:h-[320px] rounded-full overflow-hidden border-4 border-[#FAF6EE] shadow-xl group-hover/aboutAvatar:shadow-2xl group-hover/aboutAvatar:-translate-y-1 bg-amber-50 transition-all duration-500 ease-out cursor-default">
                  <img
                    src={aboutPortrait || PERSONAL_INFO.avatarUrl}
                    alt={PERSONAL_INFO.name}
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      e.currentTarget.src = 'https://lh3.googleusercontent.com/pw/AP1GczOHMG2pEPoZyclQ78aWaB1biInIIQgE5Plcck3HJoQX85bt-Abrt3_KkeO8Cs0RVoG3m3-0MuZY5egkb6-hd_rk3xudu8bB61kcUPLhbpvHSpIPWDs=w1920';
                    }}
                    className="w-full h-full object-cover object-top group-hover/aboutAvatar:scale-[1.03] transition-transform duration-700 ease-out"
                  />
                </div>

                {/* Scalloped Experience Badge */}
                <div className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 z-20 transform rotate-12 hover:rotate-6 hover:scale-108 transition-transform duration-300">
                  <ScallopedBadge text="2+ Years" subText="Experience" className="w-24 h-24 sm:w-28 sm:h-28 drop-shadow-md" />
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right: About Me Copy and Actions (Span 7) */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <Reveal direction="up" duration={600}>
              {/* Header with 3 tick marks */}
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
                    About Me
                  </h2>
                  <SparkTicks className="w-8 h-8 text-amber-500 -mt-3" />
                </div>
              </div>

              {/* Prose from user's CV and inspiration */}
              <div className="space-y-4 text-slate-600 text-base sm:text-lg leading-relaxed pt-2">
                <p>
                  Hello, I&apos;m <strong>Fredrick</strong>, a dedicated Customer Support and Technical Operations Specialist focused on helping businesses manage customer relationships, streamline workflows, and deliver better customer experiences.
                </p>
                <p>
                  With a background in Computer Science and Networking, I bring practical experience in CRM systems, customer support operations, workflow automation, and P2P sales transaction management. I enjoy solving problems, keeping operations organized, and finding practical ways to make work easier for both businesses and their customers.
                </p>
                <p className="text-sm sm:text-base text-slate-500">
                  I&apos;m also expanding my technical skills in DevOps, AWS cloud infrastructure, and Identity and Access Management (IAM), combining my technical background with a hands-on approach to customer support and business operations.
                </p>
              </div>

              {/* Remote availability & highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4">
                <div className="micro-interactive p-3 bg-white/80 rounded-xl border border-[#E8DFC9] hover:border-amber-400 hover:bg-white flex items-center gap-2.5 text-xs text-slate-700 shadow-2xs cursor-default">
                  <Globe2 className="w-4 h-4 text-amber-600 shrink-0" />
                  <span>Open to All Time Zones</span>
                </div>
                <div className="micro-interactive p-3 bg-white/80 rounded-xl border border-[#E8DFC9] hover:border-amber-400 hover:bg-white flex items-center gap-2.5 text-xs text-slate-700 shadow-2xs cursor-default">
                  <Shield className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>English (Native)</span>
                </div>
                <div className="micro-interactive p-3 bg-white/80 rounded-xl border border-[#E8DFC9] hover:border-amber-400 hover:bg-white flex items-center gap-2.5 text-xs text-slate-700 shadow-2xs cursor-default">
                  <Clock className="w-4 h-4 text-sky-600 shrink-0" />
                  <span>Full-time & Part-time</span>
                </div>
              </div>

              {/* CTAs: Hire Me button + Follow Me line */}
              <div className="pt-6 flex flex-wrap items-center gap-6">
                <button
                  onClick={onOpenContact}
                  className="btn-interactive px-8 py-3.5 rounded-full bg-[#F59E0B] hover:bg-amber-600 text-slate-950 font-extrabold text-sm tracking-wide shadow-md cursor-pointer"
                >
                  Hire Me
                </button>

                <button
                  onClick={onOpenCV}
                  className="micro-interactive px-6 py-3 rounded-full bg-white hover:bg-slate-50 hover:shadow-xs active:translate-y-0 active:scale-95 text-slate-900 border border-slate-300 font-bold text-sm tracking-wide shadow-2xs flex items-center gap-2 cursor-pointer group"
                >
                  <span>View Full CV</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </button>

                {/* Follow Me with separator */}
                <div className="flex items-center gap-3 text-sm font-semibold text-slate-500">
                  <span className="w-8 h-[1px] bg-slate-300" />
                  <span>Follow Me</span>
                  <div className="flex items-center gap-2.5">
                    <a
                      href="https://linkedin.com"
                      target="_blank"
                      rel="noreferrer"
                      aria-label="LinkedIn profile"
                      className="micro-interactive w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-700 hover:text-amber-600 hover:border-amber-400 shadow-2xs"
                    >
                      <Linkedin className="w-4 h-4" />
                    </a>
                    <a
                      href={`mailto:${PERSONAL_INFO.email}`}
                      aria-label="Email Fredrick"
                      className="micro-interactive w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-700 hover:text-amber-600 hover:border-amber-400 shadow-2xs"
                    >
                      <Mail className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

        </div>
      </div>
    </section>
  );
};
