import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Phone, Mail, Clock } from "lucide-react";
import { WhatsAppIcon } from "@/components/icons";
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
  return (
    <Layout>
      <HeroSection
        backgroundImage={contactHeroBg}
        badge="We'd Love to Hear From You"
        title="Get in Touch"
        subtitle="Have a question, want to place a bulk order, or just say hello?"
      />

      {/* Contact Cards */}
      <section className="py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.03] via-transparent to-secondary/[0.03]" />
        <div className="container relative">

          <motion.div className="text-center mb-14" {...fadeUp} transition={{ duration: 0.5 }}>
            <h2 className="text-3xl md:text-5xl font-display mb-3">How to Reach Us</h2>
            <p className="text-muted-foreground font-sans max-w-md mx-auto">Pick the channel that works best for you — we're always happy to help.</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-20">
            {[
              {
                icon: Phone,
                label: "Call Us",
                value: "09024803258",
                sub: "Mon–Sat, 10 AM – 9 PM",
                href: "tel:09024803258",
              },
              {
                icon: Mail,
                label: "Email Us",
                value: "support@jollofstation.com",
                sub: "We reply within 24 hours",
                href: "mailto:support@jollofstation.com",
              },
              {
                icon: Clock,
                label: "Opening Hours",
                value: "Mon–Sat: 10 AM – 9 PM",
                sub: "Sun: 12 PM – 7 PM",
              },
            ].map((item, i) => (
              <motion.div
                key={item.label}
                className="group bg-background border border-border rounded-2xl p-8 text-center hover:shadow-xl hover:shadow-primary/10 hover:border-primary/20 transition-all duration-300"
                {...fadeUp}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <motion.div
                  className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-5 group-hover:bg-primary/20 transition-colors duration-300"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <item.icon className="text-primary" size={22} />
                </motion.div>
                <h3 className="font-sans font-bold text-base mb-2">{item.label}</h3>
                {item.href ? (
                  <a href={item.href} className="text-sm text-foreground font-semibold hover:text-primary transition-colors font-sans block mb-1">
                    {item.value}
                  </a>
                ) : (
                  <p className="text-sm text-foreground font-semibold font-sans mb-1">{item.value}</p>
                )}
                <p className="text-xs text-muted-foreground font-sans">{item.sub}</p>
              </motion.div>
            ))}
          </div>

          <div className="h-px bg-border mb-20" />

          {/* WhatsApp CTA */}
          <motion.div
            className="max-w-2xl mx-auto text-center mb-20"
            {...fadeUp}
            transition={{ duration: 0.5 }}
          >
            <div className="w-16 h-16 rounded-full bg-[#25D366]/10 flex items-center justify-center mx-auto mb-6">
              <WhatsAppIcon size={30} />
            </div>
            <h2 className="text-3xl md:text-4xl font-display mb-3">Fastest Way to Reach Us</h2>
            <p className="text-muted-foreground font-sans mb-8 max-w-sm mx-auto">
              Message us on WhatsApp for orders, catering enquiries, or any questions — we typically respond in under 5 minutes.
            </p>
            <Button asChild size="lg" className="gap-2 px-10 bg-[#25D366] text-white hover:bg-[#1da851] transition-all duration-200 hover:shadow-lg">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                <WhatsAppIcon size={20} /> Chat on WhatsApp
              </a>
            </Button>
          </motion.div>

          <div className="h-px bg-border mb-20" />

          {/* Social Links */}
          <motion.div className="text-center" {...fadeUp} transition={{ duration: 0.5 }}>
            <h3 className="font-display text-2xl mb-3">Follow Us</h3>
            <p className="text-muted-foreground font-sans text-sm mb-8">Stay up to date with our latest meals and offers</p>
            <div className="flex justify-center flex-wrap gap-6">
              {[
                {
                  href: "https://instagram.com/jollofstation",
                  label: "Instagram",
                  icon: (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                  ),
                },
                {
                  href: "https://x.com/jollofstation_",
                  label: "X (Twitter)",
                  icon: (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                  ),
                },
                {
                  href: "https://tiktok.com/@jollof.station",
                  label: "TikTok",
                  icon: (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M16.6 5.82s.51.5 0 0A4.278 4.278 0 0 1 15.54 3h-3.09v12.4a2.592 2.592 0 0 1-2.59 2.5c-1.42 0-2.6-1.16-2.6-2.6 0-1.72 1.66-3.01 3.37-2.48V9.66c-3.45-.46-6.47 2.22-6.47 5.64 0 3.33 2.76 5.7 5.69 5.7 3.14 0 5.69-2.55 5.69-5.7V9.01a7.35 7.35 0 0 0 4.3 1.38V7.3s-1.88.09-3.24-1.48z"/></svg>
                  ),
                },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 px-5 py-3 rounded-full border border-border text-muted-foreground hover:text-primary hover:border-primary/40 hover:bg-primary/5 transition-all duration-200 font-sans text-sm font-medium"
                >
                  {s.icon}
                  {s.label}
                </a>
              ))}
            </div>
          </motion.div>

        </div>
      </section>
    </Layout>
  );
};

export default Contact;
