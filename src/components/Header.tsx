import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Leaf } from "lucide-react";

const navLinks = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About" },
  { path: "/solutions", label: "Solutions" },
  { path: "/platforms", label: "Platforms" },
  { path: "/services", label: "Services" },
  { path: "/contact", label: "Contact" },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "gradient-header shadow-lg shadow-kriyanex-green/10"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="w-10 h-10 rounded-lg gradient-accent flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Leaf className="w-5 h-5 text-primary-foreground" />
              </div>
              <div className="absolute inset-0 rounded-lg gradient-accent opacity-50 blur-md group-hover:opacity-80 transition-opacity duration-300" />
            </div>
            <div>
              <span className="text-xl font-display font-bold text-primary-foreground tracking-tight">
                KriyaNex
              </span>
              <span className="block text-[10px] text-kriyanex-emerald tracking-[0.2em] uppercase -mt-1">
                Global Tech
              </span>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="relative px-3 py-2 text-sm font-medium text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-300 group"
              >
                {link.label}
                <span
                  className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 rounded-full bg-kriyanex-emerald transition-all duration-300 ${
                    location.pathname === link.path
                      ? "w-6 opacity-100"
                      : "w-0 opacity-0 group-hover:w-4 group-hover:opacity-60"
                  }`}
                />
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <Link
              to="/contact"
              className="hidden lg:inline-flex px-5 py-2.5 text-sm font-semibold rounded-lg gradient-accent text-primary-foreground hover-glow hover:scale-105 transition-all duration-300"
            >
              Get in Touch
            </Link>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden text-primary-foreground p-2"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden gradient-header border-t border-kriyanex-emerald/20"
          >
            <nav className="container mx-auto px-6 py-4 flex flex-col gap-2">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    to={link.path}
                    className={`block px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300 ${
                      location.pathname === link.path
                        ? "bg-kriyanex-emerald/20 text-kriyanex-emerald"
                        : "text-primary-foreground/80 hover:bg-kriyanex-emerald/10 hover:text-primary-foreground"
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
