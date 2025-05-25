import { motion } from "framer-motion";

export default function AnimatedBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Gradient Background */}
      <div className="hero-gradient absolute inset-0 opacity-30"></div>
      
      {/* Floating Geometric Shapes */}
      <motion.div
        className="absolute top-20 left-10 w-20 h-20 border border-neon-green/30 rotate-45"
        animate={{ 
          y: [0, -20, 0],
          rotate: [45, 60, 45]
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div
        className="absolute top-40 right-20 w-16 h-16 border border-neon-pink/30"
        animate={{ 
          y: [0, -20, 0],
          rotate: [0, 15, 0]
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      />
      
      <motion.div
        className="absolute bottom-40 left-20 w-12 h-12 border border-neon-blue/30 rotate-12"
        animate={{ 
          y: [0, -20, 0],
          rotate: [12, 27, 12]
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 4
        }}
      />
      
      {/* Additional floating particles */}
      <motion.div
        className="absolute top-32 right-32 w-4 h-4 bg-neon-blue/40 rounded-full"
        animate={{ 
          y: [0, -30, 0],
          opacity: [0.4, 0.8, 0.4]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div
        className="absolute bottom-32 right-16 w-6 h-6 bg-neon-green/40 rounded-full"
        animate={{ 
          y: [0, -25, 0],
          opacity: [0.4, 0.8, 0.4]
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />
      
      <motion.div
        className="absolute top-60 left-32 w-3 h-3 bg-neon-pink/40 rounded-full"
        animate={{ 
          y: [0, -20, 0],
          opacity: [0.4, 0.8, 0.4]
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 3
        }}
      />
    </div>
  );
}
