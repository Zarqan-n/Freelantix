import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

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
        y: -8,
        transition: { type: "spring", stiffness: 300, damping: 20 }
      }}
      transition={{ 
        duration: 0.8, 
        delay: index * 0.2,
        type: "spring",
        stiffness: 100
      }}
      className="portfolio-item relative group overflow-hidden rounded-2xl cursor-pointer shadow-lg"
    >
      {/* Premium border effect */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink opacity-0 group-hover:opacity-50 transition-opacity duration-500 blur-sm" />
      
      <div className="relative rounded-2xl overflow-hidden bg-background">
        <motion.img
          src={item.image}
          alt={item.title}
          className="w-full h-64 object-cover"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          loading="lazy"
        />
        
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Content overlay */}
        <motion.div
          className="absolute inset-0 flex items-end p-6"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <div className="text-white w-full">
            <motion.div
              className="mb-2 inline-block px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-medium"
              initial={{ y: 20, opacity: 0 }}
              whileHover={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              {item.category}
            </motion.div>
            
            <motion.h3
              className="text-xl font-bold mb-2 text-gradient-primary"
              initial={{ y: 20, opacity: 0 }}
              whileHover={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.2 }}
            >
              {item.title}
            </motion.h3>
            
            <motion.p
              className="text-gray-200 mb-4 text-sm leading-relaxed"
              initial={{ y: 20, opacity: 0 }}
              whileHover={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.3 }}
            >
              {item.description}
            </motion.p>
            
            <motion.div
              className="flex flex-wrap gap-2"
              initial={{ y: 20, opacity: 0 }}
              whileHover={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.4 }}
            >
              {item.technologies.map((tech, techIndex) => (
                <motion.div
                  key={tech}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Badge
                    variant="secondary"
                    className={`bg-${getColorForTech(tech, techIndex)}/20 text-${getColorForTech(tech, techIndex)} border-${getColorForTech(tech, techIndex)}/30 backdrop-blur-sm`}
                  >
                    {tech}
                  </Badge>
                </motion.div>
              ))}
            </motion.div>
            
            {/* View Project Button */}
            <motion.div
              className="mt-4"
              initial={{ y: 20, opacity: 0 }}
              whileHover={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.5 }}
            >
              <motion.button
                className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-lg text-sm font-medium hover:bg-white/20 transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Project →
              </motion.button>
            </motion.div>
          </div>
        </motion.div>
        
        {/* Corner accent */}
        <motion.div
          className="absolute top-4 right-4 w-3 h-3 bg-neon-blue rounded-full opacity-0 group-hover:opacity-100"
          initial={{ scale: 0 }}
          whileHover={{ scale: 1 }}
          transition={{ duration: 0.3, delay: 0.6 }}
        />
      </div>
    </motion.div>
  );
}
