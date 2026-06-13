"use client";
import Link from "next/link";
import { useState } from "react";
import type { Lang } from "../lib/i18n";
import { t } from "../lib/i18n";

const GOLD = "#C8963E";
const GOLD_LT = "#f4d03f";

interface Props {
  lang: Lang;
  variant?: "header" | "mobile";
}

export default function LanguageToggle({ lang, variant = "header" }: Props) {
  const [hovered, setHovered] = useState<Lang | null>(null);
  const isAr = lang === "ar";
  const labels = t[lang].toggle;

  return (
    <Link
      href={isAr ? "/en" : "/"}
      prefetch={false}
      aria-label={labels.label}
      title={labels.label}
      onMouseLeave={() => setHovered(null)}
      style={{
        position: "relative",
        display: "inline-flex",
        alignItems: "center",
        gap: 6,
        padding: 4,
        borderRadius: 999,
        background: "rgba(255,255,255,0.04)",
        border: "1px solid rgba(200,150,62,0.35)",
        backdropFilter: "blur(8px)",
        WebkitBackdropFilter: "blur(8px)",
        boxShadow: "inset 0 0 8px rgba(0,0,0,0.2)",
        textDecoration: "none",
        cursor: "pointer",
        userSelect: "none",
        overflow: "hidden",
        height: variant === "mobile" ? 38 : 36,
        direction: "ltr",
      }}
    >
      <style>{`
        @keyframes lt-shine {
          0%   { transform: translateX(-100%); }
          60%  { transform: translateX(120%); }
          100% { transform: translateX(120%); }
        }
        @keyframes lt-pulseGlow {
          0%, 100% { box-shadow: 0 0 12px rgba(200,150,62,0.5), 0 0 22px rgba(244,208,63,0.25); }
          50%      { box-shadow: 0 0 18px rgba(200,150,62,0.75), 0 0 32px rgba(244,208,63,0.4); }
        }
        .lt-slider {
          position: absolute;
          top: 4px; bottom: 4px;
          width: calc(50% - 4px);
          border-radius: 999px;
          background: linear-gradient(135deg, ${GOLD}, ${GOLD_LT});
          transition: transform .45s cubic-bezier(.34,1.56,.64,1), background .3s;
          animation: lt-pulseGlow 2.6s ease-in-out infinite;
        }
        .lt-slider::after {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 999px;
          background: linear-gradient(110deg, transparent 0%, rgba(255,255,255,0.5) 50%, transparent 100%);
          transform: translateX(-100%);
          animation: lt-shine 3.5s ease-in-out infinite;
        }
        .lt-seg {
          position: relative;
          z-index: 2;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 4px;
          padding: 0 12px;
          height: 100%;
          min-width: 52px;
          font-weight: 800;
          font-size: 12px;
          letter-spacing: 0.5px;
          transition: color .3s, transform .3s;
          line-height: 1;
        }
      `}</style>

      <span
        className="lt-slider"
        style={{
          left: isAr ? 4 : "auto",
          right: isAr ? "auto" : 4,
          transform: "translateZ(0)",
        }}
      />

      <span
        className="lt-seg"
        style={{
          color: isAr ? "#0b1424" : hovered === "ar" ? GOLD_LT : "rgba(255,255,255,0.7)",
          fontFamily: "'Cairo', sans-serif",
          textShadow: isAr ? "0 1px 0 rgba(255,255,255,0.25)" : "none",
        }}
        onMouseEnter={() => setHovered("ar")}
      >
        {/* Globe icon (left segment) */}
        {isAr && (
          <svg
            width="12"
            height="12"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            aria-hidden="true"
          >
            <circle cx="12" cy="12" r="9" />
            <path d="M3 12h18M12 3a14 14 0 010 18M12 3a14 14 0 000 18" />
          </svg>
        )}
        {labels.ar}
      </span>

      <span
        className="lt-seg"
        style={{
          color: !isAr ? "#0b1424" : hovered === "en" ? GOLD_LT : "rgba(255,255,255,0.7)",
          fontFamily: "system-ui, sans-serif",
          textShadow: !isAr ? "0 1px 0 rgba(255,255,255,0.25)" : "none",
        }}
        onMouseEnter={() => setHovered("en")}
      >
        {!isAr && (
          <svg
            width="12"
            height="12"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            aria-hidden="true"
          >
            <circle cx="12" cy="12" r="9" />
            <path d="M3 12h18M12 3a14 14 0 010 18M12 3a14 14 0 000 18" />
          </svg>
        )}
        {labels.en}
      </span>
    </Link>
  );
}
