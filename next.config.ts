import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /*
   * Next.js blocks cross-origin requests to dev-only resources (/_next/*, HMR
   * websocket, /__nextjs*) unless the host is allowlisted here.
   *
   * These entries are the addresses *this machine* is reached at, because the
   * check reads the Origin/Referer host — i.e. the address typed into the
   * browser — not the visiting device's IP. Allowing the server's own LAN
   * address is therefore enough for any number of other machines.
   *
   * "localhost" and "*.localhost" are always allowed and need no entry.
   * Dev only; ignored by `next build` and `next start`.
   */
  allowedDevOrigins: [
    "10.150.250.27", // LAN address (Ethernet)
    "10.150.250.*", // same /24, so a new DHCP lease does not break access
    "172.17.16.1", // WSL / Hyper-V virtual switch
  ],
};

export default nextConfig;
