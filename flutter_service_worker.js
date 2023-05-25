'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "eddb92c0db8d58e2355f4a39abd662d6",
"favicon.ico": "e0c5e061a2b9b5efaea014e95ff7491e",
"index.html": "c022110bb99d5d53fe0ac8eec968f9fd",
"/": "c022110bb99d5d53fe0ac8eec968f9fd",
"main.dart.js": "ec1fc07aa033e7c9f7bc94e5abe2b09e",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "3dd079ac9581bf19fa4aa169039d3443",
"assets/AssetManifest.json": "93bdb77591947b17ad5e9e8f9874cc5d",
"assets/NOTICES": "771144b4c04094423d409e9622b8f374",
"assets/FontManifest.json": "2b63defc8c4d4a484209129eea4a9734",
"assets/packages/flutter_library/assets/svg/btn_close.svg": "203f87a560daf1adaef8e374d1536333",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.smcbin": "1a17ef33772dfa8506b89c53a9e5f7e0",
"assets/AssetManifest.bin": "1a17ef33772dfa8506b89c53a9e5f7e0",
"assets/fonts/MaterialIcons-Regular.otf": "aa5c27f66f4977d7e54962c97a7fdb50",
"assets/assets/svg/icon_graph_bar.svg": "0a9af03e7b57ca42fc2d25e71c32c2b4",
"assets/assets/svg/btn_screenshot.svg": "c6251ef1ba73bbe5f402ad1d37905843",
"assets/assets/svg/icon_dropdown_bk_sel.svg": "63d02ac22c373a590fbf1a28f01a362c",
"assets/assets/svg/btn_download_dis.svg": "1929932f36968ed7c965fbec3bff7233",
"assets/assets/svg/img-logo.svg": "ed629517b67f63107e83102ddbc69ad3",
"assets/assets/svg/btn_logout.svg": "482e28da3463912f278f45c6aced3c5b",
"assets/assets/svg/icon_graph.svg": "a0da8c93fa7c4a8e72eb9a95f45210d0",
"assets/assets/svg/btn_search_more.svg": "4b92b808dced2233f4bb902f64496023",
"assets/assets/svg/icon-dropdown.svg": "0b14e34db392873a2cf097bcf6df9763",
"assets/assets/svg/btn_cancel.svg": "9cbe88d654101b8ef323427ce1b5dc0c",
"assets/assets/svg/checkbox_dis.svg": "a07ee107a4d76bfa550cd6d388aee014",
"assets/assets/svg/btn-page-right.svg": "bfd8c37897026354d0a6b32753829298",
"assets/assets/svg/btn_alert.svg": "7052a13ec87940437e4178a851adb558",
"assets/assets/svg/btn_info.svg": "55db1c292eca368b42520416a16decb8",
"assets/assets/svg/icon-chart-bk.svg": "5be80befdb3c0944238ab62b1d141c2a",
"assets/assets/svg/btn_decimal_up.svg": "6b2094ba92060faf24859674e9f32acd",
"assets/assets/svg/btn_invite.svg": "c448a2f526007c52e57db1d2773d6a13",
"assets/assets/svg/btn_file_add.svg": "b999c11d1054db5334f399d97361a74c",
"assets/assets/svg/btn_search.svg": "917cfccbaa812444eb33a5708239d08c",
"assets/assets/svg/btn_download.svg": "158da6fec380ead4d7453d6689ae49e5",
"assets/assets/svg/btn_unit_sel.svg": "0daa4ed4d16139ec04db7389564bb471",
"assets/assets/svg/btn_calendar_dis.svg": "d38570f18376750621eb4cc6b8546e0f",
"assets/assets/svg/icon_result.svg": "fac853314420279e8b205b1a612cc880",
"assets/assets/svg/btn_del_dis.svg": "7cf7178e4c186b2f4ea5a3257729ee4b",
"assets/assets/svg/btn_home.svg": "5e220e02bc81fc449b80d168ceff94ac",
"assets/assets/svg/btn_decimal_down.svg": "a6d9ec3b23282ab3dfac326b2c63b578",
"assets/assets/svg/btn_checkbox_sel.svg": "e03f79aed85be993a0e43c5e89423b2c",
"assets/assets/svg/icon_project.svg": "db495cc03454bf72bc344750a22e3754",
"assets/assets/svg/img_logo_white.svg": "e140413ec5b58a85745750a6deed45ff",
"assets/assets/svg/btn_list.svg": "da77ab8788dfc5f920180faa0e8a160f",
"assets/assets/svg/btn_add.svg": "6e06cea2026431b56c533d914ef2d09c",
"assets/assets/svg/btn_unit.svg": "0ea446d48f1e3772f97600c9529bc281",
"assets/assets/svg/checkbox-sel.svg": "bf32b99c212551a5b3a73e79ccd1dba9",
"assets/assets/svg/btn_visible_no.svg": "a19851e742f9666fb5200604f73c41eb",
"assets/assets/svg/btn_refresh.svg": "f27f36d3a0c8961701329eba94c06ea1",
"assets/assets/svg/btn_move.svg": "8f7a237727de193a1d8e81085860c280",
"assets/assets/svg/icon_graph_line.svg": "517bddcb17c7139886b009fd7c8ec2fa",
"assets/assets/svg/btn_setting.svg": "4010b0976786de50c43de38c35bc7f10",
"assets/assets/svg/btn_edit_2.svg": "33f3d1718627a65dff544e34546dea73",
"assets/assets/svg/btn_comma.svg": "049177316011a9130ee992e03a779a68",
"assets/assets/svg/icon_dropdown_bk.svg": "9a19cc005fb188d4d997942fd44d61e6",
"assets/assets/svg/icon-download.svg": "848543915f66fd637b0ec8cf1ac04465",
"assets/assets/svg/checkbox_mid_dis.svg": "52fbb6fc535dc4909bc567625737d907",
"assets/assets/svg/icon-screenshot.svg": "3db3eaea839ef421aaeacbe34283b78c",
"assets/assets/svg/btn_edit_dis.svg": "e4eec7f39b1ab2b8f37e13ea8b5b0a91",
"assets/assets/svg/icon_graph_dline.svg": "c4eea788de2dfef421e6df3457a519f0",
"assets/assets/svg/img-ci.svg": "409ca7f7fb5ed6d0b4b1227a097c19ab",
"assets/assets/svg/icon_members.svg": "45691bc139396b1851cd8cfa928b2bd0",
"assets/assets/svg/logo_3.svg": "87e6598a5f4e63782c23b110e081efaf",
"assets/assets/svg/icon-drop.svg": "cb0f9276b8a3f1e4956ff809ec6e8eb8",
"assets/assets/svg/checkbox.svg": "9668d942108f074ac221a8c97f8987c1",
"assets/assets/svg/btn_cancel_dis.svg": "b6dc37763f1f1566ed9c88d67b8e8bfe",
"assets/assets/svg/checkbox_mid.svg": "b7a7309e84acfab217bcd0d8ba281b62",
"assets/assets/svg/icon-download-bk.svg": "9e0bd0c37b530322777c254472bba5b8",
"assets/assets/svg/btn_menu.svg": "847f5b633858f3b9cffd07da8714ea11",
"assets/assets/svg/btn_done.svg": "8e051a38eedfba1550bc621e574eb444",
"assets/assets/svg/btn_comma_sel.svg": "f34e181a32198557f406de0bcff8e1ac",
"assets/assets/svg/btn_information.svg": "f27f3fe348addd74f484bbbaa158a652",
"assets/assets/svg/btn_del.svg": "0c37931f9fd67c024153e9a4599a3d44",
"assets/assets/svg/btn_checkbox.svg": "5438147740d4ad0319d3362d0fbeba27",
"assets/assets/svg/icon-add.svg": "5dc87682a8457d1befbb9c25181ad071",
"assets/assets/svg/btn_my.svg": "57a6fc923fc7945f2050878ef7a2c221",
"assets/assets/svg/icon_graph_dot.svg": "06a61edb1f412621473f2cbdf8ab3e0a",
"assets/assets/svg/btn_copy.svg": "109005e607f75f4e28ed87f8eeffb407",
"assets/assets/svg/img_logo_black.svg": "0534a9bf3fde0b737877ccf0012fd073",
"assets/assets/svg/icon_sel.svg": "be49fea64203ec0d3f86e18e2fc1b315",
"assets/assets/svg/icon-chart.svg": "5be80befdb3c0944238ab62b1d141c2a",
"assets/assets/svg/btn_visible.svg": "aec36f31463839cfdfcc729fc2355c6c",
"assets/assets/svg/btn_save.svg": "db3ed1474f7294510880d29b0c3c29d5",
"assets/assets/svg/btn-page-left.svg": "8207c7bfbc0fd9fa1f4251fd246b147e",
"assets/assets/svg/btn_next.svg": "825d1156f3df6967e4767bc8a4e4340c",
"assets/assets/svg/btn_edit.svg": "c44e7cd950a1606d5dc33bc73cd95b00",
"assets/assets/svg/icon-detail.svg": "9a962698abe22c2b66b8a87712a9dafd",
"assets/assets/svg/checkbox_sel_dis.svg": "dffc539b647882606dc382c14e21fdaf",
"assets/assets/svg/btn_more.svg": "e61c3fe82bcf778258476e93ba659202",
"assets/assets/svg/btn_previous.svg": "612f1e31d1327a5f09bab94aa09f911a",
"assets/assets/svg/icon_file.svg": "a4fff2e70a2e8208cf65e2a35cac02f2",
"assets/assets/svg/icon_google.svg": "907ccc77e3e3e4e01d317a048f72dd28",
"assets/assets/svg/btn_minus.svg": "9427cfa78fd3f917f4a16208453eb563",
"assets/assets/jpg/img_info_data.jpg": "d287ff652986952ddb7d145815eceea5",
"assets/assets/jpg/2.0x/img_info_data@2x.jpg": "687a93d98873d8e75df5e2e7c7e458c2",
"assets/assets/jpg/2.0x/img_info_sample@2x.jpg": "01cb21019c6b67d524db8250c61bb116",
"assets/assets/jpg/2.0x/img_info_search@2x.jpg": "f06f98d85af57a4abc37600ed23e8eeb",
"assets/assets/jpg/2.0x/img_info_common@2x.jpg": "330c090b6193fd5804322ba09a22fff0",
"assets/assets/jpg/2.0x/img_info_basic@2x.jpg": "f017569874e893e49dc0921f4dffd5f7",
"assets/assets/jpg/img_info_search.jpg": "c76c8d44a017eb57c22ffa2417fb7553",
"assets/assets/jpg/img_info_sample.jpg": "da8d85dfd409ec471e82fb591929ea54",
"assets/assets/jpg/img_info_common.jpg": "3de9e3617531dd42f964afb4bfe72220",
"assets/assets/jpg/img_info_basic.jpg": "b152a19e80727ca41a8b4f10dad0af06",
"assets/assets/fonts/NotoSans-Bold.otf": "e2406ff1791c401bc93e73d9e44e6d2b",
"assets/assets/fonts/NotoSans-Regular.otf": "210989664066c01d8ffdbdf56bb773cd",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
