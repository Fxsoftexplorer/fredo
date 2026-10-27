import React, { useEffect } from 'react';
import { X, Printer, Download, Mail, Linkedin, Globe, MapPin, CheckCircle } from 'lucide-react';
import { PERSONAL_INFO, EXPERIENCES, EDUCATION_ITEMS, AWARDS, CERTIFICATIONS, TOOLS_AND_SYSTEMS } from '../data/portfolioData';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export const CVModal: React.FC<Props> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-900/60 backdrop-blur-sm overflow-y-auto animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="w-full max-w-4xl max-h-[92vh] bg-white rounded-2xl border border-slate-200 shadow-2xl overflow-hidden flex flex-col my-auto transform scale-100 animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Action Bar */}
        <div className="flex items-center justify-between p-4 sm:p-5 bg-[#FCFAF6] border-b border-[#EFE9DC] shrink-0">
          <div className="flex items-center gap-2">
            <span className="font-bold text-sm text-slate-800">
              Curriculum Vitae · {PERSONAL_INFO.name}
            </span>
            <span className="text-xs bg-amber-100 text-amber-800 font-semibold px-2 py-0.5 rounded-full">
              Official Document
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="micro-interactive inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-200 hover:bg-slate-100 text-xs font-semibold text-slate-700 cursor-pointer shadow-2xs"
              title="Print CV or Save as PDF"
            >
              <Printer className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Print / Save PDF</span>
            </button>

            <button
              onClick={onClose}
              aria-label="Close CV modal"
              className="p-1.5 rounded-full text-slate-400 hover:text-slate-800 hover:bg-slate-100 hover:rotate-90 transition-all duration-200 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable CV Document Content */}
        <div className="p-6 sm:p-10 overflow-y-auto space-y-8 text-slate-800 text-left bg-white font-sans text-sm">
          
          {/* CV Header */}
          <div className="border-b border-slate-200 pb-6 space-y-2">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 uppercase tracking-tight">
              {PERSONAL_INFO.name}
            </h1>
            <div className="text-base font-bold text-amber-700">
              {PERSONAL_INFO.title}
            </div>
            <div className="flex flex-wrap items-center gap-3 text-xs text-slate-600 pt-1">
              <span className="font-semibold text-slate-700">Remote Availability: Open to All Time Zones</span>
              <span>•</span>
              <a href={`mailto:${PERSONAL_INFO.email}`} className="text-amber-600 hover:underline font-semibold">
                {PERSONAL_INFO.email}
              </a>
              <span>•</span>
              <a href={`tel:${PERSONAL_INFO.phone.replace(/\s+/g, '')}`} className="text-slate-700 hover:text-amber-600 font-semibold">
                {PERSONAL_INFO.phone}
              </a>
              <span>•</span>
              <span className="text-slate-600">English (Native)</span>
            </div>
          </div>

          {/* Professional Summary */}
          <div className="space-y-2">
            <h2 className="text-xs font-extrabold uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-1">
              Professional Summary
            </h2>
            <p className="text-slate-700 leading-relaxed text-xs sm:text-sm">
              Customer and Technical Support Specialist with 2+ years of experience providing exceptional customer service through live chat, email, and phone channels. Genuinely enjoys getting to the bottom of an issue, finding the right fix, and leaving customers in a better place than when they reached out. Skilled in resolving customer issues, managing support tickets, and using CRM platforms including Zendesk, Freshdesk, Intercom, and HubSpot. Successfully handled 100+ customer interactions monthly while maintaining 95% customer satisfaction score and meeting SLA targets. Brings a calm, solutions approach to the work, communicates clearly, and is always looking to grow, pick up new skills, and take on fresh challenges.
            </p>
          </div>

          {/* Areas of Expertise */}
          <div className="space-y-2">
            <h2 className="text-xs font-extrabold uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-1">
              Areas of Expertise
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1 text-xs text-slate-700">
              <div>• Clear, Patient Written & Verbal Communication</div>
              <div>• Data Privacy & Confidentiality Standards</div>
              <div>• Virtual Assistance & Administrative Support</div>
              <div>• Remote Collaboration & Self-Management</div>
              <div>• Support Interaction Review & Quality Assurance</div>
              <div>• CRM & Ticketing System Proficiency</div>
              <div>• Customer Pain Point Identification</div>
              <div>• Attention to Detail</div>
              <div>• Process Improvement & Documentation</div>
              <div>• Cloud Systems (IAM)</div>
              <div>• Analytical Thinking & Problem-Solving</div>
              <div>• Sales Support</div>
            </div>
          </div>

          {/* Professional Experience */}
          <div className="space-y-4">
            <h2 className="text-xs font-extrabold uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-1">
              Professional Experience
            </h2>
            
            {EXPERIENCES.map((exp) => (
              <div key={exp.id} className="space-y-1.5">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs">
                  <div className="font-bold text-slate-900 text-sm">
                    {exp.role} <span className="font-normal text-slate-600">| {exp.company}, {exp.location}</span>
                  </div>
                  <div className="font-mono text-slate-500 font-semibold">{exp.period} · {exp.type}</div>
                </div>
                <ul className="list-disc list-inside space-y-1 text-xs text-slate-600 leading-relaxed pl-1">
                  {exp.bullets.map((b, idx) => (
                    <li key={idx}>{b}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Education */}
          <div className="space-y-3">
            <h2 className="text-xs font-extrabold uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-1">
              Education
            </h2>
            {EDUCATION_ITEMS.map((edu) => (
              <div key={edu.id} className="text-xs space-y-0.5">
                <div className="flex justify-between font-bold text-slate-900">
                  <span>{edu.degree}</span>
                  <span className="font-mono text-slate-500">{edu.year}</span>
                </div>
                <div className="text-slate-600">{edu.institution}, {edu.location}</div>
              </div>
            ))}
          </div>

          {/* Awards and Honors */}
          <div className="space-y-2">
            <h2 className="text-xs font-extrabold uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-1">
              Awards and Honors
            </h2>
            <ul className="list-disc list-inside space-y-1 text-xs text-slate-700">
              {AWARDS.map((a, i) => (
                <li key={i}>
                  <strong>{a.title}</strong> — {a.issuer} ({a.year})
                </li>
              ))}
            </ul>
          </div>

          {/* Tools & Systems */}
          <div className="space-y-2">
            <h2 className="text-xs font-extrabold uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-1">
              Tools & Systems
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs text-slate-700">
              {TOOLS_AND_SYSTEMS.map((t, i) => (
                <div key={i}>• {t.name}</div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="space-y-2">
            <h2 className="text-xs font-extrabold uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-1">
              Certifications
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
              {CERTIFICATIONS.map((c, i) => (
                <div key={i}>• {c.name} ({c.issuer}{c.year ? ` · ${c.year}` : ''})</div>
              ))}
            </div>
          </div>

          {/* Additional Information */}
          <div className="space-y-1 text-xs text-slate-600 pt-2 border-t border-slate-100">
            <div className="font-bold text-slate-800">Additional Information</div>
            <p>
              Currently building out skills in DevOps, cloud management, and Identity & Access Management (IAM) to grow further into the technical side of support.
            </p>
            <p>
              Open to both full-time and part-time roles, with a flexible schedule that fits well with remote, globally distributed teams.
            </p>
          </div>

        </div>

        {/* Modal Bottom Bar */}
        <div className="p-4 bg-[#FCFAF6] border-t border-[#EFE9DC] flex items-center justify-between shrink-0">
          <span className="text-xs text-slate-500">
            Fredrick Lemchukwu · Customer Support Specialist
          </span>
          <button
            onClick={onClose}
            className="px-5 py-2 text-xs font-bold text-slate-900 bg-amber-400 hover:bg-amber-500 rounded-full transition-colors"
          >
            Close Document
          </button>
        </div>
      </div>
    </div>
  );
};
