import { motion } from "framer-motion";
import { Cookie, Shield, Settings, Eye, Database, Clock, CheckCircle, AlertTriangle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const cookieTypes = [
  {
    icon: Shield,
    title: "Essential Cookies",
    description: "Required for basic website functionality",
    color: "neon-green",
    cookies: [
      { name: "session_id", purpose: "User authentication", retention: "Session", required: true },
      { name: "csrf_token", purpose: "Security protection", retention: "Session", required: true },
      { name: "preferences", purpose: "Site preferences", retention: "1 year", required: true }
    ]
  },
  {
    icon: Eye,
    title: "Analytics Cookies",
    description: "Help us understand how visitors use our site",
    color: "neon-blue",
    cookies: [
      { name: "_ga", purpose: "Google Analytics tracking", retention: "2 years", required: false },
      { name: "_gid", purpose: "Google Analytics identification", retention: "24 hours", required: false },
      { name: "page_views", purpose: "Page visit tracking", retention: "30 days", required: false }
    ]
  },
  {
    icon: Settings,
    title: "Functional Cookies",
    description: "Enable enhanced features and personalization",
    color: "neon-pink",
    cookies: [
      { name: "theme_preference", purpose: "Dark/light mode setting", retention: "1 year", required: false },
      { name: "language", purpose: "Language preference", retention: "1 year", required: false },
      { name: "region", purpose: "Geographic preferences", retention: "6 months", required: false }
    ]
  }
];

const cookieSettings = [
  { category: "Essential", enabled: true, locked: true },
  { category: "Analytics", enabled: true, locked: false },
  { category: "Functional", enabled: true, locked: false },
  { category: "Marketing", enabled: false, locked: false }
];

export default function CookiePolicy() {
  return (
    <div className="pt-20">
      {/* Enhanced Hero Section */}
      <section className="py-24 bg-gradient-to-br from-background via-muted/20 to-background relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-30">
          <motion.div 
            className="absolute top-20 right-20 w-64 h-64 bg-neon-green/20 rounded-full blur-3xl"
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
              <div className="w-20 h-20 bg-gradient-to-br from-neon-green to-neon-blue rounded-2xl flex items-center justify-center shadow-2xl">
                <Cookie size={40} className="text-white" />
              </div>
            </motion.div>
            
            <motion.h1 
              className="text-4xl lg:text-6xl font-black mb-6"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Cookie <span className="neon-green">Policy</span>
            </motion.h1>
            <motion.p 
              className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              We believe in transparency about how we collect and use data. Learn about our cookie usage and how you can control your preferences.
            </motion.p>
            
            <motion.div
              className="flex justify-center gap-4 mt-8"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <Badge className="bg-neon-green/20 text-neon-green border-neon-green/30 px-4 py-2">
                GDPR Compliant
              </Badge>
              <Badge className="bg-neon-blue/20 text-neon-blue border-neon-blue/30 px-4 py-2">
                User Controlled
              </Badge>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Cookie Types */}
      <section className="py-20 bg-gradient-to-br from-muted/30 via-background to-muted/20 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Types of <span className="neon-blue">Cookies</span> We Use
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Understanding what cookies we use and why they're important for your experience
            </p>
          </motion.div>

          <div className="space-y-8">
            {cookieTypes.map((type, index) => (
              <motion.div
                key={type.title}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                whileHover={{ 
                  y: -5,
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
                    background: `radial-gradient(circle, ${type.color === 'neon-blue' ? 'rgba(26,231,255,0.3)' : type.color === 'neon-green' ? 'rgba(57,255,20,0.3)' : 'rgba(255,20,147,0.3)'}, transparent 70%)`
                  }}
                />
                
                <Card className="relative bg-gradient-to-br from-card/95 via-card to-card/90 border border-border/30 backdrop-blur-sm hover:shadow-2xl transition-all duration-500 rounded-3xl">
                  <CardHeader className="pb-6">
                    <div className="flex items-start gap-4 mb-4">
                      <motion.div 
                        className={`w-16 h-16 bg-${type.color}/20 rounded-2xl flex items-center justify-center border border-${type.color}/30`}
                        whileHover={{ 
                          scale: 1.1,
                          rotate: 5,
                          transition: { duration: 0.3 }
                        }}
                      >
                        <type.icon className={`${type.color}`} size={32} />
                      </motion.div>
                      <div className="flex-1">
                        <CardTitle className={`text-2xl font-bold ${type.color} mb-2`}>
                          {type.title}
                        </CardTitle>
                        <p className="text-muted-foreground text-sm">
                          {type.description}
                        </p>
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <thead>
                          <tr className="border-b border-border/30">
                            <th className="text-left py-3 px-2 text-sm font-semibold">Cookie Name</th>
                            <th className="text-left py-3 px-2 text-sm font-semibold">Purpose</th>
                            <th className="text-left py-3 px-2 text-sm font-semibold">Retention</th>
                            <th className="text-left py-3 px-2 text-sm font-semibold">Required</th>
                          </tr>
                        </thead>
                        <tbody>
                          {type.cookies.map((cookie, cookieIndex) => (
                            <motion.tr
                              key={cookie.name}
                              className="border-b border-border/20 hover:bg-muted/30 transition-colors"
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.5, delay: cookieIndex * 0.1 }}
                            >
                              <td className="py-3 px-2">
                                <code className={`text-sm bg-${type.color}/10 text-${type.color} px-2 py-1 rounded`}>
                                  {cookie.name}
                                </code>
                              </td>
                              <td className="py-3 px-2 text-sm text-muted-foreground">{cookie.purpose}</td>
                              <td className="py-3 px-2 text-sm">{cookie.retention}</td>
                              <td className="py-3 px-2">
                                {cookie.required ? (
                                  <Badge className="bg-neon-green/20 text-neon-green border-neon-green/30">
                                    Required
                                  </Badge>
                                ) : (
                                  <Badge variant="outline" className="text-muted-foreground">
                                    Optional
                                  </Badge>
                                )}
                              </td>
                            </motion.tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Cookie Preferences */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Manage Your <span className="neon-pink">Preferences</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Take control of your cookie settings. You can change these preferences at any time.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <Card className="bg-gradient-to-br from-card/80 to-card/60 border border-border/30">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 neon-blue text-2xl">
                  <Settings size={32} />
                  Cookie Preferences
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {cookieSettings.map((setting, index) => (
                  <motion.div
                    key={setting.category}
                    className="flex items-center justify-between p-6 bg-muted/30 rounded-2xl border border-border/30"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <div className="flex-1">
                      <h4 className="font-semibold text-lg mb-2">{setting.category} Cookies</h4>
                      <p className="text-muted-foreground text-sm">
                        {setting.category === "Essential" && "Required for basic website functionality"}
                        {setting.category === "Analytics" && "Help us improve our website performance"}
                        {setting.category === "Functional" && "Enable enhanced features and personalization"}
                        {setting.category === "Marketing" && "Used for targeted advertising and marketing"}
                      </p>
                    </div>
                    <div className="flex items-center gap-3">
                      {setting.locked && (
                        <div className="flex items-center gap-2 text-neon-green text-sm">
                          <CheckCircle size={16} />
                          Always On
                        </div>
                      )}
                      {!setting.locked && (
                        <Button
                          variant={setting.enabled ? "default" : "outline"}
                          size="sm"
                          className={setting.enabled ? "bg-neon-green/20 text-neon-green border-neon-green/30" : ""}
                        >
                          {setting.enabled ? "Enabled" : "Disabled"}
                        </Button>
                      )}
                    </div>
                  </motion.div>
                ))}
                
                <motion.div
                  className="flex gap-4 pt-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  <Button className="bg-neon-blue/20 text-neon-blue border border-neon-blue/30 hover:bg-neon-blue/30">
                    Save Preferences
                  </Button>
                  <Button variant="outline">
                    Accept All
                  </Button>
                  <Button variant="ghost" className="text-muted-foreground">
                    Reject Non-Essential
                  </Button>
                </motion.div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Information Section */}
      <section className="py-20 bg-gradient-to-br from-muted/30 via-background to-muted/20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-16"
            >
              <h2 className="text-3xl font-bold mb-8 neon-green">Additional Information</h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <Card className="bg-gradient-to-br from-card/80 to-card/60 border border-border/30">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3 neon-blue">
                      <Database size={24} />
                      Data Retention
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4 text-sm">
                    <p>We only retain cookie data for as long as necessary to fulfill the purposes outlined in this policy.</p>
                    <p>Session cookies are automatically deleted when you close your browser.</p>
                    <p>Persistent cookies remain until their expiration date or until you manually delete them.</p>
                  </CardContent>
                </Card>
                
                <Card className="bg-gradient-to-br from-card/80 to-card/60 border border-border/30">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3 neon-pink">
                      <Clock size={24} />
                      Policy Updates
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4 text-sm">
                    <p>This cookie policy may be updated periodically to reflect changes in our practices or applicable laws.</p>
                    <p>We will notify you of significant changes through our website or other appropriate means.</p>
                    <p>Please review this policy regularly to stay informed about our cookie usage.</p>
                  </CardContent>
                </Card>
              </div>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center"
            >
              <Card className="bg-gradient-to-br from-neon-green/10 via-neon-blue/10 to-neon-pink/10 border border-neon-green/30">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-4 neon-green">Questions About Cookies?</h3>
                  <p className="text-muted-foreground mb-6">
                    If you have any questions about our cookie policy or how we handle your data, please don't hesitate to contact us.
                  </p>
                  <motion.button
                    className="px-8 py-4 bg-gradient-to-r from-neon-green/20 to-neon-blue/20 backdrop-blur-sm rounded-2xl font-semibold border border-neon-green/40 hover:border-neon-green/60 transition-all duration-500 shadow-lg hover:shadow-2xl hover:shadow-neon-green/20"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Contact Us About Cookies
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