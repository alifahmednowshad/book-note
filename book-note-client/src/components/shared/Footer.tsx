import Link from "next/link";
import Image from "next/image";

import { Mail, Phone, MapPin, ChevronRight } from "lucide-react";

import {
  FaFacebookF,
  FaYoutube,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";

import Logo from "@/components/shared/Logo";
import Container from "@/components/ui/Container";
// import background from "../../../public/assets/backgrounds/footer.png"

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "All Books", href: "/books" },
  { label: "Add Book", href: "/add-book" },
  { label: "My Books", href: "/my-books" },
  { label: "My Borrows", href: "/my-borrows" },
];

const categories = [
  { label: "Fiction", href: "/books?category=fiction" },
  { label: "Self-Help", href: "/books?category=self-help" },
  { label: "Science", href: "/books?category=science" },
  { label: "History", href: "/books?category=history" },
  { label: "Kids", href: "/books?category=kids" },
];

const socialLinks = [
  {
    name: "Facebook",
    href: "https://facebook.com",
    icon: FaFacebookF,
  },
  {
    name: "YouTube",
    href: "https://youtube.com",
    icon: FaYoutube,
  },
  {
    name: "Instagram",
    href: "https://instagram.com",
    icon: FaInstagram,
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com",
    icon: FaLinkedinIn,
  },
  {
    name: "X",
    href: "https://x.com",
    icon: FaXTwitter,
  },
];

export default function Footer() {
  return (
    <footer className="relative isolate overflow-hidden bg-[#19382D] bg-[url('/assets/backgrounds/footer.png')] bg-cover bg-right bg-no-repeat text-[#F8F5ED]">
      <div className="absolute inset-0 -z-10 bg-[#19382D]/85" />
      {/* Decorative top border */}
      <div className="h-1 w-full bg-[#D9A441]" />

      <Container>
        {/* Main Footer */}
        <div className="grid grid-cols-1 gap-10 py-14 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8 lg:py-16">
          {/* Brand Column */}
          <div className="space-y-5 lg:col-span-3">
            <Logo light />

            <p className="max-w-xs text-sm leading-7 text-[#F8F5ED]/70">
              Your little online library. Discover wonderful stories, explore
              new ideas, and share the joy of reading with BookNook.
            </p>

            <div className="flex items-center gap-2 text-sm text-[#D9A441]">
              <span className="h-px w-8 bg-[#D9A441]" />
              <span className="font-serif italic">
                A little space for big stories
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h3 className="mb-6 font-serif text-xl font-semibold text-[#F8F5ED]">
              Quick Links
            </h3>

            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="group flex items-center gap-2 text-sm text-[#F8F5ED]/70 transition-colors hover:text-[#D9A441]"
                  >
                    <ChevronRight
                      size={15}
                      className="text-[#D9A441] transition-transform group-hover:translate-x-1"
                    />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div className="lg:col-span-2">
            <h3 className="mb-6 font-serif text-xl font-semibold text-[#F8F5ED]">
              Categories
            </h3>

            <ul className="space-y-4">
              {categories.map((category) => (
                <li key={category.label}>
                  <Link
                    href={category.href}
                    className="group flex items-center gap-2 text-sm text-[#F8F5ED]/70 transition-colors hover:text-[#D9A441]"
                  >
                    <ChevronRight
                      size={15}
                      className="text-[#D9A441] transition-transform group-hover:translate-x-1"
                    />
                    {category.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-2">
            <h3 className="mb-6 font-serif text-xl font-semibold text-[#F8F5ED]">
              Contact Us
            </h3>

            <ul className="space-y-5">
              <li className="flex items-start gap-3">
                <Mail size={18} className="mt-0.5 shrink-0 text-[#D9A441]" />
                <a
                  href="mailto:support@booknook.com"
                  className="break-all text-sm text-[#F8F5ED]/70 transition-colors hover:text-[#D9A441]"
                >
                  support@booknook.com
                </a>
              </li>

              <li className="flex items-start gap-3">
                <Phone size={18} className="mt-0.5 shrink-0 text-[#D9A441]" />
                <a
                  href="tel:+8801700123456"
                  className="text-sm text-[#F8F5ED]/70 transition-colors hover:text-[#D9A441]"
                >
                  +880 1700 123 456
                </a>
              </li>

              <li className="flex items-start gap-3">
                <MapPin size={18} className="mt-0.5 shrink-0 text-[#D9A441]" />
                <span className="text-sm leading-6 text-[#F8F5ED]/70">
                  Dhaka, Bangladesh
                </span>
              </li>
            </ul>
          </div>

          {/* Social + Illustration */}
          <div className="space-y-6 lg:col-span-3">
            <div>
              <h3 className="mb-5 font-serif text-xl font-semibold text-[#F8F5ED]">
                Follow Us
              </h3>

              <div className="flex flex-wrap gap-3">
                {socialLinks.map((social) => {
                  const Icon = social.icon;

                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.name}
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-[#D9A441]/40 text-[#F8F5ED] transition-all duration-300 hover:border-[#D9A441] hover:bg-[#D9A441] hover:text-[#19382D]"
                    >
                      <Icon size={16} />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-[#D9A441]/30 py-6">
          <div className="flex flex-col items-center justify-between gap-5 text-center md:flex-row md:text-left">
            <p className="text-xs text-[#F8F5ED]/60">
              © {new Date().getFullYear()} BookNook. All rights reserved.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
              <Link
                href="/privacy-policy"
                className="text-xs text-[#F8F5ED]/60 transition-colors hover:text-[#D9A441]"
              >
                Privacy Policy
              </Link>

              <Link
                href="/terms"
                className="text-xs text-[#F8F5ED]/60 transition-colors hover:text-[#D9A441]"
              >
                Terms of Service
              </Link>

              <Link
                href="/contact"
                className="text-xs text-[#F8F5ED]/60 transition-colors hover:text-[#D9A441]"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
