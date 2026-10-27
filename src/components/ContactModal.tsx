import React, { useState, useEffect } from 'react';
import { X, CheckCircle, Send, Mail, Phone, MapPin, Globe2 } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<Props> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: 'Customer Experience & Ticketing',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      name: '',
      email: '',
      company: '',
      service: 'Customer Experience & Ticketing',
      message: ''
    });
    onClose();
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="w-full max-w-xl bg-white rounded-2xl border border-slate-200 shadow-2xl overflow-hidden flex flex-col my-auto transform scale-100 animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 bg-[#FCFAF6] border-b border-[#EFE9DC]">
          <div>
            <div className="text-xs uppercase tracking-wider font-bold text-amber-600">
              Get In Touch
            </div>
            <h3 className="text-2xl font-extrabold text-slate-900 tracking-tight">
              Let&apos;s Work Together
            </h3>
          </div>
          <button
            onClick={onClose}
            aria-label="Close contact modal"
            className="p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 hover:rotate-90 transition-all duration-200 cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Body */}
        <div className="p-6 sm:p-8 space-y-6">
          {submitted ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                <CheckCircle className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold text-slate-900">
                Message Sent Successfully!
              </h4>
              <p className="text-sm text-slate-600 max-w-md mx-auto">
                Thank you for reaching out. Fredrick will review your inquiry and respond within 24 hours.
              </p>
              <div className="pt-2">
                <button
                  onClick={handleReset}
                  className="px-6 py-2.5 bg-amber-400 hover:bg-amber-500 text-slate-950 font-bold rounded-full text-xs shadow-xs"
                >
                  Done
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-left">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-700">Your Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Sarah Jenkins"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 bg-slate-50/50"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-700">Email Address *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="sarah@company.com"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 bg-slate-50/50"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-700">Company / Organization</label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="e.g. TechCorp SaaS"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 bg-slate-50/50"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-700">Support Need</label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 bg-slate-50/50"
                  >
                    <option>Customer Experience & Ticketing</option>
                    <option>CRM & Data Management</option>
                    <option>Zendesk / Freshdesk Administration</option>
                    <option>AI Chatbot & Support Automation</option>
                    <option>Fintech & High-Volume Operations</option>
                    <option>Full-time / Part-time Support Role</option>
                  </select>
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-700">Message / Project Brief *</label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell me about your customer operations, challenges, or current team openings..."
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 bg-slate-50/50"
                />
              </div>

              {/* Direct email and phone info */}
              <div className="p-3 bg-amber-50/60 rounded-xl border border-amber-200/50 flex flex-wrap items-center justify-between gap-2 text-xs text-slate-700">
                <div className="flex flex-wrap items-center gap-4">
                  <a href={`mailto:${PERSONAL_INFO.email}`} className="flex items-center gap-1.5 font-medium hover:text-amber-700 transition-colors">
                    <Mail className="w-3.5 h-3.5 text-amber-600" />
                    <span>{PERSONAL_INFO.email}</span>
                  </a>
                  <a href={`tel:${PERSONAL_INFO.phone.replace(/\s+/g, '')}`} className="flex items-center gap-1.5 font-medium hover:text-amber-700 transition-colors">
                    <Phone className="w-3.5 h-3.5 text-amber-600" />
                    <span>{PERSONAL_INFO.phone}</span>
                  </a>
                </div>
                <span className="flex items-center gap-1.5 text-slate-500">
                  <Globe2 className="w-3.5 h-3.5" />
                  All time zones
                </span>
              </div>

              <div className="pt-2 flex justify-end gap-3">
                <button
                  type="button"
                  onClick={onClose}
                  className="micro-interactive px-5 py-2.5 rounded-full border border-slate-200 text-xs font-semibold text-slate-700 hover:bg-slate-100 cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-interactive px-7 py-2.5 rounded-full bg-[#F59E0B] hover:bg-amber-600 text-slate-950 font-extrabold text-xs tracking-wide shadow-md flex items-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
