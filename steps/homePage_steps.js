const HomePage = require('../pageObjects/HomePage.js');
let homePage = new HomePage();

Given('I am on the homepage', () => {
  homePage.open();
});

When('I scroll to the "Most Read" section', () => {
  homePage.scrollToMostRead();
});

Then('I should see the "Most Read" section', () => {
  homePage.checkIfMostReadDisplayed();
});

Then('I should not see the "Most Read" section', () => {
  homePage.checkIfMostReadIsNotDisplayed();
});

Then('I assert articles count in "Most Read" section is {int}', (num) => {
  homePage.checkArticlesCount(num);
})

When('I click on empty space in header',() =>{
  homePage.clickOnEmptyHeader();
})

When('I open accessibility menu',() =>{
  homePage.openAccessiblityMenu();
})

When('I click on skip to most read',() =>{
  homePage.clickOnMostReadLink();
})

Then('I assert {string} is added to the link', (url)=> {
  homePage.checkUrlContains(url);
})
