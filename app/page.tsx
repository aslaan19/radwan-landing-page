import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import ProductsSection from "./components/ProductsSection";
import StatsSection from "./components/StatsSection";

export const metadata = {
  title: "خياطة نسيج النهضة",
  description:
    "خدمات خياطة يونيفورمز للمدارس والشركات والمنشآت الطبية بجودة عالية واحتراف.",
};

export default function Home() {
  return (
    <div dir="rtl" className="font-sans antialiased">
      <main>
        <Header />
        <HeroSection />
        <AboutSection />
        <ProductsSection />
        <ContactSection />
        <Footer />
      </main>
    </div>
  );
}
