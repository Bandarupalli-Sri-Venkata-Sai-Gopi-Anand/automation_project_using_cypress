const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const { createEsbuildPlugin } = require("@badeball/cypress-cucumber-preprocessor/esbuild");
const addCucumberPreprocessorPlugin = require("@badeball/cypress-cucumber-preprocessor").addCucumberPreprocessorPlugin;

module.exports = defineConfig({
  e2e: {
    async setupNodeEvents(on, config) {
      addCucumberPreprocessorPlugin(on, config);
      on("file:preprocessor", createBundler({
        plugins: [createEsbuildPlugin(config)],
      }));
      return config;
    },
    baseUrl: "https://www.amphora.net",
    video: true,
    screenshotOnRunFailure: true,
    specPattern: "**/*.feature",
    supportFile: "cypress/support/e2e.js", 
    viewportWidth: 1920,
    viewportHeight: 1080,
    reporter :"mochawesome",
    reporterOptions : {
      reportDir: "cypress/reports",
      overwrite: false,
      html: true,
      json: true,
    }
  },
  
});
