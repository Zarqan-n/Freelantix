import { motion } from "framer-motion";
import { useState, useRef } from "react";

interface HolographicCardProps {
  children: React.ReactNode;
  className?: string;
}

export default function HolographicCard({ children, className }: HolographicCardProps) {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [glowPosition, setGlowPosition] = useState({ x: 50, y: 50 });
  const ref = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const mouseX = e.clientX - centerX;
    const mouseY = e.clientY - centerY;
    
    const rotateXValue = (mouseY / (rect.height / 2)) * -10;
    const rotateYValue = (mouseX / (rect.width / 2)) * 10;
    
    const glowX = ((e.clientX - rect.left) / rect.width) * 100;
    const glowY = ((e.clientY - rect.top) / rect.height) * 100;
    
    setRotateX(rotateXValue);
    setRotateY(rotateYValue);
    setGlowPosition({ x: glowX, y: glowY });
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
    setGlowPosition({ x: 50, y: 50 });
  };

  return (
    <motion.div
      ref={ref}
      className={`relative ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{
        rotateX,
        rotateY,
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 30,
      }}
      style={{
        transformStyle: "preserve-3d",
        perspective: "1000px",
      }}
    >
      {/* Holographic rainbow effect */}
      <motion.div
        className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-30 pointer-events-none"
        style={{
          background: `radial-gradient(circle at ${glowPosition.x}% ${glowPosition.y}%, 
            rgba(255,0,150,0.3) 0%, 
            rgba(0,255,255,0.3) 25%, 
            rgba(255,255,0,0.3) 50%, 
            rgba(255,0,255,0.3) 75%, 
            transparent 100%)`
        }}
        animate={{
          background: `radial-gradient(circle at ${glowPosition.x}% ${glowPosition.y}%, 
            rgba(255,0,150,0.3) 0%, 
            rgba(0,255,255,0.3) 25%, 
            rgba(255,255,0,0.3) 50%, 
            rgba(255,0,255,0.3) 75%, 
            transparent 100%)`
        }}
        transition={{ duration: 0.1 }}
      />
      
      {/* Prismatic light streaks */}
      <motion.div
        className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-20 overflow-hidden pointer-events-none"
        animate={{
          background: `linear-gradient(${rotateY * 2}deg, 
            transparent 0%, 
            rgba(255,255,255,0.1) 45%, 
            rgba(255,255,255,0.3) 50%, 
            rgba(255,255,255,0.1) 55%, 
            transparent 100%)`
        }}
      />
      
      {children}
    </motion.div>
  );
}