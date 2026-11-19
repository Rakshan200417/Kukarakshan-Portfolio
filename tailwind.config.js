/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        mono: {
          950: '#060608',
          900: '#0d0d12',
          850: '#13131a',
          800: '#1b1b24',
          700: '#272734',
          400: '#9090a2',
          300: '#b8b8cb',
          200: '#c5c5d8',
          100: '#e6e6f0',
          50:  '#ffffff',
        }
      },
      fontFamily: {
        anton: ['var(--font-anton)', 'Anton', 'sans-serif'],
        syne: ['var(--font-syne)', 'Syne', 'sans-serif'],
        body: ['var(--font-jakarta)', 'Plus Jakarta Sans', 'sans-serif'],
        display: ['var(--font-space)', 'Space Grotesk', 'sans-serif'],
        signature: ['var(--font-alex)', 'Alex Brush', 'cursive'],
      }
    },
  },
  plugins: [],
};
