import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const BookingSection = () => (
  <section id="book" className="py-24">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-2xl mx-auto text-center space-y-8"
      >
        <h2 className="font-display text-3xl sm:text-4xl font-bold">Let's talk about your project</h2>
        <p className="text-lg text-muted-foreground">In 30 minutes, you'll get clarity on:</p>

        <div className="flex flex-col sm:flex-row justify-center gap-6 text-left">
          {["What to build", "How long it takes", "How much it costs"].map((t) => (
            <div key={t} className="flex items-center gap-3">
              <CheckCircle2 size={18} className="text-primary shrink-0" />
              <span className="text-foreground font-medium">{t}</span>
            </div>
          ))}
        </div>

        <p className="text-sm text-muted-foreground">No commitment. Just useful insights.</p>

        <Button variant="hero" size="xl" asChild>
          <a href="#book">
            Book a call <ArrowRight size={18} />
          </a>
        </Button>

        <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground">
          <Clock size={14} />
          We reply within 24 hours
        </div>
      </motion.div>
    </div>
  </section>
);

export default BookingSection;
