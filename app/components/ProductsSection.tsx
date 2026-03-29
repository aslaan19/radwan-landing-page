const products = [
  { id: 1, title: "زي مدرسي كلاسيكي", category: "مدارس" },
  { id: 2, title: "يونيفورم شركات رجالي", category: "شركات" },
  { id: 3, title: "زي طبي احترافي", category: "طبي" },
  { id: 4, title: "يونيفورم شركات نسائي", category: "شركات" },
  { id: 5, title: "زي مدرسي رياضي", category: "مدارس" },
  { id: 6, title: "ممرضات - زي طبي", category: "طبي" },
];

const categories = ["الكل", "مدارس", "شركات", "طبي"];

export default function ProductsSection() {
  return (
    <section
      id="products"
      style={{
        width: "100%",
        backgroundColor: "#F7F8FA",
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
        <div style={{ textAlign: "center", marginBottom: "48px" }}>
          <span
            style={{
              color: "#C8963E",
              fontWeight: 600,
              fontSize: "12px",
              textTransform: "uppercase",
              letterSpacing: "2px",
            }}
          >
            معرض الأعمال
          </span>
          <h2
            style={{
              fontSize: "clamp(26px, 3vw, 38px)",
              fontWeight: 900,
              color: "#1B2A4A",
              marginTop: "12px",
              marginBottom: "16px",
            }}
          >
            منتجاتنا وتصاميمنا
          </h2>
          <p
            style={{
              color: "#6b7280",
              fontSize: "15px",
              maxWidth: "520px",
              margin: "0 auto",
              lineHeight: 1.7,
            }}
          >
            نقدّم تشكيلة واسعة من اليونيفورمات المصمّمة خصيصاً لتناسب احتياجات
            كل قطاع.
          </p>
        </div>

        {/* Filter Tabs */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "10px",
            marginBottom: "40px",
          }}
        >
          {categories.map((cat) => (
            <button
              key={cat}
              style={{
                padding: "8px 20px",
                borderRadius: "50px",
                border: "1.5px solid rgba(27,42,74,0.2)",
                backgroundColor: "transparent",
                color: "#1B2A4A",
                fontSize: "13px",
                fontWeight: 600,
                cursor: "pointer",
                fontFamily: "inherit",
                transition: "all 0.2s",
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: "24px",
          }}
        >
          {products.map((product) => (
            <div
              key={product.id}
              style={{
                backgroundColor: "#ffffff",
                borderRadius: "16px",
                overflow: "hidden",
                boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
                transition: "box-shadow 0.3s",
              }}
            >
              {/* Image placeholder */}
              <div
                style={{
                  width: "100%",
                  aspectRatio: "4/3",
                  backgroundColor: "#E8EDF5",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#9aa8c0",
                  fontSize: "13px",
                  fontWeight: 500,
                  flexDirection: "column",
                  gap: "8px",
                }}
              >
                <span style={{ fontSize: "28px" }}>📷</span>
                <span>{product.title}</span>
              </div>
              {/* Card footer */}
              <div
                style={{
                  padding: "16px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <p
                  style={{
                    fontWeight: 700,
                    color: "#1B2A4A",
                    fontSize: "14px",
                  }}
                >
                  {product.title}
                </p>
                <span
                  style={{
                    fontSize: "12px",
                    backgroundColor: "rgba(200,150,62,0.1)",
                    color: "#C8963E",
                    border: "1px solid rgba(200,150,62,0.3)",
                    padding: "4px 12px",
                    borderRadius: "50px",
                    fontWeight: 600,
                    whiteSpace: "nowrap",
                  }}
                >
                  {product.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}