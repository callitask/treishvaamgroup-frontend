'use client';

import Script from 'next/script';

export default function ThirdPartyScripts() {
  const GA_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || 'G-J1X48J18M4';
  const STRICT_PRIVACY = process.env.NEXT_PUBLIC_ENFORCE_STRICT_PRIVACY === 'true';
  const rawId = process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID || '';
  // Ensure ID has 'ca-' prefix if it starts with 'pub-'
  const adsenseId = rawId.startsWith('ca-') ? rawId : (rawId.startsWith('pub-') ? `ca-${rawId}` : rawId);
  const adsenseSrc = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${adsenseId}`;

  return (
    <>
      {/* Google AdSense - Lazy Load to prevent Hydration Errors */}
      {adsenseId && (
        <Script
          id="google-adsense"
          async
          src={adsenseSrc}
          crossOrigin="anonymous"
          strategy="lazyOnload" 
        />
      )}

      {/* Google Analytics 4 - Always-on, backend-independent (Phase 13.3) */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_ID}', { send_page_view: true${STRICT_PRIVACY ? ", anonymize_ip: true" : ""} });
        `}
      </Script>
    </>
  );
}
