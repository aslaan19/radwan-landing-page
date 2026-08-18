"use client";

import { useEffect, useState } from "react";
import type { Lang } from "../lib/i18n";
import { t } from "../lib/i18n";

export default function AtelierIntro({ lang }: { lang: Lang }) {
  const tr = t[lang];
  const [leaving, setLeaving] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const leaveTimer = window.setTimeout(() => setLeaving(true), 1900);
    const hideTimer = window.setTimeout(() => setHidden(true), 2800);
    return () => {
      window.clearTimeout(leaveTimer);
      window.clearTimeout(hideTimer);
    };
  }, []);

  if (hidden) return null;

  return (
    <div
      className={`atelier-intro ${leaving ? "atelier-intro--leaving" : ""}`}
      aria-hidden="true"
    >
      <div className="intro-panel intro-panel--top" />
      <div className="intro-panel intro-panel--bottom" />
      <div className="intro-mark">
        <span className="intro-kicker">
          {tr.hero.craftLabel}
        </span>
        <strong>{tr.brand.name}</strong>
        <span className="intro-stitch"><i /></span>
        <small>{tr.brand.tagline}</small>
      </div>
    </div>
  );
}
