"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { BANNERS } from "../lib/site-data";
import { ArrowRightIcon } from "./icons";

const ROTATE_MS = 6000;

/** Campaign banner rotator, replacing the jQuery iView slider on the live site. */
export function BannerCarousel() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const go = useCallback((next: number) => {
    setIndex(((next % BANNERS.length) + BANNERS.length) % BANNERS.length);
  }, []);

  useEffect(() => {
    if (paused) return;
    const reduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;

    const timer = window.setInterval(
      () => setIndex((i) => (i + 1) % BANNERS.length),
      ROTATE_MS,
    );
    return () => window.clearInterval(timer);
  }, [paused]);

  const banner = BANNERS[index];

  return (
    <div
      className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
    >
      <div
        className="relative aspect-[1600/400] w-full bg-slate-100"
        aria-live="polite"
      >
        {BANNERS.map((item, i) => (
          <Image
            key={item.src}
            src={item.src}
            alt={item.alt}
            fill
            sizes="(max-width: 1024px) 100vw, 1024px"
            priority={i === 0}
            className={`object-cover transition-opacity duration-700 ${
              i === index ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </div>

      <div className="flex flex-col gap-3 border-t border-slate-100 px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h3 className="text-base font-semibold text-brand-800">
            {banner.title}
          </h3>
          <p className="mt-0.5 text-sm text-slate-600">{banner.body}</p>
          {banner.cta && (
            <a
              href={banner.cta.href}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1.5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600 hover:text-brand-700"
            >
              {banner.cta.label}
              <ArrowRightIcon className="size-4" />
            </a>
          )}
        </div>

        <div className="flex shrink-0 items-center gap-1.5">
          {BANNERS.map((item, i) => (
            <button
              key={item.src}
              type="button"
              onClick={() => go(i)}
              aria-label={`Show banner ${i + 1}: ${item.title}`}
              aria-current={i === index}
              className={`h-2 rounded-full transition-all ${
                i === index
                  ? "w-6 bg-brand-600"
                  : "w-2 bg-slate-300 hover:bg-slate-400"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
