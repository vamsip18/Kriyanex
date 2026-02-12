import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Brain, Code, Layers, GraduationCap, Building2, ArrowRight,
  Wrench, Search, Handshake, FileText
} from "lucide-react";
import heroServices from "@/assets/hero-services.jpg";
import PageHero from "@/components/PageHero";
import HeroGearSystem from "@/components/HeroGearSystem";
import GlassCard from "@/components/GlassCard";
import SectionHeading from "@/components/SectionHeading";
import FloatingParticles from "@/components/FloatingParticles";

const services = [
  {
    icon: Brain,
    title: "AI & ML Consulting",
    desc: "Strategic consulting for agriculture and agri-fintech leveraging artificial intelligence and machine learning expertise.",
    features: ["Strategy Development", "Model Training", "Performance Optimization"],
  },
  {
    icon: Code,
    title: "Custom Software Development",
    desc: "End-to-end development of web, mobile, cloud, and AI platforms tailored to agricultural enterprises.",
    features: ["Web Applications", "Mobile Apps", "Cloud Platforms"],
  },
  {
    icon: Layers,
    title: "System Integration",
    desc: "Comprehensive system integration and end-to-end digital transformation for agricultural value chains.",
    features: ["API Integration", "Legacy Migration", "Data Pipelines"],
  },
  {
    icon: Wrench,
    title: "Research & Development",
    desc: "Cutting-edge R&D in agri-AI, bio-fertilisers, and smart farming technologies.",
    features: ["Applied Research", "Bio-Fertilisers", "Smart Farming"],
  },
  {
    icon: GraduationCap,
    title: "Training & Capacity Building",
    desc: "Knowledge dissemination programs and capacity building for agricultural stakeholders.",
    features: ["Workshops", "Digital Literacy", "Best Practices"],
  },
  {
    icon: Building2,
    title: "Platform-as-a-Service",
    desc: "Franchise, licensing, and platform-as-a-service (PaaS) models for scalable deployment.",
    features: ["Franchise Setup", "White Labeling", "PaaS Solutions"],
  },
];

const engagementModels = [
  {
    icon: Search,
    title: "Consulting",
    desc: "Strategic advisory and assessment services to guide digital transformation.",
  },
  {
    icon: FileText,
    title: "Project-Based",
    desc: "End-to-end project delivery with defined scope, timeline, and deliverables.",
  },
  {
    icon: Handshake,
    title: "Platform-as-a-Service",
    desc: "Franchise, licensing, and PaaS models for scalable platform access.",
  },
];

const Services = () => {
  return (
    <div className="overflow-hidden">
      <PageHero
        title="Services"
        subtitle="Consulting, development, and implementation services for agricultural digital transformation."
        backgroundImage={heroServices}
      >
        <div className="flex justify-center mt-8">
          <HeroGearSystem />
        </div>
      </PageHero>

      {/* Services Grid */}
      <section className="py-24 bg-background pattern-topo">
        <div className="container mx-auto px-6">
          <SectionHeading
            label="What We Offer"
            title="Comprehensive Service Portfolio"
            subtitle="From strategic consulting to implementation, we provide expertise for agricultural transformation."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) => {
              const Icon = service.icon;
              return (
                <GlassCard
  key={service.title}
  delay={i * 0.1}
  className="group relative transition-all duration-300
  hover:-translate-y-3
  hover:shadow-[0_25px_60px_rgba(16,185,129,0.20)]
  hover:border-kriyanex-emerald/40
  overflow-hidden"
>
  {/* Subtle Hover Gradient Overlay */}
  <div className="absolute inset-0 opacity-0 
  group-hover:opacity-100 
  bg-gradient-to-br from-kriyanex-emerald/10 to-transparent
  transition-opacity duration-300" />

  <div className="relative z-10">
    <div className="mb-6 relative">
      <div className="w-14 h-14 rounded-xl gradient-accent 
      flex items-center justify-center
      transition-all duration-300
      group-hover:scale-110 
      group-hover:rotate-6
      group-hover:shadow-[0_0_25px_rgba(16,185,129,0.5)]">
        <Icon className="w-7 h-7 text-primary-foreground" />
      </div>
    </div>

    <h3 className="text-xl font-display font-semibold mb-3 text-foreground 
    group-hover:text-kriyanex-emerald transition-colors duration-300">
      {service.title}
    </h3>

    <p className="text-sm text-muted-foreground leading-relaxed mb-4">
      {service.desc}
    </p>

    <div className="flex flex-wrap gap-2">
      {service.features.map((f) => (
        <span
          key={f}
          className="px-3 py-1 rounded-full text-xs font-medium 
          bg-muted text-muted-foreground
          transition-all duration-300
          group-hover:bg-kriyanex-emerald/10"
        >
          {f}
        </span>
      ))}
    </div>
  </div>
</GlassCard>
              );
            })}
          </div>
        </div>
      </section>

      {/* Engagement Models */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 mesh-gradient" />
        <FloatingParticles count={15} />
        <div className="relative z-10 container mx-auto px-6">
          <SectionHeading
            light
            label="Engagement Models"
            title="Flexible Partnership Options"
            subtitle="Multiple engagement models to suit your organization's needs."
          />
          <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {engagementModels.map((model, i) => {
              const Icon = model.icon;
              return (
                <GlassCard
  key={model.title}
  delay={i * 0.15}
  variant="frost"
  className="group relative transition-all duration-300
  hover:-translate-y-2
  hover:scale-[1.03]
  hover:bg-white/10
  hover:backdrop-blur-xl
  hover:border-kriyanex-emerald/40
  hover:shadow-[0_0_50px_rgba(16,185,129,0.35)]"
>
  <div className="text-center">
    <div className="w-14 h-14 rounded-xl gradient-accent 
    flex items-center justify-center mx-auto mb-4
    transition-all duration-300
    group-hover:scale-110 
    group-hover:rotate-6
    group-hover:shadow-[0_0_30px_rgba(16,185,129,0.6)]">
      <Icon className="w-7 h-7 text-primary-foreground" />
    </div>

    <h3 className="text-lg font-display font-semibold 
    text-primary-foreground mb-2">
      {model.title}
    </h3>

    <p className="text-sm text-primary-foreground/70 leading-relaxed
    transition-colors duration-300
    group-hover:text-primary-foreground">
      {model.desc}
    </p>
  </div>
</GlassCard>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-background pattern-cells">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground mb-4">
            Let's Build Together
          </h2>
          <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
            Partner with us to create intelligent, scalable solutions for agriculture.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl gradient-accent text-primary-foreground font-semibold hover-glow hover:scale-105 transition-all duration-300"
          >
            Start a Conversation <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;
