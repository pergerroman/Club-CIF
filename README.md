# Club CIF — Sitio web

Sitio institucional y comercial del **Club CIF** (Cipolletti, Río Negro).
Desarrollado en **HTML, CSS y JavaScript puro** (sin frameworks ni build), con el contenido
separado de la estructura para editarlo fácilmente. Listo para desplegarse como sitio
estático (Vercel, Netlify, GitHub Pages, etc.).

## Estructura del repositorio

```
.
├── index.html            → landing (una sola página)
├── eventos/
│   ├── cif15.html
│   ├── fpg-2025.html
│   └── fpg-2026.html
├── css/
│   └── styles.css        → todos los estilos + paleta y tipografías (variables :root)
├── js/
│   ├── data.js           → CONTENIDO EDITABLE (todo el texto/datos)
│   ├── components.js      → iconos, placeholders, Header y Footer
│   ├── main.js            → render de la landing + carrusel, filtros, modal, scroll
│   └── event.js           → render de las páginas de evento
├── mem docs/             → documentos de referencia del proyecto (.md)
└── README.md
```

## Documentos de referencia (base de comunicación)

- **[Proyect.md](mem%20docs/Proyect.md)** — enfoque, público, objetivo, tono e identidad visual.
- **[Estructure.md](mem%20docs/Estructure.md)** — estructura, secciones y organización de archivos.
- **[Text.md](mem%20docs/Text.md)** — todos los textos editables y dónde se cambian.
- **[Buttons.md](mem%20docs/Buttons.md)** — enlaces, botones y redirecciones.

> Nota: algunas referencias dentro de esos documentos apuntan a rutas de la versión anterior
> en Next.js (ya eliminada). Para el sitio actual valen las rutas de este README.

## Ejecutar localmente

No requiere instalación ni dependencias. Dos opciones:

1. **Abrir directamente** `index.html` en el navegador (doble clic).
2. **Con un servidor local** (recomendado, evita restricciones de `file://`):

   ```bash
   python3 -m http.server 8080
   # luego abrir http://localhost:8080
   ```

## Dónde editar el contenido

Casi todo el contenido editable vive en **`js/data.js`**:

| Objeto en data.js | Qué controla |
|-------------------|--------------|
| `site` | WhatsApp, redes, email, dirección y **enlaces externos** |
| `heroSlides` | Slides del carrusel principal |
| `stats` | Datos destacados (placeholders `[X]`) |
| `actividades` | Actividades deportivas + su modal |
| `espacios` | Espacios deportivos |
| `eventos` | Eventos (cards + páginas individuales) |
| `productos` | Indumentaria |
| `sponsors` | Sponsors |
| `navItems` | Menú de navegación |

- **Imágenes:** poné el archivo en `images/...` (creá la carpeta en la raíz) y completá el
  campo `image` del dato. Mientras esté vacío se muestra un placeholder con la paleta del club.
- **Logo:** en `js/components.js`, función `logo()` (hoy hay un placeholder textual "CIF").
- **Colores y tipografías:** en `css/styles.css`, bloque `:root`.
- **Tipografía de títulos:** hoy usa *Anton* (Google Fonts) como sustituta de
  *Neutronic Condensed Black*. Se carga desde el `<link>` de cada HTML.

## Notas técnicas

- Sin backend, sin registro, sin formularios internos: perfil, compras, mapas y WhatsApp
  son enlaces externos (placeholders en `js/data.js`).
- Los scripts se cargan como scripts clásicos (no módulos) para funcionar también con
  `file://`. Cada HTML define `window.CIF_BASE` (`""` en la landing, `"../"` en las páginas
  de evento) para resolver correctamente los enlaces entre páginas.

## Desplegar

Al ser 100 % estático, se sube el repositorio tal cual a cualquier hosting estático. En
Vercel, importar el proyecto (sin build) y apuntar el dominio **clubcif.com**.
