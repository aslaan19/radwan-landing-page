"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import type { Lang } from "../lib/i18n";
import { t } from "../lib/i18n";

const categoryIconMap: Record<string, string> = {
  all: "grid",
  schools: "school",
  coffee: "food",
  factory: "factory",
  shops: "mall",
};

interface ProductFeature {
  ar: string;
  en: string;
}

interface ProductData {
  id: number;
  name: { ar: string; en: string };
  category: string;
  image: string;
  description: { ar: string; en: string };
  features: ProductFeature[];
}

const SCHOOL_DESC_GIRLS = {
  ar: "تصميم أنيق للطالبات يوفر الراحة والأناقة معاً",
  en: "Elegant design for female students combining comfort and style",
};
const FACTORY_DESC = {
  ar: "حلول ملابس عمل احترافية مصممة لتلبية احتياجات الشركات والمصانع بأعلى معايير الجودة والمتانة",
  en: "Professional workwear solutions designed to meet companies and factories needs with top quality and durability",
};
const FACTORY_FEATS_A: ProductFeature[] = [
  { ar: "خامات عالية التحمل", en: "High-durability fabrics" },
  { ar: "جودة صناعية معتمدة", en: "Certified industrial quality" },
  { ar: "تصميم يعكس الهوية المؤسسية", en: "Design reflecting corporate identity" },
];
const FACTORY_FEATS_B: ProductFeature[] = [
  { ar: "خامات عالية الجودة", en: "Premium-grade fabrics" },
  { ar: "جودة صناعية معتمدة", en: "Certified industrial quality" },
  { ar: "تصميم يعكس الهوية", en: "Design reflecting identity" },
];
const SHOP_DESC = {
  ar: "يونيفورم أنيق وعصري مصمم ليتناسب مع طبيعة المحلات ويعزز تجربة العملاء ويبرز هوية علامتك التجارية",
  en: "Elegant modern uniform designed to fit retail environments, enhance customer experience and showcase your brand identity",
};
const SHOP_FEATS: ProductFeature[] = [
  { ar: "تصميم جذاب يلفت الانتباه", en: "Eye-catching attractive design" },
  { ar: "راحة طوال ساعات العمل", en: "Comfort throughout work hours" },
  { ar: "يعكس هوية المحل بشكل مميز", en: "Distinctly reflects store identity" },
];

const products: ProductData[] = [
  {
    id: 1,
    name: { ar: "زي مدرسي فاخر", en: "Premium School Uniform" },
    category: "schools",
    image: "/images/products/schools/sample.png",
    description: {
      ar: "تصميم عصري يجمع بين الأناقة والراحة للطلاب مع أجود الخامات",
      en: "A modern design combining elegance and comfort for students with the finest fabrics",
    },
    features: [
      { ar: "قماش مقاوم للتجاعيد", en: "Wrinkle-resistant fabric" },
      { ar: "ألوان ثابتة", en: "Color-fast dyes" },
      { ar: "راحة", en: "All-day comfort" },
    ],
  },
  {
    id: 2,
    name: { ar: "ماريول بناتي أنيق", en: "Elegant Girls' School Pinafore" },
    category: "schools",
    image: "/images/products/schools/sample2.png",
    description: SCHOOL_DESC_GIRLS,
    features: [
      { ar: "مضاد للبكتيريا", en: "Anti-bacterial finish" },
      { ar: "سهل الغسيل", en: "Easy to wash" },
      { ar: "تصميم عصري", en: "Modern design" },
    ],
  },
  {
    id: 3,
    name: { ar: "ماريول بناتي أنيق", en: "Elegant Girls' School Pinafore" },
    category: "schools",
    image: "/images/products/schools/sample3.png",
    description: SCHOOL_DESC_GIRLS,
    features: [
      { ar: "قماش مرن", en: "Stretch fabric" },
      { ar: "تهوية ممتازة", en: "Excellent breathability" },
      { ar: "متانة عالية", en: "High durability" },
    ],
  },
  {
    id: 4,
    name: { ar: "ماريول بناتي أنيق", en: "Elegant Girls' School Pinafore" },
    category: "schools",
    image: "/images/products/schools/sample4.png",
    description: SCHOOL_DESC_GIRLS,
    features: [
      { ar: "قماش مرن", en: "Stretch fabric" },
      { ar: "تهوية ممتازة", en: "Excellent breathability" },
      { ar: "متانة عالية", en: "High durability" },
    ],
  },
  {
    id: 5,
    name: { ar: "ماريول بناتي أنيق", en: "Elegant Girls' School Pinafore" },
    category: "schools",
    image: "/images/products/schools/sample5.png",
    description: SCHOOL_DESC_GIRLS,
    features: [
      { ar: "قماش مرن", en: "Stretch fabric" },
      { ar: "تهوية ممتازة", en: "Excellent breathability" },
      { ar: "متانة عالية", en: "High durability" },
    ],
  },
  {
    id: 6,
    name: { ar: "يونيفورم قشطية", en: "Qishtiya Café Uniform" },
    category: "coffee",
    image: "/images/products/coffee/coffee1.jpeg",
    description: {
      ar: "تصميم عصري ناسب هوية الشركة مع خامات عالية الجودة",
      en: "Modern design matching your brand identity with premium fabrics",
    },
    features: [
      { ar: "قماش مرن", en: "Stretch fabric" },
      { ar: "جودة مضمونة", en: "Guaranteed quality" },
      { ar: "متانة عالية", en: "High durability" },
    ],
  },
  {
    id: 7,
    name: { ar: "يونيفورم مارتي", en: "Marty Café Uniform" },
    category: "coffee",
    image: "/images/products/coffee/coffee2.jpeg",
    description: {
      ar: "تصميم عصري ناسب هوية الشركة مع خامات عالية الجودة",
      en: "Modern design matching your brand identity with premium fabrics",
    },
    features: [
      { ar: "قماش مرن", en: "Stretch fabric" },
      { ar: "جودة مضمونة", en: "Guaranteed quality" },
      { ar: "تصميم أنيق", en: "Elegant design" },
    ],
  },
  {
    id: 8,
    name: { ar: "يونيفورم عنوان القهوة", en: "Onwan Coffee Uniform" },
    category: "coffee",
    image: "/images/products/coffee/coffee3.png",
    description: {
      ar: "تصميم عصري ناسب هوية الشركة مع خامات عالية الجودة",
      en: "Modern design matching your brand identity with premium fabrics",
    },
    features: [
      { ar: "قماش ممتاز", en: "Excellent fabric" },
      { ar: "جودة مضمونة", en: "Guaranteed quality" },
      { ar: "تصميم راقي", en: "Refined design" },
    ],
  },
  {
    id: 9,
    name: { ar: "يونيفورم مصنع", en: "Factory Workwear Uniform" },
    category: "factory",
    image: "/images/products/factory/factory1.jpeg",
    description: FACTORY_DESC,
    features: FACTORY_FEATS_A,
  },
  {
    id: 10,
    name: {
      ar: "يونيفورم الهيئة السعودية للسياحة",
      en: "Saudi Tourism Authority Uniform",
    },
    category: "factory",
    image: "/images/products/factory/factory2.jpeg",
    description: FACTORY_DESC,
    features: FACTORY_FEATS_A,
  },
  {
    id: 11,
    name: { ar: "يونيفورم فريق تقني", en: "Tech Team Uniform" },
    category: "factory",
    image: "/images/products/factory/factory3.jpeg",
    description: FACTORY_DESC,
    features: FACTORY_FEATS_A,
  },
  {
    id: 12,
    name: { ar: "يونيفورم عمال مصانع", en: "Factory Workers Uniform" },
    category: "factory",
    image: "/images/products/factory/factory4.jpeg",
    description: FACTORY_DESC,
    features: FACTORY_FEATS_A,
  },
  {
    id: 13,
    name: {
      ar: "يونيفورم قوات الدفاع الجوي الملكي السعودي",
      en: "Royal Saudi Air Defense Forces Uniform",
    },
    category: "factory",
    image: "/images/products/factory/factory5.jpeg",
    description: FACTORY_DESC,
    features: FACTORY_FEATS_B,
  },
  {
    id: 14,
    name: { ar: "يونيفورم وزارة السياحة", en: "Ministry of Tourism Uniform" },
    category: "factory",
    image: "/images/products/factory/factory6.jpeg",
    description: FACTORY_DESC,
    features: FACTORY_FEATS_B,
  },
  {
    id: 15,
    name: {
      ar: "يونيفورم شركة كرام السياحية",
      en: "Karam Tourism Co. Uniform",
    },
    category: "factory",
    image: "/images/products/factory/factory7.jpeg",
    description: FACTORY_DESC,
    features: [
      { ar: "خامات عالية الجودة", en: "Premium-grade fabrics" },
      { ar: "جودة صناعية فائقة", en: "Superior industrial quality" },
      { ar: "تصميم يعكس الهوية", en: "Design reflecting identity" },
    ],
  },
  {
    id: 17,
    name: {
      ar: "يونيفورم شركة RS للالكترونيات",
      en: "RS Electronics Co. Uniform",
    },
    category: "factory",
    image: "/images/products/factory/factory8.jpeg",
    description: FACTORY_DESC,
    features: FACTORY_FEATS_A,
  },
  {
    id: 20,
    name: { ar: "يونيفورم محل", en: "Retail Store Uniform" },
    category: "shops",
    image: "/images/products/shops/shops1.jpeg",
    description: SHOP_DESC,
    features: SHOP_FEATS,
  },
  {
    id: 21,
    name: { ar: "يونيفورم عالم جمولي", en: "Alam Jamouli Store Uniform" },
    category: "shops",
    image: "/images/products/shops/shops2.jpeg",
    description: SHOP_DESC,
    features: SHOP_FEATS,
  },
  {
    id: 22,
    name: { ar: "يونيفورم دكنة للعطور", en: "Diknah Perfumes Uniform" },
    category: "shops",
    image: "/images/products/shops/shops3.jpeg",
    description: {
      ar: "نقدم ملابس عمل أنيقة للمحلات تجمع بين الراحة والمظهر الاحترافي لتعزيز حضور علامتك التجارية أمام العملاء",
      en: "Elegant retail workwear that combines comfort and a professional look to strengthen your brand presence",
    },
    features: [
      { ar: "مظهر عصري وأنيق", en: "Modern, elegant look" },
      { ar: "خامات مريحة للاستخدام اليومي", en: "Comfortable everyday fabrics" },
      { ar: "تصميم متناسق مع هوية البراند", en: "Design aligned with brand identity" },
    ],
  },
  {
    id: 23,
    name: { ar: "يونيفورم A. Abo abaid", en: "A. Abo Abaid Uniform" },
    category: "shops",
    image: "/images/products/shops/shops4.jpeg",
    description: SHOP_DESC,
    features: SHOP_FEATS,
  },
  {
    id: 24,
    name: { ar: "يونيفورم مخازن", en: "Warehouse Uniform" },
    category: "shops",
    image: "/images/products/shops/shops5.jpeg",
    description: {
      ar: "يونيفورم عملي وأنيق مصمم ليتحمل طبيعة العمل اليومية داخل المحلات مع الحفاظ على مظهر احترافي مميز",
      en: "Practical, elegant uniform built for daily retail operations while keeping a professional look",
    },
    features: [
      { ar: "مناسب للاستخدام اليومي", en: "Suitable for daily use" },
      { ar: "خامات مريحة وعملية", en: "Comfortable practical fabrics" },
      { ar: "مظهر احترافي للعملاء", en: "Professional look for customers" },
    ],
  },
  {
    id: 28,
    name: {
      ar: "يونيفورم اّني وداني للحلويات",
      en: "Ani & Dani Sweets Uniform",
    },
    category: "shops",
    image: "/images/products/shops/shops6.jpeg",
    description: {
      ar: "ملابس عمل أنيقة ومريحة للمحلات توفر مظهراً موحداً يعكس الاحترافية ويساعد على تنظيم بيئة العمل",
      en: "Elegant, comfortable retail workwear providing a unified, professional look for an organized work environment",
    },
    features: [
      { ar: "راحة في الحركة طوال اليوم", en: "All-day freedom of movement" },
      { ar: "مظهر موحد للفريق", en: "Unified team appearance" },
      { ar: "تصميم بسيط وأنيق", en: "Simple, elegant design" },
    ],
  },
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

interface ProductsProps {
  lang: Lang;
}

const INITIAL_COUNT = 6;
const PAGE_SIZE = 6;

export default function ProductsSection({ lang }: ProductsProps) {
  const tr = t[lang];
  const dir: "rtl" | "ltr" = lang === "ar" ? "rtl" : "ltr";
  const categories = tr.products.categories.map((c) => ({
    ...c,
    icon: categoryIconMap[c.id] || "grid",
  }));
  const [activeCategory, setActiveCategory] = useState("all");
  const [visibleCount, setVisibleCount] = useState(INITIAL_COUNT);
  const [animateEntry, setAnimateEntry] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0.5, y: 0.5 });
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  const filteredProducts =
    activeCategory === "all"
      ? products
      : products.filter((p) => p.category === activeCategory);

  const visibleProducts = filteredProducts.slice(0, visibleCount);
  const hiddenCount = Math.max(0, filteredProducts.length - visibleCount);
  const canExpand = hiddenCount > 0;
  const canCollapse = visibleCount > INITIAL_COUNT;

  const changeCategory = (id: string) => {
    setActiveCategory(id);
    setVisibleCount(INITIAL_COUNT);
  };

  // Intersection Observer with reliable fallback so cards always render on mobile
  useEffect(() => {
    let fired = false;
    const trigger = () => {
      if (!fired) {
        fired = true;
        setAnimateEntry(true);
      }
    };
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) trigger();
      },
      { threshold: 0, rootMargin: "0px 0px -10% 0px" },
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    // Safety net: if observer never fires (some mobile browsers), force after 800ms
    const fallback = window.setTimeout(trigger, 800);
    return () => {
      observer.disconnect();
      window.clearTimeout(fallback);
    };
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
      aria-labelledby="products-heading"
      className="relative w-full overflow-hidden py-16 sm:py-24 md:py-32"
      style={{
        background:
          "linear-gradient(135deg, #F5FAFF 0%, #D6E7FF 50%, #A8C9F5 100%)",
        direction: dir,
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

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6">
        {/* Header */}
        <div
          className="mb-16 text-center"
          style={{
            animation: animateEntry
              ? "fadeInUp 0.8s ease-out forwards"
              : "none",
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
              {tr.products.badge}
            </span>
          </div>

          <h2
            id="products-heading"
            className="mb-6 text-4xl text-cyan-900 font-bold tight md:text-5xl lg:text-6xl"
            style={{ color: "#1B2A4A" }}
          >
            {tr.products.titlePart1}
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
              {tr.products.titleGold}
            </span>
          </h2>

          <p
            className="mx-auto max-w-xl text-lg font-bold leading-relaxed md:text-xl"
            style={{
              color: "rgba(27,42,74,0.75)",
              fontFamily: lang === "ar" ? "Cairo" : "Inter, sans-serif",
            }}
          >
            {tr.products.description}
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div
          className="mb-12 flex flex-wrap items-center justify-center gap-3"
          style={{
            animation: animateEntry
              ? "fadeInUp 0.8s ease-out 0.2s forwards"
              : "none",
          }}
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => changeCategory(category.id)}
              className="category-tab group relative flex items-center gap-2 rounded-full px-4 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base font-bold"
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
          className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
          style={{
            animation: animateEntry
              ? "fadeInUp 0.8s ease-out 0.4s forwards"
              : "none",
          }}
        >
          {visibleProducts.map((product, index) => (
            <article
              key={product.id}
              itemScope
              itemType="https://schema.org/Product"
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
              <meta
                itemProp="brand"
                content={lang === "ar" ? "خياط نسيج النهضة" : "Naseej Al Nahda"}
              />
              <meta
                itemProp="category"
                content={tr.products.categoryNames[product.category as keyof typeof tr.products.categoryNames] || ""}
              />
              {/* Image Container */}
              <div className="relative h-72 sm:h-80 w-full overflow-hidden">
                <Image
                  src={product.image}
                  alt={`${product.name[lang]} - ${tr.products.categoryNames[product.category as keyof typeof tr.products.categoryNames] || ""} - ${tr.products.altSuffix}`}
                  itemProp="image"
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  loading={index < 3 ? "eager" : "lazy"}
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
                    {tr.products.categoryNames[product.category as keyof typeof tr.products.categoryNames] || ""}
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
                    {product.name[lang]}
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
                  itemProp="name"
                  className="mb-3 text-xl font-black transition-colors duration-300"
                  style={{
                    color:
                      hoveredProduct === product.id ? "#C8963E" : "#1B2A4A",
                  }}
                >
                  {product.name[lang]}
                </h3>

                {/* Description */}
                <p
                  itemProp="description"
                  className="mb-4 text-sm leading-relaxed"
                  style={{ color: "rgba(27,42,74,0.7)" }}
                >
                  {product.description[lang]}
                </p>

                {/* Features */}
                <div className="mb-5 flex flex-wrap gap-2">
                  {product.features.map((feature, fi) => (
                    <span
                      key={`${product.id}-feat-${fi}`}
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
                      {feature[lang]}
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
                    {tr.products.orderButton}
                    <svg
                      className="transition-transform duration-300 group-hover/btn:-translate-x-1"
                      width="18"
                      height="18"
                      viewBox="0 0 20 20"
                      fill="none"
                      style={{
                        transform: lang === "en" ? "scaleX(-1)" : undefined,
                      }}
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
            </article>
          ))}
        </div>

        {/* See More / Show Less controls */}
        {(canExpand || canCollapse) && (
          <div className="mt-12 flex flex-col items-center gap-3">
            {canExpand && (
              <button
                type="button"
                onClick={() =>
                  setVisibleCount((c) =>
                    Math.min(c + PAGE_SIZE, filteredProducts.length),
                  )
                }
                aria-label={tr.products.seeMore}
                className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full px-7 sm:px-9 py-3.5 sm:py-4 font-bold text-base sm:text-lg transition-all duration-300 hover:scale-105 active:scale-95"
                style={{
                  background:
                    "linear-gradient(135deg, #ffffff 0%, #f4f7fc 100%)",
                  color: "#1B2A4A",
                  border: "2px solid rgba(200,150,62,0.5)",
                  boxShadow:
                    "0 10px 30px rgba(27,42,74,0.12), 0 0 0 4px rgba(200,150,62,0.08)",
                }}
              >
                {/* shine sweep */}
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100"
                  style={{
                    background:
                      "linear-gradient(110deg, transparent 35%, rgba(244,208,63,0.35) 50%, transparent 65%)",
                    transition: "opacity .3s",
                  }}
                />
                <span className="relative z-10 flex items-center gap-2">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="transition-transform duration-300 group-hover:translate-y-0.5"
                    aria-hidden="true"
                  >
                    <path d="M12 5v14" />
                    <path d="M5 12l7 7 7-7" />
                  </svg>
                  {tr.products.seeMore}
                </span>
                <span
                  className="relative z-10 inline-flex items-center justify-center rounded-full px-3 py-1 text-xs font-black"
                  style={{
                    background:
                      "linear-gradient(135deg, #C8963E 0%, #f4d03f 100%)",
                    color: "#0b1424",
                    boxShadow: "0 4px 12px rgba(200,150,62,0.4)",
                  }}
                >
                  {tr.products.seeMoreCount(hiddenCount)}
                </span>
              </button>
            )}

            {canCollapse && (
              <button
                type="button"
                onClick={() => {
                  setVisibleCount(INITIAL_COUNT);
                  sectionRef.current?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
                }}
                aria-label={tr.products.showLess}
                className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-bold transition-all duration-300 hover:scale-105"
                style={{
                  background: "transparent",
                  color: "#1B2A4A",
                  border: "1px solid rgba(27,42,74,0.25)",
                }}
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M5 12l7-7 7 7" />
                </svg>
                {tr.products.showLess}
              </button>
            )}
          </div>
        )}

        {/* Bottom CTA */}
        <div
          className="mt-16 text-center"
          style={{
            animation: animateEntry ? "fadeInUp 1s ease-out 0.6s both" : "none",
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
              {tr.products.finalCta}
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
                style={{ transform: lang === "en" ? "scaleX(-1)" : undefined }}
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
