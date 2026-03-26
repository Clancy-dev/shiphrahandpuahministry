'use client';

import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function ServicesPage() {
  const [visibleSections, setVisibleSections] = useState<{ [key: string]: boolean }>({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => ({
              ...prev,
              [entry.target.id]: true,
            }));
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('[data-animate]');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative h-80 bg-gradient-to-r from-primary to-secondary text-primary-foreground overflow-hidden">
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'url(/services.png)', backgroundSize: 'cover' }} />
        <div className="relative h-full flex items-center justify-center text-center px-4">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
            <p className="text-xl opacity-90">
              Comprehensive support for families on their journey of faith
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">How We Serve</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Through prayer, counseling, and community outreach, we support couples and families 
              in understanding God&apos;s plan for their lives.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div id="service1" data-animate className={`transition-all duration-700 ${visibleSections['service1'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="relative h-80 rounded-xl overflow-hidden shadow-lg mb-6">
                <Image
                  src="/counsel.png"
                  alt="Biblical Counseling"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Biblical Counseling</h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                We provide compassionate counseling grounded in biblical scriptures, helping couples 
                understand God&apos;s sovereignty over child creation, spacing, and control. Our counselors 
                work one-on-one to address concerns and build faith.
              </p>
            </div>

            <div id="service2" data-animate className={`transition-all duration-700 ${visibleSections['service2'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="relative h-80 rounded-xl overflow-hidden shadow-lg mb-6">
                <Image
                  src="/reading bible.png"
                  alt="Prayer & Spiritual Support"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Prayer & Spiritual Support</h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                We stand in prayer with families during every stage of their journey—from trying to conceive, 
                through pregnancy, labor, and beyond. Our prayers are offered for guidance, strength, and faith.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div id="service3" data-animate className={`transition-all duration-700 ${visibleSections['service3'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="relative h-80 rounded-xl overflow-hidden shadow-lg mb-6">
                <Image
                  src="/community.png"
                  alt="Community Outreach"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Community Outreach</h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                We actively reach out to pregnant women in communities and prisons, providing essential support, 
                care items, and encouraging testimonies of God&apos;s faithfulness in all circumstances.
              </p>
            </div>

            <div id="service4" data-animate className={`transition-all duration-700 ${visibleSections['service4'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="relative h-80 rounded-xl overflow-hidden shadow-lg mb-6">
                <Image
                  src="/family.png"
                  alt="Family Reunification"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Family Reconciliation</h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                We help unite separated families and encourage reconciliation, promoting unity and God&apos;s 
                design for family structures. We walk with families through challenging seasons.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Details */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-accent/5 to-primary/5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">Our Specialties</h2>
          
          <div className="space-y-8">
            {[
              {
                id: 'spec1',
                title: 'God Does Child Creation',
                items: [
                  'Share biblical scriptures on God creating humans',
                  'Celebrate and praise God&apos;s mighty hand of creation',
                  'Support expectant mothers with prayer and care',
                  'Stand with families during childbirth and recovery',
                ],
              },
              {
                id: 'spec2',
                title: 'God Does Child Spacing & Control',
                items: [
                  'Counsel couples on God&apos;s sovereignty in family planning',
                  'Share testimonies of God&apos;s faithful provision',
                  'Support childless couples with prayer and encouragement',
                  'Help couples understand their desires in God&apos;s design',
                ],
              },
            ].map((specialty) => (
              <div
                key={specialty.id}
                id={specialty.id}
                data-animate
                className={`p-8 bg-white rounded-xl shadow-md border-l-4 border-primary transition-all duration-700 ${
                  visibleSections[specialty.id] ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
                }`}
              >
                <h3 className="text-2xl font-bold text-foreground mb-6">{specialty.title}</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {specialty.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="text-primary font-bold text-lg mt-1">✓</span>
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-primary to-secondary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Join Our Community?</h2>
          <p className="text-lg mb-8 opacity-95">
            Whether you&apos;re seeking counseling, prayer support, or want to become part of our ministry,
            we&apos;d love to connect with you.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="/contact"
              className="px-8 py-3 bg-white text-primary font-semibold rounded-lg hover:opacity-90 transition-opacity"
            >
              Get in Touch
            </a>
            <a
              href="/membership"
              className="px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
            >
              Join Our Ministry
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
