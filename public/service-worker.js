// public/service-worker.js
self.addEventListener('install', (event) => {
    console.log('Service worker installed.');
  });
  
  self.addEventListener('fetch', (event) => {
    // Add fetch logic here (caching, etc.)
    // For a basic example, just let the browser handle the request:
    event.respondWith(fetch(event.request));
  });