import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";

interface ServiceCardProps {
  service: {
    icon: React.ComponentType<any>;
    title: string;
    description: string;
    color: string;
    link?: string;
  };
  index: number;
}

export default function ServiceCard({ service, index }: ServiceCardProps) {
  const Icon = service.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
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
      className="service-card"
    >
      <Card className="card-premium h-full group cursor-pointer relative overflow-hidden">
        {/* Animated background glow */}
        <motion.div
          className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500"
          style={{
            background: `radial-gradient(circle at center, ${service.color.replace('text-', 'rgba(26,231,255,')} 0.2), transparent 70%)`
          }}
        />
        
        <CardContent className="p-8 text-center h-full flex flex-col relative z-10">
          <motion.div
            className={`text-5xl ${service.color} mb-6 relative`}
            whileHover={{ 
              scale: 1.2,
              rotate: [0, -5, 5, 0],
              transition: { duration: 0.5 }
            }}
            whileTap={{ scale: 0.95 }}
          >
            <Icon size={48} />
            
            {/* Pulse effect on hover */}
            <motion.div
              className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-30"
              initial={{ scale: 0.8 }}
              whileHover={{ 
                scale: [0.8, 1.4, 0.8],
                opacity: [0, 0.3, 0],
                transition: { duration: 1, repeat: Infinity }
              }}
              style={{
                background: `radial-gradient(circle, ${service.color.replace('text-', 'rgba(26,231,255,')} 0.3), transparent 70%)`
              }}
            />
          </motion.div>
          
          <motion.h3 
            className="text-xl font-bold mb-4 group-hover:text-gradient-primary transition-all duration-300"
            whileHover={{ scale: 1.05 }}
          >
            {service.title}
          </motion.h3>
          
          <motion.p 
            className="text-muted-foreground mb-6 flex-grow leading-relaxed"
            initial={{ opacity: 0.8 }}
            whileHover={{ opacity: 1 }}
          >
            {service.description}
          </motion.p>
          
          <Link href={service.link || "/services"}>
            <motion.span 
              className={`${service.color} hover:text-foreground transition-all duration-300 cursor-pointer font-semibold relative inline-block`}
              whileHover={{ 
                x: 5,
                transition: { type: "spring", stiffness: 400, damping: 10 }
              }}
              whileTap={{ scale: 0.95 }}
            >
              Learn More 
              <motion.span
                className="inline-block ml-2"
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              >
                →
              </motion.span>
              
              {/* Underline animation */}
              <motion.div
                className="absolute bottom-0 left-0 h-0.5 bg-current"
                initial={{ width: 0 }}
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.3 }}
              />
            </motion.span>
          </Link>
        </CardContent>
      </Card>
    </motion.div>
  );
}
