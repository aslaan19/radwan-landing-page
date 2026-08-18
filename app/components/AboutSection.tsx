"use client";

import Image from "next/image";
import type { Lang } from "../lib/i18n";
import { t } from "../lib/i18n";

export default function AboutSection({ lang }: { lang: Lang }) {
  const tr = t[lang].about;
  return (
    <section id="about" className="atelier-about" aria-labelledby="about-title">
      <div className="about-shell">
        <div className="about-visual reveal-on-view">
          <div className="pattern-card" aria-hidden="true">
            <span className="pattern-arc" /><span className="pattern-line" />
            <small>42</small><b>CM</b>
          </div>
          <div className="machine-frame">
            <Image src="/images/machine.png" alt={tr.machineAlt} fill sizes="(max-width: 900px) 92vw, 45vw" className="machine-photo" />
          </div>
          <div className="tailor-stamp">
            <span>✂︎</span><strong>{tr.yearsBadge}</strong><small>{tr.yearsLabel}</small>
          </div>
        </div>

        <div className="about-copy reveal-on-view">
          <span className="section-kicker"><i />{tr.badge}</span>
          <h2 id="about-title" className="section-title">{tr.titlePart1} <em>{tr.titleGold}</em> {tr.titlePart2}</h2>
          <p className="section-lead">{tr.description}</p>

          <div className="process-block">
            <ol>
              {tr.highlights.map((highlight) => (
                <li key={highlight.icon}>
                  <span>{highlight.icon}</span>
                  <div><strong>{highlight.label}</strong><p>{highlight.desc}</p></div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
