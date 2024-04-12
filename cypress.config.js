const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  baseUrl : "https://demo.testim.io",
    experimentalSessionAndOrigin: true,
    defaultCommandTimeout: 1000,
    watchForFileChanges: false,
    supportFile:false
  },
  env: {
    usuario:"admin",
    password:"admin123!"
  }
});
