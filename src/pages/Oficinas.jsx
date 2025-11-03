import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Button from "../components/ui/button";
import { Link } from "react-router-dom";
import {
  Card,
  CardHeader,
  CardContent,
  CardTitle,
} from "../components/ui/card";

const Oficinas = () => {
  const oficinas = [
    {
      id: 1,
      title: "Transforme o Lixo em Arte",
      date: "Sábado, 15 de Novembro",
      local: "Centro Comunitário VerdeVida",
      shortDesc:
        "Aprenda técnicas de reaproveitamento de materiais recicláveis e crie peças únicas.",
      image: "/images/oficina1.jpg",
    },
    {
      id: 2,
      title: "Moda Sustentável: Criação de Ecobags",
      date: "Domingo, 24 de Novembro",
      local: "Espaço Gaia Criativa",
      shortDesc:
        "Descubra o processo de criação das nossas ecobags e leve para casa sua própria peça feita por você!",
      image: "/images/oficina2.jpg",
    },
    {
      id: 3,
      title: "Consumo Consciente e Estilo de Vida Verde",
      date: "Sábado, 7 de Dezembro",
      local: "Auditório EcoSaber",
      shortDesc:
        "Uma oficina sobre como pequenas atitudes podem gerar grandes impactos positivos no planeta.",
      image: "/images/oficina3.jpg",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 text-emerald-900">
      <Header />

      <main className="flex-1 py-35">
        <div className="container mx-auto px-4 max-w-5xl">
          <h1 className="text-4xl font-bold mb-8 text-center">
            Oficinas de Conscientização
          </h1>
          <p className="text-center text-emerald-700 mb-12 max-w-2xl mx-auto">
            Escolha uma das nossas oficinas para aprender sobre sustentabilidade
            e participar de experiências únicas.
          </p>

          <div className="flex flex-col gap-10">
            {oficinas.map((oficina) => (
              <Card
                key={oficina.id}
                className="overflow-hidden flex flex-col md:flex-row rounded-3xl shadow-md"
              >
                {/* Imagem com altura fixa para uniformizar os cards */}
                <div className="md:w-1/2 w-full h-64 md:h-80 overflow-hidden">
                  <img
                    src={oficina.image}
                    alt={oficina.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Conteúdo do card */}
                <CardContent className="md:w-1/2 p-8 flex flex-col justify-center">
                  <CardTitle className="text-2xl font-bold text-emerald-800 mb-2">
                    {oficina.title}
                  </CardTitle>

                  <div className="text-sm text-emerald-600 mb-4">
                    📅 {oficina.date} <br /> 📍 {oficina.local}
                  </div>

                  <p className="text-emerald-700 mb-6">{oficina.shortDesc}</p>

                  <div>
                    <Link to={`/oficinas/${oficina.id}`}>
                      <Button className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-6 py-2 rounded-xl">
                        Ver Detalhes
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Oficinas;
