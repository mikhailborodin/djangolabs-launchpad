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
        <h2 className="font-display text-3xl sm:text-4xl font-bold">About DjangoLabs</h2>
        <p className="text-lg text-muted-foreground leading-relaxed">
          DjangoLabs is a development laboratory focused on building scalable web systems. We care about architecture, performance, and long-term reliability — not just shipping fast, but shipping right.
        </p>
      </motion.div>
    </div>
  </section>
);

export default AboutSection;
