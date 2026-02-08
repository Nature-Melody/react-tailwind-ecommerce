import type { Product } from "@/types/product";
import { Link } from "react-router-dom";

export type ProductCardProps = {
  product: Product;
};

export const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div className="flex flex-col items-center border rounded-xl p-4 h-full shadow hover:shadow-lg transition-all bg-white">
      {/* Image Wrapper */}
      <div className="aspect-square w-full mb-4 overflow-hidden rounded-md bg-gray-50">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-full h-full object-contain"
        />
      </div>

      {/* Content */}
      <h3 className="text-lg font-semibold mb-2 line-clamp-2 min-h-[calc(3.5rem)] leading-tight">
        {product.name}
      </h3>
      <p className="text-gray-600 font-medium mb-4">
        ${product.price.toFixed(2)}
      </p>

      <Link to={`/products/${product.id}`}>View details</Link>
    </div>
  );
};
