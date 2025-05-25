import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect } from "react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

interface StatsCounterProps {
  stat: {
    number: number;
    suffix: string;
    label: string;
  };
  index: number;
}

export default function StatsCounter({ stat, index }: StatsCounterProps) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  
  const { elementRef, isIntersecting } = useIntersectionObserver({
    threshold: 0.5,
    triggerOnce: true,
  });

  useEffect(() => {
    if (isIntersecting) {
      const controls = animate(count, stat.number, {
        duration: 2.5,
        ease: "easeOut",
        delay: index * 0.3,
      });
      return controls.stop;
    }
  }, [isIntersecting, count, stat.number, index]);

  const getColor = () => {
    const colors = ["neon-blue", "neon-green", "neon-pink"];
    return colors[index % colors.length];
  };

  return (
    <motion.div
      ref={elementRef}
      initial={{ opacity: 0, y: 50, scale: 0.8 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      whileHover={{ 
        scale: 1.05,
        transition: { type: "spring", stiffness: 300, damping: 20 }
      }}
      transition={{ 
        duration: 0.8, 
        delay: index * 0.2,
        type: "spring",
        stiffness: 100
      }}
      className="relative group"
    >
      {/* Glow effect on hover */}
      <motion.div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-500"
        style={{
          background: `radial-gradient(circle at center, ${getColor().replace('neon-', 'rgba(26,231,255,')} 0.3), transparent 70%)`
        }}
      />
      
      <div className="relative text-center">
        {/* Animated background */}
        <motion.div
          className="absolute inset-0 rounded-2xl glass-effect opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          initial={{ scale: 0.9 }}
          whileHover={{ scale: 1 }}
        />
        
        <div className="relative p-8">
          {/* Number with enhanced animations */}
          <motion.div 
            className={`text-6xl font-black ${getColor()} mb-4 relative`}
            whileHover={{ 
              textShadow: "0 0 20px currentColor",
              transition: { duration: 0.3 }
            }}
          >
            <motion.span
              animate={isIntersecting ? { 
                scale: [1, 1.1, 1],
                transition: { duration: 0.5, delay: index * 0.3 + 2 }
              } : {}}
            >
              {rounded}
            </motion.span>
            <motion.span
              className="inline-block"
              animate={isIntersecting ? {
                rotate: [0, 10, -10, 0],
                transition: { duration: 0.6, delay: index * 0.3 + 2.2 }
              } : {}}
            >
              {stat.suffix}
            </motion.span>
            
            {/* Pulse effect */}
            <motion.div
              className="absolute inset-0 rounded-full opacity-0"
              animate={isIntersecting ? {
                scale: [1, 1.5, 1],
                opacity: [0, 0.3, 0],
                transition: { duration: 1, delay: index * 0.3 + 2.5, repeat: Infinity, repeatDelay: 3 }
              } : {}}
              style={{
                background: `radial-gradient(circle, ${getColor().replace('neon-', 'rgba(26,231,255,')} 0.3), transparent 70%)`
              }}
            />
          </motion.div>
          
          {/* Label with slide-in effect */}
          <motion.p 
            className="text-xl text-muted-foreground font-medium leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 + 0.8 }}
            whileHover={{ color: "rgb(var(--foreground))" }}
          >
            {stat.label}
          </motion.p>
          
          {/* Decorative elements */}
          <motion.div
            className={`w-16 h-1 bg-${getColor()} mx-auto mt-4 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
            initial={{ width: 0 }}
            whileHover={{ width: 64 }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </div>
    </motion.div>
  );
}
