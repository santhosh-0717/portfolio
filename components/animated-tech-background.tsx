'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface TechIcon {
  id: string;
  name: string;
  icon: string;
  x: number;
  y: number;
  size: number;
  duration: number;
}

const techIcons = [
  { name: 'React', icon: '⚛️', color: '#61dafb' },
  { name: 'TypeScript', icon: 'TS', color: '#3178c6' },
  { name: 'JavaScript', icon: 'JS', color: '#f7df1e' },
  { name: 'Python', icon: '🐍', color: '#3776ab' },
  { name: 'Node.js', icon: '⬢', color: '#339933' },
  { name: 'Docker', icon: '🐳', color: '#2496ed' },
  { name: 'Git', icon: '⎇', color: '#f05032' },
  { name: 'HTML5', icon: 'HTML', color: '#e34f26' },
  { name: 'CSS3', icon: 'CSS', color: '#1572b6' },
  { name: 'Next.js', icon: '▲', color: '#ffffff' },
  { name: 'Firebase', icon: '🔥', color: '#ffca28' },
  { name: 'MongoDB', icon: '🍃', color: '#47a248' },
  { name: 'PostgreSQL', icon: '🐘', color: '#4169e1' },
  { name: 'Flutter', icon: '🦋', color: '#02569b' },
  { name: 'Android', icon: '🤖', color: '#3ddc84' },
];

export function AnimatedTechBackground() {
  const [icons, setIcons] = useState<TechIcon[]>([]);

  useEffect(() => {
    const generateIcons = () => {
      return techIcons.map((tech, index) => ({
        id: `${tech.name}-${index}`,
        name: tech.name,
        icon: tech.icon,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 30 + 30,
        duration: Math.random() * 20 + 15,
      }));
    };
    setIcons(generateIcons());
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5" />

      <svg className="absolute inset-0 w-full h-full">
        <defs>
          <linearGradient id="blueGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.3" />
          </linearGradient>
        </defs>

        <motion.line
          x1="10%"
          y1="90%"
          x2="30%"
          y2="10%"
          stroke="url(#blueGradient)"
          strokeWidth="2"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{
            pathLength: [0, 1, 0],
            opacity: [0, 0.8, 0],
            x1: ['10%', '15%', '10%'],
            y1: ['90%', '85%', '90%']
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        <motion.line
          x1="70%"
          y1="80%"
          x2="90%"
          y2="20%"
          stroke="url(#blueGradient)"
          strokeWidth="2"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{
            pathLength: [0, 1, 0],
            opacity: [0, 0.6, 0],
            x1: ['70%', '75%', '70%'],
            y1: ['80%', '75%', '80%']
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
      </svg>

      {icons.map((tech) => (
        <motion.div
          key={tech.id}
          className="absolute flex items-center justify-center font-bold text-muted-foreground/30 select-none"
          style={{
            fontSize: `${tech.size}px`,
            left: `${tech.x}%`,
            top: `${tech.y}%`,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, Math.random() * 20 - 10, 0],
            rotate: [0, Math.random() * 20 - 10, 0],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: tech.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 5,
          }}
        >
          {tech.icon}
        </motion.div>
      ))}

      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
    </div>
  );
}
