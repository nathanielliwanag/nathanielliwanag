/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Montserrat", "sans-serif"],
      },
      colors: {
        primary: "#0ea5e9", // sky-blue accent
        dark: "#0f172a", // dark navy background
        light: "#f8fafc", // light gray-white
      },
      // Define the keyframe animation to move the background position
      keyframes: {
        "move-grid": {
          // The background moves from its original position (0 0) to one tile size (4rem 4rem)
          "0%": { backgroundPosition: "0 0" },
          "100%": { backgroundPosition: "4rem 4rem" },
        },
      },
      // Define the utility class for the animation
      animation: {
        // 'grid' will move the grid for a subtle, infinite, and linear effect
        grid: "move-grid 40s linear infinite",
      },
    },
  },
  plugins: [],
};
