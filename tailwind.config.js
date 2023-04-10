/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        main_bg: "#F5F4F2",
        main_button: "#EF8633",
        second_title: "#222B45",
        main_title: "#342E37",
        plain_text: "#342E37",
        placeholder: "#9E9B98",
        white: "#FFFFFF",
        bottom_sheet: "#E2E2E2",
        error_color: "#C42847",
      },
      screens: {
        sm: "480px",
        md: "768px",
        lg: "976px",
        xl: "1440px",
      },
      fontSize: {
        "3xl": "1.75rem",
      },
    },
  },
  plugins: [],
};
