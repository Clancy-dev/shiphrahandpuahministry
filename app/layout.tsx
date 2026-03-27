import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });


export const metadata: Metadata = {
  title: "Shiphrah and Puah's Ministry | Faith, Family & Child Blessings",
  
  description:
    "Shiphrah and Puah's Ministry reminds couples that God is the author of child creation, child spacing, and child control. We provide spiritual guidance, counseling for pregnant women, and support for families.",

  keywords: [
    "Shiphrah and Puah",
    "Shiphrah and Puah's Ministry",
    "Shiphrah and Puah Ministry",
    "Christian ministry Uganda",
    "pregnancy counseling Uganda",
    "faith and family",
    "child creation God",
    "Christian family support",
    "support for pregnant women",
    "Bible teachings on children",
    "marriage and family ministry",
    "Christian counseling Uganda",
    "pro-life ministry",
    "mother support Uganda"
  ],

  authors: [{ name: "Shiphrah and Puah's Ministry" }],
  creator: "Shiphrah and Puah's Ministry",
  publisher: "Shiphrah and Puah's Ministry",

  metadataBase: new URL("https://shiphrahandpuahministry.org"),

  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },

  openGraph: {
    title: "Shiphrah and Puah's Ministry",
    description:
      "Faith-based support for families and pregnant women. Teaching that God leads in child creation, spacing, and control.",
    url: "https://shiphrahandpuahministry.org",
    siteName: "Shiphrah and Puah's Ministry",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Shiphrah and Puah's Ministry",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Shiphrah and Puah's Ministry",
    description:
      "Supporting families and pregnant women through faith and counseling.",
    images: ["/logo.png"],
  },

  robots: {
    index: true,
    follow: true,
  },

  category: "religion",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
