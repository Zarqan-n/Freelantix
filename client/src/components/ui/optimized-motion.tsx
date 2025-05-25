import { motion } from "framer-motion";
import { ReactNode } from "react";

// Optimized animation variants for better performance
export const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: "easeOut" }
};

export const slideInLeft = {
  initial: { opacity: 0, x: -30 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.4, ease: "easeOut" }
};

export const scaleIn = {
  initial: { opacity: 0, scale: 0.95 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.4, ease: "easeOut" }
};

// Reduced motion component that respects user preferences
interface OptimizedMotionProps {
  children: ReactNode;
  variant?: "fadeInUp" | "slideInLeft" | "scaleIn";
  delay?: number;
  className?: string;
  whileHover?: any;
  onClick?: () => void;
}

const variants = {
  fadeInUp,
  slideInLeft, 
  scaleIn
};

export default function OptimizedMotion({ 
  children, 
  variant = "fadeInUp", 
  delay = 0,
  className,
  whileHover,
  onClick
}: OptimizedMotionProps) {
  const animationVariant = variants[variant];
  
  return (
    <motion.div
      className={className}
      initial={animationVariant.initial}
      whileInView={animationVariant.animate}
      transition={{ ...animationVariant.transition, delay }}
      whileHover={whileHover}
      onClick={onClick}
      viewport={{ once: true, margin: "-50px" }}
    >
      {children}
    </motion.div>
  );
}