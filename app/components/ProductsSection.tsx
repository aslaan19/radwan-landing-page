"use client";
import { useEffect, useRef, useState, useCallback } from "react";
import Image from "next/image";

const products = [
  {
    id: 1,
    name: "زي مدرسي فاخر",
    category: "المدارس",
    image: "/images/mephoto.png",
    description: "تصميم عصري يجمع بين الأناقة والراحة للطلاب",
  },
  {
    id: 2,
    name: "بدلة رجال أعمال",
    category: "الشركات",
    image: "/images/mephoto.png",
    description: "بدلة احترافية تعكس هوية مؤسستك",
  },
  {
    id: 3,
    name: "زي طبي متطور",
    category: "المستشفيات",
    image: "/images/mephoto.png",
    description: "راحة وعملية للكوادر الطبية",
  },
  {
    id: 4,
    name: "زي فندقي راقي",
    category: "الفنادق",
    image: "/images/mephoto.png",
    description: "أناقة تليق بضيافتكم المميزة",
  },
  {
    id: 5,
    name: "زي طهاة احترافي",
    category: "المطاعم",
    image: "/images/mephoto.png",
    description: "تصميم عملي للمطابخ الاحترافية",
  },
];

export default function ProductsSection() {
  const [activeIndex, setActiveIndex] = useState(2);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const goToNext = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex((prev) => (prev + 1) % products.length);
    setTimeout(() => setIsAnimating(false), 600);
  }, [isAnimating]);

  const goToPrev = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex((prev) => (prev - 1 + products.length) % products.length);
    setTimeout(() => setIsAnimating(false), 600);
  }, [isAnimating]);

  const goToIndex = (index: number) => {
    if (isAnimating || index === activeIndex) return;
    setIsAnimating(true);
    setActiveIndex(index);
    setTimeout(() => setIsAnimating(false), 600);
  };

  // Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
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

    intervalRef.current = setInterval(goToNext, 4000);
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isPaused, goToNext]);

  // Calculate position for each card
  const getCardStyle = (index: number) => {
    const diff = index - activeIndex;
    const wrappedDiff = ((diff + products.length + Math.floor(products.length / 2)) % products.length) - Math.floor(products.length / 2);
    
    const isCenter = wrappedDiff === 0;
    const isLeft1 = wrappedDiff === -1;
    const isRight1 = wrappedDiff === 1;
    const isLeft2 = wrappedDiff === -2 || (wrappedDiff === 3);
    const isRight2 = wrappedDiff === 2 || (wrappedDiff === -3);

    let translateX = 0;
    let translateZ = 0;
    let rotateY = 0;
    let scale = 0.6;
    let opacity = 0;
    let zIndex = 0;

    if (isCenter) {
      translateX = 0;
      translateZ = 100;
      rotateY = 0;
      scale = 1;
      opacity = 1;
      zIndex = 50;
    } else if (isRight1) {
      translateX = 280;
      translateZ = 0;
      rotateY = -25;
      scale = 0.8;
      opacity = 0.7;
      zIndex = 40;
    } else if (isLeft1) {
      translateX = -280;
      translateZ = 0;
      rotateY = 25;
      scale = 0.8;
      opacity = 0.7;
      zIndex = 40;
    } else if (isRight2) {
      translateX = 480;
      translateZ = -100;
      rotateY = -35;
      scale = 0.6;
      opacity = 0.4;
      zIndex = 30;
    } else if (isLeft2) {
      translateX = -480;
      translateZ = -100;
      rotateY = 35;
      scale = 0.6;
      opacity = 0.4;
      zIndex = 30;
    }

    return {
      transform: `translateX(${translateX}px) translateZ(${translateZ}px) rotateY(${rotateY}deg) scale(${scale})`,
      opacity,
      zIndex,
    };
  };

  const activeProduct = products[activeIndex];

  return (
    <section
      ref={sectionRef}
      id="products"
      className="relative w-full overflow-hidden py-24 md:py-32"
      style={{
        background: "#ffffff",
      }}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <style jsx>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.9); }
          to { opacity: 1; transform: scale(1); }
        }
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        @keyframes pulse-ring {
          0% { transform: scale(1); opacity: 0.5; }
          100% { transform: scale(1.5); opacity: 0; }
        }
        @keyframes glow {
          0%, 100% { box-shadow: 0 0 30px rgba(200,150,62,0.3); }
          50% { box-shadow: 0 0 50px rgba(200,150,62,0.5); }
        }
        .card-3d {
          transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
          transform-style: preserve-3d;
        }
        .nav-btn {
          transition: all 0.3s ease;
        }
        .nav-btn:hover {
          transform: scale(1.1);
          background: linear-gradient(135deg, #C8963E 0%, #9a7430 100%);
        }
        .nav-btn:hover svg {
          stroke: white;
        }
        .dot-indicator {
          transition: all 0.4s ease;
        }
        .dot-indicator.active {
          width: 32px;
          background: linear-gradient(90deg, #C8963E, #e8b85e);
        }
      `}</style>

      {/* Background Pattern */}
      <div className="pointer-events-none absolute inset-0 opacity-30">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 50% 50%, rgba(200,150,62,0.08) 0%, transparent 50%)`,
            backgroundSize: "100px 100px",
          }}
        />
      </div>

      {/* Floating Decorative Elements */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div 
          className="absolute left-10 top-20 h-3 w-3 rounded-full"
          style={{ 
            background: "#C8963E", 
            animation: "float 4s ease-in-out infinite",
            opacity: 0.6,
          }} 
        />
        <div 
          className="absolute right-20 top-40 h-2 w-2 rounded-full"
          style={{ 
            background: "#1B2A4A", 
            animation: "float 5s ease-in-out infinite 1s",
            opacity: 0.4,
          }} 
        />
        <div 
          className="absolute bottom-40 left-1/4 h-4 w-4 rounded-full"
          style={{ 
            background: "#C8963E", 
            animation: "float 6s ease-in-out infinite 0.5s",
            opacity: 0.3,
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
            className="mb-6 inline-flex items-center gap-3 rounded-full px-5 py-2"
            style={{
              background: "rgba(27,42,74,0.05)",
              border: "1px solid rgba(27,42,74,0.1)",
            }}
          >
            <span 
              className="h-2 w-2 rounded-full"
              style={{ 
                background: "#C8963E",
                boxShadow: "0 0 10px rgba(200,150,62,0.5)",
              }} 
            />
            <span className="text-sm font-bold tracking-wider" style={{ color: "#1B2A4A" }}>
              منتجاتنا
            </span>
          </div>

          <h2 
            className="mb-6 text-3xl font-black leading-tight md:text-4xl lg:text-5xl"
            style={{ color: "#1B2A4A" }}
          >
            تشكيلة
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
              متميزة
            </span>
            من الأزياء الموحدة
          </h2>

          <p 
            className="mx-auto max-w-2xl text-lg leading-relaxed"
            style={{ color: "rgba(27,42,74,0.6)" }}
          >
            نقدم مجموعة واسعة من الأزياء الموحدة المصممة بعناية لتلبية احتياجات مختلف القطاعات
          </p>
        </div>

        {/* 3D Carousel */}
        <div 
          className="relative mb-16"
          style={{
            perspective: "1200px",
            animation: isVisible ? "scaleIn 1s ease-out 0.3s forwards" : "none",
            opacity: isVisible ? 1 : 0,
          }}
        >
          {/* Carousel Container */}
          <div 
            className="relative mx-auto flex items-center justify-center"
            style={{ 
              height: "500px",
              transformStyle: "preserve-3d",
            }}
          >
            {products.map((product, index) => {
              const style = getCardStyle(index);
              const isActive = index === activeIndex;
              
              return (
                <div
                  key={product.id}
                  className="card-3d absolute cursor-pointer"
                  style={{
                    ...style,
                    width: "300px",
                    height: "420px",
                  }}
                  onClick={() => goToIndex(index)}
                >
                  <div 
                    className="relative h-full w-full overflow-hidden rounded-3xl"
                    style={{
                      background: "#ffffff",
                      boxShadow: isActive 
                        ? "0 40px 80px -20px rgba(27,42,74,0.4), 0 0 40px rgba(200,150,62,0.2)"
                        : "0 20px 40px -15px rgba(27,42,74,0.2)",
                      border: isActive ? "2px solid rgba(200,150,62,0.5)" : "1px solid rgba(27,42,74,0.1)",
                      animation: isActive ? "glow 3s ease-in-out infinite" : "none",
                    }}
                  >
                    {/* Image */}
                    <div className="relative h-[280px] w-full overflow-hidden">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover transition-transform duration-700"
                        style={{
                          transform: isActive ? "scale(1.05)" : "scale(1)",
                        }}
                      />
                      
                      {/* Category Badge */}
                      <div 
                        className="absolute right-4 top-4 rounded-full px-4 py-1.5 text-xs font-bold"
                        style={{
                          background: "rgba(27,42,74,0.9)",
                          color: "#ffffff",
                          backdropFilter: "blur(10px)",
                        }}
                      >
                        {product.category}
                      </div>

                      {/* Active Indicator */}
                      {isActive && (
                        <div 
                          className="absolute bottom-4 left-4 flex items-center gap-2 rounded-full px-3 py-1.5"
                          style={{
                            background: "rgba(200,150,62,0.9)",
                            backdropFilter: "blur(10px)",
                          }}
                        >
                          <div className="relative">
                            <div 
                              className="h-2 w-2 rounded-full"
                              style={{ background: "#ffffff" }}
                            />
                            <div 
                              className="absolute inset-0 h-2 w-2 rounded-full"
                              style={{ 
                                background: "#ffffff",
                                animation: "pulse-ring 1.5s ease-out infinite",
                              }}
                            />
                          </div>
                          <span className="text-xs font-bold text-white">الأكثر طلباً</span>
                        </div>
                      )}
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <h3 
                        className="mb-2 text-xl font-bold"
                        style={{ color: "#1B2A4A" }}
                      >
                        {product.name}
                      </h3>
                      <p 
                        className="text-sm leading-relaxed"
                        style={{ color: "rgba(27,42,74,0.6)" }}
                      >
                        {product.description}
                      </p>

                      {/* Action Button */}
                      {isActive && (
                        <button 
                          className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl py-3 text-sm font-bold text-white transition-all duration-300 hover:scale-[1.02]"
                          style={{
                            background: "linear-gradient(135deg, #1B2A4A 0%, #2a3f6a 100%)",
                          }}
                        >
                          <span>اطلب الآن</span>
                          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path d="M10 4L6 8L10 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={goToPrev}
            className="nav-btn absolute right-4 top-1/2 z-50 flex h-14 w-14 -translate-y-1/2 items-center justify-center rounded-full md:right-10"
            style={{
              background: "#ffffff",
              boxShadow: "0 10px 30px -10px rgba(27,42,74,0.3)",
              border: "1px solid rgba(27,42,74,0.1)",
            }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M9 18L15 12L9 6" stroke="#1B2A4A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          <button
            onClick={goToNext}
            className="nav-btn absolute left-4 top-1/2 z-50 flex h-14 w-14 -translate-y-1/2 items-center justify-center rounded-full md:left-10"
            style={{
              background: "#ffffff",
              boxShadow: "0 10px 30px -10px rgba(27,42,74,0.3)",
              border: "1px solid rgba(27,42,74,0.1)",
            }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M15 18L9 12L15 6" stroke="#1B2A4A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>

        {/* Dot Indicators */}
        <div className="flex items-center justify-center gap-3">
          {products.map((_, index) => (
            <button
              key={index}
              onClick={() => goToIndex(index)}
              className={`dot-indicator h-2 rounded-full ${index === activeIndex ? "active" : ""}`}
              style={{
                width: index === activeIndex ? "32px" : "8px",
                background: index === activeIndex 
                  ? "linear-gradient(90deg, #C8963E, #e8b85e)"
                  : "rgba(27,42,74,0.2)",
              }}
            />
          ))}
        </div>

        {/* Product Info Panel */}
        <div 
          className="mx-auto mt-16 max-w-2xl text-center"
          style={{
            animation: isVisible ? "fadeInUp 1s ease-out 0.5s forwards" : "none",
            opacity: isVisible ? 1 : 0,
          }}
        >
          <div 
            className="inline-flex items-center gap-4 rounded-2xl px-8 py-4"
            style={{
              background: "linear-gradient(135deg, rgba(27,42,74,0.05) 0%, rgba(200,150,62,0.05) 100%)",
              border: "1px solid rgba(27,42,74,0.1)",
            }}
          >
            <div 
              className="flex h-12 w-12 items-center justify-center rounded-xl"
              style={{
                background: "linear-gradient(135deg, #C8963E 0%, #9a7430 100%)",
              }}
            >
              <span className="text-xl">✨</span>
            </div>
            <div className="text-right">
              <p className="font-bold" style={{ color: "#1B2A4A" }}>
                {activeProduct.name}
              </p>
              <p className="text-sm" style={{ color: "rgba(27,42,74,0.6)" }}>
                {activeProduct.description}
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <a
            href="#contact"
            className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full px-10 py-5 font-bold transition-all duration-300 hover:scale-105"
            style={{
              background: "linear-gradient(135deg, #1B2A4A 0%, #2a3f6a 100%)",
              boxShadow: "0 15px 40px -15px rgba(27,42,74,0.5)",
            }}
          >
            <span className="relative z-10 text-white">استعرض جميع المنتجات</span>
            <svg 
              className="relative z-10 transition-transform duration-300 group-hover:-translate-x-1" 
              width="20" height="20" viewBox="0 0 20 20" fill="none"
            >
              <path 
                d="M12 4L6 10L12 16" 
                stroke="white" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
