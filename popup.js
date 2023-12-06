document.addEventListener("DOMContentLoaded", function() {
    const button = document.getElementById("remove-ad-button");
    button.addEventListener("click", () => {
      chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        chrome.tabs.sendMessage(tabs[0].id, { type: "remove-tv-ad" });
      });
    });
  });