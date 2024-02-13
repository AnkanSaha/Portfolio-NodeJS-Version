/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        "dark-content": "#666",
        "solid-heading": "#42446e",
        black: "#000",
        "colors-heading": "#1e0e62",
        "dark-mode": "#191919",
        "light-content": "#a7a7a7",
        darkslategray: "#363636",
        "solid-heading-dark-mode": "#ccc",
        gainsboro: "#d9d9d9",
        "colors-grey": "#ebeaed",
        "button-text": "#018c0f",
        "button-success": "#d7ffe0",
      },
      spacing: {},
      fontFamily: {
        poppins: "Poppins",
        "buttons-big": "'DM Sans'",
      },
      borderRadius: {
        xl: "20px",
        "211xl": "230px",
        "81xl": "100px",
      },
    },
    fontSize: {
      lg: "1.13rem",
      base: "1rem",
      sm: "0.88rem",
      "9xl": "1.75rem",
      "3xl": "1.38rem",
      "13xl": "2rem",
      "7xl": "1.63rem",
      lgi: "1.19rem",
      "29xl": "3rem",
      "19xl": "2.38rem",
      "10xl": "1.81rem",
      "39xl": "3.63rem",
      "27xl": "2.88rem",
      "16xl": "2.19rem",
      xl: "1.25rem",
      xs: "0.75rem",
      "4xs": "0.56rem",
      "23xl": "2.63rem",
      "6xl": "1.56rem",
      "15xl": "2.13rem",
      inherit: "inherit",
    },
    screens: {
      lg: {
        max: "1200px",
      },
      mq1050: {
        raw: "screen and (max-width: 1050px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
