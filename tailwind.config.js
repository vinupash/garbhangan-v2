/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        RobotoBlack: ["Roboto-Black", "sans-serif"],
        RobotoBlackItalic: ["Roboto-BlackItalic", "sans-serif"],
        RobotoBold: ["Roboto-Bold", "sans-serif"],
        RobotoBoldItalic: ["Roboto-BoldItalic", "sans-serif"],
        RobotoLight: ["Roboto-Light", "sans-serif"],
        RobotoMedium: ["Roboto-Medium", "sans-serif"],
        RobotoRegular: ["Roboto-Regular", "sans-serif"],
      },
    },
  },
  plugins: [],
};
