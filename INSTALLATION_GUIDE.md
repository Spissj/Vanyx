# VANYX - Guía de Instalación y Setup

## 📋 Requisitos Previos

- **Node.js**: Versión 18.0.0 o superior
- **npm**: Versión 9.0.0 o superior (o yarn)
- **Git**: Para clonar repositorios (opcional)

## 🚀 Instalación Rápida

### 1. Crear el proyecto Next.js

```bash
npx create-next-app@latest vanyx --typescript --tailwind --app
cd vanyx
```

### 2. Instalar dependencias adicionales

```bash
npm install framer-motion
```

### 3. Estructura de carpetas

Copia los archivos en la siguiente estructura:

```
vanyx/
├── src/
│   ├── app/
│   │   ├── page.tsx          → Copy App.tsx content
│   │   ├── layout.tsx        → Update with Navigation & Footer imports
│   │   └── globals.css       → Copy globals.css content
│   └── components/
│       ├── Navigation.tsx
│       ├── HeroSection.tsx
│       ├── ServicesSection.tsx
│       ├── AboutSection.tsx
│       ├── PortfolioSection.tsx
│       ├── ContactSection.tsx
│       └── Footer.tsx
├── tailwind.config.js        → Replace with provided config
├── next.config.js            → Replace with provided config
├── postcss.config.js         → Copy content
└── package.json              → Update scripts if needed
```

### 4. Actualizar layout.tsx

```typescript
import type { Metadata } from 'next';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import './globals.css';

export const metadata: Metadata = {
  title: 'VANYX - Soluciones Tecnológicas Premium',
  description: 'Automatizamos el futuro de tu negocio con desarrollo web, IA, automatización y más.',
  keywords: 'web development, AI, automation, technology, software',
  authors: [{ name: 'VANYX' }],
  viewport: 'width=device-width, initial-scale=1.0',
  themeColor: '#050505',
  openGraph: {
    type: 'website',
    url: 'https://vanyx.com',
    title: 'VANYX - Soluciones Tecnológicas',
    description: 'Transformamos tu negocio con tecnología',
    siteName: 'VANYX',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'VANYX',
    description: 'Soluciones tecnológicas premium',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="bg-vanyx-black text-white">
        {children}
      </body>
    </html>
  );
}
```

## 🏃 Ejecutar el Proyecto

### Desarrollo

```bash
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

### Build para Producción

```bash
npm run build
npm start
```

## 📁 Descripción de Componentes

### Navigation
- Barra de navegación fija
- Menú responsivo móvil
- Logo animado
- CTA button

### HeroSection
- Headline impactante
- Partículas animadas
- Mouse follow glow
- Grid futurista
- Botones CTA

### ServicesSection
- Grid de 8 servicios
- Glassmorphism design
- Hover animations
- Icons emojis
- Gradient accents

### AboutSection
- Visión corporativa
- Stats dashboard
- Valores empresariales
- Listado de características
- CTA section

### PortfolioSection
- Grid de proyectos
- Sistema de filtrado por categoría
- Proyecto cards con hover effects
- Tecnologías utilizadas
- Resultados destacados

### ContactSection
- Formulario funcional
- Multiple contact methods
- WhatsApp integration
- Success/error messages
- Trust indicators

### Footer
- Links organizados
- Social media
- Copyright
- CTA flotante

## 🎨 Personalización

### Colores
Modifica `tailwind.config.js`:

```javascript
colors: {
  vanyx: {
    black: '#050505',
    white: '#FFFFFF',
    cyan: '#00D9FF',
    // ... más colores
  }
}
```

### Tipografía
Agrega fuentes en `globals.css`:

```css
@import url('https://fonts.googleapis.com/css2?family=TuFuente:wght@400;700&display=swap');
```

### Animaciones
Define animaciones en `tailwind.config.js`:

```javascript
animation: {
  'custom': 'customKeyframe 2s ease-in-out infinite',
}
```

## 📱 Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

Todos los componentes son completamente responsivos.

## 🔍 SEO Optimization

- ✅ Meta tags configurados
- ✅ Open Graph para redes sociales
- ✅ Twitter card optimization
- ✅ Semantic HTML5
- ✅ Alt text en imágenes
- ✅ Sitemap ready

## 🚀 Deployment

### Vercel (Recomendado)

```bash
npm install -g vercel
vercel
```

### Netlify

```bash
npm run build
# Sube la carpeta .next a Netlify
```

### Docker

```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

## 📊 Performance

- ✅ Lazy loading de componentes
- ✅ Image optimization
- ✅ CSS minification
- ✅ Code splitting automático
- ✅ Animaciones optimizadas
- ✅ Zero layout shifts

## 🔐 Seguridad

- ✅ No hay secrets en el código
- ✅ CORS headers configurados
- ✅ CSP headers recomendados
- ✅ XSS protection

## 🐛 Troubleshooting

### Error: "Module not found"
```bash
rm -rf node_modules package-lock.json
npm install
```

### Animaciones no funcionan
- Verifica que Framer Motion esté instalado
- Revisa la consola del navegador para errores

### Estilos no aplican
- Limpia el caché: `npm run build` y `npm start`
- Verifica las rutas de importación de CSS

## 📚 Documentación Útil

- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com)
- [Framer Motion](https://www.framer.com/motion)
- [TypeScript](https://www.typescriptlang.org)

## 📞 Soporte

Para problemas o preguntas:
1. Verifica la documentación oficial
2. Revisa los issues en GitHub
3. Consulta la comunidad de Next.js

## 📝 Changelog

### Versión 1.0.0
- ✨ Lanzamiento inicial
- 🎨 Diseño premium completado
- 📱 Responsive design
- ⚡ Animaciones optimizadas
- 🚀 Ready for production

---

**Hecho con 💙 para VANYX**
