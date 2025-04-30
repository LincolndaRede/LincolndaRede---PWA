const CACHE_NAME = 'lincoln-da-rede-cache-v1';
const urlsToCache = [
  '/lincolndarede-pwa/',
  '/lincolndarede-pwa/index.html',
  '/lincolndarede-pwa/manifest.json',
  '/lincolndarede-pwa/logo192.png',
  '/lincolndarede-pwa/logo512.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        return response || fetch(event.request);
      })
  );
});
