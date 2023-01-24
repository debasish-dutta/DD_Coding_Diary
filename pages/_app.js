import react, { useEffect, useState } from 'react';
import { GoogleAnalytics } from "nextjs-google-analytics";
import { Layout } from "../components";

import 'tailwindcss/tailwind.css'
import '../styles/globals.scss'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
    {/* <Script strategy="afterInteractive"
    src="https:www.googletagmanager.com/gtag/js?id=G-BP9YN3P6HL" />

<Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-BP9YN3P6HL', {
              page_path: window.location.pathname,
            });
          `,
        }}
      /> */}
      <GoogleAnalytics trackPageViews />

    <Component {...pageProps} />
  </Layout>
  )
}

export default MyApp
