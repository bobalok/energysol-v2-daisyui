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
      backgroundImage: {
        logo: "url(/energysolution.svg)",
      },
    },
  },
  // add daisyUI plugin
  plugins: [require("daisyui")],
  // daisyUI config (optional)
  daisyui: {
    themes: [
      "dark",
      {
        mytheme: {
          primary: "#457fcc",

          secondary: "#2d238c",

          accent: "#8fdd3b",

          neutral: "#1F2329",

          "base-100": "#EEEEF7",

          info: "#32A1EC",

          success: "#6CE4BC",

          warning: "#F8B044",

          error: "#F95D67",
        },
      },
    ],
    // styled: true,
    // themes: ["corporate"],
    // base: true,
    // utils: true,
    // logs: true,
    // rtl: false,
    // prefix: "",
    darkTheme: "dark",
  },
};
