"use client";

import Link from "next/link";
import Image from "next/image";
// Removed unused UI imports to clear ESLint warnings
import { ArrowRight } from "lucide-react";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";

export default function HomePage() {
  return (
    <div className="bg-white">
      <section
        className="relative min-h-[55vh] sm:min-h-[65vh] md:min-h-[75vh] lg:min-h-[85vh] flex items-center overflow-hidden"
        style={{
          backgroundImage: "url('/topography/topography.svg')",
          backgroundRepeat: "repeat",
          backgroundSize: "400px 400px",
          backgroundPosition: "0 0",
        }}
      >
        <div className="absolute  inset-0 bg-white/90 z-10"></div>
        <div className="relative mt-8 sm:mt-12 z-[100] max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mt-8 sm:mt-0">
            <div
              className="inline-flex items-center mb-4 sm:mb-3 rounded-full overflow-hidden text-xs sm:text-sm font-medium"
              style={{ backgroundColor: "#0B5C43" }}
            >
              <span className="px-3 sm:px-5 md:px-6 py-1.5 sm:py-2 bg-white text-gray-800 rounded-full ml-1 my-1 font-medium text-xs sm:text-sm">
                New
              </span>
              <span className="px-2 sm:px-3 py-1.5 sm:py-2 text-white flex items-center gap-1 sm:gap-2 text-xs sm:text-sm font-regular">
                Choose your destination{" "}
                <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4" />
              </span>
            </div>
            <h1 className="fade-in-up text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight text-[#2B2B2B] mb-3 sm:mb-3 leading-snug sm:leading-[1.05] max-w-[40ch] sm:max-w-3xl md:max-w-4xl mx-auto font-regular">
              <span className="block sm:inline">Eco-Friendly Farming, </span>
              <span className="block sm:inline sm:ml-2">
                Exceptional Harvests
              </span>
            </h1>
            <p className="fade-in-up-delayed text-base sm:text-lg md:text-xl lg:text-2xl text-[#2B2B2B] mb-5 sm:mb-7 md:mb-10 max-w-full sm:max-w-xl md:max-w-2xl mx-auto leading-relaxed font-light px-2 sm:px-0">
              Empowering Farmers with Technology, Expertise, and Eco-Friendly
              Practices.
            </p>
            <div className="fade-in-up-more flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-5 justify-center items-center mb-5 sm:mb-7 md:mb-10 px-4 sm:px-0 w-full">
              <Link href="/products" className="flex justify-center sm:w-auto">
                <InteractiveHoverButton
                  text="Explore Solutions"
                  className="rounded-full bg-[#0B5C43] border-[#0B5C43] hover:bg-[#094D3A] text-white px-5 sm:px-6 h-11 sm:h-12 text-sm sm:text-base min-w-[150px] sm:min-w-[200px] w-full sm:w-auto group"
                />
              </Link>
              <Link href="/contact" className="flex justify-center sm:w-auto">
                <button className="group relative cursor-pointer overflow-hidden rounded-full border-2 border-gray-300 bg-white text-gray-800 transition-colors duration-300 min-w-[150px] sm:min-w-[220px] flex items-center gap-2 sm:gap-3 px-4 sm:px-6 h-11 sm:h-12 text-sm sm:text-sm font-medium w-full sm:w-auto">
                  {/* Expanding green background animation */}
                  <div
                    className="absolute left-2 top-1/2 -translate-y-1/2 z-0 h-2 w-2 scale-[1] rounded-full transition-all duration-300 group-hover:left-0 group-hover:top-0 group-hover:translate-y-0 group-hover:h-full group-hover:w-full group-hover:scale-[1.8]"
                    style={{ backgroundColor: "#0B5C43" }}
                  ></div>

                  {/* Text that slides out */}
                  <span className="relative z-20 ml-2 sm:ml-3 transition-all duration-300 group-hover:translate-x-12 group-hover:opacity-0">
                    Get Free Consultation
                  </span>

                  {/* Text + arrow that slides in from right */}
                  <div className="absolute top-0 left-0 z-10 flex h-full w-full translate-x-12 items-center justify-center gap-1 sm:gap-2 text-white opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
                    <span>Get Free Consultation</span>
                    <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4 ml-1" />
                  </div>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="py-10 sm:py-12 bg-white overflow-hidden">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          {/* Badge and Heading */}
          <div className="mb-8 text-center">
            <div className="inline-block px-3 py-1 rounded-full bg-green-900 text-white text-sm font-medium mb-4">
              Key Features
            </div>
            <h2 className="text-4xl font-bold text-gray-900 font-roboto">
              Why Choose Our <em className="italic">Agrotive</em>?
            </h2>
          </div>

          {/* Bento Grid Layout - Full Screen */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 min-h-[auto]">
            {/* Expert Support Card */}
            <div
              className="md:col-span-1 lg:col-span-1 rounded-xl shadow-md p-6 flex flex-col justify-center items-center text-center w-full"
              style={{ backgroundColor: "#C1EB91" }}
            >
              <div className="flex flex-col items-center">
                <div className="flex items-center justify-center mb-4">
                  <Image
                    src="/icon-24.svg"
                    alt="24/7 Support Icon"
                    width={48}
                    height={48}
                    className="w-14 h-14 filter brightness-0 invert"
                  />
                </div>
                <h1
                  className="text-3xl font-semibold mb-2"
                  style={{ color: "#0B5C43" }}
                >
                  Expert Support
                </h1>
                <p
                  className="text-base leading-relaxed"
                  style={{ color: "#0B5C43" }}
                >
                  24/7 access to agronomists and farming specialists.
                </p>
              </div>
            </div>

            {/* Organic Focus Card */}
            <div className="md:col-span-1 lg:col-span-1 bg-gray-100 rounded-xl shadow-md p-4 flex flex-col justify-center items-center text-center w-full">
              <div className="flex flex-col items-center">
                <div className="flex items-center justify-center mb-4">
                  <Image
                    src="/leaf-svgrepo-com.svg"
                    alt="Organic Focus Icon"
                    width={80}
                    height={80}
                    className="w-20 h-20"
                  />
                </div>
                <h1 className="text-4xl font-semibold text-gray-900 mb-2">
                  Organic Focus
                </h1>
                <p className="text-gray-700 text-xl leading-relaxed">
                  Certified organic solutions for healthier crops.
                </p>
              </div>
            </div>

            {/* Sustainable Practices Card (Wide on mobile, tall on desktop) */}
            <div className="md:col-span-2 lg:col-span-2 lg:row-span-2 bg-green-800 rounded-xl shadow-md p-6 flex flex-col justify-center text-white w-full">
              <div className="flex flex-col items-center text-center">
                <div className="relative w-20 h-20 lg:w-24 lg:h-24 mb-4 lg:mb-6">
                  <Image
                    src="/icon-leaf-recycle.svg"
                    alt="Sustainable Practices Icon"
                    width={96}
                    height={96}
                    className="w-full h-full filter brightness-0 invert"
                  />
                </div>
                <h3 className="text-4xl lg:text-5xl font-semibold text-white mb-3">
                  Sustainable Practices
                </h3>
                <p className="text-green-100 text-xl lg:text-2xl leading-relaxed max-w-sm">
                  Reduce waste, conserve water, and boost yields with precision
                  farming techniques and eco-friendly solutions.
                </p>
              </div>
            </div>

            {/* Modern Agri-Tech Card */}
            <div className="md:col-span-1 lg:col-span-1 bg-gray-100 rounded-xl shadow-md p-4 flex flex-col justify-center items-center text-center w-full">
              <div className="flex flex-col items-center">
                <div className="flex items-center justify-center mb-4">
                  <Image
                    src="/icon-flask.svg"
                    alt="Modern Agri-Tech Icon"
                    width={80}
                    height={80}
                    className="w-20 h-20"
                  />
                </div>
                <h3 className="text-4xl font-semibold text-gray-900 mb-2">
                  Modern Agri-Tech
                </h3>
                <p className="text-gray-700 text-xl leading-relaxed">
                  IoT sensors, drone monitoring, and smart irrigation.
                </p>
              </div>
            </div>

            {/* Agricultural Excellence Image */}
            <div className="md:col-span-1 lg:col-span-1 rounded-xl shadow-md overflow-hidden w-full">
              <Image
                src="/ladybug-leaf.jpg"
                alt="Sustainable Agriculture Excellence"
                width={800}
                height={800}
                className="w-full h-auto object-cover max-h-96 md:max-h-[400px]"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </div>
          </div>
        </div>
      </section>
      <section
        className="relative py-12 sm:py-16 md:py-20 overflow-hidden"
        style={{
          backgroundImage: "url('/topography/topography.svg')",
          backgroundRepeat: "repeat",
          backgroundSize: "400px 400px",
          backgroundPosition: "0 0",
        }}
      >
        <div className="absolute inset-0 bg-gray-100/80 z-10"></div>
        <div className="relative z-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-3xl md:text-4xl text-gray-900 leading-relaxed">
            With over 10 years of experience, Agrative is dedicated to
            revolutionizing agriculture. We partner with farmers worldwide to
            adopt innovative techniques, reduce costs, and promote sustainable
            ecosystems. Our mission is to bridge tradition with technology for a
            greener tomorrow.
          </p>
        </div>
      </section>
      <section className="py-12 sm:py-16 bg-white">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8 md:mb-12 gap-4 md:gap-0">
            <div>
              <div className="inline-block px-4 py-2 rounded-full bg-green-800 text-white text-sm font-medium mb-4">
                Our Products
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                Premium <em className="italic">Agricultural Products</em>
              </h2>
            </div>
            <div className="hidden md:flex items-center gap-4">
              <button
                id="scroll-left"
                className="w-12 h-12 rounded-full border-2 border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-colors"
                onClick={() => {
                  const container =
                    document.getElementById("products-container");
                  if (container)
                    container.scrollBy({ left: -300, behavior: "smooth" });
                }}
              >
                <ArrowRight className="w-5 h-5 rotate-180 text-gray-600" />
              </button>
              <button
                id="scroll-right"
                className="w-12 h-12 rounded-full bg-green-800 text-white flex items-center justify-center hover:bg-green-900 transition-colors"
                onClick={() => {
                  const container =
                    document.getElementById("products-container");
                  if (container)
                    container.scrollBy({ left: 300, behavior: "smooth" });
                }}
              >
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Products Horizontal Scroll */}
          <div
            id="products-container"
            className="flex gap-6 overflow-x-auto pb-4 mb-8 touch-pan-x"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {/* Organic Seeds */}
            <div className="flex-none w-72 sm:w-80 relative rounded-2xl overflow-hidden group cursor-pointer h-[380px] sm:h-[450px]">
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent z-10"></div>
              <Image
                src="/ladybug-leaf.jpg"
                alt="Organic Seeds"
                width={640}
                height={900}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 640px) 100vw, 320px"
              />
              <div className="absolute bottom-6 left-6 right-6 z-20 text-white">
                <div className="inline-block px-3 py-1 rounded-full bg-green-600 text-xs font-medium mb-2">
                  Premium Quality
                </div>
                <h3 className="text-xl font-semibold mb-2">Organic Seeds</h3>
                <p className="text-sm text-gray-200 mb-4">
                  High-yield organic seeds for sustainable farming.
                </p>
                <div className="flex items-center justify-between">
                  <Link href="/products/organic-seeds">
                    <button className="bg-white text-green-800 px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-100 transition-colors">
                      View Details
                    </button>
                  </Link>
                </div>
              </div>
            </div>

            {/* Bio-Fertilizers */}
            <div className="flex-none w-72 sm:w-80 relative rounded-2xl overflow-hidden group cursor-pointer h-[380px] sm:h-[450px]">
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent z-10"></div>
              <Image
                src="/ladybug-leaf.jpg"
                alt="Bio-Fertilizers"
                width={320}
                height={450}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute bottom-6 left-6 right-6 z-20 text-white">
                <div className="inline-block px-3 py-1 rounded-full bg-blue-600 text-xs font-medium mb-2">
                  Eco-Friendly
                </div>
                <h3 className="text-xl font-semibold mb-2">Bio-Fertilizers</h3>
                <p className="text-sm text-gray-200 mb-4">
                  Natural fertilizers to boost soil health and crop yield.
                </p>
                <div className="flex items-center justify-between">
                  <Link href="/products/bio-fertilizers">
                    <button className="bg-white text-green-800 px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-100 transition-colors">
                      View Details
                    </button>
                  </Link>
                </div>
              </div>
            </div>

            {/* Smart Irrigation Kits */}
            <div className="flex-none w-72 sm:w-80 relative rounded-2xl overflow-hidden group cursor-pointer h-[380px] sm:h-[450px]">
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent z-10"></div>
              <Image
                src="/ladybug-leaf.jpg"
                alt="Smart Irrigation Kits"
                width={320}
                height={450}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute bottom-6 left-6 right-6 z-20 text-white">
                <div className="inline-block px-3 py-1 rounded-full bg-purple-600 text-xs font-medium mb-2">
                  Smart Tech
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  Smart Irrigation Kits
                </h3>
                <p className="text-sm text-gray-200 mb-4">
                  IoT-enabled irrigation systems for water conservation.
                </p>
                <div className="flex items-center justify-between">
                  <Link href="/products/smart-irrigation-kits">
                    <button className="bg-white text-green-800 px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-100 transition-colors">
                      View Details
                    </button>
                  </Link>
                </div>
              </div>
            </div>

            {/* Pest Control Solutions */}
            <div className="flex-none w-72 sm:w-80 relative rounded-2xl overflow-hidden group cursor-pointer h-[380px] sm:h-[450px]">
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent z-10"></div>
              <Image
                src="/ladybug-leaf.jpg"
                alt="Pest Control Solutions"
                width={320}
                height={450}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute bottom-6 left-6 right-6 z-20 text-white">
                <div className="inline-block px-3 py-1 rounded-full bg-orange-600 text-xs font-medium mb-2">
                  Natural Defense
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  Pest Control Solutions
                </h3>
                <p className="text-sm text-gray-200 mb-4">
                  Organic pest control for healthy crop protection.
                </p>
                <div className="flex items-center justify-between">
                  <Link href="/products/pest-control-solutions">
                    <button className="bg-white text-green-800 px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-100 transition-colors">
                      View Details
                    </button>
                  </Link>
                </div>
              </div>
            </div>

            {/* Greenhouse Equipment */}
            <div className="flex-none w-72 sm:w-80 relative rounded-2xl overflow-hidden group cursor-pointer h-[380px] sm:h-[450px]">
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent z-10"></div>
              <Image
                src="/ladybug-leaf.jpg"
                alt="Greenhouse Equipment"
                width={320}
                height={450}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute bottom-6 left-6 right-6 z-20 text-white">
                <div className="inline-block px-3 py-1 rounded-full bg-teal-600 text-xs font-medium mb-2">
                  Professional
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  Greenhouse Equipment
                </h3>
                <p className="text-sm text-gray-200 mb-4">
                  Complete greenhouse solutions for controlled farming.
                </p>
                <div className="flex items-center justify-between">
                  <Link href="/products/greenhouse-equipment">
                    <button className="bg-white text-green-800 px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-100 transition-colors">
                      View Details
                    </button>
                  </Link>
                </div>
              </div>
            </div>

            {/* Soil Testing Kits */}
            <div className="flex-none w-72 sm:w-80 relative rounded-2xl overflow-hidden group cursor-pointer h-[380px] sm:h-[450px]">
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent z-10"></div>
              <Image
                src="/ladybug-leaf.jpg"
                alt="Soil Testing Kits"
                width={320}
                height={450}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute bottom-6 left-6 right-6 z-20 text-white">
                <div className="inline-block px-3 py-1 rounded-full bg-red-600 text-xs font-medium mb-2">
                  Lab Grade
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  Soil Testing Kits
                </h3>
                <p className="text-sm text-gray-200 mb-4">
                  Professional soil analysis for optimal crop planning.
                </p>
                <div className="flex items-center justify-between">
                  <Link href="/products/soil-testing-kits">
                    <button className="bg-white text-green-800 px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-100 transition-colors">
                      View Details
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* See All Products Button */}
          <div className="text-center">
            <Link href="/products">
              <button className="inline-flex items-center gap-2 bg-green-800 hover:bg-green-900 text-white px-8 py-3 rounded-full text-base font-medium transition-colors">
                View All Products
                <ArrowRight className="w-5 h-5" />
              </button>
            </Link>
          </div>
        </div>
      </section>
      <section className="relative py-32 bg-white overflow-hidden rounded-3xl mx-4 my-5">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/agricultureal_image.jpg"
            alt="Agricultural Fields"
            fill
            className="object-cover rounded-3xl"
            priority
          />
          <div className="absolute inset-0 bg-black/40 rounded-3xl"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto text-center px-6 sm:px-8 lg:px-12">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-12 leading-tight">
            Ready to Transform Your
            <br />
            Agricultural Practices?
          </h2>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-5 justify-center items-center">
            {/* Start Your Free Trial Button - same as "Explore Solutions" */}
            <Link href="/products" className="flex justify-center sm:w-auto">
              <InteractiveHoverButton
                text="Start Your Free Trial"
                className="rounded-full bg-[#0B5C43] border-[#0B5C43] hover:bg-[#094D3A] text-white px-6 sm:px-6 h-12 sm:h-14 text-base sm:text-lg min-w-[200px] sm:min-w-[240px] group"
              />
            </Link>

            {/* Talk to an Expert Button - same as "Get Free Consultation" */}
            <Link href="/contact" className="flex justify-center sm:w-auto">
              <button className="group relative cursor-pointer overflow-hidden rounded-full border-2 bg-white border-white text-[#0B5C43] transition-colors duration-300 min-w-[200px] sm:min-w-[240px] flex items-center gap-2 sm:gap-3 px-6 sm:px-6 h-12 sm:h-14 text-base sm:text-lg font-medium">
                {/* Expanding green background animation */}
                <div
                  className="absolute left-2 top-1/2 -translate-y-1/2 z-0 h-2 w-2 scale-[1] rounded-full transition-all duration-300 group-hover:left-0 group-hover:top-0 group-hover:translate-y-0 group-hover:h-full group-hover:w-full group-hover:scale-[1.8]"
                  style={{ backgroundColor: "#0B5C43" }}
                ></div>

                {/* Text that slides out */}
                <span className="relative z-20 ml-2 sm:ml-3 transition-all duration-300 group-hover:translate-x-12 group-hover:opacity-0">
                  Talk to an Expert
                </span>

                {/* Text + arrow that slides in from right */}
                <div className="absolute top-0 left-0 z-10 flex h-full w-full translate-x-12 items-center justify-center gap-1 sm:gap-2 text-white opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
                  <span>Talk to an Expert</span>
                  <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 ml-1" />
                </div>
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
