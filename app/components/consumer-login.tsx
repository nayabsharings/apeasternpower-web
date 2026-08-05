"use client";

import Image from "next/image";
import { useId, useRef, useState } from "react";
import { LOGIN_TABS } from "../lib/site-data";
import { ArrowRightIcon } from "./icons";

/**
 * The live site opens a modal with LT / HT / Employee tabs. Surfacing it as a
 * card in the hero removes a click and keeps the primary task in view.
 *
 * This is presentation only — there is no auth backend wired up, so the form
 * does not submit anywhere.
 */
export function ConsumerLogin() {
  const baseId = useId();
  const [active, setActive] = useState<string>(LOGIN_TABS[0].id);
  const tabRefs = useRef<Record<string, HTMLButtonElement | null>>({});
  const tab = LOGIN_TABS.find((t) => t.id === active) ?? LOGIN_TABS[0];

  const tabId = (id: string) => `${baseId}-tab-${id}`;
  const panelId = (id: string) => `${baseId}-panel-${id}`;

  /*
   * A real tablist is expected to move selection with the arrow keys, with only
   * the active tab in the tab order (roving tabindex). Without this, the widget
   * announces itself as tabs but cannot be driven like tabs.
   */
  function onKeyDown(event: React.KeyboardEvent) {
    const keys = ["ArrowRight", "ArrowLeft", "Home", "End"];
    if (!keys.includes(event.key)) return;
    event.preventDefault();

    const index = LOGIN_TABS.findIndex((t) => t.id === active);
    let next = index;
    if (event.key === "ArrowRight") next = (index + 1) % LOGIN_TABS.length;
    if (event.key === "ArrowLeft")
      next = (index - 1 + LOGIN_TABS.length) % LOGIN_TABS.length;
    if (event.key === "Home") next = 0;
    if (event.key === "End") next = LOGIN_TABS.length - 1;

    const nextId = LOGIN_TABS[next].id;
    setActive(nextId);
    tabRefs.current[nextId]?.focus();
  }

  return (
    <div
      id="login"
      className="w-full max-w-md rounded-2xl border border-white/15 bg-white p-1.5 shadow-2xl shadow-brand-950/40"
    >
      <div
        role="tablist"
        aria-label="Login type"
        onKeyDown={onKeyDown}
        className="flex gap-1 p-1"
      >
        {LOGIN_TABS.map((item) => {
          const isActive = item.id === active;
          return (
            <button
              key={item.id}
              ref={(node) => {
                tabRefs.current[item.id] = node;
              }}
              type="button"
              role="tab"
              id={tabId(item.id)}
              aria-selected={isActive}
              aria-controls={panelId(item.id)}
              tabIndex={isActive ? 0 : -1}
              onClick={() => setActive(item.id)}
              className={`flex flex-1 flex-col items-center gap-1.5 rounded-xl px-2 py-3 text-xs font-semibold transition-colors ${
                isActive
                  ? "bg-brand-600 text-white"
                  : "text-stone-500 hover:bg-brand-50 hover:text-brand-700"
              }`}
            >
              <Image
                src={item.icon}
                alt=""
                width={28}
                height={28}
                className={`size-7 object-contain ${
                  isActive ? "brightness-0 invert" : ""
                }`}
              />
              {item.label}
            </button>
          );
        })}
      </div>

      <form
        role="tabpanel"
        id={panelId(tab.id)}
        aria-labelledby={tabId(tab.id)}
        className="space-y-3 px-4 pb-4 pt-2"
        onSubmit={(event) => event.preventDefault()}
      >
        <div>
          <label
            htmlFor={`${baseId}-identifier`}
            className="mb-1 block text-xs font-medium text-stone-600"
          >
            {tab.field}
          </label>
          <input
            id={`${baseId}-identifier`}
            name="identifier"
            type="text"
            inputMode="numeric"
            placeholder={tab.placeholder}
            className="w-full rounded-lg border border-stone-300 px-3 py-2.5 text-sm text-stone-800 placeholder:text-stone-400 focus:border-brand-500 focus:ring-2 focus:ring-brand-100"
          />
        </div>
        <div>
          <label
            htmlFor={`${baseId}-password`}
            className="mb-1 block text-xs font-medium text-stone-600"
          >
            Password
          </label>
          <input
            id={`${baseId}-password`}
            name="password"
            type="password"
            placeholder="Enter password"
            className="w-full rounded-lg border border-stone-300 px-3 py-2.5 text-sm text-stone-800 placeholder:text-stone-400 focus:border-brand-500 focus:ring-2 focus:ring-brand-100"
          />
        </div>
        <button
          type="submit"
          className="flex w-full items-center justify-center gap-2 rounded-lg bg-brand-600 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-700"
        >
          Sign in
          <ArrowRightIcon className="size-4" />
        </button>
        <div className="flex items-center justify-between text-xs">
          <a href="#" className="text-stone-500 hover:text-brand-700">
            Forgot password?
          </a>
          <a href="#" className="font-semibold text-brand-600 hover:text-brand-700">
            New user? Register
          </a>
        </div>
      </form>

      <p className="rounded-xl bg-stone-50 px-4 py-2.5 text-center text-[11px] text-stone-500">
        Quick bill payment needs no login —{" "}
        <a href="#pay" className="font-semibold text-brand-600">
          pay with your service number
        </a>
        .
      </p>
    </div>
  );
}
