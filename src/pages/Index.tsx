import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Sprout, Brain, TrendingUp, Shield, Globe, Zap,
  ChevronDown, ArrowRight, Satellite, Droplets,
  Eye, Target, Cpu, Leaf, Users, Building2, Landmark, Truck
} from "lucide-react";
import heroHome from "@/assets/hero-home.jpg";
import FloatingParticles from "@/components/FloatingParticles";
import CursorNutrientTrail from "@/components/CursorNutrientTrail";
import InteractivePlant from "@/components/InteractivePlant";
import GlassCard from "@/components/GlassCard";
import SectionHeading from "@/components/SectionHeading";
import type { CSSProperties } from "react";

const visionPoints = [
  { icon: Globe, text: "Driving global agricultural transformation through artificial intelligence, precision farming technologies, and climate-resilient agricultural practices." },
  { icon: Shield, text: "Enabling inclusive agricultural finance systems that improve farmer access to credit, insurance, and financial security, enhancing long-term farmer prosperity." },
  { icon: TrendingUp, text: "Building data-driven, transparent, and traceable agricultural supply chains that connect farmers, markets, and enterprises efficiently and ethically." },
  { icon: Sprout, text: "Strengthening global food security through data-driven decision-making, smart analytics, and intelligent food system management." },
];

const missionPoints = [
  { icon: Zap, text: "To empower farmers and agribusinesses with intelligent, affordable, and scalable AI solutions" },
  { icon: Target, text: "To optimize agricultural productivity, resource efficiency, and profitability through precision intelligence" },
  { icon: Brain, text: "To bridge the gap between technology, finance, markets, and policy in the agricultural ecosystem" },
  { icon: Leaf, text: "To promote sustainable, climate-resilient, and digitally inclusive agriculture" },
];

const solutions = [
  { icon: Sprout, title: "Precision Agriculture Solutions", desc: "AI-powered crop intelligence and resource optimization for maximum yield and efficiency.", path: "/solutions" },
  { icon: Brain, title: "Digital Advisory & Smart Inputs", desc: "Intelligent farmer guidance and personalized recommendations powered by AI.", path: "/solutions" },
  { icon: TrendingUp, title: "AI-Driven Supply Chain & Market Linkages", desc: "End-to-end supply chain intelligence from farm to market with full traceability.", path: "/solutions" },
  { icon: Shield, title: "Agri-Fintech & Rural Finance", desc: "Alternative credit scoring and financial products tailored for agriculture.", path: "/solutions" },
  { icon: Building2, title: "Enterprise & Government Solutions", desc: "AI platforms for smart agriculture missions and policy decision support.", path: "/solutions" },
  { icon: Leaf, title: "Sustainability & ESG", desc: "Climate-smart agriculture and transparent, ethical food systems.", path: "/sustainability" },
];

const techHighlights = [
  { icon: Brain, title: "Artificial Intelligence & Machine Learning", desc: "Advanced AI and ML algorithms for predictive analytics, pattern recognition, and intelligent automation in agriculture." },
  { icon: Eye, title: "Computer Vision & Deep Learning", desc: "Image analysis and deep learning models for crop disease detection, quality grading, and automated monitoring." },
  { icon: Satellite, title: "Satellite & Geospatial Analytics", desc: "Remote sensing and geospatial intelligence for large-scale crop monitoring and environmental assessment." },
  { icon: Cpu, title: "IoT & Edge Computing", desc: "Connected sensors and edge processing for real-time field data collection and on-site analytics." },
];

const beneficiaries = [
  { icon: Users, title: "Small and Marginal Farmers", desc: "Empowering individual farmers with AI-driven insights, market access, and financial services." },
  { icon: Globe, title: "Farmer Producer Organizations", desc: "Collective intelligence and market linkages for FPOs to scale operations and improve bargaining power." },
  { icon: Building2, title: "Agribusiness Enterprises", desc: "Enterprise-grade solutions for agricultural corporations to optimize operations and supply chains." },
  { icon: Landmark, title: "Financial Institutions & Insurers", desc: "Alternative credit scoring and risk assessment tools for agricultural lending and insurance." },
  { icon: Shield, title: "Government & Public Sector", desc: "Decision support systems and analytics platforms for policy planning and scheme implementation." },
  { icon: Truck, title: "Input Manufacturers & Logistics", desc: "Market intelligence and distribution optimization for agri-input manufacturers and logistics providers." },
];

const stats = [
  { value: "AI", label: "Powered Intelligence" },
  { value: "5+", label: "Product Platforms" },
  { value: "360°", label: "Agri Ecosystem" },
  { value: "ESG", label: "Compliant" },
];

const Index = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroScale = useTransform(scrollYProgress, [0, 0.8], [1, 0.95]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const plantY = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const blobX1 = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const blobX2 = useTransform(scrollYProgress, [0, 1], [0, 50]);

  const blobDelayStyle: CSSProperties = {
  animationDelay: "-4s",
};

  return (
    <div className="overflow-hidden">
      {/* ===== HERO ===== */}
      <motion.section
        ref={heroRef}
        style={{ scale: heroScale }}
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        <motion.div className="absolute inset-0" style={{ y: bgY, scale: bgScale }}>
          <img src={heroHome} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 mesh-gradient opacity-85" />
        </motion.div>
        <FloatingParticles count={40} />
        <CursorNutrientTrail />
        <motion.div className="absolute top-1/4 -left-32 w-64 h-64 rounded-full bg-kriyanex-emerald/5 blur-3xl animate-morph-blob" style={{ x: blobX1 }} />
        <motion.div className="absolute bottom-1/4 -right-32 w-80 h-80 rounded-full bg-kriyanex-teal/5 blur-3xl animate-morph-blob" style={{ x: blobX2, ...blobDelayStyle }}
 />
        <motion.div className="relative z-10 container mx-auto px-6 py-24" style={{ opacity: heroOpacity }}>
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.9, 0.35, 1.1] }}
              className="text-center lg:text-left order-2 lg:order-1"
              style={{ y: textY }}
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-display font-bold text-primary-foreground mb-6 leading-[1.1]">
                <span className="gradient-text">AI-Powered</span>
                <br />Agricultural
                <br />Revolution
              </h1>
              <p className="text-base sm:text-lg text-primary-foreground/60 max-w-xl mb-8 leading-relaxed">
                Transforming farming with precision intelligence, smart supply chains,
                and sustainable technology solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link to="/solutions" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl gradient-accent text-primary-foreground font-semibold hover-glow hover:scale-105 transition-all duration-300">
                  Explore Solutions <ArrowRight className="w-5 h-5" />
                </Link>
                <Link to="/about" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl glass-cellular text-primary-foreground font-semibold hover:scale-105 transition-all duration-300">
                  Learn More
                </Link>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
              className="order-1 lg:order-2"
              style={{ y: plantY }}
            >
              <InteractivePlant />
            </motion.div>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2 }} className="absolute bottom-8 left-1/2 -translate-x-1/2 scroll-indicator z-10">
          <ChevronDown className="w-6 h-6 text-primary-foreground/40" />
        </motion.div>
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background to-transparent" />
      </motion.section>

      {/* Stats Bar */}
      <section className="relative -mt-20 z-20 container mx-auto px-6">
        <div className="glass-hydroponic rounded-2xl grid grid-cols-2 md:grid-cols-4 gap-6 p-8">
          {stats.map((stat, i) => (
            <motion.div
  key={stat.label}
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ delay: i * 0.1 }}
  whileHover={{
    y: -6,
    scale: 1.05,
  }}
  className="relative text-center rounded-xl px-4 py-4 
  bg-white/5 backdrop-blur-md border border-white/10
  hover:border-kriyanex-emerald/40
  hover:shadow-[0_0_25px_rgba(16,185,129,0.25)]
  transition-all duration-300 cursor-pointer"
>
  <div className="text-3xl sm:text-4xl font-display font-bold gradient-text mb-1">
    {stat.value}
  </div>
  <div className="text-sm text-muted-foreground">
    {stat.label}
  </div>
</motion.div>
          ))}
        </div>
      </section>

      {/* Vision */}
      <section className="py-24 bg-background pattern-topo">
        <div className="container mx-auto px-6">
          <SectionHeading label="Our Vision" title="Leading Agricultural Transformation" />
          <div className="grid sm:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {visionPoints.map((point, i) => {
              const Icon = point.icon;
              return (
                <GlassCard
  key={i}
  delay={i * 0.1}
  className="group transition-all duration-300 
  hover:-translate-y-2 
  hover:shadow-[0_15px_40px_rgba(0,0,0,0.15)]
  hover:border-kriyanex-emerald/40"
>
  <div className="flex gap-4">
    <div className="w-10 h-10 rounded-lg gradient-accent 
    flex items-center justify-center flex-shrink-0 mt-0.5
    group-hover:scale-110 group-hover:rotate-3
    transition-all duration-300">
      <Icon className="w-5 h-5 text-primary-foreground" />
    </div>
    <p className="text-sm text-muted-foreground leading-relaxed 
    group-hover:text-foreground transition-colors duration-300">
      {point.text}
    </p>
  </div>
</GlassCard>
              );
            })}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="relative py-24 overflow-hidden gradient-section">
        <div className="absolute inset-0 mesh-gradient" />
        <FloatingParticles count={15} />
        <div className="relative z-10 container mx-auto px-6">
          <SectionHeading light label="Our Mission" title="Driving Change Through Innovation" />
          <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {missionPoints.map((point, i) => {
              const Icon = point.icon;
              return (
                <GlassCard
  key={i}
  variant="frost"
  delay={i * 0.1}
  className="group relative transition-all duration-300
  hover:-translate-y-2
  hover:scale-[1.03]
  hover:bg-white/10
  hover:backdrop-blur-xl
  hover:border-kriyanex-emerald/40
  hover:shadow-[0_0_45px_rgba(16,185,129,0.35)]"
>
  <div className="flex gap-4">
    <div className="w-8 h-8 rounded-lg gradient-accent 
    flex items-center justify-center flex-shrink-0 mt-0.5
    transition-all duration-300
    group-hover:scale-110 
    group-hover:rotate-3
    group-hover:shadow-[0_0_20px_rgba(16,185,129,0.6)]">
      <Icon className="w-4 h-4 text-primary-foreground" />
    </div>

    <p className="text-sm text-primary-foreground/75 leading-relaxed 
    transition-colors duration-300
    group-hover:text-primary-foreground">
      {point.text}
    </p>
  </div>
</GlassCard>
              );
            })}
          </div>
        </div>
      </section>

      {/* Solutions Preview */}
      <section className="py-24 bg-background pattern-crosshatch">
        <div className="container mx-auto px-6">
          <SectionHeading
            label="Solutions"
            title="AI-Driven Agricultural Solutions"
            subtitle="Comprehensive platforms and services designed to transform the agricultural value chain."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {solutions.map((item, i) => {
              const Icon = item.icon;
              return (
                <Link key={item.title} to={item.path}>
                  <GlassCard
  className="group cursor-pointer h-full 
  transition-all duration-300
  hover:-translate-y-3
  hover:shadow-[0_25px_60px_rgba(16,185,129,0.25)]
  hover:border-kriyanex-emerald/40
  relative overflow-hidden"
  delay={i * 0.1}
>
  <div className="absolute inset-0 opacity-0 
  group-hover:opacity-100 
  bg-gradient-to-br from-kriyanex-emerald/10 to-transparent
  transition-opacity duration-300" />

  <div className="relative z-10">
    <div className="w-12 h-12 rounded-xl gradient-accent 
    flex items-center justify-center mb-4
    group-hover:scale-110 group-hover:rotate-6
    transition-all duration-300">
      <Icon className="w-6 h-6 text-primary-foreground" />
    </div>

    <h3 className="text-lg font-display font-semibold mb-2 
    text-foreground 
    group-hover:text-kriyanex-emerald 
    transition-colors duration-300">
      {item.title}
    </h3>

    <p className="text-sm text-muted-foreground leading-relaxed">
      {item.desc}
    </p>
  </div>
</GlassCard>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Technology Preview */}
<section className="relative py-24 overflow-hidden gradient-section">
  {/* SAME BACKGROUND AS MISSION */}
  <div className="absolute inset-0 mesh-gradient" />
  <FloatingParticles count={12} />

  <div className="relative z-10 container mx-auto px-6">
    <SectionHeading
      light
      label="Technology"
      title="Enterprise-Grade Technology Stack"
      subtitle="Cutting-edge technologies for scalable, sustainable agricultural solutions."
    />

    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {techHighlights.map((tech, i) => {
        const Icon = tech.icon;
        return (
          <GlassCard
  key={tech.title}
  variant="frost"
  delay={i * 0.1}
  className="group relative transition-all duration-300 
  hover:-translate-y-2 
  hover:scale-[1.03]
  hover:bg-white/10
  hover:backdrop-blur-xl
  hover:border-kriyanex-emerald/40
  hover:shadow-[0_0_50px_rgba(16,185,129,0.35)]"
>
  <div className="w-12 h-12 rounded-xl gradient-accent 
  flex items-center justify-center mb-4
  transition-all duration-300
  group-hover:scale-110 
  group-hover:rotate-3
  group-hover:shadow-[0_0_25px_rgba(16,185,129,0.6)]">
    <Icon className="w-6 h-6 text-primary-foreground" />
  </div>

  <h3 className="text-base font-display font-semibold mb-2 text-primary-foreground">
    {tech.title}
  </h3>

  <p className="text-sm text-primary-foreground/75 leading-relaxed
  transition-colors duration-300
  group-hover:text-primary-foreground">
    {tech.desc}
  </p>
</GlassCard>
        );
      })}
    </div>
  </div>
</section>

      {/* Who We Serve */}
      <section className="py-24 bg-background pattern-cells">
        <div className="container mx-auto px-6">
          <SectionHeading
            label="Who We Serve"
            title="Enabling the Agricultural Ecosystem"
            subtitle="Our solutions serve stakeholders across the agricultural value chain."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {beneficiaries.map((b, i) => {
              const Icon = b.icon;
              return (
                <GlassCard
  key={b.title}
  delay={i * 0.08}
  className="group transition-all duration-300 
  hover:-translate-y-2 
  hover:shadow-[0_20px_50px_rgba(0,0,0,0.15)]
  hover:border-kriyanex-emerald/30"
>
  <div className="flex items-start gap-4">
    <div className="w-12 h-12 rounded-xl gradient-accent 
    flex items-center justify-center flex-shrink-0
    group-hover:scale-110 group-hover:rotate-3
    transition-all duration-300">
      <Icon className="w-6 h-6 text-primary-foreground" />
    </div>

    <div>
      <h3 className="text-base font-display font-semibold text-foreground mb-1 
      group-hover:text-kriyanex-emerald transition-colors duration-300">
        {b.title}
      </h3>

      <p className="text-sm text-muted-foreground leading-relaxed">
        {b.desc}
      </p>
    </div>
  </div>
</GlassCard>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 overflow-hidden gradient-section">
        <div className="absolute inset-0 mesh-gradient" />
        <FloatingParticles count={20} />
        <div className="relative z-10 container mx-auto px-6 text-center">
          <SectionHeading
            light
            label="Get Started"
            title="Ready to Transform Agriculture?"
            subtitle="Let's discuss how our AI-powered solutions can revolutionize your agricultural operations."
          />
          <Link
  to="/contact"
  className="inline-flex items-center gap-2 px-8 py-4 rounded-xl glass-cellular 
  text-primary-foreground font-semibold hover:scale-110 hover:shadow-2xl 
  transition-all duration-300"
>
            Get in Touch <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Index;
