import type { SVGProps } from "react";

/**
 * Inline icon set. The source site loads Font Awesome for this; drawing the
 * dozen glyphs we actually need keeps the page free of an icon dependency and
 * a blocking stylesheet.
 */

type IconProps = SVGProps<SVGSVGElement>;

function Outline({ children, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {children}
    </svg>
  );
}

export function BoltIcon(props: IconProps) {
  return (
    <Outline {...props}>
      <path d="M13.5 3 5.5 13.5H11l-.5 7.5 8-10.5H13l.5-7.5Z" />
    </Outline>
  );
}

export function PlugIcon(props: IconProps) {
  return (
    <Outline {...props}>
      <path d="M9 2v6M15 2v6" />
      <path d="M6 8h12v2a6 6 0 0 1-6 6 6 6 0 0 1-6-6V8Z" />
      <path d="M12 16v6" />
    </Outline>
  );
}

export function RupeeIcon(props: IconProps) {
  return (
    <Outline {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M9 8h6M9 11h6M13.5 8c1.4 0 2 1 2 1.9 0 1.4-1.2 2.1-2.7 2.1H9l4 4" />
    </Outline>
  );
}

export function SlidersIcon(props: IconProps) {
  return (
    <Outline {...props}>
      <path d="M4 7h10M18 7h2M4 17h4M12 17h8" />
      <circle cx="16" cy="7" r="2" />
      <circle cx="10" cy="17" r="2" />
    </Outline>
  );
}

export function FactoryIcon(props: IconProps) {
  return (
    <Outline {...props}>
      <path d="M3 20V10l5 3V10l5 3V7l8 4v9H3Z" />
      <path d="M7 20v-3M12 20v-3M17 20v-3" />
    </Outline>
  );
}

export function SunIcon(props: IconProps) {
  return (
    <Outline {...props}>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M2 12h2M20 12h2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M19.1 4.9l-1.4 1.4M6.3 17.7l-1.4 1.4" />
    </Outline>
  );
}

export function WrenchIcon(props: IconProps) {
  return (
    <Outline {...props}>
      <path d="M15.5 3.5a5 5 0 0 0-6.1 6.9L3 16.8V21h4.2l6.4-6.4a5 5 0 0 0 6.9-6.1l-2.9 2.9-2.6-.7-.7-2.6 2.9-2.9Z" />
    </Outline>
  );
}

export function UsersIcon(props: IconProps) {
  return (
    <Outline {...props}>
      <circle cx="9" cy="8" r="3.5" />
      <path d="M2.5 20a6.5 6.5 0 0 1 13 0" />
      <path d="M16 5.2a3.5 3.5 0 0 1 0 6.6M17.5 20a6.4 6.4 0 0 0-1.6-4.2" />
    </Outline>
  );
}

export function MapPinIcon(props: IconProps) {
  return (
    <Outline {...props}>
      <path d="M12 21s7-5.5 7-11a7 7 0 1 0-14 0c0 5.5 7 11 7 11Z" />
      <circle cx="12" cy="10" r="2.5" />
    </Outline>
  );
}

export function ShieldIcon(props: IconProps) {
  return (
    <Outline {...props}>
      <path d="M12 3l7 3v6c0 4.5-3 7.8-7 9-4-1.2-7-4.5-7-9V6l7-3Z" />
      <path d="m9 12 2 2 4-4" />
    </Outline>
  );
}

export function PhoneIcon(props: IconProps) {
  return (
    <Outline {...props}>
      <path d="M5 3h3l2 5-2.5 1.5a12 12 0 0 0 6 6L15 13l5 2v3a2 2 0 0 1-2.2 2A16.5 16.5 0 0 1 3 5.2 2 2 0 0 1 5 3Z" />
    </Outline>
  );
}

export function ChevronDownIcon(props: IconProps) {
  return (
    <Outline {...props}>
      <path d="m6 9 6 6 6-6" />
    </Outline>
  );
}

export function ArrowRightIcon(props: IconProps) {
  return (
    <Outline {...props}>
      <path d="M4 12h15M13 6l6 6-6 6" />
    </Outline>
  );
}

export function MenuIcon(props: IconProps) {
  return (
    <Outline {...props}>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </Outline>
  );
}

export function CloseIcon(props: IconProps) {
  return (
    <Outline {...props}>
      <path d="M6 6l12 12M18 6 6 18" />
    </Outline>
  );
}

export function DownloadIcon(props: IconProps) {
  return (
    <Outline {...props}>
      <path d="M12 3v12M7 11l5 5 5-5M4 20h16" />
    </Outline>
  );
}

export function ExternalIcon(props: IconProps) {
  return (
    <Outline {...props}>
      <path d="M14 4h6v6M20 4l-8 8" />
      <path d="M18 14v4a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4" />
    </Outline>
  );
}

export function FileIcon(props: IconProps) {
  return (
    <Outline {...props}>
      <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8l-5-5Z" />
      <path d="M14 3v5h5M9 13h6M9 17h4" />
    </Outline>
  );
}

export function MeterIcon(props: IconProps) {
  return (
    <Outline {...props}>
      <path d="M4 18a8 8 0 1 1 16 0" />
      <path d="M12 18l4-5" />
      <path d="M3 21h18" />
    </Outline>
  );
}

/* Brand marks use fill rather than stroke. */

function Solid({ children, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      {children}
    </svg>
  );
}

export function WhatsAppIcon(props: IconProps) {
  return (
    <Solid {...props}>
      <path d="M12 2a9.9 9.9 0 0 0-8.5 15L2 22l5.2-1.4A10 10 0 1 0 12 2Zm5.3 14.1c-.2.6-1.2 1.2-1.9 1.3-.6.1-1.3 0-2.7-.6a11.4 11.4 0 0 1-4.6-4.2c-.6-1-.8-1.8-.7-2.5.1-.7.6-1.5 1.1-1.7.3-.1.7-.1.9.1.2.2.8 1.6.8 1.8.1.2 0 .4-.1.6l-.5.6c-.1.2-.2.3 0 .6.3.5.8 1.2 1.5 1.7.7.6 1.3.8 1.6.9.2.1.4 0 .5-.1l.7-.8c.2-.2.4-.2.6-.1l1.6.8c.2.1.3.3.2.6l-.5 1.3Z" />
    </Solid>
  );
}

export function FacebookIcon(props: IconProps) {
  return (
    <Solid {...props}>
      <path d="M13.5 21v-7h2.4l.4-2.8h-2.8V9.4c0-.8.2-1.4 1.4-1.4h1.5V5.1A20 20 0 0 0 14.2 5c-2.2 0-3.7 1.3-3.7 3.9v2.3H8v2.8h2.5v7h3Z" />
    </Solid>
  );
}

export function TwitterIcon(props: IconProps) {
  return (
    <Solid {...props}>
      <path d="M17.5 3h3l-6.6 7.6L21.5 21h-5.4l-4.2-5.5L6.9 21H3.8l7-8L2.8 3h5.5l3.9 5.2L17.5 3Zm-1 16h1.6L7.1 4.6H5.4L16.5 19Z" />
    </Solid>
  );
}

export function LinkedInIcon(props: IconProps) {
  return (
    <Solid {...props}>
      <path d="M6.5 8.8H3.7V21h2.8V8.8Zm.2-3.4a1.7 1.7 0 1 0-3.4 0 1.7 1.7 0 0 0 3.4 0ZM21 14.2c0-3-1.6-4.4-3.7-4.4-1.7 0-2.5.9-2.9 1.6V8.8H11.6V21h2.8v-6.4c0-1.4.6-2.2 1.8-2.2s1.7.8 1.7 2.3V21H21v-6.8Z" />
    </Solid>
  );
}

export function YouTubeIcon(props: IconProps) {
  return (
    <Solid {...props}>
      <path d="M21.6 7.9a2.5 2.5 0 0 0-1.8-1.8C18.2 5.7 12 5.7 12 5.7s-6.2 0-7.8.4A2.5 2.5 0 0 0 2.4 7.9C2 9.5 2 12 2 12s0 2.5.4 4.1a2.5 2.5 0 0 0 1.8 1.8c1.6.4 7.8.4 7.8.4s6.2 0 7.8-.4a2.5 2.5 0 0 0 1.8-1.8C22 14.5 22 12 22 12s0-2.5-.4-4.1ZM10 15.2V8.8l5.2 3.2-5.2 3.2Z" />
    </Solid>
  );
}

export function InstagramIcon(props: IconProps) {
  return (
    <Solid {...props}>
      <path d="M12 2.2c-2.7 0-3 0-4 .1-1.1 0-1.8.2-2.4.5a4.9 4.9 0 0 0-1.8 1.1 4.9 4.9 0 0 0-1.1 1.8c-.3.6-.4 1.3-.5 2.4 0 1-.1 1.3-.1 4s0 3 .1 4c0 1.1.2 1.8.5 2.4a4.9 4.9 0 0 0 1.1 1.8 4.9 4.9 0 0 0 1.8 1.1c.6.3 1.3.4 2.4.5 1 0 1.3.1 4 .1s3 0 4-.1c1.1 0 1.8-.2 2.4-.5a4.9 4.9 0 0 0 1.8-1.1 4.9 4.9 0 0 0 1.1-1.8c.3-.6.4-1.3.5-2.4 0-1 .1-1.3.1-4s0-3-.1-4c0-1.1-.2-1.8-.5-2.4a4.9 4.9 0 0 0-1.1-1.8 4.9 4.9 0 0 0-1.8-1.1c-.6-.3-1.3-.4-2.4-.5-1 0-1.3-.1-4-.1Zm0 1.8c2.7 0 2.9 0 3.9.1.9 0 1.4.2 1.7.3.4.2.7.4 1 .7.3.3.5.6.7 1 .1.3.3.8.3 1.7 0 1 .1 1.2.1 3.9s0 2.9-.1 3.9c0 .9-.2 1.4-.3 1.7-.2.4-.4.7-.7 1a2.7 2.7 0 0 1-1 .7c-.3.1-.8.3-1.7.3-1 0-1.2.1-3.9.1s-2.9 0-3.9-.1c-.9 0-1.4-.2-1.7-.3a2.7 2.7 0 0 1-1-.7 2.7 2.7 0 0 1-.7-1c-.1-.3-.3-.8-.3-1.7 0-1-.1-1.2-.1-3.9s0-2.9.1-3.9c0-.9.2-1.4.3-1.7.2-.4.4-.7.7-1 .3-.3.6-.5 1-.7.3-.1.8-.3 1.7-.3 1 0 1.2-.1 3.9-.1Zm0 3.1a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm0 8.1a3.2 3.2 0 1 1 0-6.3 3.2 3.2 0 0 1 0 6.3Zm6.3-8.3a1.2 1.2 0 1 1-2.3 0 1.2 1.2 0 0 1 2.3 0Z" />
    </Solid>
  );
}

export const SERVICE_ICONS = {
  plug: PlugIcon,
  rupee: RupeeIcon,
  sliders: SlidersIcon,
  factory: FactoryIcon,
  sun: SunIcon,
  wrench: WrenchIcon,
} as const;

export const IMPACT_ICONS = {
  users: UsersIcon,
  map: MapPinIcon,
  bolt: BoltIcon,
  shield: ShieldIcon,
} as const;

export const SOCIAL_ICONS = {
  facebook: FacebookIcon,
  twitter: TwitterIcon,
  linkedin: LinkedInIcon,
  youtube: YouTubeIcon,
  instagram: InstagramIcon,
} as const;
