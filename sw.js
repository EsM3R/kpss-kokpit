/* KPSS Kokpit hizmet çalışanı. Derlemede sw.js olarak üretilir (vite.config.ts > swPrecache):
   __VERSION__ (derleme zamanı + içerik özeti) ve __PRECACHE__ (derlenen dosyalar) doldurulur.

   - Kurulumda uygulamanın bütün dosyaları indirilir: ilk açılıştan sonra internetsiz de tamamen çalışır
     (bütün ekranlar, PDF okuyucu, yazı tipleri). İndirme bitince "tamam" işareti yazılır; işaret yoksa
     (yarıda kaldıysa ya da tarayıcı bir kısmını sildiyse) uygulama her açılışta eksikleri tamamlar.
   - Uygulama her zaman önbellekten açılır (anında). Yeni sürüm yayınlanınca arka planda indirilir ve
     ekranda "Yenile" uyarısı çıkar; kullanıcı dokununca geçilir. Çalışırken uygulama değişmez.
   - Bir önceki etkin sürümün dosyaları saklanır (açık kalmış eski pencere çalışır). Daha yeni, inmekte
     olan bir sürümün dosyalarına hiç dokunulmaz.
   - Veriler (kitaplar, notlar, kartlar) IndexedDB'dedir; burada değil. Yapay zekâ ve Google istekleri
     hiçbir zaman önbelleğe alınmaz.
   - Aynı alan adındaki (esm3r.github.io) başka sitelerin önbelleklerine dokunulmaz. */
const VERSION = "0mwpdeztu-ed8dc5de4e";
const PRECACHE = ["./","./apple-touch-icon.png","./assets/Analiz-BO81uwHX.js","./assets/Ayarlar-DzEjhiPy.js","./assets/Cizelge-Be-JvdNs.js","./assets/Deneme-C1L5y0OG.js","./assets/ExtractPanel-D77lGymS.js","./assets/Harita-BPS-WcKM.js","./assets/InkCanvas-BoaMRCYM.js","./assets/InkPad-C1irnQuW.js","./assets/InkToolbar-BsuNo31z.js","./assets/Kokpit-DfUbUNy1.js","./assets/Konu-D3RffK_C.js","./assets/Kutuphane-CAdpvz98.js","./assets/Plan-BLyfMxO6.js","./assets/Sheet-Cdtrtgzs.js","./assets/Soru-DyQXkMUX.js","./assets/Tekrar-upGChHGg.js","./assets/Yanlis-CrJSTgVF.js","./assets/ai-B06ltltp.js","./assets/answerKey-CLutnSvL.js","./assets/arrow-left-BK04Yikt.js","./assets/charts-DSAQ8I-J.js","./assets/check-BI0sngeP.js","./assets/chevron-down-csq32ZbG.js","./assets/chevron-left-C_HatAcV.js","./assets/chevron-right-BfWmQEeJ.js","./assets/circle-exclamation-point-LRrOsU7I.js","./assets/circle-slash-BDQ8ojzv.js","./assets/client-Cw25XSIE.js","./assets/clock-C0ODsi1Y.js","./assets/controls-DU1clYc3.js","./assets/data-CJw0_Z6f.js","./assets/data-XEDBOUiT.js","./assets/data-lmVgzUWB.js","./assets/download-0CWxf7e4.js","./assets/error-wJ5RwKpd.js","./assets/eye-oO5DsxiQ.js","./assets/eye-off-BDfFzkoH.js","./assets/file-up-Z0xcm1BR.js","./assets/file-x-BdQxZ2hM.js","./assets/flag-CtGsR_RD.js","./assets/fsrs-C3H69CwP.js","./assets/hooks-DkwJQn95.js","./assets/image-C0edomoU.js","./assets/index-BTYlgHL2.js","./assets/index-DMP-h15s.css","./assets/inter-latin-ext-wght-normal-DO1Apj_S.woff2","./assets/inter-latin-wght-normal-Dx4kXJAl.woff2","./assets/jetbrains-mono-latin-ext-wght-normal-DBQx-q_a.woff2","./assets/jetbrains-mono-latin-wght-normal-B9CIFXIH.woff2","./assets/key-round-MrZlWSBU.js","./assets/keyboard-Cl4Ka0PM.js","./assets/layers-D6PwlOtf.js","./assets/list-checks-D-01CbyK.js","./assets/loader-circle-Dzq1w-kW.js","./assets/map-pin-BHekFQBt.js","./assets/model-ChRJyloz.js","./assets/node.browser-CGfFuoKj.js","./assets/node.browser-D-8W00wD.js","./assets/pause-DqnDgcdS.js","./assets/pdf-rHNF8m-n.js","./assets/pdf.worker.min-CIqJB0yW.mjs","./assets/play-UIOkMgXh.js","./assets/plus-CCZeF71g.js","./assets/process-DF8QTa13.js","./assets/reuse-Beq4483a.js","./assets/rolldown-runtime-XKyaHtl9.js","./assets/rotate-ccw-C-6Dq3Ai.js","./assets/scan-line-DaDdnr83.js","./assets/search-x-BP81AhcU.js","./assets/shared-Bt7duAud.js","./assets/shield-check-B7kxqQtt.js","./assets/shuffle-CmjAcgfN.js","./assets/space-grotesk-latin-ext-wght-normal-D9tNdqV9.woff2","./assets/space-grotesk-latin-wght-normal-BhU9QXUp.woff2","./assets/sparkles-DEMiNF_t.js","./assets/square-CbtjdNSr.js","./assets/strategy-pkY_Bqmo.js","./assets/sync-interval-BScnobTX.js","./assets/table-2-Sa_2Zvm4.js","./assets/touch-Dd81TOqv.js","./assets/trash-D-YxR7w3.js","./assets/triangle-exclamation-point-oPztEHxq.js","./assets/ui-D8Zyfd56.js","./assets/useLibrary-CMxtevme.js","./assets/wifi-off-B8kS8xj5.js","./assets/zod-ByMrqi-v.js","./icon-192.png","./icon-512.png","./icon-maskable-512.png","./index.html","./manifest.webmanifest","./pdfjs/6.5.438/iccs/CGATS001Compat-v2-micro.icc","./pdfjs/6.5.438/standard_fonts/FoxitDingbats.pfb","./pdfjs/6.5.438/standard_fonts/FoxitFixed.pfb","./pdfjs/6.5.438/standard_fonts/FoxitFixedBold.pfb","./pdfjs/6.5.438/standard_fonts/FoxitFixedBoldItalic.pfb","./pdfjs/6.5.438/standard_fonts/FoxitFixedItalic.pfb","./pdfjs/6.5.438/standard_fonts/FoxitSerif.pfb","./pdfjs/6.5.438/standard_fonts/FoxitSerifBold.pfb","./pdfjs/6.5.438/standard_fonts/FoxitSerifBoldItalic.pfb","./pdfjs/6.5.438/standard_fonts/FoxitSerifItalic.pfb","./pdfjs/6.5.438/standard_fonts/FoxitSymbol.pfb","./pdfjs/6.5.438/standard_fonts/LiberationSans-Bold.ttf","./pdfjs/6.5.438/standard_fonts/LiberationSans-BoldItalic.ttf","./pdfjs/6.5.438/standard_fonts/LiberationSans-Italic.ttf","./pdfjs/6.5.438/standard_fonts/LiberationSans-Regular.ttf","./pdfjs/6.5.438/wasm/jbig2.wasm","./pdfjs/6.5.438/wasm/openjpeg.wasm","./pdfjs/6.5.438/wasm/qcms_bg.wasm"];
const PREFIX = "kokpit:" + self.registration.scope + ":";
const APP = PREFIX + "app-";
const CACHE = APP + VERSION;
/** Önbelleğe baştan alınmayan, değişmeyen ek dosyalar (ör. PDF.js karakter eşlemeleri, nadir yazı tipi alt kümeleri) */
const RUNTIME = PREFIX + "runtime";
/** Etkin sürümün adı (bir önceki sürümü doğru saklamak için) */
const META = PREFIX + "meta";
const DONE = "./__precache-tamam__";
const SCOPE_PATH = new URL(self.registration.scope).pathname;
const PRECACHE_URLS = new Set(PRECACHE.map((u) => new URL(u, self.registration.scope).href));
/** Adı ya da yolu içeriğe bağlı, hiç değişmeyen dosyalar: eski sürümden kopyalanabilir, HTTP önbelleği güvenli */
const immutable = (url) => url.includes("/assets/") || url.includes("/pdfjs/");

/** Önbellek tam mı: "tamam" işareti VE bütün dosyalar (işaret yalnız başına yeterli sayılmaz) */
async function complete(cache) {
  return !!(await cache.match(DONE)) && (await cache.keys()).length >= PRECACHE.length + 1;
}

/** Bütün dosyaları indirir (var olanları atlar; yarıda kaldıysa kaldığı yerden sürer). Bitince "tamam" işareti. */
async function precache() {
  const cache = await caches.open(CACHE);
  if (await complete(cache)) return;
  const older = (await caches.keys()).filter((k) => k.startsWith(APP) && k !== CACHE);
  await Promise.all(
    PRECACHE.map(async (u) => {
      const url = new URL(u, self.registration.scope).href;
      if (await cache.match(url)) return;
      if (immutable(url)) {
        for (const k of older) {
          const hit = await (await caches.open(k)).match(url);
          if (hit) return cache.put(url, hit);
        }
      }
      // Değişebilen dosyalar (index.html, simgeler, bildirim dosyası) HTTP önbelleğini atlar
      const res = await fetch(new Request(url, { cache: immutable(url) ? "default" : "reload" }));
      if (!res.ok) throw new Error(res.status + " " + url);
      await cache.put(url, res);
    }),
  );
  await cache.put(DONE, new Response(VERSION));
}

let refilling = null;
/** Önbellek eksikse arka planda tamamla (aynı anda bir kez) */
function ensureComplete() {
  if (!refilling)
    refilling = precache()
      .catch(() => {})
      .finally(() => {
        refilling = null;
      });
  return refilling;
}

self.addEventListener("install", (e) => {
  e.waitUntil(
    precache()
      // Yarım kalan kurulum 6 MB'lık eksik önbellek bırakmasın
      .catch(async (err) => {
        await caches.delete(CACHE);
        throw err;
      })
      // İlk kurulumda hemen devreye gir; güncellemede kullanıcının "Yenile"sini bekle
      .then(() => (self.registration.active ? undefined : self.skipWaiting())),
  );
});

self.addEventListener("message", (e) => {
  if (e.data !== "SKIP_WAITING") return;
  // Zaten etkin olan sürüme gelen istek: eski sürümle açık kalmış bir sekme (ilk sürümün kodu). O sekmeyi
  // yeni sürüme yenile; aksi halde bekleyen sürüm devreye girer.
  const me = self.serviceWorker;
  if (me && me.state === "activated" && e.source && "navigate" in e.source) e.source.navigate(e.source.url).catch(() => {});
  else self.skipWaiting();
});

self.addEventListener("activate", (e) => {
  e.waitUntil(
    (async () => {
      const meta = await caches.open(META);
      const keys = await caches.keys();
      const rec = await (await meta.match("./active"))?.text();
      const recPrev = await (await meta.match("./previous"))?.text();
      // Önceki etkin sürüm: kayıt geçerliyse o. Aynı sürüm yeniden etkinleşiyorsa kayıtlı öncekisi.
      // Kayıt yoksa ya da geçersizse (eski sürümden geçiş) bu seferlik bütün eski sürümler kalır; sonraki etkinleşme temizler.
      const keepOld =
        rec && rec !== CACHE && keys.includes(rec)
          ? [rec]
          : rec === CACHE && recPrev && keys.includes(recPrev)
            ? [recPrev]
            : keys.filter((k) => k.startsWith(APP) && k < CACHE);
      // Kalır: bu sürüm, önceki etkin sürüm, ek dosyalar ve bu sürümden YENİ olanlar (inmekte olabilir).
      // Silinir: daha eski sürümler, yarım kalmış kurulumlar ve ilk sürümün "kokpit-v1" önbelleği.
      const keep = new Set([CACHE, RUNTIME, META, ...keepOld]);
      const drop = keys.filter((k) => k === "kokpit-v1" || (k.startsWith(PREFIX) && !keep.has(k) && !(k.startsWith(APP) && k > CACHE)));
      await Promise.all(drop.map((k) => caches.delete(k)));
      if (rec !== CACHE) await meta.put("./previous", new Response(keepOld.length === 1 ? keepOld[0] : ""));
      await meta.put("./active", new Response(CACHE));
      await self.clients.claim();
    })(),
  );
});

/** Önce bu sürümün önbelleği, sonra bu uygulamanın diğer önbellekleri (eski pencere, ek dosyalar) */
async function fromCache(req) {
  const hit = await (await caches.open(CACHE)).match(req);
  if (hit) return hit;
  for (const k of (await caches.keys()).filter((k) => k.startsWith(PREFIX) && k !== CACHE && k !== META)) {
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
        // Önbellek eksikse (yarıda kalmış indirme, tarayıcının sildiği dosyalar) arkada tamamla
        if (!(await complete(await caches.open(CACHE)))) e.waitUntil(ensureComplete());
        if (isShell) {
          const hit = await shell();
          if (hit) return hit;
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
      // Ağdan gelen uygulama dosyası saklanır: önbellekten düşmüşse geri konur, değişmeyen ek dosyalar
      // (ör. pdfjs/cmaps, nadir yazı tipi alt kümeleri) ilk kullanımda saklanır
      if (res.ok) {
        const copy = res.clone();
        if (PRECACHE_URLS.has(url.href)) e.waitUntil(caches.open(CACHE).then((c) => c.put(req, copy)));
        else if (immutable(url.href)) e.waitUntil(caches.open(RUNTIME).then((c) => c.put(req, copy)));
      }
      return res;
    })(),
  );
});
