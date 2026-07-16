// PRVEFX AI Video Editor

const upload = document.getElementById("videoUpload");
const video = document.getElementById("videoPlayer");
const timeline = document.getElementById("timeline");
const currentTime = document.getElementById("currentTime");
const trimInfo = document.getElementById("trimInfo");

// Trim Variables
let trimStart = 0;
let trimEnd = 0;

// Upload Video
upload.addEventListener("change", function () {
    const file = this.files[0];

    if (file) {
        const url = URL.createObjectURL(file);
        video.src = url;
        video.load();
    }
});

// Video Ready
video.addEventListener("loadedmetadata", function () {
    timeline.max = video.duration;
    trimEnd = video.duration;

    trimInfo.innerText =
        "Start: " + formatTime(trimStart) +
        " | End: " + formatTime(trimEnd);
});

// Timeline Update
video.addEventListener("timeupdate", function () {
    timeline.value = video.currentTime;

    let min = Math.floor(video.currentTime / 60);
    let sec = Math.floor(video.currentTime % 60);

    if (sec < 10) sec = "0" + sec;

    currentTime.innerText = min + ":" + sec;
});

// Seek Timeline
timeline.addEventListener("input", function () {
    video.currentTime = timeline.value;
});

// Controls
function playVideo() {
    video.play();
}

function pauseVideo() {
    video.pause();
}

function backward() {
    video.currentTime = Math.max(0, video.currentTime - 5);
}

function forward() {
    video.currentTime = Math.min(video.duration, video.currentTime + 5);
}

// Time Format
function formatTime(seconds) {
    let min = Math.floor(seconds / 60);
    let sec = Math.floor(seconds % 60);

    if (sec < 10) sec = "0" + sec;

    return min + ":" + sec;
}

// Trim Start
function setTrimStart() {
    trimStart = video.currentTime;

    trimInfo.innerText =
        "Start: " + formatTime(trimStart) +
        " | End: " + formatTime(trimEnd);
}

// Trim End
function setTrimEnd() {
    trimEnd = video.currentTime;

    trimInfo.innerText =
        "Start: " + formatTime(trimStart) +
        " | End: " + formatTime(trimEnd);
}
