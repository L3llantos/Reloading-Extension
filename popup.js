

document.getElementById('clickMe').addEventListener('click', hello);
function hello() {

    chrome.tabs.query({ status: 'complete', active: true }, (tabs) => {
        tabs.forEach((tab) => {

            if (tab.url) {
                chrome.tabs.update(tab.id, { url: tab.url });
                var audio = new Audio('reload.mp3');
                audio.play();
                audio.volume = 0.1;

            }
        });
    });
};
