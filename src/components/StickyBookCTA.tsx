import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const StickyBookCTA = ({ onBookClick }: { onBookClick: () => void }) => (
  <div className="fixed bottom-6 right-6 z-50 md:hidden">
    <Button variant="hero" size="lg" className="rounded-full shadow-lg" onClick={onBookClick}>
      Записаться на звонок <ArrowRight size={16} />
    </Button>
  </div>
);

export default StickyBookCTA;
