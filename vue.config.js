// vue.config.js file to be place in the root of your repository
// make sure you update `yourProjectName` with the name of your GitLab project

module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "" : "/",
  pwa: {
    name: "SUVAT app",
    themeColor: "#1c6ea4"
  },
  pages: {
    index: {
      // entry for the page
      entry: "src/main.js",
      // the source template
      template: "public/index.html",
      // output as dist/index.html
      filename: "index.html"
    },
    about: {
      // entry for the page
      entry: "src/about.js",
      // the source template
      template: "public/about.html",
      // output as dist/index.html
      filename: "about.html"
    }
  }
};
