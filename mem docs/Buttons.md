# Buttons.md — Enlaces, botones y redirecciones

> Todos los enlaces externos y navegaciones del sitio, con su estado actual.
> **Centralizados en `data/site.ts`** para reemplazarlos en un solo lugar.
> 🔗 Los marcados como **PLACEHOLDER** deben reemplazarse por los enlaces reales.

---

## Enlaces externos centralizados — `data/site.ts`

| Clave | Uso | Valor actual | Estado |
|-------|-----|--------------|--------|
| `perfilUrl` | Botón "Ingresar a mi perfil" (header, footer, accesos rápidos) | `https://ejemplo-sistema-interno.clubcif.com` | **PLACEHOLDER** — poner URL del sistema interno |
| `whatsappNumber` | Número para todos los links de WhatsApp | `549XXXXXXXXXX` | **PLACEHOLDER** — poner número real (formato internacional sin `+` ni espacios) |
| `pedidoFormUrl` | Botón "Hacer pedido" (indumentaria) | `https://ejemplo-formulario-pedido.com` | **PLACEHOLDER** — poner URL del formulario de compra |
| `sponsorFormUrl` | Botón "Quiero acompañar al club" | usa WhatsApp por defecto | Ajustable |
| `email` | Correo del footer | `contacto@clubcif.com` | **PLACEHOLDER** |
| `instagramUrl` | Ícono Instagram | `https://instagram.com/` | **PLACEHOLDER** |
| `facebookUrl` | Ícono Facebook | `https://facebook.com/` | **PLACEHOLDER** |
| `address` | Dirección de la sede | `Maestro Espinosa 3493, Cipolletti` | ✅ Confirmada |
| `mapsUrl` | "Ver ubicación" de la sede principal | Google Maps con la dirección | ✅ Generado desde la dirección |

> **WhatsApp:** los botones usan `https://wa.me/<whatsappNumber>?text=<mensaje>`.
> El mensaje precargado se arma automáticamente según el contexto (ej: nombre de la actividad).
> Función helper: `waLink()` en `data/site.ts`.

---

## Navegación interna (anclas dentro de la landing)

| Botón / enlace | Destino |
|----------------|---------|
| Nav "Actividades" | `#actividades` |
| Nav "Espacios" | `#espacios` |
| Nav "Eventos" | `#eventos` |
| Nav "Indumentaria" | `#indumentaria` |
| Nav "Contacto" | `#contacto` |
| Hero slide 1 → "Conocé nuestras actividades" | `#actividades` |
| Hero slide 2 → "Entrená con nosotros" | `#actividades` |
| Hero slide 3 → "Conocé nuestros eventos" | `#eventos` |
| Acceso rápido "Ver actividades" | `#actividades` |
| CTA final "Ver actividades" | `#actividades` |

---

## Navegación a páginas de eventos

| Botón | Destino |
|-------|---------|
| Card CIF15 → "Conocé el evento" | `/eventos/cif15` |
| Card FPG 2025 → "Conocé el evento" | `/eventos/fpg-2025` |
| Card FPG 2026 → "Conocé el evento" | `/eventos/fpg-2026` |
| Header/Footer logo | `/` (inicio) |

---

## Botones que abren enlaces externos

| Botón | Acción | Config en |
|-------|--------|-----------|
| "Ingresar a mi perfil" | Abre `perfilUrl` en pestaña nueva | `data/site.ts` |
| "Consultar por WhatsApp" (varios) | Abre `wa.me/...` | `data/site.ts` → `waLink()` |
| Actividad → modal → "Consultar por WhatsApp" | `wa.me` con nombre de la actividad | `data/site.ts` |
| "Ver ubicación" (espacios) | Abre Google Maps | `data/espacios.ts` (campo `mapsUrl`) |
| "Hacer pedido" (indumentaria) | Abre `pedidoFormUrl` | `data/site.ts` |
| "Quiero acompañar al club" | Abre `sponsorFormUrl` / WhatsApp | `data/site.ts` |
| Footer: Instagram / Facebook / Email | Abren red o cliente de correo | `data/site.ts` |
| Footer: "Sistema interno" | Abre `perfilUrl` | `data/site.ts` |
| Footer: "Políticas de privacidad" | `/politicas-de-privacidad` (pendiente de crear) | — |

---

## Cómo reemplazar un enlace (resumen)

1. Abrí **`data/site.ts`**.
2. Cambiá el valor de la clave correspondiente (ver tabla superior).
3. Los enlaces por-item (ubicación de cada espacio) se editan en su archivo de datos
   (`data/espacios.ts`).
4. Guardá: el cambio se refleja en toda la web automáticamente.
