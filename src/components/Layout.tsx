import { useEffect } from "react";
import { useLocation, Outlet } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Header from "./Header";
import Footer from "./Footer";
import { getTransitionForRoute } from "./PageTransition";

// Transition configs inlined for AnimatePresence
const transitionConfigs = {
  biomimetic: {
    initial: { opacity: 0, scale: 0.97, y: 30 },
    animate: { opacity: 1, scale: 1, y: 0 },
    exit: { opacity: 0, scale: 1.01, y: -15 },
    transition: { duration: 0.55, ease: [0.25, 0.9, 0.35, 1.1] },
  },
  nutrientCascade: {
    initial: { opacity: 0, x: 50, filter: "blur(6px)" },
    animate: { opacity: 1, x: 0, filter: "blur(0px)" },
    exit: { opacity: 0, x: -40, filter: "blur(4px)" },
    transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] },
  },
  photosyntheticFade: {
    initial: { opacity: 0, filter: "saturate(0) brightness(1.4) hue-rotate(30deg)" },
    animate: { opacity: 1, filter: "saturate(1) brightness(1) hue-rotate(0deg)" },
    exit: { opacity: 0, filter: "saturate(0.3) brightness(0.6) hue-rotate(-20deg)" },
    transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] },
  },
} as const;

const Layout = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  const preset = getTransitionForRoute(pathname);
  const config = transitionConfigs[preset];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <AnimatePresence mode="wait">
          <motion.div
            key={pathname}
            initial={config.initial}
            animate={config.animate}
            exit={config.exit}
            transition={config.transition}
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
