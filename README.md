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

- Hero con CTA dobles y tarjeta de métricas animada
- Banner de autoridad / métricas de impacto (contadores animados)
- Casos de uso por industria (Retail, Industria, Servicios, Financiero) en tabs
- Propuesta de valor (grid de 4 beneficios)
- Metodología (Análisis → Ejecución → Medición de resultados)
- Asesoramiento legal & AI Act (Reglamento UE 2024/1689, RGPD)
- FAQ en acordeón
- Formulario de contacto + footer

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
