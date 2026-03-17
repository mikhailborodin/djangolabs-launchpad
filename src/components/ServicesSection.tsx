import { motion } from "framer-motion";
import { Zap, Server, Wrench, ShoppingCart, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  { icon: Zap, title: "Launch your SaaS fast", desc: "Go from idea to working product in weeks, not months." },
  { icon: Server, title: "Build scalable backend systems", desc: "Clean architecture that won't break when you grow." },
  { icon: Wrench, title: "Improve existing products", desc: "Fix bottlenecks, speed things up, and make your system reliable." },
  { icon: ShoppingCart, title: "E-commerce that converts", desc: "Fast, stable, and optimized for real users." },
];

const ServicesSection = () => (
  <section id="services" className="py-24 bg-secondary/20">
    <div className="container space-y-16">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-2xl">
        <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">What we can do for you</h2>
        <p className="text-muted-foreground text-lg">From MVPs to production systems — we handle the hard parts.</p>
      </motion.div>

      <div className="grid sm:grid-cols-2 gap-6">
        {services.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="card-elevated rounded-2xl p-8 border border-border/50 hover:border-primary/30 transition-all group"
          >
            <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-5 group-hover:bg-primary/20 transition-colors">
              <s.icon size={20} />
            </div>
            <h3 className="font-display text-lg font-bold mb-2">{s.title}</h3>
            <p className="text-muted-foreground leading-relaxed">{s.desc}</p>
          </motion.div>
        ))}
      </div>

      <div className="text-center">
        <Button variant="hero" size="lg" asChild>
          <a href="#book">Book a call <ArrowRight size={16} /></a>
        </Button>
      </div>
    </div>
  </section>
);

export default ServicesSection;
