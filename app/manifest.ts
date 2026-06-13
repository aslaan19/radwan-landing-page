import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "خياط نسيج النهضة - يونيفورم مدارس وشركات بالرياض",
    short_name: "نسيج النهضة",
    description:
      "تفصيل وخياطة اليونيفورم والزي الموحد بالرياض للمدارس والشركات والمصانع والمطاعم والمحلات التجارية.",
    start_url: "/",
    scope: "/",
    display: "standalone",
    orientation: "portrait",
    background_color: "#0B1E3A",
    theme_color: "#19284A",
    dir: "rtl",
    lang: "ar-SA",
    categories: ["business", "shopping", "lifestyle"],
    icons: [
      {
        src: "/images/circlelogo.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/images/circlelogo.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/images/circlelogo.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/images/mainLogo.jpeg",
        sizes: "1024x1024",
        type: "image/jpeg",
        purpose: "any",
      },
    ],
  };
}
