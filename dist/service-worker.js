if(!self.define){let e,s={};const n=(n,r)=>(n=new URL(n+".js",r).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(r,i)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(s[o])return;let l={};const u=e=>n(e,o),t={module:{uri:o},exports:l,require:u};s[o]=Promise.all(r.map((e=>t[e]||u(e)))).then((e=>(i(...e),l)))}}define(["./workbox-79ffe3e0"],(function(e){"use strict";e.setCacheNameDetails({prefix:"vue-todo"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"/css/26.99e0a1f1.css",revision:null},{url:"/css/chunk-vendors.3892830c.css",revision:null},{url:"/img/bg.df5cbb9e.jpg",revision:null},{url:"/index.html",revision:"592d2aa19b094edcb03877698b22e05f"},{url:"/js/26.5393578a.js",revision:null},{url:"/js/569.9a5f3e13.js",revision:null},{url:"/js/app.492056ea.js",revision:null},{url:"/js/chunk-vendors.79ed4e31.js",revision:null},{url:"/manifest.json",revision:"fbafddbca0454e2cf83c4640f9391b35"},{url:"/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map