import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#050505",
        surface: "#0D0D0D",
        card: "#111111",
        borderline: "#222222",
        foreground: "#F5F5F5",
        muted: "#A1A1AA",
        accent: {
          DEFAULT: "#7C3AED",
          glow: "#A78BFA",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        "2xl": "1rem",
        "3xl": "1.5rem",
      },
      boxShadow: {
        glow: "0 0 40px -8px rgba(124, 58, 237, 0.45)",
        "glow-sm": "0 0 24px -6px rgba(124, 58, 237, 0.4)",
        card: "0 8px 32px rgba(0, 0, 0, 0.45)",
      },
      keyframes: {
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-16px)" },
        },
        "pulse-slow": {
          "0%, 100%": { opacity: "0.5" },
          "50%": { opacity: "0.9" },
        },
      },
      animation: {
        marquee: "marquee 40s linear infinite",
        float: "float 8s ease-in-out infinite",
        "pulse-slow": "pulse-slow 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
