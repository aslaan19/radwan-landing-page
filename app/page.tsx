import AboutSection from "./components/AboutSection";
import HeroSection from "./components/HeroSection";
import ProductsSection from "./components/ProductsSection";
import StatsSection from "./components/StatsSection";

export const metadata = {
  title: "يونيفورمز | خياطة زي موحّد احترافي",
  description:
    "خدمات خياطة يونيفورمز للمدارس والشركات والمنشآت الطبية بجودة عالية واحتراف.",
};

export default function Home() {
  return (
    <div dir="rtl" className="font-sans antialiased">
      <main>
        <HeroSection />
        <AboutSection />
        <ProductsSection />
        <StatsSection />
      </main>
    </div>
  );
}
