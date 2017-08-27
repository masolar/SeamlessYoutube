// Keeps track of the tool being on or off.
toggleVal = false;

function sendMessage() {
    browser.tabs.executeScript(null, {
        file: "seamless.js"
    });

    /*
        Toggles the scrolling effect for each tab.
    */
    var gettingActiveTab = browser.tabs.query({active: true, currentWindow: true});
    gettingActiveTab.then((tabs) => {
      browser.tabs.sendMessage(tabs[0].id, {toggle: toggleVal});
    });

    toggleVal = !toggleVal;
}

browser.browserAction.onClicked.addListener(sendMessage);