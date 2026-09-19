/* =========================================================
   5 MINUTOS — SERVICE WORKER
   ========================================================= */

const CACHE_NAME = "5-minutos-v1";

const FILES_TO_CACHE = [
  "./",
  "./index.html",
  "./style.css",
  "./app.js",
  "./manifest.json",
  "./icons/icon-192.png",
  "./icons/icon-512.png"
];


/* ================= INSTALACIÓN ================= */

self.addEventListener("install", event => {

  event.waitUntil(

    caches.open(CACHE_NAME)
      .then(cache => {

        return cache.addAll(FILES_TO_CACHE);

      })

  );

  self.skipWaiting();

});


/* ================= ACTIVACIÓN ================= */

self.addEventListener("activate", event => {

  event.waitUntil(

    caches.keys()
      .then(cacheNames => {

        return Promise.all(

          cacheNames
            .filter(name => name !== CACHE_NAME)
            .map(name => caches.delete(name))

        );

      })

  );

  self.clients.claim();

});


/* ================= PETICIONES ================= */

self.addEventListener("fetch", event => {

  event.respondWith(

    caches.match(event.request)
      .then(cachedResponse => {

        if (cachedResponse) {
          return cachedResponse;
        }

        return fetch(event.request)
          .then(networkResponse => {

            if (
              !networkResponse ||
              networkResponse.status !== 200 ||
              networkResponse.type === "opaque"
            ) {
              return networkResponse;
            }

            const responseClone = networkResponse.clone();

            caches.open(CACHE_NAME)
              .then(cache => {

                cache.put(
                  event.request,
                  responseClone
                );

              });

            return networkResponse;

          })
          .catch(() => {

            return caches.match("./index.html");

          });

      })

  );

});