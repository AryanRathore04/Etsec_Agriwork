import Link from "next/link";
import { Instagram, Facebook, Linkedin, Twitter } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-white text-gray-800 pt-16 pb-8 w-full">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        {/* Top Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
          {/* Left info section */}
          <div className="lg:col-span-4">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              About Agrivive
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Agrivive partners with farmers to provide eco-friendly products,
              expert guidance, and smart technology to improve yields and
              sustainability.
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

          {/* Spacer so grid aligns correctly on lg */}
          <div className="hidden lg:block lg:col-span-2" />

          {/* Quick Links (moved to the right) */}
          <div className="lg:col-span-2 lg:col-start-10 hidden lg:block">
            <h3 className="text-lg font-semibold text-gray-900 mb-6 text-right">
              Quick link
            </h3>
            {/* stacked list on all sizes; right-aligned on lg */}
            <ul className="flex flex-col items-end space-y-4">
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
        </div>

        {/* Mobile-only centered quick links row (visible on sm and md, hidden on lg+) */}
        <div className="block lg:hidden mt-6 pr-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4 text-right">
            Quick link
          </h3>
          <ul className="flex flex-col items-end space-y-3 text-right">
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
