import type { Metadata, Viewport } from "next";
import { Cairo } from "next/font/google";
import { Tajawal, Playpen_Sans_Arabic, Inter } from "next/font/google";
import { headers } from "next/headers";

import "./globals.css";
import { getLangFromPath, getDirFromLang, t } from "./lib/i18n";

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  variable: "--font-cairo",
  display: "swap",
});

const tajawal = Tajawal({
  subsets: ["arabic"],
  weight: ["400", "700", "900"],
  variable: "--font-heading",
  display: "swap",
});

const plex = Playpen_Sans_Arabic({
  subsets: ["arabic"],
  weight: ["300", "400", "500"],
  variable: "--font-body",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const SITE_URL = "https://nasejalnahdat.com";
const SITE_NAME_AR = "خياط نسيج النهضة";
const SITE_NAME_EN = "Naseej Al Nahda Uniforms";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#19284A" },
    { media: "(prefers-color-scheme: dark)", color: "#0B1E3A" },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default:
      "خياط نسيج النهضة | يونيفورم مدارس وشركات ومطاعم بالرياض - تفصيل زي موحد",
    template: `%s | ${SITE_NAME_AR}`,
  },
  description:
    "شركة خياط نسيج النهضة - متخصصون في تفصيل وخياطة اليونيفورم والزي الموحد في الرياض للمدارس والشركات والمصانع والمطاعم والمقاهي والمحلات التجارية.",
  authors: [{ name: SITE_NAME_AR, url: SITE_URL }],
  creator: SITE_NAME_AR,
  publisher: SITE_NAME_AR,
  applicationName: SITE_NAME_AR,
  category: "Business",
  classification: "Uniform Tailoring & Manufacturing",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/images/circlelogo.png", type: "image/png" },
    ],
    apple: [{ url: "/images/circlelogo.png" }],
    shortcut: "/favicon.ico",
  },
  manifest: "/manifest.webmanifest",
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  other: {
    "geo.region": "SA-01",
    "geo.placename": "Riyadh",
    "geo.position": "24.7136;46.7633",
    "ICBM": "24.7136, 46.7633",
  },
};

function localBusinessJsonLd(lang: "ar" | "en") {
  return {
    "@context": "https://schema.org",
    "@type": "ClothingStore",
    "@id": `${SITE_URL}/#organization`,
    name: lang === "ar" ? SITE_NAME_AR : SITE_NAME_EN,
    alternateName: [
      SITE_NAME_AR,
      SITE_NAME_EN,
      "شركة خياط نسيج النهضة",
      "نسيج النهضة للخياطة",
      "Naseej Al Nahda",
    ],
    url: SITE_URL,
    logo: `${SITE_URL}/images/mainLogo.jpeg`,
    image: [
      `${SITE_URL}/images/hero.png`,
      `${SITE_URL}/images/machine.png`,
      `${SITE_URL}/images/mainLogo.jpeg`,
    ],
    description:
      lang === "ar"
        ? "متخصصون في تفصيل وخياطة اليونيفورم والزي الموحد في الرياض للمدارس والشركات والمصانع والمطاعم والمحلات التجارية بأعلى جودة وأفضل الأسعار."
        : "Specialists in premium uniform tailoring in Riyadh for schools, companies, factories, restaurants and retail stores — highest quality at the best prices.",
    slogan:
      lang === "ar"
        ? "نصنع زيّك الموحّد بإتقان"
        : "We craft your uniform with mastery",
    foundingDate: "2015",
    priceRange: "$$",
    currenciesAccepted: "SAR",
    paymentAccepted: "Cash, Credit Card, Bank Transfer",
    telephone: "+966558231071",
    email: "Nasejalnahdat@gmail.com",
    address: {
      "@type": "PostalAddress",
      streetAddress:
        lang === "ar"
          ? "مبنى 8986 - شارع عبدالله بن مسعود - حي النسيم الغربي"
          : "Building 8986, Abdullah ibn Masoud St., Al Naseem Al Gharbi",
      addressLocality: lang === "ar" ? "الرياض" : "Riyadh",
      addressRegion: lang === "ar" ? "منطقة الرياض" : "Riyadh Province",
      postalCode: "14224",
      addressCountry: "SA",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 24.7136,
      longitude: 46.7633,
    },
    areaServed: [
      { "@type": "Country", name: lang === "ar" ? "السعودية" : "Saudi Arabia" },
      { "@type": "City", name: lang === "ar" ? "الرياض" : "Riyadh" },
      { "@type": "City", name: lang === "ar" ? "جدة" : "Jeddah" },
      { "@type": "City", name: lang === "ar" ? "الدمام" : "Dammam" },
    ],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Saturday",
          "Sunday",
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
        ],
        opens: "09:00",
        closes: "22:00",
      },
    ],
    sameAs: [
      "https://wa.me/966558231071",
      "https://maps.app.goo.gl/FkTH7ep39PhjsEV6A",
    ],
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+966558231071",
        contactType: "customer service",
        areaServed: "SA",
        availableLanguage: ["Arabic", "English"],
      },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "120",
      bestRating: "5",
      worstRating: "1",
    },
  };
}

function websiteJsonLd(lang: "ar" | "en") {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: lang === "ar" ? SITE_NAME_AR : SITE_NAME_EN,
    description:
      lang === "ar"
        ? "موقع شركة خياط نسيج النهضة لتفصيل وخياطة اليونيفورم في الرياض"
        : "Naseej Al Nahda - premium uniform tailoring in Riyadh",
    inLanguage: lang === "ar" ? "ar-SA" : "en",
    publisher: { "@id": `${SITE_URL}/#organization` },
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const hdrs = await headers();
  const pathname = hdrs.get("x-pathname") || "/";
  const lang = getLangFromPath(pathname);
  const dir = getDirFromLang(lang);
  const htmlLang = t[lang].htmlLang;

  return (
    <html lang={htmlLang} dir={dir}>
      <head>
        <link rel="canonical" href={`${SITE_URL}${lang === "en" ? "/en" : "/"}`} />
        <link rel="alternate" hrefLang="ar-SA" href={`${SITE_URL}/`} />
        <link rel="alternate" hrefLang="en" href={`${SITE_URL}/en`} />
        <link rel="alternate" hrefLang="x-default" href={`${SITE_URL}/`} />
        <meta name="format-detection" content="telephone=yes, email=yes, address=yes" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessJsonLd(lang)),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteJsonLd(lang)),
          }}
        />
      </head>
      <body
        className={`${cairo.variable} ${tajawal.variable} ${plex.variable} ${inter.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
