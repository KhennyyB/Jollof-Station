import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { WhatsAppIcon, ChowdeckIcon } from "@/components/icons";
import logoBanner from "@/assets/logo-banner.png";

const CHOWDECK_URL = "https://store.chowdeck.com/alagomeji/restaurants/jollof-station";
const WHATSAPP_URL = "https://wa.me/2349029757023";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Menu", to: "/menu" },
  { label: "Reviews", to: "/reviews" },
  { label: "Contact", to: "/contact" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 border-b border-border">
      <nav className="container flex items-center justify-between h-16 md:h-20 gap-2">
        <Link to="/" className="flex items-center flex-shrink-0" aria-label="Jollof Station Home">
          <img src={logoBanner} alt="Jollof Station" className="h-12 md:h-14 w-auto" />
        </Link>

        <ul className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <li key={link.to}>
              <Link
                to={link.to}
                onClick={(e) => {
                  if (link.to.includes("#")) {
                    e.preventDefault();
                    const hash = link.to.split("#")[1];
                    if (location.pathname !== "/") {
                      navigate("/");
                      setTimeout(() => {
                        document.getElementById(hash)?.scrollIntoView({ behavior: "smooth" });
                      }, 300);
                    } else {
                      document.getElementById(hash)?.scrollIntoView({ behavior: "smooth" });
                    }
                  }
                }}
                className={`text-sm font-medium transition-colors hover:text-primary whitespace-nowrap ${
                  location.pathname === link.to ? "text-primary" : "text-muted-foreground"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden lg:flex items-center gap-3 flex-shrink-0">
          <Button asChild size="sm" variant="outline" className="gap-1.5">
            <a href={CHOWDECK_URL} target="_blank" rel="noopener noreferrer"><ChowdeckIcon size={16} /> Chowdeck</a>
          </Button>
          <Button asChild size="sm" className="gap-1.5 bg-[#25D366] text-white hover:bg-[#1da851]">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"><WhatsAppIcon size={16} /> Order Now</a>
          </Button>
        </div>

        <button
          className="lg:hidden p-2 text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {mobileOpen && (
        <div className="lg:hidden border-t border-border bg-background animate-fade-in">
          <ul className="flex flex-col p-4 gap-3">
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  onClick={() => setMobileOpen(false)}
                  className={`block py-2 text-sm font-medium transition-colors hover:text-primary ${
                    location.pathname === link.to ? "text-primary" : "text-muted-foreground"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="flex flex-col gap-2 pt-2">
              <Button asChild size="sm" variant="outline" className="gap-1.5">
                <a href={CHOWDECK_URL} target="_blank" rel="noopener noreferrer"><ChowdeckIcon size={16} /> Via Chowdeck</a>
              </Button>
              <Button asChild size="sm" className="gap-1.5 bg-[#25D366] text-white hover:bg-[#1da851]">
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"><WhatsAppIcon size={16} /> Via WhatsApp</a>
              </Button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
