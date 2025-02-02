import type { Config } from 'tailwindcss';

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#FFF1E2',
        green: '#A0C4AE',
        brown: '#BB977B',
        primary: '#101A24',
      },
      fontFamily: {
        poppins: ['Poppins', 'Arial', 'Helvetica', 'sans-serif'],
        nunito: ['Nunito', 'Arial', 'Helvetica', 'sans-serif'],
      },
      screens: {
        sm: '640px',
        mm: '690px',
        md: '880px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
      },
    },
  },
  plugins: [],
} satisfies Config;
