if (typeof(chrome) == "undefined") {
    var chrome = browser;
}
chrome.storage.local.get(["dbna_dark_mode"], function(result) {
    if (result.dbna_dark_mode != "off") {
        var darkCssNode = document.createElement('link');
        darkCssNode.rel = "stylesheet";
        var cssUrl = chrome.runtime.getURL("css/darker.css");
        if (result.dbna_dark_mode == "dark") {
            cssUrl = chrome.runtime.getURL("css/dark.css");
        }
        darkCssNode.href = cssUrl;
        document.getElementsByTagName("body")[0].appendChild(darkCssNode);
    }
});
chrome.storage.onChanged.addListener(function(changes) {
    for (var key in changes) {
      if (key == "dbna_dark_mode") {
          window.location.reload();
      }
    }
});