import AboutPage from '@/components/AboutPage'
import React from 'react'

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Shiphrah and Puah's Ministry | Faith, Family & Child Blessings",
  
  description: "Learn about Shiphrah and Puah's Ministry, founded by Juliet Nakanwagi Lutakome in Uganda. We provide spiritual guidance on child creation, spacing, and control, support for pregnant women, and community outreach programs.",

  keywords: [
    "Shiphrah and Puah",
    "Shiphrah and Puah's Ministry",
    "Shiphrah and Puah Ministry",
    "Christian ministry Uganda",
    "pregnancy counseling Uganda",
    "child creation God",
    "child spacing",
    "child control",
    "faith and family",
    "Christian counseling",
    "community outreach Uganda",
    "spiritual guidance for couples",
    "Juliet Nakanwagi Lutakome",
    "ministry for families",
    "Bible teachings on children",
    "support for pregnant women",
    "faith-based family planning"
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
    title: "About Shiphrah and Puah's Ministry",
    description: "Discover the story, vision, mission, and community work of Shiphrah and Puah's Ministry. Founded by Juliet Nakanwagi Lutakome in Uganda, we provide guidance on child creation, spacing, and control.",
    url: "https://shiphrahandpuahministry.org/about",
    siteName: "Shiphrah and Puah's Ministry",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Shiphrah and Puah's Ministry Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "About Shiphrah and Puah's Ministry",
    description: "Explore our founder, mission, vision, and community initiatives supporting families and pregnant women in Uganda.",
    images: ["/logo.png"],
  },

  robots: {
    index: true,
    follow: true,
  },

  category: "religion",
};

export default function page() {
  return (
    <>
    <AboutPage/>
    </>
  )
}
