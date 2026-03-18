import { useEffect, useRef } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface BookingModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const BookingModal = ({ open, onOpenChange }: BookingModalProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const initialized = useRef(false);

  useEffect(() => {
    if (!open) {
      initialized.current = false;
      return;
    }

    // Load embed.js if not already loaded
    const scriptId = "calendlab-embed-js";
    if (!document.getElementById(scriptId)) {
      const s = document.createElement("script");
      s.id = scriptId;
      s.async = true;
      s.src = "https://calendlab.ru/embed.js";
      s.setAttribute("data-base-url", "https://calendlab.ru");
      document.body.appendChild(s);
    }

    // Wait a tick for the script to define CalendLabEmbed, then invoke
    const timer = setTimeout(() => {
      if (initialized.current) return;
      initialized.current = true;

      (window as any).CalendLabEmbed =
        (window as any).CalendLabEmbed ||
        function (...args: any[]) {
          ((window as any).CalendLabEmbed.q =
            (window as any).CalendLabEmbed.q || []).push(args);
        };

      (window as any).CalendLabEmbed("inline", {
        selector: "#calendlab-scheduler",
        slug: "meet-with-mikhail-borodin",
        height: "820px",
      });
    }, 300);

    return () => clearTimeout(timer);
  }, [open]);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl w-[95vw] max-h-[90vh] overflow-y-auto p-0">
        <DialogHeader className="p-6 pb-0">
          <DialogTitle className="font-display text-xl">Book a call</DialogTitle>
        </DialogHeader>
        <div className="px-6 pb-6">
          <div id="calendlab-scheduler" ref={containerRef} style={{ minHeight: 820 }} />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default BookingModal;
