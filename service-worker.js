const CACHE_NAME='engineer-pay-log-v10-2-time-on-time-workshop-preview-1-1-20260914';
const APP_SHELL=['./','./index.html','./demo.html','./manifest.webmanifest','./icons/icon-192.png','./icons/icon-512.png','./icons/apple-touch-icon.png','./icons/presenting-engineer.jpg'];

self.addEventListener('install',e=>e.waitUntil(
  caches.open(CACHE_NAME)
    .then(c=>Promise.all(APP_SHELL.map(path=>fetch(new Request(path,{cache:'reload'})).then(r=>{if(!r.ok)throw new Error('Cache fetch failed: '+path);return c.put(path,r)}))))
    .then(()=>self.skipWaiting())
));

self.addEventListener('activate',e=>e.waitUntil(
  caches.keys()
    .then(keys=>Promise.all(keys.filter(k=>k!==CACHE_NAME&&k!=='epl-crewbook-cloud-assets-v1'&&k!=='epl-notification-intents-v1').map(k=>caches.delete(k))))
    .then(()=>self.clients.claim())
));

self.addEventListener('fetch',e=>{
  if(e.request.method!=='GET')return;
  const requestUrl=new URL(e.request.url);
  // Production Crew Book images are immutable/versioned and intentionally lazy-cached.
  // Only an image the user actually opens is downloaded; subsequent views (including offline)
  // can use the dedicated cloud-asset cache proven in Test 11.
  const isCrewBookCloudAsset=requestUrl.origin==='https://swvtzdwrzuzhsnqwnike.supabase.co'&&requestUrl.pathname.startsWith('/storage/v1/object/public/crew-book-assets/');
  if(isCrewBookCloudAsset){
    e.respondWith(caches.open('epl-crewbook-cloud-assets-v1').then(cache=>cache.match(e.request).then(cached=>cached||fetch(e.request).then(r=>{if(r.ok||r.type==='opaque')cache.put(e.request,r.clone());return r}))));
    return;
  }
  // Other cloud/auth/API traffic must never be served from the PWA cache.
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
  const title=payload.type==='bulletin_award'?'Bulletin Award':payload.type==='seniority'?'Seniority Intensifies 📈':payload.type==='test'?'Test Notification':(payload.title||'Engineer Pay Log');
  const options={
    body:payload.body||'You have a new Engineer Pay Log notification.',
    icon:'./icons/icon-192.png',
    badge:'./icons/icon-192.png',
    tag:payload.tag||'engineer-pay-log',
    renotify:true,
    data:{url:payload.url||'./',type:payload.type||'general',retirementsAbove:payload.retirements_above||null,test:!!payload.test}
  };
  event.waitUntil((async()=>{
    // iOS can occasionally wake a Home Screen PWA from a notification without
    // delivering notificationclick to the worker. For actionable EPL alerts,
    // save the destination as soon as the push arrives while the app is not
    // visible. The page will consume it on its next foreground/resume.
    if(payload.type==='bulletin_award'||payload.type==='seniority'){
      try{
        const windows=await self.clients.matchAll({type:'window',includeUncontrolled:true});
        const hasVisible=windows.some(client=>client.visibilityState==='visible');
        if(!hasVisible){
          await storeNotificationIntent({
            type:'EPL_NOTIFICATION_OPEN',
            notificationType:payload.type,
            url:new URL(payload.url||'./',self.registration.scope).href,
            retirementsAbove:payload.retirements_above||null,
            test:!!payload.test,
            source:'push_received'
          });
        }
      }catch{}
    }
    await self.registration.showNotification(title,options);
  })());
});

const NOTIFICATION_INTENT_CACHE='epl-notification-intents-v1';
const NOTIFICATION_INTENT_URL=new URL('./__epl_notification_intent__',self.registration.scope).href;

async function storeNotificationIntent(intent){
  try{
    const cache=await caches.open(NOTIFICATION_INTENT_CACHE);
    await cache.put(NOTIFICATION_INTENT_URL,new Response(JSON.stringify({...intent,createdAt:Date.now()}),{headers:{'Content-Type':'application/json','Cache-Control':'no-store'}}));
  }catch{}
}

self.addEventListener('notificationclick',event=>{
  event.notification.close();
  const notificationType=event.notification?.data?.type||'general';
  const target=new URL(event.notification?.data?.url||'./',self.registration.scope).href;
  const message={type:'EPL_NOTIFICATION_OPEN',notificationType,url:target,retirementsAbove:event.notification?.data?.retirementsAbove||null,test:!!event.notification?.data?.test};
  event.waitUntil((async()=>{
    // Persist the tap intent BEFORE waking/focusing the PWA. iOS can restore a
    // suspended Home Screen app without honoring navigate() or an immediate
    // postMessage; the visible page can consume this cache marker on resume.
    await storeNotificationIntent(message);

    const windows=await self.clients.matchAll({type:'window',includeUncontrolled:true});
    if(windows.length){
      const client=windows[0];
      try{client.postMessage(message)}catch{}
      try{await client.focus()}catch{}
      // WebKit can make a resumed WindowClient responsive a little late. Keep the
      // service worker alive briefly and retry the message after the app wakes.
      for(const delay of [350,1000,2200,3500]){
        await new Promise(r=>setTimeout(r,delay===350?350:delay-(delay===1000?350:delay===2200?1000:2200)));
        try{client.postMessage(message)}catch{}
      }
      return;
    }

    if(self.clients.openWindow){
      try{
        const opened=await self.clients.openWindow(target);
        if(opened){
          for(const delay of [500,1500,3000]){
            await new Promise(r=>setTimeout(r,delay===500?500:delay-(delay===1500?500:1500)));
            try{opened.postMessage(message)}catch{}
          }
        }
      }catch{}
    }
  })());
});
