// vue.config.js file to be place in the root of your repository
// make sure you update `yourProjectName` with the name of your GitLab project

module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "" : "/",
  pwa: {
    name: "SUVAT app",
    themeColor: "#1c6ea4"
  }
};
