const headerNavLinks = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "API",
    link: "/api",
  },
  {
    name: "About",
    link: "/about",
  },
];

const apiPage = {
  metadata: {
    title: "API Reference",
    description:
      "The data in the Amazing Endemic Species API is compiled and released based on information from the IUCN Red List API.",
  },
  apis: [
    "random",
    "species",
    "speciescount",
    "country",
    "countrycount",
    "version",
  ],
};

const aboutPage = {
  metadata: {
    title: "About",
    description: "All the information about Amazing Endemic Species.",
  },
};

const homePage = {
  image: "/logo.svg",
  title: "Amazing Endemic Species",
  description: "Mapping amazing endemic species all over the world.",
  metadata: {
    metadataBase: new URL("https://aes.shenlu.me"),
    title: {
      default:
        "Amazing Endemic Species | Mapping amazing endemic species all over the world.",
      template: `%s | Amazing Endemic Species`,
    },
    description: "Mapping amazing endemic species all over the world.",
    openGraph: {
      title: "Amazing Endemic Species",
      description: "Mapping amazing endemic species all over the world.",
      url: "https://aes.shenlu.me",
      siteName: "Amazing Endemic Species",
      locale: "en-US",
      type: "website",
    },
    twitter: {
      title: "Amazing Endemic Species",
      card: "summary_large_image",
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-snippet": -1,
      },
    },
  },
};

export { headerNavLinks, homePage, apiPage, aboutPage };
