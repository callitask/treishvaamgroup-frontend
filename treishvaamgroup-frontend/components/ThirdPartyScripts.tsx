'use client';

import Script from 'next/script';

export default function ThirdPartyScripts() {
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

      {/* Google Analytics - After Interactive is fine for GA */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-J1X48J18M4"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-J1X48J18M4');
        `}
      </Script>
    </>
  );
}