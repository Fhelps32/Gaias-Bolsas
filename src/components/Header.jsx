import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto px-6 py-3 flex items-center justify-between">
        {/* Logo principal */}
        <Link to="/" className="flex items-center gap-2">
          <img
            src="/images/logo-padrao.png"
            alt="Logo Gaia’s Bolsas"
            className="h-15 w-auto object-contain"
          />
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

        {/* Overlay para o menu mobile */}
        <div
          className={`fixed inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-300 ${
            menuOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }`}
          onClick={() => setMenuOpen(false)}
        />

        {/* Sidebar mobile */}
        <nav
          className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 z-40 flex flex-col items-center pt-10 px-6 space-y-8 ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Logo dentro da sidebar */}
          <Link
            to="/"
            className="flex flex-col items-center mb-4"
            onClick={() => setMenuOpen(false)}
          >
            <img
              src="/images/logo-padrao.png"
              alt="Logo Gaia’s Bolsas"
              className="h-24 w-auto object-contain mb-2"
            />
          </Link>

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
