export interface Project {
  id: string;
  category: string;
  title: string;
  subtitle: string;
  description: string;
  tools: string[];
  metrics: string[];
  imageUrl?: string;
  fallbackImageUrl?: string;
  imageAlt?: string;
  simulatedDetails: {
    challenge: string;
    workflow: string[];
    simulatedTasks: string[];
    outcomes: string[];
  };
  previewType: 'tickets' | 'freshdesk-admin' | 'zendesk-chat' | 'automation-ai' | 'hubspot-crm' | 'email-marketing' | 'p2p-bybit' | 'workspace-slack' | 'azure-iam' | 'aws-iam' | 'recruitment-ats' | 'agentic-ai';
}

export interface EducationItem {
  id: string;
  degree: string;
  field: string;
  institution: string;
  location: string;
  year: string;
  category: string;
  description: string;
  highlights: string[];
  competencies: string[];
  status: string;
}

export interface ExperienceItem {
  id: string;
  period: string;
  role: string;
  company: string;
  location: string;
  type: string;
  bullets: string[];
}

export interface ServiceItem {
  id: string;
  title: string;
  summary: string;
  description: string;
  iconName: string;
  deliverables: string[];
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  avatar: string;
  rating: number;
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  year?: string;
  badgeType: string;
  imageUrl?: string;
  fallbackImageUrl?: string;
  imageAlt?: string;
}

export interface Award {
  id: string;
  title: string;
  issuer: string;
  year: string;
  description: string;
  imageUrl?: string;
  fallbackImageUrl?: string;
  imageAlt?: string;
}
