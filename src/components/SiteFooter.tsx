import { Button } from "@/components/ui/button";

const SiteFooter = () => (
  <footer className="border-t border-border py-12">
    <div className="container flex flex-col md:flex-row items-center justify-between gap-6">
      <div className="space-y-1 text-center md:text-left">
        <div className="font-display text-lg font-bold">
          Django<span className="text-primary">Labs</span>
        </div>
        <p className="text-sm text-muted-foreground">Built with Django. Designed for scale.</p>
      </div>

      <div className="flex items-center gap-6">
        <a href="#products" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Products</a>
        <a href="#services" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Services</a>
        <a href="#contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Contact</a>
      </div>

      <Button variant="hero" size="default" onClick={() => window.dispatchEvent(new CustomEvent("open-booking-modal"))}>
        Book a call
      </Button>
    </div>
  </footer>
);

export default SiteFooter;
