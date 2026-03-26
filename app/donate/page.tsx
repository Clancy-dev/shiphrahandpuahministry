'use client';

import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Heart, Gift, Users, Droplet } from 'lucide-react';

export default function DonatePage() {
  const donationOptions = [
    {
      amount: '$10',
      description: 'Basic Support',
      details: 'Provides essential care items for one expectant mother',
      icon: Droplet,
    },
    {
      amount: '$25',
      description: 'Care Package',
      details: 'Supports a care package with nutrition and hygiene items',
      icon: Gift,
    },
    {
      amount: '$50',
      description: 'Community Impact',
      details: 'Supports multiple families with counseling and prayer',
      icon: Users,
    },
    {
      amount: '$100+',
      description: 'Life-Changing Gift',
      details: 'Transforms lives through complete prenatal support',
      icon: Heart,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-r from-primary via-secondary to-accent text-primary-foreground overflow-hidden">
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'url(/images/hero-1.jpg)', backgroundSize: 'cover' }} />
        <div className="relative h-full flex items-center justify-center text-center px-4">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Make a Donation</h1>
            <p className="text-xl opacity-90">
              Your generous gift helps us support pregnant women and strengthen families through faith
            </p>
          </div>
        </div>
      </section>

      {/* Why Donate Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-8">Why Your Donation Matters</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="p-8 bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl border border-primary/20">
              <h3 className="text-2xl font-bold text-primary mb-4">Supporting Expectant Mothers</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Your donations provide essential care items, nutrition, and hygiene products for pregnant women in our communities, including those in Luzira Prisons.
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">✓</span>
                  <span>Nutrition and fresh produce</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">✓</span>
                  <span>Hygiene and baby care products</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">✓</span>
                  <span>Baby essentials and clothing</span>
                </li>
              </ul>
            </div>

            <div className="p-8 bg-gradient-to-br from-secondary/10 to-accent/10 rounded-xl border border-secondary/20">
              <h3 className="text-2xl font-bold text-secondary mb-4">Biblical Counseling & Prayer</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Your gifts enable our counselors to provide spiritual guidance and prayer support to families navigating pregnancy, child spacing, and God&apos;s plan for their lives.
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-secondary font-bold">✓</span>
                  <span>One-on-one biblical counseling</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-secondary font-bold">✓</span>
                  <span>Prayer support networks</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-secondary font-bold">✓</span>
                  <span>Community outreach programs</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Donation Options */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-accent/5 to-primary/5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">Donation Options</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {donationOptions.map((option, index) => {
              const IconComponent = option.icon;
              return (
                <div
                  key={index}
                  className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg border-2 border-primary/20 hover:border-primary/50 transition-all hover:scale-105"
                >
                  <IconComponent className="w-10 h-10 text-primary mb-4" />
                  <h3 className="text-3xl font-bold text-primary mb-2">{option.amount}</h3>
                  <p className="font-semibold text-foreground mb-2">{option.description}</p>
                  <p className="text-sm text-muted-foreground">{option.details}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact for Donations */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-8">How to Donate</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="p-8 bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl border-2 border-primary/30">
              <h3 className="text-2xl font-bold text-foreground mb-4">Mobile Money Transfer</h3>
              <p className="text-muted-foreground mb-6">
                You can send your donation directly through mobile money to either of our contact numbers. Both numbers are enabled for mobile money transactions.
              </p>
              <div className="space-y-3">
                <a
                  href="tel:+256782358125"
                  className="block p-4 bg-primary text-primary-foreground rounded-lg text-center font-semibold hover:opacity-90 transition-opacity"
                >
                  +256 782 358 125
                </a>
                <a
                  href="tel:+256757308680"
                  className="block p-4 bg-secondary text-secondary-foreground rounded-lg text-center font-semibold hover:opacity-90 transition-opacity"
                >
                  +256 757 308 680
                </a>
              </div>
            </div>

            <div className="p-8 bg-gradient-to-br from-secondary/10 to-accent/10 rounded-xl border-2 border-secondary/30">
              <h3 className="text-2xl font-bold text-foreground mb-4">Contact Us Directly</h3>
              <p className="text-muted-foreground mb-6">
                For other donation methods or to discuss larger contributions, please reach out to us via email or phone.
              </p>
              <div className="space-y-3">
                <a
                  href="mailto:shiphrahandpuahministry@gmail.com"
                  className="block p-4 bg-primary text-primary-foreground rounded-lg text-center font-semibold hover:opacity-90 transition-opacity"
                >
                  Email Us
                </a>
                <a
                  href="/contact"
                  className="block p-4 border-2 border-secondary text-secondary rounded-lg text-center font-semibold hover:bg-secondary/5 transition-colors"
                >
                  Send Inquiry
                </a>
              </div>
            </div>
          </div>

          {/* Impact Message */}
          <div className="text-center p-8 bg-gradient-to-r from-primary to-secondary text-primary-foreground rounded-xl">
            <h3 className="text-2xl font-bold mb-4">Your Impact</h3>
            <p className="text-lg leading-relaxed">
              Every donation, regardless of size, makes a tangible difference in the lives of expectant mothers and families. 
              Your gift is not just financial support—it&apos;s a message of love, care, and God&apos;s presence in their lives.
            </p>
          </div>
        </div>
      </section>

      {/* Transparency Section */}
      <section className="py-16 bg-gradient-to-br from-accent/5 to-primary/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-center text-foreground mb-8">Our Commitment to You</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Transparency',
                description: 'We maintain clear records of how donations are used in our ministry work.',
              },
              {
                title: 'Accountability',
                description: 'Every dollar is used to directly support our mission of serving pregnant women and families.',
              },
              {
                title: 'Impact Reports',
                description: 'We regularly share updates on how your donations have made a difference in our community.',
              },
            ].map((commitment, index) => (
              <div key={index} className="text-center">
                <h3 className="text-xl font-bold text-primary mb-2">{commitment.title}</h3>
                <p className="text-muted-foreground">{commitment.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
