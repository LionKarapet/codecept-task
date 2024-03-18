const capabilities = require("./caps.json")[process.env.CAPS];

/** @type {CodeceptJS.MainConfig} */
exports.config = {
  output: './output',
  include: {
    homePage: './pageObjects/HomePage.js',
    I: './steps_file.js',
  },
  gherkin: {
    features: './features/mobile/most_read_mobile.feature',   // feature files location
    steps: ['./steps/homePage_steps.js']  // step definitions location
  },
  helpers: {
    Appium: {
      host: "hub-cloud.browserstack.com",
      port: 4444,
      user: 'lionkarabit_6WkjgD',
      key: 'Gp37BJUykg3U9BdYLefe',
      platform: capabilities.platformName,
      desiredCapabilities: capabilities,
    timeouts: {
      "script": 60000,
     }
    }
  },
  bootstrap: null,
  mocha: {},
  name: 'codeceptjs-allure-bdd',
  plugins: {
    allure: {
      enabled: true,
      require: '@codeceptjs/allure-legacy'
    },
  }
};