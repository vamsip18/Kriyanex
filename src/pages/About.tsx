import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Target, Eye, ArrowRight, Brain, Satellite, Cpu, Cloud,
  LinkIcon, Smartphone, Leaf, Zap, Globe, Shield, TrendingUp,
  Users, Building2, Landmark, Truck
} from "lucide-react";
import heroAbout from "@/assets/hero-about.jpg";
import leaderKrishna from "@/assets/leader-krishna.jpg";
import leaderDurga from "@/assets/leader-durga.jpg";
import leaderNaveen from "@/assets/leader-naveen.jpg";
import PageHero from "@/components/PageHero";
import HeroDNAHelix from "@/components/HeroDNAHelix";
import GlassCard from "@/components/GlassCard";
import SectionHeading from "@/components/SectionHeading";
import FloatingParticles from "@/components/FloatingParticles";
import {
  Droplets, CheckCircle, Award
} from "lucide-react";
import heroTech from "@/assets/hero-tech.jpg";
import imgSustainability from "@/assets/solutions-sustainability.jpg";
import climateSmartAgriculture from "@/assets/climate-smart-agriculture.jpg";
import farmerProsperity from "@/assets/farmer-prosperity.jpg";
import HeroCircuitBoard from "@/components/HeroCircuitBoard";


const visionPoints = [
  "Driving global agricultural transformation through artificial intelligence, precision farming technologies, and climate-resilient agricultural practices.",
  "Enabling inclusive agricultural finance systems that improve farmer access to credit, insurance, and financial security, enhancing long-term farmer prosperity.",
  "Building data-driven, transparent, and traceable agricultural supply chains that connect farmers, markets, and enterprises efficiently and ethically.",
  "Strengthening global food security through data-driven decision-making, smart analytics, and intelligent food system management.",
];

const missions = [
  "To empower farmers and agribusinesses with intelligent, affordable, and scalable AI solutions",
  "To optimize agricultural productivity, resource efficiency, and profitability through precision intelligence",
  "To bridge the gap between technology, finance, markets, and policy in the agricultural ecosystem",
  "To promote sustainable, climate-resilient, and digitally inclusive agriculture",
];

const leaders = [
  {
    name: "Krishna Kishore",
    role: "Founder & CEO",
    bio: "Leading KriyaNex's vision to transform agriculture through AI and technology.",
    image: leaderKrishna,
  },
  {
    name: "Sri Durga",
    role: "Co-Founder",
    bio: "Driving innovation and strategic partnerships in agricultural technology.",
    image: leaderDurga,
  },
  {
    name: "Naveen",
    role: "Co-Founder",
    bio: "Building scalable technology solutions for sustainable agricultural growth.",
    image: leaderNaveen,
  },
];

const objectives = [
  { num: 1, title: "AI-Enabled Platforms", desc: "Develop AI-enabled software platforms for agriculture, agri-fintech, and rural digital transformation" },
  { num: 2, title: "Precision Agriculture", desc: "Enable precision agriculture using satellite data, drones, IoT sensors, and predictive analytics" },
  { num: 3, title: "Market Access", desc: "Improve farmer access to markets, finance, insurance, and government schemes" },
  { num: 4, title: "Supply Chain Transparency", desc: "Enhance supply-chain transparency, traceability, and quality assurance" },
  { num: 5, title: "Sustainable Agriculture", desc: "Support sustainable agriculture, carbon monetisation, and ESG-linked initiatives" },
  { num: 6, title: "Research & Innovation", desc: "Establish research, innovation, and training centers in agri-technology and AI" },
];

const techStack = [
  { icon: Brain, title: "Artificial Intelligence & Machine Learning", desc: "Advanced AI and ML algorithms for predictive analytics, pattern recognition, and intelligent automation in agriculture." },
  { icon: Eye, title: "Computer Vision & Deep Learning", desc: "Image analysis and deep learning models for crop disease detection, quality grading, and automated monitoring." },
  { icon: Satellite, title: "Satellite & Geospatial Analytics", desc: "Remote sensing and geospatial intelligence for large-scale crop monitoring and environmental assessment." },
  { icon: Cpu, title: "IoT & Edge Computing", desc: "Connected sensors and edge processing for real-time field data collection and on-site analytics." },
  { icon: Cloud, title: "Cloud-Native Platforms", desc: "Scalable, resilient cloud infrastructure for enterprise-grade agricultural applications." },
  { icon: LinkIcon, title: "Blockchain for Traceability", desc: "Distributed ledger technology ensuring transparency, authenticity, and traceability across supply chains." },
  { icon: Smartphone, title: "Mobile & Web Applications", desc: "Cross-platform applications delivering AI-powered insights to farmers, enterprises, and stakeholders." },
];

const beneficiaries = [
  { icon: Users, title: "Small and Marginal Farmers", desc: "Empowering individual farmers with AI-driven insights, market access, and financial services." },
  { icon: Globe, title: "Farmer Producer Organizations", desc: "Collective intelligence and market linkages for FPOs to scale operations and improve bargaining power." },
  { icon: Building2, title: "Agribusiness Enterprises", desc: "Enterprise-grade solutions for agricultural corporations to optimize operations and supply chains." },
  { icon: Landmark, title: "Financial Institutions & Insurers", desc: "Alternative credit scoring and risk assessment tools for agricultural lending and insurance." },
  { icon: Shield, title: "Government & Public Sector", desc: "Decision support systems and analytics platforms for policy planning and scheme implementation." },
  { icon: Truck, title: "Input Manufacturers & Logistics", desc: "Market intelligence and distribution optimization for agri-input manufacturers and logistics providers." },
];

const About = () => {
  return (
    <div className="overflow-hidden">
      <PageHero
        title="About Us"
        subtitle="Pioneering the Future of Smart Agriculture"
        backgroundImage={heroAbout}
        particleCount={30}
      >
        <div className="flex justify-center mt-8">
          <HeroDNAHelix />
        </div>
      </PageHero>

      {/* Company Intro */}
      {/* <section className="py-24 gradient-section pattern-crosshatch">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-lg text-muted-foreground leading-relaxed"
            >
              We are a next-generation AI-enabled agriculture and agri-fintech technology company focused on transforming the agricultural ecosystem through data-driven intelligence, precision farming, digital advisory platforms, and smart supply-chain solutions.
            </motion.p>
          </div>
        </div>
      </section> */}

      {/* Vision */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <SectionHeading label="Our Vision" title="Leading Agricultural Transformation" />
          <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {visionPoints.map((point, i) => (
              <GlassCard
  key={i}
  delay={i * 0.1}
  className="group transition-all duration-300 
  hover:-translate-y-2 
  hover:shadow-[0_20px_45px_rgba(16,185,129,0.18)]
  hover:border-kriyanex-emerald/30"
>
  <div className="flex gap-4">
    <div className="w-8 h-8 rounded-full gradient-accent 
    flex items-center justify-center flex-shrink-0 mt-0.5
    group-hover:scale-110 transition-all duration-300">
      <span className="text-xs font-bold text-primary-foreground">
        {i + 1}
      </span>
    </div>

    <p className="text-sm text-muted-foreground leading-relaxed 
    group-hover:text-foreground transition-colors duration-300">
      {point}
    </p>
  </div>
</GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 mesh-gradient" />
        <FloatingParticles count={15} />
        <div className="relative z-10 container mx-auto px-6">
          <SectionHeading light label="Our Mission" title="Driving Change Through Innovation" />
          <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {missions.map((mission, i) => (
              <GlassCard
  key={i}
  delay={i * 0.1}
  variant="frost"
  className="group transition-all duration-300
hover:-translate-y-2
hover:scale-[1.02]
hover:bg-white/10
hover:backdrop-blur-xl
hover:border-kriyanex-emerald/40
hover:shadow-[0_0_40px_rgba(16,185,129,0.35)]"
>
  <div className="flex gap-4">
    <div className="w-8 h-8 rounded-lg gradient-accent
flex items-center justify-center flex-shrink-0
transition-all duration-300
group-hover:scale-110
group-hover:rotate-3
group-hover:shadow-[0_0_20px_rgba(16,185,129,0.6)]">
      <Target className="w-4 h-4 text-primary-foreground" />
    </div>

    <p className="text-sm text-primary-foreground/80 leading-relaxed 
    group-hover:text-primary-foreground transition-colors duration-300">
      {mission}
    </p>
  </div>
</GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-24 bg-background pattern-topo">
        <div className="container mx-auto px-6">
          <SectionHeading
            label="Leadership"
            title="Meet Our Team"
            subtitle="The visionaries driving agricultural transformation through technology."
          />
          <div className="grid sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {leaders.map((leader, i) => (
              <GlassCard
  key={leader.name}
  delay={i * 0.15}
  className="group text-center transition-all duration-300
  hover:-translate-y-3
  hover:shadow-[0_25px_60px_rgba(0,0,0,0.18)]
  hover:border-kriyanex-emerald/30"
>
  <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4 
  border-2 border-kriyanex-emerald/30 
  group-hover:scale-105 transition-transform duration-300">
    <img
      src={leader.image}
      alt={leader.name}
      className="w-full h-full object-cover"
    />
  </div>

  <h3 className="text-lg font-display font-semibold text-foreground 
  group-hover:text-kriyanex-emerald transition-colors duration-300">
    {leader.name}
  </h3>

  <p className="text-sm font-medium text-kriyanex-emerald mb-2">
    {leader.role}
  </p>

  <p className="text-sm text-muted-foreground">
    {leader.bio}
  </p>
</GlassCard>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-24 overflow-hidden gradient-section">
  <div className="absolute inset-0 mesh-gradient" />
  <FloatingParticles count={12} />

  <div className="relative z-10 container mx-auto px-6">
    <SectionHeading
      light
      label="Core Objectives"
      title="Driving Agricultural Innovation"
      subtitle="Strategic objectives guiding our solutions and partnerships."
    />

    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
      {objectives.map((obj, i) => (
        <GlassCard
  key={obj.num}
  delay={i * 0.08}
  variant="frost"
  className="group transition-all duration-300
hover:-translate-y-2
hover:scale-[1.02]
hover:bg-white/10
hover:backdrop-blur-xl
hover:border-kriyanex-emerald/40
hover:shadow-[0_0_40px_rgba(16,185,129,0.35)]"
>
  <div className="flex items-start gap-4">
    <div className="w-8 h-8 rounded-lg gradient-accent
flex items-center justify-center flex-shrink-0
transition-all duration-300
group-hover:scale-110
group-hover:rotate-3
group-hover:shadow-[0_0_20px_rgba(16,185,129,0.6)]">
      <span className="text-sm font-bold text-primary-foreground">
        {obj.num}
      </span>
    </div>

    <div>
      <h3 className="text-base font-display font-semibold 
      text-primary-foreground mb-1">
        {obj.title}
      </h3>

      <p className="text-sm text-primary-foreground/80">
        {obj.desc}
      </p>
    </div>
  </div>
</GlassCard>
      ))}
    </div>
  </div>
</section>

      {/* Technology Stack */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <SectionHeading
            label="Technology Stack"
            title="Enterprise-Grade Technology"
            subtitle="Cutting-edge technologies powering scalable agricultural solutions."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {techStack.map((tech, i) => {
              const Icon = tech.icon;
              return (
                <GlassCard
  key={tech.title}
  delay={i * 0.08}
  className="group transition-all duration-300
  hover:-translate-y-3
  hover:shadow-[0_25px_60px_rgba(16,185,129,0.20)]
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
      <h3 className="text-base font-display font-semibold 
      text-foreground mb-1
      group-hover:text-kriyanex-emerald transition-colors duration-300">
        {tech.title}
      </h3>

      <p className="text-sm text-muted-foreground leading-relaxed">
        {tech.desc}
      </p>
    </div>
  </div>
</GlassCard>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative py-24 overflow-hidden gradient-section">
  <div className="absolute inset-0 mesh-gradient" />
  <FloatingParticles count={12} />

  <div className="relative z-10 container mx-auto px-6">
    <SectionHeading
      light
      label="Who We Serve"
      title="Target Beneficiaries"
      subtitle="Solutions designed for every stakeholder in the agricultural ecosystem."
    />

    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {beneficiaries.map((b, i) => {
        const Icon = b.icon;
        return (
          <GlassCard key={b.title} delay={i * 0.08} variant="frost" className="group transition-all duration-300
hover:-translate-y-2
hover:scale-[1.02]
hover:bg-white/10
hover:backdrop-blur-xl
hover:border-kriyanex-emerald/40
hover:shadow-[0_0_40px_rgba(16,185,129,0.35)]"
>
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-lg gradient-accent
flex items-center justify-center flex-shrink-0
transition-all duration-300
group-hover:scale-110
group-hover:rotate-3
group-hover:shadow-[0_0_20px_rgba(16,185,129,0.6)]">
                <Icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-base font-display font-semibold text-primary-foreground mb-1">
                  {b.title}
                </h3>
                <p className="text-sm text-primary-foreground/80">
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
    </div>
  );
};


// --- Sustainability Page Content ---

const focusAreas = [
  {
    icon: Droplets,
    title: "Water-Efficient Agriculture",
    desc: "Climate-smart irrigation systems and water conservation technologies that optimize water usage while maintaining crop productivity.",
  },
  {
    icon: Leaf,
    title: "Reduced Chemical Usage",
    desc: "Precision input systems that minimize chemical usage through targeted application, protecting soil health and ecosystems.",
  },
  {
    icon: Satellite,
    title: "Carbon Footprint Monitoring",
    desc: "Comprehensive carbon tracking and offset solutions enabling farms to measure, report, and reduce their environmental impact.",
  },
  {
    icon: Users,
    title: "Farmer Income Stability",
    desc: "Financial inclusion programs and market access solutions that stabilize farmer incomes and promote rural prosperity.",
  },
  {
    icon: Eye,
    title: "Traceable Food Systems",
    desc: "Transparent, ethical, and fully traceable food systems that build consumer trust and ensure food safety.",
  },
];

const environmentalImpact = [
  "Water-efficient irrigation optimization",
  "Reduced chemical usage through precision inputs",
  "Carbon footprint monitoring and offset solutions",
];

const socialImpact = [
  "Farmer income stability through market linkages",
  "Rural financial inclusion via alternative credit scoring",
  "Knowledge dissemination and capacity building programs",
];

const governanceItems = [
  { icon: LinkIcon, title: "Supply Chain Transparency", desc: "Blockchain-based traceability ensuring every step of the supply chain is visible." },
  { icon: Award, title: "Quality Assurance", desc: "Automated quality grading and certification systems maintaining standards." },
  { icon: Eye, title: "Ethical Sourcing", desc: "End-to-end visibility enabling verification of ethical sourcing practices." },
  { icon: Satellite, title: "ESG Reporting", desc: "Carbon credit monetisation and ESG-linked financial products." },
];

const SustainabilityContent = () => (
  <div className="overflow-hidden mt-24">
    {/* <PageHero
      title="Sustainability & ESG"
      subtitle="Building transparent, ethical, and environmentally responsible food systems."
      backgroundImage={heroTech}
    >
      <div className="flex justify-center mt-8">
        <HeroCircuitBoard />
      </div>
    </PageHero> */}

    {/* Commitment */}
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <SectionHeading
          label="Our Commitment"
          title="Environmental, Social & Governance Focus"
          subtitle="Sustainability embedded in every solution we build."
        />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto mb-12 rounded-2xl overflow-hidden shadow-xl"
        >
          {/* <img src={imgSustainability} alt="Sustainable Agriculture" className="w-full h-64 object-cover" /> */}
        </motion.div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {focusAreas.map((area, i) => {
            const Icon = area.icon;
            return (
              <GlassCard
  key={area.title}
  delay={i * 0.1}
  className="group transition-all duration-300
  hover:-translate-y-3
  hover:shadow-[0_25px_60px_rgba(16,185,129,0.20)]
  hover:border-kriyanex-emerald/30"
>
  <div className="w-12 h-12 rounded-xl gradient-accent 
  flex items-center justify-center mb-4
  group-hover:scale-110 group-hover:rotate-3
  transition-all duration-300">
    <Icon className="w-6 h-6 text-primary-foreground" />
  </div>

  <h3 className="text-base font-display font-semibold text-foreground mb-2
  group-hover:text-kriyanex-emerald transition-colors duration-300">
    {area.title}
  </h3>

  <p className="text-sm text-muted-foreground leading-relaxed">
    {area.desc}
  </p>
</GlassCard>
            );
          })}
        </div>
      </div>
    </section>

    {/* <section className="py-24 bg-background">
  <div className="container mx-auto px-6">
    <div className="space-y-16 max-w-5xl mx-auto">

      <div className="grid md:grid-cols-2 gap-12 items-center">
        <img
          src={climateSmartAgriculture}
          alt="Climate-smart agriculture"
          className="w-full h-64 sm:h-80 object-cover rounded-2xl shadow-xl hover-lift"
        />
        <GlassCard delay={0} className="hover-lift">
          <h3 className="text-xl font-display font-bold text-foreground mb-2">
            Environmental Impact
          </h3>
          <p className="text-sm text-muted-foreground mb-6">
            Climate-Smart Agriculture
          </p>
          <div className="space-y-3">
            {environmentalImpact.map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <CheckCircle className="w-4 h-4 text-kriyanex-emerald mt-0.5" />
                <p className="text-sm text-muted-foreground">{item}</p>
              </div>
            ))}
          </div>
        </GlassCard>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-center">
        <GlassCard delay={0.15} className="hover-lift">
          <h3 className="text-xl font-display font-bold text-foreground mb-2">
            Social Impact
          </h3>
          <p className="text-sm text-muted-foreground mb-6">
            Farmer Prosperity & Inclusion
          </p>
          <div className="space-y-3">
            {socialImpact.map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <CheckCircle className="w-4 h-4 text-kriyanex-emerald mt-0.5" />
                <p className="text-sm text-muted-foreground">{item}</p>
              </div>
            ))}
          </div>
        </GlassCard>
        <img
          src={farmerProsperity}
          alt="Farmer prosperity"
          className="w-full h-64 sm:h-80 object-cover rounded-2xl shadow-xl hover-lift"
        />
      </div>
    </div>
  </div>
</section> */}

<section className="relative py-24 overflow-hidden gradient-section">
  <div className="absolute inset-0 mesh-gradient" />
  <FloatingParticles count={14} />

  <div className="relative z-10 container mx-auto px-6">
    <SectionHeading
      light
      label="Impact"
      title="Environmental & Social Impact"
      subtitle="Sustainability and inclusion embedded in our agricultural solutions."
    />

    <div className="grid sm:grid-cols-2 gap-6 max-w-5xl mx-auto">
      <GlassCard delay={0.05} variant="frost" className="group transition-all duration-300
hover:-translate-y-2
hover:scale-[1.02]
hover:bg-white/10
hover:backdrop-blur-xl
hover:border-kriyanex-emerald/40
hover:shadow-[0_0_40px_rgba(16,185,129,0.35)]"
>
        <h3 className="text-lg font-display font-semibold text-primary-foreground mb-2">
          Environmental Impact
        </h3>
        <p className="text-sm text-primary-foreground/70 mb-4">
          Climate-Smart Agriculture
        </p>
        <div className="space-y-3">
          {environmentalImpact.map((item, i) => (
            <div key={i} className="flex items-start gap-3">
              <CheckCircle className="w-4 h-4 text-kriyanex-emerald mt-0.5" />
              <p className="text-sm text-primary-foreground/80">{item}</p>
            </div>
          ))}
        </div>
      </GlassCard>

      <GlassCard delay={0.15} variant="frost" className="group transition-all duration-300
hover:-translate-y-2
hover:scale-[1.02]
hover:bg-white/10
hover:backdrop-blur-xl
hover:border-kriyanex-emerald/40
hover:shadow-[0_0_40px_rgba(16,185,129,0.35)]"
>
        <h3 className="text-lg font-display font-semibold text-primary-foreground mb-2">
          Social Impact
        </h3>
        <p className="text-sm text-primary-foreground/70 mb-4">
          Farmer Prosperity & Inclusion
        </p>
        <div className="space-y-3">
          {socialImpact.map((item, i) => (
            <div key={i} className="flex items-start gap-3">
              <CheckCircle className="w-4 h-4 text-kriyanex-emerald mt-0.5" />
              <p className="text-sm text-primary-foreground/80">{item}</p>
            </div>
          ))}
        </div>
      </GlassCard>
    </div>
  </div>
</section>

    {/* ================= GOVERNANCE ================= */}
<section className="py-24 bg-background pattern-topo">
  <div className="container mx-auto px-6">
    <SectionHeading
      label="Governance"
      title="Transparent & Ethical Systems"
      subtitle="Building trust through blockchain-enabled traceability."
    />
    <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
      {governanceItems.map((item, i) => {
        const Icon = item.icon;
        return (
          <GlassCard
  key={item.title}
  delay={i * 0.1}
  className="group transition-all duration-300
  hover:-translate-y-2
  hover:shadow-[0_20px_45px_rgba(16,185,129,0.18)]
  hover:border-kriyanex-emerald/30"
>
  <div className="flex items-start gap-4">
    <div className="w-10 h-10 rounded-lg gradient-accent 
    flex items-center justify-center flex-shrink-0
    group-hover:scale-110 transition-all duration-300">
      <Icon className="w-5 h-5 text-primary-foreground" />
    </div>

    <div>
      <h3 className="text-base font-display font-semibold text-foreground mb-1
      group-hover:text-kriyanex-emerald transition-colors duration-300">
        {item.title}
      </h3>

      <p className="text-sm text-muted-foreground">
        {item.desc}
      </p>
    </div>
  </div>
</GlassCard>
        );
      })}
    </div>
  </div>
</section>

    <section className="relative py-24 overflow-hidden gradient-section">
  <div className="absolute inset-0 mesh-gradient" />
  <FloatingParticles count={18} />

  <div className="relative z-10 container mx-auto px-6 text-center">
    <h2 className="text-3xl sm:text-4xl font-display font-bold text-primary-foreground mb-4">
      Committed to Sustainable Agriculture
    </h2>
    <p className="text-primary-foreground/70 mb-8 max-w-lg mx-auto">
      Learn how our solutions drive environmental, social, and governance impact.
    </p>
    <Link
      to="/contact"
      className="inline-flex items-center gap-2 px-8 py-4 rounded-xl 
      glass-cellular text-primary-foreground font-semibold 
      hover:scale-110 transition-all duration-300"
    >
      Talk to Us <ArrowRight className="w-5 h-5" />
    </Link>
  </div>
</section>
  </div>
);

// Render Sustainability content after About content
export default () => (
  <>
    <About />
    <SustainabilityContent />
  </>
);
