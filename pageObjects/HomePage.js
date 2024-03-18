const { I } = inject();

class HomePage {
  mostReadContainer = '#most-read-container';
  newsContainer = '#featured-news-container';
  articles = '.article-trending';
  accessiblityContainer='.bypass-block-links-container';
  accessibilityMostReadLink = 'Skip to Most Read';
  headerContainer = '.container--header';

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

  async clickOnEmptyHeader(){
    I.click(this.headerContainer);
  }

  openAccessiblityMenu(){
    I.pressKey('Tab');
  }

  checkUrlContains(url){
    I.waitInUrl(url);
  }

}

module.exports = HomePage;
