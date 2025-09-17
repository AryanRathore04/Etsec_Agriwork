"use client";

import Link from "next/link";
import Image from "next/image";
import { useMemo, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
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

  const hybridTypes = useMemo(() => {
    const set = new Set<string>();
    enriched.forEach((p) => {
      if (p.hybrid_type) set.add(p.hybrid_type);
    });
    return ["All", ...Array.from(set).sort()];
  }, [enriched]);

  const [cropFilter, setCropFilter] = useState<string>("All");
  const [hybridFilter, setHybridFilter] = useState<string>("All");

  const visible = useMemo(() => {
    let filtered = enriched;

    if (cropFilter !== "All") {
      filtered = filtered.filter((p) => p.crop_type === cropFilter);
    }

    if (hybridFilter !== "All") {
      filtered = filtered.filter((p) => p.hybrid_type === hybridFilter);
    }

    return filtered;
  }, [enriched, cropFilter, hybridFilter]);

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

  // Pagination
  const [page, setPage] = useState<number>(1);
  const pageSize = 20;
  const pageCount = Math.max(1, Math.ceil(visible.length / pageSize));
  const paged = useMemo(() => {
    const start = (page - 1) * pageSize;
    return visible.slice(start, start + pageSize);
  }, [visible, page]);

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

        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
          <div>
            <h2 className="text-2xl font-semibold text-gray-900">
              Filter Products
            </h2>
            <p className="text-sm text-gray-600 mt-1">
              Find the perfect agricultural products for your needs
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            {/* Crop Type Filter */}
            <div className="min-w-[200px]">
              <label
                htmlFor="crop-filter"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Crop Type
              </label>
              <select
                id="crop-filter"
                value={cropFilter}
                onChange={(e) => setCropFilter(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 bg-white text-sm"
              >
                {cropTypes.map((ct) => (
                  <option key={ct} value={ct}>
                    {ct}{" "}
                    {ct === "All"
                      ? ""
                      : `(${
                          enriched.filter((p) => p.crop_type === ct).length
                        })`}
                  </option>
                ))}
              </select>
            </div>

            {/* Hybrid Type Filter */}
            <div className="min-w-[200px]">
              <label
                htmlFor="hybrid-filter"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Hybrid Type
              </label>
              <select
                id="hybrid-filter"
                value={hybridFilter}
                onChange={(e) => setHybridFilter(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 bg-white text-sm"
              >
                {hybridTypes.map((ht) => (
                  <option key={ht} value={ht}>
                    {ht}{" "}
                    {ht === "All"
                      ? ""
                      : `(${
                          enriched.filter((p) => p.hybrid_type === ht).length
                        })`}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {paged.map((product: ProductWithId) => (
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
          Showing {visible.length} products
          {cropFilter !== "All" && ` • Crop: ${cropFilter}`}
          {hybridFilter !== "All" && ` • Type: ${hybridFilter}`}
          {(cropFilter !== "All" || hybridFilter !== "All") && (
            <button
              onClick={() => {
                setCropFilter("All");
                setHybridFilter("All");
              }}
              className="ml-3 text-green-600 hover:text-green-700 underline"
            >
              Clear filters
            </button>
          )}
        </div>

        {/* Pagination controls */}
        <div className="mt-6 flex items-center justify-center gap-3">
          <Button
            variant="ghost"
            onClick={() => setPage((p) => Math.max(1, p - 1))}
            disabled={page === 1}
          >
            <ChevronLeft className="w-4 h-4" />
          </Button>

          <div className="flex items-center gap-2">
            {Array.from({ length: pageCount }).map((_, i) => {
              const p = i + 1;
              return (
                <button
                  key={p}
                  onClick={() => setPage(p)}
                  className={`px-3 py-1 rounded-md ${
                    page === p ? "bg-green-600 text-white" : "bg-white border"
                  }`}
                >
                  {p}
                </button>
              );
            })}
          </div>

          <Button
            variant="ghost"
            onClick={() => setPage((p) => Math.min(pageCount, p + 1))}
            disabled={page === pageCount}
          >
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
