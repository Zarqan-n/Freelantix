import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";

interface ServiceCardProps {
  service: {
    icon: React.ComponentType<{ size?: number }>;
    title: string;
    description: string;
    color: string;
  };
  index: number;
}

export default function ServiceCard({ service, index }: ServiceCardProps) {
  const Icon = service.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="service-card"
    >
      <Card className="bg-card border-border h-full group hover:shadow-2xl transition-all duration-300 cursor-pointer">
        <CardContent className="p-8 text-center h-full flex flex-col">
          <motion.div
            className={`text-5xl ${service.color} mb-6 group-hover:scale-110 transition-transform duration-300`}
            whileHover={{ scale: 1.1 }}
          >
            <Icon size={48} />
          </motion.div>
          
          <h3 className="text-xl font-bold mb-4">{service.title}</h3>
          
          <p className="text-muted-foreground mb-6 flex-grow">
            {service.description}
          </p>
          
          <Link href="/services">
            <span className={`${service.color} hover:text-foreground transition-colors duration-300 cursor-pointer`}>
              Learn More →
            </span>
          </Link>
        </CardContent>
      </Card>
    </motion.div>
  );
}
