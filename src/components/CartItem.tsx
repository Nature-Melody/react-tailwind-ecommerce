export const CartItem = () => {
  return (
    <div className="grid grid-cols-5 gap-4 items-center p-4 hover:bg-gray-50 transition border-b">
      {/* 1. Image */}
      <div className="w-20 h-20 bg-gray-100 rounded-lg overflow-hidden">
        <img
          src="abc.jpg"
          alt="Product"
          className="w-full h-full object-cover"
        />
      </div>

      {/* 2. Name */}
      <div>
        <h2 className="text-lg font-semibold line-clamp-2">Product Name</h2>
      </div>

      {/* 3. Price */}
      <div className="text-center">
        <p className="text-gray-600 font-medium">$XX.XX</p>
      </div>

      {/* 4. Quantity */}
      <div className="flex justify-center">
        <span className="px-3 py-1 border rounded">1</span>
      </div>

      {/* 5. Actions */}
      <div className="flex flex-col gap-2">
        <button className="text-sm text-blue-600 hover:text-blue-800 font-medium">
          Edit
        </button>
        <button className="text-sm text-red-500 hover:text-red-700 font-medium">
          Delete
        </button>
      </div>
    </div>
  );
};
