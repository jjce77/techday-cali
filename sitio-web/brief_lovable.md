# Brief / Contexto para Lovable — Tech Day Cali 2026

Este documento va **antes** de `concepto.md` como contexto general del proyecto. `concepto.md` define la estructura y el copy del sitio; este brief explica qué es el evento y las reglas del juego para que Lovable no tenga que adivinar nada.

---

## Qué es el evento

Tech Day Cali es el **primer evento tecnológico de escala en Cali**, creado por 8 comunidades tech de la ciudad (AWS UG Valle del Cauca, Cloud Native Cali, GDG Cali, Parchatech, Pioneras Dev Cali, Python Cali, PyLadies Cali, Rails Girls Cali) que se unieron para compartir conocimiento, conectar talento e impulsar la innovación tecnológica de la región.

Hasta ahora los eventos tech en Cali eran fragmentados (máximo 50 personas cada uno) y las comunidades estaban aisladas entre sí. Tech Day Cali busca cambiar eso con un evento unificado de gran escala, y convertirse en una cita anual de referencia para el ecosistema.

## Detalles del evento

- **Fecha:** 21 de noviembre de 2026
- **Duración:** día completo (aprox. 8am–6pm)
- **Ubicación:** Cali, Valle del Cauca, Colombia
- **Asistentes esperados:** 250+ profesionales tech
- **Formato:** un solo día — **no** es un evento multi-día (el modelo de datos ya deja un campo `event_date` preparado para futuras ediciones de varios días, pero no aplica a esta edición)

## Público objetivo

Desarrolladores (full-stack, frontend, backend), architects y DevOps engineers, engineering managers y tech leads, profesionales en transición de carrera, y perfiles de HR/talent acquisition en tech.

## Temas clave del evento

Cloud (AWS, GCP, Azure), Kubernetes & DevOps, desarrollo de software moderno, e innovación / casos de éxito (incluye IA/ML aplicado).

---

## Alcance de esta primera versión del sitio

Construir **solo el sitio público**, las 6 páginas definidas en `concepto.md`:

1. `/` — Landing principal
2. `/inscripcion/asistente`
3. `/inscripcion/ponente`
4. `/inscripcion/patrocinador`
5. `/cali`
6. `/charlas`

**No construir todavía** el panel de administración (fase 2, mencionado al final de `concepto.md` con Dashboard, gestión de asistentes/ponentes/patrocinadores/charlas y exportación de registros). Esa es una fase futura, separada de este alcance — se las voy a pasar más adelante cuando el sitio público ya esté funcionando.

## Backend: usar el proyecto Supabase existente

El sitio se conecta a un proyecto de Supabase que **ya tiene las tablas creadas** (`speakers`, `attendees`, `sponsors`) según el documento `techday_2026_modelo_datos.md`, que se adjunta junto con este brief.

Reglas importantes:

- **No crear un esquema propio.** Usar exactamente los nombres de tabla y de columna que aparecen en `techday_2026_modelo_datos.md`.
- La tabla se llama `speakers` en Supabase, pero la ruta del formulario en el sitio es `/inscripcion/ponente` (en español, como el resto de las rutas).
- Row Level Security (RLS) ya está habilitado en las tablas. Los formularios deben poder hacer `insert` público; no deben requerir autenticación para enviarse.
- El formulario de contacto **no se guarda en Supabase** — se envía directamente por correo a `techday@gmail.com` (ver sección 5 de `techday_2026_modelo_datos.md`).

## Idioma

Todo el contenido visible del sitio (labels, placeholders, botones, validaciones, mensajes) va en **español**. Los nombres técnicos de tablas y campos en Supabase se mantienen en inglés — eso es solo a nivel de base de datos, no afecta lo que ve el usuario.

## Identidad visual

Todavía está en desarrollo (logo, paleta de colores exacta, tipografía). Por ahora, usar la dirección general descrita en `concepto.md` (tipografía sans-serif moderna, mucho espacio negativo, gradientes sutiles, elementos gráficos de redes/conexiones, cards con bordes suaves) con una paleta placeholder razonable. Se van a reemplazar los estilos y asets reales más adelante — construir de forma que sea fácil actualizar colores/logo/fotos después sin rehacer la estructura.

## Datos que hoy son placeholder

Las cifras del Hero (`12 conferencistas / 250 participantes / 8 patrocinadores`) y los indicadores mencionados en el documento son placeholders, no datos reales todavía. No hay que anclarse a esos números como definitivos — se van a actualizar antes del lanzamiento.
