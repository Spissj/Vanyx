'use client';

import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from 'framer-motion';
import { useEffect, useRef } from 'react';

/* ═══════════════════════════════════════════════════════════
   MAGNETIC BUTTON — "Apple-style" organic hover
   ═══════════════════════════════════════════════════════════ */
function MagneticButton({
  children,
  href,
  variant = 'primary',
  className = '',
}: {
  children: React.ReactNode;
  href: string;
  variant?: 'primary' | 'ghost';
  className?: string;
}) {
  const ref   = useRef<HTMLAnchorElement>(null);
  const mx    = useMotionValue(0);
  const my    = useMotionValue(0);
  const gx    = useMotionValue(50); // glow x %
  const gy    = useMotionValue(50); // glow y %
  const sx    = useSpring(mx, { stiffness: 180, damping: 18, mass: 0.6 });
  const sy    = useSpring(my, { stiffness: 180, damping: 18, mass: 0.6 });

  const onMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const r  = ref.current.getBoundingClientRect();
    const dx = e.clientX - (r.left + r.width  / 2);
    const dy = e.clientY - (r.top  + r.height / 2);
    mx.set(dx * 0.22);
    my.set(dy * 0.22);
    gx.set(((e.clientX - r.left) / r.width)  * 100);
    gy.set(((e.clientY - r.top)  / r.height) * 100);
  };

  const onLeave = () => {
    mx.set(0);
    my.set(0);
    gx.set(50);
    gy.set(50);
  };

  return (
    <motion.a
      ref={ref}
      href={href}
      style={{ x: sx, y: sy }}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      whileTap={{ scale: 0.97 }}
      className={`${variant === 'primary' ? 'btn-primary' : 'btn-ghost'} ${className}`}
    >
      {children}
    </motion.a>
  );
}

/* ═══════════════════════════════════════════════════════════
   WORD REVEAL — per-word spring entrance
   ═══════════════════════════════════════════════════════════ */

function HeadlineWord({
  text,
  cyan,
  index,
}: {
  text: string; cyan: boolean; index: number;
}) {
  return (
    <motion.span
      className={`inline-block ${cyan ? 'text-gradient-cyan text-glow' : ''}`}
      initial={{ opacity: 0, y: 28, filter: 'blur(10px)' }}
      animate={{ opacity: 1,  y: 0,  filter: 'blur(0px)' }}
      transition={{
        delay:    0.45 + index * 0.085,
        duration: 0.75,
        ease:     [0.16, 1, 0.3, 1],
      }}
    >
      {text}
    </motion.span>
  );
}

/* ═══════════════════════════════════════════════════════════
   METRICS ROW
   ═══════════════════════════════════════════════════════════ */
const METRICS = [
  { value: '50+',  label: 'Proyectos' },
  { value: '30+',  label: 'Clientes'  },
  { value: '5+',   label: 'Años'      },
  { value: '24/7', label: 'Soporte'   },
];

/* ═══════════════════════════════════════════════════════════
   HERO SECTION
   ═══════════════════════════════════════════════════════════ */
export default function HeroSection() {
  /* Smooth mouse parallax for the ambient glow */
  const rawX    = useMotionValue(0.5);
  const rawY    = useMotionValue(0.5);
  const springX = useSpring(rawX, { stiffness: 60, damping: 30, mass: 1 });
  const springY = useSpring(rawY, { stiffness: 60, damping: 30, mass: 1 });

  /* Transform [0,1] → offset range [-25px, 25px] */
  const orbX = useTransform(springX, [0, 1], [-25, 25]);
  const orbY = useTransform(springY, [0, 1], [-18, 18]);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      rawX.set(e.clientX / window.innerWidth);
      rawY.set(e.clientY / window.innerHeight);
    };
    window.addEventListener('mousemove', onMove, { passive: true });
    return () => window.removeEventListener('mousemove', onMove);
  }, [rawX, rawY]);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#020202]">

      {/* ══ LAYER 0 — Noise grain ══════════════════════════ */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-[1]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.7' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundSize: '220px 220px',
          opacity: 0.022,
          mixBlendMode: 'screen',
        }}
      />

      {/* ══ LAYER 1 — Central stage light (top-down cone) ═ */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-[2]"
        style={{
          background: `
            radial-gradient(
              ellipse 65% 55% at 50% -5%,
              rgba(0,217,255,0.09) 0%,
              rgba(0,130,200,0.05) 45%,
              transparent 75%
            )
          `,
        }}
      />

      {/* ══ LAYER 2 — Parallax ambient orb (mouse-linked) ═ */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute z-[3]"
        style={{
          width: '55vw',
          height: '55vw',
          maxWidth: '760px',
          maxHeight: '760px',
          top: '5%',
          left: '50%',
          x: orbX,
          y: orbY,
          translateX: '-50%',
          background: 'radial-gradient(circle, rgba(0,217,255,0.065) 0%, rgba(0,80,180,0.03) 50%, transparent 72%)',
          filter: 'blur(55px)',
          animation: 'ambientFloat 14s ease-in-out infinite',
        }}
      />

      {/* ══ LAYER 3 — Dot grid ════════════════════════════ */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-[4]"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.10) 1px, transparent 1px)',
          backgroundSize: '44px 44px',
          maskImage:
            'radial-gradient(ellipse 75% 70% at 50% 38%, black 30%, transparent 100%)',
          WebkitMaskImage:
            'radial-gradient(ellipse 75% 70% at 50% 38%, black 30%, transparent 100%)',
          opacity: 0.20,
        }}
      />

      {/* ══ LAYER 4 — Horizon perspective grid ═══════════ */}
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 left-0 right-0 z-[5]"
        style={{
          height: '38vh',
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)
          `,
          backgroundSize: '70px 70px',
          transform: 'perspective(500px) rotateX(25deg)',
          transformOrigin: 'bottom center',
          maskImage: 'linear-gradient(to bottom, transparent 0%, black 35%, black 75%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 35%, black 75%, transparent 100%)',
        }}
      />

      {/* ══ LAYER 5 — Horizon glow line ══════════════════ */}
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-[22vh] left-0 right-0 z-[6]"
        style={{
          height: '1px',
          background:
            'linear-gradient(90deg, transparent 5%, rgba(0,217,255,0.22) 25%, rgba(0,217,255,0.45) 50%, rgba(0,217,255,0.22) 75%, transparent 95%)',
        }}
      />

      {/* ══ CONTENT ══════════════════════════════════════ */}
      <div className="relative z-10 w-full mx-auto max-w-5xl px-6 pt-28 pb-16 flex flex-col items-center text-center">

        {/* ─ Badge ─ */}
        <motion.div
          initial={{ opacity: 0, y: -12, scale: 0.94 }}
          animate={{ opacity: 1,  y:  0,  scale: 1    }}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="mb-10"
        >
          <div className="section-label">
            <span className="dot-live" />
            Soluciones de tecnología de próxima generación
          </div>
        </motion.div>

        {/* ─ Headline ─ */}
        <h1
          className="t-display mb-7 max-w-4xl"
          style={{ fontFamily: "'Sora', system-ui, sans-serif" }}
        >
          {/* line 1 */}
          <span className="block">
            <HeadlineWord text="Automatizamos" cyan={false} index={0} />
            {' '}
            <HeadlineWord text="el" cyan={false} index={1} />
          </span>
          {/* line 2 */}
          <span className="block">
            <HeadlineWord text="futuro" cyan={true} index={2} />
            {' '}
            <HeadlineWord text="de tu" cyan={false} index={3} />
          </span>
          {/* line 3 */}
          <span className="block">
            <HeadlineWord text="negocio." cyan={false} index={4} />
          </span>
        </h1>

        {/* ─ Sub-headline ─ */}
        <motion.p
          initial={{ opacity: 0, y: 16, filter: 'blur(6px)' }}
          animate={{ opacity: 1,  y:  0,  filter: 'blur(0px)' }}
          transition={{ delay: 0.9, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12 max-w-[480px]"
          style={{
            fontSize: '1.125rem',
            lineHeight: '1.7',
            color: '#7A7A8A',
            letterSpacing: '-0.005em',
          }}
        >
          Desarrollo web, automatización IA y software empresarial.
          Convertimos tu visión en una ventaja competitiva real.
        </motion.p>

        {/* ─ CTAs ─ */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1,  y:  0  }}
          transition={{ delay: 1.05, duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20"
        >
          <MagneticButton href="#contacto" variant="primary">
            Agenda una reunión
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
              <path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </MagneticButton>

          <MagneticButton href="#servicios" variant="ghost">
            Explorar servicios
          </MagneticButton>
        </motion.div>

        {/* ─ Metrics ─ */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.25, duration: 0.8 }}
          className="w-full max-w-2xl"
        >
          <div
            className="mb-8 h-px"
            style={{
              background:
                'linear-gradient(90deg, transparent, rgba(255,255,255,0.08) 30%, rgba(255,255,255,0.08) 70%, transparent)',
            }}
          />

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-y-6">
            {METRICS.map((m, i) => (
              <motion.div
                key={m.label}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1,  y:  0  }}
                transition={{ delay: 1.3 + i * 0.08, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="text-center px-4"
                style={{
                  borderRight: i < 3
                    ? '1px solid rgba(255,255,255,0.06)'
                    : 'none',
                }}
              >
                <div
                  style={{
                    fontFamily: "'Sora', system-ui, sans-serif",
                    fontSize:    '2rem',
                    fontWeight:  700,
                    letterSpacing: '-0.04em',
                    lineHeight:  1,
                    marginBottom: '0.375rem',
                    background:  'linear-gradient(160deg, #F5F5F5 0%, rgba(245,245,245,0.65) 100%)',
                    WebkitBackgroundClip: 'text',
                    backgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  {m.value}
                </div>
                <div
                  style={{
                    fontSize:      '0.6875rem',
                    fontWeight:    600,
                    letterSpacing: '0.11em',
                    textTransform: 'uppercase',
                    color:         '#3D3D48',
                  }}
                >
                  {m.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>

      {/* ══ SCROLL INDICATOR ═════════════════════════════ */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2.5"
        aria-hidden
      >
        <span
          style={{
            fontSize:      '0.625rem',
            fontWeight:    700,
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color:         '#2E2E38',
          }}
        >
          Scroll
        </span>
        <div
          className="relative overflow-hidden"
          style={{ width: '1px', height: '44px', background: 'rgba(255,255,255,0.06)' }}
        >
          <motion.div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '50%',
              background: 'linear-gradient(to bottom, transparent, #00D9FF, transparent)',
              animation: 'scrollLine 2s cubic-bezier(0.4,0,0.2,1) infinite',
              animationDelay: '0.5s',
            }}
          />
        </div>
      </motion.div>

      {/* ══ BOTTOM SCAN BEAM ══════════════════════════════ */}
      <div
        aria-hidden
        className="absolute bottom-0 left-0 right-0 z-10 overflow-hidden"
        style={{ height: '1px' }}
      >
        <div
          style={{
            height: '100%',
            width: '40%',
            background:
              'linear-gradient(90deg, transparent, rgba(0,217,255,0.7), transparent)',
            animation: 'beamSlide 5s cubic-bezier(0.4,0,0.6,1) infinite',
            animationDelay: '1s',
          }}
        />
      </div>

    </section>
  );
}
