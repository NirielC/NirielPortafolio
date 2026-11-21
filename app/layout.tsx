import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Elías Niriel López — Desarrollador de Software Junior",
  description:
    "Portafolio de Elías Niriel López Casoverde, desarrollador de software junior de El Salvador. Proyectos, experiencia, habilidades y CV.",
  openGraph: {
    title: "Elías Niriel López — Desarrollador de Software Junior",
    description:
      "Proyectos, experiencia, habilidades y CV de Elías Niriel López Casoverde.",
    url: "https://niriel-portafolio-demo.vercel.app/",
    images: ["/profile.jpg"],
    locale: "es_SV",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
