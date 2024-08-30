/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,jsx}"],
  theme: {
    fontFamily: {
      body: ['"Roboto"'],
    },
    extend: {
      colors: {
        "black": "#141619",
        "dark-gray": "#2c2e3a",
        "gray": "#b3b4bd",
        "white": "#fffafa",
        "blue": "#0a21c0",
        "dark-blue": "#050a44",
      },
    },
    screens: {
      xxs: "298px",
      // => @media (max-width: 524px) { ... }

      xs: "398px",
      // => @media (max-width: 524px) { ... }

      s: "524px",
      // => @media (max-width: 524px) { ... }

      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
  },
  plugins: [],
};
