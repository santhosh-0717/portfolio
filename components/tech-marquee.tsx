'use client';

import { motion } from 'framer-motion';

const technologies = [
  'React',
  'Next.js',
  'TypeScript',
  'JavaScript',
  'Python',
  'Node.js',
  'MongoDB',
  'Git',
  'GitHub',
  'Tailwind CSS',
  'Firebase',
  'SQL',
  'HTML5',
  'CSS3',
  'Express',
  'Flask',
  'Scikit-Learn',
];

export function TechMarquee() {
  return (
    <section className="py-12 overflow-hidden border-y border-border/40 bg-muted/30">
      <div className="mb-4 text-center">
        <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
          Technologies & Tools
        </h3>
      </div>

      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10" />

        <motion.div
          className="flex gap-8 whitespace-nowrap"
          animate={{
            x: [0, -1000],
          }}
          transition={{
            x: {
              duration: 30,
              repeat: Infinity,
              ease: 'linear',
            },
          }}
        >
          {[...technologies, ...technologies, ...technologies].map((tech, index) => (
            <div
              key={index}
              className="inline-flex items-center gap-2 px-6 py-3 bg-card rounded-full border border-border/50 hover:border-primary/50 transition-all hover:scale-105"
            >
              <div className="w-2 h-2 rounded-full bg-primary" />
              <span className="text-sm font-medium">{tech}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
