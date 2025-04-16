import * as React from "react"
import { cn } from "../../lib/utils"

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'outline';
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({ className, variant = 'default', ...props }, ref) => {
  const variantClasses =
    variant === 'outline'
      ? 'bg-transparent border border-primary text-primary hover:bg-primary/10'
      : 'bg-primary text-primary-foreground hover:bg-primary/90';
  return (
    <button
      ref={ref}
      className={cn(
        'inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none px-4 py-2',
        variantClasses,
        className
      )}
      {...props}
    />
  );
});
Button.displayName = "Button";

export { Button };
