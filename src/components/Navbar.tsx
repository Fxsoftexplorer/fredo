import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface Props {
  onOpenContact: () => void;
}

export const Navbar: React.FC<Props> = ({ onOpenContact }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      window.history.pushState(null, '', `#${id}`);
    }
  };

  const handleMobileNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      setTimeout(() => {
        el.scrollIntoView({ behavior: 'smooth' });
        window.history.pushState(null, '', `#${id}`);
      }, 100);
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-[#FCFAF6]/90 backdrop-blur-md border-b border-[#EFE9DC]/80 transition-all">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 h-20 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Wordmark (Single clean element) */}
        <a 
          href="#home" 
          onClick={(e) => scrollToSection(e, 'home')}
          className="flex items-center gap-2.5 text-xl font-bold tracking-tight text-slate-900 whitespace-nowrap shrink-0 group transition-transform"
        >
          <span className="w-7 h-7 rounded-full bg-amber-400 flex items-center justify-center text-slate-900 font-extrabold text-sm shadow-xs group-hover:rotate-12 group-hover:scale-110 transition-transform duration-300">
            ✦
          </span>
          <span className="text-xl font-extrabold tracking-tight group-hover:text-amber-600 transition-colors duration-200">Fredrick</span>
        </a>

        {/* Zone 2: Navigation Links (Clean single-line text links with animated hover line) */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-semibold text-slate-600">
          <a 
            href="#home" 
            onClick={(e) => scrollToSection(e, 'home')}
            className="nav-link-animated hover:text-amber-600 transition-colors whitespace-nowrap shrink-0"
          >
            Home
          </a>
          <a 
            href="#about" 
            onClick={(e) => scrollToSection(e, 'about')}
            className="nav-link-animated hover:text-amber-600 transition-colors whitespace-nowrap shrink-0"
          >
            About
          </a>
          <a 
            href="#services" 
            onClick={(e) => scrollToSection(e, 'services')}
            className="nav-link-animated hover:text-amber-600 transition-colors whitespace-nowrap shrink-0"
          >
            Services
          </a>
          <a 
            href="#projects" 
            onClick={(e) => scrollToSection(e, 'projects')}
            className="nav-link-animated hover:text-amber-600 transition-colors whitespace-nowrap shrink-0"
          >
            Projects
          </a>
          <a 
            href="#education" 
            onClick={(e) => scrollToSection(e, 'education')}
            className="nav-link-animated hover:text-amber-600 transition-colors whitespace-nowrap shrink-0"
          >
            Education
          </a>
          <a 
            href="#experience" 
            onClick={(e) => scrollToSection(e, 'experience')}
            className="nav-link-animated hover:text-amber-600 transition-colors whitespace-nowrap shrink-0"
          >
            Experience
          </a>
        </nav>

        {/* Zone 3: Primary Action (1 action button matching screenshot pill outline style) */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={onOpenContact}
            className="hidden sm:inline-flex items-center justify-center px-6 py-2 text-sm font-bold text-slate-900 border-2 border-slate-900 rounded-full hover:bg-slate-900 hover:text-white hover:-translate-y-0.5 active:translate-y-0 active:scale-95 transition-all duration-200 whitespace-nowrap shrink-0 shadow-2xs cursor-pointer micro-interactive"
          >
            Contact
          </button>

          {/* Mobile hamburger toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-slate-700 hover:text-slate-900 rounded-lg hover:bg-slate-100 transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile navigation drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-[#EFE9DC] bg-[#FCFAF6] px-6 py-5 space-y-4 shadow-lg animate-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col space-y-3 text-base font-semibold text-slate-700">
            <a 
              href="#home" 
              onClick={(e) => handleMobileNavClick(e, 'home')}
              className="py-1 hover:text-amber-600 transition-colors"
            >
              Home
            </a>
            <a 
              href="#about" 
              onClick={(e) => handleMobileNavClick(e, 'about')}
              className="py-1 hover:text-amber-600 transition-colors"
            >
              About
            </a>
            <a 
              href="#services" 
              onClick={(e) => handleMobileNavClick(e, 'services')}
              className="py-1 hover:text-amber-600 transition-colors"
            >
              Services
            </a>
            <a 
              href="#projects" 
              onClick={(e) => handleMobileNavClick(e, 'projects')}
              className="py-1 hover:text-amber-600 transition-colors"
            >
              Projects
            </a>
            <a 
              href="#education" 
              onClick={(e) => handleMobileNavClick(e, 'education')}
              className="py-1 hover:text-amber-600 transition-colors"
            >
              Education
            </a>
            <a 
              href="#experience" 
              onClick={(e) => handleMobileNavClick(e, 'experience')}
              className="py-1 hover:text-amber-600 transition-colors"
            >
              Experience
            </a>
          </nav>
          <div className="pt-2 border-t border-[#EFE9DC]">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContact();
              }}
              className="w-full py-2.5 text-center text-sm font-bold text-white bg-slate-900 rounded-full hover:bg-slate-800 transition-colors shadow-xs"
            >
              Get in Touch
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
