"use client";
import { useEffect, useRef, useState, useCallback } from "react";
import Image from "next/image";

const products = [
  {
    id: 1,
    name: "زي مدرسي فاخر",
    category: "المدارس",
    image: "/images/sample.png",
    description: "تصميم عصري يجمع بين الأناقة والراحة للطلاب",
    features: ["قماش مقاوم للتجاعيد", "ألوان ثابتة", "راحة طوال اليوم"],
  },
  {
    id: 2,
    name: "ماريول بناتي أنيق",
    category: "المدارس",
    image: "/images/sample2.png",
    description: "تصميم عصري يجمع بين الأناقة والراحة للطلاب",
    features: ["مضاد للبكتيريا", "سهل الغسيل", "عصري"],
  },
  {
    id: 3,
    name: "زي فندقي راقي",
    category: "الفنادق",
    image: "/images/sample3.png",
    description: "أناقة تليق بضيافتكم المميزة",
    features: ["تصميم أنيق", "مريح للعمل", "مظهر احترافي"],
  },
];

export default function ProductsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0.5, y: 0.5 });
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const goToNext = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex((prev) => (prev + 1) % products.length);
    setTimeout(() => setIsAnimating(false), 800);
  }, [isAnimating]);

  const goToPrev = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex((prev) => (prev - 1 + products.length) % products.length);
    setTimeout(() => setIsAnimating(false), 800);
  }, [isAnimating]);

  const goToIndex = (index: number) => {
    if (isAnimating || index === activeIndex) return;
    setIsAnimating(true);
    setActiveIndex(index);
    setTimeout(() => setIsAnimating(false), 800);
  };

  // Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Auto-rotate
  useEffect(() => {
    if (isPaused) {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
      return;
    }

    intervalRef.current = setInterval(goToNext, 5000);
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isPaused, goToNext]);

  // Mouse tracking
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    setMousePosition({
      x: (e.clientX - rect.left) / rect.width,
      y: (e.clientY - rect.top) / rect.height,
    });
  };

  const activeProduct = products[activeIndex];

  return (
    <section
      ref={sectionRef}
      id="products"
      className="relative w-full overflow-hidden py-24 md:py-32"
      style={{
        background:
          "linear-gradient(135deg, #F0F8FF 0%, #C8E6FA 50%, #7EC8E3 100%)",
        direction: "rtl",
      }}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onMouseMove={handleMouseMove}
    >
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(60px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
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
        @keyframes float {
          0%,
          100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(5deg);
          }
        }
        @keyframes floatReverse {
          0%,
          100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(20px) rotate(-5deg);
          }
        }
        @keyframes pulse-ring {
          0% {
            transform: scale(1);
            opacity: 0.8;
          }
          100% {
            transform: scale(2);
            opacity: 0;
          }
        }
        @keyframes glow {
          0%,
          100% {
            box-shadow:
              0 0 30px rgba(200, 150, 62, 0.2),
              0 20px 60px rgba(27, 42, 74, 0.15);
          }
          50% {
            box-shadow:
              0 0 50px rgba(200, 150, 62, 0.4),
              0 30px 80px rgba(27, 42, 74, 0.25);
          }
        }
        @keyframes borderDance {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        @keyframes morphShape {
          0%,
          100% {
            border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
          }
          25% {
            border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%;
          }
          50% {
            border-radius: 50% 60% 30% 60% / 30% 60% 70% 40%;
          }
          75% {
            border-radius: 60% 40% 60% 30% / 70% 30% 50% 60%;
          }
        }
        @keyframes rotateGlow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-100px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(100px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes revealText {
          from {
            clip-path: inset(0 100% 0 0);
          }
          to {
            clip-path: inset(0 0 0 0);
          }
        }
        @keyframes bounceIn {
          0% {
            opacity: 0;
            transform: scale(0.3);
          }
          50% {
            transform: scale(1.05);
          }
          70% {
            transform: scale(0.9);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }
        .card-3d {
          transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
          transform-style: preserve-3d;
        }
        .card-3d:hover {
          transform: translateY(-10px) rotateX(5deg);
        }
        .nav-btn {
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .nav-btn:hover {
          transform: scale(1.15);
          background: linear-gradient(135deg, #c8963e 0%, #e8b85e 100%);
        }
        .nav-btn:hover svg {
          stroke: white;
        }
        .nav-btn:active {
          transform: scale(0.95);
        }
        .dot-indicator {
          transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .dot-indicator.active {
          width: 40px;
          background: linear-gradient(90deg, #c8963e, #e8b85e, #c8963e);
          background-size: 200% 100%;
          animation: shimmer 2s linear infinite;
        }
        .feature-tag {
          transition: all 0.3s ease;
        }
        .feature-tag:hover {
          transform: translateY(-2px);
          background: rgba(200, 150, 62, 0.15);
        }
        .product-card {
          transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .product-card.active {
          animation: glow 3s ease-in-out infinite;
        }
        .morph-blob {
          animation: morphShape 15s ease-in-out infinite;
        }
      `}</style>

      {/* Dynamic Background Elements */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Morphing blobs */}
        <div
          className="morph-blob absolute h-[600px] w-[600px] opacity-[0.03]"
          style={{
            background: "linear-gradient(135deg, #C8963E 0%, #1B2A4A 100%)",
            top: "-10%",
            right: "-10%",
            transform: `translate(${mousePosition.x * -30}px, ${mousePosition.y * -30}px)`,
            transition: "transform 0.5s ease-out",
          }}
        />
        <div
          className="morph-blob absolute h-[400px] w-[400px] opacity-[0.02]"
          style={{
            background: "linear-gradient(135deg, #1B2A4A 0%, #C8963E 100%)",
            bottom: "5%",
            left: "-5%",
            animationDelay: "-5s",
            transform: `translate(${mousePosition.x * 20}px, ${mousePosition.y * 20}px)`,
            transition: "transform 0.5s ease-out",
          }}
        />

        {/* Floating particles */}
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full"
            style={{
              width: `${4 + (i % 4) * 3}px`,
              height: `${4 + (i % 4) * 3}px`,
              background:
                i % 2 === 0 ? "rgba(200,150,62,0.4)" : "rgba(27,42,74,0.3)",
              top: `${10 + ((i * 7) % 80)}%`,
              left: `${5 + ((i * 11) % 90)}%`,
              animation:
                i % 2 === 0
                  ? `float ${6 + i}s ease-in-out infinite`
                  : `floatReverse ${7 + i}s ease-in-out infinite`,
              animationDelay: `${i * 0.3}s`,
            }}
          />
        ))}

        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `
              radial-gradient(circle at 25px 25px, rgba(27,42,74,0.3) 2px, transparent 0)
            `,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* Header */}
        <div
          className="mb-20 text-center"
          style={{
            animation: isVisible ? "fadeInUp 0.8s ease-out forwards" : "none",
            opacity: isVisible ? 1 : 0,
          }}
        >
          {/* Badge */}
          <div
            className="mb-6 inline-flex items-center gap-3 rounded-full px-6 py-3"
            style={{
              background:
                "linear-gradient(135deg, rgba(27,42,74,0.05) 0%, rgba(200,150,62,0.1) 100%)",
              border: "1px solid rgba(27,42,74,0.1)",
              boxShadow: "0 4px 20px rgba(27,42,74,0.05)",
            }}
          >
            <div className="relative">
              <span
                className="block h-2.5 w-2.5 rounded-full"
                style={{
                  background:
                    "linear-gradient(135deg, #C8963E 0%, #e8b85e 100%)",
                }}
              />
              <span
                className="absolute inset-0 h-2.5 w-2.5 rounded-full"
                style={{
                  background: "#C8963E",
                  animation: "pulse-ring 2s ease-out infinite",
                }}
              />
            </div>
            <span
              className="text-sm font-bold tracking-wider"
              style={{ color: "#1B2A4A" }}
            >
              تشكيلة حصرية
            </span>
          </div>

          <h2
            className="mb-6 text-4xl font-black leading-tight md:text-5xl lg:text-6xl"
            style={{ color: "#1B2A4A" }}
          >
            منتجاتنا
            <span
              className="relative mx-3 inline-block"
              style={{
                background:
                  "linear-gradient(90deg, #C8963E, #e8b85e, #f4d03f, #e8b85e, #C8963E)",
                backgroundSize: "200% auto",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                animation: "shimmer 3s linear infinite",
              }}
            >
              المميزة
            </span>
          </h2>

          <p
            className="mx-auto max-w-xl font-bold text-lg leading-relaxed md:text-xl "
            style={{ color: "rgba(27,42,74,0.6)" }}
          >
            نفخر بتقديم أرقى أنواع الأزياء الموحدة المصنعة بأيدٍ ماهرة وخامات
            فاخرة
          </p>
        </div>

        {/* Main Product Showcase */}
        <div className="relative mb-16">
          {/* Large Featured Card */}
          <div
            className="mx-auto max-w-5xl"
            style={{
              animation: isVisible
                ? "scaleIn 1s ease-out 0.3s forwards"
                : "none",
              opacity: isVisible ? 1 : 0,
            }}
          >
            <div
              className="product-card active relative overflow-hidden rounded-[2rem]"
              style={{
                background: "linear-gradient(135deg, #ffffff 0%, #f8f9fc 100%)",
                border: "1px solid rgba(27,42,74,0.1)",
              }}
            >
              {/* Animated border */}
              <div
                className="absolute inset-0 rounded-[2rem] p-[2px]"
                style={{
                  background:
                    "linear-gradient(90deg, transparent, rgba(200,150,62,0.5), transparent)",
                  backgroundSize: "200% 100%",
                  animation: "borderDance 4s linear infinite",
                  mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                  maskComposite: "xor",
                  WebkitMaskComposite: "xor",
                }}
              />

              <div className="flex flex-col lg:flex-row">
                {/* Image Side */}
                <div className="relative h-[400px] w-full lg:h-[550px] lg:w-1/2">
                  {products.map((product, index) => (
                    <div
                      key={product.id}
                      className="absolute inset-0 transition-all duration-700"
                      style={{
                        opacity: index === activeIndex ? 1 : 0,
                        transform:
                          index === activeIndex ? "scale(1)" : "scale(1.1)",
                        zIndex: index === activeIndex ? 10 : 0,
                      }}
                    >
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover"
                        style={{
                          borderRadius: "2rem 0 0 2rem",
                        }}
                      />

                      {/* Overlay gradient */}
                      <div
                        className="absolute inset-0"
                        style={{
                          background:
                            "linear-gradient(90deg, transparent 60%, rgba(255,255,255,0.95) 100%)",
                          borderRadius: "2rem 0 0 2rem",
                        }}
                      />
                    </div>
                  ))}

                  {/* Category badge */}
                  <div
                    className="absolute right-6 top-6 z-20 rounded-full px-5 py-2.5"
                    style={{
                      background: "rgba(27,42,74,0.95)",
                      backdropFilter: "blur(10px)",
                      animation: "bounceIn 0.6s ease-out",
                    }}
                  >
                    <span className="text-sm font-bold text-white">
                      {activeProduct.category}
                    </span>
                  </div>

                  {/* Rotating glow */}
                  <div
                    className="absolute bottom-10 left-10 z-20 h-20 w-20"
                    style={{
                      background:
                        "conic-gradient(from 0deg, transparent, rgba(200,150,62,0.3), transparent)",
                      borderRadius: "50%",
                      animation: "rotateGlow 4s linear infinite",
                    }}
                  />
                </div>

                {/* Content Side */}
                <div className="relative flex flex-1 flex-col justify-center p-8 lg:p-12">
                  {/* Product counter */}
                  <div className="mb-6 flex items-center gap-3">
                    <span
                      className="text-6xl font-black"
                      style={{
                        color: "rgba(27,42,74,0.08)",
                        fontFamily: "monospace",
                      }}
                    >
                      0{activeIndex + 1}
                    </span>
                    <div className="h-[2px] flex-1 bg-gradient-to-l from-transparent to-[#C8963E]/30" />
                    <span
                      className="text-sm font-medium"
                      style={{ color: "rgba(27,42,74,0.4)" }}
                    >
                      / 0{products.length}
                    </span>
                  </div>

                  {/* Product name with animation */}
                  <div className="overflow-hidden">
                    <h3
                      key={activeIndex}
                      className="mb-4 text-3xl font-black md:text-4xl"
                      style={{
                        color: "#1B2A4A",
                        animation: "slideInRight 0.6s ease-out",
                      }}
                    >
                      {activeProduct.name}
                    </h3>
                  </div>

                  <p
                    key={`desc-${activeIndex}`}
                    className="mb-6 text-lg leading-relaxed"
                    style={{
                      color: "rgba(27,42,74,0.6)",
                      animation: "fadeInUp 0.6s ease-out 0.1s both",
                    }}
                  >
                    {activeProduct.description}
                  </p>

                  {/* Features */}
                  <div
                    key={`features-${activeIndex}`}
                    className="mb-8 flex flex-wrap gap-3"
                    style={{ animation: "fadeInUp 0.6s ease-out 0.2s both" }}
                  >
                    {activeProduct.features.map((feature, i) => (
                      <span
                        key={feature}
                        className="feature-tag flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium"
                        style={{
                          background: "rgba(200,150,62,0.08)",
                          color: "#1B2A4A",
                          animationDelay: `${i * 0.1}s`,
                        }}
                      >
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 14 14"
                          fill="none"
                          style={{ color: "#C8963E" }}
                        >
                          <path
                            d="M11.5 3.5L5.5 10L2.5 7"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        {feature}
                      </span>
                    ))}
                  </div>

                  {/* Price and CTA */}
                  <div
                    key={`cta-${activeIndex}`}
                    className="flex flex-wrap items-center gap-6"
                    style={{ animation: "fadeInUp 0.6s ease-out 0.3s both" }}
                  >
                    <div>
                      <span
                        className="text-sm font-medium"
                        style={{ color: "rgba(27,42,74,0.5)" }}
                      ></span>
                      <p
                        className="text-3xl font-black"
                        style={{ color: "#C8963E" }}
                      ></p>
                    </div>

                    <button
                      className="group relative flex items-center gap-3 overflow-hidden rounded-full px-8 py-4 font-bold text-white transition-all duration-300 hover:scale-105"
                      style={{
                        background:
                          "linear-gradient(135deg, #1B2A4A 0%, #2a3f6a 100%)",
                        boxShadow: "0 10px 30px rgba(27,42,74,0.3)",
                      }}
                    >
                      <span className="relative z-10">اطلب الآن</span>
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

                      {/* Shine effect */}
                      <div
                        className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                        style={{
                          background:
                            "linear-gradient(135deg, #2a3f6a 0%, #3a5080 100%)",
                        }}
                      />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="absolute left-4 top-1/2 z-30 -translate-y-1/2 md:left-0">
            <button
              onClick={goToNext}
              className="nav-btn flex h-14 w-14 items-center justify-center rounded-full md:h-16 md:w-16"
              style={{
                background: "#ffffff",
                boxShadow: "0 10px 40px rgba(27,42,74,0.15)",
                border: "1px solid rgba(27,42,74,0.1)",
              }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                  d="M15 18L9 12L15 6"
                  stroke="#1B2A4A"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>

          <div className="absolute right-4 top-1/2 z-30 -translate-y-1/2 md:right-0">
            <button
              onClick={goToPrev}
              className="nav-btn flex h-14 w-14 items-center justify-center rounded-full md:h-16 md:w-16"
              style={{
                background: "#ffffff",
                boxShadow: "0 10px 40px rgba(27,42,74,0.15)",
                border: "1px solid rgba(27,42,74,0.1)",
              }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                  d="M9 18L15 12L9 6"
                  stroke="#1B2A4A"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Product Thumbnails */}
        <div
          className="mb-12 flex items-center justify-center gap-4 overflow-x-auto pb-4"
          style={{
            animation: isVisible ? "fadeInUp 0.8s ease-out 0.5s both" : "none",
          }}
        >
          {products.map((product, index) => (
            <button
              key={product.id}
              onClick={() => goToIndex(index)}
              className="group relative flex-shrink-0 transition-all duration-500"
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
              style={{
                transform:
                  index === activeIndex
                    ? "scale(1.1)"
                    : hoveredCard === index
                      ? "scale(1.05)"
                      : "scale(1)",
              }}
            >
              <div
                className="relative h-20 w-20 overflow-hidden rounded-2xl md:h-24 md:w-24"
                style={{
                  border:
                    index === activeIndex
                      ? "3px solid #C8963E"
                      : "2px solid rgba(27,42,74,0.1)",
                  boxShadow:
                    index === activeIndex
                      ? "0 8px 30px rgba(200,150,62,0.3)"
                      : "0 4px 15px rgba(27,42,74,0.08)",
                }}
              >
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Overlay */}
                <div
                  className="absolute inset-0 transition-opacity duration-300"
                  style={{
                    background:
                      index === activeIndex
                        ? "transparent"
                        : "rgba(27,42,74,0.3)",
                    opacity: hoveredCard === index ? 0 : 1,
                  }}
                />
              </div>

              {/* Active indicator */}
              {index === activeIndex && (
                <div
                  className="absolute -bottom-2 left-1/2 h-1 w-8 -translate-x-1/2 rounded-full"
                  style={{
                    background: "linear-gradient(90deg, #C8963E, #e8b85e)",
                  }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Progress Dots */}
        <div className="flex items-center justify-center gap-3">
          {products.map((_, index) => (
            <button
              key={index}
              onClick={() => goToIndex(index)}
              className={`dot-indicator h-2.5 rounded-full ${index === activeIndex ? "active" : ""}`}
              style={{
                width: index === activeIndex ? "40px" : "10px",
                background:
                  index === activeIndex
                    ? "linear-gradient(90deg, #C8963E, #e8b85e)"
                    : "rgba(27,42,74,0.15)",
              }}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <div
          className="mt-16 text-center"
          style={{
            animation: isVisible ? "fadeInUp 1s ease-out 0.7s both" : "none",
          }}
        >
          <a
            href="#contact"
            className="group relative inline-flex items-center gap-4 overflow-hidden rounded-full px-10 py-5 font-bold transition-all duration-300 hover:scale-105"
            style={{
              background: "linear-gradient(135deg, #C8963E 0%, #e8b85e 100%)",
              boxShadow: "0 15px 40px rgba(200,150,62,0.35)",
            }}
          >
            <span className="relative z-10 text-lg text-white">
              اطلب الآن !{" "}
            </span>
            <div
              className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full"
              style={{ background: "rgba(255,255,255,0.2)" }}
            >
              <svg
                className="transition-transform duration-300 group-hover:-translate-x-1"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M12 4L6 10L12 16"
                  stroke="white"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            {/* Hover overlay */}
            <div
              className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              style={{
                background: "linear-gradient(135deg, #daa84e 0%, #C8963E 100%)",
              }}
            />
          </a>
        </div>
      </div>
    </section>
  );
}
