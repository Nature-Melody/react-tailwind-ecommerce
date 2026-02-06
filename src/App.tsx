import { Routes, Route } from "react-router-dom";
import { ProductPage } from "@/pages/ProductPage";
import { ProductDetailPage } from "@/pages/ProductDetailPage";
import { Home } from "@/pages/Home";
import { About } from "@/pages/About";
import { Contact } from "@/pages/Contact";
import { CartPage } from "@/pages/CartPage";
import { UserLayout } from "./layouts/UserLayout";

function App() {
  return (
    <Routes>
      <Route element={<UserLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products">
          <Route index element={<ProductPage />} />
          <Route path=":id" element={<ProductDetailPage />} />
        </Route>
        <Route path="/cart" element={<CartPage />} />
      </Route>
    </Routes>
  );
}

export default App;
