import { motion } from "framer-motion";
import { useState, useEffect } from "react";

interface InteractiveCursorProps {
  children: React.ReactNode;
  glowColor?: string;
}

export default function InteractiveCursor({ children, glowColor = "#1ae7ff" }: InteractiveCursorProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', updateMousePosition);
    return () => window.removeEventListener('mousemove', updateMousePosition);
  }, []);

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {children}
      
      {/* Interactive cursor glow */}
      <motion.div
        className="fixed pointer-events-none z-50 rounded-full"
        style={{
          left: mousePosition.x - 10,
          top: mousePosition.y - 10,
          width: 20,
          height: 20,
          background: `radial-gradient(circle, ${glowColor}40, transparent 70%)`,
        }}
        animate={{
          scale: isHovering ? 3 : 1,
          opacity: isHovering ? 0.8 : 0,
        }}
        transition={{
          duration: 0.3,
          ease: "easeOut"
        }}
      />
    </div>
  );
}