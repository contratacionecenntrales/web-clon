# Labs24k — Landing page

Sitio corporativo de **Labs24k** — innovación, crecimiento y tecnología. Consultoría en IA aplicada a empresa: estrategia, implementación técnica y cumplimiento legal (AI Act & RGPD).

Construido con **Next.js (App Router) + TypeScript + Tailwind CSS v4 + shadcn/ui**, exportado como **sitio 100% estático** (no requiere Node.js en el servidor). Disponible en **6 idiomas**: español, inglés, francés, alemán, catalán y árabe (con soporte RTL).

## Stack

- **Next.js 16** (App Router, Turbopack, `output: "export"`)
- **TypeScript**
- **Tailwind CSS v4**
- **shadcn/ui** conventions (`components.json`, `lib/utils.ts` con `cn()`, componentes en `components/ui/`)
- **framer-motion**, **lucide-react**

## Estructura

```
├── app/
│   ├── (es)/                  # Rutas en español (idioma por defecto, sin prefijo /es)
│   │   ├── layout.tsx           # <html lang="es">, fuente Inter, metadata
│   │   ├── page.tsx              # Home
│   │   └── servicios/[slug]/page.tsx
│   ├── [locale]/               # Rutas para en/fr/de/ca/ar (prefijo /en, /fr...)
│   │   ├── layout.tsx           # <html lang dir> dinámico según idioma
│   │   ├── page.tsx
│   │   └── servicios/[slug]/page.tsx
│   ├── globals.css             # Tokens de shadcn + paleta de marca + overrides RTL
│   ├── icon.png                  # Favicon (generado a partir del logo vectorizado)
│   └── apple-icon.png              # Apple touch icon
├── i18n/
│   ├── config.ts                # Lista de locales, metadata (dir, nombre) y helpers de rutas
│   ├── dictionaries/es.ts        # Diccionario canónico (fuente del tipo Dictionary)
│   ├── dictionaries/{en,fr,de,ca,ar}.ts  # Traducciones — mismo shape que es.ts
│   ├── get-dictionary.ts         # Carga perezosa del diccionario según locale
│   └── get-services.ts           # Combina data/services.ts (metadata) con el contenido traducido
├── data/services.ts             # Metadata de los 8 servicios independiente del idioma (slug, color, icono)
├── components/
│   ├── HomeContent.tsx           # Composición de secciones de la home (usada por ambos árboles de rutas)
│   ├── ServiceDetailContent.tsx  # Plantilla de página de servicio (idem)
│   ├── LanguageSwitcher.tsx      # Desplegable de idioma (footer)
│   ├── ui/                       # Primitivas shadcn (faq-tabs)
│   ├── sections/                 # Secciones de la landing (Hero, Services, Faq, Footer...) — reciben el diccionario como prop
│   └── SiteInteractions.tsx      # Client component: nav móvil, scroll reveal, canvas hero, formulario, etc.
├── public/
│   ├── labs24k-icon.svg      # Icono vectorizado de marca (usado en header/footer/hero/favicons)
│   └── og-image.png           # Imagen para Open Graph / redes sociales
├── lib/utils.ts             # Helper cn() de shadcn
└── components.json           # Config de shadcn/ui
```

## Idiomas

- **Español** vive en la raíz (`/`, `/servicios/...`) sin prefijo, para no romper enlaces ni SEO existentes.
- **Inglés, francés, alemán, catalán y árabe** viven bajo `/en`, `/fr`, `/de`, `/ca`, `/ar` respectivamente (mismo slug de servicio en todos los idiomas, p. ej. `/en/servicios/ai-audit`).
- El **árabe** usa `dir="rtl"` en `<html>`; el layout se invierte automáticamente vía flexbox/grid, con overrides puntuales en `globals.css` (bloque `[dir="rtl"]`) para iconos direccionales, posiciones absolutas y viñetas.
- Para añadir contenido nuevo: añade la clave en `i18n/dictionaries/es.ts` primero (es la fuente del tipo `Dictionary`), luego replica la clave en el resto de diccionarios — TypeScript avisará si falta alguna.
- Para añadir un idioma nuevo: añade su código a `locales` en `i18n/config.ts`, crea `i18n/dictionaries/<code>.ts` (cópialo de `en.ts` y traduce) y regístralo en `get-dictionary.ts`.

## Marca

- Icono vectorizado a partir del logo oficial (`public/labs24k-icon.svg`); el wordmark "Labs24k" es texto real con degradado CSS.
- Paleta unificada: teal `#14b8be`, navy `#123a52`, teal-mid `#137988` (ámbar/rojo se mantienen como excepciones semánticas para alertas).
- Reserva de cita: widget de GoHighLevel embebido en `components/sections/Contact.tsx`.
- Formulario de contacto: genera un enlace `mailto:` a `info@labs24k.com` con los datos introducidos (no requiere backend), traducido al idioma activo.
- **Pendiente de contenido real**: la sección de "Casos de éxito" y "Liderado por" usan datos de marcador de posición (clientes genéricos, equipo sin nombre) — sustitúyelos por testimonios y biografías reales de Labs24k cuando estén disponibles, en los 6 idiomas. Verifica también el dominio en `metadataBase` (`app/(es)/layout.tsx` y `app/[locale]/layout.tsx`) y la URL de LinkedIn del footer.

## Ejecutar en local

```bash
npm install
npm run dev
```

Abre `http://localhost:3000` (español) o `http://localhost:3000/en` (inglés), etc.

```bash
npm run build     # genera el sitio estático en out/
npm run preview   # sirve out/ localmente para verificar el build de producción
npm run lint       # eslint
```

## Desplegar en hosting compartido (Hostalia u otro)

El proyecto usa `output: "export"` en `next.config.ts`, así que `npm run build` genera una carpeta `out/` con HTML, CSS, JS e imágenes ya listos — **sin necesidad de Node.js en el servidor**. Sirve para cualquier hosting compartido con FTP (Hostalia, etc.):

1. `npm install && npm run build`
2. Sube **todo el contenido** de la carpeta `out/` (no la carpeta en sí, sino lo que hay dentro) por FTP a la carpeta pública del hosting (normalmente `public_html`, `htdocs` o `www`).
3. Verifica que `index.html` quede en la raíz de esa carpeta pública. Las carpetas `en/`, `fr/`, `de/`, `ca/` y `ar/` van junto a él, en la misma raíz.

Si el dominio se sirve desde una subcarpeta (p. ej. `midominio.com/labs24k/`) en vez de la raíz, añade `basePath: "/labs24k"` en `next.config.ts` antes de compilar.

Para volver a publicar tras cambios: repite `npm run build` y vuelve a subir el contenido de `out/` (sobrescribiendo lo anterior).
