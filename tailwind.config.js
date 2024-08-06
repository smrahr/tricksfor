/** @type {import('tailwindcss').Config} */

const { fontFamily } = require("tailwindcss/defaultTheme");

function withOpacity(variableName) {
  return ({ opacityValue }) => {
    if (opacityValue !== undefined) {
      return `rgba(var(${variableName}), ${opacityValue})`;
    }
    return `rgb(var(${variableName}))`;
  };
}

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          900: withOpacity("--color-primary-900"),
          800: withOpacity("--color-primary-800"),
          700: withOpacity("--color-primary-700"),
          600: withOpacity("--color-primary-600"),
          500: withOpacity("--color-primary-500"),
          400: withOpacity("--color-primary-400"),
          300: withOpacity("--color-primary-300"),
          200: withOpacity("--color-primary-200"),
          100: withOpacity("--color-primary-100"),
          50: withOpacity("--color-primary-50"),
        },
        // secondary: {
        //   900: withOpacity("--color-secondary-900"),
        //   800: withOpacity("--color-secondary-800"),
        //   700: withOpacity("--color-secondary-700"),
        //   600: withOpacity("--color-secondary-600"),
        //   500: withOpacity("--color-secondary-500"),
        //   400: withOpacity("--color-secondary-400"),
        //   300: withOpacity("--color-secondary-300"),
        //   200: withOpacity("--color-secondary-200"),
        //   100: withOpacity("--color-secondary-100"),
        //   50: withOpacity("--color-secondary-50"),
        // },
        // success: withOpacity("--color-success"),
        // warning: withOpacity("--color-warning"),
        // error: withOpacity("--color-error"),
        // background: withOpacity("--background-app-rgb"),
        // darkBg: withOpacity("--dark-main-BG"),
        // darkElementBg: withOpacity("--dark-element-BG"),
        // darkEl: withOpacity("--dark-Element"),
        // darkText: withOpacity("--dark-Text"),
        // darkSecondaryText: withOpacity("--dark-secondary-Text"),
        // darkBorder: withOpacity("--dark-border"),
      },
      fontFamily: {
        sans: ["var(--font-iransans)", ...fontFamily.sans],
      },
      container: {
        center: true,
      },
      boxShadow: {
        dark: "0 7px 15px -8px rgb(var(--dark-Shadow))",
        "input-focus": "0 12px 24px -8px rgb(var(--color-secondary-600))",
      },
    },
  },
  plugins: [],
};
