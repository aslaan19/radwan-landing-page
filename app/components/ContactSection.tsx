const contactInfo = [
  { icon: "📞", label: "رقم الجوال", value: "+966 50 000 0000", href: "tel:+966500000000" },
  { icon: "✉️", label: "البريد الإلكتروني", value: "info@uniforms.sa", href: "mailto:info@uniforms.sa" },
  { icon: "📍", label: "العنوان", value: "الرياض، المملكة العربية السعودية", href: "#" },
];

export default function ContactSection() {
  return (
    <section
      id="contact"
      style={{
        width: "100%",
        backgroundColor: "#ffffff",
        padding: "96px 0",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 24px",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "64px",
            alignItems: "start",
          }}
        >
          {/* Left — Info */}
          <div>
            <span
              style={{
                color: "#C8963E",
                fontWeight: 600,
                fontSize: "12px",
                textTransform: "uppercase",
                letterSpacing: "2px",
              }}
            >
              تواصل معنا
            </span>
            <h2
              style={{
                fontSize: "clamp(26px, 3vw, 38px)",
                fontWeight: 900,
                color: "#1B2A4A",
                marginTop: "12px",
                marginBottom: "20px",
                lineHeight: 1.3,
              }}
            >
              نحن هنا لمساعدتك
            </h2>
            <p
              style={{
                color: "#6b7280",
                fontSize: "15px",
                lineHeight: 1.9,
                marginBottom: "40px",
              }}
            >
              هل تحتاج إلى زيٍّ موحّد لشركتك أو مدرستك؟ تواصل معنا اليوم
              وسنقدّم لك أفضل الحلول المناسبة لاحتياجاتك.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
              {contactInfo.map((info) => (
                <a
                  key={info.label}
                  href={info.href}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "16px",
                    textDecoration: "none",
                  }}
                >
                  <div
                    style={{
                      width: "48px",
                      height: "48px",
                      backgroundColor: "#F7F8FA",
                      borderRadius: "14px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "20px",
                      flexShrink: 0,
                    }}
                  >
                    {info.icon}
                  </div>
                  <div>
                    <p style={{ fontSize: "12px", color: "#9ca3af", fontWeight: 500 }}>
                      {info.label}
                    </p>
                    <p
                      style={{
                        fontSize: "14px",
                        color: "#1B2A4A",
                        fontWeight: 700,
                        marginTop: "2px",
                      }}
                    >
                      {info.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/966500000000"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                marginTop: "40px",
                backgroundColor: "#25D366",
                color: "#ffffff",
                fontWeight: 700,
                fontSize: "14px",
                padding: "14px 28px",
                borderRadius: "50px",
                textDecoration: "none",
                boxShadow: "0 4px 16px rgba(37,211,102,0.3)",
              }}
            >
              <span>💬</span>
              تواصل عبر واتساب
            </a>
          </div>

          {/* Right — Form */}
          <div
            style={{
              backgroundColor: "#F7F8FA",
              borderRadius: "20px",
              padding: "36px",
            }}
          >
            <h3
              style={{
                fontSize: "20px",
                fontWeight: 800,
                color: "#1B2A4A",
                marginBottom: "28px",
              }}
            >
              أرسل لنا رسالة
            </h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              {[
                { label: "الاسم", type: "text", placeholder: "اسمك الكريم" },
                { label: "رقم الجوال", type: "tel", placeholder: "05xxxxxxxx" },
              ].map((field) => (
                <div key={field.label}>
                  <label
                    style={{
                      display: "block",
                      fontSize: "13px",
                      fontWeight: 600,
                      color: "#374151",
                      marginBottom: "6px",
                    }}
                  >
                    {field.label}
                  </label>
                  <input
                    type={field.type}
                    placeholder={field.placeholder}
                    style={{
                      width: "100%",
                      border: "1.5px solid #e5e7eb",
                      borderRadius: "12px",
                      padding: "12px 16px",
                      fontSize: "14px",
                      color: "#1B2A4A",
                      backgroundColor: "#ffffff",
                      outline: "none",
                      fontFamily: "inherit",
                      boxSizing: "border-box",
                    }}
                  />
                </div>
              ))}
              <div>
                <label
                  style={{
                    display: "block",
                    fontSize: "13px",
                    fontWeight: 600,
                    color: "#374151",
                    marginBottom: "6px",
                  }}
                >
                  رسالتك
                </label>
                <textarea
                  rows={4}
                  placeholder="أخبرنا عن احتياجك..."
                  style={{
                    width: "100%",
                    border: "1.5px solid #e5e7eb",
                    borderRadius: "12px",
                    padding: "12px 16px",
                    fontSize: "14px",
                    color: "#1B2A4A",
                    backgroundColor: "#ffffff",
                    outline: "none",
                    resize: "none",
                    fontFamily: "inherit",
                    boxSizing: "border-box",
                  }}
                />
              </div>
              <button
                style={{
                  width: "100%",
                  backgroundColor: "#1B2A4A",
                  color: "#ffffff",
                  fontWeight: 700,
                  fontSize: "15px",
                  padding: "14px",
                  borderRadius: "12px",
                  border: "none",
                  cursor: "pointer",
                  fontFamily: "inherit",
                  marginTop: "8px",
                }}
              >
                إرسال الرسالة
              </button>
            </div>
          </div>
        </div>

        {/* Map placeholder */}
        <div
          style={{
            marginTop: "64px",
            borderRadius: "20px",
            overflow: "hidden",
            height: "220px",
            backgroundColor: "#E8EDF5",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#9aa8c0",
            fontSize: "14px",
            fontWeight: 500,
          }}
        >
          📍 موقعنا على الخريطة — يمكن إضافة Google Maps هنا
        </div>
      </div>
    </section>
  );
}