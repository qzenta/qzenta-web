import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Qzenta — quietly excellent · AI-Native Business Technology, Software & Automation";
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
            background: "linear-gradient(to right, #BAFA38, #00CC85)",
          }}
        />

        {/* Logo mark */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            marginBottom: "48px",
          }}
        >
          <div
            style={{
              width: "56px",
              height: "56px",
              background: "#BAFA38",
              borderRadius: "12px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "32px",
              fontWeight: 900,
              color: "#0B1220",
            }}
          >
            Q
          </div>
          <span
            style={{
              fontSize: "38px",
              fontWeight: 800,
              color: "#F2F8F7",
              letterSpacing: "-0.5px",
            }}
          >
            qzenta
          </span>
          <div
            style={{
              width: "12px",
              height: "12px",
              background: "#BAFA38",
              borderRadius: "3px",
              marginLeft: "-6px",
              marginTop: "16px",
            }}
          />
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
          AI-Native Business Technology for{" "}
          <span style={{ color: "#BAFA38" }}>Ambitious</span> Enterprises
        </div>

        {/* Tagline */}
        <div
          style={{
            marginTop: "32px",
            fontSize: "24px",
            color: "#87A6AA",
            letterSpacing: "0.1em",
            textTransform: "lowercase",
          }}
        >
          quietly excellent · qzenta.com
        </div>
      </div>
    ),
    { ...size }
  );
}
