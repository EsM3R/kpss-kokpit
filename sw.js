/* KPSS Kokpit hizmet çalışanı. Derlemede sw.js olarak üretilir (vite.config.ts > swPrecache):
   __VERSION__ (derleme zamanı + içerik özeti) ve __PRECACHE__ (derlenen dosyalar) doldurulur.

   - Kurulumda uygulamanın bütün dosyaları indirilir: ilk açılıştan sonra internetsiz de tamamen çalışır
     (bütün ekranlar, PDF okuyucu, yazı tipleri).
   - Uygulama her zaman önbellekten açılır (anında). Yeni sürüm yayınlanınca arka planda indirilir ve
     ekranda "Yenile" uyarısı çıkar; kullanıcı dokununca geçilir. Çalışırken uygulama değişmez.
   - Bir önceki sürümün dosyaları da saklanır: açık kalmış eski bir pencere çalışmaya devam eder.
   - Veriler (kitaplar, notlar, kartlar) IndexedDB'dedir; burada değil. Yapay zekâ ve Google istekleri
     hiçbir zaman önbelleğe alınmaz.
   - Aynı alan adındaki (esm3r.github.io) başka sitelerin önbelleklerine dokunulmaz. */
const VERSION = "0mwnn3o8a-40f0a449d8";
const PRECACHE = ["./","./apple-touch-icon.png","./assets/Analiz-DkBcSP0h.js","./assets/Ayarlar-94TB2nLT.js","./assets/Cizelge-gy4h2UnZ.js","./assets/Deneme-vZm7nzPt.js","./assets/Harita-Cwb4Tz0S.js","./assets/InkCanvas-BktofU0U.js","./assets/InkPad-DKPcelXN.js","./assets/InkToolbar-DBrj5Iah.js","./assets/Kokpit-Bj5sQOpZ.js","./assets/Konu-D5_d5rsw.js","./assets/Kutuphane-DxjjrMy6.js","./assets/Plan-C6NWyHG-.js","./assets/Sheet-BnuG5owk.js","./assets/Soru-hxDKzs1p.js","./assets/Tekrar-BxbDwQWp.js","./assets/TodayPlan-BLCy2XVN.js","./assets/Yanlis-DC3idA3I.js","./assets/arrow-left-BFUrkhwL.js","./assets/arrow-up-52sxiSpU.js","./assets/ayarlar-XaxWHUf-.js","./assets/caveat-latin-ext-wght-normal-Byk3UhVp.woff2","./assets/caveat-latin-wght-normal-C1hSzPvX.woff2","./assets/charts-4OcQGGP_.js","./assets/check-DX9iK5sW.js","./assets/chevron-down-C-qcnG_7.js","./assets/chevron-left-B0d2BaUO.js","./assets/chevron-right-B3rPGh_x.js","./assets/circle-slash-CBokVa_s.js","./assets/clock-CuEb7ZIm.js","./assets/controls-D9Xd7vqL.js","./assets/download-BwP0XdVj.js","./assets/error-wJ5RwKpd.js","./assets/eye-glwIB-1F.js","./assets/file-text-Brhp1cc8.js","./assets/flag-B04t1vxg.js","./assets/flask-conical-Mmk4pz0Y.js","./assets/index-C2pOKALF.js","./assets/index-DViNiEEg.css","./assets/inter-latin-ext-wght-normal-DO1Apj_S.woff2","./assets/inter-latin-wght-normal-Dx4kXJAl.woff2","./assets/jetbrains-mono-latin-ext-wght-normal-DBQx-q_a.woff2","./assets/jetbrains-mono-latin-wght-normal-B9CIFXIH.woff2","./assets/keyboard-Cj-1hN8G.js","./assets/layers-BdHYdKw7.js","./assets/list-checks-IcQ1b-V4.js","./assets/loader-circle-DZi9KYk3.js","./assets/lock-BaIk2EZn.js","./assets/map-pin-IP_1oZko.js","./assets/minus-bB8c5MdI.js","./assets/model-S3-_D54k.js","./assets/node.browser-CGfFuoKj.js","./assets/node.browser-D2uSVCJC.js","./assets/pdf.worker.min-CIqJB0yW.mjs","./assets/pen-CZMd08s-.js","./assets/play-BAWY839h.js","./assets/plus-DnMLQQaL.js","./assets/process-EzVRB7r-.js","./assets/rotate-ccw-DRVeCneA.js","./assets/scan-line-BIOoCpKF.js","./assets/shared-C3MSMUKE.js","./assets/shield-check-jOjp0hM-.js","./assets/shuffle-C_VCbFml.js","./assets/space-grotesk-latin-ext-wght-normal-D9tNdqV9.woff2","./assets/space-grotesk-latin-wght-normal-BhU9QXUp.woff2","./assets/sparkles-DDCvJjrf.js","./assets/sunrise-DcvyWqb8.js","./assets/table-2-Dx-jbEjV.js","./assets/tablet-B7THSHL5.js","./assets/tekrar-DBe64JmJ.js","./assets/trash-8hMW7Gvf.js","./assets/triangle-exclamation-point-Cxq_V-aG.js","./assets/ui-m7HXwQXz.js","./assets/wifi-off-Bb-f7FHM.js","./icon-192.png","./icon-512.png","./icon-maskable-512.png","./index.html","./manifest.webmanifest","./pdfjs/iccs/CGATS001Compat-v2-micro.icc","./pdfjs/standard_fonts/FoxitDingbats.pfb","./pdfjs/standard_fonts/FoxitFixed.pfb","./pdfjs/standard_fonts/FoxitFixedBold.pfb","./pdfjs/standard_fonts/FoxitFixedBoldItalic.pfb","./pdfjs/standard_fonts/FoxitFixedItalic.pfb","./pdfjs/standard_fonts/FoxitSerif.pfb","./pdfjs/standard_fonts/FoxitSerifBold.pfb","./pdfjs/standard_fonts/FoxitSerifBoldItalic.pfb","./pdfjs/standard_fonts/FoxitSerifItalic.pfb","./pdfjs/standard_fonts/FoxitSymbol.pfb","./pdfjs/standard_fonts/LiberationSans-Bold.ttf","./pdfjs/standard_fonts/LiberationSans-BoldItalic.ttf","./pdfjs/standard_fonts/LiberationSans-Italic.ttf","./pdfjs/standard_fonts/LiberationSans-Regular.ttf","./pdfjs/wasm/jbig2.wasm","./pdfjs/wasm/openjpeg.wasm","./pdfjs/wasm/qcms_bg.wasm"];
const PREFIX = "kokpit:" + self.registration.scope + ":";
const APP = PREFIX + "app-";
const CACHE = APP + VERSION;
/** Önbelleğe baştan alınmayan, değişmeyen ek dosyalar (ör. PDF.js karakter eşlemeleri) */
const RUNTIME = PREFIX + "runtime";
const SCOPE_PATH = new URL(self.registration.scope).pathname;

/** Bütün dosyaları indirir. Adı içerik özeti taşıyan dosyalar (assets/) eski sürümde varsa oradan
    kopyalanır; güncellemede yalnızca değişenler iner (telefonda veri tasarrufu). */
async function precache() {
  const cache = await caches.open(CACHE);
  const older = (await caches.keys()).filter((k) => k.startsWith(APP) && k !== CACHE);
  await Promise.all(
    PRECACHE.map(async (u) => {
      const url = new URL(u, self.registration.scope).href;
      if (await cache.match(url)) return;
      if (url.includes("/assets/")) {
        for (const k of older) {
          const hit = await (await caches.open(k)).match(url);
          if (hit) return cache.put(url, hit);
        }
      }
      // HTTP önbelleğini atla: eski bir dosya yeni sürüme karışmasın
      const res = await fetch(new Request(url, { cache: "reload" }));
      if (!res.ok) throw new Error(res.status + " " + url);
      await cache.put(url, res);
    }),
  );
}

self.addEventListener("install", (e) => {
  // İlk kurulumda hemen devreye gir; güncellemede kullanıcının "Yenile"sini bekle
  e.waitUntil(precache().then(() => (self.registration.active ? undefined : self.skipWaiting())));
});

self.addEventListener("message", (e) => {
  if (e.data === "SKIP_WAITING") self.skipWaiting();
});

self.addEventListener("activate", (e) => {
  e.waitUntil(
    (async () => {
      const keys = await caches.keys();
      // Bu sürüm ve bir önceki kalır (önbellek adları derleme zamanıyla sıralanır); daha eskiler silinir
      const apps = keys.filter((k) => k.startsWith(APP) && k !== CACHE && k < CACHE).sort();
      const keep = new Set([CACHE, RUNTIME, ...apps.slice(-1)]);
      const drop = keys.filter((k) => k === "kokpit-v1" || (k.startsWith(PREFIX) && !keep.has(k)));
      await Promise.all(drop.map((k) => caches.delete(k)));
      await self.clients.claim();
    })(),
  );
});

/** Önce bu sürümün önbelleği, sonra bu uygulamanın diğer önbellekleri (eski pencere, ek dosyalar) */
async function fromCache(req) {
  const hit = await (await caches.open(CACHE)).match(req);
  if (hit) return hit;
  for (const k of (await caches.keys()).filter((k) => k.startsWith(PREFIX) && k !== CACHE)) {
    const r = await (await caches.open(k)).match(req);
    if (r) return r;
  }
  return undefined;
}

async function shell() {
  const own = await caches.open(CACHE);
  return (await own.match("./")) || (await own.match("./index.html"));
}

self.addEventListener("fetch", (e) => {
  const req = e.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);
  // Yapay zekâ, Google girişi ve Drive istekleri doğrudan ağa gider
  if (url.origin !== self.location.origin || !url.pathname.startsWith(SCOPE_PATH)) return;

  if (req.mode === "navigate") {
    const isShell = url.pathname === SCOPE_PATH || url.pathname === SCOPE_PATH + "index.html";
    e.respondWith(
      (async () => {
        if (isShell) {
          const hit = await shell();
          if (hit) return hit;
          // Önbellek silinmiş (ör. tarayıcı yer açtı): ağdan aç ve arkada yeniden doldur
          e.waitUntil(precache().catch(() => {}));
        }
        try {
          return await fetch(req);
        } catch {
          return (await shell()) || Response.error();
        }
      })(),
    );
    return;
  }

  e.respondWith(
    (async () => {
      const hit = await fromCache(req);
      if (hit) return hit;
      const res = await fetch(req);
      // Değişmeyen ek dosyalar ilk kullanımda saklanır (ör. pdfjs/cmaps)
      if (res.ok && url.pathname.startsWith(SCOPE_PATH + "pdfjs/")) {
        const copy = res.clone();
        e.waitUntil(caches.open(RUNTIME).then((c) => c.put(req, copy)));
      }
      return res;
    })(),
  );
});
