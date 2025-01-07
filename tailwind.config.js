/** @type {import('tailwindcss').Config} */

import daisyui from "daisyui";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        text: "#000000",
        background: "#e7f6ff",
        primary: "#f3b653",
        secondary: "#c3c3c3",
        accent: "#261fff",
      },
    },
  },
  plugins: [daisyui],
};
