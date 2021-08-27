module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        discord: {
          100: "#16171b",
          200: "#363940",
          300: "#1e1f24"
        },
        oatmeal: {
          100: "#065266",
          200: "#7289da"
        }
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
