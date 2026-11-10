import { forwardRef } from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        {...props}
        className="flex items-center justify-center gap-2 px-4 py-2 bg-surface text-foreground border border-border rounded-md hover:cursor-pointer hover:bg-border transition-colors outline-none focus-visible:ring-2 focus-visible:ring-primary"
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
export default Button;