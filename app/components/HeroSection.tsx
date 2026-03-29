"use client";
import { useEffect, useRef } from "react";

export default function HeroSection() {
  const frameRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = frameRef.current;
    if (!el) return;
    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width - 0.5) * 12;
      const y = ((e.clientY - rect.top) / rect.height - 0.5) * 12;
      el.style.transform = `perspective(800px) rotateY(${-x}deg) rotateX(${y}deg)`;
    };
    const onLeave = () => { el.style.transform = "perspective(800px) rotateY(0deg) rotateX(0deg)"; };
    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    return () => { el.removeEventListener("mousemove", onMove); el.removeEventListener("mouseleave", onLeave); };
  }, []);

  return (
    <section
      id="home"
      style={{
        width: "100%",
        minHeight: "100vh",
        backgroundColor: "#1B2A4A",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        direction: "rtl",
      }}
    >
      {/* Animated blob shapes */}
      <div style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
        <div style={{
          position: "absolute", width: "500px", height: "500px",
          borderRadius: "50%", background: "#C8963E", opacity: 0.06,
          top: "-120px", right: "-100px",
          animation: "drift1 8s ease-in-out infinite",
        }} />
        <div style={{
          position: "absolute", width: "280px", height: "280px",
          borderRadius: "50%", background: "#C8963E", opacity: 0.05,
          bottom: "-60px", right: "300px",
          animation: "drift2 11s ease-in-out infinite",
        }} />
        <div style={{
          position: "absolute", width: "160px", height: "160px",
          borderRadius: "50%", background: "#ffffff", opacity: 0.04,
          top: "100px", right: "520px",
          animation: "drift3 7s ease-in-out infinite",
        }} />
      </div>

      {/* Grid overlay */}
      <div style={{
        position: "absolute", inset: 0, pointerEvents: "none",
        backgroundImage: "linear-gradient(rgba(200,150,62,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(200,150,62,0.05) 1px, transparent 1px)",
        backgroundSize: "48px 48px",
      }} />

      {/* CSS keyframes */}
      <style>{`
        @keyframes drift1 { 0%,100%{transform:translate(0,0) scale(1)} 50%{transform:translate(20px,-18px) scale(1.04)} }
        @keyframes drift2 { 0%,100%{transform:translate(0,0)} 50%{transform:translate(-15px,22px)} }
        @keyframes drift3 { 0%,100%{transform:translate(0,0) rotate(0deg)} 50%{transform:translate(10px,-12px) rotate(15deg)} }
        @keyframes float  { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-12px)} }
        @keyframes pulse  { 0%,100%{box-shadow:0 4px 16px rgba(200,150,62,0.4)} 50%{box-shadow:0 4px 28px rgba(200,150,62,0.65)} }
        @keyframes blink  { 0%,100%{opacity:1} 50%{opacity:0.3} }
        @keyframes lineGrow { from{transform:scaleX(0)} to{transform:scaleX(1)} }
        .hero-underline::after {
          content:'';
          position:absolute;
          bottom:2px; right:0; left:0;
          height:3px;
          background:linear-gradient(90deg,transparent,#C8963E);
          border-radius:2px;
          animation:lineGrow 1s ease-out 0.6s both;
          transform-origin:right;
        }
        .btn-gold:hover { transform:translateY(-2px)!important; box-shadow:0 8px 32px rgba(200,150,62,0.55)!important; }
        .btn-outline-w:hover { background:rgba(255,255,255,0.07)!important; border-color:rgba(255,255,255,0.4)!important; }
      `}</style>

      {/* ── Main container ── */}
      <div style={{
        maxWidth: "1200px", margin: "0 auto",
        padding: "100px 24px 60px",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "48px",
        alignItems: "center",
        width: "100%",
      }}
        className="hero-grid"
      >

        {/* ── RIGHT: Content ── */}
        <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
          {/* Tag pill */}
          <div style={{
            display: "inline-flex", alignItems: "center", gap: "8px",
            background: "rgba(200,150,62,0.12)",
            border: "1px solid rgba(200,150,62,0.3)",
            color: "#C8963E", fontWeight: 700, fontSize: "13px",
            padding: "6px 16px", borderRadius: "50px",
            marginBottom: "24px", width: "fit-content",
          }}>
            <span style={{ width: "6px", height: "6px", background: "#C8963E", borderRadius: "50%", flexShrink: 0 }} />
            محل خياطة يونيفورمز
          </div>

          {/* Headline */}
          <h1 style={{
            fontSize: "clamp(30px, 4vw, 52px)",
            fontWeight: 900,
            color: "#ffffff",
            lineHeight: 1.25,
            marginBottom: "20px",
          }}>
            نصنع زيّك الموحّد
            <br />
            <span style={{ color: "#C8963E", position: "relative" }} className="hero-underline">
              بدقة لا مثيل لها
            </span>
          </h1>

          {/* Sub */}
          <p style={{
            fontSize: "15px",
            color: "rgba(255,255,255,0.6)",
            lineHeight: 1.95,
            marginBottom: "32px",
            maxWidth: "420px",
          }}>
            من المدارس إلى الشركات والمنشآت الطبية — نقدّم يونيفورمات راقية
            تعكس هوية مؤسستك وتُبهر من يراها.
          </p>

          {/* Buttons */}
          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginBottom: "36px" }}>
            <a
              href="#contact"
              className="btn-gold"
              style={{
                background: "#C8963E",
                color: "#fff",
                fontWeight: 700,
                fontSize: "14px",
                padding: "13px 30px",
                borderRadius: "50px",
                textDecoration: "none",
                transition: "all 0.25s",
                boxShadow: "0 4px 20px rgba(200,150,62,0.35)",
                display: "inline-block",
              }}
            >
              تواصل معنا الآن
            </a>
            <a
              href="#products"
              className="btn-outline-w"
              style={{
                background: "transparent",
                color: "#fff",
                fontWeight: 600,
                fontSize: "14px",
                padding: "13px 30px",
                borderRadius: "50px",
                textDecoration: "none",
                border: "1.5px solid rgba(255,255,255,0.25)",
                transition: "all 0.25s",
                display: "inline-block",
              }}
            >
              استعرض المنتجات
            </a>
          </div>

          {/* Stats row */}
          <div style={{
            display: "flex",
            gap: "28px",
            paddingTop: "28px",
            borderTop: "1px solid rgba(255,255,255,0.08)",
          }}>
            {[
              { num: "+100", lbl: "شركة خدمناها" },
              { num: "+10", lbl: "سنوات خبرة" },
              { num: "15", lbl: "فرع نشط" },
            ].map((s, i) => (
              <div key={s.num} style={{ display: "flex", alignItems: "center", gap: "28px" }}>
                <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                  <span style={{ fontSize: "22px", fontWeight: 900, color: "#C8963E", lineHeight: 1 }}>
                    {s.num}
                  </span>
                  <span style={{ fontSize: "11px", color: "rgba(255,255,255,0.45)", fontWeight: 500 }}>
                    {s.lbl}
                  </span>
                </div>
                {i < 2 && (
                  <div style={{ width: "1px", height: "36px", background: "rgba(255,255,255,0.1)" }} />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* ── LEFT: Image frame ── */}
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", position: "relative" }}>
          {/* Tilt-on-hover card */}
          <div
            ref={frameRef}
            style={{
              width: "100%",
              maxWidth: "340px",
              aspectRatio: "3/4",
              borderRadius: "24px",
              background: "linear-gradient(145deg, rgba(200,150,62,0.12), rgba(255,255,255,0.03))",
              border: "1px solid rgba(200,150,62,0.2)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "12px",
              position: "relative",
              overflow: "hidden",
              transition: "transform 0.15s ease",
              cursor: "default",
            }}
          >
            {/* Corner accents */}
            {[
              { top: "12px", right: "12px", borderTop: "2px solid rgba(200,150,62,0.5)", borderRight: "2px solid rgba(200,150,62,0.5)", borderRadius: "0 4px 0 0" },
              { bottom: "12px", left: "12px", borderBottom: "2px solid rgba(200,150,62,0.5)", borderLeft: "2px solid rgba(200,150,62,0.5)", borderRadius: "0 0 0 4px" },
            ].map((s, i) => (
              <div key={i} style={{ position: "absolute", width: "22px", height: "22px", ...s }} />
            ))}

            {/* Placeholder content */}
            <div style={{
              fontSize: "72px", lineHeight: 1,
              filter: "drop-shadow(0 4px 16px rgba(200,150,62,0.4))",
              animation: "float 3s ease-in-out infinite",
            }}>
              🧵
            </div>
            <span style={{
              fontSize: "13px",
              color: "rgba(200,150,62,0.6)",
              fontWeight: 600,
            }}>
              ضع صورتك هنا
            </span>
          </div>

          {/* Floating badge — quality */}
          <div style={{
            position: "absolute",
            bottom: "60px",
            left: "0",
            background: "#C8963E",
            color: "#fff",
            fontWeight: 700,
            fontSize: "12px",
            padding: "9px 15px",
            borderRadius: "10px",
            boxShadow: "0 4px 20px rgba(200,150,62,0.45)",
            animation: "pulse 3s ease-in-out infinite",
            whiteSpace: "nowrap",
            display: "flex",
            alignItems: "center",
            gap: "6px",
          }}>
            <span style={{
              width: "6px", height: "6px", background: "#fff",
              borderRadius: "50%", animation: "blink 1.5s infinite",
              display: "inline-block",
            }} />
            جودة مضمونة 100%
          </div>

          {/* Floating badge — stars */}
          <div style={{
            position: "absolute",
            top: "40px",
            left: "-4px",
            background: "#1B2A4A",
            border: "1px solid rgba(200,150,62,0.3)",
            color: "#C8963E",
            fontSize: "12px",
            fontWeight: 600,
            padding: "7px 13px",
            borderRadius: "8px",
            whiteSpace: "nowrap",
          }}>
            ⭐⭐⭐⭐⭐ &nbsp;تقييم عملائنا
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div style={{
        position: "absolute", bottom: "28px", left: "50%",
        transform: "translateX(-50%)",
        display: "flex", flexDirection: "column", alignItems: "center",
        gap: "8px", color: "rgba(255,255,255,0.35)", fontSize: "11px",
        letterSpacing: "1px",
      }}>
        <span>اكتشف أكثر</span>
        <div style={{
          width: "20px", height: "32px",
          border: "1.5px solid rgba(255,255,255,0.2)",
          borderRadius: "10px", display: "flex",
          alignItems: "flex-start", justifyContent: "center",
          paddingTop: "6px",
        }}>
          <div style={{
            width: "4px", height: "8px",
            background: "rgba(255,255,255,0.4)",
            borderRadius: "2px",
            animation: "float 1.5s ease-in-out infinite",
          }} />
        </div>
      </div>

      {/* Responsive grid fix */}
      <style>{`
        @media (max-width: 768px) {
          .hero-grid { grid-template-columns: 1fr !important; padding: 90px 20px 50px !important; }
        }
      `}</style>
    </section>
  );
}