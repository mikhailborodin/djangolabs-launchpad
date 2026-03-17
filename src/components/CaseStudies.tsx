import { motion } from "framer-motion";
import { TrendingUp, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const cases = [
  {
    icon: TrendingUp,
    title: "E-commerce platform",
    result: "Increased conversion by 35%",
    desc: "After rebuilding backend and checkout flow",
  },
  {
    icon: Clock,
    title: "SaaS product",
    result: "Launched MVP in 4 weeks",
    desc: "With scalable architecture from day one",
  },
];

const CaseStudies = () => (
  <section id="results" className="py-24 bg-secondary/20">
    <div className="container space-y-16">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-2xl">
        <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">Real results</h2>
        <p className="text-muted-foreground text-lg">Not hypothetical. Not "potential." These actually happened.</p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-6">
        {cases.map((c, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="card-elevated rounded-2xl p-8 border border-border/50"
          >
            <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6">
              <c.icon size={24} />
            </div>
            <h3 className="font-display text-xl font-bold mb-2">{c.title}</h3>
            <p className="text-2xl font-display font-bold text-gradient mb-2">{c.result}</p>
            <p className="text-muted-foreground">{c.desc}</p>
          </motion.div>
        ))}
      </div>

      <div className="text-center">
        <Button variant="hero" size="lg" asChild>
          <a href="#book">Get results like these <ArrowRight size={16} /></a>
        </Button>
      </div>
    </div>
  </section>
);

export default CaseStudies;
