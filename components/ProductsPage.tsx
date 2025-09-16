import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import { Clock, Scale, Ruler, Palette, Shield, Calendar } from "lucide-react";

export default function ProductsPage() {
  const products = [
    {
      id: 1,
      name: "RAIRA F-1 HYBRID OKRA",
      image:
        "https://images.unsplash.com/photo-1632742315671-d77e6feed874?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxva3JhJTIwdmVnZXRhYmxlJTIwZ3JlZW58ZW58MXx8fHwxNzU3NjYxMTQxfDA&ixlib=rb-4.1.0&q=80&w=1080",
      category: "Okra",
      specs: {
        "Plant Vigour": "Medium Tall",
        Branches: "2-3",
        "First Picking": "45-47 days after sowing",
        "Fruit Color": "Dark green",
        "Fruit Weight": "12-14g",
        "Fruit Length": "12-14 cms",
      },
      remarks:
        "Continuous growth for long crop duration, Dark green tender fruits with good shelf life & high tolerance to Okra leaf curl virus & YVMV.",
      features: ["Long crop duration", "Good shelf life", "Disease resistant"],
    },
    {
      id: 2,
      name: "RAZZO F-1 HYBRID OKRA",
      image:
        "https://images.unsplash.com/photo-1632742315671-d77e6feed874?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxva3JhJTIwdmVnZXRhYmxlJTIwZ3JlZW58ZW58MXx8fHwxNzU3NjYxMTQxfDA&ixlib=rb-4.1.0&q=80&w=1080",
      category: "Okra",
      specs: {
        "Plant Vigour": "Tall vigorous",
        Branches: "Good branching",
        "First Picking": "48-55 days after sowing",
        "Fruit Colour": "Burgundy Red",
        "Disease Tolerance": "YVMV, ELCV",
      },
      remarks:
        "Continuous growth for long crop duration, Attractive dark burgundy red slim, export quality fruits and good for all season cultivation.",
      features: [
        "Export quality",
        "All season cultivation",
        "Attractive color",
      ],
    },
    {
      id: 3,
      name: "AWPH-735 F-1 HYBRID PUMPKIN",
      image:
        "https://images.unsplash.com/photo-1633936943087-f10d6dcf52ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwdW1wa2luJTIwb3JhbmdlJTIwaGFydmVzdHxlbnwxfHx8fDE3NTc2NjExNDF8MA&ixlib=rb-4.1.0&q=80&w=1080",
      category: "Pumpkin",
      specs: {
        "Fruit Colour": "Dark green (immature), golden yellow on ripening",
        "Fruit Shape": "Oblong",
        "Fruit Weight": "12-15 kg",
        "Flesh Colour": "Orange",
        Maturity: "80-90 days",
        "Keeping Quality": "6-9 months",
      },
      remarks: "High-yielding, turn yellow on maturity.",
      features: ["High-yielding", "Long storage", "Large size"],
    },
    {
      id: 4,
      name: "AWPH-750 F-1 HYBRID PUMPKIN",
      image:
        "https://images.unsplash.com/photo-1633936943087-f10d6dcf52ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwdW1wa2luJTIwb3JhbmdlJTIwaGFydmVzdHxlbnwxfHx8fDE3NTc2NjExNDF8MA&ixlib=rb-4.1.0&q=80&w=1080",
      category: "Pumpkin",
      specs: {
        "Fruit Colour": "Mottled green (immature), Creamy orange on ripening",
        "Fruit Shape": "Smooth, flat, round",
        "Fruit Weight": "4-6 kg",
        "Flesh Colour": "Orange",
        Maturity: "70-80 days",
        "Keeping Quality": "6-9 months",
      },
      remarks: "High-yielding, turn yellow on maturity.",
      features: ["High-yielding", "Compact size", "Good storage"],
    },
    {
      id: 5,
      name: "PUSA CHETKI LONG IMPROVED RADISH",
      image:
        "https://images.unsplash.com/photo-1609126983118-1e016b0326ed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyYWRpc2glMjB2ZWdldGFibGUlMjBmcmVzaHxlbnwxfHx8fDE3NTc2NjExNDJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
      category: "Radish",
      specs: {
        "Variety Type": "Improved Long Radish",
        Quality: "Premium",
        Performance: "High-yielding",
      },
      remarks:
        "An improved variety of the popular Pusa Chetki Long radish, known for its excellent quality, performance, and consistent yields.",
      features: ["Improved variety", "High quality", "Consistent yields"],
    },
  ];

  const getIcon = (key: string) => {
    switch (key.toLowerCase()) {
      case "first picking":
      case "maturity":
        return <Clock className="h-4 w-4" />;
      case "fruit weight":
        return <Scale className="h-4 w-4" />;
      case "fruit length":
        return <Ruler className="h-4 w-4" />;
      case "fruit color":
      case "fruit colour":
      case "flesh colour":
        return <Palette className="h-4 w-4" />;
      case "disease tolerance":
        return <Shield className="h-4 w-4" />;
      case "keeping quality":
        return <Calendar className="h-4 w-4" />;
      default:
        return null;
    }
  };

  return (
    <div className="mt-20 py-12 bg-gradient-to-b from-green-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl text-gray-900 mb-6">
            Our Premium Product Range
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover our comprehensive collection of high-quality hybrid
            varieties, each carefully developed to meet specific agricultural
            needs and deliver exceptional performance in the field.
          </p>
        </div>

        {/* Product Categories */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <Badge
            variant="outline"
            className="px-4 py-2 text-sm border-green-200 text-green-700"
          >
            All Products
          </Badge>
          <Badge
            variant="outline"
            className="px-4 py-2 text-sm border-green-200 text-green-700"
          >
            Okra Varieties
          </Badge>
          <Badge
            variant="outline"
            className="px-4 py-2 text-sm border-green-200 text-green-700"
          >
            Pumpkin Varieties
          </Badge>
          <Badge
            variant="outline"
            className="px-4 py-2 text-sm border-green-200 text-green-700"
          >
            Radish Varieties
          </Badge>
        </div>

        {/* Products Grid */}
        <div className="space-y-12">
          {products.map((product) => (
            <Card
              key={product.id}
              className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow border-green-100"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                {/* Product Image */}
                <div className="relative h-80 lg:h-full">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                    priority={product.id === 1}
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-green-600 hover:bg-green-700 text-white">
                      {product.category}
                    </Badge>
                  </div>
                </div>

                {/* Product Details */}
                <div className="p-8">
                  <CardHeader className="p-0 mb-6">
                    <CardTitle className="text-2xl text-gray-900 mb-2">
                      {product.name}
                    </CardTitle>
                    <div className="flex flex-wrap gap-2">
                      {product.features.map((feature, index) => (
                        <Badge
                          key={index}
                          variant="secondary"
                          className="text-xs"
                        >
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </CardHeader>

                  <CardContent className="p-0">
                    {/* Specifications */}
                    <div className="mb-6">
                      <h4 className="font-medium text-gray-900 mb-3">
                        Specifications
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {Object.entries(product.specs).map(([key, value]) => (
                          <div
                            key={key}
                            className="flex items-start space-x-2 text-sm"
                          >
                            <div className="text-green-600 mt-1">
                              {getIcon(key)}
                            </div>
                            <div>
                              <span className="font-medium text-gray-700">
                                {key}:
                              </span>
                              <span className="text-gray-600 ml-1">
                                {value}
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <Separator className="my-4" />

                    {/* Remarks */}
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">
                        Key Features
                      </h4>
                      <p className="text-gray-600 leading-relaxed text-sm">
                        {product.remarks}
                      </p>
                    </div>
                  </CardContent>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Quality Assurance Section */}
        <section className="mt-20 bg-gradient-to-r from-green-600 to-green-700 rounded-xl p-8 md:p-12 text-white">
          <div className="text-center">
            <h2 className="text-3xl mb-6">Quality Assurance</h2>
            <p className="text-xl leading-relaxed max-w-3xl mx-auto mb-8 opacity-90">
              Every seed variety in our collection undergoes rigorous testing
              and quality control measures to ensure consistent performance,
              disease resistance, and optimal yields.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8" />
                </div>
                <h3 className="text-xl mb-2">Laboratory Tested</h3>
                <p className="opacity-80">Comprehensive quality testing</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Scale className="h-8 w-8" />
                </div>
                <h3 className="text-xl mb-2">Field Verified</h3>
                <p className="opacity-80">Real-world performance validation</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calendar className="h-8 w-8" />
                </div>
                <h3 className="text-xl mb-2">Certified Quality</h3>
                <p className="opacity-80">Industry standard compliance</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
