const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  reporter: "cypress-junit",
  reporterOptions: {
    "cypress-junit": {
      mochawesomeFilename: "mochareport.json",
      junitFilename: "junitresults.[hash].xml",
    },
  },
});
