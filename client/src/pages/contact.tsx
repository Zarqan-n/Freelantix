import { motion } from "framer-motion";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import FloatingLabelInput from "@/components/ui/floating-label-input";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  projectType: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters")
});

type ContactFormData = z.infer<typeof contactSchema>;

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    value: "freelantixx@gmail.com",
    color: "neon-blue"
  },
  {
    icon: Phone,
    title: "Phone",
    value: "+91 8017927972",
    color: "neon-green"
  },
  {
    icon: MapPin,
    title: "Location",
    value: "Bangalore, India",
    color: "neon-pink"
  }
];

export default function Contact() {
  const { toast } = useToast();
  
  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      projectType: "",
      message: ""
    }
  });

  const contactMutation = useMutation({
    mutationFn: async (data: ContactFormData) => {
      return apiRequest("POST", "/api/contact", data);
    },
    onSuccess: () => {
      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you within 24 hours.",
      });
      form.reset();
    },
    onError: (error: Error) => {
      toast({
        title: "Error sending message",
        description: error.message || "Please try again later.",
        variant: "destructive",
      });
    }
  });

  const onSubmit = (data: ContactFormData) => {
    contactMutation.mutate(data);
  };

  return (
    <div className="pt-20">
      {/* Enhanced Hero Section */}
      <section className="py-24 bg-gradient-to-br from-background via-muted/20 to-background relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-30">
          <motion.div 
            className="absolute top-20 left-20 w-64 h-64 bg-neon-pink/20 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.2, 0.4, 0.2],
              x: [0, 30, 0],
              y: [0, -20, 0]
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div 
            className="absolute bottom-20 right-20 w-80 h-80 bg-neon-blue/15 rounded-full blur-3xl"
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.15, 0.3, 0.15],
              x: [0, -40, 0],
              y: [0, 20, 0]
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />
          
          {/* Floating particles */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-neon-green/40 rounded-full"
              style={{
                left: `${15 + i * 15}%`,
                top: `${30 + (i % 2) * 40}%`
              }}
              animate={{
                y: [-20, -50, -20],
                opacity: [0, 1, 0],
                scale: [0.5, 1.2, 0.5]
              }}
              transition={{
                duration: 4 + i * 0.5,
                repeat: Infinity,
                delay: i * 0.8,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <motion.h1 
              className="text-4xl lg:text-6xl font-black mb-6"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Ready to Elevate Your <span className="neon-pink">Business Online?</span>
            </motion.h1>
            <motion.p 
              className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Let's build your success story! Send us a message or schedule a consultation to discuss your project and transform your digital presence.
            </motion.p>
            
            {/* Floating call-to-action badges */}
            <motion.div
              className="flex flex-wrap justify-center gap-4 mt-8"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <motion.div
                className="px-4 py-2 bg-neon-blue/20 backdrop-blur-sm rounded-full text-sm font-medium border border-neon-blue/30"
                whileHover={{ scale: 1.05, y: -2 }}
                transition={{ duration: 0.2 }}
              >
                💬 24hr Response Time
              </motion.div>
              <motion.div
                className="px-4 py-2 bg-neon-green/20 backdrop-blur-sm rounded-full text-sm font-medium border border-neon-green/30"
                whileHover={{ scale: 1.05, y: -2 }}
                transition={{ duration: 0.2 }}
              >
                🚀 Free Consultation
              </motion.div>
              <motion.div
                className="px-4 py-2 bg-neon-pink/20 backdrop-blur-sm rounded-full text-sm font-medium border border-neon-pink/30"
                whileHover={{ scale: 1.05, y: -2 }}
                transition={{ duration: 0.2 }}
              >
                ⭐ Premium Support
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Enhanced Contact Form & Info */}
      <section className="py-24 bg-gradient-to-br from-muted/30 via-background to-muted/20 relative overflow-hidden">
        {/* Background decorative grid */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-neon-blue/5 to-transparent transform -skew-y-3" />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-neon-pink/5 to-transparent transform skew-y-3" />
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
            {/* Enhanced Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              whileHover={{ 
                y: -8,
                transition: { type: "spring", stiffness: 300, damping: 20 }
              }}
              transition={{ duration: 0.8 }}
              className="group"
            >
              {/* Form glow effect */}
              <motion.div 
                className="absolute -inset-2 rounded-3xl bg-gradient-to-r from-neon-blue/30 via-neon-green/30 to-neon-pink/30 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-xl"
                animate={{ 
                  rotate: [0, 360],
                  scale: [1, 1.05, 1]
                }}
                transition={{ 
                  duration: 10, 
                  repeat: Infinity, 
                  ease: "linear"
                }}
              />
              
              <Card className="relative bg-gradient-to-br from-card/95 via-card to-card/90 border border-border/30 backdrop-blur-sm hover:shadow-2xl hover:shadow-neon-blue/10 transition-all duration-500 rounded-3xl">
                <CardHeader className="pb-6">
                  <motion.div
                    initial={{ y: -10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    <CardTitle className="text-3xl font-bold neon-blue flex items-center gap-3">
                      <motion.div
                        animate={{ rotate: [0, 10, -10, 0] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                      >
                        💬
                      </motion.div>
                      Send us a message
                    </CardTitle>
                    <p className="text-muted-foreground mt-2 text-sm">
                      Tell us about your project and let's create something amazing together
                    </p>
                  </motion.div>
                </CardHeader>
                <CardContent>
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              <FloatingLabelInput
                                {...field}
                                label="Your Name"
                                type="text"
                                disabled={contactMutation.isPending}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              <FloatingLabelInput
                                {...field}
                                label="Email Address"
                                type="email"
                                disabled={contactMutation.isPending}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="projectType"
                        render={({ field }) => (
                          <FormItem>
                            <Select 
                              onValueChange={field.onChange} 
                              defaultValue={field.value}
                              disabled={contactMutation.isPending}
                            >
                              <FormControl>
                                <SelectTrigger className="bg-secondary border-border focus:border-neon-blue">
                                  <SelectValue placeholder="Select Project Type" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="web">Web Development</SelectItem>
                                <SelectItem value="design">UI/UX Design</SelectItem>
                                <SelectItem value="ecommerce">eCommerce Solution</SelectItem>
                                <SelectItem value="strategy">Digital Strategy</SelectItem>
                                <SelectItem value="other">Other</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              <div className="relative">
                                <Textarea
                                  {...field}
                                  placeholder=" "
                                  rows={6}
                                  className="bg-secondary border-border focus:border-neon-blue resize-none peer"
                                  disabled={contactMutation.isPending}
                                />
                                <label className="absolute left-3 top-3 text-muted-foreground transition-all duration-300 pointer-events-none peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-neon-blue peer-[:not(:placeholder-shown)]:-translate-y-6 peer-[:not(:placeholder-shown)]:scale-75">
                                  Tell us about your project
                                </label>
                              </div>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.8 }}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Button 
                          type="submit" 
                          size="lg"
                          className="group/btn relative overflow-hidden w-full bg-gradient-to-r from-neon-green/80 to-neon-blue/80 text-white font-bold py-4 rounded-xl border border-neon-green/40 hover:border-neon-green/60 transition-all duration-500 shadow-lg hover:shadow-2xl hover:shadow-neon-green/20"
                          disabled={contactMutation.isPending}
                        >
                          <motion.span
                            className="relative z-10 flex items-center justify-center gap-3"
                            animate={contactMutation.isPending ? {} : { x: [0, 2, 0] }}
                            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                          >
                            {contactMutation.isPending ? (
                              <>
                                <motion.div
                                  animate={{ rotate: 360 }}
                                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                                >
                                  ⏳
                                </motion.div>
                                Sending...
                              </>
                            ) : (
                              <>
                                <motion.div
                                  animate={{ rotate: [0, 20, 0] }}
                                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                                >
                                  🚀
                                </motion.div>
                                Send Message
                                <motion.div
                                  animate={{ x: [0, 4, 0] }}
                                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                                >
                                  →
                                </motion.div>
                              </>
                            )}
                          </motion.span>
                          
                          {/* Button glow effect */}
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-neon-green/50 to-neon-blue/50 opacity-0 group-hover/btn:opacity-100 rounded-xl"
                            initial={{ x: "-100%" }}
                            whileHover={{ x: "0%" }}
                            transition={{ duration: 0.6 }}
                          />
                        </Button>
                      </motion.div>
                    </form>
                  </Form>
                </CardContent>
              </Card>
            </motion.div>

            {/* Enhanced Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 50, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8"
            >
              <motion.div
                whileHover={{ 
                  y: -8,
                  transition: { type: "spring", stiffness: 300, damping: 20 }
                }}
                className="group"
              >
                {/* Info card glow effect */}
                <motion.div 
                  className="absolute -inset-2 rounded-3xl bg-gradient-to-r from-neon-green/30 via-neon-pink/30 to-neon-blue/30 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-xl"
                  animate={{ 
                    rotate: [360, 0],
                    scale: [1.02, 0.98, 1.02]
                  }}
                  transition={{ 
                    duration: 8, 
                    repeat: Infinity, 
                    ease: "easeInOut"
                  }}
                />
                
                <Card className="relative bg-gradient-to-br from-card/95 via-card to-card/90 border border-border/30 backdrop-blur-sm hover:shadow-2xl hover:shadow-neon-green/10 transition-all duration-500 rounded-3xl">
                  <CardHeader className="pb-6">
                    <motion.div
                      initial={{ y: -10, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                    >
                      <CardTitle className="text-3xl font-bold neon-green flex items-center gap-3">
                        <motion.div
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        >
                          📞
                        </motion.div>
                        Get in Touch
                      </CardTitle>
                      <p className="text-muted-foreground mt-2 text-sm">
                        Multiple ways to reach us - we're always here to help
                      </p>
                    </motion.div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-8 leading-relaxed">
                      We're here to help bring your vision to life. Whether you have a specific project in mind or need guidance on your digital strategy, our team is ready to assist you.
                    </p>
                    
                    <div className="space-y-6">
                      {contactInfo.map((info, index) => (
                        <motion.div
                          key={info.title}
                          initial={{ opacity: 0, y: 20, x: -20 }}
                          animate={{ opacity: 1, y: 0, x: 0 }}
                          whileHover={{ x: 5, scale: 1.02 }}
                          transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                          className="flex items-center space-x-4 p-4 rounded-2xl bg-gradient-to-r from-muted/50 to-muted/30 border border-border/30 hover:border-border/60 transition-all duration-300 group/item"
                        >
                          <motion.div 
                            className={`w-14 h-14 bg-${info.color}/20 rounded-xl flex items-center justify-center border border-${info.color}/30 group-hover/item:bg-${info.color}/30 transition-all duration-300`}
                            whileHover={{ rotate: 10, scale: 1.1 }}
                            transition={{ duration: 0.2 }}
                          >
                            <info.icon className={`${info.color} group-hover/item:scale-110 transition-transform duration-300`} size={22} />
                          </motion.div>
                          <div>
                            <div className="font-bold text-lg group-hover/item:text-foreground transition-colors duration-300">{info.title}</div>
                            <div className="text-muted-foreground group-hover/item:text-muted-foreground/80 transition-colors duration-300">{info.value}</div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <Card className="bg-card border-border">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 bg-neon-blue/20 rounded-lg flex items-center justify-center">
                      <Clock className="neon-blue" size={20} />
                    </div>
                    <div>
                      <h4 className="font-semibold neon-blue">Quick Response</h4>
                    </div>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    We typically respond to all inquiries within 24 hours. For urgent projects, feel free to call us directly.
                  </p>
                </CardContent>
              </Card>

              <Card className="card-premium">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-8 h-8 gradient-tertiary rounded-lg flex items-center justify-center">
                      <span className="text-background font-bold text-sm">📱</span>
                    </div>
                    <h4 className="font-bold text-lg text-gradient-primary">Follow Us</h4>
                  </div>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Stay connected and get the latest updates on digital trends, industry insights, and our newest projects.
                  </p>
                  <div className="grid grid-cols-3 gap-4">
                    <motion.a
                      href="https://linkedin.com/in/freelantix"
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6, delay: 0.5 }}
                      className="group glass-effect rounded-xl p-4 text-center hover:border-neon-blue/30 transition-all duration-300"
                    >
                      <div className="w-12 h-12 bg-neon-blue/20 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:bg-neon-blue/30 transition-colors duration-300">
                        <svg className="w-6 h-6 text-neon-blue" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                        </svg>
                      </div>
                      <span className="text-sm font-medium text-muted-foreground group-hover:text-neon-blue transition-colors duration-300">LinkedIn</span>
                    </motion.a>

                    <motion.a
                      href="https://twitter.com/freelantix"
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6, delay: 0.6 }}
                      className="group glass-effect rounded-xl p-4 text-center hover:border-neon-green/30 transition-all duration-300"
                    >
                      <div className="w-12 h-12 bg-neon-green/20 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:bg-neon-green/30 transition-colors duration-300">
                        <svg className="w-6 h-6 text-neon-green" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                        </svg>
                      </div>
                      <span className="text-sm font-medium text-muted-foreground group-hover:text-neon-green transition-colors duration-300">Twitter</span>
                    </motion.a>

                    <motion.a
                      href="https://instagram.com/freelantixx"
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6, delay: 0.7 }}
                      className="group glass-effect rounded-xl p-4 text-center hover:border-neon-pink/30 transition-all duration-300"
                    >
                      <div className="w-12 h-12 bg-neon-pink/20 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:bg-neon-pink/30 transition-colors duration-300">
                        <svg className="w-6 h-6 text-neon-pink" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                        </svg>
                      </div>
                      <span className="text-sm font-medium text-muted-foreground group-hover:text-neon-pink transition-colors duration-300">Instagram</span>
                    </motion.a>
                  </div>
                  
                  <div className="mt-6 p-4 glass-effect rounded-xl">
                    <p className="text-sm text-muted-foreground text-center">
                      Join <span className="neon-blue font-semibold">10K+</span> followers staying ahead of digital trends
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
