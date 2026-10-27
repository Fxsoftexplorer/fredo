import { Project, EducationItem, ExperienceItem, ServiceItem, Testimonial, Certification, Award } from '../types/portfolio';
import freshdeskScreenshot from '../assets/images/freshdesk_tickets_showcase.png';
import zendeskAutomationScreenshot from '../assets/images/zendesk_support_automation_showcase.png';
import freshdeskAdminScreenshot from '../assets/images/freshdesk_admin_env_showcase.png';
import zendeskSupportAdminScreenshot from '../assets/images/zendesk_support_admin_showcase.png';
import hubspotChatTicketingScreenshot from '../assets/images/hubspot_chat_ticketing_showcase.png';
import emailMarketingScreenshot from '../assets/images/email_marketing_leads_showcase.png';
import digitalOpsScreenshot from '../assets/images/digital_ops_governance_showcase.png';
import fintechOpsScreenshot from '../assets/images/fintech_ops_trust_showcase.png';
import azureIamScreenshot from '../assets/images/azure_iam_structure_showcase.png';
import awsIamScreenshot from '../assets/images/aws_iam_management_showcase.png';
import recruitmentAtsScreenshot from '../assets/images/recruitment_ats_showcase.png';
import agenticAiScreenshot from '../assets/images/agentic_ai_workflow_showcase.png';
import afrimentAwardScreenshot from '../assets/images/afriment_award_recognition.png';
import devcareerAwardScreenshot from '../assets/images/devcareer_scholarship_award.png';
import mercorCertScreenshot from '../assets/images/mercor_ai_agent_certification.png';
import googleItCertScreenshot from '../assets/images/google_it_support_specialist.png';
import microsoftItCertScreenshot from '../assets/images/microsoft_it_support_specialist.png';
import ibmItCertScreenshot from '../assets/images/ibm_it_support_specialist.png';
import credlyBadgeScreenshot from '../assets/images/credly_pearson_tech_support.png';
import afrimentInternshipCertScreenshot from '../assets/images/afriment_internship_support_va.png';
import digitalwitchVaCertScreenshot from '../assets/images/digitalwitch_va_certification.png';

export const PERSONAL_INFO = {
  name: 'Fredrick Lemchukwu',
  shortName: 'Fredrick',
  title: 'Customer Support Specialist & Associate',
  headline: "Hello, I'm Fredrick a Customer Support Specialist",
  subHeadline: 'I help businesses turn customer problems into clear, reliable solutions. Skilled in omnichannel ticketing, CRM administration, and AI support workflows.',
  email: 'Fredrick2738@gmail.com',
  phone: '+234 91 559 32012',
  location: 'Remote · Open to All Time Zones',
  availability: 'Available for Full-time & Part-time Remote Roles',
  languages: ['English (Native)'],
  linkedin: 'https://linkedin.com/in/fredrick-lemchukwu',
  experienceYears: '2+',
  satisfactionRate: '100%',
  p2pCompletionRate: '100%',
  resolvedTickets: '1,000+',
  fiveStarReviews: '100+ Reviews',
  heroImageUrl: '/src/assets/images/fredrick_hero_portrait_latest.jpg',
  avatarUrl: '/src/assets/images/fredrick_about_portrait.jpg',
  aboutBio: [
    "Hello, I'm Fredrick, a dedicated Customer and Technical Support Specialist with over 2 years of experience providing exceptional customer service through live chat, email, and phone channels.",
    "My journey in customer support is grounded in one principle: getting to the bottom of every issue, finding the right fix, and leaving customers in a significantly better place than when they reached out.",
    "I bring a calm, analytical approach to high-pressure queues, whether untangling complex SaaS tickets, training AI support bots, or managing real-time fintech transactions with a 100% completion rate."
  ]
};

export const PARTNER_LOGOS = [
  { name: 'intercom', label: 'Intercom' },
  { name: 'gorgias', label: 'Gorgias' },
  { name: 'google', label: 'Google Workspace' },
  { name: 'microsoft', label: 'Microsoft 365' },
  { name: 'zendesk', label: 'Zendesk' },
  { name: 'freshdesk', label: 'Freshdesk' },
  { name: 'hubspot', label: 'HubSpot' },
  { name: 'aws', label: 'AWS' }
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'cx',
    title: 'Customer Experience',
    summary: 'Managing customer requests and support tickets across channels',
    description: 'Providing empathetic, timely, and thorough resolution across live chat, email, and voice channels while upholding strict SLA targets and brand tone.',
    iconName: 'HeartHandshake',
    deliverables: ['Omnichannel ticket triage', 'First contact resolution (FCR)', 'Escalation path management', 'CSAT & NPS satisfaction monitoring']
  },
  {
    id: 'crm',
    title: 'CRM & Data Management',
    summary: 'Keeping CRM and customer information organized and secure',
    description: 'Maintaining pristine contact records, tagging schemas, lead statuses, and data confidentiality standards across HubSpot, Zendesk, and Freshdesk.',
    iconName: 'Database',
    deliverables: ['Contact deduplication & hygiene', 'Custom property & tag architecture', 'Data privacy compliance', 'Customer journey tracking']
  },
  {
    id: 'troubleshooting',
    title: 'Troubleshooting & Resolution',
    summary: 'Investigating issues, handling escalations, and root-cause fixes',
    description: 'Deep-dive investigation of software glitches, transaction anomalies, and configuration errors, seeing every problem through to verified resolution.',
    iconName: 'SearchCode',
    deliverables: ['Root-cause analysis', 'Reproducing software bugs', 'Cross-team escalation coordination', 'User-facing diagnostic guidance']
  },
  {
    id: 'cloud-iam',
    title: 'Cloud Systems & IAM',
    summary: 'Cloud fundamentals, identity, permissions, and access control',
    description: 'Configuring user roles, secure access policies, two-factor authentication, and permission groups across AWS, Google Workspace, and enterprise tools.',
    iconName: 'CloudCog',
    deliverables: ['Role-Based Access Control (RBAC)', 'IAM user onboarding/offboarding', 'Security group auditing', 'Credential management standards']
  },
  {
    id: 'sales-ops',
    title: 'Sales Operations',
    summary: 'Supporting transactions, resolving customer issues, and retention',
    description: 'Assisting buyers and sellers through seamless transaction flows, order tracking, invoice generation, and targeted dispute mitigation.',
    iconName: 'TrendingUp',
    deliverables: ['High-value transaction support', 'Invoicing & payment tracking', 'Dispute mediation & fraud prevention', 'Customer retention workflows']
  },
  {
    id: 'process-improvement',
    title: 'Process Improvement',
    summary: 'Smarter workflows, less repetition, and better results',
    description: 'Auditing support bottlenecks to build reusable macros, automated follow-up triggers, knowledge base guides, and SOP documentation.',
    iconName: 'Workflow',
    deliverables: ['Macro & canned response library', 'Automated SLAs and reminders', 'Internal SOP documentation', 'Knowledge base deflection content']
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'freshdesk-ticketing',
    category: 'Omnichannel Ticketing',
    title: 'Freshdesk Live Chat & Simulated Ticketing',
    subtitle: '50-Ticket Queue Simulation, Routing & Escalation',
    description: 'After embedding a live chat feature in Freshdesk, simulated an active customer support queue by generating and triaging 50 support tickets covering diverse customer inquiries. Each ticket was reviewed, categorized, assigned, or escalated to appropriate tiers with strict SLA tracking.',
    tools: ['Freshdesk', 'Live Chat Widget', 'Ticket Automation', 'SLA Policies'],
    metrics: ['50 Tickets Triaged', '100% Escalation Accuracy', '<15m Avg Response Time'],
    imageUrl: freshdeskScreenshot,
    fallbackImageUrl: 'https://lh3.googleusercontent.com/pw/AP1GczO_J6WJxlTeU5sBM6JubDnAs7MWvXipDHOzWkN5W01MEHhkzc6fGKrq2RA46bgXbyL_Al19tyLo7Le6Tmm3sauX5UF1cPyaBRmx-8ybHIOeaTBG1A=w1200-h800-no',
    imageAlt: 'Freshdesk Live Chat and Support Queue Showcase',
    simulatedDetails: {
      challenge: 'Simulate high-volume customer inquiries while preventing ticket leakage, ensuring urgent billing and technical issues reach Tier 2 specialists immediately.',
      workflow: [
        'Configured web widget and embedded into the customer portal mock page',
        'Populated 50 simulated customer inquiries across billing, account access, technical bugs, and product questions',
        'Implemented custom ticket fields (Issue Severity, Product Line, Account Tier)',
        'Built automated dispatch rules routing high-priority tickets to senior agents'
      ],
      simulatedTasks: [
        'Task #1: Created and validated custom ticket statuses (Open, Pending Customer, Under Investigation, Resolved)',
        'Task #2: Generated 50 realistic scenarios with edge cases (refund disputes, password resets, API errors)',
        'Task #3: Audited resolution times and established 2-hour first response SLA triggers'
      ],
      outcomes: [
        'Demonstrated seamless management from initial customer message to closed satisfaction survey',
        'Achieved 100% proper categorization with zero unassigned tickets remaining in backlog'
      ]
    },
    previewType: 'tickets'
  },
  {
    id: 'zendesk-automation-ai',
    category: 'Support Automation & AI',
    title: 'Support Automation Triggers & AI Chatbot',
    subtitle: 'Automated 24h Triggers, AI Deflection & Macro Architecture',
    description: 'Configured automated workflows for ticket assignment, 24-hour follow-ups, and customer reminders within Zendesk. Trained an AI support agent to resolve routine inquiries and architected canned response macros, cutting repeat agent workloads.',
    tools: ['Zendesk Suite', 'AI Bot Builder', 'Triggers & Automations', 'Macro Library'],
    metrics: ['30% Drop in Inbound Routine Tickets', '24h Follow-up SLA', '15+ Core Macros'],
    imageUrl: zendeskAutomationScreenshot,
    fallbackImageUrl: '/src/assets/images/zendesk_automation_ui_1791942413502.jpg',
    imageAlt: 'Zendesk Support Automation Triggers and AI Chatbot Showcase',
    simulatedDetails: {
      challenge: 'Support agents spent excessive hours responding to redundant queries (pricing, password recovery, operational hours), slowing response times for complex issues.',
      workflow: [
        'Mapped customer conversation intents into the AI knowledge model',
        'Crafted prompt flows for the bot with graceful fallback escalation paths to human agents',
        'Constructed business rules: automated customer reminder after 24 hours of inactivity, auto-solve after 48 hours',
        'Wrote 15 standardized macro responses ensuring consistent brand tone'
      ],
      simulatedTasks: [
        'Task #1: Created trigger "Notify Assignee of Reopened Ticket" with high-priority flagging',
        'Task #2: Simulated AI bot interactions handling 20 common customer FAQs',
        'Task #3: Tested macro efficiency, reducing average typing time from 4 minutes to 30 seconds'
      ],
      outcomes: [
        'Automated 30% of repetitive questions without human agent intervention',
        'Zero tickets lost in backlog due to automated inactivity triggers'
      ]
    },
    previewType: 'automation-ai'
  },
  {
    id: 'freshdesk-admin-env',
    category: 'Admin Environment Architecture',
    title: 'Building the Freshdesk Support Admin Environment',
    subtitle: '10-Agent Team Structure, Groups & Role Routing',
    description: 'Configured a comprehensive Freshdesk admin environment from the ground up. Added 10 support agents, partitioned them into specialized functional groups (Billing, Tech Tier 1, Escalations), and established omnichannel routing.',
    tools: ['Freshdesk Admin', 'Agent Provisioning', 'Group Rules', 'Business Hours'],
    metrics: ['10 Agents Configured', '3 Functional Groups', 'Round-Robin Dispatch'],
    imageUrl: freshdeskAdminScreenshot,
    fallbackImageUrl: 'https://lh3.googleusercontent.com/pw/AP1GczN4ee6nMxmyCbOPaDoiI-2JtLZSwY2VcP_pl14NAePKf_auWQFfUOJ-OXjBe1QdtGp7hUpm9XVPm12D15UCHHcHNgBYRHb4Nc-XtM6ybqrPSozve4g=w1600-h1200-no',
    imageAlt: 'Building the Freshdesk Support Admin Environment Showcase',
    simulatedDetails: {
      challenge: 'Build a scalable support department from scratch that supports multiple product tiers, specialized roles, and global timezone coverage.',
      workflow: [
        'Created custom agent profiles with granular permission roles (Agent, Supervisor, Admin)',
        'Formed 3 core operational groups: Tier 1 General, Technical Support, and Billing & Accounts',
        'Defined global business operating hours and holiday calendars for accurate SLA tracking',
        'Established round-robin ticket assignment to distribute workload equitably'
      ],
      simulatedTasks: [
        'Task #1: Defined RBAC permissions preventing Tier 1 agents from altering core portal configurations',
        'Task #2: Set up automated notifications when group ticket thresholds exceed 15 unassigned items',
        'Task #3: Verified agent dashboard views and personalized ticket queues'
      ],
      outcomes: [
        'Engineered an enterprise-ready admin infrastructure ready for immediate production deployment',
        'Eliminated manual ticket cherry-picking through automated group dispatch'
      ]
    },
    previewType: 'freshdesk-admin'
  },
  {
    id: 'zendesk-support-admin',
    category: 'Zendesk Administration',
    title: 'Zendesk Support & Administration Setup',
    subtitle: 'Live Chat Widget Integration & Department Organization',
    description: 'Configured and embedded a live chat widget in Zendesk, tested end-to-end customer support workflows through internal ticket creation, and organized agents into appropriate departments with custom ticket tags and SLA policies.',
    tools: ['Zendesk Support', 'Web Widget', 'Department Routing', 'Ticket Tags'],
    metrics: ['End-to-End Workflow Tested', '4 Departments Configured', 'Real-time Chat Active'],
    imageUrl: zendeskSupportAdminScreenshot,
    fallbackImageUrl: 'https://lh3.googleusercontent.com/pw/AP1GczNqs2-SJaYIJzus32rzDw2QWMUH2RbY8oYABGQfj-33DpKQ3B_0O1_oWsb3lNbQspSiJ25gsGgliFklq4s2rh6I4hVdLT8psIWRk4Po5j1kivGKq6I=w1920',
    imageAlt: 'Zendesk Live Chat Widget and Ticket Administration',
    simulatedDetails: {
      challenge: 'Ensure instantaneous customer engagement on web portals while ensuring every live chat thread transitions cleanly into a trackable support ticket.',
      workflow: [
        'Deployed the Zendesk script onto custom web landing page test environment',
        'Configured pre-chat forms requiring customer email and issue classification',
        'Created departmental routing rules directing chats to available online agents',
        'Tested ticket creation from ended chats with transcript preservation'
      ],
      simulatedTasks: [
        'Task #1: Embedded and styled chat widget to harmonize with brand color schemes',
        'Task #2: Configured offline message collection when all agents are away',
        'Task #3: Verified automatic tag assignment (`chat_inquiry`, `unresolved_lead`)'
      ],
      outcomes: [
        'Full transcript retention within user profile history for seamless context on future tickets',
        'Zero lost inquiries even during off-hours'
      ]
    },
    previewType: 'zendesk-chat'
  },
  {
    id: 'hubspot-chat-crm',
    category: 'CRM & Knowledge Base',
    title: 'HubSpot Live Chat & Ticketing Integration',
    subtitle: 'Conversational Bot, Ticket Pipeline & Knowledge Base',
    description: 'Configured a live chat widget in HubSpot, simulated customer conversations, and converted live interactions into support tickets. Built out an organized knowledge base to deflect repetitive inquiries.',
    tools: ['HubSpot Service Hub', 'Conversations Inbox', 'Knowledge Base', 'Ticket Pipelines'],
    metrics: ['12 KB Articles Written', 'Live Chat to Ticket Pipeline', 'Unified CRM Timeline'],
    imageUrl: hubspotChatTicketingScreenshot,
    fallbackImageUrl: 'https://lh3.googleusercontent.com/pw/AP1GczOU5u5EwNMTvXPYhhQSBhjIkPuphIw9lVC09-aRe173EzPtny-bzQjiKjpnbyEGAv6zuYpGJPv6JAQTd1LJimOUspdOT0gn90H5n-H8UT-URo4fe7M=w1920',
    imageAlt: 'HubSpot Live Chat, Ticket Pipelines, and Knowledge Base',
    simulatedDetails: {
      challenge: 'Bridge the gap between front-line chat conversations and customer CRM data, enabling marketing, sales, and support to share unified context.',
      workflow: [
        'Integrated HubSpot Conversations inbox with shared team inbox',
        'Configured bot triage to identify existing contacts vs new prospects',
        'Created support ticket pipeline with stages: New, In Progress, Waiting on Client, Closed',
        'Curated 12 frequently requested knowledge base articles with step-by-step guides'
      ],
      simulatedTasks: [
        'Task #1: Simulated 15 chat sessions and converted 10 into escalated tickets',
        'Task #2: Verified that customer email history and previous orders display in the right sidebar',
        'Task #3: Set up automatic CSAT survey triggers upon ticket closure'
      ],
      outcomes: [
        'Complete 360-degree customer record visibility for support agents',
        'Self-service deflection reduced incoming tickets by 20%'
      ]
    },
    previewType: 'hubspot-crm'
  },
  {
    id: 'hubspot-email-leads',
    category: 'Sales Operations',
    title: 'Email Marketing & Lead Management',
    subtitle: 'Lead Ingestion, Segmentation & Invoicing Campaigns',
    description: 'Created email campaigns to promote products and generate sales, imported and cleaned customer data, managed lead lifecycles, and generated invoices—demonstrating practical experience across marketing and sales operations.',
    tools: ['HubSpot Marketing', 'Data Importer', 'Lead Scoring', 'Invoicing Tools'],
    metrics: ['500+ Contacts Cleaned & Imported', '3 Targeted Email Sequences', '100% Invoicing Precision'],
    imageUrl: emailMarketingScreenshot,
    fallbackImageUrl: 'https://lh3.googleusercontent.com/pw/AP1GczOeXGss8hIkfdQtxZrNh2c9HNoAmw7bWG0RSwOlnusNGux-jJlsqaOI1vUTkFdFzqldVCPaWVoBTphoI58b151q98URiN0Lgz14F3PwRmv_fFXXxbE=w1920',
    imageAlt: 'HubSpot Email Campaign Composer, Data Mapping, and Invoicing Showcase',
    simulatedDetails: {
      challenge: 'Raw customer lead lists contained formatting inconsistencies and duplicates, hindering sales follow-ups and marketing deliverability.',
      workflow: [
        'Cleaned and standardized CSV data (emails, company sizes, purchase history)',
        'Configured list segmentation based on customer interest tags and engagement scores',
        'Designed email marketing templates with clear value propositions and CTAs',
        'Set up automated lead status updates and sales pipeline invoicing'
      ],
      simulatedTasks: [
        'Task #1: Deduplicated contact records and mapped custom fields in HubSpot',
        'Task #2: Built drip sequence for re-engaging stalled leads',
        'Task #3: Generated mock invoices and tracked settlement statuses'
      ],
      outcomes: [
        'Achieved a clean, compliant CRM database ready for high-converting outreach',
        'Established standardized sales operations workflow for order processing'
      ]
    },
    previewType: 'email-marketing'
  },
  {
    id: 'slack-dropbox-workspace',
    category: 'Digital Operations & Governance',
    title: 'Working Together. Staying Organized.',
    subtitle: 'Structured Dropbox Workspace & Slack Team Communication',
    description: 'Demonstrating clean digital workspace architecture: created a structured Dropbox directory hierarchy and Slack channel organization, establishing clear communication protocols, organized file systems, and seamless cross-team collaboration.',
    tools: ['Slack', 'Dropbox Business', 'SOP Guidelines', 'Workspace Governance'],
    metrics: ['Standardized File Hierarchy', 'Dropbox Folder Taxonomy', 'Real-Time Slack Communications'],
    imageUrl: digitalOpsScreenshot,
    fallbackImageUrl: 'https://lh3.googleusercontent.com/pw/AP1GczOQRiGa2HQpuDMcUrTks4MmPOC2gK_HD5d6rehbYRONfGB6xnBj0iy0-zOp3JGcD4zolrc-_3CWYUtRP9xV1ZafefHzhwxHgVeB62-fpkL3_oq8j5o=w1920',
    imageAlt: 'Dropbox Standardized Folder Taxonomy and Slack Team Collaboration Environment',
    simulatedDetails: {
      challenge: 'Unstructured file storage and chaotic communication channels slow down support agent access to crucial documentation, customer logs, and product updates.',
      workflow: [
        'Created logical Dropbox folder taxonomy: /_Projects, /Archive, /Clients, /Company_Workspace, /Finance, /HR, /Reports',
        'Organized Slack direct & channel communications between team members (@Goodness Ugochi Ugorji & @MR. FRED)',
        'Documented workspace etiquette guidelines and communication SLA rules',
        'Configured role-based sharing links to protect confidential customer data'
      ],
      simulatedTasks: [
        'Task #1: Created naming convention guide (e.g. `YYYY-MM-DD_Customer_Report_v01.pdf`)',
        'Task #2: Established Slack thread hygiene policies to eliminate channel clutter',
        'Task #3: Simulated asynchronous handoff between global timezone shifts'
      ],
      outcomes: [
        'Fast retrieval of troubleshooting guides in under 10 seconds for agents',
        'Safe, compliant digital workspace meeting privacy standards'
      ]
    },
    previewType: 'workspace-slack'
  },
  {
    id: 'bybit-p2p-operations',
    category: 'Fintech Operations & Trust',
    title: 'P2P Transaction & Customer Management',
    subtitle: 'High-Volume Escrow Trades, Dispute Mediation & Anti-Fraud',
    description: 'Maintained a 100% transaction completion rate on Bybit P2P trading platforms. Responded promptly to users in real time, stayed calm under pressure, and focused on building trust and safeguarding financial transactions.',
    tools: ['Bybit P2P Platform', 'Escrow Management', 'KYC & Verification', 'Real-time Chat'],
    metrics: ['115,500+ Completed Orders', '100% Completion Rate (30 Days)', '99% Good Rating (13,389+ Reviews)', '1-Min Avg Release Time'],
    imageUrl: fintechOpsScreenshot,
    fallbackImageUrl: 'https://lh3.googleusercontent.com/pw/AP1GczOKUsPwmcHjkxBBezCHj65mQdBJ5pYx4tOLcFrhN4KKeiIpY8FeS_NwM36EV7GMtwAv7JYJCrApr-K_7c-09Pij7ca-cxgsDIxRH9j_ryObMg7sxQA=w1920',
    imageAlt: 'Bybit P2P Escrow, 115,000+ Completed Orders, and Customer Trust Ratings Showcase',
    simulatedDetails: {
      challenge: 'Managing high-stakes financial trades requiring rapid real-time verification of bank transfers while deflecting fraudulent payment proofs.',
      workflow: [
        'Verified proof-of-payment receipts against live banking notifications before escrow release',
        'Communicated calmly with anxious traders across multiple global currencies',
        'Managed dispute resolution protocols with official platform arbitration officers',
        'Logged suspicious user behaviors and flagged unverified third-party payer accounts'
      ],
      simulatedTasks: [
        'Task #1: Completed 100+ consecutive transactions with flawless record keeping',
        'Task #2: Handled tense escalation scenarios with patient, clear, and de-escalating instructions',
        'Task #3: Maintained top-tier merchant trust ranking through speed and integrity'
      ],
      outcomes: [
        '100% spotless completion metric with stellar user reviews',
        'Zero financial loss and proven ability to handle real-time pressure'
      ]
    },
    previewType: 'p2p-bybit'
  },
  {
    id: 'azure-iam-management-groups',
    category: 'Cloud Architecture & IAM',
    title: 'Microsoft Azure IAM & Management Group Structure',
    subtitle: 'Management Group Hierarchy, Resource Organization & Access Control',
    description: 'Created an Azure management group structure using the Tenant Root Group, with separate management groups for the Bank App and Hospital App. Organized the environment, assigned users to relevant roles, and configured access permissions to support structured resource management.',
    tools: ['Microsoft Azure', 'Management Groups', 'IAM', 'RBAC', 'User & Role Assignments'],
    metrics: ['Tenant Root Hierarchy', 'Bank & Hospital App Groups', 'RBAC Scoped Roles', 'Multi-App Separation'],
    imageUrl: azureIamScreenshot,
    fallbackImageUrl: 'https://lh3.googleusercontent.com/pw/AP1GczPUzgj2x7a2_fMkY90whVuR2zxQSOHMaOblHr0lYXAvwWH-c37ZgFgGHY_rZ0ISvkM1LYTr5YR7z_rI-01JugYTiTJ2in76DpajiOnUnxFyG2J1YYY=w1920',
    imageAlt: 'Microsoft Azure Management Groups Hierarchy, Entra ID Users, and Role Assignment Showcase',
    simulatedDetails: {
      challenge: 'Organize an Azure environment for two application areas while maintaining a clear management hierarchy and appropriate user access.',
      workflow: [
        '1. Management Group Setup: Used the Tenant Root Group as the top-level management group and created the Bank App and Hospital App management groups beneath it.',
        '2. Resource Organization: Organized the environment around the two application areas and their respective management structures.',
        '3. User Management: Added multiple users and assigned them to the relevant roles.',
        '4. Access Control: Applied role-based access control (RBAC) to manage user permissions according to their assigned responsibilities.'
      ],
      simulatedTasks: [
        'Task #1: Created Tenant Root Group hierarchy partitioning Bank App and Hospital App subscriptions and environments',
        'Task #2: Provisioned users (Sarah Chen, David Rodriguez, BankApp Admins) and bound scoped RBAC privileges',
        'Task #3: Verified permission inheritance across child management group scopes (Bank Dev, Bank Prod, Hospital Dev, Hospital Prod)'
      ],
      outcomes: [
        'Azure management group hierarchy established with strict application isolation',
        'Role-Based Access Control (RBAC) configured, ensuring least-privilege administrative access',
        'Centralized cloud governance structure implemented supporting structured resource management'
      ]
    },
    previewType: 'azure-iam'
  },
  {
    id: 'aws-iam-access-management',
    category: 'Cloud Infrastructure & Security',
    title: 'AWS IAM User, Group & Access Management',
    subtitle: 'IAM User Provisioning, Group Administration & Permission Control',
    description: 'Configured an AWS Identity and Access Management (IAM) environment using the AWS account. Created four IAM groups Account Managers, Administrators, Developers, and Support and added six IAM users, assigning each user to the appropriate group. Configured permissions based on their responsibilities and explored account activity monitoring to improve access visibility and accountability.',
    tools: ['AWS', 'IAM', 'IAM Users & Groups', 'IAM Policies', 'Permissions Management', 'Activity Monitoring'],
    metrics: ['4 Functional IAM Groups', '6 Users Provisioned', 'Granular Policy Control', 'Account Activity Auditing'],
    imageUrl: awsIamScreenshot,
    fallbackImageUrl: 'https://lh3.googleusercontent.com/pw/AP1GczO74e3XdQQDwnykaDsvTeu2rJo3_2zz-r9cxLjzJ5drZRD7ASKtyeVhVpEnk4cVad-iIzMn50Ub3ugeEKa-zcEINdCzsrWe8NE2S-pZAMhnujh7m2M=w1920',
    imageAlt: 'AWS IAM 4 User Groups (Account Managers, Administrators, Developers, Support) and 6 Users Showcase',
    simulatedDetails: {
      challenge: 'Organize users across different business functions and manage their access to AWS resources through appropriate permissions and centralized group administration.',
      workflow: [
        '1. IAM Group Creation: Created four IAM groups: Account Managers, Administrators, Developers, and Support.',
        '2. IAM User Provisioning: Created six IAM users to represent team members across the different functions.',
        '3. Group Membership: Assigned each user to the appropriate IAM group based on their responsibilities.',
        '4. Policy and Permission Management: Applied the necessary IAM permissions to control access to AWS resources according to each group\'s duties.',
        '5. Access Monitoring: Reviewed IAM sign-in information and explored AWS account activity monitoring to understand user access and actions performed within the environment.'
      ],
      simulatedTasks: [
        'Task #1: Created four functional IAM groups (Account Managers, Administrators, Developers, Support)',
        'Task #2: Provisioned 6 IAM users and mapped each member to their designated functional group',
        'Task #3: Enforced MFA compliance and audited CloudTrail / console activity logs for access accountability'
      ],
      outcomes: [
        'Configured centralized AWS Identity and Access Management with least-privilege security principles',
        'Streamlined group-based permissions administration, preventing individual credential drift',
        'Enhanced access visibility, accountability, and operational monitoring across all cloud duties'
      ]
    },
    previewType: 'aws-iam'
  },
  {
    id: 'recruitment-applicant-tracking-system',
    category: 'Recruitment & Operations Tracking',
    title: 'Recruitment Applicant Tracking System',
    subtitle: 'Google Sheets · Recruitment Coordination · Data Validation · Applicant Tracking · Reporting',
    description: 'Designed a Google Sheets recruitment tracker to organize job vacancies, manage applicant information, and monitor candidates throughout the hiring process. Used drop-down menus, status tracking, filters, and a summary dashboard to make recruitment records easier to manage and review.',
    tools: ['Google Sheets', 'Recruitment Coordination', 'Data Validation', 'Applicant Tracking', 'Reporting'],
    metrics: ['Job Openings Tracker', 'Candidate Pipeline Tracker', 'Dynamic Status Dropdowns', 'Visual Summary Dashboard'],
    imageUrl: recruitmentAtsScreenshot,
    fallbackImageUrl: 'https://lh3.googleusercontent.com/pw/AP1GczNvDIjxW7ZUUVdopUYflsdqbyTog_l6KmygosNerfO16Krl-Y1KOMFLMIkzATnGXmD4UpPuiK4zRF5LZqlLTC-kinWDHs1qlx0C9ZyK5WKIKheQXPk=w1920',
    imageAlt: 'Recruitment Applicant Tracking System Google Sheets Showcase',
    simulatedDetails: {
      challenge: 'Create a simple, organized system for tracking multiple applicants, reviewing qualifications, coordinating interviews, and recording hiring decisions in one place.',
      workflow: [
        '1. Created a job openings sheet to track vacancies, departments, requirements, and application deadlines.',
        '2. Built an applicant tracker with candidate records, screening notes, and recruitment stages.',
        '3. Added drop-down menus for screening status, interview progress, and hiring decisions.',
        '4. Applied conditional formatting and filters to make candidate records easier to review.',
        '5. Created a dashboard to summarize applications and recruitment progress.'
      ],
      simulatedTasks: [
        'Task #1: Formatted structured Job Openings repository detailing departments, roles, salary bands, and closing dates',
        'Task #2: Configured candidate assessment tracking with custom validation rules for pipeline stages (Applied, Screening, Interview, Offered, Hired)',
        'Task #3: Engineered automated dashboard metrics visualizing application counts, conversion rates, and department hiring status'
      ],
      outcomes: [
        'Google Sheets data management and recruitment administration streamlined end-to-end',
        'Applicant tracking and screening coordination structured with zero record loss',
        'Data validation, conditional formatting, spreadsheet formulas, and interview scheduling established'
      ]
    },
    previewType: 'recruitment-ats'
  },
  {
    id: 'agentic-ai-recruitment-workflow',
    category: 'Agentic AI & Workflow Automation',
    title: 'Agentic AI Recruitment Workflow Automation',
    subtitle: 'Context Layer · Workspace Layer · Instructional Layer · Agent Evaluation',
    description: 'Applied the three core layers of agentic AI workflows (Context, Workspace, and Instructional) to develop and troubleshoot an automated recruitment process. Engineered data grounding, configured workspace tool permissions, refined instructional prompts, and executed root-cause analysis to optimize candidate screening efficiency.',
    tools: ['Agentic AI Workflows', 'Context Layer', 'Workspace Layer', 'Instructional Layer', 'Google Sheets & Drive', 'Prompt Engineering'],
    metrics: ['Three-Layer Framework', 'Root Cause Troubleshooting', 'Context Grounding', 'Automated Recruitment Pipeline'],
    imageUrl: agenticAiScreenshot,
    fallbackImageUrl: 'https://lh3.googleusercontent.com/pw/AP1GczOJL3S97VKl9csvms58g8Ly9NrhrXSRfc4RtoW6DUq-9_He3PaSfIskElx8yCExm8fQbVag_LWXf-Pmyys6KhSNJjhQTteNFcyk02c1xQN8YIlPFf8=w1920',
    imageAlt: 'Agentic AI Recruitment Workflow Automation Three-Layer Framework Showcase',
    simulatedDetails: {
      challenge: 'Automate high-volume parts of the recruitment process to reduce manual workload and improve workflow efficiency, while identifying workflow errors, diagnosing root causes, and resolving failure points across context, tool permissions, and instruction layers.',
      workflow: [
        '1. Context Layer — Providing the Right Information: Prepared relevant candidate data, job specs, background information, and supporting documentation so the AI agent understood the recruitment task, expected structure, and desired output.',
        '2. Workspace Layer — Enabling Access: Configured necessary workspace permissions and tool boundaries to allow the agent to read and manipulate relevant files and tools, including Google Drive and Google Sheets where authorized.',
        '3. Instructional Layer — Guiding Execution: Designed and refined prompts to define the agent\'s objectives, required actions, processing rules, and expected results, performing troubleshooting and prompt optimization when errors occurred.'
      ],
      simulatedTasks: [
        'Task #1: Diagnosed agent hallucination and misclassification by injecting grounded context and structured recruitment criteria into the context layer',
        'Task #2: Configured OAuth and workspace file-access policies, resolving permission errors when reading candidate spreadsheets and interview notes',
        'Task #3: Performed root cause analysis on failed execution traces, rewriting instructional prompts with explicit constraints and validation guardrails'
      ],
      outcomes: [
        'Demonstrated practical application of a structured three-layer approach to AI workflow troubleshooting (context, workspace, instructions)',
        'Significantly reduced manual recruitment screening overhead while upholding evaluation accuracy and data grounding',
        'Built reliable, resilient AI agent workflows with transparent error recovery and governance'
      ]
    },
    previewType: 'agentic-ai'
  }
];

export const EDUCATION_ITEMS: EducationItem[] = [
  {
    id: 'edu-bsc',
    category: 'Degree Program',
    degree: 'B.Sc – Computer Science',
    field: 'Computer Science',
    institution: 'University of the People',
    location: 'Pasadena, CA, USA (Accredited Online)',
    year: '2026',
    status: 'In Progress / Expected 2027',
    description: 'Comprehensive study of computational algorithms, data structures, software engineering principles, computer systems architecture, and distributed databases, underpinning technical troubleshooting capabilities.',
    highlights: [
      'Focus on Operating Systems, Database Management Systems, and Software Design',
      'Algorithms & Data Structures for efficient information retrieval',
      'Web Programming and Information Security fundamentals'
    ],
    competencies: ['Computer Architecture', 'Relational Databases', 'Algorithms', 'Information Security', 'Software Engineering']
  },
  {
    id: 'edu-hnd',
    category: 'Higher National Diploma',
    degree: 'HND – Computer Networking & Cloud Technology',
    field: 'Computer Networking & Cloud Technology',
    institution: 'Federal Polytechnic Auchi',
    location: 'Auchi, Edo State, Nigeria',
    year: '2025',
    status: 'Completed 2025',
    description: 'Advanced technical specialization in network infrastructure, TCP/IP protocols, cloud architecture, server administration, Identity & Access Management (IAM), and enterprise telecommunications.',
    highlights: [
      'Cloud systems deployment, virtualization, and network security policies',
      'Configuring DNS, DHCP, firewalls, routing protocols, and enterprise VPNs',
      'Hands-on lab simulations for network diagnosis, latency reduction, and uptime optimization'
    ],
    competencies: ['Cloud Computing (AWS)', 'Networking (TCP/IP, DNS, VPN)', 'IAM & Security Policies', 'Server Administration']
  },
  {
    id: 'edu-nd',
    category: 'National Diploma',
    degree: 'ND – Computer Sciences',
    field: 'Computer Sciences',
    institution: 'Federal Polytechnic Auchi',
    location: 'Auchi, Edo State, Nigeria',
    year: '2023',
    status: 'Completed 2023',
    description: 'Foundational coursework in computer hardware, software fundamentals, programming logic, office automation systems, and database foundations.',
    highlights: [
      'Graduated with honors in technical coursework',
      'Computer hardware maintenance and peripheral troubleshooting',
      'Database fundamentals, SQL query design, and data normalization'
    ],
    competencies: ['Hardware Troubleshooting', 'System Diagnostics', 'SQL Foundations', 'Technical Support Basics']
  }
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: 'stayverse',
    period: 'Jan 2026 – Jun 2026',
    role: 'Customer Support Specialist',
    company: 'Stayverse Technology',
    location: 'Lagos, Nigeria',
    type: 'Remote',
    bullets: [
      'Handled 100+ customer support queries a week across chat, email, and phone, consistently earning above-average satisfaction scores.',
      'Configured and refined an AI-powered chatbot within Zendesk, including prompt design and conversation-flow adjustments, contributing to a 30% drop in inbound volume for routine queries and better ticket routing.',
      'Reviewed and annotated support interactions to keep quality and tone consistent with brand standards.',
      'Tracked recurring customer pain points and documented fixes that cut repeat complaints by 25% and supported a 20% lift in customer retention.',
      'Worked with internal teams to share feedback and shape process improvements.',
      'Kept customer records and support documentation accurate, confidential, and compliant.'
    ]
  },
  {
    id: 'melisports',
    period: 'Feb 2025 – Sep 2025',
    role: 'Customer Support Team Lead',
    company: 'Melisports',
    location: 'Lagos, Nigeria',
    type: 'Remote',
    bullets: [
      'Led and coached a remote team of 8 support agents on communication clarity, tone, and quality consistency.',
      'Reviewed customer interaction data to spot recurring issues and put targeted fixes in place.',
      'Cut average response time from 6 hours to 2 hours by restructuring the team workflow.',
      'Gave agents direct, practical feedback to sharpen their written and verbal communication.',
      'Worked across departments to untangle complex, multi-team customer issues.'
    ]
  },
  {
    id: 'bybit',
    period: 'Apr 2023 – Jul 2026',
    role: 'P2P Trader & Sales Support Specialist',
    company: 'Bybit',
    location: 'Singapore',
    type: 'Remote',
    bullets: [
      'Supported users through fintech transactions in real time, staying clear and calm under high pressure.',
      'Logged transaction patterns and recurring security concerns, feeding insights back into platform guidance materials.',
      'Kept interaction records and operational logs accurate, timely, and compliant.',
      'Broke down technical and financial processes into plain language for users of all backgrounds.'
    ]
  }
];

export const AWARDS: Award[] = [
  {
    id: 'award-afriment',
    title: 'Certificate of Recognition for Performance in Support Operations',
    issuer: 'Afriment Cohort 15',
    year: '2026',
    description: 'Awarded for exceptional commitment, proactive problem resolution, and outstanding execution throughout intensive customer support operational cohorts.',
    imageUrl: afrimentAwardScreenshot,
    fallbackImageUrl: 'https://lh3.googleusercontent.com/pw/AP1GczPyeqg57KTWIei95-9X7fqoN6sN04gNzYScBuq1YufT7TYmnDYOeHTslUUY3-ZXHQkRd1mwGimLgpPT6sVWfhHXNlHvy1inRGalT_2A4BWG7ZvDiFY=w1920',
    imageAlt: 'Afriment Cohort 15 Certificate of Recognition'
  },
  {
    id: 'award-devcareer',
    title: 'IT Support Scholarship Award',
    issuer: 'DevCareer',
    year: '2025',
    description: 'Selected from thousands of applicants for high-potential technology talents in West Africa, granting advanced technical training in IT infrastructure.',
    imageUrl: devcareerAwardScreenshot,
    fallbackImageUrl: 'https://lh3.googleusercontent.com/pw/AP1GczMZ4G5gnRLunJr9AUCf1tAzqfqvyNBzXpLpgtnUKHqmM2Eqfo5ZD-5VzDjcVredTL038b8Ram-ndIA6pjWGslVZuuc51Nrs5kuoGYEIY1qjSRb3WWw=w1920',
    imageAlt: 'DevCareer IT Support Scholarship Award Certificate'
  }
];

export const CERTIFICATIONS: Certification[] = [
  {
    id: 'cert-mercor-ai-agent',
    name: 'Introduction to Agent',
    issuer: 'MERCOR',
    year: 'October 20, 2026',
    badgeType: 'Professional Certification',
    imageUrl: mercorCertScreenshot,
    fallbackImageUrl: 'https://lh3.googleusercontent.com/pw/AP1GczMaxT1YO87lLw76enVfr1-dbo8SPXAVVSC8Kz-pM7sNh5VTKepQCD9GCKrGt5td33lDke8nclM9j3-PbT2j_eeQLwUOXNXz8tUH7_HGHNVZwXK79FQ=w1920',
    imageAlt: 'Mercor Introduction to Agent Professional Certification - AI Agent Evaluation & Workflow Automation'
  },
  {
    id: 'cert-google-it',
    name: 'Google IT Support Specialist',
    issuer: 'Google Career Certificates',
    badgeType: 'Professional Certificate',
    imageUrl: googleItCertScreenshot,
    fallbackImageUrl: 'https://lh3.googleusercontent.com/pw/AP1GczNjZVg6qkOo-XafxldyhUJF-lbabhYwVwV7MEuqNDYdQ8YKwrJtGcTHdr11dvagMpOx3VhfRTcgKI5R7LnhZqD6cWHfNuFYxBLfCnGUcGTN5gs8ihY=w1920',
    imageAlt: 'Google IT Support Specialist Credential'
  },
  {
    id: 'cert-microsoft-it',
    name: 'Microsoft IT Support Specialist',
    issuer: 'Microsoft',
    badgeType: 'Enterprise Certified',
    imageUrl: microsoftItCertScreenshot,
    fallbackImageUrl: 'https://lh3.googleusercontent.com/pw/AP1GczN4padQO_jh0DXrCWgahI0Mkh1-nmp5sraQwIK8dZl7vUjJG4M2GCe019cDvZuqdJ_QwJ0RsaCTNE6AmQtufqYriI3YzzoCD-KgI86byY6LZcjm8k0=w1920',
    imageAlt: 'Microsoft IT Support Specialist Certificate'
  },
  {
    id: 'cert-ibm-it',
    name: 'IBM IT Support Specialist',
    issuer: 'IBM',
    badgeType: 'Industry Credential',
    imageUrl: ibmItCertScreenshot,
    fallbackImageUrl: 'https://lh3.googleusercontent.com/pw/AP1GczML2db30a8VlvUsC27dJHLZUvPGozStJpfZRUHbVDiOAzgOuL-RfZxcU9sUCvhHgZdvjUb9nqr4kjq0JEIcy2hX6FJhykN2einIOOHmqLiTiPmxmx8=w1920',
    imageAlt: 'IBM IT Support Specialist Credential'
  },
  {
    id: 'cert-credly-pearson',
    name: 'Tech Support Credential',
    issuer: 'Credly by Pearson',
    badgeType: 'Verified Badge',
    imageUrl: credlyBadgeScreenshot,
    fallbackImageUrl: 'https://lh3.googleusercontent.com/pw/AP1GczNbpmZ7QJePLPZ-82kO3PP6AJVLoGIXgFLwqXLBmm7M3uj-bu9O7S1_h3TmbuN_5-DM6Wzu2Qi6aL1MPZNN_wvbLaAPN4sR8hxQ4rdk3zJec930QiE=w1920',
    imageAlt: 'Credly by Pearson Verified Tech Support Badge'
  },
  {
    id: 'cert-afriment-va-support',
    name: 'Virtual Assistant/Customer Support',
    issuer: 'Afriment',
    badgeType: 'Internship Certificate',
    imageUrl: afrimentInternshipCertScreenshot,
    fallbackImageUrl: 'https://lh3.googleusercontent.com/pw/AP1GczMU2jfyQZqM52dNfyft8gCTKYTzrotWtmElureTgmgkz0o6i75TfGJV_fmpQrWLX53Pkzrad7SPzVtTUtnCLrrfi9wGyB1I_X73OGA1_vxhNToUhbQ=w1920',
    imageAlt: 'Afriment Career Enhancement Internship Certificate in Virtual Assistant / Customer Support'
  },
  {
    id: 'cert-digitalwitch-va',
    name: 'General VA Certification',
    issuer: 'DigitalWitch',
    badgeType: 'Remote Operations',
    imageUrl: digitalwitchVaCertScreenshot,
    fallbackImageUrl: 'https://lh3.googleusercontent.com/pw/AP1GczNikV0HJUfDAR8RuuOSMJpg5QUYa0qnPzi0R9ijG_zgJCWPUaV5suAAwVSMDUGbSsny-umZ4SBAetopmNLEh0yXoyATYPzsoGiNoYK0H2tdN3v0Uxg=w1920',
    imageAlt: 'DigitalWitch General VA Certification'
  }
];

export const TOOLS_AND_SYSTEMS = [
  { name: 'Zendesk Suite', category: 'Ticketing & Helpdesk', icon: 'HelpCircle' },
  { name: 'Freshdesk', category: 'Ticketing & Helpdesk', icon: 'MessageSquare' },
  { name: 'HubSpot CRM', category: 'CRM & Sales Ops', icon: 'Layers' },
  { name: 'Amazon Web Services (AWS)', category: 'Cloud & IAM', icon: 'Cloud' },
  { name: 'Microsoft 365 CRM', category: 'Productivity & CRM', icon: 'FileSpreadsheet' },
  { name: 'LiveChat & Intercom', category: 'Real-time Chat', icon: 'Headphones' },
  { name: 'Google Workspace', category: 'Productivity & Admin', icon: 'Mail' },
  { name: 'Slack & Notion', category: 'Team Knowledge', icon: 'BookOpen' },
  { name: 'Zoom & Google Meet', category: 'Conferencing & Calls', icon: 'Video' },
  { name: 'Trello & Asana', category: 'Project Tracking', icon: 'CheckSquare' },
  { name: 'Ticketing & Escalation Systems', category: 'Operations', icon: 'GitPullRequest' },
  { name: 'Data Tracking & Reporting Dashboards', category: 'Analytics', icon: 'BarChart3' }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'daniel-ayeni',
    quote: "Fredrick is smart, proactive, and dependable. He learns quickly, takes initiative, and finds practical ways to get things done. He would be a valuable addition to any support team.",
    author: 'Daniel Ayeni',
    role: 'CEO & Founder',
    company: 'Afriment',
    avatar: '/src/assets/images/client_daniel_ayeni.jpg',
    rating: 5
  },
  {
    id: 'idema-faith',
    quote: "Fredrick transformed our Zendesk workflows and cut repetitive ticket volume by 30%. His composure during tense customer escalations and deep empathy make him an indispensable asset.",
    author: 'Idema Faith',
    role: 'Head of Customer Experience',
    company: 'Stayverse Technology',
    avatar: '/src/assets/images/client_idema_faith.jpg',
    rating: 5
  },
  {
    id: 'marcus-harry',
    quote: "Under Fredrick's guidance as Team Lead, our average response time plummeted from 6 hours to under 2 hours. He has an exceptional instinct for coaching agents and designing clean SOPs.",
    author: 'Marcus Harry',
    role: 'Operations Director',
    company: 'Melisports',
    avatar: '/src/assets/images/client_marcus_harry.jpg',
    rating: 5
  },
  {
    id: 'david-chen',
    quote: "Fredrick maintained a flawless 100% completion rate across high-volume fintech orders. His prompt communication and ability to explain complex steps in plain language gave our users total confidence.",
    author: 'David Chen',
    role: 'Senior P2P Lead',
    company: 'Bybit Operations',
    avatar: '/src/assets/images/client_david_chen_new.jpg',
    rating: 5
  }
];
