import { motion } from "framer-motion";
import { Rocket, ShieldCheck, TrendingUp } from "lucide-react";

const stats = [
  { icon: Rocket, label: "10+ запущенных продуктов" },
  { icon: ShieldCheck, label: "Код, готовый к продакшену, с первого дня" },
  { icon: TrendingUp, label: "Создано для масштаба, а не для демо" },
];

const SocialProof = () => (
  <section className="border-y border-border bg-secondary/30 py-12">
    <div className="container">
      <div className="grid sm:grid-cols-3 gap-8">
        {stats.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="flex items-center gap-4"
          >
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <s.icon size={22} />
            </div>
            <span className="font-display font-semibold text-foreground">{s.label}</span>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default SocialProof;
