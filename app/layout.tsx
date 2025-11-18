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
  title: "Zentria Labs — Zentralizing Your Workflows",
  description: "Zentria Labs is a software studio building micro-SaaS products that streamline workflows and boost productivity. Discover SubChecks and our upcoming tools.",
  keywords: ["SaaS", "micro-SaaS", "workflow automation", "productivity tools", "software studio", "SubChecks", "Zentria Labs"],
  authors: [{ name: "Zentria Labs" }],
  creator: "Zentria Labs",
  publisher: "Zentria Labs",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://zentrialabs.com",
    title: "Zentria Labs — Zentralizing Your Workflows",
    description: "Software studio building micro-SaaS products that streamline workflows and boost productivity.",
    siteName: "Zentria Labs",
  },
  twitter: {
    card: "summary_large_image",
    title: "Zentria Labs — Zentralizing Your Workflows",
    description: "Software studio building micro-SaaS products that streamline workflows and boost productivity.",
    creator: "@zentrialabs",
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
        <link rel="icon" href="/ZentriaLabs_Logo.png" sizes="any" />
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
