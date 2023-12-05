export const plugins = [
  {
    resolve: "Gautam Manak",
    options: {
      siteUrl: "",
      manifestSettings: {
        favicon: "./content/images/favicon.png",
        siteName: "Gautam Manak",
        shortName: "Gautam",
        startUrl: "/",
        backgroundColor: "#11112B",
        themeColor: "#11112B",
        display: "", // Used in manifest.json
      },
      contentDirectory: "./content",
      blogSettings: {
        path: "/blog",
        usePathPrefixForArticles: false, // Default true (i.e. path will be /blog/first-article)
      },
      // googleAnalytics: {
      //     trackingId: "UA-XXXXXX-X",
      //     anonymize: true, // Default true
      //     environments: ["production", "development"] // Default ["production"]
      // }
    },
  },
];
