const LivePage = require('../pageObjects/LivePage.js');
let livePage = new LivePage();

Given('I am on the live page', () => {
    livePage.open();
});

Then('I verify that the video player is visible', () => {
    livePage.validateVideoPlayer();
});

Then('I verify that the swithc player button is visible', () => {
    livePage.valideSwitchPlayerButton();
});