const { I } = inject();

class LivePage {
    videoPlayer = '#vjs_video_3_html5_api';
    switchPlayerButton = '#liveStreamPlayerHelpButton';

    open(){
        I.amOnPage('/live');
    }

    validateVideoPlayer(){
        I.seeElement(this.videoPlayer);
    }

    valideSwitchPlayerButton(){
        I.seeElement(this.switchPlayerButton);
    }

}

module.exports = LivePage;
