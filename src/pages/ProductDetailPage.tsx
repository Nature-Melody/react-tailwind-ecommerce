import type { Product } from "@/types/types";

export const ProductDetail = ({
  product,
  onClose,
}: {
  product: Product;
  onClose: () => void;
}) => {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg w-[calc(400px)]">
        <h2 className="text-xl font-bold mb-2">{product.name}</h2>
        <p className="mb-4">${product.price}</p>
        <p className="mb-4">{product.description}</p>

        <button
          className="bg-red-500 text-black px-4 py-2 rounded"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};
