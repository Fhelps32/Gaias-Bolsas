import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Início" },
    { href: "/produto", label: "Catálogo" },
    { href: "/oficina", label: "Oficina de Reciclagem" },
    { href: "/contato", label: "Contato" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/90 backdrop-blur">
      <div className="w-full flex h-16 items-center justify-between px-6 md:px-15">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <span className="text-2xl font-bold text-green-700">
            Gaia’s Bolsas
          </span>
        </Link>

        {/* Navegação Desktop */}
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className="text-sm font-medium text-gray-700 hover:text-green-600 transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Botão da Sidebar (Mobile) */}
        <div className="md:hidden">
          <button
            onClick={() => setIsSidebarOpen(true)}
            className="p-2 rounded-md hover:bg-gray-100 transition-colors"
          >
            <Menu className="h-6 w-6 text-gray-800" />
          </button>
        </div>

        {/* Sidebar */}
        {isSidebarOpen && (
          <div className="fixed inset-0 z-50 flex">
            {/* Overlay */}
            <div
              className="fixed inset-0 bg-black/40"
              onClick={() => setIsSidebarOpen(false)}
            ></div>

            {/* Menu lateral */}
            <div className="relative ml-auto w-64 bg-white shadow-lg flex flex-col">
              <div className="flex items-center justify-between p-4 border-b">
                <span className="text-lg font-bold text-green-700">Menu</span>
                <button
                  onClick={() => setIsSidebarOpen(false)}
                  className="p-2 rounded-md hover:bg-gray-100 transition-colors"
                >
                  <X className="h-5 w-5 text-gray-800" />
                </button>
              </div>

              <nav className="flex flex-col p-4 space-y-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    to={link.href}
                    onClick={() => setIsSidebarOpen(false)}
                    className="text-lg font-medium text-gray-700 hover:text-green-600 transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
