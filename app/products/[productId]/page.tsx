import ProductDetailPage from "@/components/ProductDetailPage";
import { notFound } from "next/navigation";

interface Params {
  productId: string;
}

// Validate productId before rendering; ProductDetailPage will show content when valid.
export default function ProductDetail({ params }: { params: Params }) {
  // Lightweight allowlist must stay in sync with ProductDetailPage's data keys
  const validIds = [
    "organic-seeds",
    "bio-fertilizers",
    "smart-irrigation-kits",
    "pest-control-solutions",
    "greenhouse-equipment",
    "soil-testing-kits",
  ];
  if (!validIds.includes(params.productId)) {
    notFound();
  }
  return <ProductDetailPage params={params} />;
}
