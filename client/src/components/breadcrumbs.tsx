import { Link, useLocation } from "wouter";
import { ChevronRight, Home } from "lucide-react";
import { motion } from "framer-motion";

interface BreadcrumbItem {
  label: string;
  href: string;
}

export default function Breadcrumbs() {
  const [location] = useLocation();
  
  const generateBreadcrumbs = (): BreadcrumbItem[] => {
    const pathSegments = location.split('/').filter(segment => segment !== '');
    const breadcrumbs: BreadcrumbItem[] = [
      { label: "Home", href: "/" }
    ];

    let currentPath = '';
    pathSegments.forEach(segment => {
      currentPath += `/${segment}`;
      
      // Convert URL segments to readable labels
      const label = segment
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
      
      breadcrumbs.push({
        label,
        href: currentPath
      });
    });

    return breadcrumbs;
  };

  const breadcrumbs = generateBreadcrumbs();

  // Don't show breadcrumbs on home page
  if (location === '/') {
    return null;
  }

  return (
    <nav aria-label="Breadcrumb" className="py-4">
      <div className="container mx-auto px-8">
        <motion.ol 
          className="flex items-center space-x-2 text-sm"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {breadcrumbs.map((breadcrumb, index) => {
            const isLast = index === breadcrumbs.length - 1;
            
            return (
              <motion.li 
                key={breadcrumb.href}
                className="flex items-center"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                {index > 0 && (
                  <ChevronRight 
                    size={14} 
                    className="text-muted-foreground mx-2" 
                  />
                )}
                
                {index === 0 ? (
                  <Link href={breadcrumb.href}>
                    <div className="flex items-center text-muted-foreground hover:text-foreground transition-colors duration-200">
                      <Home size={14} className="mr-1" />
                      <span>{breadcrumb.label}</span>
                    </div>
                  </Link>
                ) : isLast ? (
                  <span 
                    className="text-foreground font-medium"
                    aria-current="page"
                  >
                    {breadcrumb.label}
                  </span>
                ) : (
                  <Link href={breadcrumb.href}>
                    <span className="text-muted-foreground hover:text-foreground transition-colors duration-200">
                      {breadcrumb.label}
                    </span>
                  </Link>
                )}
              </motion.li>
            );
          })}
        </motion.ol>
      </div>
    </nav>
  );
}