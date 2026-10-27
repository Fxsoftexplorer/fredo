import React from 'react';

/**
 * Hand-drawn warm yellow doodles matching the exact visual inspiration
 */

// Golden yellow sunburst / horizontal scribble line art behind circular avatar
export const SunburstBackground: React.FC<{ className?: string }> = ({ className = 'w-full h-full' }) => (
  <svg
    viewBox="0 0 320 320"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    {/* Background warm amber circle */}
    <circle cx="160" cy="160" r="148" fill="#FBBF24" />
    
    {/* Energetic horizontal scribble hatch lines */}
    <path
      d="M72 90C110 84 210 82 248 90"
      stroke="#F59E0B"
      strokeWidth="7"
      strokeLinecap="round"
    />
    <path
      d="M55 118C105 110 215 110 265 118"
      stroke="#F59E0B"
      strokeWidth="8"
      strokeLinecap="round"
    />
    <path
      d="M44 148C102 138 218 138 276 148"
      stroke="#F59E0B"
      strokeWidth="9"
      strokeLinecap="round"
    />
    <path
      d="M40 178C98 170 222 170 280 178"
      stroke="#F59E0B"
      strokeWidth="9"
      strokeLinecap="round"
    />
    <path
      d="M44 208C102 200 218 200 276 208"
      stroke="#F59E0B"
      strokeWidth="9"
      strokeLinecap="round"
    />
    <path
      d="M55 238C105 230 215 230 265 238"
      stroke="#F59E0B"
      strokeWidth="8"
      strokeLinecap="round"
    />
    <path
      d="M72 268C110 262 210 262 248 268"
      stroke="#F59E0B"
      strokeWidth="7"
      strokeLinecap="round"
    />
  </svg>
);

// Curved arrow pointing up-right doodle (from Hero screenshot)
export const ArrowDoodle: React.FC<{ className?: string }> = ({ className = 'w-16 h-16 text-amber-500' }) => (
  <svg
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    {/* Circle loop */}
    <ellipse cx="44" cy="58" rx="24" ry="20" stroke="currentColor" strokeWidth="4.5" strokeLinecap="round" />
    {/* Arrow shaft */}
    <path d="M52 46L82 22" stroke="currentColor" strokeWidth="4.5" strokeLinecap="round" />
    {/* Arrow head */}
    <path d="M68 18L84 22L80 38" stroke="currentColor" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

// Signature / ink flourish at bottom-left of avatar
export const SignatureScribble: React.FC<{ className?: string }> = ({ className = 'w-16 h-16 text-slate-800' }) => (
  <svg
    viewBox="0 0 80 80"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <path
      d="M20 62C22 42 26 28 28 22C30 38 35 52 42 42C48 32 50 18 52 28C54 42 36 68 62 60"
      stroke="currentColor"
      strokeWidth="3.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// 3 playful tick marks above section headers (Screenshot 2, 3, 4, 5)
export const SparkTicks: React.FC<{ className?: string }> = ({ className = 'w-8 h-8 text-amber-500' }) => (
  <svg
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <path d="M12 28L8 12" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" />
    <path d="M22 26L24 6" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" />
    <path d="M30 28L36 14" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" />
  </svg>
);

// Loopy arrow doodle pointing down-right to timeline (Screenshot 4)
export const LoopyArrowDoodle: React.FC<{ className?: string }> = ({ className = 'w-32 h-32 text-amber-500' }) => (
  <svg
    viewBox="0 0 140 140"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <path
      d="M30 25 C 20 80, 85 95, 80 55 C 75 25, 35 45, 55 90 C 70 120, 110 125, 120 125"
      stroke="currentColor"
      strokeWidth="4"
      strokeLinecap="round"
    />
    <path
      d="M105 112 L 122 125 L 115 138"
      stroke="currentColor"
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// Swirl spiral doodle (Screenshot 2)
export const SpiralDoodle: React.FC<{ className?: string }> = ({ className = 'w-10 h-10 text-amber-400' }) => (
  <svg
    viewBox="0 0 60 60"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <path
      d="M30 30 C33 26 38 28 37 33 C35 39 24 39 23 31 C21 21 37 17 43 25 C49 34 44 48 31 49 C16 50 11 32 17 21"
      stroke="currentColor"
      strokeWidth="3.5"
      strokeLinecap="round"
    />
  </svg>
);

// 4-point sparkle star (Screenshot 6)
export const StarSparkle: React.FC<{ className?: string }> = ({ className = 'w-10 h-10 text-amber-400' }) => (
  <svg
    viewBox="0 0 60 60"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <path
      d="M30 6 C30 20 38 28 54 30 C38 32 30 40 30 54 C30 40 22 32 6 30 C22 28 30 20 30 6Z"
      fill="currentColor"
    />
  </svg>
);

// Scalloped 12-point badge ("2+ Years Experience" in Screenshot 2)
export const ScallopedBadge: React.FC<{ text: string; subText?: string; className?: string }> = ({
  text,
  subText,
  className = 'w-24 h-24'
}) => (
  <div className={`relative flex items-center justify-center text-center ${className}`}>
    <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full drop-shadow-sm" fill="#F59E0B">
      <path d="M50 0 L58 11 L72 7 L76 20 L90 22 L89 36 L100 44 L93 56 L100 68 L89 74 L90 88 L76 90 L72 100 L58 96 L50 100 L42 96 L28 100 L24 90 L10 88 L11 74 L0 68 L7 56 L0 44 L11 36 L10 22 L24 20 L28 7 L42 11 Z" />
    </svg>
    <div className="relative z-10 text-white font-bold text-center leading-tight px-1">
      <div className="text-xs font-extrabold">{text}</div>
      {subText && <div className="text-[9px] uppercase tracking-wider font-semibold opacity-95">{subText}</div>}
    </div>
  </div>
);
