import React from "react";

const Button = ({
  children,
  variant = "default",
  className = "",
  ...props
}) => {
  const base =
    "inline-flex items-center justify-center font-semibold rounded-xl transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2";

  const variants = {
    default:
      "bg-emerald-600 text-white hover:bg-emerald-700 focus:ring-emerald-500",
    outline:
      "border border-emerald-600 text-emerald-700 hover:bg-emerald-50 focus:ring-emerald-500",
    ghost: "text-emerald-700 hover:bg-emerald-100 focus:ring-emerald-500",
  };

  return (
    <button
      className={`${base} ${variants[variant]} px-5 py-2.5 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
