"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import type { Lang } from "../lib/i18n";
import { t, whatsappLink } from "../lib/i18n";

export default function HeroSection({ lang }: { lang: Lang }) {
  const tr = t[lang];
  const [activeWord, setActiveWord] = useState(0);
  const wordCount = tr.hero.cyclingWords.length;

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveWord((current) => (current + 1) % wordCount);
    }, 2400);
    return () => window.clearInterval(interval);
  }, [lang, wordCount]);

  const sectors = tr.products.categories.slice(1).map((category) => category.name);

  return (
    <section id="home" className="atelier-hero" aria-labelledby="hero-title">
      <div className="pattern-grid" aria-hidden="true" />
      <div className="hero-thread" aria-hidden="true"><span /></div>

      <div className="hero-shell">
        <div className="hero-copy">
          <div className="hero-eyebrow reveal-up">
            <span className="spool-dot" />
            {tr.hero.badge}
          </div>

          <h1 id="hero-title" className="hero-title">
            <span className="hero-title-line">{tr.hero.headlineLine1}</span>
            <span className="hero-title-line hero-title-accent">
              <span key={`${lang}-${activeWord}`} className="hero-word-cycle">{tr.hero.cyclingWords[activeWord]}</span>{" "}
              <span>{tr.hero.headlineTail}</span>
            </span>
          </h1>

          <p className="hero-description">{tr.hero.description}</p>

          <div className="hero-actions">
            <a className="button button--primary" href={whatsappLink(lang)} target="_blank" rel="noopener noreferrer">
              <span>{tr.hero.ctaContact}</span><b aria-hidden="true">↗︎</b>
            </a>
            <a className="button button--ghost" href="#products">
              <span>{tr.hero.ctaProducts}</span><b aria-hidden="true">↓</b>
            </a>
          </div>

          <div className="hero-proof" aria-label={tr.hero.qualityBadge}>
            <span className="proof-number">{tr.hero.stats[1].num}</span>
            <span>{tr.hero.stats[1].label}</span>
            <i />
            <span>{tr.hero.qualityBadge}</span>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-photo-wrap">
            <Image
              src="/images/hero.png"
              alt={tr.hero.h1Sr}
              fill
              priority
              sizes="(max-width: 900px) 92vw, 46vw"
              className="hero-photo"
            />
            <div className="hero-photo-shade" />
            <div className="photo-label">
              <span>01</span>
              <strong>{tr.hero.craftLabel}</strong>
            </div>
          </div>

          <div className="fabric-swatch fabric-swatch--rust" aria-hidden="true" />
          <div className="fabric-swatch fabric-swatch--cream" aria-hidden="true" />
          <div className="measure-tape" aria-hidden="true">
            <span>10</span><span>20</span><span>30</span><span>40</span><span>50</span>
          </div>
          <div className="hero-note">
            <span>✦</span>
            <p>{tr.hero.qualityBadge}</p>
          </div>
        </div>
      </div>

      <div className="sector-marquee" aria-hidden="true">
        <div>
          {[...sectors, ...sectors].map((sector, index) => (
            <span key={`${sector}-${index}`}>{sector}<i>✂︎</i></span>
          ))}
        </div>
      </div>
    </section>
  );
}
