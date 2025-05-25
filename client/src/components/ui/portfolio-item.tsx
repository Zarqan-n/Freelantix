import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Eye, ArrowUpRight, Calendar, Building, Sparkles, Zap } from "lucide-react";
import MagneticWrapper from "./magnetic-wrapper";
import InteractiveCursor from "./interactive-cursor";
import HolographicCard from "./holographic-card";
import LiquidMorph from "./liquid-morph";

interface PortfolioItemProps {
  item: {
    id: number;
    title: string;
    description: string;
    image: string;
    category: string;
    technologies: string[];
    industry: string;
  };
  index: number;
}

export default function PortfolioItem({ item, index }: PortfolioItemProps) {
  const getColorForTech = (tech: string, techIndex: number) => {
    const colors = ["neon-blue", "neon-green", "neon-pink"];
    return colors[techIndex % colors.length];
  };

  return (
    <InteractiveCursor glowColor="#1ae7ff">
      <MagneticWrapper strength={0.15} className="portfolio-item">
        <motion.div
          layout
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 50, scale: 0.9 }}
          whileHover={{ 
            y: -15,
            scale: 1.02,
            rotateX: 5,
            rotateY: 5,
            transition: { type: "spring", stiffness: 300, damping: 20 }
          }}
          transition={{ 
            duration: 0.8, 
            delay: index * 0.15,
            type: "spring",
            stiffness: 100
          }}
          className="relative group overflow-hidden rounded-3xl cursor-pointer"
          style={{ perspective: "1000px" }}
        >
          <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-card/95 via-card to-card/90 backdrop-blur-sm border border-border/30 shadow-2xl">
      {/* Multi-layered enhanced glow effect */}
      <motion.div 
        className="absolute -inset-2 rounded-3xl bg-gradient-to-r from-neon-blue/60 via-neon-purple/60 to-neon-pink/60 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-2xl"
        animate={{ 
          rotate: [0, 360],
          scale: [1, 1.05, 1]
        }}
        transition={{ 
          duration: 6, 
          repeat: Infinity, 
          ease: "linear",
          repeatType: "loop"
        }}
      />
      <motion.div 
        className="absolute -inset-1 rounded-3xl bg-gradient-to-l from-neon-pink/40 via-neon-green/40 to-neon-blue/40 opacity-0 group-hover:opacity-80 transition-opacity duration-500 blur-xl"
        animate={{ 
          rotate: [360, 0],
          scale: [1.02, 0.98, 1.02]
        }}
        transition={{ 
          duration: 4, 
          repeat: Infinity, 
          ease: "easeInOut",
          repeatType: "loop"
        }}
      />
      
            {/* Enhanced glow effects */}
            <motion.div 
              className="absolute -inset-2 rounded-3xl bg-gradient-to-r from-neon-blue/50 via-neon-purple/50 to-neon-pink/50 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-2xl"
              animate={{ 
                rotate: [0, 360],
                scale: [1, 1.05, 1]
              }}
              transition={{ 
                duration: 6, 
                repeat: Infinity, 
                ease: "linear"
              }}
            />
            
            {/* Animated mesh gradient overlay */}
            <motion.div
              className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-1000"
              style={{
                background: `conic-gradient(from ${index * 45}deg, #1ae7ff, #39ff14, #ff1493, #1ae7ff)`
              }}
              animate={{
                background: `conic-gradient(from ${(index * 45) + 360}deg, #1ae7ff, #39ff14, #ff1493, #1ae7ff)`
              }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            />
        {/* Image section with enhanced overlay */}
        <div className="relative h-72 overflow-hidden">
          <motion.img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.08 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            loading="lazy"
          />
          
          {/* Multi-layer gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/30 to-transparent" />
          <motion.div 
            className="absolute inset-0 bg-gradient-to-br from-neon-blue/20 via-transparent to-neon-pink/20 opacity-0 group-hover:opacity-100 transition-all duration-700"
          />
          
          {/* Floating action buttons */}
          <motion.div
            className="absolute top-6 right-6 flex gap-3 opacity-0 group-hover:opacity-100"
            initial={{ y: -20, opacity: 0 }}
            whileHover={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <motion.button
              className="p-3 bg-background/90 backdrop-blur-md rounded-full text-neon-blue hover:bg-neon-blue hover:text-background transition-all duration-300 shadow-lg"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              <Eye size={18} />
            </motion.button>
            <motion.button
              className="p-3 bg-background/90 backdrop-blur-md rounded-full text-neon-green hover:bg-neon-green hover:text-background transition-all duration-300 shadow-lg"
              whileHover={{ scale: 1.1, rotate: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <ExternalLink size={18} />
            </motion.button>
          </motion.div>
          
          {/* Industry & Category badges */}
          <motion.div
            className="absolute top-6 left-6 flex flex-col gap-2"
            initial={{ x: -30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <Badge className="bg-background/90 backdrop-blur-md text-foreground border border-border/50 shadow-lg flex items-center gap-1">
              <Building size={12} />
              {item.industry}
            </Badge>
            <Badge variant="outline" className="bg-neon-blue/20 text-neon-blue border-neon-blue/40 backdrop-blur-md">
              {item.category}
            </Badge>
          </motion.div>
        </div>
        
        {/* Content section */}
        <div className="p-8">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <motion.h3
              className="text-2xl font-bold mb-3 group-hover:text-neon-blue transition-all duration-500 flex items-center gap-2"
              whileHover={{ x: 5 }}
              transition={{ duration: 0.3 }}
            >
              {item.title}
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                whileHover={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
              >
                <ArrowUpRight size={20} className="text-neon-blue" />
              </motion.div>
            </motion.h3>
            
            <p className="text-muted-foreground mb-6 leading-relaxed text-sm">
              {item.description}
            </p>
          </motion.div>
          
          {/* Technologies with enhanced styling */}
          <motion.div
            className="mb-8"
            initial={{ y: 15, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="flex flex-wrap gap-2">
              {item.technologies.map((tech, techIndex) => (
                <motion.div
                  key={tech}
                  initial={{ scale: 0.8, opacity: 0, rotate: -5 }}
                  whileInView={{ scale: 1, opacity: 1, rotate: 0 }}
                  transition={{ 
                    duration: 0.5, 
                    delay: techIndex * 0.1,
                    type: "spring",
                    stiffness: 200
                  }}
                  whileHover={{ 
                    scale: 1.1, 
                    rotate: 2,
                    transition: { duration: 0.2 }
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Badge
                    variant="secondary"
                    className={`bg-${getColorForTech(tech, techIndex)}/20 text-${getColorForTech(tech, techIndex)} border-${getColorForTech(tech, techIndex)}/30 backdrop-blur-sm hover:bg-${getColorForTech(tech, techIndex)}/30 transition-all duration-300 shadow-sm px-3 py-1`}
                  >
                    {tech}
                  </Badge>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          {/* Enhanced CTA button */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <motion.button
              className="group/btn relative overflow-hidden px-8 py-4 bg-gradient-to-r from-neon-blue/20 to-neon-green/20 backdrop-blur-sm rounded-2xl font-semibold border border-neon-blue/30 hover:border-neon-blue/60 transition-all duration-500 w-full shadow-lg"
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 20px 40px rgba(26,231,255,0.2)"
              }}
              whileTap={{ scale: 0.98 }}
            >
              <motion.span
                className="relative z-10 flex items-center justify-center gap-3 text-foreground group-hover/btn:text-neon-blue transition-colors duration-300"
                whileHover={{ x: 3 }}
                transition={{ duration: 0.2 }}
              >
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                >
                  <Sparkles size={18} />
                </motion.div>
                View Project Details
                <motion.div
                  animate={{ 
                    x: [0, 5, 0],
                    rotate: [0, 15, 0]
                  }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                >
                  <Zap size={18} />
                </motion.div>
              </motion.span>
              
              {/* Button glow effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-neon-blue/40 to-neon-green/40 opacity-0 group-hover/btn:opacity-100 rounded-2xl"
                initial={{ x: "-100%" }}
                whileHover={{ x: "0%" }}
                transition={{ duration: 0.6 }}
              />
            </motion.button>
          </motion.div>
        </div>
        
        {/* Enhanced decorative elements with animations */}
        <motion.div
          className="absolute top-0 right-0 w-40 h-40 opacity-0 group-hover:opacity-100"
          initial={{ scale: 0, rotate: -180 }}
          whileHover={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <motion.div 
            className="absolute top-8 right-8 w-5 h-5 bg-neon-blue rounded-full shadow-lg shadow-neon-blue/50" 
            animate={{ 
              scale: [1, 1.3, 1],
              boxShadow: [
                "0 0 10px rgba(26,231,255,0.5)",
                "0 0 20px rgba(26,231,255,0.8)",
                "0 0 10px rgba(26,231,255,0.5)"
              ]
            }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div 
            className="absolute top-4 right-16 w-3 h-3 bg-neon-green rounded-full" 
            animate={{ 
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360]
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          />
          <motion.div 
            className="absolute top-16 right-4 w-3 h-3 bg-neon-pink rounded-full" 
            animate={{ 
              scale: [1, 1.4, 1],
              y: [0, -5, 0]
            }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          />
          <motion.div 
            className="absolute top-12 right-12 w-2 h-2 bg-neon-blue rounded-full" 
            animate={{ 
              opacity: [0.5, 1, 0.5],
              scale: [0.8, 1.2, 0.8]
            }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
          />
          
          {/* Additional floating geometric shapes */}
          <motion.div
            className="absolute top-6 right-10 w-1 h-6 bg-gradient-to-b from-neon-blue to-transparent opacity-60"
            animate={{ 
              scaleY: [1, 1.5, 1],
              opacity: [0.6, 1, 0.6]
            }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
          />
          <motion.div
            className="absolute top-10 right-6 w-6 h-1 bg-gradient-to-r from-neon-green to-transparent opacity-60"
            animate={{ 
              scaleX: [1, 1.5, 1],
              opacity: [0.6, 1, 0.6]
            }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
          />
        </motion.div>
        
        {/* Corner accent with morphing effect */}
        <motion.div
          className="absolute bottom-0 left-0 w-20 h-20 opacity-0 group-hover:opacity-60"
          initial={{ scale: 0, rotate: 180 }}
          whileHover={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <motion.div
            className="absolute bottom-4 left-4 w-8 h-1 bg-gradient-to-r from-neon-pink to-transparent rounded-full"
            animate={{ 
              scaleX: [1, 1.5, 1],
              opacity: [0.4, 0.8, 0.4]
            }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-2 left-8 w-1 h-8 bg-gradient-to-t from-neon-green to-transparent rounded-full"
            animate={{ 
              scaleY: [1, 1.3, 1],
              opacity: [0.4, 0.8, 0.4]
            }}
            transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          />
        </motion.div>
          </div>
        </motion.div>
      </MagneticWrapper>
    </InteractiveCursor>
  );
}
