export interface Product {
  crop_type?: string;
  variety_name?: string;
  image?: string;
  hybrid_type?: string | null;
  characteristics?: Record<string, unknown>;
  features?: string[];
  specifications?: Record<string, unknown>;
  cultivation?: string[];
  // legacy / presentation fields
  name?: string;
  category?: string;
  description?: string;
}

export type ProductWithId = Product & { id: string };
