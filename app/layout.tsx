import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import { Tajawal, Playpen_Sans_Arabic } from "next/font/google";

import "./globals.css";

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  variable: "--font-cairo",
});

const tajawal = Tajawal({
  subsets: ["arabic"],
  weight: ["400", "700", "900"],
  variable: "--font-heading",
});

const plex = Playpen_Sans_Arabic({
  subsets: ["arabic"],
  weight: ["300", "400", "500"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "شركة خياط نسيج النهضة للخياطة",
  description:
    "خدمات خياطة يونيفورمز للمدارس والشركات والمنشآت الطبية بجودة عالية واحتراف.",
  generator: "v0.app",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body
        className={`${cairo.variable} ${tajawal.variable} ${plex.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
