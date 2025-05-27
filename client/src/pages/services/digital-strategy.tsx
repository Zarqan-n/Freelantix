import { motion } from "framer-motion";
import { ArrowRight, Target, BarChart3, Users, Zap, TrendingUp, Globe, Brain, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import MagneticButton from "@/components/ui/magnetic-button";
import MorphingCard from "@/components/ui/morphing-card";
import AdvancedBackground from "@/components/ui/advanced-background";
import ParticleSystem from "@/components/ui/particle-system";
import { Link } from "wouter";

const strategyServices = [
  {
    icon: BarChart3,
    title: "Data-Driven Analytics",
    description: "Deep dive into your business metrics to identify growth opportunities and optimization areas",
    impact: "Average 250% ROI improvement"
  },
  {
    icon: Users,
    title: "Customer Journey Mapping",
    description: "Understand every touchpoint in your customer's experience to maximize conversions",
    impact: "40% increase in customer retention"
  },
  {
    icon: Target,
    title: "Performance Optimization",
    description: "Systematic approach to improving conversion rates across all digital channels",
    impact: "Average 180% conversion boost"
  },
  {
    icon: Brain,
    title: "AI-Powered Insights",
    description: "Leverage machine learning to predict trends and automate decision-making processes",
    impact: "60% reduction in manual tasks"
  }
];

const strategyPhases = [
  {
    phase: "01",
    title: "Discovery & Audit",
    description: "Comprehensive analysis of your current digital presence, competitors, and market opportunities.",
    deliverables: ["Market Analysis", "Competitive Research", "Performance Audit", "SWOT Analysis"],
    duration: "2-3 weeks"
  },
  {
    phase: "02",
    title: "Strategy Development",
    description: "Create a customized digital roadmap aligned with your business objectives and market position.",
    deliverables: ["Strategic Plan", "KPI Framework", "Channel Strategy", "Budget Allocation"],
    duration: "2-3 weeks"
  },
  {
    phase: "03",
    title: "Implementation Planning",
    description: "Detailed execution plan with timelines, resources, and success metrics for each initiative.",
    deliverables: ["Implementation Roadmap", "Resource Plan", "Timeline", "Success Metrics"],
    duration: "1-2 weeks"
  },
  {
    phase: "04",
    title: "Execution & Optimization",
    description: "Launch strategies with continuous monitoring, testing, and optimization for maximum results.",
    deliverables: ["Campaign Launch", "A/B Testing", "Performance Reports", "Ongoing Optimization"],
    duration: "Ongoing"
  }
];

const caseStudies = [
  {
    title: "SaaS Company Growth Strategy",
    challenge: "Struggling with customer acquisition and high churn rates",
    solution: "Implemented data-driven customer lifecycle optimization and retention strategies",
    results: [
      "300% increase in qualified leads",
      "65% reduction in customer churn",
      "180% improvement in LTV/CAC ratio"
    ],
    industry: "SaaS",
    timeline: "6 months"
  },
  {
    title: "E-commerce Revenue Optimization",
    challenge: "Low conversion rates and inefficient marketing spend",
    solution: "Redesigned customer journey and implemented advanced analytics tracking",
    results: [
      "450% increase in online revenue",
      "220% improvement in conversion rate",
      "60% reduction in customer acquisition cost"
    ],
    industry: "E-commerce",
    timeline: "4 months"
  },
  {
    title: "B2B Lead Generation Overhaul",
    challenge: "Inconsistent lead quality and long sales cycles",
    solution: "Developed targeted content strategy and automated lead nurturing system",
    results: [
      "400% increase in qualified leads",
      "50% shorter sales cycles",
      "320% improvement in lead-to-customer rate"
    ],
    industry: "B2B Services",
    timeline: "8 months"
  }
];

const strategicAreas = [
  {
    title: "Growth Marketing",
    description: "Data-driven strategies to accelerate sustainable business growth",
    tactics: ["Customer Acquisition", "Retention Optimization", "Revenue Growth", "Market Expansion"]
  },
  {
    title: "Digital Transformation",
    description: "Modernize your business processes with cutting-edge technology",
    tactics: ["Process Automation", "Technology Integration", "Digital Workflows", "Performance Analytics"]
  },
  {
    title: "Customer Experience",
    description: "Create seamless experiences that delight customers and drive loyalty",
    tactics: ["Journey Optimization", "Personalization", "Omnichannel Strategy", "Customer Success"]
  },
  {
    title: "Competitive Intelligence",
    description: "Stay ahead of the competition with strategic market insights",
    tactics: ["Market Research", "Competitor Analysis", "Trend Forecasting", "Strategic Positioning"]
  }
];

export default function DigitalStrategy() {
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
                <span className="text-sm font-semibold text-gradient-primary">DIGITAL STRATEGY</span>
              </div>
            </motion.div>
            
            <motion.h1 
              className="font-black mb-8 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Transform Your Business With<br />
              <span className="text-gradient-primary">Data-Driven</span> <span className="text-gradient-secondary">Strategies</span>
            </motion.h1>
            
            <motion.p 
              className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Unlock your business potential with strategic digital transformation. 
              We combine deep analytics, market intelligence, and proven methodologies to accelerate your growth.
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
                    Accelerate Growth
                    <Target className="ml-3 h-5 w-5 group-hover:rotate-90 transition-transform duration-300" />
                  </Button>
                </MagneticButton>
              </Link>
              <Link href="/portfolio">
                <MagneticButton strength={0.2}>
                  <Button size="lg" variant="outline" className="glass-effect border-neon-blue text-neon-blue hover:bg-neon-blue/10 px-10 py-6 text-lg font-semibold">
                    View Case Studies
                  </Button>
                </MagneticButton>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Strategy Services */}
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
              Strategic <span className="text-gradient-primary">Services</span> That Drive Results
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive digital strategy services designed to optimize every aspect of your business performance.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {strategyServices.map((service, index) => (
              <motion.div
                key={service.title}
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
                          <service.icon className="w-8 h-8 text-neon-blue" />
                        </div>
                      </motion.div>
                      
                      <div>
                        <h3 className="text-xl font-bold mb-3 text-foreground">
                          {service.title}
                        </h3>
                        <p className="text-muted-foreground mb-4 leading-relaxed">
                          {service.description}
                        </p>
                        <div className="text-sm font-semibold text-neon-green">
                          {service.impact}
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

      {/* Strategy Process */}
      <section className="py-32 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="font-black mb-8">
              Our Strategic <span className="text-gradient-secondary">Methodology</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A proven framework that transforms insights into actionable strategies and measurable results.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {strategyPhases.map((phase, index) => (
              <motion.div
                key={phase.phase}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="relative"
              >
                {index < strategyPhases.length - 1 && (
                  <motion.div 
                    className="hidden lg:block absolute top-8 -right-4 w-8 h-0.5 bg-gradient-to-r from-neon-blue to-neon-green opacity-30"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                  />
                )}
                
                <MorphingCard>
                  <div className="glass-effect rounded-2xl p-6 h-full">
                    <motion.div 
                      className="text-2xl font-black text-gradient-primary mb-4"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    >
                      {phase.phase}
                    </motion.div>
                    <h3 className="text-lg font-bold mb-3 text-foreground">
                      {phase.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      {phase.description}
                    </p>
                    <div className="space-y-2 mb-4">
                      {phase.deliverables.map((deliverable, idx) => (
                        <div key={idx} className="text-xs text-muted-foreground flex items-center gap-2">
                          <div className="w-1 h-1 bg-neon-blue rounded-full"></div>
                          {deliverable}
                        </div>
                      ))}
                    </div>
                    <div className="text-xs font-semibold text-neon-green">
                      {phase.duration}
                    </div>
                  </div>
                </MorphingCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
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
              <span className="text-gradient-primary">Proven Results</span> Across Industries
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Real strategies, real growth. See how our digital strategies have transformed businesses.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <MorphingCard>
                  <div className="card-premium p-8 h-full">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs font-semibold text-neon-blue uppercase tracking-wider">
                        {study.industry}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        {study.timeline}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold mb-4 text-foreground">
                      {study.title}
                    </h3>
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-gradient-secondary mb-2">CHALLENGE:</h4>
                      <p className="text-sm text-muted-foreground mb-4">
                        {study.challenge}
                      </p>
                      <h4 className="text-sm font-semibold text-gradient-secondary mb-2">SOLUTION:</h4>
                      <p className="text-sm text-muted-foreground mb-4">
                        {study.solution}
                      </p>
                    </div>
                    <h4 className="text-sm font-semibold text-gradient-primary mb-3">RESULTS:</h4>
                    <div className="space-y-2">
                      {study.results.map((result, idx) => (
                        <div key={idx} className="flex items-center gap-3">
                          <TrendingUp className="w-4 h-4 text-neon-green" />
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

      {/* Strategic Areas */}
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
              <span className="text-gradient-secondary">Strategic Focus</span> Areas
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive strategies across all critical areas of your digital business.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {strategicAreas.map((area, index) => (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <MorphingCard>
                  <div className="glass-effect rounded-2xl p-8 h-full">
                    <h3 className="text-xl font-bold mb-4 text-foreground">
                      {area.title}
                    </h3>
                    <p className="text-muted-foreground mb-6">
                      {area.description}
                    </p>
                    <div className="grid grid-cols-2 gap-3">
                      {area.tactics.map((tactic, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <CheckCircle className="w-3 h-3 text-neon-green flex-shrink-0" />
                          {tactic}
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

      {/* CTA Section */}
      <section className="py-32 relative overflow-hidden bg-gradient-to-br from-background via-muted/10 to-background">
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-black mb-8">
              Ready to <span className="text-gradient-primary">Accelerate</span> Your Growth?
            </h2>
            <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
              Let's create a strategic roadmap that transforms your business and drives exceptional results.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="/contact">
                <MagneticButton strength={0.4}>
                  <Button size="lg" className="btn-premium gradient-primary text-background px-12 py-6 text-lg font-semibold group">
                    Start Strategic Planning
                    <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>
                </MagneticButton>
              </Link>
              <Link href="/portfolio">
                <MagneticButton strength={0.3}>
                  <Button size="lg" variant="outline" className="glass-effect border-neon-blue text-neon-blue hover:bg-neon-blue/10 px-12 py-6 text-lg font-semibold">
                    View All Case Studies
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