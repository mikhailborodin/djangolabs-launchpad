import { motion } from "framer-motion";
import { Zap, Server, Wrench, ShoppingCart, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  { icon: Zap, title: "Запустим ваш SaaS быстро", desc: "От идеи до работающего продукта за недели, а не месяцы." },
  { icon: Server, title: "Построим масштабируемый бэкенд", desc: "Чистая архитектура, которая не сломается, когда вы вырастете." },
  { icon: Wrench, title: "Улучшим существующий продукт", desc: "Уберем узкие места, ускорим систему и сделаем ее надежной." },
  { icon: ShoppingCart, title: "E-commerce, который продает", desc: "Быстро, стабильно и оптимизировано для реальных пользователей." },
];

const ServicesSection = () => (
  <section id="services" className="py-24 bg-secondary/20">
    <div className="container space-y-16">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-2xl">
        <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">Что мы можем сделать для вас</h2>
        <p className="text-muted-foreground text-lg">От MVP до продакшен-систем — берем на себя сложные части.</p>
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
        <Button variant="hero" size="lg" onClick={() => window.dispatchEvent(new CustomEvent("open-booking-modal"))}>
          Записаться на звонок <ArrowRight size={16} />
        </Button>
      </div>
    </div>
  </section>
);

export default ServicesSection;
