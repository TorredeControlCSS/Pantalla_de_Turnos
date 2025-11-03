const CACHE = "turnos-v7";
const ASSETS = [
  "/Pantalla_de_Turnos/",
  "/Pantalla_de_Turnos/index.html",
  "/Pantalla_de_Turnos/manifest.json",
  "/Pantalla_de_Turnos/CSS LOGO - 192.png",
  "/Pantalla_de_Turnos/CSS LOGO -512.png"
];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)));
});

self.addEventListener("activate", e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    )
  );
});

self.addEventListener("fetch", e => {
  e.respondWith(caches.match(e.request).then(r => r || fetch(e.request)));
});

