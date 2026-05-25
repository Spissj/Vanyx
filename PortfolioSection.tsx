'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useRef, useState } from 'react';

/* ── Project data ──────────────────────────────────────────── */
const PROJECTS = [
  {
    id: 1, category: 'Desarrollo Web',
    title:       'E-commerce Premium IA',
    description: 'Plataforma con motor de recomendación IA y optimización de conversión en tiempo real.',
    tech:        ['Next.js', 'TypeScript', 'OpenAI', 'Stripe'],
    metric:      '+150%', metricLabel: 'Conversiones',
    hue: '192', /* cyan */
  },
  {
    id: 2, category: 'IA',
    title:       'Asistente NLP Corporativo',
    description: 'Chatbot empresarial con comprensión contextual profunda integrado al CRM.',
    tech:        ['Python', 'LangChain', 'WebSocket', 'React'],
    metric:      '90%', metricLabel: 'Satisfacción',
    hue: '270', /* purple */
  },
  {
    id: 3, category: 'Automatización',
    title:       'Automatización de Procesos',
    description: 'Suite de automatización de flujos complejos con reporting ejecutivo.',
    tech:        ['Next.js', 'TypeScript', 'PostgreSQL', 'n8n'],
    metric:      '−60%', metricLabel: 'Tiempo manual',
    hue: '155', /* green */
  },
  {
    id: 4, category: 'Desarrollo Web',
    title:       'SaaS de Analytics',
    description: 'Dashboard en tiempo real con visualizaciones avanzadas D3 y predicción estadística.',
    tech:        ['React', 'D3.js', 'Python', 'TimescaleDB'],
    metric:      '+200%', metricLabel: 'Productividad',
    hue: '28', /* orange */
  },
  {
    id: 5, category: 'IA',
    title:       'Plataforma Marketing IA',
    description: 'Automatización multi-canal con optimización de campañas por IA y atribución avanzada.',
    tech:        ['Python', 'ML', 'Firebase', 'React'],
    metric:      '×3', metricLabel: 'ROI promedio',
    hue: '330', /* pink */
  },
  {
    id: 6, category: 'Desarrollo Web',
    title:       'App Móvil Corporativa',
    description: 'Aplicación empresarial con sincronización offline-first y cifrado end-to-end.',
    tech:        ['React Native', 'GraphQL', 'Redux', 'Firebase'],
    metric:      '500K+', metricLabel: 'Usuarios activos',
    hue: '230', /* indigo */
  },
];

const CATEGORIES = ['Todos', 'Desarrollo Web', 'IA', 'Automatización'];

/* ── Project card ──────────────────────────────────────────── */
function ProjectCard({ p }: { p: typeof PROJECTS[0] }) {
  const [hovered, setHovered] = useState(false);

  const accentColor = `hsl(${p.hue}, 80%, 65%)`;
  const accentBg    = `hsla(${p.hue}, 80%, 65%, 0.08)`;
  const accentBorder= `hsla(${p.hue}, 80%, 65%, 0.20)`;
  const accentGlow  = `hsla(${p.hue}, 80%, 65%, 0.12)`;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20, filter: 'blur(4px)' }}
      animate={{ opacity: 1,  y: 0,  filter: 'blur(0px)' }}
      exit={{ opacity: 0, y: 12, scale: 0.97, filter: 'blur(4px)' }}
      transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className="group rounded-2xl overflow-hidden"
      style={{
        background:   'rgba(255,255,255,0.02)',
        border:       `1px solid ${hovered ? accentBorder : 'rgba(255,255,255,0.06)'}`,
        boxShadow:    hovered ? `0 0 0 1px ${accentBorder}, var(--e-3), 0 0 60px ${accentGlow}` : 'none',
        transform:    hovered ? 'translateY(-4px)' : 'translateY(0px)',
        transition:   'border-color 0.35s ease, box-shadow 0.35s ease, transform 0.35s cubic-bezier(0.16,1,0.3,1)',
        willChange:   'transform',
        cursor:       'default',
      }}
    >
      {/* Top colour bar */}
      <div
        className="h-32 relative overflow-hidden flex items-center justify-center"
        style={{
          background: `linear-gradient(135deg, ${accentBg} 0%, rgba(0,0,0,0) 80%)`,
        }}
      >
        {/* Ambient on hover */}
        <motion.div
          className="absolute inset-0"
          animate={hovered ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.4 }}
          style={{
            background: `radial-gradient(circle at 50% 60%, hsla(${p.hue},80%,65%,0.12) 0%, transparent 65%)`,
          }}
        />

        {/* Top accent line */}
        <div
          className="absolute top-0 left-0 right-0 h-[1px]"
          style={{
            background: `linear-gradient(90deg, transparent, ${accentColor}80, transparent)`,
            opacity: hovered ? 1 : 0.5,
            transition: 'opacity 0.35s ease',
          }}
        />

        {/* Metric */}
        <div className="relative text-center">
          <div
            style={{
              fontFamily:    "'Sora', system-ui, sans-serif",
              fontSize:      '3.25rem',
              fontWeight:    700,
              letterSpacing: '-0.05em',
              lineHeight:    1,
              color:          accentColor,
              textShadow:    `0 0 30px ${accentColor}50`,
            }}
          >
            {p.metric}
          </div>
          <div
            style={{
              fontSize:      '10px',
              fontWeight:    600,
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color:         `hsla(${p.hue},50%,65%,0.6)`,
              marginTop:     '0.375rem',
            }}
          >
            {p.metricLabel}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-7">
        {/* Category chip */}
        <div
          className="inline-flex items-center mb-4"
          style={{
            padding:    '0.2rem 0.6rem',
            borderRadius: 9999,
            fontSize:   '10px',
            fontWeight:  700,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            background: accentBg,
            color:      accentColor,
            border:     `1px solid ${accentBorder}`,
          }}
        >
          {p.category}
        </div>

        {/* Title */}
        <h3
          className="mb-2.5"
          style={{
            fontSize:      '15px',
            fontWeight:    600,
            letterSpacing: '-0.015em',
            color:         hovered ? '#F5F5F5' : '#9B9BA6',
            transition:    'color 0.3s ease',
          }}
        >
          {p.title}
        </h3>

        {/* Desc */}
        <p
          className="mb-6"
          style={{
            fontSize:   '13px',
            lineHeight: '1.65',
            color:      hovered ? '#4B4B57' : '#2E2E38',
            transition: 'color 0.35s ease',
          }}
        >
          {p.description}
        </p>

        {/* Tech tags */}
        <div
          className="flex flex-wrap gap-1.5 pt-4"
          style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}
        >
          {p.tech.map((t) => (
            <span
              key={t}
              style={{
                padding:      '0.2rem 0.55rem',
                borderRadius: '4px',
                fontSize:     '11px',
                fontWeight:    500,
                background:   'rgba(255,255,255,0.04)',
                color:        '#4B4B57',
                border:       '1px solid rgba(255,255,255,0.06)',
              }}
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function PortfolioSection() {
  const [selected, setSelected] = useState('Todos');

  const filtered = selected === 'Todos'
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === selected);

  return (
    <section className="relative py-36 bg-[#020202] overflow-hidden">

      {/* Ambient */}
      <div
        aria-hidden
        className="pointer-events-none absolute top-1/3 right-0 rounded-full"
        style={{
          width:      '500px',
          height:     '500px',
          background: 'radial-gradient(circle, rgba(0,217,255,0.03) 0%, transparent 65%)',
          filter:     'blur(80px)',
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 max-w-2xl"
        >
          <div className="section-label mb-7">Portafolio</div>
          <h2 className="t-heading mb-5">
            Resultados que<br />hablan solos.
          </h2>
          <p style={{ fontSize: '1.0625rem', lineHeight: '1.7', color: '#5A5A68', letterSpacing: '-0.005em' }}>
            Casos de éxito con métricas reales que demuestran el
            impacto de nuestras soluciones.
          </p>
        </motion.div>

        {/* Category filter */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.1 }}
          className="flex flex-wrap gap-2 mb-12"
        >
          {CATEGORIES.map((cat) => {
            const isActive = selected === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelected(cat)}
                style={{
                  padding:      '0.4375rem 0.875rem',
                  borderRadius: '9999px',
                  fontSize:     '13px',
                  fontWeight:    500,
                  background:    isActive ? '#00D9FF' : 'transparent',
                  color:         isActive ? '#020202' : '#4B4B57',
                  border:        isActive ? '1px solid transparent' : '1px solid rgba(255,255,255,0.09)',
                  transition:   'all 0.2s ease',
                  cursor:       'pointer',
                  letterSpacing: '-0.005em',
                }}
                onMouseEnter={(e) => {
                  if (!isActive) {
                    (e.currentTarget as HTMLButtonElement).style.color = '#9B9BA6';
                    (e.currentTarget as HTMLButtonElement).style.borderColor = 'rgba(255,255,255,0.16)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActive) {
                    (e.currentTarget as HTMLButtonElement).style.color = '#4B4B57';
                    (e.currentTarget as HTMLButtonElement).style.borderColor = 'rgba(255,255,255,0.09)';
                  }
                }}
              >
                {cat}
              </button>
            );
          })}
        </motion.div>

        {/* Grid */}
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          <AnimatePresence mode="popLayout">
            {filtered.map((p) => (
              <ProjectCard key={p.id} p={p} />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Bottom rule */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-16 flex flex-col sm:flex-row items-center justify-between gap-4 pt-6"
          style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}
        >
          <p style={{ fontSize: '13px', color: '#3D3D48' }}>
            Más de 50 proyectos entregados con éxito.
          </p>
          <motion.a
            href="#contacto"
            className="btn-ghost"
            style={{ padding: '0.5625rem 1.125rem', fontSize: '13.5px' }}
            whileHover={{ x: 3 }}
            transition={{ duration: 0.2 }}
          >
            Trabaja con nosotros
            <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden>
              <path d="M2.5 6.5h8M7 3.5l3 3-3 3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
