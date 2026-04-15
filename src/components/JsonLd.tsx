const restaurantSchema = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  "name": "Jollof Station",
  "description": "Authentic Nigerian party jollof rice, breakfast, and pasta. Smoky, rich, and satisfying meals delivered across Lagos.",
  "url": "https://jollofstation.com",
  "telephone": "+2349024803258",
  "email": "support@jollofstation.com",
  "servesCuisine": ["Nigerian", "African", "West African"],
  "priceRange": "₦₦",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Lagos",
    "addressRegion": "Lagos State",
    "addressCountry": "NG"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "6.4698",
    "longitude": "3.5852"
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      "opens": "10:00",
      "closes": "21:00"
    },
  ],
  "hasMenu": "https://jollofstation.com/menu",
  "sameAs": [
    "https://instagram.com/jollofstation",
    "https://x.com/jollofstation_",
    "https://tiktok.com/@jollof.station"
  ],
  "potentialAction": {
    "@type": "OrderAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "https://store.chowdeck.com/alagomeji/restaurants/jollof-station",
      "actionPlatform": ["http://schema.org/DesktopWebPlatform", "http://schema.org/MobileWebPlatform"]
    },
    "deliveryMethod": ["http://purl.org/goodrelations/v1#DeliveryModeDirectDownload"]
  }
};

const JsonLd = () => (
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{ __html: JSON.stringify(restaurantSchema) }}
  />
);

export default JsonLd;
