'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "2a7b80dae139fd82cd266732b85bb1f8",
"splash/img/light-2x.png": "3dc8d1ba99475bcba7db66746a6da466",
"splash/img/light-3x.png": "042d9fe83e71850ed1baa86df22e2e5f",
"splash/img/dark-3x.png": "042d9fe83e71850ed1baa86df22e2e5f",
"splash/img/light-background.png": "1466ca3aa205f14dd9f76e62b0315743",
"splash/img/dark-2x.png": "3dc8d1ba99475bcba7db66746a6da466",
"splash/img/dark-1x.png": "1ad41524793c8f2226897cd0eae10e51",
"splash/img/light-1x.png": "1ad41524793c8f2226897cd0eae10e51",
"splash/style.css": "b6f9c1c6cc4e67f4718b6457814ad89f",
"index.html": "cf4d7e569a3f937ad18946a2bcd3d1d4",
"/": "cf4d7e569a3f937ad18946a2bcd3d1d4",
"16x16.png": "9c077de9d9eccdeb5f87b09bf8fddb85",
"main.dart.js": "582052da8ab5d50f51958d59f62c98e2",
"icons/Icon-192.png": "2066c443a5ca4e2aedded2a5ef5ee927",
"icons/192x192.png": "2066c443a5ca4e2aedded2a5ef5ee927",
"icons/512x512.png": "9ed95c379692be296b6baa188af8ac9c",
"icons/Icon-512.png": "9ed95c379692be296b6baa188af8ac9c",
"manifest.json": "b6539315d590e4d9c41598a90029d253",
"assets/AssetManifest.json": "bcfc1bcca1062393ebf8057608375704",
"assets/NOTICES": "1c5fb0ee07cf8802e22261fb83926a01",
"assets/FontManifest.json": "afe086a5133294ab9f583979078b4564",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_AMS-Regular.ttf": "657a5353a553777e270827bd1630e467",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Script-Regular.ttf": "55d2dcd4778875a53ff09320a85a5296",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size3-Regular.ttf": "e87212c26bb86c21eb028aba2ac53ec3",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Typewriter-Regular.ttf": "87f56927f1ba726ce0591955c8b3b42d",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Caligraphic-Bold.ttf": "a9c8e437146ef63fcd6fae7cf65ca859",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Bold.ttf": "ad0a28f28f736cf4c121bcb0e719b88a",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Bold.ttf": "9eef86c1f9efa78ab93d41a0551948f7",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Fraktur-Regular.ttf": "dede6f2c7dad4402fa205644391b3a94",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Regular.ttf": "5a5766c715ee765aa1398997643f1589",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Italic.ttf": "d89b80e7bdd57d238eeaa80ed9a1013a",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Math-Italic.ttf": "a7732ecb5840a15be39e1eda377bc21d",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Italic.ttf": "ac3b1882325add4f148f05db8cafd401",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Fraktur-Bold.ttf": "46b41c4de7a936d099575185a94855c4",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size2-Regular.ttf": "959972785387fe35f7d47dbfb0385bc4",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Regular.ttf": "b5f967ed9e4933f1c3165a12fe3436df",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size1-Regular.ttf": "1e6a3368d660edc3a2fbbe72edfeaa85",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Caligraphic-Regular.ttf": "7ec92adfa4fe03eb8e9bfb60813df1fa",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size4-Regular.ttf": "85554307b465da7eb785fd3ce52ad282",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-BoldItalic.ttf": "e3c361ea8d1c215805439ce0941a1c8d",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Math-BoldItalic.ttf": "946a26954ab7fbd7ea78df07795a6cbc",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/wiredash/lib/assets/fonts/LexendDeca-Regular.ttf": "7204ea537cf86c2c0a4f4707443f2daa",
"assets/packages/wiredash/lib/assets/fonts/Wiredash-Icons.ttf": "7f6a32eef0f9bd00b92d0c51aecb395f",
"assets/packages/wiredash/assets/images/logo_grey.png": "3f955769ce0382d7c7813ee52323ab81",
"assets/packages/wiredash/assets/images/pen.png": "00910bf5961680fd1cabce6847d31747",
"assets/packages/wiredash/assets/images/logo_footer.png": "4c662743c62b67d7e0a200ac7503c4ba",
"assets/packages/wiredash/assets/images/logo_white.png": "d51118529c8b6f919c485cd81e9a840e",
"assets/packages/flutter_credit_card/icons/discover.png": "ea70c496dfa0169f6a3e59412472d6c1",
"assets/packages/flutter_credit_card/icons/visa.png": "9db6b8c16d9afbb27b29ec0596be128b",
"assets/packages/flutter_credit_card/icons/amex.png": "dad771da6513cec63005d2ef1271189f",
"assets/packages/flutter_credit_card/icons/mastercard.png": "7e386dc6c169e7164bd6f88bffb733c7",
"assets/packages/flutter_credit_card/font/halter.ttf": "4e081134892cd40793ffe67fdc3bed4e",
"assets/packages/wakelock_web/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/assets/images/info.png": "48a873f3cbd981f6d5b016199faaad39",
"assets/assets/images/message_menu.png": "582f363ed62f9281ed5cda32c7b54377",
"assets/assets/images/plus.png": "30de79c095b1bbe8739e1fa7e69fb314",
"assets/assets/images/ketshop_logo_black_text.png": "816eba60908e76640ef5545147416e41",
"assets/assets/images/arrow_right.png": "e7fff150d95456c801a74b7ccbca93d8",
"assets/assets/images/piggybank.png": "0ee52e6f6e7a78ee3e3b47d2c64cf3be",
"assets/assets/images/send_money.png": "f84c726eacbf5944c3c99f6bbf9f69b6",
"assets/assets/images/stars_left.png": "060975923b62002469271c5d703f00c8",
"assets/assets/images/shipping.png": "f3bc2b9576109e3e2778f3a4c5e5499e",
"assets/assets/images/X.png": "b3baa5ee36a764ccc2a0d7ec2b93ead3",
"assets/assets/images/address.png": "5768966fb69c1e52df3cf77a5bdc3eaf",
"assets/assets/images/ketshop_illustration_inventory.png": "369ad1b49021333f3c9a64637d5f97a5",
"assets/assets/images/social_media/instagram.png": "a3a905c40eeefb3b1e6bf673536e020b",
"assets/assets/images/social_media/google.png": "74f5b86b153b9b524b2fad2555d402c1",
"assets/assets/images/social_media/facebook.png": "4f0670d998cc0c9ddbf43a5d151e9531",
"assets/assets/images/vector.png": "35532719bc56583912b4a8490223b7e7",
"assets/assets/images/alert.png": "3de641f2dd13e7f35faff023c89889c4",
"assets/assets/images/dollar.png": "2e1c0455d8c93797815463ae018d3909",
"assets/assets/images/home.png": "93f0be298952b3c945d0d2dbb50319fd",
"assets/assets/images/shop.png": "2b5d9fc6fa3a103e61cbb024b5c0fc12",
"assets/assets/images/stars_right.png": "d804f783e1c19fbb01100c7975c73c0b",
"assets/assets/images/welcome/Create_shop.png": "e601d608b4843a33e254aad6acb41eba",
"assets/assets/images/welcome/Confirm_purchase.png": "92331871eadd7d80dbf78150edf32d55",
"assets/assets/images/welcome/Enjoy.png": "479ec49d24d0ac311d7c6a2e5c56aeb0",
"assets/assets/images/welcome/Send_money_to_kids.png": "81d6a035142c937b32c590c792f39cfc",
"assets/assets/images/welcome/Kids_choose_what_to_buy.png": "18c63d7016529b6743fb6a306bfa0286",
"assets/assets/images/black_background.jpeg": "1466ca3aa205f14dd9f76e62b0315743",
"assets/assets/images/choose_product.png": "c304eb4ec7e63274f0a5715d234b8694",
"assets/assets/images/@.png": "ed41b4f4a38455b1178e12288da0b206",
"assets/assets/images/birthday.png": "dd275db8520cf146d41ddd84012e2394",
"assets/assets/images/ketshop_logo_white_text.png": "5ebe46c2f5edc5d2d63782c8b541a4ab",
"assets/assets/images/remove_item.png": "efc5e5aabe98c088f922001b53cebb78",
"assets/assets/images/cloud.png": "2ab78e284dff222be6d4392b2fe9abba",
"assets/assets/images/chiildtransaction.png": "74df0e72ccf7ba6b5b2cc4b511f85b8f",
"assets/assets/images/no_shop_item.png": "93c9509718e0e93171289846761872dd",
"assets/assets/images/bx_message_box.png": "d6b05cc6d1a9ca04adc5cda9a25ae4a9",
"assets/assets/images/circle_piggy.png": "6efec3fcd96cd1bf160401f9cddc26f2",
"assets/assets/images/ketshop_logo_white_text_splash.png": "d108122d492115b7756a92da8211f699",
"assets/assets/images/bg_create_password.png": "62ae94a76ff8b9b6ee3554af96ecddcc",
"assets/assets/images/icon_add_black.png": "bc8bd06066a7b3dad1e85db19089fa65",
"assets/assets/images/childProduct.png": "f5a20134a742a6271ab961f7f2556abb",
"assets/assets/images/ketshop_white_bg.png": "4f7a57ca78f6758189a18599acb0e0c8",
"assets/assets/images/add_item.png": "b069acbe707b3b2ef7439b459e260142",
"assets/assets/images/gender.png": "95941ae1d87570693c3c1fb5fcfc5408",
"assets/assets/icons/transaction.png": "2d23b6748b8db27155bab07545c00947",
"assets/assets/icons/secure_payment.png": "bb1f5f5148b8c418d44733ea83c073d1",
"assets/assets/icons/pending_status_clock.png": "9e6ecb2c71386994dc6f702344c1b730",
"assets/assets/icons/circle_shop.png": "922acf2226ac36feb0fe55540bca5001",
"assets/assets/icons/cart.png": "945d53d6a6711ba8b62de9303ba5b74c",
"assets/assets/icons/my_kids.png": "66f29668e4e30dc5b316c0adade8463a",
"assets/assets/icons/clarity_warning-standard-solid.png": "7fa469361c4f74cf95d2e1c9e118c6a3",
"assets/assets/icons/circle_plus.png": "bc7005a4221b3f0db799b859002a9a0f",
"assets/assets/icons/expansion_close.png": "451617eadd7f2519ba91ad034482e7b4",
"assets/assets/icons/applied_for.png": "4f18b0663d50a8fa46b8ba742547e954",
"assets/assets/icons/circle_dollar.png": "e2fa74079a4071a2fff9ec364a9dab8d",
"assets/assets/icons/blank_broken_heart.png": "d75b53bdea81fb631ad1b0f05e741cff",
"assets/assets/icons/expansion_open.png": "c8259d063b97f64e24c633bf8aa02b77",
"assets/assets/icons/icon_danger.png": "f2661c6c889638749ce3858f729d55cd",
"assets/assets/icons/cross.png": "ae5deb60996701e56e303c433a5a2744",
"assets/assets/icons/pencil.png": "32f356fa0cec02e8cb73c2698e69546b",
"assets/assets/icons/danger.png": "fa56c3d941fe6a1856a546dca8c930f7",
"assets/assets/icons/right.png": "c3ce96083b2acd04ae07bebbd8e2a445",
"assets/assets/icons/KETSHOP_ICON.png": "e6db789b800c0f40bb332130e3186918",
"assets/assets/icons/piggybankbroke.png": "ff7780b98442aa05f514b1f127ad052b",
"assets/assets/icons/check_circle.png": "9f69672ebeb2594f7e1f727359057d52",
"assets/assets/icons/close.png": "6a315a77c9204cbd761bc4d580f43e9f",
"assets/assets/icons/piggybankbrokewithnobalance.png": "f3559c030b656d4a98c73ea088215910",
"assets/assets/icons/blankheart.png": "d53e7a5f1c3784b6af56440f8f0446bd",
"assets/assets/remove.png": "efc5e5aabe98c088f922001b53cebb78",
"assets/assets/fonts/Quicksand/Quicksand-Bold.ttf": "0738679df4cf4e566f60343830da7bfa",
"assets/assets/fonts/Quicksand/Quicksand-Medium.ttf": "865b25e449878b6b4d1f9e098ff2f510",
"assets/assets/fonts/Quicksand/Quicksand-Regular.ttf": "216d43ee8707910af457af569eda1dec",
"assets/assets/fonts/Quicksand/Quicksand-SemiBold.ttf": "c82b184bf7450e14adccb7b0d6117474",
"assets/assets/fonts/Quicksand/Quicksand-Light.ttf": "188ca708e4cbbbe3837c3d904b8eeb61",
"assets/assets/fonts/Spartan/Spartan-Medium.ttf": "7bc456708901ba828fe5ee9803962ce5",
"assets/assets/fonts/Spartan/Spartan-ExtraBold.ttf": "94468be5b10313c7c3b7f7d0af5a8435",
"assets/assets/fonts/Spartan/Spartan-Thin.ttf": "f73c0eed7364f951dabf8b9059eabed4",
"assets/assets/fonts/Spartan/Spartan-Black.ttf": "2af453916df814fcf426f993531834ca",
"assets/assets/fonts/Spartan/Spartan-Bold.ttf": "a3b8dba87c8a969c604cab9f4267e628",
"assets/assets/fonts/Spartan/Spartan-Light.ttf": "9db064d86ea78b3a32b5c9d326739e15",
"assets/assets/fonts/Spartan/Spartan-Regular.ttf": "940184baadcd8debdbd01951870c0ec9",
"assets/assets/fonts/Spartan/Spartan-ExtraLight.ttf": "9d9d3e87960af91e1a7bc2fdf649825c",
"assets/assets/fonts/Spartan/Spartan-SemiBold.ttf": "685afe2283f2d6006cfe243a161972d1"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
