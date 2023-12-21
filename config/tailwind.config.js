import { getIconCollections, iconsPlugin } from '@egoist/tailwindcss-icons';
import { colors } from '../src/common/styles/colors';

/** @type {import('tailwindcss').Config} */
export default {
  prefix: 'tw-',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors,
    },
  },
  plugins: [
    iconsPlugin({
      collections: getIconCollections(['material-symbols', 'mdi']),
    }),
  ],
};
