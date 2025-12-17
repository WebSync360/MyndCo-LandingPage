/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html",
    "./src/**/*.{js,html}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary brand colors (Red Palette)
        brand: {
          50:  '#ffcdd2',  // very light red, for backgrounds, subtle cards
          100: '#a57272ce',  // light red, hover states, highlights
          500: '#160606ff',  // deep red, primary buttons, hero background
          600: '#a59e9eff',
          700: '#130000ff',  // darker red, headings, emphasis, footers
        },
        // Accent color to balance the warmth of red
        accent: '#00264D', // deep blue, for small UI elements, icons, subtle highlights
        // Neutral background for clean sections
        neutralbg: '#f7f7f7',
      },
      fontFamily: {
        // Modern, professional font
        inter: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      spacing: {
        // Generous padding/margin for luxury feel
        'section-y': '5rem',   // vertical spacing for major sections
        'section-x': '2rem',   // horizontal spacing
      },
      borderRadius: {
        'lg': '1rem',  // rounded corners for cards/buttons
      },
      boxShadow: {
        'card': '0 8px 24px rgba(0,0,0,0.05)',  // subtle premium shadow
      },
    },
  },
  plugins: [],
}