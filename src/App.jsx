import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Shop from "./pages/Shop";
import Contact from "./pages/Contact";
import Oficinas from "./pages/Oficinas";
import OficinaDetalhe from "./pages/OficinasDetalhe";
import ScrollToTop from "./components/scrollToTop";

import "./index.css";

function App() {
  return (
    <div>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/produto" element={<Shop />} />
        <Route path="/contato" element={<Contact />} />
        <Route path="/produto/:slug" element={<Product />} />
        <Route path="/oficinas" element={<Oficinas />} />
        <Route path="/oficinas/:id" element={<OficinaDetalhe />} />
      </Routes>
    </div>
  );
}

export default App;
