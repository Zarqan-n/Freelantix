import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import PortfolioItemEnhanced from "@/components/ui/portfolio-item-enhanced";

const portfolioItems = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "Modern online store for fashion retailer",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop&crop=center",
    category: "ecommerce",
    technologies: ["React", "Node.js", "MongoDB"],
    industry: "Retail"
  },
  {
    id: 2,
    title: "Fitness Mobile App",
    description: "iOS/Android app for personal training",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop&crop=center",
    category: "design",
    technologies: ["React Native", "Firebase"],
    industry: "Health & Fitness"
  },
  {
    id: 3,
    title: "Analytics Dashboard",
    description: "Data visualization for tech startup",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&crop=center",
    category: "web",
    technologies: ["Vue.js", "D3.js", "Python"],
    industry: "Technology"
  },
  {
    id: 4,
    title: "Restaurant Platform",
    description: "Online ordering and reservation system",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop&crop=center",
    category: "web",
    technologies: ["Next.js", "Stripe", "PostgreSQL"],
    industry: "Food & Beverage"
  },
  {
    id: 5,
    title: "Real Estate Portal",
    description: "Property listing and management system",
    image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=600&fit=crop&crop=center",
    category: "web",
    technologies: ["Angular", ".NET", "SQL Server"],
    industry: "Real Estate"
  },
  {
    id: 6,
    title: "SaaS Platform",
    description: "Enterprise management solution",
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=600&fit=crop&crop=center",
    category: "web",
    technologies: ["React", "AWS", "GraphQL"],
    industry: "Enterprise"
  }
];

const filters = [
  { id: "all", label: "All Projects" },
  { id: "web", label: "Web Development" },
  { id: "design", label: "UI/UX Design" },
  { id: "ecommerce", label: "eCommerce" }
];

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredItems = activeFilter === "all" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeFilter);

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl lg:text-6xl font-black mb-6">
              Our <span className="neon-pink">Portfolio</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Showcasing our latest projects and innovative solutions for diverse industries
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Buttons */}
      <section className="py-8 bg-muted">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-4">
            {filters.map((filter) => (
              <Button
                key={filter.id}
                variant={activeFilter === filter.id ? "default" : "outline"}
                onClick={() => setActiveFilter(filter.id)}
                className={
                  activeFilter === filter.id
                    ? "bg-neon-blue text-background"
                    : "border-neon-blue text-neon-blue hover:bg-neon-blue hover:text-background"
                }
              >
                {filter.label}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Portfolio Grid with Premium Effects */}
      <section className="py-20 bg-gradient-to-br from-background via-muted/50 to-background relative overflow-hidden">
        {/* Advanced background decorative elements */}
        <div className="absolute inset-0 opacity-40">
          <motion.div 
            className="absolute top-20 left-10 w-72 h-72 bg-neon-blue/20 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.2, 0.5, 0.2],
              x: [0, 50, 0],
              y: [0, -30, 0]
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div 
            className="absolute bottom-20 right-10 w-96 h-96 bg-neon-pink/20 rounded-full blur-3xl"
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.3, 0.6, 0.3],
              x: [0, -40, 0],
              y: [0, 20, 0]
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div 
            className="absolute top-1/2 left-1/2 w-64 h-64 bg-neon-green/20 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"
            animate={{
              scale: [1, 1.4, 1],
              opacity: [0.25, 0.7, 0.25],
              rotate: [0, 180, 360]
            }}
            transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
          />
          
          {/* Floating geometric shapes */}
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-neon-blue/30 rounded-full"
              style={{
                left: `${10 + i * 12}%`,
                top: `${20 + (i % 3) * 25}%`
              }}
              animate={{
                y: [-20, -60, -20],
                opacity: [0, 1, 0],
                scale: [0.5, 1.5, 0.5]
              }}
              transition={{
                duration: 4 + i * 0.5,
                repeat: Infinity,
                delay: i * 0.8,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            layout
            className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 lg:gap-10"
          >
            {filteredItems.map((item, index) => (
              <PortfolioItemEnhanced key={item.id} item={item} index={index} />
            ))}
          </motion.div>
          
          {/* Show more projects button */}
          {filteredItems.length > 0 && (
            <motion.div
              className="text-center mt-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <motion.button
                className="px-8 py-4 bg-gradient-to-r from-neon-blue/20 to-neon-green/20 backdrop-blur-sm rounded-2xl font-semibold border border-neon-blue/30 hover:border-neon-blue/60 transition-all duration-500 shadow-lg hover:shadow-2xl hover:shadow-neon-blue/20"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="flex items-center gap-2">
                  Load More Projects
                  <motion.div
                    animate={{ rotate: [0, 180, 360] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  >
                    ↻
                  </motion.div>
                </span>
              </motion.button>
            </motion.div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Ready to Start Your <span className="neon-green">Project?</span>
            </h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto text-muted-foreground">
              Let's discuss how we can bring your vision to life with our expertise and creativity.
            </p>
            <Button size="lg" className="btn-neon bg-neon-green text-background hover:bg-neon-green/90">
              Get Started Today
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
