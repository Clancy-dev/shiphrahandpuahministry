'use client';

import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you'd send this to your backend
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative h-80 bg-gradient-to-r from-primary to-secondary text-primary-foreground overflow-hidden">
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'url(/contact.png)', backgroundSize: 'cover' }} />
        <div className="relative h-full flex items-center justify-center text-center px-4">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
            <p className="text-xl opacity-90">
              We&apos;d love to hear from you. Reach out anytime.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="p-8 bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl border border-primary/20 text-center">
              <Phone className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-3">Phone</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <a href="tel:+256782358125" className="hover:text-primary transition-colors">
                    +256 782 358 125
                  </a>
                </li>
                <li>
                  <a href="tel:+256757308680" className="hover:text-primary transition-colors">
                    +256 757 308 680
                  </a>
                </li>
                <li className="text-xs pt-2 italic">
                  *Mobile money enabled
                </li>
              </ul>
            </div>

            <div className="p-8 bg-gradient-to-br from-secondary/10 to-accent/10 rounded-xl border border-secondary/20 text-center">
              <Mail className="w-12 h-12 text-secondary mx-auto mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-3">Email</h3>
              <a
                href="mailto:shiphrahandpuahministry@gmail.com"
                className="text-muted-foreground hover:text-secondary transition-colors break-all"
              >
                shiphrahandpuahministry@gmail.com
              </a>
            </div>

            <div className="p-8 bg-gradient-to-br from-accent/10 to-primary/10 rounded-xl border border-accent/20 text-center">
              <MapPin className="w-12 h-12 text-accent mx-auto mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-3">Location</h3>
              <p className="text-muted-foreground">
                Nsagu Central
                <br />
                Off Nakawuka Road
                <br />
                Kajjansi Town Council
                <br />
                Wakiso District, Uganda
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="max-w-2xl mx-auto">
            <div className="bg-gradient-to-br from-accent/5 to-primary/5 p-8 md:p-12 rounded-xl border border-primary/20">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">Send us an Inquiry</h2>

              {submitted ? (
                <div className="text-center py-8">
                  <div className="inline-block p-4 bg-green-100 text-green-700 rounded-lg mb-4">
                    <p className="font-semibold">Thank you for your message!</p>
                    <p className="text-sm">We&apos;ll get back to you soon.</p>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-primary/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-white"
                      placeholder="Your name"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-primary/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-white"
                        placeholder="your@email.com"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-primary/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-white"
                        placeholder="+256..."
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                      Subject *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-primary/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-white"
                    >
                      <option value="">Select a subject</option>
                      <option value="counseling">Request for Counseling</option>
                      <option value="prayer">Prayer Request</option>
                      <option value="partnership">Partnership Inquiry</option>
                      <option value="testimonial">Share Testimonial</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-primary/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-white"
                      placeholder="Tell us how we can help you..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:opacity-90 transition-opacity"
                  >
                    Send Inquiry
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
