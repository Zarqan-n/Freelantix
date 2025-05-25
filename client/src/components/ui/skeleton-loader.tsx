import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SkeletonLoaderProps {
  className?: string;
  variant?: "card" | "text" | "avatar" | "button";
  lines?: number;
  animate?: boolean;
}

const variants = {
  card: "h-48 rounded-2xl",
  text: "h-4 rounded-lg",
  avatar: "h-12 w-12 rounded-full",
  button: "h-12 rounded-xl"
};

export default function SkeletonLoader({ 
  className, 
  variant = "card", 
  lines = 1,
  animate = true 
}: SkeletonLoaderProps) {
  const baseClasses = "bg-gradient-to-r from-muted via-muted/50 to-muted";
  
  if (variant === "text" && lines > 1) {
    return (
      <div className="space-y-3">
        {Array.from({ length: lines }).map((_, i) => (
          <motion.div
            key={i}
            className={cn(
              baseClasses,
              variants.text,
              i === lines - 1 ? "w-3/4" : "w-full",
              animate && "animate-pulse",
              className
            )}
            initial={{ opacity: 0.6 }}
            animate={{ opacity: [0.6, 1, 0.6] }}
            transition={{ 
              duration: 2, 
              repeat: Infinity, 
              delay: i * 0.1,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>
    );
  }

  return (
    <motion.div
      className={cn(
        baseClasses,
        variants[variant],
        animate && "animate-pulse",
        className
      )}
      initial={{ opacity: 0.6 }}
      animate={{ opacity: animate ? [0.6, 1, 0.6] : 0.6 }}
      transition={{ 
        duration: 2, 
        repeat: animate ? Infinity : 0,
        ease: "easeInOut"
      }}
    />
  );
}