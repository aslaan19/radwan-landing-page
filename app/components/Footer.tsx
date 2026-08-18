import Image from "next/image";
import type { Lang } from "../lib/i18n";
import { t, whatsappLink } from "../lib/i18n";

export default function Footer({ lang }: { lang: Lang }) {
  const tr = t[lang];
  const links = [["#home", tr.nav.home], ["#about", tr.nav.about], ["#products", tr.nav.products], ["#contact", tr.nav.contact]];
  return (
    <footer className="atelier-footer" aria-label={tr.brand.name}>
      <div className="footer-shell">
        <div className="footer-brand">
          <span className="footer-logo"><Image src="/images/circlelogo.png" alt="" fill sizes="64px" /></span>
          <div><strong>{tr.brand.name}</strong><small>{tr.brand.tagline}</small></div>
        </div>
        <nav aria-label={tr.footer.quickLinks}>{links.map(([href, label]) => <a href={href} key={href}>{label}</a>)}</nav>
        <a className="footer-whatsapp" href={whatsappLink(lang)} target="_blank" rel="noopener noreferrer">{tr.footer.whatsapp} <span>↗︎</span></a>
      </div>
      <div className="footer-bottom"><span>{tr.footer.copyright}</span><span>{tr.footer.madeIn}</span></div>
    </footer>
  );
}
