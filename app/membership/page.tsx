'use client';

import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { useState } from 'react';

export default function MembershipPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
    description: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you'd send this to your backend
    console.log('Membership form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setFormData({
        firstName: '',
        lastName: '',
        phoneNumber: '',
        email: '',
        description: '',
      });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative h-80 bg-gradient-to-r from-secondary to-accent text-secondary-foreground overflow-hidden">
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'url(/images/hero-4.jpg)', backgroundSize: 'cover' }} />
        <div className="relative h-full flex items-center justify-center text-center px-4">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Join Our Ministry</h1>
            <p className="text-xl opacity-90">
              Become a member and be part of our mission to support families
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">Why Join Us?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {[
              {
                title: 'Community & Support',
                description: 'Join a caring community of like-minded individuals committed to spreading God&apos;s word on child creation and family planning.',
                icon: '👥',
              },
              {
                title: 'Access to Resources',
                description: 'Gain access to biblical teachings, testimonies, and counseling resources to strengthen your faith and family.',
                icon: '📚',
              },
              {
                title: 'Prayer Network',
                description: 'Be part of our active prayer network interceding for families, expectant mothers, and those seeking God&apos;s guidance.',
                icon: '🙏',
              },
              {
                title: 'Make an Impact',
                description: 'Participate in outreach activities and community service to help pregnant women and families in need.',
                icon: '❤️',
              },
            ].map((benefit, index) => (
              <div key={index} className="p-8 bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl border border-primary/20">
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold text-foreground mb-3">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Registration Form */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-accent/5 to-primary/5">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-8 md:p-12 rounded-xl shadow-lg border border-primary/20">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">Register as a Member</h2>
            <p className="text-center text-muted-foreground mb-8">
              Join us on this journey of faith. Fill out the form below to become a member of Shiphrah and Puah&apos;s Ministry.
            </p>

            {submitted ? (
              <div className="text-center py-12">
                <div className="inline-block p-6 bg-green-100 text-green-700 rounded-lg">
                  <p className="font-bold text-lg mb-2">Welcome to Our Ministry!</p>
                  <p className="mb-2">Thank you for registering. We&apos;re excited to have you as part of our community.</p>
                  <p className="text-sm">We&apos;ll send you more information about getting involved soon.</p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-foreground mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-primary/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Your first name"
                    />
                  </div>

                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-foreground mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-primary/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Your last name"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="phoneNumber" className="block text-sm font-medium text-foreground mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phoneNumber"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-primary/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="+256..."
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email (Optional)
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-primary/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="description" className="block text-sm font-medium text-foreground mb-2">
                    Brief Description (Tell us about yourself) *
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-primary/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Share a bit about yourself, your faith journey, and why you want to join our ministry..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:opacity-90 transition-opacity"
                >
                  Register as Member
                </button>

                <p className="text-xs text-muted-foreground text-center mt-4">
                  By registering, you agree to be part of our ministry community. We respect your privacy and will use
                  your information to keep you updated about ministry activities and prayer requests.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-foreground mb-4">Questions About Membership?</h2>
          <p className="text-muted-foreground mb-6">Feel free to reach out to us directly.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="tel:+256782358125" className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90">
              Call Us
            </a>
            <a href="mailto:shiphrahandpuahministry@gmail.com" className="px-6 py-3 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary/5">
              Email Us
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
