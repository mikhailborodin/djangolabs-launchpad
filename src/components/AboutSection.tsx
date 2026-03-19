import { motion } from "framer-motion";

const AboutSection = () => (
  <section className="py-24">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto text-center space-y-6"
      >
        <h2 className="font-display text-3xl sm:text-4xl font-bold">О DjangoLabs</h2>
        <p className="text-lg text-muted-foreground leading-relaxed">
          DjangoLabs — это лаборатория разработки, сфокусированная на создании масштабируемых веб-систем. Нам важны архитектура, производительность и долгосрочная надежность — не просто выпустить быстро, а сделать правильно.
        </p>
      </motion.div>
    </div>
  </section>
);

export default AboutSection;
