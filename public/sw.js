if(!self.define){let e,s={};const c=(c,a)=>(c=new URL(c+".js",a).href,s[c]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=c,e.onload=s,document.head.appendChild(e)}else e=c,importScripts(c),s()})).then((()=>{let e=s[c];if(!e)throw new Error(`Module ${c} didn’t register its module`);return e})));self.define=(a,n)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(s[i])return;let t={};const d=e=>c(e,i),r={module:{uri:i},exports:t,require:d};s[i]=Promise.all(a.map((e=>r[e]||d(e)))).then((e=>(n(...e),t)))}}define(["./workbox-bcb22894"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/DD’s_Coding_Diary.svg",revision:"e7939c0994aea7236dd5eb386cb59812"},{url:"/_next/static/2Z1WAf3PrPo1dsEJsnd_w/_buildManifest.js",revision:"bd5af8a54f43c8a08285fe96c31c4c34"},{url:"/_next/static/2Z1WAf3PrPo1dsEJsnd_w/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/651.a450148bd7530500.js",revision:"a450148bd7530500"},{url:"/_next/static/chunks/741.c006de90a5009785.js",revision:"c006de90a5009785"},{url:"/_next/static/chunks/framework-b3802df6cb251587.js",revision:"b3802df6cb251587"},{url:"/_next/static/chunks/main-90ef4c142dd74d63.js",revision:"90ef4c142dd74d63"},{url:"/_next/static/chunks/pages/404-d8a104edf4c6b831.js",revision:"d8a104edf4c6b831"},{url:"/_next/static/chunks/pages/_app-1c77096cd3b6d381.js",revision:"1c77096cd3b6d381"},{url:"/_next/static/chunks/pages/_error-fbbaefc9451c82c2.js",revision:"fbbaefc9451c82c2"},{url:"/_next/static/chunks/pages/about-c2e8d330d6d37613.js",revision:"c2e8d330d6d37613"},{url:"/_next/static/chunks/pages/blog-4ddf0021801879b4.js",revision:"4ddf0021801879b4"},{url:"/_next/static/chunks/pages/blog/%5Bslug%5D-f2d14cca05053f78.js",revision:"f2d14cca05053f78"},{url:"/_next/static/chunks/pages/category-124e5de52c5a9df4.js",revision:"124e5de52c5a9df4"},{url:"/_next/static/chunks/pages/category/%5Bslug%5D-85b8978927f5a02a.js",revision:"85b8978927f5a02a"},{url:"/_next/static/chunks/pages/contact-4bb1716887513fcd.js",revision:"4bb1716887513fcd"},{url:"/_next/static/chunks/pages/index-6d1310901b90b2c6.js",revision:"6d1310901b90b2c6"},{url:"/_next/static/chunks/pages/podcast-dd5f6cc72a6e7f20.js",revision:"dd5f6cc72a6e7f20"},{url:"/_next/static/chunks/pages/privacy-a151ad15086111ff.js",revision:"a151ad15086111ff"},{url:"/_next/static/chunks/pages/terms-f5e32bfe76cc3881.js",revision:"f5e32bfe76cc3881"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-13b9c1853c2f03db.js",revision:"13b9c1853c2f03db"},{url:"/_next/static/css/aa50f70859cc1337.css",revision:"aa50f70859cc1337"},{url:"/_next/static/media/dd1.2d22a76a.jpg",revision:"2d22a76a"},{url:"/dd-logo-128x128.png",revision:"59bb6b80bb4caf1361e8f855aa06ec1e"},{url:"/dd-logo-144x144.png",revision:"4dfd098a2ba89ec99ba47e0451e680f1"},{url:"/dd-logo-152x152.png",revision:"08e865c3f42a7c0744196acee006f307"},{url:"/dd-logo-192x192.png",revision:"423452398df67adb2d8ae9654cd6c11a"},{url:"/dd-logo-384x384.png",revision:"579563d3f6387c155e5f5a9a2cc0eb60"},{url:"/dd-logo-48x48.png",revision:"3bc96d2822b89db3b2e4cb603d1d9b3a"},{url:"/dd-logo-512x512.png",revision:"ac5f5923934c4bc8f1f7f665c1e52b04"},{url:"/dd-logo-72x72.png",revision:"4ce882fee9822069e07a584ef04afed4"},{url:"/dd-logo-96x96.png",revision:"5ff3b804efab783e9a439b2591f6b185"},{url:"/dd1.jpg",revision:"46dbb3719ad47ad311ca18e36a2ea394"},{url:"/dd_ll.jpeg",revision:"114f4878ff23ad77569b12a1de0b507e"},{url:"/dd_logo.svg",revision:"59132fd9baac655ec4a434f8cb48fe29"},{url:"/dd_logo_bg.ico",revision:"94cf2f6acfc608fc5ed30741b1b01734"},{url:"/dd_p.jpeg",revision:"02084e99cd5d230ddf785eff24f63260"},{url:"/fof.jpg",revision:"a70fca37b9626ac9a6ee5559dd72922d"},{url:"/manifest.json",revision:"96ef842efc5cdd1f0912499419c5608e"},{url:"/robots.txt",revision:"e80051ae8007606585d1db7a5bd2430c"},{url:"/rss/feed.atom",revision:"7d733b6276e319319e7905e9d17806b4"},{url:"/rss/feed.json",revision:"e78473941e3d5a0fcbc3e535432cb39e"},{url:"/rss/feed.xml",revision:"6f4be7882d155ae39a3f969bac319244"},{url:"/sitemap-0.xml",revision:"fac6f66d0cbc4404cfd81f43a23c85c9"},{url:"/sitemap.xml",revision:"f00e7deb156997617d8f513569ca8b82"},{url:"/soon.jpg",revision:"45a40bee0e6e6f51a6878f6c209c61c7"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:c,state:a})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));