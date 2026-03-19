import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const BookingSection = ({ onBookClick }: { onBookClick: () => void }) => (
  <section id="book" className="py-24">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-2xl mx-auto text-center space-y-8"
      >
        <h2 className="font-display text-3xl sm:text-4xl font-bold">Давайте обсудим ваш проект</h2>
        <p className="text-lg text-muted-foreground">За 30 минут вы поймете:</p>

        <div className="flex flex-col sm:flex-row justify-center gap-6 text-left">
          {["Что нужно строить", "Сколько это займет", "Сколько это стоит"].map((t) => (
            <div key={t} className="flex items-center gap-3">
              <CheckCircle2 size={18} className="text-primary shrink-0" />
              <span className="text-foreground font-medium">{t}</span>
            </div>
          ))}
        </div>

        <p className="text-sm text-muted-foreground">Без обязательств. Только полезные выводы.</p>

        <Button variant="hero" size="xl" onClick={onBookClick}>
          Записаться на звонок <ArrowRight size={18} />
        </Button>

        <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground">
          <Clock size={14} />
          Отвечаем в течение 24 часов
        </div>
      </motion.div>
    </div>
  </section>
);

export default BookingSection;
