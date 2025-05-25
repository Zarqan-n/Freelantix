import { motion } from "framer-motion";
import { ArrowRight, Code, Palette, ShoppingCart, Target } from "lucide-react";
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
      <section className="min-h-screen flex items-center relative">
        <AnimatedBackground />
        
        <div className="container mx-auto px-6 py-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="font-black mb-8 leading-tight tracking-tight">
                Building <span className="text-gradient-primary">Cutting-Edge</span><br />
                Digital <span className="text-shimmer">Experiences</span>
              </h1>
              <p className="text-xl lg:text-2xl text-muted-foreground mb-10 font-light leading-relaxed max-w-2xl">
                Premium digital solutions that transform businesses and accelerate growth through innovation and excellence
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact">
                  <Button size="lg" className="btn-premium gradient-primary text-background hover:shadow-2xl px-8 py-6 text-lg font-semibold">
                    Get Started <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/portfolio">
                  <Button size="lg" variant="outline" className="glass-effect border-neon-blue text-neon-blue hover:bg-neon-blue/10 px-8 py-6 text-lg font-semibold">
                    View Portfolio
                  </Button>
                </Link>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <img 
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop&crop=center" 
                alt="Modern tech workspace with multiple monitors"
                className="rounded-2xl shadow-2xl animate-float"
              />
              <div className="absolute -top-6 -right-6 w-40 h-40 gradient-secondary rounded-full opacity-20 animate-glow blur-xl"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 gradient-tertiary rounded-full opacity-20 animate-glow blur-xl" style={{animationDelay: '1s'}}></div>
              <div className="premium-border absolute inset-0 rounded-2xl opacity-30">
                <div className="premium-border-content w-full h-full rounded-2xl"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="font-bold mb-6">
              Our <span className="text-gradient-primary">Premium Services</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Empowering businesses with innovative digital solutions that drive growth and success
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={service.title} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 gradient-bg">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Transforming Ideas into <span className="neon-green">Profits</span>
            </h2>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {stats.map((stat, index) => (
              <StatsCounter key={stat.label} stat={stat} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              What Our <span className="neon-blue">Clients Say</span>
            </h2>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.author}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <Card className="bg-card border-border">
                  <CardContent className="p-8">
                    <div className="flex items-center mb-6">
                      <div className="text-3xl neon-blue mr-4">
                        <span className="text-4xl">"</span>
                      </div>
                      <div className="flex text-neon-green">
                        {[...Array(5)].map((_, i) => (
                          <span key={i}>★</span>
                        ))}
                      </div>
                    </div>
                    <p className="text-lg text-muted-foreground mb-6 italic">
                      {testimonial.content}
                    </p>
                    <div className="flex items-center">
                      <img 
                        src={testimonial.avatar} 
                        alt={testimonial.author}
                        className="w-12 h-12 rounded-full mr-4"
                      />
                      <div>
                        <div className="font-semibold">{testimonial.author}</div>
                        <div className="text-muted-foreground text-sm">{testimonial.position}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 gradient-bg">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl lg:text-5xl font-bold mb-6">
              Ready to Elevate Your <span className="neon-blue">Business Online?</span>
            </h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto text-muted-foreground">
              Join the hundreds of businesses that have transformed their digital presence with Freelantix. Let's create something amazing together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="btn-neon bg-neon-pink text-background hover:bg-neon-pink/90">
                  Start Your Project
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="border-neon-blue text-neon-blue hover:bg-neon-blue hover:text-background">
                  Schedule Consultation
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
