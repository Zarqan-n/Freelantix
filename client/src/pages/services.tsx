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
      <section className="py-20 bg-gradient-to-br from-background via-muted/30 to-background relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-20">
          <motion.div 
            className="absolute top-32 left-16 w-64 h-64 bg-neon-blue/20 rounded-full blur-3xl"
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.2, 0.4, 0.2]
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div 
            className="absolute bottom-32 right-16 w-80 h-80 bg-neon-pink/20 rounded-full blur-3xl"
            animate={{ 
              scale: [1.2, 1, 1.2],
              opacity: [0.3, 0.1, 0.3]
            }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-10">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
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
                className="service-card group"
              >
                {/* Enhanced glow effect */}
                <motion.div 
                  className="absolute -inset-1 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-xl"
                  style={{
                    background: `linear-gradient(45deg, ${service.color === 'neon-blue' ? 'rgba(26,231,255,0.5)' : service.color === 'neon-green' ? 'rgba(57,255,20,0.5)' : 'rgba(255,20,147,0.5)'}, transparent, ${service.color === 'neon-blue' ? 'rgba(26,231,255,0.3)' : service.color === 'neon-green' ? 'rgba(57,255,20,0.3)' : 'rgba(255,20,147,0.3)'})`
                  }}
                />
                
                <Card className="relative bg-gradient-to-br from-card/95 via-card to-card/90 border border-border/30 h-full hover:shadow-2xl hover:shadow-neon-blue/10 transition-all duration-500 backdrop-blur-sm rounded-3xl overflow-hidden">
                  <CardHeader className="pb-6">
                    <div className="flex items-start mb-8">
                      {/* Enhanced icon with animations */}
                      <motion.div 
                        className={`text-5xl mr-8 ${service.color} relative`}
                        whileHover={{ 
                          scale: 1.2,
                          rotate: [0, -10, 10, 0],
                          transition: { duration: 0.6 }
                        }}
                      >
                        <service.icon size={56} />
                        
                        {/* Icon glow effect */}
                        <motion.div
                          className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-60"
                          initial={{ scale: 0.8 }}
                          whileHover={{ 
                            scale: [0.8, 1.5, 0.8],
                            opacity: [0, 0.6, 0],
                            transition: { duration: 1.5, repeat: Infinity }
                          }}
                          style={{
                            background: `radial-gradient(circle, ${service.color === 'neon-blue' ? 'rgba(26,231,255,0.4)' : service.color === 'neon-green' ? 'rgba(57,255,20,0.4)' : 'rgba(255,20,147,0.4)'}, transparent 70%)`
                          }}
                        />
                      </motion.div>
                      
                      <div className="flex-1">
                        <motion.div
                          initial={{ x: -20, opacity: 0 }}
                          whileInView={{ x: 0, opacity: 1 }}
                          transition={{ duration: 0.6, delay: index * 0.1 }}
                        >
                          <CardTitle className={`text-3xl font-bold mb-4 ${service.color} group-hover:text-gradient-primary transition-all duration-500`}>
                            {service.title}
                          </CardTitle>
                          <p className="text-muted-foreground leading-relaxed text-base">
                            {service.description}
                          </p>
                        </motion.div>
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="space-y-8">
                    {/* Enhanced Technologies section */}
                    <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.6, delay: 0.3 }}
                    >
                      <h4 className="font-bold mb-4 text-lg flex items-center gap-2">
                        <motion.div 
                          className={`w-2 h-2 ${service.color} rounded-full`}
                          animate={{ scale: [1, 1.5, 1] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        />
                        Technologies & Tools
                      </h4>
                      <div className="flex flex-wrap gap-3">
                        {service.technologies.map((tech, techIndex) => (
                          <motion.div
                            key={tech}
                            initial={{ scale: 0.8, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            transition={{ 
                              duration: 0.4, 
                              delay: techIndex * 0.1,
                              type: "spring",
                              stiffness: 200
                            }}
                            whileHover={{ scale: 1.1, rotate: 3 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <Badge 
                              variant="secondary" 
                              className={`bg-${service.color}/20 text-${service.color} border-${service.color}/30 hover:bg-${service.color}/30 transition-all duration-300 px-3 py-1 text-sm font-medium shadow-sm`}
                            >
                              {tech}
                            </Badge>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>

                    {/* Enhanced Features section */}
                    <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                    >
                      <h4 className="font-bold mb-4 text-lg flex items-center gap-2">
                        <motion.div 
                          className={`w-2 h-2 ${service.color} rounded-full`}
                          animate={{ scale: [1, 1.5, 1] }}
                          transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                        />
                        What's Included
                      </h4>
                      <div className="grid grid-cols-1 gap-3">
                        {service.features.map((feature, featureIndex) => (
                          <motion.div 
                            key={feature} 
                            className="flex items-center group/feature"
                            initial={{ x: -20, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ 
                              duration: 0.5, 
                              delay: featureIndex * 0.1 
                            }}
                            whileHover={{ x: 5 }}
                          >
                            <motion.div
                              whileHover={{ scale: 1.2, rotate: 360 }}
                              transition={{ duration: 0.3 }}
                            >
                              <CheckCircle className={`h-5 w-5 mr-4 ${service.color} group-hover/feature:drop-shadow-lg`} />
                            </motion.div>
                            <span className="text-sm font-medium group-hover/feature:text-foreground transition-colors duration-200">
                              {feature}
                            </span>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                    
                    {/* Enhanced CTA button */}
                    <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.6, delay: 0.5 }}
                      className="pt-4"
                    >
                      <motion.button
                        className={`group/btn relative overflow-hidden w-full px-6 py-4 bg-gradient-to-r from-${service.color}/20 to-${service.color}/10 backdrop-blur-sm rounded-2xl font-semibold border border-${service.color}/30 hover:border-${service.color}/60 transition-all duration-500 shadow-lg`}
                        whileHover={{ 
                          scale: 1.02,
                          boxShadow: `0 15px 35px ${service.color === 'neon-blue' ? 'rgba(26,231,255,0.2)' : service.color === 'neon-green' ? 'rgba(57,255,20,0.2)' : 'rgba(255,20,147,0.2)'}`
                        }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <motion.span
                          className={`relative z-10 flex items-center justify-center gap-2 text-${service.color} group-hover/btn:text-foreground transition-colors duration-300`}
                          whileHover={{ x: 2 }}
                          transition={{ duration: 0.2 }}
                        >
                          Learn More About {service.title}
                          <motion.div
                            animate={{ x: [0, 4, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                          >
                            →
                          </motion.div>
                        </motion.span>
                        
                        {/* Button background animation */}
                        <motion.div
                          className={`absolute inset-0 bg-gradient-to-r from-${service.color}/30 to-${service.color}/20 opacity-0 group-hover/btn:opacity-100 rounded-2xl`}
                          initial={{ x: "-100%" }}
                          whileHover={{ x: "0%" }}
                          transition={{ duration: 0.5 }}
                        />
                      </motion.button>
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Process Section */}
      <section className="py-24 bg-gradient-to-br from-muted/30 via-background to-muted/20 relative overflow-hidden">
        {/* Background decorative grid */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-neon-blue/5 to-transparent transform -skew-y-6" />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-neon-green/5 to-transparent transform skew-y-6" />
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <motion.h2 
              className="text-4xl lg:text-5xl font-bold mb-6"
              initial={{ scale: 0.9 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Our <span className="neon-green">Process</span>
            </motion.h2>
            <motion.p 
              className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              A proven methodology designed to deliver exceptional results through collaboration, innovation, and meticulous attention to detail
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            {[
              { 
                step: "1", 
                title: "Plan", 
                description: "Strategy & Research", 
                color: "neon-blue",
                details: "Deep dive into your goals, market analysis, and strategic planning"
              },
              { 
                step: "2", 
                title: "Build", 
                description: "Design & Development", 
                color: "neon-green",
                details: "Crafting beautiful, functional solutions with cutting-edge technology"
              },
              { 
                step: "3", 
                title: "Launch", 
                description: "Testing & Deployment", 
                color: "neon-pink",
                details: "Rigorous testing and seamless deployment to ensure perfect launch"
              },
              { 
                step: "4", 
                title: "Grow", 
                description: "Optimization & Support", 
                color: "neon-blue",
                details: "Continuous improvement and dedicated support for long-term success"
              }
            ].map((phase, index) => (
              <motion.div
                key={phase.step}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                whileHover={{ 
                  y: -8,
                  transition: { type: "spring", stiffness: 300, damping: 20 }
                }}
                transition={{ 
                  duration: 0.8, 
                  delay: index * 0.15,
                  type: "spring",
                  stiffness: 100
                }}
                className="text-center group relative"
              >
                {/* Enhanced card background */}
                <motion.div 
                  className="absolute -inset-4 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-xl"
                  style={{
                    background: `radial-gradient(circle, ${phase.color === 'neon-blue' ? 'rgba(26,231,255,0.2)' : phase.color === 'neon-green' ? 'rgba(57,255,20,0.2)' : 'rgba(255,20,147,0.2)'}, transparent 70%)`
                  }}
                />
                
                <div className="relative p-8 rounded-3xl bg-gradient-to-br from-card/80 via-card/60 to-card/40 border border-border/30 backdrop-blur-sm hover:border-border/60 transition-all duration-500 h-full">
                  {/* Enhanced step number */}
                  <motion.div 
                    className={`w-20 h-20 bg-gradient-to-br from-${phase.color} to-${phase.color}/80 rounded-2xl flex items-center justify-center text-background font-bold text-2xl mx-auto mb-6 shadow-lg`}
                    whileHover={{ 
                      scale: 1.1,
                      rotate: [0, -5, 5, 0],
                      transition: { duration: 0.5 }
                    }}
                    style={{
                      boxShadow: `0 10px 30px ${phase.color === 'neon-blue' ? 'rgba(26,231,255,0.3)' : phase.color === 'neon-green' ? 'rgba(57,255,20,0.3)' : 'rgba(255,20,147,0.3)'}`
                    }}
                  >
                    {phase.step}
                    
                    {/* Pulsing ring effect */}
                    <motion.div
                      className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-60"
                      initial={{ scale: 1 }}
                      whileHover={{ 
                        scale: [1, 1.3, 1],
                        opacity: [0, 0.6, 0],
                        transition: { duration: 1.5, repeat: Infinity }
                      }}
                      style={{
                        border: `2px solid ${phase.color === 'neon-blue' ? '#1ae7ff' : phase.color === 'neon-green' ? '#39ff14' : '#ff1493'}`
                      }}
                    />
                  </motion.div>
                  
                  <motion.div
                    initial={{ y: 10, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
                  >
                    <h3 className={`text-2xl font-bold mb-3 ${phase.color} group-hover:text-gradient-primary transition-all duration-500`}>
                      {phase.title}
                    </h3>
                    <p className="text-muted-foreground font-medium mb-4 text-lg">
                      {phase.description}
                    </p>
                    <motion.p 
                      className="text-sm text-muted-foreground/80 leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      initial={{ height: 0 }}
                      whileHover={{ height: "auto" }}
                    >
                      {phase.details}
                    </motion.p>
                  </motion.div>
                  
                  {/* Connecting line for larger screens */}
                  {index < 3 && (
                    <motion.div 
                      className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gradient-to-r from-border to-transparent"
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      transition={{ duration: 0.8, delay: index * 0.2 + 0.5 }}
                    />
                  )}
                  
                  {/* Decorative corner accent */}
                  <motion.div
                    className="absolute top-4 right-4 w-2 h-2 bg-current rounded-full opacity-0 group-hover:opacity-100"
                    style={{ color: phase.color === 'neon-blue' ? '#1ae7ff' : phase.color === 'neon-green' ? '#39ff14' : '#ff1493' }}
                    initial={{ scale: 0 }}
                    whileHover={{ scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.2 }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Enhanced CTA at bottom */}
          <motion.div
            className="text-center mt-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <motion.button
              className="px-10 py-5 bg-gradient-to-r from-neon-blue/20 via-neon-green/20 to-neon-pink/20 backdrop-blur-sm rounded-2xl font-bold text-lg border border-neon-blue/40 hover:border-neon-blue/60 transition-all duration-500 shadow-xl hover:shadow-2xl hover:shadow-neon-blue/20"
              whileHover={{ 
                scale: 1.05,
                y: -2
              }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="flex items-center gap-3">
                Start Your Project Journey
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                >
                  ✨
                </motion.div>
              </span>
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
