function getRandomLink() {
    return links[Math.floor(Math.random() * links.length)];
}

function openTab() {
    if (!autoClickerActive) return;

    let newLink = getRandomLink();
    console.log("Opening:", newLink);

    let openedWindow = window.open(newLink, "_blank");

    // Wait between 7-15 seconds randomly before closing
    let delay = Math.floor(Math.random() * 8000) + 7000;

    setTimeout(() => {
        if (openedWindow) {
            openedWindow.close();
            console.log("Closed:", newLink);
        }
        // Wait 5-10 sec before opening the next link
        setTimeout(openTab, Math.floor(Math.random() * 5000) + 5000);
    }, delay);
}

document.getElementById("startButton").addEventListener("click", function () {
    autoClickerActive = true;
    openTab();
});

document.getElementById("stopButton").addEventListener("click", function () {
    autoClickerActive = false;
    console.log("Auto clicker stopped.");
});