import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const StickyBookCTA = () => (
  <div className="fixed bottom-6 right-6 z-50 md:hidden">
    <Button variant="hero" size="lg" className="rounded-full shadow-lg" asChild>
      <a href="#book">
        Book a call <ArrowRight size={16} />
      </a>
    </Button>
  </div>
);

export default StickyBookCTA;
