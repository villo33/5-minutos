/* =========================================================
   5 MINUTOS — SERVICE WORKER PWA
   ========================================================= */

const CACHE_NAME = "5-minutos-v2";

const FILES_TO_CACHE = [
  "./",
  "./index.html",
  "./style.css",
  "./app.js",
  "./manifest.json",
  "./icon-192.png",
  "./icon-512.png"
];


/* =========================================================
   INSTALACIÓN
   ========================================================= */

self.addEventListener("install", event => {

  event.waitUntil(

    caches.open(CACHE_NAME)
      .then(cache => {

        console.log("5 Minutos: guardando archivos en caché");

        return cache.addAll(FILES_TO_CACHE);

      })

  );

  /*
   * Activa inmediatamente la nueva versión
   */

  self.skipWaiting();

});


/* =========================================================
   ACTIVACIÓN
   ========================================================= */

self.addEventListener("activate", event => {

  event.waitUntil(

    caches.keys()
      .then(cacheNames => {

        return Promise.all(

          cacheNames
            .filter(cacheName => cacheName !== CACHE_NAME)
            .map(cacheName => {

              console.log(
                "5 Minutos: eliminando caché antigua:",
                cacheName
              );

              return caches.delete(cacheName);

            })

        );

      })
      .then(() => {

        console.log(
          "5 Minutos: Service Worker actualizado"
        );

        /*
         * Controla inmediatamente todas las páginas
         */

        return self.clients.claim();

      })

  );

});


/* =========================================================
   PETICIONES
   ========================================================= */

self.addEventListener("fetch", event => {

  /*
   * Solo manejamos peticiones GET
   */

  if (event.request.method !== "GET") {
    return;
  }


  event.respondWith(

    caches.match(event.request)
      .then(cachedResponse => {

        /*
         * Si existe en caché, usamos la copia guardada
         */

        if (cachedResponse) {

          return cachedResponse;

        }


        /*
         * Si no existe, buscamos en Internet
         */

        return fetch(event.request)

          .then(networkResponse => {

            /*
             * Verificamos que la respuesta sea válida
             */

            if (
              !networkResponse ||
              networkResponse.status !== 200 ||
              networkResponse.type === "opaque"
            ) {

              return networkResponse;

            }


            /*
             * Guardamos una copia para poder usarla
             * posteriormente sin conexión
             */

            const responseClone =
              networkResponse.clone();


            caches.open(CACHE_NAME)
              .then(cache => {

                cache.put(
                  event.request,
                  responseClone
                );

              });


            return networkResponse;

          })


          /*
           * Si no hay Internet
           */

          .catch(() => {

            /*
             * Intentamos cargar nuevamente el inicio
             */

            return caches.match("./index.html");

          });

      })

  );

});
