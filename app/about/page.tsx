'use client';

import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

export default function AboutPage() {
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
      <section className="relative h-96 bg-gradient-to-r from-primary to-secondary text-primary-foreground overflow-hidden">
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'url(/about.png)', backgroundSize: 'cover' }} />
        <div className="relative h-full flex items-center justify-center text-center px-4">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">About Our Ministry</h1>
            <p className="text-xl opacity-90">
              Celebrating God&apos;s work through faith, community, and compassionate care
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div id="story" data-animate className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center transition-all duration-700 ${visibleSections['story'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Our Story</h2>
              <p className="text-muted-foreground text-lg mb-4 leading-relaxed">
                Shiphrah and Puah&apos;s Ministry was registered on May 21, 2025, but our journey began much earlier. 
                Our founder, Juliet Nakanwagi Lutakome, received an instant healing from a two-and-a-half-year sharp spinal 
                pain in 2014—a revelation from Jesus showing her that God opens and closes the womb.
              </p>
              <p className="text-muted-foreground text-lg mb-4 leading-relaxed">
                This healing opened her eyes to God&apos;s mighty hand in child creation, child spacing, and child control. 
                With this understanding and faith, Juliet has been sharing these biblical truths through gatherings, 
                one-on-one meetings, and social media since 2016.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Today, we are honored to extend this ministry worldwide, helping couples understand that their family 
                planning is in God&apos;s hands.
              </p>
            </div>
            <div className="relative h-96 rounded-xl overflow-hidden shadow-2xl">
              <Image
                src="/logo.png"
                alt="Our Ministry"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* The Founder */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-accent/5 to-primary/5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div id="founder" data-animate className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center transition-all duration-700 ${visibleSections['founder'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="order-2 md:order-1">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Meet Our Founder</h2>
              <p className="text-muted-foreground text-lg mb-4 leading-relaxed">
                Juliet Nakanwagi Lutakome is a dedicated wife and mother of six children. Her personal testimony of 
                faith and healing inspired her to establish this ministry.
              </p>
              <p className="text-muted-foreground text-lg mb-4 leading-relaxed">
                Through her journey of motherhood and faith, Juliet discovered God&apos;s perfect plan for families. 
                She now dedicates her life to helping others find peace in God&apos;s sovereignty over child creation 
                and family planning.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Located in Nsagu, Kajjansi, Uganda, the ministry is built on biblical truths and real testimonies 
                of God&apos;s faithfulness.
              </p>
            </div>
            <div className="order-1 md:order-2 flex justify-center">
              <Image
                    src="/founder.png"
                    alt="Juliet Nakanwagi Lutakome - Founder"
                    width={500}
                    height={500}
                    className="mx-auto rounded-2xl shadow-lg mb-6 w-72 h-72 object-cover"
                  />
                 
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">Our Vision & Mission</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div id="vision" data-animate className={`p-8 bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl border-2 border-primary/30 transition-all duration-700 ${visibleSections['vision'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h3 className="text-2xl font-bold text-primary mb-4">Our Vision</h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                To see that all couples in the world get to know that God does Child creation, Child Spacing and Child 
                Control by use of biblical scriptures and testimonies.
              </p>
            </div>
            <div id="mission" data-animate className={`p-8 bg-gradient-to-br from-secondary/10 to-accent/10 rounded-xl border-2 border-secondary/30 transition-all duration-700 ${visibleSections['mission'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h3 className="text-2xl font-bold text-secondary mb-4">Our Mission</h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                To spread God&apos;s biblical scriptures and testimonies on how he does Child Creation, Child Spacing 
                and Child Control to every couple in the world.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Community Work */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-accent/5 to-primary/5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">Our Community Work</h2>
          
          <div id="luzira" data-animate className={`mb-12 transition-all duration-700 ${visibleSections['luzira'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="relative h-96 rounded-xl overflow-hidden shadow-2xl">
                <Image
                  src="/pregnant.png"
                  alt="Luzira Prison Visit"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Luzira Prison Outreach</h3>
                <p className="text-muted-foreground text-lg mb-4 leading-relaxed">
                  In September 2025, we were honored to visit pregnant women at Luzira Prisons in Uganda. 
                  This marks a significant part of our ministry&apos;s commitment to reaching and supporting 
                  all women, regardless of their circumstances.
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold">✓</span>
                    <span>Visits scheduled for September, October, and November 2025</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold">✓</span>
                    <span>Distributed essential care items including nutrition, hygiene, and baby supplies</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold">✓</span>
                    <span>Provided spiritual support and prayer to expectant mothers</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
