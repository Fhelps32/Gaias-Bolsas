import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-emerald-700">
          Gaia’s Bolsas
        </Link>

        {/* Botão do menu mobile */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-emerald-700 focus:outline-none z-50"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Links desktop */}
        <nav className="hidden md:flex space-x-8 text-emerald-800 font-medium">
          <Link
            to="/"
            className="hover:text-emerald-600 transition-colors duration-200"
          >
            Início
          </Link>
          <Link
            to="/produto"
            className="hover:text-emerald-600 transition-colors duration-200"
          >
            Produtos
          </Link>
          <Link
            to="/oficinas"
            className="hover:text-emerald-600 transition-colors duration-200"
          >
            Oficinas
          </Link>
          <Link
            to="/contato"
            className="hover:text-emerald-600 transition-colors duration-200"
          >
            Contato
          </Link>
        </nav>

        {/* Menu Mobile lateral */}
        <div
          className={`fixed inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-300 ${
            menuOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }`}
          onClick={() => setMenuOpen(false)}
        />

        <nav
          className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 z-40 flex flex-col pt-24 px-6 space-y-6 ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <Link
            to="/"
            className="text-lg text-emerald-800 font-semibold hover:text-emerald-600"
            onClick={() => setMenuOpen(false)}
          >
            Início
          </Link>
          <Link
            to="/produto"
            className="text-lg text-emerald-800 font-semibold hover:text-emerald-600"
            onClick={() => setMenuOpen(false)}
          >
            Produtos
          </Link>
          <Link
            to="/oficinas"
            className="text-lg text-emerald-800 font-semibold hover:text-emerald-600"
            onClick={() => setMenuOpen(false)}
          >
            Oficinas
          </Link>
          <Link
            to="/contato"
            className="text-lg text-emerald-800 font-semibold hover:text-emerald-600"
            onClick={() => setMenuOpen(false)}
          >
            Contato
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
