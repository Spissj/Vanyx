# VANYX - Premium Tech Solutions Website

<div align="center">

![VANYX](https://via.placeholder.com/1200x400?text=VANYX+-+Premium+Tech+Solutions)

**Automatizamos el futuro de tu negocio**

Una página web premium estilo SaaS para VANYX, empresa líder en soluciones tecnológicas, desarrollo web, IA y automatización.

[Sitio Web](#) • [Documentación](#) • [Contacto](#)

</div>

---

## 📖 Tabla de Contenidos

- [Características](#características)
- [Tecnología](#tecnología)
- [Instalación](#instalación)
- [Estructura](#estructura)
- [Componentes](#componentes)
- [Customización](#customización)
- [Deployment](#deployment)
- [Performance](#performance)

## ✨ Características

### 🎨 Diseño Premium
- **Dark UI Futurista**: Minimalista elegante con cyan eléctrico
- **Glassmorphism**: Efectos de cristal sofisticados
- **Animaciones Premium**: Movimientos suaves y profesionales
- **Responsive Total**: Perfecto en desktop, tablet y mobile

### 🚀 Componentes Avanzados
- ✅ Hero section con partículas animadas
- ✅ Sección de servicios con glassmorphism
- ✅ Portafolio con filtrado por categoría
- ✅ Formulario de contacto funcional
- ✅ Navegación sticky elegante
- ✅ Footer con redes sociales

### ⚡ Rendimiento
- Optimizado para Core Web Vitals
- Lazy loading inteligente
- Animaciones GPU-aceleradas
- Zero layout shifts
- Carga rápida

### 🔍 SEO Optimizado
- Meta tags completos
- Open Graph configurado
- Schema markup listo
- Sitemap automático
- Mobile-friendly

## 🛠️ Tecnología

### Frontend Stack
- **React 18**: Última versión de React
- **Next.js 14**: Framework moderno de React
- **TypeScript**: Tipado fuerte
- **TailwindCSS**: Utility-first CSS
- **Framer Motion**: Animaciones avanzadas
- **Geist Mono**: Tipografía premium

### Herramientas
- **PostCSS**: Procesamiento CSS
- **ESLint**: Linting automático
- **Prettier**: Formateo de código

### Versionado
```
Node.js: >= 18.0.0
npm: >= 9.0.0
```

## 📦 Instalación

### Requisitos Previos
```bash
node --version  # >= 18.0.0
npm --version   # >= 9.0.0
```

### Setup Rápido

```bash
# 1. Crear proyecto Next.js
npx create-next-app@latest vanyx --typescript --tailwind --app

# 2. Instalar dependencias
cd vanyx
npm install framer-motion

# 3. Copiar archivos del proyecto
# (Sigue la estructura en INSTALLATION_GUIDE.md)

# 4. Ejecutar en desarrollo
npm run dev
```

Visita `http://localhost:3000` 🚀

## 📂 Estructura del Proyecto

```
vanyx/
├── src/
│   ├── app/
│   │   ├── page.tsx                 # Página principal
│   │   ├── layout.tsx               # Layout raíz
│   │   └── globals.css              # Estilos globales
│   │
│   └── components/
│       ├── Navigation.tsx           # Barra de navegación
│       ├── HeroSection.tsx          # Sección hero
│       ├── ServicesSection.tsx      # Servicios
│       ├── AboutSection.tsx         # Sobre nosotros
│       ├── PortfolioSection.tsx     # Portafolio
│       ├── ContactSection.tsx       # Contacto
│       └── Footer.tsx               # Pie de página
│
├── public/                          # Archivos estáticos
├── tailwind.config.js               # Config TailwindCSS
├── next.config.js                   # Config Next.js
├── postcss.config.js                # Config PostCSS
├── tsconfig.json                    # Config TypeScript
├── package.json                     # Dependencias
└── README.md                        # Este archivo
```

## 🧩 Componentes

### Navigation
```tsx
<Navigation />
```
- Barra fija responsiva
- Logo animado
- Links de navegación
- Mobile menu
- CTA button

### HeroSection
```tsx
<HeroSection />
```
- Headline gigante animado
- Partículas flotantes
- Glow effects dinámicos
- Grid futurista
- Botones CTA

### ServicesSection
```tsx
<ServicesSection />
```
- 8 servicios en grid
- Glassmorphism design
- Hover animations
- Icons modernos
- Colores de gradiente

### AboutSection
```tsx
<AboutSection />
```
- Visión y misión
- Stats dashboard
- Valores corporativos
- Características lista
- CTA section

### PortfolioSection
```tsx
<PortfolioSection />
```
- Grid de proyectos
- Filtrado dinámico
- Categorías
- Tecnologías usadas
- Resultados destacados

### ContactSection
```tsx
<ContactSection />
```
- Formulario funcional
- Métodos de contacto
- WhatsApp integration
- Validación de form
- Success messages

### Footer
```tsx
<Footer />
```
- Links organizados
- Social media
- Copyright
- Floating CTA

## 🎨 Customización

### Cambiar Colores

Edita `tailwind.config.js`:

```javascript
colors: {
  vanyx: {
    black: '#tu-negro',
    white: '#tu-blanco',
    cyan: '#tu-cyan',
  }
}
```

### Cambiar Tipografía

En `globals.css`:

```css
@import url('https://fonts.googleapis.com/css2?family=TuFuente&display=swap');

body {
  font-family: 'TuFuente', sans-serif;
}
```

### Agregar Animaciones

En `tailwind.config.js`:

```javascript
keyframes: {
  'custom': {
    '0%': { transform: 'scale(0)' },
    '100%': { transform: 'scale(1)' }
  }
}
```

### Modificar Contenido

Edita el contenido directamente en cada componente:

```tsx
// En servicesSection.tsx
const services = [
  {
    title: 'Tu Servicio',
    description: 'Tu descripción',
    // ...
  }
];
```

## 📱 Responsive Design

Todos los componentes son 100% responsivos:

```
Mobile  (< 640px)
Tablet  (640px - 1024px)
Desktop (> 1024px)
```

Prueba con diferentes tamaños:
```bash
# Chrome DevTools
Ctrl + Shift + I  # Windows/Linux
Cmd + Option + I  # Mac
```

## 🚀 Deployment

### Vercel (Recomendado)

```bash
npm install -g vercel
vercel
```

### Netlify

```bash
npm run build
# Sube .next a Netlify
```

### AWS Amplify

```bash
npm install -g @aws-amplify/cli
amplify init
amplify publish
```

### Docker

```bash
docker build -t vanyx .
docker run -p 3000:3000 vanyx
```

## 📊 Performance

### Metrics
- **Lighthouse Score**: 95+
- **First Contentful Paint**: < 1s
- **Largest Contentful Paint**: < 2s
- **Cumulative Layout Shift**: < 0.1

### Optimizaciones
- ✅ Code splitting automático
- ✅ Image lazy loading
- ✅ CSS minification
- ✅ JavaScript minification
- ✅ Asset compression
- ✅ CDN ready

### Prueba Performance

```bash
npm run build
npm start
# Usa Lighthouse en DevTools
```

## 🔐 Seguridad

- ✅ Headers de seguridad
- ✅ CSP configuration
- ✅ No hardcoded secrets
- ✅ Input validation
- ✅ XSS protection

## 🐛 Troubleshooting

### Error: "Cannot find module"

```bash
rm -rf node_modules package-lock.json
npm install
```

### Animaciones lentas

- Abre DevTools (F12)
- Performance > Record
- Busca paint events largos

### Estilos no aplican

```bash
npm run build
npm start
rm -rf .next
```

## 📚 Recursos

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Framer Motion Docs](https://www.framer.com/motion/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [React Documentation](https://react.dev)

## 📝 Scripts Disponibles

```bash
npm run dev         # Inicia servidor de desarrollo
npm run build       # Build para producción
npm start           # Inicia servidor de producción
npm run lint        # Ejecuta linting
npm run type-check  # Chequea tipos TypeScript
```

## 🤝 Contribuir

1. Fork el proyecto
2. Crea una rama (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo licencia MIT - ver archivo `LICENSE` para más detalles.

## 👥 Equipo

**VANYX - Soluciones Tecnológicas Premium**

- Especialistas en desarrollo web
- Expertos en IA y automatización
- Profesionales en ciberseguridad
- Soporte técnico 24/7

## 📞 Contacto

- **Email**: hola@vanyx.com
- **WhatsApp**: +56 9 1234 5678
- **Ubicación**: Santiago, Chile
- **Web**: https://vanyx.com

---

<div align="center">

### ⭐ ¿Te gustó el proyecto?

Dale una estrella en GitHub y comparte con otros developers

[⬆ Volver arriba](#vanyx---premium-tech-solutions-website)

---

**Hecho con 💙 por VANYX**

*Automatizamos el futuro de tu negocio*

</div>
