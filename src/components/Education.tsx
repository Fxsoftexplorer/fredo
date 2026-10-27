import React, { useState } from 'react';
import { 
  GraduationCap, 
  Award as AwardIcon, 
  CheckCircle, 
  BookOpen, 
  ShieldCheck, 
  ArrowUpRight, 
  Sparkles,
  Maximize2,
  MapPin,
  X
} from 'lucide-react';
import { EDUCATION_ITEMS, AWARDS, CERTIFICATIONS } from '../data/portfolioData';
import { EducationItem, Award, Certification } from '../types/portfolio';
import { SparkTicks } from './Doodles';
import { Reveal } from './Reveal';

interface Props {
  onOpenContact: () => void;
}

export const Education: React.FC<Props> = ({ onOpenContact }) => {
  const [selectedEdu, setSelectedEdu] = useState<EducationItem | null>(null);
  const [inspectCredential, setInspectCredential] = useState<{
    title: string;
    issuer: string;
    imageUrl?: string;
    fallbackImageUrl?: string;
    description?: string;
    badgeType?: string;
  } | null>(null);

  return (
    <section id="education" className="py-20 sm:py-28 bg-[#FAF6EE] border-b border-[#EFE9DC] bg-contour-lines">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <Reveal direction="up" duration={500}>
          <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20 space-y-3">
            <div className="inline-flex items-center gap-1.5 justify-center">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
                Education
              </h2>
              <SparkTicks className="w-8 h-8 text-amber-500 -mt-3" />
            </div>
            <p className="text-base sm:text-lg text-slate-600 font-normal">
              Academic training in Computer Science, Cloud Systems, and Networking, providing the technical bedrock behind every troubleshooting diagnostic.
            </p>
          </div>
        </Reveal>

        {/* Education Showcases List - Vertical Stack of 2-Column Rows with Scroll Reveal */}
        <div className="space-y-16 sm:space-y-24">
          {EDUCATION_ITEMS.map((edu, idx) => (
            <Reveal key={edu.id} direction="up" duration={600} delay={idx * 100}>
              <div
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
              >
                {/* Left Column: Category, Degree Title, Description, Curriculum Link (Span 5) */}
                <div className="lg:col-span-5 space-y-4 text-left">
                  <div className="flex items-center gap-2 text-xs uppercase tracking-wider font-semibold text-amber-700">
                    <span>{edu.category}</span>
                    <span>·</span>
                    <span className="text-slate-500">{edu.status}</span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-snug">
                    {edu.degree}
                  </h3>

                  <div className="flex flex-wrap items-center gap-3 text-xs font-semibold text-slate-600">
                    <span className="flex items-center gap-1 text-slate-800">
                      <GraduationCap className="w-4 h-4 text-amber-500" />
                      {edu.institution}
                    </span>
                    <span>·</span>
                    <span className="flex items-center gap-1 text-slate-500">
                      <MapPin className="w-3.5 h-3.5" />
                      {edu.location}
                    </span>
                  </div>

                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                    {edu.description}
                  </p>

                  {/* Highlights */}
                  <div className="space-y-1.5 pt-1">
                    {edu.highlights.map((h, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-700">
                        <CheckCircle className="w-3.5 h-3.5 text-amber-500 shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>

                  {/* Action button mimicking project case study link */}
                  <div className="pt-2">
                    <button
                      onClick={() => setSelectedEdu(edu)}
                      className="inline-flex items-center gap-1.5 text-sm font-bold text-slate-900 hover:text-amber-600 transition-colors group cursor-pointer"
                    >
                      <span className="underline decoration-slate-300 underline-offset-4 group-hover:decoration-amber-500">
                        View Curriculum Details
                      </span>
                      <ArrowUpRight className="w-4 h-4 text-slate-700 group-hover:text-amber-600 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-200" />
                    </button>
                  </div>
                </div>

                {/* Right Column: Visual Academic Showcase Card (Span 7) mimicking ProjectMockup */}
                <div className="lg:col-span-7">
                  <div 
                    onClick={() => setSelectedEdu(edu)}
                    className="card-hover-elevation group relative w-full h-[320px] sm:h-[350px] rounded-2xl bg-white border border-[#EFE9DC] hover:border-amber-400/80 overflow-hidden shadow-xs cursor-pointer p-5 sm:p-6 flex flex-col justify-between"
                  >
                    {/* Top Bar mimicking OS/Browser */}
                    <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-2 shrink-0">
                      <div className="flex items-center gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-red-400 group-hover:scale-110 transition-transform" />
                        <span className="w-2.5 h-2.5 rounded-full bg-amber-400 group-hover:scale-110 transition-transform" />
                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 group-hover:scale-110 transition-transform" />
                        <span className="ml-2 text-[11px] font-medium text-slate-400 font-mono">
                          {edu.institution} · Academic Record
                        </span>
                      </div>
                      <div className="text-[11px] font-semibold text-amber-700 bg-amber-50 px-2 py-0.5 rounded flex items-center gap-1">
                        <span>{edu.year}</span>
                      </div>
                    </div>

                    {/* Card Center Content */}
                    <div className="flex-1 flex flex-col justify-center space-y-4">
                      <div className="flex items-center justify-between bg-slate-50 group-hover:bg-amber-50/40 transition-colors p-3 rounded-xl border border-slate-100">
                        <div>
                          <div className="text-xs text-slate-500 font-medium">Field of Specialization</div>
                          <div className="text-base font-bold text-slate-900">{edu.field}</div>
                        </div>
                        <div className="w-10 h-10 rounded-full bg-amber-100 text-amber-800 flex items-center justify-center font-bold text-sm group-hover:scale-110 transition-transform">
                          <BookOpen className="w-5 h-5 text-amber-600" />
                        </div>
                      </div>

                      {/* Competency Badges Grid */}
                      <div className="space-y-1.5">
                        <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                          Core Competencies & Lab Mastery
                        </div>
                        <div className="flex flex-wrap gap-1.5">
                          {edu.competencies.map((comp, idxComp) => (
                            <span
                              key={idxComp}
                              className="px-2.5 py-1 rounded-md bg-[#FCFAF6] border border-amber-200/60 text-xs font-semibold text-slate-700 hover:border-amber-400 hover:bg-white transition-colors"
                            >
                              {comp}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Card Bottom Strip */}
                    <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 shrink-0">
                      <span className="flex items-center gap-1 text-emerald-700 font-semibold">
                        <ShieldCheck className="w-4 h-4 text-emerald-600" /> Verified Academic Program
                      </span>
                      <span className="text-amber-600 font-bold group-hover:translate-x-1 transition-transform">
                        Inspect Syllabus →
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Awards & Professional Certifications Grid Displayed Directly */}
        <div className="mt-24 pt-16 border-t border-[#E8DFC9] space-y-14">
          
          {/* Awards Subsection with Direct Certificate Images */}
          <div>
            <Reveal direction="up" duration={500}>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-8">
                <div className="flex items-center gap-2">
                  <AwardIcon className="w-6 h-6 text-amber-500" />
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                    Awards & Honors
                  </h3>
                </div>
                <span className="text-xs text-slate-500 font-medium">
                  Official Recognition · Verified Certificate Documents
                </span>
              </div>
            </Reveal>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {AWARDS.map((award, awardIdx) => (
                <Reveal key={award.id} direction="up" delay={awardIdx * 100} duration={550} className="h-full">
                  <div
                    className="card-hover-elevation bg-white rounded-2xl p-6 sm:p-7 border border-[#EFE9DC] shadow-xs flex flex-col justify-between space-y-5 text-left hover:border-amber-400/80 transition-all duration-300 group h-full"
                  >
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-amber-800 bg-amber-50 border border-amber-200/60 px-3 py-1 rounded-full group-hover:border-amber-300 transition-colors">
                          {award.issuer} · {award.year}
                        </span>
                        <Sparkles className="w-4 h-4 text-amber-500 group-hover:rotate-12 group-hover:scale-110 transition-transform duration-300" />
                      </div>

                      <h4 className="text-xl font-extrabold text-slate-900 tracking-tight leading-snug group-hover:text-amber-900 transition-colors">
                        {award.title}
                      </h4>

                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        {award.description}
                      </p>
                    </div>

                    {/* Direct Official Certificate Image Display */}
                    <div className="space-y-2 pt-2 border-t border-slate-100">
                      <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 flex items-center justify-between">
                        <span>Verification Document</span>
                        <span className="text-emerald-700 font-semibold text-[10px] flex items-center gap-1">
                          <ShieldCheck className="w-3 h-3" /> Official Credential
                        </span>
                      </div>

                      <div 
                        onClick={() => setInspectCredential({
                          title: award.title,
                          issuer: award.issuer,
                          imageUrl: award.imageUrl,
                          fallbackImageUrl: award.fallbackImageUrl,
                          description: award.description
                        })}
                        className="relative h-48 sm:h-56 rounded-xl overflow-hidden border border-slate-200 bg-slate-100 cursor-pointer group/scan shadow-2xs p-2 flex items-center justify-center hover:border-amber-300 transition-colors"
                      >
                        <img
                          src={award.imageUrl}
                          alt={award.imageAlt || award.title}
                          referrerPolicy="no-referrer"
                          onError={(e) => {
                            if (award.fallbackImageUrl && e.currentTarget.src !== award.fallbackImageUrl) {
                              e.currentTarget.src = award.fallbackImageUrl;
                            }
                          }}
                          className="w-full h-full object-contain rounded-lg group-hover/scan:scale-[1.025] transition-transform duration-500 ease-out"
                        />
                        <div className="absolute inset-0 bg-slate-900/30 opacity-0 group-hover/scan:opacity-100 transition-opacity duration-200 flex items-center justify-center gap-2 backdrop-blur-[1px]">
                          <span className="px-3.5 py-1.5 rounded-lg bg-white text-slate-900 font-bold text-xs flex items-center gap-1.5 shadow-md transform scale-95 group-hover/scan:scale-100 transition-transform duration-200">
                            <Maximize2 className="w-3.5 h-3.5" /> View Full Certificate
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Professional Certifications Subsection with Direct Credential Images */}
          <div>
            <Reveal direction="up" duration={500}>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-8">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-6 h-6 text-emerald-600" />
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                    Professional Certifications
                  </h3>
                </div>
                <span className="text-xs text-slate-500 font-medium">
                  Verified IT Support Credentials & Industry Badges
                </span>
              </div>
            </Reveal>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {CERTIFICATIONS.map((cert, certIdx) => (
                <Reveal key={cert.id} direction="up" delay={certIdx * 60} duration={500} className="h-full">
                  <div
                    className="card-hover-elevation bg-white rounded-2xl p-5 border border-[#EFE9DC] shadow-2xs hover:border-amber-400/80 transition-all duration-300 flex flex-col justify-between space-y-4 text-left group h-full"
                  >
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-extrabold uppercase tracking-wider text-amber-700 bg-amber-50 px-2 py-0.5 rounded group-hover:bg-amber-100 transition-colors">
                          {cert.badgeType}
                        </span>
                        <CheckCircle className="w-4 h-4 text-emerald-600 group-hover:scale-110 transition-transform" />
                      </div>

                      <h4 className="text-base font-bold text-slate-900 leading-snug group-hover:text-amber-900 transition-colors">
                        {cert.name}
                      </h4>
                      <div className="flex items-center justify-between text-xs text-slate-500 font-medium">
                        <p>Issuer: {cert.issuer}</p>
                        {cert.year && (
                          <span className="text-[11px] text-slate-400 font-normal">{cert.year}</span>
                        )}
                      </div>
                    </div>

                    {/* Direct Credential Certificate / Badge Display */}
                    <div className="pt-2 border-t border-slate-100 space-y-2">
                      <div 
                        onClick={() => setInspectCredential({
                          title: cert.name,
                          issuer: cert.issuer,
                          imageUrl: cert.imageUrl,
                          fallbackImageUrl: cert.fallbackImageUrl,
                          badgeType: cert.badgeType
                        })}
                        className="relative h-40 rounded-xl overflow-hidden border border-slate-200 bg-slate-100 cursor-pointer group/cert shadow-2xs p-2 flex items-center justify-center hover:border-amber-300 transition-colors"
                      >
                        <img
                          src={cert.imageUrl}
                          alt={cert.imageAlt || cert.name}
                          referrerPolicy="no-referrer"
                          onError={(e) => {
                            if (cert.fallbackImageUrl && e.currentTarget.src !== cert.fallbackImageUrl) {
                              e.currentTarget.src = cert.fallbackImageUrl;
                            }
                          }}
                          className="w-full h-full object-contain rounded-lg group-hover/cert:scale-[1.025] transition-transform duration-500 ease-out"
                        />
                        <div className="absolute inset-0 bg-slate-900/30 opacity-0 group-hover/cert:opacity-100 transition-opacity duration-200 flex items-center justify-center backdrop-blur-[1px]">
                          <span className="px-2.5 py-1 rounded-lg bg-white text-slate-900 font-bold text-[11px] flex items-center gap-1 shadow-md transform scale-95 group-hover/cert:scale-100 transition-transform duration-200">
                            <Maximize2 className="w-3.5 h-3.5" /> Inspect Credential
                          </span>
                        </div>
                      </div>

                      {/* Bottom action bar */}
                      <div className="flex items-center justify-between text-[11px] text-slate-500 pt-1">
                        <span className="text-emerald-700 font-semibold flex items-center gap-1">
                          <ShieldCheck className="w-3 h-3" /> Authenticated
                        </span>
                        <button
                          onClick={() => setInspectCredential({
                            title: cert.name,
                            issuer: cert.issuer,
                            imageUrl: cert.imageUrl,
                            fallbackImageUrl: cert.fallbackImageUrl,
                            badgeType: cert.badgeType
                          })}
                          className="text-amber-700 hover:text-amber-800 font-bold cursor-pointer flex items-center gap-0.5 group/btn micro-interactive"
                        >
                          <span>Inspect</span> <ArrowUpRight className="w-3 h-3 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                        </button>
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

        </div>

      </div>

      {/* Curriculum Modal */}
      {selectedEdu && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setSelectedEdu(null)}
        >
          <div 
            className="w-full max-w-xl bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xl space-y-6 text-left transform scale-100 animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between border-b border-slate-100 pb-4">
              <div>
                <span className="text-xs font-bold text-amber-600 uppercase">{selectedEdu.category}</span>
                <h3 className="text-2xl font-bold text-slate-900">{selectedEdu.degree}</h3>
                <p className="text-xs text-slate-500 mt-0.5">{selectedEdu.institution} · {selectedEdu.year}</p>
              </div>
              <button
                onClick={() => setSelectedEdu(null)}
                aria-label="Close modal"
                className="p-1.5 rounded-full text-slate-400 hover:text-slate-800 hover:bg-slate-100 hover:rotate-90 transition-all duration-200"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-3 text-sm text-slate-600">
              <h4 className="font-bold text-slate-900">Program Synopsis</h4>
              <p className="leading-relaxed">{selectedEdu.description}</p>
            </div>

            <div className="space-y-2">
              <h4 className="font-bold text-slate-900 text-sm">Key Focus Areas</h4>
              <div className="space-y-1.5">
                {selectedEdu.highlights.map((h, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs text-slate-700">
                    <CheckCircle className="w-3.5 h-3.5 text-amber-500 shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-2 flex justify-end">
              <button
                onClick={() => setSelectedEdu(null)}
                className="micro-interactive px-5 py-2 text-xs font-bold text-slate-900 bg-amber-400 hover:bg-amber-500 rounded-full cursor-pointer shadow-xs"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Credential Inspection Lightbox Modal */}
      {inspectCredential && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/75 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setInspectCredential(null)}
        >
          <div 
            className="w-full max-w-2xl bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-2xl flex flex-col text-left transform scale-100 animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between p-4 border-b border-slate-100 bg-[#FCFAF6]">
              <div>
                <span className="text-[10px] font-bold text-amber-600 uppercase tracking-wider">
                  Verified Credential · {inspectCredential.issuer}
                </span>
                <h3 className="text-lg font-extrabold text-slate-900">
                  {inspectCredential.title}
                </h3>
              </div>
              <button
                onClick={() => setInspectCredential(null)}
                aria-label="Close verification modal"
                className="p-1.5 rounded-full text-slate-400 hover:text-slate-800 hover:bg-slate-100 hover:rotate-90 transition-all duration-200"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-4 sm:p-6 bg-slate-50 flex items-center justify-center max-h-[70vh] overflow-auto">
              {inspectCredential.imageUrl && (
                <img
                  src={inspectCredential.imageUrl}
                  alt={inspectCredential.title}
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    if (inspectCredential.fallbackImageUrl && e.currentTarget.src !== inspectCredential.fallbackImageUrl) {
                      e.currentTarget.src = inspectCredential.fallbackImageUrl;
                    }
                  }}
                  className="max-h-[60vh] max-w-full rounded-lg object-contain shadow-sm border border-slate-200 bg-white"
                />
              )}
            </div>

            <div className="p-4 border-t border-slate-100 flex items-center justify-between bg-white text-xs text-slate-500">
              <span>Official Verification Document</span>
              <button
                onClick={() => setInspectCredential(null)}
                className="micro-interactive px-4 py-1.5 bg-amber-400 hover:bg-amber-500 text-slate-950 font-bold rounded-full cursor-pointer shadow-xs"
              >
                Close Verification
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
