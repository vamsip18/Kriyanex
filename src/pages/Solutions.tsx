import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Sprout, MessageSquare, TrendingUp, CreditCard, Building,
  Leaf, ArrowRight, ChevronRight
} from "lucide-react";
import heroProducts from "@/assets/hero-products.jpg";
import HeroCircuitBoard from "@/components/HeroCircuitBoard";
import heroTech from "@/assets/hero-tech.jpg";
import imgPrecision from "@/assets/solutions-precision-ag.jpg";
import imgAdvisory from "@/assets/solutions-digital-advisory.jpg";
import imgSupplyChain from "@/assets/solutions-supply-chain.jpg";
import imgFintech from "@/assets/solutions-agri-fintech.jpg";
import imgEnterprise from "@/assets/solutions-enterprise.jpg";
import imgSustainability from "@/assets/solutions-sustainability.jpg";
import PageHero from "@/components/PageHero";
import HeroHexGrid from "@/components/HeroHexGrid";
import GlassCard from "@/components/GlassCard";
import SectionHeading from "@/components/SectionHeading";
import FloatingParticles from "@/components/FloatingParticles";

const solutionCategories = [
  {
    id: "precision",
    icon: Sprout,
    title: "Precision Agriculture Solutions",
    subtitle: "AI-powered crop intelligence and resource optimization for maximum yield and efficiency.",
    image: imgPrecision,
    highlights: [
      "AI-based crop yield prediction using satellite imagery and soil sensors",
      "Real-time irrigation optimisation for water efficiency",
      "Precision fertiliser and nutrient dosing",
    ],
  },
  {
    id: "advisory",
    icon: MessageSquare,
    title: "Digital Advisory & Smart Inputs Platform",
    subtitle: "Intelligent farmer guidance and personalized recommendations powered by AI.",
    image: imgAdvisory,
    highlights: [
      "Multilingual AI conversational chatbots for farmer guidance",
      "Crop and seed variety recommendation engines",
      "Personalized farm advisory dashboards with prescriptive insights",
    ],
  },
  {
    id: "supply-chain",
    icon: TrendingUp,
    title: "AI-Driven Supply Chain & Market Linkages",
    subtitle: "End-to-end supply chain intelligence from farm to market with full traceability.",
    image: imgSupplyChain,
    highlights: [
      "Price forecasting and demand prediction engines",
      "AI-enabled buyer–farmer matchmaking platforms",
      "Post-harvest logistics and cold-chain optimisation",
    ],
  },
  {
    id: "fintech",
    icon: CreditCard,
    title: "Agri-Fintech & Rural Finance Solutions",
    subtitle: "Alternative credit scoring and financial products tailored for agriculture.",
    image: imgFintech,
    highlights: [
      "Alternative credit scoring using farm, satellite, and behavioural data",
      "Yield-linked collateral valuation for agricultural loans",
      "Parametric crop insurance with weather-triggered automated payouts",
    ],
  },
  {
    id: "enterprise",
    icon: Building,
    title: "Enterprise & Government Solutions",
    subtitle: "AI platforms for smart agriculture missions and policy decision support.",
    image: imgEnterprise,
    highlights: [
      "AI platforms for smart agriculture missions and digital farming initiatives",
      "Decision-support systems for policy planning and subsidy optimisation",
      "Climate-risk assessment and early-warning systems",
    ],
  },
  {
    id: "sustainability",
    icon: Leaf,
    title: "Sustainability & ESG",
    subtitle: "Climate-smart agriculture and transparent, ethical food systems.",
    image: imgSustainability,
    highlights: [
      "Water-efficient and climate-smart agriculture",
      "Reduced chemical usage through precision inputs",
      "Carbon footprint monitoring and offset solutions",
    ],
  },
];

const detailedSolutions = [
  {
    num: 1,
    title: "Precision Agriculture Solutions",
    subtitle: "AI-powered crop intelligence and resource optimization for maximum yield and efficiency.",
    image: imgPrecision,
    features: [
      "AI-based crop yield prediction using satellite imagery and soil sensors",
      "Real-time irrigation optimisation for water efficiency",
      "Precision fertiliser and nutrient dosing",
      "Computer vision-based crop disease and pest detection",
      "Drone- and sensor-based crop health monitoring",
      "Predictive maintenance for farm machinery and equipment",
    ],
  },
  {
    num: 2,
    title: "Digital Advisory & Smart Inputs Platform",
    subtitle: "Intelligent farmer guidance and personalized recommendations powered by AI.",
    image: imgAdvisory,
    features: [
      "Multilingual AI conversational chatbots for farmer guidance",
      "Crop and seed variety recommendation engines",
      "Personalized farm advisory dashboards with prescriptive insights",
      "Integrated e-commerce platform for agri-inputs",
      "Community-driven farmer knowledge networks",
      "Government scheme eligibility assessment and application support",
    ],
  },
  {
    num: 3,
    title: "AI-Driven Supply Chain & Market Linkages",
    subtitle: "End-to-end supply chain intelligence from farm to market with full traceability.",
    image: imgSupplyChain,
    features: [
      "Price forecasting and demand prediction engines",
      "AI-enabled buyer–farmer matchmaking platforms",
      "Post-harvest logistics and cold-chain optimisation",
      "Automated quality grading and certification systems",
      "Blockchain-based traceability and transparency solutions",
      "Inventory planning and market intelligence dashboards",
    ],
  },
  {
    num: 4,
    title: "Agri-Fintech & Rural Finance Solutions",
    subtitle: "Alternative credit scoring and financial products tailored for agriculture.",
    image: imgFintech,
    features: [
      "Alternative credit scoring using farm, satellite, and behavioural data",
      "Yield-linked collateral valuation for agricultural loans",
      "Parametric crop insurance with weather-triggered automated payouts",
      "Dynamic pricing of farm inputs",
      "Digital loan disbursement and recovery platforms",
      "Carbon credit monetisation and ESG-linked financial products",
    ],
  },
  {
    num: 5,
    title: "Enterprise & Government Solutions",
    subtitle: "AI platforms for smart agriculture missions and policy decision support.",
    image: imgEnterprise,
    features: [
      "AI platforms for smart agriculture missions and digital farming initiatives",
      "Decision-support systems for policy planning and subsidy optimisation",
      "Climate-risk assessment and early-warning systems",
      "Custom AI dashboards for agri-corporates, cooperatives, and FPOs",
    ],
  },
  {
    num: 6,
    title: "Sustainability & ESG",
    subtitle: "Climate-smart agriculture and transparent, ethical food systems.",
    image: imgSustainability,
    features: [
      "Water-efficient and climate-smart agriculture",
      "Reduced chemical usage through precision inputs",
      "Carbon footprint monitoring and offset solutions",
      "Farmer income stability and rural inclusion",
      "Transparent, ethical, and traceable food systems",
    ],
  },
];

const Solutions = () => {
  const [activeCategory, setActiveCategory] = useState(solutionCategories[0].id);
  const active = solutionCategories.find((s) => s.id === activeCategory)!;

  return (
    <div className="overflow-hidden">
      <PageHero
        title="AI-Driven Agricultural Solutions"
        subtitle="Building transparent, ethical, and environmentally responsible food systems."
        backgroundImage={heroTech}
      >
        <div className="flex justify-center mt-8">
          <HeroCircuitBoard />
        </div>
      </PageHero>

      {/* Solution Categories Overview */}
      {/* <section className="py-24 gradient-section pattern-crosshatch">
        <div className="container mx-auto px-6">
          <SectionHeading
            label="Our Solutions"
            title="AI-Driven Agricultural Solutions"
            subtitle="Comprehensive platforms designed to transform the agricultural value chain through data-driven intelligence."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {solutionCategories.map((cat, i) => {
              const Icon = cat.icon;
              return (
                <GlassCard key={cat.id} delay={i * 0.08} className="group cursor-pointer" >
                  <div className="relative h-40 -mx-6 -mt-6 mb-4 rounded-t-xl overflow-hidden">
                    <img src={cat.image} alt={cat.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-card/90 to-transparent" />
                    <div className="absolute bottom-3 left-4">
                      <div className="w-10 h-10 rounded-lg gradient-accent flex items-center justify-center">
                        <Icon className="w-5 h-5 text-primary-foreground" />
                      </div>
                    </div>
                  </div>
                  <h3 className="text-base font-display font-semibold text-foreground mb-2 group-hover:text-kriyanex-emerald transition-colors duration-300">
                    {cat.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{cat.subtitle}</p>
                </GlassCard>
              );
            })}
          </div>
        </div>
      </section> */}

      {/* Detailed Solutions */}
      <section className="py-24 bg-background pattern-crosshatch">
        <div className="container mx-auto px-6">
          <SectionHeading
            label="Detailed Solutions"
            title="Solution Modules"
            subtitle="Explore the full capabilities of each solution."
          />
          <div className="space-y-12 max-w-6xl mx-auto">
            {detailedSolutions.map((sol, i) => {
              const isEven = i % 2 === 0;
              return (
                <motion.div
                  key={sol.num}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group relative grid md:grid-cols-2 gap-10 items-center 
rounded-3xl border border-kriyanex-emerald/15 
bg-card/60 p-6 md:p-8 backdrop-blur 
transition-all duration-500 ease-out
hover:-translate-y-3
hover:scale-[1.015]
hover:border-kriyanex-emerald/40
hover:shadow-[0_40px_90px_-30px_rgba(16,185,129,0.35)]
overflow-hidden"
                >
                  <div className="absolute inset-0 opacity-0 
group-hover:opacity-100 
transition-opacity duration-500 
pointer-events-none">

  <div className="absolute -inset-[200%] 
  bg-gradient-to-r 
  from-transparent 
  via-kriyanex-emerald/10 
  to-transparent 
  rotate-12 
  translate-x-[-100%] 
  group-hover:translate-x-[100%] 
  transition-transform duration-1000 ease-out" />

</div>
                  <div className={isEven ? "order-1" : "order-2"}>
                    <div className="relative overflow-hidden rounded-2xl border border-kriyanex-emerald/20 shadow-xl">
                      <div className="absolute inset-0 bg-gradient-to-tr from-black/40 via-transparent to-black/10 opacity-70" />
                      <img
                        src={sol.image}
                        alt={sol.title}
                        className="w-full h-72 md:h-80 object-cover 
transition-all duration-700 
group-hover:scale-110 
group-hover:brightness-105"
                      />
                      <div className="absolute left-4 top-4 rounded-full bg-black/60 px-3 py-1 text-xs font-semibold text-white/90">
                        Module {sol.num}
                      </div>
                    </div>
                  </div>
                  <div className={isEven ? "order-2" : "order-1"}>
                    <div className="mb-5">
                      <p className="text-xs uppercase tracking-[0.28em] text-kriyanex-emerald/80 mb-2">
                        Solution {String(sol.num).padStart(2, "0")}
                      </p>
                      <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground">
                        {sol.title}
                      </h3>
                      <p className="text-sm md:text-base text-muted-foreground mt-2">
                        {sol.subtitle}
                      </p>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {sol.features.map((feature, j) => (
                        <div key={j} className="group/feature flex items-start gap-3 
rounded-xl bg-muted/20 px-3 py-2
transition-all duration-300
hover:-translate-y-1
hover:bg-kriyanex-emerald/10
hover:shadow-[0_10px_25px_rgba(16,185,129,0.25)]"
>
                          <div className="mt-2 h-2 w-2 rounded-full bg-kriyanex-emerald 
flex-shrink-0 transition-all duration-300
group-hover/feature:scale-125
group-hover/feature:shadow-[0_0_10px_rgba(16,185,129,0.8)]" />
                          <p className="text-sm text-foreground/80 leading-relaxed">{feature}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 mesh-gradient" />
        <FloatingParticles count={15} />
        <div className="relative z-10 container mx-auto px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-primary-foreground mb-4">
            Interested in Our Solutions?
          </h2>
          <p className="text-primary-foreground/60 mb-8 max-w-lg mx-auto">
            Let's discuss how our solutions can transform your agricultural operations.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl 
glass-frost text-primary-foreground font-semibold
transition-all duration-300
hover:scale-105
hover:bg-white/10
hover:backdrop-blur-xl
hover:shadow-[0_0_40px_rgba(16,185,129,0.5)]"
          >
            Request a Demo <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Solutions;
