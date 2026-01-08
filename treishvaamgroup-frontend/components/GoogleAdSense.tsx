import Script from 'next/script';

const GoogleAdSense = () => {
  const pId = process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID;

  if (!pId) {
    return null;
  }

  return (
    <Script
      async
      src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${pId}`}
      crossOrigin="anonymous"
      strategy="afterInteractive"
    />
  );
};

export default GoogleAdSense;