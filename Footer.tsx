'use client';

import { motion } from 'framer-motion';

const LINKS = {
  Producto: [
    { label: 'Servicios',   href: '#servicios'      },
    { label: 'Portafolio',  href: '#portafolio'     },
    { label: 'Tecnologías', href: '#'               },
    { label: 'Precios',     href: '#'               },
  ],
  Empresa: [
    { label: 'Sobre Nosotros', href: '#sobre-nosotros' },
    { label: 'Blog',           href: '#'               },
    { label: 'Carreras',       href: '#'               },
    { label: 'Contacto',       href: '#contacto'       },
  ],
  Legal: [
    { label: 'Privacidad', href: '#' },
    { label: 'Términos',   href: '#' },
    { label: 'Cookies',    href: '#' },
  ],
};

const SOCIAL = [
  {
    label: 'GitHub',
    href: '#',
    icon: <svg width="15" height="15" viewBox="0 0 16 16" fill="currentColor"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/></svg>,
  },
  {
    label: 'LinkedIn',
    href: '#',
    icon: <svg width="15" height="15" viewBox="0 0 16 16" fill="currentColor"><path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 01.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/></svg>,
  },
  {
    label: 'Twitter/X',
    href: '#',
    icon: <svg width="15" height="15" viewBox="0 0 16 16" fill="currentColor"><path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"/></svg>,
  },
  {
    label: 'Instagram',
    href: '#',
    icon: <svg width="15" height="15" viewBox="0 0 16 16" fill="currentColor"><path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 00-1.417.923A3.927 3.927 0 00.42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 001.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 00-.923-1.417A3.911 3.911 0 0013.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 01-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 01-.92-.598 2.48 2.48 0 01-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 100 1.92.96.96 0 000-1.92zm-4.27 1.122a4.109 4.109 0 100 8.217 4.109 4.109 0 000-8.217zm0 1.441a2.667 2.667 0 110 5.334 2.667 2.667 0 010-5.334z"/></svg>,
  },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="relative bg-[#020202] overflow-hidden"
      style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}
    >
      {/* Ambient glow from top border */}
      <div
        aria-hidden
        className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2"
        style={{
          width:      '700px',
          height:     '280px',
          background: 'radial-gradient(ellipse at top, rgba(0,217,255,0.04) 0%, transparent 65%)',
          filter:     'blur(30px)',
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6">

        {/* Main grid */}
        <div className="py-16 grid grid-cols-2 md:grid-cols-5 gap-10 md:gap-14">

          {/* Brand col */}
          <div className="col-span-2">
            {/* Logo */}
            <div className="flex items-center gap-2.5 mb-5">
              <div
                className="w-[28px] h-[28px] flex items-center justify-center rounded-[7px] flex-shrink-0"
                style={{
                  background: 'linear-gradient(135deg, #00D9FF 0%, #0070CC 100%)',
                  boxShadow:  '0 0 14px rgba(0,217,255,0.22), inset 0 1px 0 rgba(255,255,255,0.22)',
                }}
              >
                <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
                  <path d="M1.5 1.5h4.5L8.5 7 6 12.5H1.5L4 7 1.5 1.5Z" fill="white" fillOpacity="0.95"/>
                  <path d="M7.5 1.5H12L9.5 7 12 12.5H7.5l2.5-5.5L7.5 1.5Z" fill="white" fillOpacity="0.45"/>
                </svg>
              </div>
              <span
                style={{
                  fontFamily: "'Sora', system-ui, sans-serif",
                  fontSize:   '14.5px',
                  fontWeight:  700,
                  letterSpacing: '-0.025em',
                  color:      '#F5F5F5',
                }}
              >
                VANYX
              </span>
            </div>

            <p
              style={{
                fontSize:   '13px',
                lineHeight: '1.7',
                color:      '#3D3D48',
                maxWidth:   '210px',
                marginBottom: '1.25rem',
              }}
            >
              Tecnología avanzada que transforma negocios en ventajas competitivas sostenibles.
            </p>

            {/* Email in mono */}
            <p
              style={{
                fontFamily:    'ui-monospace, "SF Mono", monospace',
                fontSize:      '11.5px',
                color:         '#2E2E38',
                letterSpacing: '0.04em',
                marginBottom:  '1.5rem',
              }}
            >
              hola@vanyx.com
            </p>

            {/* Social */}
            <div className="flex gap-2">
              {SOCIAL.map((s) => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  whileHover={{ y: -2, transition: { duration: 0.2 } }}
                  className="w-8 h-8 rounded-lg flex items-center justify-center"
                  style={{
                    background:  'transparent',
                    border:      '1px solid rgba(255,255,255,0.07)',
                    color:       '#3D3D48',
                    transition:  'border-color 0.2s ease, color 0.2s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(0,217,255,0.20)';
                    e.currentTarget.style.color       = '#7A7A8A';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)';
                    e.currentTarget.style.color       = '#3D3D48';
                  }}
                >
                  {s.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(LINKS).map(([category, links]) => (
            <div key={category}>
              <h4
                style={{
                  fontSize:      '10.5px',
                  fontWeight:    700,
                  letterSpacing: '0.13em',
                  textTransform: 'uppercase',
                  color:         '#2E2E38',
                  marginBottom:  '1.25rem',
                }}
              >
                {category}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <motion.a
                      href={link.href}
                      whileHover={{ x: 2, transition: { duration: 0.15 } }}
                      style={{ fontSize: '13px', color: '#3D3D48', transition: 'color 0.2s ease', display: 'inline-block' }}
                      onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = '#7A7A8A'; }}
                      onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = '#3D3D48'; }}
                    >
                      {link.label}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div
          style={{
            height:     '1px',
            background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.07) 30%, rgba(255,255,255,0.07) 70%, transparent)',
          }}
        />

        {/* CTA strip */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="my-8 flex flex-col sm:flex-row items-center justify-between gap-4 p-5 rounded-xl"
          style={{
            background: 'rgba(255,255,255,0.018)',
            border:     '1px solid rgba(255,255,255,0.06)',
          }}
        >
          <div>
            <p style={{ fontSize: '14px', fontWeight: 600, color: '#9B9BA6', marginBottom: '2px', letterSpacing: '-0.01em' }}>
              ¿Listo para el próximo nivel?
            </p>
            <p style={{ fontSize: '12.5px', color: '#3D3D48' }}>
              Agenda una llamada gratuita con nuestro equipo.
            </p>
          </div>
          <motion.a
            href="#contacto"
            className="btn-primary flex-shrink-0"
            style={{ padding: '0.5625rem 1.25rem', fontSize: '13.5px' }}
            whileHover={{ scale: 1.02, y: -1 }}
            whileTap={{ scale: 0.98 }}
          >
            Agendar llamada
            <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden>
              <path d="M2.5 6.5h8M7 3.5l3 3-3 3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </motion.a>
        </motion.div>

        {/* Bottom bar */}
        <div
          className="pb-8 flex flex-col sm:flex-row items-center justify-between gap-3"
          style={{ fontSize: '12px', color: '#2E2E38' }}
        >
          <p>© {year} VANYX. Todos los derechos reservados.</p>
          <p>
            Hecho con <span style={{ color: '#00D9FF', margin: '0 2px' }}>♥</span> en Santiago, Chile
          </p>
        </div>
      </div>
    </footer>
  );
}
