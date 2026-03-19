import { useEffect } from "react";
import { motion } from "framer-motion";

const LeadForm = () => {
  useEffect(() => {
    const w = "https://tally.so/widgets/embed.js";
    if (document.querySelector(`script[src="${w}"]`)) {
      if (typeof (window as any).Tally !== "undefined") {
        (window as any).Tally.loadEmbeds();
      }
      return;
    }
    const s = document.createElement("script");
    s.src = w;
    s.async = true;
    s.onload = () => {
      if (typeof (window as any).Tally !== "undefined") {
        (window as any).Tally.loadEmbeds();
      }
    };
    document.body.appendChild(s);
  }, []);

  return (
    <section id="contact" className="py-24 bg-secondary/20">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto space-y-8"
        >
          <div className="text-center space-y-3">
            <h2 className="font-display text-3xl sm:text-4xl font-bold">Start your project</h2>
            <p className="text-muted-foreground">Tell us what you're building — we'll get back within 24 hours.</p>
          </div>

          <iframe
            data-tally-src="https://tally.so/embed/Me5goA?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
            loading="lazy"
            width="100%"
            height="200"
            frameBorder="0"
            marginHeight={0}
            marginWidth={0}
            title="Build Your Web Service"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default LeadForm;
