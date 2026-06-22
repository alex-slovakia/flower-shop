"use client";

import { motion, useReducedMotion } from "motion/react";

export function Reveal({ children, className }: { children: React.ReactNode; className?: string }) {
  const reduce = useReducedMotion();
  return <motion.div className={className} initial={{ opacity: 1, y: 0 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .2 }} transition={{ duration: reduce ? 0 : .7, ease: [.22, 1, .36, 1] }}>{children}</motion.div>;
}
