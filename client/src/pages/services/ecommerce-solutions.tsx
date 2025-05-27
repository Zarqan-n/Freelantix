import { motion } from "framer-motion";
import { ArrowRight, ShoppingCart, CreditCard, Package, TrendingUp, Shield, Users, CheckCircle, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import MagneticButton from "@/components/ui/magnetic-button";
import MorphingCard from "@/components/ui/morphing-card";
import AdvancedBackground from "@/components/ui/advanced-background";
import ParticleSystem from "@/components/ui/particle-system";
import { Link } from "wouter";

const ecommerceFeatures = [
  {
    icon: CreditCard,
    title: "Secure Payment Processing",
    description: "Multiple payment gateways with bank-level security and fraud protection",
    benefits: "99.9% transaction success rate"
  },
  {
    icon: Package,
    title: "Inventory Management",
    description: "Real-time stock tracking, automated reordering, and multi-warehouse support",
    benefits: "Reduce stockouts by 80%"
  },
  {
    icon: Users,
    title: "Customer Experience",
    description: "Personalized shopping experiences with AI-powered recommendations",
    benefits: "Increase AOV by 45%"
  },
  {
    icon: BarChart3,
    title: "Analytics & Insights",
    description: "Comprehensive reporting and data visualization for informed decisions",
    benefits: "Optimize conversion by 60%"
  }
];

const platforms = [
  {
    name: "Shopify Plus",
    description: "Enterprise-grade solution for high-volume businesses",
    icon: "🛍️",
    features: ["Unlimited bandwidth", "Advanced automation", "Multi-channel selling", "Custom checkout"]
  },
  {
    name: "WooCommerce",
    description: "Flexible WordPress-based ecommerce solution",
    icon: "🔧",
    features: ["Complete customization", "SEO optimized", "Plugin ecosystem", "Cost effective"]
  },
  {
    name: "Custom Solutions",
    description: "Bespoke ecommerce platforms built from scratch",
    icon: "⚡",
    features: ["Unlimited scalability", "Unique functionality", "Full ownership", "Advanced integrations"]
  }
];

const successStories = [
  {
    title: "Fashion Retailer Transformation",
    description: "Complete ecommerce overhaul for premium fashion brand",
    results: ["450% increase in online sales", "65% improvement in conversion rate", "300% growth in mobile orders"],
    timeline: "6 months",
    category: "Fashion"
  },
  {
    title: "B2B Marketplace Launch",
    description: "Custom marketplace connecting manufacturers with retailers",
    results: ["1000+ active vendors", "$5M+ in transactions", "25% commission revenue"],
    timeline: "8 months",
    category: "B2B"
  },
  {
    title: "Subscription Box Platform",
    description: "Recurring revenue model with personalized experiences",
    results: ["80% customer retention", "40% increase in LTV", "200% subscriber growth"],
    timeline: "4 months",
    category: "Subscription"
  }
];

const packages = [
  {
    title: "Startup Store",
    description: "Perfect for new businesses entering ecommerce",
    price: "Starting at $8,000",
    features: [
      "Up to 100 products",
      "Payment gateway setup",
      "Responsive design",
      "Basic SEO",
      "Order management",
      "Customer support system"
    ],
    highlight: false
  },
  {
    title: "Growth Platform",
    description: "Designed for scaling businesses with advanced needs",
    price: "Starting at $20,000",
    features: [
      "Unlimited products",
      "Multi-payment options",
      "Advanced analytics",
      "Inventory management",
      "Marketing automation",
      "API integrations"
    ],
    highlight: true
  },
  {
    title: "Enterprise Solution",
    description: "Custom-built for large-scale operations",
    price: "Starting at $50,000",
    features: [
      "Custom development",
      "Multi-store management",
      "Advanced security",
      "Dedicated support",
      "Performance optimization",
      "Ongoing maintenance"
    ],
    highlight: false
  }
];

export default function EcommerceSolutions() {
  return (
    <div className="pt-20 overflow-hidden">
      {/* Hero Section */}
      <section className="py-32 relative overflow-hidden">
        <AdvancedBackground variant="mesh" />
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
                <span className="text-sm font-semibold text-gradient-primary">ECOMMERCE SOLUTIONS</span>
              </div>
            </motion.div>
            
            <motion.h1 
              className="font-black mb-8 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Build <span className="text-gradient-primary">High-Converting</span><br />
              Online Stores That <span className="text-gradient-secondary">Scale</span>
            </motion.h1>
            
            <motion.p 
              className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Launch powerful ecommerce platforms that drive sales and grow your business. 
              From startup stores to enterprise marketplaces, we create shopping experiences that convert.
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
                    Launch Your Store
                    <ShoppingCart className="ml-3 h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                  </Button>
                </MagneticButton>
              </Link>
              <Link href="/portfolio">
                <MagneticButton strength={0.2}>
                  <Button size="lg" variant="outline" className="glass-effect border-neon-green text-neon-green hover:bg-neon-green/10 px-10 py-6 text-lg font-semibold">
                    View Store Examples
                  </Button>
                </MagneticButton>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-32 relative overflow-hidden bg-gradient-to-br from-background via-muted/10 to-background">
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="font-black mb-8">
              <span className="text-gradient-primary">Enterprise-Grade</span> Ecommerce Features
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Everything you need to run a successful online business, from payments to analytics.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {ecommerceFeatures.map((feature, index) => (
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
                          <feature.icon className="w-8 h-8 text-neon-green" />
                        </div>
                      </motion.div>
                      
                      <div>
                        <h3 className="text-xl font-bold mb-3 text-foreground">
                          {feature.title}
                        </h3>
                        <p className="text-muted-foreground mb-4 leading-relaxed">
                          {feature.description}
                        </p>
                        <div className="text-sm font-semibold text-neon-blue">
                          {feature.benefits}
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

      {/* Platforms Section */}
      <section className="py-32 relative overflow-hidden">
        <AdvancedBackground variant="geometric" />
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="font-black mb-8">
              Choose Your <span className="text-gradient-secondary">Platform</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We work with industry-leading platforms and create custom solutions tailored to your needs.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {platforms.map((platform, index) => (
              <motion.div
                key={platform.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <MorphingCard>
                  <div className="glass-effect rounded-2xl p-8 text-center h-full">
                    <motion.div 
                      className="text-4xl mb-6"
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      {platform.icon}
                    </motion.div>
                    <h3 className="text-xl font-bold mb-4 text-foreground">
                      {platform.name}
                    </h3>
                    <p className="text-muted-foreground mb-6">
                      {platform.description}
                    </p>
                    <ul className="space-y-2">
                      {platform.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <CheckCircle className="w-3 h-3 text-neon-green flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </MorphingCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-32 relative overflow-hidden bg-gradient-to-br from-background via-muted/10 to-background">
        <ParticleSystem particleCount={25} />
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="font-black mb-8">
              <span className="text-gradient-primary">Success Stories</span> That Inspire
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Real businesses, real growth. See how our ecommerce solutions have transformed companies.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <motion.div
                key={story.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <MorphingCard>
                  <div className="card-premium p-8 h-full">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs font-semibold text-neon-green uppercase tracking-wider">
                        {story.category}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        {story.timeline}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold mb-4 text-foreground">
                      {story.title}
                    </h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {story.description}
                    </p>
                    <div className="space-y-3">
                      {story.results.map((result, idx) => (
                        <div key={idx} className="flex items-center gap-3">
                          <TrendingUp className="w-4 h-4 text-neon-blue" />
                          <span className="text-sm font-semibold text-foreground">
                            {result}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </MorphingCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Packages */}
      <section className="py-32 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="font-black mb-8">
              <span className="text-gradient-secondary">Investment</span> Packages
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Transparent pricing for every stage of your ecommerce journey.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <motion.div
                key={pkg.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={pkg.highlight ? "scale-105" : ""}
              >
                <MorphingCard>
                  <div className={`card-premium p-8 h-full text-center relative ${pkg.highlight ? 'ring-2 ring-neon-green/30' : ''}`}>
                    {pkg.highlight && (
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                        <div className="bg-neon-green text-background px-4 py-1 rounded-full text-xs font-bold">
                          MOST POPULAR
                        </div>
                      </div>
                    )}
                    <h3 className="text-xl font-bold mb-4 text-foreground">
                      {pkg.title}
                    </h3>
                    <p className="text-muted-foreground mb-6">
                      {pkg.description}
                    </p>
                    <div className="text-2xl font-black text-gradient-primary mb-8">
                      {pkg.price}
                    </div>
                    <ul className="space-y-3 mb-8">
                      {pkg.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-3 text-sm">
                          <CheckCircle className="w-4 h-4 text-neon-green flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Link href="/contact">
                      <MagneticButton strength={0.2}>
                        <Button className={`w-full ${pkg.highlight ? 'btn-premium gradient-primary text-background' : 'btn-premium gradient-secondary text-background'}`}>
                          Get Started
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
      <section className="py-32 relative overflow-hidden bg-gradient-to-br from-background via-muted/10 to-background">
        <AdvancedBackground variant="constellation" />
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-black mb-8">
              Ready to Launch Your <span className="text-gradient-primary">Online Empire</span>?
            </h2>
            <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
              Let's build an ecommerce platform that not only looks amazing but drives serious revenue for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="/contact">
                <MagneticButton strength={0.4}>
                  <Button size="lg" className="btn-premium gradient-primary text-background px-12 py-6 text-lg font-semibold group">
                    Start Your Store Today
                    <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>
                </MagneticButton>
              </Link>
              <Link href="/portfolio">
                <MagneticButton strength={0.3}>
                  <Button size="lg" variant="outline" className="glass-effect border-neon-green text-neon-green hover:bg-neon-green/10 px-12 py-6 text-lg font-semibold">
                    View Store Portfolio
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