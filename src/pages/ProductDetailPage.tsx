import { useParams, Link } from "react-router-dom";
import { Products } from "@/data/mockData";

export const ProductDetailPage = () => {
  const { id } = useParams();

  const product = Products.find((p) => p.id === Number(id));

  if (!product) {
    return <p className="p-6 text-red-500">Product not found</p>;
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <Link to="/products" className="text-blue-500 underline">
        ← Back to products
      </Link>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-full rounded"
        />

        <div>
          <h1 className="text-3xl font-bold">{product.name}</h1>
          <p className="mt-2 text-xl text-gray-700">${product.price}</p>

          <p className="mt-4 text-gray-600">{product.description}</p>

          <button className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};
