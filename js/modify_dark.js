var darkCssNode = document.createElement('link');
darkCssNode.rel = 'stylesheet';
darkCssNode.href = chrome.runtime.getURL('css/dark.css');
document.head.insertBefore(darkCssNode, document.head.lastElementChild.nextSibling);