import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Eye, ArrowUpRight, Building, Sparkles, Zap } from "lucide-react";

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

export default function PortfolioItemEnhanced({ item, index }: PortfolioItemProps) {
  const getColorForTech = (tech: string, techIndex: number) => {
    const colors = ["neon-blue", "neon-green", "neon-pink"];
    return colors[techIndex % colors.length];
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 50, scale: 0.9 }}
      whileHover={{ 
        y: -20,
        scale: 1.03,
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
      className="portfolio-item relative group overflow-hidden rounded-3xl cursor-pointer"
      style={{ perspective: "1000px" }}
    >
      {/* Multi-layered premium glow effects */}
      <motion.div 
        className="absolute -inset-3 rounded-3xl bg-gradient-to-r from-neon-blue/60 via-neon-purple/60 to-neon-pink/60 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-3xl"
        animate={{ 
          rotate: [0, 360],
          scale: [1, 1.1, 1]
        }}
        transition={{ 
          duration: 8, 
          repeat: Infinity, 
          ease: "linear"
        }}
      />
      <motion.div 
        className="absolute -inset-2 rounded-3xl bg-gradient-to-l from-neon-pink/50 via-neon-green/50 to-neon-blue/50 opacity-0 group-hover:opacity-80 transition-opacity duration-500 blur-2xl"
        animate={{ 
          rotate: [360, 0],
          scale: [1.05, 0.95, 1.05]
        }}
        transition={{ 
          duration: 6, 
          repeat: Infinity, 
          ease: "easeInOut"
        }}
      />
      
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-card/95 via-card to-card/90 backdrop-blur-sm border border-border/30 shadow-2xl group">
        {/* Animated mesh gradient overlay */}
        <motion.div
          className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-1000"
          style={{
            background: `conic-gradient(from ${index * 60}deg, #1ae7ff, #39ff14, #ff1493, #1ae7ff)`
          }}
          animate={{
            background: `conic-gradient(from ${(index * 60) + 360}deg, #1ae7ff, #39ff14, #ff1493, #1ae7ff)`
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
        />
        
        {/* Image section with enhanced overlay */}
        <div className="relative h-72 overflow-hidden">
          <motion.img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            loading="lazy"
          />
          
          {/* Multi-layer gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/30 to-transparent" />
          <motion.div 
            className="absolute inset-0 bg-gradient-to-br from-neon-blue/30 via-transparent to-neon-pink/30 opacity-0 group-hover:opacity-100 transition-all duration-700"
          />
          
          {/* Premium floating action buttons */}
          <motion.div
            className="absolute top-6 right-6 flex gap-3 opacity-0 group-hover:opacity-100"
            initial={{ y: -20, opacity: 0 }}
            whileHover={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <motion.button
              className="p-3 bg-background/90 backdrop-blur-md rounded-full text-neon-blue hover:bg-neon-blue hover:text-background transition-all duration-300 shadow-lg"
              whileHover={{ scale: 1.2, rotate: 10 }}
              whileTap={{ scale: 0.9 }}
            >
              <Eye size={20} />
            </motion.button>
            <motion.button
              className="p-3 bg-background/90 backdrop-blur-md rounded-full text-neon-green hover:bg-neon-green hover:text-background transition-all duration-300 shadow-lg"
              whileHover={{ scale: 1.2, rotate: -10 }}
              whileTap={{ scale: 0.9 }}
            >
              <ExternalLink size={20} />
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
              <Building size={14} />
              {item.industry}
            </Badge>
            <Badge variant="outline" className="bg-neon-blue/30 text-neon-blue border-neon-blue/50 backdrop-blur-md">
              {item.category}
            </Badge>
          </motion.div>
          
          {/* Premium floating particles */}
          <motion.div
            className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100"
            transition={{ duration: 0.8 }}
          >
            {[...Array(12)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute rounded-full"
                style={{
                  left: `${15 + (i * 8)}%`,
                  top: `${25 + (i % 4) * 20}%`,
                  width: i % 3 === 0 ? '4px' : '3px',
                  height: i % 3 === 0 ? '4px' : '3px',
                  backgroundColor: i % 3 === 0 ? '#1ae7ff' : i % 3 === 1 ? '#39ff14' : '#ff1493',
                  boxShadow: `0 0 ${i % 3 === 0 ? '10px' : '8px'} ${i % 3 === 0 ? '#1ae7ff' : i % 3 === 1 ? '#39ff14' : '#ff1493'}`
                }}
                animate={{
                  y: [-25, -70, -25],
                  x: [0, (i % 2 === 0 ? 20 : -20), 0],
                  opacity: [0, 1, 0],
                  scale: [0.3, 1.8, 0.3],
                  rotate: [0, 360, 720]
                }}
                transition={{
                  duration: 5 + i * 0.3,
                  repeat: Infinity,
                  delay: i * 0.2,
                  ease: "easeInOut"
                }}
              />
            ))}
            
            {/* Enhanced sparkles */}
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={`sparkle-${i}`}
                className="absolute text-xl"
                style={{
                  left: `${20 + i * 15}%`,
                  top: `${20 + i * 15}%`,
                  color: i % 3 === 0 ? '#1ae7ff' : i % 3 === 1 ? '#39ff14' : '#ff1493'
                }}
                animate={{
                  scale: [0, 1.5, 0],
                  rotate: [0, 180, 360],
                  opacity: [0, 1, 0],
                  y: [0, -15, 0]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: i * 0.4,
                  ease: "easeInOut"
                }}
              >
                {i % 3 === 0 ? '✨' : i % 3 === 1 ? '⭐' : '💫'}
              </motion.div>
            ))}
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
                <ArrowUpRight size={22} className="text-neon-blue" />
              </motion.div>
            </motion.h3>
            
            <p className="text-muted-foreground mb-6 leading-relaxed">
              {item.description}
            </p>
          </motion.div>
          
          {/* Enhanced Technologies section */}
          <motion.div
            className="mb-8"
            initial={{ y: 15, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="flex flex-wrap gap-3">
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
                    scale: 1.15, 
                    rotate: 3,
                    transition: { duration: 0.2 }
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Badge
                    variant="secondary"
                    className={`bg-${getColorForTech(tech, techIndex)}/25 text-${getColorForTech(tech, techIndex)} border-${getColorForTech(tech, techIndex)}/40 backdrop-blur-sm hover:bg-${getColorForTech(tech, techIndex)}/35 transition-all duration-300 shadow-sm px-4 py-2 font-medium`}
                  >
                    {tech}
                  </Badge>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          {/* Premium CTA button */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <motion.button
              className="group/btn relative overflow-hidden px-8 py-4 bg-gradient-to-r from-neon-blue/25 to-neon-green/25 backdrop-blur-sm rounded-2xl font-bold border border-neon-blue/40 hover:border-neon-blue/70 transition-all duration-500 w-full shadow-xl"
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 25px 50px rgba(26,231,255,0.3)"
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
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                >
                  <Sparkles size={20} />
                </motion.div>
                View Project Details
                <motion.div
                  animate={{ 
                    x: [0, 6, 0],
                    rotate: [0, 20, 0]
                  }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                  <Zap size={20} />
                </motion.div>
              </motion.span>
              
              {/* Button glow effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-neon-blue/50 to-neon-green/50 opacity-0 group-hover/btn:opacity-100 rounded-2xl"
                initial={{ x: "-100%" }}
                whileHover={{ x: "0%" }}
                transition={{ duration: 0.7 }}
              />
            </motion.button>
          </motion.div>
        </div>
        
        {/* Premium decorative elements */}
        <motion.div
          className="absolute top-0 right-0 w-40 h-40 opacity-0 group-hover:opacity-100"
          initial={{ scale: 0, rotate: -180 }}
          whileHover={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.div 
            className="absolute top-8 right-8 w-6 h-6 bg-neon-blue rounded-full shadow-xl" 
            animate={{ 
              scale: [1, 1.4, 1],
              boxShadow: [
                "0 0 15px rgba(26,231,255,0.6)",
                "0 0 30px rgba(26,231,255,0.9)",
                "0 0 15px rgba(26,231,255,0.6)"
              ]
            }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div 
            className="absolute top-4 right-16 w-4 h-4 bg-neon-green rounded-full" 
            animate={{ 
              scale: [1, 1.3, 1],
              rotate: [0, 180, 360]
            }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          />
          <motion.div 
            className="absolute top-16 right-4 w-4 h-4 bg-neon-pink rounded-full" 
            animate={{ 
              scale: [1, 1.5, 1],
              y: [0, -8, 0]
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          />
        </motion.div>
      </div>
    </motion.div>
  );
}