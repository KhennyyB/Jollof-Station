import { useEffect } from "react";

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
  noIndex?: boolean;
}

const SITE_NAME = "Jollof Station";
const BASE_URL = "https://jollofstation.com";
const DEFAULT_OG_IMAGE = `${BASE_URL}/og-image.jpg`;

const setMeta = (name: string, content: string, attr = "name") => {
  let el = document.querySelector(`meta[${attr}="${name}"]`) as HTMLMetaElement | null;
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, name);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
};

const setLink = (rel: string, href: string) => {
  let el = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement | null;
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
};

export const useSEO = ({ title, description, canonical, ogImage, noIndex = false }: SEOProps) => {
  useEffect(() => {
    const fullTitle = `${title} | ${SITE_NAME}`;
    document.title = fullTitle;

    setMeta("description", description);
    setMeta("robots", noIndex ? "noindex, nofollow" : "index, follow");

    // Open Graph
    setMeta("og:title", fullTitle, "property");
    setMeta("og:description", description, "property");
    setMeta("og:type", "website", "property");
    setMeta("og:site_name", SITE_NAME, "property");
    setMeta("og:image", ogImage ?? DEFAULT_OG_IMAGE, "property");
    setMeta("og:url", canonical ? `${BASE_URL}${canonical}` : BASE_URL, "property");

    // Twitter
    setMeta("twitter:title", fullTitle);
    setMeta("twitter:description", description);
    setMeta("twitter:image", ogImage ?? DEFAULT_OG_IMAGE);

    // Canonical
    setLink("canonical", canonical ? `${BASE_URL}${canonical}` : BASE_URL);
  }, [title, description, canonical, ogImage, noIndex]);
};
