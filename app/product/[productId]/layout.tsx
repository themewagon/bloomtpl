import products from "@/data/products.json";

export function generateStaticParams() {
  return products.map((product) => ({
    productId: product.id.toString(),
  }));
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
