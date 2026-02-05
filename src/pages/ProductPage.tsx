import { Header } from "@/components/Header";
import { SearchBar } from "@/components/SearchBar";
import { ProductList } from "@/components/ProductList";
import { Products } from "@/data/mockData";
import { useState } from "react";


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
      <Header />
      <SearchBar
        value={inputValue}
        setInputValue={setInputValue}
        onSearch={handleSearch}
      />
      <ProductList
        products={filteredProducts}
      />
      
    </div>
  );
};
