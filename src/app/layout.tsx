import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import { TempoInit } from "@/components/tempo-init";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Clientlio - AI-Powered Business Solutions",
    template: "%s | Clientlio"
  },
  description: "Transform your business with AI-powered lead generation, analytics, chatbots, and automation tools. Streamline operations and accelerate growth with Clientlio's intelligent platform.",
  keywords: ["AI", "lead generation", "analytics", "chatbots", "automation", "CRM", "business intelligence", "SaaS"],
  authors: [{ name: "Clientlio Team" }],
  creator: "Clientlio",
  publisher: "Clientlio",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://clientlio.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://clientlio.com",
    title: "Clientlio - AI-Powered Business Solutions",
    description: "Transform your business with AI-powered lead generation, analytics, chatbots, and automation tools.",
    siteName: "Clientlio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Clientlio - AI-Powered Business Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Clientlio - AI-Powered Business Solutions",
    description: "Transform your business with AI-powered lead generation, analytics, chatbots, and automation tools.",
    images: ["/og-image.jpg"],
    creator: "@clientlio",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="canonical" href="https://clientlio.com" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#2563eb" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              "name": "Clientlio",
              "description": "AI-powered business solutions for lead generation, analytics, chatbots, and automation",
              "url": "https://clientlio.com",
              "applicationCategory": "BusinessApplication",
              "operatingSystem": "Web",
              "offers": {
                "@type": "Offer",
                "price": "49",
                "priceCurrency": "USD",
                "priceValidUntil": "2024-12-31"
              },
              "provider": {
                "@type": "Organization",
                "name": "Clientlio",
                "url": "https://clientlio.com",
                "logo": "https://clientlio.com/logo.png",
                "sameAs": [
                  "https://twitter.com/clientlio",
                  "https://linkedin.com/company/clientlio",
                  "https://github.com/clientlio"
                ]
              },
              "featureList": [
                "AI Lead Generation",
                "Business Analytics",
                "Intelligent Chatbots",
                "Workflow Automation",
                "CRM Integration"
              ]
            })
          }}
        />
      </head>
      <Script src="https://api.tempolabs.ai/proxy-asset?url=https://storage.googleapis.com/tempo-public-assets/error-handling.js" />
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        <TempoInit />
      </body>
    </html>
  );
}
