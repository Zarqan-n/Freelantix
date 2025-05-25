import { motion } from "framer-motion";
import { Briefcase, Users, Heart, Zap, Globe, Code, Palette, Rocket, Star, Trophy, Coffee, MapPin } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const benefits = [
  {
    icon: Heart,
    title: "Health & Wellness",
    description: "Comprehensive health insurance and wellness programs",
    color: "neon-pink"
  },
  {
    icon: Globe,
    title: "Remote-First",
    description: "Work from anywhere with flexible schedules",
    color: "neon-blue"
  },
  {
    icon: Rocket,
    title: "Growth Opportunities",
    description: "Continuous learning and career development",
    color: "neon-green"
  },
  {
    icon: Coffee,
    title: "Work-Life Balance",
    description: "Unlimited PTO and mental health support",
    color: "neon-pink"
  }
];

const openPositions = [
  {
    title: "Senior Frontend Developer",
    department: "Engineering",
    location: "Remote / San Francisco",
    type: "Full-time",
    experience: "5+ years",
    color: "neon-blue",
    skills: ["React", "TypeScript", "Next.js", "Tailwind CSS"],
    description: "Lead frontend development for cutting-edge web applications"
  },
  {
    title: "UI/UX Designer",
    department: "Design",
    location: "Remote / New York",
    type: "Full-time",
    experience: "3+ years",
    color: "neon-green",
    skills: ["Figma", "Design Systems", "User Research", "Prototyping"],
    description: "Create beautiful, user-centered design experiences"
  },
  {
    title: "DevOps Engineer",
    department: "Engineering",
    location: "Remote / Austin",
    type: "Full-time",
    experience: "4+ years",
    color: "neon-pink",
    skills: ["AWS", "Docker", "Kubernetes", "CI/CD"],
    description: "Build and maintain scalable infrastructure"
  },
  {
    title: "Marketing Manager",
    department: "Marketing",
    location: "Remote / Los Angeles",
    type: "Full-time",
    experience: "4+ years",
    color: "neon-blue",
    skills: ["Digital Marketing", "SEO", "Content Strategy", "Analytics"],
    description: "Drive growth through innovative marketing strategies"
  }
];

const companyValues = [
  {
    icon: Star,
    title: "Excellence",
    description: "We strive for the highest quality in everything we do"
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Together we achieve more than we could alone"
  },
  {
    icon: Zap,
    title: "Innovation",
    description: "We embrace new ideas and cutting-edge technology"
  },
  {
    icon: Trophy,
    title: "Growth",
    description: "Continuous learning and improvement for all"
  }
];

export default function Careers() {
  return (
    <div className="pt-20">
      {/* Enhanced Hero Section */}
      <section className="py-24 bg-gradient-to-br from-background via-muted/20 to-background relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-30">
          <motion.div 
            className="absolute top-20 left-20 w-64 h-64 bg-neon-green/20 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.2, 0.4, 0.2],
              x: [0, 30, 0],
              y: [0, -20, 0]
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div 
            className="absolute bottom-20 right-20 w-80 h-80 bg-neon-pink/15 rounded-full blur-3xl"
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.15, 0.3, 0.15],
              x: [0, -40, 0],
              y: [0, 20, 0]
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />
          
          {/* Floating job icons */}
          {[Code, Palette, Briefcase, Globe].map((Icon, i) => (
            <motion.div
              key={i}
              className="absolute"
              style={{
                left: `${20 + i * 20}%`,
                top: `${30 + (i % 2) * 40}%`
              }}
              animate={{
                y: [-20, -40, -20],
                rotate: [0, 10, 0],
                opacity: [0.3, 0.6, 0.3]
              }}
              transition={{
                duration: 4 + i * 0.5,
                repeat: Infinity,
                delay: i * 0.8,
                ease: "easeInOut"
              }}
            >
              <Icon size={24} className="text-neon-blue/40" />
            </motion.div>
          ))}
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <motion.div
              className="flex justify-center mb-6"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="w-20 h-20 bg-gradient-to-br from-neon-green to-neon-pink rounded-2xl flex items-center justify-center shadow-2xl">
                <Briefcase size={40} className="text-white" />
              </div>
            </motion.div>
            
            <motion.h1 
              className="text-4xl lg:text-6xl font-black mb-6"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Join Our <span className="neon-green">Team</span>
            </motion.h1>
            <motion.p 
              className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              Be part of a team that's shaping the future of digital experiences. We're looking for passionate individuals who want to make a difference.
            </motion.p>
            
            <motion.div
              className="flex justify-center gap-4 mt-8"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <Badge className="bg-neon-green/20 text-neon-green border-neon-green/30 px-4 py-2">
                🌟 Award-Winning Culture
              </Badge>
              <Badge className="bg-neon-pink/20 text-neon-pink border-neon-pink/30 px-4 py-2">
                🚀 Fast Growing
              </Badge>
              <Badge className="bg-neon-blue/20 text-neon-blue border-neon-blue/30 px-4 py-2">
                🌍 Remote-First
              </Badge>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-20 bg-gradient-to-br from-muted/30 via-background to-muted/20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Our <span className="neon-blue">Values</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {companyValues.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <Card className="bg-gradient-to-br from-card/80 to-card/60 border border-border/30 hover:shadow-xl transition-all duration-300 h-full">
                  <CardContent className="p-6">
                    <motion.div
                      className="w-16 h-16 bg-neon-blue/20 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-neon-blue/30"
                      whileHover={{ rotate: 10, scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <value.icon className="neon-blue" size={32} />
                    </motion.div>
                    <h3 className="text-xl font-bold mb-3 neon-blue">{value.title}</h3>
                    <p className="text-muted-foreground text-sm">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Why You'll <span className="neon-pink">Love</span> Working Here
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We believe in taking care of our team with comprehensive benefits and a supportive culture
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <Card className="bg-gradient-to-br from-card/90 to-card/70 border border-border/30 hover:shadow-2xl transition-all duration-500 h-full">
                  <CardContent className="p-6 text-center">
                    <motion.div
                      className={`w-16 h-16 bg-${benefit.color}/20 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-${benefit.color}/30`}
                      whileHover={{ scale: 1.2, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <benefit.icon className={`${benefit.color}`} size={32} />
                    </motion.div>
                    <h3 className={`text-xl font-bold mb-3 ${benefit.color}`}>{benefit.title}</h3>
                    <p className="text-muted-foreground text-sm">{benefit.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 bg-gradient-to-br from-muted/30 via-background to-muted/20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Open <span className="neon-green">Positions</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Find your next career opportunity with us
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {openPositions.map((position, index) => (
              <motion.div
                key={position.title}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="group"
              >
                {/* Card glow effect */}
                <motion.div 
                  className="absolute -inset-2 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-xl"
                  style={{
                    background: `radial-gradient(circle, ${position.color === 'neon-blue' ? 'rgba(26,231,255,0.3)' : position.color === 'neon-green' ? 'rgba(57,255,20,0.3)' : 'rgba(255,20,147,0.3)'}, transparent 70%)`
                  }}
                />
                
                <Card className="relative bg-gradient-to-br from-card/95 via-card to-card/90 border border-border/30 backdrop-blur-sm hover:shadow-2xl transition-all duration-500 rounded-3xl h-full">
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <CardTitle className={`text-2xl font-bold ${position.color} mb-2`}>
                          {position.title}
                        </CardTitle>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Briefcase size={16} />
                            {position.department}
                          </span>
                          <span className="flex items-center gap-1">
                            <MapPin size={16} />
                            {position.location}
                          </span>
                        </div>
                      </div>
                      <Badge className={`bg-${position.color}/20 text-${position.color} border-${position.color}/30`}>
                        {position.type}
                      </Badge>
                    </div>
                    <p className="text-muted-foreground text-sm mb-4">{position.description}</p>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="mb-6">
                      <h4 className="font-semibold mb-3 text-sm uppercase tracking-wide">Required Skills</h4>
                      <div className="flex flex-wrap gap-2">
                        {position.skills.map((skill, skillIndex) => (
                          <motion.div
                            key={skill}
                            initial={{ scale: 0.8, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.3, delay: skillIndex * 0.1 }}
                            whileHover={{ scale: 1.05 }}
                          >
                            <Badge variant="secondary" className="text-xs">
                              {skill}
                            </Badge>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">
                        Experience: {position.experience}
                      </span>
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Button className={`bg-${position.color}/20 text-${position.color} border border-${position.color}/30 hover:bg-${position.color}/30`}>
                          Apply Now
                        </Button>
                      </motion.div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <Card className="bg-gradient-to-br from-neon-blue/10 via-neon-green/10 to-neon-pink/10 border border-neon-blue/30 max-w-4xl mx-auto">
              <CardContent className="p-12">
                <h2 className="text-3xl font-bold mb-6 neon-blue">Don't See Your Role?</h2>
                <p className="text-muted-foreground mb-8 text-lg max-w-2xl mx-auto">
                  We're always looking for talented individuals. Send us your resume and tell us how you'd like to contribute to our mission.
                </p>
                <motion.button
                  className="px-10 py-5 bg-gradient-to-r from-neon-blue/20 via-neon-green/20 to-neon-pink/20 backdrop-blur-sm rounded-2xl font-bold text-lg border border-neon-blue/40 hover:border-neon-blue/60 transition-all duration-500 shadow-xl hover:shadow-2xl hover:shadow-neon-blue/20"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="flex items-center gap-3">
                    Send Your Resume
                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                    >
                      →
                    </motion.div>
                  </span>
                </motion.button>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  );
}