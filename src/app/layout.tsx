import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'VANYX — Soluciones Tecnológicas de Próxima Generación',
  description: 'Automatizamos el futuro de tu negocio con desarrollo web, inteligencia artificial, automatización y software empresarial.',
  keywords: 'desarrollo web, automatización IA, chatbots, software empresarial, ciberseguridad, Chile',
  authors: [{ name: 'VANYX' }],
  openGraph: {
    type: 'website',
    url: 'https://vanyx.com',
    title: 'VANYX — Soluciones Tecnológicas',
    description: 'Transformamos tu negocio con tecnología de próxima generación.',
    siteName: 'VANYX',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'VANYX',
    description: 'Soluciones tecnológicas premium',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body style={{ backgroundColor: '#020202', color: '#F5F5F5', overflowX: 'hidden' }}>
        {children}
      </body>
    </html>
  );
}
