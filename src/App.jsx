import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Shop from "./pages/Shop";
import "./index.css";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/produto" element={<Shop />} />
        <Route path="/produto/:slug" element={<Product />} />
      </Routes>
    </div>
  );
}

export default App;
