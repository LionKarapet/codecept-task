const { setHeadlessWhen, setCommonPlugins } = require('@codeceptjs/configure');
// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

/** @type {CodeceptJS.MainConfig} */
exports.config = {
  output: './output',
  include: {
    homePage: './pageObjects/HomePage.js',
    I: './steps_file.js',
  },
  gherkin: {
    features: './features/web/*.feature',   // feature files location
    steps: ['./steps/homePage_steps.js','./steps/livePage_steps.js']  // step definitions location
  },
  helpers: {
    WebDriver: {
      url: 'https://aljazeera.com',
      smartWait: 5000,
      browser: "chrome",
      restart: false,
      windowSize: "maximize",
      timeouts: {
        "script": 60000,
        "page load": 20000
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