import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Projects } from './components/Projects';
import { Education } from './components/Education';
import { Experience } from './components/Experience';
import { Testimonials } from './components/Testimonials';
import { CallToAction } from './components/CallToAction';
import { Footer } from './components/Footer';
import { CaseStudyModal } from './components/CaseStudyModal';
import { ContactModal } from './components/ContactModal';
import { CVModal } from './components/CVModal';
import { Project } from './types/portfolio';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isCVOpen, setIsCVOpen] = useState(false);

  const handleExploreProjects = () => {
    const projectsEl = document.getElementById('projects');
    if (projectsEl) {
      projectsEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FCFAF6] text-[#1E2229] font-sans antialiased selection:bg-amber-300 selection:text-slate-900">
      {/* Top Navigation */}
      <Navbar onOpenContact={() => setIsContactOpen(true)} />

      {/* Main Content Sections */}
      <main>
        {/* Hero Section */}
        <Hero 
          onOpenContact={() => setIsContactOpen(true)}
          onExploreProjects={handleExploreProjects}
        />

        {/* About Me Section */}
        <About 
          onOpenContact={() => setIsContactOpen(true)}
          onOpenCV={() => setIsCVOpen(true)}
        />

        {/* Services Section */}
        <Services 
          onOpenContact={() => setIsContactOpen(true)}
        />

        {/* Projects Section (Simulated Tasks & Case Studies with Direct Images) */}
        <Projects 
          onSelectProject={(project) => setSelectedProject(project)}
        />

        {/* Education Section (Direct Certificate & Credential Images) */}
        <Education 
          onOpenContact={() => setIsContactOpen(true)}
        />

        {/* Experience Section (Timeline & Loopy Arrow) */}
        <Experience 
          onOpenCV={() => setIsCVOpen(true)}
        />

        {/* Testimonials Section */}
        <Testimonials 
          onOpenContact={() => setIsContactOpen(true)}
        />

        {/* Call to Action Banner */}
        <CallToAction 
          onOpenContact={() => setIsContactOpen(true)}
        />
      </main>

      {/* Footer */}
      <Footer onOpenContact={() => setIsContactOpen(true)} />

      {/* Modals */}
      <CaseStudyModal 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />

      <ContactModal 
        isOpen={isContactOpen} 
        onClose={() => setIsContactOpen(false)} 
      />

      <CVModal 
        isOpen={isCVOpen} 
        onClose={() => setIsCVOpen(false)} 
      />
    </div>
  );
}
