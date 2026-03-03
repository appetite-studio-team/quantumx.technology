// No-op service worker — prevents 404 when browser or extensions request /sw.js
self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", () => self.clients.claim());
