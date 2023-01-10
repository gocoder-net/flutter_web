'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "39985c3c05762493c88749a57bd5ed18",
"assets/assets/gocoder_app/area1.png": "9cbfec64c29ec6821547f1c5093f38b7",
"assets/assets/gocoder_app/area2.png": "2863c486c15808e8f105ccac2febfdbc",
"assets/assets/gocoder_app/area3.png": "e85a8d2207edfb0325369d93982fba03",
"assets/assets/gocoder_app/back.png": "af6b0e6121d6eb48289cce3a3b8d8963",
"assets/assets/gocoder_app/bell.png": "929723572aa737a354244ca14fe5659b",
"assets/assets/gocoder_app/book0.png": "be135044a81857577584e32fe6b5b3b2",
"assets/assets/gocoder_app/book1.png": "9ba4be22174b0e08c023ae5afd5e8180",
"assets/assets/gocoder_app/book2.png": "36f1ec87042f6ef32a73946407401fe2",
"assets/assets/gocoder_app/book3.png": "e7ad3f810cd74dfd91da7f21a442e8ad",
"assets/assets/gocoder_app/bottle.png": "840d3c89291f9d3b0a859d7479c10d0c",
"assets/assets/gocoder_app/breakfast.png": "1d2b0e6a7e46a44723131c663471f811",
"assets/assets/gocoder_app/burned.png": "2ffad4b8dff525e57473142f0265b6bd",
"assets/assets/gocoder_app/dinner.png": "d61779f47b560d09b0df15b346323ac4",
"assets/assets/gocoder_app/eaten.png": "3f7d6f5aea8996d15d52c4c2268abd45",
"assets/assets/gocoder_app/fitness_app.png": "bd55b7dc68210a0a5e6fa9341a47dbaf",
"assets/assets/gocoder_app/glass.png": "266bca612c726abd6e481a4d890cef8e",
"assets/assets/gocoder_app/img.png": "0e821c0dee95170d5e1c82a06dd5652f",
"assets/assets/gocoder_app/lunch.png": "6855159f38835c1f03289b102a2e8b52",
"assets/assets/gocoder_app/runner.png": "efb26bd46e91d305bda3b4b3c5a57c54",
"assets/assets/gocoder_app/snack.png": "14a3e91c7a517b0a2f71dbcd86d2104d",
"assets/assets/gocoder_app/tab_1.png": "629111ba46f6559071bcf25d2859a7ad",
"assets/assets/gocoder_app/tab_1s.png": "fbd3aa5ed884a724f0435521586f6585",
"assets/assets/gocoder_app/tab_2.png": "6506b7480618968b3daee97570927f65",
"assets/assets/gocoder_app/tab_2s.png": "d270e94953ae9b7f377c5b253345374d",
"assets/assets/gocoder_app/tab_3.png": "2a8f733675e2d8a7c6e9ac67a535bbf2",
"assets/assets/gocoder_app/tab_3s.png": "a9093dcadf7724797ee22a5a802da7ad",
"assets/assets/gocoder_app/tab_4.png": "f679006d5a49884f9ae89628d1d62d88",
"assets/assets/gocoder_app/tab_4s.png": "40c45bbb7601c039da61be3e3c0f7520",
"assets/assets/gocoder_app/webtool1.png": "7e40426f66cd16e3ca02811c6eef7af3",
"assets/assets/gocoder_app/webtool2.png": "5eb89adb8a7cd22701d2aefcb33254f0",
"assets/assets/gocoder_app/webtool3.png": "266cf6e9c1cf8ee827aad4803c2a6e09",
"assets/assets/gocoder_app/webtool4.png": "fa1dbfdfe16c758deddfc1ee774eecd1",
"assets/assets/images/brunch_logo.png": "8e71f9ba6f7920bc27bf7fdfacf12dba",
"assets/assets/images/feedbackImage.png": "5f8e9064f54cf51a70fee2da78a5b014",
"assets/assets/images/fullscreen.gif": "1ab4526383f6e451e06b170d5008df38",
"assets/assets/images/gocodernet_logo.png": "e93276ba1499967cb2f997f976c3194b",
"assets/assets/images/helpImage.png": "2bff0fc93675d32f89db50f2d3e2a5b1",
"assets/assets/images/inviteImage.png": "4d337cf829c67258aa3aae385f5ec31c",
"assets/assets/images/jinhyun.png": "24895081f19bffd6f3b2d57f32d1674e",
"assets/assets/images/logo.png": "c29d8845a7daeccd56c9b7a9566124ef",
"assets/assets/images/logo_king.png": "4b6c8afa25a10778e5e0474ed9131dd9",
"assets/assets/images/naver_profile.png": "1dc4c07c6a35d209f6b2668b86ebbb50",
"assets/assets/images/supportIcon.png": "2eb21b9823a538c996ec667e17388322",
"assets/assets/images/tistory_logo.png": "e5774c865519b18f610252fa374d6a55",
"assets/assets/images/userImage.png": "afc26cb27789a846c7047e57cb9c6422",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "5aa67e895cb2174d7e20aa2b428f3082",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "99f29024aee8f4672a47cc3a81b9b84a",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "48ce1bb8a42776caa951cb782d277730",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "d8e9b6203ce2657c991f0b339ccb3a6d",
"assets/shaders/ink_sparkle.frag": "ae6c1fd6f6ee6ee952cde379095a8f3f",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "5d2f658d89df48b86a64e8757155c339",
"/": "5d2f658d89df48b86a64e8757155c339",
"main.dart.js": "83c57143d793c311f72f4f5b15e7b401",
"manifest.json": "1c8541996eccb94aa77966b3a80db225",
"version.json": "0f94575dad7e9fcd6a7c51e008b7e7e1"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
