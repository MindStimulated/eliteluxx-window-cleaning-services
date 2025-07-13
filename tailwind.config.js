/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'soft-white': '#FCFBF8',
        'deep-charcoal': '#2E2E2E',
        'champagne-gold': '#D4AF37',
        'desert-sand': '#E3D5C8',
        'deep-sage': '#5B6C5D',
        'emerald-green': '#10B981',
        'forest-green': '#059669',
        'sage-green': '#6B7280',
      },
      fontFamily: {
        'lora': ['Lora', 'serif'],
        'inter': ['Inter', 'sans-serif'],
      },
      spacing: {
        '15': '60px',
      },
      maxWidth: {
        'site': '1240px',
      },
      boxShadow: {
        'subtle': '0 2px 8px rgba(0, 0, 0, 0.05)',
        'elegant': '0 8px 32px rgba(0, 0, 0, 0.08)',
        'inset-soft': 'inset 0 2px 4px rgba(0, 0, 0, 0.06)',
        'field': '0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.06)',
        'field-focus': '0 0 0 3px rgba(212, 175, 55, 0.1), 0 1px 3px rgba(0, 0, 0, 0.1)',
        '3d': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
        '3d-hover': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
      },
      animation: {
        'gradient-x': 'gradient-x 15s ease infinite',
        'shimmer': 'shimmer 2s linear infinite',
      },
      keyframes: {
        'gradient-x': {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          },
        },
        'shimmer': {
          '0%': {
            'background-position': '-100% 0'
          },
          '100%': {
            'background-position': '100% 0'
          },
        },
      },
    },
  },
  plugins: [],
};