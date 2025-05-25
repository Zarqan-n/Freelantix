import { motion } from "framer-motion";
import { Lightbulb, Users, Rocket, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import StatsCounter from "@/components/ui/stats-counter";

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
    name: "Alex Rodriguez",
    position: "Lead Developer",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face",
    color: "neon-blue"
  },
  {
    name: "Maya Patel",
    position: "Creative Director",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=face",
    color: "neon-green"
  },
  {
    name: "David Kim",
    position: "Strategy Consultant",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&crop=face",
    color: "neon-pink"
  },
  {
    name: "Emma Thompson",
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
              About <span className="neon-blue">Freelantix</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Empowering businesses with digital innovation through cutting-edge technology and human-centered design
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl lg:text-5xl font-bold mb-8">
                Empowering Businesses with <span className="neon-green">Digital Innovation</span>
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                At Freelantix, we believe in the power of technology to transform businesses. Our team of passionate developers and designers work collaboratively to create digital solutions that not only look amazing but drive real results.
              </p>
              
              <div className="space-y-6">
                {values.map((value, index) => (
                  <motion.div
                    key={value.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="flex items-center space-x-4"
                  >
                    <div className={`w-12 h-12 bg-${value.color}/20 rounded-lg flex items-center justify-center`}>
                      <value.icon className={`${value.color} text-xl`} size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold">{value.title}</h3>
                      <p className="text-muted-foreground">{value.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop&crop=center" 
                alt="Diverse team collaborating in modern office"
                className="rounded-2xl shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Meet Our <span className="neon-pink">Team</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Passionate professionals dedicated to bringing your vision to life
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <Card className="bg-card border-border overflow-hidden group hover:shadow-2xl transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="relative mb-4">
                      <img 
                        src={member.image} 
                        alt={member.name}
                        className={`w-24 h-24 rounded-full mx-auto border-2 border-${member.color} group-hover:scale-110 transition-transform duration-300`}
                      />
                    </div>
                    <h3 className={`font-bold text-lg ${member.color}`}>{member.name}</h3>
                    <p className="text-muted-foreground">{member.position}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
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
