/**
 * Watershed feature block behaviour: click the thumbnail to play the Vimeo video in place.
 * Plain JavaScript, no jQuery. Runs through Drupal.behaviors when Drupal is present, otherwise on load.
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

  function setup(root) {
    if (root.getAttribute("data-wf-ready")) return;
    root.setAttribute("data-wf-ready", "1");
    var frame = root.querySelector(".wf-video");
    if (frame) {
      initVideo(frame, root.getAttribute("data-video-url") || "",
        root.getAttribute("data-video-title") || "Watershed", "wf-playing");
    }
  }

  function attach(context) {
    (context || document).querySelectorAll("[data-wf-feature]").forEach(setup);
  }

  if (window.Drupal && Drupal.behaviors) {
    Drupal.behaviors.watershedFeature = { attach: attach };
  } else if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", function () { attach(document); });
  } else {
    attach(document);
  }
})();
