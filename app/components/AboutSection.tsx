"use client";

import Image from "next/image";
import type { Lang } from "../lib/i18n";

const copy = {
  ar: {
    kicker: "داخل المشغل",
    title: "هنا تتحوّل الفكرة إلى زيّ يحكي عنك.",
    body: "الخياطة عندنا ليست مجرد ماكينة وقماش. نفهم طبيعة عمل فريقك، نختار الخامة المناسبة، ونضبط كل تفصيلة حتى يخرج الزي عمليًا، مريحًا، ومعبّرًا عن هويتك.",
    machineAlt: "ماكينات خياطة وأقمشة داخل مشغل نسيج النهضة",
    stepsTitle: "رحلة كل قطعة",
    steps: [
      ["01", "نفهم", "نشاطك، فريقك، والهوية المطلوبة"],
      ["02", "نصمّم", "الألوان، القصّة، ومكان الشعار"],
      ["03", "ننفّذ", "قص دقيق وخياطة وتشطيب محترف"],
      ["04", "نسلّم", "مقاسات مضبوطة وفي الموعد"],
    ],
    note: "كل غرزة محسوبة",
  },
  en: {
    kicker: "INSIDE THE ATELIER",
    title: "Where an idea becomes a uniform that speaks for you.",
    body: "Tailoring is more than fabric and a machine. We understand how your team works, select the right material, and refine every detail until the result is practical, comfortable and unmistakably yours.",
    machineAlt: "Sewing machines and fabric inside the Naseej Al Nahda atelier",
    stepsTitle: "The journey of every piece",
    steps: [
      ["01", "Understand", "Your work, team and brand identity"],
      ["02", "Design", "Colors, cut and logo placement"],
      ["03", "Produce", "Precise cutting, sewing and finishing"],
      ["04", "Deliver", "A precise fit, right on time"],
    ],
    note: "Every stitch is considered",
  },
} as const;

export default function AboutSection({ lang }: { lang: Lang }) {
  const c = copy[lang];
  return (
    <section id="about" className="atelier-about" aria-labelledby="about-title">
      <div className="about-shell">
        <div className="about-visual reveal-on-view">
          <div className="pattern-card" aria-hidden="true">
            <span className="pattern-arc" /><span className="pattern-line" />
            <small>42</small><b>CM</b>
          </div>
          <div className="machine-frame">
            <Image src="/images/machine.png" alt={c.machineAlt} fill sizes="(max-width: 900px) 92vw, 45vw" className="machine-photo" />
          </div>
          <div className="tailor-stamp">
            <span>✂︎</span><strong>{c.note}</strong><small>EST. 2015 • RIYADH</small>
          </div>
        </div>

        <div className="about-copy reveal-on-view">
          <span className="section-kicker"><i />{c.kicker}</span>
          <h2 id="about-title" className="section-title">{c.title}</h2>
          <p className="section-lead">{c.body}</p>

          <div className="process-block">
            <h3>{c.stepsTitle}</h3>
            <ol>
              {c.steps.map(([num, title, text]) => (
                <li key={num}>
                  <span>{num}</span>
                  <div><strong>{title}</strong><p>{text}</p></div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
