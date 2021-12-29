import Script from "next/script";
import React from "react";
import { getGATrackingId } from "./gtag";

export const NextGAScript = () => (
  <>
    <Script
      src={`https://www.googletagmanager.com/gtag/js?id=${getGATrackingId()}`}
    />
    <Script id="google-analytics">
      {`
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${getGATrackingId()}');
      `}
    </Script>
  </>
);
