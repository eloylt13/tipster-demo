import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { DM_Sans } from "next/font/google";
import { getSiteUrl } from "@/lib/site";
import "./globals.css";

const sans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-demo-sans",
});

const siteDescription =
  "Demo premium de web para tipsters y canal de Telegram, pensada para presentar picks, accesos y seguimiento con una imagen seria y creíble.";

export const metadata: Metadata = {
  metadataBase: getSiteUrl(),
  title: {
    default: "Atlas Picks",
    template: "%s | Atlas Picks",
  },
  description: siteDescription,
  applicationName: "Atlas Picks",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "es_ES",
    siteName: "Atlas Picks",
    title: "Atlas Picks",
    description: siteDescription,
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Atlas Picks",
    description: siteDescription,
  },
  verification: {
    google: "6Cr92jGfY8D6cZX4sdEC1v1vECb_mgjBy8Jd9qoUfI4",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={sans.variable}>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
