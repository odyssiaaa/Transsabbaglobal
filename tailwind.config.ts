import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        tsg: {
          dark: "#050D1A",
          navy: "#0A192F",
          "navy-light": "#10233E",
          deep: "#0B192C",
          blue: "#1E3E62",
          accent: "#FF6500",
          "accent-hover": "#E05500",
          amber: "#F59E0B",
          slate: "#94A3B8",
          "slate-light": "#E2E8F0",
          "slate-dark": "#334155",
        },
      },
      animation: {
        "marquee-left": "marqueeLeft 25s linear infinite",
        "marquee-right": "marqueeRight 25s linear infinite",
        "radar-pulse": "radarPulse 2.5s cubic-bezier(0, 0, 0.2, 1) infinite",
        "float": "float 4s ease-in-out infinite",
      },
      keyframes: {
        marqueeLeft: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        marqueeRight: {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0%)" },
        },
        radarPulse: {
          "0%": { transform: "scale(0.8)", opacity: "1" },
          "100%": { transform: "scale(2.5)", opacity: "0" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-6px)" },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
