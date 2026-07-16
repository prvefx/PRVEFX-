// PRVEFX AI Video Editor

const upload = document.getElementById("videoUpload");
const player = document.getElementById("videoPlayer");
const timeline = document.getElementById("timeline");
const currentTime = document.getElementById("currentTime");

upload.addEventListener("change", function () {
    const file = this.files[0];

    if (file) {
        const url = URL.createObjectURL(file);
        player.src = url;
        player.load();
    }
});

player.addEventListener("timeupdate", function () {
    timeline.value = player.currentTime;
    timeline.max = player.duration || 0;

    let min = Math.floor(player.currentTime / 60);
    let sec = Math.floor(player.currentTime % 60);

    if (sec < 10) sec = "0" + sec;

    currentTime.innerText = min + ":" + sec;
});

timeline.addEventListener("input", function () {
    player.currentTime = timeline.value;
});

const video = document.getElementById("videoPlayer");

function playVideo() {
    video.play();
}

function pauseVideo() {
    video.pause();
}

function backward() {
    video.currentTime -= 5;
}

function forward() {
    video.currentTime += 5;
}

video.addEventListener("timeupdate", () => {
    timeline.value = video.currentTime;

    let minutes = Math.floor(video.currentTime / 60);
    let seconds = Math.floor(video.currentTime % 60);

    if (seconds < 10) seconds = "0" + seconds;

    currentTime.textContent = `${minutes}:${seconds}`;
});

video.addEventListener("loadedmetadata", () => {
    timeline.max = video.duration;
});

timeline.addEventListener("input", () => {
    video.currentTime = timeline.value;
});
