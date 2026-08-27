const PALETTES = {
  1: { bg: '#F1E8D6', a: '#1F9D5A', b: '#E2622F' },
  2: { bg: '#D9F2C4', a: '#146B3D', b: '#1C2A22' },
  3: { bg: '#10241A', a: '#4CC080', b: '#E2622F' },
  4: { bg: '#FAF6EF', a: '#E2622F', b: '#1F9D5A' },
  5: { bg: '#1B3327', a: '#D9F2C4', b: '#4CC080' },
  6: { bg: '#F1E8D6', a: '#146B3D', b: '#1F9D5A' },
} as const;

export function CoverArt({ variant, eyebrow }: { variant: 1 | 2 | 3 | 4 | 5 | 6; eyebrow: string }) {
  const p = PALETTES[variant];
  return (
    <svg viewBox="0 0 800 450" className="w-full h-full" role="img" aria-label={eyebrow}>
      <rect width="800" height="450" fill={p.bg} />
      <g opacity="0.5">
        <circle cx="670" cy="90" r="120" fill={p.a} opacity="0.12" />
        <circle cx="120" cy="380" r="150" fill={p.b} opacity="0.1" />
      </g>
      {/* Chat bubble motif, consistent with the site's bubble-corner signature */}
      <g transform="translate(120,150)">
        <path d="M0 24 Q0 0 24 0 H236 Q260 0 260 24 V120 Q260 144 236 144 H48 L8 176 V144 H24 Q0 144 0 120 Z" fill={p.a} />
        <circle cx="60" cy="70" r="10" fill={p.bg} />
        <circle cx="110" cy="70" r="10" fill={p.bg} />
        <circle cx="160" cy="70" r="10" fill={p.bg} />
      </g>
      <g transform="translate(430,230)">
        <path d="M236 24 Q236 0 212 0 H24 Q0 0 0 24 V90 Q0 114 24 114 H188 L228 146 V114 H212 Q236 114 236 90 Z" fill={p.b} />
        <rect x="30" y="42" width="150" height="10" rx="5" fill={p.bg} />
        <rect x="30" y="62" width="100" height="10" rx="5" fill={p.bg} />
      </g>
      <text x="400" y="400" textAnchor="middle" fontSize="22" fontFamily="Georgia, serif" fill={p.a} opacity="0.55">
        Wabot365
      </text>
    </svg>
  );
}
