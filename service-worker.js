const CACHE_NAME='engineer-pay-log-v8-3-1-install-onboarding-test2-20260830';
const APP_SHELL=['./','./index.html','./demo.html','./manifest.webmanifest','./icons/icon-192.png','./icons/icon-512.png','./icons/apple-touch-icon.png','./icons/presenting-engineer.jpg'];

self.addEventListener('install',e=>e.waitUntil(
  caches.open(CACHE_NAME)
    .then(c=>c.addAll(APP_SHELL))
    .then(()=>self.skipWaiting())
));

self.addEventListener('activate',e=>e.waitUntil(
  caches.keys()
    .then(keys=>Promise.all(keys.filter(k=>k!==CACHE_NAME).map(k=>caches.delete(k))))
    .then(()=>self.clients.claim())
));

self.addEventListener('fetch',e=>{
  if(e.request.method!=='GET')return;
  const requestUrl=new URL(e.request.url);
  // Cloud/auth/API traffic must never be served from the PWA cache.
  if(requestUrl.origin!==self.location.origin)return;
  if(e.request.mode==='navigate'){
    const navKey=requestUrl.pathname.endsWith('/demo.html')?'./demo.html':'./index.html';
    e.respondWith(
      fetch(e.request)
        .then(r=>{const copy=r.clone();caches.open(CACHE_NAME).then(c=>c.put(navKey,copy));return r})
        .catch(()=>caches.match(navKey))
    );
    return;
  }
  e.respondWith(
    caches.match(e.request).then(cached=>cached||fetch(e.request).then(r=>{
      const copy=r.clone();caches.open(CACHE_NAME).then(c=>c.put(e.request,copy));return r;
    }))
  );
});
