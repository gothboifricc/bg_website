import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",   // ✅ Scans ALL relevant files
    "./pages/**/*.{js,ts,jsx,tsx}", // ✅ For Pages Router (if applicable)
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",   // ✅ For App Router (if applicable)
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

export default config;
