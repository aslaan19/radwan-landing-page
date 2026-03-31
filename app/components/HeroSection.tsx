"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function HeroSection() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeWord, setActiveWord] = useState(0);
  const containerRef = useRef<HTMLElement>(null);
  const words = ["بإتقان", "باحتراف", "بإبداع"];

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsLoaded(true);
    const interval = setInterval(() => {
      setActiveWord((prev) => (prev + 1) % words.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      setMousePos({
        x: (e.clientX - rect.left) / rect.width,
        y: (e.clientY - rect.top) / rect.height,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      ref={containerRef}
      id="home"
      className="relative w-full min-h-screen overflow-hidden flex items-center"
      style={{
        direction: "rtl",
        background:
          "linear-gradient(135deg, #24324a 0%, #3a4f7a 50%, #4a6fa5 100%)",
      }}
    >
      {/* Animated gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute w-[800px] h-[800px] rounded-full opacity-30 blur-3xl"
          style={{
            background:
              "radial-gradient(circle, rgba(200,150,62,0.4) 0%, transparent 70%)",
            top: "-200px",
            right: "-200px",
            transform: `translate(${mousePos.x * -30}px, ${mousePos.y * -30}px)`,
            transition: "transform 0.3s ease-out",
          }}
        />
        <div
          className="absolute w-[600px] h-[600px] rounded-full opacity-20 blur-3xl"
          style={{
            background:
              "radial-gradient(circle, rgba(200,150,62,0.5) 0%, transparent 70%)",
            bottom: "-150px",
            left: "-100px",
            transform: `translate(${mousePos.x * 20}px, ${mousePos.y * 20}px)`,
            transition: "transform 0.3s ease-out",
          }}
        />
        <div
          className="absolute w-[400px] h-[400px] rounded-full opacity-15 blur-2xl"
          style={{
            background:
              "radial-gradient(circle, rgba(255,255,255,0.2) 0%, transparent 70%)",
            top: "30%",
            left: "20%",
            transform: `translate(${mousePos.x * 40}px, ${mousePos.y * 40}px)`,
            transition: "transform 0.3s ease-out",
          }}
        />
      </div>

      {/* Animated grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(200,150,62,1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(200,150,62,1) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
          transform: `translate(${mousePos.x * 10}px, ${mousePos.y * 10}px)`,
          transition: "transform 0.5s ease-out",
        }}
      />

      {/* Floating geometric shapes */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute"
            style={{
              width: `${20 + i * 15}px`,
              height: `${20 + i * 15}px`,
              border: "1px solid rgba(200,150,62,0.2)",
              borderRadius: i % 2 === 0 ? "50%" : "4px",
              top: `${15 + i * 15}%`,
              left: `${10 + i * 12}%`,
              animation: `floatShape ${4 + i}s ease-in-out infinite`,
              animationDelay: `${i * 0.5}s`,
              transform: `rotate(${i * 15}deg)`,
            }}
          />
        ))}
        {[...Array(4)].map((_, i) => (
          <div
            key={`right-${i}`}
            className="absolute"
            style={{
              width: `${15 + i * 10}px`,
              height: `${15 + i * 10}px`,
              background: "rgba(200,150,62,0.1)",
              borderRadius: i % 2 === 0 ? "2px" : "50%",
              top: `${20 + i * 20}%`,
              right: `${5 + i * 8}%`,
              animation: `floatShapeReverse ${5 + i}s ease-in-out infinite`,
              animationDelay: `${i * 0.3}s`,
            }}
          />
        ))}
      </div>

      {/* Animated lines */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20">
        <defs>
          <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="transparent" />
            <stop offset="50%" stopColor="#C8963E" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
        </defs>
        <line
          x1="0"
          y1="20%"
          x2="100%"
          y2="20%"
          stroke="url(#lineGrad)"
          strokeWidth="1"
          className="animate-pulse"
        />
        <line
          x1="0"
          y1="80%"
          x2="100%"
          y2="80%"
          stroke="url(#lineGrad)"
          strokeWidth="1"
          className="animate-pulse"
          style={{ animationDelay: "1s" }}
        />
      </svg>

      <style>{`
        @keyframes floatShape {
          0%, 100% { transform: translateY(0) rotate(0deg); opacity: 0.3; }
          50% { transform: translateY(-20px) rotate(180deg); opacity: 0.6; }
        }
        @keyframes floatShapeReverse {
          0%, 100% { transform: translateY(0) rotate(0deg); opacity: 0.2; }
          50% { transform: translateY(20px) rotate(-90deg); opacity: 0.5; }
        }
        @keyframes slideUp {
          from { transform: translateY(60px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        @keyframes slideRight {
          from { transform: translateX(-60px); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        @keyframes scaleIn {
          from { transform: scale(0.8); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
        @keyframes shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        @keyframes borderGlow {
          0%, 100% { box-shadow: 0 0 20px rgba(200,150,62,0.3), inset 0 0 20px rgba(200,150,62,0.1); }
          50% { box-shadow: 0 0 40px rgba(200,150,62,0.5), inset 0 0 30px rgba(200,150,62,0.2); }
        }
        @keyframes rotateGlow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes textReveal {
          0% { clip-path: inset(0 100% 0 0); }
          100% { clip-path: inset(0 0 0 0); }
        }
        @keyframes wordFade {
          0%, 20% { opacity: 0; transform: translateY(20px) rotateX(-90deg); }
          30%, 70% { opacity: 1; transform: translateY(0) rotateX(0deg); }
          80%, 100% { opacity: 0; transform: translateY(-20px) rotateX(90deg); }
        }
        @keyframes pulse3d {
          0%, 100% { transform: perspective(1000px) rotateY(-5deg) rotateX(5deg) scale(1); }
          50% { transform: perspective(1000px) rotateY(5deg) rotateX(-5deg) scale(1.02); }
        }
        @keyframes glowPulse {
          0%, 100% { filter: drop-shadow(0 0 10px rgba(200,150,62,0.5)); }
          50% { filter: drop-shadow(0 0 25px rgba(200,150,62,0.8)); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }
        @keyframes drawLine {
          from { stroke-dashoffset: 1000; }
          to { stroke-dashoffset: 0; }
        }
        
        .shimmer-text {
          background: linear-gradient(90deg, #C8963E 0%, #f4d03f 25%, #C8963E 50%, #f4d03f 75%, #C8963E 100%);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: shimmer 3s linear infinite;
        }
        .hero-image-container {
          animation: pulse3d 6s ease-in-out infinite;
        }
        .glow-border {
          animation: borderGlow 3s ease-in-out infinite;
        }
        .stat-card:hover {
          transform: translateY(-5px) scale(1.05);
          box-shadow: 0 20px 40px rgba(200,150,62,0.3);
        }
        .btn-primary {
          position: relative;
          overflow: hidden;
        }
        .btn-primary::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
          transition: left 0.5s;
        }
        .btn-primary:hover::before {
          left: 100%;
        }
        .btn-primary:hover {
          transform: translateY(-3px);
          box-shadow: 0 15px 40px rgba(200,150,62,0.5);
        }
        .btn-secondary:hover {
          background: rgba(255,255,255,0.1);
          border-color: rgba(200,150,62,0.8);
          transform: translateY(-3px);
        }
      `}</style>

      {/* Main content */}
      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-12 py-24 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Right side - Content */}
          <div
            className="flex flex-col gap-6"
            style={{
              animation: isLoaded ? "slideRight 1s ease-out forwards" : "none",
              opacity: isLoaded ? 1 : 0,
            }}
          >
            {/* Premium badge */}
            <div
              className="inline-flex items-center gap-3 self-start"
              style={{
                animation: isLoaded
                  ? "slideUp 0.8s ease-out 0.2s both"
                  : "none",
              }}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-[#C8963E] rounded-full blur-md opacity-50" />
                <div className="relative flex items-center gap-2 bg-gradient-to-r from-[#C8963E]/20 to-[#C8963E]/5 border border-[#C8963E]/40 text-[#C8963E] font-bold text-sm px-5 py-2.5 rounded-full backdrop-blur-sm">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#C8963E] opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[#C8963E]" />
                  </span>
                  <span className="text-xl text-[#1b1c13]">
                    {" "}
                    شركة خياط نسيج النهضة للخياطة
                  </span>
                </div>
              </div>
            </div>

            {/* Main headline */}
            <div
              style={{
                animation: isLoaded
                  ? "slideUp 0.8s ease-out 0.4s both"
                  : "none",
                opacity: isLoaded ? 1 : 0,
              }}
            >
              <style>{`
    @keyframes letterDrop {
      from { transform: translateY(-40px) rotate(-8deg); opacity: 0; }
      to   { transform: translateY(0) rotate(0deg); opacity: 1; }
    }
    @keyframes fillReveal {
      from { clip-path: inset(0 100% 0 0); }
      to   { clip-path: inset(0 0% 0 0); }
    }
    @keyframes goldShimmer {
      0%   { background-position: 250% center; }
      100% { background-position: -250% center; }
    }
    @keyframes fadeSlideRight {
      from { opacity: 0; transform: translateX(-20px); }
      to   { opacity: 1; transform: translateX(0); }
    }
    @keyframes cursorBlink {
      0%,100% { opacity: 1; } 50% { opacity: 0; }
    }
    @keyframes slotUp {
      from { transform: translateY(0); opacity: 1; }
      to   { transform: translateY(-1.2em); opacity: 0; }
    }
    @keyframes slotDown {
      from { transform: translateY(1.2em); opacity: 0; }
      to   { transform: translateY(0); opacity: 1; }
    }
    .nasna-letter { display: inline-block; animation: letterDrop 0.6s cubic-bezier(0.34,1.56,0.64,1) both; }
    .nasna-letter:nth-child(1){animation-delay:.05s}
    .nasna-letter:nth-child(2){animation-delay:.1s}
    .nasna-letter:nth-child(3){animation-delay:.15s}
    .nasna-letter:nth-child(4){animation-delay:.2s}
    .zayak-word {
      position: relative; display: inline-block;
      color: transparent;
      -webkit-text-stroke: 1.5px rgba(200,150,62,0.5);
    }
    .zayak-word::after {
      content: attr(data-text); position: absolute; inset: 0;
      color: #ffffff; -webkit-text-stroke: 0;
      clip-path: inset(0 100% 0 0);
      animation: fillReveal 1s ease-out 0.5s both;
    }
    .gold-shimmer {
      background: linear-gradient(90deg,#C8963E,#f4d03f,#ffe066,#f4d03f,#C8963E);
      background-size: 250% auto;
      -webkit-background-clip: text; -webkit-text-fill-color: transparent;
      background-clip: text;
      animation: goldShimmer 2.5s linear infinite;
    }
    .laa-word {
      animation: fadeSlideRight 0.7s ease-out 0.9s both; opacity: 0;
    }
    .laa-word::after {
      content: '|'; color: #C8963E; margin-right: 4px;
      animation: cursorBlink 0.9s step-end infinite 1.6s; opacity: 0;
    }
    .slot-exit { animation: slotUp 0.35s cubic-bezier(0.4,0,1,1) forwards !important; }
    .slot-enter { animation: slotDown 0.45s cubic-bezier(0,0,0.2,1) forwards !important; }
  `}</style>

              {/* Line 1: نصنع زيّك الموحّد */}
              <h1
                style={{
                  fontSize: "clamp(30px,5vw,56px)",
                  fontWeight: 900,
                  lineHeight: 1.2,
                  display: "flex",
                  alignItems: "center",
                  gap: 14,
                  flexWrap: "wrap",
                  marginBottom: 14,
                }}
              >
                {/* نصنع — letter by letter bounce */}

                {/* زيّك الموحّد — stroke outline then fill sweeps in */}
                <span
                  className="zayak-word"
                  data-text="نصنع زيّك الموحّد"
                  style={{ fontSize: "clamp(30px,5vw,56px)", fontWeight: 900 }}
                >
                  نصنع زيّك الموحّد
                </span>
              </h1>

              {/* Line 2: [cycling word] لا مثيل لها */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 14,
                  flexWrap: "wrap",
                  marginTop: 6,
                  minHeight: "1.3em",
                  fontSize: "clamp(30px,5vw,56px)",
                  fontWeight: 900,
                }}
              >
                {/* Slot machine word */}
                <span
                  style={{
                    display: "inline-block",
                    overflow: "hidden",
                    height: "1.4em",
                    verticalAlign: "top",
                    minWidth: 130,
                    paddingBottom: "4px",
                  }}
                >
                  <span
                    id="headline-slot"
                    className="gold-shimmer"
                    style={{
                      display: "inline-block",
                      fontSize: "clamp(28px,6vw,56px)", // عدلت للموبايل كمان
                      fontWeight: 900,
                      lineHeight: "1.4em",
                    }}
                  >
                    {words[activeWord]}
                  </span>
                </span>

                <span className="laa-word" style={{ color: "#ffffff" }}>
                  لا مثيل له!!
                </span>
              </div>

              {/* Animated gold underline */}
              <div
                style={{
                  height: 3,
                  borderRadius: 2,
                  marginTop: 14,
                  background: "linear-gradient(90deg,#C8963E,#f4d03f,#C8963E)",
                  backgroundSize: "200% 100%",
                  animation:
                    "goldShimmer 2s linear infinite, lineGrow 1.2s ease-out 1.2s both",
                  width: isLoaded ? 220 : 0,
                  transition: "width 1.2s ease-out 1.2s",
                }}
              />
            </div>

            {/* Animated underline */}
            <div
              className="h-1 rounded-full overflow-hidden w-48"
              style={{
                background: "rgba(200,150,62,0.2)",
                animation: isLoaded
                  ? "slideUp 0.8s ease-out 0.5s both"
                  : "none",
              }}
            >
              <div
                className="h-full rounded-full"
                style={{
                  background:
                    "linear-gradient(90deg, #C8963E, #f4d03f, #C8963E)",
                  backgroundSize: "200% 100%",
                  animation: "shimmer 2s linear infinite",
                  width: isLoaded ? "100%" : "0%",
                  transition: "width 1s ease-out 0.8s",
                }}
              />
            </div>

            {/* Description */}
            <p
              className="text-base md:text-lg text-white/60 leading-relaxed max-w-lg"
              style={{
                animation: isLoaded
                  ? "slideUp 0.8s ease-out 0.6s both"
                  : "none",
              }}
            >
              من المدارس إلى الشركات والمنشآت الطبية — نقدّم يونيفورمات راقية
              تعكس هوية مؤسستك وتُبهر من يراها بجودة استثنائية وتصاميم عصرية.
            </p>

            {/* CTA Buttons */}
            <div
              className="flex flex-wrap gap-4 mt-2"
              style={{
                animation: isLoaded
                  ? "slideUp 0.8s ease-out 0.7s both"
                  : "none",
              }}
            >
              <a
                href="#contact"
                className="btn-primary relative bg-gradient-to-r from-[#C8963E] to-[#daa84e] text-white font-bold text-base px-8 py-4 rounded-full transition-all duration-300 shadow-lg shadow-[#C8963E]/30"
              >
                <span className="relative z-10 flex items-center gap-2">
                  تواصل معنا الآن
                  <svg
                    className="w-5 h-5 rotate-180"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </span>
              </a>
              <a
                href="#products"
                className="btn-secondary bg-transparent text-white font-semibold text-base px-8 py-4 rounded-full border-2 border-white/20 transition-all duration-300 backdrop-blur-sm hover:text-[#C8963E]"
              >
                استعرض المنتجات
              </a>
            </div>

            {/* Stats */}
            <div
              className="flex flex-wrap gap-4 mt-6 pt-6 border-t border-white/10"
              style={{
                animation: isLoaded
                  ? "slideUp 0.8s ease-out 0.8s both"
                  : "none",
              }}
            >
              {[
                { num: "+100", label: "شركة خدمناها", icon: "🏢" },
                { num: "+10", label: "سنوات خبرة", icon: "⏳" },
                { num: "15", label: "فرع نشط", icon: "📍" },
              ].map((stat, i) => (
                <div
                  key={stat.num}
                  className="stat-card flex items-center gap-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl px-5 py-3 transition-all duration-300 cursor-default"
                >
                  <span className="text-2xl">{stat.icon}</span>
                  <div className="flex flex-col">
                    <span className="text-2xl font-black text-[#C8963E]">
                      {stat.num}
                    </span>
                    <span className="text-xs text-white/50 font-medium">
                      {stat.label}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Left side - Image showcase */}
          <div
            className="relative flex justify-center items-center"
            style={{
              animation: isLoaded ? "scaleIn 1s ease-out 0.3s both" : "none",
            }}
          >
            {/* Rotating glow ring */}
            <div
              className="absolute w-[380px] h-[380px] md:w-[450px] md:h-[450px] rounded-full"
              style={{
                background:
                  "conic-gradient(from 0deg, transparent, rgba(200,150,62,0.3), transparent, rgba(200,150,62,0.3), transparent)",
                animation: "rotateGlow 8s linear infinite",
              }}
            />

            {/* Main image container */}
            <div className="hero-image-container relative">
              {/* Outer glow */}
              <div className="absolute -inset-4 bg-gradient-to-r from-[#C8963E]/30 to-[#C8963E]/10 rounded-3xl blur-2xl" />

              {/* Image frame */}
              <div className="glow-border relative w-[300px] h-[400px] md:w-[350px] md:h-[470px] rounded-3xl overflow-hidden border-2 border-[#C8963E]/40 bg-gradient-to-br from-[#1B2A4A] to-[#0f172a]">
                {/* Corner decorations */}
                <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-[#C8963E]/60 rounded-tr-lg" />
                <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-[#C8963E]/60 rounded-tl-lg" />
                <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-[#C8963E]/60 rounded-br-lg" />
                <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-[#C8963E]/60 rounded-bl-lg" />

                {/* Main image */}
                <Image
                  src="/images/hero.png"
                  alt="Professional uniform tailoring"
                  fill
                  className="object-cover"
                  priority
                />

                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1B2A4A]/80 via-transparent to-transparent" />

                {/* Bottom text overlay */}
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="flex items-center gap-2 text-white/80 text-sm font-medium">
                    <div className="w-8 h-[2px] bg-[#C8963E]" />
                    صناعة يدوية متقنة
                  </div>
                </div>
              </div>
            </div>

            {/* Floating badges */}
            <div
              className="absolute -bottom-2 -left-4 md:left-0 z-20"
              style={{ animation: "float 3s ease-in-out infinite" }}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-[#C8963E] rounded-2xl blur-lg opacity-50" />
                <div className="relative bg-gradient-to-r from-[#C8963E] to-[#daa84e] text-white font-bold text-sm px-5 py-3 rounded-2xl shadow-xl flex items-center gap-2">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-white" />
                  </span>
                  جودة مضمونة 100%
                </div>
              </div>
            </div>

            <div
              className="absolute -top-2 -left-4 md:left-4 z-20"
              style={{ animation: "float 3s ease-in-out infinite 0.5s" }}
            >
              <div className="bg-[#1B2A4A]/90 backdrop-blur-sm border border-[#C8963E]/30 text-white font-semibold text-sm px-4 py-2.5 rounded-xl shadow-lg">
                <div className="flex items-center gap-1 text-[#f4d03f]">
                  {"★".repeat(5)}
                </div>
                <span className="text-white/70 text-xs">تقييم عملائنا</span>
              </div>
            </div>

            {/* Secondary floating image */}
            <div
              className="absolute -bottom-8 -right-4 md:-right-8 w-24 h-24 md:w-32 md:h-32 rounded-2xl overflow-hidden border-2 border-[#C8963E]/30 shadow-2xl z-10"
              style={{
                animation: "float 4s ease-in-out infinite 1s",
              }}
            >
              <Image
                src="/images/idk.png"
                alt="Premium fabric detail"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1B2A4A]/60 to-transparent" />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3">
        <span className="text-white/40 text-xs tracking-widest uppercase">
          اكتشف أكثر
        </span>
        <div className="relative w-6 h-10 border-2 border-white/20 rounded-full flex justify-center">
          <div
            className="absolute top-2 w-1.5 h-3 bg-[#C8963E] rounded-full"
            style={{ animation: "float 1.5s ease-in-out infinite" }}
          />
        </div>
      </div>
    </section>
  );
}
