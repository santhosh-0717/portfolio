'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const technologies = [
  {
    name: 'React',
    icon: (
      <svg viewBox="-11.5 -10.23174 23 20.46348" className="w-full h-full">
        <circle cx="0" cy="0" r="2.05" fill="#61dafb"/>
        <g stroke="#61dafb" strokeWidth="1" fill="none">
          <ellipse rx="11" ry="4.2"/>
          <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
          <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
        </g>
      </svg>
    ),
    color: '#61dafb',
  },
  {
    name: 'Next.js',
    icon: (
      <svg viewBox="0 0 180 180" className="w-full h-full">
        <mask id="mask0" mask-type="alpha">
          <circle cx="90" cy="90" r="90" fill="black"/>
        </mask>
        <g mask="url(#mask0)">
          <circle cx="90" cy="90" r="90" fill="currentColor"/>
          <path d="M149.508 157.52L69.142 54H54V125.97H66.1136V69.3836L139.999 164.845C143.333 162.614 146.509 160.165 149.508 157.52Z" fill="url(#paint0_linear)"/>
          <rect x="115" y="54" width="12" height="72" fill="url(#paint1_linear)"/>
        </g>
        <defs>
          <linearGradient id="paint0_linear" x1="109" y1="116.5" x2="144.5" y2="160.5" gradientUnits="userSpaceOnUse">
            <stop stopColor="white"/>
            <stop offset="1" stopColor="white" stopOpacity="0"/>
          </linearGradient>
          <linearGradient id="paint1_linear" x1="121" y1="54" x2="120.799" y2="106.875" gradientUnits="userSpaceOnUse">
            <stop stopColor="white"/>
            <stop offset="1" stopColor="white" stopOpacity="0"/>
          </linearGradient>
        </defs>
      </svg>
    ),
    color: '#ffffff',
  },
  {
    name: 'JavaScript',
    icon: (
      <svg viewBox="0 0 256 256" className="w-full h-full">
        <rect width="256" height="256" fill="#F7DF1E"/>
        <path d="M67.312 213.932l19.59-11.856c3.78 6.701 7.218 12.371 15.465 12.371 7.905 0 12.89-3.092 12.89-15.12v-81.798h24.057v82.138c0 24.917-14.606 36.259-35.916 36.259-19.245 0-30.416-9.967-36.087-21.996M152.381 211.354l19.588-11.341c5.157 8.421 11.859 14.607 23.715 14.607 9.969 0 16.325-4.984 16.325-11.858 0-8.248-6.53-11.17-17.528-15.98l-6.013-2.58c-17.357-7.387-28.87-16.667-28.87-36.257 0-18.044 13.747-31.792 35.228-31.792 15.294 0 26.292 5.328 34.196 19.247l-18.732 12.03c-4.125-7.389-8.591-10.31-15.465-10.31-7.046 0-11.514 4.468-11.514 10.31 0 7.217 4.468 10.14 14.778 14.608l6.014 2.577c20.45 8.765 31.963 17.7 31.963 37.804 0 21.654-17.012 33.51-39.867 33.51-22.339 0-36.774-10.654-43.819-24.574" fill="#000"/>
      </svg>
    ),
    color: '#F7DF1E',
  },
  {
    name: 'TypeScript',
    icon: (
      <svg viewBox="0 0 256 256" className="w-full h-full">
        <rect width="256" height="256" fill="#3178C6" rx="28"/>
        <path d="M56.612 128.85h33.903v94.658h28.178v-94.658h33.903v-23.335H56.612v23.335zm106.415-23.335v23.335h62.86v94.658h28.178v-94.658h62.86v-23.335h-153.898z" fill="#FFF"/>
      </svg>
    ),
    color: '#3178C6',
  },
  {
    name: 'Python',
    icon: (
      <svg viewBox="0 0 256 255" className="w-full h-full">
        <defs>
          <linearGradient id="python1" x1="12.959%" y1="12.039%" x2="79.639%" y2="78.201%">
            <stop offset="0%" stopColor="#387EB8"/>
            <stop offset="100%" stopColor="#366994"/>
          </linearGradient>
          <linearGradient id="python2" x1="19.128%" y1="20.579%" x2="90.742%" y2="88.429%">
            <stop offset="0%" stopColor="#FFE052"/>
            <stop offset="100%" stopColor="#FFC331"/>
          </linearGradient>
        </defs>
        <path d="M126.916.072c-64.832 0-60.784 28.115-60.784 28.115l.072 29.128h61.868v8.745H41.631S.145 61.355.145 126.77c0 65.417 36.21 63.097 36.21 63.097h21.61v-30.356s-1.165-36.21 35.632-36.21h61.362s34.475.557 34.475-33.319V33.97S194.67.072 126.916.072zM92.802 19.66a11.12 11.12 0 0 1 11.13 11.13 11.12 11.12 0 0 1-11.13 11.13 11.12 11.12 0 0 1-11.13-11.13 11.12 11.12 0 0 1 11.13-11.13z" fill="url(#python1)"/>
        <path d="M128.757 254.126c64.832 0 60.784-28.115 60.784-28.115l-.072-29.127H127.6v-8.745h86.441s41.486 4.705 41.486-60.712c0-65.416-36.21-63.096-36.21-63.096h-21.61v30.355s1.165 36.21-35.632 36.21h-61.362s-34.475-.557-34.475 33.32v56.013s-5.235 33.897 62.518 33.897zm34.114-19.586a11.12 11.12 0 0 1-11.13-11.13 11.12 11.12 0 0 1 11.13-11.131 11.12 11.12 0 0 1 11.13 11.13 11.12 11.12 0 0 1-11.13 11.13z" fill="url(#python2)"/>
      </svg>
    ),
    color: '#3776AB',
  },
  {
    name: 'Node.js',
    icon: (
      <svg viewBox="0 0 256 289" className="w-full h-full">
        <path d="M128 288.464c-3.975 0-7.685-1.06-11.13-2.915l-35.247-20.936c-5.3-2.915-2.65-3.975-1.06-4.505 7.155-2.385 8.48-2.915 15.9-7.156.796-.53 1.856-.265 2.65.265l27.032 16.166c1.06.53 2.385.53 3.18 0l105.74-61.217c1.06-.53 1.59-1.59 1.59-2.915V83.08c0-1.325-.53-2.385-1.59-2.915l-105.74-60.953c-1.06-.53-2.385-.53-3.18 0L20.405 80.166c-1.06.53-1.59 1.855-1.59 2.915v122.17c0 1.06.53 2.385 1.59 2.915l28.887 16.695c15.636 7.95 25.44-1.325 25.44-10.6V93.68c0-1.59 1.326-3.18 3.181-3.18h13.516c1.59 0 3.18 1.325 3.18 3.18v120.58c0 20.936-11.396 33.126-31.272 33.126-6.095 0-10.865 0-24.38-6.625l-27.827-15.9C4.24 220.885 0 213.465 0 205.515V83.346C0 75.396 4.24 67.976 11.13 64L116.87 2.783c6.625-3.71 15.635-3.71 22.26 0L244.87 64C251.76 67.976 256 75.132 256 83.346v122.17c0 7.95-4.24 15.37-11.13 19.345L139.13 286.08c-3.445 1.59-7.42 2.385-11.13 2.385zm32.596-84.009c-46.377 0-55.917-21.2-55.917-39.221 0-1.59 1.325-3.18 3.18-3.18h13.78c1.59 0 2.916 1.06 2.916 2.65 2.12 14.045 8.215 20.936 36.306 20.936 22.261 0 31.802-5.035 31.802-16.96 0-6.891-2.65-11.926-37.367-15.372-28.886-2.915-46.907-9.275-46.907-32.33 0-21.467 18.02-34.187 48.232-34.187 33.921 0 50.617 11.66 52.737 37.101 0 .795-.265 1.59-.795 2.385-.53.53-1.325 1.06-2.12 1.06h-13.78c-1.326 0-2.65-1.06-2.916-2.385-3.18-14.575-11.395-19.345-33.126-19.345-24.38 0-27.296 8.48-27.296 14.84 0 7.686 3.445 10.07 36.306 14.31 32.597 4.24 47.967 10.336 47.967 33.127-.265 23.321-19.345 36.571-53.002 36.571z" fill="#539E43"/>
      </svg>
    ),
    color: '#539E43',
  },
];

export function TechLogosAnimation() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="relative w-full aspect-square max-w-md mx-auto">
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/10 to-secondary/10 blur-3xl" />

      <div className="relative w-full h-full flex items-center justify-center">
        {technologies.map((tech, index) => {
          const angle = (index / technologies.length) * Math.PI * 2;
          const radius = 120;
          const x = Math.cos(angle) * radius;
          const y = Math.sin(angle) * radius;

          return (
            <motion.div
              key={tech.name}
              className="absolute w-16 h-16 md:w-20 md:h-20"
              initial={{ opacity: 0, scale: 0 }}
              animate={{
                opacity: 1,
                scale: 1,
                x: x + mousePosition.x,
                y: y + mousePosition.y,
                rotate: 360,
              }}
              transition={{
                opacity: { duration: 0.5, delay: index * 0.1 },
                scale: { duration: 0.5, delay: index * 0.1 },
                x: { duration: 0.3 },
                y: { duration: 0.3 },
                rotate: {
                  duration: 20,
                  repeat: Infinity,
                  ease: 'linear',
                },
              }}
              whileHover={{ scale: 1.3, rotate: 0 }}
              style={{
                filter: 'drop-shadow(0 4px 12px rgba(0, 0, 0, 0.15))',
              }}
            >
              <motion.div
                className="w-full h-full p-3 bg-background rounded-xl border border-border/50 flex items-center justify-center"
                whileHover={{
                  borderColor: tech.color,
                  boxShadow: `0 0 20px ${tech.color}40`,
                }}
              >
                {tech.icon}
              </motion.div>
              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                {tech.name}
              </div>
            </motion.div>
          );
        })}

        {/* Center logo */}
        <motion.div
          className="absolute w-24 h-24 md:w-32 md:h-32 bg-gradient-to-br from-primary to-purple-600 rounded-full flex items-center justify-center"
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 360],
          }}
          transition={{
            scale: {
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            },
            rotate: {
              duration: 20,
              repeat: Infinity,
              ease: 'linear',
            },
          }}
        >
          <div className="text-4xl md:text-5xl font-bold text-white">SG</div>
        </motion.div>
      </div>
    </div>
  );
}
