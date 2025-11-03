import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Button from "../components/ui/button";

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 text-emerald-900">
      <Header />

      <main className="flex-1 py-16">
        <div className="container mx-auto px-4 md:px-8 max-w-3xl">
          <h1 className="text-4xl font-bold mb-6 text-center">
            Entre em Contato
          </h1>
          <p className="text-center text-emerald-700 mb-12">
            Tem alguma dúvida, sugestão ou quer saber mais sobre nossos
            produtos? Envie uma mensagem — teremos prazer em responder!
          </p>

          <form
            onSubmit={(e) => e.preventDefault()}
            className="bg-white shadow-md rounded-3xl p-8 flex flex-col gap-6"
          >
            <div className="flex flex-col">
              <label htmlFor="name" className="font-medium mb-2">
                Nome
              </label>
              <input
                id="name"
                type="text"
                placeholder="Seu nome completo"
                className="border border-emerald-200 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="email" className="font-medium mb-2">
                E-mail
              </label>
              <input
                id="email"
                type="email"
                placeholder="seuemail@exemplo.com"
                className="border border-emerald-200 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="message" className="font-medium mb-2">
                Mensagem
              </label>
              <textarea
                id="message"
                rows="5"
                placeholder="Escreva sua mensagem aqui..."
                className="border border-emerald-200 rounded-xl p-3 resize-none focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>

            <div className="flex justify-center">
              <Button className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-8 py-3 rounded-xl">
                Enviar Mensagem
              </Button>
            </div>
          </form>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
