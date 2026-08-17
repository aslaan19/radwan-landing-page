"use client";

import { useEffect, useState } from "react";
import type { Lang } from "../lib/i18n";

export default function AtelierIntro({ lang }: { lang: Lang }) {
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
          {lang === "ar" ? "تفصيل • خياطة • تطريز" : "CUT • SEW • EMBROIDER"}
        </span>
        <strong>{lang === "ar" ? "نسيج النهضة" : "NASEEJ AL NAHDA"}</strong>
        <span className="intro-stitch"><i /></span>
        <small>{lang === "ar" ? "نخيط الهوية" : "WE TAILOR IDENTITY"}</small>
      </div>
    </div>
  );
}
