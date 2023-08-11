module.exports = {
  content: ["./src/*.{js,jsx,ts,tsx}", "./src/components/*/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        gray: {
          400: "#b0b6ef",
          500: "#b3b5d1",
          600: "#9394ab",
          700: "#60738f",
          900: "#404257",
        },
        orange: {
          900: "#ff7d4b",
        },
        green: {
          900: "#008800",
        },
      },
      spacing: {
        128: "32rem",
      },
    },
  },
};
