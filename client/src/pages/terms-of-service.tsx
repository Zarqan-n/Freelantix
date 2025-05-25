import { motion } from "framer-motion";
import { FileText, Scale, Users, Shield, AlertTriangle, CheckCircle, Gavel, Clock } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const termsCategories = [
  {
    icon: Users,
    title: "User Responsibilities",
    description: "Your obligations when using our services",
    color: "neon-blue",
    items: [
      "Provide accurate information",
      "Use services lawfully",
      "Respect intellectual property",
      "Maintain account security"
    ]
  },
  {
    icon: Shield,
    title: "Service Usage",
    description: "Permitted and prohibited uses",
    color: "neon-green",
    items: [
      "Commercial use allowed",
      "No harmful activities",
      "Respect rate limits",
      "Follow content guidelines"
    ]
  },
  {
    icon: Scale,
    title: "Legal Framework",
    description: "Governing laws and dispute resolution",
    color: "neon-pink",
    items: [
      "Governed by US law",
      "Arbitration preferred",
      "Limitation of liability",
      "Indemnification terms"
    ]
  },
  {
    icon: AlertTriangle,
    title: "Service Availability",
    description: "Uptime commitments and limitations",
    color: "neon-blue",
    items: [
      "99.9% uptime target",
      "Scheduled maintenance",
      "Emergency interruptions",
      "Service modifications"
    ]
  }
];

const recentChanges = [
  { date: "December 2024", change: "Updated payment terms and refund policies" },
  { date: "October 2024", change: "Enhanced user responsibility guidelines" },
  { date: "August 2024", change: "Added AI service usage terms" }
];

export default function TermsOfService() {
  return (
    <div className="pt-20">
      {/* Enhanced Hero Section */}
      <section className="py-24 bg-gradient-to-br from-background via-muted/20 to-background relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-30">
          <motion.div 
            className="absolute top-20 right-20 w-64 h-64 bg-neon-pink/20 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.2, 0.4, 0.2],
              y: [0, -30, 0]
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div 
            className="absolute bottom-20 left-20 w-80 h-80 bg-neon-blue/15 rounded-full blur-3xl"
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.15, 0.3, 0.15],
              x: [0, 40, 0]
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />
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
              <div className="w-20 h-20 bg-gradient-to-br from-neon-pink to-neon-blue rounded-2xl flex items-center justify-center shadow-2xl">
                <Gavel size={40} className="text-white" />
              </div>
            </motion.div>
            
            <motion.h1 
              className="text-4xl lg:text-6xl font-black mb-6"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Terms of <span className="neon-pink">Service</span>
            </motion.h1>
            <motion.p 
              className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              Clear, fair terms that govern the use of our services. We believe in transparency and building trust through straightforward agreements.
            </motion.p>
            
            <motion.div
              className="flex justify-center gap-4 mt-8"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <Badge className="bg-neon-pink/20 text-neon-pink border-neon-pink/30 px-4 py-2">
                Fair & Transparent
              </Badge>
              <Badge className="bg-neon-blue/20 text-neon-blue border-neon-blue/30 px-4 py-2">
                Effective: Dec 2024
              </Badge>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Terms Categories */}
      <section className="py-20 bg-gradient-to-br from-muted/30 via-background to-muted/20 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Service <span className="neon-green">Agreement</span> Overview
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Key terms and conditions for using our digital services
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {termsCategories.map((category, index) => (
              <motion.div
                key={category.title}
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
                    background: `radial-gradient(circle, ${category.color === 'neon-blue' ? 'rgba(26,231,255,0.3)' : category.color === 'neon-green' ? 'rgba(57,255,20,0.3)' : 'rgba(255,20,147,0.3)'}, transparent 70%)`
                  }}
                />
                
                <Card className="relative bg-gradient-to-br from-card/95 via-card to-card/90 border border-border/30 backdrop-blur-sm hover:shadow-2xl transition-all duration-500 rounded-3xl h-full">
                  <CardHeader className="pb-6">
                    <div className="flex items-start gap-4 mb-4">
                      <motion.div 
                        className={`w-16 h-16 bg-${category.color}/20 rounded-2xl flex items-center justify-center border border-${category.color}/30`}
                        whileHover={{ 
                          scale: 1.1,
                          rotate: -5,
                          transition: { duration: 0.3 }
                        }}
                      >
                        <category.icon className={`${category.color}`} size={32} />
                      </motion.div>
                      <div className="flex-1">
                        <CardTitle className={`text-2xl font-bold ${category.color} mb-2`}>
                          {category.title}
                        </CardTitle>
                        <p className="text-muted-foreground text-sm">
                          {category.description}
                        </p>
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="space-y-3">
                      {category.items.map((item, itemIndex) => (
                        <motion.div
                          key={item}
                          className="flex items-center gap-3 p-3 rounded-xl bg-muted/50 border border-border/30"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: itemIndex * 0.1 }}
                          whileHover={{ x: 5 }}
                        >
                          <CheckCircle className={`${category.color} flex-shrink-0`} size={18} />
                          <span className="text-sm font-medium">{item}</span>
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

      {/* Detailed Terms Content */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-16"
            >
              <h2 className="text-3xl font-bold mb-8 neon-blue">Detailed Terms & Conditions</h2>
              
              <div className="space-y-8">
                <Card className="bg-gradient-to-br from-card/80 to-card/60 border border-border/30">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3 neon-green">
                      <FileText size={24} />
                      Service Agreement
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4 text-sm leading-relaxed">
                    <p>By accessing and using our services, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using our services.</p>
                    <p>We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting on our website. Your continued use of our services after any such changes constitutes acceptance of the new terms.</p>
                  </CardContent>
                </Card>
                
                <Card className="bg-gradient-to-br from-card/80 to-card/60 border border-border/30">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3 neon-pink">
                      <Scale size={24} />
                      Limitation of Liability
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4 text-sm leading-relaxed">
                    <p>Our services are provided "as is" without any representations or warranties, express or implied. We shall not be liable for any indirect, incidental, special, consequential, or punitive damages.</p>
                    <p>In no event shall our total liability to you exceed the amount paid by you for the services during the twelve months preceding the claim.</p>
                  </CardContent>
                </Card>
                
                <Card className="bg-gradient-to-br from-card/80 to-card/60 border border-border/30">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3 neon-blue">
                      <Users size={24} />
                      User Conduct
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4 text-sm leading-relaxed">
                    <p>You agree not to use our services for any unlawful purpose or in any way that could damage, disable, overburden, or impair our services or interfere with any other party's use of our services.</p>
                    <p>You are responsible for maintaining the confidentiality of your account information and for all activities under your account.</p>
                  </CardContent>
                </Card>
              </div>
            </motion.div>

            {/* Recent Changes Timeline */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h3 className="text-2xl font-bold mb-8 neon-pink">Recent Updates</h3>
              <div className="space-y-4">
                {recentChanges.map((change, index) => (
                  <motion.div
                    key={change.date}
                    className="flex items-start gap-4 p-6 bg-gradient-to-r from-muted/50 to-muted/30 rounded-2xl border border-border/30"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ x: 5 }}
                  >
                    <div className="w-3 h-3 bg-neon-pink rounded-full mt-2 flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-neon-pink mb-1">{change.date}</div>
                      <div className="text-muted-foreground">{change.change}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-16 text-center"
            >
              <Card className="bg-gradient-to-br from-neon-pink/10 via-neon-blue/10 to-neon-green/10 border border-neon-pink/30">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-4 neon-pink">Need Legal Clarification?</h3>
                  <p className="text-muted-foreground mb-6">
                    If you have questions about these terms or need legal clarification, our team is here to help.
                  </p>
                  <motion.button
                    className="px-8 py-4 bg-gradient-to-r from-neon-pink/20 to-neon-blue/20 backdrop-blur-sm rounded-2xl font-semibold border border-neon-pink/40 hover:border-neon-pink/60 transition-all duration-500 shadow-lg hover:shadow-2xl hover:shadow-neon-pink/20"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Contact Legal Team
                  </motion.button>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}