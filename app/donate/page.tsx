import DonatePage from '@/components/DonatePage'
import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: "Donate to Shiphrah and Puah's Ministry | Support Pregnant Women & Families",
  description: "Make a meaningful donation to Shiphrah and Puah's Ministry in Uganda. Support expectant mothers, provide care packages, and help strengthen families through counseling and prayer.",
  keywords: [
    "Shiphrah and Puah's Ministry",
    "Shiphrah and Puah",
    "Shiphrah and Puah Ministry",
    "donate ministry Uganda",
    "support pregnant women Uganda",
    "faith-based donations",
    "care packages Uganda",
    "counseling and prayer support",
    "community impact donations",
    "Christian charity Uganda",
    "prenatal support Uganda",
    "child blessing ministry",
    "mobile money donation Uganda",
    "Ugandan ministry donations",
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
    title: "Donate to Shiphrah and Puah's Ministry",
    description: "Support expectant mothers and families in Uganda. Provide care, counseling, and prayer through your donation to Shiphrah and Puah's Ministry.",
    url: "https://shiphrahandpuahministry.org/donate",
    siteName: "Shiphrah and Puah's Ministry",
    images: [
      {
        url: "/donate.png",
        width: 1200,
        height: 630,
        alt: "Donate to Shiphrah and Puah's Ministry",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Donate to Shiphrah and Puah's Ministry",
    description: "Your donation helps pregnant women and families in Uganda through care packages, counseling, and prayer support.",
    images: ["/donate.png"],
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
    <DonatePage/>
    </>
  )
}
