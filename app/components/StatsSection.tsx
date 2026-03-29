const stats = [
  {
    icon: "🏢",
    value: "+100",
    label: "شركة خدمناها",
    desc: "من مختلف القطاعات والصناعات",
  },
  {
    icon: "🏫",
    value: "+10",
    label: "مدرسة متعاونة",
    desc: "في مختلف مناطق المملكة",
  },
  { icon: "📍", value: "15", label: "فرع نشط", desc: "نخدمك أينما كنت" },
  {
    icon: "👕",
    value: "+5K",
    label: "قطعة مُسلَّمة",
    desc: "بجودة تتحدث عن نفسها",
  },
];

export default function StatsSection() {
  return (
    <section
      id="stats"
      style={{
        width: "100%",
        backgroundColor: "#1B2A4A",
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
        {/* Heading */}
        <div style={{ textAlign: "center", marginBottom: "56px" }}>
          <span
            style={{
              color: "#C8963E",
              fontWeight: 600,
              fontSize: "12px",
              textTransform: "uppercase",
              letterSpacing: "2px",
            }}
          >
            إنجازاتنا
          </span>
          <h2
            style={{
              fontSize: "clamp(26px, 3vw, 38px)",
              fontWeight: 900,
              color: "#ffffff",
              marginTop: "12px",
            }}
          >
            أرقام تتحدث عن تجربتنا
          </h2>
        </div>

        {/* Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "20px",
          }}
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              style={{
                backgroundColor: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: "20px",
                padding: "36px 24px",
                textAlign: "center",
                transition: "all 0.3s",
              }}
            >
              <div style={{ fontSize: "36px", marginBottom: "16px" }}>
                {stat.icon}
              </div>
              <p
                style={{
                  fontSize: "clamp(32px, 4vw, 44px)",
                  fontWeight: 900,
                  color: "#C8963E",
                  lineHeight: 1,
                  marginBottom: "8px",
                }}
              >
                {stat.value}
              </p>
              <p
                style={{
                  color: "#ffffff",
                  fontWeight: 700,
                  fontSize: "15px",
                  marginBottom: "8px",
                }}
              >
                {stat.label}
              </p>
              <p
                style={{
                  color: "rgba(255,255,255,0.5)",
                  fontSize: "13px",
                  lineHeight: 1.6,
                }}
              >
                {stat.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
    