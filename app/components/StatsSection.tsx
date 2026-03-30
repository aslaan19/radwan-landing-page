"use client";
import { useEffect, useRef, useState } from "react";

const stats = [
  {
    value: 100, suffix: "+", label: "شركة خدمناها", desc: "من مختلف القطاعات والصناعات",
    path: "M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21",
  },
  {
    value: 10, suffix: "+", label: "مدرسة متعاونة", desc: "في مختلف مناطق المملكة",
    path: "M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5",
  },
  {
    value: 15, suffix: "", label: "فرع نشط", desc: "نخدمك أينما كنت",
    path: "M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z",
  },
  {
    value: 5000, suffix: "+", label: "قطعة مُسلَّمة", desc: "بجودة تتحدث عن نفسها",
    path: "M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09Z",
  },
];

function easeOutCubic(t: number) { return 1 - Math.pow(1 - t, 3); }

function AnimatedCounter({ value, suffix, isVisible }: { value: number; suffix: string; isVisible: boolean }) {
  const [display, setDisplay] = useState("0");
  const started = useRef(false);

  useEffect(() => {
    if (!isVisible || started.current) return;
    started.current = true;
    const dur = 1800;
    const startTime = performance.now();
    const fmt = (n: number) => {
      if (value >= 1000) return (Math.round(n / 100) / 10).toFixed(n >= value ? 0 : 1) + "K";
      return Math.round(n).toString();
    };
    const step = (now: number) => {
      const p = Math.min((now - startTime) / dur, 1);
      const v = easeOutCubic(p) * value;
      setDisplay(fmt(v) + (p >= 1 ? suffix : ""));
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [isVisible, value, suffix]);

  return <>{display}</>;
}

export default function StatsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hovered, setHovered] = useState<number | null>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setIsVisible(true); }, { threshold: 0.2 });
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="stats"
      style={{ width: "100%", background: "linear-gradient(160deg,#0a1020,#0F1A2E 40%,#0a1828)", padding: "88px 0 80px", position: "relative", overflow: "hidden" }}
    >
      <style>{`
        @keyframes scanLine   { 0%{top:-2%} 100%{top:102%} }
        @keyframes goldFlow   { 0%{background-position:200% center} 100%{background-position:-200% center} }
        @keyframes dotPulse   { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:.4;transform:scale(.7)} }
        @keyframes spinRing   { from{transform:rotate(0deg)} to{transform:rotate(360deg)} }
        @keyframes cardIn     { from{opacity:0;transform:translateY(40px) scale(.96)} to{opacity:1;transform:none} }
        @keyframes numGlow    { 0%,100%{text-shadow:none} 50%{text-shadow:0 0 40px rgba(200,150,62,.55)} }
        .sc-inner:hover       { transform:translateY(-10px) scale(1.02); border-color:rgba(200,150,62,.55) !important; background:rgba(200,150,62,.07) !important; }
        .sc-inner:hover .sc-bar   { width:68% !important; }
        .sc-inner:hover .sc-icon  { border-color:rgba(200,150,62,.7) !important; background:rgba(200,150,62,.18) !important; }
        .sc-inner:hover .sc-ring  { border-color:rgba(200,150,62,.35) !important; }
        .sc-inner:hover .sc-num   { text-shadow:0 0 40px rgba(200,150,62,.55); }
        .sc-inner:hover .corner-tr{ opacity:1 !important; width:28px !important; height:28px !important; }
        .sc-inner:hover .corner-bl{ opacity:1 !important; width:28px !important; height:28px !important; }
        .cta-gold::before { content:''; position:absolute; top:0; left:-100%; width:100%; height:100%; background:linear-gradient(90deg,transparent,rgba(255,255,255,.25),transparent); transition:left .5s; }
        .cta-gold:hover::before { left:100%; }
        .cta-gold:hover { transform:translateY(-3px) !important; box-shadow:0 14px 40px -8px rgba(200,150,62,.65) !important; }
      `}</style>

      {/* Scan line */}
      <div style={{ position:"absolute", top:"-2%", left:0, right:0, height:3, background:"linear-gradient(90deg,transparent,#C8963E 40%,#ffe066 60%,transparent)", opacity:.55, animation:"scanLine 4s ease-in-out infinite", pointerEvents:"none" }} />

      {/* Grid */}
      <div style={{ position:"absolute", inset:0, pointerEvents:"none", backgroundImage:"linear-gradient(rgba(200,150,62,.04) 1px,transparent 1px),linear-gradient(90deg,rgba(200,150,62,.04) 1px,transparent 1px)", backgroundSize:"52px 52px" }} />

      {/* Radial glow */}
      <div style={{ position:"absolute", inset:0, pointerEvents:"none", background:"radial-gradient(ellipse 70% 60% at 50% 50%,rgba(200,150,62,.09),transparent 70%)" }} />

      {/* Top & bottom borders */}
      <div style={{ position:"absolute", top:0, left:0, right:0, height:1, background:"linear-gradient(90deg,transparent,rgba(200,150,62,.45),transparent)" }} />
      <div style={{ position:"absolute", bottom:0, left:0, right:0, height:1, background:"linear-gradient(90deg,transparent,rgba(200,150,62,.45),transparent)" }} />

      <div style={{ maxWidth:1200, margin:"0 auto", padding:"0 24px", position:"relative", zIndex:2 }}>

        {/* Header */}
        <div style={{ textAlign:"center", marginBottom:56, opacity: isVisible ? 1 : 0, transform: isVisible ? "none" : "translateY(24px)", transition:"all .8s cubic-bezier(.16,1,.3,1)" }}>
          <div style={{ display:"inline-flex", alignItems:"center", gap:8, background:"rgba(200,150,62,.1)", border:"1px solid rgba(200,150,62,.3)", borderRadius:50, padding:"6px 18px", marginBottom:20 }}>
            <span style={{ width:7, height:7, borderRadius:"50%", background:"#C8963E", display:"inline-block", animation:"dotPulse 1.8s ease-in-out infinite" }} />
            <span style={{ color:"#C8963E", fontSize:12, fontWeight:700, letterSpacing:"1px" }}>إنجازاتنا بالأرقام</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-4 text-balance">
            أرقام{" "}
            <span 
              className="relative inline-block"
              style={{
                background: "linear-gradient(135deg, #C8963E, #E8C068, #C8963E)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundSize: "200% 200%",
                animation: "shimmer-text 3s ease-in-out infinite",
              }}
            >
              تتحدث
              <svg 
                className="absolute -bottom-2 left-0 w-full" 
                height="8" 
                viewBox="0 0 100 8"
                preserveAspectRatio="none"
              >
                <path
                  d="M0 7 Q 25 0, 50 4 T 100 3"
                  fill="none"
                  stroke="#C8963E"
                  strokeWidth="2"
                  strokeLinecap="round"
                  style={{
                    strokeDasharray: 200,
                    strokeDashoffset: isVisible ? 0 : 200,
                    transition: "stroke-dashoffset 1.5s ease-out 0.5s",
                  }}
                />
              </svg>
            </span>
            {" "}عن تجربتنا
          </h2>
          <p style={{ color:"rgba(255,255,255,.4)", fontSize:14 }}>سنوات من الخبرة والتميز في خدمة عملائنا الكرام</p>
          <div style={{ width:80, height:2, margin:"16px auto 0", background:"linear-gradient(90deg,transparent,#C8963E,transparent)", borderRadius:2 }} />
        </div>

        {/* Cards */}
        <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(220px,1fr))", gap:20 }}>
          {stats.map((s, i) => (
            <div
              key={s.label}
              style={{
                opacity: isVisible ? 1 : 0,
                animation: isVisible ? `cardIn .7s cubic-bezier(.34,1.3,.64,1) ${i * 130 + 200}ms both` : "none",
              }}
            >
              <div
                className="sc-inner"
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
                style={{
                  position:"relative", borderRadius:20, padding:"36px 24px 30px",
                  background:"rgba(255,255,255,.025)", border:"1px solid rgba(255,255,255,.07)",
                  overflow:"hidden", cursor:"default", textAlign:"center",
                  transition:"transform .35s cubic-bezier(.34,1.3,.64,1), border-color .3s, background .3s",
                }}
              >
                {/* Corner accents */}
                <div className="corner-tr" style={{ position:"absolute", top:10, right:10, width:20, height:20, borderTop:"2px solid #C8963E", borderRight:"2px solid #C8963E", borderRadius:"0 6px 0 0", opacity:0, transition:"all .35s ease" }} />
                <div className="corner-bl" style={{ position:"absolute", bottom:10, left:10, width:20, height:20, borderBottom:"2px solid #C8963E", borderLeft:"2px solid #C8963E", borderRadius:"0 0 0 6px", opacity:0, transition:"all .35s ease" }} />

                {/* Icon */}
                <div className="sc-icon" style={{ width:64, height:64, borderRadius:"50%", margin:"0 auto 20px", border:"1.5px solid rgba(200,150,62,.3)", background:"rgba(200,150,62,.07)", display:"flex", alignItems:"center", justifyContent:"center", position:"relative", transition:"all .3s ease" }}>
                  <svg width="26" height="26" fill="none" stroke="#C8963E" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d={s.path}/>
                  </svg>
                  {/* Spinning dashed ring */}
                  <div className="sc-ring" style={{ position:"absolute", inset:-6, borderRadius:"50%", border:"1px dashed rgba(200,150,62,0)", transition:"border-color .3s", animation:"spinRing 8s linear infinite" }} />
                </div>

                {/* Number */}
                <div className="sc-num" style={{ fontSize:"clamp(44px,6vw,60px)", fontWeight:900, color:"#C8963E", lineHeight:1, marginBottom:8, transition:"text-shadow .3s" }}>
                  <AnimatedCounter value={s.value} suffix={s.suffix} isVisible={isVisible} />
                </div>

                <div style={{ fontSize:15, fontWeight:700, color:"#fff", marginBottom:6 }}>{s.label}</div>
                <div style={{ fontSize:12, color:"rgba(255,255,255,.4)", lineHeight:1.6 }}>{s.desc}</div>

                {/* Bottom bar */}
                <div className="sc-bar" style={{ position:"absolute", bottom:0, left:"50%", transform:"translateX(-50%)", height:2, borderRadius:"2px 2px 0 0", background:"linear-gradient(90deg,transparent,#C8963E,transparent)", width:0, transition:"width .5s ease" }} />
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div style={{ textAlign:"center", marginTop:52, opacity: isVisible ? 1 : 0, transform: isVisible ? "none" : "translateY(20px)", transition:"all .8s cubic-bezier(.16,1,.3,1) .7s" }}>
          <a
            href="#contact"
            className="cta-gold"
            style={{
              display:"inline-flex", alignItems:"center", gap:10,
              background:"linear-gradient(135deg,#C8963E,#daa84e)",
              color:"#0F1A2E", fontWeight:900, fontSize:14,
              padding:"14px 36px", borderRadius:50, textDecoration:"none",
              boxShadow:"0 8px 32px -8px rgba(200,150,62,.5)",
              transition:"transform .25s, box-shadow .25s",
              position:"relative", overflow:"hidden",
            }}
          >
            تواصل معنا الآن
            <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" style={{ transform:"rotate(180deg)" }}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
            </svg>
          </a>
          <p style={{ color:"rgba(255,255,255,.3)", fontSize:12, marginTop:14 }}>
            انضم إلى قائمة عملائنا المميزين
          </p>
        </div>
      </div>
    </section>
  );
}