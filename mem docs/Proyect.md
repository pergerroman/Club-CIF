# Proyect.md — Enfoque del proyecto

> Documento de referencia sobre el propósito, público y tono de la web del **Club CIF**.
> Sirve como base de memoria compartida. Editá libremente lo que quieras ajustar.

---

## 1. Qué es el proyecto

Sitio web institucional y comercial del **Club CIF**, un club deportivo ubicado en
**Cipolletti, Río Negro**. Reemplaza por completo la web actual (clubcif.com), sin
tomarla como referencia de diseño ni de contenido.

Esta primera entrega es un **prototipo navegable** enfocado en estructura, navegación,
jerarquía visual y experiencia de usuario. Los textos e imágenes son provisionales y
están preparados para reemplazarse fácilmente.

---

## 2. Objetivo

Que cualquier persona, en pocos segundos, pueda:

1. Entender qué es el Club CIF.
2. Conocer las actividades disponibles.
3. Explorar los espacios donde se realizan.
4. Conocer los eventos organizados por el club.
5. Ver la indumentaria institucional.
6. Comunicarse con el club (WhatsApp / redes).
7. Acceder al sistema interno de usuarios ("Ingresar a mi perfil").

---

## 3. Público

- **Familias** que buscan una actividad deportiva o recreativa para sus hijos/as.
- **Jóvenes y adultos** interesados en entrenar o sumarse a una disciplina.
- **Clubes e instituciones** que participan de los eventos (CIF15, FPG).
- **Marcas / sponsors** que quieran acompañar al club.
- **Socios actuales** que ingresan a su perfil.

Prioridad de dispositivo: **mobile-first**. La mayoría llega desde el celular.

---

## 4. Alcance de esta etapa

Incluye:
- Landing de una sola página con navegación por anclas.
- 3 páginas individuales de eventos (`/eventos/cif15`, `/eventos/fpg-2025`, `/eventos/fpg-2026`).
- Diseño responsive completo, componentes independientes y datos editables.

No incluye (por decisión de esta etapa):
- Backend, base de datos o autenticación real.
- Formularios internos o sistema de registro.
- Contenido definitivo (textos finales, fotos reales, precios, horarios, direcciones no confirmadas).

Los accesos a perfil, compras, mapas y WhatsApp son **enlaces externos** con placeholders.

---

## 5. Tono de voz y mensaje

- **Cercano y comunitario**, no corporativo ni de "plantilla de gimnasio".
- **Deportivo, actual y humano.** Habla de tú/vos rioplatense ("Entrená con nosotros",
  "Escribinos", "Llevá los colores del club").
- **Claro y directo.** Títulos grandes, frases cortas, mensajes que se entienden de un vistazo.
- Mensaje central: *movimiento, aprendizaje y encuentro para todas las edades*.

---

## 6. Identidad visual

| Rol | Color | Hex |
|-----|-------|-----|
| Verde oscuro principal | ● | `#12493B` |
| Verde claro | ● | `#A9CFC3` |
| Beige / crudo (complementario) | ● | `#EFE7D6` |
| Fondo crema neutro | ● | `#FAF7F0` |
| Texto principal | ● | `#17211D` |
| Blanco | ● | `#FFFFFF` |

**Tipografías:**
- Títulos: **Neutronic Condensed Black** (fuente de pago, no incluida). Ver
  `app/globals.css` — actualmente se usa **Anton** (Google Fonts) como sustituta con look
  condensado/black muy similar. Instrucciones para reemplazarla en `Text.md` § Tipografías.
- Textos: **Montserrat** (Google Fonts, ya integrada).

**Composición:** mucha presencia de fotografía deportiva, títulos grandes, bastante aire
entre elementos, animaciones sutiles.

---

## 7. Stack técnico

- **Next.js** (App Router) + **React** + **TypeScript**
- **Tailwind CSS v4** para estilos
- **next/font** para tipografías (Montserrat + Anton como sustituta)
- Sin librerías innecesarias: el carrusel y el modal están hechos a mano.
- Listo para desplegar en **Vercel** sobre el dominio clubcif.com.
