import React from 'react';
import { Linkedin, Mail, Phone, MessageSquare } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface Props {
  onOpenContact: () => void;
}

export const Footer: React.FC<Props> = ({ onOpenContact }) => {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      window.history.pushState(null, '', `#${id}`);
    }
  };

  return (
    <footer className="bg-[#FAF6EE] pt-12 pb-10 border-t border-[#EFE9DC] text-slate-700">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 space-y-8">
        
        {/* Navigation & Contact Line matching Screenshot 6 */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 pb-6">
          {/* Navigation Links */}
          <nav className="flex flex-wrap items-center justify-center gap-6 text-sm font-semibold text-slate-600">
            <a 
              href="#home" 
              onClick={(e) => scrollToSection(e, 'home')}
              className="hover:text-amber-600 transition-colors"
            >
              Home
            </a>
            <a 
              href="#about" 
              onClick={(e) => scrollToSection(e, 'about')}
              className="hover:text-amber-600 transition-colors"
            >
              About
            </a>
            <a 
              href="#services" 
              onClick={(e) => scrollToSection(e, 'services')}
              className="hover:text-amber-600 transition-colors"
            >
              Services
            </a>
            <a 
              href="#projects" 
              onClick={(e) => scrollToSection(e, 'projects')}
              className="hover:text-amber-600 transition-colors"
            >
              Projects
            </a>
            <a 
              href="#education" 
              onClick={(e) => scrollToSection(e, 'education')}
              className="hover:text-amber-600 transition-colors"
            >
              Education
            </a>
            <a 
              href="#experience" 
              onClick={(e) => scrollToSection(e, 'experience')}
              className="hover:text-amber-600 transition-colors"
            >
              Experience
            </a>
            <button 
              onClick={onOpenContact}
              className="hover:text-amber-600 transition-colors cursor-pointer font-bold"
            >
              Contact
            </button>
          </nav>

          {/* Direct Phone & Mail */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm font-medium text-slate-600">
            <div className="flex items-center gap-1.5">
              <Phone className="w-4 h-4 text-amber-500" />
              <a 
                href={`tel:${PERSONAL_INFO.phone.replace(/\s+/g, '')}`} 
                className="hover:text-amber-600 transition-colors"
              >
                Phone: {PERSONAL_INFO.phone}
              </a>
            </div>
            <span className="hidden sm:inline text-slate-300">|</span>
            <div className="flex items-center gap-1.5">
              <Mail className="w-4 h-4 text-amber-500" />
              <a 
                href={`mailto:${PERSONAL_INFO.email}`} 
                className="hover:text-amber-600 transition-colors font-semibold"
              >
                Mail: {PERSONAL_INFO.email}
              </a>
            </div>
          </div>
        </div>

        {/* Hairline Divider */}
        <div className="w-full h-[1px] bg-slate-200/80" />

        {/* Bottom Credits & Socials matching Screenshot 6 */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-medium">
          <div>
            <span className="font-bold text-slate-800">{PERSONAL_INFO.name}</span>
          </div>

          <div className="text-center">
            Copyright © 2026 {PERSONAL_INFO.shortName}. All rights reserved.
          </div>

          {/* Social Icons matching Screenshot 6 */}
          <div className="flex items-center gap-3">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="micro-interactive w-8 h-8 rounded-full bg-slate-200 hover:bg-amber-400 hover:text-slate-950 flex items-center justify-center text-slate-700 shadow-2xs"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              aria-label="Email"
              className="micro-interactive w-8 h-8 rounded-full bg-slate-200 hover:bg-amber-400 hover:text-slate-950 flex items-center justify-center text-slate-700 shadow-2xs"
            >
              <Mail className="w-4 h-4" />
            </a>
            <button
              onClick={onOpenContact}
              aria-label="Message"
              className="micro-interactive w-8 h-8 rounded-full bg-amber-400 text-slate-950 flex items-center justify-center shadow-2xs cursor-pointer hover:bg-amber-500"
            >
              <MessageSquare className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
