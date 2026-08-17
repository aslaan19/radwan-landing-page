"use client";

import Image from "next/image";
import type { FormEvent } from "react";
import type { Lang } from "../lib/i18n";
import { WHATSAPP_NUMBER_WA, t, whatsappLink } from "../lib/i18n";

const copy = {
  ar: {
    kicker: "جاهز نفصّل لك؟",
    title: "خلّي فريقك يلبس هويتك.",
    body: "أرسل لنا نوع الزي، العدد التقريبي، وأي ألوان أو شعار في بالك. هنرد عليك ونرتّب كل التفاصيل.",
    name: "الاسم", phone: "رقم الجوال", details: "احتياجك", placeholder: "مثال: 30 يونيفورم لمطعم، أسود وبيج مع تطريز الشعار…", send: "أرسل الطلب عبر واتساب", visit: "زور مشغلنا", hours: "السبت — الخميس / 9 ص — 10 م", location: "حي النسيم الغربي، شارع عبدالله بن مسعود، الرياض", map: "افتح الموقع", call: "اتصل بنا", email: "راسلنا",
  },
  en: {
    kicker: "READY TO MAKE YOURS?",
    title: "Let your team wear your identity.",
    body: "Tell us the uniform type, estimated quantity, colors and logo requirements. We will get back to you and take care of every detail.",
    name: "Name", phone: "Mobile number", details: "What do you need?", placeholder: "Example: 30 black and beige restaurant uniforms with an embroidered logo…", send: "Send request on WhatsApp", visit: "Visit our atelier", hours: "Saturday — Thursday / 9 AM — 10 PM", location: "Al Naseem Al Gharbi, Abdullah ibn Masoud St, Riyadh", map: "Open location", call: "Call us", email: "Email us",
  },
} as const;

export default function ContactSection({ lang }: { lang: Lang }) {
  const c = copy[lang];
  const tr = t[lang];

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
          <span className="section-kicker section-kicker--warm"><i />{c.kicker}</span>
          <h2 id="contact-title" className="section-title section-title--light">{c.title}</h2>
          <p>{c.body}</p>

          <div className="contact-links">
            <a href={whatsappLink(lang)} target="_blank" rel="noopener noreferrer"><span>WA</span><div><small>{tr.contact.methods.mobileLabel}</small><strong>055 823 1071</strong></div><b>↗︎</b></a>
            <a href="tel:+966112408697"><span>TL</span><div><small>{c.call}</small><strong>011 240 8697</strong></div><b>↗︎</b></a>
            <a href="mailto:Nasejalnahdat@gmail.com"><span>EM</span><div><small>{c.email}</small><strong>Nasejalnahdat@gmail.com</strong></div><b>↗︎</b></a>
          </div>
        </div>

        <div className="contact-form-wrap reveal-on-view">
          <div className="contact-form-top"><span>ORDER SHEET / 01</span><i>✂︎</i></div>
          <form onSubmit={submit} aria-label={tr.contact.formAriaLabel}>
            <label>{c.name}<input name="name" required autoComplete="name" placeholder={tr.contact.namePlaceholder} /></label>
            <label>{c.phone}<input name="phone" required inputMode="tel" autoComplete="tel" placeholder="05xxxxxxxx" /></label>
            <label>{c.details}<textarea name="details" required rows={4} placeholder={c.placeholder} /></label>
            <button className="button button--ink" type="submit">{c.send}<b>↗︎</b></button>
          </form>
          <div className="form-stitches" aria-hidden="true" />
        </div>

        <div className="visit-card">
          <div className="visit-logo"><Image src="/images/circlelogo.png" alt="" fill sizes="72px" /></div>
          <div><small>{c.visit}</small><strong>{c.location}</strong><p>{c.hours}</p></div>
          <a href="https://maps.app.goo.gl/FkTH7ep39PhjsEV6A" target="_blank" rel="noopener noreferrer">{c.map}<span>↗︎</span></a>
        </div>
      </div>
    </section>
  );
}
