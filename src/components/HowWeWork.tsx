import { motion } from "framer-motion";
import { Phone, PenTool, Code2, Rocket } from "lucide-react";

const steps = [
  { icon: Phone, title: "Короткий звонок", desc: "Понимаем вашу идею и цели" },
  { icon: PenTool, title: "Архитектура и планирование", desc: "Продумываем систему правильно" },
  { icon: Code2, title: "Быстрая разработка", desc: "Вы сразу видите прогресс" },
  { icon: Rocket, title: "Запуск и масштабирование", desc: "Помогаем расти без поломок" },
];

const HowWeWork = () => (
  <section id="process" className="py-24">
    <div className="container space-y-16">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center max-w-2xl mx-auto">
        <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">Простой процесс. Понятный результат.</h2>
        <p className="text-muted-foreground text-lg">Без бесконечных встреч. Без разрастания объема работ. Только исполнение.</p>
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
            <div className="font-display text-xs font-bold text-primary uppercase tracking-widest">Шаг {i + 1}</div>
            <h3 className="font-display text-lg font-bold">{s.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default HowWeWork;
