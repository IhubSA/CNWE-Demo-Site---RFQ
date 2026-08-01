// Minimal service worker — exists only so the browser will offer to install this
// as an app. It deliberately does NOT cache anything, so the admin console always
// loads fresh from the network and never shows stale procurement data.
self.addEventListener('install', (event) => {
  self.skipWaiting();
});
self.addEventListener('activate', (event) => {
  self.clients.claim();
});
self.addEventListener('fetch', (event) => {
  event.respondWith(fetch(event.request));
});
