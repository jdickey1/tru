import { ImageResponse } from "next/og";

export const runtime = "nodejs";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Texas Republicans United - Electing Republicans & Growing the Party in Texas";

export default async function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          background: "linear-gradient(160deg, #2a3a5c 0%, #1a2744 35%, #111c33 100%)",
          overflow: "hidden",
        }}
      >
        {/* Red top accent bar */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "8px",
            display: "flex",
            background: "linear-gradient(90deg, #bf0a30 0%, #9a0827 100%)",
          }}
        />

        {/* Gold bottom accent line */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "4px",
            display: "flex",
            background: "linear-gradient(90deg, #c9a227 0%, #d4b43d 50%, #c9a227 100%)",
          }}
        />

        {/* Decorative corner stars */}
        <div
          style={{
            position: "absolute",
            top: "36px",
            left: "56px",
            color: "#c9a227",
            fontSize: "32px",
            opacity: 0.3,
            display: "flex",
          }}
        >
          ★
        </div>
        <div
          style={{
            position: "absolute",
            top: "36px",
            right: "56px",
            color: "#c9a227",
            fontSize: "32px",
            opacity: 0.3,
            display: "flex",
          }}
        >
          ★
        </div>

        {/* Content */}
        <div
          style={{
            position: "relative",
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            padding: "56px",
          }}
        >
          {/* Stars row above name */}
          <div
            style={{
              display: "flex",
              gap: "16px",
              marginBottom: "24px",
              color: "#c9a227",
              fontSize: "20px",
            }}
          >
            <span style={{ display: "flex" }}>★</span>
            <span style={{ display: "flex" }}>★</span>
            <span style={{ display: "flex" }}>★</span>
          </div>

          {/* Organization name */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <span
              style={{
                color: "#ffffff",
                fontSize: "52px",
                fontWeight: 700,
                letterSpacing: "4px",
                textAlign: "center",
                display: "flex",
              }}
            >
              TEXAS REPUBLICANS
            </span>
            <span
              style={{
                color: "#ffffff",
                fontSize: "52px",
                fontWeight: 700,
                letterSpacing: "8px",
                textAlign: "center",
                display: "flex",
              }}
            >
              UNITED
            </span>
          </div>

          {/* Gold divider */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "16px",
              marginTop: "28px",
              marginBottom: "28px",
            }}
          >
            <div
              style={{
                width: "80px",
                height: "2px",
                background: "linear-gradient(90deg, transparent, #c9a227)",
                display: "flex",
              }}
            />
            <div
              style={{
                color: "#c9a227",
                fontSize: "16px",
                display: "flex",
              }}
            >
              ★
            </div>
            <div
              style={{
                width: "80px",
                height: "2px",
                background: "linear-gradient(90deg, #c9a227, transparent)",
                display: "flex",
              }}
            />
          </div>

          {/* Tagline */}
          <div
            style={{
              color: "#e8e2d5",
              fontSize: "26px",
              letterSpacing: "2px",
              textAlign: "center",
              display: "flex",
            }}
          >
            Electing Republicans &amp; Growing the Party
          </div>

          {/* Red accent badge */}
          <div
            style={{
              display: "flex",
              marginTop: "36px",
              padding: "10px 32px",
              background: "rgba(191, 10, 48, 0.15)",
              border: "1.5px solid rgba(191, 10, 48, 0.4)",
              borderRadius: "4px",
            }}
          >
            <span
              style={{
                color: "#bf0a30",
                fontSize: "13px",
                fontWeight: 700,
                letterSpacing: "4px",
                textTransform: "uppercase",
                display: "flex",
              }}
            >
              Political Action Committee
            </span>
          </div>
        </div>

        {/* Bottom URL */}
        <div
          style={{
            position: "absolute",
            bottom: "20px",
            right: "56px",
            display: "flex",
          }}
        >
          <span style={{ color: "#4a5a78", fontSize: "14px" }}>
            texasrepublicansunited.com
          </span>
        </div>
      </div>
    ),
    { ...size }
  );
}
