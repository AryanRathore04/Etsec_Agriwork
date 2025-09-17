"use client";

import Link from "next/link";
import Image from "next/image";
import { useMemo, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import productData from "../product-data.json";
import { Product, ProductWithId } from "@/lib/types";

const slugify = (s: string) =>
  s
    .toLowerCase()
    .replace(/[\s/\\]+/g, "-")
    .replace(/[^a-z0-9-]+/g, "")
    .replace(/--+/g, "-")
    .replace(/^-+|-+$/g, "");

export default function ProductsPage() {
  const products: Product[] = useMemo(
    () =>
      (productData as unknown as { product_info?: Product[] }).product_info ||
      [],
    []
  );
  const enriched: ProductWithId[] = useMemo(
    () =>
      products.map((p) => ({
        ...(p as Product),
        id: slugify(`${p.crop_type ?? p.name}-${p.variety_name ?? ""}`),
      })),
    [products]
  );

  const cropTypes = useMemo(() => {
    const set = new Set<string>();
    enriched.forEach((p) => set.add(p.crop_type ?? "Unknown"));
    return ["All", ...Array.from(set).sort()];
  }, [enriched]);

  const [filter, setFilter] = useState<string>("All");

  const visible = useMemo(() => {
    return filter === "All"
      ? enriched
      : enriched.filter((p) => p.crop_type === filter);
  }, [enriched, filter]);

  const getDays = (p: Product): string => {
    const c = p.characteristics || {};
    const keys = [
      "duration",
      "days_to_maturity",
      "first_picking",
      "maturity",
      "harvest_ready",
      "relative_maturity",
    ];
    for (const k of keys) {
      if (c[k]) return String(c[k]);
    }
    // fallback: look for any value that contains 'day'
    const values = Object.values(c);
    const found = values.find((v) => /day/i.test(String(v)));
    return found ? String(found) : "—";
  };

  return (
    <div className="mt-20 py-12 bg-gradient-to-b from-green-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl text-gray-900 mb-4">
            Our Premium Product Range
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Browse products by crop type. Click a card for full details.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {cropTypes.map((ct) => (
            <button
              key={ct}
              onClick={() => setFilter(ct)}
              className={`px-4 py-2 text-sm rounded-full border ${
                filter === ct
                  ? "bg-green-600 text-white border-green-600"
                  : "bg-white text-green-700 border-green-200"
              }`}
            >
              {ct}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {visible.map((product: ProductWithId) => (
            <Link
              key={product.id}
              href={`/products/${product.id}`}
              className="block"
            >
              <Card className="overflow-hidden hover:shadow-lg transition-shadow border">
                <div className="relative w-full" style={{ aspectRatio: "4/3" }}>
                  <Image
                    src={product.image || "/agriwork-upper-logo.png"}
                    alt={String(product.variety_name ?? product.name ?? "")}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, 20vw"
                  />
                </div>
                <CardContent>
                  <div className="mt-3">
                    <div className="flex items-center justify-between">
                      <h3 className="text-sm font-semibold text-gray-900">
                        {product.variety_name}
                      </h3>
                      <Badge className="bg-green-100 text-green-800">
                        {product.crop_type ?? "Unknown"}
                      </Badge>
                    </div>
                    <p className="text-xs text-gray-600 mt-2">
                      {getDays(product)}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        <div className="mt-12 text-center text-sm text-gray-600">
          Showing {visible.length} products · Filter: {filter}
        </div>
      </div>
    </div>
  );
}
