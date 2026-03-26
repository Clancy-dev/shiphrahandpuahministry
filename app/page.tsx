import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { HeroCarousel } from '@/components/hero-carousel';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Carousel */}
      <HeroCarousel
        title="God Does Child Creation"
        subtitle="Reminding couples that God does Child Spacing & Child Control"
      />

      {/* Features Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Mission</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              To spread God&apos;s biblical scriptures and testimonies on how He does Child Creation, Child Spacing,
              and Child Control to every couple in the world.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Prayer & Support',
                description: 'We stand in prayer with families during every stage of pregnancy and childbirth.',
                icon: '🙏',
              },
              {
                title: 'Biblical Counseling',
                description: 'Through scriptures and testimonies, we share God&apos;s plan for families.',
                icon: '📖',
              },
              {
                title: 'Community Care',
                description: 'We visit and provide support to pregnant women in communities and prisons.',
                icon: '❤️',
              },
            ].map((item, index) => (
              <div key={index} className="p-8 bg-gradient-to-br from-accent/10 to-primary/10 rounded-xl border border-primary/20 hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-primary to-secondary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Make a Difference Today</h2>
          <p className="text-lg mb-8 opacity-95">
            Your generous donation helps us support pregnant women, provide counseling, and spread God&apos;s
            message of hope and care.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/donate"
              className="px-8 py-3 bg-white text-primary font-semibold rounded-lg hover:opacity-90 transition-opacity"
            >
              Make a Donation
            </Link>
            <Link
              href="/about"
              className="px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
            >
              Learn More About Us
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
