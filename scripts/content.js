function roulette() {
    var thumbnails = document.getElementsByClassName("yt-core-image");
    console.log("Loaded up YouTube Roulette!")
    for (const element in thumbnails) {
        thumbnails[element].setAttribute("src", "/images/hiddenthumbnail.png");
        console.log("Element: " + element);
    }
}