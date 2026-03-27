import HomePage from '@/components/HomePage'
import React from 'react'
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Shiphrah and Puah's Ministry | Faith, Family & Child Support",
  description: "Shiphrah and Puah's Ministry spreads God's Word on Child Creation, Child Spacing, and Child Control. We support families with prayer, biblical counseling, and community care in Uganda and beyond.",
  keywords: [
    "Shiphrah and Puah's Ministry",
    "Shiphrah and Puah's Ministry",
    "Shiphrah and Puah Ministry",
    "child creation Uganda",
    "child spacing and control",
    "biblical counseling Uganda",
    "prayer support Uganda",
    "community care Uganda",
    "faith-based support Uganda",
    "Christian ministry Uganda",
    "pregnancy support Uganda",
    "family guidance Uganda"
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
    title: "Shiphrah and Puah's Ministry | Faith, Family & Child Support",
    description: "Join Shiphrah and Puah's Ministry in Uganda as we support families through prayer, counseling, and community care, sharing God's plan for child creation, spacing, and control.",
    url: "https://shiphrahandpuahministry.org",
    siteName: "Shiphrah and Puah's Ministry",
    images: [
      {
        url: "/hero-home.png",
        width: 1200,
        height: 630,
        alt: "Shiphrah and Puah's Ministry Homepage Banner",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shiphrah and Puah's Ministry | Faith, Family & Child Support",
    description: "Faith, prayer, counseling, and community care – supporting families in Uganda and spreading God's Word on child creation and family planning.",
    images: ["/hero-home.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  category: "charity",
};



export default function page() {
  return (
    <div>
      <HomePage/>
    </div>
  )
}
