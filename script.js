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
