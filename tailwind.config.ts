import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
     container:{
      center: true,
      padding: "15px"
     },
     colors : {
      accent : "#f94c29"
     },
    },
  },
  plugins: [],
}
export default config
