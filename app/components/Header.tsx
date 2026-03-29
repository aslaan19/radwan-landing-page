"use client";
import { useState, useEffect } from "react";

const navLinks = [
  { label: "الرئيسية", href: "#home" },
  { label: "من نحن", href: "#about" },
  { label: "منتجاتنا", href: "#products" },
  { label: "إنجازاتنا", href: "#stats" },
  { label: "تواصل معنا", href: "#contact" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        right: 0,
        left: 0,
        zIndex: 50,
        width: "100%",
        backgroundColor: isScrolled ? "#ffffff" : "transparent",
        boxShadow: isScrolled ? "0 2px 12px rgba(0,0,0,0.08)" : "none",
        transition: "all 0.3s ease",
        padding: isScrolled ? "12px 0" : "20px 0",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo */}
        <div
          style={{
            fontSize: "22px",
            fontWeight: 800,
            color: "#1B2A4A",
            letterSpacing: "0.5px",
          }}
        >
          يونيفورمز<span style={{ color: "#C8963E" }}>.</span>
        </div>

        {/* Desktop Nav */}
        <nav
          style={{
            display: "flex",
            alignItems: "center",
            gap: "32px",
          }}
          className="hidden md:flex"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              style={{
                fontSize: "14px",
                fontWeight: 600,
                color: "#1B2A4A",
                textDecoration: "none",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) =>
                ((e.target as HTMLAnchorElement).style.color = "#C8963E")
              }
              onMouseLeave={(e) =>
                ((e.target as HTMLAnchorElement).style.color = "#1B2A4A")
              }
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            style={{
              backgroundColor: "#C8963E",
              color: "#ffffff",
              fontSize: "14px",
              fontWeight: 700,
              padding: "10px 22px",
              borderRadius: "50px",
              textDecoration: "none",
              transition: "background-color 0.2s",
            }}
          >
            احجز الآن
          </a>
        </nav>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="toggle menu"
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            display: "flex",
            flexDirection: "column",
            gap: "5px",
            padding: "4px",
          }}
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              style={{
                display: "block",
                width: "24px",
                height: "2px",
                backgroundColor: "#1B2A4A",
                borderRadius: "2px",
                transition: "all 0.3s",
                opacity: menuOpen && i === 1 ? 0 : 1,
                transform:
                  menuOpen && i === 0
                    ? "rotate(45deg) translate(5px, 5px)"
                    : menuOpen && i === 2
                    ? "rotate(-45deg) translate(5px, -5px)"
                    : "none",
              }}
            />
          ))}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          style={{
            backgroundColor: "#ffffff",
            borderTop: "1px solid #f0f0f0",
            padding: "16px 24px 20px",
            display: "flex",
            flexDirection: "column",
            gap: "16px",
            boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              style={{
                fontSize: "14px",
                fontWeight: 600,
                color: "#1B2A4A",
                textDecoration: "none",
              }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            style={{
              backgroundColor: "#C8963E",
              color: "#ffffff",
              fontSize: "14px",
              fontWeight: 700,
              padding: "10px 22px",
              borderRadius: "50px",
              textDecoration: "none",
              textAlign: "center",
            }}
          >
            احجز الآن
          </a>
        </div>
      )}
    </header>
  );
}