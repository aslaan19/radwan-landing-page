"use client";

import Image from "next/image";
import type { Lang } from "../lib/i18n";
import { whatsappLink } from "../lib/i18n";

const copy = {
  ar: {
    eyebrow: "مشغل خياطة وزي موحّد • الرياض",
    line1: "نفصّل الزي.",
    line2: "ونخيط الهوية.",
    body: "من أول رسمة إلى آخر غرزة — نصمّم وننفّذ يونيفورم المدارس والشركات والمصانع والمطاعم بخامات تتحمل العمل وتفاصيل تليق باسمك.",
    primary: "ابدأ طلبك على واتساب",
    secondary: "شاهد شغلنا",
    craft: "تفصيل يدوي بإتقان",
    proof: "خياطة • تطريز • طباعة",
    tape: "مقاس مضبوط. حضور أقوى.",
    sectors: ["مدارس", "شركات", "مصانع", "مطاعم ومقاهي", "متاجر", "فرق عمل"],
    imageAlt: "خياط محترف يفصّل زياً موحداً داخل مشغل نسيج النهضة بالرياض",
  },
  en: {
    eyebrow: "UNIFORM TAILORING ATELIER • RIYADH",
    line1: "We tailor the uniform.",
    line2: "We stitch the identity.",
    body: "From the first sketch to the final stitch, we design and produce uniforms for schools, companies, factories and hospitality teams — built to work and made to represent you.",
    primary: "Start on WhatsApp",
    secondary: "See our work",
    craft: "Crafted by skilled hands",
    proof: "TAILORING • EMBROIDERY • PRINT",
    tape: "A precise fit. A stronger presence.",
    sectors: ["Schools", "Corporate", "Factories", "Hospitality", "Retail", "Work Teams"],
    imageAlt: "Professional tailor crafting a custom uniform at Naseej Al Nahda in Riyadh",
  },
} as const;

export default function HeroSection({ lang }: { lang: Lang }) {
  const c = copy[lang];

  return (
    <section id="home" className="atelier-hero" aria-labelledby="hero-title">
      <div className="pattern-grid" aria-hidden="true" />
      <div className="hero-thread" aria-hidden="true"><span /></div>

      <div className="hero-shell">
        <div className="hero-copy">
          <div className="hero-eyebrow reveal-up">
            <span className="spool-dot" />
            {c.eyebrow}
          </div>

          <h1 id="hero-title" className="hero-title">
            <span className="hero-title-line">{c.line1}</span>
            <span className="hero-title-line hero-title-accent">{c.line2}</span>
          </h1>

          <p className="hero-description">{c.body}</p>

          <div className="hero-actions">
            <a className="button button--primary" href={whatsappLink(lang)} target="_blank" rel="noopener noreferrer">
              <span>{c.primary}</span><b aria-hidden="true">↗︎</b>
            </a>
            <a className="button button--ghost" href="#products">
              <span>{c.secondary}</span><b aria-hidden="true">↓</b>
            </a>
          </div>

          <div className="hero-proof" aria-label={c.proof}>
            <span className="proof-number">10<sup>+</sup></span>
            <span>{lang === "ar" ? "سنوات خبرة في الزي الموحّد" : "years of uniform expertise"}</span>
            <i />
            <span>{c.proof}</span>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-photo-wrap">
            <Image
              src="/images/hero.png"
              alt={c.imageAlt}
              fill
              priority
              sizes="(max-width: 900px) 92vw, 46vw"
              className="hero-photo"
            />
            <div className="hero-photo-shade" />
            <div className="photo-label">
              <span>01</span>
              <strong>{c.craft}</strong>
            </div>
          </div>

          <div className="fabric-swatch fabric-swatch--rust" aria-hidden="true" />
          <div className="fabric-swatch fabric-swatch--cream" aria-hidden="true" />
          <div className="measure-tape" aria-hidden="true">
            <span>10</span><span>20</span><span>30</span><span>40</span><span>50</span>
          </div>
          <div className="hero-note">
            <span>✦</span>
            <p>{c.tape}</p>
          </div>
        </div>
      </div>

      <div className="sector-marquee" aria-hidden="true">
        <div>
          {[...c.sectors, ...c.sectors].map((sector, index) => (
            <span key={`${sector}-${index}`}>{sector}<i>✂</i></span>
          ))}
        </div>
      </div>
    </section>
  );
}
