import { useEffect } from "react";

interface SEOHeadProps {
  title: string;
  description: string;
  keywords?: string;
  canonicalUrl?: string;
  ogImage?: string;
}

export default function SEOHead({
  title,
  description,
  keywords,
  canonicalUrl,
  ogImage = "https://images.unsplash.com/photo-1589829545856-d10d557cf95f"
}: SEOHeadProps) {
  useEffect(() => {
    // Update document title
    document.title = `${title} | OurLawServices`;

    // Update or create meta tags
    const updateMeta = (name: string, content: string, property = false) => {
      const selector = property ? `meta[property="${name}"]` : `meta[name="${name}"]`;
      let meta = document.querySelector(selector) as HTMLMetaElement;
      
      if (!meta) {
        meta = document.createElement("meta");
        if (property) {
          meta.setAttribute("property", name);
        } else {
          meta.setAttribute("name", name);
        }
        document.head.appendChild(meta);
      }
      
      meta.setAttribute("content", content);
    };

    // Basic meta tags
    updateMeta("description", description);
    if (keywords) {
      updateMeta("keywords", keywords);
    }

    // Open Graph tags
    updateMeta("og:title", `${title} | OurLawServices`, true);
    updateMeta("og:description", description, true);
    updateMeta("og:type", "website", true);
    updateMeta("og:image", ogImage, true);
    
    if (canonicalUrl) {
      updateMeta("og:url", canonicalUrl, true);
      
      // Canonical link
      let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
      if (!canonical) {
        canonical = document.createElement("link");
        canonical.setAttribute("rel", "canonical");
        document.head.appendChild(canonical);
      }
      canonical.setAttribute("href", canonicalUrl);
    }

    // Twitter Card tags
    updateMeta("twitter:card", "summary_large_image");
    updateMeta("twitter:title", `${title} | OurLawServices`);
    updateMeta("twitter:description", description);
    updateMeta("twitter:image", ogImage);

    // Structured data for local business
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "LegalService",
      "name": "OurLawServices",
      "description": description,
      "url": canonicalUrl || window.location.href,
      "telephone": "+1-555-LAW-FIRM",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "123 Legal District",
        "addressLocality": "Toronto",
        "addressRegion": "ON",
        "postalCode": "M5H 2N2",
        "addressCountry": "CA"
      },
      "sameAs": [
        "https://www.facebook.com/ourlawservices",
        "https://www.twitter.com/ourlawservices",
        "https://www.linkedin.com/company/ourlawservices"
      ]
    };

    let script = document.querySelector('script[type="application/ld+json"]');
    if (!script) {
      script = document.createElement("script");
      script.setAttribute("type", "application/ld+json");
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(structuredData);

  }, [title, description, keywords, canonicalUrl, ogImage]);

  return null;
}
