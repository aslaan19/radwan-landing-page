"use client";

import Image from "next/image";
import type { FormEvent } from "react";
import type { Lang } from "../lib/i18n";
import { WHATSAPP_NUMBER_WA, t, whatsappLink } from "../lib/i18n";

export default function ContactSection({ lang }: { lang: Lang }) {
  const tr = t[lang];
  const c = tr.contact;

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const message = lang === "ar"
      ? `السلام عليكم، أنا ${data.get("name")}، رقم الجوال: ${data.get("phone")}\nاحتياجي: ${data.get("details")}`
      : `Hello, my name is ${data.get("name")}. Mobile: ${data.get("phone")}\nRequest: ${data.get("details")}`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER_WA}?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
  }

  return (
    <section id="contact" className="atelier-contact" aria-labelledby="contact-title">
      <div className="contact-thread" aria-hidden="true" />
      <div className="contact-shell">
        <div className="contact-copy reveal-on-view">
          <span className="section-kicker section-kicker--warm"><i />{c.badge}</span>
          <h2 id="contact-title" className="section-title section-title--light">{c.titlePart1} <em>{c.titleGold}</em></h2>
          <p>{c.description}</p>

          <div className="contact-links">
            <a href={whatsappLink(lang)} target="_blank" rel="noopener noreferrer"><span>WA</span><div><small>{c.methods.mobileLabel}</small><strong>055 823 1071</strong></div><b>↗︎</b></a>
            <a href="tel:+966112408697"><span>TL</span><div><small>{c.methods.landlineLabel}</small><strong>011 240 8697</strong></div><b>↗︎</b></a>
            <a href="mailto:Nasejalnahdat@gmail.com"><span>EM</span><div><small>{c.methods.emailLabel}</small><strong>Nasejalnahdat@gmail.com</strong></div><b>↗︎</b></a>
          </div>
        </div>

        <div className="contact-form-wrap reveal-on-view">
          <div className="contact-form-top"><span>{c.formTitle}</span><i>✂︎</i></div>
          <form onSubmit={submit} aria-label={c.formAriaLabel}>
            <label>{c.nameLabel}<input name="name" required autoComplete="name" placeholder={c.namePlaceholder} /></label>
            <label>{c.phoneLabel}<input name="phone" required inputMode="tel" autoComplete="tel" placeholder="05xxxxxxxx" /></label>
            <label>{c.messageLabel}<textarea name="details" required rows={4} placeholder={c.messagePlaceholder} /></label>
            <button className="button button--ink" type="submit">{c.submit}<b>↗︎</b></button>
          </form>
          <div className="form-stitches" aria-hidden="true" />
        </div>

        <div className="visit-card">
          <div className="visit-logo"><Image src="/images/circlelogo.png" alt="" fill sizes="72px" /></div>
          <div><small>{c.methods.locationLabel}</small><strong>{c.methods.locationValue}</strong><p>{c.methods.locationDesc}</p></div>
          <a href="https://maps.app.goo.gl/FkTH7ep39PhjsEV6A" target="_blank" rel="noopener noreferrer">{c.mapButton}<span>↗︎</span></a>
        </div>
      </div>
    </section>
  );
}
