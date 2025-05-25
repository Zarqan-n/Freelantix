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
    { name: "Careers", href: "#" }
  ],
  legal: [
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" },
    { name: "Cookie Policy", href: "#" }
  ]
};

const socialLinks = [
  { name: "LinkedIn", icon: "fab fa-linkedin", href: "#", color: "neon-blue" },
  { name: "Twitter", icon: "fab fa-twitter", href: "#", color: "neon-green" },
  { name: "Instagram", icon: "fab fa-instagram", href: "#", color: "neon-pink" }
];

export default function Footer() {
  return (
    <footer className="bg-muted border-t border-border py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="md:col-span-2"
          >
            <div className="text-3xl font-black neon-blue mb-4">Freelantix</div>
            <p className="text-muted-foreground mb-6 max-w-md">
              Building cutting-edge digital experiences that drive business growth and success.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`text-muted-foreground hover:${social.color} transition-colors duration-300`}
                >
                  <i className={`${social.icon} text-xl`}></i>
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
            <h3 className="text-lg font-semibold mb-4 neon-green">Services</h3>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link href={link.href}>
                    <span className="text-muted-foreground hover:text-foreground transition-colors duration-300 cursor-pointer">
                      {link.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Legal */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-lg font-semibold mb-4 neon-pink">Legal</h3>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link href={link.href}>
                    <span className="text-muted-foreground hover:text-foreground transition-colors duration-300 cursor-pointer">
                      {link.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="border-t border-border mt-12 pt-8 text-center"
        >
          <p className="text-muted-foreground">
            © 2024 Freelantix. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
