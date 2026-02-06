import type { Product } from "@/types/types";
import { ProductCard } from "@/components/ProductCard";

export type ProductListProps = {
  products: Product[];
};

export const ProductList = ({ products }: ProductListProps) => {
  return (
    <>
      <div>
        <h2 className="text-2xl font-bold mb-4">Our Products</h2>
        {/* For mobile responsiveness, using grid layout */}
        {products.length !== 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <p className=" text-gray-500 text-7xl text-center mt-10">
            No products found.
          </p>
        )}
      </div>
    </>
  );
};
