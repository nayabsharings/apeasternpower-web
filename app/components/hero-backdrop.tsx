/**
 * Animated hero backdrop: a line of transmission pylons drifting slowly to the
 * left, with pulses of energy travelling along the conductors.
 *
 * Drawn rather than photographed on purpose — every image on the source site is
 * a 1600x400 campaign banner with text and logos baked in, which reads as blur
 * artefacts behind a hero. This is a few KB of inline SVG, needs no JS, and
 * stops entirely under prefers-reduced-motion.
 *
 * The tile is 600px wide and the conductors meet its left and right edges at
 * identical heights, so repeated tiles join seamlessly and the -600px drift
 * loops without a visible seam.
 */

const TILE_W = 600;
const TILE_H = 420;
const TILES = 6; // 3600px of artwork — covers ultra-wide viewports plus one tile

/** Conductor spans: sag low at the tile edges (mid-span), rise to the crossarms. */
const CONDUCTORS = [
  { edge: 175, tower: 120, delay: "0s" },
  { edge: 215, tower: 160, delay: "1.6s" },
  { edge: 255, tower: 200, delay: "3.2s" },
];

const conductorPath = (edge: number, tower: number) =>
  `M0,${edge} C110,${edge + 4} 205,${tower + 26} 300,${tower} C395,${tower + 26} 490,${edge + 4} 600,${edge}`;

function PylonTile() {
  return (
    <svg
      width={TILE_W}
      height={TILE_H}
      viewBox={`0 0 ${TILE_W} ${TILE_H}`}
      fill="none"
      className="block shrink-0"
    >
      {/* Conductors */}
      {CONDUCTORS.map((line) => (
        <path
          key={`wire-${line.edge}`}
          d={conductorPath(line.edge, line.tower)}
          stroke="var(--color-brand-200)"
          strokeOpacity="0.22"
          strokeWidth="1.5"
        />
      ))}

      {/* Energy pulses riding the conductors */}
      {CONDUCTORS.map((line) => (
        <path
          key={`pulse-${line.edge}`}
          d={conductorPath(line.edge, line.tower)}
          stroke="var(--color-accent-400)"
          strokeOpacity="0.85"
          strokeWidth="2.5"
          strokeLinecap="round"
          className="animate-surge"
          style={{ animationDelay: line.delay }}
        />
      ))}

      {/* Lattice pylon */}
      <g
        stroke="var(--color-brand-200)"
        strokeOpacity="0.3"
        strokeWidth="1.6"
        strokeLinecap="round"
      >
        {/* Legs, splaying out to the ground */}
        <path d="M292 210 L268 420 M308 210 L332 420" />
        {/* Body */}
        <path d="M292 210 L294 104 M308 210 L306 104" />
        {/* Leg cross-bracing */}
        <path d="M292 240 L326 300 M308 240 L274 300 M280 300 L320 360 M320 300 L280 360" />
        {/* Body cross-bracing */}
        <path d="M293 120 L307 160 M307 120 L293 160 M293 160 L307 205 M307 160 L293 205" />
        {/* Crossarms */}
        <path d="M250 120 L350 120 M262 160 L338 160 M268 200 L332 200" />
        {/* Insulator drops */}
        <path d="M250 120 L250 128 M350 120 L350 128 M262 160 L262 168 M338 160 L338 168 M268 200 L268 208 M332 200 L332 208" />
        {/* Peak */}
        <path d="M294 104 L300 88 L306 104" />
      </g>

      {/* Waist band, to read as a real lattice rather than an outline */}
      <path
        d="M286 210 L314 210"
        stroke="var(--color-brand-200)"
        strokeOpacity="0.3"
        strokeWidth="1.6"
      />
    </svg>
  );
}

export function HeroBackdrop() {
  return (
    <div aria-hidden="true" className="absolute inset-0 overflow-hidden">
      <div className="motion-layer absolute bottom-0 left-0 flex w-max animate-drift items-end">
        {Array.from({ length: TILES }, (_, i) => (
          <PylonTile key={i} />
        ))}
      </div>
    </div>
  );
}
