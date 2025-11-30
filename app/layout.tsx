import type React from "react"
import type { Metadata } from "next"
import { Inter, Instrument_Serif } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  preload: true,
})

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  variable: "--font-instrument-serif",
  weight: ["400"],
  display: "swap",
  preload: true,
})

export const metadata: Metadata = {
  title: "Connex99 — Intelligent Business Automation",
  description: "Connex99 provides intelligent automation solutions for modern businesses. Streamline operations, eliminate manual work, and scale with AI-powered tools.",
  keywords: ["business automation", "AI automation", "workflow automation", "process automation", "SaaS", "productivity tools", "Connex99"],
  authors: [{ name: "Connex99" }],
  creator: "Connex99",
  publisher: "Connex99",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://connex99.com",
    title: "Connex99 — Intelligent Business Automation",
    description: "Intelligent automation solutions for modern businesses. Streamline operations and boost productivity.",
    siteName: "Connex99",
  },
  twitter: {
    card: "summary_large_image",
    title: "Connex99 — Intelligent Business Automation",
    description: "Intelligent automation solutions for modern businesses. Streamline operations and boost productivity.",
    creator: "@connex99",
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
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${instrumentSerif.variable} antialiased`}>
      <head>
        <link rel="icon" href="/connex99.png" sizes="any" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
        />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Instrument+Serif:wght@400&display=swap" />
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
