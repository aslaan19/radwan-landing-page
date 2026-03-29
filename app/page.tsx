import AboutSection from "./components/AboutSection";
import ProductsSection from "./components/ProductsSection";

export const metadata = {
  title: "يونيفورمز | خياطة زي موحّد احترافي",
  description:
    "خدمات خياطة يونيفورمز للمدارس والشركات والمنشآت الطبية بجودة عالية واحتراف.",
};

export default function Home() {
  return (
    <div dir="rtl" className="font-sans antialiased">
      <main>
        <AboutSection/>
        <ProductsSection/>
      </main>
    </div>
  );
}
