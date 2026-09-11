
## 🧭 Estructura 

```text
TECHDAY 2026
│
├── 🏠 Inicio
│   ├── Hero
│   ├── Acerca del evento
│   ├── Inscripciones
│   │   ├── Asistente    ---> /inscripcion/asistente
│   │   ├── Ponente      ---> /inscripcion/ponente
│   │   └── Patrocinador ---> /inscripcion/patrocinador
│   ├── Cali ---> /cali
│   ├── Charlas ---> /charlas 
│   ├── Patrocinadores
│   ├── Contacto
│   └── Footer
│
├── 📝 Inscripción (page con mismo Design System y layout)
│   ├── /inscripcion/asistente
│   ├── /inscripcion/ponente
│   └── /inscripcion/patrocinador
│
├── 🌴 Cali
│
└── 🎤 Charlas
```

Eso nos da **6 páginas principales**:

| Página                      | Propósito                                |
| --------------------------- | ---------------------------------------- |
| `/`                         | Landing principal                        |
| `/inscripcion/asistente`    | Registro de asistentes                   |
| `/inscripcion/ponente`      | Postulación de ponentes                  |
| `/inscripcion/patrocinador` | Registro de patrocinadores               |
| `/cali`                     | Información turística & cultural de Cali |
| `/charlas`                  | Grilla y detalle de charlas              |


---

# 🏠 1. Landing Page

Aquí haría algo importante: **no convertiría el navbar en un menú gigantesco**.

Propuesta:

```text
┌─────────────────────────────────────────────────────────┐
│ TECHDAY 2026   Inicio  Evento  Charlas  Cali  Contacto │
│                                     [ INSCRÍBETE ]      │
└─────────────────────────────────────────────────────────┘
```

**Sticky + transparente sobre el Hero**, y al hacer scroll pasa a tener fondo sólido.

## 1. Hero



> ¡BIENVENIDOS!
> **TECH DAY CALI 2026**  
> Conectando ideas, tecnología y talento.
> Un espacio para compartir conocimiento, descubrir nuevas tecnologías y conectar con la comunidad tecnológica.

**📅 Fecha · 📍 Cali, Colombia · 🎤 X ponentes · 👥 X asistentes**

```text
		12                    250                       8
    CONFERENCISTAS        PARTICIPANTES         PATROCINADORES
  
```

---

## 🚀 2. Acerca del evento (sección)

Una sección relativamente corta.

**Título:** Acerca del evento

**Headline:** Un punto de encuentro para la comunidad tecnológica

Tech Day Cali es el primer evento tecnológico de escala en la ciudad, creado por 8 comunidades tech que se unen para compartir conocimiento, aprender y descubrir las tecnologías que están transformando la industria.
 - AWS UG Valle del Cauca 
 - Cloud Native Cali      
 - GDG Cali               
 - Parchatech             
 - Pioneras Dev Cali      
 - PyLadies Cali    
 - Python Cali           
 - Rails Girls Cali      

Es un espacio para conectar con otros profesionales, crear comunidad e impulsar el talento tecnológico de la región, poniendo a Cali en el mapa tech de Colombia.



---

## 🎟️ 3. Inscripciones  (sección)

3 CARDS HORIZONTALES

```text
¿CÓMO QUIERES PARTICIPAR?

┌────────────┐         ┌────────────┐              ┌──────────────┐
│ 👤         │         │ 🎤         │              │ 🤝          │
│ Asistente  │         │ Ponente     │              │ Patrocinador │
└────────────┘         └────────────┘              └──────────────┘
/inscripcion/asistente  /inscripcion/ponente    /inscripcion/patrocinador
```

 **_Páginas de Inscripción con el mismo Design System y layout_**


### 👤 ASISTENTE (Card 1)

> Participa en las charlas, conoce profesionales y conecta con la comunidad.

**[ INSCRIBIRME ]**

---

### 🎤 Ponente (Card 2)

> Comparte tus conocimientos, experiencias y proyectos con nuestra comunidad.

**[ POSTULARME ]**

---

### 🤝 PATROCINADOR (Card 3)

> Conecta tu marca con profesionales, desarrolladores y entusiastas de la tecnología.

**[ QUIERO PATROCINAR ]**

Esto visualmente puede ser uno de los bloques más importantes de la landing.

---

## 🌴 4. Cali  (sección)

Aquí sí separaría **teaser en la landing + página completa**.

En la landing:

>  Cali te espera

Un texto corto:

> Más que ser conocida como la Capital de la Salsa y la Sucursal del Cielo, tras el terremoto del 10 de agosto la ciudad mostró su verdadera esencia y se ganó un nuevo título:
>  **LA CAPITAL DE LA SOLIDARIDAD!!!**
   

Unas fotos en carrusel sobre Cali.

**[ DESCUBRE CALI → ]**

Y lleva a:

`/cali`

## 📢 5. Charlas
Cada charla en Tech Day Cali es una oportunidad de aprender de quienes están construyendo el futuro de la tecnología, hoy. Ponentes que enfrentan los mismos retos que tú comparten sus aciertos, sus errores y las lecciones que solo da la experiencia.

Ven a inspirarte, a hacer las preguntas que no sabías que necesitabas hacer, y a llevarte ideas que puedas aplicar desde el lunes.

Y lleva a:

`/charlas`
## 🤝 6. Patrocinadores  (sección)

En la landing:

>  Ellos hacen posible Tech Day Cali 2026

Logos de patrocinadores:

```text
[ LOGO ]   [ LOGO ]   [ LOGO ]

[ LOGO ]   [ LOGO ]   [ LOGO ]
```

Y abajo:

> ¿Quieres que tu empresa sea parte de Tech Day Cali 2026?

**[ CONOCE LAS OPCIONES DE PATROCINIO ]**

Que lleva al formulario de patrocinador.

---

## 📩 7. Contacto  (sección)
email a  techday@gmail.com · Cali, Colombia


```text
¿Tienes alguna pregunta?
Nombre *
Correo *
Asunto *
Mensaje *

[ ENVIAR MENSAJE ]
```

---

## 🦶 8. Footer  (sección)


```text
──────────────────────────────────────────────────

TECHDAY 2026

Tecnología · Comunidad · Conocimiento

Inicio   Evento   Charlas   Cali   Contacto


© 2026 Tech Day Cali
──────────────────────────────────────────────────
```




---

# 👤 Página `/inscripcion/asistente`

Formulario simple para registrar asistentes al evento.

```text
INSCRIPCIÓN — ASISTENTE
────────────────────────────────────

Nombre *
Apellido *
Número de identificación *
Correo *
Teléfono
Empresa
Cargo
LinkedIn
Ciudad

[ INSCRIBIRME ]
```

---

# 🎤 Página `/inscripcion/ponente`

Formulario de postulación para Ponente, incluye los datos de la charla propuesta.

```text
INSCRIPCIÓN — PONENTE
────────────────────────────────────

Datos del ponente
Nombre *
Apellido *
Correo *
Teléfono
Empresa
Cargo
LinkedIn
Biografía *
Foto (URL o carga de archivo)

Datos de la charla
Título de la charla *
Descripción *
Categoría (Cloud / DevOps / Desarrollo / IA / Arquitectura / Otros) *

Co-ponente (opcional)
[ + Agregar co-ponente ]
  Nombre, Apellido, Correo, Empresa

[ POSTULARME ]
```

---

# 🤝 Página `/inscripcion/patrocinador`

Formulario de registro para empresas interesadas en patrocinar el evento.

```text
INSCRIPCIÓN — PATROCINADOR
────────────────────────────────────

Nombre de la empresa *
NIT *
Nombre del contacto *
Apellido del contacto *
Correo *
Teléfono
Sitio web
LinkedIn
Tipo de patrocinio (Bronze / Silver / Gold / Platinum) * — Bronze por defecto
Mensaje

[ QUIERO PATROCINAR ]
```

---

# 🌆 Página `/cali`

Esta página puede ser mucho más editorial.

Por ejemplo:

```text
Destino Excepcional

Cali te espera con su brisa y calidez
──────────────────────────

[        FOTO HERO        ]

Conocida como la Capital Mundial de la Salsa y la Sucursal del Cielo, Santiago de Cali brinda el marco perfecto para un evento tecnológico inspirador: clima tropical generoso, gastronomía diversa, exuberancia andina y una comunidad con vocación hospitalaria única.



Dimensiones del Paraíso

[Foto] Capital Mundial de la Salsa
El repique de timbales late en cada esquina. Desde las academias de salsa caleña de talla internacional hasta las callejuelas empedradas de San Antonio con sus fachadas coloniales, artesanos locales, tertulias y cuenteros en la colina al caer la tarde.

[Foto] Naturaleza y Farallones
Cali es la capital de las aves de Colombia. A minutos del núcleo urbano, las aguas cristalinas del río Pance y los senderos nublados del Parque Nacional Natural Farallones albergan la emblemática Tángara Multicolor.

[Foto] Sabores del Pacífico y los Andes
La cocina caleña mezcla la explosión de sabores del Pacífico —pescado fresco, coco y plátano— con la sazón andina de la mazamorra, el sancocho y el infaltable pandebono. Un recorrido gastronómico que se disfruta en mercados, fondas y restaurantes de autor.

[Foto] Lugares que puedes visitar
- Bulevar del Río y La Ermita.
- Barrio San Antonio.
- Granada.
- Parque del Perro y sus alrededores.
- Ciudad Jardín.
- Calle del Sabor.
- Bares y discotecas.


---
Guía del Viajero
Clima & Vestimenta
- Cali disfruta de un clima tropical cálido durante el día (26°C a 31°C). Hacia las 4:30 PM entra la famosa brisa caleña que refresca agradablemente el ambiente a 22°C.
- Calzado cómodo para caminatas históricas.

Llegada & Movilidad
El Aeropuerto Internacional Alfonso Bonilla Aragón (CLO) está situado en Palmira, a 30-40 minutos del norte y oeste de Cali por autopista directa.
- Taxis oficiales autorizados en la terminal de llegadas.
- Apps de movilidad (Uber, Didi, Cabify) operan fluidamente.
- Servicio expreso de vanes hacia la Terminal de Transporte.

Zonas de Hospedaje
Sectores recomendados con excelente oferta de hoteles boutique, cadenas internacionales, cafés y seguridad peatonal:
- Granada & Versalles (Norte).
- El Peñón & San Antonio (Centro- Occidente).
- Ciudad Jardín (Sur).

```

---

# 🎙️ Página `/charlas`

```text
CHARLAS
────────────────────────────────────

Todos     Desarrollo     IA     Cloud
┌──────────┬──────────────────────────────────────┬─────────────────┬──────────────┐
│🕛HORA   │📢 CHARLA                            │👤 PONENTE       │💼 EMPRESA   │
├──────────┼──────────────────────────────────────┼─────────────────┼──────────────┤
│ 10:00 AM │ El futuro de la Inteligencia...      │ Juan Pérez      │ Empresa      │
├──────────┼──────────────────────────────────────┼─────────────────┼──────────────┤
│ 11:00 AM │ Construyendo aplicaciones modernas   │ María Gómez     │ Empresa      │
├──────────┼──────────────────────────────────────┼─────────────────┼──────────────┤
│ 12:00 PM │ IA aplicada al desarrollo de...      │ Carlos López    │ Empresa      │
├──────────┼──────────────────────────────────────┼─────────────────┼──────────────┤
│ 01:00 PM │ Arquitecturas Cloud escalables       │ Ana Martínez    │ Empresa      │
└──────────┴──────────────────────────────────────┴─────────────────┴──────────────┘

```

---

# 🧭 Navbar


### Desktop

```text
TECHDAY 2026

Inicio   Evento   Charlas   Cali   Contacto [ INSCRÍBETE ]
```

Y el botón **INSCRÍBETE** lleva a la sección  Inscripciones

```text
¿CÓMO QUIERES PARTICIPAR?

┌────────────┐ ┌────────────┐ ┌──────────────┐
│ 👤         │ │ 🎤         │ │ 🤝           │
│ Asistente  │ │ Ponente    │ │ Patrocinador  │
└────────────┘ └────────────┘ └──────────────┘
```


---

# 📱 Página responsive

Desde el principio lo diseñaría **mobile-first**.

En móvil:

```text
┌─────────────────────────┐
│ TECHDAY 2026       ☰    │
└─────────────────────────┘
```

Y el menú:

```text
Inicio
Evento
Charlas
Cali
Contacto

──────────────

[ INSCRÍBETE ]
```

Las tres opciones de inscripción deberían convertirse en cards verticales.

---

# 🎨 Identidad visual

Para un evento tecnológico en Cali evitaría el típico diseño:

> fondo negro + neón verde + código Matrix

😅

Podemos hacer algo mucho más moderno:

**Tech + Cali + comunidad**

Por ejemplo:

- Tipografía sans-serif moderna.
    
- Mucho espacio negativo.
    
- Gradientes sutiles.
    
- Elementos gráficos inspirados en redes/conexiones.
    
- Fotografías reales de Cali.
    
- Animaciones pequeñas.
    
- Cards con bordes suaves.
    
- Diseño profesional pero energético.
    

La identidad podría jugar con elementos visuales relacionados con **conexiones, nodos, circuitos y ondas**, combinados con imágenes de Cali.

---

# 🏗️ Arquitectura final

```text
                     TECHDAY 2026
                           │
              ┌────────────┴─────────────────────┐
              │                                  │
          SITIO PÚBLICO                       BACKEND
              │                                  │
       ┌──────┴───────┐                          │
       │              │                          │
    LANDING        PÁGINAS                       │
                      │                          │
               ┌──────┼──────┐                   │
               │      │      │                   │
             Cali  Charlas Inscripciones         │
                                 │               │
                            ┌────┴───────┐       │
                            │    │       │       │
                         Asist. Ponente  Pat.    │
                            │    │       │       │
                            │    │       │       │
                            ▼    ▼       ▼       │
                            BASE DE DATOS ───────┘
```

# Administración 

```text
ADMIN
│
├── Dashboard
├── Asistentes
├── Ponente
├── Patrocinadores
└── Charlas
```

Esto permite que TechDay sea algo más que una página: **un pequeño sistema de gestión del evento**.

cada gestion debe permitir Exportar registros