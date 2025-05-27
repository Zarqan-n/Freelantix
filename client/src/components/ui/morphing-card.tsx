import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface MorphingCardProps {
  children: React.ReactNode;
  hoverContent?: React.ReactNode;
  className?: string;
  morphOnHover?: boolean;
}

export default function MorphingCard({ 
  children, 
  hoverContent, 
  className = "",
  morphOnHover = true 
}: MorphingCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  const cardVariants = {
    initial: {
      borderRadius: "1.5rem",
      scale: 1,
      rotateX: 0,
      rotateY: 0,
    },
    hover: {
      borderRadius: "2rem",
      scale: 1.05,
      rotateX: 5,
      rotateY: 5,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 300
      }
    }
  };

  const contentVariants = {
    initial: { 
      opacity: 1, 
      y: 0,
      scale: 1
    },
    hover: { 
      opacity: hoverContent ? 0 : 1, 
      y: hoverContent ? -20 : 0,
      scale: hoverContent ? 0.9 : 1,
      transition: {
        duration: 0.3
      }
    }
  };

  const hoverContentVariants = {
    initial: { 
      opacity: 0, 
      y: 20,
      scale: 0.9
    },
    hover: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.3,
        delay: 0.1
      }
    }
  };

  return (
    <motion.div
      className={`relative perspective-1000 ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        variants={morphOnHover ? cardVariants : {}}
        initial="initial"
        animate={isHovered ? "hover" : "initial"}
        className="relative preserve-3d"
      >
        {/* Glowing border effect */}
        <motion.div
          className="absolute inset-0 rounded-3xl bg-gradient-to-r from-neon-blue/20 via-neon-pink/20 to-neon-green/20 blur-sm"
          animate={{
            opacity: isHovered ? 1 : 0,
            scale: isHovered ? 1.02 : 1
          }}
          transition={{ duration: 0.3 }}
        />

        {/* Main card content */}
        <motion.div
          className="relative bg-card/80 backdrop-blur-xl border border-border/30 rounded-3xl overflow-hidden"
          style={{
            boxShadow: isHovered 
              ? '0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 30px rgba(26, 231, 255, 0.1)'
              : '0 10px 25px -3px rgba(0, 0, 0, 0.1)'
          }}
        >
          {/* Ambient lighting effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent"
            animate={{
              opacity: isHovered ? 1 : 0
            }}
            transition={{ duration: 0.5 }}
          />

          {/* Default content */}
          <motion.div
            variants={contentVariants}
            initial="initial"
            animate={isHovered ? "hover" : "initial"}
          >
            {children}
          </motion.div>

          {/* Hover content overlay */}
          <AnimatePresence>
            {hoverContent && isHovered && (
              <motion.div
                className="absolute inset-0"
                variants={hoverContentVariants}
                initial="initial"
                animate="hover"
                exit="initial"
              >
                {hoverContent}
              </motion.div>
            )}
          </AnimatePresence>

          {/* Ripple effect on hover */}
          <motion.div
            className="absolute inset-0 rounded-3xl"
            style={{
              background: 'radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(26, 231, 255, 0.1) 0%, transparent 50%)'
            }}
            animate={{
              opacity: isHovered ? 1 : 0
            }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}