import { Link } from "wouter";
import { motion } from "framer-motion";

const footerLinks = {
  services: [
    { name: "Web Development", href: "/services" },
    { name: "UI/UX Design", href: "/services" },
    { name: "eCommerce Solutions", href: "/services" },
    { name: "Digital Strategy", href: "/services" }
  ],
  company: [
    { name: "About Us", href: "/about" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Contact", href: "/contact" },
    { name: "Careers", href: "/careers" }
  ],
  legal: [
    { name: "Privacy Policy", href: "/privacy-policy" },
    { name: "Terms of Service", href: "/terms-of-service" },
    { name: "Cookie Policy", href: "/cookie-policy" }
  ]
};

const socialLinks = [
  { name: "LinkedIn", icon: "fab fa-linkedin", href: "#", color: "neon-blue" },
  { name: "Twitter", icon: "fab fa-twitter", href: "#", color: "neon-green" },
  { name: "Instagram", icon: "fab fa-instagram", href: "#", color: "neon-pink" }
];

export default function Footer() {
  return (
    <footer className="relative bg-background border-t border-border/20 overflow-hidden">
      {/* Premium background effects */}
      <div className="absolute inset-0 gradient-bg opacity-50"></div>
      <div className="absolute top-0 left-1/4 w-64 h-64 gradient-primary rounded-full opacity-10 blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-48 h-48 gradient-secondary rounded-full opacity-10 blur-3xl"></div>
      
      <div className="container mx-auto px-6 py-16 relative z-10">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <div className="text-4xl font-black text-gradient-primary mb-6">Freelantix</div>
            <p className="text-muted-foreground mb-8 max-w-md text-lg leading-relaxed">
              Building cutting-edge digital experiences that drive business growth and transform ideas into reality.
            </p>
            
            {/* Newsletter Signup */}
            <div className="mb-8">
              <h4 className="text-lg font-semibold mb-4 text-gradient-secondary">Stay Updated</h4>
              <div className="flex gap-3 max-w-md">
                <input 
                  type="email" 
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-card border border-border/30 rounded-lg focus:outline-none focus:border-neon-blue/50 text-foreground placeholder:text-muted-foreground"
                />
                <button className="btn-premium gradient-primary text-background px-6 py-3 rounded-lg font-semibold">
                  Subscribe
                </button>
              </div>
            </div>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`w-12 h-12 glass-effect rounded-xl flex items-center justify-center text-muted-foreground hover:${social.color} hover:scale-110 transition-all duration-300 group`}
                >
                  <i className={`${social.icon} text-xl group-hover:animate-pulse`}></i>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-xl font-bold mb-6 text-gradient-primary">Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link, index) => (
                <li key={link.name}>
                  <Link href={link.href}>
                    <motion.span 
                      className="text-muted-foreground hover:text-foreground transition-colors duration-300 cursor-pointer flex items-center group"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <span className="w-2 h-2 bg-neon-blue rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                      {link.name}
                    </motion.span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Company & Legal */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-xl font-bold mb-6 text-gradient-secondary">Company</h3>
            <ul className="space-y-3 mb-8">
              {footerLinks.company.map((link, index) => (
                <li key={link.name}>
                  <Link href={link.href}>
                    <motion.span 
                      className="text-muted-foreground hover:text-foreground transition-colors duration-300 cursor-pointer flex items-center group"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <span className="w-2 h-2 bg-neon-green rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                      {link.name}
                    </motion.span>
                  </Link>
                </li>
              ))}
            </ul>
            
            <h4 className="text-lg font-semibold mb-4 neon-pink">Legal</h4>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link href={link.href}>
                    <span className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300 cursor-pointer">
                      {link.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="premium-border rounded-xl mt-16 p-1"
        >
          <div className="premium-border-content rounded-xl py-8 px-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="flex items-center gap-4">
                <p className="text-muted-foreground text-sm">
                  © 2024 Freelantix. All rights reserved.
                </p>
                <span className="text-muted-foreground text-sm">•</span>
                <p className="text-muted-foreground text-sm">
                  Made with <span className="neon-pink">♥</span> for ambitious businesses
                </p>
              </div>
              
              <div className="flex items-center gap-6 text-sm text-muted-foreground">
                <span className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-neon-green rounded-full animate-pulse"></div>
                  All systems operational
                </span>
                <Link href="/contact">
                  <span className="text-neon-blue hover:text-neon-blue/80 transition-colors cursor-pointer">
                    Get Support
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
