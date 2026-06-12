"use client";
import Image from "next/image";

const GOLD = "#C8963E";
const GOLD_LT = "#f4d03f";

const FOOTER_BG =
  "linear-gradient(160deg, #24324a 0%, #3a4f7a 55%, #4a6fa5 100%)";

const quickLinks = [
  { label: "الرئيسية", href: "#home" },
  { label: "من نحن", href: "#about" },
  { label: "منتجاتنا", href: "#products" },
  { label: "تواصل معنا", href: "#contact" },
];

const contacts = [
  { icon: "📞", label: "الهاتف", val: "0544868983", href: "tel:0544868983" },
  {
    icon: "✉️",
    label: "البريد",
    val: "Nasejalnahdat@gmail.com",
    href: "mailto:Nasejalnahdat@gmail.com",
  },
  {
    icon: "📍",
    label: "الموقع",
    val: "الرياض، المملكة العربية السعودية",
    href: "#contact",
  },
];

export default function Footer() {
  return (
    <footer
      dir="rtl"
      style={{
        background: FOOTER_BG,
        position: "relative",
        overflow: "hidden",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700;900&display=swap');

        footer * { font-family: 'Cairo', sans-serif; }

        @keyframes shimLine {
          0%   { background-position: 200% center; }
          100% { background-position: -200% center; }
        }
        @keyframes floatUp {
          0%,100% { transform: translateY(0); }
          50%      { transform: translateY(-10px); }
        }

        .ftr-link {
          display: flex; align-items: center; gap: 10px;
          color: rgba(255,255,255,0.65); font-size: 15px; font-weight: 600;
          text-decoration: none; padding: 7px 0;
          transition: color .25s, gap .25s;
        }
        .ftr-link::before {
          content: ''; display: block;
          width: 0; height: 2px; border-radius: 1px;
          background: ${GOLD};
          transition: width .3s cubic-bezier(.4,0,.2,1);
          flex-shrink: 0;
        }
        .ftr-link:hover { color: ${GOLD_LT}; gap: 14px; }
        .ftr-link:hover::before { width: 16px; }

        .contact-row {
          display: flex; align-items: flex-start; gap: 16px;
          text-decoration: none; padding: 12px 16px;
          border-radius: 16px;
          border: 1px solid transparent;
          transition: all .3s;
        }
        .contact-row:hover {
          background: rgba(255,255,255,0.08);
          border-color: rgba(255,255,255,0.15);
          transform: translateX(-4px);
        }

        .bottom-link {
          color: rgba(255,255,255,0.45); font-size: 13px;
          text-decoration: none; transition: color .2s;
        }
        .bottom-link:hover { color: ${GOLD}; }

        .newsletter-input {
          flex: 1; background: rgba(255,255,255,0.1);
          border: 1px solid rgba(255,255,255,0.2);
          border-radius: 50px; padding: 13px 20px;
          color: #fff; font-size: 14px; outline: none;
          font-family: 'Cairo', sans-serif;
          transition: border-color .3s, background .3s;
          direction: rtl;
        }
        .newsletter-input::placeholder { color: rgba(255,255,255,0.4); }
        .newsletter-input:focus {
          border-color: rgba(200,150,62,0.6);
          background: rgba(255,255,255,0.14);
        }

        .newsletter-btn {
          background: linear-gradient(135deg, ${GOLD}, ${GOLD_LT});
          color: #0b1424; font-weight: 900; font-size: 14px;
          padding: 13px 26px; border-radius: 50px;
          border: none; cursor: pointer; white-space: nowrap;
          font-family: 'Cairo', sans-serif;
          transition: all .3s;
          box-shadow: 0 4px 18px rgba(200,150,62,0.35);
        }
        .newsletter-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 28px rgba(200,150,62,0.55);
        }

        @media (max-width: 768px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
            gap: 36px !important;
            margin-bottom: 32px !important;
            padding-bottom: 28px !important;
          }
          .footer-main { padding: 48px 18px 0 !important; }
          .footer-brand-name { font-size: 20px !important; }
          .footer-contact-val { font-size: 13px !important; }
        }
      `}</style>

      {/* ── Top gold shimmer line ── */}
      <div
        style={{
          height: 3,
          background: `linear-gradient(90deg, transparent, ${GOLD} 20%, ${GOLD_LT} 50%, ${GOLD} 80%, transparent)`,
          backgroundSize: "200% auto",
          animation: "shimLine 3s linear infinite",
        }}
      />

      {/* ── Background decorations ── */}
      <div style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
        <div
          style={{
            position: "absolute",
            width: 600,
            height: 600,
            borderRadius: "50%",
            top: -200,
            right: -150,
            background:
              "radial-gradient(circle, rgba(255,255,255,0.06) 0%, transparent 70%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            width: 450,
            height: 450,
            borderRadius: "50%",
            bottom: -120,
            left: -100,
            background:
              "radial-gradient(circle, rgba(200,150,62,0.08) 0%, transparent 70%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            opacity: 0.03,
            backgroundImage:
              "radial-gradient(circle, #fff 1px, transparent 1px)",
            backgroundSize: "36px 36px",
          }}
        />
      </div>

      {/* ══════════════ MAIN CONTENT ══════════════ */}
      <div
        className="footer-main"
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          padding: "72px 32px 0",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* ── Brand + links row ── */}
        <div
          className="footer-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1.5fr 1fr 1.4fr",
            gap: 56,
            marginBottom: 52,
            paddingBottom: 48,
            borderBottom: "1px solid rgba(255,255,255,0.12)",
          }}
        >
          {/* ── Brand block ── */}
          <div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 18,
                marginBottom: 22,
              }}
            >
              <div
                style={{
                  width: 80,
                  height: 80,
                  borderRadius: "50%",
                  flexShrink: 0,
                  border: "2px solid rgba(200,150,62,0.55)",
                  padding: 3,
                  boxShadow:
                    "0 0 0 6px rgba(200,150,62,0.1), 0 10px 36px rgba(0,0,0,0.3)",
                  animation: "floatUp 5s ease-in-out infinite",
                }}
              >
                <Image
                  src="/images/circlelogo.png"
                  alt="شعار نسيج النهضة"
                  width={74}
                  height={74}
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
                    fontSize: 24,
                    fontWeight: 900,
                    color: "#fff",
                    margin: 0,
                    lineHeight: 1.15,
                    textShadow: "0 2px 12px rgba(0,0,0,0.2)",
                  }}
                >
                  خياط نسيج النهضة
                  <span style={{ color: GOLD }}>.</span>
                </p>
                <p
                  style={{
                    fontSize: 11,
                    color: "rgba(200,150,62,0.75)",
                    margin: "5px 0 0",
                    letterSpacing: "3px",
                    fontWeight: 700,
                  }}
                >
                  UNIFORMS
                </p>
              </div>
            </div>

            <p
              style={{
                fontSize: 15,
                color: "rgba(255,255,255,0.65)",
                lineHeight: 2,
                fontWeight: 500,
                maxWidth: 340,
              }}
            >
              نصنع الزيّ الموحّد بدقة واحتراف — من المدارس إلى الشركات والمنشآت
              الطبية. جودة استثنائية وتصاميم تعكس هوية مؤسستك.
            </p>
          </div>

          {/* ── Quick links ── */}
          <div>
            <h4
              style={{
                fontSize: 14,
                fontWeight: 900,
                color: GOLD,
                letterSpacing: "2px",
                textTransform: "uppercase",
                marginBottom: 22,
                paddingBottom: 12,
                borderBottom: `2px solid rgba(200,150,62,0.25)`,
                display: "inline-block",
              }}
            >
              روابط سريعة
            </h4>
            <nav style={{ display: "flex", flexDirection: "column", gap: 2 }}>
              {quickLinks.map((l) => (
                <a key={l.href} href={l.href} className="ftr-link">
                  {l.label}
                </a>
              ))}
            </nav>
          </div>

          {/* ── Contact ── */}
          <div>
            <h4
              style={{
                fontSize: 14,
                fontWeight: 900,
                color: GOLD,
                letterSpacing: "2px",
                textTransform: "uppercase",
                marginBottom: 22,
                paddingBottom: 12,
                borderBottom: `2px solid rgba(200,150,62,0.25)`,
                display: "inline-block",
              }}
            >
              تواصل معنا
            </h4>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 6,
                marginBottom: 28,
              }}
            >
              {contacts.map((c) => (
                <a key={c.val} href={c.href} className="contact-row">
                  <div
                    style={{
                      width: 44,
                      height: 44,
                      borderRadius: 14,
                      flexShrink: 0,
                      background: "rgba(255,255,255,0.1)",
                      border: "1px solid rgba(255,255,255,0.18)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: 20,
                    }}
                  >
                    {c.icon}
                  </div>
                  <div>
                    <p
                      style={{
                        fontSize: 11,
                        color: "rgba(200,150,62,0.75)",
                        margin: 0,
                        fontWeight: 700,
                        letterSpacing: "0.5px",
                      }}
                    >
                      {c.label}
                    </p>
                    <p
                      style={{
                        fontSize: 14,
                        color: "rgba(255,255,255,0.85)",
                        margin: "3px 0 0",
                        fontWeight: 600,
                        wordBreak: "break-all",
                      }}
                    >
                      {c.val}
                    </p>
                  </div>
                </a>
              ))}
            </div>

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/966544868983"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                background: "linear-gradient(135deg, #25D366, #1aad52)",
                color: "#fff",
                fontWeight: 900,
                fontSize: 14,
                padding: "12px 24px",
                borderRadius: 50,
                textDecoration: "none",
                boxShadow: "0 4px 22px rgba(37,211,102,0.3)",
                transition: "all .3s",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = "translateY(-2px)")
              }
              onMouseLeave={(e) => (e.currentTarget.style.transform = "none")}
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              واتساب
            </a>
          </div>
        </div>

        {/* ── Newsletter bar ── */}

        {/* ── Bottom bar ── */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 16,
            paddingBottom: 32,
            paddingTop: 8,
          }}
        >
          <p
            style={{
              fontSize: 13,
              color: "rgba(255,255,255,0.45)",
              margin: 0,
              fontWeight: 500,
            }}
          >
            © 2026 خياط نسيج النهضة — جميع الحقوق محفوظة
          </p>
          <p
            style={{ fontSize: 13, color: "rgba(255,255,255,0.35)", margin: 0 }}
          >
            صُنع بـ ❤️ في المملكة العربية السعودية 🇸🇦
          </p>
        </div>
      </div>
    </footer>
  );
}
