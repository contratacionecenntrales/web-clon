# Labs24k — Landing page

Sitio corporativo de **Labs24k** — innovación, crecimiento y tecnología. Consultoría en IA aplicada a empresa: estrategia, implementación técnica y cumplimiento legal (AI Act & RGPD).

Construido con **Next.js (App Router) + TypeScript + Tailwind CSS v4 + shadcn/ui**, exportado como **sitio 100% estático** (no requiere Node.js en el servidor).

## Stack

- **Next.js 16** (App Router, Turbopack, `output: "export"`)
- **TypeScript**
- **Tailwind CSS v4**
- **shadcn/ui** conventions (`components.json`, `lib/utils.ts` con `cn()`, componentes en `components/ui/`)
- **framer-motion**, **lucide-react**

## Estructura

```
├── app/
│   ├── layout.tsx        # Fuente Inter, metadata, tema oscuro por defecto
│   ├── page.tsx           # Landing principal (compone todas las secciones)
│   ├── globals.css         # Tokens de shadcn + paleta de marca Labs24k
│   ├── icon.png              # Favicon (generado a partir del logo vectorizado)
│   └── apple-icon.png          # Apple touch icon
├── components/
│   ├── ui/                 # Primitivas shadcn (faq-tabs)
│   ├── sections/            # Secciones de la landing (Hero, Services, Faq, Footer...)
│   └── SiteInteractions.tsx  # Client component: nav móvil, scroll reveal, canvas hero, formulario, etc.
├── public/
│   ├── labs24k-icon.svg      # Icono vectorizado de marca (usado en header/footer/hero/favicons)
│   └── og-image.png           # Imagen para Open Graph / redes sociales
├── lib/utils.ts             # Helper cn() de shadcn
└── components.json           # Config de shadcn/ui
```

## Marca

- Icono vectorizado a partir del logo oficial (`public/labs24k-icon.svg`); el wordmark "Labs24k" es texto real con degradado CSS.
- Paleta unificada: teal `#14b8be`, navy `#123a52`, teal-mid `#137988` (ámbar/rojo se mantienen como excepciones semánticas para alertas).
- Reserva de cita: widget de GoHighLevel embebido en `components/sections/Contact.tsx`.
- Formulario de contacto: genera un enlace `mailto:` a `info@labs24k.com` con los datos introducidos (no requiere backend).
- **Pendiente de contenido real**: la sección de "Casos de éxito" y "Liderado por" usan datos de marcador de posición (clientes genéricos, equipo sin nombre) — sustitúyelos por testimonios y biografías reales de Labs24k cuando estén disponibles. Verifica también el dominio en `metadataBase` (`app/layout.tsx`) y la URL de LinkedIn del footer.

## Ejecutar en local

```bash
npm install
npm run dev
```

Abre `http://localhost:3000`.

```bash
npm run build     # genera el sitio estático en out/
npm run preview   # sirve out/ localmente para verificar el build de producción
npm run lint       # eslint
```

## Desplegar en hosting compartido (Hostalia u otro)

El proyecto usa `output: "export"` en `next.config.ts`, así que `npm run build` genera una carpeta `out/` con HTML, CSS, JS e imágenes ya listos — **sin necesidad de Node.js en el servidor**. Sirve para cualquier hosting compartido con FTP (Hostalia, etc.):

1. `npm install && npm run build`
2. Sube **todo el contenido** de la carpeta `out/` (no la carpeta en sí, sino lo que hay dentro) por FTP a la carpeta pública del hosting (normalmente `public_html`, `htdocs` o `www`).
3. Verifica que `index.html` quede en la raíz de esa carpeta pública.

Si el dominio se sirve desde una subcarpeta (p. ej. `midominio.com/labs24k/`) en vez de la raíz, añade `basePath: "/labs24k"` en `next.config.ts` antes de compilar.

Para volver a publicar tras cambios: repite `npm run build` y vuelve a subir el contenido de `out/` (sobrescribiendo lo anterior).
