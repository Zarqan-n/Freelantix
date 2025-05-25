import { motion } from "framer-motion";
import { Shield, Eye, Lock, Database, FileText, Users, Clock, CheckCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const privacyCategories = [
  {
    icon: Database,
    title: "Data Collection",
    description: "What information we collect and how we use it",
    color: "neon-blue",
    items: [
      "Personal identification information",
      "Website usage analytics",
      "Communication preferences",
      "Technical device information"
    ]
  },
  {
    icon: Lock,
    title: "Data Security",
    description: "How we protect your information",
    color: "neon-green",
    items: [
      "End-to-end encryption",
      "Secure server infrastructure",
      "Regular security audits",
      "Access control protocols"
    ]
  },
  {
    icon: Users,
    title: "Data Sharing",
    description: "When and with whom we share data",
    color: "neon-pink",
    items: [
      "Never sold to third parties",
      "Essential service providers only",
      "Legal compliance requirements",
      "Your explicit consent required"
    ]
  },
  {
    icon: Eye,
    title: "Your Rights",
    description: "Control over your personal data",
    color: "neon-blue",
    items: [
      "Access your data anytime",
      "Request data correction",
      "Delete your information",
      "Data portability options"
    ]
  }
];

const policyUpdates = [
  { date: "December 2024", change: "Enhanced cookie policy details" },
  { date: "September 2024", change: "Added GDPR compliance measures" },
  { date: "June 2024", change: "Updated data retention policies" }
];

export default function PrivacyPolicy() {
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
              x: [0, 30, 0]
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div 
            className="absolute bottom-20 right-20 w-80 h-80 bg-neon-green/15 rounded-full blur-3xl"
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.15, 0.3, 0.15],
              x: [0, -40, 0]
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
              <div className="w-20 h-20 bg-gradient-to-br from-neon-blue to-neon-green rounded-2xl flex items-center justify-center shadow-2xl">
                <Shield size={40} className="text-white" />
              </div>
            </motion.div>
            
            <motion.h1 
              className="text-4xl lg:text-6xl font-black mb-6"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Privacy <span className="neon-blue">Policy</span>
            </motion.h1>
            <motion.p 
              className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              Your privacy is our priority. Learn how we collect, use, and protect your personal information with complete transparency and industry-leading security measures.
            </motion.p>
            
            <motion.div
              className="flex justify-center gap-4 mt-8"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <Badge className="bg-neon-blue/20 text-neon-blue border-neon-blue/30 px-4 py-2">
                GDPR Compliant
              </Badge>
              <Badge className="bg-neon-green/20 text-neon-green border-neon-green/30 px-4 py-2">
                Last Updated: Dec 2024
              </Badge>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Privacy Categories */}
      <section className="py-20 bg-gradient-to-br from-muted/30 via-background to-muted/20 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              How We <span className="neon-green">Protect</span> Your Data
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive privacy protection across all aspects of our service
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {privacyCategories.map((category, index) => (
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
                          rotate: 5,
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

      {/* Detailed Policy Content */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-16"
            >
              <h2 className="text-3xl font-bold mb-8 neon-pink">Detailed Privacy Information</h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <Card className="bg-gradient-to-br from-card/80 to-card/60 border border-border/30">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3 neon-blue">
                      <FileText size={24} />
                      Information We Collect
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4 text-sm">
                    <p>We collect information you provide directly to us, such as when you create an account, contact us, or use our services.</p>
                    <p>We also automatically collect certain information about your device and usage patterns to improve our services.</p>
                    <p>All data collection is done with your knowledge and consent, following industry best practices.</p>
                  </CardContent>
                </Card>
                
                <Card className="bg-gradient-to-br from-card/80 to-card/60 border border-border/30">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3 neon-green">
                      <Lock size={24} />
                      How We Use Your Data
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4 text-sm">
                    <p>We use your information to provide, maintain, and improve our services, including customer support.</p>
                    <p>We may use your data to communicate with you about updates, security alerts, and marketing (with your consent).</p>
                    <p>Your data helps us analyze trends and user behavior to enhance the user experience.</p>
                  </CardContent>
                </Card>
              </div>
            </motion.div>

            {/* Policy Updates Timeline */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h3 className="text-2xl font-bold mb-8 neon-blue">Recent Policy Updates</h3>
              <div className="space-y-4">
                {policyUpdates.map((update, index) => (
                  <motion.div
                    key={update.date}
                    className="flex items-start gap-4 p-6 bg-gradient-to-r from-muted/50 to-muted/30 rounded-2xl border border-border/30"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ x: 5 }}
                  >
                    <div className="w-3 h-3 bg-neon-blue rounded-full mt-2 flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-neon-blue mb-1">{update.date}</div>
                      <div className="text-muted-foreground">{update.change}</div>
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
              <Card className="bg-gradient-to-br from-neon-blue/10 via-neon-green/10 to-neon-pink/10 border border-neon-blue/30">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-4 neon-blue">Questions About Your Privacy?</h3>
                  <p className="text-muted-foreground mb-6">
                    If you have any questions about this Privacy Policy or how we handle your data, please don't hesitate to contact us.
                  </p>
                  <motion.button
                    className="px-8 py-4 bg-gradient-to-r from-neon-blue/20 to-neon-green/20 backdrop-blur-sm rounded-2xl font-semibold border border-neon-blue/40 hover:border-neon-blue/60 transition-all duration-500 shadow-lg hover:shadow-2xl hover:shadow-neon-blue/20"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Contact Privacy Team
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