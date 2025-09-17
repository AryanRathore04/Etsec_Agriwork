import ProductDetailPage from "@/components/ProductDetailPage";
import { notFound } from "next/navigation";

interface Params {
  productId: string;
}

// Validate productId before rendering; ProductDetailPage will show content when valid.
export default async function ProductDetail({ params }: { params: Params }) {
  // Await params to satisfy Next.js' dynamic params handling
  const awaitedParams = await params;
  // Lightweight allowlist must stay in sync with ProductDetailPage's data keys
  const validIds = [
    "organic-seeds",
    "bio-fertilizers",
    "smart-irrigation-kits",
    "pest-control-solutions",
    "greenhouse-equipment",
    "soil-testing-kits",
  ];
  if (!validIds.includes(awaitedParams.productId)) {
    notFound();
  }
  return <ProductDetailPage params={awaitedParams} />;
}
