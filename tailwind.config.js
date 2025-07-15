/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts,tsx,js}"],
  theme: {
    extend: {
      colors: {
        azulPastel: '#85D4F4',
        azulMedio: '#414ABA',
        pretoPersonalizado: '#292929',
      },
      fontFamily: {
        supermolotBold: ['TTSupermolot-Bold', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
