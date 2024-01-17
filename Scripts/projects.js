function playVideo(videoId, imageId, videoPath) {

    var video = document.getElementById(videoId);
    var image = document.getElementById(imageId);

    image.style.display = "none";
    video.style.display = "block";

    video.src = videoPath;
    video.play();
}

