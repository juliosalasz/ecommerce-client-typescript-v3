export type SKU = {
  sku: string;
  price: number;
  quantity: number;
  feature: string;
};

export type Product = {
  id: number;
  name: string;
  brand: string;
  imageUrl?: string;
  description: string;
  skus: SKU[];
};

export type Category = {
  id: string;
  Category: string;
  PRODUCTS: Product[];
  POPULAR: boolean;
  imageUrl?: string;
};
