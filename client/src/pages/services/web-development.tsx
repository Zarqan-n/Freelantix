import { motion } from "framer-motion";
import { ArrowRight, Code, Globe, Smartphone, Zap, Shield, TrendingUp, Users, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import MagneticButton from "@/components/ui/magnetic-button";
import MorphingCard from "@/components/ui/morphing-card";
import AdvancedBackground from "@/components/ui/advanced-background";
import ParticleSystem from "@/components/ui/particle-system";
import { Link } from "wouter";

const technologies = [
  { name: "React.js", description: "Modern, component-based UI development", icon: "⚛️" },
  { name: "Next.js", description: "Full-stack React framework for production", icon: "▲" },
  { name: "TypeScript", description: "Type-safe JavaScript for scalable applications", icon: "🔷" },
  { name: "Node.js", description: "Server-side JavaScript runtime", icon: "🟢" },
  { name: "Python", description: "Versatile backend development", icon: "🐍" },
  { name: "AWS/Cloud", description: "Scalable cloud infrastructure", icon: "☁️" }
];

const features = [
  {
    icon: Zap,
    title: "Lightning Fast Performance",
    description: "Optimized code and infrastructure ensuring sub-2 second load times",
    metrics: "99.9% uptime guarantee"
  },
  {
    icon: Smartphone,
    title: "Mobile-First Design",
    description: "Responsive layouts that work perfectly on all devices",
    metrics: "100% mobile compatibility"
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Bank-level security with SSL encryption and data protection",
    metrics: "SOC 2 compliant"
  },
  {
    icon: TrendingUp,
    title: "SEO Optimized",
    description: "Built-in SEO best practices for maximum search visibility",
    metrics: "Average 300% traffic increase"
  }
];

const projectTypes = [
  {
    title: "Corporate Websites",
    description: "Professional business websites that establish authority and drive conversions",
    features: ["Custom Design", "CMS Integration", "SEO Optimization", "Analytics Setup", "Mobile Responsive", "Performance Optimized"]
  },
  {
    title: "Web Applications",
    description: "Complex web applications with advanced functionality and user management",
    features: ["User Authentication", "Database Integration", "API Development", "Admin Panel", "Real-time Features", "Cloud Deployment"]
  },
  {
    title: "E-commerce Platforms",
    description: "Full-featured online stores with payment processing and inventory management",
    features: ["Payment Gateway", "Inventory System", "Order Management", "Customer Portal", "Analytics Dashboard", "Multi-platform Support"]
  }
];

export default function WebDevelopment() {
  return (
    <div className="pt-20 overflow-hidden">
      {/* Hero Section */}
      <section className="py-32 relative overflow-hidden">
        <AdvancedBackground variant="geometric" />
        <ParticleSystem particleCount={30} />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 premium-border rounded-full p-1 mb-8"
            >
              <div className="premium-border-content rounded-full px-8 py-4">
                <span className="text-sm font-semibold text-gradient-primary">WEB DEVELOPMENT</span>
              </div>
            </motion.div>
            
            <motion.h1 
              className="font-black mb-8 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Build <span className="text-gradient-primary">Cutting-Edge</span><br />
              Web Applications That <span className="text-gradient-secondary">Scale</span>
            </motion.h1>
            
            <motion.p 
              className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Transform your digital presence with custom web applications built using the latest technologies. 
              From high-performance websites to complex web applications, we deliver solutions that drive business growth.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-6 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Link href="/contact">
                <MagneticButton strength={0.3}>
                  <Button size="lg" className="btn-premium gradient-primary text-background px-10 py-6 text-lg font-semibold group">
                    Start Your Project
                    <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>
                </MagneticButton>
              </Link>
              <Link href="/portfolio">
                <MagneticButton strength={0.2}>
                  <Button size="lg" variant="outline" className="glass-effect border-neon-blue text-neon-blue hover:bg-neon-blue/10 px-10 py-6 text-lg font-semibold">
                    View Our Work
                  </Button>
                </MagneticButton>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-32 relative overflow-hidden bg-gradient-to-br from-background via-muted/10 to-background">
        <AdvancedBackground variant="mesh" />
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="font-black mb-8">
              Why Choose Our <span className="text-gradient-primary">Web Development</span> Services?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We combine cutting-edge technology with proven development practices to deliver exceptional web solutions.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <MorphingCard>
                  <div className="card-premium p-8 h-full">
                    <div className="flex items-start gap-6">
                      <motion.div 
                        className="w-16 h-16 premium-border rounded-2xl p-1 flex-shrink-0"
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                      >
                        <div className="premium-border-content rounded-2xl w-full h-full flex items-center justify-center">
                          <feature.icon className="w-8 h-8 text-neon-blue" />
                        </div>
                      </motion.div>
                      
                      <div>
                        <h3 className="text-xl font-bold mb-3 text-foreground">
                          {feature.title}
                        </h3>
                        <p className="text-muted-foreground mb-4 leading-relaxed">
                          {feature.description}
                        </p>
                        <div className="text-sm font-semibold text-neon-green">
                          {feature.metrics}
                        </div>
                      </div>
                    </div>
                  </div>
                </MorphingCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="font-black mb-8">
              <span className="text-gradient-secondary">Modern Technologies</span> We Master
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We stay ahead of the curve with the latest development technologies and frameworks.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <MorphingCard>
                  <div className="glass-effect rounded-2xl p-6 text-center h-full">
                    <motion.div 
                      className="text-4xl mb-4"
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      {tech.icon}
                    </motion.div>
                    <h3 className="text-lg font-bold mb-2 text-foreground">
                      {tech.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {tech.description}
                    </p>
                  </div>
                </MorphingCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Types Section */}
      <section className="py-32 relative overflow-hidden bg-gradient-to-br from-background via-muted/10 to-background">
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="font-black mb-8">
              Our <span className="text-gradient-secondary">Specializations</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive web development solutions tailored to your business needs.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {projectTypes.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <MorphingCard>
                  <div className="card-premium p-8 h-full text-center">
                    <h3 className="text-xl font-bold mb-4 text-foreground">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground mb-8">
                      {project.description}
                    </p>
                    <ul className="space-y-3 mb-8">
                      {project.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-3 text-sm">
                          <CheckCircle className="w-4 h-4 text-neon-green flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Link href="/contact">
                      <MagneticButton strength={0.2}>
                        <Button className="w-full btn-premium gradient-primary text-background">
                          Learn More
                        </Button>
                      </MagneticButton>
                    </Link>
                  </div>
                </MorphingCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative overflow-hidden">
        <ParticleSystem particleCount={20} />
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-black mb-8">
              Ready to Build Your <span className="text-gradient-primary">Dream Website</span>?
            </h2>
            <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
              Let's discuss your project requirements and create a web solution that exceeds your expectations.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="/contact">
                <MagneticButton strength={0.4}>
                  <Button size="lg" className="btn-premium gradient-primary text-background px-12 py-6 text-lg font-semibold group">
                    Start Your Project Today
                    <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>
                </MagneticButton>
              </Link>
              <Link href="/portfolio">
                <MagneticButton strength={0.3}>
                  <Button size="lg" variant="outline" className="glass-effect border-neon-blue text-neon-blue hover:bg-neon-blue/10 px-12 py-6 text-lg font-semibold">
                    View Case Studies
                  </Button>
                </MagneticButton>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}