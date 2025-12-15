/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html",
    "./src/**/*.{js,html}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary brand colors for Mindset Coach Landing Page
        brand: {
          50:  '#ebf5ff',  // Very light blue, for backgrounds or section highlights
          100: '#d0e4ff',  // Light blue, for hover states, subtle accents
          500: '#00264D',  // Deep blue, primary buttons, hero background
          700: '#000B18',  // Darker blue, headings, emphasis, footer background
        },
        // Neutral backgrounds for clean, airy sections
        neutralbg: '#f7f7f7',
        // Optional accent color (for small highlights, icons, separators)
        accent: '#D4A373', // muted gold, premium feel
      },
      fontFamily: {
        // Modern, readable, professional font
        inter: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      spacing: {
        // Predefine generous padding/margin for luxury feel
        'section-y': '5rem',   // vertical spacing for major sections
        'section-x': '2rem',   // horizontal spacing
      },
      borderRadius: {
        // Rounded corners for cards / buttons
        'lg': '1rem',
      },
      boxShadow: {
        // Subtle premium shadows for cards
        'card': '0 8px 24px rgba(0,0,0,0.05)',
      },
    },
  },
  plugins: [],
}
