//create install event for service worker
self.addEventListener("install", function (event) {
    console.log("[Service worker] - Installing service worker...", event);
});

//create install event for service worker
self.addEventListener("activate", function (event) {
    console.log("[Service worker] - Activating service worker...", event);
    return self.clients.claim();
});

self.addEventListener("fetch", function (event) {
    console.log("[Service worker] - Fetching something...", event)
    event.respondWith(fetch(event.request));
});