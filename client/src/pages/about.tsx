import { motion } from "framer-motion";
import { Lightbulb, Users, Rocket, Award, Heart, Globe, Target, Shield } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import StatsCounter from "@/components/ui/stats-counter";
import ParticleSystem from "@/components/ui/particle-system";
import MagneticWrapper from "@/components/ui/magnetic-wrapper";
import HolographicCard from "@/components/ui/holographic-card";
import MorphingCard from "@/components/ui/morphing-card";
import zarqanImage from "@assets/Screenshot 2025-05-29 172750.png";

const values = [
  {
    icon: Lightbulb,
    title: "Innovation First",
    description: "We stay ahead of the curve with latest technologies",
    color: "neon-blue"
  },
  {
    icon: Users,
    title: "Client-Centric",
    description: "Your success is our primary focus and motivation",
    color: "neon-green"
  },
  {
    icon: Rocket,
    title: "Results Driven",
    description: "We measure success by your business growth",
    color: "neon-pink"
  },
  {
    icon: Award,
    title: "Quality Excellence",
    description: "Delivering exceptional quality in every project",
    color: "neon-blue"
  }
];

const team = [
  {
    name: "Zarqan Nazeer",
    position: "Lead Developer",
    image: zarqanImage,
    color: "neon-blue"
  },
  {
    name: "Maya Patel",
    position: "Creative Director",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=face",
    color: "neon-green"
  },
  {
    name: "Zeeshan Ahmed",
    position: "Strategy Consultant",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&crop=face",
    color: "neon-pink"
  },
  {
    name: "Md Furkan",
    position: "UX Designer",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=200&h=200&fit=crop&crop=face",
    color: "neon-blue"
  }
];

const stats = [
  { number: 5, suffix: "+", label: "Years Experience" },
  { number: 100, suffix: "+", label: "Projects Delivered" },
  { number: 20, suffix: "+", label: "Industries Served" },
  { number: 24, suffix: "/7", label: "Support Available" }
];

export default function About() {
  return (
    <div className="pt-20">
      {/* Enhanced Hero Section */}
      <section className="py-32 bg-gradient-to-br from-background via-background to-muted/30 relative overflow-hidden">
        <ParticleSystem particleCount={40} />
        
        <div className="absolute inset-0 opacity-20">
          <motion.div 
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-blue/20 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div 
            className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-neon-green/20 rounded-full blur-3xl"
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
            className="text-center mb-20"
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h1 className="text-5xl lg:text-7xl font-black mb-8 leading-tight">
                About <span className="text-gradient-primary">Freelantix</span>
              </h1>
              <p className="text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto mb-12 leading-relaxed">
                Empowering businesses with digital innovation through cutting-edge technology, human-centered design, and unwavering commitment to excellence
              </p>
            </motion.div>

            {/* Key highlights */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto"
            >
              {[
                { icon: Globe, text: "Global Reach", color: "neon-blue" },
                { icon: Heart, text: "Passionate Team", color: "neon-pink" },
                { icon: Target, text: "Results Driven", color: "neon-green" }
              ].map((item, index) => (
                <motion.div
                  key={item.text}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                  className="flex items-center justify-center gap-3 p-4 rounded-2xl bg-background/50 backdrop-blur-sm border border-border/50"
                >
                  <item.icon className={`text-${item.color}`} size={24} />
                  <span className="font-semibold">{item.text}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Enhanced Mission & Values */}
      <section className="py-32 bg-gradient-to-br from-muted/50 via-background to-muted/30 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <motion.div 
            className="absolute top-20 right-20 w-64 h-64 bg-neon-pink/30 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div>
                <motion.h2 
                  className="text-4xl lg:text-6xl font-black mb-8 leading-tight"
                  initial={{ scale: 0.9 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  Empowering Businesses with <span className="text-gradient-primary">Digital Innovation</span>
                </motion.h2>
                <motion.p 
                  className="text-xl lg:text-2xl text-muted-foreground mb-12 leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  At Freelantix, we believe in the transformative power of technology. Our passionate team creates digital solutions that not only captivate but deliver measurable business impact.
                </motion.p>
              </div>
              
              <div className="grid gap-6">
                {values.map((value, index) => (
                  <MagneticWrapper key={value.title} strength={0.1}>
                    <motion.div
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.15 }}
                      className="group"
                    >
                      <HolographicCard className="p-6">
                        <div className="flex items-start space-x-5">
                          <motion.div 
                            className={`w-14 h-14 bg-gradient-to-br from-${value.color}/20 to-${value.color}/40 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                            whileHover={{ rotate: 360 }}
                            transition={{ duration: 0.8 }}
                          >
                            <value.icon className={`text-${value.color} text-2xl`} size={28} />
                          </motion.div>
                          <div className="flex-1">
                            <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors duration-300">{value.title}</h3>
                            <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                          </div>
                        </div>
                      </HolographicCard>
                    </motion.div>
                  </MagneticWrapper>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <MorphingCard className="overflow-hidden">
                <motion.img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop&crop=center" 
                  alt="Diverse team collaborating in modern office"
                  className="w-full h-full object-cover rounded-2xl"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.6 }}
                />
                
                {/* Floating stats overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent rounded-2xl">
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="grid grid-cols-2 gap-4">
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.8 }}
                        className="bg-background/90 backdrop-blur-sm rounded-xl p-4 text-center"
                      >
                        <div className="text-2xl font-black text-neon-blue">5+</div>
                        <div className="text-sm text-muted-foreground">Years</div>
                      </motion.div>
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 1.0 }}
                        className="bg-background/90 backdrop-blur-sm rounded-xl p-4 text-center"
                      >
                        <div className="text-2xl font-black text-neon-green">100+</div>
                        <div className="text-sm text-muted-foreground">Projects</div>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </MorphingCard>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Enhanced Team Section */}
      <section className="py-32 bg-gradient-to-br from-background via-muted/20 to-background relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <motion.div 
            className="absolute top-1/3 left-1/3 w-72 h-72 bg-neon-pink/20 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <motion.h2 
              className="text-4xl lg:text-6xl font-black mb-8 leading-tight"
              initial={{ scale: 0.9 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Meet Our <span className="text-gradient-primary">Dream Team</span>
            </motion.h2>
            <motion.p 
              className="text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Passionate professionals who turn bold ideas into extraordinary digital experiences
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <MagneticWrapper key={member.name} strength={0.15}>
                <motion.div
                  initial={{ opacity: 0, y: 30, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className="group h-full"
                >
                  <HolographicCard className="h-full">
                    <CardContent className="p-8 text-center h-full flex flex-col">
                      <div className="relative mb-6">
                        <motion.div
                          className="relative"
                          whileHover={{ scale: 1.05 }}
                          transition={{ duration: 0.3 }}
                        >
                          <div className={`absolute inset-0 bg-gradient-to-r from-${member.color}/20 to-${member.color}/40 rounded-full blur-lg group-hover:blur-xl transition-all duration-300`} />
                          <img 
                            src={member.image} 
                            alt={member.name}
                            className={`w-28 h-28 rounded-full mx-auto border-3 border-${member.color}/50 group-hover:border-${member.color} transition-all duration-300 relative z-10`}
                          />
                        </motion.div>
                        
                        {/* Floating decoration */}
                        <motion.div
                          className={`absolute -top-2 -right-2 w-6 h-6 bg-${member.color} rounded-full opacity-80`}
                          animate={{ 
                            scale: [1, 1.2, 1],
                            opacity: [0.8, 1, 0.8]
                          }}
                          transition={{ duration: 2, repeat: Infinity }}
                        />
                      </div>
                      
                      <div className="flex-1 flex flex-col justify-center">
                        <motion.h3 
                          className={`font-black text-xl mb-2 text-${member.color} group-hover:scale-105 transition-transform duration-300`}
                        >
                          {member.name}
                        </motion.h3>
                        <p className="text-muted-foreground font-medium mb-4">{member.position}</p>
                        
                        {/* Skills or specialization indicators */}
                        <motion.div
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                          className="flex justify-center gap-2 mt-auto"
                        >
                          {[1, 2, 3].map((dot) => (
                            <motion.div
                              key={dot}
                              className={`w-2 h-2 bg-${member.color}/60 rounded-full`}
                              animate={{ scale: [1, 1.3, 1] }}
                              transition={{ 
                                duration: 1.5, 
                                repeat: Infinity, 
                                delay: dot * 0.2 
                              }}
                            />
                          ))}
                        </motion.div>
                      </div>
                    </CardContent>
                  </HolographicCard>
                </motion.div>
              </MagneticWrapper>
            ))}
          </div>

          {/* Team stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center mt-20"
          >
            <div className="grid md:grid-cols-3 gap-8 max-w-2xl mx-auto">
              <div className="p-6 rounded-2xl bg-background/50 backdrop-blur-sm border border-border/50">
                <div className="text-3xl font-black text-neon-blue mb-2">15+</div>
                <div className="text-sm text-muted-foreground">Team Members</div>
              </div>
              <div className="p-6 rounded-2xl bg-background/50 backdrop-blur-sm border border-border/50">
                <div className="text-3xl font-black text-neon-green mb-2">8+</div>
                <div className="text-sm text-muted-foreground">Specializations</div>
              </div>
              <div className="p-6 rounded-2xl bg-background/50 backdrop-blur-sm border border-border/50">
                <div className="text-3xl font-black text-neon-pink mb-2">4.9★</div>
                <div className="text-sm text-muted-foreground">Team Rating</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Company Stats */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Our <span className="neon-green">Impact</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Numbers that reflect our commitment to excellence
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <StatsCounter key={stat.label} stat={stat} index={index} />
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
              Our <span className="neon-blue">Process</span>
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
