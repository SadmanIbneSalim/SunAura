import Image from "next/image";

const offers = [
  { label: "Summer Sale 50% OFF", emoji: "☀️", bg: "linear-gradient(135deg,#ff6b35,#f7931e)", shadow: "0 4px 18px rgba(255,107,53,0.4)" },
  { label: "Hot Deals", emoji: "🔥", bg: "linear-gradient(135deg,#e63946,#c1121f)", shadow: "0 4px 18px rgba(230,57,70,0.4)" },
];

const stats = [
  { num: "12K+", label: "Products" },
  { num: "50%", label: "Max Discount" },
  { num: "4.9★", label: "Rating" },
];

export default function HeroSection() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&display=swap');
        .hero-badge { transition: transform 0.18s ease; animation: badgePop 0.5s cubic-bezier(0.34,1.56,0.64,1) both; }
        .hero-badge:nth-child(2) { animation-delay: 0.12s; }
        .hero-badge:hover { transform: translateY(-2px) scale(1.05); }
        .hero-btn-primary { transition: transform 0.18s ease, box-shadow 0.18s ease; }
        .hero-btn-primary:hover { transform: translateY(-2px); box-shadow: 0 8px 28px rgba(230,57,70,0.55) !important; }
        .hero-btn-ghost { transition: background 0.18s ease, border-color 0.18s ease, transform 0.18s ease; }
        .hero-btn-ghost:hover { background: rgba(255,255,255,0.15) !important; border-color: rgba(255,255,255,0.75) !important; transform: translateY(-2px); }
        .hero-eyebrow { animation: fadeUp 0.5s ease both 0.05s; }
        .hero-title   { animation: fadeUp 0.55s ease both 0.1s; }
        .hero-sub     { animation: fadeUp 0.55s ease both 0.18s; }
        .hero-actions { animation: fadeUp 0.55s ease both 0.26s; }
        .hero-stats   { animation: fadeUp 0.55s ease both 0.34s; }
        @keyframes badgePop {
          from { opacity: 0; transform: scale(0.7) translateY(10px); }
          to   { opacity: 1; transform: scale(1) translateY(0); }
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(18px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @media (max-width: 640px) {
          .hero-actions { flex-direction: column !important; }
          .hero-btn-primary, .hero-btn-ghost { width: 100% !important; }
          .hero-stats { gap: 16px !important; }
        }
      `}</style>

      <section
        style={{
          position: "relative",
          width: "100%",
          minHeight: 580,
          display: "flex",
          alignItems: "center",
          overflow: "hidden",
        }}
      >
        {/* Background Image */}
        <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
          <Image
            src="/Banner.png"
            alt="Hero background"
            fill
            priority
            style={{ objectFit: "cover", objectPosition: "center" }}
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.03) 1px,transparent 1px)",
              backgroundSize: "48px 48px",
            }}
          />
        </div>

        {/* Dark overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            zIndex: 1,
            background:
              "linear-gradient(110deg,rgba(10,10,20,0.78) 0%,rgba(10,10,20,0.42) 60%,rgba(10,10,20,0.1) 100%)",
          }}
        />

        {/* Content */}
        <div
          style={{
            position: "relative",
            zIndex: 2,
            maxWidth: 1140,
            width: "100%",
            margin: "0 auto",
            padding: "72px 24px",
          }}
        >
          {/* Offer Badges */}
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginBottom: 24 }}>
            {offers.map((offer) => (
              <span
                key={offer.label}
                className="hero-badge"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 7,
                  padding: "7px 16px 7px 12px",
                  borderRadius: 40,
                  background: offer.bg,
                  boxShadow: offer.shadow,
                  fontSize: 12.5,
                  fontWeight: 700,
                  
                  color: "#fff",
                  cursor: "default",
                  userSelect: "none",
                }}
              >
                <span style={{ fontSize: 15, lineHeight: 1 }}>{offer.emoji}</span>
                {offer.label}
              </span>
            ))}
          </div>

          {/* Eyebrow */}
          <p
            className="hero-eyebrow"
            style={{
              margin: "0 0 14px",
              fontSize: 11,
              fontWeight: 600,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.4)",
            }}
          >
            New Collection · 2025
          </p>

          {/* Headline */}
          <h1
            className="hero-title"
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: "clamp(2.3rem, 5vw, 3.6rem)",
              fontWeight: 900,
              color: "#fff",
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              margin: "0 0 20px",
            }}
          >
            Discover Your <br />
            <span
              style={{
                background: "linear-gradient(90deg,#ff6b35,#e63946)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Next Favorite
            </span>
          </h1>

          {/* Subtitle */}
          <p
            className="hero-sub"
            style={{
              fontSize: "1.05rem",
              color: "rgba(255,255,255,0.62)",
              maxWidth: 460,
              lineHeight: 1.7,
              margin: "0 0 36px",
            }}
          >
            Handpicked collections, unbeatable prices — updated every day just for you.
          </p>

          {/* CTA Buttons */}
          <div className="hero-actions" style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <button
              className="hero-btn-primary"
              style={{
                padding: "14px 36px",
                borderRadius: 8,
                border: "none",
                background: "linear-gradient(135deg,#ff6b35,#e63946)",
                color: "#fff",
                fontSize: "0.95rem",
                fontWeight: 700,
                letterSpacing: "0.02em",
                cursor: "pointer",
                boxShadow: "0 4px 20px rgba(230,57,70,0.45)",
              }}
            >
              Shop Now →
            </button>
            <button
              className="hero-btn-ghost"
              style={{
                padding: "14px 32px",
                borderRadius: 8,
                border: "1.5px solid rgba(255,255,255,0.4)",
                background: "rgba(255,255,255,0.07)",
                color: "#fff",
                fontSize: "0.95rem",
                fontWeight: 500,
                cursor: "pointer",
              }}
            >
              View All Deals
            </button>
          </div>

          {/* Stats */}
          <div
            className="hero-stats"
            style={{ display: "flex", alignItems: "center", gap: 28, marginTop: 52 }}
          >
            {stats.map((s, i) => (
              <>
                <div key={s.label} style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                  <span
                    style={{
                      fontFamily: "'Playfair Display', Georgia, serif",
                      fontSize: "1.75rem",
                      fontWeight: 700,
                      color: "#fff",
                      lineHeight: 1,
                    }}
                  >
                    {s.num}
                  </span>
                  <span
                    style={{
                      fontSize: 10.5,
                      color: "rgba(255,255,255,0.4)",
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                    }}
                  >
                    {s.label}
                  </span>
                </div>
                {i < stats.length - 1 && (
                  <div
                    key={`div-${i}`}
                    style={{ width: 1, height: 36, background: "rgba(255,255,255,0.12)" }}
                  />
                )}
              </>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}