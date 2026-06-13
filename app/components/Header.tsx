"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import type { Lang } from "../lib/i18n";
import { t } from "../lib/i18n";
import LanguageToggle from "./LanguageToggle";

const GOLD = "#C8963E";
const GOLD_LT = "#f4d03f";
const NAV_BG = "#19284A";

interface Props {
  lang: Lang;
}

export default function Header({ lang }: Props) {
  const tr = t[lang];
  const dir: "rtl" | "ltr" = lang === "ar" ? "rtl" : "ltr";
  const navLinks = [
    { label: tr.nav.home, href: "#home" },
    { label: tr.nav.about, href: "#about" },
    { label: tr.nav.products, href: "#products" },
    { label: tr.nav.contact, href: "#contact" },
  ];

  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("#home");
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    const update = () => setIsMobile(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    const fn = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const go = (href: string) => {
    setActive(href);
    setMenuOpen(false);
  };

  const arrowChar = lang === "ar" ? "←" : "→";

  return (
    <>
      <style>{`
        @keyframes shimLine {
          0%   { background-position: 200% center; }
          100% { background-position: -200% center; }
        }
        @keyframes fadeOverlay {
          from { opacity: 0; }
          to   { opacity: 1; }
        }

        .dnl {
          position: relative;
          font-size: 15px; font-weight: 700;
          color: rgba(255,255,255,0.82);
          text-decoration: none;
          padding: 4px 0;
          transition: color .25s;
          white-space: nowrap;
        }
        .dnl::after {
          content: '';
          position: absolute; bottom: -3px; right: 0;
          width: 0; height: 2px; border-radius: 2px;
          background: linear-gradient(90deg, transparent, ${GOLD}, ${GOLD_LT});
          transition: width .35s cubic-bezier(.4,0,.2,1);
        }
        .dnl:hover, .dnl.on { color: ${GOLD}; }
        .dnl:hover::after, .dnl.on::after { width: 100%; }

        .mnl {
          display: flex; align-items: center; justify-content: space-between;
          padding: 17px 0; font-size: 17px; font-weight: 700;
          color: rgba(255,255,255,0.85); text-decoration: none;
          border-bottom: 1px solid rgba(255,255,255,0.07);
          transition: color .2s, padding-${dir === "rtl" ? "right" : "left"} .25s;
        }
        .mnl:hover, .mnl.on { color: ${GOLD}; padding-${dir === "rtl" ? "right" : "left"}: 10px; }
        .mnl .arr { color: ${GOLD}; font-size: 14px; opacity: 0; transition: opacity .2s; }
        .mnl:hover .arr, .mnl.on .arr { opacity: 1; }

        .cta-hdr {
          position: relative; overflow: hidden;
          background: linear-gradient(135deg, ${GOLD}, ${GOLD_LT});
          color: #0b1424; font-weight: 900; font-size: 14px;
          padding: 10px 24px; border-radius: 50px;
          text-decoration: none; white-space: nowrap;
          display: inline-flex; align-items: center; gap: 6px;
          transition: all .3s;
          box-shadow: 0 4px 18px rgba(200,150,62,0.35);
          cursor: pointer; border: none; font-family: inherit;
        }
        .cta-hdr::before {
          content: ''; position: absolute; top: 0; left: -100%;
          width: 100%; height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,.3), transparent);
          transition: left .5s;
        }
        .cta-hdr:hover { transform: translateY(-2px); box-shadow: 0 8px 28px rgba(200,150,62,0.5); }
        .cta-hdr:hover::before { left: 100%; }

        .hb-line {
          display: block; width: 26px; height: 2.5px;
          background: #fff; border-radius: 3px;
          transition: all .35s cubic-bezier(.4,0,.2,1);
          transform-origin: center;
        }
      `}</style>

      <header
        dir={dir}
        role="banner"
        aria-label={tr.brand.name}
        style={{
          position: "fixed",
          top: 0,
          right: 0,
          left: 0,
          zIndex: 100,
          width: "100%",
          transition: "all .4s ease",
          backgroundColor: isScrolled ? NAV_BG : "transparent",
          backdropFilter: isScrolled ? "blur(20px) saturate(1.6)" : "none",
          WebkitBackdropFilter: isScrolled
            ? "blur(20px) saturate(1.6)"
            : "none",
          borderBottom: isScrolled
            ? "1px solid rgba(200,150,62,0.18)"
            : "1px solid transparent",
          boxShadow: isScrolled ? "0 4px 32px rgba(0,0,0,0.45)" : "none",
          padding: isScrolled ? "8px 0" : "12px 0",
        }}
      >
        {isScrolled && (
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              height: 2,
              background: `linear-gradient(90deg,transparent,${GOLD} 30%,${GOLD_LT} 50%,${GOLD} 70%,transparent)`,
              backgroundSize: "200% auto",
              animation: "shimLine 3s linear infinite",
            }}
          />
        )}

        <div
          style={{
            maxWidth: 1280,
            margin: "0 auto",
            padding: "0 20px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 16,
          }}
        >
          <a
            href="#home"
            onClick={() => go("#home")}
            style={{
              display: "flex",
              alignItems: "center",
              gap: isMobile ? 10 : 14,
              textDecoration: "none",
              flexShrink: 0,
            }}
          >
            <div
              style={{
                width: isMobile ? 52 : 64,
                height: isMobile ? 52 : 64,
                borderRadius: "50%",
                flexShrink: 0,
                border: "2px solid rgba(200,150,62,0.55)",
                padding: 3,
                boxShadow:
                  "0 0 0 4px rgba(200,150,62,0.1), 0 4px 20px rgba(0,0,0,0.4)",
                transition: "transform .4s cubic-bezier(.34,1.56,.64,1)",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = "rotate(10deg) scale(1.08)")
              }
              onMouseLeave={(e) => (e.currentTarget.style.transform = "none")}
            >
              <Image
                src="/images/circlelogo.png"
                alt={`${tr.brand.name} - ${tr.hero.badge}`}
                width={58}
                height={58}
                style={{
                  borderRadius: "50%",
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
                priority
              />
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
              <span
                style={{
                  fontSize: isMobile ? 16 : 20,
                  fontWeight: 900,
                  color: "#fff",
                  lineHeight: 1.1,
                  letterSpacing: isMobile ? "0.2px" : "0.5px",
                }}
              >
                {tr.brand.name}
                <span style={{ color: GOLD }}>.</span>
              </span>
              <span
                style={{
                  fontSize: isMobile ? 9 : 10,
                  color: "rgba(200,150,62,0.7)",
                  fontWeight: 700,
                  letterSpacing: "2px",
                }}
              >
                {tr.brand.tagline}
              </span>
            </div>
          </a>

          {!isMobile && (
            <nav
              aria-label={tr.nav.menuLabel}
              style={{ display: "flex", alignItems: "center", gap: 28 }}
            >
              {navLinks.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className={`dnl${active === l.href ? " on" : ""}`}
                  onClick={() => go(l.href)}
                  aria-current={active === l.href ? "page" : undefined}
                >
                  {l.label}
                </a>
              ))}
            </nav>
          )}

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              flexShrink: 0,
            }}
          >
            {!isMobile && <LanguageToggle lang={lang} />}

            {!isMobile && (
              <a
                href="#contact"
                className="cta-hdr"
                onClick={() => go("#contact")}
              >
                {tr.nav.bookNow} ↗
              </a>
            )}

            {isMobile && (
              <>
                <LanguageToggle lang={lang} variant="mobile" />
                <button
                  aria-label={tr.nav.menuLabel}
                  onClick={() => setMenuOpen((v) => !v)}
                  style={{
                    background: menuOpen
                      ? "rgba(200,150,62,0.12)"
                      : "rgba(255,255,255,0.06)",
                    border: `1px solid ${menuOpen ? "rgba(200,150,62,0.4)" : "rgba(255,255,255,0.12)"}`,
                    borderRadius: 10,
                    cursor: "pointer",
                    display: "flex",
                    flexDirection: "column",
                    gap: 5,
                    padding: "9px 10px",
                    alignItems: "center",
                    justifyContent: "center",
                    transition: "all .3s",
                  }}
                >
                  <span
                    className="hb-line"
                    style={{
                      transform: menuOpen
                        ? "rotate(45deg) translate(0, 7.5px)"
                        : "none",
                    }}
                  />
                  <span
                    className="hb-line"
                    style={{
                      opacity: menuOpen ? 0 : 1,
                      transform: menuOpen ? "scaleX(0)" : "none",
                    }}
                  />
                  <span
                    className="hb-line"
                    style={{
                      transform: menuOpen
                        ? "rotate(-45deg) translate(0, -7.5px)"
                        : "none",
                    }}
                  />
                </button>
              </>
            )}
          </div>
        </div>
      </header>

      {menuOpen && (
        <div
          onClick={() => setMenuOpen(false)}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 150,
            background: "rgba(4,10,24,0.7)",
            backdropFilter: "blur(6px)",
            WebkitBackdropFilter: "blur(6px)",
            animation: "fadeOverlay .3s ease",
          }}
        />
      )}

      <div
        dir={dir}
        style={{
          position: "fixed",
          top: 0,
          [dir === "rtl" ? "right" : "left"]: 0,
          width: "min(310px, 88vw)",
          height: "100dvh",
          zIndex: 200,
          background:
            "radial-gradient(circle, rgba(255,255,255,0.06) 0%, transparent 70%), #0d1a36",
          [dir === "rtl" ? "borderLeft" : "borderRight"]:
            "1px solid rgba(200,150,62,0.2)",
          boxShadow:
            dir === "rtl"
              ? "-20px 0 70px rgba(0,0,0,0.6)"
              : "20px 0 70px rgba(0,0,0,0.6)",
          transform: menuOpen
            ? "translateX(0)"
            : dir === "rtl"
              ? "translateX(105%)"
              : "translateX(-105%)",
          transition: "transform .42s cubic-bezier(.4,0,.2,1)",
          display: "flex",
          flexDirection: "column",
          overflowY: "auto",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "18px 20px 16px",
            background: "rgba(200,150,62,0.06)",
            borderBottom: "1px solid rgba(200,150,62,0.15)",
            flexShrink: 0,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <div
              style={{
                width: 50,
                height: 50,
                borderRadius: "50%",
                flexShrink: 0,
                border: "2px solid rgba(200,150,62,0.5)",
                padding: 2,
                boxShadow: "0 0 0 3px rgba(200,150,62,0.1)",
              }}
            >
              <Image
                src="/images/circlelogo.png"
                alt={tr.brand.name}
                width={46}
                height={46}
                style={{
                  borderRadius: "50%",
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </div>
            <div>
              <p
                style={{
                  fontSize: 16,
                  fontWeight: 900,
                  color: "#fff",
                  margin: 0,
                  lineHeight: 1.2,
                }}
              >
                {tr.brand.name}
                <span style={{ color: GOLD }}>.</span>
              </p>
              <p
                style={{
                  fontSize: 9,
                  color: "rgba(200,150,62,0.65)",
                  margin: "3px 0 0",
                  letterSpacing: "2px",
                  fontWeight: 700,
                }}
              >
                {tr.brand.tagline}
              </p>
            </div>
          </div>

          <button
            onClick={() => setMenuOpen(false)}
            aria-label={tr.nav.closeLabel}
            style={{
              width: 36,
              height: 36,
              borderRadius: "50%",
              background: "rgba(255,255,255,0.07)",
              border: "1px solid rgba(255,255,255,0.15)",
              color: "rgba(255,255,255,0.8)",
              cursor: "pointer",
              fontSize: 16,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}
          >
            ✕
          </button>
        </div>

        <div
          style={{
            height: 2,
            flexShrink: 0,
            background: `linear-gradient(90deg,transparent,${GOLD},${GOLD_LT},${GOLD},transparent)`,
            backgroundSize: "200% auto",
            animation: "shimLine 3s linear infinite",
          }}
        />

        <nav aria-label={tr.nav.menuLabel} style={{ padding: "4px 20px 0", flex: 1 }}>
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`mnl${active === l.href ? " on" : ""}`}
              onClick={() => go(l.href)}
            >
              <span>{l.label}</span>
              <span className="arr">{arrowChar}</span>
            </a>
          ))}
        </nav>

        <div
          style={{
            padding: "18px 20px 24px",
            borderTop: "1px solid rgba(255,255,255,0.07)",
            flexShrink: 0,
          }}
        >
          <a
            href="#contact"
            className="cta-hdr"
            onClick={() => go("#contact")}
            style={{
              width: "100%",
              justifyContent: "center",
              fontSize: 15,
              padding: "13px",
            }}
          >
            {tr.nav.bookAppointment} ↗
          </a>

          <div
            style={{
              marginTop: 18,
              display: "flex",
              flexDirection: "column",
              gap: 11,
            }}
          >
            {[
              {
                icon: "📞",
                label: tr.contact.methods.mobileLabel,
                val: "0544868983",
                href: "tel:0544868983",
              },
              {
                icon: "✉️",
                label: tr.contact.methods.emailLabel,
                val: "Nasejalnahdat@gmail.com",
                href: "mailto:Nasejalnahdat@gmail.com",
              },
            ].map((c) => (
              <a
                key={c.val}
                href={c.href}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  textDecoration: "none",
                }}
              >
                <div
                  style={{
                    width: 38,
                    height: 38,
                    borderRadius: 10,
                    flexShrink: 0,
                    background: "rgba(200,150,62,0.1)",
                    border: "1px solid rgba(200,150,62,0.25)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 17,
                  }}
                >
                  {c.icon}
                </div>
                <div>
                  <p
                    style={{
                      fontSize: 10,
                      color: "rgba(200,150,62,0.6)",
                      margin: 0,
                      fontWeight: 600,
                      letterSpacing: "0.5px",
                    }}
                  >
                    {c.label}
                  </p>
                  <p
                    style={{
                      fontSize: 12,
                      color: "rgba(255,255,255,0.78)",
                      margin: 0,
                      fontWeight: 600,
                    }}
                  >
                    {c.val}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
