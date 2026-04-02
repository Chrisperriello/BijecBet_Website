/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: '#0A192F',
        background: '#0B0F19',
        surface: '#111827',
        teal: '#64FFDA',
        bijec: {
          navy: '#0A192F',
          platinum: '#E0E1DD',
          teal: '#64FFDA',
        },
        brandPlatinum: '#E0E1DD',
        platinum: '#E5E4E2',
        brandTeal: {
          DEFAULT: '#64FFDA',
          hover: '#52e0c0',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'monospace'],
      },
    },
  },
  plugins: [],
}
