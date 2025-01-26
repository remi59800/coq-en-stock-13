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
        background: '#FFF8F1',
        green: '#A0C4AE',
        brown: '#BB977B',
        text: '#101A24',
      },
    },
  },
  plugins: [],
} satisfies Config;
