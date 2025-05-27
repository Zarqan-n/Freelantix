import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import PortfolioItemEnhanced from "@/components/ui/portfolio-item-enhanced";
import ParticleSystem from "@/components/ui/particle-system";
import MagneticWrapper from "@/components/ui/magnetic-wrapper";
import { Search, Filter, ArrowRight } from "lucide-react";
import { Input } from "@/components/ui/input";

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
  const [searchTerm, setSearchTerm] = useState("");

  const filteredItems = portfolioItems
    .filter(item => activeFilter === "all" || item.category === activeFilter)
    .filter(item => 
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.technologies.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()))
    );

  return (
    <div className="pt-20">
      {/* Hero Section with Enhanced Design */}
      <section className="py-32 bg-gradient-to-br from-background via-background to-muted/30 relative overflow-hidden">
        <ParticleSystem particleCount={30} />
        
        <div className="absolute inset-0 opacity-20">
          <motion.div 
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-blue/20 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div 
            className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-neon-pink/20 rounded-full blur-3xl"
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h1 className="text-5xl lg:text-7xl font-black mb-8 leading-tight">
                Our <span className="text-gradient-primary">Portfolio</span>
              </h1>
              <p className="text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto mb-12 leading-relaxed">
                Discover our exceptional work showcasing cutting-edge solutions that transform businesses and delight users across industries
              </p>
            </motion.div>

            {/* Enhanced Search and Filter Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="max-w-2xl mx-auto"
            >
              <div className="relative mb-8">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={20} />
                <Input
                  placeholder="Search projects, technologies, or industries..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-12 pr-4 py-4 text-lg bg-background/80 backdrop-blur-sm border-2 border-muted hover:border-neon-blue/50 focus:border-neon-blue transition-all duration-300 rounded-2xl"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Enhanced Filter Buttons */}
      <section className="py-12 bg-gradient-to-r from-muted/50 to-muted/30 backdrop-blur-sm sticky top-20 z-30 border-b border-border/50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <div className="flex items-center gap-2 mr-6">
              <Filter size={20} className="text-muted-foreground" />
              <span className="text-sm font-medium text-muted-foreground">Filter by:</span>
            </div>
            {filters.map((filter, index) => (
              <MagneticWrapper key={filter.id}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <Button
                    variant={activeFilter === filter.id ? "default" : "outline"}
                    onClick={() => setActiveFilter(filter.id)}
                    className={`
                      relative px-6 py-3 rounded-full font-semibold transition-all duration-300
                      ${activeFilter === filter.id
                        ? "bg-gradient-to-r from-neon-blue to-neon-green text-background shadow-lg shadow-neon-blue/25 border-0"
                        : "border-2 border-neon-blue/30 text-neon-blue hover:border-neon-blue hover:bg-neon-blue/10 hover:scale-105"
                      }
                    `}
                  >
                    {filter.label}
                    {activeFilter === filter.id && (
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-neon-blue/20 to-neon-green/20 rounded-full blur-lg -z-10"
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                    )}
                  </Button>
                </motion.div>
              </MagneticWrapper>
            ))}
          </motion.div>
          
          {/* Results Counter */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center mt-6"
          >
            <span className="text-sm text-muted-foreground">
              Showing {filteredItems.length} of {portfolioItems.length} projects
            </span>
          </motion.div>
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

      {/* Enhanced CTA Section */}
      <section className="py-32 bg-gradient-to-br from-background via-muted/20 to-background relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <motion.div 
            className="absolute top-20 left-20 w-64 h-64 bg-neon-green/20 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div 
            className="absolute bottom-20 right-20 w-80 h-80 bg-neon-blue/20 rounded-full blur-3xl"
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <motion.h2 
              className="text-4xl lg:text-6xl font-black mb-8 leading-tight"
              initial={{ scale: 0.9 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Ready to Start Your <span className="text-gradient-primary">Dream Project?</span>
            </motion.h2>
            
            <motion.p 
              className="text-xl lg:text-2xl mb-12 text-muted-foreground leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Let's collaborate to transform your vision into a stunning digital reality that captivates your audience and drives exceptional results.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            >
              <MagneticWrapper strength={0.3}>
                <Button 
                  size="lg" 
                  className="group px-12 py-6 text-lg font-bold bg-gradient-to-r from-neon-green to-neon-blue text-background hover:scale-105 transition-all duration-300 shadow-lg shadow-neon-green/25 rounded-2xl border-0"
                >
                  Get Started Today
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" size={20} />
                </Button>
              </MagneticWrapper>
              
              <MagneticWrapper strength={0.2}>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="px-12 py-6 text-lg font-semibold border-2 border-neon-blue/50 text-neon-blue hover:bg-neon-blue/10 hover:border-neon-blue hover:scale-105 transition-all duration-300 rounded-2xl"
                >
                  View Case Studies
                </Button>
              </MagneticWrapper>
            </motion.div>

            {/* Trust indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="mt-16 grid grid-cols-3 gap-8 text-center"
            >
              <div>
                <div className="text-3xl font-black text-neon-blue mb-2">100+</div>
                <div className="text-sm text-muted-foreground">Projects Delivered</div>
              </div>
              <div>
                <div className="text-3xl font-black text-neon-green mb-2">98%</div>
                <div className="text-sm text-muted-foreground">Client Satisfaction</div>
              </div>
              <div>
                <div className="text-3xl font-black text-neon-pink mb-2">24/7</div>
                <div className="text-sm text-muted-foreground">Support Available</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
