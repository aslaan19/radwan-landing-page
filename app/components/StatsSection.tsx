"use client";
import { useEffect, useRef, useState } from "react";

const stats = [
  {
    id: "companies",
    target: 100,
    suffix: "+",
    label: "شركة خدمناها",
    desc: "من مختلف القطاعات والصناعات في المملكة",
    barWidth: 90,
    featured: true,
    icon: (
      <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
        <rect x="10" y="20" width="60" height="50" rx="4" stroke="#C8963E" strokeWidth="2"/>
        <rect x="28" y="34" width="10" height="10" rx="1" fill="#C8963E"/>
        <rect x="42" y="34" width="10" height="10" rx="1" fill="#C8963E"/>
        <rect x="28" y="48" width="10" height="10" rx="1" fill="#C8963E"/>
        <rect x="42" y="48" width="10" height="10" rx="1" fill="#C8963E"/>
        <rect x="32" y="58" width="16" height="12" rx="1" fill="#C8963E"/>
        <line x1="10" y1="28" x2="70" y2="28" stroke="#C8963E" strokeWidth="1.5"/>
        <circle cx="20" cy="24" r="3" fill="#C8963E"/>
        <circle cx="60" cy="24" r="3" fill="#C8963E"/>
      </svg>
    ),
  },
  {
    id: "schools",
    target: 10,
    suffix: "+",
    label: "مدرسة متعاونة",
    desc: "في مختلف مناطق المملكة",
    barWidth: 70,
    featured: false,
    icon: (
      <svg width="72" height="72" viewBox="0 0 72 72" fill="none">
        <path d="M36 8L64 22V34" stroke="#C8963E" strokeWidth="2" strokeLinecap="round"/>
        <path d="M36 8L8 22V34" stroke="#C8963E" strokeWidth="2" strokeLinecap="round"/>
        <rect x="16" y="30" width="40" height="28" rx="2" stroke="#C8963E" strokeWidth="1.5"/>
        <rect x="28" y="42" width="16" height="16" rx="1" fill="#C8963E" fillOpacity="0.3"/>
        <line x1="36" y1="8" x2="36" y2="22" stroke="#C8963E" strokeWidth="1.5"/>
      </svg>
    ),
  },
  {
    id: "branches",
    target: 15,
    suffix: "",
    label: "فرع نشط",
    desc: "نخدمك أينما كنت",
    barWidth: 55,
    featured: false,
    icon: (
      <svg width="72" height="72" viewBox="0 0 72 72" fill="none">
        <circle cx="36" cy="28" r="16" stroke="#C8963E" strokeWidth="1.5"/>
        <circle cx="36" cy="28" r="6" fill="#C8963E" fillOpacity="0.4"/>
        <path d="M36 44C36 44 18 56 36 64C54 56 36 44 36 44Z" stroke="#C8963E" strokeWidth="1.5" fill="none"/>
      </svg>
    ),
  },
  {
    id: "pieces",
    target: 5,
    suffix: "K+",
    label: "قطعة مُسلَّمة",
    desc: "بجودة تتحدث عن نفسها",
    barWidth: 80,
    featured: false,
    icon: (
      <svg width="72" height="72" viewBox="0 0 72 72" fill="none">
        <path d="M36 10 L46 26 L64 30 L52 44 L56 62 L36 54 L16 62 L20 44 L8 30 L26 26 Z" stroke="#C8963E" strokeWidth="1.5" fill="none"/>
        <circle cx="36" cy="36" r="8" fill="#C8963E" fillOpacity="0.3"/>
      </svg>
    ),
  },
];

function AnimatedCounter({ target, suffix, isVisible, delay }: { target: number; suffix: string; isVisible: boolean; delay: number }) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!isVisible) return;
    const timer = setTimeout(() => {
      const dur = 1800, steps = 60;
      let cur = 0;
      const step = target / steps;
      const iv = setInterval(() => {
        cur = Math.min(cur + step, target);
        setCount(Math.floor(cur));
        if (cur >= target) clearInterval(iv);
      }, dur / steps);
      return () => clearInterval(iv);
    }, delay);
    return () => clearTimeout(timer);
  }, [isVisible, target, delay]);
  return <>{count}{suffix}</>;
}

export default function StatsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hovered, setHovered] = useState<string | null>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setIsVisible(true); obs.disconnect(); } },
      { threshold: 0.25 }
    );
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="stats"
      dir="rtl"
      className="relative w-full py-24 overflow-hidden"
      style={{ backgroundColor: "#080f1e" }}
    >
      <style>{`
        @keyframes shimGold { 0%{background-position:200% center} 100%{background-position:-200% center} }
        @keyframes pulseDot { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:.4;transform:scale(.7)} }
        @keyframes barGrow { from{width:0} to{width:var(--bar-w)} }
        .stat-card { transition:all 0.4s cubic-bezier(0.4,0,0.2,1); }
        .stat-card:hover { transform:translateY(-8px)!important; }
        .stat-card::before {
          content:''; position:absolute;
          top:20%; right:0; width:3px; height:0;
          background:linear-gradient(to bottom,transparent,#C8963E,transparent);
          border-radius:2px; transition:height .5s ease;
        }
        .stat-card:hover::before { height:60%; }
        .stat-num { transition:filter .3s; }
        .stat-card:hover .stat-num { filter:drop-shadow(0 0 18px rgba(200,150,62,.55)); }
        .stat-icon { transition:opacity .3s; opacity:.1; }
        .stat-card:hover .stat-icon { opacity:.28; }
        .cta-shine { position:relative; overflow:hidden; }
        .cta-shine::before {
          content:''; position:absolute; top:0; left:-100%; width:100%; height:100%;
          background:linear-gradient(90deg,transparent,rgba(255,255,255,.25),transparent);
          transition:left .5s;
        }
        .cta-shine:hover::before { left:100%; }
      `}</style>

      {/* Background decorations */}
      <div className="pointer-events-none absolute inset-0">
        {/* Top-right gold sweep */}
        <div className="absolute top-0 right-0 w-72 h-72" style={{ background: "linear-gradient(225deg,rgba(200,150,62,0.12) 0%,transparent 65%)" }} />
        {/* Bottom-left gold sweep */}
        <div className="absolute bottom-0 left-0 w-52 h-52" style={{ background: "linear-gradient(45deg,rgba(200,150,62,0.07) 0%,transparent 65%)" }} />
        {/* Horizontal gold lines */}
        <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg,transparent,rgba(200,150,62,0.4),transparent)" }} />
        <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg,transparent,rgba(200,150,62,0.4),transparent)" }} />
        {/* Big watermark number */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 font-black leading-none select-none whitespace-nowrap"
          style={{ fontSize: 320, color: "rgba(200,150,62,0.022)", letterSpacing: -20, lineHeight: 1 }}>
          10+
        </div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        {/* Header */}
        <div
          className="text-center mb-14"
          style={{ opacity: isVisible ? 1 : 0, transform: isVisible ? "none" : "translateY(30px)", transition: "all .8s cubic-bezier(.16,1,.3,1)" }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border mb-5"
            style={{ borderColor: "rgba(200,150,62,0.25)", background: "rgba(200,150,62,0.1)" }}>
            <span className="w-2 h-2 rounded-full bg-[#C8963E]" style={{ animation: "pulseDot 1.6s ease-in-out infinite" }} />
            <span className="text-[#C8963E] text-xs font-bold tracking-wider">إنجازاتنا بالأرقام</span>
          </div>
          <h2 className="font-black text-white mb-3 leading-tight" style={{ fontSize: "clamp(26px,4vw,46px)" }}>
            أرقام{" "}
            <span style={{
              background: "linear-gradient(90deg,#C8963E,#f4d03f,#C8963E)",
              backgroundSize: "200% auto",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
              animation: "shimGold 2.5s linear infinite",
            }}>
              تتحدث
            </span>
            {" "}عن تجربتنا
          </h2>
          <p className="text-sm font-normal" style={{ color: "rgba(255,255,255,0.4)" }}>
            سنوات من الخبرة والتميز في خدمة عملائنا الكرام
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-4">
          {stats.map((stat, i) => (
            <div
              key={stat.id}
              className="stat-card relative overflow-hidden rounded-2xl p-8 cursor-default"
              style={{
                background: stat.featured
                  ? "linear-gradient(135deg,rgba(200,150,62,0.18),rgba(200,150,62,0.04))"
                  : hovered === stat.id
                  ? "rgba(200,150,62,0.06)"
                  : "rgba(255,255,255,0.025)",
                border: `1px solid ${stat.featured || hovered === stat.id ? "rgba(200,150,62,0.35)" : "rgba(255,255,255,0.06)"}`,
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "none" : "translateY(40px) scale(0.96)",
                transition: `opacity .7s ease ${i * 0.12}s, transform .7s cubic-bezier(.16,1,.3,1) ${i * 0.12}s, background .4s, border-color .4s`,
              }}
              onMouseEnter={() => setHovered(stat.id)}
              onMouseLeave={() => setHovered(null)}
            >
              {/* Geometric icon watermark */}
              <div className="stat-icon absolute top-5 left-5">
                {stat.icon}
              </div>

              {/* Counter */}
              <div
                className="stat-num font-black leading-none mb-2"
                style={{
                  fontSize: "clamp(52px,7vw,78px)",
                  letterSpacing: -2,
                  background: "linear-gradient(135deg,#C8963E,#f4d03f)",
                  WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
                }}
              >
                <AnimatedCounter target={stat.target} suffix={stat.suffix} isVisible={isVisible} delay={i * 150} />
              </div>

              <p className="font-black text-white text-lg mb-1">{stat.label}</p>
              <p className="text-xs font-normal leading-relaxed" style={{ color: "rgba(255,255,255,0.38)" }}>{stat.desc}</p>

              {/* Progress bar */}
              <div className="mt-5 h-[3px] rounded-full overflow-hidden" style={{ background: "rgba(255,255,255,0.07)" }}>
                <div
                  className="h-full rounded-full"
                  style={{
                    background: "linear-gradient(90deg,#C8963E,#f4d03f)",
                    width: isVisible ? `${stat.barWidth}%` : "0%",
                    transition: `width 1.8s cubic-bezier(0.4,0,0.2,1) ${0.4 + i * 0.1}s`,
                  }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div
          className="mt-14 text-center flex items-center justify-center gap-4 flex-wrap"
          style={{ opacity: isVisible ? 1 : 0, transform: isVisible ? "none" : "translateY(20px)", transition: "all .8s ease .9s" }}
        >
          <a
            href="#contact"
            className="cta-shine inline-flex items-center gap-2 font-black rounded-full"
            style={{
              background: "#C8963E", color: "#0a0f1a",
              fontSize: 14, padding: "14px 32px",
              boxShadow: "0 8px 32px rgba(200,150,62,0.3)",
              textDecoration: "none", transition: "all .3s",
            }}
          >
            انضم إلى عملائنا
            <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M7 17l9.5-9.5M17 17V7H7"/>
            </svg>
          </a>
          <a
            href="#contact"
            className="inline-flex items-center font-semibold rounded-full"
            style={{
              color: "rgba(255,255,255,0.55)", fontSize: 13,
              border: "1px solid rgba(255,255,255,0.12)",
              padding: "13px 28px", textDecoration: "none",
              transition: "all .3s",
            }}
          >
            تواصل معنا
          </a>
        </div>
      </div>
    </section>
  );
}