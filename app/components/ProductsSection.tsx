"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import type { Lang } from "../lib/i18n";
import { t, whatsappLink } from "../lib/i18n";

type Category = "all" | "schools" | "coffee" | "factory" | "shops";

const products = [
  { id: 1, category: "schools", image: "/images/products/schools/sample.png", ar: "زي مدرسي فاخر", en: "Premium School Uniform" },
  { id: 2, category: "schools", image: "/images/products/schools/sample2.png", ar: "ماريول بناتي أنيق", en: "Elegant Girls' School Pinafore" },
  { id: 6, category: "coffee", image: "/images/products/coffee/coffee1.jpeg", ar: "يونيفورم قشطية", en: "Qishtiya Café Uniform" },
  { id: 7, category: "coffee", image: "/images/products/coffee/coffee2.jpeg", ar: "يونيفورم مارتي", en: "Marty Café Uniform" },
  { id: 9, category: "factory", image: "/images/products/factory/factory1.jpeg", ar: "يونيفورم مصنع", en: "Factory Workwear Uniform" },
  { id: 11, category: "factory", image: "/images/products/factory/factory3.jpeg", ar: "يونيفورم فريق تقني", en: "Tech Team Uniform" },
  { id: 14, category: "factory", image: "/images/products/factory/factory6.jpeg", ar: "يونيفورم وزارة السياحة", en: "Ministry of Tourism Uniform" },
  { id: 20, category: "shops", image: "/images/products/shops/shops1.jpeg", ar: "يونيفورم محل", en: "Retail Store Uniform" },
  { id: 23, category: "shops", image: "/images/products/shops/shops4.jpeg", ar: "يونيفورم A. Abo abaid", en: "A. Abo Abaid Uniform" },
  { id: 5, category: "schools", image: "/images/products/schools/sample5.png", ar: "ماريول بناتي أنيق", en: "Elegant Girls' School Pinafore" },
  { id: 8, category: "coffee", image: "/images/products/coffee/coffee3.png", ar: "يونيفورم عنوان القهوة", en: "Onwan Coffee Uniform" },
  { id: 17, category: "factory", image: "/images/products/factory/factory8.jpeg", ar: "يونيفورم شركة RS للالكترونيات", en: "RS Electronics Co. Uniform" },
] as const;

export default function ProductsSection({ lang }: { lang: Lang }) {
  const [category, setCategory] = useState<Category>("all");
  const [expanded, setExpanded] = useState(false);
  const tr = t[lang].products;
  const categoryNames = Object.fromEntries(tr.categories.map((item) => [item.id, item.name])) as Record<Category, string>;
  const filtered = useMemo(() => products.filter((product) => category === "all" || product.category === category), [category]);
  const visible = expanded ? filtered : filtered.slice(0, 8);

  return (
    <section id="products" className="atelier-products" aria-labelledby="products-title">
      <div className="products-shell">
        <div className="products-heading reveal-on-view">
          <div><span className="section-kicker section-kicker--light"><i />{tr.badge}</span><h2 id="products-title" className="section-title section-title--light">{tr.titlePart1} <em>{tr.titleGold}</em></h2></div>
          <p>{tr.description}</p>
        </div>

        <div className="filter-row" role="group" aria-label={lang === "ar" ? "تصفية المنتجات" : "Filter products"}>
          {(Object.keys(categoryNames) as Category[]).map((key) => (
            <button key={key} className={category === key ? "is-active" : ""} onClick={() => { setCategory(key); setExpanded(false); }}>
              {categoryNames[key]}
            </button>
          ))}
        </div>

        <div className="product-grid">
          {visible.map((product, index) => (
            <article className={`product-card product-card--${index % 4}`} key={product.id}>
              <div className="product-image-wrap">
                <Image src={product.image} alt={`${lang === "ar" ? product.ar : product.en} - ${tr.altSuffix}`} fill sizes="(max-width: 640px) 92vw, (max-width: 1000px) 45vw, 25vw" className="product-image" />
                <span className="product-index">{String(index + 1).padStart(2, "0")}</span>
                <span className="product-made">{tr.badge}</span>
                <div className="product-overlay"><a href={whatsappLink(lang)} target="_blank" rel="noopener noreferrer">{tr.orderButton}<b>↗︎</b></a></div>
              </div>
              <div className="product-meta"><span>{categoryNames[product.category]}</span><h3>{lang === "ar" ? product.ar : product.en}</h3></div>
            </article>
          ))}
        </div>

        {filtered.length > 8 && (
          <button className="collection-toggle" onClick={() => setExpanded(!expanded)}>
            {expanded ? tr.showLess : tr.seeMore}<span>{expanded ? "↑" : tr.seeMoreCount(filtered.length - 8)}</span>
          </button>
        )}
      </div>
    </section>
  );
}
