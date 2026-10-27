import React from 'react';

interface LogoProps {
  className?: string;
}

/**
 * 1. Intercom Official Logo (Chat bubble with speech bars + intercom wordmark)
 */
export const IntercomLogo: React.FC<LogoProps> = ({ className = 'h-7 w-auto' }) => (
  <svg
    viewBox="0 0 135 32"
    fill="currentColor"
    className={className}
    aria-label="Intercom"
    role="img"
  >
    {/* Intercom Symbol (Speech bubble with vertical soundbars) */}
    <g transform="translate(0, 1)">
      <rect x="0" y="0" width="30" height="30" rx="8" fill="currentColor" fillOpacity="0.2" />
      <rect x="0" y="0" width="30" height="30" rx="8" fill="none" stroke="currentColor" strokeWidth="2" />
      {/* 5 sound bars forming the smile */}
      <rect x="6.5" y="11" width="2.4" height="8" rx="1.2" fill="currentColor" />
      <rect x="10.5" y="8" width="2.4" height="14" rx="1.2" fill="currentColor" />
      <rect x="14.5" y="8" width="2.4" height="14" rx="1.2" fill="currentColor" />
      <rect x="18.5" y="8" width="2.4" height="14" rx="1.2" fill="currentColor" />
      <rect x="22.5" y="11" width="2.4" height="8" rx="1.2" fill="currentColor" />
      {/* Speech tail */}
      <path d="M7 30 L3 34 L11 30 Z" fill="currentColor" />
    </g>
    {/* Wordmark "intercom" */}
    <text
      x="38"
      y="22"
      fill="currentColor"
      fontFamily="system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif"
      fontSize="17.5"
      fontWeight="800"
      letterSpacing="-0.5px"
    >
      intercom
    </text>
  </svg>
);

/**
 * 2. Gorgias Official Logo (Distinctive lowercase g mark + gorgias wordmark)
 */
export const GorgiasLogo: React.FC<LogoProps> = ({ className = 'h-7 w-auto' }) => (
  <svg
    viewBox="0 0 120 32"
    fill="currentColor"
    className={className}
    aria-label="Gorgias"
    role="img"
  >
    {/* Gorgias g symbol mark */}
    <g transform="translate(1, 4)">
      <circle cx="12" cy="12" r="11" fill="none" stroke="currentColor" strokeWidth="2.5" />
      <circle cx="12" cy="12" r="5" fill="none" stroke="currentColor" strokeWidth="2.5" />
      <path d="M12 17 C16 17 19 20 19 24 C19 27 15 29 11 29" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    </g>
    {/* Wordmark "gorgias" */}
    <text
      x="33"
      y="22"
      fill="currentColor"
      fontFamily="system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif"
      fontSize="18"
      fontWeight="800"
      letterSpacing="-0.3px"
    >
      gorgias
    </text>
  </svg>
);

/**
 * 3. Google Official Wordmark
 */
export const GoogleLogo: React.FC<LogoProps> = ({ className = 'h-7 w-auto' }) => (
  <svg
    viewBox="0 0 95 32"
    fill="currentColor"
    className={className}
    aria-label="Google"
    role="img"
  >
    {/* Clean geometric Google logotype */}
    <g transform="translate(0, 4)">
      {/* G */}
      <path d="M12.5 12.2 H6.4 V9.8 H15.3 C15.4 10.4 15.5 11.1 15.5 12 C15.5 17.2 12.1 21 6.5 21 C2.9 21 0 18.1 0 14.5 C0 10.9 2.9 8 6.5 8 C8.2 8 9.8 8.7 11 9.8 L9.2 11.6 C8.5 10.9 7.6 10.5 6.5 10.5 C4.3 10.5 2.5 12.3 2.5 14.5 C2.5 16.7 4.3 18.5 6.5 18.5 C8.9 18.5 10.2 16.8 10.4 15.6 H6.4 V13.2 H12.5 V12.2 Z" />
      {/* o */}
      <path d="M22 14.5 C22 18.1 19.3 20.8 15.8 20.8 C12.3 20.8 9.6 18.1 9.6 14.5 C9.6 10.9 12.3 8.2 15.8 8.2 C19.3 8.2 22 10.9 22 14.5 Z M19.6 14.5 C19.6 12.2 17.9 10.6 15.8 10.6 C13.7 10.6 12 12.2 12 14.5 C12 16.8 13.7 18.4 15.8 18.4 C17.9 18.4 19.6 16.8 19.6 14.5 Z" />
      {/* o */}
      <path d="M35.2 14.5 C35.2 18.1 32.5 20.8 29 20.8 C25.5 20.8 22.8 18.1 22.8 14.5 C22.8 10.9 25.5 8.2 29 8.2 C32.5 8.2 35.2 10.9 35.2 14.5 Z M32.8 14.5 C32.8 12.2 31.1 10.6 29 10.6 C26.9 10.6 25.2 12.2 25.2 14.5 C25.2 16.8 26.9 18.4 29 18.4 C31.1 18.4 32.8 16.8 32.8 14.5 Z" />
      {/* g */}
      <path d="M48 8.6 V20 C48 24.6 45.3 26.6 42.1 26.6 C39.1 26.6 37.3 24.6 36.6 23 L38.7 22.1 C39.1 23.1 40.2 24.3 42.1 24.3 C44.1 24.3 45.4 23.1 45.4 20.7 V19.8 H45.3 C44.6 20.6 43.4 21.3 41.9 21.3 C38.7 21.3 35.7 18.5 35.7 14.8 C35.7 11.1 38.7 8.3 41.9 8.3 C43.4 8.3 44.6 9 45.3 9.8 H45.4 V8.6 H48 Z M45.6 14.8 C45.6 12.4 44.1 10.7 42.1 10.7 C40.1 10.7 38.3 12.4 38.3 14.8 C38.3 17.2 40.1 18.9 42.1 18.9 C44.1 18.9 45.6 17.2 45.6 14.8 Z" />
      {/* l */}
      <path d="M51.5 2.5 H54 V20.8 H51.5 V2.5 Z" />
      {/* e */}
      <path d="M64 16.8 L66 18.1 C65.3 19.1 63.8 20.8 61 20.8 C57.3 20.8 54.6 18 54.6 14.5 C54.6 10.8 57.3 8.2 60.7 8.2 C64.2 8.2 66 10.8 66 14.3 V15.1 H57.1 C57.2 17.2 58.7 18.5 60.5 18.5 C61.8 18.5 62.9 17.8 63.6 16.8 H64 Z M57.2 13.3 H63.4 C63.3 11.6 62.2 10.4 60.6 10.4 C58.9 10.4 57.6 11.6 57.2 13.3 Z" />
    </g>
  </svg>
);

/**
 * 4. Microsoft 365 Official Logo (4 square tiles + Microsoft 365)
 */
export const MicrosoftLogo: React.FC<LogoProps> = ({ className = 'h-7 w-auto' }) => (
  <svg
    viewBox="0 0 150 32"
    fill="currentColor"
    className={className}
    aria-label="Microsoft 365"
    role="img"
  >
    {/* Microsoft 4-square grid symbol */}
    <g transform="translate(0, 5)">
      <rect x="0" y="0" width="10" height="10" fill="currentColor" />
      <rect x="12" y="0" width="10" height="10" fill="currentColor" />
      <rect x="0" y="12" width="10" height="10" fill="currentColor" />
      <rect x="12" y="12" width="10" height="10" fill="currentColor" />
    </g>
    {/* Wordmark "Microsoft 365" */}
    <text
      x="30"
      y="21"
      fill="currentColor"
      fontFamily="system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif"
      fontSize="15"
      fontWeight="700"
      letterSpacing="-0.2px"
    >
      Microsoft 365
    </text>
  </svg>
);

/**
 * 5. Zendesk Official Logo (Distinctive geometric Z symbol + zendesk wordmark)
 */
export const ZendeskLogo: React.FC<LogoProps> = ({ className = 'h-7 w-auto' }) => (
  <svg
    viewBox="0 0 125 32"
    fill="currentColor"
    className={className}
    aria-label="Zendesk"
    role="img"
  >
    {/* Zendesk Geometric Shapes (Half circles & triangles forming Z) */}
    <g transform="translate(0, 5)">
      {/* Top row: half circle flat right + triangle pointing right */}
      <path d="M10 0 C4.5 0 0 4.5 0 10 H10 V0 Z" fill="currentColor" />
      <path d="M12 0 L22 10 H12 V0 Z" fill="currentColor" />
      {/* Bottom row: triangle pointing right + half circle */}
      <path d="M0 12 H10 L0 22 V12 Z" fill="currentColor" />
      <path d="M12 12 H22 C22 17.5 17.5 22 12 22 V12 Z" fill="currentColor" />
    </g>
    {/* Wordmark "zendesk" */}
    <text
      x="30"
      y="21.5"
      fill="currentColor"
      fontFamily="system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif"
      fontSize="16.5"
      fontWeight="700"
      letterSpacing="-0.3px"
    >
      zendesk
    </text>
  </svg>
);

/**
 * 6. Freshdesk Official Logo (Freshworks blooming petals + freshdesk)
 */
export const FreshdeskLogo: React.FC<LogoProps> = ({ className = 'h-7 w-auto' }) => (
  <svg
    viewBox="0 0 135 32"
    fill="currentColor"
    className={className}
    aria-label="Freshdesk"
    role="img"
  >
    {/* Freshworks 4 overlapping leaf petals mark */}
    <g transform="translate(0, 5)">
      <circle cx="11" cy="11" r="10" fill="none" stroke="currentColor" strokeWidth="2" strokeOpacity="0.4" />
      <path
        d="M11 2 C6 7 6 15 11 20 C16 15 16 7 11 2 Z"
        fill="currentColor"
      />
      <path
        d="M2 11 C7 6 15 6 20 11 C15 16 7 16 2 11 Z"
        fill="currentColor"
        fillOpacity="0.8"
      />
    </g>
    {/* Wordmark "freshdesk" */}
    <text
      x="30"
      y="22"
      fill="currentColor"
      fontFamily="system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif"
      fontSize="17"
      fontWeight="800"
      letterSpacing="-0.4px"
    >
      freshdesk
    </text>
  </svg>
);

/**
 * 7. HubSpot Official Logo (Hub + Sprocket o + t)
 */
export const HubSpotLogo: React.FC<LogoProps> = ({ className = 'h-7 w-auto' }) => (
  <svg
    viewBox="0 0 115 32"
    fill="currentColor"
    className={className}
    aria-label="HubSpot"
    role="img"
  >
    {/* "Hub" */}
    <text
      x="0"
      y="22"
      fill="currentColor"
      fontFamily="system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif"
      fontSize="17.5"
      fontWeight="800"
      letterSpacing="-0.3px"
    >
      HubSp
    </text>

    {/* Sprocket 'o' */}
    <g transform="translate(56, 5)">
      {/* Center circle */}
      <circle cx="9" cy="11" r="5" fill="none" stroke="currentColor" strokeWidth="2.5" />
      {/* Top spoke + node */}
      <line x1="9" y1="6" x2="9" y2="1.5" stroke="currentColor" strokeWidth="2" />
      <circle cx="9" cy="1.5" r="2.5" fill="currentColor" />
      {/* Right spoke + node */}
      <line x1="13.5" y1="13" x2="17.5" y2="15" stroke="currentColor" strokeWidth="2" />
      <circle cx="18" cy="15.5" r="2" fill="currentColor" />
      {/* Left spoke */}
      <line x1="4.5" y1="13" x2="1" y2="15" stroke="currentColor" strokeWidth="2" />
    </g>

    {/* "t" */}
    <text
      x="78"
      y="22"
      fill="currentColor"
      fontFamily="system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif"
      fontSize="17.5"
      fontWeight="800"
      letterSpacing="-0.3px"
    >
      t
    </text>
  </svg>
);

/**
 * 8. AWS Official Logo (aws + iconic smile arrow)
 */
export const AwsLogo: React.FC<LogoProps> = ({ className = 'h-7 w-auto' }) => (
  <svg
    viewBox="0 0 85 34"
    fill="currentColor"
    className={className}
    aria-label="Amazon Web Services"
    role="img"
  >
    {/* "aws" text */}
    <g transform="translate(4, 2)">
      <text
        x="0"
        y="19"
        fill="currentColor"
        fontFamily="system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif"
        fontSize="19"
        fontWeight="900"
        letterSpacing="-0.8px"
      >
        aws
      </text>

      {/* Iconic Amazon / AWS smile arrow curving from under 'a' to 's' */}
      <path
        d="M3 24 C14 29 27 28 36 21"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      {/* Arrowhead */}
      <polygon
        points="37,17 38.5,23.5 32,22"
        fill="currentColor"
      />
    </g>
  </svg>
);

export interface BrandItem {
  id: string;
  name: string;
  component: React.FC<LogoProps>;
}

export const BRAND_LOGOS_LIST: BrandItem[] = [
  { id: 'intercom', name: 'Intercom', component: IntercomLogo },
  { id: 'gorgias', name: 'Gorgias', component: GorgiasLogo },
  { id: 'google', name: 'Google Workspace', component: GoogleLogo },
  { id: 'microsoft', name: 'Microsoft 365', component: MicrosoftLogo },
  { id: 'zendesk', name: 'Zendesk', component: ZendeskLogo },
  { id: 'freshdesk', name: 'Freshdesk', component: FreshdeskLogo },
  { id: 'hubspot', name: 'HubSpot', component: HubSpotLogo },
  { id: 'aws', name: 'AWS', component: AwsLogo }
];
