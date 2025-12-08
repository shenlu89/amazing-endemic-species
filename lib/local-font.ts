import localFont from "next/font/local";

const SanaSansAlt = localFont({
  src: [
    {
      path: "../public/fonts/SanaSansAlt-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/fonts/SanaSansAlt-Black.woff2",
      weight: "800",
      style: "normal",
    },
    {
      path: "../public/fonts/SanaSansAlt-Medium.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/fonts/SanaSansAlt-Regular.woff2",
      weight: "400",
      style: "normal",
    },
  ],
});

export default SanaSansAlt;
