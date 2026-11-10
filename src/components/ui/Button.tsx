import { forwardRef } from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, variant = "secondary", size = "md", className = "", ...props }, ref) => {
    
    const baseClasses = "inline-flex items-center justify-center gap-2 rounded-md transition-colors outline-none focus-visible:ring-2 focus-visible:ring-primary disabled:opacity-50 disabled:pointer-events-none cursor-pointer";
    
    const variants = {
      primary: "bg-primary text-white hover:bg-blue-600",
      secondary: "bg-surface text-foreground border border-border hover:bg-border",
      outline: "bg-transparent text-foreground border border-border hover:bg-surface",
      ghost: "bg-transparent text-foreground hover:bg-surface",
    };

    const sizes = {
      sm: "h-8 px-3 text-sm",
      md: "h-10 px-4 py-2",
      lg: "h-12 px-6 text-lg",
    };

    return (
      <button
        ref={ref}
        {...props}
        className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
export default Button;