import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Users, TrendingUp, Heart, Award, Calendar } from "lucide-react";

export default function CareersPage() {
  const benefits = [
    {
      icon: <TrendingUp className="h-8 w-8 text-green-600" />,
      title: "Professional Growth",
      description:
        "Continuous learning opportunities and career advancement in the agricultural technology sector.",
    },
    {
      icon: <Users className="h-8 w-8 text-green-600" />,
      title: "Collaborative Team",
      description:
        "Work with passionate professionals dedicated to transforming agriculture worldwide.",
    },
    {
      icon: <Heart className="h-8 w-8 text-green-600" />,
      title: "Meaningful Impact",
      description:
        "Contribute to feeding the world and supporting farmers in their journey to success.",
    },
    {
      icon: <Award className="h-8 w-8 text-green-600" />,
      title: "Recognition",
      description:
        "Your contributions are valued and recognized in our performance-driven culture.",
    },
  ];
  const departments = [
    {
      name: "Research & Development",
      description: "Develop new hybrid varieties and improve existing products",
      skills: ["Plant Breeding", "Genetics", "Agricultural Science"],
    },
    {
      name: "Quality Assurance",
      description:
        "Ensure product quality and compliance with industry standards",
      skills: ["Quality Control", "Laboratory Testing", "Standards Compliance"],
    },
    {
      name: "Sales & Marketing",
      description:
        "Connect with farmers and promote our agricultural solutions",
      skills: ["Agricultural Marketing", "Customer Relations", "Sales"],
    },
    {
      name: "Technical Support",
      description: "Provide expert guidance to farmers and distributors",
      skills: ["Agronomy", "Customer Support", "Technical Communication"],
    },
    {
      name: "Operations",
      description: "Manage supply chain and ensure efficient product delivery",
      skills: ["Supply Chain", "Logistics", "Operations Management"],
    },
    {
      name: "Administration",
      description: "Support business operations and human resources",
      skills: ["Administration", "HR", "Finance"],
    },
  ];
  return (
    <div className="mt-20 py-12 bg-gradient-to-b from-green-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl text-gray-900 mb-6">
            Join Our Team
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Be part of a mission-driven team dedicated to revolutionizing
            agriculture and empowering farmers worldwide.
          </p>
        </div>
        <section className="mb-20">
          <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-xl p-8 md:p-12 text-white text-center">
            <h2 className="text-3xl mb-6">Our Mission</h2>
            <p className="text-xl leading-relaxed max-w-4xl mx-auto mb-6">
              At Agriwork Incorporate, we believe that agriculture is not just
              about growing crops—it&apos;s about nurturing communities, feeding
              nations, and creating a sustainable future.
            </p>
          </div>
        </section>
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl text-gray-900 mb-4">Why Work With Us?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Join a company where your passion for agriculture meets
              opportunities for professional growth.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((b, i) => (
              <Card
                key={i}
                className="text-center hover:shadow-lg transition-shadow border-green-100"
              >
                <CardHeader>
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    {b.icon}
                  </div>
                  <CardTitle className="text-xl text-gray-900">
                    {b.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{b.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl text-gray-900 mb-4">
              Departments &amp; Opportunities
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We&apos;re always looking for talented individuals across various
              departments.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {departments.map((d, i) => (
              <Card
                key={i}
                className="hover:shadow-lg transition-shadow border-green-100"
              >
                <CardHeader>
                  <CardTitle className="text-xl text-gray-900">
                    {d.name}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{d.description}</p>
                  <div className="space-y-2">
                    <p className="text-sm font-medium text-gray-900">
                      Key Skills:
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {d.skills.map((s, si) => (
                        <Badge key={si} variant="secondary" className="text-xs">
                          {s}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
        <section className="mb-20">
          <div className="bg-white rounded-xl shadow-lg p-8 md:p-12 text-center">
            <Calendar className="h-12 w-12 text-green-600 mx-auto mb-4" />
            <h2 className="text-3xl text-gray-900 mb-4">Current Openings</h2>
            <p className="text-lg text-gray-600 mb-6">
              We&apos;re building our team. Reach out even if a specific role
              isn&apos;t listed.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
              <div className="text-center p-6 bg-green-50 rounded-lg">
                <h3 className="text-xl text-gray-900 mb-3">Fresh Graduates</h3>
                <Badge
                  variant="outline"
                  className="border-green-200 text-green-700"
                >
                  Entry Level
                </Badge>
              </div>
              <div className="text-center p-6 bg-yellow-50 rounded-lg">
                <h3 className="text-xl text-gray-900 mb-3">
                  Experienced Professionals
                </h3>
                <Badge
                  variant="outline"
                  className="border-yellow-200 text-yellow-700"
                >
                  Experienced
                </Badge>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="text-center bg-gradient-to-r from-green-600 to-green-700 rounded-xl p-8 md:p-12 text-white">
            <h2 className="text-3xl mb-6">Ready to Make a Difference?</h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              We&apos;re always interested in connecting with passionate
              individuals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-green-700 hover:bg-gray-100"
              >
                Send Your Resume
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-green-700"
              >
                Learn More About Us
              </Button>
            </div>
            <p className="text-sm mt-6 opacity-80">
              Email: agriworkinc@gmail.com
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
