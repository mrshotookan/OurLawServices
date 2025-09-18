declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}

export function initGA() {
  const measurementId = import.meta.env.VITE_GA_MEASUREMENT_ID;
  
  if (!measurementId) {
    console.warn('Google Analytics measurement ID not found');
    return;
  }

  // Load Google Analytics script
  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
  document.head.appendChild(script);

  // Initialize gtag
  window.gtag = window.gtag || function(...args: any[]) {
    (window.gtag as any).q = (window.gtag as any).q || [];
    (window.gtag as any).q.push(args);
  };

  window.gtag('js', new Date());
  window.gtag('config', measurementId);
}

export function trackEvent(action: string, eventParams?: Record<string, any>) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, eventParams);
  }
}

export function trackPageView(pagePath: string) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', import.meta.env.VITE_GA_MEASUREMENT_ID, {
      page_path: pagePath,
    });
  }
}