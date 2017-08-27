function toggleSeamless(request, sender, sendResponse) {

    // Check for the specific youtube component.
    var video = document.getElementById("player-api");

    if (video) {
        if (!request.toggle)
            video.style.position = "fixed";
        else
            video.style.position = "";
    }

    //browser.runtime.onMessage.removeListener(toggleSeamless);
}

browser.runtime.onMessage.addListener(toggleSeamless);