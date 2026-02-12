import { motion } from "framer-motion";
import { type ReactNode } from "react";

export type TransitionPreset = "biomimetic" | "nutrientCascade" | "photosyntheticFade";

const transitionConfigs: Record<
  TransitionPreset,
  {
    initial: Record<string, unknown>;
    animate: Record<string, unknown>;
    exit: Record<string, unknown>;
    transition: Record<string, unknown>;
  }
> = {
  // Leaf-unfolding inspired easing
  biomimetic: {
    initial: { opacity: 0, scale: 0.97, y: 30 },
    animate: { opacity: 1, scale: 1, y: 0 },
    exit: { opacity: 0, scale: 1.01, y: -15 },
    transition: { duration: 0.55, ease: [0.25, 0.9, 0.35, 1.1] },
  },
  // Multi-directional staggered reveals
  nutrientCascade: {
    initial: { opacity: 0, x: 50, filter: "blur(6px)" },
    animate: { opacity: 1, x: 0, filter: "blur(0px)" },
    exit: { opacity: 0, x: -40, filter: "blur(4px)" },
    transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] },
  },
  // Chlorophyll-inspired color morphing
  photosyntheticFade: {
    initial: { opacity: 0, filter: "saturate(0) brightness(1.4) hue-rotate(30deg)" },
    animate: { opacity: 1, filter: "saturate(1) brightness(1) hue-rotate(0deg)" },
    exit: { opacity: 0, filter: "saturate(0.3) brightness(0.6) hue-rotate(-20deg)" },
    transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] },
  },
};

// Route-to-transition mapping
const routePresetMap: Record<string, TransitionPreset> = {
  "/": "biomimetic",
  "/about": "nutrientCascade",
  "/products": "photosyntheticFade",
  "/services": "biomimetic",
  "/technology": "nutrientCascade",
  "/contact": "photosyntheticFade",
};

export const getTransitionForRoute = (pathname: string): TransitionPreset => {
  return routePresetMap[pathname] || "biomimetic";
};

interface PageTransitionProps {
  children: ReactNode;
  preset?: TransitionPreset;
  locationKey: string;
}

const PageTransition = ({ children, preset = "biomimetic", locationKey }: PageTransitionProps) => {
  const config = transitionConfigs[preset];

  return (
    <motion.div
      key={locationKey}
      initial={config.initial}
      animate={config.animate}
      exit={config.exit}
      transition={config.transition}
    >
      {children}
    </motion.div>
  );
};

export default PageTransition;
