if (typeof(chrome) == "undefined") {
    var chrome = browser;
}

var offButton = document.getElementById("off");
offButton.onclick = function() {
    chrome.storage.local.set({"dbna_dark_mode": "off"});
}

var darkButton = document.getElementById("dark");
darkButton.onclick = function() {
    chrome.storage.local.set({"dbna_dark_mode": "dark"});
}

var darkerButton = document.getElementById("darker");
darkerButton.onclick = function() {
    chrome.storage.local.set({"dbna_dark_mode": "darker"});
}

chrome.storage.local.get(["dbna_dark_mode"], function(result) {
    if (result.dbna_dark_mode == "off") {
        offButton.checked = "checked";
    } else if (result.dbna_dark_mode == "dark") {
        darkButton.checked = "checked";
    } else if (result.dbna_dark_mode == "darker" || typeof(result.dbna_dark_mode) == "undefined") {
        darkerButton.checked = "checked";
    }
});