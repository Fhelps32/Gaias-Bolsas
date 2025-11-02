import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Button from "../components/ui/button";
import { Link } from "react-router-dom";

// Lista de produtos (mesma da Home)
const products = [
  {
    id: 1,
    slug: "colecao-essenza",
    title: "Coleção Essenza",
    description: "Bolsas elegantes feitas de materiais reciclados.",
    image: "/images/essenza.jpg",
    price: "199,90",
  },
  {
    id: 2,
    slug: "colecao-singular",
    title: "Coleção Singular",
    description: "Design único e sustentável para o seu dia a dia.",
    image: "/images/singular.jpg",
    price: "229,90",
  },
  {
    id: 3,
    slug: "colecao-trendz",
    title: "Coleção TrendZ",
    description: "Bolsas modernas e conscientes ambientalmente.",
    image: "/images/trendz.jpg",
    price: "179,90",
  },
  {
    id: 4,
    slug: "personalizada",
    title: "Personalizada",
    description: "Crie sua bolsa personalizada com materiais reciclados.",
    image: "/images/bolsa.jpg",
    price: "299,90",
  },
];

const Shop = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 text-emerald-900">
      <Header />

      <main className="flex-1 py-16">
        <div className="container mx-auto px-4 md:px-8">
          <h1 className="text-4xl font-bold mb-12 text-center">Nossa Loja</h1>

          <div className="flex flex-col gap-12">
            {products.map((product) => (
              <div
                key={product.slug}
                className="flex flex-col md:flex-row items-center bg-white shadow-md rounded-3xl overflow-hidden"
              >
                {/* Imagem */}
                <div className="w-full md:w-1/3 h-64 md:h-80 relative">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Conteúdo */}
                <div className="w-full md:w-2/3 p-6 md:p-12 flex flex-col justify-between">
                  <h2 className="text-2xl font-bold mb-4">{product.title}</h2>
                  <h2 className="text-2xl mb-4">R${product.price}</h2>
                  <p className="text-emerald-700 mb-6">{product.description}</p>

                  <Link to={`/produto/${product.slug}`}>
                    <Button className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-6 py-3 rounded-xl">
                      Ver Detalhes
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Shop;
