const CACHE_NAME = 'procoach-v10-athlete-wellness-install';
const APP_SHELL = ['./', './index.html', './atleta.html', './manifest.webmanifest', './athlete-manifest.webmanifest', './procoach-icon.svg'];
self.addEventListener('install', event => { event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(APP_SHELL)).then(() => self.skipWaiting())); });
self.addEventListener('activate', event => { event.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key)))).then(() => self.clients.claim())); });
self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;
  event.respondWith(fetch(event.request).then(response => { const copy = response.clone(); caches.open(CACHE_NAME).then(cache => cache.put(event.request, copy)); return response; }).catch(async () => {
    const hit = await caches.match(event.request, {ignoreSearch:true}); if (hit) return hit;
    const url = new URL(event.request.url); return caches.match(url.pathname.endsWith('/atleta.html') ? './atleta.html' : './index.html');
  }));
});
self.addEventListener('push', event => { const data = event.data ? event.data.json() : { title: 'ProCoach', body: 'Você tem uma nova atualização.' }; event.waitUntil(self.registration.showNotification(data.title || 'ProCoach', { body: data.body || '', icon: './procoach-icon.svg', badge: './procoach-icon.svg', data: data.url || './' })); });
self.addEventListener('notificationclick', event => { event.notification.close(); event.waitUntil(clients.openWindow(event.notification.data || './')); });
