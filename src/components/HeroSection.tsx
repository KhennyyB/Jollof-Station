import { motion } from "framer-motion";
import { ReactNode } from "react";

interface HeroSectionProps {
  backgroundImage: string;
  badge?: string;
  title: string;
  subtitle: string;
  children?: ReactNode;
}

const HeroSection = ({ backgroundImage, badge, title, subtitle, children }: HeroSectionProps) => {
  return (
    <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={backgroundImage}
          alt=""
          className="w-full h-full object-cover"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-foreground/60" />
      </div>
      <motion.div
        className="relative z-10 container text-center py-24 md:py-32"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {badge && (
          <motion.span
            className="inline-block px-5 py-2 rounded-full bg-primary/90 text-primary-foreground text-sm font-semibold mb-6 tracking-wide uppercase"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {badge}
          </motion.span>
        )}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-extrabold text-primary-foreground mb-4 tracking-tight">
          {title}
        </h1>
        <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto leading-relaxed font-light">
          {subtitle}
        </p>
        {children}
      </motion.div>
    </section>
  );
};

export default HeroSection;
