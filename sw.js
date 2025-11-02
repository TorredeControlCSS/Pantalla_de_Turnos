const CACHE = "turnos-v1";
const ASSETS = [
  "./",
  "./Pantalla_Turnos_DINALOG_FINAL.html",
  "./manifest.json",
  "./icon-192.png",
  "./icon-512.png"
];

self.addEventListener("install", e=>{
  e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS)));
});

self.addEventListener("fetch", e=>{
  e.respondWith(
    caches.match(e.request).then(r => r || fetch(e.request))
  );
});
