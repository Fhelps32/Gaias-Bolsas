import React from "react";

/**
 * Hero Reutilizável
 *
 * Props:
 * - title: string → título principal
 * - subtitle: string → subtítulo ou descrição
 * - buttons: array de objetos { label, href, variant } → botões opcionais
 * - className: string → classes adicionais para personalizar
 * - bgClassName: string → classes para o fundo/overlay
 */
const Hero = ({
  title,
  subtitle,
  buttons = [],
  className = "",
  bgClassName = "",
}) => {
  return (
    <section
      className={`relative min-h-[500px] flex items-center justify-center overflow-hidden ${className}`}
    >
      {/* Background/overlay */}
      <div className={`absolute inset-0 ${bgClassName}`} />

      {/* Conteúdo central */}
      <div className="container relative z-10 px-4 text-center">
        {title && (
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-green-900">
            {title}
          </h1>
        )}

        {subtitle && (
          <p className="text-xl md:text-2xl text-gray-700 max-w-2xl mx-auto mb-8">
            {subtitle}
          </p>
        )}

        {buttons.length > 0 && (
          <div className="flex justify-center gap-4">
            {buttons.map((btn, index) => (
              <a
                key={index}
                href={btn.href}
                className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
                  btn.variant === "outline"
                    ? "border border-green-700 text-green-700 hover:bg-green-100"
                    : "bg-green-700 text-white hover:bg-green-800"
                }`}
              >
                {btn.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Hero;
