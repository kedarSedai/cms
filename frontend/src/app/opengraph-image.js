import { ImageResponse } from "next/og";
import { site } from "@/data/site";

export const runtime = "edge";

export const alt = site.name;

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 72,
          background: "linear-gradient(135deg, #fff8f0 0%, #ffd166 45%, #ff6b4a 100%)",
          color: "#1b1f3b",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div style={{ fontSize: 64, fontWeight: 800, letterSpacing: -1 }}>
          {site.name}
        </div>
        <div style={{ marginTop: 16, fontSize: 28, maxWidth: 900, lineHeight: 1.3 }}>
          {site.tagline}
        </div>
        <div
          style={{
            marginTop: 40,
            fontSize: 22,
            fontWeight: 600,
            color: "#2a9d8f",
          }}
        >
          Donate · Volunteer · Join an event
        </div>
      </div>
    ),
    { ...size },
  );
}
