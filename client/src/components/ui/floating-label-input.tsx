import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

interface FloatingLabelInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

const FloatingLabelInput = React.forwardRef<HTMLInputElement, FloatingLabelInputProps>(
  ({ className, label, error, ...props }, ref) => {
    const [isFocused, setIsFocused] = useState(false);
    const [hasValue, setHasValue] = useState(false);

    const handleFocus = () => setIsFocused(true);
    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
      setIsFocused(false);
      setHasValue(e.target.value.length > 0);
    };

    const isLabelFloating = isFocused || hasValue;

    return (
      <div className="relative">
        <Input
          ref={ref}
          className={cn(
            "bg-secondary border-border focus:border-neon-blue peer",
            className
          )}
          placeholder=" "
          onFocus={handleFocus}
          onBlur={handleBlur}
          {...props}
        />
        <label
          className={cn(
            "absolute left-3 transition-all duration-300 pointer-events-none text-muted-foreground",
            isLabelFloating
              ? "top-0 -translate-y-6 scale-75 text-neon-blue"
              : "top-1/2 -translate-y-1/2 scale-100"
          )}
        >
          {label}
        </label>
        {error && (
          <p className="text-destructive text-sm mt-1">{error}</p>
        )}
      </div>
    );
  }
);

FloatingLabelInput.displayName = "FloatingLabelInput";

export default FloatingLabelInput;
