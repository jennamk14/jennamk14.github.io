/* ===========================================================================
   Jenna M. Kline — site behaviour
   Renders the data files in data/*.js into the page. No dependencies.
   =========================================================================== */
(function () {
  "use strict";

  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ------------------------------------------------------------ helpers -- */

  function el(id) { return document.getElementById(id); }

  /* Author names are bolded when they are yours. */
  var ME = /^J\.\s*(M\.\s*)?Kline$/;

  function authors(list) {
    if (!list || !list.length) return "";
    return list.map(function (a) {
      return ME.test(a) ? '<span class="me">' + a + "</span>" : a;
    }).join(", ");
  }

  /* Venue line: full name (linked if we have a URL), abbrev, type, status. */
  function venue(pub) {
    var v = pub.venue || {}, out = [];
    if (pub.type) out.push('<span class="pub__type">' + pub.type + "</span>");
    if (v.full) {
      var name = v.url
        ? '<a href="' + v.url + '" target="_blank" rel="noopener">' + v.full + "</a>"
        : v.full;
      out.push(name + (v.abbrev && v.abbrev !== v.full ? " (" + v.abbrev + ")" : ""));
    }
    if (pub.acceptanceRate) out.push('<span class="pub__metric">Acceptance rate ' + pub.acceptanceRate + "</span>");
    if (pub.impactFactor) out.push('<span class="pub__metric">Impact factor ' + pub.impactFactor + "</span>");
    if (pub.status) out.push('<span class="pub__status">' + pub.status + "</span>");
    return out.join('<span class="pub__sep">·</span>');
  }

  /* Theme tags link back to their section in the research overview. */
  function tags(list, base) {
    if (!list || !list.length || typeof TAGS === "undefined") return "";
    return list.map(function (key) {
      var t = TAGS[key];
      if (!t) return "";
      return '<a class="tag" href="' + (base || "") + t.anchor + '">' + t.label + "</a>";
    }).join("");
  }

  function badges(pub) {
    var out = "";
    if (pub.award) out += '<span class="badge pub__award">' + pub.award + "</span>";
    (pub.badges || []).forEach(function (key) {
      var b = (typeof BADGES !== "undefined") && BADGES[key];
      if (b) out += '<span class="badge">' + b.label + "</span>";
    });
    return out;
  }

  /* Only link types that are actually present get rendered — never an
     empty or dead button. */
  var LINK_ORDER = [
    ["paper", "Paper"], ["preprint", "Preprint"], ["project", "Project"],
    ["code", "Code"], ["data", "Data"], ["demo", "Demo"],
    ["artifact", "Artifact"], ["docs", "Docs"], ["video", "Video"],
    ["slides", "Slides"], ["poster", "Poster"], ["media", "Media"],
    ["reviews", "Reviews"], ["community", "Community"]
  ];

  function links(obj) {
    if (!obj) return "";
    var parts = [];
    LINK_ORDER.forEach(function (pair) {
      var url = obj[pair[0]];
      if (url) {
        parts.push('<a href="' + url + '" target="_blank" rel="noopener">' + pair[1] + "</a>");
      }
    });
    if (!parts.length) return "";
    return parts.join('<span class="pub__sep">·</span>');
  }

  /* A figure: looping video when we have one, otherwise a still. */
  function media(m, cls) {
    if (!m) return "";
    if (m.video) {
      return '<div class="' + cls + '">' +
        '<video muted loop playsinline preload="none" poster="' + m.poster + '" ' +
        'aria-label="Research figure animation" data-autoplay>' +
        '<source src="' + m.video + '.mp4" type="video/mp4">' +
        '</video></div>';
    }
    if (m.poster) {
      return '<div class="' + cls + '"><img src="' + m.poster + '" alt="" loading="lazy" decoding="async"></div>';
    }
    return "";
  }

  /* ------------------------------------------------------- publications -- */

  function publication(pub, base) {
    var fig = media(pub.media, "pub__fig");
    var meta = tags(pub.tags, base) + badges(pub);
    var res = links(pub.links);
    var primary = (pub.links && (pub.links.paper || pub.links.preprint || pub.links.project)) || null;
    var title = primary
      ? '<a href="' + primary + '" target="_blank" rel="noopener">' + pub.title + "</a>"
      : pub.title;

    return '<article class="pub' + (fig ? " pub--media" : "") + '">' +
      '<div class="pub__year">' + pub.year + "</div>" +
      "<div>" +
        '<h3 class="pub__title">' + title + "</h3>" +
        '<div class="pub__authors">' + authors(pub.authors) + "</div>" +
        '<div class="pub__venue">' + venue(pub) + "</div>" +
        (meta ? '<div class="pub__meta">' + meta + "</div>" : "") +
        (res ? '<div class="pub__links">' + res + "</div>" : "") +
      "</div>" +
      fig +
    "</article>";
  }

  function renderPublications(node, list, base) {
    if (!node) return;
    node.innerHTML = list.map(function (p) { return publication(p, base); }).join("");
  }

  /* ------------------------------------------------------------ projects -- */

  function project(p, base) {
    var fig = p.media ? media(p.media, "project__fig")
            : (p.image ? '<div class="project__fig"><img src="' + p.image +
                         '" alt="" loading="lazy" decoding="async"></div>' : "");
    var res = links(p.links);
    var home = p.links && (p.links.project || p.links.demo || p.links.code);
    var name = home
      ? '<a href="' + home + '" target="_blank" rel="noopener">' + p.name + "</a>"
      : p.name;

    var related = "";
    if (p.related && p.related.length) {
      related = '<p class="project__related"><span>Related:</span> ' +
        p.related.map(function (t) {
          var pub = (typeof PUBLICATIONS !== "undefined") &&
                    PUBLICATIONS.filter(function (x) { return x.title === t; })[0];
          var url = pub && pub.links &&
                    (pub.links.paper || pub.links.preprint || pub.links.project);
          return url
            ? '<a href="' + url + '" target="_blank" rel="noopener">' + t + "</a>"
            : t;
        }).join('<span class="pub__sep">·</span>') + "</p>";
    }

    return '<article class="project' + (fig ? "" : " project--nofig") + '" id="' + p.id + '">' +
      fig +
      "<div>" +
        "<h3>" + name + "</h3>" +
        (p.tagline ? '<p class="project__tagline">' + p.tagline + "</p>" : "") +
        '<p class="project__blurb">' + p.blurb + "</p>" +
        (p.collaborators ? '<p class="project__collab">' + p.collaborators + "</p>" : "") +
        (p.tags && p.tags.length ? '<div class="pub__meta">' + tags(p.tags, base) + "</div>" : "") +
        (res ? '<div class="pub__links">' + res + "</div>" : "") +
        related +
      "</div>" +
    "</article>";
  }

  function renderProjects(node, list, base) {
    if (!node) return;
    node.innerHTML = list.map(function (p) { return project(p, base); }).join("");
  }

  /* ---------------------------------------------------------------- news -- */

  function renderNews(node, list) {
    if (!node) return;
    node.innerHTML = list.map(function (n) {
      return '<article class="news__item' + (n.highlight ? " news__item--star" : "") + '">' +
        '<div class="news__date">' + n.date + "</div>" +
        "<div><h3>" + n.title + "</h3><p>" + n.body + "</p></div>" +
      "</article>";
    }).join("");
  }

  /* --------------------------------------------------------------- talks -- */

  function renderTalks(node, list) {
    if (!node) return;
    node.innerHTML = list.map(function (t) {
      var meta = [];
      if (t.type) meta.push('<span class="talk__type">' + t.type + "</span>");
      if (t.venue) meta.push(t.venue);
      if (t.date) meta.push(t.date);
      if (t.award) meta.push('<span class="pub__award">' + t.award + "</span>");
      if (t.link) meta.push('<a href="' + t.link.url + '" target="_blank" rel="noopener">' +
                            t.link.label + " ↗</a>");
      return '<article class="talk"><h3>' + t.title + "</h3>" +
             '<div class="talk__meta">' + meta.join('<span class="pub__sep">·</span>') + "</div></article>";
    }).join("");
  }




  /* -------------------------------------------------- field & mentoring -- */

  function renderFieldwork(node, list) {
    if (!node) return;
    node.innerHTML = list.map(function (f) {
      return '<article class="entry">' +
        '<div class="entry__date">' + f.date + "</div>" +
        "<div>" +
          "<h3>" + f.site + '<span class="entry__place">' + f.place + "</span></h3>" +
          '<p class="entry__role">' + f.role + "</p>" +
          "<p>" + f.body + "</p>" +
        "</div>" +
      "</article>";
    }).join("");
  }

  function renderMentoring(node, list) {
    if (!node) return;
    node.innerHTML = list.map(function (m) {
      return '<article class="entry">' +
        '<div class="entry__date">' + m.date + "</div>" +
        "<div><h3>" + m.org + "</h3><p>" + m.body + "</p></div>" +
      "</article>";
    }).join("");
  }

  function renderTeaching(node, list) {
    if (!node) return;
    node.innerHTML = list.map(function (t) {
      return '<article class="entry">' +
        '<div class="entry__date">' + t.kind + "</div>" +
        "<div><h3>" + t.title + "</h3>" +
        '<p class="entry__role">' + t.role + "</p><p>" + t.body + "</p></div>" +
      "</article>";
    }).join("");
  }

  /* Awards and service share one shape: name, detail, right-aligned date. */
  function renderRecord(node, list) {
    if (!node) return;
    node.innerHTML = list.map(function (r) {
      var name = r.url
        ? '<a href="' + r.url + '" target="_blank" rel="noopener">' + r.name + "</a>"
        : r.name;
      return '<li class="record' + (r.highlight ? " record--hl" : "") + '">' +
        "<div><span class=\"record__name\">" + name + "</span>" +
        (r.detail ? '<span class="record__detail">' + r.detail + "</span>" : "") + "</div>" +
        '<span class="record__date">' + r.date + "</span>" +
      "</li>";
    }).join("");
  }


  /* --------------------------------------------------------- enhancement -- */

  /* Fade sections in once. Skipped entirely under reduced motion. */
  function observeRise() {
    var items = document.querySelectorAll(".rise");
    if (reduceMotion || !("IntersectionObserver" in window)) {
      Array.prototype.forEach.call(items, function (n) { n.classList.add("is-in"); });
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add("is-in"); io.unobserve(e.target); }
      });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.05 });
    Array.prototype.forEach.call(items, function (n) { io.observe(n); });
  }

  /* Figure videos load and play only while on screen, never under
     reduced motion — the poster still is shown instead. */
  function observeVideo() {
    var vids = document.querySelectorAll("video[data-autoplay]");
    if (!vids.length) return;
    if (reduceMotion || !("IntersectionObserver" in window)) return;

    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        var v = e.target;
        if (e.isIntersecting) {
          if (v.preload === "none") { v.preload = "auto"; v.load(); }
          var p = v.play();
          if (p && p.catch) p.catch(function () { /* autoplay refused — poster stands */ });
        } else if (!v.paused) {
          v.pause();
        }
      });
    }, { threshold: 0.35 });
    Array.prototype.forEach.call(vids, function (v) { io.observe(v); });
  }


  /* A theme tag links to its research area. If that area is a collapsed
     <details>, open it so the reader lands on the content, not a closed tile. */
  function openTargetedArea() {
    function reveal() {
      var id = location.hash.slice(1);
      if (!id) return;
      var node = document.getElementById(id);
      if (node && node.tagName === "DETAILS" && !node.open) {
        node.open = true;
        node.scrollIntoView({ block: "start",
          behavior: reduceMotion ? "auto" : "smooth" });
      }
    }
    reveal();
    window.addEventListener("hashchange", reveal);
  }


  /* Email addresses are split across data attributes and reassembled here, so
     the full address never appears in the served HTML. Without JS the
     obfuscated text still reads fine, it just is not clickable. */
  function wireMail() {
    var nodes = document.querySelectorAll(".mail[data-u]");
    Array.prototype.forEach.call(nodes, function (n) {
      var addr = n.getAttribute("data-u") + "@" +
                 n.getAttribute("data-d") + "." + n.getAttribute("data-t");
      var a = document.createElement("a");
      a.href = "mailto:" + addr;
      a.textContent = n.textContent;
      a.className = n.className;
      n.parentNode.replaceChild(a, n);
    });
  }

  /* Drop the bottom fade on a scroll panel once it is scrolled to the end. */
  function wireScrollPanels() {
    var panels = document.querySelectorAll(".scrollpanel");
    Array.prototype.forEach.call(panels, function (p) {
      function update() {
        var atEnd = p.scrollTop + p.clientHeight >= p.scrollHeight - 4;
        p.setAttribute("data-scrolled-end", atEnd ? "true" : "false");
      }
      p.addEventListener("scroll", update, { passive: true });
      update();
    });
  }

  /* ----------------------------------------------------------------- go -- */

  function init() {
    var base = document.body.getAttribute("data-research-base") || "";

    if (typeof PUBLICATIONS !== "undefined") {
      renderPublications(el("pubs-featured"),
        PUBLICATIONS.filter(function (p) { return p.featured; }), base);
      renderPublications(el("pubs-all"), PUBLICATIONS, base);
    }
    if (typeof PROJECTS !== "undefined") {
      renderProjects(el("projects-main"),
        PROJECTS.filter(function (p) { return p.page === "projects"; }), base);
      renderProjects(el("datasets-all"),
        PROJECTS.filter(function (p) { return p.page === "datasets"; }), base);
    }
    if (typeof NEWS !== "undefined") {
      renderNews(el("news-recent"), NEWS.slice(0, 5));
      renderNews(el("news-all"), NEWS);
      var ncount = el("news-count");
      if (ncount) ncount.textContent = NEWS.length + " updates";
    }
    if (typeof TALKS !== "undefined") {
      renderTalks(el("talks-all"), TALKS);
      var count = el("talks-count");
      if (count) count.textContent = TALKS.length + " talks and presentations";
    }
    if (typeof FIELDWORK !== "undefined") renderFieldwork(el("fieldwork"), FIELDWORK);
    if (typeof MENTORING !== "undefined") renderMentoring(el("mentoring"), MENTORING);
    if (typeof TEACHING  !== "undefined") renderTeaching(el("teaching"), TEACHING);
    if (typeof AWARDS !== "undefined") {
      renderRecord(el("awards-full"), AWARDS);
      renderRecord(el("awards-list"),
        AWARDS.filter(function (a) { return a.featured; }));
    }
    if (typeof SERVICE !== "undefined") renderRecord(el("service-full"), SERVICE);

    observeRise();
    observeVideo();
    wireScrollPanels();
    wireMail();
    openTargetedArea();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
