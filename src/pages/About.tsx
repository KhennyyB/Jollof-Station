import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Quote } from "lucide-react";
import { WhatsAppIcon, ChowdeckIcon } from "@/components/icons";
import { motion } from "framer-motion";
import HeroSection from "@/components/HeroSection";
import aboutHeroBg from "@/assets/about-hero-bg.jpg";
import heroBg from "@/assets/hero-bg.jpg";

const CHOWDECK_URL = "https://store.chowdeck.com/alagomeji/restaurants/jollof-station";
const WHATSAPP_URL = "https://wa.me/2349029757023";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" as const },
};

const About = () => {
  return (
    <Layout>
      <HeroSection
        backgroundImage={aboutHeroBg}
        badge="Since 2022 · Lagos, Nigeria"
        title="Our Story"
        subtitle="The heart and soul behind every plate of Jollof"
      />

      {/* Story */}
      <section className="py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.03] via-transparent to-secondary/[0.02]" />
        <div className="container max-w-3xl relative">
          <motion.div className="relative" {...fadeUp} transition={{ duration: 0.6 }}>
            <Quote className="absolute -top-4 -left-4 text-primary/15 w-16 h-16 -rotate-6" />
            <div className="space-y-6 text-muted-foreground text-lg leading-relaxed pl-6 border-l-4 border-primary/20 font-sans">
              <p>Jollof Station started because I genuinely care about how food tastes — especially jollof. It has to be right, no excuses.</p>
              <p>Our jollof is proper Nigerian party jollof — smoky, rich, and satisfying. I've added small twists here and there, but nothing that takes away from what it should be. It still tastes like home, just more consistent and intentional.</p>
              <p>I also try to be mindful of how people eat. Not everyone wants the same thing every time, so there are options depending on your preferences — whether you want something lighter or you're avoiding certain ingredients.</p>
              <p>Beyond jollof, we cover your everyday meals. Breakfast when you need something quick, proper lunches, soups and stews, and catering for events. Whether it's one plate or a full order, the standard doesn't change.</p>
              <p>Over time, we have been able to create different twists to our jollof that have made us the best Jollof in Lagos. We are bringing you our different jollof options paired with your favourite assortments of proteins without missing the smoky party flavours that make up the authentic Naija party jollof taste.</p>
              <p>Our brand focuses mainly on creating experiences with our meals. We are looking forward to creating a unique jollof experience for our customers.</p>
              <p className="text-foreground font-semibold">Since 2022.</p>
            </div>
          </motion.div>
          <motion.div className="mt-12 text-center" {...fadeUp} transition={{ duration: 0.5, delay: 0.2 }}>
            <p className="text-primary font-semibold text-lg font-sans">— Chef Aisha Murphy</p>
            <p className="text-muted-foreground text-sm font-sans">Founder, Jollof Station</p>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroBg} alt="" className="w-full h-full object-cover" loading="lazy" aria-hidden="true" />
          <div className="absolute inset-0 bg-foreground/80" />
        </div>
        <motion.div className="relative container text-center" {...fadeUp} transition={{ duration: 0.5 }}>
          <h2 className="text-4xl md:text-5xl font-display text-primary-foreground mb-3">Ready to Taste the Story?</h2>
          <p className="text-primary-foreground/70 mb-8 text-lg font-sans">Order now and experience authentic Nigerian Jollof</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="gap-2 bg-primary text-primary-foreground hover:bg-primary/90">
              <a href={CHOWDECK_URL} target="_blank" rel="noopener noreferrer"><ChowdeckIcon size={18} /> Via Chowdeck</a>
            </Button>
            <Button asChild size="lg" className="bg-[#25D366] text-white hover:bg-[#1da851] gap-2">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"><WhatsAppIcon size={18} /> Via WhatsApp</a>
            </Button>
          </div>
        </motion.div>
      </section>
    </Layout>
  );
};

export default About;
