import logoIcon from "@/assets/logo-icon.png";

const PageFallback = () => (
  <div className="page-loader">
    <div className="loader-spinner">
      <div className="loader-logo">
        <img src={logoIcon} alt="Jollof Station" />
      </div>
    </div>
  </div>
);

export default PageFallback;
