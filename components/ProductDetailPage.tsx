import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Package, Award, Droplets, Thermometer } from "lucide-react";
import Image from "next/image";

const productData = {
  "organic-seeds": {
    name: "Premium Organic Seeds Collection",
    image: "/ladybug-leaf.jpg",
    category: "Premium Quality Seeds",
    description:
      "Our premium organic seeds collection features carefully selected, non-GMO varieties that have been tested for superior germination rates and disease resistance. These seeds are perfect for sustainable farming practices and produce high-quality, nutritious crops that meet organic certification standards.",
    features: [
      "100% organic and non-GMO certified seeds",
      "95%+ germination rate guaranteed",
      "Disease-resistant varieties for reduced crop loss",
      "Suitable for all organic farming certifications",
      "Enhanced nutritional content in harvested crops",
      "Compatible with sustainable farming practices",
    ],
    specifications: {
      "Germination Rate": "95% or higher",
      "Seed Purity": "99.5%",
      "Moisture Content": "8-10%",
      "Shelf Life": "2-3 years when stored properly",
      Packaging: "Moisture-proof sealed packets",
      "Varieties Available": "50+ vegetable and grain types",
    },
    cultivation: [
      "Test soil pH and prepare organic-rich growing medium",
      "Follow recommended planting depth and spacing for each variety",
      "Use organic fertilizers and natural pest control methods",
      "Maintain consistent moisture levels during germination",
      "Monitor plant health and apply organic treatments as needed",
    ],
  },
  "bio-fertilizers": {
    name: "Advanced Bio-Fertilizer System",
    image: "/ladybug-leaf.jpg",
    category: "Eco-Friendly Fertilizers",
    description:
      "Our advanced bio-fertilizer system contains beneficial microorganisms that enhance soil health and nutrient availability. These eco-friendly fertilizers improve soil structure, increase water retention, and promote sustainable crop growth while reducing environmental impact.",
    features: [
      "Contains beneficial bacteria and fungi for soil health",
      "Improves nutrient absorption by up to 40%",
      "Enhances soil structure and water retention",
      "Reduces need for synthetic fertilizers by 50%",
      "Promotes root development and plant immunity",
      "Safe for beneficial insects and soil organisms",
    ],
    specifications: {
      "Active Ingredients": "Nitrogen-fixing bacteria, Phosphate solubilizers",
      "Application Rate": "5-10 kg per hectare",
      "Bag Weight": "25 kg",
      "Storage Temperature": "15-25°C",
      "Shelf Life": "12 months from manufacture",
      "pH Range": "6.0-8.0 for optimal activity",
    },
    cultivation: [
      "Apply to moist soil during early morning or evening",
      "Mix thoroughly with top 15cm of soil before planting",
      "Ensure adequate soil moisture for microbial activation",
      "Avoid mixing with chemical pesticides or fungicides",
      "Reapply every 3-4 months for continuous benefits",
    ],
  },
  "smart-irrigation-kits": {
    name: "IoT Smart Irrigation System",
    image: "/ladybug-leaf.jpg",
    category: "Smart Technology",
    description:
      "Revolutionary IoT-enabled irrigation system that uses advanced sensors and AI algorithms to optimize water usage. This smart system monitors soil moisture, weather conditions, and plant needs to deliver precise irrigation, reducing water consumption by up to 40% while maximizing crop yields.",
    features: [
      "AI-powered irrigation scheduling based on real-time data",
      "Soil moisture and weather monitoring sensors",
      "Mobile app control with remote monitoring capabilities",
      "Water usage tracking and conservation analytics",
      "Compatible with existing irrigation infrastructure",
      "Solar-powered operation with battery backup",
    ],
    specifications: {
      "Coverage Area": "Up to 2 hectares",
      "Sensor Range": "Wireless connectivity up to 1km",
      "Power Source": "Solar panel with rechargeable battery",
      "Water Savings": "30-40% reduction in water usage",
      Connectivity: "WiFi, 4G, and LoRaWAN options",
      "Operating Temperature": "-20°C to +60°C",
    },
    cultivation: [
      "Install sensors at representative locations in the field",
      "Configure irrigation zones based on crop requirements",
      "Set up mobile app and customize irrigation schedules",
      "Monitor system performance and adjust settings as needed",
      "Regular maintenance of sensors and irrigation components",
    ],
  },
  "pest-control-solutions": {
    name: "Organic Pest Control System",
    image: "/ladybug-leaf.jpg",
    category: "Natural Defense",
    description:
      "Comprehensive organic pest control solution that uses natural ingredients and beneficial organisms to protect crops from harmful pests. This eco-friendly system maintains ecological balance while effectively controlling pest populations without harmful chemical residues.",
    features: [
      "100% organic and biodegradable ingredients",
      "Safe for beneficial insects and pollinators",
      "Effective against 20+ common agricultural pests",
      "No harmful chemical residues on crops",
      "Promotes natural predator-prey relationships",
      "Suitable for organic certification requirements",
    ],
    specifications: {
      "Active Ingredients": "Neem extract, Botanical oils, Beneficial bacteria",
      Coverage: "Treats up to 1 hectare per application",
      "Application Rate": "2-3ml per liter of water",
      "Residual Activity": "7-14 days protection",
      "Package Size": "1 liter concentrated solution",
      "Dilution Ratio": "1:500 with water",
    },
    cultivation: [
      "Apply during early morning or late evening hours",
      "Ensure complete coverage of plant surfaces",
      "Repeat applications every 10-14 days or as needed",
      "Avoid application during flowering for pollinator safety",
      "Store in cool, dry place away from direct sunlight",
    ],
  },
  "greenhouse-equipment": {
    name: "Professional Greenhouse System",
    image: "/ladybug-leaf.jpg",
    category: "Professional Equipment",
    description:
      "Complete professional greenhouse system designed for controlled environment agriculture. This comprehensive solution includes climate control, ventilation, and growing systems that enable year-round crop production with optimal growing conditions and maximum yield potential.",
    features: [
      "Automated climate control with temperature and humidity regulation",
      "Advanced ventilation system for optimal air circulation",
      "Integrated grow light system with LED technology",
      "Hydroponic growing system with nutrient management",
      "Structural durability with UV-resistant materials",
      "Expandable design for scalable farming operations",
    ],
    specifications: {
      "Greenhouse Size": "6m x 4m x 2.5m (standard)",
      "Frame Material": "Galvanized steel with powder coating",
      Covering: "Twin-wall polycarbonate panels",
      "Climate Control": "Automated heating and cooling systems",
      "Power Requirements": "220V electrical connection",
      "Growing Capacity": "200-300 plants depending on crop type",
    },
    cultivation: [
      "Prepare level foundation with proper drainage",
      "Install electrical systems and climate control equipment",
      "Set up growing benches and irrigation systems",
      "Calibrate temperature and humidity control systems",
      "Regular maintenance of mechanical systems and coverings",
    ],
  },
  "soil-testing-kits": {
    name: "Professional Soil Analysis Kit",
    image: "/ladybug-leaf.jpg",
    category: "Lab Grade Testing",
    description:
      "Professional-grade soil testing kit that provides comprehensive analysis of soil health parameters. This advanced testing system helps farmers make informed decisions about fertilization, pH management, and soil improvement strategies for optimal crop production.",
    features: [
      "Tests 15+ essential soil parameters including NPK, pH, organic matter",
      "Laboratory-grade accuracy with digital readouts",
      "Instant results with detailed recommendations",
      "GPS mapping capability for field-specific data",
      "Cloud-based data storage and analysis platform",
      "Compatible with precision agriculture systems",
    ],
    specifications: {
      "Parameters Tested": "pH, NPK, Organic Matter, Trace Elements",
      "Testing Method": "Digital colorimetric analysis",
      Accuracy: "±0.1 pH units, ±5% for nutrients",
      "Sample Size": "10g of soil per test",
      "Tests Per Kit": "100 complete soil analyses",
      "Battery Life": "500+ tests on single charge",
    },
    cultivation: [
      "Collect soil samples from multiple points across the field",
      "Follow standard sampling procedures for accurate results",
      "Perform tests according to kit instructions",
      "Record GPS coordinates for each sampling location",
      "Use results to develop targeted fertilization programs",
    ],
  },
};

import { Product } from "@/lib/types";

interface ProductDetailProps {
  params?: { productId?: string };
  product?: Product;
}

export default async function ProductDetailPage({
  params,
  product,
}: ProductDetailProps) {
  // product may be passed in (from product-data.json lookup). If not, fall back to the internal map.
  let productItem: Product | undefined = product;
  if (!productItem) {
    const awaitedParams = await params;
    const productId = awaitedParams?.productId;
    if (!productId || !productData[productId as keyof typeof productData]) {
      return (
        <div className="p-8">
          Invalid product.{" "}
          <Link href="/products" className="text-green-600 underline">
            Back to products
          </Link>
        </div>
      );
    }
    productItem = productData[productId as keyof typeof productData] as Product;
  }

  return (
    <div className="mt-20 min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          {/* Responsive header: stacked on mobile, 3-column on md+ */}
          <div className="flex flex-col md:grid md:grid-cols-3 md:items-center md:gap-4">
            {/* Left: Back link (left aligned on md+) */}
            <div className="mb-3 md:mb-0 md:col-span-1">
              <Link
                href="/"
                className="inline-flex items-center text-green-600 hover:text-green-700"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Link>
            </div>

            {/* Center: Badge above centered headline */}
            <div className="md:col-span-1 text-center">
              <div className="inline-block">
                <Badge className="bg-green-600 hover:bg-green-600 text-white mb-2 inline-block">
                  {productItem.category || productItem.crop_type}
                </Badge>
              </div>
              <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">
                {productItem.name || productItem.variety_name}
              </h1>
            </div>

            {/* Right: empty spacer to balance layout on wide screens */}
            <div className="md:col-span-1" />
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Image */}
          <Card className="overflow-hidden rounded-2xl border-0 shadow-none">
            <CardContent className="p-0 border-0">
              <div
                className="w-full relative overflow-hidden rounded-2xl"
                style={{ aspectRatio: "4/3" }}
              >
                <Image
                  src={productItem.image || "/agriwork-upper-logo.png"}
                  alt={String(
                    productItem.name || productItem.variety_name || ""
                  )}
                  fill
                  className="object-cover rounded-2xl"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  priority
                />
              </div>
            </CardContent>
          </Card>

          {/* Product Details */}
          <div className="space-y-8">
            <div>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-bold text-gray-900">
                  Product Description
                </h2>
                <div className="text-right">
                  {/* price removed intentionally */}
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed">
                {String(
                  productItem.description ||
                    (productItem.characteristics &&
                      (productItem.characteristics as Record<string, unknown>)[
                        "remarks"
                      ]) ||
                    ""
                )}
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Key Features
              </h3>
              <ul className="space-y-3">
                {(productItem.features || []).map(
                  (feature: string, index: number) => (
                    <li key={index} className="flex items-start gap-3">
                      <Award className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  )
                )}
              </ul>
            </div>
            <div className="pt-4">
              <Link href="/contact">
                <Button className="w-full bg-green-600 hover:bg-green-700 py-3">
                  <Package className="w-5 h-5 mr-2" />
                  Inquire About This Product
                </Button>
              </Link>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-16">
          <Card>
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <Thermometer className="w-6 h-6 text-green-600" />
                Technical Specifications
              </h3>
              <div className="space-y-4">
                {Object.entries(
                  (productItem.specifications ||
                    productItem.characteristics ||
                    {}) as Record<string, unknown>
                ).map(([key, value]) => (
                  <div
                    key={key}
                    className="flex justify-between items-center py-2 border-b border-gray-200"
                  >
                    <span className="font-medium text-gray-900">{key}</span>
                    <span className="text-gray-700">{String(value ?? "")}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <Droplets className="w-6 h-6 text-green-600" />
                Cultivation Guidelines
              </h3>
              <ol className="space-y-4">
                {((productItem.cultivation || []) as string[]).map(
                  (step: string, index: number) => (
                    <li key={index} className="flex gap-4">
                      <span className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                        {index + 1}
                      </span>
                      <span className="text-gray-700 pt-1">{step}</span>
                    </li>
                  )
                )}
              </ol>
            </CardContent>
          </Card>
        </div>
        <div className="mt-16 text-center">
          <Link href="/products">
            <Button variant="outline" className="px-8 py-3">
              View All Products
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
