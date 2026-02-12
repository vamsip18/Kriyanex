import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Sprout, MessageSquare, TrendingUp, CreditCard,
  Brain, Cloud, Zap, Shield, ArrowRight
} from "lucide-react";
import heroProducts from "@/assets/hero-products.jpg";
import platformDashboard from "@/assets/platform-dashboard.jpg";
import imgAdvisory from "@/assets/farmer-advisory-new.jpg";
import imgSupplyChain from "@/assets/market-linkage-new.jpg";
import imgFintech from "@/assets/agri-finance-new.jpg";
import PageHero from "@/components/PageHero";
import HeroHexGrid from "@/components/HeroHexGrid";
import GlassCard from "@/components/GlassCard";
import SectionHeading from "@/components/SectionHeading";
import FloatingParticles from "@/components/FloatingParticles";
import imgPrecision from "@/assets/crop-intelligence-new.jpg";


const platforms = [
  {
    icon: Sprout,
    title: "Crop Intelligence Platform",
    desc: "Comprehensive AI-powered platform for crop monitoring, yield prediction, and precision farming decisions.",
    image: imgPrecision,
    capabilities: [
      "AI-based crop yield prediction using satellite imagery and soil sensors",
      "Real-time irrigation optimisation for water efficiency",
      "Precision fertiliser and nutrient dosing",
    ],
  },
  {
    icon: MessageSquare,
    title: "Farmer Advisory Platform",
    desc: "AI-driven digital advisory system providing personalized guidance and smart input recommendations.",
    image: imgAdvisory,
    capabilities: [
      "Multilingual AI conversational chatbots for farmer guidance",
      "Crop and seed variety recommendation engines",
      "Personalized farm advisory dashboards with prescriptive insights",
    ],
  },
  {
    icon: TrendingUp,
    title: "Market Linkage Platform",
    desc: "AI-enabled marketplace connecting farmers directly to buyers with price intelligence and quality assurance.",
    image: imgSupplyChain,
    capabilities: [
      "Price forecasting and demand prediction engines",
      "AI-enabled buyer–farmer matchmaking platforms",
      "Post-harvest logistics and cold-chain optimisation",
    ],
  },
  {
    icon: CreditCard,
    title: "Agri-Finance Platform",
    desc: "Digital financial services platform with alternative credit scoring and parametric insurance.",
    image: imgFintech,
    capabilities: [
      "Alternative credit scoring using farm, satellite, and behavioural data",
      "Yield-linked collateral valuation for agricultural loans",
      "Parametric crop insurance with weather-triggered automated payouts",
    ],
  },
];

const techFoundation = [
  { icon: Brain, title: "AI & Machine Learning", desc: "Advanced algorithms for prediction, optimization, and intelligent automation." },
  { icon: Cloud, title: "Cloud-Native Architecture", desc: "Scalable, resilient infrastructure designed for enterprise workloads." },
  { icon: Zap, title: "Real-Time Processing", desc: "IoT integration and edge computing for immediate insights and actions." },
  { icon: Shield, title: "Secure & Compliant", desc: "Enterprise security standards and regulatory compliance built-in." },
];

const Platforms = () => {
  return (
    <div className="overflow-hidden">
      <PageHero
        title="AI-Powered Agricultural Platforms"
        subtitle="Enterprise-grade platforms integrating AI, IoT, and analytics for agricultural intelligence."
        backgroundImage={heroProducts}
      >
        <div className="flex justify-center mt-8">
          <HeroHexGrid />
        </div>
      </PageHero>

      {/* Platform Dashboard Preview */}
      <section className="py-24 bg-background pattern-crosshatch">
        <div className="container mx-auto px-6">
          <SectionHeading
            label="Our Platforms"
            title="Integrated Technology Platforms"
            subtitle="Each platform addresses specific challenges while integrating with our broader solution suite."
          />

          {/* <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto mb-16 rounded-2xl overflow-hidden shadow-2xl"
          >
            <img src={platformDashboard} alt="Platform Dashboard" className="w-full" />
          </motion.div> */}

          {/* Platform Cards */}
          <div className="grid md:grid-cols-2 gap-8">
            {platforms.map((platform, i) => {
              const Icon = platform.icon;
              return (
                <GlassCard
                  key={platform.title}
                  delay={i * 0.1}
                  className="group relative overflow-hidden rounded-2xl 
border border-kriyanex-emerald/15 bg-card/80 
transition-all duration-500 ease-out
hover:-translate-y-3
hover:scale-[1.02]
hover:border-kriyanex-emerald/40
hover:shadow-[0_40px_90px_-25px_rgba(16,185,129,0.35)]"
                >
                  <div className="absolute inset-0 opacity-0 
group-hover:opacity-100 
transition-opacity duration-500 pointer-events-none">

  <div className="absolute -inset-[200%] 
  bg-gradient-to-r from-transparent 
  via-kriyanex-emerald/10 to-transparent 
  rotate-12 translate-x-[-100%] 
  group-hover:translate-x-[100%] 
  transition-transform duration-1000 ease-out" />

</div>
                  <div className="relative h-48 md:h-52 overflow-hidden">
                    <img
                      src={platform.image}
                      alt={platform.title}
                      className="h-full w-full object-cover 
transition-all duration-700 
group-hover:scale-110 
group-hover:brightness-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                    <div className="absolute bottom-3 left-3 flex items-center gap-2 
rounded-full bg-white/90 px-3 py-1 shadow
transition-all duration-300
group-hover:scale-105
group-hover:shadow-[0_10px_25px_rgba(16,185,129,0.35)]">
                      <span className="flex h-6 w-6 items-center justify-center rounded-full gradient-accent
transition-all duration-300
group-hover:scale-110
group-hover:rotate-6">
                        <Icon className="h-3.5 w-3.5 text-primary-foreground" />
                      </span>
                      <span className="text-sm font-semibold text-foreground">{platform.title}</span>
                    </div>
                  </div>

                  <div className="p-6">
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                      {platform.desc}
                    </p>
                    <p className="text-xs font-semibold uppercase tracking-wider text-kriyanex-emerald mb-3">
                      Key Capabilities
                    </p>
                    <div className="space-y-2">
                      {platform.capabilities.map((cap, j) => (
                        <div key={j} 
className="group/cap flex items-start gap-3 
transition-all duration-300
hover:-translate-y-1">
                          <div className="w-1.5 h-1.5 rounded-full bg-kriyanex-emerald mt-2 flex-shrink-0
transition-all duration-300
group-hover/cap:scale-125
group-hover/cap:shadow-[0_0_8px_rgba(16,185,129,0.8)]" />
                          <p className="text-sm text-foreground/80">{cap}</p>
                        </div>
                      ))}
                    </div>

                    <div className="mt-6">
                      <Link
                        to="/contact"
                        className="inline-flex items-center gap-2 text-sm font-semibold 
text-kriyanex-emerald
transition-all duration-300
group-hover:gap-3
hover:text-kriyanex-teal"
                      >
                        Explore Platform <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </GlassCard>
              );
            })}
          </div>
        </div>
      </section>

      {/* Technology Foundation */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 mesh-gradient" />
        <FloatingParticles count={15} />
        <div className="relative z-10 container mx-auto px-6">
          <SectionHeading
            light
            label="Technology Foundation"
            title="Enterprise-Grade Technology"
            subtitle="Our platforms leverage AI, cloud computing, and data science for reliable, scalable solutions."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {techFoundation.map((tech, i) => {
              const Icon = tech.icon;
              return (
                <GlassCard
  key={tech.title}
  delay={i * 0.1}
  variant="frost"
  className="group transition-all duration-300
  hover:-translate-y-2
  hover:scale-[1.03]
  hover:bg-white/10
  hover:border-kriyanex-emerald/40
  hover:shadow-[0_0_50px_rgba(16,185,129,0.35)]"
>
                  <div className="text-center">
                    <div className="w-12 h-12 rounded-xl gradient-accent 
flex items-center justify-center mx-auto mb-4
transition-all duration-300
group-hover:scale-110
group-hover:rotate-6
group-hover:shadow-[0_0_25px_rgba(16,185,129,0.6)]"
>
                      <Icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <h3 className="text-base font-display font-semibold text-primary-foreground mb-2">{tech.title}</h3>
                    <p className="text-sm text-primary-foreground/70 leading-relaxed">{tech.desc}</p>
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
            Ready to Explore Our Platforms?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
            Discover how our integrated platforms can transform your agricultural operations.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl gradient-accent text-primary-foreground font-semibold hover-glow hover:scale-105 transition-all duration-300"
          >
            Schedule a Demo <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Platforms;
