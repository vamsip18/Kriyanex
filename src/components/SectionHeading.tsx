import { motion } from "framer-motion";

interface SectionHeadingProps {
  label?: string;
  title: string;
  subtitle?: string;
  light?: boolean;
  className?: string;
}

const SectionHeading = ({ label, title, subtitle, light = false, className = "" }: SectionHeadingProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`text-center max-w-3xl mx-auto mb-16 ${className}`}
    >
      {label && (
        <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase mb-4 gradient-accent text-primary-foreground">
          {label}
        </span>
      )}
      <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-4 leading-tight ${
        light ? "text-primary-foreground" : "text-foreground"
      }`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`text-lg leading-relaxed ${
          light ? "text-primary-foreground/70" : "text-muted-foreground"
        }`}>
          {subtitle}
        </p>
      )}
    </motion.div>
  );
};

export default SectionHeading;
