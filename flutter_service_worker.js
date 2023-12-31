'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "2337d89a097b8f9a9b509fa1dcdbec2e",
"index.html": "6f74ea54d3a0c7435dff7b344022db6d",
"/": "6f74ea54d3a0c7435dff7b344022db6d",
"main.dart.js": "ea82ac1f82156d78647012172a0c346b",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "d5719e2c38d03844e7af6bd006531517",
".git/config": "d9edfc1720ae28f6bda56ba288d001f7",
".git/objects/59/ebb01c1e904668a843cfd94cce2ee4e29dc6d2": "17b6f8be284c25eb937428bdde42fab4",
".git/objects/03/c531a7a4eadfbb97e5434401927ee31890cf33": "fe6b24f60048b7f218835d95c2c650ae",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/56/8442c3801ea227d9f3ab777afce09ea3da600f": "60314e32b9809a41fb070813a3582980",
".git/objects/51/34e6402246228fb7f58ce8fe76727a61d99a62": "6b5e5b48febe40daec7062aecdc3b39f",
".git/objects/0b/85bcdb86bf9e9f9fda81b13cec9c9349d47d77": "77cbf4b6cc88e2471afd14a98ef2e0ed",
".git/objects/34/8e0031ceae7f26a0e42f6f8147334b1da06069": "ac2d44dc68ef1c90218b5816ff2dd9eb",
".git/objects/b2/2fdb2d1fa6a3bced274617d58f6ab432bb0d8b": "1b405e4dfab487f51d41422d52600614",
".git/objects/bb/b3053388d16f591828f64b01fa80fe714b5144": "d891d037a4fc437f8659c36f5e62f309",
".git/objects/bb/fca082a969fe6434c3e7b718c5b85421ddc906": "11d549367ab861493b72faa0951801b7",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/be/d11865be06f2d4d1161dd4c6d06a44b194d826": "b156240895b6275eeb6f0bd8a73e4c29",
".git/objects/b4/8517dd4f5f24d5caa4199beb067e83b3657930": "6932c49946893f9e5b5933b3794ca55f",
".git/objects/a5/cd7eab621d7941af6c808755cdf943247b48f2": "8e060047af06cbf5dca30a6821f836ce",
".git/objects/d1/121f296281efb5a3adc017fe0aa7b56320708c": "573cb3d26b273772d72fadb5d92f0d68",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/ae/37803d1933c3979fd1b939ff61cc667b0b70dc": "f5c08c98e82ebd9034dbd78b64a292fa",
".git/objects/f3/72d2d3cf2ac5ab12b65900f90e9d2c776c67b4": "491c6ed57f5cbcd0a472a02ec321fa70",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/c7/7e11e5ea87b1ffc35526310dbaa1380d36185a": "0071d2fd3bf0e8ba1c7282b8e7a62035",
".git/objects/c7/03dd3b2eca0a40cbdc4af7f60b7a54bb8eb247": "89900ad3b30bc75e84ac7530e3e98820",
".git/objects/f2/e999c36f18c200122bf87972f648973a86cfcb": "0ee836816a10c27a798546c0b2d1e8cd",
".git/objects/e3/b6330d9b2dd63048253a6c0e271b939bfd98c8": "fb4bf8390e94584543ef6e6bf13e70e9",
".git/objects/ca/bc4a79c71effe5ca870508d63a63477c803868": "96ef2a08326b55dac29022c7be1a609c",
".git/objects/c1/73a9888992da4296e0b9be8aea4faae57c4fdb": "295e608d12e013536aef0ee6f69c6a7d",
".git/objects/20/d87d117c31184ea7e3abbeb48bbc95a9f4424f": "c1dda5ef7e85559f8651cb33da3bce85",
".git/objects/20/280295d9d354e2c9188fa6b55409eedb02dc91": "b48ec929a5de3d76b15873b35ab6edcf",
".git/objects/20/a63ab45a861f122652453d3fd6c6d8f8952947": "8dcad0ed9534b6eb7014793ab40aa335",
".git/objects/18/ba857b4651115bdf67296248ef9b6b1181bd10": "8da6827818ba609f03d055376e7d0682",
".git/objects/11/56ac66516929f9dca0b84f20a167c9a677747f": "323b720cc036ba07a7538d7db2660c4f",
".git/objects/11/56fdf9fd89ac427bedc2011118c4edd0c0e553": "11a0d42767a3d84f147aa6d0956cb162",
".git/objects/7c/cef358a77df4b9579be82e70e166f2a96ce2a0": "74fa8ed63f54565af08b9e05f9327b3b",
".git/objects/7c/a007ed5595b3f5e44be2ce2c70ab42eda6eaca": "91f94654532d175060279a52059249ec",
".git/objects/1f/4475a19ff0101db6ef262f0fa3e41c1c27bcd5": "1408c663db6af810889183e8ce629dcc",
".git/objects/1a/dbbb1679d75b51d160853c7eec26a7f6e331e7": "c612e39a5903208a949c77b0c746a8fd",
".git/objects/1a/dff2ba58365a976322dd00ccf442ad2e3ce9dd": "1d96a25e0fbb4171166701ea02114537",
".git/objects/8a/e2338468ddda6e1b7d5599d5ebb0bf320a86e2": "0b9c9da3382e8a2251d94ede97e743c8",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/7e/beb1b8bdb9245a88d5d4c01d8e704741e0a7d7": "3386586f0d7aa80f2725bcb4a239f32b",
".git/objects/19/6817c3c68a9336564d35a440ec24e543a4fbc6": "49d4b11883f9531cb0c8253f7e4f0ba1",
".git/objects/26/14951a74d94275498306667ebd30104ac32b2d": "11944acc7b60ba4fcda0c03043aa0910",
".git/objects/26/aeafc2762285ad08bb376563fdff76499de20e": "685b77a528f90d974f6771598a64fdc0",
".git/objects/81/50d78f1d0c3fa7dc2b90438e2306b75587a4b4": "8559c97d768089ce9a522dca289aa665",
".git/objects/86/cbd1716f08f8eae4e8097bdec447c87e8cb98c": "2ffc669f070aae09030f0826ccb3e5bb",
".git/objects/2a/0ae99b1dff7f520a15cbe211752a654d390b9e": "6c601b166ebf5b1a4f9462634dbdc4a4",
".git/objects/43/fd96be0d53ed3eb6802bf30f71e67eca369284": "5496e11606f4b2cffc542baee98e8bcc",
".git/objects/88/8e768e6be005de834d197a0ed92e1e063f031b": "a2a9822502d3ac17269d724074567e2c",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/07/0729e94fa8fc58209742f57be956668b96e546": "20448d7a3c07eae5f2e15022440451ce",
".git/objects/00/da0225ff121fbc4f577280b8de3eeca67bdc6a": "7be69ddca0ab9b5e234467fca84944ab",
".git/objects/62/4af0f8e09859d50e2651efd36ff92862b17fbe": "8e3891bbc40f875b67d8befe2c571084",
".git/objects/62/71c620c6692f50e1d13d29c5e6a97ca05aa1d2": "772fe39fc8b6a67229e0732f0e277223",
".git/objects/62/a01d6826913d9efa140d2e9f4bc0f13918e607": "44ba2af6a4f05cb190463143170ae010",
".git/objects/62/9a75b0bc008a0c03cd0864adebda83da437df5": "cb2bfee35f7e945eb260574278206f9c",
".git/objects/3f/4aeeae4acfacd5026d7a485b6b3e1bd198146d": "e4759966dd5d9b9d3807fa83eb3253c3",
".git/objects/37/7580cbf691d03aea79c63a3a251b1b48ac01f1": "c196d282a50e3c372b4445c6b8868297",
".git/objects/39/41c210b785c6e20159a5dd0768297c0e4fd241": "93445da75330e38e5f07dd6dfe253872",
".git/objects/97/fbf37303472b8cae12c9ea78db7d2dd64480cc": "f27476b37e31b06c0a012c29ba501a4a",
".git/objects/bf/33180ca5576a394237338b5e99f8f2f2a78f7e": "10c2313a23510e9dcb9baa91a39581cf",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/d4/fb6698b60d87e8fb9f5a5e87d272a8754fc917": "0693108a01aba7591a4106b8c6475c91",
".git/objects/a0/d32e0f55af045c709dccf587c605a3497200d2": "a55b7a950e0f28784516f875c8f65a6a",
".git/objects/aa/572920b50a99c699628546e99b7f745a8fc107": "9521a99fa283443a67a4c3fe0e23c5f6",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/db/1f204c0d33a57a2801ae46a831395d733bfbb3": "cbe285eccfd6ce2944184568b8e2caa3",
".git/objects/b0/cbc5cdada9f526887f7f8259bdf4c8bcc3140d": "b55619ecc9e5523c8cb47caffb28d151",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/e1/6ccb45089f381aedd61c8bbb92a2e4ef905b66": "257b0add3ec836b6d1f1c12cb8c120c3",
".git/objects/cd/d83a0e3e0cf90202869766152ee60e1a9ff211": "cef8a53559ab1902b022c659b0658d4c",
".git/objects/cc/da693dcf24d894fd40d917b084600baf35135b": "8f6c0046fef348bf0ba8512b7b674d11",
".git/objects/e6/d9ec65f862b9baff0aebb5612be17c4fb7dede": "cef1116b823d27553c5b55d67299a831",
".git/objects/f6/4d4140c9e5c05ddf75dfe7b2e58576b61022fd": "8ad7d0ec39ad921c8144eb3db276faa0",
".git/objects/f1/f4bb91cd7696fc1494e4d4e6555219d4040b90": "8328e471011eaa60dff0ea01f5870ddb",
".git/objects/f1/ea4a59ce52a55ad58b81f9f5b9ce864f25e204": "d9cba451ea75a7edade0e877e180cd8c",
".git/objects/e7/5e920f175da53dd6f04d858636baa25dc702f4": "0fd694d0b7477cee41611e70d0cd6732",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/79/e989ae065ed3533873059475728e08b2836a77": "9ecde4aa4447528af31a0226f2516d65",
".git/objects/2d/e75433927ee126c2bf29de2d06718f81e25f44": "aa1c4ab60215cfd57e7b0420c0999629",
".git/objects/2d/31c05e1f92f7aa3c56c5f7d0230217d17f83bc": "ee3252d3c00a928ffde8ced8c2f206fc",
".git/objects/77/994057bc051b0eec4794baffb364f7f05bf4f8": "483155db50bcd8ad2d40a4cf33721969",
".git/objects/1e/bf993c04c08e17a0122730f8d7ce6e139c8bad": "eeb4f0d71f24758335fe1753273ad6c2",
".git/objects/23/5ca35f8a46759174388bc5ebb7e9dbd93a6ebe": "ffd16cccecaf5a9a015af85c2da6fb50",
".git/objects/1d/384f3748038966a5c7316223edf120dd5894dd": "a8d542276aa823dfefb8d26439e1077a",
".git/objects/71/7c3296541b61a4ca4bb72dd8e0f844a963c1b9": "c30c08070c2d7e05fa60644e433fc5d6",
".git/objects/47/54b50299f8a189cf675df0a5f92e2528f2bde4": "753b38de645b276639f6d6e248d3ef4b",
".git/objects/7a/3e45e4f2f15d7fe0e19a8082bdf7a965a13e74": "839f2b813e19669ee7dd8045c9cc7a7a",
".git/objects/14/3dcf700e7b5104a49536a348414c5bdb80693c": "27151d5f1607151fa34a4223d4eef935",
".git/objects/14/a8248e576ab548a81d6763b401d21d2ff2d4db": "c8f67f215cc336b4659c619b8b5a76da",
".git/objects/8e/7f4b338840099949781ab85496d7a67fae46f1": "7f2803c236e9e7d95ef6ed16a3a2bd13",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "122c4f7424a99585e2e2f79444ece07d",
".git/logs/refs/heads/main": "122c4f7424a99585e2e2f79444ece07d",
".git/logs/refs/remotes/ecrit/main": "1f29234c33c3cdf1fc454ae93610f893",
".git/logs/refs/remotes/origin/main": "348f81ecc9221327cbb04b3da3b5e6b9",
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
".git/refs/heads/main": "f795049af812cd1da57db8aedef4865c",
".git/refs/remotes/ecrit/main": "f795049af812cd1da57db8aedef4865c",
".git/refs/remotes/origin/main": "f795049af812cd1da57db8aedef4865c",
".git/index": "16993f8f5666ffce8120578ec9baa7ea",
".git/COMMIT_EDITMSG": "c6126ba3ce99d0f28c4f7bbb1a652c54",
".git/FETCH_HEAD": "d22bb349df101a6c23a91e72ac816f4b",
"assets/AssetManifest.json": "ecc8fb57c5d18f120df2cc394eacd227",
"assets/NOTICES": "227abc01bd90a4b77f8ada057d0fdf32",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/packages/model_viewer_plus/assets/model-viewer.min.js": "fb3df9ef8e49b5e08b6afcb95521a52c",
"assets/packages/model_viewer_plus/assets/template.html": "8de94ff19fee64be3edffddb412ab63c",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.bin": "e2ef80695d480efc22ee69a1bcb2ef57",
"assets/fonts/MaterialIcons-Regular.otf": "449007e6b5d67da3376f54a08ac0837a",
"assets/assets/image/hand_cream_detail.png": "7a6a9afd3ebcdffda65d8e60fd9cdb9a",
"assets/assets/image/hand_cream.glb": "b0eb97020d3249dc2908d13a53fa50de",
"assets/assets/image/hand_cream_motion.gif": "7aa312ae8a0ff36d31eba5c8d34bec26",
"assets/assets/image/Astronaut.glb": "f3152ab191c5a7dedad016c9b16308f3",
"assets/assets/image/logo.png": "50129ef27e5b0dfc879d486e1bf7a954",
"assets/assets/image/perfume1.png": "e913eb171952a8523ec6645bebe0263b",
"assets/assets/image/perfume3.png": "273ab106660fe09fd67109820385905c",
"assets/assets/image/perfume2.png": "e59cf157aabbeeb7e388cf4536f9f555",
"assets/assets/image/hand_cream_case.glb": "1e71c457725b5604efc517983480c4a4",
"assets/assets/image/poster1.jpg": "552fd79d5aedf801828036b5926bf3f4",
"assets/assets/image/poster3.jpg": "6f1d1238c94479d242ba5faa7679e4a3",
"assets/assets/image/poster2.png": "7a43be8602cc42d938eaa281c0f9d51c",
"assets/assets/image/perfume4.png": "32aedcd1a78abae382f709eeea752e9c",
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
