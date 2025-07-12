/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'border-gradient': 'linear-gradient(to right, transparent 0%, rgba(255,255,255,0.2) 20%, rgba(255,255,255,0.2) 80%, transparent 100%)',
        'border-gradient-vertical': 'linear-gradient(to bottom, transparent 0%, rgba(255,255,255,0.2) 20%, rgba(255,255,255,0.2) 80%, transparent 100%)',
      },
      colors: {
        'card-border': 'rgb(43,43,43)',
        'modernization-gradient-start': 'rgb(20,20,20)',
        'title': '#ffffff',
        'subtitle': 'rgb(229, 231, 235)',
        'description': 'rgb(156, 163, 175)',
      },
    },
  },
  plugins: [
    function({ addUtilities }) {
      addUtilities({
        '.border-gradient-fade': {
          'border': '1px solid transparent',
          'border-image': 'linear-gradient(to right, transparent 0%, transparent 20%, red 30%, red 70%, transparent 80%, transparent 100%) 1',
        }
      })
    }
  ],
};