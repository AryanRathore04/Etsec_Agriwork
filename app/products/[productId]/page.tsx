import ProductDetailPage from "@/components/ProductDetailPage";
import productData from "@/product-data.json";
import { notFound } from "next/navigation";
import { Product } from "@/lib/types";

interface Params {
  productId: string;
}

export default async function ProductDetail({ params }: { params: Params }) {
  const awaited = await params;
  const slug = awaited.productId;
  const products: Product[] =
    (productData as unknown as { product_info?: Product[] }).product_info || [];

  const slugify = (s: string) =>
    s
      .toLowerCase()
      .replace(/[\s/\\]+/g, "-")
      .replace(/[^a-z0-9-]+/g, "")
      .replace(/--+/g, "-")
      .replace(/^-+|-+$/g, "");

  const product = products.find(
    (p) => slugify(`${p.crop_type ?? p.name}-${p.variety_name ?? ""}`) === slug
  );

  if (!product) return notFound();

  return <ProductDetailPage product={product} />;
}
