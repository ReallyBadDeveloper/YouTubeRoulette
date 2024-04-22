function roulette() {
    console.log("Loaded up YouTube Roulette!");
    var thumbnails = document.getElementsByClassName("yt-core-image");
    for (const element in thumbnails) {
        thumbnails[element].setAttribute("src", "https://github.com/ReallyBadDeveloper/YouTubeRoulette/blob/dev/images/hiddenthumbnail.png?raw=true");
        console.log("Element: " + element);
    }
    var titles = document.getElementsByClassName("ytd-rich-grid-media");
    for (const element in titles) {
        titles[element].innerHTML = "???";
        console.log("Element: " + element);
    }
}