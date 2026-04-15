import Layout from "@/components/Layout";
import { Cookie } from "lucide-react";
import { motion } from "framer-motion";
import { useSEO } from "@/hooks/useSEO";
import heroBg from "@/assets/hero-bg.jpg";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" as const },
};

const CookiePolicy = () => {
  useSEO({
    title: "Cookie Policy",
    description: "Understand how Jollof Station uses cookies to improve your browsing experience, analyse traffic, and serve relevant content.",
    canonical: "/cookie-policy",
  });

  return (
    <Layout>
      {/* Hero with background image */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroBg} alt="" className="w-full h-full object-cover" aria-hidden="true" />
          <div className="absolute inset-0 bg-foreground/70" />
        </div>
        <motion.div
          className="relative container text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-primary/20 text-primary-foreground text-sm font-semibold mb-6 uppercase tracking-wider">
            <Cookie size={14} />
            Transparency First
          </div>
          <h1 className="text-4xl md:text-6xl font-display font-extrabold text-primary-foreground mb-4">Cookie Policy</h1>
          <p className="text-lg text-primary-foreground/60">Last updated: March 1, 2026</p>
        </motion.div>
      </section>

      {/* Content */}
      <section className="py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/[0.03] via-transparent to-primary/[0.02]" />
        <div className="container max-w-3xl relative">
          <div className="space-y-12">
            <motion.div {...fadeUp} transition={{ duration: 0.4 }}>
              <h2 className="text-xl font-display font-bold text-foreground mb-3 flex items-center gap-3">
                <span className="text-primary font-extrabold">01.</span> What Are Cookies?
              </h2>
              <p className="text-muted-foreground leading-relaxed pl-10">
                Cookies are small text files stored on your device when you visit a website. They help the site remember your preferences and improve your experience.
              </p>
              <div className="h-px bg-border mt-12" />
            </motion.div>

            <motion.div {...fadeUp} transition={{ duration: 0.4, delay: 0.06 }}>
              <h2 className="text-xl font-display font-bold text-foreground mb-4 flex items-center gap-3">
                <span className="text-primary font-extrabold">02.</span> Types of Cookies We Use
              </h2>
              <div className="pl-10 space-y-4">
                {[
                  { name: "Essential Cookies", desc: "Required for the website to function. These cannot be disabled.", dot: "bg-accent" },
                  { name: "Analytics Cookies", desc: "Help us understand how visitors interact with our site. These are optional.", dot: "bg-primary" },
                  { name: "Marketing Cookies", desc: "Used to deliver relevant advertisements and track campaign performance.", dot: "bg-secondary" },
                ].map((cookie) => (
                  <div key={cookie.name} className="flex items-start gap-3">
                    <div className={`w-2.5 h-2.5 rounded-full ${cookie.dot} shrink-0 mt-1.5`} />
                    <div>
                      <p className="font-semibold text-sm text-foreground">{cookie.name}</p>
                      <p className="text-sm text-muted-foreground leading-relaxed mt-0.5">{cookie.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="h-px bg-border mt-12" />
            </motion.div>

            <motion.div {...fadeUp} transition={{ duration: 0.4, delay: 0.12 }}>
              <h2 className="text-xl font-display font-bold text-foreground mb-3 flex items-center gap-3">
                <span className="text-primary font-extrabold">03.</span> Managing Cookies
              </h2>
              <p className="text-muted-foreground leading-relaxed pl-10">
                You can manage your cookie preferences using the consent banner that appears on your first visit. You can also clear cookies through your browser settings at any time. Note that disabling certain cookies may affect your browsing experience.
              </p>
              <div className="h-px bg-border mt-12" />
            </motion.div>

            <motion.div {...fadeUp} transition={{ duration: 0.4, delay: 0.18 }}>
              <h2 className="text-xl font-display font-bold text-foreground mb-3 flex items-center gap-3">
                <span className="text-primary font-extrabold">04.</span> Third-Party Cookies
              </h2>
              <p className="text-muted-foreground leading-relaxed pl-10">
                Our site may include cookies from third-party services including Chowdeck (ordering platform), WhatsApp (communication), and Google Analytics (website analytics). Each service has its own cookie and privacy policies.
              </p>
              <div className="h-px bg-border mt-12" />
            </motion.div>

            <motion.div {...fadeUp} transition={{ duration: 0.4, delay: 0.24 }}>
              <h2 className="text-xl font-display font-bold text-foreground mb-3 flex items-center gap-3">
                <span className="text-primary font-extrabold">05.</span> Contact
              </h2>
              <p className="text-muted-foreground leading-relaxed pl-10">
                For questions about our use of cookies, contact us at: <strong>support@jollofstation.com</strong> or call <strong>09024803258</strong>.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CookiePolicy;
