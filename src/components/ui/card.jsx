import React from "react";

/* Card Container */
export const Card = ({ children, className = "" }) => {
  return (
    <div
      className={`rounded-lg border bg-white text-gray-800 shadow-sm ${className}`}
    >
      {children}
    </div>
  );
};

/* Card Header */
export const CardHeader = ({ children, className = "" }) => {
  return (
    <div className={`flex flex-col space-y-1.5 p-6 ${className}`}>
      {children}
    </div>
  );
};

/* Card Title */
export const CardTitle = ({ children, className = "" }) => {
  return (
    <h3
      className={`text-2xl font-semibold leading-none tracking-tight ${className}`}
    >
      {children}
    </h3>
  );
};

/* Card Description */
export const CardDescription = ({ children, className = "" }) => {
  return <p className={`text-sm text-gray-600 ${className}`}>{children}</p>;
};

/* Card Content */
export const CardContent = ({ children, className = "" }) => {
  return <div className={`p-6 pt-0 ${className}`}>{children}</div>;
};

/* Card Footer */
export const CardFooter = ({ children, className = "" }) => {
  return (
    <div className={`flex items-center p-6 pt-0 ${className}`}>{children}</div>
  );
};
