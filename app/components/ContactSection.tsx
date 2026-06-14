"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import type { Lang } from "../lib/i18n";
import {
  t,
  WHATSAPP_NUMBER_DISPLAY,
  whatsappLink,
} from "../lib/i18n";

const buildContactMethods = (lang: Lang) => {
  const m = t[lang].contact.methods;
  return [
  {
    id: "mobile",
    label: m.mobileLabel,
    value: WHATSAPP_NUMBER_DISPLAY,
    href: whatsappLink(lang),
    description: m.mobileDesc,
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
        />
      </svg>
    ),
  },
  {
    id: "landline",
    label: m.landlineLabel,
    value: "0112408697",
    href: "tel:+966112408697",
    description: m.landlineDesc,
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
        />
      </svg>
    ),
  },
  {
    id: "email",
    label: m.emailLabel,
    value: "Nasejalnahdat@gmail.com",
    href: "mailto:Nasejalnahdat@gmail.com",
    description: m.emailDesc,
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
  },
  {
    id: "location",
    label: m.locationLabel,
    value: m.locationValue,
    href: "https://maps.app.goo.gl/FkTH7ep39PhjsEV6A",
    description: m.locationDesc,
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    ),
  },
  ];
};

interface ContactProps {
  lang: Lang;
}

export default function ContactSection({ lang }: ContactProps) {
  const tr = t[lang];
  const contactMethods = buildContactMethods(lang);
  const [isVisible, setIsVisible] = useState(false);
  const [activeMethod, setActiveMethod] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });
  const [focusedInput, setFocusedInput] = useState<string | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    setMousePosition({
      x: (e.clientX - rect.left) / rect.width,
      y: (e.clientY - rect.top) / rect.height,
    });
  };

  return (
    <section
      ref={sectionRef}
      id="contact"
      onMouseMove={handleMouseMove}
      aria-labelledby="contact-heading"
      className="relative w-full py-16 sm:py-24 md:py-32 overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #0B1E3A 0%, #19284A 50%, #1F4E8B 100%)",
      }}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Gradient Orbs */}
        <div
          className="absolute w-[600px] h-[600px] rounded-full opacity-20 blur-3xl transition-transform duration-1000"
          style={{
            background: "radial-gradient(circle, #C8963E 0%, transparent 70%)",
            top: "-200px",
            right: "-200px",
            transform: `translate(${mousePosition.x * -30}px, ${mousePosition.y * -30}px)`,
          }}
        />
        <div
          className="absolute w-[500px] h-[500px] rounded-full opacity-15 blur-3xl transition-transform duration-1000"
          style={{
            background: "radial-gradient(circle, #1B2A4A 0%, transparent 70%)",
            bottom: "-150px",
            left: "-150px",
            transform: `translate(${mousePosition.x * 20}px, ${mousePosition.y * 20}px)`,
          }}
        />

        {/* Animated Grid */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `
              linear-gradient(to right, #C8963E 1px, transparent 1px),
              linear-gradient(to bottom, #C8963E 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
            transform: `translate(${mousePosition.x * 10}px, ${mousePosition.y * 10}px)`,
          }}
        />

        {/* Floating Particles */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 rounded-full"
            style={{
              backgroundColor: i % 2 === 0 ? "#C8963E" : "#ffffff",
              opacity: 0.3,
              left: `${(i * 17) % 100}%`,
              top: `${(i * 23) % 100}%`,
              animation: `floatParticle ${4 + (i % 3)}s ease-in-out infinite`,
              animationDelay: `${i * 0.2}s`,
            }}
          />
        ))}

        {/* Animated Lines */}
        <svg className="absolute inset-0 w-full h-full opacity-10">
          <line
            x1="0%"
            y1="30%"
            x2="100%"
            y2="30%"
            stroke="#C8963E"
            strokeWidth="0.5"
            className="animate-pulse"
          />
          <line
            x1="0%"
            y1="70%"
            x2="100%"
            y2="70%"
            stroke="#C8963E"
            strokeWidth="0.5"
            className="animate-pulse"
            style={{ animationDelay: "0.5s" }}
          />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Logo */}
          <div className="flex justify-center mb-6">
            <div
              className="relative p-4 rounded-2xl transition-all duration-500 hover:scale-110"
              style={{
                background:
                  "linear-gradient(135deg, rgba(200,150,62,0.1), rgba(27,42,74,0.2))",
                border: "1px solid rgba(200,150,62,0.2)",
              }}
            >
              <Image
                src="/images/mainLogo.jpeg"
                alt={tr.brand.name}
                width={80}
                height={80}
                sizes="80px"
                className="object-contain rounded-xl transition-all duration-500 transform hover:scale-105"
              />
              {/* Glow Effect */}
              <div
                className="absolute inset-0 rounded-2xl opacity-50 blur-xl -z-10"
                style={{
                  background: "radial-gradient(circle, #C8963E, transparent)",
                }}
              />
            </div>
          </div>

          <span
            className="inline-block px-4 py-2 rounded-full text-sm font-semibold mb-4"
            style={{
              background:
                "linear-gradient(135deg, rgba(200,150,62,0.2), rgba(200,150,62,0.1))",
              color: "#C8963E",
              border: "1px solid rgba(200,150,62,0.3)",
            }}
          >
            {tr.contact.badge}
          </span>

          <h2
            id="contact-heading"
            className="text-3xl md:text-5xl font-black mb-4 text-balance"
            style={{ color: "#ffffff" }}
          >
            {tr.contact.titlePart1}{" "}
            <span
              className="relative inline-block"
              style={{
                background:
                  "linear-gradient(135deg, #C8963E, #E8B86D, #C8963E)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundSize: "200% 100%",
                animation: "shimmer 3s linear infinite",
              }}
            >
              {tr.contact.titleGold}
              <span
                className="absolute -bottom-2 left-0 right-0 h-1 rounded-full"
                style={{
                  background:
                    "linear-gradient(90deg, transparent, #C8963E, transparent)",
                  animation: "expandWidth 2s ease-out forwards",
                }}
              />
            </span>
          </h2>

          <p
            className="text-base sm:text-lg max-w-2xl mx-auto text-pretty"
            style={{
              color: "rgba(255,255,255,0.75)",
              fontFamily: lang === "ar" ? "Cairo" : "Inter, sans-serif",
            }}
          >
            {tr.contact.description}
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Methods */}
          <address
            className={`not-italic space-y-4 transition-all duration-1000 delay-200 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-10"
            }`}
          >
            <h3 className="text-xl font-bold mb-6" style={{ color: "#ffffff" }}>
              {tr.contact.methodsHeading}
            </h3>

            {contactMethods.map((method, index) => (
              <a
                key={method.id}
                href={method.href}
                target={
                  method.id === "location" || method.id === "mobile"
                    ? "_blank"
                    : undefined
                }
                rel={
                  method.id === "location" || method.id === "mobile"
                    ? "noopener noreferrer"
                    : undefined
                }
                onMouseEnter={() => setActiveMethod(method.id)}
                onMouseLeave={() => setActiveMethod(null)}
                className="group relative block p-4 sm:p-5 rounded-2xl transition-all duration-500"
                style={{
                  background:
                    activeMethod === method.id
                      ? "linear-gradient(135deg, rgba(200,150,62,0.15), rgba(27,42,74,0.3))"
                      : "rgba(255,255,255,0.03)",
                  border: `1px solid ${activeMethod === method.id ? "rgba(200,150,62,0.4)" : "rgba(255,255,255,0.08)"}`,
                  transform:
                    activeMethod === method.id
                      ? "translateX(-8px) scale(1.02)"
                      : "translateX(0) scale(1)",
                  animationDelay: `${index * 100}ms`,
                }}
              >
                {/* Animated Border Glow */}
                {activeMethod === method.id && (
                  <div
                    className="absolute inset-0 rounded-2xl opacity-30 blur-xl -z-10"
                    style={{ background: "#C8963E" }}
                  />
                )}

                <div className="flex items-center gap-3 sm:gap-4">
                  {/* Icon Container */}
                  <div
                    className="relative flex items-center justify-center w-11 h-11 sm:w-14 sm:h-14 flex-shrink-0 rounded-xl transition-all duration-500"
                    style={{
                      background:
                        activeMethod === method.id
                          ? "linear-gradient(135deg, #C8963E, #E8B86D)"
                          : "rgba(200,150,62,0.1)",
                      color: activeMethod === method.id ? "#0F1829" : "#C8963E",
                      transform:
                        activeMethod === method.id
                          ? "rotate(-5deg)"
                          : "rotate(0)",
                    }}
                  >
                    {method.icon}
                    {/* Pulse Ring */}
                    {activeMethod === method.id && (
                      <div
                        className="absolute inset-0 rounded-xl animate-ping opacity-30"
                        style={{ background: "#C8963E" }}
                      />
                    )}
                  </div>

                  {/* Text Content */}
                  <div className="flex-1 min-w-0">
                    <p
                      className="text-xs sm:text-sm font-medium mb-1"
                      style={{ color: "rgba(255,255,255,0.55)" }}
                    >
                      {method.label}
                    </p>
                    <p
                      className="text-sm sm:text-base md:text-lg font-bold transition-colors duration-300 break-all"
                      style={{
                        color:
                          activeMethod === method.id ? "#f4d03f" : "#ffffff",
                        direction: method.id === "email" ? "ltr" : "rtl",
                      }}
                    >
                      {method.value}
                    </p>
                    <p
                      className="text-xs mt-1"
                      style={{ color: "rgba(255,255,255,0.4)" }}
                    >
                      {method.description}
                    </p>
                  </div>

                  {/* Arrow */}
                  <div
                    className="transition-all duration-500"
                    style={{
                      color:
                        activeMethod === method.id
                          ? "#C8963E"
                          : "rgba(255,255,255,0.3)",
                      transform:
                        activeMethod === method.id
                          ? "translateX(-8px)"
                          : "translateX(0)",
                    }}
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 19l-7-7 7-7"
                      />
                    </svg>
                  </div>
                </div>
              </a>
            ))}

            {/* WhatsApp CTA */}
            <a
              href={whatsappLink(lang)}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex items-center justify-center gap-3 mt-8 p-4 rounded-2xl font-bold text-lg overflow-hidden transition-all duration-500 hover:scale-105"
              style={{
                background: "linear-gradient(135deg, #25D366, #128C7E)",
                color: "#ffffff",
                boxShadow: "0 10px 40px rgba(37,211,102,0.3)",
              }}
            >
              {/* Shine Effect */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background:
                    "linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)",
                  animation: "shine 1.5s ease-in-out infinite",
                }}
              />

              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              <span>{tr.contact.whatsapp}</span>
            </a>
          </address>

          {/* Contact Form */}
          <div
            className={`transition-all duration-1000 delay-400 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-10"
            }`}
          >
            <div
              className="relative p-5 sm:p-8 rounded-3xl overflow-hidden"
              style={{
                background:
                  "linear-gradient(135deg, rgba(27,42,74,0.5), rgba(15,24,41,0.8))",
                border: "1px solid rgba(200,150,62,0.2)",
              }}
            >
              {/* Decorative Corner */}
              <div
                className="absolute top-0 left-0 w-32 h-32 opacity-20"
                style={{
                  background:
                    "radial-gradient(circle at top left, #C8963E, transparent 70%)",
                }}
              />
              <div
                className="absolute bottom-0 right-0 w-32 h-32 opacity-20"
                style={{
                  background:
                    "radial-gradient(circle at bottom right, #C8963E, transparent 70%)",
                }}
              />

              <h3
                className="relative text-2xl font-bold mb-2"
                style={{ color: "#ffffff" }}
              >
                {tr.contact.formTitle}
              </h3>
              <p
                className="relative text-sm mb-8"
                style={{ color: "rgba(255,255,255,0.6)" }}
              >
                {tr.contact.formSubtitle}
              </p>

              <form
                className="relative space-y-5"
                aria-label={tr.contact.formAriaLabel}
              >
                {/* Name Field */}
                <div className="relative">
                  <label
                    htmlFor="contact-name"
                    className="block text-sm font-semibold mb-2"
                    style={{ color: "rgba(255,255,255,0.8)" }}
                  >
                    {tr.contact.nameLabel}
                  </label>
                  <div className="relative">
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      onFocus={() => setFocusedInput("name")}
                      onBlur={() => setFocusedInput(null)}
                      placeholder={tr.contact.namePlaceholder}
                      className="w-full px-5 py-4 rounded-xl text-base outline-none transition-all duration-300"
                      style={{
                        background: "rgba(255,255,255,0.05)",
                        border: `2px solid ${focusedInput === "name" ? "#C8963E" : "rgba(255,255,255,0.1)"}`,
                        color: "#ffffff",
                        boxShadow:
                          focusedInput === "name"
                            ? "0 0 20px rgba(200,150,62,0.2)"
                            : "none",
                      }}
                    />
                    {focusedInput === "name" && (
                      <div
                        className="absolute inset-0 rounded-xl opacity-20 blur-xl -z-10"
                        style={{ background: "#C8963E" }}
                      />
                    )}
                  </div>
                </div>

                {/* Phone Field */}
                <div className="relative">
                  <label
                    htmlFor="contact-phone"
                    className="block text-sm font-semibold mb-2"
                    style={{ color: "rgba(255,255,255,0.8)" }}
                  >
                    {tr.contact.phoneLabel}
                  </label>
                  <div className="relative">
                    <input
                      id="contact-phone"
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      inputMode="numeric"
                      required
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      onFocus={() => setFocusedInput("phone")}
                      onBlur={() => setFocusedInput(null)}
                      placeholder="05xxxxxxxx"
                      dir="ltr"
                      className="w-full px-5 py-4 rounded-xl text-base outline-none transition-all duration-300 text-right"
                      style={{
                        background: "rgba(255,255,255,0.05)",
                        border: `2px solid ${focusedInput === "phone" ? "#C8963E" : "rgba(255,255,255,0.1)"}`,
                        color: "#ffffff",
                        boxShadow:
                          focusedInput === "phone"
                            ? "0 0 20px rgba(200,150,62,0.2)"
                            : "none",
                      }}
                    />
                  </div>
                </div>

                {/* Message Field */}
                <div className="relative">
                  <label
                    htmlFor="contact-message"
                    className="block text-sm font-semibold mb-2"
                    style={{ color: "rgba(255,255,255,0.8)" }}
                  >
                    {tr.contact.messageLabel}
                  </label>
                  <div className="relative">
                    <textarea
                      id="contact-message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      onFocus={() => setFocusedInput("message")}
                      onBlur={() => setFocusedInput(null)}
                      placeholder={tr.contact.messagePlaceholder}
                      rows={4}
                      className="w-full px-5 py-4 rounded-xl text-base outline-none transition-all duration-300 resize-none"
                      style={{
                        background: "rgba(255,255,255,0.05)",
                        border: `2px solid ${focusedInput === "message" ? "#C8963E" : "rgba(255,255,255,0.1)"}`,
                        color: "#ffffff",
                        boxShadow:
                          focusedInput === "message"
                            ? "0 0 20px rgba(200,150,62,0.2)"
                            : "none",
                      }}
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="group relative w-full py-4 rounded-xl font-bold text-lg overflow-hidden transition-all duration-500 hover:scale-[1.02]"
                  style={{
                    background: "linear-gradient(135deg, #C8963E, #E8B86D)",
                    color: "#0F1829",
                    boxShadow: "0 10px 40px rgba(200,150,62,0.3)",
                  }}
                >
                  {/* Animated Background */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background:
                        "linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)",
                      animation: "shine 1.5s ease-in-out infinite",
                    }}
                  />
                  <span className="relative flex items-center justify-center gap-2">
                    {tr.contact.submit}
                    <svg
                      className="w-5 h-5 transition-transform duration-300 group-hover:-translate-x-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </span>
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div
          className={`mt-16 transition-all duration-1000 delay-600 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div
            className="relative rounded-3xl overflow-hidden"
            style={{
              border: "1px solid rgba(200,150,62,0.2)",
              boxShadow: "0 20px 60px rgba(0,0,0,0.3)",
            }}
          >
            {/* Map Overlay Gradient */}
            <div
              className="absolute inset-0 z-10 pointer-events-none"
              style={{
                background:
                  "linear-gradient(180deg, rgba(15,24,41,0.3) 0%, transparent 30%, transparent 70%, rgba(15,24,41,0.5) 100%)",
              }}
            />

            {/* Google Maps Embed */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3623.9654!2d46.7633!3d24.7136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjTCsDQyJzQ5LjAiTiA0NsKwNDUnNDcuOSJF!5e0!3m2!1sen!2ssa!4v1635000000000!5m2!1sen!2ssa"
              width="100%"
              height="350"
              style={{ border: 0, filter: "grayscale(30%) brightness(0.9)" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={tr.contact.mapTitle}
            />

            {/* Location Pin Overlay */}
            <a
              href="https://maps.app.goo.gl/FkTH7ep39PhjsEV6A"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex items-center gap-3 px-6 py-3 rounded-full transition-all duration-300 hover:scale-110"
              style={{
                background: "linear-gradient(135deg, #C8963E, #E8B86D)",
                color: "#0F1829",
                boxShadow: "0 10px 40px rgba(200,150,62,0.4)",
              }}
            >
              <svg
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <span className="font-bold">{tr.contact.mapButton}</span>
            </a>
          </div>
        </div>
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes floatParticle {
          0%,
          100% {
            transform: translateY(0) translateX(0);
            opacity: 0.3;
          }
          50% {
            transform: translateY(-20px) translateX(10px);
            opacity: 0.6;
          }
        }

        @keyframes shimmer {
          0% {
            background-position: 200% 0;
          }
          100% {
            background-position: -200% 0;
          }
        }

        @keyframes expandWidth {
          0% {
            width: 0;
            opacity: 0;
          }
          100% {
            width: 100%;
            opacity: 1;
          }
        }

        @keyframes shine {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
      `}</style>
    </section>
  );
}
