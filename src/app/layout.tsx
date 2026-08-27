import type { Metadata } from "next";
import { Inter, Fraunces, IBM_Plex_Mono } from "next/font/google";
import { WhatsAppFAB } from "@/components/ui/WhatsAppFAB";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-fraunces",
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono-plex",
  display: "swap",
});

const siteUrl = "https://www.wabot365.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Wabot365 | Chatbot de WhatsApp para negocios en Colombia",
    template: "%s | Wabot365",
  },
  description:
    "Wabot365 crea tu chatbot de WhatsApp en 48 horas: responde clientes, toma pedidos y agenda citas 24/7. Sin programar, con soporte local en Colombia.",
  keywords: [
    "chatbot de whatsapp",
    "chatbot whatsapp colombia",
    "automatizar whatsapp negocio",
    "whatsapp business api",
    "bot de whatsapp para ventas",
  ],
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: "website",
    locale: "es_CO",
    url: siteUrl,
    siteName: "Wabot365",
    title: "Wabot365 | Chatbot de WhatsApp para negocios en Colombia",
    description:
      "Crea tu chatbot de WhatsApp en 48 horas: responde clientes, toma pedidos y agenda citas 24/7, sin programar.",
    images: [{ url: "/og-cover.png", width: 1200, height: 630, alt: "Wabot365 — chatbot de WhatsApp" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Wabot365 | Chatbot de WhatsApp para negocios en Colombia",
    description:
      "Crea tu chatbot de WhatsApp en 48 horas: responde clientes, toma pedidos y agenda citas 24/7, sin programar.",
    images: ["/og-cover.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Wabot365",
  url: siteUrl,
  logo: `${siteUrl}/wabot-avatar.png`,
  email: "soporte@wabot365.com",
  description:
    "Wabot365 diseña e implementa chatbots de WhatsApp para microempresas en Colombia: atención al cliente, pedidos y agendamiento de citas.",
  areaServed: {
    "@type": "Country",
    name: "Colombia",
  },
  contactPoint: [
    {
      "@type": "ContactPoint",
      contactType: "customer support",
      telephone: "+57-310-329-8346",
      areaServed: "CO",
      availableLanguage: ["Spanish"],
    },
  ],
};

const softwareJsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Wabot365",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  url: siteUrl,
  description:
    "Chatbot de WhatsApp configurado por Wabot365 para automatizar atención al cliente, pedidos y citas de negocios en Colombia.",
  offers: [
    { "@type": "Offer", name: "Starter", price: "49000", priceCurrency: "COP" },
    { "@type": "Offer", name: "Negocio", price: "99000", priceCurrency: "COP" },
    { "@type": "Offer", name: "Escala", price: "199000", priceCurrency: "COP" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareJsonLd) }}
        />
      </head>
      <body
        className={`${inter.variable} ${fraunces.variable} ${plexMono.variable} antialiased`}
      >
        {children}
        <WhatsAppFAB phone="573103298346" message="Hola, quiero información sobre Wabot365" />
      </body>
    </html>
  );
}
