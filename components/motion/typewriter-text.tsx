"use client";

import { motion } from "motion/react";

interface TypewriterTextProps {
  text: string;
  className?: string;
  speed?: number;
  delay?: number;
}

export function TypewriterText({
  text,
  className,
  speed = 0.04,
  delay = 0.6,
}: TypewriterTextProps) {
  const characters = text.split("");

  return (
    <span className={className} aria-label={text}>
      <motion.span
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: speed,
              delayChildren: delay,
            },
          },
        }}
        className="inline"
      >
        {characters.map((char, i) => (
          <motion.span
            key={`${char}-${i}`}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1 },
            }}
            transition={{ duration: 0.01 }}
            className="inline"
          >
            {char}
          </motion.span>
        ))}
      </motion.span>

      <span className="typewriter-cursor ml-0.5 inline-block h-[0.85em] w-[3px] align-middle bg-foreground" />
    </span>
  );
}
