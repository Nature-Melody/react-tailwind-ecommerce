import type { Product } from "@/types/types";

export type ProductCardProps = {
  product: Product;
  onSelect: () => void;
};

export const ProductCard = ({ product, onSelect }: ProductCardProps) => {
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

      {/* mt-auto pushes the button to the very bottom of the card */}
      <button
        onClick={onSelect}
        className="mt-auto w-full bg-blue-600 text-white font-semibold px-4 py-2 rounded-lg hover:bg-blue-700 active:scale-95 transition-all duration-200"
      >
        View Details
      </button>
    </div>
  );
};
