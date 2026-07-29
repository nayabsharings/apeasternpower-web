"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { NAV, ORG, SOCIALS } from "../lib/site-data";
import {
  ChevronDownIcon,
  CloseIcon,
  ExternalIcon,
  MenuIcon,
  PhoneIcon,
  SOCIAL_ICONS,
  WhatsAppIcon,
} from "./icons";

export function SiteHeader() {
  const [openGroup, setOpenGroup] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileGroup, setMobileGroup] = useState<string | null>(null);
  const navRef = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const drawerCloseRef = useRef<HTMLButtonElement>(null);

  // Close the desktop dropdown on outside click or Escape.
  useEffect(() => {
    function onPointerDown(event: MouseEvent) {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setOpenGroup(null);
      }
    }
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpenGroup(null);
        setMobileOpen(false);
      }
    }
    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  // Prevent background scroll while the mobile drawer is open.
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  /*
   * Move focus into the drawer when it opens and hand it back to the trigger
   * when it closes — otherwise a keyboard user tabs into the page behind the
   * overlay, or loses their place entirely on close.
   */
  useEffect(() => {
    if (mobileOpen) {
      drawerCloseRef.current?.focus();
    } else if (document.activeElement === document.body) {
      menuButtonRef.current?.focus();
    }
  }, [mobileOpen]);

  /*
   * Tabbing past the last item of an open dropdown should close it. Checking on
   * the next tick lets the browser settle focus on its new target first.
   */
  function onNavBlur(event: React.FocusEvent<HTMLElement>) {
    if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
      setOpenGroup(null);
    }
  }

  return (
    <header className="sticky top-0 z-50">
      {/* Utility strip: statutory identifiers and contact channels */}
      <div className="hidden bg-brand-900 text-brand-100 lg:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-2 text-xs">
          <p className="flex items-center gap-4">
            <span>
              CIN: <span className="font-mono text-white">{ORG.cin}</span>
            </span>
            <span aria-hidden="true" className="text-brand-500">
              |
            </span>
            <span>
              GSTIN: <span className="font-mono text-white">{ORG.gstin}</span>
            </span>
          </p>
          <div className="flex items-center gap-5">
            <a
              href={`tel:${ORG.helpline}`}
              className="flex items-center gap-1.5 font-medium text-white transition-colors hover:text-accent-400"
            >
              <PhoneIcon className="size-3.5" />
              Helpline {ORG.helpline}
            </a>
            <a
              href={ORG.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 transition-colors hover:text-accent-400"
            >
              <WhatsAppIcon className="size-3.5" />
              {ORG.whatsappNumber}
            </a>
            <span aria-hidden="true" className="text-brand-500">
              |
            </span>
            <ul className="flex items-center gap-3">
              {SOCIALS.map((social) => {
                const Icon = SOCIAL_ICONS[social.icon];
                return (
                  <li key={social.label}>
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="block transition-colors hover:text-accent-400"
                    >
                      <Icon className="size-4" />
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>

      {/* Masthead + primary navigation */}
      <div
        ref={navRef}
        className="border-b border-slate-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/85"
      >
        <div className="mx-auto flex max-w-7xl items-center gap-4 px-4 py-3 sm:px-6">
          <Link href="/" className="flex shrink-0 items-center gap-3">
            <Image
              src="/brand/logo.png"
              alt=""
              width={44}
              height={55}
              priority
              className="h-9 w-auto"
            />
            <span className="leading-tight">
              <span className="block text-lg font-bold tracking-tight text-brand-800">
                {ORG.shortName}
              </span>
              <span className="hidden max-w-[22rem] text-[11px] text-slate-500 sm:block">
                {ORG.name}
              </span>
            </span>
          </Link>

          <nav aria-label="Primary" className="ml-auto hidden xl:block">
            <ul className="flex items-center gap-0.5">
              {NAV.map((group) => {
                const isOpen = openGroup === group.label;

                if (!group.items) {
                  return (
                    <li key={group.label}>
                      <Link
                        href={group.href ?? "#"}
                        className="rounded-md px-3 py-2 text-sm font-medium text-slate-700 transition-colors hover:bg-brand-50 hover:text-brand-700"
                      >
                        {group.label}
                      </Link>
                    </li>
                  );
                }

                return (
                  <li key={group.label} className="relative" onBlur={onNavBlur}>
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      aria-haspopup="true"
                      onClick={() => setOpenGroup(isOpen ? null : group.label)}
                      className={`flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                        isOpen
                          ? "bg-brand-50 text-brand-700"
                          : "text-slate-700 hover:bg-brand-50 hover:text-brand-700"
                      }`}
                    >
                      {group.label}
                      <ChevronDownIcon
                        className={`size-3.5 transition-transform ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {isOpen && (
                      <div className="absolute left-0 top-full z-50 mt-1 w-72 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-xl shadow-brand-900/10">
                        <ul className="py-1.5">
                          {group.items.map((item) => (
                            <li key={item.label}>
                              <a
                                href={item.href}
                                target={item.external ? "_blank" : undefined}
                                rel={
                                  item.external
                                    ? "noopener noreferrer"
                                    : undefined
                                }
                                onClick={() => setOpenGroup(null)}
                                className="flex items-center justify-between gap-2 px-4 py-2 text-sm text-slate-600 transition-colors hover:bg-brand-50 hover:text-brand-700"
                              >
                                {item.label}
                                {item.external && (
                                  <ExternalIcon className="size-3.5 shrink-0 opacity-50" />
                                )}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="ml-auto flex items-center gap-2 xl:ml-3">
            <a
              href="#pay"
              className="hidden rounded-full bg-accent-500 px-4 py-2 text-sm font-semibold text-brand-950 shadow-sm transition-colors hover:bg-accent-400 sm:block"
            >
              Pay Bill
            </a>
            <a
              href="#login"
              className="hidden rounded-full border border-brand-200 px-4 py-2 text-sm font-semibold text-brand-700 transition-colors hover:border-brand-300 hover:bg-brand-50 md:block"
            >
              Login
            </a>
            <button
              ref={menuButtonRef}
              type="button"
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
              aria-expanded={mobileOpen}
              className="rounded-md p-2 text-brand-800 transition-colors hover:bg-brand-50 xl:hidden"
            >
              <MenuIcon className="size-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 xl:hidden">
          <button
            type="button"
            tabIndex={-1}
            aria-hidden="true"
            onClick={() => setMobileOpen(false)}
            className="absolute inset-0 bg-brand-950/60"
          />
          <div
            role="dialog"
            aria-modal="true"
            aria-label="Site menu"
            className="absolute inset-y-0 right-0 flex w-full max-w-sm flex-col bg-white shadow-2xl"
          >
            <div className="flex items-center justify-between border-b border-slate-200 px-5 py-4">
              <span className="flex items-center gap-2 font-bold text-brand-800">
                <Image
                  src="/brand/logo.png"
                  alt=""
                  width={28}
                  height={35}
                  className="h-7 w-auto"
                />
                {ORG.shortName}
              </span>
              <button
                ref={drawerCloseRef}
                type="button"
                onClick={() => setMobileOpen(false)}
                aria-label="Close menu"
                className="rounded-md p-2 text-slate-500 hover:bg-slate-100"
              >
                <CloseIcon className="size-5" />
              </button>
            </div>

            <nav aria-label="Mobile" className="flex-1 overflow-y-auto px-3 py-3">
              <ul className="space-y-0.5">
                {NAV.map((group) => {
                  if (!group.items) {
                    return (
                      <li key={group.label}>
                        <Link
                          href={group.href ?? "#"}
                          onClick={() => setMobileOpen(false)}
                          className="block rounded-lg px-3 py-2.5 text-sm font-semibold text-slate-800 hover:bg-brand-50"
                        >
                          {group.label}
                        </Link>
                      </li>
                    );
                  }
                  const isOpen = mobileGroup === group.label;
                  return (
                    <li key={group.label}>
                      <button
                        type="button"
                        aria-expanded={isOpen}
                        onClick={() => setMobileGroup(isOpen ? null : group.label)}
                        className="flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-sm font-semibold text-slate-800 hover:bg-brand-50"
                      >
                        {group.label}
                        <ChevronDownIcon
                          className={`size-4 text-slate-400 transition-transform ${
                            isOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      {isOpen && (
                        <ul className="mb-1 ml-3 border-l border-slate-200 pl-3">
                          {group.items.map((item) => (
                            <li key={item.label}>
                              <a
                                href={item.href}
                                target={item.external ? "_blank" : undefined}
                                rel={
                                  item.external
                                    ? "noopener noreferrer"
                                    : undefined
                                }
                                onClick={() => setMobileOpen(false)}
                                className="block py-2 text-sm text-slate-600 hover:text-brand-700"
                              >
                                {item.label}
                              </a>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  );
                })}
              </ul>
            </nav>

            <div className="space-y-2 border-t border-slate-200 px-5 py-4">
              <a
                href="#pay"
                onClick={() => setMobileOpen(false)}
                className="block rounded-full bg-accent-500 px-4 py-2.5 text-center text-sm font-semibold text-brand-950"
              >
                Pay Bill Now
              </a>
              <a
                href={`tel:${ORG.helpline}`}
                className="flex items-center justify-center gap-2 rounded-full border border-brand-200 px-4 py-2.5 text-sm font-semibold text-brand-700"
              >
                <PhoneIcon className="size-4" />
                Helpline {ORG.helpline}
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
