import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Mail, MapPin, Phone, Send, CheckCircle } from "lucide-react";
import FloatingParticles from "@/components/FloatingParticles";
import HeroSignalBeacon from "@/components/HeroSignalBeacon";
import GlassCard from "@/components/GlassCard";
import SectionHeading from "@/components/SectionHeading";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    subject: "",
    message: "",
  });
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const beaconY = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="overflow-hidden">
      {/* Hero with interactive Signal Beacon + parallax */}
      <section
  ref={heroRef}
  className="relative min-h-screen flex items-center justify-center overflow-hidden"
>
        <motion.div className="absolute inset-0 mesh-gradient" style={{ y: bgY }} />
        <FloatingParticles count={20} />

        <motion.div
          className="relative z-10 container mx-auto px-6 pt-40 pb-32"
          style={{ opacity: contentOpacity }}
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center lg:text-left"
              style={{ y: textY }}
            >
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-display font-bold text-primary-foreground mb-6">
                Get in Touch
              </h1>
              <p className="text-lg sm:text-xl text-primary-foreground/60 max-w-2xl">
                Let's discuss how KriyaNex can transform your agricultural operations
                with AI-powered solutions.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex justify-center"
              style={{ y: beaconY }}
            >
              <HeroSignalBeacon />
            </motion.div>
          </div>
        </motion.div>

        <div className="absolute bottom-0 left-0 right-0 h-14 
bg-gradient-to-t from-background/80 via-background/60 to-transparent" />
      </section>

      {/* Contact Form + Info */}
      <section className="py-24 bg-background pattern-crosshatch">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-6">
              <SectionHeading
                title="Let's Connect"
                subtitle="Reach out to us and we'll respond within 24 hours."
                className="text-left mb-8"
              />

              <GlassCard
  delay={0}
  className="group flex items-start gap-4 
  transition-all duration-300
  hover:-translate-y-2
  hover:shadow-[0_20px_50px_rgba(16,185,129,0.20)]
  hover:border-kriyanex-emerald/40"
>
  <div className="w-10 h-10 rounded-lg gradient-accent 
  flex items-center justify-center flex-shrink-0
  transition-all duration-300
  group-hover:scale-110 
  group-hover:rotate-3
  group-hover:shadow-[0_0_20px_rgba(16,185,129,0.6)]">
    <MapPin className="w-5 h-5 text-primary-foreground" />
  </div>

  <div>
    <h4 className="font-display font-semibold text-foreground mb-1 
    group-hover:text-kriyanex-emerald transition-colors duration-300">
      Office
    </h4>

    <p className="text-sm text-muted-foreground">
      Registered Office: Telangana, India
    </p>
  </div>
</GlassCard>

              <GlassCard
  delay={0}
  className="group flex items-start gap-4 
  transition-all duration-300
  hover:-translate-y-2
  hover:shadow-[0_20px_50px_rgba(16,185,129,0.20)]
  hover:border-kriyanex-emerald/40"
>
  <div className="w-10 h-10 rounded-lg gradient-accent 
  flex items-center justify-center flex-shrink-0
  transition-all duration-300
  group-hover:scale-110 
  group-hover:rotate-3
  group-hover:shadow-[0_0_20px_rgba(16,185,129,0.6)]">
                  <Mail className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <h4 className="font-display font-semibold text-foreground mb-1">Email</h4>
                  <p className="text-sm text-muted-foreground">info@kriyanex.com</p>
                </div>
              </GlassCard>

              <GlassCard
  delay={0}
  className="group flex items-start gap-4 
  transition-all duration-300
  hover:-translate-y-2
  hover:shadow-[0_20px_50px_rgba(16,185,129,0.20)]
  hover:border-kriyanex-emerald/40"
>
  <div className="w-10 h-10 rounded-lg gradient-accent 
  flex items-center justify-center flex-shrink-0
  transition-all duration-300
  group-hover:scale-110 
  group-hover:rotate-3
  group-hover:shadow-[0_0_20px_rgba(16,185,129,0.6)]">
                  <Phone className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <h4 className="font-display font-semibold text-foreground mb-1">Phone</h4>
                  <p className="text-sm text-muted-foreground">+91 XXXX XXXXXX</p>
                </div>
              </GlassCard>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="glass-card p-12 text-center 
transition-all duration-300
hover:shadow-[0_25px_60px_rgba(16,185,129,0.25)]
hover:border-kriyanex-emerald/40"
                >
                  <div className="w-20 h-20 rounded-full gradient-accent 
flex items-center justify-center mx-auto mb-6
transition-all duration-500
hover:scale-110
hover:shadow-[0_0_40px_rgba(16,185,129,0.6)]">
                    <CheckCircle className="w-10 h-10 text-primary-foreground" />
                  </div>
                  <h3 className="text-2xl font-display font-bold text-foreground mb-3">
                    Message Sent!
                  </h3>
                  <p className="text-muted-foreground">
                    Thank you for reaching out. We'll get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: "", email: "", organization: "", subject: "", message: "" });
                    }}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 
px-8 py-3.5 rounded-xl gradient-accent text-primary-foreground font-semibold
transition-all duration-300
hover:scale-105
hover:shadow-[0_15px_40px_rgba(16,185,129,0.5)]"
                  >
                    Send Another
                  </button>
                </motion.div>
              ) : (
                <GlassCard
  className="p-8 transition-all duration-300
  hover:shadow-[0_25px_60px_rgba(16,185,129,0.15)]
  hover:border-kriyanex-emerald/30"
>
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-1.5">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full px-4 py-3 rounded-lg bg-muted/50 border border-border text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-kriyanex-emerald/50 focus:border-kriyanex-emerald transition-all duration-300"
                          placeholder="John Doe"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-1.5">
                          Email *
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-4 py-3 rounded-lg bg-muted/50 border border-border text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-kriyanex-emerald/50 focus:border-kriyanex-emerald transition-all duration-300"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-1.5">
                          Organization
                        </label>
                        <input
                          type="text"
                          value={formData.organization}
                          onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                          className="w-full px-4 py-3 rounded-lg bg-muted/50 border border-border text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-kriyanex-emerald/50 focus:border-kriyanex-emerald transition-all duration-300"
                          placeholder="Your organization"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-1.5">
                          Subject *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.subject}
                          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                          className="w-full px-4 py-3 rounded-lg bg-muted/50 border border-border text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-kriyanex-emerald/50 focus:border-kriyanex-emerald transition-all duration-300"
                          placeholder="How can we help?"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1.5">
                        Message *
                      </label>
                      <textarea
                        required
                        rows={5}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg bg-muted/50 border border-border text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-kriyanex-emerald/50 focus:border-kriyanex-emerald transition-all duration-300 resize-none"
                        placeholder="Tell us about your project..."
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 
px-8 py-3.5 rounded-xl gradient-accent text-primary-foreground font-semibold
transition-all duration-300
hover:scale-105
hover:shadow-[0_15px_40px_rgba(16,185,129,0.5)]"
                    >
                      <Send className="w-4 h-4" />
                      Send Message
                    </button>
                  </form>
                </GlassCard>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
