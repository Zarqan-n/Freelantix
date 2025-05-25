import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import PortfolioItem from "@/components/ui/portfolio-item";

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

      {/* Portfolio Grid */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-6">
          <motion.div
            layout
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredItems.map((item, index) => (
              <PortfolioItem key={item.id} item={item} index={index} />
            ))}
          </motion.div>
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
