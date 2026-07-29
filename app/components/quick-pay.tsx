"use client";

import { useId, useState } from "react";
import { ArrowRightIcon, BoltIcon, RupeeIcon, ShieldIcon } from "./icons";

/**
 * Paying a bill is the single most common reason a consumer opens this site, so
 * it gets a dedicated section high on the page rather than a link buried in a
 * menu. The identifier field accepts service / mobile / Aadhaar numbers, which
 * is what the live quick-pay form takes.
 *
 * Validation is client-side only — there is no payment backend wired up, so
 * submitting explains that rather than pretending to succeed.
 */
export function QuickPay() {
  const inputId = useId();
  const errorId = useId();
  const noteId = useId();

  const [value, setValue] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  function onSubmit(event: React.FormEvent) {
    event.preventDefault();
    setSubmitted(false);

    const trimmed = value.trim();
    if (!trimmed) {
      setError("Enter your service, mobile or Aadhaar number.");
      return;
    }
    if (!/^\d{6,14}$/.test(trimmed)) {
      setError("Use digits only — between 6 and 14 of them.");
      return;
    }

    setError(null);
    setSubmitted(true);
  }

  return (
    <section id="pay" className="border-b border-slate-200 bg-brand-50/60">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-14 lg:grid-cols-[1fr_1.1fr] lg:py-16">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-500">
            Quick Pay
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-brand-900 sm:text-4xl">
            Pay your electricity bill
          </h2>
          <p className="mt-3 text-base leading-relaxed text-slate-600">
            No login needed. Enter the number printed on your bill to view the
            amount due and pay it online.
          </p>

          <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate-600">
            <li className="flex items-center gap-2">
              <ShieldIcon className="size-4 text-accent-700" />
              Secure payment gateway
            </li>
            <li className="flex items-center gap-2">
              <BoltIcon className="size-4 text-accent-700" />
              Instant receipt
            </li>
          </ul>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <form onSubmit={onSubmit} noValidate>
            <label
              htmlFor={inputId}
              className="block text-sm font-semibold text-brand-900"
            >
              Service No. / Mobile No. / Aadhaar No.
            </label>
            <p id={noteId} className="mt-1 text-xs text-slate-500">
              Your service number appears at the top of your printed bill.
            </p>

            <div className="mt-3 flex flex-col gap-3 sm:flex-row">
              <input
                id={inputId}
                name="identifier"
                type="text"
                inputMode="numeric"
                autoComplete="off"
                value={value}
                onChange={(event) => {
                  setValue(event.target.value);
                  if (error) setError(null);
                }}
                aria-invalid={error ? true : undefined}
                aria-describedby={error ? `${noteId} ${errorId}` : noteId}
                placeholder="e.g. 1234567890"
                className={`w-full rounded-lg border px-4 py-3 text-sm text-slate-800 placeholder:text-slate-400 focus:ring-2 ${
                  error
                    ? "border-red-400 focus:border-red-500 focus:ring-red-100"
                    : "border-slate-300 focus:border-brand-500 focus:ring-brand-100"
                }`}
              />
              <button
                type="submit"
                className="flex shrink-0 items-center justify-center gap-2 rounded-lg bg-accent-500 px-6 py-3 text-sm font-bold text-brand-950 transition-colors hover:bg-accent-400"
              >
                <RupeeIcon className="size-4" />
                View Bill
              </button>
            </div>

            {error && (
              <p
                id={errorId}
                role="alert"
                className="mt-2 text-sm font-medium text-red-600"
              >
                {error}
              </p>
            )}

            {submitted && !error && (
              <p
                role="status"
                className="mt-3 rounded-lg bg-accent-50 px-4 py-3 text-sm text-brand-800 ring-1 ring-accent-300"
              >
                Number accepted. This build has no payment backend connected, so
                there is nothing to fetch yet — wire this form to the billing API
                to show the amount due.
              </p>
            )}
          </form>

          <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-slate-100 pt-4 text-xs text-slate-500">
            <span className="font-semibold text-slate-600">We accept</span>
            {["UPI", "Debit card", "Credit card", "Net banking"].map((method) => (
              <span
                key={method}
                className="rounded-full bg-slate-100 px-2.5 py-1 font-medium text-slate-600"
              >
                {method}
              </span>
            ))}
          </div>

          <p className="mt-4 text-xs text-slate-500">
            Paying an estimate or service charge instead?{" "}
            <a
              href="#services"
              className="font-semibold text-brand-600 hover:text-brand-700"
            >
              See all payment options
              <ArrowRightIcon className="ml-1 inline size-3" />
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
