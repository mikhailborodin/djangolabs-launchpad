import { motion } from "framer-motion";
import { Calendar, FileText, Mic } from "lucide-react";
import { Button } from "@/components/ui/button";

const products = [
  {
    icon: Calendar,
    name: "Calendlab",
    desc: "Инфраструктура записи, которая просто работает — без лишних шагов и пропущенных встреч.",
  },
  {
    icon: FileText,
    name: "Formlab",
    desc: "Собирайте данные, обратную связь и инсайты с помощью гибких онлайн-форм.",
  },
  {
    icon: Mic,
    name: "Vocaro",
    desc: "Инструменты коммуникации, созданные для взаимодействия в реальном времени и ясности.",
  },
];

const ProductsSection = () => (
  <section id="products" className="py-24">
    <div className="container space-y-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-2xl"
      >
        <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">Продукты, которые мы создаем</h2>
        <p className="text-muted-foreground text-lg">Реальные продукты, уже работающие в продакшене. Вот что мы выпустили.</p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6">
        {products.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.12 }}
            className="card-elevated rounded-2xl p-8 border border-border/50 hover:border-primary/30 transition-colors group"
          >
            <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:bg-primary/20 transition-colors">
              <p.icon size={24} />
            </div>
            <h3 className="font-display text-xl font-bold mb-3">{p.name}</h3>
            <p className="text-muted-foreground leading-relaxed">{p.desc}</p>
          </motion.div>
        ))}
      </div>

      <div className="text-center">
        <Button variant="heroOutline" size="lg" asChild>
          <a href="#book">Обсудить идею продукта</a>
        </Button>
      </div>
    </div>
  </section>
);

export default ProductsSection;
