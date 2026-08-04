import Script from "next/script";

export default function GoogleAnalytics() {
  const gaIdCom = process.env.NEXT_PUBLIC_GA_ID_COM;
  const gaIdCoza = process.env.NEXT_PUBLIC_GA_ID_COZA;
  if (!gaIdCom && !gaIdCoza) return null;

  return (
    <Script id="google-analytics" strategy="afterInteractive">
      {`
        (function(){
          var host = window.location.hostname;
          var gaId = host.indexOf('qzenta.co.za') !== -1 ? '${gaIdCoza}' : '${gaIdCom}';
          if (!gaId || gaId === 'undefined') return;
          var s = document.createElement('script');
          s.async = true;
          s.src = 'https://www.googletagmanager.com/gtag/js?id=' + gaId;
          document.head.appendChild(s);
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          window.gtag = gtag;
          gtag('js', new Date());
          gtag('config', gaId);
        })();
      `}
    </Script>
  );
}
