import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Target, Calendar, Globe, BookOpen } from "lucide-react";
export default function AboutPage() {
  return (
    <div className="mt-20 py-12 bg-gradient-to-b from-green-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl text-gray-900 mb-6">
            Our Commitment to Progressive Farming
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Since our establishment in 2018, we have been at the forefront of
            agricultural innovation, driven by experienced entrepreneurs who
            understand the challenges facing modern farmers.
          </p>
        </div>

        {/* Company Foundation */}
        <section className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <Calendar className="h-8 w-8 text-green-600 mr-3" />
                <h2 className="text-3xl text-gray-900">Established in 2018</h2>
              </div>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Agriwork Incorporate was founded by a team of experienced
                entrepreneurs who recognized the need for high-quality,
                market-specific agricultural solutions. Our journey began with a
                simple yet powerful vision: to provide farmers with the tools
                they need to succeed in an ever-changing agricultural landscape.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                From our humble beginnings, we have grown into a trusted partner
                for farmers worldwide, always staying true to our founding
                principles of quality, affordability, and farmer-first approach.
              </p>
            </div>
            <div className="bg-green-100 p-8 rounded-lg">
              <h3 className="text-2xl text-green-800 mb-4">
                Our Founding Principles
              </h3>
              <ul className="space-y-3 text-green-700">
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Excellence in seed quality
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Reasonable and fair pricing
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Farmer-centric approach
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Continuous innovation
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Mission Statement */}
        <section className="mb-20">
          <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
            <div className="flex items-center justify-center mb-8">
              <Target className="h-12 w-12 text-green-600" />
            </div>
            <h2 className="text-3xl text-center text-gray-900 mb-8">
              Our Mission
            </h2>
            <blockquote className="text-xl text-gray-700 italic text-center leading-relaxed max-w-4xl mx-auto">
              &quot;To Breed, Develop and Provide varieties that are market
              specific and can be grown in different agronomical conditions,
              seasons, areas and which can meet farmers&apos; expectations, in
              terms of quality, performance and profitability.&quot;
            </blockquote>
          </div>
        </section>

        {/* Core Values */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              These values guide everything we do and shape our relationships
              with farmers worldwide.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow border-green-100">
              <CardHeader>
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle className="text-xl text-gray-900">
                  Global Commitment
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  We are committed to being &quot;Agriwork&quot; to our global
                  customers, providing consistent quality and service across all
                  markets.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow border-green-100">
              <CardHeader>
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="h-8 w-8 text-yellow-600" />
                </div>
                <CardTitle className="text-xl text-gray-900">
                  Excellence
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Providing excellent seeds at reasonable prices, ensuring every
                  farmer has access to premium quality varieties.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow border-green-100">
              <CardHeader>
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle className="text-xl text-gray-900">
                  Innovation
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Continuous research and development to create varieties that
                  meet evolving market demands and agricultural challenges.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Commercial Product Archive */}
        <section className="mb-20">
          <div className="bg-gradient-to-r from-yellow-50 to-green-50 rounded-xl p-8 md:p-12">
            <div className="text-center mb-8">
              <BookOpen className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h2 className="text-3xl text-gray-900 mb-4">Product Archive</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Our comprehensive product catalog represents years of research,
                development, and field testing to bring you the finest
                agricultural varieties.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl text-gray-900 mb-3">
                  First Illustrated Commercial Product Archive
                </h3>
                <p className="text-gray-600 mb-4">
                  Our detailed product brochure showcases our complete range of
                  hybrid varieties, each carefully developed to meet specific
                  agricultural needs and market demands.
                </p>
                <ul className="text-gray-600 space-y-2">
                  <li>• Comprehensive variety specifications</li>
                  <li>• Detailed growing guidelines</li>
                  <li>• Performance characteristics</li>
                  <li>• Market suitability information</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl text-gray-900 mb-3">
                  Technical Documentation
                </h3>
                <p className="text-gray-600 mb-4">
                  Every product in our archive comes with complete technical
                  documentation to help farmers make informed decisions and
                  achieve optimal results.
                </p>
                <ul className="text-gray-600 space-y-2">
                  <li>• Agronomic recommendations</li>
                  <li>• Disease tolerance profiles</li>
                  <li>• Yield potential data</li>
                  <li>• Quality parameters</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Commitment Statement */}
        <section>
          <div className="text-center bg-green-600 text-white rounded-xl p-8 md:p-12">
            <h2 className="text-3xl mb-6">Our Promise to Farmers</h2>
            <p className="text-xl leading-relaxed max-w-3xl mx-auto mb-6">
              We understand that farming is not just a profession—it&apos;s a
              way of life that feeds the world. That&apos;s why we are committed
              to providing you with the highest quality seeds, backed by our
              expertise and unwavering support.
            </p>
            <p className="text-lg opacity-90 max-w-2xl mx-auto">
              Your success is our success. Together, we&apos;re not just growing
              crops—we&apos;re cultivating a sustainable future for agriculture.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
