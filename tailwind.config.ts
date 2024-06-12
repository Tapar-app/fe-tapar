import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        "ipad-pro-portrait": {
          raw: "(min-width: 1024px) and (max-width: 1365px) and (orientation: portrait)",
        },
        "ipad-pro-landscape": {
          raw: "(min-width: 1366px) and (max-width: 1439px) and (orientation: landscape)",
        },
        "ipad-air-portrait": {
          raw: "(min-width: 820px) and (max-width: 1023px) and (orientation: portrait)",
        },
        "ipad-air-landscape": {
          raw: "(min-width: 1024px) and (max-width: 1180px) and (orientation: landscape)",
        },
        "ipad-mini-portrait": {
          raw: "(min-width: 768px) and (max-width: 819px) and (orientation: portrait)",
        },
        "ipad-mini-landscape": {
          raw: "(min-width: 768px) and (max-width: 1024px) and (orientation: landscape)",
        },
        xl: "1440px",
      },
    },
  },
  plugins: [],
};
export default config;
