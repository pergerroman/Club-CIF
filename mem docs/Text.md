# Text.md — Textos editables

> Todos los textos provisionales de la web, ordenados por sección y por lugar en pantalla.
> **Dónde se editan de verdad:** los textos viven en los archivos de `data/` (indicados abajo)
> y en los componentes de `components/`. Este documento es el índice para saber qué dice cada
> lugar y dónde cambiarlo.
>
> 🔤 Los `[X]`, `[x]` y textos marcados como *(placeholder)* deben reemplazarse con la
> información real. No se inventaron cifras, precios, horarios ni direcciones no confirmadas.

---

## Tipografías

- **Títulos:** intención = *Neutronic Condensed Black* (fuente de pago, no incluida).
  Sustituta actual = **Anton** (Google Fonts).
  → Para poner la real: colocá el archivo en `app/fonts/`, definí `next/font/local` en
    `app/layout.tsx` y cambiá la variable `--font-title` en `app/globals.css`.
- **Textos:** **Montserrat** (Google Fonts, ya integrada).

---

## Header — `components/layout/Header.tsx`
| Lugar | Texto |
|-------|-------|
| Logo | (placeholder "CIF" hasta cargar el logo real en `public/logo/`) |
| Nav | Actividades · Espacios · Eventos · Indumentaria · Contacto |
| Botón destacado | **Ingresar a mi perfil** |

---

## Hero — `data/hero.ts`
**Slide 1**
- Título: **15 años creciendo en movimiento.**
- Texto: Deporte, aprendizaje y encuentro para todas las edades.
- Botón: Conocé nuestras actividades.

**Slide 2**
- Título: **Encontrá una actividad para vos.**
- Texto: Propuestas deportivas y recreativas para infancias, jóvenes y adultos.
- Botón: Entrená con nosotros.

**Slide 3**
- Título: **CIF15, Encuentros deportivos mensuales.**
- Texto: Eventos que reúnen a deportistas, familias, clubes e instituciones.
- Botón: Conocé nuestros eventos.

**Accesos rápidos (debajo del hero):** Ver actividades · Consultar por WhatsApp · Ingresar a mi perfil.

---

## Presentación institucional — `components/sections/Institucional.tsx` + `data/stats.ts`
- Título: **Un club para moverse, aprender y encontrarse.** *(placeholder editable)*
- Texto: "Somos un club deportivo de Cipolletti que acompaña a niños, jóvenes y adultos a
  través del movimiento, el aprendizaje y el encuentro."
- Datos destacados *(placeholders, editar en `data/stats.ts`)*:
  - Más de **[X]** deportistas.
  - **[x]** actividades.
  - **[x]** espacios deportivos.
  - **15 años** construyendo comunidad.

---

## Actividades — `data/actividades.ts`
- Título de sección: **Entrená con nosotros.**
- Subtítulo: Elegí una disciplina y sumate al club. *(placeholder)*
- Filtros: Todas · Infancias · Adolescentes · Adultos
- Actividades de ejemplo (nombre + textos provisionales, editar en `data/actividades.ts`):
  Fútbol · Básquet · Gimnasia artística · Patín · Breaking · Acrobacias Aéreas · EFI ·
  Estimulación Temprana · Preparación física.
  > Cada actividad tiene: nombre, público (edades), días y horarios *(provisionales)*,
    descripción, lugar. Reemplazá con la info definitiva cuando esté disponible.
- Card de cierre (CTA):
  - Título: **¿No sabés qué actividad elegir?**
  - Texto: Escribinos y te ayudamos a encontrar una propuesta para vos.
  - Botón: Consultar por WhatsApp.

---

## Espacios — `data/espacios.ts`
- Intro: "Nuestras actividades se desarrollan en diferentes espacios deportivos de Cipolletti."
- Espacios: Canchas · Gimnasio · Domo · Escuela N.º 35
  > Cada espacio: nombre, descripción breve, actividades que se realizan, ubicación, botón
    "Ver ubicación". **Solo la sede principal tiene dirección confirmada:**
    *Maestro Espinosa 3493, Cipolletti.* El resto queda como *(dirección a confirmar)*.

---

## Eventos — `data/eventos.ts`
- Título de sección: **Eventos que nos reúnen.** *(placeholder)*
- Cards: **CIF15** · **FPG 2025** · **FPG 2026** (etiqueta "Próximamente")
  > Cada card: nombre, descripción breve, año/estado, botón "Conocé el evento" → página propia.

### Páginas de evento (contenido provisional, `data/eventos.ts` → campo `page`)
Cada página incluye bloques: Hero · Presentación · Información general · Fechas ·
Participantes · Galería · Videos · Sponsors · Info para clubes/instituciones · CTA.
Todos los textos son provisionales hasta cargar la información real.

---

## Indumentaria — `data/productos.ts`
- Título de sección: **Vestite del CIF.**
- Intro: "Llevá los colores del club dentro y fuera de la cancha."
- Productos: Remera · Short · Conjunto deportivo largo · Campera · Medias · Bolso
  > Cada producto: nombre, descripción breve, precio *(opcional, vacío por defecto)*,
    botón "Hacer pedido" (formulario externo — ver `Buttons.md`).

---

## Sponsors — `data/sponsors.ts`
- Título: **Marcas que acompañan al CIF.**
- Botón: **Quiero acompañar al club.**
- Logos: placeholders (reemplazar en `data/sponsors.ts` + `public/images/sponsors/`).

---

## Llamado a la acción final — `components/sections/CtaFinal.tsx`
- Título: **¿Querés ser parte del CIF?**
- Texto: Conocé nuestras propuestas y encontrá una actividad para vos.
- Botones: Ver actividades · Consultar por WhatsApp.
- Dirección: **Maestro Espinosa 3493, Cipolletti.**

---

## Footer — `components/layout/Footer.tsx` + `data/site.ts`
- Texto institucional breve: "Club deportivo de Cipolletti. Movimiento, aprendizaje y
  encuentro para todas las edades." *(placeholder)*
- Enlaces principales (mismos del nav).
- Dirección: Maestro Espinosa 3493, Cipolletti.
- Contacto: WhatsApp · Email *(placeholder: contacto@clubcif.com)* · Instagram · Facebook.
- Acceso al sistema interno · Políticas de privacidad · Créditos del sitio.
