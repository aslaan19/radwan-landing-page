"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import type { Lang } from "../lib/i18n";
import { t, whatsappLink } from "../lib/i18n";
import LanguageToggle from "./LanguageToggle";

export default function Header({ lang }: { lang: Lang }) {
  const tr = t[lang];
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 28);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const links = [
    ["#home", tr.nav.home],
    ["#about", tr.nav.about],
    ["#products", tr.nav.products],
    ["#contact", tr.nav.contact],
  ];

  return (
    <header className={`atelier-header ${scrolled ? "is-scrolled" : ""}`}>
      <div className="header-shell">
        <a href="#home" className="brand-lockup" aria-label={tr.brand.name}>
          <span className="brand-seal">
            <Image src="/images/circlelogo.png" alt="" fill sizes="52px" />
          </span>
          <span className="brand-type">
            <strong>{tr.brand.name}</strong>
            <small>{lang === "ar" ? "تفصيل الزي الموحّد" : "UNIFORM ATELIER"}</small>
          </span>
        </a>

        <nav className="desktop-nav" aria-label={tr.nav.menuLabel}>
          {links.map(([href, label]) => <a key={href} href={href}>{label}</a>)}
        </nav>

        <div className="header-actions">
          <LanguageToggle lang={lang} variant="header" />
          <a className="header-cta" href={whatsappLink(lang)} target="_blank" rel="noopener noreferrer">
            {tr.nav.bookNow}<span>↗︎</span>
          </a>
          <button className={`menu-button ${open ? "is-open" : ""}`} onClick={() => setOpen(!open)} aria-label={open ? tr.nav.closeLabel : tr.nav.menuLabel} aria-expanded={open}>
            <i /><i />
          </button>
        </div>
      </div>

      <div className={`mobile-menu ${open ? "is-open" : ""}`} aria-hidden={!open}>
        <div className="mobile-menu-pattern" />
        <nav aria-label={tr.nav.menuLabel}>
          {links.map(([href, label], index) => (
            <a key={href} href={href} onClick={() => setOpen(false)}>
              <span>0{index + 1}</span><strong>{label}</strong><b>←</b>
            </a>
          ))}
        </nav>
        <a className="button button--primary" href={whatsappLink(lang)} target="_blank" rel="noopener noreferrer">
          {tr.nav.bookAppointment}<b>↗︎</b>
        </a>
      </div>
    </header>
  );
}
