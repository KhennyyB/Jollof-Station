import Layout from "@/components/Layout";
import { Shield } from "lucide-react";
import { motion } from "framer-motion";
import { useSEO } from "@/hooks/useSEO";
import heroBg from "@/assets/hero-bg.jpg";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" as const },
};

const sections = [
  { title: "Information We Collect", content: "We may collect personal information such as your name, email address, phone number, and delivery address when you place an order or contact us through our website. We also collect non-personal information such as browser type, device information, and usage data through cookies and analytics tools." },
  { title: "How We Use Your Information", content: "Your information is used to process and fulfill orders, respond to inquiries, improve our services, send promotional communications (with your consent), and comply with legal obligations. We do not sell your personal data to third parties." },
  { title: "Cookies", content: "Our website uses cookies to enhance your browsing experience, analyze site traffic, and serve relevant content. You can manage your cookie preferences through the cookie consent banner or your browser settings. See our Cookie Policy for more details." },
  { title: "Third-Party Links", content: "Our site may contain links to third-party services such as Chowdeck for ordering and WhatsApp for communication. We are not responsible for the privacy practices of these external services. We encourage you to review their respective privacy policies." },
  { title: "Your Rights", content: "Under the Nigeria Data Protection Regulation (NDPR) and applicable laws, you have the right to access, correct, delete, or restrict the processing of your personal data. To exercise these rights, contact us at: support@jollofstation.com or call 09024803258." },
  { title: "Data Security", content: "We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction." },
  { title: "Contact", content: "For any questions regarding this policy, contact us at:\nEmail: support@jollofstation.com\nPhone: 09024803258" },
];

const PrivacyPolicy = () => {
  useSEO({
    title: "Privacy Policy",
    description: "Learn how Jollof Station collects, uses, and protects your personal data in accordance with the Nigeria Data Protection Regulation (NDPR).",
    canonical: "/privacy-policy",
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
            <Shield size={14} />
            Your Privacy Matters
          </div>
          <h1 className="text-4xl md:text-6xl font-display font-extrabold text-primary-foreground mb-4">Privacy Policy</h1>
          <p className="text-lg text-primary-foreground/60">Last updated: March 1, 2026</p>
        </motion.div>
      </section>

      {/* Content */}
      <section className="py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.03] via-transparent to-secondary/[0.02]" />
        <div className="container max-w-3xl relative">
          <div className="space-y-12">
            {sections.map((s, i) => (
              <motion.div
                key={i}
                className="group"
                {...fadeUp}
                transition={{ duration: 0.4, delay: i * 0.06 }}
              >
                <h2 className="text-xl font-display font-bold text-foreground mb-3 flex items-center gap-3">
                  <span className="text-primary font-extrabold">{String(i + 1).padStart(2, "0")}.</span>
                  {s.title}
                </h2>
                <p className="text-muted-foreground leading-relaxed whitespace-pre-line pl-10">{s.content}</p>
                {i < sections.length - 1 && <div className="h-px bg-border mt-12" />}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default PrivacyPolicy;
