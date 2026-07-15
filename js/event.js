/* ============================================================
   PÁGINA DE EVENTO — Club CIF (V2)
   Renderiza la plantilla del evento a partir de window.CIF_EVENT_SLUG
   (definido en cada HTML de evento). Mismo Header y Footer que la landing.
   ============================================================ */
(function () {
  "use strict";

  var CIF = window.CIF;
  var UI = window.CIFUI;
  var icons = UI.icons;
  var esc = UI.esc;
  var eventosHref = UI.BASE + "index.html#eventos";

  function render(evento) {
    var page = evento.page;
    var esProximamente = evento.estado === "proximamente";

    var infoRows = page.infoGeneral
      .map(function (it) {
        return '<div class="event-dl__row"><dt>' + esc(it.label) + "</dt><dd>" + esc(it.valor) + "</dd></div>";
      })
      .join("");

    var fechas = page.fechas
      .map(function (f, i) {
        return '<li class="event-date"><span class="event-date__num">' + (i + 1) + "</span>" + esc(f) + "</li>";
      })
      .join("");

    var galeria = page.galeria
      .map(function (img) {
        return "<li>" + UI.media({ src: img.src, alt: img.alt, extraClass: "ar-4-3" }) + "</li>";
      })
      .join("");

    var videos = page.videos
      .map(function (v) {
        if (v.url) {
          return (
            '<li><div class="event-video-embed"><iframe src="' + esc(v.url) + '" title="' + esc(v.titulo) +
            '" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div></li>'
          );
        }
        return (
          '<li><div class="event-video-ph">' + icons.play(40) + "<span>" + esc(v.titulo) + "</span></div></li>"
        );
      })
      .join("");

    var sponsors = page.sponsors
      .map(function (s) {
        var inner = s.logo
          ? UI.media({ src: s.logo, alt: "Logo de " + s.nombre, extraClass: "" })
          : '<span class="sponsor__name">' + esc(s.nombre) + "</span>";
        return '<li><div class="sponsor">' + inner + "</div></li>";
      })
      .join("");

    var wa = CIF.waLink("¡Hola! Quiero información sobre el evento " + evento.nombre + " del Club CIF.");
    var ctaLabel = esProximamente ? "Quiero que me avisen" : "Inscribirme o consultar";

    return (
      // Hero del evento
      '<section class="event-hero">' +
        UI.media({ src: page.heroImage, alt: page.heroAlt, extraClass: "cif-fill" }) +
        '<div class="hero__overlay"></div>' +
        '<div class="container event-hero__content">' +
          '<a class="event-hero__back" href="' + eventosHref + '">' + icons.chevronLeft(16) + "Volver a eventos</a>" +
          (esProximamente ? '<span class="event-hero__badge">Próximamente</span>' : "") +
          '<span class="event-hero__kicker">' + esc(evento.anioEstado) + "</span>" +
          '<h1 class="event-hero__title">' + esc(evento.nombre) + "</h1>" +
        "</div>" +
      "</section>" +

      // Presentación
      '<section class="event-section section--cream">' +
        '<div class="container"><div class="event-prose">' +
          '<h2 class="event-h2">Presentación</h2>' +
          '<p class="event-p">' + esc(page.presentacion) + "</p>" +
        "</div></div>" +
      "</section>" +

      // Info general + Fechas
      '<section class="event-section section--beige">' +
        '<div class="container"><div class="event-two">' +
          "<div>" +
            '<h2 class="event-h2">Información general</h2>' +
            '<dl class="event-dl">' + infoRows + "</dl>" +
          "</div>" +
          "<div>" +
            '<h2 class="event-h2">Fechas</h2>' +
            '<ul class="event-dates">' + fechas + "</ul>" +
          "</div>" +
        "</div></div>" +
      "</section>" +

      // Participantes
      '<section class="event-section section--cream">' +
        '<div class="container"><div class="event-prose">' +
          '<h2 class="event-h2">Participantes</h2>' +
          '<p class="event-p">' + esc(page.participantes) + "</p>" +
        "</div></div>" +
      "</section>" +

      // Galería
      '<section class="event-section section--beige">' +
        '<div class="container">' +
          '<h2 class="event-h2">Galería</h2>' +
          '<ul class="event-gallery">' + galeria + "</ul>" +
        "</div>" +
      "</section>" +

      // Videos
      '<section class="event-section section--cream">' +
        '<div class="container">' +
          '<h2 class="event-h2">Videos</h2>' +
          '<ul class="event-videos">' + videos + "</ul>" +
        "</div>" +
      "</section>" +

      // Sponsors
      '<section class="event-section section--beige">' +
        '<div class="container">' +
          '<h2 class="event-h2">Sponsors</h2>' +
          '<ul class="event-sponsors">' + sponsors + "</ul>" +
        "</div>" +
      "</section>" +

      // Info clubes
      '<section class="event-section section--cream">' +
        '<div class="container"><div class="event-clubes">' +
          "<h2>Información para clubes e instituciones</h2>" +
          "<p>" + esc(page.infoClubes) + "</p>" +
        "</div></div>" +
      "</section>" +

      // CTA final
      '<section class="event-section section--brand">' +
        '<div class="container"><div class="event-cta">' +
          '<h2 class="event-cta__title">' + esc(page.ctaTitulo) + "</h2>" +
          '<p class="event-cta__text">' + esc(page.ctaTexto) + "</p>" +
          '<div class="event-cta__btns">' +
            '<a class="btn btn--whatsapp btn--lg" href="' + esc(wa) + '" target="_blank" rel="noopener noreferrer">' + icons.whatsapp(18) + esc(ctaLabel) + "</a>" +
            '<a class="btn btn--secondary btn--lg" href="' + eventosHref + '">Ver otros eventos' + icons.arrowRight(18) + "</a>" +
          "</div>" +
        "</div></div>" +
      "</section>"
    );
  }

  function init() {
    UI.renderHeader("cif-header");

    var slug = window.CIF_EVENT_SLUG;
    var evento = CIF.getEvento(slug);
    var main = document.getElementById("cif-main");

    if (!evento) {
      main.innerHTML =
        '<section class="event-section section--cream"><div class="container"><div class="event-prose">' +
        '<h1 class="event-h2">Evento no encontrado</h1>' +
        '<p class="event-p">El evento solicitado no existe. <a href="' + eventosHref + '">Volver a eventos</a>.</p>' +
        "</div></div></section>";
    } else {
      document.title = evento.nombre + " — Club CIF";
      main.innerHTML = render(evento);
    }

    UI.renderFooter("cif-footer");
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
