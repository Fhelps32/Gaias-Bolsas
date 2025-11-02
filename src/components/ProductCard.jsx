import React from "react";

// === COMPONENTES BASE DE CARD ===
// Aqui criamos versões simples dos componentes do shadcn/ui (sem TypeScript e sem cn()).

const Card = React.forwardRef(({ className = "", ...props }, ref) => (
  <div
    ref={ref}
    className={
      "rounded-lg border bg-white text-gray-900 shadow-sm " + className
    }
    {...props}
  />
));

const CardHeader = React.forwardRef(({ className = "", ...props }, ref) => (
  <div
    ref={ref}
    className={"flex flex-col space-y-1.5 p-6 " + className}
    {...props}
  />
));

const CardTitle = React.forwardRef(({ className = "", ...props }, ref) => (
  <h3
    ref={ref}
    className={
      "text-2xl font-semibold leading-none tracking-tight " + className
    }
    {...props}
  />
));

const CardDescription = React.forwardRef(
  ({ className = "", ...props }, ref) => (
    <p ref={ref} className={"text-sm text-gray-500 " + className} {...props} />
  )
);

const CardContent = React.forwardRef(({ className = "", ...props }, ref) => (
  <div ref={ref} className={"p-6 pt-0 " + className} {...props} />
));

const CardFooter = React.forwardRef(({ className = "", ...props }, ref) => (
  <div
    ref={ref}
    className={"flex items-center p-6 pt-0 " + className}
    {...props}
  />
));

// === COMPONENTE PRINCIPAL ===
const ProductCard = ({ title, description, image }) => {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <div className="aspect-square overflow-hidden bg-gray-100 flex items-center justify-center">
        {typeof image === "string" ? (
          image.endsWith(".jpg") ||
          image.endsWith(".png") ||
          image.startsWith("/") ? (
            <img
              src={image}
              alt={title}
              className="object-cover w-full h-full"
            />
          ) : (
            <span className="text-6xl">{image}</span>
          )
        ) : (
          image
        )}
      </div>
      <CardHeader>
        <CardTitle className="text-xl">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
    </Card>
  );
};

export default ProductCard;
