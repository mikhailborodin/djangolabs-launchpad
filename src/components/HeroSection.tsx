import { motion } from "framer-motion";
import { ArrowRight, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImg from "@/assets/hero-illustration.png";

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center pt-16 overflow-hidden" style={{ background: "var(--gradient-hero)" }}>
    <div className="container grid lg:grid-cols-2 gap-12 items-center py-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="space-y-8"
      >
        <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-4 py-1.5 text-xs font-medium text-primary">
          <Clock size={14} />
          Limited availability — we take on 3 projects/month
        </div>

        <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight">
          Build scalable web products with Django —{" "}
          <span className="text-gradient">fast.</span>
        </h1>

        <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
          We design, build, and launch production-ready systems for startups and growing businesses. No fluff. Just working products.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <Button variant="hero" size="xl" onClick={() => window.dispatchEvent(new CustomEvent("open-booking-modal"))}>
              Book a call <ArrowRight size={18} />
          </Button>
          <Button variant="heroOutline" size="xl" asChild>
            <a href="#contact">Get project estimate</a>
          </Button>
        </div>

        <p className="text-sm text-muted-foreground">
          Trusted by startups and teams that need reliable backend systems
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="hidden lg:block"
      >
        <img src={heroImg} alt="Abstract system architecture illustration" className="w-full rounded-2xl glow-border" />
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
