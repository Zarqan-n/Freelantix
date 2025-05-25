import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
  fallback?: string;
  sizes?: string;
  onLoad?: () => void;
}

export default function LazyImage({ 
  src, 
  alt, 
  className = '', 
  fallback = '',
  sizes = '',
  onLoad 
}: LazyImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const [hasError, setHasError] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleLoad = () => {
    setIsLoaded(true);
    onLoad?.();
  };

  const handleError = () => {
    setHasError(true);
    if (fallback) {
      setIsLoaded(true);
    }
  };

  return (
    <div ref={imgRef} className={`relative overflow-hidden ${className}`}>
      {/* Loading skeleton */}
      {!isLoaded && (
        <motion.div 
          className="absolute inset-0 bg-gradient-to-r from-muted via-muted/50 to-muted animate-pulse"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        />
      )}
      
      {/* Actual image */}
      {isInView && (
        <motion.img
          src={hasError && fallback ? fallback : src}
          alt={alt}
          sizes={sizes}
          onLoad={handleLoad}
          onError={handleError}
          className={`w-full h-full object-cover transition-opacity duration-500 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          initial={{ scale: 1.1 }}
          animate={{ scale: isLoaded ? 1 : 1.1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          loading="lazy"
        />
      )}
    </div>
  );
}