import type { Metadata } from "next";
import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import ProductsSection from "./components/ProductsSection";

const SITE_URL = "https://nasejalnahdat.com";
const LANG = "ar" as const;

export const metadata: Metadata = {
  title:
    "يونيفورم مدارس وشركات ومطاعم بالرياض | خياط نسيج النهضة لتفصيل الزي الموحد",
  description:
    "اطلب يونيفورمك الموحد من خياط نسيج النهضة بالرياض - تفصيل احترافي لمدارس، شركات، مصانع، مطاعم ومحلات تجارية بأجود الخامات. خبرة +10 سنوات وتسليم في الموعد.",
  keywords: [
    "يونيفورم",
    "يونيفورم الرياض",
    "خياطة يونيفورم",
    "خياط الرياض",
    "تفصيل يونيفورم",
    "يونيفورم مدارس",
    "زي مدرسي",
    "زي موحد",
    "يونيفورم شركات",
    "يونيفورم مصانع",
    "يونيفورم مطاعم",
    "يونيفورم مقاهي",
    "يونيفورم محلات تجارية",
    "ملابس عمل",
    "بدلات عمل",
    "تصميم يونيفورم",
    "يونيفورم بالجملة",
    "خياط نسيج النهضة",
    "نسيج النهضة",
  ],
  alternates: {
    canonical: SITE_URL,
    languages: {
      "ar-SA": SITE_URL,
      en: `${SITE_URL}/en`,
      "x-default": SITE_URL,
    },
  },
  openGraph: {
    type: "website",
    locale: "ar_SA",
    url: SITE_URL,
    siteName: "خياط نسيج النهضة",
    title:
      "يونيفورم مدارس وشركات ومطاعم بالرياض | خياط نسيج النهضة",
    description:
      "تفصيل وخياطة اليونيفورم والزي الموحد بالرياض. خبرة +10 سنوات في خدمة المدارس والشركات والمصانع والمطاعم والمحلات التجارية.",
    images: [
      {
        url: "/images/hero.png",
        width: 1200,
        height: 630,
        alt: "خياط نسيج النهضة - يونيفورم مدارس وشركات بالرياض",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "يونيفورم مدارس وشركات ومطاعم بالرياض | خياط نسيج النهضة",
    description:
      "تفصيل اليونيفورم والزي الموحد بالرياض. خبرة +10 سنوات. مدارس، شركات، مصانع، مطاعم، محلات تجارية.",
    images: ["/images/hero.png"],
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "الرئيسية", item: SITE_URL },
    { "@type": "ListItem", position: 2, name: "من نحن", item: `${SITE_URL}/#about` },
    { "@type": "ListItem", position: 3, name: "منتجاتنا", item: `${SITE_URL}/#products` },
    { "@type": "ListItem", position: 4, name: "تواصل معنا", item: `${SITE_URL}/#contact` },
  ],
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "ما هي خدمات خياط نسيج النهضة؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "نقدم خدمات تفصيل وخياطة اليونيفورم والزي الموحد للمدارس والشركات والمصانع والمطاعم والمقاهي والمحلات التجارية بأعلى جودة وأفضل الخامات في الرياض.",
      },
    },
    {
      "@type": "Question",
      name: "أين يقع مقر شركة خياط نسيج النهضة؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "نقع في حي النسيم الغربي - شارع عبدالله بن مسعود - مبنى 8986 - الرياض - المملكة العربية السعودية.",
      },
    },
    {
      "@type": "Question",
      name: "كم سنة خبرة لديكم في خياطة اليونيفورم؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "نملك أكثر من 10 سنوات من الخبرة في تصميم وتفصيل اليونيفورم والزي الموحد لأكثر من 50 شركة ومؤسسة في المملكة.",
      },
    },
    {
      "@type": "Question",
      name: "هل تقدمون يونيفورم مدارس؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "نعم، نقدم زي مدرسي موحد بتصاميم عصرية وخامات مريحة ومتينة لجميع المراحل الدراسية، مع ضمان الجودة والثبات في الألوان.",
      },
    },
    {
      "@type": "Question",
      name: "هل تتوفر خدمة تفصيل يونيفورم بالجملة للشركات؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "نعم، نوفر خدمات تفصيل اليونيفورم بالجملة للشركات والمصانع بأسعار تنافسية وجودة عالية مع إمكانية تخصيص التصميم والشعار.",
      },
    },
    {
      "@type": "Question",
      name: "كيف يمكنني التواصل لطلب يونيفورم؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "يمكنك التواصل عبر الواتساب أو الجوال على 0558231071، أو على الهاتف الأرضي 0112408697، أو عبر البريد الإلكتروني Nasejalnahdat@gmail.com.",
      },
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbJsonLd),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <div dir="rtl" className="font-sans antialiased">
        <Header lang={LANG} />
        <main id="main-content">
          <HeroSection lang={LANG} />
          <AboutSection lang={LANG} />
          <ProductsSection lang={LANG} />
          <ContactSection lang={LANG} />
        </main>
        <Footer lang={LANG} />
      </div>
    </>
  );
}
