import { Link } from "react-router-dom";
import logoBanner from "@/assets/logo-banner.png";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8">
          {/* Brand */}
          <div className="md:col-span-4">
            <img src={logoBanner} alt="Jollof Station" className="h-14 md:h-16 w-auto mb-5 brightness-0 invert" />
            <p className="text-sm opacity-60 leading-relaxed font-sans max-w-xs">
              Jollof wey dey bring joy.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-2">
            <h4 className="font-display text-lg mb-5 opacity-90">Quick Links</h4>
            <ul className="space-y-3 text-sm opacity-60 font-sans">
              <li><Link to="/" className="hover:opacity-100 hover:text-primary transition-all duration-200">Home</Link></li>
              <li><Link to="/about" className="hover:opacity-100 hover:text-primary transition-all duration-200">About</Link></li>
              <li><Link to="/menu" className="hover:opacity-100 hover:text-primary transition-all duration-200">Menu</Link></li>
              <li><Link to="/reviews" className="hover:opacity-100 hover:text-primary transition-all duration-200">Reviews</Link></li>
              <li><Link to="/contact" className="hover:opacity-100 hover:text-primary transition-all duration-200">Contact</Link></li>
            </ul>
          </div>

          {/* Order & Legal */}
          <div className="md:col-span-3">
            <h4 className="font-display text-lg mb-5 opacity-90">Place Orders</h4>
            <ul className="space-y-3 text-sm opacity-60 font-sans">
              <li>
                <a href="https://store.chowdeck.com/alagomeji/restaurants/jollof-station" target="_blank" rel="noopener noreferrer" className="hover:opacity-100 hover:text-primary transition-all duration-200">
                  Via Chowdeck
                </a>
              </li>
              <li>
                <a href="https://wa.me/2349029757023" target="_blank" rel="noopener noreferrer" className="hover:opacity-100 hover:text-primary transition-all duration-200">
                  Via WhatsApp
                </a>
              </li>
            </ul>

            <h4 className="font-display text-lg mt-8 mb-5 opacity-90">Legal</h4>
            <ul className="space-y-3 text-sm opacity-60 font-sans">
              <li><Link to="/privacy-policy" className="hover:opacity-100 hover:text-primary transition-all duration-200">Privacy Policy</Link></li>
              <li><Link to="/cookie-policy" className="hover:opacity-100 hover:text-primary transition-all duration-200">Cookie Policy</Link></li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div className="md:col-span-3">
            <h4 className="font-display text-lg mb-5 opacity-90">Contact Us</h4>
            <div className="space-y-3 text-sm font-sans mb-8">
              <a href="mailto:support@jollofstation.com" className="flex items-center gap-2 opacity-60 hover:opacity-100 hover:text-primary transition-all duration-200">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                support@jollofstation.com
              </a>
              <a href="tel:09024803258" className="flex items-center gap-2 opacity-60 hover:opacity-100 hover:text-primary transition-all duration-200">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                09024803258
              </a>
            </div>

            <h4 className="font-display text-lg mb-5 opacity-90">Follow Us</h4>
            <div className="flex gap-4">
              <a href="https://instagram.com/jollofstation" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              </a>
              <a href="https://x.com/jollofstation_" target="_blank" rel="noopener noreferrer" aria-label="X" className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
              <a href="https://tiktok.com/@jollof.station" target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M16.6 5.82s.51.5 0 0A4.278 4.278 0 0 1 15.54 3h-3.09v12.4a2.592 2.592 0 0 1-2.59 2.5c-1.42 0-2.6-1.16-2.6-2.6 0-1.72 1.66-3.01 3.37-2.48V9.66c-3.45-.46-6.47 2.22-6.47 5.64 0 3.33 2.76 5.7 5.69 5.7 3.14 0 5.69-2.55 5.69-5.7V9.01a7.35 7.35 0 0 0 4.3 1.38V7.3s-1.88.09-3.24-1.48z"/></svg>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-background/10 mt-14 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm opacity-40 font-sans">
          <p>© {new Date().getFullYear()} Jollof Station. All rights reserved.</p>
          <p className="italic">"Jollof wey dey bring joy"</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
