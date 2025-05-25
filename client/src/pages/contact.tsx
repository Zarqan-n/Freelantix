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
    value: "hello@freelantix.com",
    color: "neon-blue"
  },
  {
    icon: Phone,
    title: "Phone",
    value: "+1 (555) 123-4567",
    color: "neon-green"
  },
  {
    icon: MapPin,
    title: "Location",
    value: "San Francisco, CA",
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
              Ready to Elevate Your <span className="neon-pink">Business Online?</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Let's build your success story! Send us a message or schedule a consultation to discuss your project.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold neon-blue">
                    Send us a message
                  </CardTitle>
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

                      <Button 
                        type="submit" 
                        size="lg"
                        className="w-full btn-neon bg-neon-green text-background hover:bg-neon-green/90"
                        disabled={contactMutation.isPending}
                      >
                        {contactMutation.isPending ? "Sending..." : "Send Message"}
                      </Button>
                    </form>
                  </Form>
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8"
            >
              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold neon-green">
                    Get in Touch
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-8 leading-relaxed">
                    We're here to help bring your vision to life. Whether you have a specific project in mind or need guidance on your digital strategy, our team is ready to assist you.
                  </p>
                  
                  <div className="space-y-6">
                    {contactInfo.map((info, index) => (
                      <motion.div
                        key={info.title}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                        className="flex items-center space-x-4"
                      >
                        <div className={`w-12 h-12 bg-${info.color}/20 rounded-lg flex items-center justify-center`}>
                          <info.icon className={`${info.color}`} size={20} />
                        </div>
                        <div>
                          <div className="font-semibold">{info.title}</div>
                          <div className="text-muted-foreground">{info.value}</div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>

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

              <Card className="bg-card border-border">
                <CardContent className="p-6">
                  <h4 className="font-semibold mb-4 neon-green">Follow Us</h4>
                  <div className="flex space-x-4">
                    {["linkedin", "twitter", "instagram"].map((social, index) => (
                      <motion.a
                        key={social}
                        href="#"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                        className={`w-12 h-12 bg-${index === 0 ? 'neon-blue' : index === 1 ? 'neon-green' : 'neon-pink'}/20 rounded-lg flex items-center justify-center hover:bg-${index === 0 ? 'neon-blue' : index === 1 ? 'neon-green' : 'neon-pink'}/30 transition-colors duration-300`}
                      >
                        <i className={`fab fa-${social} ${index === 0 ? 'neon-blue' : index === 1 ? 'neon-green' : 'neon-pink'}`}></i>
                      </motion.a>
                    ))}
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
