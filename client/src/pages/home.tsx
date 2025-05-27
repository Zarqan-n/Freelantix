import { motion } from "framer-motion";
import { ArrowRight, Code, Palette, ShoppingCart, Target, TrendingUp, DollarSign, Users, Zap, BarChart3, Globe, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import AnimatedBackground from "@/components/ui/animated-background";
import ServiceCard from "@/components/ui/service-card";
import StatsCounter from "@/components/ui/stats-counter";
import { Link } from "wouter";

const services = [
  {
    icon: Code,
    title: "Web Development",
    description: "Custom websites and web applications built with cutting-edge technologies",
    color: "neon-blue"
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Beautiful, intuitive designs that engage users and drive conversions",
    color: "neon-green"
  },
  {
    icon: ShoppingCart,
    title: "eCommerce Solutions",
    description: "Complete online stores that maximize sales and customer satisfaction",
    color: "neon-pink"
  },
  {
    icon: Target,
    title: "Digital Strategy",
    description: "Data-driven strategies to optimize your digital presence and ROI",
    color: "neon-blue"
  }
];

const stats = [
  { number: 50, suffix: "+", label: "Trusted Businesses" },
  { number: 100, suffix: "+", label: "Projects Completed" },
  { number: 5, suffix: "+", label: "Years Experience" }
];

const revenueFeatures = [
  {
    icon: TrendingUp,
    title: "Conversion Rate Boost",
    percentage: "250%",
    description: "Our optimized UI designs increase user engagement and drive significantly higher conversion rates",
    color: "neon-green"
  },
  {
    icon: DollarSign,
    title: "Revenue Growth",
    percentage: "180%",
    description: "Strategic design improvements that directly translate to increased sales and business growth",
    color: "neon-blue"
  },
  {
    icon: Users,
    title: "User Retention",
    percentage: "320%",
    description: "Intuitive interfaces that keep users coming back, building lasting customer relationships",
    color: "neon-pink"
  },
  {
    icon: Zap,
    title: "Load Time Optimization",
    percentage: "75%",
    description: "Lightning-fast websites that reduce bounce rates and improve user satisfaction",
    color: "neon-purple"
  }
];

const processSteps = [
  {
    step: "01",
    title: "Strategic Analysis",
    description: "We analyze your current performance, identify bottlenecks, and map out revenue opportunities",
    icon: BarChart3
  },
  {
    step: "02", 
    title: "UI/UX Optimization",
    description: "Design user-centric interfaces that guide customers seamlessly through your conversion funnel",
    icon: Palette
  },
  {
    step: "03",
    title: "Performance Enhancement", 
    description: "Implement cutting-edge technologies for blazing-fast load times and smooth interactions",
    icon: Rocket
  },
  {
    step: "04",
    title: "Growth Tracking",
    description: "Monitor key metrics and continuously optimize for maximum revenue generation",
    icon: Globe
  }
];

const testimonials = [
  {
    content: "Freelantix transformed our online presence completely. Their team delivered a stunning website that increased our conversions by 150%. Absolutely recommended!",
    author: "Sarah Johnson",
    position: "CEO, TechStart Inc.",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b5bc?w=150&h=150&fit=crop&crop=face"
  },
  {
    content: "Working with Freelantix was a game-changer. They understood our vision perfectly and delivered beyond expectations. Our new app has received amazing user feedback!",
    author: "Michael Chen",
    position: "Founder, FitLife App",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
  }
];

export default function Home() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center relative overflow-hidden">
        <AnimatedBackground />
        
        {/* Premium floating elements */}
        <div className="absolute top-1/4 left-1/3 w-96 h-96 gradient-primary rounded-full opacity-5 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/3 w-80 h-80 gradient-secondary rounded-full opacity-5 blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        
        <div className="container mx-auto px-6 py-32 relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative"
            >
              <motion.h1 
                className="font-black mb-10 leading-[0.9] tracking-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
              >
                Building <span className="text-gradient-primary">Cutting-Edge</span><br />
                Digital <span className="text-shimmer">Experiences</span>
              </motion.h1>
              
              <motion.p 
                className="text-xl lg:text-2xl text-muted-foreground mb-12 font-light leading-relaxed max-w-2xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Premium digital solutions that transform businesses and accelerate growth through innovation and excellence
              </motion.p>
              
              <motion.div 
                className="flex flex-col sm:flex-row gap-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <Link href="/contact">
                  <Button size="lg" className="btn-premium gradient-primary text-background hover:shadow-2xl px-10 py-6 text-lg font-semibold group">
                    Get Started 
                    <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>
                </Link>
                <Link href="/portfolio">
                  <Button size="lg" variant="outline" className="glass-effect border-neon-blue text-neon-blue hover:bg-neon-blue/10 px-10 py-6 text-lg font-semibold">
                    View Portfolio
                  </Button>
                </Link>
              </motion.div>
              
              {/* Premium stats preview */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="flex items-center gap-8 mt-16 pt-8 border-t border-border/20"
              >
                <div className="text-center">
                  <div className="text-2xl font-bold text-gradient-primary">150+</div>
                  <div className="text-sm text-muted-foreground">Projects Delivered</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gradient-secondary">98%</div>
                  <div className="text-sm text-muted-foreground">Client Satisfaction</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold neon-green">24/7</div>
                  <div className="text-sm text-muted-foreground">Support</div>
                </div>
              </motion.div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
              className="relative"
            >
              {/* Premium Visual Dashboard */}
              <div className="relative group">
                {/* Ambient background effects */}
                <div className="absolute -inset-12 gradient-primary rounded-3xl opacity-10 blur-3xl group-hover:opacity-15 transition-all duration-1000"></div>
                <div className="absolute -inset-8 gradient-secondary rounded-2xl opacity-8 blur-2xl group-hover:opacity-12 transition-all duration-1000"></div>
                
                {/* Main premium dashboard container */}
                <div className="relative premium-border rounded-3xl p-3 group-hover:scale-[1.02] transition-transform duration-700">
                  <div className="premium-border-content rounded-3xl p-12 min-h-[500px] flex flex-col justify-center items-center">
                    
                    {/* Central logo/brand element */}
                    <motion.div
                      className="relative mb-16"
                      animate={{ rotate: [0, 360] }}
                      transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                    >
                      <div className="w-32 h-32 premium-border rounded-full p-1">
                        <div className="premium-border-content rounded-full w-full h-full flex items-center justify-center">
                          <div className="text-4xl font-black text-gradient-primary">FX</div>
                        </div>
                      </div>
                    </motion.div>
                    
                    {/* Floating metrics cards */}
                    <div className="grid grid-cols-2 gap-6 w-full max-w-md">
                      <motion.div
                        className="glass-effect rounded-xl p-6 text-center"
                        animate={{ y: [-5, 5, -5] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                      >
                        <div className="text-2xl font-bold text-gradient-primary mb-2">99.9%</div>
                        <div className="text-sm text-muted-foreground">Uptime</div>
                      </motion.div>
                      
                      <motion.div
                        className="glass-effect rounded-xl p-6 text-center"
                        animate={{ y: [5, -5, 5] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                      >
                        <div className="text-2xl font-bold text-gradient-secondary mb-2">2.5s</div>
                        <div className="text-sm text-muted-foreground">Load Time</div>
                      </motion.div>
                      
                      <motion.div
                        className="glass-effect rounded-xl p-6 text-center"
                        animate={{ y: [-3, 7, -3] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                      >
                        <div className="text-2xl font-bold neon-green mb-2">A+</div>
                        <div className="text-sm text-muted-foreground">Security</div>
                      </motion.div>
                      
                      <motion.div
                        className="glass-effect rounded-xl p-6 text-center"
                        animate={{ y: [7, -3, 7] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                      >
                        <div className="text-2xl font-bold neon-pink mb-2">24/7</div>
                        <div className="text-sm text-muted-foreground">Support</div>
                      </motion.div>
                    </div>
                  </div>
                </div>
                
                {/* Elegant floating technology icons */}
                <motion.div
                  className="absolute -top-8 -right-8 w-20 h-20 glass-effect rounded-2xl flex items-center justify-center"
                  animate={{ 
                    y: [-8, 8, -8],
                    rotate: [0, 180, 360]
                  }}
                  transition={{ 
                    y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                    rotate: { duration: 20, repeat: Infinity, ease: "linear" }
                  }}
                >
                  <div className="w-10 h-10 gradient-primary rounded-xl flex items-center justify-center">
                    <span className="text-background font-bold text-sm">AI</span>
                  </div>
                </motion.div>
                
                <motion.div
                  className="absolute -bottom-6 -left-6 w-16 h-16 glass-effect rounded-2xl flex items-center justify-center"
                  animate={{ 
                    y: [8, -8, 8],
                    rotate: [360, 180, 0]
                  }}
                  transition={{ 
                    y: { duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 },
                    rotate: { duration: 15, repeat: Infinity, ease: "linear" }
                  }}
                >
                  <div className="w-8 h-8 gradient-secondary rounded-lg flex items-center justify-center">
                    <span className="text-background font-bold text-xs">⚡</span>
                  </div>
                </motion.div>
                
                <motion.div
                  className="absolute top-1/3 -right-4 w-12 h-12 glass-effect rounded-full flex items-center justify-center"
                  animate={{ 
                    x: [0, 8, 0],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ 
                    x: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 },
                    scale: { duration: 3, repeat: Infinity, ease: "easeInOut" }
                  }}
                >
                  <div className="w-6 h-6 gradient-tertiary rounded-full"></div>
                </motion.div>
                
                <motion.div
                  className="absolute bottom-1/3 -left-4 w-14 h-14 glass-effect rounded-xl flex items-center justify-center"
                  animate={{ 
                    x: [0, -6, 0],
                    opacity: [0.7, 1, 0.7]
                  }}
                  transition={{ 
                    x: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: 3 },
                    opacity: { duration: 2, repeat: Infinity, ease: "easeInOut" }
                  }}
                >
                  <div className="w-7 h-7 bg-neon-purple/30 rounded-lg flex items-center justify-center">
                    <span className="text-neon-purple font-bold text-xs">◆</span>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-40 relative overflow-hidden">
        {/* Enhanced Premium background with patterns */}
        <div className="absolute inset-0 gradient-bg"></div>
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)`,
          backgroundSize: '20px 20px'
        }}></div>
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-transparent via-neon-blue to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-neon-green to-transparent"></div>
        
        {/* Floating particles */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/6 w-2 h-2 bg-neon-blue rounded-full opacity-60 animate-pulse"></div>
          <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-neon-pink rounded-full opacity-40 animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute bottom-1/3 left-3/4 w-1.5 h-1.5 bg-neon-green rounded-full opacity-50 animate-pulse" style={{animationDelay: '2s'}}></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 premium-border rounded-full p-1 mb-8"
            >
              <div className="premium-border-content rounded-full px-8 py-4">
                <span className="text-sm font-semibold text-gradient-primary">PREMIUM SERVICES</span>
              </div>
            </motion.div>
            
            <h2 className="font-black mb-8 text-center">
              Our <span className="text-gradient-primary">Elite</span> Solutions
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Crafted with precision and powered by innovation. Each service is designed to elevate your business to new heights of digital excellence.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <ServiceCard service={service} index={index} />
              </motion.div>
            ))}
          </div>
          
          {/* Premium CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center mt-20"
          >
            <Link href="/services">
              <Button className="btn-premium gradient-secondary text-background px-12 py-6 text-lg font-semibold group">
                Explore All Services
                <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Revenue Impact Section */}
      <section className="py-40 relative overflow-hidden bg-gradient-to-br from-background via-muted/10 to-background">
        {/* Premium background effects */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/6 w-96 h-96 gradient-primary rounded-full opacity-5 blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/6 w-80 h-80 gradient-secondary rounded-full opacity-5 blur-3xl animate-pulse" style={{animationDelay: '3s'}}></div>
        </div>
        
        {/* Floating revenue indicators */}
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            className="absolute top-20 left-20 text-neon-green text-4xl font-bold opacity-20"
            animate={{ 
              y: [-10, 10, -10],
              opacity: [0.2, 0.4, 0.2]
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            +$2.5M
          </motion.div>
          <motion.div
            className="absolute top-40 right-32 text-neon-blue text-3xl font-bold opacity-20"
            animate={{ 
              y: [10, -10, 10],
              opacity: [0.2, 0.4, 0.2]
            }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          >
            +350%
          </motion.div>
          <motion.div
            className="absolute bottom-32 left-1/3 text-neon-pink text-2xl font-bold opacity-20"
            animate={{ 
              x: [-5, 5, -5],
              opacity: [0.2, 0.4, 0.2]
            }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          >
            ROI 450%
          </motion.div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 premium-border rounded-full p-1 mb-8"
            >
              <div className="premium-border-content rounded-full px-8 py-4">
                <span className="text-sm font-semibold text-gradient-primary">REVENUE ACCELERATION</span>
              </div>
            </motion.div>
            
            <h2 className="font-black mb-8 text-center">
              How We <span className="text-gradient-primary">Skyrocket</span> Your Revenue<br />
              Through <span className="text-gradient-secondary">Premium UI Design</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Every pixel, every interaction, every design decision is strategically crafted to maximize your business growth. 
              Our data-driven approach to UI/UX design doesn't just look beautiful—it drives measurable revenue increases.
            </p>
          </motion.div>
          
          {/* Revenue Impact Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {revenueFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="card-premium p-8 h-full text-center relative overflow-hidden">
                  {/* Ambient glow effect */}
                  <div className={`absolute inset-0 bg-gradient-to-br from-${feature.color}/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                  
                  <div className="relative z-10">
                    <div className={`w-16 h-16 mx-auto mb-6 premium-border rounded-2xl p-1 group-hover:scale-110 transition-transform duration-300`}>
                      <div className="premium-border-content rounded-2xl w-full h-full flex items-center justify-center">
                        <feature.icon className={`w-8 h-8 text-${feature.color}`} />
                      </div>
                    </div>
                    
                    <div className={`text-4xl font-black text-${feature.color} mb-2 group-hover:scale-105 transition-transform duration-300`}>
                      +{feature.percentage}
                    </div>
                    
                    <h3 className="text-xl font-bold mb-4 text-foreground">
                      {feature.title}
                    </h3>
                    
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Success Story Highlight */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="premium-border rounded-3xl p-1 mb-20"
          >
            <div className="premium-border-content rounded-3xl p-12 text-center">
              <div className="max-w-4xl mx-auto">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="inline-flex items-center gap-3 mb-8"
                >
                  <div className="w-12 h-12 gradient-primary rounded-xl flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-background" />
                  </div>
                  <span className="text-2xl font-bold text-gradient-primary">Real Results</span>
                </motion.div>
                
                <h3 className="text-3xl font-black mb-6">
                  "Our e-commerce revenue increased by <span className="text-gradient-secondary">$2.3M annually</span> 
                  after Freelantix redesigned our user experience"
                </h3>
                
                <div className="grid md:grid-cols-3 gap-8 mt-12">
                  <div className="text-center">
                    <div className="text-3xl font-black text-neon-green mb-2">+340%</div>
                    <div className="text-muted-foreground">Conversion Rate</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-black text-neon-blue mb-2">+180%</div>
                    <div className="text-muted-foreground">Average Order Value</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-black text-neon-pink mb-2">+220%</div>
                    <div className="text-muted-foreground">Customer Retention</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Our Process */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h3 className="text-3xl font-black mb-6">
              Our <span className="text-gradient-primary">Revenue-Driven</span> Process
            </h3>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A systematic approach that transforms your digital presence into a revenue-generating powerhouse
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="relative group"
              >
                {/* Connection line */}
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 -right-4 w-8 h-0.5 bg-gradient-to-r from-neon-blue to-neon-green opacity-30 z-0"></div>
                )}
                
                <div className="glass-effect rounded-2xl p-8 text-center relative z-10 h-full group-hover:scale-105 transition-transform duration-300">
                  <div className="w-16 h-16 mx-auto mb-6 premium-border rounded-full p-1">
                    <div className="premium-border-content rounded-full w-full h-full flex items-center justify-center">
                      <step.icon className="w-8 h-8 text-neon-blue" />
                    </div>
                  </div>
                  
                  <div className="text-lg font-black text-gradient-primary mb-2">
                    {step.step}
                  </div>
                  
                  <h4 className="text-xl font-bold mb-4 text-foreground">
                    {step.title}
                  </h4>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center mt-20"
          >
            <h4 className="text-2xl font-bold mb-6">
              Ready to <span className="text-gradient-primary">Transform</span> Your Revenue?
            </h4>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join hundreds of businesses that have multiplied their revenue through our premium UI/UX design solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="btn-premium gradient-primary text-background hover:shadow-2xl px-10 py-6 text-lg font-semibold group">
                  Start Your Revenue Growth
                  <TrendingUp className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </Link>
              <Link href="/portfolio">
                <Button size="lg" variant="outline" className="glass-effect border-neon-blue text-neon-blue hover:bg-neon-blue/10 px-10 py-6 text-lg font-semibold">
                  View Success Stories
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-32 relative overflow-hidden bg-background">
        {/* Premium background with floating elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-72 h-72 gradient-primary rounded-full opacity-10 blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 gradient-secondary rounded-full opacity-10 blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 premium-border rounded-full p-1 mb-8"
            >
              <div className="premium-border-content rounded-full px-8 py-4">
                <span className="text-sm font-semibold text-gradient-secondary">PROVEN RESULTS</span>
              </div>
            </motion.div>
            
            <h2 className="font-black mb-8">
              Transforming Ideas into <span className="text-gradient-secondary">Excellence</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Our track record speaks for itself. We deliver measurable results that drive business growth.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-12 text-center">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="group"
              >
                <div className="card-premium p-12 h-full">
                  <StatsCounter stat={stat} index={index} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32 relative overflow-hidden">
        {/* Premium background */}
        <div className="absolute inset-0 gradient-bg"></div>
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-neon-pink to-transparent"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 premium-border rounded-full p-1 mb-8"
            >
              <div className="premium-border-content rounded-full px-8 py-4">
                <span className="text-sm font-semibold text-gradient-primary">CLIENT TESTIMONIALS</span>
              </div>
            </motion.div>
            
            <h2 className="font-black mb-8">
              What Our <span className="text-gradient-primary">Elite Clients</span> Say
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Don't just take our word for it. Hear from the visionary leaders who've transformed their businesses with our premium solutions.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-12 max-w-7xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.author}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="group"
              >
                <div className="card-premium p-10 h-full relative">
                  {/* Quote decoration */}
                  <div className="absolute -top-4 -left-4 w-16 h-16 gradient-primary rounded-2xl flex items-center justify-center">
                    <span className="text-background text-3xl font-bold">"</span>
                  </div>
                  
                  {/* Rating stars */}
                  <div className="flex justify-center mb-8">
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <motion.span 
                          key={i}
                          initial={{ opacity: 0, scale: 0 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3, delay: index * 0.2 + i * 0.1 }}
                          className="text-neon-green text-xl"
                        >
                          ★
                        </motion.span>
                      ))}
                    </div>
                  </div>
                  
                  <p className="text-lg text-foreground mb-8 italic leading-relaxed text-center">
                    {testimonial.content}
                  </p>
                  
                  <div className="flex items-center justify-center gap-4">
                    <div className="premium-border rounded-full p-1">
                      <div className="premium-border-content rounded-full">
                        <img 
                          src={testimonial.avatar} 
                          alt={testimonial.author}
                          className="w-16 h-16 rounded-full"
                        />
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="font-bold text-lg text-gradient-primary">{testimonial.author}</div>
                      <div className="text-muted-foreground">{testimonial.position}</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center mt-20"
          >
            <div className="glass-effect rounded-2xl p-8 max-w-4xl mx-auto">
              <p className="text-lg text-muted-foreground mb-6">
                Trusted by industry leaders across the globe
              </p>
              <div className="flex items-center justify-center gap-8 text-muted-foreground">
                <span className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-neon-green rounded-full"></div>
                  Fortune 500 Companies
                </span>
                <span className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-neon-blue rounded-full"></div>
                  Innovative Startups
                </span>
                <span className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-neon-pink rounded-full"></div>
                  Global Enterprises
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 relative overflow-hidden bg-background">
        {/* Premium background effects */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-neon-blue via-neon-green to-neon-pink opacity-60"></div>
          <div className="absolute top-1/3 left-1/3 w-96 h-96 gradient-primary rounded-full opacity-5 blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/3 right-1/3 w-80 h-80 gradient-secondary rounded-full opacity-5 blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>
        
        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-5xl mx-auto"
          >
            {/* Premium badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 premium-border rounded-full p-1 mb-12"
            >
              <div className="premium-border-content rounded-full px-10 py-5">
                <span className="text-sm font-bold text-gradient-primary">READY TO TRANSFORM?</span>
              </div>
            </motion.div>
            
            <motion.h2 
              className="font-black mb-10 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Ready to Elevate Your <span className="text-gradient-primary">Business Online?</span>
            </motion.h2>
            
            <motion.p 
              className="text-xl mb-12 max-w-3xl mx-auto text-muted-foreground leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Join the elite circle of businesses that have transformed their digital presence with Freelantix. Let's create something extraordinary together.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-6 justify-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <Link href="/contact">
                <Button size="lg" className="btn-premium gradient-secondary text-background hover:shadow-2xl px-12 py-6 text-lg font-bold group">
                  Start Your Project
                  <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="glass-effect border-neon-blue text-neon-blue hover:bg-neon-blue/10 px-12 py-6 text-lg font-semibold">
                  Schedule Consultation
                </Button>
              </Link>
            </motion.div>
            
            {/* Premium features highlight */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto"
            >
              <div className="glass-effect rounded-xl p-6">
                <div className="w-12 h-12 gradient-primary rounded-xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-background font-bold text-xl">⚡</span>
                </div>
                <h4 className="font-semibold mb-2 text-gradient-primary">Lightning Fast</h4>
                <p className="text-sm text-muted-foreground">48-hour project kickoff</p>
              </div>
              
              <div className="glass-effect rounded-xl p-6">
                <div className="w-12 h-12 gradient-secondary rounded-xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-background font-bold text-xl">🎯</span>
                </div>
                <h4 className="font-semibold mb-2 text-gradient-secondary">Precision Delivery</h4>
                <p className="text-sm text-muted-foreground">On-time, every time</p>
              </div>
              
              <div className="glass-effect rounded-xl p-6">
                <div className="w-12 h-12 gradient-tertiary rounded-xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-background font-bold text-xl">🏆</span>
                </div>
                <h4 className="font-semibold mb-2 neon-green">Premium Support</h4>
                <p className="text-sm text-muted-foreground">24/7 dedicated assistance</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
