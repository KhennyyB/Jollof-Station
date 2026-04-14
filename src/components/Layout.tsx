import { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import FloatingOrderButton from "./FloatingOrderButton";
import CookieConsent from "./CookieConsent";
import PageLoader from "./PageLoader";
import ScrollToTopButton from "./ScrollToTop";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen">
      <PageLoader />
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
      <FloatingOrderButton />
      <ScrollToTopButton />
      <CookieConsent />
    </div>
  );
};

export default Layout;
