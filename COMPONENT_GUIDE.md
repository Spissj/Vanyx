# VANYX - Guía Visual de Componentes

## 🎯 Arquitectura Visual

```
┌─────────────────────────────────────┐
│      NAVIGATION (Sticky)            │
│  Logo | Links | CTA Button          │
└─────────────────────────────────────┘
           ▼
┌─────────────────────────────────────┐
│      HERO SECTION                   │
│  Particles | Glow | Headline        │
│  Subheadline | 2 CTA Buttons        │
└─────────────────────────────────────┘
           ▼
┌─────────────────────────────────────┐
│      SERVICES SECTION               │
│  Grid 4x2 (Desktop) Service Cards   │
│  Glassmorphism | Hover Effects      │
└─────────────────────────────────────┘
           ▼
┌─────────────────────────────────────┐
│      ABOUT SECTION                  │
│  Left: Text + Features              │
│  Right: Stats Grid                  │
│  Values: Grid 1x4 Cards             │
└─────────────────────────────────────┘
           ▼
┌─────────────────────────────────────┐
│      PORTFOLIO SECTION              │
│  Filters: Todos | Web | IA | Auto   │
│  Grid 3x2 Project Cards             │
│  Tech Tags | Results Badge          │
└─────────────────────────────────────┘
           ▼
┌─────────────────────────────────────┐
│      CONTACT SECTION                │
│  Left: Form (Name, Email, etc)      │
│  Right: Info + WhatsApp CTA         │
│  4 Contact Methods at Top           │
└─────────────────────────────────────┘
           ▼
┌─────────────────────────────────────┐
│      FOOTER                         │
│  Links | Social | Copyright | CTA   │
└─────────────────────────────────────┘
```

## 📦 Estructura de Carpetas Detallada

```
vanyx/
├── src/
│   ├── app/
│   │   ├── page.tsx
│   │   │   └── Integra todos los componentes
│   │   │
│   │   ├── layout.tsx
│   │   │   ├── Metadata
│   │   │   └── HTML Structure
│   │   │
│   │   └── globals.css
│   │       ├── Reset
│   │       ├── Animations
│   │       └── Utilities
│   │
│   └── components/
│       ├── Navigation.tsx
│       │   ├── Logo
│       │   ├── Nav Links
│       │   ├── CTA Button
│       │   └── Mobile Menu
│       │
│       ├── HeroSection.tsx
│       │   ├── Particles
│       │   ├── Glow Orb
│       │   ├── Headline
│       │   ├── Subheadline
│       │   └── CTA Buttons
│       │
│       ├── ServicesSection.tsx
│       │   ├── Header
│       │   ├── 8 Service Cards
│       │   └── Grid 4x2
│       │
│       ├── AboutSection.tsx
│       │   ├── Visión
│       │   ├── Features
│       │   ├── Stats
│       │   ├── Valores
│       │   └── CTA
│       │
│       ├── PortfolioSection.tsx
│       │   ├── Filter Buttons
│       │   ├── 6 Project Cards
│       │   └── Grid 3x2
│       │
│       ├── ContactSection.tsx
│       │   ├── Contact Methods
│       │   ├── Form
│       │   ├── Info Box
│       │   └── WhatsApp CTA
│       │
│       └── Footer.tsx
│           ├── Logo & Description
│           ├── Links Columns
│           ├── Social Icons
│           └── Copyright
│
├── public/
│   ├── favicon.ico
│   └── robots.txt
│
├── .gitignore
├── package.json
├── tailwind.config.js
├── next.config.js
├── postcss.config.js
├── tsconfig.json
└── README.md
```

## 🎨 Paleta de Colores

```
Primarios:
  - Negro Profundo:  #050505
  - Blanco:          #FFFFFF
  - Cyan Eléctrico:  #00D9FF
  - Cyan Claro:      #00F0FF

Secundarios:
  - Gris Oscuro:     #111827
  - Gris Más Oscuro: #0A0E27
  - Gris Texto:      #999999

Efectos:
  - Glow Cyan:       rgba(0, 217, 255, 0.3)
  - Glow Cyan Alto:  rgba(0, 217, 255, 0.6)
```

## 🔤 Tipografía

```
Display (Headlines):
  → Space Grotesk (400, 500, 600, 700)
  
Body (Párrafos):
  → Inter (400, 500, 600)
  
Monospace (Código):
  → Geist Mono (400, 500)
```

## ✨ Animaciones Clave

```
Hero Section:
  - Fade In: Headlines y subheadline (0.6-0.7s)
  - Float: Partículas (8s infinite)
  - Glow Pulse: Botones (3s infinite)
  - Scroll Indicator: Bounce (2s infinite)

Services Section:
  - Stagger: Cards (0.1s delay cada una)
  - Slide Up: Cards from bottom (0.6s)
  - Glow on Hover: Box shadow

About Section:
  - Slide In Left: Contenido izq (0.7s)
  - Slide In Right: Stats derecha (0.7s)
  - Scale: Stats al hover (1.05)

Portfolio Section:
  - Layout Animation: Grid animation
  - Fade & Slide: Projects on filter
  - Scale on Hover: Project cards

Contact Section:
  - Input Focus: Border cyan glow
  - Form Submit: Loading animation
  - Success/Error: Toast animation
```

## 📱 Breakpoints Responsive

```
Mobile First Approach:
  xs: 0px (default)
  sm: 640px  (tablet)
  md: 768px  (tablet large)
  lg: 1024px (desktop)
  xl: 1280px (desktop large)
  2xl: 1536px (desktop extra large)

Reglas por Sección:
  - Nav: Hamburger menu < md, Desktop menu ≥ md
  - Hero: 1 col < sm, 1 col sm-md, 1 col lg
  - Services: 1 col < sm, 2 col sm-lg, 4 col lg
  - About: Stack < md, 2 col md
  - Portfolio: 1 col < sm, 2 col md, 3 col lg
  - Contact: Stack < md, 2 col lg
```

## 🔄 Component Props & Data

### Services Data
```typescript
interface Service {
  id: number
  title: string
  description: string
  icon: string (emoji)
  color: string (gradient)
}
```

### Portfolio Data
```typescript
interface Project {
  id: number
  title: string
  category: string
  description: string
  image: string (emoji)
  technologies: string[]
  results: string
}
```

### Contact Methods
```typescript
interface ContactMethod {
  icon: string
  label: string
  value: string
  link: string
}
```

## 🎯 Performance Targets

```
Lighthouse Scores:
  ✅ Performance: > 90
  ✅ Accessibility: > 90
  ✅ Best Practices: > 90
  ✅ SEO: > 95

Core Web Vitals:
  ✅ LCP (Largest Contentful Paint): < 2.5s
  ✅ FID (First Input Delay): < 100ms
  ✅ CLS (Cumulative Layout Shift): < 0.1
```

## 🚀 Deployment Checklist

```
Pre-Deploy:
  ✅ npm run build (Sin errores)
  ✅ npm run lint (Sin warnings)
  ✅ npm run type-check (Sin errores TS)
  ✅ Lighthouse audit > 90
  ✅ Mobile responsiveness test
  ✅ Forms funcionan correctamente
  ✅ Links internos funcionan
  ✅ SEO meta tags OK
  ✅ Analytics implementado
  ✅ Error tracking setup

Post-Deploy:
  ✅ Test en producci1ón
  ✅ Monitoreo activo
  ✅ Backup automático
  ✅ SSL certificate activo
  ✅ CDN configurado
```

## 🎓 Learning Path

Orden recomendado para entender el código:

1. **tailwind.config.js** - Colores y animaciones base
2. **globals.css** - Estilos globales y CSS custom
3. **Navigation.tsx** - Componente simple
4. **HeroSection.tsx** - Animaciones Framer Motion
5. **ServicesSection.tsx** - Grid y variants
6. **AboutSection.tsx** - Datos complejos
7. **PortfolioSection.tsx** - Filtrado dinámico
8. **ContactSection.tsx** - Formularios y estado
9. **Footer.tsx** - Estructura completa
10. **App.tsx** - Integración final

## 📊 File Sizes (Estimado)

```
Bundle Size Final (Optimizado):
  HTML: ~15 KB
  CSS: ~45 KB
  JavaScript: ~80 KB
  Total: ~140 KB

Por Componente:
  Navigation.tsx: ~2 KB
  HeroSection.tsx: ~4 KB
  ServicesSection.tsx: ~5 KB
  AboutSection.tsx: ~6 KB
  PortfolioSection.tsx: ~6 KB
  ContactSection.tsx: ~8 KB
  Footer.tsx: ~4 KB
```

## 🔗 URLs Internas

```
/ - Página principal
#inicio - Hero section
#servicios - Services section
#sobre-nosotros - About section
#portafolio - Portfolio section
#contacto - Contact section
```

## 🆘 Quick Troubleshooting

```
Problema: Animaciones lentas
  → Verifica GPU acceleration
  → Reduce particle count
  → Usa transform/opacity

Problema: Estilos no aplican
  → npm run build
  → rm -rf .next
  → Recarga navegador

Problema: Formulario no envía
  → Verifica console errors
  → Check form validation
  → Verifica endpoint

Problema: Mobile lags
  → Reduce animations
  → Lazy load images
  → Minify JavaScript
```

---

**Documento actualizado**: Mayo 2025
**Versión**: 1.0.0
**Desarrollado para**: VANYX
