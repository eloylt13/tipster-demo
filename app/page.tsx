import type { Metadata } from "next";
import DemoTipsterShell from "@/components/DemoTipsterShell";
import { demoContent } from "@/lib/demo-content";
import { getSiteUrl } from "@/lib/site";

const pageTitle =
  "Web para tipsters | Demo premium para tipster y canal de Telegram";
const pageDescription =
  "Demo de web para tipsters orientada a canales de Telegram: una landing premium, seria y creíble para presentar picks, planes de acceso, seguimiento y marca personal sin caer en una portada agresiva.";

export const metadata: Metadata = {
  title: {
    absolute: pageTitle,
  },
  description: pageDescription,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "/",
  },
  twitter: {
    title: pageTitle,
    description: pageDescription,
  },
};

export default function Home() {
  const siteUrl = getSiteUrl();
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "Atlas Picks",
      url: siteUrl.toString(),
      inLanguage: "es-ES",
      description: pageDescription,
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: demoContent.faqItems.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      })),
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <DemoTipsterShell />
    </>
  );
}
