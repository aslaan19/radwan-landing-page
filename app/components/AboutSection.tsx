"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const highlights = [
  {
    icon: "01",
    label: "جودة استثنائية",
    desc: "نستخدم أفضل الخامات المستوردة والمحلية المعتمدة عالمياً",
  },
  {
    icon: "02",
    label: "خبرة عميقة",
    desc: "أكثر من 10 سنوات من الإبداع والتميز في صناعة الأزياء",
  },
  {
    icon: "03",
    label: "التزام مطلق",
    desc: "نضمن تسليم طلباتك في الموعد المحدد دون أي تأخير",
  },
];

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeHighlight, setActiveHighlight] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveHighlight((prev) => (prev + 1) % highlights.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: (e.clientX - rect.left) / rect.width,
      y: (e.clientY - rect.top) / rect.height,
    });
  };

  return (
    <section
      ref={sectionRef}
      id="about"
      onMouseMove={handleMouseMove}
      className="relative w-full overflow-hidden py-24 md:py-32"
      style={{
        background:
          "linear-gradient(135deg, #0a0f1a 0%, #1B2A4A 50%, #0a0f1a 100%)",
      }}
    >
      {/* Animated Background Grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(rgba(200,150,62,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(200,150,62,0.1) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
          transform: `translate(${mousePosition.x * 10}px, ${mousePosition.y * 10}px)`,
          transition: "transform 0.3s ease-out",
        }}
      />

      {/* Floating Orbs */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute h-[500px] w-[500px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(200,150,62,0.15) 0%, transparent 70%)",
            top: "-10%",
            right: "-10%",
            animation: "floatOrb1 15s ease-in-out infinite",
          }}
        />
        <div
          className="absolute h-[300px] w-[300px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(200,150,62,0.1) 0%, transparent 70%)",
            bottom: "10%",
            left: "5%",
            animation: "floatOrb2 12s ease-in-out infinite",
          }}
        />
      </div>

      <style jsx>{`
        @keyframes floatOrb1 {
          0%,
          100% {
            transform: translate(0, 0) scale(1);
          }
          50% {
            transform: translate(-30px, 30px) scale(1.1);
          }
        }
        @keyframes floatOrb2 {
          0%,
          100% {
            transform: translate(0, 0) scale(1);
          }
          50% {
            transform: translate(20px, -20px) scale(0.9);
          }
        }
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(60px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes slideRight {
          from {
            opacity: 0;
            transform: translateX(-60px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        @keyframes shimmer {
          0% {
            background-position: -200% 0;
          }
          100% {
            background-position: 200% 0;
          }
        }
        @keyframes pulse {
          0%,
          100% {
            box-shadow: 0 0 0 0 rgba(200, 150, 62, 0.4);
          }
          50% {
            box-shadow: 0 0 0 20px rgba(200, 150, 62, 0);
          }
        }
        @keyframes borderGlow {
          0%,
          100% {
            border-color: rgba(200, 150, 62, 0.3);
          }
          50% {
            border-color: rgba(200, 150, 62, 0.6);
          }
        }
        .highlight-card {
          transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .highlight-card:hover {
          transform: translateX(-10px);
        }
        .highlight-card.active {
          background: linear-gradient(
            135deg,
            rgba(200, 150, 62, 0.15) 0%,
            rgba(200, 150, 62, 0.05) 100%
          );
          border-color: rgba(200, 150, 62, 0.5);
        }
        .image-container {
          transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .image-container:hover {
          transform: scale(1.02) rotate(-1deg);
        }
      `}</style>

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col gap-16 px-6 lg:flex-row lg:items-center lg:gap-20">
        {/* Image Side - Creative Composition */}
        <div
          className="relative flex-1"
          style={{
            animation: isVisible ? "slideRight 1s ease-out forwards" : "none",
            opacity: isVisible ? 1 : 0,
          }}
        >
          {/* Main Image Container */}
          <div className="image-container relative">
            {/* Decorative Frame */}
            <div
              className="absolute -left-4 -top-4 h-full w-full rounded-3xl border-2"
              style={{
                borderColor: "rgba(200,150,62,0.3)",
                animation: "borderGlow 3s ease-in-out infinite",
              }}
            />

            {/* Main Image */}
            <div
              className="relative overflow-hidden rounded-3xl"
              style={{
                boxShadow: "0 25px 80px -20px rgba(0,0,0,0.5)",
              }}
            >
              <Image
                src="/images/machine.png"
                alt="ورشة الخياطة"
                width={600}
                height={450}
                className="h-auto w-full object-cover"
                style={{ aspectRatio: "4/3" }}
              />

              {/* Overlay Gradient */}
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(45deg, rgba(27,42,74,0.4) 0%, transparent 60%)",
                }}
              />
            </div>

            {/* Floating Stats Badge */}
            <div
              className="absolute -bottom-6 -right-6 rounded-2xl px-6 py-4"
              style={{
                background: "linear-gradient(135deg, #C8963E 0%, #9a7430 100%)",
                boxShadow: "0 20px 40px -10px rgba(200,150,62,0.5)",
                animation: "pulse 3s ease-in-out infinite",
              }}
            >
              <p
                className="text-4xl font-black text-white"
                style={{ lineHeight: 1 }}
              >
                +10
              </p>
              <p className="mt-1 text-sm font-semibold text-white/80">
                سنوات من التميز
              </p>
            </div>

            {/* Corner Accent */}
            <div
              className="absolute -right-2 -top-2 flex h-16 w-16 items-center justify-center rounded-full"
              style={{
                background: "linear-gradient(135deg, #1B2A4A 0%, #2a3f6a 100%)",
                border: "3px solid rgba(200,150,62,0.5)",
              }}
            >
              <span className="text-2xl">✂️</span>
            </div>
          </div>

          {/* Floating Elements */}
          <div
            className="absolute -left-10 top-1/2 hidden h-20 w-20 items-center justify-center rounded-2xl lg:flex"
            style={{
              background: "rgba(200,150,62,0.1)",
              border: "1px solid rgba(200,150,62,0.3)",
              backdropFilter: "blur(10px)",
              animation: "floatOrb2 8s ease-in-out infinite",
            }}
          >
            <span className="text-3xl">🧵</span>
          </div>
        </div>

        {/* Content Side */}
        <div
          className="flex-1"
          style={{
            animation: isVisible ? "slideUp 1s ease-out 0.3s forwards" : "none",
            opacity: isVisible ? 1 : 0,
          }}
        >
          {/* Badge */}
          <div
            className="mb-6 inline-flex items-center gap-3 rounded-full px-5 py-2"
            style={{
              background: "rgba(200,150,62,0.1)",
              border: "1px solid rgba(200,150,62,0.3)",
            }}
          >
            <span
              className="h-2 w-2 rounded-full"
              style={{
                background: "#C8963E",
                boxShadow: "0 0 10px rgba(200,150,62,0.5)",
              }}
            />
            <span
              className="text-sm font-bold tracking-wider"
              style={{ color: "#C8963E" }}
            >
              من نحن
            </span>
          </div>

          {/* Title with Gradient */}
          <h2
            className="mb-6 text-3xl font-black leading-tight md:text-4xl lg:text-5xl"
            style={{ color: "#ffffff" }}
          >
            نصنع
            <span
              className="relative mx-2"
              style={{
                background: "linear-gradient(90deg, #C8963E, #e8b85e, #C8963E)",
                backgroundSize: "200% auto",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                animation: "shimmer 3s linear infinite",
              }}
            >
              الأناقة
            </span>
            بأيدٍ ماهرة
          </h2>

          {/* Description */}
          <p
            className="mb-10 max-w-lg text-lg leading-relaxed"
            style={{ color: "rgba(255,255,255,0.6)" }}
          >
            محل يونيفورمز هو وجهتك الأولى للحصول على زيٍّ موحّد يجمع بين الأناقة
            والجودة. نقدم خدمات خياطة احترافية للمدارس والشركات والمنشآت الطبية،
            مع الاهتمام بأدق التفاصيل وضمان رضا العملاء في كل مرحلة.
          </p>

          {/* Animated Highlights */}
          <div className="mb-10 flex flex-col gap-4">
            {highlights.map((item, index) => (
              <div
                key={item.label}
                className={`highlight-card flex cursor-pointer items-start gap-5 rounded-2xl border p-5 ${
                  activeHighlight === index ? "active" : ""
                }`}
                style={{
                  borderColor: "rgba(255,255,255,0.1)",
                  background:
                    activeHighlight === index
                      ? "linear-gradient(135deg, rgba(200,150,62,0.15) 0%, rgba(200,150,62,0.05) 100%)"
                      : "rgba(255,255,255,0.02)",
                }}
                onClick={() => setActiveHighlight(index)}
              >
                {/* Number Badge */}
                <div
                  className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl font-black"
                  style={{
                    background:
                      activeHighlight === index
                        ? "linear-gradient(135deg, #C8963E 0%, #9a7430 100%)"
                        : "rgba(200,150,62,0.15)",
                    color: activeHighlight === index ? "#ffffff" : "#C8963E",
                    transition: "all 0.5s ease",
                  }}
                >
                  {item.icon}
                </div>

                <div className="flex-1">
                  <p
                    className="mb-1 text-lg font-bold"
                    style={{ color: "#ffffff" }}
                  >
                    {item.label}
                  </p>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "rgba(255,255,255,0.5)" }}
                  >
                    {item.desc}
                  </p>
                </div>

                {/* Active Indicator */}
                <div
                  className="flex h-8 w-8 items-center justify-center rounded-full transition-all duration-500"
                  style={{
                    background:
                      activeHighlight === index
                        ? "rgba(200,150,62,0.2)"
                        : "transparent",
                    transform:
                      activeHighlight === index ? "scale(1)" : "scale(0.5)",
                    opacity: activeHighlight === index ? 1 : 0,
                  }}
                >
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path
                      d="M6 12L10 8L6 4"
                      stroke="#C8963E"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <a
            href="#contact"
            className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full px-8 py-4 font-bold transition-all duration-300 hover:scale-105"
            style={{
              background: "linear-gradient(135deg, #C8963E 0%, #9a7430 100%)",
              boxShadow: "0 10px 30px -10px rgba(200,150,62,0.5)",
            }}
          >
            <span className="relative z-10 text-white">اكتشف المزيد عنّا</span>
            <svg
              className="relative z-10 transition-transform duration-300 group-hover:-translate-x-1"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M12 4L6 10L12 16"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            {/* Hover Glow Effect */}
            <div
              className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              style={{
                background: "linear-gradient(135deg, #e8b85e 0%, #C8963E 100%)",
              }}
            />
          </a>
        </div>
      </div>
    </section>
  );
}
