/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    fontFamily: {
        "sans": ['"DM Sans"', 'sans-serif']
    },
    screens: {
        sm: "576px",
        md: "768px",
        lg: "992px",
        xl: "1200px",
        xxl: "1400px",
        uw: "2000px"
    }
  },
  plugins: [],
}
