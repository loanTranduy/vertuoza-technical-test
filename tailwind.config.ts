import type { Config } from 'tailwindcss';

export default {
  darkMode: ['class'],
  mode: 'jit',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '1rem',
      screens: {
        '2xl': '1136px',
      },
    },
    extend: {
      fontFamily: {
        sans: ['var(--font-montserrat)', 'system-ui', 'sans-serif'],
      },
      colors: {
        background: 'hsl(var(--background))',
        card: {
          DEFAULT: 'hsl(var(--card))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
        xl: 'calc(var(--radius) + 8px)',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config;
