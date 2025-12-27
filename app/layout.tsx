import type React from "react"
import type { Metadata, Viewport } from "next"
import "./globals.css"
import { Footer } from "@/components/footer"
import { SiteHeader } from "@/components/site-header"
import { Geist, Geist_Mono } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"

const geistSans = Geist({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
})

const geistMono = Geist_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mono",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://lozinr.com"),
  title: "Lozinr | Logo & Brand Identity Design Agency",
  description:
    "Lozinr is a strategic design agency specializing in logo design, brand identity systems, and high-impact visual branding for modern businesses.",
  keywords: [
    "logo design agency",
    "brand identity design",
    "branding agency",
    "visual identity design",
    "brand strategy",
    "creative design studio",
  ],
  authors: [{ name: "Lozinr" }],
  creator: "Lozinr",
  publisher: "Lozinr",
  formatDetection: { email: true, telephone: true, address: true },
  icons: {
    icon: "https://zvrdptt3ydu2jgft.public.blob.vercel-storage.com/Lozinr.png",
    shortcut: "https://zvrdptt3ydu2jgft.public.blob.vercel-storage.com/Lozinr.png",
    apple: "https://zvrdptt3ydu2jgft.public.blob.vercel-storage.com/Lozinr.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://lozinr.com",
    title: "Lozinr | Logo & Brand Identity Design Agency",
    description:
      "Strategic logo design and brand identity systems crafted for clarity, consistency, and lasting impact.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Lozinr Design Agency",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lozinr | Logo & Brand Identity Design Agency",
    description:
      "Strategic logo design and brand identity systems crafted for clarity, consistency, and lasting impact.",
    images: ["/og-image.jpg"],
    creator: "@lozinrdesign",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical: "https://lozinr.com",
  },
  generator: "v0.app",
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  minimumScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: "#000000",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${geistSans.variable} ${geistMono.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              name: "Lozinr",
              url: "https://lozinr.com",
              logo: "https://zvrdptt3ydu2jgft.public.blob.vercel-storage.com/Lozinr.png",
              description:
                "Lozinr is a design agency specializing in logo design, brand identity systems, and visual branding.",
              foundingDate: "2023",
              founder: {
                "@type": "Person",
                name: "Adnan Akif",
                jobTitle: "Founder, Creative Director",
              },
              contactPoint: [
                {
                  "@type": "ContactPoint",
                  contactType: "Customer Service",
                  email: "hello@lozinr.com",
                  url: "https://lozinr.com/contact",
                },
              ],
              sameAs: [
                "https://www.instagram.com/adnanakifdesign/",
                "https://web.facebook.com/brandzinr",
                "https://www.youtube.com/@adnanakifdesign",
              ],
              address: {
                "@type": "PostalAddress",
                addressCountry: "Global",
              },
            }),
          }}
        />
        <link rel="canonical" href="https://lozinr.com" />
      </head>
      <body className={`font-sans antialiased overflow-x-hidden`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem storageKey="theme">
          <SiteHeader />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
