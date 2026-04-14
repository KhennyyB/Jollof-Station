import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import logoIcon from "@/assets/logo-icon.png";

const PageLoader = () => {
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 600);
    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <div className={`page-loader ${!loading ? "hidden" : ""}`}>
      <div className="loader-spinner">
        <div className="loader-logo">
          <img src={logoIcon} alt="Jollof Station" />
        </div>
      </div>
    </div>
  );
};

export default PageLoader;
