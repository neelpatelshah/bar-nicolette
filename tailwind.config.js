/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        playfair: ["var(--font-playfair)"],
        arvo: ["var(--font-arvo)"],
        yatra: ["var(--font-yatra)"],
        philosopher: ["var(--font-philosopher)"],
        macondo: ["var(--font-macondo)"],
        "cutive-mono": ["var(--font-cutive-mono)"],
      },
    },
  },
  plugins: [],
};
