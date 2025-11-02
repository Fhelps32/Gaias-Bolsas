import React from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Button from "../components/ui/button";

// Array dos produtos (mesmo da home)
const products = [
  {
    slug: "colecao-essenza",
    title: "Coleção Essenza",
    price: 199.9,
    description:
      "Bolsas elegantes e sustentáveis, feitas com materiais reciclados.",
    image: "/images/essenza.jpg",
    details: [
      "Feita com borracha reciclada",
      "Design moderno e elegante",
      "Fácil de limpar e durável",
    ],
  },
  {
    slug: "colecao-singular",
    title: "Coleção Singular",
    price: 229.9,
    description: "Bolsas únicas com estilo sofisticado e sustentabilidade.",
    image: "/images/singular.jpg",
    details: [
      "Material reciclado premium",
      "Acabamento resistente à água",
      "Perfeita para o dia a dia",
    ],
  },
  {
    slug: "colecao-trendz",
    title: "Coleção TrendZ",
    price: 179.9,
    description:
      "Bolsas modernas e práticas para acompanhar todas as tendências.",
    image: "/images/trendz.jpg",
    details: [
      "Compacta e leve",
      "Feita com materiais reciclados",
      "Estilo casual para qualquer ocasião",
    ],
  },
  {
    slug: "personalizada",
    title: "Personalizada",
    price: 299.9,
    description: "Bolsas que você pode personalizar com seu toque único.",
    image: "/images/bolsa.jpg",
    details: [
      "Customize com cores e estampas",
      "Material reciclado de alta qualidade",
      "Design exclusivo e funcional",
    ],
  },
];

const Product = () => {
  const { slug } = useParams();
  const product = products.find((p) => p.slug === slug);

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center text-emerald-900">
          Produto não encontrado
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 text-emerald-900">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Imagem do produto */}
          <div>
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-auto object-cover rounded-xl shadow"
            />
          </div>

          {/* Detalhes */}
          <div className="flex flex-col justify-between">
            <div>
              <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
              <p className="text-xl text-emerald-700 mb-6">
                R$ {product.price.toFixed(2)}
              </p>
              <p className="text-md text-emerald-800 mb-8">
                {product.description}
              </p>

              {/* Detalhes extras */}
              <div className="mb-6">
                <h2 className="font-semibold mb-2">Detalhes:</h2>
                <ul className="list-disc list-inside text-emerald-800">
                  {product.details.map((d, idx) => (
                    <li key={idx}>{d}</li>
                  ))}
                </ul>
              </div>
            </div>

            <Button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-4 rounded-xl">
              Adicionar ao Carrinho
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Product;
