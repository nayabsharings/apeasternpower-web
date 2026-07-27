import Image from "next/image";
import {
  FOOTER_COLUMNS,
  ORG,
  PARTNER_LINKS,
  SOCIALS,
} from "../lib/site-data";
import {
  ExternalIcon,
  PhoneIcon,
  SOCIAL_ICONS,
  WhatsAppIcon,
} from "./icons";

export function SiteFooter() {
  return (
    <footer className="bg-brand-950 text-brand-200">
      <div className="mx-auto max-w-7xl px-6 py-14">
        <div className="grid gap-10 lg:grid-cols-[1.3fr_repeat(4,1fr)]">
          {/* Identity + contact */}
          <div>
            <div className="flex items-center gap-3">
              <span className="flex size-11 items-center justify-center rounded-xl bg-white">
                <Image
                  src="/brand/logo.png"
                  alt=""
                  width={28}
                  height={35}
                  className="h-7 w-auto"
                />
              </span>
              <span className="text-lg font-bold text-white">
                {ORG.shortName}
              </span>
            </div>
            <p className="mt-4 text-sm leading-relaxed">{ORG.name}</p>

            <dl className="mt-5 space-y-1 text-xs">
              <div className="flex gap-2">
                <dt>CIN:</dt>
                <dd className="font-mono text-brand-100">{ORG.cin}</dd>
              </div>
              <div className="flex gap-2">
                <dt>GSTIN:</dt>
                <dd className="font-mono text-brand-100">{ORG.gstin}</dd>
              </div>
            </dl>

            <div className="mt-5 flex flex-col gap-2 text-sm">
              <a
                href={`tel:${ORG.helpline}`}
                className="flex items-center gap-2 font-semibold text-white transition-colors hover:text-accent-400"
              >
                <PhoneIcon className="size-4" />
                Toll-free {ORG.helpline}
              </a>
              <a
                href={ORG.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 transition-colors hover:text-accent-400"
              >
                <WhatsAppIcon className="size-4" />
                {ORG.whatsappNumber}
              </a>
            </div>

            <ul className="mt-5 flex items-center gap-2">
              {SOCIALS.map((social) => {
                const Icon = SOCIAL_ICONS[social.icon];
                return (
                  <li key={social.label}>
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="flex size-9 items-center justify-center rounded-lg bg-white/5 ring-1 ring-white/10 transition-colors hover:bg-brand-600 hover:text-white"
                    >
                      <Icon className="size-4" />
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Link columns */}
          {FOOTER_COLUMNS.map((column) => (
            <nav key={column.title} aria-label={column.title}>
              <h2 className="text-sm font-semibold text-white">
                {column.title}
              </h2>
              <ul className="mt-4 space-y-2.5 text-sm">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target={link.external ? "_blank" : undefined}
                      rel={link.external ? "noopener noreferrer" : undefined}
                      className="inline-flex items-start gap-1.5 transition-colors hover:text-white"
                    >
                      {link.label}
                      {link.external && (
                        <ExternalIcon className="mt-0.5 size-3 shrink-0 opacity-50" />
                      )}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        {/* Partner organisations */}
        <div className="mt-12 border-t border-white/10 pt-8">
          <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-400">
            Related Organisations
          </h2>
          <ul className="mt-4 flex flex-wrap gap-2">
            {PARTNER_LINKS.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noopener noreferrer" : undefined}
                  className="flex items-center gap-1.5 rounded-full bg-white/5 px-3.5 py-1.5 text-xs ring-1 ring-white/10 transition-colors hover:bg-white/10 hover:text-white"
                >
                  {link.label}
                  {link.external && (
                    <ExternalIcon className="size-3 opacity-50" />
                  )}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-6 py-5 text-xs sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {ORG.shortName} — {ORG.legalName}. All
            rights reserved.
          </p>
          <ul className="flex flex-wrap gap-x-5 gap-y-1">
            <li>
              <a href="#" className="hover:text-white">
                Terms of Use
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Disclaimer
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Sitemap
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
