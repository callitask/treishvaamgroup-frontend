import Script from 'next/script';

const GoogleAdSense = () => {
  const rawId = process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID || '';
  const adsenseId = rawId.startsWith('ca-') ? rawId : `ca-${rawId}`;
  const adsenseSrc = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${adsenseId}`;

  if (!rawId) return null;

  return (
    <Script
      async
      src={adsenseSrc}
      crossOrigin="anonymous"
      strategy="afterInteractive"
    />
  );
};

export default GoogleAdSense;