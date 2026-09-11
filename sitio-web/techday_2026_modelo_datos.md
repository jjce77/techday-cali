# TechDay Cali 2026 — Modelo de Datos

## Formulario → Tabla en Supabase

| Formulario | Tabla |
|---|---|
| `/inscripcion/asistente` | `attendees` |
| `/inscripcion/ponente` | `speakers` |
| `/inscripcion/patrocinador` | `sponsors` |

La tabla se llama `speakers` (nombre técnico en inglés), pero la ruta del formulario en el sitio es `/inscripcion/ponente`, igual que el resto de las rutas del sitio, que están en español.

---

## 1. `speakers`

Una fila representa la postulación de un ponente **y** su charla: esta tabla guarda tanto los datos de la persona (nombre, contacto, bio) como los datos de la charla que propone (título, descripción, categoría). No existe una tabla `talks` separada — todo el formulario `/inscripcion/ponente` se guarda aquí.

| Campo | Tipo | Restricciones |
|---|---|---|
| `id` | UUID | PK |
| `name` | TEXT | NOT NULL |
| `lastname` | TEXT | NOT NULL |
| `email` | TEXT | NOT NULL, UNIQUE |
| `phone` | TEXT | |
| `company` | TEXT | |
| `position` | TEXT | |
| `linkedin` | TEXT | |
| `bio` | TEXT | |
| `photo_url` | TEXT | |
| `title` | TEXT | NOT NULL |
| `description` | TEXT | NOT NULL |
| `category` | TEXT | NOT NULL |
| `co_speakers` | JSONB | NOT NULL, default `[]` |
| `event_date` | DATE | |
| `track` | TEXT | |
| `start_time` | TIME | |
| `duration_minutes` | INTEGER | |
| `status` | TEXT | NOT NULL |
| `created_at` | TIMESTAMPTZ | NOT NULL |
| `updated_at` | TIMESTAMPTZ | NOT NULL |

### `co_speakers`

```json
[
  {
    "name": "Ana",
    "lastname": "Gómez",
    "email": "ana@empresa.com",
    "company": "Empresa XYZ"
  }
]
```

### `category`

- `cloud`
- `devops`
- `desarrollo`
- `ia`
- `arquitectura`
- `otros`

### `status`

- `pending`
- `approved`
- `rejected`

La restricción de que un ponente no se postule más de una vez la da el `UNIQUE` sobre `email`.

### `event_date`, `track`, `start_time`, `duration_minutes`

No son obligatorios porque se llenan solo cuando la charla es `approved`. Desde la administración, junto con `status`, permiten controlar qué charlas se muestran en `/charlas` y en qué orden: se listan las charlas `approved` ordenadas por `event_date` y `start_time`, agrupadas o filtradas por `track` si aplica.

`event_date` no es necesario para Tech Day Cali 2026, que es de un solo día, pero queda listo para eventos futuros de varios días — permite filtrar/agrupar la agenda de `/charlas` por día.

---

## 2. `attendees`

| Campo | Tipo | Restricciones |
|---|---|---|
| `id` | UUID | PK |
| `name` | TEXT | NOT NULL |
| `lastname` | TEXT | NOT NULL |
| `document_number` | TEXT | NOT NULL |
| `email` | TEXT | NOT NULL, UNIQUE |
| `phone` | TEXT | |
| `company` | TEXT | |
| `position` | TEXT | |
| `linkedin` | TEXT | |
| `city` | TEXT | |
| `status` | TEXT | NOT NULL |
| `created_at` | TIMESTAMPTZ | NOT NULL |
| `updated_at` | TIMESTAMPTZ | NOT NULL |

### `status`

- `registered`
- `cancelled`
- `attended`

La restricción de registro duplicado la da el `UNIQUE` sobre `email`.

---

## 3. `sponsors`

| Campo | Tipo | Restricciones |
|---|---|---|
| `id` | UUID | PK |
| `company_name` | TEXT | NOT NULL |
| `nit` | TEXT | NOT NULL |
| `name` | TEXT | NOT NULL |
| `lastname` | TEXT | NOT NULL |
| `email` | TEXT | NOT NULL, UNIQUE |
| `phone` | TEXT | |
| `website` | TEXT | |
| `linkedin` | TEXT | |
| `sponsorship_type` | TEXT | NOT NULL, default `bronze` |
| `message` | TEXT | |
| `status` | TEXT | NOT NULL |
| `created_at` | TIMESTAMPTZ | NOT NULL |
| `updated_at` | TIMESTAMPTZ | NOT NULL |

### `sponsorship_type`

- `bronze` (default)
- `silver`
- `gold`
- `platinum`

Los beneficios de cada tier todavía no están definidos; por ahora `sponsorship_type` solo guarda el nombre del tier y `bronze` se usa como valor por defecto hasta que el patrocinador elija o se confirme el paquete.

### `status`

- `pending`
- `contacted`
- `approved`
- `rejected`

La restricción de registro duplicado la da el `UNIQUE` sobre `email`.

---

## 4. SQL para Supabase

```sql
create table public.speakers (
  id uuid primary key default gen_random_uuid(),

  name text not null,
  lastname text not null,
  email text not null unique,
  phone text,
  company text,
  position text,
  linkedin text,
  bio text,
  photo_url text,

  title text not null,
  description text not null,
  category text not null
    check (
      category in (
        'cloud',
        'devops',
        'desarrollo',
        'ia',
        'arquitectura',
        'otros'
      )
    ),

  co_speakers jsonb not null default '[]'::jsonb,

  event_date date,
  track text,
  start_time time,
  duration_minutes integer,

  status text not null default 'pending'
    check (status in ('pending', 'approved', 'rejected')),

  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);


create table public.attendees (
  id uuid primary key default gen_random_uuid(),

  name text not null,
  lastname text not null,
  document_number text not null,
  email text not null unique,
  phone text,
  company text,
  position text,
  linkedin text,
  city text,

  status text not null default 'registered'
    check (status in ('registered', 'cancelled', 'attended')),

  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);


create table public.sponsors (
  id uuid primary key default gen_random_uuid(),

  company_name text not null,
  nit text not null,

  name text not null,
  lastname text not null,
  email text not null unique,
  phone text,
  website text,
  linkedin text,

  sponsorship_type text not null default 'bronze'
    check (
      sponsorship_type in (
        'bronze',
        'silver',
        'gold',
        'platinum'
      )
    ),

  message text,

  status text not null default 'pending'
    check (
      status in (
        'pending',
        'contacted',
        'approved',
        'rejected'
      )
    ),

  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
```

---

## 5. Formulario de contacto

El formulario de contacto no se almacena en Supabase.

Los datos enviados se procesan y se envían directamente al correo:

`techday@gmail.com`

Flujo:

```text
Usuario
  ↓
Formulario de contacto
  ↓
Backend / Edge Function
  ↓
techday@gmail.com
```

---

## 6. Idioma

Todos los formularios, labels, placeholders, validaciones y mensajes de la aplicación deben estar en español.

Los nombres técnicos de tablas y campos se mantienen en inglés.
