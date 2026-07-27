"use client";

import Image from "next/image";
import { useState } from "react";
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
  const [active, setActive] = useState<string>(LOGIN_TABS[0].id);
  const tab = LOGIN_TABS.find((t) => t.id === active) ?? LOGIN_TABS[0];

  return (
    <div
      id="login"
      className="w-full max-w-md rounded-2xl border border-white/15 bg-white p-1.5 shadow-2xl shadow-brand-950/40"
    >
      <div role="tablist" aria-label="Login type" className="flex gap-1 p-1">
        {LOGIN_TABS.map((item) => {
          const isActive = item.id === active;
          return (
            <button
              key={item.id}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => setActive(item.id)}
              className={`flex flex-1 flex-col items-center gap-1.5 rounded-xl px-2 py-3 text-xs font-semibold transition-colors ${
                isActive
                  ? "bg-brand-600 text-white"
                  : "text-slate-500 hover:bg-brand-50 hover:text-brand-700"
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
        className="space-y-3 px-4 pb-4 pt-2"
        onSubmit={(event) => event.preventDefault()}
      >
        <div>
          <label
            htmlFor="login-id"
            className="mb-1 block text-xs font-medium text-slate-600"
          >
            {tab.field}
          </label>
          <input
            id="login-id"
            name="identifier"
            type="text"
            inputMode="numeric"
            placeholder={tab.placeholder}
            className="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm text-slate-800 placeholder:text-slate-400 focus:border-brand-500 focus:ring-2 focus:ring-brand-100"
          />
        </div>
        <div>
          <label
            htmlFor="login-password"
            className="mb-1 block text-xs font-medium text-slate-600"
          >
            Password
          </label>
          <input
            id="login-password"
            name="password"
            type="password"
            placeholder="Enter password"
            className="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm text-slate-800 placeholder:text-slate-400 focus:border-brand-500 focus:ring-2 focus:ring-brand-100"
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
          <a href="#" className="text-slate-500 hover:text-brand-700">
            Forgot password?
          </a>
          <a href="#" className="font-semibold text-brand-600 hover:text-brand-700">
            New user? Register
          </a>
        </div>
      </form>

      <p className="rounded-xl bg-slate-50 px-4 py-2.5 text-center text-[11px] text-slate-500">
        Quick bill payment needs no login —{" "}
        <a href="#pay" className="font-semibold text-brand-600">
          pay with your service number
        </a>
        .
      </p>
    </div>
  );
}
