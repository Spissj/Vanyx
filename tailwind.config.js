/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    // Support flat structure too
    './*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        vanyx: {
          // Core brand
          black:      '#030303',
          'black-2':  '#080808',
          'black-3':  '#0D0D0D',
          white:      '#FAFAFA',
          cyan:       '#00D9FF',
          'cyan-dim': '#00AACC',
          'cyan-glow':'#00EEFF',

          // Surface layers (dark to light)
          surface: {
            0: '#030303',
            1: '#0A0A0A',
            2: '#111111',
            3: '#1A1A1A',
            4: '#222222',
          },

          // Border shades
          border: {
            subtle:  'rgba(255,255,255,0.06)',
            muted:   'rgba(255,255,255,0.10)',
            DEFAULT: 'rgba(255,255,255,0.14)',
            cyan:    'rgba(0,217,255,0.20)',
            'cyan-strong': 'rgba(0,217,255,0.40)',
          },

          // Text shades
          text: {
            primary:   '#FAFAFA',
            secondary: '#A1A1AA',
            tertiary:  '#52525B',
            cyan:      '#00D9FF',
          },
        },
      },

      fontFamily: {
        sans:    ['var(--font-inter)', 'Inter', 'system-ui', 'sans-serif'],
        display: ['var(--font-sora)', 'Sora', 'Inter', 'sans-serif'],
        mono:    ['var(--font-geist-mono)', 'ui-monospace', 'monospace'],
      },

      fontSize: {
        '2xs': ['0.625rem', { lineHeight: '1rem' }],
        xs:    ['0.75rem',  { lineHeight: '1.125rem' }],
        sm:    ['0.875rem', { lineHeight: '1.375rem' }],
        base:  ['1rem',     { lineHeight: '1.625rem' }],
        lg:    ['1.125rem', { lineHeight: '1.75rem' }],
        xl:    ['1.25rem',  { lineHeight: '1.875rem' }],
        '2xl': ['1.5rem',   { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.375rem' }],
        '4xl': ['2.25rem',  { lineHeight: '2.75rem', letterSpacing: '-0.02em' }],
        '5xl': ['3rem',     { lineHeight: '3.5rem',  letterSpacing: '-0.03em' }],
        '6xl': ['3.75rem',  { lineHeight: '4.25rem', letterSpacing: '-0.04em' }],
        '7xl': ['4.5rem',   { lineHeight: '5rem',    letterSpacing: '-0.04em' }],
        '8xl': ['6rem',     { lineHeight: '6.5rem',  letterSpacing: '-0.05em' }],
        '9xl': ['8rem',     { lineHeight: '8.5rem',  letterSpacing: '-0.05em' }],
      },

      letterSpacing: {
        tightest: '-0.05em',
        tighter:  '-0.04em',
        tight:    '-0.02em',
        normal:   '0em',
        wide:     '0.04em',
        wider:    '0.08em',
        widest:   '0.12em',
      },

      spacing: {
        '4.5':  '1.125rem',
        '13':   '3.25rem',
        '15':   '3.75rem',
        '17':   '4.25rem',
        '18':   '4.5rem',
        '22':   '5.5rem',
        '26':   '6.5rem',
        '30':   '7.5rem',
        '34':   '8.5rem',
        '38':   '9.5rem',
        '42':   '10.5rem',
        '128':  '32rem',
        '144':  '36rem',
      },

      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },

      animation: {
        // Ambient
        'aurora':        'aurora 12s ease infinite alternate',
        'glow-pulse':    'glowPulse 4s ease-in-out infinite',
        'shimmer':       'shimmer 2.5s linear infinite',
        'beam':          'beam 3s ease-in-out infinite',
        // Motion
        'float':         'float 8s ease-in-out infinite',
        'float-slow':    'float 12s ease-in-out infinite',
        'float-fast':    'float 5s ease-in-out infinite',
        'float-delay-1': 'float 8s ease-in-out 1s infinite',
        'float-delay-2': 'float 8s ease-in-out 2.5s infinite',
        // Entrance
        'fade-up':       'fadeUp 0.6s ease-out forwards',
        'fade-in':       'fadeIn 0.5s ease-out forwards',
        'slide-up':      'slideUp 0.7s cubic-bezier(0.16,1,0.3,1) forwards',
        // Loaders
        'spin-slow':     'spin 3s linear infinite',
        'dot-pulse':     'dotPulse 2s ease-in-out infinite',
        // Particle
        'particle-drift':'particleDrift 20s linear infinite',
      },

      keyframes: {
        aurora: {
          '0%':   { backgroundPosition: '0% 50%', transform: 'rotate(0deg) scale(1)' },
          '50%':  { backgroundPosition: '100% 50%', transform: 'rotate(180deg) scale(1.1)' },
          '100%': { backgroundPosition: '0% 50%', transform: 'rotate(360deg) scale(1)' },
        },
        glowPulse: {
          '0%, 100%': { opacity: '0.4', filter: 'blur(40px)' },
          '50%':      { opacity: '0.8', filter: 'blur(60px)' },
        },
        shimmer: {
          '0%':   { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        beam: {
          '0%, 100%': { opacity: '0', transform: 'scaleX(0)' },
          '50%':      { opacity: '1', transform: 'scaleX(1)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '33%':      { transform: 'translateY(-16px) rotate(0.5deg)' },
          '66%':      { transform: 'translateY(-8px) rotate(-0.5deg)' },
        },
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%':   { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        dotPulse: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%':      { opacity: '0.4', transform: 'scale(0.8)' },
        },
        particleDrift: {
          '0%':   { transform: 'translateY(100vh) translateX(0px)' },
          '100%': { transform: 'translateY(-10vh) translateX(30px)' },
        },
      },

      boxShadow: {
        // Glow system
        'glow-xs':  '0 0 10px rgba(0,217,255,0.15)',
        'glow-sm':  '0 0 20px rgba(0,217,255,0.20)',
        'glow':     '0 0 30px rgba(0,217,255,0.25)',
        'glow-lg':  '0 0 50px rgba(0,217,255,0.30)',
        'glow-xl':  '0 0 80px rgba(0,217,255,0.25)',
        'glow-2xl': '0 0 120px rgba(0,217,255,0.20)',
        // Elevation
        'elev-1':   '0 1px 3px rgba(0,0,0,0.4), 0 1px 2px rgba(0,0,0,0.3)',
        'elev-2':   '0 4px 12px rgba(0,0,0,0.5), 0 2px 4px rgba(0,0,0,0.3)',
        'elev-3':   '0 10px 30px rgba(0,0,0,0.6), 0 4px 8px rgba(0,0,0,0.4)',
        'elev-4':   '0 20px 60px rgba(0,0,0,0.7), 0 8px 16px rgba(0,0,0,0.4)',
        // Card
        'card':     '0 0 0 1px rgba(255,255,255,0.08), 0 4px 16px rgba(0,0,0,0.4)',
        'card-hover': '0 0 0 1px rgba(0,217,255,0.25), 0 8px 32px rgba(0,0,0,0.5), 0 0 40px rgba(0,217,255,0.08)',
      },

      backgroundImage: {
        'gradient-radial':     'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':      'conic-gradient(var(--tw-gradient-stops))',
        'gradient-mesh':       'radial-gradient(at 40% 20%, rgba(0,217,255,0.08) 0px, transparent 50%), radial-gradient(at 80% 0%, rgba(0,100,255,0.06) 0px, transparent 50%), radial-gradient(at 0% 50%, rgba(0,217,255,0.04) 0px, transparent 50%)',
        'noise':               "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E\")",
        // Shimmer gradient
        'shimmer-gradient':    'linear-gradient(90deg, transparent 0%, rgba(0,217,255,0.08) 50%, transparent 100%)',
        // Card bg
        'card-gradient':       'linear-gradient(135deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.01) 100%)',
        // Hero beam
        'beam-gradient':       'linear-gradient(90deg, transparent, rgba(0,217,255,0.6), transparent)',
      },

      backdropBlur: {
        xs: '2px',
        sm: '6px',
        md: '12px',
        lg: '20px',
        xl: '30px',
        '2xl': '40px',
        '3xl': '60px',
      },

      transitionTimingFunction: {
        'spring':       'cubic-bezier(0.16, 1, 0.3, 1)',
        'bounce-in':    'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
        'smooth':       'cubic-bezier(0.4, 0, 0.2, 1)',
        'in-expo':      'cubic-bezier(0.95, 0.05, 0.795, 0.035)',
        'out-expo':     'cubic-bezier(0.19, 1, 0.22, 1)',
      },

      transitionDuration: {
        '400': '400ms',
        '600': '600ms',
        '800': '800ms',
        '1200': '1200ms',
        '1600': '1600ms',
        '2000': '2000ms',
      },
    },
  },
  plugins: [],
};
