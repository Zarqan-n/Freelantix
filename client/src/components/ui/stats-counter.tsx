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
  });

  useEffect(() => {
    if (isIntersecting) {
      const controls = animate(count, stat.number, {
        duration: 2,
        ease: "easeOut",
      });
      return controls.stop;
    }
  }, [isIntersecting, count, stat.number]);

  const getColor = () => {
    const colors = ["neon-blue", "neon-green", "neon-pink"];
    return colors[index % colors.length];
  };

  return (
    <motion.div
      ref={elementRef}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      className="p-8"
    >
      <div className={`text-5xl font-black ${getColor()} mb-4`}>
        <motion.span>{rounded}</motion.span>
        {stat.suffix}
      </div>
      <p className="text-xl text-muted-foreground">{stat.label}</p>
    </motion.div>
  );
}
