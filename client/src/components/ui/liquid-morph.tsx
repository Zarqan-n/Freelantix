import { motion } from "framer-motion";

interface LiquidMorphProps {
  className?: string;
  color?: string;
}

export default function LiquidMorph({ className, color = "#1ae7ff" }: LiquidMorphProps) {
  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 400 400"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="liquidGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={color} stopOpacity="0.1" />
            <stop offset="50%" stopColor={color} stopOpacity="0.3" />
            <stop offset="100%" stopColor={color} stopOpacity="0.1" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge> 
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        
        <motion.path
          d="M50,200 Q150,100 250,200 T450,200 Q350,300 250,200 T50,200"
          fill="url(#liquidGradient)"
          filter="url(#glow)"
          animate={{
            d: [
              "M50,200 Q150,100 250,200 T450,200 Q350,300 250,200 T50,200",
              "M50,180 Q170,120 270,180 T470,180 Q330,280 230,180 T50,180",
              "M50,220 Q130,80 230,220 T430,220 Q370,320 270,220 T50,220",
              "M50,200 Q150,100 250,200 T450,200 Q350,300 250,200 T50,200"
            ]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <motion.circle
          cx="100"
          cy="200"
          r="3"
          fill={color}
          opacity="0.6"
          animate={{
            cx: [100, 300, 100],
            cy: [200, 150, 200],
            r: [3, 8, 3]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <motion.circle
          cx="300"
          cy="200"
          r="2"
          fill={color}
          opacity="0.4"
          animate={{
            cx: [300, 100, 300],
            cy: [200, 250, 200],
            r: [2, 6, 2]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
      </svg>
    </div>
  );
}