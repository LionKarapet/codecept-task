/** @type {CodeceptJS.MainConfig} */
exports.config = {
  output: './output',
  include: {
    homePage: './pageObjects/HomePage.js',
    I: './steps_file.js',
  },
  gherkin: {
    features: './features/most_read_mobile.feature',   // feature files location
    steps: ['./steps/homePage_steps.js']  // step definitions location
  },
  helpers: {
    Appium: {
      host: "hub-cloud.browserstack.com",
      port: 4444,
      user: 'lionkarabit_6WkjgD',
      key: 'Gp37BJUykg3U9BdYLefe',
      platform: 'ANDROID',
      desiredCapabilities: {
        "platformName": "ANDROID",
        "realMobile": "true",
        "device": "Samsung Galaxy S21",
        "os_version": "11",
        "browserName": "chrome",
        "automationName": "UiAutomator2"
    },
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