import { motion } from "framer-motion";
import { Lightbulb, Users, Rocket, Award, Heart, Globe, Target, Shield, Star, Zap, TrendingUp, CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import StatsCounter from "@/components/ui/stats-counter";
import ParticleSystem from "@/components/ui/particle-system";
import MagneticWrapper from "@/components/ui/magnetic-wrapper";
import HolographicCard from "@/components/ui/holographic-card";
import MorphingCard from "@/components/ui/morphing-card";
import OptimizedMotion from "@/components/ui/optimized-motion";
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
    name: "Zarqan",
    position: "Lead Developer",
    image: zarqanImage,
    color: "neon-blue",
    specialty: "Full-Stack Architecture",
    experience: "5+ Years",
    skills: ["React", "Node.js", "TypeScript", "AWS"]
  },
  {
    name: "Zeeshan Ahmed",
    position: "Strategy Consultant",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&crop=face",
    color: "neon-pink",
    specialty: "Digital Transformation",
    experience: "8+ Years",
    skills: ["Strategy", "Analytics", "Growth", "Optimization"]
  },
  {
    name: "Md Furkan",
    position: "UX Designer",
    image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGVyc29ufGVufDB8fDB8fHww",
    color: "neon-blue",
    specialty: "User Experience Design",
    experience: "4+ Years",
    skills: ["User Research", "Prototyping", "Design Systems", "Testing"]
  },
  {
    name: "Maya Patel",
    position: "Creative Director",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=face",
    color: "neon-green",
    specialty: "Brand & Visual Identity",
    experience: "7+ Years",
    skills: ["UI/UX", "Branding", "Motion Design", "Figma"]
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
          <motion.div 
            className="absolute top-3/4 left-1/2 w-64 h-64 bg-neon-pink/15 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.15, 0.3, 0.15],
            }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
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
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="group flex items-center justify-center gap-3 p-6 rounded-2xl bg-background/60 backdrop-blur-sm border border-border/50 hover:border-primary/30 transition-all duration-300 cursor-pointer"
                >
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className={`p-2 rounded-lg bg-${item.color}/10 group-hover:bg-${item.color}/20 transition-colors duration-300`}
                  >
                    <item.icon className={`text-${item.color} group-hover:scale-110 transition-transform duration-300`} size={24} />
                  </motion.div>
                  <span className="font-semibold group-hover:text-primary transition-colors duration-300">{item.text}</span>
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
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-20">
          <motion.div 
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-pink/20 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div 
            className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-neon-blue/20 rounded-full blur-3xl"
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div 
            className="absolute top-3/4 left-2/3 w-64 h-64 bg-neon-green/20 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.4, 1],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
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
              className="text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Passionate professionals who turn bold ideas into extraordinary digital experiences
            </motion.p>
            
            {/* Team intro badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-wrap justify-center gap-4 mb-16"
            >
              {[
                { icon: Users, text: "Expert Team", color: "neon-blue" },
                { icon: Shield, text: "Trusted Partners", color: "neon-green" },
                { icon: Target, text: "Results Focused", color: "neon-pink" }
              ].map((badge, index) => (
                <motion.div
                  key={badge.text}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full bg-background/60 backdrop-blur-sm border border-${badge.color}/30 hover:border-${badge.color}/60 transition-all duration-300`}
                >
                  <badge.icon className={`text-${badge.color} w-4 h-4`} />
                  <span className="text-sm font-medium">{badge.text}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Enhanced Team Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {team.map((member, index) => (
              <MagneticWrapper key={member.name} strength={0.15}>
                <motion.div
                  initial={{ opacity: 0, y: 50, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.7, delay: index * 0.15 }}
                  className="group h-full relative"
                >
                  {/* Floating particles around card */}
                  <div className="absolute -inset-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                    {[...Array(6)].map((_, i) => (
                      <motion.div
                        key={i}
                        className={`absolute w-1 h-1 bg-${member.color} rounded-full`}
                        style={{
                          top: `${Math.random() * 100}%`,
                          left: `${Math.random() * 100}%`,
                        }}
                        animate={{
                          y: [0, -20, 0],
                          opacity: [0, 1, 0],
                          scale: [0, 1, 0],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: i * 0.3,
                        }}
                      />
                    ))}
                  </div>

                  <HolographicCard className="h-full overflow-hidden relative">
                    {/* Animated border gradient */}
                    <div className={`absolute inset-0 bg-gradient-to-r from-${member.color}/20 via-transparent to-${member.color}/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl`} />
                    
                    <CardContent className="p-0 h-full relative z-10">
                      {/* Profile Image Section with enhanced effects */}
                      <div className="relative p-8 pb-4">
                        <motion.div
                          className="relative mx-auto w-36 h-36"
                          whileHover={{ scale: 1.08, rotateY: 15 }}
                          transition={{ duration: 0.6, type: "spring" }}
                        >
                          {/* Multiple glowing layers */}
                          <div className={`absolute inset-0 bg-gradient-to-r from-${member.color}/40 to-${member.color}/80 rounded-full blur-xl group-hover:blur-2xl transition-all duration-700 animate-pulse`} />
                          <div className={`absolute inset-2 bg-gradient-to-r from-${member.color}/20 to-${member.color}/40 rounded-full blur-lg transition-all duration-500`} />
                          
                          {/* Profile image with enhanced styling */}
                          <motion.img 
                            src={member.image} 
                            alt={member.name}
                            className={`w-full h-full rounded-full object-cover border-4 border-${member.color}/60 group-hover:border-${member.color} transition-all duration-700 relative z-10 shadow-2xl`}
                            whileHover={{ filter: "brightness(1.1)" }}
                          />
                          
                          {/* Enhanced status indicator with animation */}
                          <motion.div
                            className={`absolute -bottom-1 -right-1 w-10 h-10 bg-gradient-to-r from-${member.color} to-${member.color}/80 rounded-full border-4 border-background flex items-center justify-center shadow-lg`}
                            animate={{ 
                              scale: [1, 1.15, 1],
                              rotate: [0, 180, 360],
                              boxShadow: [
                                `0 0 0 0 rgba(var(--${member.color}), 0.7)`,
                                `0 0 0 10px rgba(var(--${member.color}), 0)`,
                                `0 0 0 0 rgba(var(--${member.color}), 0)`
                              ]
                            }}
                            transition={{ duration: 3, repeat: Infinity }}
                          >
                            <CheckCircle className="w-4 h-4 text-background" />
                          </motion.div>

                          {/* Rating stars */}
                          <motion.div 
                            className="absolute -top-2 left-1/2 transform -translate-x-1/2 flex gap-1"
                            initial={{ opacity: 0, y: -10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                          >
                            {[...Array(5)].map((_, i) => (
                              <motion.div
                                key={i}
                                animate={{
                                  scale: [1, 1.2, 1],
                                  rotate: [0, 180, 360]
                                }}
                                transition={{
                                  duration: 2,
                                  delay: i * 0.1,
                                  repeat: Infinity,
                                  repeatDelay: 3
                                }}
                              >
                                <Star className={`w-3 h-3 text-${member.color} fill-current`} />
                              </motion.div>
                            ))}
                          </motion.div>
                        </motion.div>
                      </div>
                      
                      {/* Enhanced Member Info */}
                      <div className="px-8 pb-8 text-center">
                        <motion.h3 
                          className={`font-black text-xl mb-1 text-${member.color} group-hover:scale-105 transition-all duration-300`}
                          whileHover={{ textShadow: `0 0 20px rgba(var(--${member.color}), 0.5)` }}
                        >
                          {member.name}
                        </motion.h3>
                        <p className="text-muted-foreground font-semibold mb-1">{member.position}</p>
                        <p className="text-sm text-muted-foreground/80 mb-4">{member.specialty}</p>
                        
                        {/* Enhanced experience badge */}
                        <motion.div
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                          whileHover={{ scale: 1.05 }}
                          className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-${member.color}/10 to-${member.color}/20 border border-${member.color}/30 mb-4 shadow-lg backdrop-blur-sm`}
                        >
                          <Zap className={`w-3 h-3 text-${member.color}`} />
                          <span className={`text-xs font-bold text-${member.color}`}>{member.experience}</span>
                        </motion.div>
                        
                        {/* Enhanced skills with better animations */}
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: 1.0 + index * 0.1 }}
                          className="flex flex-wrap justify-center gap-2"
                        >
                          {member.skills.slice(0, 3).map((skill, skillIndex) => (
                            <motion.span
                              key={skill}
                              initial={{ opacity: 0, scale: 0.8 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              whileHover={{ 
                                scale: 1.1, 
                                backgroundColor: `rgba(var(--${member.color}), 0.1)`,
                                color: `rgb(var(--${member.color}))`
                              }}
                              transition={{ duration: 0.4, delay: 1.2 + skillIndex * 0.1 }}
                              className="text-xs px-3 py-1.5 bg-muted/60 rounded-full text-muted-foreground hover:shadow-md transition-all duration-300 cursor-pointer border border-transparent hover:border-muted-foreground/20"
                            >
                              {skill}
                            </motion.span>
                          ))}
                          {member.skills.length > 3 && (
                            <motion.span 
                              className="text-xs px-3 py-1.5 bg-muted/40 rounded-full text-muted-foreground/70 border border-dashed border-muted-foreground/30"
                              whileHover={{ scale: 1.05 }}
                            >
                              +{member.skills.length - 3} more
                            </motion.span>
                          )}
                        </motion.div>

                        {/* Performance indicator */}
                        <motion.div
                          initial={{ opacity: 0, width: 0 }}
                          whileInView={{ opacity: 1, width: "100%" }}
                          transition={{ duration: 1, delay: 1.5 + index * 0.1 }}
                          className="mt-4 mb-2"
                        >
                          <div className="flex items-center justify-between mb-1">
                            <span className="text-xs text-muted-foreground">Performance</span>
                            <span className="text-xs font-bold text-muted-foreground">98%</span>
                          </div>
                          <div className="w-full bg-muted/30 rounded-full h-1.5">
                            <motion.div
                              className={`bg-gradient-to-r from-${member.color}/80 to-${member.color} h-1.5 rounded-full`}
                              initial={{ width: 0 }}
                              whileInView={{ width: "98%" }}
                              transition={{ duration: 1.5, delay: 1.8 + index * 0.1 }}
                            />
                          </div>
                        </motion.div>
                      </div>
                      
                      {/* Enhanced hover overlay with gradient */}
                      <motion.div
                        className={`absolute inset-0 bg-gradient-to-t from-${member.color}/10 via-${member.color}/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none rounded-2xl`}
                      />

                      {/* Decorative corner elements */}
                      <div className={`absolute top-4 right-4 w-2 h-2 bg-${member.color}/60 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                      <div className={`absolute bottom-4 left-4 w-2 h-2 bg-${member.color}/60 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                    </CardContent>
                  </HolographicCard>
                </motion.div>
              </MagneticWrapper>
            ))}
          </div>

          {/* Enhanced Team Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center relative"
          >
            {/* Background decoration */}
            <div className="absolute inset-0 -z-10">
              <motion.div
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-24 bg-gradient-to-r from-neon-blue/5 via-neon-green/5 to-neon-pink/5 rounded-full blur-2xl"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{ duration: 4, repeat: Infinity }}
              />
            </div>

            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="text-3xl font-black mb-12 bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent"
            >
              Team Excellence Metrics
            </motion.h3>
            
            <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {[
                { number: "15+", label: "Team Members", color: "neon-blue", icon: Users, description: "Expert professionals" },
                { number: "8+", label: "Specializations", color: "neon-green", icon: Target, description: "Technology domains" },
                { number: "4.9★", label: "Team Rating", color: "neon-pink", icon: Award, description: "Client satisfaction" },
                { number: "24/7", label: "Availability", color: "neon-blue", icon: Shield, description: "Global support" }
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 30, scale: 0.8 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.7, delay: 1.0 + index * 0.15 }}
                  className="group relative"
                >
                  {/* Floating accent */}
                  <motion.div
                    className={`absolute -top-2 -right-2 w-4 h-4 bg-${stat.color}/60 rounded-full`}
                    animate={{
                      scale: [1, 1.3, 1],
                      opacity: [0.6, 1, 0.6],
                    }}
                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
                  />

                  <HolographicCard className="p-8 text-center hover:scale-105 transition-all duration-500 relative overflow-hidden">
                    {/* Animated background gradient */}
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-br from-${stat.color}/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                      initial={false}
                    />

                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.8, type: "spring" }}
                      className={`w-16 h-16 bg-gradient-to-br from-${stat.color}/20 to-${stat.color}/40 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg relative z-10`}
                    >
                      <stat.icon className={`text-${stat.color} w-8 h-8`} />
                      
                      {/* Icon glow effect */}
                      <motion.div
                        className={`absolute inset-0 bg-${stat.color}/20 rounded-2xl blur-xl`}
                        animate={{
                          scale: [1, 1.2, 1],
                          opacity: [0.3, 0.6, 0.3],
                        }}
                        transition={{ duration: 3, repeat: Infinity, delay: index * 0.2 }}
                      />
                    </motion.div>

                    <motion.div 
                      className={`text-4xl font-black text-${stat.color} mb-2 group-hover:scale-110 transition-transform duration-300 relative z-10`}
                      whileHover={{
                        textShadow: `0 0 20px rgba(var(--${stat.color}), 0.5)`
                      }}
                    >
                      {stat.number}
                    </motion.div>
                    
                    <div className="text-sm font-bold text-foreground mb-1 relative z-10">{stat.label}</div>
                    <div className="text-xs text-muted-foreground relative z-10">{stat.description}</div>

                    {/* Progress indicator */}
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "100%" }}
                      transition={{ duration: 1.5, delay: 1.5 + index * 0.1 }}
                      className="mt-4 relative z-10"
                    >
                      <div className="w-full bg-muted/30 rounded-full h-1">
                        <motion.div
                          className={`bg-gradient-to-r from-${stat.color}/80 to-${stat.color} h-1 rounded-full`}
                          initial={{ width: 0 }}
                          whileInView={{ width: "95%" }}
                          transition={{ duration: 2, delay: 1.8 + index * 0.1 }}
                        />
                      </div>
                    </motion.div>
                  </HolographicCard>
                </motion.div>
              ))}
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

      {/* Enhanced Process Section */}
      <section className="py-32 bg-gradient-to-br from-background via-muted/10 to-background relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0 opacity-10">
          <motion.div
            className="absolute top-1/4 right-1/4 w-72 h-72 bg-neon-blue/20 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{ duration: 8, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-neon-green/20 rounded-full blur-3xl"
            animate={{
              scale: [1.1, 1, 1.1],
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{ duration: 10, repeat: Infinity }}
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
              Our <span className="text-gradient-primary">Process</span>
            </motion.h2>
            <motion.p 
              className="text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              A proven methodology that ensures successful project delivery through systematic excellence
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8 relative">
            {/* Connecting lines */}
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-muted-foreground/20 to-transparent transform -translate-y-1/2 z-0" />
            
            {[
              { 
                step: "1", 
                title: "Plan", 
                description: "Strategy & Research", 
                color: "neon-blue",
                icon: Target,
                details: "Market analysis, user research, strategic planning"
              },
              { 
                step: "2", 
                title: "Build", 
                description: "Design & Development", 
                color: "neon-green",
                icon: Rocket,
                details: "UI/UX design, development, quality assurance"
              },
              { 
                step: "3", 
                title: "Launch", 
                description: "Testing & Deployment", 
                color: "neon-pink",
                icon: TrendingUp,
                details: "Performance testing, deployment, go-live support"
              },
              { 
                step: "4", 
                title: "Grow", 
                description: "Optimization & Support", 
                color: "neon-blue",
                icon: Star,
                details: "Analytics, optimization, ongoing maintenance"
              }
            ].map((phase, index) => (
              <motion.div
                key={phase.step}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.7, delay: index * 0.2 }}
                className="relative z-10"
              >
                <MagneticWrapper strength={0.1}>
                  <motion.div 
                    className="group text-center"
                    whileHover={{ y: -10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <HolographicCard className="p-8 relative overflow-hidden">
                      {/* Step number with enhanced styling */}
                      <motion.div
                        className={`w-20 h-20 bg-gradient-to-br from-${phase.color}/80 to-${phase.color} rounded-2xl flex items-center justify-center text-background font-black text-2xl mx-auto mb-6 shadow-2xl relative`}
                        whileHover={{ 
                          scale: 1.1, 
                          rotate: 5,
                          boxShadow: `0 20px 40px rgba(var(--${phase.color}), 0.3)`
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        {phase.step}
                        
                        {/* Glowing border effect */}
                        <motion.div
                          className={`absolute inset-0 bg-${phase.color}/30 rounded-2xl blur-lg`}
                          animate={{
                            scale: [1, 1.2, 1],
                            opacity: [0.5, 0.8, 0.5],
                          }}
                          transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
                        />
                      </motion.div>

                      {/* Icon */}
                      <motion.div
                        className={`w-12 h-12 bg-${phase.color}/10 rounded-xl flex items-center justify-center mx-auto mb-4`}
                        whileHover={{ scale: 1.1, rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        <phase.icon className={`text-${phase.color} w-6 h-6`} />
                      </motion.div>

                      <motion.h3 
                        className="text-2xl font-black mb-2 group-hover:text-primary transition-colors duration-300"
                        whileHover={{ scale: 1.05 }}
                      >
                        {phase.title}
                      </motion.h3>
                      
                      <p className="text-muted-foreground font-semibold mb-3">{phase.description}</p>
                      <p className="text-sm text-muted-foreground/80 leading-relaxed">{phase.details}</p>

                      {/* Progress indicator */}
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: "100%" }}
                        transition={{ duration: 1.5, delay: 1 + index * 0.2 }}
                        className="mt-6"
                      >
                        <div className="w-full bg-muted/30 rounded-full h-1">
                          <motion.div
                            className={`bg-gradient-to-r from-${phase.color}/60 to-${phase.color} h-1 rounded-full`}
                            initial={{ width: 0 }}
                            whileInView={{ width: "100%" }}
                            transition={{ duration: 2, delay: 1.5 + index * 0.2 }}
                          />
                        </div>
                      </motion.div>

                      {/* Hover overlay */}
                      <motion.div
                        className={`absolute inset-0 bg-gradient-to-t from-${phase.color}/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl`}
                      />
                    </HolographicCard>
                  </motion.div>
                </MagneticWrapper>
              </motion.div>
            ))}
          </div>

          {/* Process completion badge */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.5 }}
            className="text-center mt-16"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-neon-blue/10 via-neon-green/10 to-neon-pink/10 rounded-full border border-muted-foreground/20 backdrop-blur-sm"
            >
              <CheckCircle className="text-neon-green w-6 h-6" />
              <span className="text-lg font-semibold">100% Success Rate</span>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              >
                <Star className="text-neon-pink w-5 h-5 fill-current" />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
