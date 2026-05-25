'use client';

import Navigation       from '@/components/Navigation';
import HeroSection      from '@/components/HeroSection';
import ServicesSection  from '@/components/ServicesSection';
import AboutSection     from '@/components/AboutSection';
import PortfolioSection from '@/components/PortfolioSection';
import ContactSection   from '@/components/ContactSection';
import Footer           from '@/components/Footer';

function SectionDivider() {
  return (
    <div
      aria-hidden
      style={{
        height: '1px',
        background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.06) 20%, rgba(255,255,255,0.06) 80%, transparent 100%)',
      }}
    />
  );
}

export default function Home() {
  return (
    <main style={{ backgroundColor: '#020202', color: '#F5F5F5', overflowX: 'hidden' }}>
      <Navigation />

      <section id="inicio">
        <HeroSection />
      </section>

      <SectionDivider />

      <section id="servicios">
        <ServicesSection />
      </section>

      <SectionDivider />

      <section id="sobre-nosotros">
        <AboutSection />
      </section>

      <SectionDivider />

      <section id="portafolio">
        <PortfolioSection />
      </section>

      <SectionDivider />

      <section id="contacto">
        <ContactSection />
      </section>

      <Footer />
    </main>
  );
}
