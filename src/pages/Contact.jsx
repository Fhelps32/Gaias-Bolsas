import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Button from "../components/ui/button";

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 text-emerald-900">
      <Header />

      <main className="flex-1 py-35">
        <div className="container mx-auto px-4 md:px-8 max-w-5xl">
          <h1 className="text-4xl font-bold mb-6 text-center">
            Entre em Contato
          </h1>
          <p className="text-center text-emerald-700 mb-12">
            Tem alguma dúvida, sugestão ou quer saber mais sobre nossos
            produtos? Envie uma mensagem — teremos prazer em responder!
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            {/* FORMULÁRIO */}
            <form
              onSubmit={(e) => e.preventDefault()}
              className="bg-white shadow-md rounded-3xl p-8 flex flex-col gap-6"
            >
              <h2 className="text-xl font-semibold text-emerald-800 mb-2">
                Fale Conosco
              </h2>

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

            {/* MAPA + INFO */}
            <div className="flex flex-col gap-4">
              <div className="bg-white rounded-3xl shadow-md p-8">
                <h2 className="text-xl font-semibold text-emerald-800 mb-3">
                  Onde nos encontrar
                </h2>

                <p className="text-emerald-700 mb-4">
                  Venha nos visitar ou entre em contato por nossos canais!
                </p>

                <div className="space-y-2 text-emerald-800 text-sm">
                  <p className="flex gap-2">
                    📍 R. Trinta e Três - Vila Santa Cecília, Volta Redonda - RJ
                  </p>
                  <p className="flex gap-2">📞 (21) 98765-4321</p>
                  <p className="flex gap-2">✉️ contato@gaiasbolsas.com</p>
                  <p className="flex gap-2">⏰ Seg - Sex: 9h às 18h</p>
                </div>
              </div>

              <div className="w-full h-[300px] md:h-[300px] rounded-3xl overflow-hidden shadow-lg">
                <iframe
                  title="Localização Gaia's Bolsas"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3675.401604367346!2d-44.094309525130724!3d-22.51444097953061!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x99677fa5dcc2f%3A0x180cb97c7c1b3e76!2sR.%2033%20-%20Vila%20Santa%20Cec%C3%ADlia%2C%20Volta%20Redonda%20-%20RJ%2C%2027260-010!5e0!3m2!1pt-BR!2sbr!4v1730920000000!5m2!1pt-BR!2sbr"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
