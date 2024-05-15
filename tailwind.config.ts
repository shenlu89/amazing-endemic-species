import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      typography: (theme: (arg0: string) => any) => ({
        DEFAULT: {
          css: {
            a: {
              color: theme("colors.blue.600"),
              "&:hover": {
                color: theme("colors.blue.800"),
              },
            },
            h1: {
              fontSize: theme("fontSize.2xl"),
            },
            h2: {
              fontWeight: theme("fontWeight.extrabold"),
              fontSize: theme("fontSize.xl"),
              marginTop: 0,
            },
            h3: {
              fontWeight: theme("fontWeight.extrabold"),
              fontSize: theme("fontSize.lg"),
              marginTop: 0,
            },
            hr: {
              marginTop: "2rem",
              marginBottom: "2rem",
            },
            p: {
              color: theme("colors.slate.800"),
              marginTop: 0,
            },
            img: {
              marginTop: 0,
              marginBottom: 0,
            },
            ol: {
              marginTop: 0,
            },
            ul: {
              marginTop: 0,
            },
            // pre: {
            //   backgroundColor: theme("colors.red.100"),
            //   marginTop: 0,
            //   color: theme("colors.red.600"),
            // },
          },
        },
      }),
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
export default config;
