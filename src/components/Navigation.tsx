'use client';

import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

const NAV_ITEMS = [
  { label: 'Inicio',       href: '#inicio'         },
  { label: 'Servicios',    href: '#servicios'       },
  { label: 'Nosotros',     href: '#sobre-nosotros'  },
  { label: 'Portafolio',   href: '#portafolio'      },
  { label: 'Contacto',     href: '#contacto'        },
];

/* ── Logo mark SVG ────────────────────────────────────────── */
function LogoMark() {
  return (
    <div className="flex items-center gap-2.5 select-none">
      <div
        className="relative w-[30px] h-[30px] flex items-center justify-center rounded-[7px] flex-shrink-0"
        style={{
          background: 'linear-gradient(135deg, #00D9FF 0%, #0070CC 100%)',
          boxShadow: '0 0 16px rgba(0,217,255,0.25), inset 0 1px 0 rgba(255,255,255,0.25)',
        }}
      >
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-label="VANYX logo mark">
          <path d="M1.5 1.5h4.5L8.5 7 6 12.5H1.5L4 7 1.5 1.5Z" fill="white" fillOpacity="0.95"/>
          <path d="M7.5 1.5H12L9.5 7 12 12.5H7.5l2.5-5.5L7.5 1.5Z" fill="white" fillOpacity="0.45"/>
        </svg>
      </div>
      <span
        style={{
          fontFamily: "'Sora', system-ui, sans-serif",
          fontSize: '15px',
          fontWeight: 700,
          letterSpacing: '-0.025em',
          color: '#F5F5F5',
        }}
      >
        VANYX
      </span>
    </div>
  );
}

export default function Navigation() {
  const [open,    setOpen]    = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active,  setActive]  = useState('inicio');
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, 'change', (y) => {
    setScrolled(y > 24);
  });

  /* IntersectionObserver for active section */
  useEffect(() => {
    const ids = NAV_ITEMS.map((n) => n.href.slice(1));
    const io  = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: '-35% 0px -60% 0px' }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, []);

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1,  y: 0   }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        background: scrolled ? 'rgba(2,2,2,0.80)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px) saturate(180%)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(20px) saturate(180%)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : '1px solid transparent',
        transition: 'background 0.4s ease, backdrop-filter 0.4s ease, border-color 0.4s ease',
      }}
    >
      <div className="mx-auto max-w-7xl px-6 h-[60px] flex items-center justify-between">

        {/* ── Logo ── */}
        <a href="#inicio" aria-label="VANYX home">
          <motion.div whileHover={{ opacity: 0.80 }} transition={{ duration: 0.15 }}>
            <LogoMark />
          </motion.div>
        </a>

        {/* ── Desktop nav ── */}
        <nav className="hidden md:flex items-center gap-0.5" aria-label="Primary navigation">
          {NAV_ITEMS.map((item) => {
            const isActive = active === item.href.slice(1);
            return (
              <a
                key={item.label}
                href={item.href}
                className="relative px-3.5 py-2 rounded-lg transition-colors duration-200"
                style={{
                  fontSize:   '13.5px',
                  fontWeight:  500,
                  color:       isActive ? '#F5F5F5' : '#5A5A68',
                  letterSpacing: '-0.005em',
                }}
              >
                {item.label}
                {isActive && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-lg"
                    style={{ background: 'rgba(255,255,255,0.055)' }}
                    transition={{ type: 'spring', bounce: 0.18, duration: 0.5 }}
                  />
                )}
              </a>
            );
          })}
        </nav>

        {/* ── CTA ── */}
        <div className="hidden md:block">
          <motion.a
            href="#contacto"
            whileHover={{ scale: 1.02, y: -1 }}
            whileTap={{ scale: 0.98 }}
            className="btn-primary"
            style={{ padding: '0.5rem 1.125rem', fontSize: '13.5px' }}
          >
            Agenda una llamada
            <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden>
              <path d="M2.5 6.5h8M7 3.5l3 3-3 3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </motion.a>
        </div>

        {/* ── Mobile trigger ── */}
        <button
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          className="md:hidden flex flex-col items-center justify-center w-9 h-9 gap-[5px] rounded-lg"
          style={{ background: open ? 'rgba(255,255,255,0.04)' : 'transparent' }}
        >
          <motion.span
            animate={open ? { rotate: 45,  y: 6.5 }  : { rotate: 0,  y: 0 }}
            transition={{ duration: 0.22 }}
            style={{ display: 'block', width: 18, height: 1.5, background: '#7A7A8A', borderRadius: 2, transformOrigin: 'center' }}
          />
          <motion.span
            animate={open ? { scaleX: 0, opacity: 0 } : { scaleX: 1, opacity: 1 }}
            transition={{ duration: 0.18 }}
            style={{ display: 'block', width: 18, height: 1.5, background: '#7A7A8A', borderRadius: 2 }}
          />
          <motion.span
            animate={open ? { rotate: -45, y: -6.5 } : { rotate: 0,  y: 0 }}
            transition={{ duration: 0.22 }}
            style={{ display: 'block', width: 18, height: 1.5, background: '#7A7A8A', borderRadius: 2, transformOrigin: 'center' }}
          />
        </button>
      </div>

      {/* ── Mobile drawer ── */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            className="md:hidden overflow-hidden"
            style={{
              background: 'rgba(2,2,2,0.95)',
              backdropFilter: 'blur(24px)',
              WebkitBackdropFilter: 'blur(24px)',
              borderBottom: '1px solid rgba(255,255,255,0.06)',
            }}
          >
            <div className="px-6 py-5 space-y-1">
              {NAV_ITEMS.map((item, i) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1,  x: 0   }}
                  transition={{ delay: i * 0.04, duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  className="flex items-center px-3 py-3 rounded-lg transition-all duration-200"
                  style={{
                    fontSize: '15px',
                    fontWeight: 500,
                    color: active === item.href.slice(1) ? '#F5F5F5' : '#5A5A68',
                    background: active === item.href.slice(1) ? 'rgba(255,255,255,0.04)' : 'transparent',
                    letterSpacing: '-0.005em',
                  }}
                >
                  {item.label}
                </motion.a>
              ))}
              <div className="pt-3">
                <a
                  href="#contacto"
                  onClick={() => setOpen(false)}
                  className="btn-primary w-full justify-center"
                  style={{ fontSize: '14px' }}
                >
                  Agenda una llamada
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
