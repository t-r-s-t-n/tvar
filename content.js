(() => {
    chrome.runtime.onMessage.addListener((request, sender, response) => {
        const ad = document.getElementById("overlap-manager-root");
        if (ad) {
            ad.style.display = "none";
        }
        return true;
    });
})();