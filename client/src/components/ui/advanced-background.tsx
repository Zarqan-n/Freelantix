import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface AdvancedBackgroundProps {
  className?: string;
  variant?: 'geometric' | 'constellation' | 'gradient' | 'mesh';
}

export default function AdvancedBackground({ 
  className = "",
  variant = 'geometric'
}: AdvancedBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || variant !== 'constellation') return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    const points: Array<{ x: number; y: number; vx: number; vy: number }> = [];
    
    // Initialize constellation points
    for (let i = 0; i < 50; i++) {
      points.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Update points
      points.forEach(point => {
        point.x += point.vx;
        point.y += point.vy;
        
        if (point.x < 0 || point.x > canvas.width) point.vx *= -1;
        if (point.y < 0 || point.y > canvas.height) point.vy *= -1;
      });

      // Draw connections
      ctx.strokeStyle = 'rgba(26, 231, 255, 0.1)';
      ctx.lineWidth = 1;
      
      for (let i = 0; i < points.length; i++) {
        for (let j = i + 1; j < points.length; j++) {
          const dx = points[i].x - points[j].x;
          const dy = points[i].y - points[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 100) {
            const opacity = 1 - distance / 100;
            ctx.strokeStyle = `rgba(26, 231, 255, ${opacity * 0.2})`;
            ctx.beginPath();
            ctx.moveTo(points[i].x, points[i].y);
            ctx.lineTo(points[j].x, points[j].y);
            ctx.stroke();
          }
        }
      }

      // Draw points
      ctx.fillStyle = 'rgba(26, 231, 255, 0.6)';
      points.forEach(point => {
        ctx.beginPath();
        ctx.arc(point.x, point.y, 2, 0, Math.PI * 2);
        ctx.fill();
      });

      requestAnimationFrame(animate);
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      };
    };

    resizeCanvas();
    canvas.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', resizeCanvas);
    animate();

    return () => {
      canvas.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [variant]);

  if (variant === 'constellation') {
    return (
      <div className={`absolute inset-0 overflow-hidden ${className}`}>
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full"
          style={{ mixBlendMode: 'screen' }}
        />
      </div>
    );
  }

  if (variant === 'geometric') {
    return (
      <div className={`absolute inset-0 overflow-hidden ${className}`}>
        {/* Animated geometric shapes */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-32 h-32 border border-neon-blue/20 rotate-45"
          animate={{
            rotate: [45, 225, 45],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute bottom-1/3 right-1/4 w-24 h-24 border border-neon-pink/20 rounded-full"
          animate={{
            rotate: [0, 360],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute top-1/2 right-1/3 w-20 h-20 bg-neon-green/10 rounded-lg"
          animate={{
            rotate: [0, 180, 360],
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>
    );
  }

  if (variant === 'mesh') {
    return (
      <div className={`absolute inset-0 overflow-hidden ${className}`}>
        <motion.div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(circle at 20% 30%, rgba(26, 231, 255, 0.1) 0%, transparent 50%),
              radial-gradient(circle at 80% 70%, rgba(255, 107, 157, 0.1) 0%, transparent 50%),
              radial-gradient(circle at 50% 50%, rgba(0, 255, 136, 0.1) 0%, transparent 50%)
            `
          }}
          animate={{
            backgroundPosition: [
              '20% 30%, 80% 70%, 50% 50%',
              '30% 40%, 70% 60%, 60% 40%',
              '20% 30%, 80% 70%, 50% 50%'
            ]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>
    );
  }

  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-neon-blue/5 via-transparent to-neon-pink/5"
        animate={{
          background: [
            'linear-gradient(45deg, rgba(26, 231, 255, 0.05) 0%, transparent 50%, rgba(255, 107, 157, 0.05) 100%)',
            'linear-gradient(135deg, rgba(255, 107, 157, 0.05) 0%, transparent 50%, rgba(0, 255, 136, 0.05) 100%)',
            'linear-gradient(225deg, rgba(0, 255, 136, 0.05) 0%, transparent 50%, rgba(26, 231, 255, 0.05) 100%)',
            'linear-gradient(315deg, rgba(26, 231, 255, 0.05) 0%, transparent 50%, rgba(255, 107, 157, 0.05) 100%)'
          ]
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </div>
  );
}