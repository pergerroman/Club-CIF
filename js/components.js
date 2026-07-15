/* ============================================================
   HELPERS COMPARTIDOS — Club CIF (V2)
   Iconos SVG, placeholders de imagen, y render de Header y Footer.
   Depende de window.CIF (data.js). Expone window.CIFUI.
   window.CIF_BASE = "" en la landing, "../" en las páginas de evento.
   ============================================================ */
(function () {
  "use strict";

  var BASE = window.CIF_BASE || "";
  var CIF = window.CIF;

  /* ---------- Iconos (SVG como string) ---------- */
  var icons = {
    whatsapp: function (s) {
      return svg(s, 'fill="currentColor"',
        '<path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2Zm0 18.15h-.01a8.2 8.2 0 0 1-4.19-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.24 8.24 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.25-8.24 2.2 0 4.27.86 5.83 2.42a8.19 8.19 0 0 1 2.41 5.83c0 4.55-3.7 8.24-8.24 8.24Zm4.52-6.17c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.12-.16.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.13-.15.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.4-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.23.25-.86.85-.86 2.07 0 1.22.89 2.4 1.01 2.56.12.17 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.14-1.18-.06-.11-.22-.17-.47-.29Z"/>');
    },
    instagram: function (s) {
      return svg(s, 'fill="none" stroke="currentColor" stroke-width="1.8"',
        '<rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="3.5"/><circle cx="17" cy="7" r="1" fill="currentColor" stroke="none"/>');
    },
    facebook: function (s) {
      return svg(s, 'fill="currentColor"',
        '<path d="M13.5 22v-8h2.7l.4-3.1h-3.1V8.9c0-.9.25-1.5 1.53-1.5H17V4.6c-.28-.04-1.25-.12-2.37-.12-2.35 0-3.96 1.43-3.96 4.07v2.27H8v3.1h2.67V22h2.83Z"/>');
    },
    mail: function (s) {
      return svg(s, 'fill="none" stroke="currentColor" stroke-width="1.8"',
        '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/>');
    },
    location: function (s) {
      return svg(s, 'fill="none" stroke="currentColor" stroke-width="1.8"',
        '<path d="M12 21s7-6.2 7-11a7 7 0 1 0-14 0c0 4.8 7 11 7 11Z"/><circle cx="12" cy="10" r="2.5"/>');
    },
    arrowRight: function (s) {
      return svg(s, 'fill="none" stroke="currentColor" stroke-width="2"',
        '<path d="M5 12h14M13 6l6 6-6 6"/>');
    },
    chevronLeft: function (s) {
      return svg(s, 'fill="none" stroke="currentColor" stroke-width="2.2"',
        '<path d="m15 6-6 6 6 6"/>');
    },
    chevronRight: function (s) {
      return svg(s, 'fill="none" stroke="currentColor" stroke-width="2.2"',
        '<path d="m9 6 6 6-6 6"/>');
    },
    menu: function (s) {
      return svg(s, 'fill="none" stroke="currentColor" stroke-width="2"',
        '<path d="M4 7h16M4 12h16M4 17h16"/>');
    },
    close: function (s) {
      return svg(s, 'fill="none" stroke="currentColor" stroke-width="2"',
        '<path d="M6 6l12 12M18 6 6 18"/>');
    },
    play: function (s) {
      return svg(s, 'fill="currentColor"', '<path d="M8 5v14l11-7z"/>');
    },
    pause: function (s) {
      return svg(s, 'fill="currentColor"', '<path d="M7 5h3v14H7zM14 5h3v14h-3z"/>');
    },
    image: function (s) {
      return svg(s, 'fill="none" stroke="currentColor" stroke-width="1.5"',
        '<rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="m21 15-5-5L5 21"/>');
    },
  };

  function svg(size, attrs, inner) {
    size = size || 20;
    return (
      '<svg width="' + size + '" height="' + size +
      '" viewBox="0 0 24 24" aria-hidden="true" ' + attrs + ">" + inner + "</svg>"
    );
  }

  /* ---------- Utilidades ---------- */
  function esc(str) {
    if (str == null) return "";
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  // Devuelve el HTML de una imagen con placeholder integrado.
  // opts: { src, alt, label, extraClass }
  function media(opts) {
    var src = opts.src && opts.src.trim ? opts.src.trim() : "";
    var cls = "media " + (opts.extraClass || "");
    if (src) {
      return (
        '<div class="' + cls + '">' +
        '<img src="' + esc(src) + '" alt="' + esc(opts.alt) + '" loading="lazy">' +
        "</div>"
      );
    }
    var inner = opts.label
      ? '<span class="media__ph-label">' + esc(opts.label) + "</span>"
      : '<span class="media__ph-generic">Imagen</span>';
    return (
      '<div class="' + cls + '">' +
      '<div class="media__ph"><div class="media__ph-inner">' +
      icons.image(34) + inner +
      "</div></div></div>"
    );
  }

  // href de una ancla de la landing, según estemos en la landing o en un subdirectorio.
  function landingHref(anchor) {
    return BASE ? BASE + "index.html" + anchor : anchor;
  }

  /* ---------- Logo ---------- */
  function logo(variant) {
    var mod = variant === "light" ? " logo--light" : "";
    var href = BASE ? BASE + "index.html" : "#inicio";
    return (
      '<a href="' + href + '" class="logo' + mod + '" aria-label="Club CIF — Ir al inicio">' +
      '<span class="logo__mark"><span>C</span></span>' +
      '<span class="logo__text">CIF</span>' +
      "</a>"
    );
  }

  /* ---------- Header ---------- */
  function renderHeader(mountId) {
    var site = CIF.site;
    var nav = CIF.navItems
      .map(function (i) {
        return '<a href="' + landingHref(i.href) + '">' + esc(i.label) + "</a>";
      })
      .join("");
    var navMobile = CIF.navItems
      .map(function (i) {
        return '<a href="' + landingHref(i.href) + '" data-close-menu>' + esc(i.label) + "</a>";
      })
      .join("");

    var html =
      '<div class="container">' +
        '<div class="header__bar">' +
          logo() +
          '<nav class="header__nav" aria-label="Navegación principal">' + nav + "</nav>" +
          '<div class="header__right">' +
            '<a class="header__cta" href="' + esc(site.perfilUrl) + '" target="_blank" rel="noopener noreferrer">' +
              "Ingresar a mi perfil" + icons.arrowRight(16) +
            "</a>" +
            '<button type="button" class="header__burger" id="cif-burger" aria-label="Abrir menú" aria-expanded="false" aria-controls="cif-mobile-menu">' +
              icons.menu(22) +
            "</button>" +
          "</div>" +
        "</div>" +
      "</div>" +
      '<nav class="header__mobile" id="cif-mobile-menu" aria-label="Navegación principal (móvil)" hidden>' +
        '<div class="container header__mobile-inner">' +
          navMobile +
          '<a class="header__mobile-cta" href="' + esc(site.perfilUrl) + '" target="_blank" rel="noopener noreferrer">' +
            "Ingresar a mi perfil" + icons.arrowRight(16) +
          "</a>" +
        "</div>" +
      "</nav>";

    var el = document.getElementById(mountId);
    el.className = "header";
    el.innerHTML = html;
    initHeaderBehavior(el);
  }

  function initHeaderBehavior(headerEl) {
    // Sombra al hacer scroll
    function onScroll() {
      headerEl.classList.toggle("is-scrolled", window.scrollY > 8);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    // Menú hamburguesa
    var burger = document.getElementById("cif-burger");
    var menu = document.getElementById("cif-mobile-menu");
    function setOpen(open) {
      menu.hidden = !open;
      burger.setAttribute("aria-expanded", String(open));
      burger.setAttribute("aria-label", open ? "Cerrar menú" : "Abrir menú");
      burger.innerHTML = open ? icons.close(22) : icons.menu(22);
    }
    burger.addEventListener("click", function () {
      setOpen(menu.hidden);
    });
    menu.querySelectorAll("[data-close-menu]").forEach(function (a) {
      a.addEventListener("click", function () { setOpen(false); });
    });
    // Cierra al pasar a desktop
    var mq = window.matchMedia("(min-width: 1024px)");
    mq.addEventListener("change", function () {
      if (mq.matches) setOpen(false);
    });
  }

  /* ---------- Footer ---------- */
  function renderFooter(mountId) {
    var site = CIF.site;
    var year = new Date().getFullYear();

    var links = CIF.navItems
      .map(function (i) {
        return '<li><a href="' + landingHref(i.href) + '">' + esc(i.label) + "</a></li>";
      })
      .join("");

    var html =
      '<div class="container footer__inner">' +
        '<div class="footer__grid">' +
          "<div>" +
            logo("light") +
            '<p class="footer__about">' + esc(site.descripcionBreve) + "</p>" +
          "</div>" +
          '<nav aria-label="Enlaces del sitio">' +
            '<h3 class="footer__h3">Explorar</h3>' +
            '<ul class="footer__list">' + links +
              '<li><a href="' + esc(site.perfilUrl) + '" target="_blank" rel="noopener noreferrer">Sistema interno</a></li>' +
            "</ul>" +
          "</nav>" +
          "<div>" +
            '<h3 class="footer__h3">Contacto</h3>' +
            '<ul class="footer__contact">' +
              '<li><span class="icon">' + icons.location(18) + "</span><span>" + esc(site.address) + "</span></li>" +
              '<li><a href="' + esc(CIF.waLink("¡Hola! Quiero hacer una consulta al Club CIF.")) + '" target="_blank" rel="noopener noreferrer"><span class="icon">' + icons.whatsapp(18) + "</span>WhatsApp</a></li>" +
              '<li><a href="mailto:' + esc(site.email) + '"><span class="icon">' + icons.mail(18) + "</span>" + esc(site.email) + "</a></li>" +
            "</ul>" +
          "</div>" +
          "<div>" +
            '<h3 class="footer__h3">Seguinos</h3>' +
            '<div class="footer__socials">' +
              '<a class="footer__social" href="' + esc(site.instagramUrl) + '" target="_blank" rel="noopener noreferrer" aria-label="Instagram del Club CIF">' + icons.instagram(20) + "</a>" +
              '<a class="footer__social" href="' + esc(site.facebookUrl) + '" target="_blank" rel="noopener noreferrer" aria-label="Facebook del Club CIF">' + icons.facebook(20) + "</a>" +
            "</div>" +
          "</div>" +
        "</div>" +
        '<div class="footer__bottom">' +
          "<p>© " + year + " Club CIF. Todos los derechos reservados.</p>" +
          '<div class="footer__legal">' +
            '<a href="' + BASE + 'politicas-de-privacidad.html">Políticas de privacidad</a>' +
            "<span>Sitio desarrollado para el Club CIF</span>" +
          "</div>" +
        "</div>" +
      "</div>";

    var el = document.getElementById(mountId);
    el.className = "footer";
    el.innerHTML = html;
  }

  /* ---------- Exponer ---------- */
  window.CIFUI = {
    icons: icons,
    esc: esc,
    media: media,
    logo: logo,
    landingHref: landingHref,
    renderHeader: renderHeader,
    renderFooter: renderFooter,
    BASE: BASE,
  };
})();
