if(!self.define){let e,t={};const i=(i,r)=>(i=new URL(i+".js",r).href,t[i]||new Promise((t=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=t,document.head.appendChild(e)}else e=i,importScripts(i),t()})).then((()=>{let e=t[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(r,n)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(t[o])return;let s={};const c=e=>i(e,o),d={module:{uri:o},exports:s,require:c};t[o]=Promise.all(r.map((e=>d[e]||c(e)))).then((e=>(n(...e),s)))}}define(["./workbox-6193432e"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"index.html",revision:"2d1717ae0d9ec690a9875c61dde05ffe"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]})}));
//# sourceMappingURL=sw.js.map