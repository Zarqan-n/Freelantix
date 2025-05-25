import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Eye, ArrowUpRight, Calendar, Building } from "lucide-react";

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
    <motion.div
      layout
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 50, scale: 0.9 }}
      whileHover={{ 
        y: -12,
        transition: { type: "spring", stiffness: 300, damping: 20 }
      }}
      transition={{ 
        duration: 0.8, 
        delay: index * 0.15,
        type: "spring",
        stiffness: 100
      }}
      className="portfolio-item relative group overflow-hidden rounded-3xl cursor-pointer"
    >
      {/* Enhanced glow effect */}
      <motion.div 
        className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-neon-blue/50 via-neon-purple/50 to-neon-pink/50 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-xl"
        animate={{ 
          rotate: [0, 360],
        }}
        transition={{ 
          duration: 8, 
          repeat: Infinity, 
          ease: "linear",
          repeatType: "loop"
        }}
      />
      
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-card/95 via-card to-card/90 backdrop-blur-sm border border-border/30 shadow-2xl">
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
                <Eye size={18} />
                View Project Details
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                >
                  <ArrowUpRight size={18} />
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
        
        {/* Decorative elements */}
        <motion.div
          className="absolute top-0 right-0 w-32 h-32 opacity-0 group-hover:opacity-100"
          initial={{ scale: 0, rotate: -180 }}
          whileHover={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <div className="absolute top-8 right-8 w-4 h-4 bg-neon-blue rounded-full shadow-lg shadow-neon-blue/50" />
          <div className="absolute top-4 right-16 w-2 h-2 bg-neon-green rounded-full" />
          <div className="absolute top-16 right-4 w-2 h-2 bg-neon-pink rounded-full" />
          <div className="absolute top-12 right-12 w-1 h-1 bg-neon-blue rounded-full" />
        </motion.div>
      </div>
    </motion.div>
  );
}
