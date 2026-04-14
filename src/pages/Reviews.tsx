import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import { ChowdeckIcon, WhatsAppIcon } from "@/components/icons";
import { motion } from "framer-motion";
import HeroSection from "@/components/HeroSection";
import reviewsHeroBg from "@/assets/reviews-hero-bg.jpg";
import heroBg from "@/assets/hero-bg.jpg";
import avatar1 from "@/assets/review-avatar-1.jpg";
import avatar2 from "@/assets/review-avatar-2.jpg";
import avatar3 from "@/assets/review-avatar-3.jpg";
import avatar4 from "@/assets/review-avatar-4.jpg";
import avatar5 from "@/assets/review-avatar-5.jpg";
import avatar6 from "@/assets/review-avatar-6.jpg";
import avatar7 from "@/assets/review-avatar-7.jpg";
import avatar8 from "@/assets/review-avatar-8.jpg";

const WHATSAPP_URL = "https://wa.me/2349029757023";
const CHOWDECK_URL = "https://store.chowdeck.com/alagomeji/restaurants/jollof-station";

const avatarImages = [avatar1, avatar2, avatar3, avatar4, avatar5, avatar6, avatar7, avatar8];

const reviews = [
  { name: "Amaka O.", rating: 5, text: "The best Jollof I've ever had outside my grandmother's kitchen. Absolutely phenomenal!", date: "Feb 12, 2026" },
  { name: "Tunde A.", rating: 5, text: "Fast delivery, perfectly seasoned, and that smoky flavor is unmatched. 10/10!", date: "Jan 28, 2026" },
  { name: "Blessing E.", rating: 4, text: "Really delicious! The portion size was generous. Will definitely be ordering again.", date: "Jan 15, 2026" },
  { name: "Chidi N.", rating: 5, text: "JollofStation never disappoints. Their Suya platter is also amazing.", date: "Dec 20, 2025" },
  { name: "Fatima B.", rating: 4, text: "Great taste, lovely packaging. Delivery was a bit delayed but food was still hot.", date: "Dec 8, 2025" },
  { name: "Kunle D.", rating: 5, text: "Ordered for a party — everyone was asking for the vendor. JollofStation is the real deal!", date: "Nov 30, 2025" },
  { name: "Ngozi I.", rating: 5, text: "The Jollof & Grilled Chicken combo is heavenly. Worth every naira!", date: "Nov 18, 2025" },
  { name: "David M.", rating: 4, text: "Solid food, great service. Would love to see more side options in the future.", date: "Nov 5, 2025" },
];

const avgRating = (reviews.reduce((a, r) => a + r.rating, 0) / reviews.length).toFixed(1);

const Stars = ({ count }: { count: number }) => (
  <div className="flex gap-0.5">
    {Array.from({ length: 5 }).map((_, i) => (
      <Star key={i} size={16} className={i < count ? "fill-secondary text-secondary" : "text-border"} />
    ))}
  </div>
);

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" as const },
};

const Reviews = () => {
  return (
    <Layout>
      <HeroSection
        backgroundImage={reviewsHeroBg}
        badge="Real Customer Reviews"
        title="What Our Customers Say"
        subtitle="Don't just take our word for it — hear from our happy customers"
      >
        <motion.div
          className="inline-flex items-center gap-4 bg-background/90 backdrop-blur-sm rounded-2xl px-8 py-5 mt-8 shadow-2xl"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <span className="text-5xl md:text-6xl font-display font-extrabold text-primary">{avgRating}</span>
          <div className="text-left">
            <Stars count={Math.round(Number(avgRating))} />
            <p className="text-sm text-muted-foreground mt-1.5">Based on {reviews.length} reviews</p>
          </div>
        </motion.div>
      </HeroSection>

      {/* Reviews */}
      <section className="py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.03] via-transparent to-secondary/[0.02]" />
        <div className="container relative">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {reviews.map((r, i) => (
              <motion.article
                key={i}
                className="flex gap-5 items-start group"
                {...fadeUp}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <div className="flex-shrink-0">
                  <img
                    src={avatarImages[i]}
                    alt={r.name}
                    className="w-14 h-14 rounded-full object-cover shadow-lg group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                    width={56}
                    height={56}
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 mb-1">
                    <p className="font-semibold text-sm">{r.name}</p>
                    <Stars count={r.rating} />
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-2">"{r.text}"</p>
                  <p className="text-xs text-muted-foreground/50 font-medium">{r.date}</p>
                </div>
              </motion.article>
            ))}
          </div>

          <motion.div className="text-center mt-14" {...fadeUp} transition={{ duration: 0.5, delay: 0.3 }}>
            <Button asChild variant="outline" size="lg" className="rounded-full gap-2 px-8 border-primary text-primary hover:bg-primary hover:text-white transition-all duration-200">
              <a href="https://google.com/maps" target="_blank" rel="noopener noreferrer">
                See All Reviews on Google ⭐
              </a>
            </Button>
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
          <h2 className="text-3xl md:text-4xl font-display font-extrabold text-primary-foreground mb-3">Join Our Happy Customers</h2>
          <p className="text-primary-foreground/70 mb-8 text-lg">Place your order now</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="gap-2 bg-primary text-primary-foreground hover:bg-primary/80 hover:shadow-lg hover:shadow-primary/40 transition-all duration-200">
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

export default Reviews;
