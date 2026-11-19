/* KPSS Kokpit hizmet çalışanı. Derlemede sw.js olarak üretilir (vite.config.ts > swPrecache):
   __VERSION__ ve __PRECACHE__ derlenen dosyalardan doldurulur.

   - Kurulumda uygulamanın bütün dosyaları indirilir: ilk açılıştan sonra internetsiz de tamamen çalışır
     (bütün ekranlar, PDF okuyucu, yazı tipleri).
   - Uygulama her zaman önbellekten açılır (anında). Yeni sürüm yayınlanınca arka planda indirilir ve
     ekranda "Yenile" uyarısı çıkar; kullanıcı dokununca geçilir. Böylece çalışırken uygulama değişmez.
   - Veriler (kitaplar, notlar, kartlar) IndexedDB'dedir; burada değil. Yapay zekâ ve Google istekleri
     hiçbir zaman önbelleğe alınmaz.
   - Aynı alan adındaki (esm3r.github.io) başka sitelerin önbelleklerine dokunulmaz. */
const VERSION = "4bdd7921bbed";
const PRECACHE = ["./","./apple-touch-icon.png","./assets/Analiz-BblJbkLN.js","./assets/Ayarlar-B44bbNaU.js","./assets/Cizelge-B9MIO-7N.js","./assets/Deneme-BKNARAus.js","./assets/Harita-CMnYlyeh.js","./assets/InkCanvas-n2wXzgsU.js","./assets/InkPad-DO0y5Ckv.js","./assets/InkToolbar-CgHBivZL.js","./assets/Kokpit-B2HBFxDT.js","./assets/Konu-CYT3rLhx.js","./assets/Kutuphane-C7Rn8oE9.js","./assets/Plan-D3FfPrx6.js","./assets/Sheet-BQpu5Xt9.js","./assets/Soru-CRLcRUGr.js","./assets/Tekrar-B5KstY1D.js","./assets/TodayPlan-COCp_CN3.js","./assets/Yanlis-BpOlP-Fa.js","./assets/arrow-left-CMdkK-Nn.js","./assets/arrow-up-DVCSXdoe.js","./assets/ayarlar-Cy8MikHN.js","./assets/caveat-latin-ext-wght-normal-Byk3UhVp.woff2","./assets/caveat-latin-wght-normal-C1hSzPvX.woff2","./assets/charts-BO1GwX79.js","./assets/check-COiIg79V.js","./assets/chevron-down-DRpRRvsY.js","./assets/chevron-left-CL4PVu94.js","./assets/chevron-right-D1Kv1_MK.js","./assets/circle-slash-Bzl6kQeA.js","./assets/clock-DYZUx8Jc.js","./assets/controls-Bym9A1vf.js","./assets/error-wJ5RwKpd.js","./assets/eye-RkRz1vs6.js","./assets/file-text-8iOi_NYL.js","./assets/flag-CHg_LYvq.js","./assets/flask-conical-Dkcbx10k.js","./assets/fsrs-hJx281ZP.js","./assets/index-BUDydkDe.css","./assets/index-C5pjhnrw.js","./assets/inter-latin-ext-wght-normal-DO1Apj_S.woff2","./assets/inter-latin-wght-normal-Dx4kXJAl.woff2","./assets/jetbrains-mono-latin-ext-wght-normal-DBQx-q_a.woff2","./assets/jetbrains-mono-latin-wght-normal-B9CIFXIH.woff2","./assets/keyboard-BYwz2xov.js","./assets/layers-C9M89kUl.js","./assets/list-checks-DPaRtHym.js","./assets/loader-circle-Dev2ElET.js","./assets/lock-DP7okcCD.js","./assets/map-pin-BWmmrXWZ.js","./assets/minus-CpDFJRxM.js","./assets/mock-DfU0eltL.js","./assets/model-wlLOxDs_.js","./assets/node.browser-CGfFuoKj.js","./assets/node.browser-Cknm30q7.js","./assets/pdf-B74lkZf2.js","./assets/pdf.worker.min-CIqJB0yW.mjs","./assets/pen-CZMd08s-.js","./assets/play-DhKpIvfr.js","./assets/plus-B1tg267t.js","./assets/process-DFYYOfwy.js","./assets/rolldown-runtime-XKyaHtl9.js","./assets/rotate-ccw-B1yWhN66.js","./assets/scan-line-DmZARaSC.js","./assets/shared-C_lPW61p.js","./assets/shield-check-CxxbTTM1.js","./assets/shuffle-C4OSJPto.js","./assets/space-grotesk-latin-ext-wght-normal-D9tNdqV9.woff2","./assets/space-grotesk-latin-wght-normal-BhU9QXUp.woff2","./assets/sparkles-Bjs8rTr1.js","./assets/sunrise-BtJMbbUo.js","./assets/table-2-ynvNluDM.js","./assets/tablet-DvrvRQUD.js","./assets/tekrar-DNjdzhpp.js","./assets/trash-C-l3O9S3.js","./assets/triangle-exclamation-point-CLxH8d4N.js","./assets/ui-DwwilN08.js","./assets/wifi-off-CDtJm5G1.js","./icon-192.png","./icon-512.png","./icon-maskable-512.png","./index.html","./manifest.webmanifest","./pdfjs/iccs/CGATS001Compat-v2-micro.icc","./pdfjs/standard_fonts/FoxitDingbats.pfb","./pdfjs/standard_fonts/FoxitFixed.pfb","./pdfjs/standard_fonts/FoxitFixedBold.pfb","./pdfjs/standard_fonts/FoxitFixedBoldItalic.pfb","./pdfjs/standard_fonts/FoxitFixedItalic.pfb","./pdfjs/standard_fonts/FoxitSerif.pfb","./pdfjs/standard_fonts/FoxitSerifBold.pfb","./pdfjs/standard_fonts/FoxitSerifBoldItalic.pfb","./pdfjs/standard_fonts/FoxitSerifItalic.pfb","./pdfjs/standard_fonts/FoxitSymbol.pfb","./pdfjs/standard_fonts/LiberationSans-Bold.ttf","./pdfjs/standard_fonts/LiberationSans-BoldItalic.ttf","./pdfjs/standard_fonts/LiberationSans-Italic.ttf","./pdfjs/standard_fonts/LiberationSans-Regular.ttf","./pdfjs/wasm/jbig2.wasm","./pdfjs/wasm/openjpeg.wasm","./pdfjs/wasm/qcms_bg.wasm"];
const PREFIX = "kokpit:" + self.registration.scope + ":";
const CACHE = PREFIX + VERSION;
/** Önbelleğe baştan alınmayan, değişmeyen ek dosyalar (ör. PDF.js karakter eşlemeleri) */
const RUNTIME = PREFIX + "runtime";
const SCOPE_PATH = new URL(self.registration.scope).pathname;

self.addEventListener("install", (e) => {
  e.waitUntil(
    caches
      .open(CACHE)
      // HTTP önbelleğini atla: yarım kalmış eski bir dosya yeni sürüme karışmasın
      .then((c) => c.addAll(PRECACHE.map((u) => new Request(u, { cache: "reload" }))))
      // İlk kurulumda hemen devreye gir; güncellemede kullanıcının "Yenile"sini bekle
      .then(() => (self.registration.active ? undefined : self.skipWaiting())),
  );
});

self.addEventListener("message", (e) => {
  if (e.data === "SKIP_WAITING") self.skipWaiting();
});

self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches
      .keys()
      // Yalnızca bu uygulamanın eski sürümleri (ve ilk sürümün "kokpit-v1" önbelleği) silinir
      .then((keys) => Promise.all(keys.filter((k) => k === "kokpit-v1" || (k.startsWith(PREFIX) && k !== CACHE && k !== RUNTIME)).map((k) => caches.delete(k))))
      .then(() => self.clients.claim()),
  );
});

async function fromCache(req) {
  const own = await caches.open(CACHE);
  const hit = await own.match(req, { ignoreSearch: req.mode === "navigate" });
  if (hit) return hit;
  return (await caches.open(RUNTIME)).match(req);
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
          const own = await caches.open(CACHE);
          const shell = (await own.match("./")) || (await own.match("./index.html"));
          if (shell) return shell;
        }
        try {
          return await fetch(req);
        } catch {
          const own = await caches.open(CACHE);
          return (await own.match("./")) || (await own.match("./index.html")) || Response.error();
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
        caches.open(RUNTIME).then((c) => c.put(req, copy));
      }
      return res;
    })(),
  );
});
