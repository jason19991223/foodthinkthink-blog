import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#17324D",
        leaf: "#DDF2E5",
        sage: "#5BA879",
        mist: "#F6FAF8"
      },
      fontFamily: {
        sans: [
          "Inter",
          "Noto Sans TC",
          "ui-sans-serif",
          "system-ui",
          "sans-serif"
        ]
      },
      boxShadow: {
        soft: "0 10px 30px rgba(23, 50, 77, 0.08)"
      }
    }
  },
  plugins: []
};

export default config;
