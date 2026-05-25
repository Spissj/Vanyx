'use client';

import { motion, useInView } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

/* ── Animated counter ──────────────────────────────────────── */
function useCounter(target: number, dur = 1600, active = false) {
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!active) return;
    let raf: number;
    const start = performance.now();
    const tick  = (now: number) => {
      const t    = Math.min((now - start) / dur, 1);
      const ease = 1 - Math.pow(1 - t, 3); // ease-out-cubic
      setN(Math.floor(ease * target));
      if (t < 1) raf = requestAnimationFrame(tick);
      else setN(target);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, dur, active]);
  return n;
}

/* ── Data ──────────────────────────────────────────────────── */
const STATS = [
  { target: 50,  suffix: '+', label: 'Proyectos' },
  { target: 30,  suffix: '+', label: 'Clientes'  },
  { target: 5,   suffix: '+', label: 'Años'       },
  { target: 100, suffix: '%', label: 'Calidad'    },
];

const VALUES = [
  {
    title: 'Innovación',
    body:  'Adoptamos lo mejor de la tecnología actual para que siempre estés un paso adelante.',
    icon: (
      <svg width="17" height="17" viewBox="0 0 17 17" fill="none">
        <circle cx="8.5" cy="8.5" r="2.5" stroke="currentColor" strokeWidth="1.35"/>
        <path d="M8.5 1.5v2M8.5 13.5v2M1.5 8.5h2M13.5 8.5h2" stroke="currentColor" strokeWidth="1.35" strokeLinecap="round"/>
        <path d="M3.5 3.5l1.5 1.5M12 12l1.5 1.5M3.5 13.5l1.5-1.5M12 5l1.5-1.5" stroke="currentColor" strokeWidth="1.35" strokeLinecap="round" strokeOpacity="0.45"/>
      </svg>
    ),
  },
  {
    title: 'Calidad',
    body:  'Entregamos productos rigurosos que superan expectativas en cada iteración.',
    icon: (
      <svg width="17" height="17" viewBox="0 0 17 17" fill="none">
        <path d="M8.5 1.5l2 5.5h5.5l-4.5 3.5 1.7 5.5-4.7-3.2-4.7 3.2 1.7-5.5L1 7h5.5L8.5 1.5z" stroke="currentColor" strokeWidth="1.35" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: 'Confiabilidad',
    body:  'Tu socio tecnológico disponible cuando lo necesites, con respuesta real.',
    icon: (
      <svg width="17" height="17" viewBox="0 0 17 17" fill="none">
        <path d="M8.5 1.5L15 5v4.5c0 3.8-2.8 7-6.5 7C4.8 16.5 2 13.3 2 9.5V5l6.5-3.5z" stroke="currentColor" strokeWidth="1.35" strokeLinejoin="round"/>
        <path d="M6 8.5l2 2 4-4" stroke="currentColor" strokeWidth="1.35" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: 'Escalabilidad',
    body:  'Arquitecturas preparadas para crecer sin cuellos de botella ni deuda técnica.',
    icon: (
      <svg width="17" height="17" viewBox="0 0 17 17" fill="none">
        <path d="M2.5 12l4-4 3 3 4.5-5.5 2 2" stroke="currentColor" strokeWidth="1.35" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M13.5 6h2v2" stroke="currentColor" strokeWidth="1.35" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
];

const FEATURES = [
  'Equipo multidisciplinario de expertos',
  'Resultados medibles desde el primer sprint',
  'Tecnología actual, siempre actualizada',
  'Arquitecturas escalables a largo plazo',
];

/* ── Stat card ─────────────────────────────────────────────── */
function StatCard({ stat, active }: { stat: typeof STATS[0]; active: boolean }) {
  const n = useCounter(stat.target, 1500, active);
  return (
    <div className="text-center px-4 py-2">
      <div
        style={{
          fontFamily:    "'Sora', system-ui, sans-serif",
          fontSize:      '2.5rem',
          fontWeight:    700,
          letterSpacing: '-0.045em',
          lineHeight:    1,
          marginBottom:  '0.5rem',
          background:    'linear-gradient(140deg, #00D9FF 0%, #40E8FF 50%, #009FBB 100%)',
          WebkitBackgroundClip: 'text',
          backgroundClip:      'text',
          WebkitTextFillColor: 'transparent',
        }}
      >
        {n}{stat.suffix}
      </div>
      <div
        style={{
          fontSize:      '11px',
          fontWeight:    600,
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
          color:         '#3D3D48',
        }}
      >
        {stat.label}
      </div>
    </div>
  );
}

export default function AboutSection() {
  const statsRef = useRef<HTMLDivElement>(null);
  const inView   = useInView(statsRef, { once: true, margin: '-80px' });

  return (
    <section className="relative py-36 bg-[#020202] overflow-hidden">

      {/* Ambient — bottom right */}
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 right-0 rounded-full"
        style={{
          width:      '500px',
          height:     '500px',
          background: 'radial-gradient(circle, rgba(0,80,220,0.04) 0%, transparent 70%)',
          filter:     'blur(80px)',
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6">

        {/* ─ Section header ─ */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-24 text-center max-w-3xl mx-auto"
        >
          <div className="section-label mb-7 justify-center">Sobre VANYX</div>
          <h2 className="t-heading mb-5">
            Tecnología que{' '}
            <span className="text-gradient-cyan">transforma</span>{' '}
            negocios.
          </h2>
          <p
            style={{
              fontSize:   '1.0625rem',
              lineHeight: '1.7',
              color:      '#5A5A68',
              letterSpacing: '-0.005em',
            }}
          >
            Somos especialistas en convertir ideas complejas en productos
            que generan impacto medible desde el primer día.
          </p>
        </motion.div>

        {/* ─ Main split ─ */}
        <div className="grid lg:grid-cols-[1fr_420px] gap-16 items-center mb-24">

          {/* Left — copy */}
          <motion.div
            initial={{ opacity: 0, x: -20, filter: 'blur(6px)' }}
            whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
          >
            <h3
              className="mb-5"
              style={{
                fontFamily:    "'Sora', system-ui, sans-serif",
                fontSize:      '1.625rem',
                fontWeight:    700,
                letterSpacing: '-0.025em',
                lineHeight:    '1.2',
                color:         '#F5F5F5',
              }}
            >
              Nuestra visión
            </h3>
            <p style={{ fontSize: '1rem', lineHeight: '1.75', color: '#5A5A68', marginBottom: '1rem' }}>
              En VANYX creemos que la tecnología debe ser accesible y poderosa.
              Trabajamos con empresas de todos los tamaños para crear soluciones
              que generan impacto desde el primer día.
            </p>
            <p style={{ fontSize: '1rem', lineHeight: '1.75', color: '#5A5A68', marginBottom: '2.5rem' }}>
              Combinamos experiencia en desarrollo, IA, automatización y
              seguridad para construir el stack tecnológico que tu empresa
              necesita para crecer.
            </p>

            {/* Features */}
            <div className="space-y-3">
              {FEATURES.map((f, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -14 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] }}
                  className="flex items-start gap-3"
                >
                  <div
                    className="flex-shrink-0 mt-0.5 w-[18px] h-[18px] rounded-full flex items-center justify-center"
                    style={{
                      background: 'rgba(0,217,255,0.07)',
                      border:     '1px solid rgba(0,217,255,0.22)',
                    }}
                  >
                    <svg width="9" height="9" viewBox="0 0 9 9" fill="none">
                      <path d="M1.5 4.5l2 2 4-4" stroke="#00D9FF" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span style={{ fontSize: '14px', color: '#7A7A8A', lineHeight: '1.6' }}>
                    {f}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right — stats panel */}
          <motion.div
            ref={statsRef}
            initial={{ opacity: 0, x: 20, filter: 'blur(6px)' }}
            whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
          >
            <div
              className="rounded-2xl p-10 relative overflow-hidden"
              style={{
                background: 'rgba(0,217,255,0.025)',
                border:     '1px solid rgba(0,217,255,0.12)',
              }}
            >
              {/* Top beam */}
              <div
                className="absolute top-0 left-0 right-0 h-[1px]"
                style={{
                  background: 'linear-gradient(90deg, transparent, rgba(0,217,255,0.45), transparent)',
                }}
              />
              {/* Inner glow */}
              <div
                aria-hidden
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: 'radial-gradient(ellipse 80% 50% at 50% 0%, rgba(0,217,255,0.05) 0%, transparent 60%)',
                }}
              />

              <div className="relative grid grid-cols-2 gap-8">
                {STATS.map((s) => (
                  <StatCard key={s.label} stat={s} active={inView} />
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* ─ Values ─ */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <p
            className="text-center mb-10"
            style={{ fontSize: '13px', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#3D3D48' }}
          >
            Principios
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {VALUES.map((v, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.09, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -4, transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] } }}
                className="card p-7 group"
              >
                <div
                  className="mb-5 group-hover:[color:rgba(0,217,255,0.7)] transition-colors duration-300"
                  style={{ color: '#3D3D48' }}
                >
                  {v.icon}
                </div>
                <h4
                  className="mb-2 group-hover:[color:#F5F5F5] transition-colors duration-300"
                  style={{ fontSize: '13.5px', fontWeight: 600, letterSpacing: '-0.01em', color: '#7A7A8A' }}
                >
                  {v.title}
                </h4>
                <p style={{ fontSize: '12.5px', lineHeight: '1.65', color: '#3D3D48' }}>
                  {v.body}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ─ CTA banner ─ */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="mt-20 rounded-2xl p-14 text-center relative overflow-hidden"
          style={{
            background: 'rgba(0,217,255,0.025)',
            border:     '1px solid rgba(0,217,255,0.10)',
          }}
        >
          {/* Top beam */}
          <div
            aria-hidden
            className="absolute top-0 left-0 right-0 h-[1px]"
            style={{
              background: 'linear-gradient(90deg, transparent, rgba(0,217,255,0.4), transparent)',
            }}
          />
          <div
            aria-hidden
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'radial-gradient(ellipse 60% 60% at 50% 0%, rgba(0,217,255,0.05) 0%, transparent 65%)',
            }}
          />

          <h3
            className="relative mb-4"
            style={{
              fontFamily:    "'Sora', system-ui, sans-serif",
              fontSize:      'clamp(1.4rem, 3vw, 2rem)',
              fontWeight:    700,
              letterSpacing: '-0.025em',
              color:         '#F5F5F5',
            }}
          >
            ¿Listo para transformar tu negocio?
          </h3>
          <p
            className="relative mb-8 mx-auto"
            style={{ fontSize: '1rem', color: '#5A5A68', maxWidth: '420px', lineHeight: '1.65' }}
          >
            Conversemos sobre tus objetivos y construyamos juntos la solución correcta.
          </p>
          <motion.a
            href="#contacto"
            className="btn-primary relative"
            whileHover={{ scale: 1.02, y: -1 }}
            whileTap={{ scale: 0.98 }}
          >
            Comenzar ahora
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
              <path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
