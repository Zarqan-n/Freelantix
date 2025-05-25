import { motion } from "framer-motion";
import { Palette, Eye, Users, Zap, Target, Lightbulb, Layers, MousePointer, Smartphone, Monitor, Tablet, BookOpen, PlayCircle, Award, TrendingUp } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const designPrinciples = [
  {
    icon: Eye,
    title: "Visual Hierarchy",
    description: "Guide users through content with strategic placement and sizing",
    color: "neon-blue",
    details: "Learn how to use size, color, contrast, and spacing to create clear information architecture that guides user attention naturally.",
    level: "Beginner"
  },
  {
    icon: Users,
    title: "User-Centered Design",
    description: "Always prioritize user needs and behaviors in design decisions",
    color: "neon-green",
    details: "Understand user research methods, persona creation, and how to design solutions that truly solve user problems.",
    level: "Intermediate"
  },
  {
    icon: Zap,
    title: "Usability & Accessibility",
    description: "Create interfaces that work for everyone, everywhere",
    color: "neon-pink",
    details: "Master WCAG guidelines, inclusive design principles, and create experiences accessible to users with disabilities.",
    level: "Advanced"
  },
  {
    icon: Target,
    title: "Interaction Design",
    description: "Design meaningful micro-interactions and user flows",
    color: "neon-blue",
    details: "Learn animation principles, state changes, and how to create delightful interactions that enhance user experience.",
    level: "Intermediate"
  }
];

const learningPaths = [
  {
    title: "UI Design Fundamentals",
    icon: Palette,
    duration: "4-6 weeks",
    level: "Beginner",
    color: "neon-blue",
    topics: ["Color Theory", "Typography", "Layout & Grid", "Design Systems"],
    description: "Master the visual aspects of interface design"
  },
  {
    title: "UX Research & Strategy",
    icon: Lightbulb,
    duration: "6-8 weeks",
    level: "Intermediate",
    color: "neon-green",
    topics: ["User Research", "Information Architecture", "Wireframing", "Prototyping"],
    description: "Learn to understand users and create strategic solutions"
  },
  {
    title: "Advanced Prototyping",
    icon: Layers,
    duration: "4-5 weeks",
    level: "Advanced",
    color: "neon-pink",
    topics: ["High-Fidelity Prototypes", "Animation Design", "Design Handoff", "Testing"],
    description: "Create sophisticated interactive prototypes"
  }
];

const designTools = [
  {
    name: "Figma",
    category: "Design & Prototyping",
    rating: 5,
    color: "neon-blue",
    features: ["Collaborative Design", "Prototyping", "Design Systems", "Developer Handoff"]
  },
  {
    name: "Adobe XD",
    category: "Design & Prototyping", 
    rating: 4,
    color: "neon-green",
    features: ["Vector Design", "Voice Prototyping", "Repeat Grid", "Auto-Animate"]
  },
  {
    name: "Sketch",
    category: "UI Design",
    rating: 4,
    color: "neon-pink",
    features: ["Symbol Libraries", "Plugin Ecosystem", "Vector Editing", "Artboards"]
  },
  {
    name: "Framer",
    category: "Advanced Prototyping",
    rating: 5,
    color: "neon-blue",
    features: ["Code Components", "Advanced Animations", "Real Data", "Interactive Prototypes"]
  }
];

const skillLevels = [
  {
    level: "Beginner",
    timeframe: "0-6 months",
    skills: ["Basic design principles", "Color & typography", "Simple layouts", "Wireframing"],
    color: "neon-green"
  },
  {
    level: "Intermediate", 
    timeframe: "6-18 months",
    skills: ["User research", "Complex interactions", "Design systems", "Prototyping"],
    color: "neon-blue"
  },
  {
    level: "Advanced",
    timeframe: "18+ months",
    skills: ["Strategy & leadership", "Advanced research", "Team collaboration", "Business impact"],
    color: "neon-pink"
  }
];

export default function LearnUIUXDesign() {
  return (
    <div className="pt-20">
      {/* Enhanced Hero Section */}
      <section className="py-24 bg-gradient-to-br from-background via-muted/20 to-background relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-30">
          <motion.div 
            className="absolute top-20 left-20 w-64 h-64 bg-neon-blue/20 rounded-full blur-3xl"
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
          
          {/* Floating design elements */}
          {[Palette, MousePointer, Smartphone, Monitor].map((Icon, i) => (
            <motion.div
              key={i}
              className="absolute"
              style={{
                left: `${15 + i * 20}%`,
                top: `${25 + (i % 2) * 40}%`
              }}
              animate={{
                y: [-20, -40, -20],
                rotate: [0, 15, 0],
                opacity: [0.3, 0.7, 0.3]
              }}
              transition={{
                duration: 4 + i * 0.5,
                repeat: Infinity,
                delay: i * 0.8,
                ease: "easeInOut"
              }}
            >
              <Icon size={28} className="text-neon-green/40" />
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
              <div className="w-20 h-20 bg-gradient-to-br from-neon-blue to-neon-pink rounded-2xl flex items-center justify-center shadow-2xl">
                <BookOpen size={40} className="text-white" />
              </div>
            </motion.div>
            
            <motion.h1 
              className="text-4xl lg:text-6xl font-black mb-6"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Learn <span className="neon-blue">UI/UX</span> Design
            </motion.h1>
            <motion.p 
              className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              Master the art and science of user interface and user experience design. From beginner fundamentals to advanced techniques, start your journey to becoming a world-class designer.
            </motion.p>
            
            <motion.div
              className="flex justify-center gap-4 mt-8"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <Badge className="bg-neon-blue/20 text-neon-blue border-neon-blue/30 px-4 py-2">
                🎨 Creative Skills
              </Badge>
              <Badge className="bg-neon-green/20 text-neon-green border-neon-green/30 px-4 py-2">
                🧠 Problem Solving
              </Badge>
              <Badge className="bg-neon-pink/20 text-neon-pink border-neon-pink/30 px-4 py-2">
                📱 Digital Innovation
              </Badge>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Learning Paths */}
      <section className="py-20 bg-gradient-to-br from-muted/30 via-background to-muted/20 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Choose Your <span className="neon-green">Learning Path</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Structured learning journeys designed to take you from beginner to expert
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {learningPaths.map((path, index) => (
              <motion.div
                key={path.title}
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
                className="group"
              >
                {/* Card glow effect */}
                <motion.div 
                  className="absolute -inset-2 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-xl"
                  style={{
                    background: `radial-gradient(circle, ${path.color === 'neon-blue' ? 'rgba(26,231,255,0.3)' : path.color === 'neon-green' ? 'rgba(57,255,20,0.3)' : 'rgba(255,20,147,0.3)'}, transparent 70%)`
                  }}
                />
                
                <Card className="relative bg-gradient-to-br from-card/95 via-card to-card/90 border border-border/30 backdrop-blur-sm hover:shadow-2xl transition-all duration-500 rounded-3xl h-full">
                  <CardHeader className="pb-6">
                    <div className="flex items-start gap-4 mb-4">
                      <motion.div 
                        className={`w-16 h-16 bg-${path.color}/20 rounded-2xl flex items-center justify-center border border-${path.color}/30`}
                        whileHover={{ 
                          scale: 1.1,
                          rotate: 5,
                          transition: { duration: 0.3 }
                        }}
                      >
                        <path.icon className={`${path.color}`} size={32} />
                      </motion.div>
                      <div className="flex-1">
                        <CardTitle className={`text-2xl font-bold ${path.color} mb-2`}>
                          {path.title}
                        </CardTitle>
                        <div className="flex items-center gap-3 text-sm text-muted-foreground">
                          <Badge variant="outline" className="text-xs">
                            {path.level}
                          </Badge>
                          <span>{path.duration}</span>
                        </div>
                      </div>
                    </div>
                    <p className="text-muted-foreground text-sm mb-4">{path.description}</p>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="mb-6">
                      <h4 className="font-semibold mb-3 text-sm uppercase tracking-wide">What You'll Learn</h4>
                      <div className="space-y-2">
                        {path.topics.map((topic, topicIndex) => (
                          <motion.div
                            key={topic}
                            className="flex items-center gap-3 p-2 rounded-lg bg-muted/30"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: topicIndex * 0.1 }}
                            whileHover={{ x: 5 }}
                          >
                            <div className={`w-2 h-2 bg-${path.color} rounded-full`} />
                            <span className="text-sm font-medium">{topic}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                    
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Button className={`w-full bg-${path.color}/20 text-${path.color} border border-${path.color}/30 hover:bg-${path.color}/30`}>
                        Start Learning Path
                      </Button>
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Design Principles */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Core Design <span className="neon-blue">Principles</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Essential principles that every UI/UX designer must master
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {designPrinciples.map((principle, index) => (
              <motion.div
                key={principle.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <Card className="bg-gradient-to-br from-card/80 to-card/60 border border-border/30 hover:shadow-xl transition-all duration-500 h-full">
                  <CardContent className="p-8">
                    <div className="flex items-start gap-6 mb-6">
                      <motion.div
                        className={`w-16 h-16 bg-${principle.color}/20 rounded-2xl flex items-center justify-center border border-${principle.color}/30 flex-shrink-0`}
                        whileHover={{ rotate: 10, scale: 1.1 }}
                        transition={{ duration: 0.3 }}
                      >
                        <principle.icon className={`${principle.color}`} size={32} />
                      </motion.div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-3">
                          <h3 className={`text-2xl font-bold ${principle.color}`}>{principle.title}</h3>
                          <Badge variant="outline" className="text-xs">
                            {principle.level}
                          </Badge>
                        </div>
                        <p className="text-muted-foreground mb-4">{principle.description}</p>
                        <p className="text-sm text-muted-foreground/80 leading-relaxed">{principle.details}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Design Tools */}
      <section className="py-20 bg-gradient-to-br from-muted/30 via-background to-muted/20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Essential <span className="neon-pink">Design Tools</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Master the industry-standard tools that professionals use every day
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {designTools.map((tool, index) => (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <Card className="bg-gradient-to-br from-card/90 to-card/70 border border-border/30 hover:shadow-2xl transition-all duration-500 h-full">
                  <CardContent className="p-6 text-center">
                    <motion.div
                      className={`w-16 h-16 bg-${tool.color}/20 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-${tool.color}/30`}
                      whileHover={{ scale: 1.2, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className={`w-8 h-8 bg-${tool.color} rounded-lg`} />
                    </motion.div>
                    
                    <h3 className={`text-xl font-bold mb-2 ${tool.color}`}>{tool.name}</h3>
                    <p className="text-muted-foreground text-sm mb-4">{tool.category}</p>
                    
                    <div className="flex justify-center mb-4">
                      {[...Array(5)].map((_, i) => (
                        <motion.div
                          key={i}
                          className={`w-3 h-3 mx-0.5 ${i < tool.rating ? `bg-${tool.color}` : 'bg-muted'} rounded-full`}
                          initial={{ scale: 0 }}
                          whileInView={{ scale: 1 }}
                          transition={{ duration: 0.3, delay: i * 0.1 }}
                        />
                      ))}
                    </div>
                    
                    <div className="space-y-2">
                      {tool.features.slice(0, 2).map((feature, featureIndex) => (
                        <div key={feature} className="text-xs text-muted-foreground bg-muted/50 rounded-lg px-2 py-1">
                          {feature}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skill Progression */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Your <span className="neon-green">Skill Journey</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Track your progress from beginner to design expert
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {skillLevels.map((level, index) => (
              <motion.div
                key={level.level}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative"
              >
                {/* Connecting line */}
                {index < skillLevels.length - 1 && (
                  <motion.div 
                    className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-border to-transparent z-10"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ duration: 0.8, delay: index * 0.3 + 0.5 }}
                  />
                )}
                
                <Card className="bg-gradient-to-br from-card/80 to-card/60 border border-border/30 hover:shadow-xl transition-all duration-500 h-full text-center">
                  <CardContent className="p-8">
                    <motion.div
                      className={`w-20 h-20 bg-${level.color}/20 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-${level.color}/30`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <span className={`text-2xl font-bold ${level.color}`}>
                        {index + 1}
                      </span>
                    </motion.div>
                    
                    <h3 className={`text-2xl font-bold mb-2 ${level.color}`}>{level.level}</h3>
                    <p className="text-muted-foreground text-sm mb-6">{level.timeframe}</p>
                    
                    <div className="space-y-3">
                      {level.skills.map((skill, skillIndex) => (
                        <motion.div
                          key={skill}
                          className="flex items-center gap-3 p-2 rounded-lg bg-muted/30"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: skillIndex * 0.1 }}
                        >
                          <Award className={`${level.color} flex-shrink-0`} size={16} />
                          <span className="text-sm font-medium">{skill}</span>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-br from-muted/30 via-background to-muted/20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <Card className="bg-gradient-to-br from-neon-blue/10 via-neon-green/10 to-neon-pink/10 border border-neon-blue/30 max-w-4xl mx-auto">
              <CardContent className="p-12">
                <motion.div
                  className="flex justify-center mb-6"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-neon-blue to-neon-pink rounded-2xl flex items-center justify-center">
                    <TrendingUp size={32} className="text-white" />
                  </div>
                </motion.div>
                
                <h2 className="text-3xl font-bold mb-6 neon-blue">Ready to Start Your Design Journey?</h2>
                <p className="text-muted-foreground mb-8 text-lg max-w-2xl mx-auto">
                  Join thousands of designers who have transformed their careers with our comprehensive UI/UX design courses. Start learning today!
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <motion.button
                    className="px-8 py-4 bg-gradient-to-r from-neon-blue/20 to-neon-green/20 backdrop-blur-sm rounded-2xl font-bold border border-neon-blue/40 hover:border-neon-blue/60 transition-all duration-500 shadow-lg hover:shadow-2xl hover:shadow-neon-blue/20"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="flex items-center gap-3">
                      <PlayCircle size={20} />
                      Start Free Course
                      <motion.div
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                      >
                        →
                      </motion.div>
                    </span>
                  </motion.button>
                  
                  <motion.button
                    className="px-8 py-4 bg-gradient-to-r from-neon-pink/20 to-neon-blue/20 backdrop-blur-sm rounded-2xl font-semibold border border-neon-pink/40 hover:border-neon-pink/60 transition-all duration-500"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="flex items-center gap-3">
                      <BookOpen size={20} />
                      Download Resources
                    </span>
                  </motion.button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  );
}