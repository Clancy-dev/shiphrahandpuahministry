
import ServicesPage from '@/components/ServicesPage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Our Services | Shiphrah and Puah's Ministry",
  description: "Discover the services offered by Shiphrah and Puah's Ministry in Uganda. From biblical counseling, prayer support, community outreach, to family reconciliation, we support families and couples on their journey of faith.",
  keywords: [
    "Shiphrah and Puah's Ministry services",
    "Shiphrah and Puah's Ministry",
    "Shiphrah and Puah Ministry",
    "biblical counseling Uganda",
    "prayer support Uganda",
    "community outreach Uganda",
    "family reconciliation Uganda",
    "faith-based support Uganda",
    "Christian ministry Uganda",
    "support pregnant women Uganda",
    "Uganda ministry services",
    "spiritual guidance Uganda"
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
    title: "Our Services | Shiphrah and Puah's Ministry",
    description: "Explore how Shiphrah and Puah's Ministry supports families through biblical counseling, prayer, community outreach, and family reconciliation.",
    url: "https://shiphrahandpuahministry.org/services",
    siteName: "Shiphrah and Puah's Ministry",
    images: [
      {
        url: "/services.png",
        width: 1200,
        height: 630,
        alt: "Services offered by Shiphrah and Puah's Ministry",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Services | Shiphrah and Puah's Ministry",
    description: "Learn about our ministry services, including counseling, prayer support, community outreach, and family reconciliation in Uganda.",
    images: ["/services.png"],
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
    <ServicesPage/>
    </>
  )
}
