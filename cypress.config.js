const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    charts: true,
    reportPageTitle: 'SauceDemoTest',
    embeddedScreenshots: true,
    inlineAssets: true,
  },
  e2e: {
    chromeWebSecurity: false,
    baseUrl: "https://www.saucedemo.com/",
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
  video: true,
  screenshotOnRunFailure: true,
  videosFolder: "cypress/videos",
  screenshotsFolder: "cypress/screenshots",
});
