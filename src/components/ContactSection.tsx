'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

/* ── Types ─────────────────────────────────────────────────── */
interface Form { name: string; email: string; company: string; service: string; message: string; }
type Status = 'idle' | 'sending' | 'ok' | 'err';

const METHODS = [
  {
    label: 'Email',
    value: 'vanyx.ia@gmail.com',
    href:  'mailto:vanyx.ia@gmail.com',
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <rect x="2" y="3.5" width="14" height="11" rx="1.5" stroke="currentColor" strokeWidth="1.35"/>
        <path d="M2 6l7 5 7-5" stroke="currentColor" strokeWidth="1.35" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    label: 'WhatsApp',
    value: '+56 9 7398 8413',
    href:  'https://wa.me/56973988413',
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <circle cx="9" cy="9" r="7.25" stroke="currentColor" strokeWidth="1.35"/>
        <path d="M5.5 9C5.5 7.07 7.07 5.5 9 5.5s3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5c-.9 0-1.72-.34-2.34-.9L4 13l1.4-2.66A3.48 3.48 0 015.5 9z" stroke="currentColor" strokeWidth="1.35" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    label: 'Ubicación',
    value: 'Santiago, Chile',
    href:  '#',
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <path d="M9 1.5a6 6 0 016 6c0 4-6 9-6 9s-6-5-6-9a6 6 0 016-6z" stroke="currentColor" strokeWidth="1.35"/>
        <circle cx="9" cy="7.5" r="2" stroke="currentColor" strokeWidth="1.35"/>
      </svg>
    ),
  },
  {
    label: 'Horario',
    value: 'Lun–Vie, 9–18 h',
    href:  '#',
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <circle cx="9" cy="9" r="7.25" stroke="currentColor" strokeWidth="1.35"/>
        <path d="M9 5.5V9l2.5 2.5" stroke="currentColor" strokeWidth="1.35" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
];

const REASONS = [
  { title: 'Respuesta en < 24 h',  body: 'Respondemos el mismo día hábil con propuesta concreta.' },
  { title: 'Primera consulta libre', body: 'Sin costo para entender tu proyecto y sus necesidades.' },
  { title: 'Equipo senior',        body: 'Cada proyecto lo lidera un especialista experimentado.'  },
  { title: 'Acompañamiento total', body: 'Soporte activo durante y después del lanzamiento.'        },
];

const SERVICES_OPTS = [
  ['web',  'Desarrollo Web'],
  ['ia',   'Automatización IA'],
  ['chat', 'Chatbots IA'],
  ['ent',  'Sistemas Empresariales'],
  ['mkt',  'Marketing IA'],
  ['sft',  'Software a Medida'],
  ['sec',  'Ciberseguridad'],
  ['spt',  'Soporte TI'],
];

/* ── Label ─────────────────────────────────────────────────── */
function FieldLabel({ htmlFor, children, required = false }: { htmlFor: string; children: React.ReactNode; required?: boolean }) {
  return (
    <label htmlFor={htmlFor} style={{ display: 'block', fontSize: '12.5px', fontWeight: 500, color: '#7A7A8A', marginBottom: '0.5rem', letterSpacing: '-0.005em' }}>
      {children}{required && <span style={{ color: '#00D9FF', marginLeft: '2px' }}>*</span>}
    </label>
  );
}

export default function ContactSection() {
  const [form, setForm]     = useState<Form>({ name: '', email: '', company: '', service: '', message: '' });
  const [status, setStatus] = useState<Status>('idle');

  const set = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    await new Promise((r) => setTimeout(r, 1800));
    setStatus('ok');
    setForm({ name: '', email: '', company: '', service: '', message: '' });
    setTimeout(() => setStatus('idle'), 4000);
  };

  return (
    <section className="relative py-36 bg-[#020202] overflow-hidden">

      {/* Ambient */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div style={{ position: 'absolute', top: 0, left: '20%', width: '600px', height: '600px', background: 'radial-gradient(circle, rgba(0,217,255,0.04) 0%, transparent 65%)', filter: 'blur(90px)' }} />
        <div style={{ position: 'absolute', bottom: 0, right: 0, width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(0,80,200,0.03) 0%, transparent 65%)', filter: 'blur(80px)' }} />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 max-w-2xl"
        >
          <div className="section-label mb-7">Contacto</div>
          <h2 className="t-heading mb-5">
            Hablemos de tu<br />próximo proyecto.
          </h2>
          <p style={{ fontSize: '1.0625rem', lineHeight: '1.7', color: '#5A5A68', letterSpacing: '-0.005em' }}>
            Cuéntanos qué necesitas y te respondemos con una
            propuesta concreta en menos de 24 horas.
          </p>
        </motion.div>

        {/* Contact method strip */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-16"
        >
          {METHODS.map((m) => (
            <motion.a
              key={m.label}
              href={m.href}
              target={m.href.startsWith('http') ? '_blank' : undefined}
              rel={m.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              whileHover={{ y: -3, transition: { duration: 0.25, ease: [0.16, 1, 0.3, 1] } }}
              className="flex items-center gap-3.5 p-5 rounded-xl"
              style={{
                background:  'rgba(255,255,255,0.02)',
                border:      '1px solid rgba(255,255,255,0.06)',
                transition:  'border-color 0.25s ease, background 0.25s ease',
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget;
                el.style.borderColor = 'rgba(0,217,255,0.18)';
                el.style.background  = 'rgba(0,217,255,0.025)';
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget;
                el.style.borderColor = 'rgba(255,255,255,0.06)';
                el.style.background  = 'rgba(255,255,255,0.02)';
              }}
            >
              <div
                className="flex-shrink-0 w-9 h-9 rounded-lg flex items-center justify-center"
                style={{
                  background: 'rgba(0,217,255,0.07)',
                  border:     '1px solid rgba(0,217,255,0.14)',
                  color:      '#00D9FF',
                }}
              >
                {m.icon}
              </div>
              <div className="min-w-0">
                <div style={{ fontSize: '10.5px', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#5A5A68', marginBottom: '2px' }}>
                  {m.label}
                </div>
                <div style={{ fontSize: '13.5px', color: '#9B9BA6', fontWeight: 500, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                  {m.value}
                </div>
              </div>
            </motion.a>
          ))}
        </motion.div>

        {/* Main grid */}
        <div className="grid lg:grid-cols-[1fr_360px] gap-8">

          {/* ─ Form ─ */}
          <motion.div
            initial={{ opacity: 0, x: -20, filter: 'blur(5px)' }}
            whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
          >
            <div
              className="rounded-2xl p-9 relative overflow-hidden"
              style={{
                background: 'rgba(0,217,255,0.022)',
                border:     '1px solid rgba(0,217,255,0.10)',
              }}
            >
              {/* Top beam */}
              <div
                aria-hidden
                className="absolute top-0 left-0 right-0 h-[1px]"
                style={{ background: 'linear-gradient(90deg, transparent, rgba(0,217,255,0.45), transparent)' }}
              />
              {/* Inner ambient */}
              <div
                aria-hidden
                className="absolute inset-0 pointer-events-none"
                style={{ background: 'radial-gradient(ellipse 70% 40% at 50% 0%, rgba(0,217,255,0.04) 0%, transparent 60%)' }}
              />

              <h3
                className="relative mb-8"
                style={{ fontFamily: "'Sora', system-ui, sans-serif", fontSize: '1.125rem', fontWeight: 600, letterSpacing: '-0.02em', color: '#D4D4D8' }}
              >
                Envíanos un mensaje
              </h3>

              <form onSubmit={submit} className="relative space-y-5">
                {/* Row 1 */}
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <FieldLabel htmlFor="name" required>Nombre</FieldLabel>
                    <input id="name" name="name" type="text" value={form.name} onChange={set} required placeholder="Tu nombre" className="input-premium" />
                  </div>
                  <div>
                    <FieldLabel htmlFor="email" required>Email</FieldLabel>
                    <input id="email" name="email" type="email" value={form.email} onChange={set} required placeholder="tu@empresa.com" className="input-premium" />
                  </div>
                </div>

                {/* Row 2 */}
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <FieldLabel htmlFor="company">Empresa</FieldLabel>
                    <input id="company" name="company" type="text" value={form.company} onChange={set} placeholder="Nombre de tu empresa" className="input-premium" />
                  </div>
                  <div>
                    <FieldLabel htmlFor="service">Servicio</FieldLabel>
                    <select id="service" name="service" value={form.service} onChange={set} className="input-premium" style={{ colorScheme: 'dark' }}>
                      <option value="">Seleccionar...</option>
                      {SERVICES_OPTS.map(([v, l]) => <option key={v} value={v}>{l}</option>)}
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <FieldLabel htmlFor="message" required>Mensaje</FieldLabel>
                  <textarea
                    id="message" name="message" value={form.message} onChange={set}
                    required rows={5}
                    placeholder="Cuéntanos sobre tu proyecto, objetivos y plazos..."
                    className="input-premium resize-none"
                  />
                </div>

                {/* Status feedback */}
                {status === 'ok' && (
                  <motion.div
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-3 p-4 rounded-xl"
                    style={{ background: 'rgba(16,185,129,0.08)', border: '1px solid rgba(16,185,129,0.18)', color: '#6EE7B7', fontSize: '13.5px' }}
                  >
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none"><circle cx="7.5" cy="7.5" r="6.5" stroke="currentColor" strokeWidth="1.3"/><path d="M4.5 7.8l2 2 4-4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    Mensaje enviado. Te contactaremos pronto.
                  </motion.div>
                )}
                {status === 'err' && (
                  <motion.div
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-3 p-4 rounded-xl"
                    style={{ background: 'rgba(239,68,68,0.08)', border: '1px solid rgba(239,68,68,0.18)', color: '#FCA5A5', fontSize: '13.5px' }}
                  >
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none"><circle cx="7.5" cy="7.5" r="6.5" stroke="currentColor" strokeWidth="1.3"/><path d="M7.5 4.5v4M7.5 10.5v.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/></svg>
                    Ocurrió un error. Por favor intenta de nuevo.
                  </motion.div>
                )}

                {/* Submit */}
                <motion.button
                  type="submit"
                  disabled={status === 'sending'}
                  whileHover={status !== 'sending' ? { scale: 1.01, y: -1 } : {}}
                  whileTap={status !== 'sending' ? { scale: 0.99 } : {}}
                  className="btn-primary w-full justify-center"
                  style={{ opacity: status === 'sending' ? 0.65 : 1, cursor: status === 'sending' ? 'not-allowed' : 'pointer' }}
                >
                  {status === 'sending' ? (
                    <>
                      <svg className="animate-spin" width="15" height="15" viewBox="0 0 15 15" fill="none" aria-hidden>
                        <circle cx="7.5" cy="7.5" r="6" stroke="rgba(0,0,0,0.25)" strokeWidth="2"/>
                        <path d="M7.5 1.5a6 6 0 016 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                      </svg>
                      Enviando...
                    </>
                  ) : (
                    <>
                      Enviar mensaje
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
                        <path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </>
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>

          {/* ─ Side panel ─ */}
          <motion.div
            initial={{ opacity: 0, x: 20, filter: 'blur(5px)' }}
            whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col gap-5"
          >
            {/* Why VANYX */}
            <div className="card flex-1 p-7">
              <h3
                className="mb-6"
                style={{ fontSize: '15px', fontWeight: 600, letterSpacing: '-0.015em', color: '#D4D4D8' }}
              >
                ¿Por qué VANYX?
              </h3>
              <div className="space-y-5">
                {REASONS.map((r, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, delay: i * 0.07 }}
                    className="flex gap-3"
                  >
                    <div
                      className="flex-shrink-0 mt-0.5 w-[17px] h-[17px] rounded-full flex items-center justify-center"
                      style={{ background: 'rgba(0,217,255,0.07)', border: '1px solid rgba(0,217,255,0.20)' }}
                    >
                      <svg width="9" height="9" viewBox="0 0 9 9" fill="none">
                        <path d="M1.5 4.5l2 2 4-4" stroke="#00D9FF" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <div>
                      <div style={{ fontSize: '13px', fontWeight: 600, color: '#9B9BA6', marginBottom: '2px', letterSpacing: '-0.01em' }}>{r.title}</div>
                      <div style={{ fontSize: '12px', color: '#5A5A68', lineHeight: '1.6' }}>{r.body}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* WhatsApp */}
            <motion.a
              href="https://wa.me/56973988413"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -3, transition: { duration: 0.25, ease: [0.16, 1, 0.3, 1] } }}
              className="group rounded-2xl p-7 text-center relative overflow-hidden"
              style={{
                background: 'rgba(0,217,255,0.025)',
                border:     '1px solid rgba(0,217,255,0.10)',
                transition: 'border-color 0.3s ease',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'rgba(0,217,255,0.22)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(0,217,255,0.10)'; }}
            >
              <div
                aria-hidden
                className="absolute top-0 left-0 right-0 h-[1px]"
                style={{ background: 'linear-gradient(90deg, transparent, rgba(0,217,255,0.4), transparent)' }}
              />
              <div
                aria-hidden
                className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none"
                style={{
                  background: 'radial-gradient(ellipse 80% 50% at 50% 0%, rgba(0,217,255,0.05) 0%, transparent 60%)',
                  transition: 'opacity 0.4s ease',
                }}
              />

              <div
                className="relative w-11 h-11 rounded-xl flex items-center justify-center mx-auto mb-4"
                style={{ background: 'rgba(0,217,255,0.07)', border: '1px solid rgba(0,217,255,0.16)', color: '#00D9FF' }}
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <circle cx="10" cy="10" r="8.25" stroke="currentColor" strokeWidth="1.4"/>
                  <path d="M6.5 10c0-1.93 1.57-3.5 3.5-3.5s3.5 1.57 3.5 3.5S11.93 13.5 10 13.5c-.9 0-1.72-.34-2.34-.9L5 14.5l1.4-2.66A3.48 3.48 0 016.5 10z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3
                className="relative mb-2"
                style={{ fontSize: '14.5px', fontWeight: 600, letterSpacing: '-0.015em', color: '#D4D4D8' }}
              >
                Respuesta inmediata
              </h3>
              <p className="relative mb-5" style={{ fontSize: '13px', color: '#9B9BA6', lineHeight: '1.55' }}>
                Chatea con nosotros por WhatsApp
              </p>
              <span
                className="btn-primary relative text-sm"
                style={{ padding: '0.5625rem 1.125rem', fontSize: '13.5px' }}
              >
                Abrir WhatsApp
                <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden>
                  <path d="M2.5 6.5h8M7 3.5l3 3-3 3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
