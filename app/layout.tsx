import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";

const sans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-demo-sans",
});

export const metadata: Metadata = {
  title: "Atlas Picks | Fútbol europeo",
  description:
    "Servicio de pronósticos de fútbol europeo con acceso free, premium y seguimiento continuo.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={sans.variable}>
      <body>{children}</body>
    </html>
  );
}
