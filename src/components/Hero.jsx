import React from "react";
import { Link } from "react-router-dom";

/**
 * Hero Reutilizável
 *
 * Props:
 * - title: string → título principal
 * - subtitle: string → subtítulo ou descrição
 * - image: string → caminho da imagem (opcional)
 * - buttons: array de objetos { label, href, variant, external } → botões opcionais
 * - className: string → classes adicionais para personalizar
 * - bgClassName: string → classes para o fundo/overlay
 */
const Hero = ({
  title,
  subtitle,
  image = "",
  buttons = [],
  className = "",
  bgClassName = "",
}) => {
  const hasImage = Boolean(image);

  return (
    <section
      className={`relative min-h-[500px] flex flex-col items-center justify-center overflow-hidden text-center py-20 ${className}`}
    >
      {/* Fundo / overlay */}
      <div className={`absolute inset-0 ${bgClassName}`} />

      <div className="container relative z-10 px-4 flex flex-col items-center justify-center">
        {hasImage ? (
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-10">
            {/* Imagem */}
            <div className="w-40 h-40 md:w-56 md:h-56 shrink-0">
              <img
                src={image}
                alt={title || "Hero image"}
                className="w-full h-full object-contain"
              />
            </div>

            {/* Subtítulo ao lado */}
            {subtitle && (
              <p className="text-xl md:text-2xl text-green-900 font-semibold max-w-lg text-center md:text-left">
                {subtitle}
              </p>
            )}
          </div>
        ) : (
          <>
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
          </>
        )}

        {/* Botões (sempre aparecem) */}
        {buttons.length > 0 && (
          <div className="flex justify-center gap-4 flex-wrap mt-4">
            {buttons.map((btn, index) => {
              const buttonClasses = `px-6 py-3 rounded-lg font-semibold transition-colors ${
                btn.variant === "outline"
                  ? "border border-green-700 text-green-700 hover:bg-green-100"
                  : "bg-green-700 text-white hover:bg-green-800"
              }`;

              return btn.external ? (
                <a
                  key={index}
                  href={btn.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={buttonClasses}
                >
                  {btn.label}
                </a>
              ) : (
                <Link key={index} to={btn.href} className={buttonClasses}>
                  {btn.label}
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};

export default Hero;
