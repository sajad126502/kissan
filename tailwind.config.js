module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2874F0', // Flipkart blue
        accent: '#FFB81C', // Flipkart yellow
      },
      fontFamily: {
        sans: ['Poppins', 'Inter', 'ui-sans-serif', 'system-ui'],
        display: ['Playfair Display', 'serif'],
      },
      keyframes: {
        floatUp: {
          '0%': { transform: 'translateY(8px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(12px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        pop: {
          '0%': { transform: 'scale(0.96)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
      animation: {
        'floatUp': 'floatUp 360ms cubic-bezier(.22,.9,.36,1) both',
        'slideUp': 'slideUp 420ms cubic-bezier(.22,.9,.36,1) both',
        'fadeIn': 'fadeIn 300ms ease-out both',
        'pop': 'pop 220ms cubic-bezier(.22,.9,.36,1) both',
      },
    },
  },
  plugins: [],
}
