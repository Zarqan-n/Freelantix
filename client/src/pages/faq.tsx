import { motion } from "framer-motion";
import { HelpCircle, ChevronDown, Search, MessageCircle, Phone, Mail, Clock, CheckCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqCategories = [
  { name: "General", count: 8, color: "neon-blue" },
  { name: "Services", count: 12, color: "neon-green" },
  { name: "Pricing", count: 6, color: "neon-pink" },
  { name: "Technical", count: 10, color: "neon-blue" },
  { name: "Support", count: 5, color: "neon-green" }
];

const generalFaqs = [
  {
    question: "What services does Freelantix offer?",
    answer: "We specialize in premium web development, UI/UX design, e-commerce solutions, and digital strategy consulting. Our team creates cutting-edge digital experiences that drive business growth and user engagement."
  },
  {
    question: "How long does a typical project take?",
    answer: "Project timelines vary based on scope and complexity. A simple website typically takes 2-4 weeks, while complex web applications can take 3-6 months. We provide detailed timelines during our initial consultation."
  },
  {
    question: "Do you work with startups and small businesses?",
    answer: "Absolutely! We work with businesses of all sizes, from ambitious startups to enterprise-level organizations. We tailor our approach and solutions to match your budget and growth stage."
  },
  {
    question: "What technologies do you use?",
    answer: "We use cutting-edge technologies including React, Next.js, Node.js, TypeScript, and modern design tools like Figma. We stay current with the latest trends while ensuring stability and scalability."
  }
];

const servicesFaqs = [
  {
    question: "Can you redesign my existing website?",
    answer: "Yes, we excel at website redesigns! We analyze your current site, identify improvement opportunities, and create a modern, user-friendly design that better serves your business goals and user needs."
  },
  {
    question: "Do you provide ongoing maintenance and support?",
    answer: "We offer comprehensive maintenance packages including security updates, performance optimization, content updates, and technical support. Our support plans are designed to keep your website running smoothly."
  },
  {
    question: "Can you help with SEO and digital marketing?",
    answer: "Our digital strategy services include SEO optimization, content strategy, and performance marketing. We ensure your website not only looks great but also ranks well and converts visitors into customers."
  },
  {
    question: "Do you create mobile apps?",
    answer: "While our primary focus is web development, we create responsive web applications that work seamlessly across all devices. For native mobile apps, we can recommend trusted partners in our network."
  }
];

const pricingFaqs = [
  {
    question: "How do you price your projects?",
    answer: "We provide custom quotes based on project scope, complexity, and timeline. After our initial consultation, we'll provide a detailed proposal with transparent pricing and deliverables."
  },
  {
    question: "Do you require payment upfront?",
    answer: "We typically request 50% upfront to begin work, with the remainder due upon project completion. For larger projects, we can arrange milestone-based payment schedules."
  },
  {
    question: "What's included in your pricing?",
    answer: "Our quotes include design, development, testing, launch, and initial support. We're transparent about what's included and any potential additional costs are discussed upfront."
  }
];

const technicalFaqs = [
  {
    question: "Will my website be mobile-friendly?",
    answer: "Absolutely! All our websites are built with responsive design principles, ensuring they look and function perfectly on all devices - from smartphones to desktop computers."
  },
  {
    question: "Do you provide website hosting?",
    answer: "We help you choose the best hosting solution for your needs and can manage the setup. We work with premium hosting providers to ensure optimal performance and security."
  },
  {
    question: "Can I update my website content myself?",
    answer: "Yes! We build user-friendly content management systems that allow you to easily update text, images, and other content. We also provide training to ensure you're comfortable managing your site."
  },
  {
    question: "What about website security?",
    answer: "Security is paramount in our development process. We implement best practices including SSL certificates, secure coding standards, regular updates, and security monitoring."
  }
];

const supportFaqs = [
  {
    question: "How quickly do you respond to support requests?",
    answer: "We aim to respond to all support requests within 24 hours on business days. Urgent issues are typically addressed within 2-4 hours during business hours."
  },
  {
    question: "What support channels do you offer?",
    answer: "We provide support via email, phone, and our client portal. For ongoing projects, we also offer video calls and screen sharing for more complex issues."
  },
  {
    question: "Do you provide training for our team?",
    answer: "Yes! We offer comprehensive training sessions to ensure your team can effectively manage and maintain your digital presence. Training can be conducted remotely or on-site."
  }
];

const contactOptions = [
  {
    icon: MessageCircle,
    title: "Live Chat",
    description: "Get instant answers to your questions",
    action: "Start Chat",
    color: "neon-blue"
  },
  {
    icon: Phone,
    title: "Phone Support",
    description: "Speak directly with our experts",
    action: "Call Us",
    color: "neon-green"
  },
  {
    icon: Mail,
    title: "Email Support",
    description: "Send us a detailed message",
    action: "Send Email",
    color: "neon-pink"
  }
];

export default function FAQ() {
  return (
    <div className="pt-20">
      {/* Enhanced Hero Section */}
      <section className="py-24 bg-gradient-to-br from-background via-muted/20 to-background relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-20">
          <motion.div 
            className="absolute top-20 right-20 w-64 h-64 bg-neon-blue/20 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.2, 0.4, 0.2],
              y: [0, -30, 0]
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div 
            className="absolute bottom-20 left-20 w-80 h-80 bg-neon-green/15 rounded-full blur-3xl"
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.15, 0.3, 0.15],
              x: [0, 40, 0]
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />
          
          {/* Floating question marks */}
          {[HelpCircle, MessageCircle, Search].map((Icon, i) => (
            <motion.div
              key={i}
              className="absolute"
              style={{
                left: `${20 + i * 30}%`,
                top: `${30 + (i % 2) * 40}%`
              }}
              animate={{
                y: [-20, -40, -20],
                rotate: [0, 15, 0],
                opacity: [0.3, 0.6, 0.3]
              }}
              transition={{
                duration: 4 + i * 0.5,
                repeat: Infinity,
                delay: i * 0.8,
                ease: "easeInOut"
              }}
            >
              <Icon size={24} className="text-neon-pink/40" />
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
              <div className="w-20 h-20 bg-gradient-to-br from-neon-blue to-neon-green rounded-2xl flex items-center justify-center shadow-2xl">
                <HelpCircle size={40} className="text-white" />
              </div>
            </motion.div>
            
            <motion.h1 
              className="text-4xl lg:text-6xl font-black mb-6"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Frequently Asked <span className="neon-blue">Questions</span>
            </motion.h1>
            <motion.p 
              className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              Find answers to common questions about our services, processes, and how we can help transform your digital presence.
            </motion.p>
            
            <motion.div
              className="flex justify-center gap-4 mt-8"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <Badge className="bg-neon-blue/20 text-neon-blue border-neon-blue/30 px-4 py-2">
                ❓ Quick Answers
              </Badge>
              <Badge className="bg-neon-green/20 text-neon-green border-neon-green/30 px-4 py-2">
                💬 Expert Support
              </Badge>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Search and Categories */}
      <section className="py-12 bg-gradient-to-br from-muted/30 via-background to-muted/20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            {/* Search Bar */}
            <div className="relative mb-8">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={20} />
              <Input 
                placeholder="Search frequently asked questions..." 
                className="pl-12 py-4 text-lg bg-card/80 border-border/30"
              />
            </div>
            
            {/* Categories */}
            <div className="flex flex-wrap gap-3 justify-center">
              {faqCategories.map((category, index) => (
                <motion.div
                  key={category.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <Button 
                    variant="outline" 
                    className={`${category.color} border-${category.color}/30 hover:bg-${category.color}/10`}
                  >
                    {category.name} ({category.count})
                  </Button>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Sections */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto space-y-16">
            
            {/* General Questions */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold mb-8 neon-blue">General Questions</h2>
              <Accordion type="single" collapsible className="space-y-4">
                {generalFaqs.map((faq, index) => (
                  <AccordionItem key={index} value={`general-${index}`} className="border border-border/30 rounded-2xl px-6">
                    <AccordionTrigger className="text-left hover:no-underline py-6">
                      <span className="text-lg font-semibold">{faq.question}</span>
                    </AccordionTrigger>
                    <AccordionContent className="pb-6">
                      <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </motion.div>

            {/* Services Questions */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-3xl font-bold mb-8 neon-green">Services & Process</h2>
              <Accordion type="single" collapsible className="space-y-4">
                {servicesFaqs.map((faq, index) => (
                  <AccordionItem key={index} value={`services-${index}`} className="border border-border/30 rounded-2xl px-6">
                    <AccordionTrigger className="text-left hover:no-underline py-6">
                      <span className="text-lg font-semibold">{faq.question}</span>
                    </AccordionTrigger>
                    <AccordionContent className="pb-6">
                      <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </motion.div>

            {/* Pricing Questions */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h2 className="text-3xl font-bold mb-8 neon-pink">Pricing & Payment</h2>
              <Accordion type="single" collapsible className="space-y-4">
                {pricingFaqs.map((faq, index) => (
                  <AccordionItem key={index} value={`pricing-${index}`} className="border border-border/30 rounded-2xl px-6">
                    <AccordionTrigger className="text-left hover:no-underline py-6">
                      <span className="text-lg font-semibold">{faq.question}</span>
                    </AccordionTrigger>
                    <AccordionContent className="pb-6">
                      <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </motion.div>

            {/* Technical Questions */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-8 neon-blue">Technical Questions</h2>
              <Accordion type="single" collapsible className="space-y-4">
                {technicalFaqs.map((faq, index) => (
                  <AccordionItem key={index} value={`technical-${index}`} className="border border-border/30 rounded-2xl px-6">
                    <AccordionTrigger className="text-left hover:no-underline py-6">
                      <span className="text-lg font-semibold">{faq.question}</span>
                    </AccordionTrigger>
                    <AccordionContent className="pb-6">
                      <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </motion.div>

            {/* Support Questions */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <h2 className="text-3xl font-bold mb-8 neon-green">Support & Training</h2>
              <Accordion type="single" collapsible className="space-y-4">
                {supportFaqs.map((faq, index) => (
                  <AccordionItem key={index} value={`support-${index}`} className="border border-border/30 rounded-2xl px-6">
                    <AccordionTrigger className="text-left hover:no-underline py-6">
                      <span className="text-lg font-semibold">{faq.question}</span>
                    </AccordionTrigger>
                    <AccordionContent className="pb-6">
                      <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-20 bg-gradient-to-br from-muted/30 via-background to-muted/20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Still Need <span className="neon-pink">Help?</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Can't find what you're looking for? Our support team is here to help
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {contactOptions.map((option, index) => (
              <motion.div
                key={option.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <Card className="bg-gradient-to-br from-card/80 to-card/60 border border-border/30 hover:shadow-xl transition-all duration-300 h-full">
                  <CardContent className="p-8">
                    <motion.div
                      className={`w-16 h-16 bg-${option.color}/20 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-${option.color}/30`}
                      whileHover={{ rotate: 10, scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <option.icon className={`${option.color}`} size={32} />
                    </motion.div>
                    <h3 className={`text-xl font-bold mb-3 ${option.color}`}>{option.title}</h3>
                    <p className="text-muted-foreground mb-6">{option.description}</p>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button className={`bg-${option.color}/20 text-${option.color} border border-${option.color}/30 hover:bg-${option.color}/30`}>
                        {option.action}
                      </Button>
                    </motion.div>
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
                <h2 className="text-3xl font-bold mb-6 neon-blue">Ready to Get Started?</h2>
                <p className="text-muted-foreground mb-8 text-lg max-w-2xl mx-auto">
                  Have all your questions answered? Let's discuss your project and see how we can help transform your digital presence.
                </p>
                <motion.button
                  className="px-10 py-5 bg-gradient-to-r from-neon-blue/20 via-neon-green/20 to-neon-pink/20 backdrop-blur-sm rounded-2xl font-bold text-lg border border-neon-blue/40 hover:border-neon-blue/60 transition-all duration-500 shadow-xl hover:shadow-2xl hover:shadow-neon-blue/20"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="flex items-center gap-3">
                    Start Your Project
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