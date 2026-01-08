
// app/components/google-consent.tsx
"use client";

import Script from "next/script";

export default function GoogleConsent() {
  // Read consent from localStorage (set by your cookie banner)
  const consent =
    typeof window !== "undefined"
      ? localStorage.getItem("cookie-consent")
      : null;

  if (consent !== "granted") return null; // Don't load GA unless accepted

  return (
    <>
      {/* Load GA library */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-RS0RCJV9BM"
        strategy="afterInteractive"
      />
      {/* Initialize GA */}
      <Script id="ga-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-RS0RCJV9BM');
        `}
      </Script>
    </>
  );
}
