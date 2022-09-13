/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'xs': '375px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    fontFamily: {
      'sans': ['Noto Sans KR', 'system-ui'],
    },
    extend: {
      colors: {
        'black-rgba': 'rgba(0, 0, 0, 0.50)',
      },
      fontFamily: {
        'notoSansKR' : 'Noto Sans KR',
      },
    },
  },
  plugins: [
  ],
  variants: {
  }
}
