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
const VERSION = "0mwozlucd-a2fcd41085";
const PRECACHE = ["./","./apple-touch-icon.png","./assets/Analiz-BNeaO7ib.js","./assets/Ayarlar-C8RORi9b.js","./assets/Cizelge-CL4qCU4W.js","./assets/Deneme-Dt0ZBDFc.js","./assets/ExtractPanel-BMJbQMAT.js","./assets/Harita-D3UIQgEs.js","./assets/InkCanvas-CSOrG9v_.js","./assets/InkPad-BoOLLXRE.js","./assets/InkToolbar-HQOOizf6.js","./assets/Kokpit-D_zLhgOX.js","./assets/Konu-DB8c_XV-.js","./assets/Kutuphane-Cu1wui6m.js","./assets/Plan-D0BMAtxc.js","./assets/Sheet-CkCH6_DQ.js","./assets/Soru-n5HJK4zO.js","./assets/Tekrar-BU4_JfCt.js","./assets/Yanlis-BZdgJWJN.js","./assets/ai-BonG4hp0.js","./assets/answerKey-DXJznbO-.js","./assets/arrow-left-PHhA-qnV.js","./assets/charts-DXmer3T4.js","./assets/check-s068YQqS.js","./assets/chevron-down-CCye0DpG.js","./assets/chevron-left-loTE7trD.js","./assets/chevron-right-D2M_gSLC.js","./assets/circle-exclamation-point-KY7k_CLZ.js","./assets/circle-slash-DnK8IDMT.js","./assets/client-D7bEAtdX.js","./assets/clock-CQAKz6bk.js","./assets/controls-D8krcBD8.js","./assets/data-Be9rQb6B.js","./assets/data-Bl4ddbNv.js","./assets/data-BtYKCutQ.js","./assets/download-CfCsW3nc.js","./assets/error-wJ5RwKpd.js","./assets/eye-C-y4wyN4.js","./assets/file-up-BzatWyrh.js","./assets/flag-C2dMCDPx.js","./assets/fsrs-C3H69CwP.js","./assets/hooks-DRPpSCpn.js","./assets/image-Ci1shs3e.js","./assets/index-DCATtVRb.css","./assets/index-DwJmp7qb.js","./assets/inter-latin-ext-wght-normal-DO1Apj_S.woff2","./assets/inter-latin-wght-normal-Dx4kXJAl.woff2","./assets/jetbrains-mono-latin-ext-wght-normal-DBQx-q_a.woff2","./assets/jetbrains-mono-latin-wght-normal-B9CIFXIH.woff2","./assets/key-round-CFErAtYs.js","./assets/keyboard-BaEmQ6Na.js","./assets/layers-BA8kxVyf.js","./assets/list-checks-yvupcKFW.js","./assets/loader-circle-CB8Am5mD.js","./assets/map-pin-DICU3TuG.js","./assets/model-DKYyrIUj.js","./assets/node.browser-CGfFuoKj.js","./assets/node.browser-D-8W00wD.js","./assets/pause-CX03aD1o.js","./assets/pdf-rHNF8m-n.js","./assets/pdf.worker.min-CIqJB0yW.mjs","./assets/play-7plSVVMb.js","./assets/plus-Cr91qzgf.js","./assets/process-DA0iuKvB.js","./assets/reuse-jq8Ur_f3.js","./assets/rolldown-runtime-XKyaHtl9.js","./assets/rotate-ccw-grKupqFM.js","./assets/scan-line-C8GJoUaS.js","./assets/search-x-BY1GZf4p.js","./assets/shared-BqYTJLBA.js","./assets/shield-check-BJlqij3d.js","./assets/shuffle-PocqqjzH.js","./assets/space-grotesk-latin-ext-wght-normal-D9tNdqV9.woff2","./assets/space-grotesk-latin-wght-normal-BhU9QXUp.woff2","./assets/sparkles-BJ9nUoT0.js","./assets/square-D5cUR_x0.js","./assets/strategy-BUWPxRKy.js","./assets/sync-interval-BScnobTX.js","./assets/table-2-u1Cm5AJJ.js","./assets/tablet-DxCWfIZ1.js","./assets/touch-SteojCvm.js","./assets/trash-C-eZJ1zZ.js","./assets/triangle-exclamation-point-NYcQIc2Y.js","./assets/ui-2Lje2lWD.js","./assets/useLibrary-CYQNWiuZ.js","./assets/wifi-off-sgp_175o.js","./assets/zod--BOmkLnc.js","./icon-192.png","./icon-512.png","./icon-maskable-512.png","./index.html","./manifest.webmanifest","./pdfjs/6.5.438/iccs/CGATS001Compat-v2-micro.icc","./pdfjs/6.5.438/standard_fonts/FoxitDingbats.pfb","./pdfjs/6.5.438/standard_fonts/FoxitFixed.pfb","./pdfjs/6.5.438/standard_fonts/FoxitFixedBold.pfb","./pdfjs/6.5.438/standard_fonts/FoxitFixedBoldItalic.pfb","./pdfjs/6.5.438/standard_fonts/FoxitFixedItalic.pfb","./pdfjs/6.5.438/standard_fonts/FoxitSerif.pfb","./pdfjs/6.5.438/standard_fonts/FoxitSerifBold.pfb","./pdfjs/6.5.438/standard_fonts/FoxitSerifBoldItalic.pfb","./pdfjs/6.5.438/standard_fonts/FoxitSerifItalic.pfb","./pdfjs/6.5.438/standard_fonts/FoxitSymbol.pfb","./pdfjs/6.5.438/standard_fonts/LiberationSans-Bold.ttf","./pdfjs/6.5.438/standard_fonts/LiberationSans-BoldItalic.ttf","./pdfjs/6.5.438/standard_fonts/LiberationSans-Italic.ttf","./pdfjs/6.5.438/standard_fonts/LiberationSans-Regular.ttf","./pdfjs/6.5.438/wasm/jbig2.wasm","./pdfjs/6.5.438/wasm/openjpeg.wasm","./pdfjs/6.5.438/wasm/qcms_bg.wasm"];
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
