import { motion } from "framer-motion";
import { Phone, PenTool, Code2, Rocket } from "lucide-react";

const steps = [
  { icon: Phone, title: "Quick call", desc: "We understand your idea and goals" },
  { icon: PenTool, title: "Architecture & planning", desc: "We design the system properly" },
  { icon: Code2, title: "Fast development", desc: "You see progress immediately" },
  { icon: Rocket, title: "Launch & scale", desc: "We help you grow without breaking things" },
];

const HowWeWork = () => (
  <section id="process" className="py-24">
    <div className="container space-y-16">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center max-w-2xl mx-auto">
        <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">Simple process. Clear results.</h2>
        <p className="text-muted-foreground text-lg">No endless meetings. No scope creep. Just execution.</p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {steps.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.12 }}
            className="relative text-center space-y-4 p-6"
          >
            <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary mx-auto">
              <s.icon size={26} />
            </div>
            <div className="font-display text-xs font-bold text-primary uppercase tracking-widest">Step {i + 1}</div>
            <h3 className="font-display text-lg font-bold">{s.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default HowWeWork;
