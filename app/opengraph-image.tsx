import { ImageResponse } from "next/og";
import { ORG } from "./lib/site-data";

export const alt = `${ORG.shortName} — ${ORG.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/**
 * Social preview card. Drawn with flexbox and inline SVG only — Satori (which
 * backs ImageResponse) supports no CSS grid and no external stylesheets, so the
 * brand colours are repeated here as literals rather than read from tokens.
 */
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          background: "linear-gradient(135deg, #1c3c58 0%, #091522 100%)",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "24px" }}>
          <svg width="76" height="76" viewBox="0 0 24 24">
            <rect width="24" height="24" rx="5.5" fill="#2dd4bf" />
            <path
              d="M14 3.6 6.8 13.9h4.8l-1 6.5 6.6-9.6h-4.4L14 3.6Z"
              fill="#091522"
            />
          </svg>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span
              style={{ fontSize: 44, fontWeight: 700, color: "#ffffff" }}
            >
              {ORG.shortName}
            </span>
            <span style={{ fontSize: 20, color: "#85a9c9", marginTop: 4 }}>
              {ORG.name}
            </span>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <span
            style={{
              fontSize: 66,
              fontWeight: 700,
              color: "#ffffff",
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
            }}
          >
            {ORG.tagline}
          </span>
          <span style={{ fontSize: 26, color: "#b3cbe1", marginTop: 24 }}>
            Serving 11 districts of eastern Andhra Pradesh
          </span>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          {["Pay bills online", "New connections", "Rooftop solar"].map(
            (item) => (
              <span
                key={item}
                style={{
                  fontSize: 22,
                  color: "#2dd4bf",
                  border: "1px solid #1c3c58",
                  borderRadius: 999,
                  padding: "10px 22px",
                  background: "rgba(45, 212, 191, 0.08)",
                }}
              >
                {item}
              </span>
            ),
          )}
          <span
            style={{
              fontSize: 22,
              color: "#ffffff",
              marginLeft: "auto",
              fontWeight: 700,
            }}
          >
            Helpline {ORG.helpline}
          </span>
        </div>
      </div>
    ),
    size,
  );
}
