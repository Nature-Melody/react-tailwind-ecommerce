import { Header } from "@/components/Header";
import { SearchBar } from "@/components/SearchBar";
import { ProductList } from "@/components/ProductList";
import { Products } from "@/data/mockData";
import { useState } from "react";
import type { Product } from "@/types/types";
import { ProductDetail } from "@/pages/ProductDetailPage";

export const ProductPage = () => {
  const [inputValue, setInputValue] = useState(""); // State to hold the search input
  const [keyword, setKeyword] = useState(""); // User's search keyword

  const filteredProducts = Products.filter((product) =>
    product.name.toLowerCase().startsWith(keyword.toLowerCase()),
  );

  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null); // State for selected product

  const handleSearch = (value: string) => {
    setKeyword(value);
  };

  return (
    <div>
      <Header />
      <SearchBar
        value={inputValue}
        setInputValue={setInputValue}
        onSearch={handleSearch}
      />
      <ProductList
        products={filteredProducts}
        onSelectProduct={setSelectedProduct}
      />
      {selectedProduct && (
        <ProductDetail
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </div>
  );
};
