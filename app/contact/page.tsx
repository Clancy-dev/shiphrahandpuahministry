import ContactPage from '@/components/ContactPage'
import React from 'react'
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Contact Shiphrah and Puah's Ministry | Faith, Family & Child Blessings",
  description: "Get in touch with Shiphrah and Puah's Ministry in Uganda. Send inquiries, request counseling, prayer support, or partnership opportunities. We're here to help families through faith and community support.",
  keywords: [
    "Shiphrah and Puah's Ministry",
    "Shiphrah and Puah",
    "Shiphrah and Puah Ministry",
    "contact ministry Uganda",
    "pregnancy counseling Uganda",
    "spiritual guidance Uganda",
    "prayer request",
    "partnership inquiry",
    "Christian ministry contact",
    "faith and family support",
    "child creation counseling",
    "Juliet Nakanwagi Lutakome",
    "contact ministry for families",
    "Bible-based guidance",
    "support for couples Uganda"
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
    title: "Contact Shiphrah and Puah's Ministry",
    description: "Reach out to Shiphrah and Puah's Ministry for counseling, prayer requests, partnership, or general inquiries. Supporting families in Uganda through faith-based guidance.",
    url: "https://shiphrahandpuahministry.org/contact",
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
    title: "Contact Shiphrah and Puah's Ministry",
    description: "Send inquiries, request counseling, or prayer support from Shiphrah and Puah's Ministry in Uganda. Faith-based guidance for families.",
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
    <ContactPage/>
    </>
  )
}
