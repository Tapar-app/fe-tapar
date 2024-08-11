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
          raw: "(min-width: 1024px) and (max-width: 768px) and (orientation: landscape)",
        },
        "iphone-5-portrait": {
          raw: "(min-width: 320px) and (max-width: 374px) and (orientation: portrait)",
        },
        "iphone-5-landscape": {
          raw: "(min-width: 568px) and (max-width: 739px) and (orientation: landscape)",
        },
        "iphone-6-portrait": {
          raw: "(min-width: 375px) and (max-width: 667px) and (orientation: portrait)",
        },
        "iphone-6-landscape": {
          raw: "(min-width: 667px) and (max-width: 736px) and (orientation: landscape)",
        },
        "iphone-6-plus-portrait": {
          raw: "(min-width: 414px) and (max-width: 736px) and (orientation: portrait)",
        },
        "iphone-6-plus-landscape": {
          raw: "(min-width: 736px) and (max-width: 960px) and (orientation: landscape)",
        },
        "iphone-12-pro-portrait": {
          raw: "(min-width: 390px) and (max-width: 844px) and (orientation: portrait)",
        },
        "iphone-12-pro-landscape": {
          raw: "(min-width: 844px) and (max-width: 390px) and (orientation: landscape)",
        },
        "iphone-14-pro-portrait": {
          raw: "(min-width: 430px) and (max-width: 932px) and (orientation: portrait)",
        },
        "iphone-14-pro-landscape": {
          raw: "(min-width: 932px) and (max-width: 430px) and (orientation: landscape)",
        },
        xl: "1440px",
      },
    },
  },
  plugins: [],
};
export default config;
