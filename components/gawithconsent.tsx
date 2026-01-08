
'use client';

import { useEffect, useState } from 'react';
import { GoogleAnalytics } from '@next/third-parties/google';

const GAWithConsent = () => {
  const [canLoadGA, setCanLoadGA] = useState(false);
  const gaId = process.env.NEXT_PUBLIC_GA_ID;

  useEffect(() => {
    // Read consent from localStorage (set by your CookieBanner)
    const consent = localStorage.getItem('cookie-consent');

    // Optional: initialize default consent to denied before user action
    // @ts-ignore
    window.gtag?.('consent', 'default', {
      ad_storage: 'denied',
      analytics_storage: 'denied',
      functionality_storage: 'granted', // adjust to your policy
      personalization_storage: 'denied',
      security_storage: 'granted',
    });

    if (consent === 'granted' && gaId) {
      setCanLoadGA(true);

      // Optional: upgrade consent (if you use explicit consent updates)
      // @ts-ignore
      window.gtag?.('consent', 'update', {
        ad_storage: 'granted',
        analytics_storage: 'granted',
      });
    }
  }, [gaId]);

  if (!canLoadGA || !gaId) return null;

  // This loads GA4 via Next.js third-party helper once consent is granted
  return <GoogleAnalytics gaId={gaId} />;
};

export default GAWithConsent;
