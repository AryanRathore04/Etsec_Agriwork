import Link from "next/link";
import { Instagram, Facebook, Linkedin, Twitter } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-white text-gray-800 pt-16 pb-8 w-full">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        {/* Top Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
          {/* Sign up section */}
          <div className="lg:col-span-4">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Sign up to The Wrap Up
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Your one-stop shop for the tech, business, and finance news you
              need to know each week.
            </p>

            {/* Social Media Icons */}
            <div className="flex items-center space-x-4">
              <Link
                href="#"
                className="text-gray-600 hover:text-green-600 transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="text-gray-600 hover:text-green-600 transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="text-gray-600 hover:text-green-600 transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="text-gray-600 hover:text-green-600 transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h3 className="text-lg font-semibold text-gray-900 mb-6">
              Quick link
            </h3>
            <ul className="space-y-4">
              <li>
                <Link
                  href="/"
                  className="text-gray-600 hover:text-green-600 transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/features"
                  className="text-gray-600 hover:text-green-600 transition-colors"
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-600 hover:text-green-600 transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/testimonial"
                  className="text-gray-600 hover:text-green-600 transition-colors"
                >
                  Testimonial
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="text-gray-600 hover:text-green-600 transition-colors"
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Solutions */}
          <div className="lg:col-span-2">
            <h3 className="text-lg font-semibold text-gray-900 mb-6">
              Solutions
            </h3>
            <ul className="space-y-4">
              <li>
                <Link
                  href="/midday-engine"
                  className="text-gray-600 hover:text-green-600 transition-colors"
                >
                  Midday Engine
                </Link>
              </li>
              <li>
                <Link
                  href="/self-hosted"
                  className="text-gray-600 hover:text-green-600 transition-colors"
                >
                  Self hosted
                </Link>
              </li>
              <li>
                <Link
                  href="/saas-hosting"
                  className="text-gray-600 hover:text-green-600 transition-colors"
                >
                  SaaS hosting
                </Link>
              </li>
              <li>
                <Link
                  href="/oss-friends"
                  className="text-gray-600 hover:text-green-600 transition-colors"
                >
                  OSS friends
                </Link>
              </li>
            </ul>
          </div>

          {/* Email Subscription */}
          <div className="lg:col-span-4">
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter email address..."
                className="flex-1 px-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent bg-gray-100 text-gray-700"
              />
              <button className="px-8 py-3 bg-green-600 hover:bg-green-700 text-white rounded-full font-medium transition-colors whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Large Agrative Text with Logo - Full Width */}
      </div>

      {/* Full-width Agrative section */}
      <div className="w-full">
        <div className="w-full">
          <Image
            src="/Agriwork-only.png"
            alt="Agrotive Logo"
            width={1200}
            height={300}
            className="w-full h-auto object-cover"
            priority
          />
        </div>
      </div>
    </footer>
  );
}
