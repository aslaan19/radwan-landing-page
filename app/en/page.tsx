import type { Metadata } from "next";
import AboutSection from "../components/AboutSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import ProductsSection from "../components/ProductsSection";

const SITE_URL = "https://nasejalnahdat.com";
const PAGE_URL = `${SITE_URL}/en`;
const LANG = "en" as const;

export const metadata: Metadata = {
  title: {
    absolute:
      "Custom Uniforms in Riyadh | Naseej Al Nahda - Schools, Companies, Restaurants Tailoring",
  },
  description:
    "Order custom uniforms from Naseej Al Nahda in Riyadh - professional tailoring for schools, companies, factories, restaurants and retail stores. Premium fabrics, 10+ years of experience, on-time delivery.",
  keywords: [
    "uniforms Riyadh",
    "custom uniforms Saudi Arabia",
    "uniform tailoring Riyadh",
    "school uniforms Riyadh",
    "school uniforms Saudi Arabia",
    "corporate uniforms",
    "company uniforms Riyadh",
    "factory uniforms Saudi Arabia",
    "restaurant uniforms",
    "cafe uniforms Riyadh",
    "retail uniforms",
    "workwear Riyadh",
    "uniform manufacturer Saudi Arabia",
    "wholesale uniforms Riyadh",
    "custom embroidered uniforms",
    "Naseej Al Nahda",
    "Naseej Al Nahda Uniforms",
    "uniform supplier Riyadh",
    "uniform design Saudi Arabia",
    "bulk uniforms Riyadh",
  ],
  alternates: {
    canonical: PAGE_URL,
    languages: {
      "ar-SA": SITE_URL,
      en: PAGE_URL,
      "x-default": SITE_URL,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: ["ar_SA"],
    url: PAGE_URL,
    siteName: "Naseej Al Nahda Uniforms",
    title:
      "Custom Uniforms in Riyadh | Schools, Companies, Restaurants - Naseej Al Nahda",
    description:
      "Premium uniform tailoring in Riyadh, Saudi Arabia. 10+ years serving schools, companies, factories, restaurants and retail.",
    images: [
      {
        url: "/images/hero.png",
        width: 1200,
        height: 630,
        alt: "Naseej Al Nahda - custom uniforms for schools and companies in Riyadh",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Custom Uniforms in Riyadh | Naseej Al Nahda Uniforms",
    description:
      "Premium uniform tailoring in Riyadh. Schools, companies, factories, restaurants, retail. 10+ years experience.",
    images: ["/images/hero.png"],
  },
  other: {
    "content-language": "en",
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: PAGE_URL },
    { "@type": "ListItem", position: 2, name: "About", item: `${PAGE_URL}#about` },
    { "@type": "ListItem", position: 3, name: "Products", item: `${PAGE_URL}#products` },
    { "@type": "ListItem", position: 4, name: "Contact", item: `${PAGE_URL}#contact` },
  ],
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What services does Naseej Al Nahda offer?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We offer premium uniform tailoring and manufacturing for schools, companies, factories, restaurants, cafés and retail stores in Riyadh — top quality with the finest fabrics.",
      },
    },
    {
      "@type": "Question",
      name: "Where is Naseej Al Nahda located?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We are located at Building 8986, Abdullah ibn Masoud Street, Al Naseem Al Gharbi, Riyadh, Saudi Arabia.",
      },
    },
    {
      "@type": "Question",
      name: "How many years of experience do you have in uniform tailoring?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We have over 10 years of experience designing and tailoring uniforms for more than 50 companies and institutions across the Kingdom.",
      },
    },
    {
      "@type": "Question",
      name: "Do you provide school uniforms?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — we provide modern, comfortable and durable school uniforms for all grade levels with quality and color-fast guarantees.",
      },
    },
    {
      "@type": "Question",
      name: "Do you offer wholesale uniform tailoring for companies?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — we offer wholesale uniform tailoring for companies and factories at competitive prices with custom design and logo options.",
      },
    },
    {
      "@type": "Question",
      name: "How can I contact you to order uniforms?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You can reach us via WhatsApp or mobile at +966544868983, landline +966112408697, or email Nasejalnahdat@gmail.com.",
      },
    },
  ],
};

const productCatalogJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Naseej Al Nahda Uniform Collection",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      item: {
        "@type": "Product",
        name: "School Uniforms",
        description:
          "Modern school uniforms with premium fabrics for all educational stages.",
        brand: { "@type": "Brand", name: "Naseej Al Nahda" },
        category: "School wear",
      },
    },
    {
      "@type": "ListItem",
      position: 2,
      item: {
        "@type": "Product",
        name: "Corporate & Factory Uniforms",
        description:
          "Professional workwear for companies and factories combining durability and elegance.",
        brand: { "@type": "Brand", name: "Naseej Al Nahda" },
        category: "Workwear",
      },
    },
    {
      "@type": "ListItem",
      position: 3,
      item: {
        "@type": "Product",
        name: "Restaurant & Café Uniforms",
        description: "Modern unified attire for restaurant and café teams.",
        brand: { "@type": "Brand", name: "Naseej Al Nahda" },
        category: "Hospitality uniforms",
      },
    },
    {
      "@type": "ListItem",
      position: 4,
      item: {
        "@type": "Product",
        name: "Retail Store Uniforms",
        description:
          "Elegant unified uniforms for retail stores reinforcing brand identity.",
        brand: { "@type": "Brand", name: "Naseej Al Nahda" },
        category: "Retail workwear",
      },
    },
  ],
};

export default function HomeEnglish() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(productCatalogJsonLd),
        }}
      />
      <div dir="ltr" className="font-sans antialiased">
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
