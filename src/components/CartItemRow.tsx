import type { CartItem } from "@/types/cart";
import { ReuleauxButton } from "@/components/ReuleauxButton";

export type CartItemProps = {
  item: CartItem;
  onIncrease: () => void;
  onDecrease: () => void;
  onRemove: () => void;
};

export const CartItemRow = ({
  item,
  onIncrease,
  onDecrease,
  onRemove,
}: CartItemProps) => {
  return (
    <div className="grid grid-cols-5 gap-4 items-center p-4 hover:bg-gray-50 transition border-b">
      {/* 1. Image */}
      <div className="w-20 h-20 bg-gray-100 rounded-lg overflow-hidden">
        <img
          src={item.product.imageUrl}
          alt="Product"
          className="w-full h-full object-cover"
        />
      </div>

      {/* 2. Name */}
      <div>
        <h2 className="text-lg font-semibold line-clamp-2">
          {item.product.name}
        </h2>
      </div>

      {/* 3. Price */}
      <div className="text-center">
        <p className="text-gray-600 font-medium">
          ${item.product.price.toFixed(2)}
        </p>
      </div>

      {/* 4. Quantity */}
      <div className="flex justify-center items-center gap-3 mx-auto">
        <ReuleauxButton
          onClick={onDecrease}
          direction="left"
          variant="primary"
          size="md"
          ariaLabel="Decrease quantity"
          title="Decrease quantity"
          disabled={item.quantity <= 1}
        >
          −
        </ReuleauxButton>

        <span className="px-4 py-1 font-semibold text-lg text-center min-w-[calc(2rem)]">
          {item.quantity}
        </span>

        <ReuleauxButton
          onClick={onIncrease}
          direction="right"
          variant="primary"
          size="md"
          ariaLabel="Increase quantity"
          title="Increase quantity"
        >
          +
        </ReuleauxButton>
      </div>

      {/* 5. Actions */}
      <div className="flex flex-col items-center w-24 gap-y-2 mx-auto">
        <button
          type="button"
          className="w-full text-sm text-blue-600 p-2 border rounded-md hover:text-blue-800 font-medium"
          aria-label="Edit item"
          title="Edit item"
        >
          Edit
        </button>
        <button
          type="button"
          className="w-full text-sm text-red-500 p-2 border rounded-md hover:text-red-700 font-medium"
          onClick={onRemove}
          aria-label="Remove item from cart"
          title="Remove item"
        >
          Remove
        </button>
      </div>
    </div>
  );
};
