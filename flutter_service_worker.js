'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "2ccbb1c1765263453b19ce34998f4e7c",
"index.html": "5e789570e77399e58a8ffa47308a1112",
"/": "5e789570e77399e58a8ffa47308a1112",
"main.dart.js": "badf4bc41bc8330456b28d7725dcba31",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "6c0301e183576edec755029bec7ae054",
".git/config": "6892b1b289f435269245e69c09f99748",
".git/objects/68/871fdba82871e6d2ed523c193d0d379c44d613": "31a7964aa50879f989687c9209223471",
".git/objects/03/476d32f6533c862a480d9d895773c85d2ec2bd": "9575fa59fadcad8435a265401bd1fdc3",
".git/objects/04/da0beb4a78e743558fb926fed3fac995af947b": "0aadec120083751a8fbdf613cef1d433",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/3d/5b84657095efec70e38f5afbaaf86eb3a2df79": "a60a2dc059444eee3c0665c59f8eb0b1",
".git/objects/3d/3c5ddc7595df6e7299a66f1861c6cef9f95733": "80d7c05529b343a26d46344d21edc164",
".git/objects/67/443513b9887ee590f522cfa2594576256a165b": "c9c42f2839e402fa46b616765ef3b950",
".git/objects/0b/60f2f02e193ac47134afacf53f2612e2516ae3": "89457c85b2c03f63f5aceb020179bdfd",
".git/objects/93/adc3fa119bea0cdd7517cb5d0b18238aabe91d": "4bcb1c8c0538e76ed95b7c6b79566060",
".git/objects/60/505aed8634fd2c336dea550695aea39a7c01eb": "b8edfc7f8c2f8e2d1bbb2af879cf00a4",
".git/objects/5f/cc121a9ca788272660220ae9f125ee156d5c5e": "f633368a671bbc974463d4cf0395a550",
".git/objects/a3/d73c8d65fe11d9cfc2021a89b9ec1e6c298979": "2073c1da229ac0621bf5437c620f1873",
".git/objects/a3/93c25ee34e75a6436c0b7b3069f1f5cf4f32cb": "336595b7983e3360c7bd71def3e4ce94",
".git/objects/b5/3e8e7ea1d062fb985385d9333965819daf05a0": "a78499711b751a3458f1f455aecbb4c6",
".git/objects/d9/71424cc360fc8e86bbb0df8cab1bc561a17c48": "4bf2d39a1d656a4c142192a3ffe52893",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/ab/359e56fe2d5b082c912dec56244ac1008205e6": "ad6331daa152c17ca012f41dd2f570f4",
".git/objects/e2/adaab5db1b747b53ea9208c378d14c9aae021f": "deef41aeb94aab74d9169e5cd5905245",
".git/objects/e2/6464a614b1c015cf5211c32d81ad902ed36711": "750ba7f2659e713a227bba28b86e4693",
".git/objects/f3/d714d5fa68098a256d69d1a32c315b6081c1b1": "df5bd38f730b02535872063a3218ecf9",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ee/6577f96e41ecb9cd3a4c03906946834b1a0ed6": "fd6af2fb7f57322b811f354dab03b217",
".git/objects/fc/de1bb3df8c330568f07ef326d43d8ae3562897": "6e5bf2450330342c243afc3723b9c27e",
".git/objects/fd/0ca061a1dd466904328eaee98c24cffda75590": "6be2c9eae90f2d240316cdb58c13189e",
".git/objects/c8/68e548e64499557ea7aabcec4d96b743a6f8ea": "cb6348d38602a9f04ce95e0aaeb9c2e8",
".git/objects/c6/ca9d97dadbd809e63dd9388113f72c727fb4a3": "cd8394f5e1c5b4a04b1681516e97f1a5",
".git/objects/20/8b38796c062adddf6131218d8eab5bf61531ae": "a850219d6650cb37c7eef069a0765589",
".git/objects/7d/96a5e995bce2e1794650f982ae783ec14d6573": "05f639193d5dcf1ebb572d63867b4f7b",
".git/objects/16/6d937b9fa79cbe7130a4c32b90327efcb8de88": "e5e5bc96c9553e5df62525497f5c3d67",
".git/objects/16/3d6ba94a7187061e57a62bded1235c14554a4d": "c45691fe30360afdbb003ff91018172c",
".git/objects/42/df1702900dc94c099a42bc176d32571c43186a": "a46c3e70e9ada051ee53054f759c1da3",
".git/objects/80/0bb0f2f8e97b1dae4f3d2da9301b7ff6481f5e": "641e423db229f0575a70e1d8f81a2802",
".git/objects/74/488af067912fafe3d1124424fca42b2d5b352f": "22a7090051d980b43f6f41c57c6898b0",
".git/objects/28/2e88b06ce6d459f91213143a16e611fd1901f4": "3cfbf7ceb9fdfce0f3b66e3d87adf205",
".git/objects/28/db7ac03aa23af0c13daf4c96a64e6850129b1c": "f854e8e4b3d3fd466f7fdb4931a10d23",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/10/6e4c0703a5c721924c1fd980950b5eb8da0b70": "76ba09fec673916332a7ab0b0b4b9bdd",
".git/objects/19/c4b551ad0f92b5cfd39673da79865922210bae": "66e169309c552c1e5551699b357a9141",
".git/objects/4c/f163bfe2478d5bcff267b559de41710d278af7": "f3902f948291f941a9e683f3f29542f0",
".git/objects/75/2c0eef00fa5b5bcde5842fa609b36bf0a8fbb4": "a0ffa26ea0d9adccd6e47f57dde83cf0",
".git/objects/86/d1121dd12681329b33fe188ed09b788536f2c3": "d8fc42ec00c00928166441696e18ad15",
".git/objects/2a/19d0a94ad3dcfa5d9d994b9ddabdc4056f8a4d": "092296e7b88ff718692879157cf21a34",
".git/objects/2a/52b747c0095b830252ac2fc7a0d84cab21b62d": "0a42eec4843d80b769150a44e3abedd6",
".git/objects/2a/0a5b41594cc0409bdc4b1ab804ebb581dfaba4": "92cecb70a2194024704a73e28e94073d",
".git/objects/43/2511c2d480e97f6195b820a7d7eaa5ce43bc69": "5134f1af40f1ec21e197a2d1bb547c20",
".git/objects/43/c838eea8a269a8482e35cf36a56133d7199348": "ee74857ccdfde58063a99dfc3176aae5",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/9f/7f931f7348ae0358911e6bab46d8fb573586c3": "853e700c4cb824e5fa2fb831731f04be",
".git/objects/9a/77a21fbd521a421fe572f2a29187cdc73215d5": "e4105b3f69afbf3ff916b4298583736c",
".git/objects/91/790ea66a34ede9dbfefae1725e4033b45eecec": "9f0120681cef12a307b5b7640a5b2c2c",
".git/objects/62/69a24c35f5b2501311e6c5e07d7f8a188795f0": "474caaca870976cca9e9ed34f378c24c",
".git/objects/53/79ed512773f131061a4f0e822af0d76092f9d4": "82a8d29b1097057d43b330cc4792e74f",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/5b/b6e03c7a51db354e2468afe4fe3ef79e12a5b8": "bd6d7cfcadb33581c0fe2354bde29966",
".git/objects/06/b055360768bceb1cd0dd4138dc5c312df47447": "da360652e94569beeaeb1381375d84b7",
".git/objects/39/51b159a715bd963b9bf0d759b974eb0423472f": "c6a66561772f702d7c06854a6e3059e9",
".git/objects/55/10c390d5275c73c5f2388475f0036b66610534": "96d99cecc193ff29f6c2111db57219e9",
".git/objects/0a/935ed990c0bfb48d706ebfb225f09b10da9ee5": "938cb1dcc13617c7915139972528ddc3",
".git/objects/bf/e6509586aad507a104f949fce0a6d5bb4a4af6": "debce89288f64bc24921a1d5ba4e0e80",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/b6/ffad2ebd14c9e2a3637d028b8f31e518f4975e": "bff7442f6585da448a33cb5071ae47c1",
".git/objects/a9/5fa521ec845757f871b644aa7eb97d1c483859": "30d0e971bb36c5337ed884154dbb3dda",
".git/objects/d5/b54bd4a898b373f82bb1fa52b9580e7a976e3e": "943e27e1d359e2bc22daf20c70287c19",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/db/b38ed8bd014d6fa2b4e2b6a1e2f8adbae2274b": "5753ac358546a7c7c7846ddbce10bedb",
".git/objects/a8/234e78324011301c932efde8dd789fba10495a": "5ad9ca983e505191e13f526cf3be6ade",
".git/objects/de/22e1b933d591b8b3845034f4ddcb8478ae451f": "7a4f4b61b891ddda6993190d50570b5f",
".git/objects/de/c0aeb0dd319e8002600888a9115dd69c80474d": "cdee000cdca8c9f584d07f7542a9eb39",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/c3/96fe29f5f447820de422f4c0093c579290dd65": "ae56d96ff68a53add7087f606256bb53",
".git/objects/c4/8437b2b8b4768c05993fe9c7cffb8dbe08a377": "4af89c409fbe2b8997819e5d08926fa3",
".git/objects/ea/861d37d058ce8cd9273e22b5fa8b0d9c5b906c": "fd0f61438f8ae0e4831071a3ca7399aa",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/e8/0eabf054992a79ef2e3cd6cdfe371112364692": "c55d9969ca0f7a2c6176ca8e27765670",
".git/objects/fa/b97c47c07845ad073c204ede667b1970374858": "7d3cab15f9ad01f16274ce4e1e1d0c36",
".git/objects/ff/46e5ed72378cca7692f64ab7d2040a925e6c91": "42facdd7b65d1c5134a075520397c4ff",
".git/objects/cb/b50a11a0693e3869fd2ed94b78fa6f5d3404c6": "7a2462483627a308ba7c0ad08ee9bf21",
".git/objects/e0/49c81f7cb35ebc411a3e1b547bf4ccf91292e8": "efad70dc0ca77a90ee53b5cc3be528ca",
".git/objects/2c/0c296735c547535555b5f2983938236211f8dd": "2d0a5d178431ece9f568494dcef60755",
".git/objects/2c/8b2534f4ecd1282b117f9f63044a7524183f71": "8b2a2662c8797551c0586eb783fdeeae",
".git/objects/83/0e3d19e7f2ff19bbb4b955e3a38e3328837e12": "4412f19a8aebd49e1c2fb821b641e232",
".git/objects/40/315103964144010b6336f30a32c2c23acc27a3": "0b7d2c426233cf30c9391a8e05b1e174",
".git/objects/13/0ebe569a70803825b0b7100c772b69b138f730": "663bad7bf6cfafc1e8afd5ed073402bf",
".git/objects/7f/4d02eb8fb3c8de9167a0f67b540e22cf93f8d2": "63606bd169c07e5d224d63a69611b7d3",
".git/objects/8e/8776a4622f94e725ad4e4d195878cc043217ef": "fe5a72f225f91a0856280923a2e750f5",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "4678db7049656aa4bec9dcf92da0110e",
".git/logs/refs/heads/main": "4678db7049656aa4bec9dcf92da0110e",
".git/logs/refs/remotes/origin/main": "aa5aacccc15139a23a7592a843d26a9c",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "64ff2181e18ae9db71090aca69af4347",
".git/refs/remotes/origin/main": "64ff2181e18ae9db71090aca69af4347",
".git/index": "46f8fdbeade629785f657b7618f79f1a",
".git/COMMIT_EDITMSG": "b86869bba9138d4dbea688a73dc6db62",
"assets/AssetManifest.json": "944da8e65378a62f7fe999e77814e81b",
"assets/NOTICES": "bb57435fa1e38c40ab3f3c82cf473fb9",
"assets/FontManifest.json": "92775a8a6c1892e0f57e9806eb8634af",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/feather_icons/fonts/feather.ttf": "0d0d92d310cc68e53796bf15c36838c2",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.bin": "e778c62615a9e90250a1420be750cd3c",
"assets/fonts/GoogleSans-Italic.ttf": "b08c7421b2d5350ea3003c8f38932601",
"assets/fonts/GoogleSans-Bold.ttf": "c0370e8a74992bab73461f8348e3b369",
"assets/fonts/GoogleSans-BoldItalic.ttf": "aebc8fe5e393970fa3d468524e64b670",
"assets/fonts/GoogleSans-Regular.ttf": "51134713ade7b1f137e06ce395d39d40",
"assets/fonts/GoogleSans-MediumItalic.ttf": "fb674b7b0ac8b18da163673c10081610",
"assets/fonts/MaterialIcons-Regular.otf": "28e4840c65cacfca79b4b3b741ddac19",
"assets/fonts/GoogleSans-Medium.ttf": "6e8db86fe091d16a432715917e040f29",
"assets/assets/io-bridge.png": "a20deda1c638ef4d1ac018d8fcc2af2f",
"assets/assets/google-logo.svg": "ea735e62c31af39012853c932d74375a",
"assets/assets/io.png": "d131ecba7580bf1f53bab8938e2190ee",
"assets/assets/io-logo.svg": "e06be2e6ae97de7e16cf2352db186c8f",
"assets/assets/logo-gdg.png": "734f4158939607f6f68f012b2b1fffa9",
"assets/assets/event-cover/devfest.png": "538af82b91233410e10534237eabcef2",
"assets/assets/event-cover/devfest-green.png": "6650f68a9477da86231dce99b725e588",
"assets/assets/event-cover/startup-success-days.png": "007a4292ddff93318746fa444484207f",
"assets/assets/event-cover/core-team-recruitments.webp": "2e86e3d933aed5d1ddbb87e409aa3cc9",
"assets/assets/event-cover/devfest-yellow.png": "e5c35a72f175301542da46bae5a7706f",
"assets/assets/avatar/yellow.png": "d6064edc092dce86fd078bd706dbfc38",
"assets/assets/avatar/blue.png": "d47b59f1822f014908cd8b08d3db64f3",
"assets/assets/avatar/green.png": "7b5f536dc3c8886f893bd1d46550b9f8",
"assets/assets/avatar/red.png": "5b782b9e6e132c5cca0bc7720bc3b3e3",
"assets/assets/cycle.png": "eccd3e60ffb4b0828d6ea71513c77d2c",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "d1fde2560be92c0b07ad9cf9acb10d05",
"canvaskit/chromium/canvaskit.js": "96ae916cd2d1b7320fff853ee22aebb0",
"canvaskit/chromium/canvaskit.wasm": "1165572f59d51e963a5bf9bdda61e39b",
"canvaskit/canvaskit.js": "bbf39143dfd758d8d847453b120c8ebb",
"canvaskit/canvaskit.wasm": "19d8b35640d13140fe4e6f3b8d450f04",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15"};
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
