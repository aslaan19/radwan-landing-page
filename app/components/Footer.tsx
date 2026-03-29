const quickLinks = [
  { label: "الرئيسية", href: "#home" },
  { label: "من نحن", href: "#about" },
  { label: "منتجاتنا", href: "#products" },
  { label: "إنجازاتنا", href: "#stats" },
  { label: "تواصل معنا", href: "#contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer style={{ backgroundColor: "#0f1c33", color: "#6b7280" }}>
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "64px 24px",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "40px",
          }}
        >
          {/* Brand */}
          <div>
            <div
              style={{
                fontSize: "22px",
                fontWeight: 800,
                color: "#ffffff",
                marginBottom: "16px",
              }}
            >
              يونيفورمز<span style={{ color: "#C8963E" }}>.</span>
            </div>
            <p style={{ fontSize: "13px", lineHeight: 1.8, color: "#6b7280", maxWidth: "240px" }}>
              نصنع الزيّ الموحّد باحتراف وجودة عالية لتعكس هوية مؤسستك بأفضل
              صورة.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4
              style={{
                color: "#ffffff",
                fontWeight: 700,
                fontSize: "14px",
                marginBottom: "20px",
              }}
            >
              روابط سريعة
            </h4>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "12px" }}>
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    style={{
                      fontSize: "13px",
                      color: "#6b7280",
                      textDecoration: "none",
                      transition: "color 0.2s",
                    }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4
              style={{
                color: "#ffffff",
                fontWeight: 700,
                fontSize: "14px",
                marginBottom: "20px",
              }}
            >
              معلومات التواصل
            </h4>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "12px" }}>
              {[
                "📞 +966 50 000 0000",
                "✉️ info@uniforms.sa",
                "📍 الرياض، المملكة العربية السعودية",
              ].map((item) => (
                <li key={item} style={{ fontSize: "13px", color: "#6b7280" }}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            borderTop: "1px solid rgba(255,255,255,0.08)",
            marginTop: "48px",
            paddingTop: "32px",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "12px",
            fontSize: "12px",
            color: "#4b5563",
          }}
        >
          <p>جميع الحقوق محفوظة © {year} يونيفورمز</p>
          <p>صُمِّم باحتراف في المملكة العربية السعودية 🇸🇦</p>
        </div>
      </div>
    </footer>
  );
}