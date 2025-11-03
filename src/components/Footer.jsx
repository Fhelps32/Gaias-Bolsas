import React from "react";
import { Facebook, Instagram, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-100 border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Sobre */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-green-700">
              Gaia’s Bolsas
            </h3>
            <p className="text-sm text-gray-700">
              Transformando materiais reciclados em bolsas sustentáveis e
              elegantes. Contribuindo para um planeta mais verde, uma bolsa por
              vez.
            </p>
          </div>

          {/* Contato */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-green-700">Contato</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-sm">
                <Phone className="h-4 w-4 text-green-700" />
                <span>(21) 98765-4321</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Mail className="h-4 w-4 text-green-700" />
                <span>contato@ecobags.com.br</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <MapPin className="h-4 w-4 text-green-700" />
                <span>Avenida Amaral Peixoto, Volta Redonda 27253220</span>
              </div>
            </div>
          </div>

          {/* Redes Sociais */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-green-700">
              Redes Sociais
            </h3>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/gaias.bolsas_"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-green-100 hover:bg-green-200 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5 text-green-700" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-200 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Gaia’s Bolsas. Todos os direitos
          reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
