"use client";
import { motion } from "framer-motion";

const AnimatedSection = ({
  children,
  className,
  delay = 0.1,
}: {
  children: React.ReactNode;
  delay: number;
  className?: string;
}) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{
      duration: 0.8,
      delay,
      ease: [0, 0.71, 0.2, 1.01],
    }}
    className={className}
  >
    {children}
  </motion.div>
);

export default AnimatedSection;
