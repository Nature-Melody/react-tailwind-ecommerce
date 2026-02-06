import { SearchBar } from "@/components/SearchBar";
import { ProductList } from "@/components/ProductList";
import { Products } from "@/data/mockData";
import { useState } from "react";
import { Sidebar } from "@/components/Sidebar";

export const ProductPage = () => {
  const [inputValue, setInputValue] = useState(""); // State to hold the search input
  const [keyword, setKeyword] = useState(""); // User's search keyword

  const filteredProducts = Products.filter((product) =>
    product.name.toLowerCase().startsWith(keyword.toLowerCase()),
  );

  const handleSearch = (value: string) => {
    setKeyword(value);
  };

  return (
    <div>
      <div className="max-w-7xl mx-auto">
        <SearchBar
          value={inputValue}
          setInputValue={setInputValue}
          onSearch={handleSearch}
        />
        <div className="flex flex-col md:flex-row gap-8 mt-10">
          <aside className="w-full md:w-64 flex-0">
            <Sidebar />
          </aside>

          <div className="flex-1">
            <ProductList products={filteredProducts} />
          </div>
        </div>
      </div>
    </div>
  );
};
