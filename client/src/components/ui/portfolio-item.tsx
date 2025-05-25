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
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="portfolio-item relative group overflow-hidden rounded-xl cursor-pointer"
    >
      <motion.img
        src={item.image}
        alt={item.title}
        className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
        loading="lazy"
      />
      
      <motion.div
        className="overlay absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent opacity-0 flex items-end p-6 transition-opacity duration-300"
        whileHover={{ opacity: 1 }}
      >
        <div className="text-white w-full">
          <motion.h3
            className="text-xl font-semibold mb-2"
            initial={{ y: 20 }}
            whileHover={{ y: 0 }}
            transition={{ duration: 0.3 }}
          >
            {item.title}
          </motion.h3>
          
          <motion.p
            className="text-gray-300 mb-4"
            initial={{ y: 20 }}
            whileHover={{ y: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            {item.description}
          </motion.p>
          
          <motion.div
            className="flex flex-wrap gap-2"
            initial={{ y: 20 }}
            whileHover={{ y: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
          >
            {item.technologies.map((tech, techIndex) => (
              <Badge
                key={tech}
                variant="secondary"
                className={`bg-${getColorForTech(tech, techIndex)}/20 text-${getColorForTech(tech, techIndex)} border-${getColorForTech(tech, techIndex)}/30`}
              >
                {tech}
              </Badge>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}
