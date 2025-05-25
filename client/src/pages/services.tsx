import { motion } from "framer-motion";
import { Code, Palette, ShoppingCart, Target, CheckCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const services = [
  {
    icon: Code,
    title: "Web Development",
    description: "Custom websites and web applications built with modern technologies like React, Vue.js, and Node.js. We create fast, scalable, and SEO-optimized solutions that drive business growth.",
    color: "neon-blue",
    technologies: ["React", "Node.js", "Python", "MongoDB"],
    features: [
      "Responsive Design",
      "Performance Optimization",
      "SEO Implementation",
      "API Integration",
      "Database Design",
      "Security Implementation"
    ]
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "User-centered design that converts visitors into customers. We create intuitive interfaces and seamless user experiences that enhance engagement and drive conversions.",
    color: "neon-green",
    technologies: ["Figma", "Adobe XD", "Prototyping", "User Research"],
    features: [
      "User Experience Research",
      "Wireframing & Prototyping",
      "Visual Design",
      "Interaction Design",
      "Usability Testing",
      "Design Systems"
    ]
  },
  {
    icon: ShoppingCart,
    title: "eCommerce Solutions",
    description: "Scalable online stores that maximize sales and customer satisfaction. From Shopify customizations to custom eCommerce platforms, we build solutions that grow with your business.",
    color: "neon-pink",
    technologies: ["Shopify", "WooCommerce", "Payment Integration", "Analytics"],
    features: [
      "Shopping Cart Development",
      "Payment Gateway Integration",
      "Inventory Management",
      "Order Processing",
      "Customer Analytics",
      "Mobile Commerce"
    ]
  },
  {
    icon: Target,
    title: "Digital Strategy",
    description: "Data-driven strategies to optimize your digital presence and ROI. We help you identify opportunities, plan roadmaps, and implement solutions that align with your business goals.",
    color: "neon-blue",
    technologies: ["SEO", "Analytics", "Consulting", "Growth Hacking"],
    features: [
      "Digital Audits",
      "Competitive Analysis",
      "Growth Strategy",
      "Performance Monitoring",
      "Conversion Optimization",
      "ROI Analysis"
    ]
  }
];

export default function Services() {
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
              Our <span className="neon-blue">Services</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive digital solutions designed to transform your business and accelerate growth in the digital landscape
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="service-card"
              >
                <Card className="bg-card border-border h-full hover:shadow-2xl transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-start mb-6">
                      <div className={`text-4xl mr-6 ${service.color}`}>
                        <service.icon size={48} />
                      </div>
                      <div>
                        <CardTitle className={`text-2xl font-bold mb-3 ${service.color}`}>
                          {service.title}
                        </CardTitle>
                        <p className="text-muted-foreground leading-relaxed">
                          {service.description}
                        </p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    {/* Technologies */}
                    <div className="mb-6">
                      <h4 className="font-semibold mb-3">Technologies & Tools</h4>
                      <div className="flex flex-wrap gap-2">
                        {service.technologies.map((tech) => (
                          <Badge 
                            key={tech} 
                            variant="secondary" 
                            className={`bg-${service.color}/20 text-${service.color} border-${service.color}/30`}
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Features */}
                    <div>
                      <h4 className="font-semibold mb-3">What's Included</h4>
                      <div className="grid grid-cols-1 gap-2">
                        {service.features.map((feature) => (
                          <div key={feature} className="flex items-center">
                            <CheckCircle className={`h-4 w-4 mr-3 ${service.color}`} />
                            <span className="text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Our <span className="neon-green">Process</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A proven methodology that ensures successful project delivery
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "1", title: "Plan", description: "Strategy & Research", color: "neon-blue" },
              { step: "2", title: "Build", description: "Design & Development", color: "neon-green" },
              { step: "3", title: "Launch", description: "Testing & Deployment", color: "neon-pink" },
              { step: "4", title: "Grow", description: "Optimization & Support", color: "neon-blue" }
            ].map((phase, index) => (
              <motion.div
                key={phase.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className={`w-16 h-16 bg-${phase.color} rounded-full flex items-center justify-center text-background font-bold text-xl mx-auto mb-4`}>
                  {phase.step}
                </div>
                <h3 className="text-xl font-semibold mb-2">{phase.title}</h3>
                <p className="text-muted-foreground">{phase.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
