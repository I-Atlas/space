if(!self.define){let e,s={};const i=(i,a)=>(i=new URL(i+".js",a).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(a,n)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(s[c])return;let t={};const r=e=>i(e,c),o={module:{uri:c},exports:t,require:r};s[c]=Promise.all(a.map((e=>o[e]||r(e)))).then((e=>(n(...e),t)))}}define(["./workbox-1846d813"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/chunks/252f366e-67770f53f6332e81.js",revision:"gdnISW2E4gMU4Tgk9vlfw"},{url:"/_next/static/chunks/286-f37dee79ee7e8fcb.js",revision:"gdnISW2E4gMU4Tgk9vlfw"},{url:"/_next/static/chunks/300-e7625100c24147bf.js",revision:"gdnISW2E4gMU4Tgk9vlfw"},{url:"/_next/static/chunks/302-926db2a16cd6d8cd.js",revision:"gdnISW2E4gMU4Tgk9vlfw"},{url:"/_next/static/chunks/641-3fc7c480ee951cec.js",revision:"gdnISW2E4gMU4Tgk9vlfw"},{url:"/_next/static/chunks/766.b6cdbb7b6266517d.js",revision:"gdnISW2E4gMU4Tgk9vlfw"},{url:"/_next/static/chunks/78e521c3-c60a3968b7ac6a65.js",revision:"gdnISW2E4gMU4Tgk9vlfw"},{url:"/_next/static/chunks/893-e4742e16b28d2227.js",revision:"gdnISW2E4gMU4Tgk9vlfw"},{url:"/_next/static/chunks/framework-beb51d85c0b60541.js",revision:"gdnISW2E4gMU4Tgk9vlfw"},{url:"/_next/static/chunks/main-3d413a9e2ec8014a.js",revision:"gdnISW2E4gMU4Tgk9vlfw"},{url:"/_next/static/chunks/pages/_app-f685271a3302798a.js",revision:"gdnISW2E4gMU4Tgk9vlfw"},{url:"/_next/static/chunks/pages/_error-d742f979193aeae4.js",revision:"gdnISW2E4gMU4Tgk9vlfw"},{url:"/_next/static/chunks/pages/about-dee445ae4607daff.js",revision:"gdnISW2E4gMU4Tgk9vlfw"},{url:"/_next/static/chunks/pages/achievements-8a2909e8a0755df6.js",revision:"gdnISW2E4gMU4Tgk9vlfw"},{url:"/_next/static/chunks/pages/index-244c4dd27be8a14b.js",revision:"gdnISW2E4gMU4Tgk9vlfw"},{url:"/_next/static/chunks/pages/open-source-4acbcec10e056c02.js",revision:"gdnISW2E4gMU4Tgk9vlfw"},{url:"/_next/static/chunks/pages/tech-stack-8ed173abfd7384bf.js",revision:"gdnISW2E4gMU4Tgk9vlfw"},{url:"/_next/static/chunks/polyfills-5cd94c89d3acac5f.js",revision:"gdnISW2E4gMU4Tgk9vlfw"},{url:"/_next/static/chunks/webpack-4b107fa79f019bd4.js",revision:"gdnISW2E4gMU4Tgk9vlfw"},{url:"/_next/static/gdnISW2E4gMU4Tgk9vlfw/_buildManifest.js",revision:"gdnISW2E4gMU4Tgk9vlfw"},{url:"/_next/static/gdnISW2E4gMU4Tgk9vlfw/_middlewareManifest.js",revision:"gdnISW2E4gMU4Tgk9vlfw"},{url:"/_next/static/gdnISW2E4gMU4Tgk9vlfw/_ssgManifest.js",revision:"gdnISW2E4gMU4Tgk9vlfw"},{url:"/assets/audios/lightswitch.mp3",revision:"ea8d4897f4b0f43fcb573c48bce7dcf5"},{url:"/assets/fonts/Cascadia.ttf",revision:"be4424ae2b9025062ed0ef751ed23afb"},{url:"/assets/fonts/Cascadia.woff",revision:"d597ac181132fca1cb74e1f1c2d751ee"},{url:"/assets/fonts/Cascadia.woff2",revision:"4d6fd9d47f852d8a55bfc8bbf167bf52"},{url:"/assets/fonts/FG_Virgil.ttf",revision:"b9a5c1d34d998a297d51b372b464f2b7"},{url:"/assets/fonts/FG_Virgil.woff",revision:"ef20a3d899f4fe519b3470d307c9e7c1"},{url:"/assets/fonts/FG_Virgil.woff2",revision:"a0fb516ea64eb26bce3e2f3c9bcd61cc"},{url:"/assets/images/companies/fusiontech.jpg",revision:"4b1a2feca029ed081a16916df3b5ee28"},{url:"/assets/images/companies/trember.jpg",revision:"1e6113d30a9eda56a85a00e81830614c"},{url:"/assets/images/companies/ultrasenses.jpg",revision:"afd6e05261ff4a774563dd3b6c81c2c0"},{url:"/assets/images/companies/umbrellait.jpg",revision:"7da5c2badff64fa5013cb18b4b6b4e49"},{url:"/assets/images/iliya.jpg",revision:"6fa35f6095029fd7831e1c61f6055c46"},{url:"/assets/images/institutes/rsue.png",revision:"3718d21ea93d25a7697ce96d632707c3"},{url:"/assets/images/placeholder.png",revision:"8059efe8fac2d72186a18686550cceec"},{url:"/assets/images/projects/bcs.svg",revision:"4e4a77fd109e1a12daf72262e3ab8384"},{url:"/assets/images/projects/mydoc.svg",revision:"f50b349fa6e4de7c5ef391babc186054"},{url:"/assets/images/projects/trember.svg",revision:"057f4b3de2e65ce9806d146b1162438b"},{url:"/assets/images/repositories/chat.png",revision:"8e7ed2eddcc7de19ff542de6c99969e8"},{url:"/assets/images/repositories/e2ee-chat.jpg",revision:"6ad64d8271c083340dd2e47789dc112e"},{url:"/assets/images/repositories/evstifeevee.png",revision:"24ae2f165568b2d56154f9984d2d999f"},{url:"/assets/images/repositories/rgx.png",revision:"d2fea46d1c2edf97f54c2d2ad35219dd"},{url:"/assets/images/repositories/sol.png",revision:"08264ba06a166a42349b9533ef7b437d"},{url:"/assets/images/repositories/space.png",revision:"6856ace22a97157a29adf527b6126121"},{url:"/assets/images/skills/amazon-web-services.svg",revision:"4ad8d13a3ab55ca22b54bdb9f8632295"},{url:"/assets/images/skills/azure.svg",revision:"d36fd641289fea2948d94eb4418ba412"},{url:"/assets/images/skills/css.svg",revision:"d10f4bf68a27526ef83fd9dfdc75317d"},{url:"/assets/images/skills/docker.svg",revision:"46dcb4639a0664a65526b7d348bfc231"},{url:"/assets/images/skills/figma.svg",revision:"3b0fb69f67df8e1c5665644cc8f7a983"},{url:"/assets/images/skills/firebase.svg",revision:"12c51693d5a8b2e0043edbbabba2b13a"},{url:"/assets/images/skills/git.svg",revision:"5eed2c8cb62e1adfae09b0129a25a1a7"},{url:"/assets/images/skills/html.svg",revision:"a0657d1cac3b20f1e113738056db3c63"},{url:"/assets/images/skills/javascript.svg",revision:"8ee02715beb101d7d505a9473bfb2754"},{url:"/assets/images/skills/mongodb.svg",revision:"409452f1b3c56ada4efdcfbd39ff1142"},{url:"/assets/images/skills/nestjs.svg",revision:"5602f398de7166378abf000ab2235a96"},{url:"/assets/images/skills/nextjs.svg",revision:"6fac0533b1528017cc24c8b2c06a117f"},{url:"/assets/images/skills/nginx.svg",revision:"e8b99f99a9c5757b946bc2217f1fdc27"},{url:"/assets/images/skills/nodejs.svg",revision:"e4ddbe1a57d161bfb593c7e2ba40d345"},{url:"/assets/images/skills/postgresql.svg",revision:"247d9b7fbce67b679a183549e0237a3e"},{url:"/assets/images/skills/python.svg",revision:"4948e6764d2214fe0c09621c6defe06b"},{url:"/assets/images/skills/react.svg",revision:"a899d525422ddb1c9b5bc595ec6da942"},{url:"/assets/images/skills/typescript.svg",revision:"91cee51eb9e6aa7287cd239132bd6a5c"},{url:"/favicon.ico",revision:"8fdeed43bb96a7a6fed419ba87cb3d51"},{url:"/icons/apple-touch-icon.png",revision:"cdbdd748b2eac80ec5936ed1b5bfe57d"},{url:"/icons/icon-128x128.png",revision:"8adc808cc88ce0f6bfcea11f463a378b"},{url:"/icons/icon-144x144.png",revision:"4cf713fd9d7af4c0ccce473da60071df"},{url:"/icons/icon-152x152.png",revision:"a3444d0250216e530865887d8e7b9f5f"},{url:"/icons/icon-16x16.png",revision:"76fca10984c28beb46e68de2db3fa4f4"},{url:"/icons/icon-192x192.png",revision:"bf91ed400deaf04f17094e04e48f9f81"},{url:"/icons/icon-32x32.png",revision:"5216e085b05dc8e049ef13f17336c580"},{url:"/icons/icon-384x384.png",revision:"56d20cce81e77f99ca41d9f9307af730"},{url:"/icons/icon-512x512.png",revision:"76cc0cf20e272fab72410a73cfbb61e2"},{url:"/icons/icon-72x72.png",revision:"57d1ed177dfcb87f160673e47302478c"},{url:"/icons/icon-96x96.png",revision:"d304794b9c8db9eac071c2b77ad9c716"},{url:"/manifest.json",revision:"cb8446d7042a53ae32f2cad7144151e2"},{url:"/sw.js",revision:"dac0234ce9cea41d076f09256119c3d1"},{url:"/sw.js.map",revision:"aa67aa95538aee7119946805b0f5d5c8"},{url:"/vercel.svg",revision:"4b4f1876502eb6721764637fe5c41702"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:i,state:a})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
