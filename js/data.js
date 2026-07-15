/* ============================================================
   CONTENIDO EDITABLE DEL SITIO — Club CIF (V2, HTML/CSS/JS puro)
   Todo el contenido vive acá, separado de la estructura.
   Se expone en el objeto global window.CIF para que lo usen los demás scripts.
   Ver Buttons.md y Text.md para referencia.
   ============================================================ */
(function () {
  "use strict";

  /* ---------- Configuración global del sitio ---------- */
  var site = {
    nombre: "Club CIF",
    descripcionBreve:
      "Club deportivo de Cipolletti. Movimiento, aprendizaje y encuentro para todas las edades.", // TEXTO placeholder

    // Dirección de la sede principal (CONFIRMADA)
    address: "Maestro Espinosa 3493, Cipolletti",

    // Contacto
    email: "contacto@clubcif.com", // PLACEHOLDER

    // Número de WhatsApp — PLACEHOLDER: formato internacional, solo dígitos.
    whatsappNumber: "549XXXXXXXXXX",

    // Enlaces externos (PLACEHOLDERS a reemplazar)
    perfilUrl: "https://ejemplo-sistema-interno.clubcif.com", // "Ingresar a mi perfil"
    pedidoFormUrl: "https://ejemplo-formulario-pedido.com", // "Hacer pedido"

    // Redes sociales (PLACEHOLDERS)
    instagramUrl: "https://instagram.com/",
    facebookUrl: "https://facebook.com/",
  };

  // Genera un link de WhatsApp con mensaje precargado opcional.
  function waLink(mensaje) {
    var base = "https://wa.me/" + site.whatsappNumber;
    return mensaje ? base + "?text=" + encodeURIComponent(mensaje) : base;
  }

  // Genera un link de Google Maps a partir de una dirección.
  function mapsLink(direccion) {
    return (
      "https://www.google.com/maps/search/?api=1&query=" +
      encodeURIComponent(direccion)
    );
  }

  // Enlace del sponsor: por defecto usa WhatsApp.
  var sponsorFormUrl = waLink("¡Hola! Quiero acompañar al Club CIF como sponsor.");

  /* ---------- Navegación principal (anclas de la landing) ---------- */
  var navItems = [
    { label: "Actividades", href: "#actividades" },
    { label: "Espacios", href: "#espacios" },
    { label: "Eventos", href: "#eventos" },
    { label: "Indumentaria", href: "#indumentaria" },
    { label: "Contacto", href: "#contacto" },
  ];

  /* ---------- Slides del Hero ----------
     Para imagen/video real: completá "image" o "video" (ruta relativa a V2/). */
  var heroSlides = [
    {
      titulo: "15 años creciendo en movimiento.",
      texto: "Deporte, aprendizaje y encuentro para todas las edades.",
      botonLabel: "Conocé nuestras actividades",
      botonHref: "#actividades",
      image: "", // TODO: images/hero/slide-1.jpg
      video: "",
      alt: "Deportistas del Club CIF en actividad",
    },
    {
      titulo: "Encontrá una actividad para vos.",
      texto:
        "Propuestas deportivas y recreativas para infancias, jóvenes y adultos.",
      botonLabel: "Entrená con nosotros",
      botonHref: "#actividades",
      image: "", // TODO: images/hero/slide-2.jpg
      video: "",
      alt: "Clase deportiva del Club CIF",
    },
    {
      titulo: "CIF15, Encuentros deportivos mensuales.",
      texto: "Eventos que reúnen a deportistas, familias, clubes e instituciones.",
      botonLabel: "Conocé nuestros eventos",
      botonHref: "#eventos",
      image: "", // TODO: images/hero/slide-3.jpg
      video: "",
      alt: "Encuentro deportivo CIF15",
    },
  ];

  /* ---------- Datos destacados (PLACEHOLDERS) ---------- */
  var stats = [
    { valor: "+[X]", etiqueta: "deportistas" },
    { valor: "[x]", etiqueta: "actividades" },
    { valor: "[x]", etiqueta: "espacios deportivos" },
    { valor: "15 años", etiqueta: "construyendo comunidad" },
  ];

  /* ---------- Filtros por público ---------- */
  var filtros = [
    { key: "todas", label: "Todas" },
    { key: "infancias", label: "Infancias" },
    { key: "adolescentes", label: "Adolescentes" },
    { key: "adultos", label: "Adultos" },
  ];

  /* ---------- Actividades ----------
     publicos: claves usadas por los filtros ("infancias","adolescentes","adultos").
     Todos los textos de días/horarios/descripción son PROVISIONALES. */
  var actividades = [
    {
      id: "futbol",
      nombre: "Fútbol",
      publicos: ["infancias", "adolescentes", "adultos"],
      publicoLabel: "Todas las edades",
      dias: "Días a confirmar",
      horarios: "Horarios a confirmar",
      descripcion:
        "Escuela de fútbol para todas las edades. (Descripción provisional — reemplazar con el contenido definitivo.)",
      lugar: "Canchas",
      image: "",
      alt: "Actividad de fútbol del Club CIF",
    },
    {
      id: "basquet",
      nombre: "Básquet",
      publicos: ["infancias", "adolescentes", "adultos"],
      publicoLabel: "Todas las edades",
      dias: "Días a confirmar",
      horarios: "Horarios a confirmar",
      descripcion:
        "Entrenamiento de básquet para distintas categorías. (Descripción provisional.)",
      lugar: "Gimnasio",
      image: "",
      alt: "Actividad de básquet del Club CIF",
    },
    {
      id: "gimnasia-artistica",
      nombre: "Gimnasia artística",
      publicos: ["infancias", "adolescentes"],
      publicoLabel: "Infancias y adolescentes",
      dias: "Días a confirmar",
      horarios: "Horarios a confirmar",
      descripcion:
        "Gimnasia artística con foco en coordinación, fuerza y flexibilidad. (Descripción provisional.)",
      lugar: "Domo",
      image: "",
      alt: "Clase de gimnasia artística del Club CIF",
    },
    {
      id: "patin",
      nombre: "Patín",
      publicos: ["infancias", "adolescentes"],
      publicoLabel: "Infancias y adolescentes",
      dias: "Días a confirmar",
      horarios: "Horarios a confirmar",
      descripcion: "Escuela de patín artístico. (Descripción provisional.)",
      lugar: "Domo",
      image: "",
      alt: "Clase de patín del Club CIF",
    },
    {
      id: "breaking",
      nombre: "Breaking",
      publicos: ["infancias", "adolescentes", "adultos"],
      publicoLabel: "Desde infancias",
      dias: "Días a confirmar",
      horarios: "Horarios a confirmar",
      descripcion: "Breaking / breakdance. (Descripción provisional.)",
      lugar: "Gimnasio",
      image: "",
      alt: "Clase de breaking del Club CIF",
    },
    {
      id: "acrobacias-aereas",
      nombre: "Acrobacias aéreas",
      publicos: ["adolescentes", "adultos"],
      publicoLabel: "Adolescentes y adultos",
      dias: "Días a confirmar",
      horarios: "Horarios a confirmar",
      descripcion:
        "Acrobacias aéreas en telas y aparatos suspendidos. (Descripción provisional.)",
      lugar: "Domo",
      image: "",
      alt: "Clase de acrobacias aéreas del Club CIF",
    },
    {
      id: "efi",
      nombre: "EFI",
      publicos: ["infancias"],
      publicoLabel: "Infancias",
      dias: "Días a confirmar",
      horarios: "Horarios a confirmar",
      descripcion:
        "Educación Física Infantil (EFI). (Descripción provisional — ampliar.)",
      lugar: "Escuela N.º 35",
      image: "",
      alt: "Actividad de educación física infantil del Club CIF",
    },
    {
      id: "estimulacion-temprana",
      nombre: "Estimulación temprana",
      publicos: ["infancias"],
      publicoLabel: "Primera infancia",
      dias: "Días a confirmar",
      horarios: "Horarios a confirmar",
      descripcion:
        "Estimulación temprana para la primera infancia. (Descripción provisional.)",
      lugar: "Escuela N.º 35",
      image: "",
      alt: "Actividad de estimulación temprana del Club CIF",
    },
    {
      id: "preparacion-fisica",
      nombre: "Preparación física",
      publicos: ["adolescentes", "adultos"],
      publicoLabel: "Adolescentes y adultos",
      dias: "Días a confirmar",
      horarios: "Horarios a confirmar",
      descripcion:
        "Preparación física y acondicionamiento general. (Descripción provisional.)",
      lugar: "Gimnasio",
      image: "",
      alt: "Clase de preparación física del Club CIF",
    },
  ];

  /* ---------- Espacios ----------
     Solo la sede principal tiene dirección confirmada. No inventar direcciones. */
  var espacios = [
    {
      id: "canchas",
      nombre: "Canchas",
      descripcion:
        "Espacio al aire libre para las disciplinas de campo. (Descripción provisional.)",
      actividades: "Fútbol",
      direccion: "",
      mapsUrl: "",
      image: "",
      alt: "Canchas del Club CIF",
    },
    {
      id: "gimnasio",
      nombre: "Gimnasio",
      descripcion:
        "Espacio techado para deportes de conjunto y preparación física. (Descripción provisional.)",
      actividades: "Básquet, breaking, preparación física",
      direccion: "",
      mapsUrl: "",
      image: "",
      alt: "Gimnasio del Club CIF",
    },
    {
      id: "domo",
      nombre: "Domo",
      descripcion:
        "Espacio para disciplinas artísticas y aéreas. (Descripción provisional.)",
      actividades: "Gimnasia artística, patín, acrobacias aéreas",
      direccion: "",
      mapsUrl: "",
      image: "",
      alt: "Domo del Club CIF",
    },
    {
      id: "escuela-35",
      nombre: "Escuela N.º 35",
      descripcion:
        "Sede para actividades de infancias y primera infancia. (Descripción provisional.)",
      actividades: "EFI, estimulación temprana",
      direccion: "Maestro Espinosa 3493, Cipolletti", // Sede principal — CONFIRMADA
      mapsUrl: "",
      image: "",
      alt: "Escuela N.º 35, sede del Club CIF",
    },
  ];

  // Devuelve el link de mapa de un espacio (o null si no hay dirección).
  function espacioMapsUrl(e) {
    if (e.mapsUrl) return e.mapsUrl;
    if (e.direccion) return mapsLink(e.direccion);
    return null;
  }

  /* ---------- Eventos ----------
     Cada evento alimenta su card y su página individual (eventos/<slug>.html). */
  function galeriaPlaceholder() {
    var arr = [];
    for (var i = 0; i < 6; i++) {
      arr.push({ src: "", alt: "Imagen de la galería " + (i + 1) });
    }
    return arr;
  }

  var eventos = [
    {
      slug: "cif15",
      nombre: "CIF15",
      descripcionBreve:
        "Encuentros deportivos mensuales que reúnen a deportistas, familias, clubes e instituciones.",
      anioEstado: "Encuentros mensuales",
      estado: "actual",
      destacado: true,
      cardImage: "",
      cardAlt: "Evento CIF15 del Club CIF",
      page: {
        heroImage: "",
        heroAlt: "Encuentro deportivo CIF15",
        presentacion:
          "CIF15 es el ciclo de encuentros deportivos mensuales del Club CIF. (Texto provisional — reemplazar con la presentación real del evento.)",
        infoGeneral: [
          { label: "Modalidad", valor: "Encuentros mensuales" },
          { label: "Sede", valor: "Cipolletti, Río Negro" },
          { label: "Dirigido a", valor: "Deportistas, familias, clubes e instituciones" },
        ],
        fechas: ["Cronograma a confirmar", "Fecha próxima a anunciar"],
        participantes:
          "Deportistas del club, clubes invitados e instituciones de la región. (Provisional.)",
        galeria: galeriaPlaceholder(),
        videos: [{ titulo: "Video del evento (próximamente)", url: "" }],
        sponsors: [
          { nombre: "Sponsor 1", logo: "" },
          { nombre: "Sponsor 2", logo: "" },
          { nombre: "Sponsor 3", logo: "" },
        ],
        infoClubes:
          "¿Sos un club o institución y querés participar? Escribinos y te contamos cómo sumarte. (Provisional.)",
        ctaTitulo: "¿Querés participar de CIF15?",
        ctaTexto: "Escribinos y coordinamos tu inscripción o la de tu institución.",
      },
    },
    {
      slug: "fpg-2025",
      nombre: "FPG 2025",
      descripcionBreve:
        "Edición 2025 del evento FPG organizado por el Club CIF. (Descripción provisional.)",
      anioEstado: "Edición 2025",
      estado: "pasado",
      cardImage: "",
      cardAlt: "Evento FPG 2025 del Club CIF",
      page: {
        heroImage: "",
        heroAlt: "Evento FPG 2025",
        presentacion:
          "FPG 2025 fue una de las ediciones destacadas del año. (Texto provisional — reemplazar.)",
        infoGeneral: [
          { label: "Edición", valor: "2025" },
          { label: "Estado", valor: "Finalizado" },
          { label: "Sede", valor: "Cipolletti, Río Negro" },
        ],
        fechas: ["Fechas de la edición 2025 (a completar)"],
        participantes: "Participantes de la edición 2025. (Provisional.)",
        galeria: galeriaPlaceholder(),
        videos: [{ titulo: "Resumen FPG 2025 (próximamente)", url: "" }],
        sponsors: [
          { nombre: "Sponsor 1", logo: "" },
          { nombre: "Sponsor 2", logo: "" },
        ],
        infoClubes:
          "Información para clubes e instituciones de la edición 2025. (Provisional.)",
        ctaTitulo: "¿Querés más información de FPG?",
        ctaTexto: "Escribinos y te contamos sobre las próximas ediciones.",
      },
    },
    {
      slug: "fpg-2026",
      nombre: "FPG 2026",
      descripcionBreve: "La próxima edición del evento FPG. (Descripción provisional.)",
      anioEstado: "Edición 2026",
      estado: "proximamente",
      cardImage: "",
      cardAlt: "Evento FPG 2026 del Club CIF",
      page: {
        heroImage: "",
        heroAlt: "Evento FPG 2026",
        presentacion:
          "FPG 2026 está en preparación. Muy pronto vamos a compartir todos los detalles. (Texto provisional.)",
        infoGeneral: [
          { label: "Edición", valor: "2026" },
          { label: "Estado", valor: "Próximamente" },
          { label: "Sede", valor: "Cipolletti, Río Negro" },
        ],
        fechas: ["Fechas a confirmar"],
        participantes: "Inscripciones próximamente. (Provisional.)",
        galeria: galeriaPlaceholder(),
        videos: [{ titulo: "Video de presentación (próximamente)", url: "" }],
        sponsors: [{ nombre: "Sponsor 1", logo: "" }],
        infoClubes:
          "¿Tu club o institución quiere participar de FPG 2026? Dejanos tu consulta y te avisamos cuando abran las inscripciones. (Provisional.)",
        ctaTitulo: "Enterate primero de FPG 2026",
        ctaTexto: "Escribinos y te avisamos cuando abran las inscripciones.",
      },
    },
  ];

  function getEvento(slug) {
    for (var i = 0; i < eventos.length; i++) {
      if (eventos[i].slug === slug) return eventos[i];
    }
    return null;
  }

  /* ---------- Indumentaria ----------
     "Hacer pedido" abre site.pedidoFormUrl. precio opcional (vacío = no se muestra). */
  var productos = [
    { id: "remera", nombre: "Remera", descripcion: "Remera institucional del club. (Descripción provisional.)", precio: "", image: "", alt: "Remera del Club CIF" },
    { id: "short", nombre: "Short", descripcion: "Short deportivo. (Descripción provisional.)", precio: "", image: "", alt: "Short del Club CIF" },
    { id: "conjunto", nombre: "Conjunto deportivo largo", descripcion: "Conjunto deportivo completo. (Descripción provisional.)", precio: "", image: "", alt: "Conjunto deportivo del Club CIF" },
    { id: "campera", nombre: "Campera", descripcion: "Campera institucional. (Descripción provisional.)", precio: "", image: "", alt: "Campera del Club CIF" },
    { id: "medias", nombre: "Medias", descripcion: "Medias deportivas. (Descripción provisional.)", precio: "", image: "", alt: "Medias del Club CIF" },
    { id: "bolso", nombre: "Bolso", descripcion: "Bolso deportivo del club. (Descripción provisional.)", precio: "", image: "", alt: "Bolso del Club CIF" },
  ];

  /* ---------- Sponsors ----------
     logo vacío = recuadro placeholder con el nombre. */
  var sponsors = [
    { id: "s1", nombre: "Marca 1", logo: "", url: "" },
    { id: "s2", nombre: "Marca 2", logo: "", url: "" },
    { id: "s3", nombre: "Marca 3", logo: "", url: "" },
    { id: "s4", nombre: "Marca 4", logo: "", url: "" },
    { id: "s5", nombre: "Marca 5", logo: "", url: "" },
    { id: "s6", nombre: "Marca 6", logo: "", url: "" },
  ];

  /* ---------- Exponer todo en el namespace global ---------- */
  window.CIF = {
    site: site,
    waLink: waLink,
    mapsLink: mapsLink,
    sponsorFormUrl: sponsorFormUrl,
    navItems: navItems,
    heroSlides: heroSlides,
    stats: stats,
    filtros: filtros,
    actividades: actividades,
    espacios: espacios,
    espacioMapsUrl: espacioMapsUrl,
    eventos: eventos,
    getEvento: getEvento,
    productos: productos,
    sponsors: sponsors,
  };
})();
