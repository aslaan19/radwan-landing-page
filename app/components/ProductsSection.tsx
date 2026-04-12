"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const categories = [
  { id: "all", name: "الكل", icon: "grid" },
  { id: "schools", name: "مدارس", icon: "school" },
  { id: "coffee", name: "مطاعم ومقاهي ", icon: "food" },
  { id: "factory", name: "شركات ومصانع", icon: "factory" },
  { id: "shops", name: "محلات تجارية ", icon: "mall" },
];

const products = [
  // Schools - مدارس
  {
    id: 1,
    name: "زي مدرسي فاخر",
    category: "schools",
    categoryName: "مدارس",
    image: "/images/products/schools/sample.png",
    description: "تصميم عصري يجمع بين الأناقة والراحة للطلاب مع أجود الخامات",
    features: ["قماش مقاوم للتجاعيد", "ألوان ثابتة", "راحة "],
  },
  {
    id: 2,
    name: "ماريول بناتي أنيق",
    category: "schools",
    categoryName: "مدارس",
    image: "/images/products/schools/sample2.png",
    description: "تصميم أنيق للطالبات يوفر الراحة والأناقة معاً",
    features: ["مضاد للبكتيريا", "سهل الغسيل", "تصميم عصري"],
  },
  {
    id: 3,
    name: "ماريول بناتي أنيق",
    category: "schools",
    categoryName: "مدارس",
    image: "/images/products/schools/sample3.png",
    description: "تصميم أنيق للطالبات يوفر الراحة والأناقة معاً",
    features: ["قماش مرن", "تهوية ممتازة", "متانة عالية"],
  },
  {
    id: 4,
    name: "ماريول بناتي أنيق",
    category: "schools",
    categoryName: "مدارس",
    image: "/images/products/schools/sample4.png",
    description: "تصميم أنيق للطالبات يوفر الراحة والأناقة معاً",
    features: ["قماش مرن", "تهوية ممتازة", "متانة عالية"],
  },
  // Commercial - شركات تجارية
  {
    id: 5,
    name: "ماريول بناتي أنيق",
    category: "schools",
    categoryName: "مدارس",
    image: "/images/products/schools/sample5.png",
    description: "تصميم أنيق للطالبات يوفر الراحة والأناقة معاً",
    features: ["قماش مرن", "تهوية ممتازة", "متانة عالية"],
  },
  {
    id: 6,
    name: "يونيفورم قشطية",
    category: "coffee",
    categoryName: "مطاعم ومقاهي",
    image: "/images/products/coffee/coffee1.jpeg",
    description: "تصميم عصري ناسب هوية الشركة مع خامات عالية الجودة",
    features: ["قماش مرن", "جودة مضمونة", "متانة عالية"],
  },
  {
    id: 7,
    name: "يونيفورم مارتي",
    category: "coffee",
    categoryName: "مطاعم ومقاهي",
    image: "/images/products/coffee/coffee2.jpeg",
    description: "تصميم عصري ناسب هوية الشركة مع خامات عالية الجودة",
    features: ["قماش مرن", "جودة مضمونة", "تصميم أنيق"],
  },
  {
    id: 8,
    name: "يونيفورم عنوان القهوة",
    category: "coffee",
    categoryName: "مطاعم ومقاهي",
    image: "/images/products/coffee/coffee3.png",
    description: "تصميم عصري ناسب هوية الشركة مع خامات عالية الجودة",
    features: ["قماش ممتاز", "جودة مضمونة", "تصميم راقي"],
  },
  {
    id: 9,
    name: "يونيفورم مصنع",
    category: "factory",
    categoryName: "شركات ومصانع",
    image: "/images/products/factory/factory1.jpeg",
    description:
      "حلول ملابس عمل احترافية مصممة لتلبية احتياجات الشركات والمصانع بأعلى معايير الجودة والمتانة",
    features: [
      "خامات عالية التحمل",
      "جودة صناعية معتمدة",
      "تصميم يعكس الهوية المؤسسية",
    ],
  },
  {
    id: 10,
    name: "يونيفورم الهيئة السعودية للسياحة",
    category: "factory",
    categoryName: "شركات ومصانع",
    image: "/images/products/factory/factory2.jpeg",
    description:
      "حلول ملابس عمل احترافية مصممة لتلبية احتياجات الشركات والمصانع بأعلى معايير الجودة والمتانة",
    features: [
      "خامات عالية التحمل",
      "جودة صناعية معتمدة",
      "تصميم يعكس الهوية المؤسسية",
    ],
  },
  {
    id: 11,
    name: "يونيفورم فريق تقني",
    category: "factory",
    categoryName: "شركات ومصانع",
    image: "/images/products/factory/factory3.jpeg",
    description:
      "حلول ملابس عمل احترافية مصممة لتلبية احتياجات الشركات والمصانع بأعلى معايير الجودة والمتانة",
    features: [
      "خامات عالية التحمل",
      "جودة صناعية معتمدة",
      "تصميم يعكس الهوية المؤسسية",
    ],
  },
  {
    id: 12,
    name: "يونيفورم عمال مصانع",
    category: "factory",
    categoryName: "شركات ومصانع",
    image: "/images/products/factory/factory4.jpeg",
    description:
      "حلول ملابس عمل احترافية مصممة لتلبية احتياجات الشركات والمصانع بأعلى معايير الجودة والمتانة",
    features: [
      "خامات عالية التحمل",
      "جودة صناعية معتمدة",
      "تصميم يعكس الهوية المؤسسية",
    ],
  },
  {
    id: 13,
    name: "يونيفورم قوات الدفاع الجوي الملكي السعودي",
    category: "factory",
    categoryName: "شركات ومصانع",
    image: "/images/products/factory/factory5.jpeg",
    description:
      "حلول ملابس عمل احترافية مصممة لتلبية احتياجات الشركات والمصانع بأعلى معايير الجودة والمتانة",
    features: [
      "خامات عالية الجودة",
      "جودة صناعية معتمدة",
      "تصميم يعكس الهوية ",
    ],
  },
  {
    id: 14,
    name: "يونيفورم وزارة السياحة",
    category: "factory",
    categoryName: "شركات ومصانع",
    image: "/images/products/factory/factory6.jpeg",
    description:
      "حلول ملابس عمل احترافية مصممة لتلبية احتياجات الشركات والمصانع بأعلى معايير الجودة والمتانة",
    features: [
      "خامات عالية الجودة",
      "جودة صناعية معتمدة",
      "تصميم يعكس الهوية ",
    ],
  },
  {
    id: 15,
    name: "يونيفورم شركة كرام السياحية",
    category: "factory",
    categoryName: "شركات ومصانع",
    image: "/images/products/factory/factory7.jpeg",
    description:
      "حلول ملابس عمل احترافية مصممة لتلبية احتياجات الشركات والمصانع بأعلى معايير الجودة والمتانة",
    features: ["خامات عالية الجودة", "جودة صناعية فائقة", "تصميم يعكس الهوية "],
  },
  {
    id: 17,
    name: "يونيفورم شركة RS للالكترونيات",
    category: "factory",
    categoryName: "شركات ومصانع",
    image: "/images/products/factory/factory8.jpeg",
    description:
      "حلول ملابس عمل احترافية مصممة لتلبية احتياجات الشركات والمصانع بأعلى معايير الجودة والمتانة",
    features: [
      "خامات عالية التحمل",
      "جودة صناعية معتمدة",
      "تصميم يعكس الهوية المؤسسية",
    ],
  },
  {
    id: 20,
    name: "يونيفورم محل",
    category: "shops",
    categoryName: "محلات تجارية",
    image: "/images/products/shops/shops1.jpeg",
    description:
      "يونيفورم أنيق وعصري مصمم ليتناسب مع طبيعة المحلات ويعزز تجربة العملاء ويبرز هوية علامتك التجارية",
    features: [
      "تصميم جذاب يلفت الانتباه",
      "راحة طوال ساعات العمل",
      "يعكس هوية المحل بشكل مميز",
    ],
  },
  {
    id: 21,
    name: "يونيفورم عالم جمولي",
    category: "shops",
    categoryName: "محلات تجارية",
    image: "/images/products/shops/shops2.jpeg",
    description:
      "يونيفورم أنيق وعصري مصمم ليتناسب مع طبيعة المحلات ويعزز تجربة العملاء ويبرز هوية علامتك التجارية",
    features: [
      "تصميم جذاب يلفت الانتباه",
      "راحة طوال ساعات العمل",
      "يعكس هوية المحل بشكل مميز",
    ],
  },
  {
    id: 22,
    name: "يونيفورم دكنة للعطور",
    category: "shops",
    categoryName: "محلات تجارية",
    image: "/images/products/shops/shops3.jpeg",
    description:
      "نقدم ملابس عمل أنيقة للمحلات تجمع بين الراحة والمظهر الاحترافي لتعزيز حضور علامتك التجارية أمام العملاء",
    features: [
      "مظهر عصري وأنيق",
      "خامات مريحة للاستخدام اليومي",
      "تصميم متناسق مع هوية البراند",
    ],
  },
  {
    id: 23,
    name: "uniform A. Abo abaid",
    category: "shops",
    categoryName: "محلات تجارية",
    image: "/images/products/shops/shops4.jpeg",
    description:
      "يونيفورم أنيق وعصري مصمم ليتناسب مع طبيعة المحلات ويعزز تجربة العملاء ويبرز هوية علامتك التجارية",
    features: [
      "تصميم جذاب يلفت الانتباه",
      "راحة طوال ساعات العمل",
      "يعكس هوية المحل بشكل مميز",
    ],
  },
  {
    id: 24,
    name: "يونيفورم مخازن",
    category: "shops",
    categoryName: "محلات تجارية",
    image: "/images/products/shops/shops5.jpeg",
    description:
      "يونيفورم عملي وأنيق مصمم ليتحمل طبيعة العمل اليومية داخل المحلات مع الحفاظ على مظهر احترافي مميز",
    features: [
      "مناسب للاستخدام اليومي",
      "خامات مريحة وعملية",
      "مظهر احترافي للعملاء",
    ],
  },
  {
    id: 28,
    name: "يونيفورم اّني وداني للحلويات",
    category: "shops",
    categoryName: "محلات تجارية",
    image: "/images/products/shops/shops6.jpeg",
    description:
      "ملابس عمل أنيقة ومريحة للمحلات توفر مظهراً موحداً يعكس الاحترافية ويساعد على تنظيم بيئة العمل",
    features: [
      "راحة في الحركة طوال اليوم",
      "مظهر موحد للفريق",
      "تصميم بسيط وأنيق",
    ],
  },
  // Medical - مستشفيات ومستلزمات طبية
];

const CategoryIcon = ({ type }: { type: string }) => {
  switch (type) {
    case "grid":
      return (
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <rect x="3" y="3" width="7" height="7" rx="1" />
          <rect x="14" y="3" width="7" height="7" rx="1" />
          <rect x="3" y="14" width="7" height="7" rx="1" />
          <rect x="14" y="14" width="7" height="7" rx="1" />
        </svg>
      );
    case "school":
      return (
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
          <path d="M6 12v5c3 3 9 3 12 0v-5" />
        </svg>
      );
    case "building":
      return (
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <rect x="4" y="2" width="16" height="20" rx="2" />
          <path d="M9 22v-4h6v4M8 6h.01M16 6h.01M12 6h.01M8 10h.01M16 10h.01M12 10h.01M8 14h.01M16 14h.01M12 14h.01" />
        </svg>
      );
    case "food":
      return (
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M3 2v6a3 3 0 0 0 6 0V2" />
          <path d="M6 2v20" />
          <path d="M14 2v20" />
          <path d="M14 2a4 4 0 0 1 4 4v16" />
        </svg>
      );
    case "factory":
      return (
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M3 21V10l7-4v4l7-4v15H3z" />
          <path d="M13 21V13h3v8" />
        </svg>
      );
    case "mall":
      return (
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M3 9l1-4h16l1 4" />
          <rect x="4" y="9" width="16" height="11" rx="2" />
          <path d="M9 20v-6h6v6" />
        </svg>
      );
    case "medical":
      return (
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M8 2v4M16 2v4" />
          <rect x="3" y="4" width="18" height="18" rx="2" />
          <path d="M12 9v6M9 12h6" />
        </svg>
      );
    default:
      return null;
  }
};

export default function ProductsSection() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0.5, y: 0.5 });
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  const filteredProducts =
    activeCategory === "all"
      ? products
      : products.filter((p) => p.category === activeCategory);

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

  // Mouse tracking
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    setMousePosition({
      x: (e.clientX - rect.left) / rect.width,
      y: (e.clientY - rect.top) / rect.height,
    });
  };

  return (
    <section
      ref={sectionRef}
      id="products"
      className="relative w-full overflow-hidden py-24 md:py-32"
      style={{
        background:
          "linear-gradient(135deg, #EAF4FF 0%, #BFD9FF 40%, #7FB3FF 100%);  ",
        direction: "rtl",
      }}
      onMouseMove={handleMouseMove}
    >
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.9);
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
        @keyframes cardAppear {
          from {
            opacity: 0;
            transform: translateY(30px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        .morph-blob {
          animation: morphShape 15s ease-in-out infinite;
        }
        .product-card {
          transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .product-card:hover {
          transform: translateY(-12px);
        }
        .category-tab {
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .feature-tag {
          transition: all 0.3s ease;
        }
        .feature-tag:hover {
          transform: translateY(-2px);
          background: rgba(200, 150, 62, 0.15);
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
          className="mb-16 text-center"
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
            className="mb-6 text-4xl text-cyan-900 font-bold tight md:text-5xl lg:text-6xl"
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
            className="mx-auto max-w-xl text-lg font-bold leading-relaxed md:text-xl"
            style={{ color: "rgba(27,42,74,0.6)", fontFamily: "Cairo" }}
          >
            نفخر بتقديم أرقى أنواع الأزياء الموحدة المصنعة بأيدٍ ماهرة وخامات
            فاخرة
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div
          className="mb-12 flex flex-wrap items-center justify-center gap-3"
          style={{
            animation: isVisible
              ? "fadeInUp 0.8s ease-out 0.2s forwards"
              : "none",
            opacity: isVisible ? 1 : 0,
          }}
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className="category-tab group relative flex items-center gap-2 rounded-full px-6 py-3 font-bold"
              style={{
                background:
                  activeCategory === category.id
                    ? "linear-gradient(135deg, #C8963E 0%, #e8b85e 100%)"
                    : "#ffffff",
                color: activeCategory === category.id ? "#ffffff" : "#1B2A4A",
                boxShadow:
                  activeCategory === category.id
                    ? "0 10px 30px rgba(200,150,62,0.35)"
                    : "0 4px 15px rgba(27,42,74,0.08)",
                border:
                  activeCategory === category.id
                    ? "none"
                    : "1px solid rgba(27,42,74,0.1)",
                transform:
                  activeCategory === category.id ? "scale(1.05)" : "scale(1)",
              }}
            >
              <span
                className="transition-colors duration-300"
                style={{
                  color: activeCategory === category.id ? "#ffffff" : "#C8963E",
                }}
              >
                <CategoryIcon type={category.icon} />
              </span>
              <span>{category.name}</span>

              {/* Active indicator dot */}
              {activeCategory === category.id && (
                <span
                  className="absolute -bottom-1 left-1/2 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-white"
                  style={{
                    boxShadow: "0 2px 8px rgba(255,255,255,0.5)",
                  }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
          style={{
            animation: isVisible
              ? "fadeInUp 0.8s ease-out 0.4s forwards"
              : "none",
            opacity: isVisible ? 1 : 0,
          }}
        >
          {filteredProducts.map((product, index) => (
            <div
              key={product.id}
              className="product-card group relative overflow-hidden rounded-3xl"
              style={{
                background: "linear-gradient(135deg, #ffffff 0%, #f8f9fc 100%)",
                border: "1px solid rgba(27,42,74,0.08)",
                boxShadow:
                  hoveredProduct === product.id
                    ? "0 25px 60px rgba(27,42,74,0.15), 0 0 0 1px rgba(200,150,62,0.2)"
                    : "0 10px 40px rgba(27,42,74,0.08)",
                animation: `cardAppear 0.6s ease-out ${index * 0.1}s both`,
              }}
              onMouseEnter={() => setHoveredProduct(product.id)}
              onMouseLeave={() => setHoveredProduct(null)}
            >
              {/* Image Container */}
              <div className="relative h-82 w-full overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Overlay gradient */}
                <div
                  className="absolute inset-0 transition-opacity duration-500"
                  style={{
                    background:
                      "linear-gradient(180deg, transparent 50%, rgba(27,42,74,0.8) 100%)",
                    opacity: hoveredProduct === product.id ? 1 : 0.6,
                  }}
                />

                {/* Category Badge */}
                <div
                  className="absolute right-4 top-4 rounded-full px-4 py-2 transition-all duration-300"
                  style={{
                    background: "rgba(200,150,62,0.95)",
                    backdropFilter: "blur(10px)",
                    transform:
                      hoveredProduct === product.id
                        ? "translateY(0) scale(1)"
                        : "translateY(-5px) scale(0.95)",
                    boxShadow: "0 4px 15px rgba(200,150,62,0.4)",
                  }}
                >
                  <span className="text-sm font-bold text-white">
                    {product.categoryName}
                  </span>
                </div>

                {/* Hover Quick Action */}
                <div
                  className="absolute bottom-4 left-4 right-4 flex items-center justify-between transition-all duration-500"
                  style={{
                    opacity: hoveredProduct === product.id ? 1 : 0,
                    transform:
                      hoveredProduct === product.id
                        ? "translateY(0)"
                        : "translateY(20px)",
                  }}
                >
                  <span className="text-lg font-bold text-white drop-shadow-lg">
                    {product.name}
                  </span>
                  <button
                    className="flex h-10 w-10 items-center justify-center rounded-full transition-all duration-300 hover:scale-110"
                    style={{
                      background: "rgba(255,255,255,0.2)",
                      backdropFilter: "blur(10px)",
                    }}
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="white"
                      strokeWidth="2"
                    >
                      <path d="M15 18l-6-6 6-6" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Product Name */}
                <h3
                  className="mb-3 text-xl font-black transition-colors duration-300"
                  style={{
                    color:
                      hoveredProduct === product.id ? "#C8963E" : "#1B2A4A",
                  }}
                >
                  {product.name}
                </h3>

                {/* Description */}
                <p
                  className="mb-4 text-sm leading-relaxed"
                  style={{ color: "rgba(27,42,74,0.6)" }}
                >
                  {product.description}
                </p>

                {/* Features */}
                <div className="mb-5 flex flex-wrap gap-2">
                  {product.features.map((feature) => (
                    <span
                      key={feature}
                      className="feature-tag flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium"
                      style={{
                        background: "rgba(200,150,62,0.08)",
                        color: "#1B2A4A",
                      }}
                    >
                      <svg
                        width="12"
                        height="12"
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

                {/* CTA Button */}
                <button
                  className="group/btn relative w-full overflow-hidden rounded-xl px-6 py-3.5 font-bold text-white transition-all duration-300 hover:scale-[1.02]"
                  style={{
                    background:
                      "linear-gradient(135deg, #1B2A4A 0%, #2a3f6a 100%)",
                    boxShadow: "0 8px 25px rgba(27,42,74,0.25)",
                  }}
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    اطلب الآن
                    <svg
                      className="transition-transform duration-300 group-hover/btn:-translate-x-1"
                      width="18"
                      height="18"
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
                  </span>

                  {/* Hover overlay */}
                  <div
                    className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover/btn:opacity-100"
                    style={{
                      background:
                        "linear-gradient(135deg, #2a3f6a 0%, #3a5080 100%)",
                    }}
                  />
                </button>
              </div>

              {/* Decorative corner accent */}
              <div
                className="absolute -left-4 -top-4 h-16 w-16 rounded-full opacity-0 transition-all duration-500 group-hover:opacity-100"
                style={{
                  background:
                    "radial-gradient(circle, rgba(200,150,62,0.15) 0%, transparent 70%)",
                  transform:
                    hoveredProduct === product.id ? "scale(3)" : "scale(1)",
                }}
              />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div
          className="mt-16 text-center"
          style={{
            animation: isVisible ? "fadeInUp 1s ease-out 0.6s both" : "none",
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
              اطلب الآن !
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
