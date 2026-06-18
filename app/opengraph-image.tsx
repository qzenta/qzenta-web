import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Qzenta — Quietly Excellent · IT Infrastructure";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#07191E",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          padding: "80px 100px",
          fontFamily: "sans-serif",
        }}
      >
        {/* Dot grid */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "radial-gradient(circle, #1D3D44 1px, transparent 1px)",
            backgroundSize: "40px 40px",
            opacity: 0.4,
          }}
        />

        {/* Spring Green top bar */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "6px",
            background: "linear-gradient(to right, #02F5A1, #00CC85)",
          }}
        />

        {/* Logo mark */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            marginBottom: "48px",
          }}
        >
          <div
            style={{
              width: "56px",
              height: "56px",
              background: "#02F5A1",
              borderRadius: "12px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "32px",
              fontWeight: 900,
              color: "#07191E",
            }}
          >
            Q
          </div>
          <span
            style={{
              fontSize: "36px",
              fontWeight: 800,
              color: "#F2F8F7",
              letterSpacing: "-0.5px",
            }}
          >
            Qzenta
          </span>
        </div>

        {/* Headline */}
        <div
          style={{
            fontSize: "58px",
            fontWeight: 800,
            color: "#F2F8F7",
            lineHeight: 1.1,
            letterSpacing: "-1px",
            maxWidth: "900px",
          }}
        >
          IT Infrastructure for{" "}
          <span style={{ color: "#02F5A1" }}>Ambitious</span> African Businesses
        </div>

        {/* Tagline */}
        <div
          style={{
            marginTop: "32px",
            fontSize: "24px",
            color: "#3E6168",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
          }}
        >
          Quietly Excellent · qzenta.com
        </div>
      </div>
    ),
    { ...size }
  );
}
