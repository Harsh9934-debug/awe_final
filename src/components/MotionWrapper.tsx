"use client";

import { motion, HTMLMotionProps } from "motion/react";
import React, { ReactNode } from "react";

// The signature Framer / Wonderful easing curve
export const FRAMER_EASE = [0.16, 1, 0.3, 1] as const;

interface FadeUpProps extends HTMLMotionProps<"div"> {
  children: ReactNode;
  delay?: number;
  duration?: number;
  distance?: number;
  className?: string;
  viewportMargin?: string;
}

export function FadeUp({
  children,
  delay = 0,
  duration = 0.7,
  distance = 24,
  className = "",
  viewportMargin = "-60px",
  ...props
}: FadeUpProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: distance }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: viewportMargin as any }}
      transition={{
        duration,
        delay,
        ease: FRAMER_EASE,
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

interface StaggerContainerProps extends HTMLMotionProps<"div"> {
  children: ReactNode;
  staggerDelay?: number;
  staggerDelta?: number;
  delayChildren?: number;
  className?: string;
  viewportMargin?: string;
}

export function StaggerContainer({
  children,
  staggerDelay = 0.08,
  staggerDelta,
  delayChildren = 0,
  className = "",
  viewportMargin = "-60px",
  ...props
}: StaggerContainerProps) {
  const effectiveStagger = staggerDelta ?? staggerDelay;
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: viewportMargin as any }}
      variants={{
        hidden: { opacity: 0 },
        show: {
          opacity: 1,
          transition: {
            staggerChildren: effectiveStagger,
            delayChildren,
          },
        },
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

interface StaggerItemProps extends HTMLMotionProps<"div"> {
  children: ReactNode;
  distance?: number;
  className?: string;
}

export function StaggerItem({
  children,
  distance = 20,
  className = "",
  ...props
}: StaggerItemProps) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: distance },
        show: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.6,
            ease: FRAMER_EASE,
          },
        },
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

interface HoverCardProps extends HTMLMotionProps<"div"> {
  children: ReactNode;
  className?: string;
  liftY?: number;
}

export function HoverCard({
  children,
  className = "",
  liftY = -4,
  ...props
}: HoverCardProps) {
  return (
    <motion.div
      whileHover={{ y: liftY }}
      transition={{ duration: 0.35, ease: FRAMER_EASE }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}
