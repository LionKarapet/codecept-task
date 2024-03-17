const { I } = inject();

class HomePage {
  mostReadContainer = '#most-read-container';
  newsContainer = '#featured-news-container';
  articles = '.article-trending';
  accessiblityContainer='.bypass-block-links-container';
  accessibilityMostReadLink = 'Skip to Most Read';
  logo = '.site-logo';

  scrollToMostRead() {
    I.waitForVisible(this.newsContainer);
    I.scrollTo(this.mostReadContainer);
  }
 
  checkIfMostReadDisplayed() {
    I.seeElement(this.mostReadContainer);
  }

  checkIfMostReadIsNotDisplayed() {
    I.dontSeeElement(this.mostReadContainer);
  }

  checkArticlesCount(num){
    I.seeNumberOfElements(this.articles,num);
  }

  open(){
      I.amOnPage('https://aljazeera.com/');
  }

  clickOnMostReadLink(){
    I.waitForVisible(this.accessiblityContainer);
    I.click(this.accessibilityMostReadLink);
  }

  async clickOnLogo(){
    // const { x, y, width, height } = await I.grabElementBoundingRect(this.logo);
    // const xCoord = x - 100;
    // const yCoord = y - 5;

    // const { WebDriver } = codeceptjs.container;
    // const actions = WebDriver.browser.actions({ async: true });
    // await actions.move({ x: xCoord, y: yCoord }).click().perform();

    I.click(this.logo);
  }

  openAccessiblityMenu(){
    I.pressKey('Tab');
  }

  checkUrlContains(url){
    I.waitInUrl(url);
  }

}

module.exports = HomePage;
