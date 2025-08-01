import clsx from "clsx";
import React from "react";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "primary";
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", ...props }, ref) => {
    const base = "inline-flex items-center justify-center px-4 py-2 rounded-md font-medium transition-colors duration-300";
    const variants = {
      default: "bg-gray-900 text-white hover:bg-gray-700",
      primary: "bg-studio-primary text-white hover:bg-gray-800", // using custom class
    };
    return (
      <button ref={ref} className={clsx(base, variants[variant], className)} {...props} />
    );
  }
);
Button.displayName = "Button";
