import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { WhatsAppIcon, ChowdeckIcon } from "@/components/icons";
import { useSEO } from "@/hooks/useSEO";
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

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" as const },
};

const singlePlates = [
  { name: "Mini Meaty Jollof", desc: "Smokey Jollof with beef cuts in it, one piece of Turkey and plantain.", price: "₦9,000" },
  { name: "Maxi Meaty Jollof", desc: "Smokey Jollof with beef cuts in it, two pieces of Turkey and plantain.", price: "₦12,500" },
  { name: "Mini Smokey Jollof", desc: "Smokey Jollof, one piece of turkey and plantain.", price: "₦7,500" },
  { name: "Maxi Smokey Jollof", desc: "Smokey Jollof, two pieces of turkey and plantain.", price: "₦10,500" },
  { name: "Mini Meaty Jollof 2.0", desc: "Smokey Jollof with beef cuts in it, one piece of chicken cut and plantain.", price: "₦8,500" },
  { name: "Maxi Meaty Jollof 2.0", desc: "Smokey Jollof with beef cuts in it, two pieces of chicken cut and plantain.", price: "₦11,500" },
  { name: "Mini Meaty with Fish", desc: "Smokey Jollof with beef cuts in it, one piece of fish and plantain.", price: "₦8,000" },
  { name: "Maxi Meaty with Fish", desc: "Smokey Jollof with beef cuts in it, two pieces of fish and plantain.", price: "₦11,000" },
  { name: "Mini Meaty with Goat Meat", desc: "Smokey Jollof with beef cuts in it, two pieces of peppered goat meat and plantain.", price: "₦7,500" },
  { name: "Maxi Meaty with Goat Meat", desc: "Smokey Jollof with beef cuts in it, two pieces of peppered goat meat and plantain.", price: "₦11,000" },
  { name: "Turkey Penne Pasta", desc: "Penne pasta in spicy turkey sauce.", price: "₦11,500" },
  { name: "Chicken Alfredo Pasta", desc: "Penne pasta in creamy chicken and basil sauce.", price: "₦14,500" },
  { name: "Executive Pack", desc: "Meaty jollof, chicken fried rice, turkey or chicken and fish, plantain, moin-moin or coleslaw.", price: "₦15,000" },
  { name: "Mini Fried Rice Pack", desc: "Chicken fried rice, two pieces of turkey and plantain.", price: "₦9,500" },
  { name: "Maxi Fried Rice Pack", desc: "Chicken fried rice, two pieces of turkey and plantain.", price: "₦12,500" },
];

const bowlsAndTrays = {
  smallTray: [
    { name: "Small Tray (Chicken & Fish)", desc: "Small jollof tray for 4, with 3 pieces of chicken cuts and 2 pieces of fish.", price: "₦40,000" },
    { name: "Small Tray (Turkey)", desc: "Small jollof tray with 5 pieces of Turkey.", price: "₦42,000" },
    { name: "Half & Half Tray (Turkey)", desc: "Half and half tray with 5 pieces of Turkey.", price: "₦45,000" },
  ],
  mediumTray: [
    { name: "Medium Tray Combo 1", desc: "6 Litres tray of meaty jollof, 10 pieces of turkey, 5 pieces of Moin-Moin, and 1.4L of Salad.", price: "₦103,500" },
    { name: "Medium Tray Combo 2", desc: "6 Litres tray of meaty jollof, 8 pieces of turkey.", price: "₦77,500" },
    { name: "Medium Tray Combo 3", desc: "4 Litres tray of meaty jollof, 4 litres tray of fried rice, 7 pieces of chicken, 7 pieces of fish and plantain.", price: "₦122,500" },
  ],
  largeTray: [
    { name: "Large Tray Combo", desc: "6 litres of meaty jollof, 6 litres of chicken and beef fried rice, 12 pieces of turkey, 12 pieces of fish, 10 pieces of moin-moin and 4 litres tray of salad.", price: "₦230,000" },
  ],
  singleBowls: [
    { name: "1.4L Bowl Meaty Jollof", desc: "4 turkeys.", price: "₦28,500" },
    { name: "1.4L Bowl Fried Rice", desc: "4 turkeys.", price: "₦29,500" },
    { name: "2.4L Bowl Jollof Rice", desc: "5 turkeys.", price: "₦35,000" },
    { name: "2.4L Bowl Fried Rice", desc: "5 turkeys.", price: "₦37,000" },
  ],
  officeCombo: [
    { name: "Mini Meaty Jollof + Sides", desc: "Mini meaty jollof + coleslaw or moin-moin and coke.", price: "₦12,500" },
    { name: "Maxi Meaty Jollof + Sides", desc: "Maxi meaty jollof + coleslaw or moin-moin and coke.", price: "₦15,000" },
    { name: "Mini Meaty 2.0 + Sides", desc: "Mini meaty 2.0 + coleslaw or moin-moin and coke.", price: "₦11,000" },
    { name: "Maxi Meaty 2.0 + Sides", desc: "Maxi meaty 2.0 + coleslaw or moin-moin and coke.", price: "₦13,000" },
  ],
  onlyRice: [
    { name: "4L Meaty Jollof", price: "₦32,500" },
    { name: "6L Meaty Jollof", price: "₦45,000" },
    { name: "4L Chicken Fried Rice", price: "₦37,000" },
    { name: "6L Chicken Fried Rice", price: "₦47,000" },
    { name: "10L Meaty Jollof Tray", price: "₦90,000" },
    { name: "10L Chicken Fried Rice", price: "₦95,000" },
    { name: "15L Cooler Meaty Jollof", price: "₦120,000" },
    { name: "15L Cooler Fried Rice", price: "₦125,000" },
  ],
};

const breakfastMenu = {
  singles: [
    { name: "Plain Pancakes Plate", desc: "Plain pancakes, scrambled eggs, sausage and chicken.", price: "₦7,000" },
    { name: "Plain Waffles Plate", desc: "Plain waffles, scrambled eggs, sausage and chicken.", price: "₦7,500" },
    { name: "French Toast Plate", desc: "French toast, scrambled eggs, sausage and chicken.", price: "₦6,000" },
  ],
  spreads: [
    { name: "Breakfast Tray for 5", desc: "Plain pancakes or waffles, scrambled eggs, sausages, chicken, and special home made syrup.", price: "₦34,500" },
    { name: "Blueberry Tray for 5", desc: "Blueberry pancakes or waffles, scrambled eggs, sausages, bacon and chicken.", price: "₦42,500" },
  ],
  extras: [
    { name: "Bacon", price: "₦2,000" },
    { name: "Blueberry Pancakes (stack of 3)", price: "₦4,000" },
    { name: "Plain Pancakes (stack of 3)", price: "₦2,800" },
    { name: "Sausage", price: "₦1,500" },
    { name: "Extra Eggs", price: "₦2,000" },
    { name: "Chicken", price: "₦3,000" },
    { name: "Waffles (stack of 3)", price: "₦4,500" },
  ],
};

const afterParty = {
  rice: [
    { name: "Meaty Jollof", desc: "Small bites and protein infused", price: "₦4,500" },
    { name: "Asun Jollof", desc: "Small bites and protein infused", price: "₦5,000" },
    { name: "Chicken and Beef Fried Rice", desc: "Small bites and protein infused", price: "₦5,000" },
  ],
  pastas: [
    { name: "Tomato Turkey Pasta", price: "₦5,000" },
    { name: "Chicken Alfredo Pasta", price: "₦6,500" },
    { name: "Shrimp Alfredo Pasta", price: "₦7,000" },
  ],
  grills: [
    { name: "Mini Chicken Shawarma", price: "₦3,500" },
    { name: "Chicken and Chips", price: "₦4,000" },
    { name: "Turkey and Chips", price: "₦5,000" },
    { name: "Fish and Chips", price: "₦8,000" },
  ],
};

const mainExtras = [
  { name: "Grilled Turkey", price: "₦4,500" },
  { name: "Grilled Chicken", price: "₦4,000" },
  { name: "Peppered Fish", price: "₦3,500" },
  { name: "Peppered Goatmeat", price: "₦2,500" },
  { name: "Peppered Beef", price: "₦2,000" },
  { name: "Soft Drinks", price: "₦1,000" },
  { name: "Chapman", price: "₦4,500" },
  { name: "Juice", price: "₦3,000" },
];

const specialExtras = [
  { name: "Peppered Snail", price: "₦4,000/piece" },
  { name: "Jumbo Prawns", price: "₦5,500/piece" },
];

type MenuItem = { name: string; desc?: string; price: string };

const MenuItemRow = ({ item }: { item: MenuItem }) => (
  <div className="flex justify-between items-start gap-4 py-3 border-b border-border/50 last:border-0">
    <div className="flex-1">
      <h4 className="font-sans font-semibold text-sm text-foreground">{item.name}</h4>
      {item.desc && <p className="text-xs text-muted-foreground mt-0.5 leading-relaxed">{item.desc}</p>}
    </div>
    <span className="font-sans font-bold text-primary text-sm whitespace-nowrap">{item.price}</span>
  </div>
);


const heroImages = [jollofFish, jollofTurkey, jollofBeef, breakfast, breakfast2, pasta, spag];

const MenuPage = () => {
  useSEO({
    title: "Menu & Prices — Jollof Rice, Breakfast, Pasta & More",
    description: "Browse the full Jollof Station menu: smokey jollof rice, grilled proteins, fluffy pancakes, pasta, trays, and catering options. Prices from ₦6,000.",
    canonical: "/menu",
  });

  const [currentImg, setCurrentImg] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImg((prev) => (prev + 1) % heroImages.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <Layout>
      {/* Hero with image slideshow */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentImg}
            className="absolute inset-0"
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
          >
            <img src={heroImages[currentImg]} alt="" className="w-full h-full object-cover" aria-hidden="true" />
            <div className="absolute inset-0 bg-foreground/60" />
          </motion.div>
        </AnimatePresence>
        <motion.div
          className="relative z-10 container text-center py-24 md:py-32"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.span
            className="inline-block px-5 py-2 rounded-full bg-primary/90 text-primary-foreground text-sm font-semibold mb-6 tracking-wide uppercase"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Our Full Menu
          </motion.span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-extrabold text-primary-foreground mb-4 tracking-tight">
            The Menu
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto leading-relaxed font-light">
            From smokey jollof to fluffy pancakes — there's something for everyone.
          </p>
        </motion.div>
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {heroImages.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentImg(i)}
              className="w-2 h-2 rounded-full bg-primary"
              style={{
                transform: `scaleX(${i === currentImg ? 2.5 : 1})`,
                opacity: i === currentImg ? 1 : 0.4,
                transition: "transform 300ms ease, opacity 300ms ease",
              }}
              aria-label={`Image ${i + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Single Plates */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.06] via-background to-secondary/[0.04]" />
        <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-primary/[0.06] blur-3xl pointer-events-none" />
        <div className="absolute -bottom-20 right-0 w-80 h-80 rounded-full bg-secondary/[0.08] blur-3xl pointer-events-none" />
        <div className="container max-w-5xl relative">
          <motion.div className="text-center mb-14" {...fadeUp} transition={{ duration: 0.5 }}>
            <h2 className="text-4xl md:text-5xl font-display mb-2">Single Plates</h2>
            <div className="w-16 h-1 bg-primary mx-auto rounded-full" />
          </motion.div>
          <div className="rounded-2xl bg-card border border-border/60 shadow-sm p-6 md:p-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-1">
              {singlePlates.map((item) => (
                <MenuItemRow key={item.name} item={item} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Bowls & Trays */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-tl from-primary/[0.07] via-background to-secondary/[0.04]" />
        <div className="absolute top-1/3 -right-40 w-[28rem] h-[28rem] rounded-full bg-primary/[0.07] blur-3xl pointer-events-none" />
        <div className="container max-w-5xl relative">
          <motion.div className="text-center mb-14" {...fadeUp} transition={{ duration: 0.5 }}>
            <h2 className="text-4xl md:text-5xl font-display mb-2">Bowls & Trays</h2>
            <div className="w-16 h-1 bg-primary mx-auto rounded-full" />
          </motion.div>
          <div className="space-y-8">
            {[
              { title: "Small Tray Combos", items: bowlsAndTrays.smallTray, index: 0 },
              { title: "Medium Tray Combos", items: bowlsAndTrays.mediumTray, index: 1 },
              { title: "Large Tray Combo", items: bowlsAndTrays.largeTray, index: 2 },
              { title: "Single Bowls", items: bowlsAndTrays.singleBowls, index: 3 },
              { title: "Combo for Office Orders", items: bowlsAndTrays.officeCombo, index: 4 },
              { title: "Only Rice", items: bowlsAndTrays.onlyRice, index: 5 },
            ].map(({ title, items, index }) => (
              <motion.div key={title} className="rounded-2xl bg-card border border-border/60 shadow-sm p-6 md:p-8" {...fadeUp} transition={{ duration: 0.5, delay: index * 0.08 }}>
                <h3 className="font-display text-2xl md:text-3xl text-primary mb-6">{title}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-1">
                  {items.map((item) => <MenuItemRow key={item.name} item={item} />)}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Breakfast */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/[0.06] via-background to-primary/[0.05]" />
        <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[32rem] h-64 rounded-full bg-primary/[0.05] blur-3xl pointer-events-none" />
        <div className="container max-w-5xl relative">
          <motion.div className="text-center mb-14" {...fadeUp} transition={{ duration: 0.5 }}>
            <h2 className="text-4xl md:text-5xl font-display mb-2">Breakfast</h2>
            <div className="w-16 h-1 bg-primary mx-auto rounded-full" />
          </motion.div>
          <div className="space-y-8">
            {[
              { title: "Singles Plate", items: breakfastMenu.singles, index: 0 },
              { title: "Spreads — Breakfast Tray for 5", items: breakfastMenu.spreads, index: 1 },
              { title: "Breakfast Extras", items: breakfastMenu.extras, index: 2 },
            ].map(({ title, items, index }) => (
              <motion.div key={title} className="rounded-2xl bg-card border border-border/60 shadow-sm p-6 md:p-8" {...fadeUp} transition={{ duration: 0.5, delay: index * 0.1 }}>
                <h3 className="font-display text-2xl md:text-3xl text-primary mb-6">{title}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-1">
                  {items.map((item) => <MenuItemRow key={item.name} item={item} />)}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* After Party */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-tr from-primary/[0.06] via-background to-secondary/[0.05]" />
        <div className="absolute bottom-0 -left-40 w-[28rem] h-[28rem] rounded-full bg-primary/[0.07] blur-3xl pointer-events-none" />
        <div className="container max-w-5xl relative">
          <motion.div className="text-center mb-14" {...fadeUp} transition={{ duration: 0.5 }}>
            <h2 className="text-4xl md:text-5xl font-display mb-2">After Party</h2>
            <div className="w-16 h-1 bg-primary mx-auto rounded-full" />
          </motion.div>
          <div className="space-y-8">
            {[
              { title: "Rice Meals — ₦4,500–₦5,000", items: afterParty.rice, index: 0 },
              { title: "Pastas — ₦5,000–₦7,000", items: afterParty.pastas, index: 1 },
              { title: "Grills — ₦3,500–₦8,000", items: afterParty.grills, index: 2 },
            ].map(({ title, items, index }) => (
              <motion.div key={title} className="rounded-2xl bg-card border border-border/60 shadow-sm p-6 md:p-8" {...fadeUp} transition={{ duration: 0.5, delay: index * 0.1 }}>
                <h3 className="font-display text-2xl md:text-3xl text-primary mb-6">{title}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-1">
                  {items.map((item) => <MenuItemRow key={item.name} item={item} />)}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Extras */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/[0.05] via-background to-secondary/[0.06]" />
        <div className="absolute top-0 right-0 w-72 h-72 rounded-full bg-secondary/[0.08] blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full bg-primary/[0.06] blur-3xl pointer-events-none" />
        <div className="container max-w-5xl relative">
          <motion.div className="text-center mb-14" {...fadeUp} transition={{ duration: 0.5 }}>
            <h2 className="text-4xl md:text-5xl font-display mb-2">Extras</h2>
            <div className="w-16 h-1 bg-primary mx-auto rounded-full" />
          </motion.div>
          <div className="space-y-8">
            <motion.div className="rounded-2xl bg-card border border-border/60 shadow-sm p-6 md:p-8" {...fadeUp} transition={{ duration: 0.5 }}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-1">
                {mainExtras.map((item) => <MenuItemRow key={item.name} item={item} />)}
              </div>
            </motion.div>
            <motion.div className="rounded-2xl bg-card border border-border/60 shadow-sm p-6 md:p-8" {...fadeUp} transition={{ duration: 0.5, delay: 0.1 }}>
              <h3 className="font-display text-xl text-primary mb-4">Available on Request Only</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-1">
                {specialExtras.map((item) => <MenuItemRow key={item.name} item={item} />)}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Order CTA */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroBg} alt="" className="w-full h-full object-cover" loading="lazy" aria-hidden="true" width="1920" height="1080" />
          <div className="absolute inset-0 bg-foreground/80" />
        </div>
        <motion.div className="relative container text-center" {...fadeUp} transition={{ duration: 0.5 }}>
          <h2 className="text-3xl md:text-5xl font-display text-primary-foreground mb-3">Ready to Order?</h2>
          <p className="text-primary-foreground/70 mb-8 text-lg font-sans">Place your order via Chowdeck, WhatsApp, or give us a call</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="gap-2 bg-primary text-primary-foreground hover:bg-primary/80 hover:shadow-lg hover:shadow-primary/40 transition-all duration-200">
              <a href={CHOWDECK_URL} target="_blank" rel="noopener noreferrer"><ChowdeckIcon size={18} /> Via Chowdeck</a>
            </Button>
            <Button asChild size="lg" className="bg-[#25D366] text-white hover:bg-[#1da851] gap-2">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"><WhatsAppIcon size={18} /> Via WhatsApp</a>
            </Button>
            {/* <Button asChild size="lg" variant="outline" className="gap-2 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
              <a href="tel:09024803258"><Phone size={18} /> Call to Order</a>
            </Button> */}
          </div>
        </motion.div>
      </section>
    </Layout>
  );
};

export default MenuPage;
