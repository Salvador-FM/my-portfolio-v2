import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Salvador Fernández — Desarrollador Full Stack",
    template: "%s | Salvador Fernández",
  },
  description:
    "Portafolio de Salvador Fernández, desarrollador full stack especializado en aplicaciones escalables y experiencias digitales modernas.",
  openGraph: {
    title: "Salvador Fernández — Desarrollador Full Stack",
    description: "Aplicaciones escalables y experiencias digitales modernas.",
    locale: "es_MX",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">
        <a href="#contenido" className="skip-link">Saltar al contenido</a>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
