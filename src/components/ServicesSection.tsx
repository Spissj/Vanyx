'use client';

import { motion } from 'framer-motion';

/* ── Service data ──────────────────────────────────────────── */
const SERVICES = [
  {
    id: '01',
    title: 'Desarrollo Web',
    description: 'Aplicaciones modernas, escalables y optimizadas para conversión, construidas con arquitecturas actuales.',
    icon: (
      <svg width="19" height="19" viewBox="0 0 19 19" fill="none">
        <rect x="2" y="2.5" width="15" height="11" rx="1.5" stroke="currentColor" strokeWidth="1.4"/>
        <path d="M6.5 16.5h6M9.5 13.5v3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
        <path d="M6 8l2 2-2 2M11.5 10h2.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    id: '02',
    title: 'Automatización IA',
    description: 'Sistemas inteligentes que eliminan procesos repetitivos y multiplican la capacidad de tu equipo.',
    icon: (
      <svg width="19" height="19" viewBox="0 0 19 19" fill="none">
        <circle cx="9.5" cy="9.5" r="2.5" stroke="currentColor" strokeWidth="1.4"/>
        <path d="M9.5 2v2M9.5 15v2M2 9.5h2M15 9.5h2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
        <path d="M4.4 4.4l1.5 1.5M13.1 13.1l1.5 1.5M4.4 14.6l1.5-1.5M13.1 5.9l1.5-1.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeOpacity="0.5"/>
      </svg>
    ),
  },
  {
    id: '03',
    title: 'Chatbots IA',
    description: 'Asistentes que entienden, cualifican y convierten, disponibles 24/7 sin coste operativo.',
    icon: (
      <svg width="19" height="19" viewBox="0 0 19 19" fill="none">
        <path d="M3 4.5a1.5 1.5 0 011.5-1.5h10A1.5 1.5 0 0116 4.5v7a1.5 1.5 0 01-1.5 1.5H7L3 16V4.5z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round"/>
        <circle cx="7" cy="8" r="0.85" fill="currentColor"/>
        <circle cx="9.5" cy="8" r="0.85" fill="currentColor"/>
        <circle cx="12" cy="8" r="0.85" fill="currentColor"/>
      </svg>
    ),
  },
  {
    id: '04',
    title: 'Sistemas Empresariales',
    description: 'Software a medida que se convierte en el sistema nervioso de tu organización.',
    icon: (
      <svg width="19" height="19" viewBox="0 0 19 19" fill="none">
        <rect x="2" y="5.5" width="6.5" height="11" rx="1" stroke="currentColor" strokeWidth="1.4"/>
        <rect x="10.5" y="2.5" width="6.5" height="14" rx="1" stroke="currentColor" strokeWidth="1.4"/>
        <path d="M3.5 9.5h3.5M3.5 12h3.5M12 6.5h3.5M12 9.5h3.5M12 12.5h3.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeOpacity="0.6"/>
      </svg>
    ),
  },
  {
    id: '05',
    title: 'Marketing IA',
    description: 'Campañas optimizadas por datos y modelos predictivos que maximizan ROI de forma continua.',
    icon: (
      <svg width="19" height="19" viewBox="0 0 19 19" fill="none">
        <path d="M3 13L7 9l3.5 3L14 8l2 2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M14 8h3v3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    id: '06',
    title: 'Software a Medida',
    description: 'Soluciones propietarias que generan ventaja competitiva sostenible y diferenciación real.',
    icon: (
      <svg width="19" height="19" viewBox="0 0 19 19" fill="none">
        <path d="M6.5 7.5l-4 4 4 4M12.5 7.5l4 4-4 4M10.5 3.5L8.5 15.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    id: '07',
    title: 'Ciberseguridad',
    description: 'Protección enterprise: auditorías, hardening, detección de amenazas y respuesta a incidentes.',
    icon: (
      <svg width="19" height="19" viewBox="0 0 19 19" fill="none">
        <path d="M9.5 1.5L16 5v5c0 4-3 7-6.5 7.5C6 17 3 14 3 10V5l6.5-3.5z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round"/>
        <path d="M6.5 9.5l2 2 4-4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    id: '08',
    title: 'Soporte TI',
    description: 'Soporte proactivo y monitoreo continuo para mantener tu infraestructura al 100%.',
    icon: (
      <svg width="19" height="19" viewBox="0 0 19 19" fill="none">
        <circle cx="9.5" cy="9.5" r="2.8" stroke="currentColor" strokeWidth="1.4"/>
        <path d="M9.5 2v2M9.5 15.5v2M2 9.5h2M15.5 9.5h2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
        <path d="M4 4l1.5 1.5M13.5 13.5l1.5 1.5M4 15l1.5-1.5M13.5 5.5l1.5-1.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeOpacity="0.35"/>
      </svg>
    ),
  },
];

/* ── Stagger container ─────────────────────────────────────── */
const container = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.06, delayChildren: 0.1 } },
};

const item = {
  hidden:  { opacity: 0, y: 20, filter: 'blur(5px)' },
  visible: {
    opacity: 1,
    y:       0,
    filter:  'blur(0px)',
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

/* ── Service card ──────────────────────────────────────────── */
function ServiceCard({ svc }: { svc: typeof SERVICES[0] }) {
  return (
    <motion.div
      variants={item}
      className="group relative bg-[#020202] p-8"
      style={{ cursor: 'default' }}
    >
      {/* Top accent line — brightens on hover */}
      <div
        className="absolute top-0 left-6 right-6 h-[1px] opacity-15 group-hover:opacity-100"
        style={{
          background: 'linear-gradient(90deg, transparent, rgba(0,217,255,0.55), transparent)',
          transition: 'opacity var(--d-base) var(--smooth)',
        }}
      />

      {/* Number */}
      <div
        className="mb-5 text-[#4B4B57] group-hover:text-[var(--cyan)]"
        style={{
          fontFamily:    'ui-monospace, monospace',
          fontSize:      '10px',
          fontWeight:    600,
          letterSpacing: '0.15em',
          transition:    'color var(--d-base) var(--smooth)',
        }}
      >
        {svc.id}
      </div>

      {/* Icon */}
      <div
        className="mb-5 text-[#5A5A68] group-hover:text-[var(--cyan)]"
        style={{
          transition: 'color var(--d-base) var(--smooth), transform var(--d-base) var(--smooth)',
        }}
      >
        <div className="group-hover:scale-105 transition-transform duration-300 flex-shrink-0">
          {svc.icon}
        </div>
      </div>

      {/* Title */}
      <h3
        className="mb-3 text-[#9B9BA6] group-hover:text-[#F5F5F5]"
        style={{
          fontSize:      '14.5px',
          fontWeight:    600,
          letterSpacing: '-0.01em',
          transition:    'color var(--d-base) var(--smooth)',
        }}
      >
        {svc.title}
      </h3>

      {/* Description */}
      <p
        className="text-[#5A5A68] group-hover:text-[#9B9BA6]"
        style={{
          fontSize:   '13px',
          lineHeight: '1.65',
          transition: 'color var(--d-base) var(--smooth)',
        }}
      >
        {svc.description}
      </p>

      {/* Subtle radial glow on hover */}
      <div
        className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100"
        style={{
          background: 'radial-gradient(circle at 20% 20%, rgba(0,217,255,0.025) 0%, transparent 55%)',
          transition: 'opacity 0.5s ease',
        }}
      />
    </motion.div>
  );
}

export default function ServicesSection() {
  return (
    <section className="relative py-36 bg-[#020202] overflow-hidden">

      {/* Ambient */}
      <div
        aria-hidden
        className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(0,217,255,0.055) 0%, transparent 65%)',
          filter:     'blur(80px)',
          animation:  'ambientFloat 16s ease-in-out infinite',
          opacity:    0.5,
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-24"
        >
          <div className="section-label mb-7">Servicios</div>
          <div className="max-w-xl">
            <h2 className="t-heading mb-5">
              Todo lo que tu<br />negocio necesita.
            </h2>
            <p
              style={{
                fontSize:   '1.0625rem',
                lineHeight: '1.7',
                color:      '#5A5A68',
                letterSpacing: '-0.005em',
              }}
            >
              Un ecosistema completo de soluciones para transformar,
              automatizar y escalar tu empresa.
            </p>
          </div>
        </motion.div>

        {/* Mosaic grid — gap-px for seamless borders */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px rounded-2xl overflow-hidden"
          style={{
            background:  'rgba(255,255,255,0.05)',
            border:      '1px solid rgba(255,255,255,0.05)',
          }}
        >
          {SERVICES.map((svc) => (
            <ServiceCard key={svc.id} svc={svc} />
          ))}
        </motion.div>

        {/* Bottom rule */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 flex flex-col sm:flex-row items-center justify-between gap-4 pt-6"
          style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}
        >
          <p style={{ fontSize: '13px', color: '#3D3D48' }}>
            ¿Tienes un requerimiento específico?
          </p>
          <motion.a
            href="#contacto"
            whileHover={{ x: 3 }}
            transition={{ duration: 0.2 }}
            className="btn-ghost"
            style={{ padding: '0.5625rem 1.125rem', fontSize: '13.5px' }}
          >
            Cuéntanos tu proyecto
            <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden>
              <path d="M2.5 6.5h8M7 3.5l3 3-3 3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
