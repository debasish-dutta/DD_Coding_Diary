import react, { useEffect, useState } from 'react';
import { GoogleAnalytics } from "nextjs-google-analytics";
import { Layout } from "../components";
import {DefaultSeo} from 'next-seo';
import TagManager from "react-gtm-module"

import 'tailwindcss/tailwind.css'
import '../styles/globals.scss'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false
const tagManagerArgs = {
  id:"GTM-PDN46MZ",
}
function MyApp({ Component, pageProps }) {
  useEffect(() => {
    TagManager.initialize(tagManagerArgs)
  }, [])
  
  return (
    <Layout>
      <DefaultSeo
                title="DD Coding Diary"
                description="A personal log of my journey of coding and tech adventures."
                openGraph={{
                    type: 'website',
                    locale: 'en_IE',
                    url: 'https://www.ddcodingdiary.com/',
                    siteName: 'ddcodingdiary',
                }}
                twitter={{
                    handle: '@ddmasterdon',
                    site: '@ddcodingdiary',
                    cardType: 'summary_large_image',
                }}
                additionalMetaTags={[{
                  property: 'dc:creator',
                  content: 'Debasish Dutta'
                }, {
                  name: 'ddcodingdiary',
                  content: 'A personal log of my journey of coding and tech adventures.'
                }, {
                  httpEquiv: 'x-ua-compatible',
                  content: 'IE=edge; chrome=1'
                }]}
                additionalLinkTags={[
                  {
                    rel: 'icon',
                    href: '/dd_logo_bg.ico',
                  },
                  {
                    rel: 'apple-touch-icon',
                    href: '/dd-logo-96x96.png',
                    sizes: '96x96'
                  },
                  {
                    rel: 'manifest',
                    href: '/manifest.json'
                  }
                ]}
            />
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
      <GoogleAnalytics measurmentId="G-BP9YN3P6HL" trackPageViews />

    <Component {...pageProps} />
  </Layout>
  )
}

export default MyApp
