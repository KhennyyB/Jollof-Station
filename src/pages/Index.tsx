import { lazy, Suspense } from "react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Flame, Truck, Award } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useCallback, useRef } from "react";
import { WhatsAppIcon, ChowdeckIcon } from "@/components/icons";
import jollofFish from "@/assets/jollof-fish.jpg";
import jollofTurkey from "@/assets/jollof-turkey.jpg";
import jollofBeef from "@/assets/jollof-beef.jpg";
import breakfast from "@/assets/breakfast.jpg";
import breakfast2 from "@/assets/breakfast2.jpg";
import pasta from "@/assets/pasta.jpg";
import spag from "@/assets/spag.jpg";
import heroBg from "@/assets/hero-bg.jpg";

const CHOWDECK_URL = "https://store.chowdeck.com/alagomeji/restaurants/jollof-station";
const WHATSAPP_URL = "https://wa.me/2349029757023";

const heroSlides = [jollofFish, jollofTurkey, jollofBeef];

const menuItems = [
  { name: "Jollof Rice & Chicken", desc: "Smoky party jollof with perfectly grilled chicken.", img: jollofFish },
  { name: "Jollof & Grilled Turkey", desc: "Jollof rice paired with succulent grilled turkey.", img: jollofTurkey },
  { name: "Fluffy Pancakes", desc: "Golden pancakes with fresh fruits and syrup.", img: breakfast },
  { name: "French Toast & Waffles", desc: "Classic French toast with crispy Belgian waffles.", img: breakfast2 },
  { name: "Pasta & Peppered Meat", desc: "Penne pasta with spicy peppered goat meat.", img: pasta },
  { name: "Spaghetti Bolognese", desc: "Spaghetti tossed with rich pepper sauce and chicken.", img: spag },
];

const magicVideos = [
  "/videos/jollof_video.mp4",
  "/videos/jollof_video2.mp4",
  "/videos/breakfast_video.mp4",
  "/videos/breakfast_video2.mp4",
  "/videos/pasta_video.mp4",
  "/videos/pasta_video2.mp4",
];

const steps = [
  { num: 1, title: "Browse", desc: "Check out our delicious menu" },
  { num: 2, title: "Choose", desc: "Pick your favorite dishes" },
  { num: 3, title: "Order", desc: "Via Chowdeck or WhatsApp" },
  { num: 4, title: "Enjoy", desc: "Fresh food at your door!" },
];

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" as const },
};

const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentVideo, setCurrentVideo] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    heroSlides.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentVideo((prev) => {
        let next;
        do { next = Math.floor(Math.random() * magicVideos.length); } while (next === prev && magicVideos.length > 1);
        return next;
      });
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    v.currentTime = 0;
    v.load();
    v.play().catch(() => {});
  }, [currentVideo]);

  return (
    <Layout>
      {/* Hero Carousel */}
      <section className="relative h-[70vh] md:h-[80vh] flex items-center justify-center overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            className="absolute inset-0"
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          >
            <img src={heroSlides[currentSlide]} alt="" className="w-full h-full object-cover" aria-hidden="true" loading="eager" decoding="async" fetchPriority="high" />
            <div className="absolute inset-0 bg-foreground/60" />
          </motion.div>
        </AnimatePresence>
        <div className="relative z-10 container text-center py-20">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-display text-primary-foreground mb-4 tracking-tight">
              Jollof Station
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/80 font-light mb-10 font-sans">
              Jollof wey dey bring joy
            </p>
          </motion.div>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <button
              type="button"
              className="inline-flex items-center justify-center gap-2 h-11 text-base px-8 py-6 rounded-md border border-white/60 bg-transparent text-white font-medium hover:bg-white/20 hover:border-white transition-all duration-200"
              onClick={() => document.getElementById("how-to-order")?.scrollIntoView({ behavior: "smooth" })}
            >
              How to Order
            </button>
            <Button asChild size="lg" className="gap-2 text-base px-8 py-6 bg-primary text-primary-foreground hover:bg-primary/80 hover:shadow-lg hover:shadow-primary/40 transition-all duration-200">
              <a href="/menu">View Menu</a>
            </Button>
          </motion.div>
        </div>

        <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {heroSlides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${i === currentSlide ? "bg-primary w-8" : "bg-primary-foreground/40"}`}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>


      </section>

      {/* Features */}
      <section className="py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/[0.03] to-transparent" />
        <div className="container relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
            {[
              { icon: Flame, title: "Fresh Daily", desc: "Every pot of Jollof is prepared fresh each morning with premium ingredients." },
              { icon: Truck, title: "Fast Delivery", desc: "Get your food delivered hot and fresh, right to your doorstep." },
              { icon: Award, title: "100% Authentic", desc: "Our time-tested recipe brings the true taste of Nigeria to your plate." },
            ].map((f, i) => (
              <motion.div key={f.title} className="text-center group" {...fadeUp} transition={{ duration: 0.6, delay: i * 0.15 }}>
                <motion.div
                  className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors duration-300"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <f.icon className="text-primary" size={32} />
                </motion.div>
                <h3 className="font-display text-2xl mb-3">{f.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed max-w-xs mx-auto font-sans">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <div className="container"><div className="h-px bg-border" /></div>

      {/* Menu Highlights */}
      <section id="menu" className="py-20 md:py-28 scroll-mt-16 md:scroll-mt-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/[0.03] via-transparent to-primary/[0.03]" />
        <div className="container relative">
          <motion.div className="text-center mb-14" {...fadeUp} transition={{ duration: 0.6 }}>
            <h2 className="text-4xl md:text-6xl font-display mb-4">Menu Highlights</h2>
            <p className="text-muted-foreground max-w-xl mx-auto font-sans">
              A taste of West Africa, served with love. Comes in singles and trays.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {menuItems.map((item, i) => (
              <motion.article
                key={item.name}
                className="group overflow-hidden rounded-2xl bg-background border border-border hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500"
                {...fadeUp}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-sans font-bold text-lg mb-2">{item.name}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed font-sans">{item.desc}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* How to Order */}
      <section id="how-to-order" className="py-20 md:py-28 relative overflow-hidden scroll-mt-16 md:scroll-mt-20">
        <div className="absolute inset-0 bg-gradient-to-t from-primary/[0.04] to-secondary/[0.02]" />
        <div className="container relative">
          <motion.div className="text-center mb-16" {...fadeUp} transition={{ duration: 0.5 }}>
            <span className="inline-block px-5 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4 uppercase tracking-wider font-sans">
              Simple & Easy
            </span>
            <h2 className="text-4xl md:text-6xl font-display">How to Order</h2>
            <p className="text-muted-foreground mt-3 max-w-md mx-auto font-sans">Fresh Jollof at your doorstep in just 4 simple steps</p>
          </motion.div>

          <div className="relative">
            <div className="hidden md:block absolute top-10 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-primary/10 via-primary/30 to-primary/10" />
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-6">
              {steps.map((s, i) => (
                <motion.div key={s.num} className="text-center relative group" {...fadeUp} transition={{ duration: 0.5, delay: i * 0.15 }}>
                  <motion.div
                    className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-6 font-sans font-extrabold text-xl shadow-xl shadow-primary/20 relative z-10"
                    whileHover={{ scale: 1.15, y: -4 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {s.num}
                  </motion.div>
                  <h3 className="font-display text-2xl mb-1.5">{s.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed font-sans">{s.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Order CTA Banner */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroBg} alt="" className="w-full h-full object-cover" loading="lazy" aria-hidden="true" />
          <div className="absolute inset-0 bg-foreground/80" />
        </div>
        <div className="relative container text-center">
          <motion.div {...fadeUp} transition={{ duration: 0.6 }}>
            <h2 className="text-4xl md:text-6xl font-display text-primary-foreground mb-6">Craving Jollof?</h2>
            <p className="text-primary-foreground/80 text-lg mb-8 font-sans">Order now and taste the magic</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="gap-2 text-base px-8 bg-primary text-primary-foreground hover:bg-primary/80 hover:shadow-lg hover:shadow-primary/40 transition-all duration-200">
                <a href={CHOWDECK_URL} target="_blank" rel="noopener noreferrer"><ChowdeckIcon size={18} /> Via Chowdeck</a>
              </Button>
              <Button asChild size="lg" className="bg-[#25D366] text-white hover:bg-[#1da851] gap-2 text-base px-8">
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"><WhatsAppIcon size={18} /> Via WhatsApp</a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* See the Magic - Video Slideshow */}
      <section className="py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.02] to-transparent" />
        <div className="container relative">
          <motion.div {...fadeUp} transition={{ duration: 0.6 }}>
            <h2 className="text-4xl md:text-6xl font-display text-center mb-4">See the Magic</h2>
            <p className="text-center text-muted-foreground mb-12 font-sans">See the Magic Behind Every Plate</p>
          </motion.div>
          <motion.div
            className="max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-2xl shadow-foreground/10 border border-border"
            {...fadeUp}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="aspect-video">
              <video
                ref={videoRef}
                src={magicVideos[currentVideo]}
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex justify-center gap-2 py-4 bg-foreground/[0.03]">
              {magicVideos.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentVideo(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${i === currentVideo ? "bg-primary w-6" : "bg-muted-foreground/30"}`}
                  aria-label={`Video ${i + 1}`}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Closing Quote */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-primary/[0.03] to-transparent" />
        <div className="container max-w-3xl text-center relative">
          <motion.div {...fadeUp} transition={{ duration: 0.8 }}>
            <p className="text-xl md:text-2xl text-muted-foreground italic leading-relaxed font-sans mb-4">
              "At the end of the day, I just want the food to be good. Every time you order."
            </p>
            <p className="text-primary font-semibold font-sans">— Chef Coco</p>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
