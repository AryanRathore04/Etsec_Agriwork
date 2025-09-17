"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const navItems = [
    { path: "/", label: "Home" },
    { path: "/products", label: "Products" },
    { path: "/about", label: "About Us" },
    { path: "/careers", label: "Careers" },
  ];
  const isActive = (path: string) => pathname === path;
  return (
    <nav className="absolute top-0 left-0 right-0 w-full z-[120] mb-4">
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 md:pr-6 lg:pr-0 relative z-[130]">
        <div className="flex justify-between items-center h-20 w-full">
          <Link
            href="/"
            className="flex items-center space-x-2 text-gray-900 hover:opacity-80 transition-opacity pt-2"
          >
            {/* Mobile: use PNG logo (agriwork-upper-logo.png) - visible only on small screens */}
            <Image
              src="/agriwork-upper-logo.png"
              alt="AgriWork"
              width={160}
              height={40}
              className="h-8 w-auto object-contain block md:hidden"
            />

            {/* Desktop: use SVG logo - hidden on small screens */}
            <Image
              src="/Agriwork-svg.svg"
              alt="AgriWork"
              width={300}
              height={90}
              className="hidden md:block h-8 sm:h-12 md:h-16 lg:h-24 w-auto object-contain"
            />
          </Link>
          <div className="hidden md:flex items-center space-x-6 lg:space-x-10">
            {navItems.map((item, index) => (
              <Link
                key={index}
                href={item.path}
                className={`text-sm md:text-md lg:text-lg leading-none transition-colors relative after:absolute after:left-1/2 after:-translate-x-1/2 after:-bottom-2 after:h-[2px] after:rounded-full after:w-0 hover:after:w-4 after:transition-all after:bg-green-700 ${
                  isActive(item.path)
                    ? "text-gray-900 font-semibold after:w-4"
                    : "text-gray-700 hover:text-gray-900"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
          <div className="hidden md:flex items-center space-x-6 lg:space-x-10 pr-0 md:pr-4 lg:pr-0">
            <Link href="/contact">
              <InteractiveHoverButton text="Contact Us" />
            </Link>
          </div>
          <div className="md:hidden relative z-[140]">
            <Button
              variant="ghost"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              className="text-gray-700 hover:text-green-700 relative z-[140] w-12 h-12 p-0 flex items-center justify-center"
            >
              {isMenuOpen ? (
                <X className="h-10 w-10" />
              ) : (
                <Menu className="h-10 w-10" />
              )}
            </Button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="fixed inset-0 top-0 z-[110] bg-white md:hidden overflow-y-auto transition-all">
          <div className="flex flex-col space-y-2 px-4 py-6 pt-24">
            {navItems.map((item, index) => (
              <Link
                key={index}
                href={item.path}
                className={`px-3 py-2 rounded-md transition-colors text-lg md:text-xl ${
                  isActive(item.path)
                    ? "text-green-700 bg-green-50 font-semibold"
                    : "text-gray-700 hover:text-green-700 hover:bg-green-50"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="mx-3"
              onClick={() => setIsMenuOpen(false)}
            >
              <InteractiveHoverButton text="Contact Us" className="w-full" />
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
