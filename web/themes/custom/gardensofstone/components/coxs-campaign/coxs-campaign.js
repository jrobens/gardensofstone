/**
 * Coxs River campaign component behaviour.
 * Plain JavaScript, no jQuery. Runs through Drupal.behaviors when Drupal is present, otherwise on load.
 * Handles: copy buttons for the sample letters, count-up of the big numbers, and the Watershed video.
 */
(function () {
  "use strict";

  function embedUrl(link) {
    var m = link.match(/vimeo\.com\/(?:video\/)?(\d+)(?:\/([0-9a-f]+))?/i);
    if (!m) return null;
    var q = [];
    var hm = link.match(/[?&]h=([0-9a-f]+)/i);
    var hash = m[2] || (hm && hm[1]);
    if (hash) q.push("h=" + hash);
    q.push("autoplay=1", "playsinline=1", "title=0", "byline=0", "portrait=0", "badge=0", "dnt=1", "color=A8632F");
    return "https://player.vimeo.com/video/" + m[1] + "?" + q.join("&");
  }

  function loadVimeo(cb) {
    if (window.Vimeo) { cb(); return; }
    var s = document.createElement("script");
    s.src = "https://cdn.jsdelivr.net/npm/@vimeo/player@2.22.0/dist/player.min.js";
    s.onload = cb;
    s.onerror = function () {
      var s2 = document.createElement("script");
      s2.src = "https://player.vimeo.com/api/player.js";
      s2.onload = cb;
      document.head.appendChild(s2);
    };
    document.head.appendChild(s);
  }

  /* Click to play in place. Subtitles are burned into the picture, so any caption track the player
     adds is switched off. When the video ends, return to the thumbnail so Vimeo's end screen
     (other videos) never shows. */
  function initVideo(frame, link, title, PLAYING) {
    function start() {
      if (frame.classList.contains(PLAYING)) return;
      var src = embedUrl(link);
      if (!src) return;
      frame.classList.add(PLAYING);
      var f = document.createElement("iframe");
      f.src = src;
      f.title = title;
      f.allow = "autoplay; fullscreen; picture-in-picture";
      f.setAttribute("allowfullscreen", "");
      frame.appendChild(f);
      loadVimeo(function () {
        try {
          var p = new Vimeo.Player(f);
          var off = function () { p.disableTextTrack().catch(function () {}); };
          p.ready().then(off);
          p.on("play", off);
          p.on("loaded", off);
          var done = false;
          var finish = function () {
            if (done) return;
            done = true;
            try { p.pause(); } catch (e) {}
            try { p.destroy(); } catch (e) {}
            if (f.parentNode) f.parentNode.removeChild(f);
            frame.classList.remove(PLAYING);
          };
          p.on("ended", finish);
          p.on("timeupdate", function (d) {
            if (d && d.duration > 5 && d.seconds > 1 && (d.duration - d.seconds) < 0.5) finish();
          });
          p.on("pause", function (d) {
            if (d && d.duration > 5 && (d.duration - d.seconds) < 0.75) finish();
          });
        } catch (e) {}
      });
    }
    frame.addEventListener("click", start);
    frame.addEventListener("keydown", function (e) {
      if (e.key === "Enter" || e.key === " ") { e.preventDefault(); start(); }
    });
  }

  function fallbackCopy(text, done) {
    var ta = document.createElement("textarea");
    ta.value = text;
    ta.style.position = "fixed";
    ta.style.opacity = "0";
    document.body.appendChild(ta);
    ta.select();
    try { document.execCommand("copy"); } catch (e) {}
    document.body.removeChild(ta);
    done();
  }

  function initCopy(root) {
    root.querySelectorAll(".cx-copy-btn").forEach(function (btn) {
      btn.addEventListener("click", function () {
        var id = btn.getAttribute("data-copy-target");
        var el = root.querySelector('.cx-sample-text[data-sample="' + id + '"]');
        if (!el) return;
        var text = el.textContent.replace(/^"|"$/g, "");
        var done = function () {
          var original = btn.textContent;
          btn.textContent = "Copied";
          btn.classList.add("cx-copied");
          setTimeout(function () {
            btn.textContent = original;
            btn.classList.remove("cx-copied");
          }, 1800);
        };
        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(text).then(done).catch(function () { fallbackCopy(text, done); });
        } else {
          fallbackCopy(text, done);
        }
      });
    });
  }

  /* Count-up for the big evidence numbers. Final values are in the HTML, so this is only decoration. */
  function initCount(root) {
    var els = root.querySelectorAll("[data-count]");
    if (!els.length || !("IntersectionObserver" in window)) return;
    if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    function fmt(el, v) {
      var d = parseInt(el.getAttribute("data-decimals") || "0", 10);
      el.textContent = v.toFixed(d);
    }
    function run(el) {
      var to = parseFloat(el.getAttribute("data-count")), t0 = null, dur = 1300;
      function step(ts) {
        if (t0 === null) t0 = ts;
        var p = Math.min((ts - t0) / dur, 1), e = 1 - Math.pow(1 - p, 3);
        fmt(el, to * e);
        if (p < 1) requestAnimationFrame(step); else fmt(el, to);
      }
      requestAnimationFrame(step);
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { io.unobserve(en.target); run(en.target); }
      });
    }, { threshold: 0.4 });
    els.forEach(function (el) { fmt(el, 0); io.observe(el); });
  }

  function setup(root) {
    if (root.getAttribute("data-cx-ready")) return;
    root.setAttribute("data-cx-ready", "1");
    initCopy(root);
    initCount(root);
    var frame = root.querySelector("#cx-watershed-player");
    if (frame) {
      initVideo(frame, root.getAttribute("data-video-url") || "",
        root.getAttribute("data-video-title") || "Watershed", "cx-playing");
    }
  }

  function attach(context) {
    (context || document).querySelectorAll("[data-cx-campaign]").forEach(setup);
  }

  if (window.Drupal && Drupal.behaviors) {
    Drupal.behaviors.coxsCampaign = { attach: attach };
  } else if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", function () { attach(document); });
  } else {
    attach(document);
  }
})();
