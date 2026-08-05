import Image from "next/image";
import { BannerCarousel } from "./components/banner-carousel";
import { ConsumerLogin } from "./components/consumer-login";
import { HeroBackdrop } from "./components/hero-backdrop";
import { ImpactBand } from "./components/impact-band";
import { QuickPay } from "./components/quick-pay";
import {
  ArrowRightIcon,
  BoltIcon,
  DownloadIcon,
  ExternalIcon,
  FileIcon,
  MeterIcon,
  PhoneIcon,
  RupeeIcon,
  SERVICE_ICONS,
  SunIcon,
  WhatsAppIcon,
} from "./components/icons";
import {
  APP_LINKS,
  NEWS,
  ORG,
  QUICK_FACTS,
  SERVICES,
} from "./lib/site-data";

export default function Home() {
  return (
    <>
      <Hero />
      <NewsTicker />
      <QuickPay />
      <Services />
      <ImpactBand />
      <NewsAndCampaigns />
      <SolarFeature />
      <QuickFacts />
      <MobileApp />
      <HelpStrip />
    </>
  );
}

/* ------------------------------------------------------------------ Hero */

function Hero() {
  return (
    <section className="relative overflow-hidden bg-brand-800">
      {/* Depth without an image: layered radial washes plus a faint grid. */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(60rem_40rem_at_15%_-10%,var(--color-brand-600),transparent_65%),radial-gradient(50rem_35rem_at_95%_10%,var(--color-brand-700),transparent_60%)]"
      />
      {/* Drifting pylons and energy pulses */}
      <HeroBackdrop />

      {/*
        Scrim over the artwork, heaviest on the left where the headline sits, so
        a passing gold pulse can never erode the text contrast.
      */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-r from-brand-800 via-brand-800/80 to-brand-800/25"
      />

      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.07] [background-image:linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] [background-size:56px_56px]"
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 py-16 lg:grid-cols-[1.15fr_auto] lg:py-24">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3.5 py-1.5 text-xs font-semibold text-brand-100 ring-1 ring-white/15">
            <BoltIcon className="size-3.5 text-accent-400" />
            Serving 11 districts of eastern Andhra Pradesh
          </p>

          <h1 className="mt-6 max-w-2xl text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl">
            {ORG.tagline}
          </h1>

          <p className="mt-5 max-w-xl text-lg leading-relaxed text-brand-100">
            {ORG.mission}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#pay"
              className="inline-flex items-center gap-2 rounded-full bg-accent-500 px-6 py-3.5 text-sm font-bold text-brand-950 shadow-lg shadow-brand-950/30 transition-colors hover:bg-accent-400"
            >
              <RupeeIcon className="size-5" />
              Pay Bill Now
            </a>
            <a
              href="#app"
              className="inline-flex items-center gap-2 rounded-full border border-white/25 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:border-white/50 hover:bg-white/10"
            >
              <DownloadIcon className="size-5" />
              Download App
            </a>
          </div>

          <dl className="mt-10 flex flex-wrap gap-x-10 gap-y-4 border-t border-white/10 pt-6">
            <div>
              <dt className="text-xs uppercase tracking-wider text-brand-300">
                24×7 Helpline
              </dt>
              <dd className="mt-0.5">
                <a
                  href={`tel:${ORG.helpline}`}
                  className="flex items-center gap-2 text-2xl font-bold text-white hover:text-accent-400"
                >
                  <PhoneIcon className="size-5 text-accent-400" />
                  {ORG.helpline}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-wider text-brand-300">
                WhatsApp Services
              </dt>
              <dd className="mt-0.5">
                <a
                  href={ORG.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-lg font-semibold text-white hover:text-accent-400"
                >
                  <WhatsAppIcon className="size-5 text-accent-400" />
                  {ORG.whatsappNumber}
                </a>
              </dd>
            </div>
          </dl>
        </div>

        <div className="justify-self-center lg:justify-self-end">
          <ConsumerLogin />
        </div>
      </div>
    </section>
  );
}

/* ----------------------------------------------------------- News ticker */

/**
 * Duplicates a list so a -50% translate loops seamlessly. The copies are
 * flagged so they can be hidden from assistive tech, which would otherwise
 * announce every headline twice.
 */
function looped<T>(items: readonly T[]) {
  return [
    ...items.map((item) => ({ item, duplicate: false })),
    ...items.map((item) => ({ item, duplicate: true })),
  ];
}

function NewsTicker() {
  return (
    <div className="border-b border-stone-200 bg-brand-50">
      <div className="mx-auto flex max-w-7xl items-center gap-4 px-6 py-2.5">
        <span className="flex shrink-0 items-center gap-1.5 rounded-full bg-brand-600 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-white">
          <span className="size-1.5 animate-pulse rounded-full bg-accent-400" />
          Latest
        </span>
        <div className="scroller relative flex-1 overflow-hidden">
          <ul className="scroller-track flex w-max animate-ticker items-center gap-10">
            {looped(NEWS).map(({ item, duplicate }, i) => (
              <li
                key={`${item.date}-${i}`}
                aria-hidden={duplicate || undefined}
                className="flex items-center gap-2 whitespace-nowrap text-sm text-stone-600"
              >
                <span className="font-mono text-xs text-brand-500">
                  {item.date}
                </span>
                <span>{item.title}</span>
              </li>
            ))}
          </ul>
        </div>
        <a
          href={`${ORG.live}/viewAllNews`}
          className="hidden shrink-0 text-sm font-semibold text-brand-600 hover:text-brand-700 sm:block"
        >
          View all
        </a>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------- Services */

function SectionHeading({
  eyebrow,
  title,
  body,
}: {
  eyebrow: string;
  title: string;
  body?: string;
}) {
  return (
    <div className="max-w-2xl">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-500">
        {eyebrow}
      </p>
      <h2 className="mt-2 text-3xl font-bold tracking-tight text-brand-900 sm:text-4xl">
        {title}
      </h2>
      {body && <p className="mt-3 text-base leading-relaxed text-stone-600">{body}</p>}
    </div>
  );
}

function Services() {
  return (
    <section id="services" className="mx-auto max-w-7xl px-6 py-16 lg:py-20">
      <SectionHeading
        eyebrow="Consumer Services"
        title="Everything you need, online"
        body="New connections, payments, load changes and solar registrations — handled without a visit to the section office."
      />

      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {SERVICES.map((group) => {
          const Icon = SERVICE_ICONS[group.icon as keyof typeof SERVICE_ICONS];
          return (
            <article
              key={group.title}
              className="group flex flex-col rounded-2xl border border-stone-200 bg-white p-6 transition-all hover:-translate-y-0.5 hover:border-brand-200 hover:shadow-lg hover:shadow-brand-900/5"
            >
              <span className="flex size-12 items-center justify-center rounded-xl bg-brand-50 text-brand-600 transition-colors group-hover:bg-brand-600 group-hover:text-white">
                <Icon className="size-6" />
              </span>
              <h3 className="mt-4 text-lg font-semibold text-brand-900">
                {group.title}
              </h3>
              <p className="mt-1.5 text-sm leading-relaxed text-stone-600">
                {group.blurb}
              </p>
              <ul className="mt-4 space-y-2 border-t border-stone-100 pt-4">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target={link.external ? "_blank" : undefined}
                      rel={link.external ? "noopener noreferrer" : undefined}
                      className="flex items-start gap-2 text-sm text-stone-600 transition-colors hover:text-brand-700"
                    >
                      <ArrowRightIcon className="mt-0.5 size-3.5 shrink-0 text-brand-300" />
                      <span>{link.label}</span>
                      {link.external && (
                        <ExternalIcon className="mt-0.5 size-3 shrink-0 opacity-40" />
                      )}
                    </a>
                  </li>
                ))}
              </ul>
            </article>
          );
        })}
      </div>
    </section>
  );
}

/* -------------------------------------------- News, tenders and campaigns */

function NewsAndCampaigns() {
  return (
    <section className="bg-stone-50 py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Newsroom"
          title="News, tenders and announcements"
        />

        <div className="mt-10 grid gap-6 lg:grid-cols-[1fr_1.15fr]">
          {/* Auto-scrolling news list — the modern stand-in for the marquee */}
          <div className="flex flex-col rounded-2xl border border-stone-200 bg-white">
            <div className="flex items-center justify-between border-b border-stone-100 px-5 py-4">
              <h3 className="flex items-center gap-2 font-semibold text-brand-900">
                <FileIcon className="size-5 text-brand-500" />
                Latest News
              </h3>
              <a
                href={`${ORG.live}/viewAllNews`}
                className="text-sm font-semibold text-brand-600 hover:text-brand-700"
              >
                View All News
              </a>
            </div>

            <div className="scroller relative h-[22rem] overflow-hidden">
              <ul className="scroller-track animate-scroll-y">
                {looped(NEWS).map(({ item, duplicate }, i) => (
                  <li
                    key={`${item.date}-${i}`}
                    aria-hidden={duplicate || undefined}
                    className="border-b border-stone-100 px-5 py-4"
                  >
                    <p className="text-xs font-semibold text-brand-500">
                      {item.date}
                    </p>
                    <p className="mt-1 text-sm leading-relaxed text-stone-700">
                      {item.title}
                    </p>
                    <span className="mt-1.5 inline-flex items-center gap-1 text-xs font-semibold text-brand-600">
                      Read more
                      <ArrowRightIcon className="size-3" />
                    </span>
                  </li>
                ))}
              </ul>
              {/* Fade the cut-off row rather than clipping it hard. */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-white to-transparent"
              />
            </div>
          </div>

          {/* Campaign banners */}
          <div className="space-y-6">
            <BannerCarousel />

            <div className="rounded-2xl border border-accent-300 bg-accent-50/60 p-5">
              <p className="text-xs font-bold uppercase tracking-wider text-accent-700">
                Announcement
              </p>
              <p className="mt-2 text-sm leading-relaxed text-stone-700">
                <strong className="font-semibold text-brand-900">
                  PM — SURYA GHAR: MUFT BIJLI YOJANA
                </strong>{" "}
                was launched on 13-02-2024. solarrooftop.gov.in is renamed as
                pmsuryaghar.gov.in.
              </p>
              <a
                href="https://pmsuryaghar.gov.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex items-center gap-1.5 text-sm font-bold text-brand-700 hover:text-brand-800"
              >
                Click Here to Apply
                <ExternalIcon className="size-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------- Solar */

function SolarFeature() {
  const points = [
    "Subsidised rooftop solar under PM Surya Ghar: Muft Bijli Yojana",
    "Net metering and virtual net metering for domestic consumers",
    "Additional capacity registration for existing solar consumers",
    "Track solar generation and export in the Eastern Power app",
  ];

  return (
    <section className="mx-auto max-w-7xl px-6 py-16 lg:py-20">
      {/*
        A deliberately warm, light band: it breaks up a page that is otherwise
        deep green, and gold suits the subject. Dark text on gold also clears
        contrast comfortably, which white on mid-gold would not.
      */}
      <div className="grid items-center gap-10 overflow-hidden rounded-3xl bg-gradient-to-br from-accent-300 to-accent-500 p-8 lg:grid-cols-2 lg:p-12">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full bg-brand-950/10 px-3.5 py-1.5 text-xs font-semibold text-brand-900 ring-1 ring-brand-950/15">
            <SunIcon className="size-3.5" />
            Rooftop Solar
          </p>
          <h2 className="mt-5 text-3xl font-bold tracking-tight text-brand-950 sm:text-4xl">
            Generate your own power, cut your bill
          </h2>
          <p className="mt-4 text-base leading-relaxed text-brand-800">
            Register a rooftop solar plant with APEPDCL, claim the MNRE subsidy
            and export surplus units back to the grid through net metering.
          </p>
          <a
            href="https://pmsuryaghar.gov.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-7 inline-flex items-center gap-2 rounded-full bg-brand-900 px-6 py-3.5 text-sm font-bold text-white transition-colors hover:bg-brand-950"
          >
            Register for PM Suryaghar
            <ExternalIcon className="size-4" />
          </a>
        </div>

        <ul className="space-y-3">
          {points.map((point) => (
            <li
              key={point}
              className="flex items-start gap-3 rounded-xl bg-white/40 p-4 text-sm text-brand-900 ring-1 ring-brand-950/10"
            >
              <SunIcon className="mt-0.5 size-4 shrink-0 text-brand-700" />
              {point}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------- Quick facts */

function QuickFacts() {
  return (
    <section className="border-y border-stone-200 bg-white py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Quick Facts"
          title="The network at a glance"
          body="Distribution infrastructure operated across the eleven districts of eastern Andhra Pradesh."
        />

        <dl className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-2xl bg-stone-200 sm:grid-cols-3 lg:grid-cols-4">
          {QUICK_FACTS.map((fact) => {
            const isLink = fact.href !== "#";
            const inner = (
              <>
                <dt className="text-sm text-stone-600">{fact.label}</dt>
                <dd className="mt-1 text-2xl font-bold tracking-tight text-brand-800 tabular-nums sm:text-3xl">
                  {fact.value}
                </dd>
              </>
            );

            return isLink ? (
              <a
                key={fact.label}
                href={fact.href}
                target={fact.external ? "_blank" : undefined}
                rel={fact.external ? "noopener noreferrer" : undefined}
                className="group flex flex-col-reverse bg-white p-5 transition-colors hover:bg-brand-50"
              >
                {inner}
                <MeterIcon className="mb-3 size-5 text-brand-400 transition-colors group-hover:text-brand-600" />
              </a>
            ) : (
              <div
                key={fact.label}
                className="flex flex-col-reverse bg-white p-5"
              >
                {inner}
                <MeterIcon className="mb-3 size-5 text-brand-400" />
              </div>
            );
          })}
        </dl>
      </div>
    </section>
  );
}

/* ----------------------------------------------------------- Mobile app */

function MobileApp() {
  const features = [
    "Pay bills and view payment history",
    "Track smart meter consumption",
    "Check supply status and outages",
    "Monitor solar generation and export",
  ];

  return (
    <section id="app" className="mx-auto max-w-7xl px-6 py-16 lg:py-20">
      <div className="grid items-center gap-10 rounded-3xl border border-stone-200 bg-stone-50 p-8 lg:grid-cols-2 lg:p-12">
        <div>
          <SectionHeading
            eyebrow="Eastern Power App"
            title="Your connection, in your pocket"
            body="Select your operating system to install the official APEPDCL app."
          />

          <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
            {features.map((feature) => (
              <li
                key={feature}
                className="flex items-start gap-2 text-sm text-stone-700"
              >
                <BoltIcon className="mt-0.5 size-4 shrink-0 text-accent-500" />
                {feature}
              </li>
            ))}
          </ul>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <a
            href={APP_LINKS.android}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-3 rounded-2xl border border-stone-200 bg-white p-6 text-center transition-all hover:-translate-y-0.5 hover:border-brand-200 hover:shadow-lg hover:shadow-brand-900/5"
          >
            <Image
              src="/brand/android.png"
              alt=""
              width={64}
              height={64}
              className="size-14 object-contain"
            />
            <span className="text-sm font-semibold text-brand-900">
              Android
              <span className="mt-0.5 block text-xs font-normal text-stone-500">
                Google Play Store
              </span>
            </span>
          </a>
          <a
            href={APP_LINKS.ios}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-3 rounded-2xl border border-stone-200 bg-white p-6 text-center transition-all hover:-translate-y-0.5 hover:border-brand-200 hover:shadow-lg hover:shadow-brand-900/5"
          >
            <Image
              src="/brand/ios.png"
              alt=""
              width={64}
              height={64}
              className="size-14 object-contain"
            />
            <span className="text-sm font-semibold text-brand-900">
              iOS
              <span className="mt-0.5 block text-xs font-normal text-stone-500">
                Apple App Store
              </span>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}

/* ----------------------------------------------------------- Help strip */

function HelpStrip() {
  const channels = [
    {
      icon: PhoneIcon,
      title: `Call ${ORG.helpline}`,
      body: "Toll-free, 24×7, for outages and complaints.",
      href: `tel:${ORG.helpline}`,
      external: false,
    },
    {
      icon: WhatsAppIcon,
      title: "WhatsApp Services",
      body: `Send "Hi" to ${ORG.whatsappNumber} for bills and status.`,
      href: ORG.whatsappUrl,
      external: true,
    },
    {
      icon: FileIcon,
      title: "Register a Complaint",
      body: "Raise a ticket online and track it to closure.",
      href: "#",
      external: false,
    },
    {
      icon: RupeeIcon,
      title: "Pay Without Login",
      body: "Quick payment using your service number.",
      href: "#pay",
      external: false,
    },
  ];

  return (
    <section id="help" className="bg-brand-900 py-14">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-center text-2xl font-bold tracking-tight text-white sm:text-3xl">
          Need help with your connection?
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-center text-sm text-brand-200">
          Reach APEPDCL through any of these channels — all available without
          visiting an office.
        </p>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {channels.map((channel) => {
            const Icon = channel.icon;
            return (
              <a
                key={channel.title}
                href={channel.href}
                target={channel.external ? "_blank" : undefined}
                rel={channel.external ? "noopener noreferrer" : undefined}
                className="group rounded-2xl bg-white/5 p-6 ring-1 ring-white/10 transition-colors hover:bg-white/10"
              >
                <span className="flex size-11 items-center justify-center rounded-xl bg-accent-500/15 text-accent-400">
                  <Icon className="size-5" />
                </span>
                <h3 className="mt-4 font-semibold text-white">
                  {channel.title}
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-brand-200">
                  {channel.body}
                </p>
                <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-accent-400">
                  Continue
                  <ArrowRightIcon className="size-4 transition-transform group-hover:translate-x-0.5" />
                </span>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
