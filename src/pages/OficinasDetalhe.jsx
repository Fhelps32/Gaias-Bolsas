import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Button from "../components/ui/button";

const oficinas = [
  {
    id: 1,
    title: "Transforme o Lixo em Arte",
    date: "Sábado, 15 de Novembro",
    local: "Centro Comunitário VerdeVida",
    description:
      "Nesta oficina prática e criativa, você aprenderá a transformar materiais recicláveis em obras de arte e objetos úteis. Usaremos papel, plástico e tecidos reaproveitados para dar uma nova vida a materiais descartados. Uma oportunidade perfeita para quem quer unir arte e sustentabilidade!",
    image: "/images/oficina1.jpg",
  },
  {
    id: 2,
    title: "Moda Sustentável: Criação de Ecobags",
    date: "Domingo, 24 de Novembro",
    local: "Espaço Gaia Criativa",
    description:
      "Aprenda técnicas de costura e personalização para criar sua própria ecobag com materiais recicláveis. Além de aprender, você levará sua criação para casa! Ideal para quem ama moda e quer fazer parte da mudança sustentável.",
    image: "/images/oficina2.jpg",
  },
  {
    id: 3,
    title: "Consumo Consciente e Estilo de Vida Verde",
    date: "Sábado, 7 de Dezembro",
    local: "Auditório EcoSaber",
    description:
      "Uma experiência interativa sobre consumo consciente, hábitos sustentáveis e práticas ecológicas para o dia a dia. Participe e aprenda como pequenas ações podem ter grandes impactos positivos no planeta.",
    image: "/images/oficina3.jpg",
  },
];

const OficinaDetalhe = () => {
  const { id } = useParams();
  const oficina = oficinas.find((item) => item.id === parseInt(id));

  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    mensagem: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Inscrição enviada com sucesso!");
    setFormData({ nome: "", email: "", mensagem: "" });
  };

  if (!oficina) {
    return (
      <div className="min-h-screen flex items-center justify-center text-emerald-800">
        Oficina não encontrada.
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 text-emerald-900">
      <Header />

      <main className="flex-1 py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <img
            src={oficina.image}
            alt={oficina.title}
            className="w-full h-80 object-cover rounded-3xl mb-10 shadow-md"
          />

          <h1 className="text-4xl font-bold text-emerald-900 mb-4">
            {oficina.title}
          </h1>
          <p className="text-emerald-700 mb-2">📅 {oficina.date}</p>
          <p className="text-emerald-700 mb-6">📍 {oficina.local}</p>
          <p className="text-lg text-emerald-800 mb-12 leading-relaxed">
            {oficina.description}
          </p>

          {/* Formulário */}
          <section className="bg-white shadow-lg rounded-3xl p-8">
            <h2 className="text-2xl font-bold mb-6 text-emerald-900">
              Inscreva-se nesta oficina
            </h2>

            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <div>
                <label className="block text-emerald-800 mb-2 font-semibold">
                  Nome completo
                </label>
                <input
                  type="text"
                  name="nome"
                  value={formData.nome}
                  onChange={handleChange}
                  required
                  className="w-full border border-emerald-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>

              <div>
                <label className="block text-emerald-800 mb-2 font-semibold">
                  E-mail
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full border border-emerald-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>

              <div>
                <label className="block text-emerald-800 mb-2 font-semibold">
                  Mensagem (opcional)
                </label>
                <textarea
                  name="mensagem"
                  value={formData.mensagem}
                  onChange={handleChange}
                  rows="4"
                  className="w-full border border-emerald-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  placeholder="Conte um pouco sobre seu interesse..."
                ></textarea>
              </div>

              <Button
                type="submit"
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 rounded-xl"
              >
                Enviar Inscrição
              </Button>
            </form>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default OficinaDetalhe;
