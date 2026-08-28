# Labs24k — Landing page

Sitio corporativo de **Labs24k** — innovación, crecimiento y tecnología. Consultoría en IA aplicada a empresa: estrategia, implementación técnica y cumplimiento legal (AI Act & RGPD).

Construido con **Next.js (App Router) + TypeScript + Tailwind CSS v4 + shadcn/ui**.

## Stack

- **Next.js 16** (App Router, Turbopack)
- **TypeScript**
- **Tailwind CSS v4**
- **shadcn/ui** conventions (`components.json`, `lib/utils.ts` con `cn()`, componentes en `components/ui/`)
- **framer-motion**, **lucide-react**, **@splinetool/react-spline**

## Estructura

```
├── app/
│   ├── layout.tsx        # Fuente Inter, metadata, tema oscuro por defecto
│   ├── page.tsx           # Landing principal (compone todas las secciones)
│   ├── globals.css         # Tokens de shadcn + paleta de marca Labs24k
│   ├── icon.png              # Favicon (generado a partir del logo oficial)
│   ├── apple-icon.png          # Apple touch icon
│   └── showroom/page.tsx        # Página de componentes de demo (Spline 3D, FAQ tabs)
├── components/
│   ├── ui/                 # Primitivas shadcn (card, spotlight, splite, faq-tabs)
│   ├── sections/            # Secciones de la landing (Hero, Services, Faq, Footer...)
│   ├── SiteInteractions.tsx  # Client component: nav móvil, scroll reveal, canvas hero, etc.
│   ├── spline-scene-demo.tsx  # Demo del componente 3D interactivo
│   ├── faq-tabs-demo.tsx       # Demo genérico del FAQ con tabs (contenido original en inglés)
│   └── error-boundary.tsx       # Error boundary genérico (usado alrededor de la escena 3D)
├── public/
│   ├── labs24k-logo-on-dark.png   # Logo completo (claro) para fondos oscuros
│   ├── labs24k-logo-on-light.png   # Logo completo (oscuro) para fondos claros
│   └── og-image.png                 # Imagen para Open Graph / redes sociales
├── lib/utils.ts             # Helper cn() de shadcn
└── components.json           # Config de shadcn/ui
```

## Marca

- Logo, favicon, OG image e imagen de fondo del hero están generados a partir del logo oficial de Labs24k.
- Paleta de color extraída de la guía de marca: azul `#0563a7` / `#30a4ce`, teal `#02b5b2` / `#1ebcbf`, rosa/magenta `#ed2566`, navy `#080c14`.
- El correo de contacto por defecto es `admin@labs24k.com`; verifica y actualiza la URL de LinkedIn del footer (`/company/labs24k`) con el enlace real.

**Pendiente de contenido real**: la sección de "Casos de éxito" y "Liderado por" usan datos de marcador de posición (clientes genéricos, equipo sin nombre) — sustitúyelos por testimonios y biografías reales de Labs24k cuando estén disponibles.

## `/showroom`

Página separada (`/showroom`) con los componentes recién integrados en su forma de demo original (contenido en inglés, sin traducir): la escena 3D interactiva (Spline + Spotlight) y el FAQ genérico de ejemplo. Se mantiene aparte de la landing real para no mezclar contenido de placeholder con el copy de negocio.

## Ejecutar en local

```bash
npm install
npm run dev
```

Abre `http://localhost:3000` (landing) y `http://localhost:3000/showroom` (showroom de componentes).

```bash
npm run build   # build de producción
npm run lint    # eslint
```
