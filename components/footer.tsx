'use client';

import Link from 'next/link';
import { MessageCircle, Facebook, Music, Youtube, Twitter } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Organization Info */}
          <div>
            <h3 className="font-bold text-lg mb-4">Shiphrah & Puah&apos;s Ministry</h3>
            <p className="text-sm opacity-90 mb-4">
              Reminding couples that God does Child Creation, Child Spacing & Child Control.
            </p>
            <div className="text-sm space-y-1">
              <p>Nsagu Central, Off Nakawuka Road</p>
              <p>Kajjansi Town Council, Wakiso District</p>
              <p>Uganda</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:underline">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:underline">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:underline">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:underline">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="tel:+256782358125" className="hover:underline">
                  +256 782 358 125
                </a>
              </li>
              <li>
                <a href="tel:+256757308680" className="hover:underline">
                  +256 757 308 680
                </a>
              </li>
              <li>
                <a
                  href="mailto:shiphrahandpuahministry@gmail.com"
                  className="hover:underline"
                >
                  shiphrahandpuahministry@gmail.com
                </a>
              </li>
              <li className="text-xs opacity-75">
                *Mobile money enabled
              </li>
            </ul>
          </div>

          {/* Get Involved */}
          <div>
            <h4 className="font-semibold mb-4">Get Involved</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/donate" className="hover:underline">
                  Make a Donation
                </Link>
              </li>
              <li>
                <Link href="/membership" className="hover:underline">
                  Join Our Ministry
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:underline">
                  Send an Inquiry
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Media */}
        <div className="border-t border-secondary-foreground/20 pt-8">
          <h4 className="font-semibold mb-4 text-center">Follow Us</h4>
          <div className="flex justify-center items-center gap-6 mb-8">
            <a
              href="https://wa.me/256782358125"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-75 transition-opacity"
              aria-label="WhatsApp"
            >
              <MessageCircle size={24} />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-75 transition-opacity"
              aria-label="Facebook"
            >
              <Facebook size={24} />
            </a>
            <a
              href="https://tiktok.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-75 transition-opacity"
              aria-label="TikTok"
            >
              <Music size={24} />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-75 transition-opacity"
              aria-label="YouTube"
            >
              <Youtube size={24} />
            </a>
            <a
              href="https://x.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-75 transition-opacity"
              aria-label="X"
            >
              <Twitter size={24} />
            </a>
          </div>

          {/* Copyright */}
          <div className="border-t border-secondary-foreground/20 pt-8 text-center text-sm opacity-75">
            <p>&copy; {new Date().getFullYear()} Shiphrah and Puah&apos;s Ministry. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
