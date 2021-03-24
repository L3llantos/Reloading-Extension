chrome.runtime.onInstalled.addListener(function() {
    chrome.contextMenus.create({
      "id": "sampleContextMenu",
      "title": "Sample Context Menu",
      "contexts": ["selection"]
    });
  });
  var browser = browser || chrome;
  browser.webNavigation.onCompleted.addListener(reload);
  function reload() 
  {
    var audio = new Audio('reload.mp3');
    audio.play();
    audio.volume = 0.1;
  };  