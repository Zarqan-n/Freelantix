import { motion } from "framer-motion";
import { ArrowRight, Palette, Eye, Users, Zap, Heart, TrendingUp, Award, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import MagneticButton from "@/components/ui/magnetic-button";
import MorphingCard from "@/components/ui/morphing-card";
import AdvancedBackground from "@/components/ui/advanced-background";
import ParticleSystem from "@/components/ui/particle-system";
import { Link } from "wouter";

const designPrinciples = [
  {
    icon: Users,
    title: "User-Centered Design",
    description: "Every design decision is based on deep user research and behavioral analysis",
    impact: "300% increase in user engagement"
  },
  {
    icon: Eye,
    title: "Visual Hierarchy",
    description: "Strategic information architecture that guides users naturally through your interface",
    impact: "250% improvement in task completion"
  },
  {
    icon: Zap,
    title: "Performance Optimization",
    description: "Designs optimized for speed without compromising visual excellence",
    impact: "40% faster load times"
  },
  {
    icon: Heart,
    title: "Emotional Connection",
    description: "Creating designs that resonate emotionally and build lasting brand loyalty",
    impact: "180% increase in user retention"
  }
];

const portfolioHighlights = [
  {
    title: "E-commerce Platform Redesign",
    description: "Complete UX overhaul resulting in 340% increase in conversions",
    metrics: ["340% ↑ Conversions", "65% ↓ Bounce Rate", "220% ↑ Revenue"],
    category: "E-commerce"
  },
  {
    title: "SaaS Dashboard Optimization",
    description: "Streamlined complex workflows for enterprise software",
    metrics: ["80% ↓ Support Tickets", "45% ↑ User Satisfaction", "60% ↓ Onboarding Time"],
    category: "SaaS"
  },
  {
    title: "Mobile App UX Redesign",
    description: "Enhanced mobile experience for fintech application",
    metrics: ["4.8★ App Store Rating", "90% ↑ Daily Active Users", "50% ↑ Session Duration"],
    category: "Mobile"
  }
];

export default function UIUXDesign() {
  return (
    <div className="pt-20 overflow-hidden">
      {/* Hero Section */}
      <section className="py-32 relative overflow-hidden">
        <AdvancedBackground variant="constellation" />
        <ParticleSystem particleCount={35} />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 premium-border rounded-full p-1 mb-8"
            >
              <div className="premium-border-content rounded-full px-8 py-4">
                <span className="text-sm font-semibold text-gradient-secondary">UI/UX DESIGN</span>
              </div>
            </motion.div>
            
            <motion.h1 
              className="font-black mb-8 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Design <span className="text-gradient-secondary">Experiences</span><br />
              That Drive <span className="text-gradient-primary">Revenue</span>
            </motion.h1>
            
            <motion.p 
              className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Create user experiences that not only look stunning but convert visitors into customers. 
              Our data-driven design approach combines aesthetic excellence with psychological insights to maximize your ROI.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-6 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Link href="/contact">
                <MagneticButton strength={0.3}>
                  <Button size="lg" className="btn-premium gradient-secondary text-background px-10 py-6 text-lg font-semibold group">
                    Start Design Project
                    <Palette className="ml-3 h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
                  </Button>
                </MagneticButton>
              </Link>
              <Link href="/portfolio">
                <MagneticButton strength={0.2}>
                  <Button size="lg" variant="outline" className="glass-effect border-neon-pink text-neon-pink hover:bg-neon-pink/10 px-10 py-6 text-lg font-semibold">
                    View Design Portfolio
                  </Button>
                </MagneticButton>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Design Principles */}
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
              Our <span className="text-gradient-secondary">Design Philosophy</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Every design decision is strategic, backed by research, and focused on delivering measurable business results.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {designPrinciples.map((principle, index) => (
              <motion.div
                key={principle.title}
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
                          <principle.icon className="w-8 h-8 text-neon-pink" />
                        </div>
                      </motion.div>
                      
                      <div>
                        <h3 className="text-xl font-bold mb-3 text-foreground">
                          {principle.title}
                        </h3>
                        <p className="text-muted-foreground mb-4 leading-relaxed">
                          {principle.description}
                        </p>
                        <div className="text-sm font-semibold text-neon-green">
                          {principle.impact}
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

      {/* Portfolio Highlights */}
      <section className="py-32 relative overflow-hidden">
        <ParticleSystem particleCount={25} />
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="font-black mb-8">
              <span className="text-gradient-primary">Success Stories</span> & Results
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Real projects, real results. See how our design solutions have transformed businesses.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {portfolioHighlights.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ 
                  duration: 0.8, 
                  delay: index * 0.15,
                  type: "spring",
                  damping: 20,
                  stiffness: 300
                }}
                className="group"
              >
                <MorphingCard>
                  <div className="card-premium p-8 h-full relative overflow-hidden">
                    {/* Background gradient effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-neon-pink/5 via-transparent to-neon-blue/5 opacity-0 group-hover:opacity-100 transition-all duration-700"
                      initial={false}
                    />
                    
                    {/* Floating decorative elements */}
                    <motion.div
                      className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-br from-neon-pink/20 to-neon-blue/20 rounded-full blur-sm"
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.7, 0.3]
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: index * 0.5
                      }}
                    />
                    
                    <div className="relative z-10">
                      {/* Enhanced category badge */}
                      <motion.div 
                        className="inline-flex items-center gap-2 mb-6"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                      >
                        <motion.div
                          className="w-2 h-2 bg-neon-pink rounded-full"
                          animate={{
                            scale: [1, 1.5, 1],
                            opacity: [0.7, 1, 0.7]
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: index * 0.3
                          }}
                        />
                        <span className="text-xs font-bold text-neon-pink uppercase tracking-wider bg-neon-pink/10 px-3 py-1 rounded-full border border-neon-pink/20">
                          {project.category}
                        </span>
                      </motion.div>
                      
                      {/* Enhanced title with hover effect */}
                      <motion.h3 
                        className="text-xl font-bold mb-4 text-foreground group-hover:text-gradient-secondary transition-all duration-300"
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.3 }}
                      >
                        {project.title}
                      </motion.h3>
                      
                      {/* Enhanced description */}
                      <motion.p 
                        className="text-muted-foreground mb-8 leading-relaxed group-hover:text-foreground/80 transition-colors duration-300"
                        initial={{ opacity: 0.8 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                      >
                        {project.description}
                      </motion.p>
                      
                      {/* Enhanced metrics with staggered animations */}
                      <div className="space-y-4">
                        <motion.div
                          className="text-sm font-semibold text-gradient-primary mb-3 uppercase tracking-wider"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.1 + 0.4 }}
                        >
                          Key Results:
                        </motion.div>
                        {project.metrics.map((metric, idx) => (
                          <motion.div 
                            key={idx} 
                            className="flex items-center gap-4 group/metric"
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ 
                              duration: 0.6, 
                              delay: index * 0.1 + idx * 0.1 + 0.5,
                              type: "spring",
                              damping: 25
                            }}
                            whileHover={{ x: 5 }}
                          >
                            <motion.div
                              className="relative"
                              whileHover={{ scale: 1.2, rotate: 360 }}
                              transition={{ duration: 0.4 }}
                            >
                              <Award className="w-5 h-5 text-neon-green drop-shadow-lg" />
                              <motion.div
                                className="absolute inset-0 bg-neon-green/20 rounded-full blur-sm"
                                animate={{
                                  scale: [1, 1.5, 1],
                                  opacity: [0, 0.5, 0]
                                }}
                                transition={{
                                  duration: 2,
                                  repeat: Infinity,
                                  delay: idx * 0.3
                                }}
                              />
                            </motion.div>
                            <span className="text-sm font-bold text-foreground group-hover/metric:text-neon-green transition-colors duration-300">
                              {metric}
                            </span>
                          </motion.div>
                        ))}
                      </div>
                      
                      {/* Success indicator */}
                      <motion.div
                        className="absolute bottom-4 right-4 w-12 h-12 bg-gradient-to-br from-neon-green/20 to-neon-blue/20 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500"
                        animate={{
                          rotate: [0, 360]
                        }}
                        transition={{
                          duration: 8,
                          repeat: Infinity,
                          ease: "linear"
                        }}
                      >
                        <motion.div
                          className="w-6 h-6 bg-gradient-to-br from-neon-green to-neon-blue rounded-full"
                          animate={{
                            scale: [1, 1.2, 1]
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                        />
                      </motion.div>
                    </div>
                  </div>
                </MorphingCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative overflow-hidden bg-gradient-to-br from-background via-muted/10 to-background">
        <AdvancedBackground variant="geometric" />
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-black mb-8">
              Transform Your <span className="text-gradient-secondary">User Experience</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
              Ready to create designs that not only look amazing but drive real business results? Let's start your design journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="/contact">
                <MagneticButton strength={0.4}>
                  <Button size="lg" className="btn-premium gradient-secondary text-background px-12 py-6 text-lg font-semibold group">
                    Start Your Design Project
                    <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>
                </MagneticButton>
              </Link>
              <Link href="/portfolio">
                <MagneticButton strength={0.3}>
                  <Button size="lg" variant="outline" className="glass-effect border-neon-pink text-neon-pink hover:bg-neon-pink/10 px-12 py-6 text-lg font-semibold">
                    View Full Portfolio
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