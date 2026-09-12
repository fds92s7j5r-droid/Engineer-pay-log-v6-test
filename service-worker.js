const CACHE_NAME='engineer-pay-log-v10-2-push-test2b-20260912';
const APP_SHELL=['./','./index.html','./demo.html','./manifest.webmanifest','./icons/icon-192.png','./icons/icon-512.png','./icons/apple-touch-icon.png','./icons/presenting-engineer.jpg'];

self.addEventListener('install',e=>e.waitUntil(
  caches.open(CACHE_NAME)
    .then(c=>Promise.all(APP_SHELL.map(path=>fetch(new Request(path,{cache:'reload'})).then(r=>{if(!r.ok)throw new Error('Cache fetch failed: '+path);return c.put(path,r)}))))
    .then(()=>self.skipWaiting())
));

self.addEventListener('activate',e=>e.waitUntil(
  caches.keys()
    .then(keys=>Promise.all(keys.filter(k=>k!==CACHE_NAME&&k!=='epl-crewbook-cloud-assets-v1').map(k=>caches.delete(k))))
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
      fetch(e.request,{cache:'reload'})
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

self.addEventListener('push',event=>{
  let payload={};
  try{payload=event.data?event.data.json():{}}catch{
    try{payload={body:event.data?event.data.text():''}}catch{payload={}}
  }
  const title=payload.type==='bulletin_award'?'Bulletin Award':payload.type==='test'?'Test Notification':(payload.title||'Engineer Pay Log');
  const options={
    body:payload.body||'You have a new Engineer Pay Log notification.',
    icon:'./icons/icon-192.png',
    badge:'./icons/icon-192.png',
    tag:payload.tag||'engineer-pay-log',
    renotify:true,
    data:{url:payload.url||'./',type:payload.type||'general'}
  };
  event.waitUntil(self.registration.showNotification(title,options));
});

self.addEventListener('notificationclick',event=>{
  event.notification.close();
  const notificationType=event.notification?.data?.type||'general';
  const target=new URL(event.notification?.data?.url||'./',self.registration.scope).href;
  const message={type:'EPL_NOTIFICATION_OPEN',notificationType,url:target};
  event.waitUntil((async()=>{
    const windows=await self.clients.matchAll({type:'window',includeUncontrolled:true});
    for(const client of windows){
      try{
        // Message the existing standalone PWA directly; iOS may focus an existing
        // Web App window without performing a same-scope navigation reliably.
        client.postMessage(message);
        let active=client;
        if('navigate' in client){
          try{active=await client.navigate(target)||client}catch{}
        }
        try{active.postMessage(message)}catch{}
        if('focus' in active)return active.focus();
      }catch{}
    }
    if(self.clients.openWindow)return self.clients.openWindow(target);
  })());
});
