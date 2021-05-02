browser.browserAction.onClicked.addListener((tab) => {

    browser.tabs.create({

        active: true,
        url: "https://sophire.herokuapp.com/videos/aleatoire"
    })
});