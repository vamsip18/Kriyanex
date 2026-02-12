import { motion } from "framer-motion";
import { type ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  variant?: "default" | "dark" | "frost" | "accent";
}

const variantClasses = {
  default: "glass-card",
  dark: "glass-dark rounded-xl p-6 transition-all duration-500 hover:-translate-y-1 hover:scale-[1.01] hover:shadow-xl",
  frost: "glass-frost rounded-xl p-6 transition-all duration-500 hover:-translate-y-1 hover:scale-[1.01] hover:shadow-xl",
  accent: "rounded-xl p-6 gradient-accent transition-all duration-500 hover:-translate-y-1 hover:scale-[1.01] hover:shadow-xl",
};

const GlassCard = ({ children, className = "", delay = 0, variant = "default" }: GlassCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className={`${variantClasses[variant]} ${className}`}
    >
      {children}
    </motion.div>
  );
};

export default GlassCard;
