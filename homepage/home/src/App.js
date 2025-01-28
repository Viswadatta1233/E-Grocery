import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ShopByCategory from "./components/ShopByCategory";
import ProductsPage from "./components/ProductsPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ShopByCategory />} />
        <Route path="/products/:category" element={<ProductsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
