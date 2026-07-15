/* ============================================================
   LANDING — Club CIF (V2)
   Renderiza todas las secciones desde window.CIF y activa el
   carrusel del hero, los filtros, el modal de actividades y el
   scroll horizontal de indumentaria.
   ============================================================ */
(function () {
  "use strict";

  var CIF = window.CIF;
  var UI = window.CIFUI;
  var icons = UI.icons;
  var esc = UI.esc;

  /* ---------------- HERO ---------------- */
  function renderHero() {
    var slides = CIF.heroSlides
      .map(function (s, i) {
        // Fondo del slide, ocupando todo el viewport del hero (clase cif-fill)
        var media = s.video
          ? '<div class="media cif-fill"><video src="' + esc(s.video) + '" autoplay muted loop playsinline aria-label="' + esc(s.alt) + '"></video></div>'
          : UI.media({ src: s.image, alt: s.alt, extraClass: "cif-fill" });
        return (
          '<div class="hero__slide' + (i === 0 ? " is-active" : "") + '" role="group" ' +
          'aria-roledescription="diapositiva" aria-label="' + (i + 1) + " de " + CIF.heroSlides.length + '"' +
          (i === 0 ? "" : ' aria-hidden="true"') + ">" +
            media +
            '<div class="hero__overlay"></div>' +
            '<div class="container hero__content">' +
              '<div class="hero__inner">' +
                '<h1 class="hero__title font-display">' + esc(s.titulo) + "</h1>" +
                '<p class="hero__text">' + esc(s.texto) + "</p>" +
                '<div class="hero__btn">' +
                  '<a class="btn btn--secondary btn--lg" href="' + esc(s.botonHref) + '">' +
                    esc(s.botonLabel) + icons.arrowRight(18) +
                  "</a>" +
                "</div>" +
              "</div>" +
            "</div>" +
          "</div>"
        );
      })
      .join("");

    var dots = CIF.heroSlides
      .map(function (_, i) {
        return (
          '<button type="button" class="hero__dot' + (i === 0 ? " is-active" : "") + '" role="tab" ' +
          'aria-selected="' + (i === 0) + '" aria-label="Ir a la diapositiva ' + (i + 1) + '" data-dot="' + i + '"></button>'
        );
      })
      .join("");

    var wa = CIF.waLink("¡Hola! Quiero hacer una consulta al Club CIF.");

    return (
      '<section id="inicio" class="hero" aria-roledescription="carrusel" aria-label="Presentación del Club CIF">' +
        '<div class="hero__viewport" id="cif-hero-viewport">' +
          slides +
          '<button type="button" class="hero__arrow hero__arrow--prev" id="cif-hero-prev" aria-label="Diapositiva anterior">' + icons.chevronLeft(20) + "</button>" +
          '<button type="button" class="hero__arrow hero__arrow--next" id="cif-hero-next" aria-label="Diapositiva siguiente">' + icons.chevronRight(20) + "</button>" +
          '<div class="hero__controls">' +
            '<div class="hero__dots" role="tablist" aria-label="Elegir diapositiva">' + dots + "</div>" +
            '<button type="button" class="hero__playpause" id="cif-hero-playpause" aria-label="Pausar carrusel">' + icons.pause(16) + "</button>" +
          "</div>" +
        "</div>" +
        '<div class="quicklinks"><div class="container"><div class="quicklinks__grid">' +
          '<a href="#actividades"><span class="icon">' + icons.arrowRight(18) + "</span>Ver actividades</a>" +
          '<a href="' + esc(wa) + '" target="_blank" rel="noopener noreferrer"><span class="icon">' + icons.whatsapp(18) + "</span>Consultar por WhatsApp</a>" +
          '<a href="' + esc(CIF.site.perfilUrl) + '" target="_blank" rel="noopener noreferrer"><span class="icon">' + icons.arrowRight(18) + "</span>Ingresar a mi perfil</a>" +
        "</div></div></div>" +
      "</section>"
    );
  }

  function initHero() {
    var viewport = document.getElementById("cif-hero-viewport");
    if (!viewport) return;
    var slides = Array.prototype.slice.call(viewport.querySelectorAll(".hero__slide"));
    var dots = Array.prototype.slice.call(viewport.querySelectorAll(".hero__dot"));
    var count = slides.length;
    var index = 0;
    var playing = true;
    var timer = null;
    var AUTOPLAY = 6000;
    var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    function show(i) {
      index = (i + count) % count;
      slides.forEach(function (s, k) {
        var active = k === index;
        s.classList.toggle("is-active", active);
        if (active) s.removeAttribute("aria-hidden");
        else s.setAttribute("aria-hidden", "true");
      });
      dots.forEach(function (d, k) {
        d.classList.toggle("is-active", k === index);
        d.setAttribute("aria-selected", String(k === index));
      });
    }
    function start() {
      if (reduce || count <= 1) return;
      stop();
      timer = setInterval(function () { show(index + 1); }, AUTOPLAY);
    }
    function stop() { if (timer) { clearInterval(timer); timer = null; } }
    function setPlaying(v) {
      playing = v;
      var btn = document.getElementById("cif-hero-playpause");
      btn.innerHTML = playing ? icons.pause(16) : icons.play(16);
      btn.setAttribute("aria-label", playing ? "Pausar carrusel" : "Reproducir carrusel");
      if (playing) start(); else stop();
    }

    document.getElementById("cif-hero-prev").addEventListener("click", function () { show(index - 1); });
    document.getElementById("cif-hero-next").addEventListener("click", function () { show(index + 1); });
    document.getElementById("cif-hero-playpause").addEventListener("click", function () { setPlaying(!playing); });
    dots.forEach(function (d) {
      d.addEventListener("click", function () { show(parseInt(d.getAttribute("data-dot"), 10)); });
    });

    if (playing) start();
  }

  /* ---------------- INSTITUCIONAL ---------------- */
  function renderInstitucional() {
    var stats = CIF.stats
      .map(function (s) {
        return (
          '<div class="stat">' +
            '<dt class="sr-only">' + esc(s.etiqueta) + "</dt>" +
            "<dd>" +
              '<span class="stat__value">' + esc(s.valor) + "</span>" +
              '<span class="stat__label">' + esc(s.etiqueta) + "</span>" +
            "</dd>" +
          "</div>"
        );
      })
      .join("");

    return (
      '<section id="club" class="section section--cream">' +
        '<div class="container">' +
          '<div class="institucional__head">' +
            '<span class="institucional__kicker">El club</span>' +
            '<h2 class="institucional__title">Un club para moverse, aprender y encontrarse.</h2>' +
            '<p class="institucional__text">Somos un club deportivo de Cipolletti que acompaña a niños, jóvenes y adultos a través del movimiento, el aprendizaje y el encuentro.</p>' +
          "</div>" +
          '<dl class="stats">' + stats + "</dl>" +
        "</div>" +
      "</section>"
    );
  }

  /* ---------------- ACTIVIDADES ---------------- */
  function actividadCard(a) {
    return (
      '<li><article class="card">' +
        UI.media({ src: a.image, alt: a.alt, label: a.nombre, extraClass: "ar-4-3" }) +
        '<div class="card__body">' +
          '<h3 class="card__title">' + esc(a.nombre) + "</h3>" +
          '<p class="card__meta">' + esc(a.publicoLabel) + "</p>" +
          '<p class="card__sub">' + esc(a.dias) + " · " + esc(a.horarios) + "</p>" +
          '<button type="button" class="card__link" data-act="' + esc(a.id) + '">Ver actividad' + icons.arrowRight(16) + "</button>" +
        "</div>" +
      "</article></li>"
    );
  }

  function renderActividades() {
    var filtros = CIF.filtros
      .map(function (f, i) {
        return (
          '<button type="button" class="filter' + (i === 0 ? " is-active" : "") + '" ' +
          'aria-pressed="' + (i === 0) + '" data-filter="' + esc(f.key) + '">' + esc(f.label) + "</button>"
        );
      })
      .join("");

    var cards = CIF.actividades.map(actividadCard).join("");
    var wa = CIF.waLink("¡Hola! Quiero ayuda para elegir una actividad en el Club CIF.");

    return (
      '<section id="actividades" class="section section--beige">' +
        '<div class="container">' +
          '<div class="section-heading">' +
            '<span class="section-heading__kicker">Actividades</span>' +
            '<h2 class="section-heading__title">Entrená con nosotros.</h2>' +
            '<p class="section-heading__subtitle">Elegí una disciplina y sumate al club.</p>' +
          "</div>" +
          '<div class="filters" role="group" aria-label="Filtrar actividades por público">' + filtros + "</div>" +
          '<ul class="cards-grid" id="cif-actividades-grid">' + cards + "</ul>" +
          '<p class="empty-msg" id="cif-actividades-empty" hidden>No hay actividades para este público por el momento.</p>' +
          '<div class="act-cta">' +
            '<h3 class="act-cta__title">¿No sabés qué actividad elegir?</h3>' +
            '<p class="act-cta__text">Escribinos y te ayudamos a encontrar una propuesta para vos.</p>' +
            '<div class="act-cta__btn"><a class="btn btn--whatsapp btn--lg" href="' + esc(wa) + '" target="_blank" rel="noopener noreferrer">' + icons.whatsapp(18) + "Consultar por WhatsApp</a></div>" +
          "</div>" +
        "</div>" +
      "</section>"
    );
  }

  function initActividades() {
    var grid = document.getElementById("cif-actividades-grid");
    var empty = document.getElementById("cif-actividades-empty");
    var filterBtns = Array.prototype.slice.call(document.querySelectorAll(".filter"));

    function applyFilter(key) {
      var list = key === "todas"
        ? CIF.actividades
        : CIF.actividades.filter(function (a) { return a.publicos.indexOf(key) !== -1; });
      grid.innerHTML = list.map(actividadCard).join("");
      empty.hidden = list.length !== 0;
      bindCardButtons();
    }

    filterBtns.forEach(function (btn) {
      btn.addEventListener("click", function () {
        filterBtns.forEach(function (b) {
          var active = b === btn;
          b.classList.toggle("is-active", active);
          b.setAttribute("aria-pressed", String(active));
        });
        applyFilter(btn.getAttribute("data-filter"));
      });
    });

    function bindCardButtons() {
      grid.querySelectorAll("[data-act]").forEach(function (b) {
        b.addEventListener("click", function () { openActivityModal(b.getAttribute("data-act")); });
      });
    }
    bindCardButtons();
  }

  /* ---------------- MODAL DE ACTIVIDAD ---------------- */
  var modalState = { lastFocused: null };

  function ensureModalRoot() {
    var root = document.getElementById("cif-modal-root");
    if (!root) {
      root = document.createElement("div");
      root.id = "cif-modal-root";
      document.body.appendChild(root);
    }
    return root;
  }

  function openActivityModal(id) {
    var a = null;
    for (var i = 0; i < CIF.actividades.length; i++) {
      if (CIF.actividades[i].id === id) { a = CIF.actividades[i]; break; }
    }
    if (!a) return;

    var wa = CIF.waLink('¡Hola! Quiero información sobre la actividad "' + a.nombre + '" del Club CIF.');
    var root = ensureModalRoot();
    root.innerHTML =
      '<div class="modal-backdrop" id="cif-modal-backdrop">' +
        '<div class="modal" role="dialog" aria-modal="true" aria-labelledby="cif-modal-title" tabindex="-1" id="cif-modal-panel">' +
          '<button type="button" class="modal__close" id="cif-modal-close" aria-label="Cerrar">' + icons.close(20) + "</button>" +
          UI.media({ src: a.image, alt: a.alt, label: a.nombre, extraClass: "ar-16-9" }) +
          '<div class="modal__body">' +
            '<h3 class="modal__title" id="cif-modal-title">' + esc(a.nombre) + "</h3>" +
            '<p class="modal__desc">' + esc(a.descripcion) + "</p>" +
            '<dl class="modal__list">' +
              modalRow("Edades / público", esc(a.publicoLabel)) +
              modalRow("Días", esc(a.dias)) +
              modalRow("Horarios", esc(a.horarios)) +
              modalRow("Lugar", '<span class="inline">' + icons.location(16) + esc(a.lugar) + "</span>") +
            "</dl>" +
            '<div class="modal__cta"><a class="btn btn--whatsapp btn--md btn--block" href="' + esc(wa) + '" target="_blank" rel="noopener noreferrer">' + icons.whatsapp(18) + "Consultar por WhatsApp</a></div>" +
          "</div>" +
        "</div>" +
      "</div>";

    modalState.lastFocused = document.activeElement;
    document.body.classList.add("no-scroll");

    var backdrop = document.getElementById("cif-modal-backdrop");
    var panel = document.getElementById("cif-modal-panel");
    panel.focus();

    function close() {
      root.innerHTML = "";
      document.body.classList.remove("no-scroll");
      document.removeEventListener("keydown", onKey);
      if (modalState.lastFocused) modalState.lastFocused.focus();
    }
    function onKey(e) { if (e.key === "Escape") close(); }

    backdrop.addEventListener("click", function () { close(); });
    panel.addEventListener("click", function (e) { e.stopPropagation(); });
    document.getElementById("cif-modal-close").addEventListener("click", close);
    document.addEventListener("keydown", onKey);
  }

  function modalRow(label, valorHtml) {
    return (
      '<div class="modal__row"><dt>' + label + "</dt><dd>" + valorHtml + "</dd></div>"
    );
  }

  /* ---------------- ESPACIOS ---------------- */
  function renderEspacios() {
    var items = CIF.espacios
      .map(function (e) {
        var maps = CIF.espacioMapsUrl(e);
        var actions = maps
          ? '<a class="espacio__maps" href="' + esc(maps) + '" target="_blank" rel="noopener noreferrer">Ver ubicación' + icons.arrowRight(16) + "</a>"
          : '<span class="espacio__soon">Ubicación próximamente</span>';
        return (
          '<li><article class="espacio">' +
            UI.media({ src: e.image, alt: e.alt, label: e.nombre, extraClass: "ar-16-10 espacio__media" }) +
            '<div class="espacio__body">' +
              '<h3 class="espacio__title">' + esc(e.nombre) + "</h3>" +
              '<p class="espacio__desc">' + esc(e.descripcion) + "</p>" +
              '<p class="espacio__acts"><b>Actividades: </b><span>' + esc(e.actividades) + "</span></p>" +
              '<p class="espacio__loc"><span class="icon">' + icons.location(16) + "</span>" + esc(e.direccion || "Dirección a confirmar") + "</p>" +
              '<div class="espacio__actions">' + actions + "</div>" +
            "</div>" +
          "</article></li>"
        );
      })
      .join("");

    return (
      '<section id="espacios" class="section section--cream">' +
        '<div class="container">' +
          '<div class="section-heading">' +
            '<span class="section-heading__kicker">Espacios</span>' +
            '<h2 class="section-heading__title">Dónde entrenamos.</h2>' +
            '<p class="section-heading__subtitle">Nuestras actividades se desarrollan en diferentes espacios deportivos de Cipolletti.</p>' +
          "</div>" +
          '<ul class="espacios-grid">' + items + "</ul>" +
        "</div>" +
      "</section>"
    );
  }

  /* ---------------- EVENTOS ---------------- */
  function renderEventos() {
    var items = CIF.eventos
      .map(function (ev) {
        var badge = ev.estado === "proximamente"
          ? '<span class="badge-soon">Próximamente</span>'
          : "";
        return (
          '<li><a class="evento" href="' + UI.BASE + "eventos/" + esc(ev.slug) + '.html">' +
            '<div class="evento__media-wrap">' +
              UI.media({ src: ev.cardImage, alt: ev.cardAlt, label: ev.nombre, extraClass: "ar-4-3" }) +
              badge +
            "</div>" +
            '<div class="evento__body">' +
              '<span class="evento__kicker">' + esc(ev.anioEstado) + "</span>" +
              '<h3 class="evento__title">' + esc(ev.nombre) + "</h3>" +
              '<p class="evento__desc">' + esc(ev.descripcionBreve) + "</p>" +
              '<span class="evento__link">Conocé el evento' + icons.arrowRight(16) + "</span>" +
            "</div>" +
          "</a></li>"
        );
      })
      .join("");

    return (
      '<section id="eventos" class="section section--brand">' +
        '<div class="container">' +
          '<div class="section-heading section-heading--invert">' +
            '<span class="section-heading__kicker">Eventos</span>' +
            '<h2 class="section-heading__title">Eventos que nos reúnen.</h2>' +
            '<p class="section-heading__subtitle">Encuentros y competencias que convocan a deportistas, familias, clubes e instituciones.</p>' +
          "</div>" +
          '<ul class="eventos-grid">' + items + "</ul>" +
        "</div>" +
      "</section>"
    );
  }

  /* ---------------- INDUMENTARIA ---------------- */
  function renderIndumentaria() {
    var items = CIF.productos
      .map(function (p) {
        var price = p.precio ? '<p class="producto__price">' + esc(p.precio) + "</p>" : "";
        return (
          '<li class="producto"><article class="producto__card">' +
            UI.media({ src: p.image, alt: p.alt, label: p.nombre, extraClass: "ar-square" }) +
            '<div class="producto__body">' +
              '<h3 class="producto__title">' + esc(p.nombre) + "</h3>" +
              '<p class="producto__desc">' + esc(p.descripcion) + "</p>" +
              price +
              '<a class="producto__btn" href="' + esc(CIF.site.pedidoFormUrl) + '" target="_blank" rel="noopener noreferrer">Hacer pedido</a>' +
            "</div>" +
          "</article></li>"
        );
      })
      .join("");

    return (
      '<section id="indumentaria" class="section section--beige">' +
        '<div class="container">' +
          '<div class="indu__head">' +
            '<div class="section-heading">' +
              '<span class="section-heading__kicker">Indumentaria</span>' +
              '<h2 class="section-heading__title">Vestite del CIF.</h2>' +
              '<p class="section-heading__subtitle">Llevá los colores del club dentro y fuera de la cancha.</p>' +
            "</div>" +
            '<div class="indu__arrows">' +
              '<button type="button" class="indu__arrow" id="cif-indu-prev" aria-label="Ver productos anteriores">' + icons.chevronLeft(20) + "</button>" +
              '<button type="button" class="indu__arrow" id="cif-indu-next" aria-label="Ver más productos">' + icons.chevronRight(20) + "</button>" +
            "</div>" +
          "</div>" +
        "</div>" +
        '<ul class="indu__scroller no-scrollbar" id="cif-indu-scroller">' + items + "</ul>" +
      "</section>"
    );
  }

  function initIndumentaria() {
    var scroller = document.getElementById("cif-indu-scroller");
    if (!scroller) return;
    function by(dir) {
      scroller.scrollBy({ left: dir * Math.min(scroller.clientWidth * 0.8, 420), behavior: "smooth" });
    }
    document.getElementById("cif-indu-prev").addEventListener("click", function () { by(-1); });
    document.getElementById("cif-indu-next").addEventListener("click", function () { by(1); });
  }

  /* ---------------- SPONSORS ---------------- */
  function renderSponsors() {
    var items = CIF.sponsors
      .map(function (s) {
        var inner = s.logo
          ? UI.media({ src: s.logo, alt: "Logo de " + s.nombre, extraClass: "" })
          : '<span class="sponsor__name">' + esc(s.nombre) + "</span>";
        var box = '<div class="sponsor">' + inner + "</div>";
        return s.url
          ? '<li><a class="sponsor-link" href="' + esc(s.url) + '" target="_blank" rel="noopener noreferrer" aria-label="Sitio de ' + esc(s.nombre) + '">' + box + "</a></li>"
          : "<li>" + box + "</li>";
      })
      .join("");

    return (
      '<section id="sponsors" class="section section--cream">' +
        '<div class="container">' +
          '<div class="sponsors__head"><h2 class="sponsors__title">Marcas que acompañan al CIF.</h2></div>' +
          '<ul class="sponsors-grid">' + items + "</ul>" +
          '<div class="sponsors__cta"><a class="btn btn--outline btn--md" href="' + esc(CIF.sponsorFormUrl) + '" target="_blank" rel="noopener noreferrer">Quiero acompañar al club</a></div>' +
        "</div>" +
      "</section>"
    );
  }

  /* ---------------- CTA FINAL ---------------- */
  function renderCtaFinal() {
    var wa = CIF.waLink("¡Hola! Quiero sumarme al Club CIF.");
    return (
      '<section id="contacto" class="section section--mint">' +
        '<div class="container">' +
          '<div class="cta-final">' +
            '<h2 class="cta-final__title">¿Querés ser parte del CIF?</h2>' +
            '<p class="cta-final__text">Conocé nuestras propuestas y encontrá una actividad para vos.</p>' +
            '<div class="cta-final__btns">' +
              '<a class="btn btn--primary btn--lg" href="#actividades">Ver actividades' + icons.arrowRight(18) + "</a>" +
              '<a class="btn btn--whatsapp btn--lg" href="' + esc(wa) + '" target="_blank" rel="noopener noreferrer">' + icons.whatsapp(18) + "Consultar por WhatsApp</a>" +
            "</div>" +
            '<p class="cta-final__addr">' + icons.location(18) + esc(CIF.site.address) + "</p>" +
          "</div>" +
        "</div>" +
      "</section>"
    );
  }

  /* ---------------- INIT ---------------- */
  function init() {
    UI.renderHeader("cif-header");

    var main = document.getElementById("cif-main");
    main.innerHTML =
      renderHero() +
      renderInstitucional() +
      renderActividades() +
      renderEspacios() +
      renderEventos() +
      renderIndumentaria() +
      renderSponsors() +
      renderCtaFinal();

    UI.renderFooter("cif-footer");

    initHero();
    initActividades();
    initIndumentaria();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
