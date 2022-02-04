module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
    fontFamily: {
      sans: ['SF Pro Display', 'sans-serif'],
      head: ['SF Pro Display', 'sans-serif'],
    },
    spacing: {
      half: '5px',
      1: '10px',
      2: '20px',
      3: '30px',
      4: '40px',
      5: '50px',
      6: '60px',
    },
    fontWeight: {
      light: 300,
      normal: 400,
      semibold: 600,
      bold: 700,
    },
    fontSize: {
      tiny: '0.5rem',
      xs: '0.75rem',
    },
    colors: {
      'primary-100': 'rgba(93, 95, 239, 0.1)',
    },
  },
  daisyui: {
    themes: [
      {
        light: {
          /* your theme name */ primary: '#5D5FEF' /* Primary color */,
          'primary-focus': '#2A2CBC' /* Primary color - focused */,
          'primary-content':
            '#ffffff' /* Foreground content color to use on primary color */,

          secondary: '#51596D' /* Secondary color */,
          'secondary-focus': '#1E263A' /* Secondary color - focused */,
          'secondary-content':
            '#ffffff' /* Foreground content color to use on secondary color */,

          accent: '#EF625D' /* Accent color */,
          'accent-focus': '#d1443f' /* Accent color - focused */,
          'accent-content':
            '#ffffff' /* Foreground content color to use on accent color */,

          neutral: '#5C656C' /* Neutral color */,
          'neutral-focus': '#1E263A' /* Neutral color - focused */,
          'neutral-content':
            '#ffffff' /* Foreground content color to use on neutral color */,

          'base-100':
            '#ffffff' /* Base color of page, used for blank backgrounds */,
          'base-200': '#f9fafb' /* Base color, a little darker */,
          'base-300': '#d1d5db' /* Base color, even more darker */,
          'base-content':
            '#1C1C1C' /* Foreground content color to use on base color */,

          info: '#2094f3' /* Info */,
          success: '#60EF5D' /* Success */,
          warning: '#ff9900' /* Warning */,
          error: '#EF625D' /* Error */,
        },
      },
    ],
  },
  plugins: [require('daisyui'), require('@tailwindcss/typography')],
}
