import { useState } from "react";
import { Link, useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" }
];

export default function Header() {
  const [location] = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 bg-transparent backdrop-blur-sm">
      <nav className="container mx-auto px-8 py-6">
        <div className="flex items-center justify-between">
          {/* Clean Logo */}
          <Link href="/" onClick={() => window.scrollTo(0, 0)}>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="relative group cursor-pointer"
            >
              <div className="flex items-center gap-3 px-2 py-1">
                <div className="w-8 h-8 gradient-primary rounded-lg flex items-center justify-center">
                  <span className="text-background font-black text-sm">FX</span>
                </div>
                <span className="text-xl font-black text-gradient-primary">Freelantix</span>
              </div>
            </motion.div>
          </Link>

          {/* Premium Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-2">
            {navigation.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                <Link href={item.href} onClick={() => window.scrollTo(0, 0)}>
                  <div
                    className={`relative px-6 py-3 rounded-xl cursor-pointer transition-all duration-300 group ${
                      location === item.href
                        ? "bg-white/5"
                        : "hover:bg-white/5"
                    }`}
                  >
                    <span
                      className={`font-medium transition-colors duration-300 ${
                        location === item.href
                          ? "neon-blue"
                          : "text-muted-foreground group-hover:text-foreground"
                      }`}
                    >
                      {item.name}
                    </span>
                    {location === item.href && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-neon-blue rounded-full"
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Premium CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link href="/contact">
              <Button 
                className="btn-premium gradient-primary text-background px-8 py-3 font-semibold group"
                onClick={() => window.scrollTo(0, 0)}
              >
                Get Started
                <motion.span
                  className="ml-2 inline-block"
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                  →
                </motion.span>
              </Button>
            </Link>
          </div>

          {/* Enhanced Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden bg-white/5 p-3"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <motion.div
              animate={{ rotate: isMobileMenuOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {isMobileMenuOpen ? <X size={20} className="neon-blue" /> : <Menu size={20} className="neon-blue" />}
            </motion.div>
          </Button>
        </div>

        {/* Enhanced Mobile Navigation */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden mt-6 pb-6 border-t border-border/20"
            >
              <div className="flex flex-col space-y-3 mt-6">
                {navigation.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <Link href={item.href}>
                      <div
                        className={`block cursor-pointer p-4 rounded-xl transition-all duration-300 ${
                          location === item.href
                            ? "glass-effect border border-neon-blue/30 neon-blue"
                            : "text-muted-foreground hover:text-foreground hover:glass-effect hover:border hover:border-border/20"
                        }`}
                        onClick={() => {
                          setIsMobileMenuOpen(false);
                          window.scrollTo(0, 0);
                        }}
                      >
                        <span className="font-medium">{item.name}</span>
                      </div>
                    </Link>
                  </motion.div>
                ))}
                
                {/* Mobile CTA Button */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.5 }}
                  className="pt-4 border-t border-border/20 mt-4"
                >
                  <Link href="/contact">
                    <Button 
                      className="w-full btn-premium gradient-primary text-background py-4 font-semibold"
                      onClick={() => {
                        setIsMobileMenuOpen(false);
                        window.scrollTo(0, 0);
                      }}
                    >
                      Get Started
                    </Button>
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
