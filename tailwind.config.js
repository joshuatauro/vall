/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html","./src/*.{js,ts,jsx,tsx}"],
    theme: {
      extend: {
        colors: {
          background: "var(--background)",
          foreground: "var(--foreground)",
        },
        fontFamily: {
          "inter": ["Inter", "sans-serif"],
        }
      },
    },
    plugins: [],
  };
   