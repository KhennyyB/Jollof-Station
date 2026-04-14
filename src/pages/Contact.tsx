import { useState } from "react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Phone, Mail, Clock, Send, ArrowRight } from "lucide-react";
import { WhatsAppIcon } from "@/components/icons";
import { toast } from "sonner";
import { motion } from "framer-motion";
import HeroSection from "@/components/HeroSection";
import contactHeroBg from "@/assets/contact-hero-bg.jpg";

const WHATSAPP_URL = "https://wa.me/2349029757023";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" as const },
};

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "Order Enquiry", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.email.trim()) e.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Invalid email format";
    if (form.phone && !/^[\d\s+\-()]{7,20}$/.test(form.phone)) e.phone = "Invalid phone format";
    if (!form.message.trim()) e.message = "Message is required";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    toast.success("Message sent! We'll get back to you shortly.");
    setForm({ name: "", email: "", phone: "", subject: "Order Enquiry", message: "" });
  };

  return (
    <Layout>
      <HeroSection
        backgroundImage={contactHeroBg}
        badge="We'd Love to Hear From You"
        title="Get in Touch"
        subtitle="Have a question, want to place a bulk order, or just want to say hello?"
      />

      <section className="py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.03] via-transparent to-secondary/[0.03]" />
        <div className="container relative">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-20">
            {[
              {
                icon: Phone,
                label: "Call Us",
                value: "09024803258",
                href: "tel:09024803258",
              },
              {
                icon: Mail,
                label: "Email Us",
                value: "support@jollofstation.com",
                href: "mailto:support@jollofstation.com",
              },
              {
                icon: Clock,
                label: "Opening Hours",
                value: "Mon–Sat: 10:00 AM – 9:00 PM\nSun: 12:00 PM – 7:00 PM",
              },
            ].map((item, i) => (
              <motion.div key={item.label} className="flex items-start gap-4 group" {...fadeUp} transition={{ duration: 0.5, delay: i * 0.1 }}>
                <motion.div
                  className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <item.icon className="text-primary" size={20} />
                </motion.div>
                <div>
                  <h3 className="font-sans font-bold text-base mb-1">{item.label}</h3>
                  {item.href ? (
                    <a href={item.href} className="text-sm text-muted-foreground hover:text-primary transition-colors font-sans">
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-sm text-muted-foreground leading-relaxed whitespace-pre-line font-sans">{item.value}</p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          <div className="h-px bg-border mb-20" />

          {/* Social Links */}
          <motion.div className="text-center mb-20" {...fadeUp} transition={{ duration: 0.5 }}>
            <h3 className="font-display text-2xl mb-6">Follow Us</h3>
            <div className="flex justify-center gap-6">
              <a href="https://instagram.com/jollofstation" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors font-sans text-sm">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                Instagram
              </a>
              <a href="https://x.com/jollofstation_" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors font-sans text-sm">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                X (Twitter)
              </a>
              <a href="https://tiktok.com/Jollof.station" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors font-sans text-sm">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M16.6 5.82s.51.5 0 0A4.278 4.278 0 0 1 15.54 3h-3.09v12.4a2.592 2.592 0 0 1-2.59 2.5c-1.42 0-2.6-1.16-2.6-2.6 0-1.72 1.66-3.01 3.37-2.48V9.66c-3.45-.46-6.47 2.22-6.47 5.64 0 3.33 2.76 5.7 5.69 5.7 3.14 0 5.69-2.55 5.69-5.7V9.01a7.35 7.35 0 0 0 4.3 1.38V7.3s-1.88.09-3.24-1.48z"/></svg>
                TikTok
              </a>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            <motion.div className="lg:col-span-3" {...fadeUp} transition={{ duration: 0.5 }}>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Send className="text-primary" size={18} />
                </div>
                <div>
                  <h2 className="font-sans font-bold text-xl">Send Us a Message</h2>
                  <p className="text-sm text-muted-foreground font-sans">We'll get back to you within 24 hours</p>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium mb-2 font-sans">Full Name *</label>
                    <input type="text" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Your name" className="w-full px-4 py-3 rounded-xl border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all font-sans" maxLength={100} />
                    {errors.name && <p className="text-destructive text-xs mt-1.5 font-sans">{errors.name}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 font-sans">Email Address *</label>
                    <input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="you@example.com" className="w-full px-4 py-3 rounded-xl border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all font-sans" maxLength={255} />
                    {errors.email && <p className="text-destructive text-xs mt-1.5 font-sans">{errors.email}</p>}
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium mb-2 font-sans">Phone Number <span className="text-muted-foreground">(optional)</span></label>
                    <input type="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="+234 800 000 0000" className="w-full px-4 py-3 rounded-xl border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all font-sans" />
                    {errors.phone && <p className="text-destructive text-xs mt-1.5 font-sans">{errors.phone}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 font-sans">Subject</label>
                    <div className="relative">
                      <select title="Subject" value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })} className="w-full appearance-none cursor-pointer px-4 py-3 pr-10 rounded-xl border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all font-sans">
                        <option>Order Enquiry</option>
                        <option>Feedback</option>
                        <option>Catering</option>
                        <option>Partnership</option>
                        <option>Other</option>
                      </select>
                      <svg className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
                    </div>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 font-sans">Message *</label>
                  <textarea value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} rows={5} placeholder="Tell us what's on your mind..." className="w-full px-4 py-3 rounded-xl border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all resize-none font-sans" maxLength={1000} />
                  {errors.message && <p className="text-destructive text-xs mt-1.5 font-sans">{errors.message}</p>}
                </div>
                <Button type="submit" size="lg" className="w-full gap-2 rounded-xl font-sans hover:bg-primary/80 hover:shadow-lg hover:shadow-primary/40 transition-all duration-200">
                  Send Message <ArrowRight size={16} />
                </Button>
              </form>
            </motion.div>

            <motion.div className="lg:col-span-2 space-y-8" {...fadeUp} transition={{ duration: 0.5, delay: 0.2 }}>
              <div className="bg-accent/10 rounded-2xl p-8 text-center border border-accent/20">
                <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <WhatsAppIcon size={28} />
                </div>
                <h3 className="font-sans font-bold text-lg mb-2">Prefer WhatsApp?</h3>
                <p className="text-sm text-muted-foreground mb-5 font-sans">Get a quicker response by chatting with us directly</p>
                <Button asChild size="lg" className="w-full gap-2 rounded-xl bg-[#25D366] text-white hover:bg-[#1da851]">
                  <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                    <WhatsAppIcon size={18} /> Chat on WhatsApp
                  </a>
                </Button>
              </div>

              <div>
                <h3 className="font-sans font-bold text-base mb-4">Quick Response Times</h3>
                <div className="space-y-3">
                  {[
                    { label: "WhatsApp", time: "Under 5 minutes", dot: "bg-primary" },
                    { label: "Phone", time: "Instant during hours", dot: "bg-secondary" },
                    { label: "Email / Form", time: "Within 24 hours", dot: "bg-muted-foreground" },
                  ].map((item) => (
                    <div key={item.label} className="flex items-center justify-between text-sm font-sans">
                      <div className="flex items-center gap-2">
                        <div className={`w-2 h-2 rounded-full ${item.dot}`} />
                        <span className="text-muted-foreground">{item.label}</span>
                      </div>
                      <span className="font-medium">{item.time}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
