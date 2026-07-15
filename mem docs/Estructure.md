# Estructure.md — Estructura de la web

> Mapa de secciones de la landing y de las páginas de eventos.
> Cada sección es un **componente independiente** (ver ruta de archivo indicada) para poder
> revisarla y modificarla sin afectar el resto.

---

## Rutas

| Ruta | Archivo | Descripción |
|------|---------|-------------|
| `/` | `app/page.tsx` | Landing principal (todas las secciones) |
| `/eventos/cif15` | `app/eventos/cif15/page.tsx` | Página del evento CIF15 |
| `/eventos/fpg-2025` | `app/eventos/fpg-2025/page.tsx` | Página del evento FPG 2025 |
| `/eventos/fpg-2026` | `app/eventos/fpg-2026/page.tsx` | Página del evento FPG 2026 (Próximamente) |

Las páginas de eventos comparten el mismo **Header** y **Footer** que la landing.

---

## Secciones de la landing (en orden)

### 0. Header — `components/layout/Header.tsx`
Menú superior **sticky** (queda visible al hacer scroll). Contiene el logo, los enlaces de
navegación por anclas (Actividades, Espacios, Eventos, Indumentaria, Contacto) y el botón
destacado **"Ingresar a mi perfil"** (enlace externo). En móvil se transforma en **menú
hamburguesa** manteniendo accesible el botón de perfil.

### 1. Hero — `components/sections/Hero.tsx` → ancla `#inicio`
Carrusel de **3 slides** con cambio automático moderado, indicadores, flechas manuales y
**botón de pausa**. Cada slide: fondo (imagen/video), título, texto breve y botón de acción.
Debajo, **accesos rápidos**: Ver actividades · Consultar por WhatsApp · Ingresar a mi perfil.

### 2. Presentación institucional — `components/sections/Institucional.tsx` → `#club`
Presentación breve del club + bloque visual con **4 datos destacados** (placeholders
editables, sin cifras inventadas).

### 3. Entrená con nosotros (Actividades) — `components/sections/Actividades.tsx` → `#actividades`
Grilla de **cards de actividades** con **filtros por público** (Todas / Infancias /
Adolescentes / Adultos). Cada card: imagen, nombre, público, días y horarios, botón
"Ver actividad" que abre un **modal** con información ampliada (descripción, edades,
horarios, lugar, botón de WhatsApp). Cierra con un **llamado a la acción** ("¿No sabés qué
actividad elegir?").

### 4. Espacios — `components/sections/Espacios.tsx` → `#espacios`
Introducción breve + cards de espacios (Canchas, Gimnasio, Domo, Escuela N.º 35). Cada card:
foto, nombre, descripción, actividades que se realizan allí, ubicación y botón
"Ver ubicación" (preparado para Google Maps).

### 5. Eventos — `components/sections/Eventos.tsx` → `#eventos`
Sección visualmente importante con **3 cards** (CIF15, FPG 2025, FPG 2026). FPG 2026 lleva
etiqueta **"Próximamente"**. Cada card enlaza a su página individual.

### 6. Vestite del CIF (Indumentaria) — `components/sections/Indumentaria.tsx` → `#indumentaria`
Carrusel con **scroll horizontal** de productos (remera, short, conjunto, campera, medias,
bolso). En desktop con flechas laterales; en móvil, arrastre táctil. Cada producto: imagen,
nombre, descripción, precio opcional y botón "Hacer pedido" (formulario externo, placeholder).

### 7. Sponsors — `components/sections/Sponsors.tsx` → `#sponsors`
Grilla sencilla de logos placeholder + botón "Quiero acompañar al club". Protagonismo
secundario.

### 8. Llamado a la acción final — `components/sections/CtaFinal.tsx` → `#contacto`
Bloque visual destacado: "¿Querés ser parte del CIF?", botones (Ver actividades / WhatsApp)
y la dirección de la sede.

### 9. Footer — `components/layout/Footer.tsx`
Logo, texto institucional breve, enlaces principales, dirección, WhatsApp, email (placeholder),
Instagram, Facebook, acceso al sistema interno, políticas de privacidad y créditos del sitio.

---

## Estructura de una página de evento — `components/events/EventPage.tsx`
Plantilla reutilizable con secciones preparadas (contenido provisional):
Hero del evento · Presentación · Información general · Fechas · Participantes ·
Galería de imágenes · Videos · Sponsors · Info para clubes/instituciones ·
Botones de inscripción o contacto.

---

## Organización de carpetas

```
app/
  layout.tsx            → tipografías + metadatos globales
  globals.css           → paleta de colores y tipografías (Tailwind v4)
  page.tsx              → landing (ensambla las secciones)
  eventos/
    cif15/page.tsx
    fpg-2025/page.tsx
    fpg-2026/page.tsx
components/
  layout/    → Header, Footer
  sections/  → una sección de la landing por archivo
  events/    → EventPage (plantilla) + EventCard
  ui/        → piezas reutilizables (MediaImage, Logo, SectionHeading, Modal, etc.)
data/        → CONTENIDO EDITABLE (ver Text.md y Buttons.md)
  site.ts        → datos globales: WhatsApp, redes, dirección, enlaces externos
  hero.ts        → slides del hero
  actividades.ts → actividades
  espacios.ts    → espacios
  eventos.ts     → eventos
  productos.ts   → indumentaria
  sponsors.ts    → sponsors
  stats.ts       → datos destacados de la sección institucional
public/
  images/    → aquí van las fotos reales (ver comentarios en el código)
  logo/      → aquí va el logo del CIF cuando esté disponible
```
