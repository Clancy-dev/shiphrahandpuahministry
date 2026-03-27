import MembershipPage from '@/components/MembershipPage'
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Join Shiphrah and Puah's Ministry | Membership Registration",
  description: "Become a member of Shiphrah and Puah's Ministry in Uganda. Join a caring community, access biblical resources, participate in prayer networks, and make a positive impact in families' lives.",
  keywords: [
    "Shiphrah and Puah's Ministry",
    "Shiphrah and Puah's Ministry",
    "Shiphrah and Puah Ministry",
    "membership ministry Uganda",
    "join Christian ministry Uganda",
    "faith-based community Uganda",
    "biblical counseling Uganda",
    "prayer network Uganda",
    "family support ministry",
    "support pregnant women Uganda",
    "Christian community membership",
    "Uganda ministry registration",
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
    title: "Join Shiphrah and Puah's Ministry",
    description: "Register as a member and be part of a community supporting families, pregnant women, and spiritual growth through faith, prayer, and counseling.",
    url: "https://shiphrahandpuahministry.org/membership",
    siteName: "Shiphrah and Puah's Ministry",
    images: [
      {
        url: "/member.jpg",
        width: 1200,
        height: 630,
        alt: "Join Shiphrah and Puah's Ministry",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Join Shiphrah and Puah's Ministry",
    description: "Become a member of our ministry and contribute to supporting families, accessing biblical resources, and participating in our prayer network.",
    images: ["/member.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  category: "charity",
};


export default function page() {
  return (
    <>
    <MembershipPage/>
    </>
  )
}
