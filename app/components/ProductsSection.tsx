"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import type { Lang } from "../lib/i18n";
import { whatsappLink } from "../lib/i18n";

type Category = "all" | "schools" | "hospitality" | "industry" | "retail";

const products = [
  { id: 1, category: "schools", image: "/images/products/schools/sample.png", ar: "زي مدرسي عملي", en: "Everyday school uniform" },
  { id: 2, category: "schools", image: "/images/products/schools/sample2.png", ar: "مريول مدرسي", en: "School pinafore" },
  { id: 3, category: "hospitality", image: "/images/products/coffee/coffee1.jpeg", ar: "زي ضيافة ومقاهي", en: "Café & hospitality wear" },
  { id: 4, category: "hospitality", image: "/images/products/coffee/coffee2.jpeg", ar: "يونيفورم باريستا", en: "Barista uniform" },
  { id: 5, category: "industry", image: "/images/products/factory/factory1.jpeg", ar: "ملابس عمل عاكسة", en: "Reflective workwear" },
  { id: 6, category: "industry", image: "/images/products/factory/factory3.jpeg", ar: "زي مصانع وشركات", en: "Industrial uniform" },
  { id: 7, category: "industry", image: "/images/products/factory/factory6.jpeg", ar: "بدلة فنيين", en: "Technical coverall" },
  { id: 8, category: "retail", image: "/images/products/shops/shops1.jpeg", ar: "زي متاجر أنيق", en: "Smart retail uniform" },
  { id: 9, category: "retail", image: "/images/products/shops/shops4.jpeg", ar: "زي فريق المبيعات", en: "Sales team uniform" },
  { id: 10, category: "schools", image: "/images/products/schools/sample5.png", ar: "زي طلابي مريح", en: "Comfort school set" },
  { id: 11, category: "hospitality", image: "/images/products/coffee/coffee3.png", ar: "مريلة مطاعم", en: "Restaurant apron" },
  { id: 12, category: "industry", image: "/images/products/factory/factory8.jpeg", ar: "يونيفورم سلامة", en: "Safety uniform" },
] as const;

const categoryNames = {
  ar: { all: "الكل", schools: "مدارس", hospitality: "مطاعم ومقاهي", industry: "شركات ومصانع", retail: "متاجر" },
  en: { all: "All work", schools: "Schools", hospitality: "Hospitality", industry: "Corporate & Industry", retail: "Retail" },
} as const;

const copy = {
  ar: { kicker: "من شغلنا", title: "زيّ يتشاف. جودة تتلمس.", body: "نماذج حقيقية من تنفيذنا لقطاعات مختلفة. كل تصميم يمكن تخصيصه بالألوان، الشعار، الخامة والمقاسات.", custom: "صناعة حسب الطلب", cta: "أريد زياً مشابهًا", more: "عرض المجموعة كاملة", less: "عرض أقل" },
  en: { kicker: "SELECTED WORK", title: "Seen in the details. Felt in the quality.", body: "Real examples made for different industries. Every piece can be customized by color, logo, fabric and fit.", custom: "MADE TO ORDER", cta: "I want something similar", more: "Show the full collection", less: "Show less" },
} as const;

export default function ProductsSection({ lang }: { lang: Lang }) {
  const [category, setCategory] = useState<Category>("all");
  const [expanded, setExpanded] = useState(false);
  const c = copy[lang];
  const filtered = useMemo(() => products.filter((product) => category === "all" || product.category === category), [category]);
  const visible = expanded ? filtered : filtered.slice(0, 8);

  return (
    <section id="products" className="atelier-products" aria-labelledby="products-title">
      <div className="products-shell">
        <div className="products-heading reveal-on-view">
          <div><span className="section-kicker section-kicker--light"><i />{c.kicker}</span><h2 id="products-title" className="section-title section-title--light">{c.title}</h2></div>
          <p>{c.body}</p>
        </div>

        <div className="filter-row" role="group" aria-label={lang === "ar" ? "تصفية المنتجات" : "Filter products"}>
          {(Object.keys(categoryNames[lang]) as Category[]).map((key) => (
            <button key={key} className={category === key ? "is-active" : ""} onClick={() => { setCategory(key); setExpanded(false); }}>
              {categoryNames[lang][key]}
            </button>
          ))}
        </div>

        <div className="product-grid">
          {visible.map((product, index) => (
            <article className={`product-card product-card--${index % 4}`} key={product.id}>
              <div className="product-image-wrap">
                <Image src={product.image} alt={`${lang === "ar" ? product.ar : product.en} - ${lang === "ar" ? "من أعمال نسيج النهضة" : "by Naseej Al Nahda"}`} fill sizes="(max-width: 640px) 92vw, (max-width: 1000px) 45vw, 25vw" className="product-image" />
                <span className="product-index">{String(index + 1).padStart(2, "0")}</span>
                <span className="product-made">{c.custom}</span>
                <div className="product-overlay"><a href={whatsappLink(lang, `${lang === "ar" ? "السلام عليكم، أريد زياً مشابهًا لهذا التصميم" : "Hello, I would like a uniform similar to this design"}: ${lang === "ar" ? product.ar : product.en}`)} target="_blank" rel="noopener noreferrer">{c.cta}<b>↗︎</b></a></div>
              </div>
              <div className="product-meta"><span>{categoryNames[lang][product.category]}</span><h3>{lang === "ar" ? product.ar : product.en}</h3></div>
            </article>
          ))}
        </div>

        {filtered.length > 8 && (
          <button className="collection-toggle" onClick={() => setExpanded(!expanded)}>
            {expanded ? c.less : c.more}<span>{expanded ? "↑" : `+${filtered.length - 8}`}</span>
          </button>
        )}
      </div>
    </section>
  );
}
