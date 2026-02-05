import { Routes, Route } from "react-router-dom";
import { ProductPage } from "@/pages/ProductPage";
import { ProductDetailPage } from "@/pages/ProductDetailPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<ProductPage />} />
      <Route path="/products" element={<ProductPage />} />
      <Route path="/products/:id" element={<ProductDetailPage />} />
    </Routes>
  );
}

export default App;
