"use client";

import { useEffect, useRef, useState } from "react";
import { IMPACT } from "../lib/site-data";
import { IMPACT_ICONS } from "./icons";

const DURATION_MS = 1400;

/** Counts up once, when the band first scrolls into view. */
function useCountUp(target: number, start: boolean) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!start) return;

    // A 1ms duration lands on the final value on the first frame, so reduced
    // motion skips the animation without a separate synchronous setState.
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const duration = reduced ? 1 : DURATION_MS;

    let frame = 0;
    const began = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - began) / duration, 1);
      // Ease-out cubic, so the number settles rather than stopping dead.
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(target * eased);
      if (progress < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [target, start]);

  return value;
}

function ImpactTile({
  value,
  suffix,
  label,
  icon,
  visible,
}: {
  value: number;
  suffix: string;
  label: string;
  icon: keyof typeof IMPACT_ICONS;
  visible: boolean;
}) {
  const current = useCountUp(value, visible);
  const Icon = IMPACT_ICONS[icon];
  const decimals = Number.isInteger(value) ? 0 : 1;

  return (
    <div className="flex items-center gap-4 px-2">
      <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-white/10 text-accent-400 ring-1 ring-white/15">
        <Icon className="size-6" />
      </span>
      <span>
        <span className="block text-2xl font-bold tracking-tight text-white tabular-nums sm:text-3xl">
          {current.toFixed(decimals)}
          {suffix}
        </span>
        <span className="block text-sm text-brand-200">{label}</span>
      </span>
    </div>
  );
}

export function ImpactBand() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.35 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      aria-labelledby="impact-heading"
      className="bg-brand-800 py-14"
    >
      <div className="mx-auto max-w-7xl px-6">
        <h2
          id="impact-heading"
          className="text-center text-sm font-semibold uppercase tracking-[0.2em] text-brand-300"
        >
          Our Impact
        </h2>
        <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {IMPACT.map((item) => (
            <ImpactTile
              key={item.label}
              value={item.value}
              suffix={item.suffix}
              label={item.label}
              icon={item.icon}
              visible={visible}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
