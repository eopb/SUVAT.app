self.addEventListener("install", function(e) {
    e.waitUntil(
        caches.open("suvatapp").then(function(cache) {
            return cache.addAll([
                "/",
                "/index.html",
                "/css/app.9eefdc7d.css",
                "/js/chunk-vendors.f35dd7cb.js",
                "/js/app.1a3eba62.js",
                "/js/chunk-vendors.f35dd7cb.js",
                "/js/app.1a3eba62.js",
                "/favicon.ico"
            ]);
        })
    );
});