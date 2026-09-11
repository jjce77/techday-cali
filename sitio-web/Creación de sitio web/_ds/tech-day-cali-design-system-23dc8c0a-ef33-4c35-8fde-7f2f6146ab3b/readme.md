# Tech Day Cali — Design System

Identidad y kit de interfaz para **Tech Day Cali 2026**, el primer evento tecnológico de escala en Cali (Valle del Cauca, Colombia).

---

## 1. Contexto

Tech Day Cali nace de la unión de **8 comunidades tech** de la ciudad — AWS UG Valle del Cauca, Cloud Native Cali, GDG Cali, Parchatech, Pioneras Dev Cali, Python Cali, PyLadies Cali y Rails Girls Cali — que hasta ahora organizaban eventos fragmentados de máximo 50 personas. El objetivo es una cita anual unificada de referencia para el ecosistema del suroccidente colombiano.

| | |
|---|---|
| Fecha | 21 de noviembre de 2026 (un solo día, ~8:00–18:00) |
| Lugar | Cali, Valle del Cauca, Colombia |
| Asistentes | 250+ profesionales tech |
| Ejes | Cloud (AWS/GCP/Azure) · Kubernetes & DevOps · Software moderno · Innovación e IA/ML |
| Público | Devs full-stack/front/back, architects y DevOps, EMs y tech leads, perfiles en transición, HR tech |
| Contacto | techday@gmail.com |

### Productos cubiertos
Una sola superficie: el **sitio web del evento** (`ui_kits/website/`) — Inicio, `/charlas`, `/cali` y los tres formularios de `/inscripcion/{asistente,ponente,patrocinador}`. El backend es un proyecto Supabase existente con las tablas `speakers`, `attendees`, `sponsors` (nombres técnicos en inglés; todo lo visible, en español). El formulario de contacto no se guarda en Supabase: va por correo a techday@gmail.com.

### Fuentes recibidas
- **Afiches del evento** (`uploads/Captura03.PNG`, `uploads/Captura05.PNG`) → copiados a `assets/poster-techday-*.png`. **Ésta es la única fuente de marca real.**
- **Fotografías de la tangara multicolor** (`uploads/Captura.PNG`, `Captura02.PNG`, `Captura04.PNG`) → `assets/tanager-*.png`.
- **Referencias de estilo de terceros** (Creator Summit, NHN FORWARD, Digital Conference Hub, mente, FluentAI, BRICKS, etc.): material de inspiración de otras marcas. Se usaron sólo como referencia de *tono* (conferencia tech, tipografía grande, alto contraste); **ninguna marca, logo ni layout ajeno se reprodujo**.
- **No recibidos:** archivos de fuentes, logotipo vectorial de Tech Day Cali, logos de las 8 comunidades y de patrocinadores, set de iconos, y el documento `techday_2026_modelo_datos.md` (mencionado en el brief pero no adjunto). Ver *Caveats*.

> Nota de fechas: los afiches dicen “24–25 octubre 2026”. El brief manda: la edición vigente es **21 de noviembre de 2026, un solo día**. Los componentes y el UI kit usan esa fecha.

---

## 2. Content fundamentals

**Idioma:** español de Colombia, 100 % del contenido visible (labels, placeholders, botones, validaciones, mensajes). Sólo los nombres de tablas/campos de Supabase quedan en inglés.

**Persona:** hablamos de **tú**, nunca de usted. La organización habla en **nosotros** (“te escribimos”, “dejamos de organizarnos por separado”), nunca “yo”.

**Tono:** directo, cálido, orgullosamente caleño, sin solemnidad corporativa y sin hype de startup. Frases cortas. Un dato concreto vale más que un adjetivo.

**Casing:** títulos display en MAYÚSCULAS (como el afiche). Todo lo demás en *sentence case* — labels, botones (“Quiero asistir”), badges en mayúsculas mono sólo por estilo de componente. Nunca Title Case Inglés.

**Ejemplos de la voz:**
- Hero: *“El primer evento tecnológico de escala en Cali. Ocho comunidades, un solo día, 250+ personas que construyen software en el Valle.”*
- Sección acerca: *“Dejamos de organizarnos por separado.”*
- CTA: *“Quiero asistir” · “Quiero dar una charla” · “Reservar mi cupo”* (verbo en primera persona del asistente).
- Ayuda de formulario: *“Te enviamos la confirmación aquí.”*
- Éxito: *“¡Listo! Recibimos tu inscripción. Te escribimos al correo.”* — qué pasó + qué sigue, en dos frases.
- Error: *“Escribe un correo válido.”* — imperativo amable, nunca “Error: campo inválido”.
- Guiños locales permitidos y deseados: salsa, chontaduro, guayacanes, la sucursal del cielo, la tangara multicolor.

**Emoji:** no. Ni en UI ni en copy. Los acentos visuales los pone el color, no el emoji.

**Números y fechas:** “21 de noviembre de 2026”, “8:00 a 18:00”, “250+”, “30 min”. Horas en la agenda en formato 24 h monoespaciado (`09:45`).

---

## 3. Visual foundations

**Origen:** todo sale del afiche — tinta navy sobre un lavado iridiscente frío, y la **tangara multicolor** (*Tangara multicolor*), ave emblemática del Valle del Cauca, junto a la rama de guayacán amarillo.

**Color.** Navy `#0E2050` es la tinta y la superficie oscura. Los acentos son plumaje: turquesa `#14A5C4` (interactivo primario), amarillo guayacán `#F2B705` (energía, segundo CTA), verde hoja `#2F9A4E`, naranja `#F28C0F` y lila `#9B7EDC` (IA/ML). Neutros fríos, **nunca negro puro** (`--grey-900` es `#16202B`). Máximo dos fondos por página: `--surface-page` claro y `--surface-night` navy; el lavado `--wash-aurora` abre los heroes.

**Gradientes.** Sólo cuatro, todos declarados como tokens: `--wash-aurora` (hero claro, verde→azul→lila del afiche), `--wash-sky`, `--wash-plumage` (barra de 4px de acento, nunca como fondo grande) y `--wash-night`. Prohibido el degradado morado-azulado genérico de IA.

**Tipografía.** Display **Space Grotesk** bold, mayúsculas, tracking −0.025em, line-height 0.96 — es la voz del afiche. Cuerpo **Manrope** 16/1.62, medida máxima 58ch. Mono **JetBrains Mono** para eyebrows (12px, tracking 0.18em, mayúsculas), horas y badges. Acento **Instrument Serif** itálica, sólo para topónimos y máximo cuatro palabras (*Cali, Colombia*), como en el afiche.

**Espaciado y layout.** Escala base 4px (`--space-1..24`). Secciones con `--section-y` (64→128px fluido), gutters `--gutter` (20→64px), contenedor 1200px. Grids con `gap`, nunca márgenes sueltos. El header es el único elemento fijo (`position: sticky`, z 40); el aside de inscripción es sticky a 96px.

**Fondos e imagen.** Imágenes fotográficas sólo de la tangara y (a futuro) del evento: saturadas, verdes tropicales y azules, luz natural, sin grano ni duotono. Se recortan a `--radius-xl` con `--shadow-lg`. No hay patrones repetidos ni texturas; el afiche usa line-art de circuitos y manos, pero **ese line-art no está disponible como archivo**, así que no se reproduce.

**Bordes y radios.** Hairline `1px` `--border-subtle` en superficies claras, `rgba(255,255,255,.16)` en navy. Controles y badges son píldoras (`--radius-pill`); tarjetas `--radius-lg` (20px); campos de formulario `--radius-md` (12px); imágenes grandes `--radius-xl` (28px).

**Sombras.** Todas teñidas de navy, nunca negras: `--shadow-xs/sm/md/lg`. Las tarjetas en navy no llevan sombra (se separan por borde translúcido). `--shadow-glow-turquoise` está reservada al hover del CTA primario. Sombra interior sólo como hairline (`--shadow-inset-hairline`).

**Transparencia y blur.** Un único uso: el header (`--glass-fill` + `--blur-glass`, `backdrop-filter: saturate(140%) blur(14px)`). No hay glassmorphism en tarjetas ni modales.

**Animación.** Corta y funcional: 160 ms hover, 240 ms cambios de estado, 420–700 ms entradas. `--ease-standard` para interacción, `--ease-out` para revelados. Sin rebotes, sin parallax, sin animaciones en bucle salvo el contador. `prefers-reduced-motion` anula todas las duraciones.

**Estados.** *Hover:* el color se profundiza un paso (turquesa 500→600), la tarjeta sube 2px (`--lift-hover`) y gana `--shadow-lg`; los botones secundarios invierten a navy sólido. *Press:* `scale(.985)`, sin cambio de color. *Focus:* anillo `0 0 0 3px rgba(20,165,196,.35)` + borde turquesa — nunca se elimina el outline. *Disabled:* opacidad 0.42 y `not-allowed`, sin cambiar el color.

**Tarjetas.** Blancas, radio 20px, borde hairline, `--shadow-sm` en reposo. Opcionalmente barra superior de 4px con `--wash-plumage` (`accentBar`) — máximo una familia de tarjetas por sección con barra.

---

## 4. Iconography

**No se recibió ningún set de iconos, icon font, sprite ni SVG** con los materiales de marca, y el afiche no contiene iconografía funcional (sólo ilustración de line-art no disponible como archivo).

Decisiones vigentes:
- El sistema **no incluye componente Icon** y ningún componente exige un icono. `Button` acepta `iconLeft`/`iconRight` como `ReactNode` opcional, sin dependencia.
- Donde haría falta un glifo, se usa **tipografía o color**: la hora en mono, el track en badge de color, el caret del `Select` como carácter Unicode `▼` (único carácter usado como icono en todo el sistema).
- **Emoji: nunca.**
- Si un consumidor necesita iconos, se recomienda **Lucide** desde CDN (`https://unpkg.com/lucide-static`) — trazo 1.5–2px, esquinas redondeadas, coherente con el radio y el peso tipográfico de la marca. **Es una sustitución, no la iconografía oficial de la marca** (ver *Caveats*).
- Los logos de las 8 comunidades y de patrocinadores no existen como archivo: `CommunityStrip` y `SponsorTier` renderizan el **nombre en tipografía** en lugar de un placeholder gráfico.

---

## 5. Índice del proyecto

```
styles.css              punto de entrada (sólo @imports)
tokens/                 fonts · colors · typography · spacing · elevation · motion · base
assets/                 afiches del evento + fotos de la tangara multicolor
guidelines/             17 fichas de especímenes (Colors, Type, Spacing, Brand)
components/core/        Button · Badge · Card · SectionHeading · Stat · Wordmark
components/forms/       FormField · Input · Textarea · Select · Checkbox · RadioGroup · FormMessage
components/site/        Header · Footer · SpeakerCard · TalkCard · ScheduleRow · SponsorTier · CountdownTimer · CommunityStrip
ui_kits/website/        sitio completo click-through (index.html + Home/Charlas/Cali/Inscripcion)
templates/pagina-evento/ plantilla “Página de evento” lista para copiar en proyectos consumidores
SKILL.md                envoltorio para usar este sistema como Agent Skill
```

### Componentes
`Button`, `Badge`, `Card`, `SectionHeading`, `Stat`, `Wordmark`, `FormField`, `Input`, `Textarea`, `Select`, `Checkbox`, `RadioGroup`, `FormMessage`, `Header`, `Footer`, `SpeakerCard`, `TalkCard`, `ScheduleRow`, `SponsorTier`, `CountdownTimer`, `CommunityStrip`.

Cada uno trae `<Name>.jsx`, `<Name>.d.ts` (contrato de props) y `<Name>.prompt.md` (cuándo usarlo + ejemplo).

### Plantilla
`Página de evento` (`templates/pagina-evento/`) — landing de una sola página con hero, cifras, ejes temáticos, bloque navy de inscripciones, agenda y footer, compuesta con los componentes del sistema.

### Adiciones intencionales
No había librería de componentes de origen, así que el inventario se derivó del alcance del sitio descrito en el brief (inicio, charlas, Cali, tres inscripciones, contacto). Componentes específicos del dominio — `TalkCard`, `ScheduleRow`, `SponsorTier`, `CountdownTimer`, `CommunityStrip`, `SpeakerCard`, `Wordmark` — existen porque el sitio los necesita, no por completitud genérica. No se crearon Toast, Avatar, Tabs, Tooltip ni Dialog: ninguna pantalla del alcance los usa.

---

## 6. Caveats (pendientes con el cliente)

1. **Fuentes sustituidas.** No hay archivos tipográficos. El display del afiche es una grotesca geométrica en mayúsculas; se sustituyó por **Space Grotesk** (Google Fonts), con Manrope, JetBrains Mono e Instrument Serif de apoyo. Si existe una tipografía oficial, envíala y actualizo `tokens/fonts.css`.
2. **No hay logotipo.** El wordmark es tipográfico por decisión explícita: no se dibujó ninguna marca. Si existe un SVG del logo, reemplaza `Wordmark`.
3. **Iconografía sustituida** por Lucide (CDN) como recomendación, no como set oficial.
4. **Faltan logos** de las 8 comunidades y de patrocinadores.
5. **`techday_2026_modelo_datos.md` no llegó**: los formularios reflejan los campos que describe el brief, pero los nombres exactos de columnas deben verificarse contra ese documento antes de conectar Supabase.
6. **Ponentes y charlas del UI kit son ejemplos de estructura** (“Por confirmar”), no contenido real.
