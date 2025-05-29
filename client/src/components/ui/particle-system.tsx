import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
  speedX: number;
  speedY: number;
  color: string;
}

interface ParticleSystemProps {
  particleCount?: number;
  className?: string;
}

export default function ParticleSystem({ 
  particleCount = 30, 
  className = "" 
}: ParticleSystemProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef({ x: 0, y: 0 });
  const animationRef = useRef<number>();

  const colors = ['#1ae7ff', '#00ff88', '#ff6b9d', '#c471ed'];

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const rect = container.getBoundingClientRect();
    
    // Ensure we have valid dimensions
    const width = rect.width || 800;
    const height = rect.height || 600;

    // Initialize particles
    particlesRef.current = Array.from({ length: particleCount }, (_, i) => ({
      id: i,
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 3 + 1,
      opacity: Math.random() * 0.5 + 0.2,
      speedX: (Math.random() - 0.5) * 0.5,
      speedY: (Math.random() - 0.5) * 0.5,
      color: colors[Math.floor(Math.random() * colors.length)]
    }));

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      };
    };

    const animate = () => {
      const rect = container.getBoundingClientRect();
      const currentWidth = rect.width || 800;
      const currentHeight = rect.height || 600;
      
      particlesRef.current.forEach(particle => {
        // Validate particle position
        if (isNaN(particle.x) || isNaN(particle.y)) {
          particle.x = Math.random() * currentWidth;
          particle.y = Math.random() * currentHeight;
          particle.speedX = (Math.random() - 0.5) * 0.5;
          particle.speedY = (Math.random() - 0.5) * 0.5;
        }

        // Mouse attraction
        const dx = mouseRef.current.x - particle.x;
        const dy = mouseRef.current.y - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < 150 && !isNaN(distance) && distance > 0) {
          const force = (150 - distance) / 150;
          particle.speedX += (dx / distance) * force * 0.01;
          particle.speedY += (dy / distance) * force * 0.01;
        }

        // Update position
        particle.x += particle.speedX;
        particle.y += particle.speedY;

        // Boundary collision
        if (particle.x < 0 || particle.x > currentWidth) {
          particle.speedX *= -0.8;
          particle.x = Math.max(0, Math.min(currentWidth, particle.x));
        }
        if (particle.y < 0 || particle.y > currentHeight) {
          particle.speedY *= -0.8;
          particle.y = Math.max(0, Math.min(currentHeight, particle.y));
        }

        // Friction
        particle.speedX *= 0.99;
        particle.speedY *= 0.99;
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    container.addEventListener('mousemove', handleMouseMove);
    animate();

    return () => {
      container.removeEventListener('mousemove', handleMouseMove);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [particleCount]);

  return (
    <div ref={containerRef} className={`absolute inset-0 pointer-events-none ${className}`}>
      {particlesRef.current.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full blur-sm"
          style={{
            width: particle.size,
            height: particle.size,
            backgroundColor: particle.color,
            opacity: particle.opacity,
            left: isNaN(particle.x) ? 0 : particle.x,
            top: isNaN(particle.y) ? 0 : particle.y,
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [particle.opacity, particle.opacity * 1.5, particle.opacity],
          }}
          transition={{
            duration: 2 + Math.random() * 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}