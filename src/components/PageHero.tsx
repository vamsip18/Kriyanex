import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, type ReactNode } from "react";
import FloatingParticles from "./FloatingParticles";

interface PageHeroProps {
  title: string;
  subtitle: string;
  backgroundImage: string;
  children?: ReactNode;
  particleCount?: number;
}

const PageHero = ({ title, subtitle, backgroundImage, children, particleCount = 25 }: PageHeroProps) => {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  // Parallax transforms
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const childrenY = useTransform(scrollYProgress, [0, 1], [0, -90]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const blobX1 = useTransform(scrollYProgress, [0, 1], [0, -40]);
  const blobX2 = useTransform(scrollYProgress, [0, 1], [0, 40]);

  return (
    <section ref={heroRef} className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with parallax */}
      <motion.div className="absolute inset-0" style={{ y: bgY, scale: bgScale }}>
        <img
          src={backgroundImage}
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 mesh-gradient opacity-80" />
      </motion.div>

      {/* Particles */}
      <FloatingParticles count={particleCount} />

      {/* Animated blobs with lateral parallax */}
      <motion.div
        className="absolute top-1/4 -left-32 w-64 h-64 rounded-full bg-kriyanex-emerald/10 blur-3xl animate-morph-blob"
        style={{ x: blobX1 }}
      />
      <motion.div
        className="absolute bottom-1/4 -right-32 w-80 h-80 rounded-full bg-kriyanex-teal/10 blur-3xl animate-morph-blob"
        style={{ x: blobX2, animationDelay: "-4s" } as any}
      />

      {/* Content with scroll-linked fade + lift */}
      <motion.div
        className="relative z-10 container mx-auto px-6 py-32 text-center"
        style={{ y: contentY, opacity: contentOpacity }}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-display font-bold text-primary-foreground mb-6 leading-tight">
            {title}
          </h1>
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg sm:text-xl text-primary-foreground/70 max-w-2xl mx-auto mb-8"
        >
          {subtitle}
        </motion.p>
        {children && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            style={{ y: childrenY }}
          >
            {children}
          </motion.div>
        )}
      </motion.div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-12 
bg-gradient-to-t from-background/80 to-transparent" />
    </section>
  );
};

export default PageHero;
