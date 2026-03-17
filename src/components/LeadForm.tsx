import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const LeadForm = () => {
  const [form, setForm] = useState({ name: "", email: "", description: "" });
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      toast.success("Request sent! We'll get back within 24 hours.");
      setForm({ name: "", email: "", description: "" });
      setLoading(false);
    }, 800);
  };

  return (
    <section id="contact" className="py-24 bg-secondary/20">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-lg mx-auto space-y-8"
        >
          <div className="text-center space-y-3">
            <h2 className="font-display text-3xl sm:text-4xl font-bold">Start your project</h2>
            <p className="text-muted-foreground">Tell us what you're building — we'll get back within 24 hours.</p>
          </div>

          <form onSubmit={handleSubmit} className="card-elevated rounded-2xl p-8 border border-border/50 space-y-5">
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">Name</label>
              <Input
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="Your name"
                required
                className="bg-background/50 border-border"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">Email</label>
              <Input
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="you@company.com"
                required
                className="bg-background/50 border-border"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">Project description</label>
              <Textarea
                value={form.description}
                onChange={(e) => setForm({ ...form, description: e.target.value })}
                placeholder="Tell us about your project..."
                rows={4}
                required
                className="bg-background/50 border-border resize-none"
              />
            </div>
            <Button variant="hero" size="lg" className="w-full" type="submit" disabled={loading}>
              {loading ? "Sending..." : <>Send request <Send size={16} /></>}
            </Button>
            <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground">
              <Clock size={14} />
              We reply within 24 hours
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default LeadForm;
