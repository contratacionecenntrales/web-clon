# web-clon

Clon de la landing page de [CenteIA Consulting](https://www.centeiaconsulting.com/) — consultoría de IA para empresas con estrategia, implementación técnica y cumplimiento legal (AI Act & RGPD).

Construido con **HTML5 semántico + CSS3 (vanilla) + JavaScript vainilla**, sin dependencias de build.

## Estructura

```
web-clon/
├── index.html        # Estructura de toda la landing (hero, casos de uso, valor, metodología, legal, FAQ, contacto)
├── css/
│   └── styles.css     # Diseño, paleta de colores, responsive, animaciones
├── js/
│   └── main.js         # Menú móvil, tabs, acordeón FAQ, scroll reveal, contadores animados, formulario
└── package.json
```

## Secciones incluidas

- Banner superior descartable de aviso AI Act + barra de progreso de scroll
- Header con navegación fija, menú móvil y CTA
- Hero con titular, CTAs, microcopy de confianza y estadísticas de clientes
- Franja de logos de clientes
- Sección del libro "El Método IA"
- Servicios organizados en timeline por madurez de IA (3 momentos, 8 servicios) con tarjeta destacada de cumplimiento AI Act
- Casos de éxito con métricas reales por cliente
- Grid "Por qué CenteIA" (5 columnas con números de gran formato)
- Sección de fundador/liderazgo
- Metodología en 4 fases con actividades clave y entregables
- Sectores (6 tarjetas con iconos)
- FAQ en acordeón a 2 columnas
- Formulario de contacto + footer completo

## Ejecutar en local

No requiere instalación de dependencias para verlo: puedes abrir `index.html` directamente en el navegador.

Para levantar un servidor de desarrollo local:

```bash
npm run dev
```

Esto ejecuta `serve` (vía `npx`) en `http://localhost:3000`.

Alternativa sin Node:

```bash
python3 -m http.server 3000
```
